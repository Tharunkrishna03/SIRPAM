function TextArea({ label, id, helperText, error, className = "", ...props }) {
  const inputId = id ?? props.name

  return (
    <label className={`field ${className}`.trim()} htmlFor={inputId}>
      {label ? <span className="field__label">{label}</span> : null}
      <textarea id={inputId} className="field__control field__control--area" {...props} />
      {helperText ? <span className="field__hint">{helperText}</span> : null}
      {error ? <span className="field__error">{error}</span> : null}
    </label>
  )
}

export default TextArea
