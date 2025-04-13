import asyncHandler from "express-async-handler";
import sendEmail from "../utilis/emailService.js";



// POST /api/notifications/send
export const sendNotificationToUser = asyncHandler(async (req, res) => {
  const { email, message } = req.body;

  // 🛡️ Validate inputs
  if (!email || !message) {
    return res.status(400).json({ success: false, error: "Email and message are required." });
  }

  // 🧠 Prepare email content
  const subject = "🔔 Notification from Insurance Wala";
  const htmlContent = `
    <div>
      <p>Hello,</p>
      <p>${message}</p>
      <p>Regards,<br><strong>Insurance Wala Team</strong></p>
    </div>
  `;

  // 📤 Send Email
  try {
    await sendEmail(email, subject, htmlContent);
    res.status(200).json({ success: true, message: "Notification sent successfully." });
  } catch (error) {
    console.error("❌ Email send failed:", error);
    res.status(500).json({ success: false, error: "Failed to send notification." });
  }
});
