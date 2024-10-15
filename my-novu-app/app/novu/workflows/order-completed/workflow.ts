import { workflow } from "@novu/framework";
import { emailControlSchema, payloadSchema } from "./schemas";

export const orderCompleted = workflow(
    "order-completed",
    async ({ step, payload }) => {

    },
    {
        payloadSchema,
    },
);
