const clonePayload = (value) => {
  if (typeof structuredClone === "function") {
    return structuredClone(value)
  }

  return JSON.parse(JSON.stringify(value))
}

export const simulateRequest = (resolver, latency = 280) =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      try {
        resolve(clonePayload(resolver()))
      } catch (error) {
        reject(error)
      }
    }, latency)
  })
