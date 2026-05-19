function SortDropdown({ value, options, onChange }) {
  return (
    <label className="sort-dropdown" htmlFor="sortBy">
      <span>Sort by</span>
      <select id="sortBy" className="field__control" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SortDropdown
