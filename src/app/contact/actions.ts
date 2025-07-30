"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });
  
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
    };
  }
  
  // Here you would typically send an email, save to a database, etc.
  // We'll simulate a delay to mimic a network request.
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Form data received:", validatedFields.data);
  
  return {
    success: true,
    message: "Thank you for your message! We will get back to you shortly.",
  };
}
