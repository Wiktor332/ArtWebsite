// "use server";

// import { Request, Response, NextFunction } from 'express';
// import { NextRequest, NextResponse } from "next/server";
import { response } from "express";
import { request } from "express";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// export async function POST() {
//   const {name, email, subject, message} = request.body;

//   const user = process.env.user;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: user,
//       pass: process.env.pass,
//     },
//   });

//   try {

    // const mail = await transporter.sendMail({
    //   from: user,
    //   to: "wiktor.stanislaw.cwikla@gmail.com",
    //   replyTo: email,
    //   subject: `Prośba kontaktu od ${name}`,
    //   html: `
    //   <p>Name: ${name}</p>
    //   <p>Email: ${email}</p>
    //   <p>Subject: ${subject}</p>
    //   <p>Message: ${message}</p>
    //   `,
    // });

//     console.log("Message sent:", mail.messageId);

//     return response.status(200).json({message: "success"});
//   } catch (error) {
//     console.log(error)
//     response.status(500).json({
//       message: "Could not send the email. Your message was not sent.",
//     });
//   }
// }

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.pass,
      }
    })

    const mailOption = {
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
    }

    await transporter.sendMail(mailOption)

    return NextResponse.json({ message: "Email sent Successfully"}, { status: 200 })
  } catch (error) {
      return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}

