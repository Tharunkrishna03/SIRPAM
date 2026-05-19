import { simulateRequest } from "./api"

export const submitContactForm = (payload) =>
  simulateRequest(() => {
    if (!payload.name || !payload.email || !payload.message) {
      throw new Error("Please complete the required contact fields.")
    }

    return {
      status: "received",
      reference: `SIR-${Date.now().toString().slice(-6)}`,
      message:
        "Thanks for reaching out. We will reply with availability and next steps within one business day.",
    }
  }, 420)
