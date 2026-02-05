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

  const { token, email } = req.body;

  if (!token || !email) {
    return res.status(400).json({ error: 'Token and email are required' });
  }

  // Verify token exists and matches email
  const storedEmail = await redis.get(`token:${token}`);
  if (!storedEmail || storedEmail !== email) {
    return res.status(403).json({ error: 'Invalid token or email' });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP with 10 minute expiration
  await redis.set(`otp:${email}`, otp, { ex: 600 });

  // Send OTP email
  try {
    // Read and populate OTP template
    const templatePath = path.join(process.cwd(), 'email-templates', 'otp.html');
    let htmlContent = fs.readFileSync(templatePath, 'utf8');
    htmlContent = htmlContent.replace('{{OTP_CODE}}', otp);

    await resend.emails.send({
      from: 'auth@jordies40party.com', // Replace with your verified domain
      to: email,
      subject: '🔐 Your Secure Access Code - Jordie\'s 40th Getaway',
      template_id: 'jordies-otp', 
      template_variables: { 
        OTP_CODE: otp
      }
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('OTP email send error:', error);
    res.status(500).json({ error: 'Failed to send OTP' });
  }
}