import { workflow } from "@novu/framework";
import { controlSchema, payloadSchema } from "./schemas";

export const serverNotification = workflow(
    "server-notification",
    async ({ step, payload }) => {
        await step.inApp("inbox", async (control) => {
            return {
                subject: control.subject,
                body: payload.message
            }
        }
        )
    },
    {
        controlSchema,
        payloadSchema,
        tags: ["server-notification"],
    },
);
