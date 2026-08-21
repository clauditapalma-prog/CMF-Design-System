/** CMF Badge — etiqueta compacta de estado o categoría. */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'brand' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'navy';
  /** true = fondo tintado + texto de color (el uso más frecuente en el portal) */
  subtle?: boolean;
  /** Punto de estado a la izquierda */
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
