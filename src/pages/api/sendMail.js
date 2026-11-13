import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10kb",
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({message: "Method not allowed"});
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({message: "Invalid request body"});
  }

  if (typeof body.botField === "string" && body.botField.trim()) {
    return res.status(200).json({message: "Email sent successfully!"});
  }

  if (
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string"
  ) {
    return res.status(400).json({message: "Missing required fields"});
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (!name || !email || !message) {
    return res.status(400).json({message: "Missing required fields"});
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({message: "One or more fields are too long"});
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({message: "Please provide a valid email address"});
  }

  const safeName = name.replace(/[\r\n]+/g, " ");

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
      subject: `Portfolio Message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({message: "Email sent successfully!"});
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({message: "Failed to send email."});
  }
}
