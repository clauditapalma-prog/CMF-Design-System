/** CMF Select — native dropdown styled to match Input. */
export function Select({ label, hint, error, required = false, id, children, style, ...rest }) {
  const fieldId = id || (label ? 's-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const invalid = Boolean(error);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span style={{ color: 'var(--cmf-danger)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={fieldId}
          aria-invalid={invalid}
          style={{
            appearance: 'none', WebkitAppearance: 'none',
            width: '100%', height: 42, padding: '0 40px 0 var(--space-3)',
            background: 'var(--surface-card)',
            border: 'var(--border-w) solid ' + (invalid ? 'var(--cmf-danger)' : 'var(--border-default)'),
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-strong)',
            cursor: 'pointer', outline: 'none',
            transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
            ...style,
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = 'var(--color-brand-soft)';
            e.currentTarget.style.boxShadow = '0 0 0 3px var(--color-brand-tint)';
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = invalid ? 'var(--cmf-danger)' : 'var(--border-default)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          {...rest}
        >
          {children}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)', fontSize: 11 }}>▼</span>
      </div>
      {(error || hint) && <span style={{ fontSize: 'var(--fs-xs)', color: invalid ? 'var(--cmf-danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
