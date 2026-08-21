import { Icon } from './Icon.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/core/Card.jsx';
import { Badge } from '../../components/core/Badge.jsx';
import { Tabs } from '../../components/navigation/Tabs.jsx';
import { Breadcrumb } from '../../components/navigation/Breadcrumb.jsx';

const TRAMITES = [
  { icon: 'fileText', t: 'Presentar un reclamo', d: 'Reclamos contra bancos, aseguradoras y otras entidades fiscalizadas.', tag: 'En línea', tone: 'success', time: '10 min' },
  { icon: 'search2', t: 'Conoce tu deuda', d: 'Solicita tu informe consolidado de deudas del sistema financiero.', tag: 'En línea', tone: 'success', time: 'Inmediato' },
  { icon: 'shield', t: 'Consulta de entidades fiscalizadas', d: 'Verifica si una entidad está autorizada por la CMF.', tag: 'En línea', tone: 'success', time: 'Inmediato' },
  { icon: 'scale', t: 'Conoce tu seguro', d: 'Consulta las pólizas de seguro contratadas a tu nombre.', tag: 'En línea', tone: 'success', time: 'Inmediato' },
  { icon: 'building', t: 'Inscripción en el Registro de Valores', d: 'Trámite para emisores que requieren inscripción.', tag: 'Con clave', tone: 'navy', time: 'Variable' },
  { icon: 'download', t: 'Certificado de vigencia', d: 'Descarga certificados emitidos por la Comisión.', tag: 'En línea', tone: 'success', time: '5 min' },
];

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' };

export function Tramites({ onOpenReclamo }) {
  const [tab, setTab] = React.useState('todos');
  return (
    <main style={{ fontFamily: 'var(--font-sans)', background: 'var(--surface-page)', minHeight: '60vh', paddingBottom: 40 }}>
      <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...wrap, padding: '22px 24px 0' }}>
          <Breadcrumb items={[{ label: 'Inicio', href: '#' }, { label: 'Trámites y servicios' }]} />
          <h1 style={{ margin: '16px 0 8px', fontSize: 'var(--fs-h1)' }}>Trámites y servicios</h1>
          <p style={{ margin: '0 0 22px', color: 'var(--text-muted)', fontSize: 'var(--fs-lg)', maxWidth: 640 }}>
            Realiza trámites en línea y accede a la información que la CMF pone a disposición de los usuarios.
          </p>
          <Tabs value={tab} onChange={setTab} items={[
            { id: 'todos', label: 'Todos', count: 24 },
            { id: 'usuarios', label: 'Usuarios' },
            { id: 'entidades', label: 'Entidades' },
            { id: 'certificados', label: 'Certificados' },
          ]} />
        </div>
      </div>

      <div style={{ ...wrap, marginTop: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: '0 12px', height: 44 }}>
          <Icon name="search" size={18} color="var(--text-muted)" />
          <input placeholder="Buscar trámite por nombre…" style={{ flex: 1, border: 0, outline: 'none', padding: '0 10px', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)' }} />
        </div>
        <Button variant="secondary">Más filtros</Button>
      </div>

      <div style={{ ...wrap, marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {TRAMITES.map(x => {
          const esReclamo = x.t.includes('reclamo');
          return (
            <Card
              key={x.t}
              interactive
              onClick={esReclamo ? onOpenReclamo : undefined}
              as={esReclamo ? 'button' : 'div'}
              style={esReclamo ? { textAlign: 'left', width: '100%', font: 'inherit' } : undefined}
            >
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--color-brand-tint)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={x.icon} size={24} color="var(--color-brand)" />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <h4 style={{ margin: 0, fontSize: 'var(--fs-body)', color: 'var(--text-strong)' }}>{x.t}</h4>
                    <Badge tone={x.tone} subtle dot>{x.tag}</Badge>
                  </div>
                  <p style={{ margin: '0 0 10px', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', lineHeight: 'var(--lh-snug)' }}>{x.d}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--fs-xs)', color: 'var(--text-faint)' }}>
                    <Icon name="clock" size={13} color="var(--text-faint)" /> Duración estimada: {x.time}
                  </span>
                </div>
                <Icon name="arrowRight" size={18} color="var(--color-brand)" style={{ alignSelf: 'center' }} />
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
