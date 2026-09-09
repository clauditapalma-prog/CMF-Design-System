# Plantillas 2026 — nueva familia (Word y PowerPoint)

Familia adicional de plantillas oficiales, aprobada por Comunicaciones de la CMF. **Se suman
a `CMF-plantilla-2026.pptx`, no la reemplazan**: son versiones nuevas en otros colores e
imágenes, dentro del mismo rango de marca.

## Contenido

| Plantilla | Formato editable | Documento de ejemplo (datos cargados) |
|---|---|---|
| Documento de trabajo | `CMF-2026-documento-de-trabajo.dotx` | `CMF-2026-documento-de-trabajo.docx` |
| Estadísticas comentadas | `CMF-2026-estadisticas-comentadas.dotx` | `CMF-2026-estadisticas-comentadas.docx` |
| Estudios normativos | `CMF-2026-estudios-normativos.dotx` | `CMF-2026-estudios-normativos.docx` |
| General | `CMF-2026-general.dotx` | `CMF-2026-general.docx` |
| Notas técnicas | `CMF-2026-notas-tecnicas.dotx` | `CMF-2026-notas-tecnicas.docx` |
| Presentación | `CMF-2026-presentacion.potx` | `CMF-2026-presentacion.pptx` |

Cada `.docx`/`.pptx` es el documento de muestra que acompaña a su plantilla, para ver cómo
se ven los datos reales una vez cargados.

## Corrección aplicada: tipografía

Los archivos originales traían **Open Sans** incrustada por nombre (tema, estilos y
párrafos) en las seis plantillas. La tipografía del sistema de diseño tiene prioridad sobre
la de las plantillas nuevas: se reemplazó **Open Sans → Verdana** en todo el paquete
(`theme*.xml`, `styles.xml`, `document.xml`/slides), consistente con `--font-brand` en
[`tokens/typography.css`](../../tokens/typography.css) (Verdana para documentos y
diapositivas oficiales). Ninguna de las dos fuentes venía incrustada como binario, así que
el cambio es solo de referencia por nombre — no aumenta el peso de los archivos ni requiere
distribuir una fuente.

Se conserva todo lo demás sin tocar: colores, imágenes, layouts y estructura de cada
plantilla.
