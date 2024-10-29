import { z } from "zod";

export const payloadSchema = z.object({
    message: z.string().default("Hello User"),
})

export const controlSchema = z.object({
    subject: z.string().default("User")
})