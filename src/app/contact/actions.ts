
"use server";

import * as z from "zod";
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
  recaptcha: z.string().min(1),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    recaptcha: formData.get("recaptcha"),
  });
  
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
    };
  }

  const { name, email, subject, message, recaptcha } = validatedFields.data;

  // Verify reCAPTCHA
  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptcha}`;

  try {
    const recaptchaResponse = await fetch(recaptchaUrl, { method: "POST" });
    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return {
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      };
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      message: "Something went wrong with reCAPTCHA verification.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
    subject: `Contact Form: ${subject}`,
    html: `
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: hsl(16, 89%, 53%); color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Name:</td>
              <td style="padding: 12px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Email:</td>
              <td style="padding: 12px 0;">
                <a href="mailto:${email}" style="color: hsl(16, 89%, 53%); text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Subject:</td>
              <td style="padding: 12px 0;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Message:</td>
              <td style="padding: 12px 0;">
                <div style="white-space: pre-wrap; background-color: #f9f9f9; border-radius: 4px; padding: 12px;">${message.replace(/\n/g, '<br>')}</div>
              </td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f7f7f7; padding: 12px; text-align: center; font-size: 12px; color: #888;">
          This email was sent from the contact form on your website.
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Thank you for your message! We will get back to you shortly.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
