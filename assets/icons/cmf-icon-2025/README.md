# cmf-icon-2025 — iconos oficiales web de la CMF

124 iconos de línea en SVG, uno por archivo. Son los mismos de la fuente de iconos
`cmf-icon-2025` que usa el portal www.cmfchile.cl (archivo `channels-525_cmf_icon_2025`,
generado con Fontello). Se extrajeron sin redibujar desde la versión SVG de esa fuente,
el 5 de noviembre de 2026.

- **Formato:** `viewBox="0 0 1000 1000"`, relleno `currentColor` (toman el color del texto).
- **Nombres:** los del archivo original, sin el prefijo `cmf_` y con guiones
  (`cmf_alerta_triangulo` → `alerta-triangulo.svg`). Se respetan tal cual, incluido
  `concsulta-circulo` (así viene escrito en la fuente).
- **Fuente web:** `fonts/cmf-icon-2025/cmf-icon-2025.woff2`, con reglas en `tokens/icons-cmf.css`
  (`<i class="cmf-icon cmf-icon-balanza"></i>`).
- **En React:** `<Icon name="cmf-balanza" />` (ver `ui_kits/portal/Icon.jsx`).
- **Catálogo visual:** `guidelines/cards/icons-cmf.card.html`.

Si Comunicaciones publica una versión nueva de la fuente, reemplazar el `.woff2`, regenerar
los SVG y el CSS, y mantener los nombres existentes.
