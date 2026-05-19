import SectionTitle from "../common/SectionTitle"
import { processSteps } from "../../utils/mockData"

function StepProcess() {
  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Commission flow"
        title="A clear process for one-off pieces and scaled styling sets."
        description="We help you move from inspiration to a finished object with material guidance, milestone check-ins, and placement advice."
      />

      <div className="step-process">
        {processSteps.map((step) => (
          <article key={step.title} className="step-process__item">
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StepProcess
