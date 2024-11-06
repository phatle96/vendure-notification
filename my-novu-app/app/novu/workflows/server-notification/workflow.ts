import { workflow } from "@novu/framework";
import { controlSchema, payloadSchema } from "./schemas";

export const serverNotification = workflow(
    "server-notification",
    async ({ step, payload }) => {
        await step.inApp("inbox", async () => {
            return {
                subject: 'A message from Admin',
                body: payload.message
            }
        });
        await step.push('push', async () => {
            return {
                subject: 'A message from Admin',
                body: payload.message,
            };
        });
    },
    {
        payloadSchema,
        tags: ["server-notification"],
    },
);
