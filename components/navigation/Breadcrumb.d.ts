/** CMF Breadcrumb — ruta de migas del portal público. */
export interface CrumbItem { label: string; href?: string }
export interface BreadcrumbProps {
  items: CrumbItem[];
  style?: React.CSSProperties;
}
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
