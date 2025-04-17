"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

// // Validation des données avec Zod
const emailSchema = z.object({
    email: z.string().email("Entrez une adresse e-mail valide pour que je puisse vous répondre !"),
    message: z.string().min(10, "Dites-moi en un peu plus ! (min. 10 caractères)"),
});

export async function sendEmail({ email, message, subject }: { email: string; message: string, subject:string }) {
    // Vérifier si les données sont valides
    const validation = emailSchema.safeParse({ email, message });

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
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
                <h2 style="color: #333;">Nouveau message de contact</h2>
                <p><strong>Email :</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
                <hr style="border: none; border-top: 1px solid #ddd;" />
                <p style="white-space: pre-line; color: #555;"><strong>Message :</strong><br>${message}</p>
                <hr style="border: none; border-top: 1px solid #ddd;" />
                <p style="font-size: 14px; color: #888;">Merci de vérifier et de répondre rapidement.</p>
            </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Email send error:", error);
        return { success: false, error: "Failed to send email" };
    }
}