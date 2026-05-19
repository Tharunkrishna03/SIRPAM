function Input({ label, id, helperText, error, className = "", ...props }) {
  const inputId = id ?? props.name

  return (
    <label className={`field ${className}`.trim()} htmlFor={inputId}>
      {label ? <span className="field__label">{label}</span> : null}
      <input id={inputId} className="field__control" {...props} />
      {helperText ? <span className="field__hint">{helperText}</span> : null}
      {error ? <span className="field__error">{error}</span> : null}
    </label>
  )
}

export default Input
