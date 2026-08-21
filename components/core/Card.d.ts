/** CMF Card — superficie blanca con borde sutil, sombra suave y radio de 8px. */
export interface CardProps {
  children?: React.ReactNode;
  /** Regla de acento de 4px en el borde superior */
  accent?: boolean;
  /** Color de esa regla; teal para contextos de educación */
  accentColor?: string;
  /** Eleva 2px y profundiza la sombra al hover */
  interactive?: boolean;
  padding?: string;
  as?: 'div' | 'a' | 'button' | 'article' | 'li';
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
