import ContactForm from "../components/contact/ContactForm"
import ContactInfo from "../components/contact/ContactInfo"
import SectionTitle from "../components/common/SectionTitle"

function Contact() {
  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Contact the studio"
        title="Sourcing help, commissions, hospitality projects, and styling sets."
        description="Reach out if you need lead times, custom dimensions, finish guidance, or help selecting the right piece for a room."
      />

      <div className="contact-layout">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
