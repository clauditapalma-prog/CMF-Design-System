repo: clauditapalma-prog/CMF-Design-System
branch: main
path: cmf-design-system-8adfb247-f9a6-442e-b5f9-9b98cf598312

## Last sync

date: 2026-08-21T19:15:56Z
tree: 4117d9a31d6b

### Updated in this project

- Reconstruido el sistema completo desde el snapshot parcial del repo: 18 componentes, 26 tarjetas, UI kit del portal y 7 diapositivas.
- Los `.jsx` de `components/core|forms|navigation` y `ui_kits/portal` se recuperaron del `_ds_bundle.js` commiteado (el repo no trae sus fuentes) y ahora llevan `import` relativos explícitos.
- Incorporados los fondos oficiales 2026 y el arte del master PPTX a `assets/backgrounds/`; manual PDF y PPTX en `guidelines/`.
- Nueva plantilla `templates/portal/` con seis tweaks, y soporte de consumo por CDN / submódulo / npm / Agent Skill.

> **El repo está por detrás de este proyecto.** El remoto sólo contiene tokens, fuentes, logos,
> `components/brand/Logo.jsx`, `readme.md`, `styles.css` y los artefactos generados — todo anidado
> bajo `cmf-design-system-8adfb247-f9a6-442e-b5f9-9b98cf598312/`. Falta empujar todo lo demás.
> Al publicar, mover el contenido a la **raíz** del repo: las rutas relativas del sistema
> (`styles.css` → `tokens/`, `tokens/fonts.css` → `../fonts/`, tarjetas → `../../_ds_bundle.js`)
> asumen que la raíz del sistema es la raíz servida.

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
| `assets/backgrounds/cmf-fondo-{claro,oscuro}-2026.jpg` | Subidos por la usuaria (no están en el repo) |
| `assets/backgrounds/pptx-*` | Extraídos de `guidelines/CMF-plantilla-2026.pptx` |
| `slides/*.html`, `guidelines/cards/*.html`, `templates/portal/` | Nuevos en este proyecto |
