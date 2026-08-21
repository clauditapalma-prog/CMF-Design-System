/**
 * CMF Logo — official lockup files, never recoloured.
 */
export interface LogoProps {
  /** claro = superficie clara · oscuro = superficie oscura · documento = interior de documentos */
  fondo?: 'claro' | 'oscuro' | 'documento';
  /** Preferir true (regla del manual). No existe versión vertical con claim. */
  conClaim?: boolean;
  vertical?: boolean;
  tam?: 'sm' | 'md' | 'lg';
  /** Prefijo de ruta hacia la raíz del sistema de diseño, p. ej. "../../" */
  base?: string;
  className?: string;
}
export function Logo(props: LogoProps): JSX.Element;
