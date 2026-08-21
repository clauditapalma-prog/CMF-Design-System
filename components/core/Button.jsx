/**
 * CMF Button — institutional, restrained, purpose-built for a regulator.
 * Variants: primary (purple), secondary (outline), ghost, accent (teal), danger.
 */
export function Button({
  children, variant = 'primary', size = 'md', iconStart, iconEnd,
  fullWidth = false, disabled = false, type = 'button', onClick, style, ...rest
}) {
  const sizes = {
    sm: { padding: '0 var(--space-3)', height: 34, fontSize: 'var(--fs-sm)' },
    md: { padding: '0 var(--space-5)', height: 42, fontSize: 'var(--fs-body)' },
    lg: { padding: '0 var(--space-6)', height: 50, fontSize: 'var(--fs-lg)' },
  };
  const variants = {
    primary:   { background: 'var(--color-brand)',  color: 'var(--text-on-brand)', border: 'var(--border-w) solid var(--color-brand)' },
    secondary: { background: 'transparent',         color: 'var(--color-brand)',   border: 'var(--border-w-thick) solid var(--color-brand)' },
    ghost:     { background: 'transparent',         color: 'var(--color-brand)',   border: 'var(--border-w-thick) solid transparent' },
    accent:    { background: 'var(--color-accent)', color: 'var(--text-on-brand)', border: 'var(--border-w) solid var(--color-accent)' },
    danger:    { background: 'var(--cmf-danger)',   color: 'var(--text-on-brand)', border: 'var(--border-w) solid var(--cmf-danger)' },
  };
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-semibold)', lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...sizes[size], ...variants[variant], ...style,
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      onMouseEnter={e => {
        if (disabled) return;
        if (variant === 'primary') e.currentTarget.style.background = 'var(--color-brand-strong)';
        else if (variant === 'accent') e.currentTarget.style.background = 'var(--color-accent-deep)';
        else if (variant === 'danger') e.currentTarget.style.filter = 'brightness(0.92)';
        else e.currentTarget.style.background = 'var(--color-brand-tint-faint)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = variants[variant].background;
        e.currentTarget.style.filter = 'none';
      }}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = 'translateY(1px)'; }}
      onMouseUp={e => { e.currentTarget.style.transform = 'none'; }}
      {...rest}
    >
      {iconStart}{children}{iconEnd}
    </button>
  );
}
