import { Icon } from './Icon.jsx';

const COLS = [
  { h: 'La Comisión', items: ['Quiénes somos', 'Consejo', 'Marco legal', 'Cuenta pública'] },
  { h: 'Mercados', items: ['Bancos e instituciones', 'Valores y seguros', 'Cooperativas', 'Registros'] },
  { h: 'Usuarios', items: ['Atención de público', 'Presentar un reclamo', 'Conoce tu deuda', 'Alertas de fraude'] },
  { h: 'Transparencia', items: ['Transparencia activa', 'Solicitud de información', 'Datos abiertos', 'Auditorías'] },
];

const legalLink = { color: 'rgba(255,255,255,.6)', cursor: 'pointer' };

/** CMF portal footer with sitemap, contact band and legal strip. */
export function Footer() {
  return (
    <footer style={{ fontFamily: 'var(--font-sans)', marginTop: 'var(--space-9)' }}>
      <div style={{ background: 'var(--cmf-navy)', color: 'rgba(255,255,255,.82)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 36px', display: 'grid', gridTemplateColumns: '1.4fr repeat(4, 1fr)', gap: 32 }}>
          <div>
            {/* Vectorial: el PNG vertical oficial solo existe a 128×120 y se ve borroso sobre ~60px. */}
            <img src="../../assets/logos/logo-cmf-blanco.svg" alt="CMF" style={{ height: 54, marginBottom: 18 }} />
            <p style={{ fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-snug)', margin: 0, maxWidth: 240 }}>
              Av. Libertador Bernardo O'Higgins 1449, Santiago, Chile.
            </p>
            <p style={{ fontSize: 'var(--fs-sm)', margin: '10px 0 0', display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontWeight: 600 }}>
              <Icon name="phone" size={15} /> 600 831 0000
            </p>
          </div>
          {COLS.map(c => (
            <div key={c.h}>
              <h4 style={{ fontSize: 'var(--fs-sm)', color: '#fff', textTransform: 'uppercase', letterSpacing: 'var(--ls-wide)', margin: '0 0 14px' }}>{c.h}</h4>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.items.map(i => (
                  <li key={i}><a style={{ color: 'rgba(255,255,255,.82)', textDecoration: 'none', fontSize: 'var(--fs-sm)', cursor: 'pointer' }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.14)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,.6)' }}>
            <span>© 2026 Comisión para el Mercado Financiero · Regulador y supervisor financiero de Chile</span>
            <span style={{ display: 'flex', gap: 18 }}>
              <a style={legalLink}>Términos de uso</a>
              <a style={legalLink}>Privacidad</a>
              <a style={legalLink}>Accesibilidad</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
