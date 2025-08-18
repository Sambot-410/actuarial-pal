// app/api/register/route.js
import { NextResponse } from 'next/server';

// In production, you'd save to a database (e.g., MongoDB, Prisma, etc.)
// For demo, we'll just log and return success

export async function POST(request) {
  try {
    const body = await request.json();

    // Simulate saving to database
    console.log('New Registration:', body);

    // Here you could:
    // - Save to MongoDB
    // - Send email via Nodemailer or Resend
    // - Trigger a webhook

    return NextResponse.json(
      { message: 'Registration successful! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to process registration.' },
      { status: 500 }
    );
  }
}