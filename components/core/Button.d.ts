/**
 * CMF Button — la acción principal del sistema.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = morado de marca · secondary = contorno · ghost · accent = teal · danger */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'danger';
  /** sm 34px · md 42px · lg 50px */
  size?: 'sm' | 'md' | 'lg';
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
