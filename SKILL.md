---
name: cmf-design
description: Use this skill to generate well-branded interfaces, documents, presentations and assets for the CMF (Comisión para el Mercado Financiero de Chile), either for production or throwaway prototypes/mocks. Contains the official brand guidelines, colors, typography, fonts, logos, backgrounds, Word/PowerPoint templates and UI kit components for prototyping.
user-invocable: true
---

# Sistema de Diseño CMF

Antes de diseñar, lee `readme.md` completo: contiene la voz y tono, las reglas visuales, el
índice de archivos y los temas pendientes. Luego explora los archivos que necesites.

## Dónde está cada cosa

- **Valores oficiales:** `tokens/` (colores, tipografía, espaciados). `styles.css` los carga todos.
- **Logos:** `assets/logos/`. Lee `assets/logos/LOGOS.md` antes de elegir una variante.
  Para tamaños grandes usa los `.svg`. El logo sin claim requiere visto bueno de Comunicaciones.
- **Fondos oficiales 2026:** `assets/backgrounds/`.
- **Fotos institucionales:** `assets/fotos/` (edificios y oficinas; lee su `README.md`). No
  inventes ni uses fotos de banco de imágenes en su lugar.
- **Manual de marca:** `guidelines/Manual-uso-CMF-breve-2026.pdf`.
- **Presentaciones:** por defecto usa `guidelines/CMF-plantilla-2026.pptx`. Usa
  `guidelines/plantillas-2026-nuevas/CMF-2026-presentacion.potx` solo si el pedido la nombra.
- **Documentos Word:** `guidelines/plantillas-2026-nuevas/` (`CMF-2026-general.dotx` para uso
  general; hay variantes para documentos de trabajo, notas técnicas, estudios normativos y
  estadísticas comentadas).
- **Interfaces web:** componentes React en `components/`, portal de referencia en
  `ui_kits/portal/`, plantillas en `templates/`, diapositivas HTML de muestra en `slides/`.

## Cómo trabajar

- **Piezas visuales** (láminas, maquetas, prototipos): copia los recursos que uses y entrega
  archivos HTML estáticos que se puedan abrir directamente.
- **Código de producción:** usa los tokens y componentes existentes; no inventes colores,
  tipografías ni iconos fuera del sistema.
- **Documentos y presentaciones:** parte siempre desde una plantilla oficial, sin cambiar sus
  estilos.
- Si se invoca la skill sin más indicaciones, pregunta qué se quiere construir, haz algunas
  preguntas y actúa como diseñador experto.

## Reglas fijas

- Todo el texto va en español de Chile (es-CL).
- Tipografía: **Verdana** en documentos y presentaciones oficiales; **Source Sans 3** en web e
  interfaces.
- Iconos: primero el set oficial **cmf-icon-2025** (124 iconos de la CMF: SVG en
  `assets/icons/cmf-icon-2025/`, fuente web con `<i class="cmf-icon cmf-icon-<nombre>">`).
  Solo si no existe el icono, o para negrita, usar Phosphor (`fonts/phosphor/`).
- No modificar a mano `_ds_bundle.js`, `_ds_manifest.json` ni `_adherence.oxlintrc.json`.
