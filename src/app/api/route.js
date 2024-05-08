// import nodemailer from "nodemailer";

// export default async function ContactAPI(req,res)  {
//   const {name, email, subject, message} = req.body

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

//     const mail = await transporter.sendMail({
//       from: user,
//       to: "wiktor.stanislaw.cwikla@gmail.com",
//       replyTo: email,
//       subject: `Prośba kontaktu od ${name}`,
//       html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Subject: ${subject}</p>
//       <p>Message: ${message}</p>
//       `,
//     });

//     console.log("Message sent:", mail.messageId);

//     return res.status(200).json({message: "success"});
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({
//       message: "Could not send the email. Your message was not sent.",
//     });
//   }
// }


import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
  try {
    // Extracting data from request body
    const { name, email, subject, message } = req.body;

    // Ensure required fields are provided
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.user, // Your Gmail email address
        pass: process.env.pass, // Your Gmail password (or app-specific password)
      },
    });

    // Define mail options
    const mailOptions = {
      from: process.env.user, // Sender address
      to: "wiktor.stanislaw.cwikla@gmail.com", // Receiver address
      replyTo: email, // Reply-to address
      subject: `Prośba kontaktu od ${name}`, // Email subject
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send mail
    const mailInfo = await transporter.sendMail(mailOptions);
    console.log("Message sent:", mailInfo.messageId);

    // Respond with success message
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    // Respond with error message
    return res.status(500).json({ message: "Failed to send email." });
  }
}

