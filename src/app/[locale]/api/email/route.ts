"use server"

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { name, email, subject, message } = await request.json();

    const user = process.env.user;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.pass,
      },
    });

    const mailOption = {
      from: user,
      to: 'wiktor.stanislaw.cwikla@gmail.com',
      replyTo: email,
      subject: `Prośba kontaktu od ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Subject: ${subject}</p>
      <p>Message: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: 'Email sent Successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
  }
}
