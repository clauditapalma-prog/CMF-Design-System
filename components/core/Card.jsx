/**
 * CMF Card — the workhorse surface. White, soft-shadowed, small radius.
 * `accent` adds the signature top rule; `as` lets it render as a link.
 */
export function Card({
  children, accent = false, accentColor = 'var(--color-brand)', interactive = false,
  padding = 'var(--space-5)', as = 'div', style, ...rest
}) {
  const Tag = as;
  const base = {
    position: 'relative',
    background: 'var(--surface-card)',
    border: 'var(--border-w) solid var(--border-subtle)',
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-sm)',
    padding,
    overflow: 'hidden',
    transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    cursor: interactive ? 'pointer' : 'default',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    ...style,
  };
  return (
    <Tag
      style={base}
      onMouseEnter={interactive ? e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'var(--border-default)';
      } : undefined}
      onMouseLeave={interactive ? e => {
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      } : undefined}
      {...rest}
    >
      {accent && <span style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'var(--accent-bar-w)', background: accentColor }} />}
      {children}
    </Tag>
  );
}
