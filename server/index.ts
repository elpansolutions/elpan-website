/**
 * Backend server for handling email functionality
 */
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface EmailRequest {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectIdea: string;
}

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Email sending endpoint
app.post("/api/send-email", async (req: express.Request, res: express.Response) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      projectIdea,
    } = req.body as EmailRequest;

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting ELPAN Solutions",
      html: `
        <h2>Thank you for reaching out to ELPAN Solutions!</h2>
        <p>We have received your project inquiry and will get back to you within 24 hours.</p>
        <h3>Your submitted details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Idea:</strong> ${projectIdea}</p>
        <br>
        <p>Best regards,</p>
        <p>ELPAN Solutions Team</p>
      `,
    };

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Inquiry from ${name} - ${company}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Idea:</strong> ${projectIdea}</p>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 