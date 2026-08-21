/** CMF Input — labelled text field with helper / error states. */
export function Input({ label, hint, error, required = false, id, type = 'text', prefix, style, ...rest }) {
  const fieldId = id || (label ? 'f-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const invalid = Boolean(error);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', fontFamily: 'var(--font-sans)' }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--fs-sm)', fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span style={{ color: 'var(--cmf-danger)', marginLeft: 4 }}>*</span>}
        </label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'var(--surface-card)',
        border: 'var(--border-w) solid ' + (invalid ? 'var(--cmf-danger)' : 'var(--border-default)'),
        borderRadius: 'var(--radius-sm)',
        transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      }}>
        {prefix && <span style={{ paddingLeft: 'var(--space-3)', color: 'var(--text-muted)', fontSize: 'var(--fs-sm)' }}>{prefix}</span>}
        <input
          id={fieldId}
          type={type}
          aria-invalid={invalid}
          style={{
            flex: 1, border: 0, outline: 'none', background: 'transparent',
            padding: '0 var(--space-3)', height: 42,
            fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-strong)',
            minWidth: 0, ...style,
          }}
          onFocus={e => {
            const w = e.currentTarget.closest('div');
            w.style.borderColor = invalid ? 'var(--cmf-danger)' : 'var(--color-brand-soft)';
            w.style.boxShadow = '0 0 0 3px ' + (invalid ? 'var(--cmf-danger-bg)' : 'var(--color-brand-tint)');
          }}
          onBlur={e => {
            const w = e.currentTarget.closest('div');
            w.style.borderColor = invalid ? 'var(--cmf-danger)' : 'var(--border-default)';
            w.style.boxShadow = 'none';
          }}
          {...rest}
        />
      </div>
      {(error || hint) && <span style={{ fontSize: 'var(--fs-xs)', color: invalid ? 'var(--cmf-danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
