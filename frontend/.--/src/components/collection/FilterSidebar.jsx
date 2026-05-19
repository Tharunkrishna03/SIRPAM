import Input from "../common/Input"

function FilterSidebar({
  filters,
  categories,
  materials,
  onSearchChange,
  onCategoryChange,
  onMaterialChange,
  onFeaturedToggle,
}) {
  return (
    <aside className="filter-sidebar surface">
      <div className="filter-sidebar__group">
        <p className="eyebrow">Search</p>
        <Input
          label="Find a piece"
          name="search"
          value={filters.query}
          onChange={onSearchChange}
          placeholder="Try vessel, wall, or brass"
        />
      </div>

      <div className="filter-sidebar__group">
        <p className="eyebrow">Category</p>
        <div className="filter-pills">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={filters.category === category ? "filter-pill is-active" : "filter-pill"}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-sidebar__group">
        <p className="eyebrow">Material</p>
        <div className="filter-pills">
          {materials.map((material) => (
            <button
              key={material}
              type="button"
              className={filters.material === material ? "filter-pill is-active" : "filter-pill"}
              onClick={() => onMaterialChange(material)}
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          checked={filters.featuredOnly}
          onChange={onFeaturedToggle}
        />
        <span>Featured pieces only</span>
      </label>
    </aside>
  )
}

export default FilterSidebar
