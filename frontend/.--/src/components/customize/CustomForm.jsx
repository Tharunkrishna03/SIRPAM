import { useState } from "react"
import Button from "../common/Button"
import Input from "../common/Input"
import TextArea from "../common/TextArea"
import FileUpload from "./FileUpload"
import { customizationOptions } from "../../utils/mockData"
import { submitCustomOrder } from "../../services/customOrderService"

const initialFormState = {
  name: "",
  email: "",
  projectType: customizationOptions.projectTypes[0],
  material: customizationOptions.materials[0],
  budget: customizationOptions.budgets[1],
  timeline: customizationOptions.timelines[1],
  notes: "",
}

function CustomForm() {
  const [formValues, setFormValues] = useState(initialFormState)
  const [files, setFiles] = useState([])
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
      const result = await submitCustomOrder({
        ...formValues,
        attachments: files.map((file) => ({
          name: file.name,
          size: file.size,
          type: file.type,
        })),
      })

      setFeedback(result)
      setFormValues(initialFormState)
      setFiles([])
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="surface form-panel">
      <div className="form-panel__header">
        <p className="eyebrow">Custom order form</p>
        <h2>Share your space, scale, and finish direction.</h2>
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

        <label className="field" htmlFor="projectType">
          <span className="field__label">Project type</span>
          <select
            id="projectType"
            className="field__control"
            name="projectType"
            value={formValues.projectType}
            onChange={handleChange}
          >
            {customizationOptions.projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="material">
          <span className="field__label">Preferred material</span>
          <select
            id="material"
            className="field__control"
            name="material"
            value={formValues.material}
            onChange={handleChange}
          >
            {customizationOptions.materials.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="budget">
          <span className="field__label">Budget range</span>
          <select
            id="budget"
            className="field__control"
            name="budget"
            value={formValues.budget}
            onChange={handleChange}
          >
            {customizationOptions.budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="timeline">
          <span className="field__label">Timeline</span>
          <select
            id="timeline"
            className="field__control"
            name="timeline"
            value={formValues.timeline}
            onChange={handleChange}
          >
            {customizationOptions.timelines.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <TextArea
          label="Project notes"
          name="notes"
          rows="6"
          value={formValues.notes}
          onChange={handleChange}
          placeholder="Share dimensions, styling references, room mood, or installation needs."
          className="form-grid__span"
        />

        <div className="form-grid__span">
          <FileUpload files={files} onFilesChange={setFiles} />
        </div>

        {error ? <p className="status-message status-message--error">{error}</p> : null}
        {feedback ? (
          <p className="status-message status-message--success">
            {feedback.message} Request ID: {feedback.requestId}
          </p>
        ) : null}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending brief..." : "Send custom brief"}
        </Button>
      </form>
    </section>
  )
}

export default CustomForm
