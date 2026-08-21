/**
 * CMF — Logo
 *
 * Elige el archivo oficial que corresponde al fondo. El manual prohíbe alterar
 * el color del logo, así que este componente NUNCA aplica filtros ni recolorea:
 * conmuta entre los archivos oficiales de assets/logos/.
 *
 * Reglas completas: ../../assets/logos/LOGOS.md
 */

const ARCHIVOS = {
  // fondo -> { conClaim, sinClaim, vertical }
  claro: {
    // El SVG es la mejor opción en web: vectorial y con claim.
    conClaim: 'assets/logos/logo-cmf-color-claim.svg',
    sinClaim: 'assets/logos/logo-CMF-color-horizontal.png',
    vertical: 'assets/logos/logo-CMF-color-vertical.jpg',
  },
  oscuro: {
    // El SVG es la mejor opción en web: vectorial y con claim.
    conClaim: 'assets/logos/logo-cmf-blanco.svg',
    sinClaim: 'assets/logos/logo-CMF-blanco-horizontal.png',
    vertical: 'assets/logos/logo-CMF-blanco-vertical.png',
  },
  documento: {
    conClaim: 'assets/logos/logo-CMF-gris-claim.png',
    sinClaim: 'assets/logos/logo-CMF-gris-horizontal.png',
    vertical: 'assets/logos/logo-CMF-gris-vertical.png',
  },
};

/**
 * @param {object} props
 * @param {'claro'|'oscuro'|'documento'} [props.fondo]
 *   claro     — Caso 1: superficie clara o blanca.
 *   oscuro    — Caso 3: superficie oscura, cualquiera sea su tono o color.
 *   documento — Caso 2: interior de documentos, presencia secundaria de marca.
 * @param {boolean} [props.conClaim]  Por defecto true: el manual pide preferirlo.
 * @param {boolean} [props.vertical]  No disponible con claim (no existe esa versión).
 * @param {'sm'|'md'|'lg'} [props.tam]
 * @param {string} [props.base]  Prefijo de ruta hacia la raíz del sistema de diseño.
 */
export function Logo({
  fondo = 'claro',
  conClaim = true,
  vertical = false,
  tam = 'md',
  base = '',
  className = '',
  ...resto
}) {
  if (vertical && conClaim) {
    // El logo con claim no tiene versión vertical: se degrada a sin claim en
    // vez de inventar un lockup que el manual no contempla.
    conClaim = false;
  }
  const set = ARCHIVOS[fondo] ?? ARCHIVOS.claro;
  const src = vertical ? set.vertical : conClaim ? set.conClaim : set.sinClaim;

  return (
    <img
      src={`${base}${src}`}
      alt="Comisión para el Mercado Financiero"
      className={`cmf-logo cmf-logo--${tam} ${className}`.trim()}
      {...resto}
    />
  );
}

export default Logo;
