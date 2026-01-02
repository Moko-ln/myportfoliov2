"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// // Validation des données avec Zod
const emailSchema = z.object({
    email: z.string().email(),
    message: z.string().min(10),
    subject: z.string().min(2),
    fullname: z.string(),
});

export async function sendEmail({ email, message, subject, fullname }: { email: string; message: string, subject:string, fullname:string }) {
    // Vérifier si les données sont valides
    const validation = emailSchema.safeParse({ email, message, subject, fullname });

    if (!validation.success) {
        return { success: false, error: validation.error.errors[0].message };
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `<${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: subject,
            replyTo: email,

            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border-radius: 10px; background-color: #111; color: #f5f5f5;">
                    <h2 style="color: #fff; margin-bottom: 16px;">📩 Nouveau message de ${fullname}</h2>

                    <p style="margin: 0 0 12px 0; font-size: 15px;">
                        <strong style="color: #ccc;">Sujet :</strong><br />
                        <span style="color: #fff;">${subject}</span>
                    </p>

                    <p style="margin: 0 0 12px 0; font-size: 15px;">
                        <strong style="color: #ccc;">Email :</strong><br />
                        <a href="mailto:${email}" style="color: #4da6ff; text-decoration: none;">${email}</a>
                    </p>

                    <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />

                    <p style="white-space: pre-line; font-size: 15px; line-height: 1.6;">
                        <strong style="color: #ccc;">Message :</strong><br />
                        <span style="color: #e0e0e0;">${message}</span>
                    </p>

                    <hr style="border: none; border-top: 1px solid #333; margin: 20px 0;" />

                    <p style="font-size: 13px; color: #777; text-align: center;">
                        Merci d'avoir vérifié ce message. Répondez rapidement pour ne pas perdre le contact.  
                    </p>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Email send error:", error);
        return { success: false, error: "Failed to send email" };
    }
}