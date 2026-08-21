/**
 * CMF cover treatment — the official 2026 institutional background
 * (assets/backgrounds/cmf-fondo-oscuro-2026.jpg): concentric circles,
 * diagonal bands and dot screens over deep navy.
 *
 * The master JPEG carries the CMF logo, the site URL and the social icons
 * baked in, and a portal hero already shows the logo in its header — so the
 * hero variant crops to the artwork side (`variant="hero"`, default) and
 * only `variant="portada"` shows the full master, for slide-style covers.
 */
export function Motif({ opacity = 1, variant = 'hero' }) {
  const url = "url('../../assets/backgrounds/cmf-fondo-oscuro-2026.jpg')";
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0, overflow: 'hidden', opacity,
        background: 'var(--cmf-navy) ' + url + ' ' + (variant === 'portada' ? 'center/cover' : 'left 30% / 150% auto') + ' no-repeat',
      }}
    />
  );
}
