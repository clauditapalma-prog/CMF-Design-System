import { Icon } from './Icon.jsx';

const NAV = ['Inicio', 'Normativa', 'Trámites', 'Educación', 'Estadísticas', 'Sala de prensa'];

const bar = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', height: 36, alignItems: 'center' };
const ulink = { color: 'rgba(255,255,255,.85)', textDecoration: 'none', cursor: 'pointer' };
const iconBtn = { width: 42, height: 42, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', background: 'var(--surface-card)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' };
const portalBtn = { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--color-brand)', color: '#fff', fontWeight: 700, fontSize: 'var(--fs-sm)', padding: '0 18px', height: 42, borderRadius: 'var(--radius-sm)', cursor: 'pointer', textDecoration: 'none' };

/** CMF portal masthead: government utility bar + main nav + search. */
export function Header({ active = 'Inicio', onNavigate }) {
  const go = label => onNavigate && onNavigate(label);
  return (
    <header style={{ fontFamily: 'var(--font-sans)' }}>
      <div style={{ background: 'var(--cmf-navy)', color: 'rgba(255,255,255,.85)', fontSize: 'var(--fs-xs)' }}>
        <div style={bar}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', fontWeight: 600 }}>
            <Icon name="globe" size={14} /> Gobierno de Chile
          </span>
          <nav style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            <a style={ulink}>Transparencia</a>
            <a style={ulink}>Mapa del sitio</a>
            <a style={ulink}>Contacto</a>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#fff', fontWeight: 600 }}>
              <Icon name="phone" size={13} /> 600 831 0000
            </span>
          </nav>
        </div>
      </div>

      <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...bar, height: 84, alignItems: 'center' }}>
          <button onClick={() => go('Inicio')} style={{ border: 0, background: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
            <img src="../../assets/logos/logo-CMF-color-claim.png" alt="Comisión para el Mercado Financiero" style={{ height: 52 }} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button aria-label="Buscar" style={iconBtn}><Icon name="search" size={20} color="var(--color-brand)" /></button>
            <button aria-label="Alertas" style={{ ...iconBtn, position: 'relative' }}>
              <Icon name="bell" size={20} color="var(--color-brand)" />
              <span style={{ position: 'absolute', top: 7, right: 7, width: 7, height: 7, background: 'var(--cmf-teal)', borderRadius: '50%' }} />
            </button>
            <a style={portalBtn} onClick={() => go('Trámites')}>
              <Icon name="user" size={17} color="#fff" /> Portal de trámites
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-xs)' }}>
        <nav style={{ ...bar, gap: 4, height: 52 }}>
          {NAV.map(label => {
            const on = label === active;
            return (
              <button
                key={label}
                onClick={() => go(label)}
                style={{
                  position: 'relative', border: 0, background: 'none', cursor: 'pointer',
                  padding: '0 16px', height: 52,
                  fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-sm)',
                  fontWeight: on ? 700 : 600,
                  color: on ? 'var(--color-brand)' : 'var(--text-body)',
                  letterSpacing: '.01em',
                }}
              >
                {label}
                <span style={{
                  position: 'absolute', left: 12, right: 12, bottom: 0, height: 3,
                  borderRadius: '3px 3px 0 0', background: 'var(--color-brand)',
                  transform: on ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform var(--dur-base) var(--ease-out)',
                }} />
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
