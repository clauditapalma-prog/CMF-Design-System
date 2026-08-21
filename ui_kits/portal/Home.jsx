import { Icon } from './Icon.jsx';
import { Motif } from './Motif.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/core/Card.jsx';
import { Badge } from '../../components/core/Badge.jsx';

const SERVICES = [
  { icon: 'fileText', t: 'Presentar un reclamo', d: 'Reclamos contra entidades fiscalizadas.' },
  { icon: 'search2', t: 'Conoce tu deuda', d: 'Consulta tu informe de deudas.' },
  { icon: 'shield', t: 'Alertas de fraude', d: 'Verifica entidades y evita estafas.' },
  { icon: 'scale', t: 'Conoce tu seguro', d: 'Pólizas y coberturas contratadas.' },
  { icon: 'building', t: 'Entidades fiscalizadas', d: 'Registro de bancos, valores y seguros.' },
  { icon: 'graduation', t: 'Educación financiera', d: 'Aprende a tomar mejores decisiones.' },
];

const NEWS = [
  { tag: 'Normativa', tone: 'brand', t: 'CMF publica norma sobre gestión de riesgos operacionales', d: 'La nueva normativa actualiza los estándares para bancos e instituciones financieras.', date: '12 mar 2026' },
  { tag: 'Comunicado', tone: 'navy', t: 'Resultados del sistema bancario a febrero de 2026', d: 'El informe mensual presenta los principales indicadores de la industria.', date: '08 mar 2026' },
  { tag: 'Educación', tone: 'accent', t: 'Nuevo simulador de crédito de consumo disponible', d: 'Una herramienta para comparar y entender el costo total del crédito.', date: '03 mar 2026' },
];

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' };

export function Home({ onNavigate }) {
  return (
    <main style={{ fontFamily: 'var(--font-sans)', background: 'var(--surface-page)' }}>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--cmf-navy)', color: '#fff' }}>
        <Motif />
        <div style={{ ...wrap, position: 'relative', padding: '72px 24px 88px' }}>
          <div style={{ maxWidth: 620 }}>
            <span style={{ fontSize: 'var(--fs-xs)', fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--cmf-teal-200)' }}>
              Regulador y supervisor financiero de Chile
            </span>
            <h1 style={{ color: '#fff', fontSize: 'var(--fs-h1)', lineHeight: 1.1, margin: '16px 0 12px', maxWidth: 560 }}>
              Un mercado financiero seguro, transparente y estable
            </h1>
            <p style={{ fontSize: 'var(--fs-lg)', color: 'rgba(255,255,255,.85)', lineHeight: 'var(--lh-snug)', margin: '0 0 28px', maxWidth: 520 }}>
              Regulamos y supervisamos a las instituciones financieras para proteger a los usuarios y resguardar la fe pública.
            </p>
            <div style={{ display: 'flex', background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 6, maxWidth: 560 }}>
              <span style={{ display: 'flex', alignItems: 'center', paddingLeft: 12 }}><Icon name="search" size={20} color="var(--text-muted)" /></span>
              <input placeholder="Busca trámites, normativa o entidades…" style={{ flex: 1, border: 0, outline: 'none', padding: '12px 12px', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', color: 'var(--text-strong)' }} />
              <Button variant="primary">Buscar</Button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, marginTop: -48, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {SERVICES.map(s => (
            <Card key={s.t} interactive as="a" padding="var(--space-5)">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--color-brand-tint)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={s.icon} size={24} color="var(--color-brand)" />
                </span>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--fs-body)', color: 'var(--text-strong)' }}>{s.t}</h4>
                  <p style={{ margin: '4px 0 0', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 'var(--lh-snug)' }}>{s.d}</p>
                </div>
                <Icon name="chevronRight" size={18} color="var(--cmf-ink-300)" style={{ marginLeft: 'auto', alignSelf: 'center' }} />
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, marginTop: 'var(--space-7)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--cmf-warning-bg)', borderLeft: '4px solid var(--cmf-warning)', borderRadius: 'var(--radius-sm)', padding: '16px 20px' }}>
          <Icon name="alert" size={22} color="var(--cmf-warning)" />
          <div style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-body)' }}>
            <strong style={{ color: '#8a5905' }}>Alerta de mercado:</strong> verifica siempre que una entidad esté inscrita en los registros de la CMF antes de contratar productos financieros.
          </div>
          <a style={{ marginLeft: 'auto', whiteSpace: 'nowrap', color: 'var(--text-link)', fontWeight: 600, fontSize: 'var(--fs-sm)', cursor: 'pointer' }}>Ver registro →</a>
        </div>
      </section>

      <section style={{ ...wrap, marginTop: 'var(--space-8)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <div>
            <hr className="cmf-rule" style={{ height: 4, width: 56, background: 'var(--color-brand)', border: 0, borderRadius: 999, margin: '0 0 10px' }} />
            <h2 style={{ margin: 0, fontSize: 'var(--fs-h2)' }}>Sala de prensa</h2>
          </div>
          <Button variant="secondary" size="sm" onClick={() => onNavigate && onNavigate('Sala de prensa')}>Ver todas</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {NEWS.map(n => (
            <Card key={n.t} interactive as="a">
              <Badge tone={n.tone} subtle>{n.tag}</Badge>
              <h4 style={{ margin: '12px 0 8px', fontSize: 'var(--fs-h4)', lineHeight: 1.25, color: 'var(--text-strong)' }}>{n.t}</h4>
              <p style={{ margin: 0, fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 'var(--lh-snug)' }}>{n.d}</p>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 7, fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>
                <Icon name="clock" size={13} color="var(--text-faint)" /> {n.date}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
