import Button from "../common/Button"
import { studioMetrics } from "../../utils/mockData"

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <p className="eyebrow">Contemporary craft studio</p>
        <h1>Objects and surfaces that make a room feel settled.</h1>
        <p className="hero-section__copy">
          SIRPAM creates sculptural decor in clay, wood, and mixed materials for homes, boutiques, and hospitality spaces.
        </p>
        <div className="hero-section__actions">
          <Button to="/collection">Shop the collection</Button>
          <Button to="/customize" variant="ghost">
            Build a custom piece
          </Button>
        </div>
      </div>

      <div className="hero-section__visual surface surface--highlight">
        <div className="hero-card hero-card--large">
          <p className="eyebrow">Studio note</p>
          <h3>Every finish is tested in natural light before we sign off.</h3>
        </div>
        <div className="hero-card-grid">
          {studioMetrics.map((item) => (
            <article key={item.label} className="hero-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
