/** CMF Alert — mensaje en línea con barra de acento izquierda y fondo tintado. */
export interface AlertProps {
  children?: React.ReactNode;
  tone?: 'info' | 'brand' | 'success' | 'warning' | 'danger';
  /** Título en negrita sobre el cuerpo del mensaje */
  title?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
