export const normalizePath = (path) => {
  if (!path || path === "/") {
    return "/"
  }

  return path.endsWith("/") ? path.slice(0, -1) : path
}

export const navigate = (path, options = {}) => {
  const targetPath = normalizePath(path)
  const currentPath = normalizePath(window.location.pathname)

  if (targetPath === currentPath) {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }

  if (options.replace) {
    window.history.replaceState({}, "", targetPath)
  } else {
    window.history.pushState({}, "", targetPath)
  }

  window.dispatchEvent(new Event("sirpam:navigate"))
}

export const createLinkHandler = (path, callback) => (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return
  }

  event.preventDefault()
  callback?.(event)
  navigate(path)
}
