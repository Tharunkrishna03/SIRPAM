import { createLinkHandler } from "../../utils/navigation"

const buildClassName = ({ variant, size, fullWidth, className }) =>
  [
    "button",
    `button--${variant}`,
    `button--${size}`,
    fullWidth ? "button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

function Button({
  children,
  to,
  variant = "solid",
  size = "md",
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const classes = buildClassName({ variant, size, fullWidth, className })

  if (to) {
    return (
      <a
        href={to}
        className={classes}
        onClick={createLinkHandler(to, onClick)}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
