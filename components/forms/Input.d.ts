/**
 * CMF Input — campo de texto con etiqueta, ayuda y estado de error.
 */
export interface InputProps {
  label?: string;
  /** Texto de ayuda bajo el campo */
  hint?: string;
  /** Mensaje de error; su presencia pone el campo en estado inválido */
  error?: string;
  required?: boolean;
  id?: string;
  type?: string;
  /** Etiqueta fija dentro del campo, p. ej. "RUT" */
  prefix?: string;
  placeholder?: string;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
