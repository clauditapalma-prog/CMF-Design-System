/**
 * CMF icon set — **Phosphor Icons**, peso Light (https://phosphoricons.com).
 * Se sirve como webfont; `name` mantiene la API interna del sistema y se
 * traduce al nombre de Phosphor.
 *
 * DESPLIEGUE. La fuente está **autohospedada** en `fonts/phosphor/` y se
 * declara en `tokens/icons-light.css` y `tokens/icons-bold.css`, ambos
 * importados desde `styles.css`. No hay CDN: el despliegue interno de la CMF
 * no tiene salida a internet, misma razón por la que Source Sans 3 vive en
 * `fonts/`. Basta con enlazar `styles.css`.
 *
 * SUSTITUCIÓN DECLARADA. El set oficial de la CMF (manual pág. 12, reproducido
 * en assets/icons/manual-p12-iconografia-oficial.png) vive como ilustraciones
 * vectoriales dentro de la plantilla de imágenes de apoyo y se decidió no
 * incorporarlo: son piezas gráficas temáticas, no iconos de interfaz.
 * Phosphor Light se eligió por ser lo más cercano a la línea del manual —
 * trazo ~1.25, esquinas redondeadas, buena cobertura financiera.
 *
 * Lo que Phosphor NO replica: el glifo compuesto (objeto + insignia pequeña
 * superpuesta) que es la firma del set CMF. Ver ICONOGRAFÍA en el readme.
 */
// Sólo se autohospedaron los pesos light y bold. Añadir otro peso = copiar su
// style.css y su .woff2 desde phosphor-icons/web y sumar el @import.
const PESOS = { light: 'ph-light', bold: 'ph-bold' };

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
  const glifo = NOMBRES[name] || name;
  return (
    <i
      className={PESOS[p] + ' ph-' + glifo}
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
