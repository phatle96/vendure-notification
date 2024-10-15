import { serve } from "@novu/framework/next";
import { WelcomeOnboardingEmail } from "../../novu/workflows";
import { orderCompleted } from "@/app/novu/workflows/order-completed";
import { ServerNotification } from "../../novu/workflows";

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [
    WelcomeOnboardingEmail.welcomeOnboardingEmail,
    orderCompleted,
    ServerNotification.serverNotification,
  ],
});
