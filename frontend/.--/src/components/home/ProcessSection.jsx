import SectionTitle from "../common/SectionTitle"
import { processSteps } from "../../utils/mockData"

function ProcessSection() {
  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="How we work"
        title="A thoughtful studio process from concept to placement."
        description="Whether you order a ready-made piece or commission something custom, the experience stays tactile, collaborative, and clear."
      />

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <article key={step.title} className="surface process-card">
            <span className="process-card__number">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProcessSection
