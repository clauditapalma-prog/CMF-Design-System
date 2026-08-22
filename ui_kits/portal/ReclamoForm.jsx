import { Icon } from './Icon.jsx';
import { Button } from '../../components/core/Button.jsx';
import { Card } from '../../components/core/Card.jsx';
import { Alert } from '../../components/core/Alert.jsx';
import { Input } from '../../components/forms/Input.jsx';
import { Select } from '../../components/forms/Select.jsx';
import { Checkbox } from '../../components/forms/Checkbox.jsx';
import { Breadcrumb } from '../../components/navigation/Breadcrumb.jsx';

const wrap = { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px' };
const STEPS = ['Identificación', 'Tu reclamo', 'Revisión'];

export function ReclamoForm({ onBack }) {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  return (
    <main style={{ fontFamily: 'var(--font-sans)', background: 'var(--surface-page)', paddingBottom: 48 }}>
      <div style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...wrap, padding: '22px 24px 22px' }}>
          <Breadcrumb items={[{ label: 'Inicio', href: '#' }, { label: 'Trámites', href: '#' }, { label: 'Presentar un reclamo' }]} />
          <h1 style={{ margin: '16px 0 6px', fontSize: 'var(--fs-h2)' }}>Presentar un reclamo</h1>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: 'var(--fs-body)' }}>Contra una entidad fiscalizada por la CMF.</p>
        </div>
      </div>

      <div style={{ ...wrap, marginTop: 28, display: 'grid', gridTemplateColumns: '260px 1fr', gap: 28, alignItems: 'start' }}>
        <Card padding="var(--space-5)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {STEPS.map((s, i) => {
              const state = done ? 'done' : i < step ? 'done' : i === step ? 'active' : 'todo';
              return (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 6px' }}>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 'var(--fs-sm)', fontWeight: 700,
                    background: state === 'todo' ? 'var(--cmf-ink-100)' : 'var(--color-brand)',
                    color: state === 'todo' ? 'var(--text-muted)' : '#fff',
                  }}>
                    {state === 'done' ? <Icon name="check" size={15} color="#fff" /> : i + 1}
                  </span>
                  <span style={{ fontSize: 'var(--fs-sm)', fontWeight: state === 'active' ? 700 : 500, color: state === 'active' ? 'var(--text-strong)' : 'var(--text-muted)' }}>{s}</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card padding="var(--space-6)">
          {done ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--cmf-success-bg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name="check" size={34} color="var(--cmf-success)" peso="bold" />
              </span>
              <h3 style={{ margin: '0 0 8px' }}>Reclamo ingresado</h3>
              <p style={{ margin: '0 0 4px', color: 'var(--text-muted)' }}>Folio de seguimiento</p>
              <p style={{ margin: '0 0 24px', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-h3)', color: 'var(--color-brand)', fontWeight: 700 }}>CMF-2026-048213</p>
              <Button variant="primary" onClick={onBack}>Volver a trámites</Button>
            </div>
          ) : (
            <>
              {step === 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--fs-h3)' }}>Identificación</h3>
                  <Alert tone="info">Tus datos están protegidos conforme a la normativa vigente.</Alert>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Input label="RUT" prefix="RUT" placeholder="12.345.678-9" required />
                    <Input label="Nombre completo" placeholder="Nombre y apellidos" required />
                    <Input label="Correo electrónico" type="email" placeholder="tucorreo@ejemplo.cl" required />
                    <Input label="Teléfono" placeholder="+56 9 ____ ____" />
                  </div>
                </div>
              )}
              {step === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--fs-h3)' }}>Detalle del reclamo</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Select label="Tipo de entidad" required defaultValue="">
                      <option value="" disabled>Selecciona…</option>
                      <option>Banco</option>
                      <option>Compañía de seguros</option>
                      <option>Emisor de valores</option>
                      <option>Cooperativa</option>
                    </Select>
                    <Input label="Nombre de la entidad" placeholder="Ej. Banco ___" required />
                  </div>
                  <Input label="Materia del reclamo" placeholder="Resume el motivo en una frase" required />
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <span style={{ fontSize: 'var(--fs-sm)', fontWeight: 600, color: 'var(--text-strong)' }}>
                      Descripción <span style={{ color: 'var(--cmf-danger)' }}>*</span>
                    </span>
                    <textarea rows={4} placeholder="Describe lo ocurrido con el mayor detalle posible." style={{ border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', padding: 12, fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body)', resize: 'vertical', outline: 'none' }} />
                  </label>
                </div>
              )}
              {step === 2 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--fs-h3)' }}>Revisión y envío</h3>
                  <Alert tone="warning" title="Antes de enviar">Revisa que la información sea correcta. El reclamo será derivado a la entidad correspondiente.</Alert>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <Checkbox label="Declaro que la información entregada es veraz y completa." defaultChecked />
                    <Checkbox label="Autorizo a la CMF a comunicarme el estado del reclamo por correo." />
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
                <Button variant="ghost" onClick={() => (step === 0 ? onBack && onBack() : setStep(step - 1))}>
                  {step === 0 ? 'Cancelar' : 'Atrás'}
                </Button>
                <Button variant="primary" onClick={() => (step === 2 ? setDone(true) : setStep(step + 1))}>
                  {step === 2 ? 'Enviar reclamo' : 'Continuar'}
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </main>
  );
}
