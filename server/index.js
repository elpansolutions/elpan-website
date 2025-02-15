/**
 * Backend server for handling email functionality
 * @typedef {Object} EmailRequest
 * @property {string} name - The name of the sender
 * @property {string} company - The company name
 * @property {string} email - The email address
 * @property {string} phone - The phone number
 * @property {string} projectIdea - The project description
 */

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Read and encode logo image
const logoPath = path.join(__dirname, "../src/assets/images/Logo/ELPAN SOLUTIONS.png");
const logoBase64 = fs.readFileSync(logoPath).toString("base64");

// Email signature template
const emailSignature = `
  <div style="margin-top: 20px; border-top: 2px solid #2c5282; padding-top: 20px;">
    <div style="text-align: center; margin-bottom: 15px;">
      <img src="data:image/png;base64,${logoBase64}" alt="ELPAN Solutions" style="width: 200px; height: auto;">
    </div>
    <p style="margin: 0; text-align: center;"><strong style="color: #2c5282;">ELPAN Solutions</strong></p>
    <p style="margin: 5px 0; text-align: center;">Where Challenges meet Solutions</p>
    <div style="margin-top: 10px; text-align: center;">
      <p style="margin: 2px 0;">📞 +91 89039 59099 | +91 97894 04593</p>
      <p style="margin: 2px 0;">✉️ <a href="mailto:enquire@elpan.in" style="color: #2c5282; text-decoration: none;">enquire@elpan.in</a></p>
      <p style="margin: 2px 0;">🌐 <a href="https://www.elpan.in" style="color: #2c5282; text-decoration: none;">www.elpan.in</a></p>
    </div>
    <p style="margin-top: 10px; font-size: 0.8em; color: #666; text-align: center;">
      This email and any files transmitted with it are confidential and intended solely for the use of the individual or entity to whom they are addressed.
    </p>
  </div>
`;

// Create Nodemailer transporter with error handling
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false // Accept self-signed certificates
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection error:", error);
    console.log("Please check your email credentials and internet connection");
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

/**
 * Email sending endpoint
 * @param {express.Request} req - Express request object
 * @param {express.Response} res - Express response object
 */
app.post("/api/send-email", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
      projectIdea,
    } = req.body;

    // Validate required fields
    if (!name || !company || !email || !phone || !projectIdea) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Email to user
    const userMailOptions = {
      from: `ELPAN Solutions <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting ELPAN Solutions",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5282;">Thank you for reaching out to ELPAN Solutions!</h2>
          <p>We have received your project inquiry and will get back to you within 24 hours.</p>
          <h3 style="color: #2c5282;">Your submitted details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Project Idea:</strong> ${projectIdea}</p>
          <br>
          <p>Best regards,</p>
          ${emailSignature}
        </div>
      `,
    };

    // Email to admin
    const adminMailOptions = {
      from: `ELPAN Solutions <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Project Inquiry from ${name} - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c5282;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Idea:</strong> ${projectIdea}</p>
          ${emailSignature}
        </div>
      `,
    };

    // Send emails with individual error handling
    const [userEmailResult, adminEmailResult] = await Promise.allSettled([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    // Check for partial failures
    if (userEmailResult.status === "rejected" && adminEmailResult.status === "rejected") {
      throw new Error("Failed to send both emails");
    }

    if (userEmailResult.status === "rejected") {
      console.error("Failed to send user email:", userEmailResult.reason);
      return res.status(500).json({ error: "Failed to send confirmation email" });
    }

    if (adminEmailResult.status === "rejected") {
      console.error("Failed to send admin email:", adminEmailResult.reason);
      // Still return success to user since they got their confirmation
      return res.status(200).json({ message: "Request received successfully" });
    }

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ error: "Failed to process your request" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 