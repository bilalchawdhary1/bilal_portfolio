import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({message: "Method not allowed"});
  }

  const {name, email, message} = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({message: "Missing required fields"});
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return res.status(200).json({message: "Email sent successfully!"});
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({message: "Failed to send email."});
  }
}
