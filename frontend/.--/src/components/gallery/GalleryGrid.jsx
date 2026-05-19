function GalleryGrid({ items, onSelect }) {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          className="gallery-card surface"
          onClick={() => onSelect(index)}
        >
          <img src={item.image} alt={item.title} className="gallery-card__image" />
          <div className="gallery-card__content">
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </div>
        </button>
      ))}
    </div>
  )
}

export default GalleryGrid
