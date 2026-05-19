import Button from "../components/common/Button"

function NotFound({
  title = "The page you opened has drifted out of view.",
  description = "Let us get you back to the collection, gallery, or the studio homepage.",
}) {
  return (
    <section className="page-section">
      <div className="surface empty-state empty-state--large">
        <p className="eyebrow">404</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="empty-state__actions">
          <Button to="/">Go home</Button>
          <Button to="/collection" variant="ghost">
            View collection
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NotFound
