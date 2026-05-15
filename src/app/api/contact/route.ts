import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  service?: string;
  date?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 503 }
      );
    }

    const data: ContactFormData = await request.json();

    const { firstName, lastName, email, service, date, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL || 'julianna6380@gmail.com';

    // Send email to Julianna
    await sgMail.send({
      to: adminEmail,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@pastelmakeupandstyle.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px;">
          <h2 style="color: rgb(255, 174, 215);">New Contact Inquiry</h2>
          
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          ${date ? `<p><strong>Event Date:</strong> ${date}</p>` : ''}
          
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 2rem 0;" />
          <p style="font-size: 0.9rem; color: #666;">Reply directly to ${email} or use your email client to respond.</p>
        </div>
      `,
    });

    // Send confirmation email to user
    await sgMail.send({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@pastelmakeupandstyle.com',
      subject: 'We received your inquiry — Pastel Makeup & Style',
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px;">
          <p>Hi ${firstName},</p>
          
          <p>Thank you for reaching out to Pastel Makeup & Style! We received your inquiry and will get back to you within 24–48 hours.</p>
          
          <p>If you have any immediate questions, feel free to reach out on Instagram: <strong>@pastelmakeupandstyle</strong></p>
          
          <p>Looking forward to working with you!</p>
          
          <p style="margin-top: 2rem;">— Julianna & the Pastel team</p>
          
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 2rem 0;" />
          <p style="font-size: 0.85rem; color: #999;">This is an automated confirmation. Please do not reply to this email.</p>
        </div>
      `,
    }).catch((err) => {
      console.error('User confirmation email failed:', err);
      // Don't fail the entire request if confirmation email fails
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
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
