import SectionTitle from "../common/SectionTitle"
import { testimonials } from "../../utils/mockData"

function Testimonials() {
  return (
    <section className="page-section">
      <SectionTitle
        eyebrow="Client notes"
        title="Pieces that feel lived with from day one."
        description="Interior stylists, homeowners, and hospitality teams trust the studio for work that brings mood, texture, and longevity."
      />

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="surface testimonial-card">
            <p className="testimonial-card__quote">"{testimonial.quote}"</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
