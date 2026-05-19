function Loader({ label = "Loading..." }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader__spinner" aria-hidden="true"></span>
      <span>{label}</span>
    </div>
  )
}

export default Loader
