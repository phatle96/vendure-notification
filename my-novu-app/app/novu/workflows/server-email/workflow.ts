import { workflow } from "@novu/framework";
import { controlSchema, payloadSchema } from "./schemas";

export const serverEmail = workflow(
    "server-email",
    async ({ step, payload }) => {
        await step.email("send-email", async () => {
            return {
                subject: payload.subject ?? "You got a email!",
                body: payload.message
            }
        });
    },
    {
        payloadSchema,
        tags: ["server-email"],
    },
);
