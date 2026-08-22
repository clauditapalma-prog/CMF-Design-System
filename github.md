repo: clauditapalma-prog/CMF-Design-System
branch: main

## Last sync

date: 2026-08-22T04:06:11Z
tree: e6639ca0477b
tag: v1.1.0

### Updated in this project

- Manual de marca verificado contra el PDF completo: Pantone y CMYK anotados en `tokens/colors.css`, token nuevo `--cmf-logo-timbre` (#CCCCCC) y la regla del visto bueno de Comunicaciones para el logo sin claim.
- Logo vectorial de color extraído del `logoCMF.ai` original (`assets/logos/logo-cmf-color-claim.svg`); `Logo.jsx` lo usa por defecto sobre fondo claro y el footer del portal pasó al vectorial blanco.
- Iconografía: se descartó el set oficial (son ilustraciones temáticas, no iconos de interfaz) y se adoptó **Phosphor Light**, autohospedada en `fonts/phosphor/` + `tokens/icons-*.css`. Sin CDN.
- Referencia del set oficial guardada como imagen en `assets/icons/`.

## Sync history

- **2026-08-21T20:05:36Z · tree `1b69c64ab3f8` · tag `v1.0.0`** — primera publicación completa (104 archivos). El contenido se movió a la raíz del repo y se eliminó el snapshot anidado `cmf-design-system-8adfb247-…`. Antes de eso el sistema se reconstruyó entero desde ese snapshot parcial: los `.jsx` de `components/core|forms|navigation` y `ui_kits/portal` se recuperaron del `_ds_bundle.js` commiteado, y ahora llevan `import` relativos explícitos; se incorporaron los fondos oficiales 2026 y el arte del master PPTX; y se creó la plantilla `templates/portal/` con seis tweaks más el soporte de consumo por CDN / submódulo / npm / Agent Skill.
- **2026-08-21T19:15:56Z · tree `4117d9a31d6b`** — estado de partida: el remoto sólo tenía tokens, fuentes, logos, `components/brand/Logo.jsx`, `readme.md`, `styles.css` y los artefactos generados, anidados bajo `cmf-design-system-8adfb247-…`. Ese snapshot fue la fuente de la reconstrucción.

> **Remoto y proyecto sincronizados.** Verificado en `e6639ca0477b` (111 archivos): tokens,
> fuentes —incluida Phosphor autohospedada—, logos con sus dos vectoriales, los 10 componentes,
> las 27 tarjetas, el UI kit del portal, las 7 diapositivas, la plantilla y el manual PDF + PPTX.
> No subieron `uploads/`, `.thumbnail` ni el zip. Las rutas relativas del sistema (`styles.css` →
> `tokens/`, `tokens/fonts.css` → `../fonts/`, tarjetas → `../../_ds_bundle.js`) funcionan porque
> la raíz del sistema ES la raíz del repo: no vuelvas a anidar el árbol.

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
| `ui_kits/portal/{Header,Footer,Home,Tramites,ReclamoForm,Educa}.jsx` | `_ds_bundle.js` del repo |
| `ui_kits/portal/Icon.jsx` | Phosphor Light/Bold autohospedada (`phosphor-icons/web@master`, MIT) |
| `ui_kits/portal/Motif.jsx` | `_ds_bundle.js` + `assets/backgrounds/cmf-fondo-oscuro-2026.jpg` (subido por la usuaria) |
| `readme.md` (fundamentos de contenido, visuales, iconografía) | `readme.md` del repo |
| `assets/backgrounds/cmf-fondo-{claro,oscuro}-2026.jpg` | Subidos por la usuaria |
| `assets/backgrounds/pptx-*` | Extraídos de `guidelines/CMF-plantilla-2026.pptx` |
| `slides/*.html`, `guidelines/cards/*.html`, `templates/portal/` | Nuevos en este proyecto |
