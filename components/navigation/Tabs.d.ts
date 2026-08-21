/**
 * CMF Tabs — navegación segmentada con subrayado morado animado.
 */
export interface TabItem { id: string; label: string; count?: number }
export interface TabsProps {
  items: TabItem[];
  /** Modo controlado */
  value?: string;
  /** Modo no controlado */
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
