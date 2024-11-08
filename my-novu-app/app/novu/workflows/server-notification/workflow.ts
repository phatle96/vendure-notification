import { workflow } from "@novu/framework";
import { controlSchema, payloadSchema } from "./schemas";

export const serverNotification = workflow(
    "server-notification",
    async ({ step, payload }) => {
        await step.inApp("inbox", async () => {
            return {
                subject: payload.subject ?? "You got a message!",
                body: payload.message
            }
        });
        await step.push('push', async () => {
            return {
                subject: payload.subject ?? "You got a message!",
                body: payload.message,
            };
        });
    },
    {
        payloadSchema,
        tags: ["server-notification"],
    },
);
