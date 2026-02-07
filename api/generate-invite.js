import { Redis } from '@upstash/redis';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Generate random token
  const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // Store email -> token mapping
  await redis.set(`invite:${email}`, token);

  // Store token -> email for reverse lookup
  await redis.set(`token:${token}`, email);

  // Send email with invite link
  const inviteUrl = `${process.env.VERCEL_URL || 'http://localhost:5173'}/invite/${token}`;

  try {
    // Read and populate invitation template
    const templatePath = path.join(process.cwd(), 'email-templates', 'invitation.html');
    let htmlContent = fs.readFileSync(templatePath, 'utf8');
    htmlContent = htmlContent.replace('{{INVITE_URL}}', inviteUrl);

    await resend.emails.send({
      from: 'invites@jordies40party.com', 
      to: email,
      subject: '✨ You\'re Invited: Jordie\'s 40th Getaway!',
      template_id: 'birthday-getaway-invitation', 
      template_variables: { 
        INVITE_URL: inviteUrl
      }
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}