import { workflow } from "@novu/framework";
import { controlSchema, payloadSchema } from "./schemas";

export const templateWorkflow = workflow(
    "server-notification",
    async ({ step, payload }) => {


    },
    {
        payloadSchema,
    },
);
