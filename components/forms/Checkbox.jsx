const TICK = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")";

function paint(el) {
  if (!el) return;
  const on = el.checked;
  el.style.background = on ? 'var(--color-brand)' : 'var(--surface-card)';
  el.style.borderColor = on ? 'var(--color-brand)' : 'var(--border-strong)';
  el.style.backgroundImage = on ? TICK : 'none';
  el.style.backgroundRepeat = 'no-repeat';
  el.style.backgroundPosition = 'center';
}

/** CMF Checkbox — controlled or uncontrolled, with inline label. */
export function Checkbox({ label, checked, defaultChecked, disabled = false, id, onChange, style, ...rest }) {
  const fieldId = id || (label ? 'c-' + String(label).replace(/\s+/g, '-').toLowerCase() : undefined);
  return (
    <label
      htmlFor={fieldId}
      style={{
        display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-3)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-body)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
      }}
    >
      <input
        id={fieldId}
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        style={{
          appearance: 'none', WebkitAppearance: 'none',
          width: 20, height: 20, marginTop: 1, flexShrink: 0,
          border: 'var(--border-w-thick) solid var(--border-strong)',
          borderRadius: 'var(--radius-xs)',
          background: 'var(--surface-card)',
          cursor: 'inherit', position: 'relative',
          transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        }}
        onInput={e => paint(e.currentTarget)}
        ref={paint}
        {...rest}
      />
      {label && <span style={{ lineHeight: 'var(--lh-snug)' }}>{label}</span>}
    </label>
  );
}
