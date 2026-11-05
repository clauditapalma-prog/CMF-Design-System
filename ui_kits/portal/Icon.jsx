/**
 * Iconos del sistema CMF — dos sets que conviven, como en www.cmfchile.cl:
 *
 * 1. **cmf-icon-2025** (oficial). Fuente de iconos propia de la CMF, la misma
 *    del portal: 124 pictogramas de línea (banco, balanza, maletín, alcancía…).
 *    Fuente en `fonts/cmf-icon-2025/`, reglas en `tokens/icons-cmf.css`, SVG
 *    sueltos en `assets/icons/cmf-icon-2025/`. Tiene un solo grosor.
 * 2. **Phosphor Light / Bold** (https://phosphoricons.com, MIT), complemento
 *    para lo que el set oficial no trae: lupa, menú, cerrar, flechas,
 *    chevrones, descargar, reloj, check… y para el énfasis en negrita.
 *
 * Regla: si el nombre tiene equivalente en el set oficial (tabla OFICIAL), se
 * usa ese; `peso="bold"` siempre usa Phosphor Bold. Para pedir directamente un
 * icono oficial, anteponer `cmf-` a su nombre: `<Icon name="cmf-ahorro" />`
 * (catálogo en la tarjeta "Set oficial web — cmf-icon-2025").
 *
 * Todo está autohospedado: el despliegue interno de la CMF no tiene salida a
 * internet. Basta con enlazar `styles.css`.
 */
// Phosphor: solo se autohospedaron los pesos light y bold.
const PESOS = { light: 'ph-light', bold: 'ph-bold' };

// Nombre interno → icono del set oficial cmf-icon-2025.
const OFICIAL = {
  shield: "escudo-ok",
  graduation: "birrete",
  alert: "alerta-triangulo",
  building: "edificios",
  chart: "grafico-barras",
  bell: "campana",
  scale: "balanza",
  globe: "mundo"
};

const NOMBRES = {
  search: "magnifying-glass",
  search2: "magnifying-glass",
  menu: "list",
  x: "x",
  chevronRight: "caret-right",
  chevronDown: "caret-down",
  arrowRight: "arrow-right",
  fileText: "file-text",
  shield: "shield-check",
  graduation: "graduation-cap",
  alert: "warning",
  phone: "phone",
  building: "buildings",
  chart: "chart-bar",
  external: "arrow-square-out",
  bell: "bell",
  user: "user",
  scale: "scales",
  download: "download-simple",
  globe: "globe",
  clock: "clock",
  check: "check"
};

/**
 * @param {'light'|'bold'} [peso] Light por defecto; `bold` para los pocos casos
 *   de énfasis (confirmación de trámite, alertas).
 */
export function Icon({ name, size = 22, color = 'currentColor', peso = 'light', style }) {
  const p = PESOS[peso] ? peso : 'light';
  const directo = typeof name === 'string' && name.indexOf('cmf-') === 0;
  const oficial = directo ? name.slice(4) : (p === 'light' ? OFICIAL[name] : null);
  const className = oficial
    ? 'cmf-icon cmf-icon-' + oficial
    : PESOS[p] + ' ph-' + (NOMBRES[name] || name);
  return (
    <i
      className={className}
      aria-hidden="true"
      style={{
        fontSize: size,
        lineHeight: 1,
        color,
        flexShrink: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        ...style,
      }}
    />
  );
}
