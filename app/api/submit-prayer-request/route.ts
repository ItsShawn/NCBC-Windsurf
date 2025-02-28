import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, request, isConfidential } = body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'pastor@mynewcanaan.org',
      subject: `Prayer Request from ${name}${isConfidential ? ' (Confidential)' : ''}`,
      text: `
Prayer Request Details:
----------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Confidential: ${isConfidential ? 'Yes' : 'No'}

Prayer Request:
${request}
      `,
      html: `
        <h2>Prayer Request Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Confidential:</strong> ${isConfidential ? 'Yes' : 'No'}</p>
        <h3>Prayer Request:</h3>
        <p>${request.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Prayer request submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting prayer request:', error);
    return NextResponse.json({ error: 'Failed to submit prayer request' }, { status: 500 });
  }
}
