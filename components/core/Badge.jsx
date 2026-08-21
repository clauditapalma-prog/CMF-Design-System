/**
 * CMF Badge — compact status / category label.
 * Tones map to brand + functional colors. `subtle` fills with a tint.
 */
export function Badge({ children, tone = 'brand', subtle = false, dot = false, style, ...rest }) {
  const map = {
    brand:   { solid: 'var(--color-brand)',  tint: 'var(--color-brand-tint)', ink: 'var(--cmf-purple-800)' },
    accent:  { solid: 'var(--color-accent)', tint: 'var(--cmf-teal-50)',      ink: 'var(--cmf-teal-deep)' },
    neutral: { solid: 'var(--cmf-ink-500)',  tint: 'var(--cmf-ink-100)',      ink: 'var(--cmf-ink-700)' },
    success: { solid: 'var(--cmf-success)',  tint: 'var(--cmf-success-bg)',   ink: '#13643f' },
    warning: { solid: 'var(--cmf-warning)',  tint: 'var(--cmf-warning-bg)',   ink: '#8a5905' },
    danger:  { solid: 'var(--cmf-danger)',   tint: 'var(--cmf-danger-bg)',    ink: '#922a1f' },
    navy:    { solid: 'var(--cmf-navy)',     tint: 'var(--cmf-info-bg)',      ink: 'var(--cmf-navy)' },
  };
  const c = map[tone] || map.brand;
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
    fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-wide)', lineHeight: 1,
    padding: '5px 10px', borderRadius: 'var(--radius-pill)',
    background: subtle ? c.tint : c.solid,
    color: subtle ? c.ink : 'var(--cmf-white)',
    whiteSpace: 'nowrap', ...style,
  };
  return (
    <span style={base} {...rest}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: subtle ? c.solid : 'currentColor' }} />}
      {children}
    </span>
  );
}
