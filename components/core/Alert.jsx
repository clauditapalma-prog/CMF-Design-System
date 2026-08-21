/**
 * CMF Alert — inline message banner for advisories, confirmations, errors.
 * Government-tone: clear, left accent bar, tinted background, no emoji.
 */
export function Alert({ children, tone = 'info', title, onClose, style, ...rest }) {
  const map = {
    info:    { bar: 'var(--cmf-navy)',    bg: 'var(--cmf-info-bg)',      ink: 'var(--cmf-navy)' },
    brand:   { bar: 'var(--color-brand)', bg: 'var(--color-brand-tint)', ink: 'var(--cmf-purple-800)' },
    success: { bar: 'var(--cmf-success)', bg: 'var(--cmf-success-bg)',   ink: '#13643f' },
    warning: { bar: 'var(--cmf-warning)', bg: 'var(--cmf-warning-bg)',   ink: '#8a5905' },
    danger:  { bar: 'var(--cmf-danger)',  bg: 'var(--cmf-danger-bg)',    ink: '#922a1f' },
  };
  const c = map[tone] || map.info;
  return (
    <div
      role="status"
      style={{
        display: 'flex', gap: 'var(--space-3)',
        background: c.bg,
        borderLeft: 'var(--accent-bar-w) solid ' + c.bar,
        borderRadius: 'var(--radius-sm)',
        padding: 'var(--space-4) var(--space-5)',
        color: 'var(--text-body)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-normal)',
        ...style,
      }}
      {...rest}
    >
      <div style={{ flex: 1 }}>
        {title && <div style={{ fontWeight: 'var(--fw-bold)', color: c.ink, marginBottom: title && children ? 'var(--space-1)' : 0 }}>{title}</div>}
        {children}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Cerrar" style={{ border: 0, background: 'transparent', cursor: 'pointer', color: c.ink, fontSize: 18, lineHeight: 1, padding: 0, opacity: 0.7 }}>×</button>
      )}
    </div>
  );
}
