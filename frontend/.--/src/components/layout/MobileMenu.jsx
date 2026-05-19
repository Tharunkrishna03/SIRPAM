import Button from "../common/Button"
import { navigationLinks } from "../../utils/mockData"
import { createLinkHandler, normalizePath } from "../../utils/navigation"

const isActivePath = (targetPath, currentPath) => {
  if (targetPath === "/") {
    return currentPath === "/"
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}

function MobileMenu({ isOpen, onClose, currentPath }) {
  if (!isOpen) {
    return null
  }

  const path = normalizePath(currentPath)

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true">
      <div className="mobile-menu__backdrop" onClick={onClose}></div>
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <div>
            <p className="eyebrow">Navigate</p>
            <h3>Explore the studio</h3>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close menu">
            x
          </button>
        </div>

        <div className="mobile-menu__links">
          {navigationLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={isActivePath(link.path, path) ? "mobile-menu__link is-active" : "mobile-menu__link"}
              onClick={createLinkHandler(link.path, onClose)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button to="/customize" variant="solid" fullWidth onClick={onClose}>
          Start a custom brief
        </Button>
      </div>
    </div>
  )
}

export default MobileMenu
