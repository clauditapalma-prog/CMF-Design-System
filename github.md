repo: clauditapalma-prog/CMF-Design-System
branch: main

## Last sync

date: 2026-08-21T20:05:36Z
tree: 1b69c64ab3f8

### Updated in this project

- Reconstruido el sistema completo desde el snapshot parcial del repo: 18 componentes, 26 tarjetas, UI kit del portal y 7 diapositivas.
- Los `.jsx` de `components/core|forms|navigation` y `ui_kits/portal` se recuperaron del `_ds_bundle.js` commiteado (el repo no trae sus fuentes) y ahora llevan `import` relativos explícitos.
- Incorporados los fondos oficiales 2026 y el arte del master PPTX a `assets/backgrounds/`; manual PDF y PPTX en `guidelines/`.
- Nueva plantilla `templates/portal/` con seis tweaks, y soporte de consumo por CDN / submódulo / npm / Agent Skill.

- Publicado en el remoto: el contenido quedó en la **raíz** del repo (106 archivos) y se eliminó el snapshot anidado `cmf-design-system-8adfb247-…`.

> **Remoto y proyecto sincronizados.** Verificado en `1b69c64ab3f8`: tokens, fuentes, logos y
> fondos, los 10 componentes con sus `.d.ts`/`.prompt.md`, las 18 tarjetas, el UI kit del portal,
> las 7 diapositivas, la plantilla y el manual PDF + PPTX. No subieron `uploads/`, `.thumbnail`
> ni el zip. Las rutas relativas del sistema (`styles.css` → `tokens/`, `tokens/fonts.css` →
> `../fonts/`, tarjetas → `../../_ds_bundle.js`) funcionan porque la raíz del sistema ES la raíz
> del repo: no vuelvas a anidar el árbol.

## Sync history

- 2026-08-21T19:15:56Z · tree `4117d9a31d6b` — el remoto sólo tenía tokens, fuentes, logos, `components/brand/Logo.jsx`, `readme.md`, `styles.css` y los artefactos generados, anidados bajo `cmf-design-system-8adfb247-…`. Ese snapshot fue la fuente de la reconstrucción.

## Screen map

| Pantalla / artefacto | Construido a partir de |
|---|---|
| `tokens/*.css`, `styles.css` | `tokens/*.css`, `styles.css` del repo (copiados sin modificar) |
| `fonts/source-sans-3-*.woff2` | `fonts/` del repo |
| `assets/logos/*` + `LOGOS.md` | `assets/logos/` del repo |
| `components/brand/Logo.jsx` + `logo.css` | `components/brand/` del repo |
| `components/core/{Button,Badge,Card,Alert}.jsx` | `_ds_bundle.js` del repo (fuente transpilada) |
| `components/forms/{Input,Select,Checkbox}.jsx` | `_ds_bundle.js` del repo |
| `components/navigation/{Tabs,Breadcrumb}.jsx` | `_ds_bundle.js` del repo |
| `ui_kits/portal/{Header,Footer,Home,Tramites,ReclamoForm,Educa,Icon}.jsx` | `_ds_bundle.js` del repo |
| `ui_kits/portal/Motif.jsx` | `_ds_bundle.js` + `assets/backgrounds/cmf-fondo-oscuro-2026.jpg` (subido por la usuaria) |
| `readme.md` (fundamentos de contenido, visuales, iconografía) | `readme.md` del repo |
| `assets/backgrounds/cmf-fondo-{claro,oscuro}-2026.jpg` | Subidos por la usuaria |
| `assets/backgrounds/pptx-*` | Extraídos de `guidelines/CMF-plantilla-2026.pptx` |
| `slides/*.html`, `guidelines/cards/*.html`, `templates/portal/` | Nuevos en este proyecto |
