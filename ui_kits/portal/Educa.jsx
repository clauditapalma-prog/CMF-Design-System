import { Icon } from './Icon.jsx';
import { Motif } from './Motif.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/core/Card.jsx';
import { Badge } from '../../components/core/Badge.jsx';

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' };

const SIM = [
  { icon: 'scale', t: 'Simulador de crédito', d: 'Compara el costo total de un crédito de consumo.' },
  { icon: 'chart', t: 'Simulador de ahorro', d: 'Proyecta cuánto puedes acumular en el tiempo.' },
  { icon: 'shield', t: 'Simulador de seguros', d: 'Estima coberturas según tu perfil.' },
];

const TOPICS = [
  { t: 'Cómo elegir un crédito', tag: 'Crédito', tone: 'brand' },
  { t: 'Entendiendo el CAE', tag: 'Conceptos', tone: 'navy' },
  { t: 'Qué cubre tu seguro', tag: 'Seguros', tone: 'accent' },
  { t: 'Evita fraudes y estafas', tag: 'Seguridad', tone: 'warning' },
  { t: 'Tu primer presupuesto', tag: 'Finanzas', tone: 'brand' },
  { t: 'Derechos del consumidor financiero', tag: 'Derechos', tone: 'navy' },
];

export function Educa() {
  return (
    <main style={{ fontFamily: 'var(--font-sans)', background: 'var(--surface-page)', paddingBottom: 40 }}>
      <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--cmf-navy)', color: '#fff' }}>
        <Motif />
        <div style={{ ...wrap, position: 'relative', padding: '56px 24px 60px', display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ width: 64, height: 64, borderRadius: 'var(--radius-lg)', background: 'var(--cmf-teal)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="graduation" size={34} color="#fff" />
          </span>
          <div>
            <span style={{ fontSize: 'var(--fs-xs)', fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'var(--cmf-teal-200)' }}>CMF Educa</span>
            <h1 style={{ color: '#fff', margin: '8px 0 8px', fontSize: 'var(--fs-h1)' }}>Educación financiera para todas y todos</h1>
            <p style={{ margin: 0, color: 'rgba(255,255,255,.88)', fontSize: 'var(--fs-lg)', maxWidth: 620 }}>
              Herramientas, simuladores y contenidos para tomar mejores decisiones con tu dinero.
            </p>
          </div>
        </div>
      </section>

      <section style={{ ...wrap, marginTop: 36 }}>
        <h2 style={{ margin: '0 0 18px', fontSize: 'var(--fs-h3)' }}>Simuladores</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {SIM.map(s => (
            <Card key={s.t} accent accentColor="var(--color-accent)" interactive as="a">
              <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--cmf-teal-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                <Icon name={s.icon} size={24} color="var(--cmf-teal-deep)" />
              </span>
              <h4 style={{ margin: '0 0 6px', fontSize: 'var(--fs-h4)' }}>{s.t}</h4>
              <p style={{ margin: '0 0 14px', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 'var(--lh-snug)' }}>{s.d}</p>
              <Button variant="accent" size="sm" iconEnd={<Icon name="arrowRight" size={16} color="#fff" />}>Abrir simulador</Button>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ ...wrap, marginTop: 40 }}>
        <h2 style={{ margin: '0 0 18px', fontSize: 'var(--fs-h3)' }}>Aprende por tema</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {TOPICS.map(t => (
            <Card key={t.t} interactive as="a" padding="var(--space-5)">
              <Badge tone={t.tone} subtle>{t.tag}</Badge>
              <h4 style={{ margin: '12px 0 0', fontSize: 'var(--fs-body)', color: 'var(--text-strong)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                {t.t}
                <Icon name="chevronRight" size={18} color="var(--cmf-ink-300)" />
              </h4>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
