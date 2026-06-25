import styles from "./button.module.css";

export default function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
  className = "",
  ...props
}) {
  const classes = `
    ${styles.button}
    ${styles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
