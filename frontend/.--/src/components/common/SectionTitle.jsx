function SectionTitle({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-title__description">{description}</p> : null}
    </div>
  )
}

export default SectionTitle
