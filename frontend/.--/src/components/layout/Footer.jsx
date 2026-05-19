import Button from "../common/Button"
import { contactDetails, navigationLinks, socialLinks } from "../../utils/mockData"
import { createLinkHandler } from "../../utils/navigation"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__intro surface">
        <p className="eyebrow">Crafted for spaces with memory</p>
        <h2>Need a piece tailored to a room, palette, or hospitality project?</h2>
        <p>
          We design custom objects, wall reliefs, and styling sets that feel architectural, tactile, and collected over time.
        </p>
        <Button to="/customize">Start your brief</Button>
      </div>

      <div className="site-footer__grid">
        <div>
          <h3>SIRPAM</h3>
          <p>{contactDetails.location}</p>
          <p>{contactDetails.hours}</p>
        </div>
        <div>
          <h4>Explore</h4>
          <div className="footer-links">
            {navigationLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={createLinkHandler(link.path)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4>Connect</h4>
          <div className="footer-links">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}>{contactDetails.phone}</a>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
