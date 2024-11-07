import { z } from "zod";

export const payloadSchema = z.object({
    subject: z.string().default("Hello Subject"),
    message: z.string().default("Hello User"),
})

export const controlSchema = z.object({

})