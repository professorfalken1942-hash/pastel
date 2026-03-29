import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const data: ContactFormData = await request.json();

    const { firstName, lastName, email, service, date, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Julianna
    const adminEmailResult = await resend.emails.send({
      from: 'Pastel Inquiries <onboarding@resend.dev>', // Replace with your verified email
      to: process.env.ADMIN_EMAIL || 'julianna@pastelstyle.art',
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

    if (adminEmailResult.error) {
      console.error('Admin email send failed:', adminEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Pastel Makeup & Style <onboarding@resend.dev>', // Replace with your verified email
      to: email,
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
    });

    if (userEmailResult.error) {
      console.error('User confirmation email failed:', userEmailResult.error);
      // Don't fail the entire request if confirmation email fails
    }

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
