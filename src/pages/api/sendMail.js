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
    // 1️⃣ Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL, // e.g. chbilalc627@gmail.com
        pass: process.env.MY_APP_PASSWORD, // App password from Gmail
      },
    });

    // 2️⃣ Email content
    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: `Portfolio Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // 3️⃣ Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({message: "Email sent successfully!"});
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({message: "Failed to send email."});
  }
}
