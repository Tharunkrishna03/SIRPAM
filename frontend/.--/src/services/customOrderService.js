import { simulateRequest } from "./api"

export const submitCustomOrder = (payload) =>
  simulateRequest(() => {
    if (!payload.name || !payload.email || !payload.projectType) {
      throw new Error("Please complete the required custom order details.")
    }

    return {
      status: "queued",
      requestId: `CO-${Date.now().toString().slice(-5)}`,
      message:
        "Your custom request has been queued for review. Expect a concept reply with finish guidance shortly.",
    }
  }, 480)
