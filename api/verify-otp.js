import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required' });
  }

  // Get stored OTP
  const storedOtp = await redis.get(`otp:${email}`);
  if (!storedOtp || storedOtp !== otp) {
    return res.status(403).json({ error: 'Invalid OTP' });
  }

  // OTP verified, delete it
  await redis.del(`otp:${email}`);

  // Generate session token (simple random string)
  const sessionToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  // Store session with 24 hour expiration
  await redis.set(`session:${sessionToken}`, email, { ex: 86400 });

  res.status(200).json({ success: true, sessionToken });
}