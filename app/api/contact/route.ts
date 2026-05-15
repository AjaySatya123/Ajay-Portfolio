import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || '');

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to you (recipient)
    const ownerEmailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'vetshaajay@gmail.com', // Must match Resend verified email
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f0ff; border-bottom: 2px solid #00f0ff; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 3px;">${message}</p>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form. Reply directly to ${email} to respond.
          </p>
        </div>
      `,
    });

    if (ownerEmailResponse.error) {
      console.error('Error sending owner email:', ownerEmailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to the sender
    const confirmationEmailResponse = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: email,
      subject: 'Message Received - Vetsha Ajay Satya Sai Kumar',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00f0ff;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>I've received your message and I'll get back to you as soon as possible. I appreciate you taking the time to reach out!</p>
          
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your Message Summary:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 10px; border-radius: 3px;">${message.substring(0, 200)}${message.length > 200 ? '...' : ''}</p>
          </div>

          <p>Best regards,<br/>Vetsha Ajay Satya Sai Kumar</p>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    if (confirmationEmailResponse.error) {
      console.error('Error sending confirmation email:', confirmationEmailResponse.error);
      // Don't fail the request, as the main email was sent
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Email sent successfully!'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
