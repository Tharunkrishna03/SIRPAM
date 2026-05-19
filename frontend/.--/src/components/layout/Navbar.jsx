import { navigationLinks } from "../../utils/mockData"
import { createLinkHandler, normalizePath } from "../../utils/navigation"

const isActivePath = (targetPath, currentPath) => {
  if (targetPath === "/") {
    return currentPath === "/"
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}

function Navbar({ currentPath, onNavigate }) {
  const path = normalizePath(currentPath)

  return (
    <nav className="navbar" aria-label="Primary navigation">
      {navigationLinks.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className={isActivePath(link.path, path) ? "navbar__link is-active" : "navbar__link"}
          onClick={createLinkHandler(link.path, onNavigate)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
