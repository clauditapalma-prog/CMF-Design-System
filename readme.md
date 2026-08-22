# Sistema de Diseño CMF

Sistema de diseño para la **Comisión para el Mercado Financiero (CMF)** — el organismo público encargado de regular y supervisar a las instituciones financieras de Chile, asegurando que operen de forma segura, transparente y estable para proteger a los usuarios. Bajada de marca: *"Regulador y Supervisor Financiero de Chile."*

Este sistema codifica la marca CMF —logos, color, tipografía, motivos gráficos— más componentes de interfaz reutilizables, una recreación del portal público y diapositivas de muestra, para que los agentes de diseño puedan producir interfaces, documentos y presentaciones fieles a la marca.

> **Idioma:** la CMF opera en español de Chile. Toda la redacción de producto, etiquetas y componentes está escrita en español (es-CL).

---

## Fuentes

Este sistema se reconstruyó a partir de un **codebase montado en modo lectura** llamado `cmf-design-system/`, entregado por el usuario. Asume que quien lee esto podría no tener acceso; lo que contenía:

- `readme.md` — guía de marca previa (fundamentos de contenido, visuales e iconografía). Fuente principal de esta versión.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`. Copiados **sin modificar**.
- `fonts/` — Source Sans 3 variable autohospedada (subconjuntos `latin` y `latin-ext`). Copiados sin modificar.
- `assets/logos/` — las nueve variantes oficiales del logo + el SVG blanco vectorial, descargadas del **kit digital de la CMF** (https://kitdigital.cmfchile.cl/logo-CMF.html, v1.3, 14/05/2026). Reglas de uso en `assets/logos/LOGOS.md`.
- `components/brand/Logo.jsx` + `logo.css` — copiados sin modificar.
- `_ds_bundle.js` — bundle compilado de una versión anterior del sistema. **Los `.jsx` de `components/core`, `components/forms`, `components/navigation` y `ui_kits/portal` se recuperaron desde ahí**, de modo que su implementación (colores, paddings, alturas, transiciones) es la original y no una reinterpretación.

Referencias citadas por el codebase pero **no incluidas en él** (ver *Faltantes* más abajo): el manual `Manual-uso-CMF-breve-2026.pdf`, la plantilla `CMF.pptx` y los fondos oficiales de `assets/backgrounds/`.

**Validado previamente con el usuario y conservado:**
- **Tipografía** — **Verdana** para documentos/diapositivas oficiales (`--font-brand`); **Source Sans 3** para digital/UI (`--font-sans`).
- **Iconografía** — iconos de línea **Lucide** (sustitución; ver ICONOGRAFÍA).
- **Navy de marca** — `#162D56` validado contra el `.pptx` oficial; el token redondea a `#162C55`.

### Faltantes (bloqueos conocidos)

1. **Fondos oficiales 2026 — ✅ recibidos.** `assets/backgrounds/cmf-fondo-claro-2026.jpg` y `cmf-fondo-oscuro-2026.jpg` son los masters institucionales entregados por el usuario: círculos concéntricos, franjas diagonales y tramas de puntos sobre blanco azulado o navy profundo. **Traen el logo, `www.cmfchile.cl` y los iconos de redes incrustados** — nunca superpongas otro logo. Los usan `slides/title-oficial-2026.html`, `slides/content-oficial-claro.html` y `ui_kits/portal/Motif.jsx`. El tratamiento de bloques diagonales 2024 se conserva en `slides/title`, `section` y `closing` para cortes de sección con más energía.
2. **Manual y plantilla — ✅ verificados.** El PDF (14 páginas) y el PPTX se leyeron completos.
   - **Paleta confirmada exacta** (manual pág. 2, "composición cromática logo CMF"): Pantone 268 C `C80 M95 Y5 K0` `#5B2B82`; Pantone 2587 C `C65 M80 Y0 K0` `#8547AD`; Pantone 424 C `C0 M0 Y0 K70` `#717271`; gris oscuro `#575756`. Los cuatro coinciden con los tokens; los valores Pantone/CMYK quedaron anotados en `tokens/colors.css`.
   - **Timbre de agua**: R204 G204 B204 = `#CCCCCC`, ahora token `--cmf-logo-timbre`.
   - **Regla nueva**: el logo sin claim requiere **visto bueno de Comunicaciones** (pág. 5) — documentado en `LOGOS.md` y en `Logo.prompt.md`.
   - **Paleta de apoyo gráfico**: el manual titula las páginas ("primera categoría", "segunda categoría", "colores complementarios", "colores para gráficos") pero **publica las muestras como gráfica sin texto**, así que navy / índigo / teal / teal suave siguen muestreados del PPTX oficial, no leídos del manual.
   - **Página 12, iconografía: vista, no extraíble.** La usuaria aportó una captura, guardada en `assets/icons/manual-p12-iconografia-oficial.png` y visible en la tarjeta "Set oficial CMF". Los vectores no se pudieron sacar del PDF, así que Lucide sigue como sustitución — pero ahora la descripción del set real está documentada y el trazo de `Icon.jsx` se ajustó a 1.4 para parecerse. Falta pedir los SVG a Comunicaciones.
3. **`--font-mono`** — la CMF no define una fuente monoespaciada de marca; el token usa el stack del sistema. Se usa sólo en folios de trámite.
4. **Normativa, Estadísticas y Sala de prensa** en el portal: no había diseño de referencia, así que las pantallas quedan **intencionalmente vacías con nota explícita** en vez de inventarlas.

---

## Fundamentos de contenido

Cómo escribe la CMF — replica esta voz en cada componente, pantalla y diapositiva.

- **Idioma y registro:** español de Chile, formal-institucional pero accesible. La CMF es un regulador público: el tono es **claro, confiable, neutral, nunca alarmista ni comercial.**
- **Persona:** habla como institución en primera persona plural ("Regulamos y supervisamos…", "Velamos por…"). Se dirige al público con **tú** en los servicios de cara al usuario ("Conoce tu deuda", "Presenta un reclamo", "Tus datos están protegidos"). El texto institucional/técnico se mantiene impersonal.
- **Mayúsculas/minúsculas:** estilo de oración (sentence case) para títulos e interfaz. Los acentos son obligatorios (Comisión, supervisión, índice). El claim **"Regulador y Supervisor Financiero de Chile"** es el único lockup consistentemente en formato de título. Las siglas (CMF, RUT, CAE) en mayúsculas.
- **Vocabulario:** *normativa, supervisión, fiscalización, entidades fiscalizadas, fe pública, estabilidad, transparencia, usuarios, trámite, reclamo, registro.* Refiérete a las empresas reguladas como "entidades fiscalizadas" y al público como "usuarios".
- **Ejemplos de tono:**
  - Hero: *"Un mercado financiero seguro, transparente y estable."*
  - Misión: *"Regulamos y supervisamos a las instituciones financieras para proteger a los usuarios y resguardar la fe pública."*
  - Servicio: *"Verifica siempre que una entidad esté inscrita en los registros de la CMF antes de contratar productos financieros."*
  - Declaración de formulario: *"Declaro que la información entregada es veraz y completa."* (oración completa, con punto final)
- **Sin emoji.** Nunca, en contextos institucionales. La iconografía aporta las señales visuales.
- **Números:** formato chileno — coma decimal, punto de miles (15,6 %; 1.247 entidades). Espacio antes del %.

---

## Fundamentos visuales

**Vibra general:** institucional, sobria, confiable. Un regulador estatal — contención por sobre el alarde. Las superficies blancas/claras llevan el contenido; el color intenso se reserva para portadas, cabeceras y acentos.

- **Color:** la identidad es **morado** (Pantone 268 C `#5B2B82`, con 2587 C `#8547AD` como par más claro). La familia neutra es el gris cálido Pantone 424 C `#717271`. Una **paleta de apoyo gráfico** —**navy** `#162C55`, **teal** `#12A095`, **índigo** `#3F3A7E`, teal suave `#97D6D2`— aparece en portadas y bloques gráficos. El morado es el color de acción principal; el teal es el acento secundario (CMF Educa). Ver `tokens/colors.css`.
- **Tipografía:** Verdana para documentos oficiales y diapositivas; Source Sans 3 para interfaz digital. Títulos en negrita, sentence case, interlineado ajustado (1,15). Cuerpo 16px a 1,5. Un **antetítulo en mayúsculas con tracking** (`.cmf-eyebrow`, 12px / 0.08em) en morado es un motivo de etiqueta recurrente.
- **Fondos:** predominantemente **blanco / gris muy claro** (`#F5F5F4`) para el contenido. El tratamiento de portada oficial es el **master 2026**: círculos concéntricos, franjas diagonales y tramas de puntos sobre navy profundo o blanco azulado (`assets/backgrounds/cmf-fondo-oscuro-2026.jpg` / `-claro-2026.jpg`, componente `Motif`). Un tratamiento secundario de **bloques diagonales** (planos navy → índigo → teal rotados ~38° con arista morada) se conserva en las diapositivas de sección y cierre. Sin texturas fotográficas, sin ruido ni grano; los degradados no se usan como fondo plano decorativo.
- **La regla de acento:** una barra morada corta (56–72px) de 4–5px con extremos redondeados va bajo el logo y bajo los títulos de sección — el motivo estructural del sistema (`.cmf-rule`).
- **Animación:** discreta y funcional. Fundidos y deslizamientos cortos (120–320ms) con `cubic-bezier(0.2,0,0.2,1)`. Los subrayados de pestaña animan con `--ease-out` (`scaleX`). **Sin rebote, sin movimiento elástico.** Respeta `prefers-reduced-motion`.
- **Hover:** los botones se oscurecen al tono fuerte (`--color-brand-strong`); ghost/secundarios se rellenan con el tinte morado tenue; las tarjetas se elevan 2px y pasan de sombra `sm` a `md` con borde algo más oscuro. Los enlaces pasan a morado más oscuro + subrayado. Las pestañas inactivas pasan de gris medio a tinta fuerte.
- **Press:** los botones bajan 1px (`translateY(1px)`). Sin encogimiento de escala.
- **Bordes:** 1px en `--border-subtle` (`#D7D7D6`) para tarjetas y campos; 2px para énfasis (botones secundarios, casillas). La **barra de acento de 4px** (arriba de tarjetas, izquierda de alertas) es el borde expresivo.
- **Sombras:** suaves, de poca dispersión, gris neutro (nunca de color, salvo la opcional `--shadow-brand`). Cuatro pasos xs→lg; tarjetas en `sm`, el buscador flotante del hero en `lg`.
- **Radio de esquina:** contenido. Escala 3/5/8/12px; tarjetas 8px, botones y campos 5px, pills para insignias y la regla de acento. Nada muy redondeado.
- **Transparencia y blur:** con moderación. Texto blanco directo sobre los bloques oscuros (sin scrims); chips `rgba(255,255,255,.16)` ocasionales en heroes oscuros; enlaces de pie a `rgba(255,255,255,.82)`. **Sin glassmorphism ni backdrop-blur.**
- **Vibra de imágenes:** fría, profesional, corporativa y bien iluminada — no cálida ni con grano. (No se incluye fotografía; agrega imágenes reales de la CMF cuando estén disponibles.)
- **Tarjetas:** blancas, borde sutil de 1px, sombra `sm`, radio de 8px; regla de acento superior opcional (morado por defecto, teal en educación). Las interactivas se elevan al hover.
- **Layout:** contenedor de 1200px (`--container-max`), 760px para lectura larga; padding lateral de 24px; cabecera de tres bandas (barra de gobierno 36px + masthead 84px + nav 52px). Nada fijo al hacer scroll en el portal.

---

## Iconografía

- **Set:** **Phosphor Icons, peso Light** (https://phosphoricons.com) — línea de trazo ~1.25, esquinas y extremos redondeados, `currentColor`. Se sirve como **webfont autohospedada**: los `.woff2` viven en `fonts/phosphor/` y las reglas en `tokens/icons-light.css` y `tokens/icons-bold.css`, importados desde `styles.css`. **Sin CDN** — misma política que Source Sans 3, porque el servidor interno de la CMF no tiene salida a internet. Copiados de `phosphor-icons/web@master` (licencia MIT), con el `src` reducido al `.woff2`. Un subconjunto curado de 21 nombres vive en `ui_kits/portal/Icon.jsx` (`<Icon name="search" />`), que traduce el nombre interno al de Phosphor; ver la tarjeta "Set en uso — Phosphor Light".
- **El set oficial: ~120 iconos, y así se ven.** Referencia en `assets/icons/manual-p12-iconografia-oficial.png` (manual pág. 12) y en la tarjeta "Set oficial CMF". Sus rasgos, para replicarlos o para evaluar cualquier reemplazo:
  - **Trazo fino, ~1,25–1,5** sobre grilla de 24px — bastante más liviano que el default de Lucide (1.75). Extremos y uniones redondeados, sin relleno.
  - **Glifo compuesto** como motivo dominante: un objeto principal más una insignia pequeña superpuesta — escudo con ✓, moneda con $, paraguas sobre auto, casa con llama. Esa composición es la firma visual del set, más que los glifos sueltos.
  - **Dominios**: seguros (vida, hogar, auto, salud, incendio, inundación, viaje, dental, mascotas), banca y pagos (tarjeta, POS, ATM, transferencias, billetera), ahorro e inversión (alcancía, caja fuerte, gráficos, objetivos), trámites y legal (mazo, certificado, firma, póliza), y atención de usuarios (headset, personas, accesibilidad, 24h).
- **Sustitución, y es una decisión tomada.** Se evaluó incorporar el set oficial desde `Plantilla-CMF-imagenes-apoyo-2024.pptx` —donde vive como formas vectoriales de PowerPoint agrupadas por tema (Prudencial, Capital Basado en Riesgo, Cambio climático, Riesgo, Desarrollo y Conducta de Mercado, Fintec, Ciberseguridad, Pensiones)— y **se descartó**: son ilustraciones temáticas para piezas gráficas, no iconos de interfaz. En su lugar se eligió **Phosphor Light** por ser lo más cercano a la línea fina del manual, por sobre Lucide (trazo más grueso), Tabler (mayor cobertura pero línea más pesada) e Iconoir (set financiero más chico). Si en el futuro se necesitan las ilustraciones oficiales, PowerPoint las exporta una a una como SVG (clic derecho → Guardar como imagen → SVG).
- **Pesos:** `<Icon peso="light" />` por defecto; `peso="bold"` para los pocos casos de énfasis (la confirmación de un trámite). Phosphor publica cada peso como familia aparte; **solo se autohospedaron light y bold**. Para sumar otro, copia su `style.css` y su `.woff2` desde `phosphor-icons/web` y agrega el `@import`.
- **Lo que Phosphor no replica:** el **glifo compuesto** —objeto principal más una insignia pequeña superpuesta— que es la firma visual del set CMF. Si un contexto lo exige, compón dos iconos en vez de buscar un glifo único.
- No hay fuente de iconos propia, ni sprite, ni SVGs sueltos en las fuentes entregadas: todos los glifos son SVG en línea desde `Icon.jsx`. El único activo de iconografía es la hoja de referencia PNG del manual.
- **Uso:** los iconos apoyan la comprensión, nunca decoran. En los tiles de servicios se ubican en un chip redondeado de 44–48px con fondo morado suave (o teal, en CMF Educa). De un solo color, ajustado al contexto (`--color-brand` sobre claro, blanco sobre oscuro).
- **Sin emoji**, sin iconos multicolor o 3D, sin mezclar estilo relleno con el set de línea.
- **Unicode/símbolos:** flechas (→) y chevrones son aceptables en línea; el desplegable usa ▼; comillas tipográficas reales ("…").
- **Logo:** nunca recoloreado ni redibujado. Solo tres formas permitidas: color pleno (fondo claro), blanco total (fondo oscuro, cualquiera sea su tono), gris (interiores de documento). Margen de protección ≈ la altura de la "F". Reglas completas: `assets/logos/LOGOS.md`.

---

## Índice de archivos / manifiesto

**Raíz**
- `styles.css` — punto de entrada global (los consumidores enlazan este archivo). Solo `@import`s.
- `readme.md` — esta guía · `SKILL.md` — front matter de Agent Skill para Claude Code · `thumbnail.html` — mosaico de portada del sistema.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`, más `icons-light.css` / `icons-bold.css` (Phosphor autohospedada, ~85 KB cada uno: traen el mapa completo de ~1.500 glifos, no solo los 21 en uso). `fonts.css` sirve Source Sans 3 desde **`fonts/`** (autohospedada, sin CDN externo: el despliegue es interno). Es variable, así que un archivo por subconjunto cubre los pesos 200-900.

**`assets/icons/`** — `manual-p12-iconografia-oficial.png`, la hoja de referencia del set oficial (imagen, no vectores).

**`assets/backgrounds/`** — los dos masters oficiales 2026 (claro y oscuro). **`guidelines/`** — el manual de marca en PDF y la plantilla PPTX oficiales, más las tarjetas de especímenes.

**`assets/logos/`** — las nueve variantes oficiales, **los dos vectoriales** (`logo-cmf-blanco.svg` para fondo oscuro, `logo-cmf-color-claim.svg` para fondo claro, extraído del `.ai` original) y el propio `logoCMF.ai.pdf`. Reglas y procedencia: `assets/logos/LOGOS.md`. **Ojo:** las tres variantes verticales son miniaturas de ~128×120 px — no las uses por sobre 60px de alto; en web van los vectoriales.

**`components/`** — primitivos React reutilizables (cada uno `.jsx` + `.d.ts` + `.prompt.md`, con una tarjeta `*.card.html` por carpeta):
- `brand/` — **Logo**
- `core/` — **Button**, **Badge**, **Card**, **Alert**
- `forms/` — **Input**, **Select**, **Checkbox**
- `navigation/` — **Tabs**, **Breadcrumb**

Inventario completo del sistema: **Logo, Button, Badge, Card, Alert, Input, Select, Checkbox, Tabs, Breadcrumb** — exactamente las diez familias que definía el bundle de origen, sin añadidos.

**Adiciones intencionales:** ninguna en `components/`. En `ui_kits/portal/` sí hay dos piezas de apoyo que el bundle original también tenía: **Icon** (envoltorio del set Lucide) y **Motif** (tratamiento de portada), separado a su propio archivo `Motif.jsx` porque lo usan dos pantallas.

**`ui_kits/portal/`** — recreación del sitio web público. `index.html` es la entrada interactiva (Inicio → Trámites → asistente de Reclamo → CMF Educa). Archivos: `Header`, `Footer`, `Home`, `Motif`, `Tramites`, `ReclamoForm`, `Educa`, `Icon`. Detalle en `ui_kits/portal/README.md`.

**`slides/`** — diapositivas de muestra 1280×720 en Verdana: `title-oficial-2026` (fondo oscuro oficial), `content-oficial-claro` (fondo claro oficial), `title` (motivo diagonal), `section`, `content`, `data`, `closing`.

**`guidelines/cards/`** — tarjetas de especímenes de fundamentos (Colores, Tipografía, Espaciado, Marca, Iconografía) que se muestran en la pestaña Design System.

**Generados (no editar):** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

**Namespace:** los componentes quedan expuestos en `window.CMFDesignSystem_87b826.<Name>` tras cargar `_ds_bundle.js`.

---

## Uso desde GitHub

El sistema es **estático y sin build**: se sirve tal cual. Publica este árbol completo en un repo
(los artefactos generados `_ds_bundle.js` y `_ds_manifest.json` **se commitean**: son los que
consumen las tarjetas, el UI kit y los proyectos externos).

```bash
git init && git add . && git commit -m "Sistema de diseño CMF"
git remote add origin git@github.com:<org>/cmf-design-system.git
git push -u origin main
```

### 1. Como CDN (lo más rápido para prototipos)

jsDelivr sirve cualquier repo público. Enlaza **un solo archivo** de CSS y el bundle:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/<org>/cmf-design-system@main/styles.css">
<script src="https://cdn.jsdelivr.net/gh/<org>/cmf-design-system@main/_ds_bundle.js"></script>
<script>const { Button, Card, Icon } = window.CMFDesignSystem_87b826;</script>
```

`styles.css` sólo tiene `@import`s y las fuentes se referencian de forma relativa
(`tokens/fonts.css` → `../fonts/*.woff2`), así que **hay que servir el árbol completo**, no
archivos sueltos. Fija una etiqueta (`@v1.0.0`) en producción en vez de `@main`.

### 2. Como submódulo o copia en tu repo

```bash
git submodule add https://github.com/<org>/cmf-design-system.git vendor/cmf
```

```html
<link rel="stylesheet" href="/vendor/cmf/styles.css">
<script src="/vendor/cmf/_ds_bundle.js"></script>
```

### 3. Como paquete npm desde GitHub

`package.json` declara `style`, `main` y `exports`, así que funciona sin publicar en npm:

```bash
npm install github:<org>/cmf-design-system
```

```js
import 'cmf-design-system/styles.css';
```

### 4. Como Agent Skill en Claude Code

```bash
git clone https://github.com/<org>/cmf-design-system.git ~/.claude/skills/cmf-design
```

`SKILL.md` ya trae el front matter (`name: cmf-design`, `user-invocable: true`). Invócala y el
agente lee `readme.md` y explora `assets/`, `components/` y `ui_kits/`.

### 5. Plantillas (`templates/<slug>/`)

Cada plantilla carga el sistema con su `ds-base.js` vecino. Al copiar una plantilla a otro
proyecto, ajusta **una línea**:

```js
const base = '../..';   // → apunta a la raíz del sistema de diseño desde ese archivo
```

### Notas de mantención

- El `namespace` (`window.CMFDesignSystem_87b826`) lo genera el compilador a partir de este
  proyecto. Si migras el sistema a otro proyecto o lo regeneras, **el namespace cambia** y hay que
  actualizarlo en las tarjetas `*.card.html`, en `ui_kits/portal/index.html` y en
  `templates/portal/Portal.dc.html`.
- Los `.jsx` **no llevan build**, pero sí llevan `import` relativos explícitos entre archivos: el
  compilador no une referencias sueltas entre archivos. Si agregas un componente que usa otro,
  impórtalo.
- Los binarios (logos, fondos, fuentes, el manual PDF, el PPTX) suman ~10 MB. Si el repo debe ser
  liviano, usa Git LFS para `assets/` y `guidelines/*.pdf|pptx`.
