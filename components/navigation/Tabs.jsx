/**
 * CMF Tabs — underline-style segmented navigation.
 * Controlled (value + onChange) or uncontrolled (defaultValue).
 */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'var(--space-5)', borderBottom: 'var(--border-w) solid var(--border-subtle)', fontFamily: 'var(--font-sans)', ...style }}>
      {items.map(it => {
        const on = it.id === active;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={on}
            onClick={() => select(it.id)}
            style={{
              position: 'relative', border: 0, background: 'transparent', cursor: 'pointer',
              padding: 'var(--space-3) 0',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)',
              fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
              color: on ? 'var(--color-brand)' : 'var(--text-muted)',
              transition: 'color var(--dur-fast) var(--ease-standard)',
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            }}
            onMouseEnter={e => { if (!on) e.currentTarget.style.color = 'var(--text-strong)'; }}
            onMouseLeave={e => { if (!on) e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            {it.label}
            {it.count != null && (
              <span style={{
                fontSize: 'var(--fs-xs)', fontWeight: 'var(--fw-semibold)',
                background: on ? 'var(--color-brand-tint)' : 'var(--cmf-ink-100)',
                color: on ? 'var(--cmf-purple-800)' : 'var(--text-muted)',
                borderRadius: 'var(--radius-pill)', padding: '2px 8px',
              }}>{it.count}</span>
            )}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: -1,
              height: 'var(--accent-bar-w)', background: 'var(--color-brand)',
              borderRadius: 'var(--radius-pill) var(--radius-pill) 0 0',
              transform: on ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform var(--dur-base) var(--ease-out)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
