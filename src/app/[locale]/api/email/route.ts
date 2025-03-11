"use server"

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    const user = process.env.user_prod;
<<<<<<< HEAD
    const pass = process.env.pass_prod;
=======
>>>>>>> 2aa329f87700fdc987ed6a7c0828e24bdf4c638f

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: user,
<<<<<<< HEAD
        pass: pass,
=======
        pass: process.env.pass_prod,
>>>>>>> 2aa329f87700fdc987ed6a7c0828e24bdf4c638f
      },
    });

    const mailOption = {
      from: user,
      to: 'katarzynakuta85@gmail.com',
      replyTo: email,
      subject: `Prośba kontaktu od ${name}`,
      html: `
      <p>Imię Nazwisko: ${name}</p>
      <p>Email: ${email}</p>
      <p>Temat: ${subject}</p>
      <p>Wiadomość: ${message}</p>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: 'Email sent Successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to Send Email' }, { status: 500 });
  }
}
