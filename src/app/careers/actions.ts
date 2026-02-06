"use server";

import * as z from "zod";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  role: z.string().min(1),
  referralSource: z.string(),
  resume: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file.type),
      ".pdf, .doc, and .docx files are accepted."
    ),
  recaptcha: z.string().min(1),
});

export async function submitApplicationForm(
  prevState: any,
  formData: FormData
) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    role: formData.get("role"),
    referralSource: formData.get("referralSource"),
    resume: formData.get("resume"),
    recaptcha: formData.get("recaptcha"),
  });

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
    };
  }

  const { name, email, phone, role, resume, recaptcha, referralSource } =
    validatedFields.data;

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
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const resumeBuffer = Buffer.from(await resume.arrayBuffer());

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.CONTACT_FORM_RECIPIENT_EMAIL,
    subject: `New Application for ${role}`,
    html: `
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: hsl(16, 89%, 53%); color: #ffffff; padding: 20px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">New Job Application</h2>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Applying for:</td>
              <td style="padding: 12px 0; font-weight: bold; font-size: 1.1em;">${role}</td>
            </tr>
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
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Phone:</td>
              <td style="padding: 12px 0;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Heard From:</td>
              <td style="padding: 12px 0;">${referralSource || "N/A"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 14px; color: #555;">
            The candidate's resume is attached to this email.
          </p>
        </div>
        <div style="background-color: #f7f7f7; padding: 12px; text-align: center; font-size: 12px; color: #888;">
          This email was sent from the careers page on your website.
        </div>
      </div>
    `,
    attachments: [
      {
        filename: resume.name,
        content: resumeBuffer,
        contentType: resume.type,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message:
        "Your application has been submitted successfully! We will get back to you shortly.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message:
        "Something went wrong while sending your application. Please try again later.",
    };
  }
}
