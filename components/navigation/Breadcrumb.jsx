/** CMF Breadcrumb — government-portal trail. Pass items {label, href}. */
export function Breadcrumb({ items = [], style }) {
  return (
    <nav aria-label="Migas de pan" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)', ...style }}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-2)', listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              {last || !it.href ? (
                <span aria-current={last ? 'page' : undefined} style={{ color: last ? 'var(--text-strong)' : 'var(--text-muted)', fontWeight: last ? 'var(--fw-semibold)' : 'var(--fw-regular)' }}>{it.label}</span>
              ) : (
                <a
                  href={it.href}
                  style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-link)'; e.currentTarget.style.textDecoration = 'underline'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.textDecoration = 'none'; }}
                >{it.label}</a>
              )}
              {!last && <span aria-hidden="true" style={{ color: 'var(--border-default)' }}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
