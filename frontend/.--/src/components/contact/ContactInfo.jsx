import { contactDetails, socialLinks } from "../../utils/mockData"

function ContactInfo() {
  return (
    <section className="surface contact-info">
      <p className="eyebrow">Studio details</p>
      <h2>Reach the atelier directly.</h2>
      <div className="contact-info__list">
        <div>
          <strong>Email</strong>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
        </div>
        <div>
          <strong>Phone</strong>
          <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}>{contactDetails.phone}</a>
        </div>
        <div>
          <strong>Location</strong>
          <span>{contactDetails.location}</span>
        </div>
        <div>
          <strong>Studio hours</strong>
          <span>{contactDetails.hours}</span>
        </div>
      </div>

      <div className="contact-info__social">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactInfo
