import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API Route for sending email
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, businessName, phone, email, service, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // Read SMTP configuration from environment
      const smtpEmail = process.env.SMTP_EMAIL;
      const smtpPassword = process.env.SMTP_PASSWORD;

      if (!smtpEmail || !smtpPassword) {
        return res.status(500).json({ 
          error: "Email service not configured. Please set SMTP_EMAIL and SMTP_PASSWORD." 
        });
      }

      // Create Nodemailer transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpEmail,
          pass: smtpPassword,
        },
      });

      // Email options
      const mailOptions = {
        from: `"${name}" <${smtpEmail}>`,
        to: "brandadmedias@gmail.com", // Send to the specific brand email
        replyTo: email,
        subject: `New Enquiry from ${businessName || name} - ${service || 'General'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Requested:</strong> ${service || 'None selected'}</p>
          <br/>
          <h3>Message:</h3>
          <p>${message.replace(/\\n/g, '<br/>')}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);
      
      res.status(200).json({ success: true, message: "Enquiry sent successfully!" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
