// utils/sendEmail.js
import {Resend} from "resend"
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to,
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error('❌ Email Send Error:', error);
    } else {
      console.log('✅ Email Sent:', data);
    }
  } catch (err) {
    console.error('❌ Unexpected Error:', err);
  }
};

export default sendEmail;
