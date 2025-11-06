"use server";

export async function contactAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const website = formData.get("website") as string; // Honeypot

  // Honeypot check
  if (website) {
    throw new Error("Bot detected");
  }

  // Basic validation
  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  // In a production environment, you would:
  // 1. Send an email using a service like Resend, SendGrid, or AWS SES
  // 2. Store the message in a database
  // 3. Rate limit the endpoint
  
  // For now, we'll just log it and return success
  // You can integrate with an email service later
  console.log("Contact form submission:", { name, email, message });

  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}

