#!/usr/bin/env node

// Quick test script for your authentication system
// Run with: node test-setup.js

const https = require('https');

const BASE_URL = process.env.VERCEL_URL || 'http://localhost:5173';

// Test data
const testEmail = 'test@example.com';
const testToken = 'test-token-123';

console.log('🧪 Testing Authentication System\n');

// Test 1: Generate Invite
console.log('1. Testing /api/generate-invite...');
const generateData = JSON.stringify({ email: testEmail });

const req1 = https.request(`${BASE_URL}/api/generate-invite`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': generateData.length
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      console.log('✅ Generate Invite Response:', response);
    } catch (e) {
      console.log('❌ Generate Invite Error:', data);
    }
  });
});

req1.on('error', (e) => {
  console.log('❌ Generate Invite Network Error:', e.message);
});

req1.write(generateData);
req1.end();

// Test 2: Send OTP (after a delay)
setTimeout(() => {
  console.log('\n2. Testing /api/send-otp...');
  const otpData = JSON.stringify({ token: testToken, email: testEmail });

  const req2 = https.request(`${BASE_URL}/api/send-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': otpData.length
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log('✅ Send OTP Response:', response);
      } catch (e) {
        console.log('❌ Send OTP Error:', data);
      }
    });
  });

  req2.on('error', (e) => {
    console.log('❌ Send OTP Network Error:', e.message);
  });

  req2.write(otpData);
  req2.end();
}, 2000);

// Test 3: Verify OTP (after another delay)
setTimeout(() => {
  console.log('\n3. Testing /api/verify-otp...');
  const verifyData = JSON.stringify({ email: testEmail, otp: '123456' }); // Use actual OTP from email

  const req3 = https.request(`${BASE_URL}/api/verify-otp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': verifyData.length
    }
  }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        console.log('✅ Verify OTP Response:', response);
        console.log('\n🎉 Setup test complete! Check the responses above.');
      } catch (e) {
        console.log('❌ Verify OTP Error:', data);
      }
    });
  });

  req3.on('error', (e) => {
    console.log('❌ Verify OTP Network Error:', e.message);
  });

  req3.write(verifyData);
  req3.end();
}, 4000);