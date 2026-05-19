import { useState } from "react"
import Button from "../common/Button"
import Input from "../common/Input"
import TextArea from "../common/TextArea"
import { submitContactForm } from "../../services/contactService"

const initialFormState = {
  name: "",
  email: "",
  projectType: "",
  message: "",
}

function ContactForm() {
  const [formValues, setFormValues] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFeedback(null)
    setError(null)

    try {
      const result = await submitContactForm(formValues)
      setFeedback(result)
      setFormValues(initialFormState)
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="surface form-panel">
      <div className="form-panel__header">
        <p className="eyebrow">Contact form</p>
        <h2>Tell us what you are sourcing.</h2>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
        />
        <Input
          label="Project type"
          name="projectType"
          value={formValues.projectType}
          onChange={handleChange}
          placeholder="Home, hospitality, gifting, retail..."
        />
        <TextArea
          label="Message"
          name="message"
          rows="6"
          className="form-grid__span"
          value={formValues.message}
          onChange={handleChange}
          required
          placeholder="Share your idea, scale, target timeline, or the piece you are interested in."
        />

        {error ? <p className="status-message status-message--error">{error}</p> : null}
        {feedback ? (
          <p className="status-message status-message--success">
            {feedback.message} Reference: {feedback.reference}
          </p>
        ) : null}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending message..." : "Send inquiry"}
        </Button>
      </form>
    </section>
  )
}

export default ContactForm
