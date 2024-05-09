import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const {name, email, subject, message} = req.body;

  const user = process.env.user;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: process.env.pass,
    },
  });

  try {

    const mail = await transporter.sendMail({
      from: user,
      to: "wiktor.stanislaw.cwikla@gmail.com",
      replyTo: email,
      subject: `Prośba kontaktu od ${name}`,
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Subject: ${subject}</p>
      <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent:", mail.messageId);

    return res.status(200).json({message: "success"});
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Could not send the email. Your message was not sent.",
    });
  }
}