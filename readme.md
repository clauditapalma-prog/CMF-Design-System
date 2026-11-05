# Sistema de Diseño CMF

Sistema de diseño para la **Comisión para el Mercado Financiero (CMF)** — el organismo público encargado de regular y supervisar a las instituciones financieras de Chile, asegurando que operen de forma segura, transparente y estable para proteger a los usuarios. Bajada de marca: *"Regulador y Supervisor Financiero de Chile."*

Este sistema codifica la marca CMF —logos, color, tipografía, motivos gráficos— más componentes de interfaz reutilizables, una recreación del portal público y diapositivas de muestra, para que los agentes de diseño puedan producir interfaces, documentos y presentaciones fieles a la marca.

> **Idioma:** la CMF opera en español de Chile. Toda la redacción de producto, etiquetas y componentes está escrita en español (es-CL).

---

## Fuentes

Este sistema se reconstruyó a partir de una versión anterior llamada `cmf-design-system/`, entregada por Arquitectura. Quien lea esto podría no tener acceso a ella; lo que contenía:

- `readme.md` — guía de marca previa (fundamentos de contenido, visuales e iconografía). Fuente principal de esta versión.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`. Copiados **sin modificar**.
- `fonts/` — Source Sans 3 variable autohospedada (subconjuntos `latin` y `latin-ext`). Copiados sin modificar.
- `assets/logos/` — las nueve variantes oficiales del logo + el SVG blanco vectorial, descargadas del **kit digital de la CMF** (https://kitdigital.cmfchile.cl/logo-CMF.html, v1.3, 14/05/2026). Reglas de uso en `assets/logos/LOGOS.md`.
- `components/brand/Logo.jsx` + `logo.css` — copiados sin modificar.
- `_ds_bundle.js` — bundle compilado de una versión anterior del sistema. **Los `.jsx` de `components/core`, `components/forms`, `components/navigation` y `ui_kits/portal` se recuperaron desde ahí**, de modo que su implementación (colores, paddings, alturas, transiciones) es la original y no una reinterpretación.

Referencia citada por el codebase pero **no incluida en él**: `Plantilla-CMF-imagenes-apoyo-2024.pptx`, con las ilustraciones temáticas (ver ICONOGRAFÍA). El manual, la plantilla PPT y los fondos oficiales, que antes faltaban, ya están incluidos (ver *Faltantes*).

**Decisiones validadas y conservadas:**
- **Tipografía** — **Verdana** para documentos/diapositivas oficiales (`--font-brand`); **Source Sans 3** para digital/UI (`--font-sans`).
- **Iconografía** — set oficial **cmf-icon-2025** (el mismo de cmfchile.cl), complementado con **Phosphor Light/Bold**; ambos autohospedados (ver ICONOGRAFÍA). Antes se usaba Lucide.
- **Navy de marca** — `#162D56` validado contra el `.pptx` oficial; el token redondea a `#162C55`.

### Faltantes (bloqueos conocidos)

1. **Fondos oficiales 2026 — ✅ recibidos.** `assets/backgrounds/cmf-fondo-claro-2026.jpg` y `cmf-fondo-oscuro-2026.jpg` son los masters institucionales entregados por Arquitectura: círculos concéntricos, franjas diagonales y tramas de puntos sobre blanco azulado o navy profundo. **Traen el logo, `www.cmfchile.cl` y los iconos de redes incrustados** — nunca superpongas otro logo. Los usan `slides/title-oficial-2026.html`, `slides/content-oficial-claro.html` y `ui_kits/portal/Motif.jsx`. El tratamiento de bloques diagonales 2024 se conserva en `slides/title`, `section` y `closing` para cortes de sección con más energía.
2. **Manual y plantilla — ✅ verificados.** El PDF (14 páginas) y el PPTX se leyeron completos.
   - **Paleta confirmada exacta** (manual pág. 2, "composición cromática logo CMF"): Pantone 268 C `C80 M95 Y5 K0` `#5B2B82`; Pantone 2587 C `C65 M80 Y0 K0` `#8547AD`; Pantone 424 C `C0 M0 Y0 K70` `#717271`; gris oscuro `#575756`. Los cuatro coinciden con los tokens; los valores Pantone/CMYK quedaron anotados en `tokens/colors.css`.
   - **Timbre de agua**: R204 G204 B204 = `#CCCCCC`, ahora token `--cmf-logo-timbre`.
   - **Regla nueva**: el logo sin claim requiere **visto bueno de Comunicaciones** (pág. 5) — documentado en `LOGOS.md` y en `Logo.prompt.md`.
   - **Paleta de apoyo gráfico**: el manual titula las páginas ("primera categoría", "segunda categoría", "colores complementarios", "colores para gráficos") pero **publica las muestras como gráfica sin texto**, así que navy / índigo / teal / teal suave siguen muestreados del PPTX oficial, no leídos del manual. El portal www.cmfchile.cl **no sirve de referencia**: usa otra paleta (azul `#16418C`, cian `#11C5EB`, turquesa `#25B7B9`, rojo `#EB3C46`), sin relación con estos colores ni con el morado de marca; no adoptarla (revisado el 5 de noviembre de 2026). Pregunta abierta para Comunicaciones: **¿se confirman estos cuatro códigos o hay valores oficiales distintos?**
   - **Página 12, iconografía: vista, no extraíble.** Se guardó una captura en `assets/icons/manual-p12-iconografia-oficial.png` (tarjeta "Ilustraciones del manual"). Son ilustraciones temáticas para piezas gráficas; sus vectores no se pudieron sacar del PDF. **Para interfaces se resolvió el 5 de noviembre de 2026** con el set oficial web `cmf-icon-2025` (ver ICONOGRAFÍA).
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
- **Vibra de imágenes:** fría, profesional, corporativa y bien iluminada — no cálida ni con grano. Fotografía institucional en `assets/fotos/`: 17 fotos de los edificios y oficinas de la CMF (galerías *Fotos Institucionales* y *CMF Alameda - Moneda* de www.cmfchile.cl), sin personas reconocibles y reducidas a 1600 px; detalle en `assets/fotos/README.md`. Uso pendiente de visto bueno de Comunicaciones. Para otras fotos, la fuente es la **Galería de imágenes** del portal (https://www.cmfchile.cl/portal/prensa/625/w4-propertyvalue-43351.html); las que muestran personas se consultan a Comunicaciones antes de usarlas.
- **Tarjetas:** blancas, borde sutil de 1px, sombra `sm`, radio de 8px; regla de acento superior opcional (morado por defecto, teal en educación). Las interactivas se elevan al hover.
- **Layout:** contenedor de 1200px (`--container-max`), 760px para lectura larga; padding lateral de 24px; cabecera de tres bandas (barra de gobierno 36px + masthead 84px + nav 52px). Nada fijo al hacer scroll en el portal.

---

## Iconografía

- **Set oficial web: `cmf-icon-2025`.** Fuente de iconos propia de la CMF, la misma que usa www.cmfchile.cl (generada con Fontello): **124 pictogramas de línea** — banco, balanza, maletín, alcancía, calendario, campana, escudo, birrete, edificios, gráficos, documentos, personas, transporte, etc. Trazo fino y parejo, esquinas redondeadas, un solo color (`currentColor`). Se incorporó el 5 de noviembre de 2026, extraída sin redibujar desde el portal.
  - **Fuente web** autohospedada en `fonts/cmf-icon-2025/cmf-icon-2025.woff2`, reglas en `tokens/icons-cmf.css` (importado desde `styles.css`): `<i class="cmf-icon cmf-icon-balanza"></i>`.
  - **SVG sueltos** en `assets/icons/cmf-icon-2025/<nombre>.svg`, para documentos, presentaciones y piezas gráficas. Procedencia y nombres en el `README.md` de esa carpeta.
  - **Catálogo** completo en la tarjeta "Set oficial web — cmf-icon-2025".
  - **Límites:** un solo grosor (no hay negrita) y no trae los iconos básicos de interfaz (lupa, menú, cerrar, flechas, chevrones, descargar, enlace externo, reloj, check). Ojo con los significados: `user-02` son dos personas, no una.
- **Set complementario: Phosphor Icons** (https://phosphoricons.com, MIT), pesos **Light** y **Bold**, para lo que el set oficial no trae y para el énfasis en negrita — igual que el portal de la CMF, que complementa su set con otra librería. Autohospedado en `fonts/phosphor/`, reglas en `tokens/icons-light.css` y `tokens/icons-bold.css`. **Sin CDN**: el servidor interno de la CMF no tiene salida a internet.
- **Cómo elige el componente `Icon`** (`ui_kits/portal/Icon.jsx`): si el nombre interno tiene equivalente oficial (escudo, birrete, alerta, edificios, gráfico, campana, balanza, mundo) usa `cmf-icon-2025`; si no, Phosphor Light. `peso="bold"` siempre usa Phosphor Bold. Para pedir cualquier icono oficial directamente: `<Icon name="cmf-ahorro" />`.
- **Ilustraciones del manual (pág. 12)** — no son iconos de interfaz. Referencia en `assets/icons/manual-p12-iconografia-oficial.png`: trazo fino, **glifo compuesto** (objeto principal más una insignia pequeña: escudo con ✓, moneda con $, paraguas sobre auto) y dominios de seguros, banca, ahorro, trámites y atención de usuarios. Viven como formas vectoriales en `Plantilla-CMF-imagenes-apoyo-2024.pptx`, **que no está en este repositorio** ni se publica en www.cmfchile.cl (revisado el 5 de noviembre de 2026): se pide a Comunicaciones y, al recibirla, se carga en `guidelines/` (PowerPoint exporta cada ilustración como SVG con clic derecho → Guardar como imagen → SVG). Mientras no esté, **no inventar ilustraciones**: para pictogramas usar `cmf-icon-2025`.
- **Uso:** los iconos apoyan la comprensión, nunca decoran. En los tiles de servicios se ubican en un chip redondeado de 44–48px con fondo morado suave (o teal, en CMF Educa). De un solo color, ajustado al contexto (`--color-brand` sobre claro, blanco sobre oscuro).
- **Sin emoji**, sin iconos multicolor o 3D, sin mezclar estilo relleno con el set de línea.
- **Unicode/símbolos:** flechas (→) y chevrones son aceptables en línea; el desplegable usa ▼; comillas tipográficas reales ("…").
- **Logo:** nunca recoloreado ni redibujado. Solo tres formas permitidas: color pleno (fondo claro), blanco total (fondo oscuro, cualquiera sea su tono), gris (interiores de documento). Margen de protección ≈ la altura de la "F". Reglas completas: `assets/logos/LOGOS.md`.

---

## Índice de archivos / manifiesto

**Raíz**
- `styles.css` — punto de entrada global (los consumidores enlazan este archivo). Solo `@import`s.
- `readme.md` — esta guía · `SKILL.md` — instrucciones de la skill `cmf-design` para Claude (ver *Uso desde GitHub*, punto 4) · `thumbnail.html` — mosaico de portada del sistema.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`, más `icons-cmf.css` (set oficial `cmf-icon-2025`, autohospedado en `fonts/cmf-icon-2025/`) e `icons-light.css` / `icons-bold.css` (Phosphor autohospedada, ~85 KB cada uno: traen el mapa completo de ~1.500 glifos, no solo los 21 en uso). `fonts.css` sirve Source Sans 3 desde **`fonts/`** (autohospedada, sin CDN externo: el despliegue es interno). Es variable, así que un archivo por subconjunto cubre los pesos 200-900.

**`assets/icons/`** — `cmf-icon-2025/`, los 124 iconos oficiales web en SVG (con su `README.md`), y `manual-p12-iconografia-oficial.png`, la hoja de referencia de las ilustraciones del manual (imagen, no vectores).

**`assets/backgrounds/`** — los dos masters oficiales 2026 (claro y oscuro). **`assets/fotos/`** — 17 fotos institucionales de edificios y oficinas (ver su `README.md`). **`guidelines/`** — el manual de marca en PDF y la plantilla PPTX oficiales, más las tarjetas de especímenes.

**`guidelines/plantillas-2026-nuevas/`** — familia adicional de plantillas 2026 (Word y
PowerPoint), aprobada por Comunicaciones: documento de trabajo, estadísticas comentadas,
estudios normativos, general, notas técnicas y una presentación, cada una con su `.dotx`/`.potx`
editable y un `.docx`/`.pptx` de ejemplo con datos cargados. Se suman a
`CMF-plantilla-2026.pptx` — no la reemplazan — como versiones en otros colores e imágenes
dentro del mismo rango de marca. Ver `README.md` de esa carpeta.

**Plantilla de presentación por defecto:** cuando se pida generar una presentación PowerPoint
sin especificar cuál familia usar, preferir `guidelines/CMF-plantilla-2026.pptx` (la original)
por sobre `guidelines/plantillas-2026-nuevas/CMF-2026-presentacion.potx` (la nueva). Usar la
nueva solo si el pedido la nombra explícitamente.

**`assets/logos/`** — las nueve variantes oficiales, **los dos vectoriales oficiales** (`logo-cmf-blanco.svg` para fondo oscuro, `logo-cmf-color-claim.svg` para fondo claro, extraído del `.ai` original), el propio `logoCMF.ai.pdf` y **vectoriales derivados** de esos originales: horizontal sin claim, gris con claim, vertical (SVG y PNG de 1200 px) e isotipo, en color, gris y blanco, más un favicon. Reglas y procedencia: `assets/logos/LOGOS.md`. **Ojo:** los PNG verticales oficiales son miniaturas de ~128×120 px — en grande usa `logo-cmf-*-vertical.svg`. Los verticales recompuestos, el isotipo y el favicon están pendientes de visto bueno de Comunicaciones.

**`components/`** — primitivos React reutilizables (cada uno `.jsx` + `.d.ts` + `.prompt.md`, con una tarjeta `*.card.html` por carpeta):
- `brand/` — **Logo**
- `core/` — **Button**, **Badge**, **Card**, **Alert**
- `forms/` — **Input**, **Select**, **Checkbox**
- `navigation/` — **Tabs**, **Breadcrumb**

Inventario completo del sistema: **Logo, Button, Badge, Card, Alert, Input, Select, Checkbox, Tabs, Breadcrumb** — exactamente las diez familias que definía el bundle de origen, sin añadidos.

**Adiciones intencionales:** ninguna en `components/`. En `ui_kits/portal/` sí hay dos piezas de apoyo que el bundle original también tenía: **Icon** (envoltorio de los iconos: set oficial `cmf-icon-2025` más Phosphor como complemento) y **Motif** (tratamiento de portada), separado a su propio archivo `Motif.jsx` porque lo usan dos pantallas.

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

### 4. Como skill de Claude (`cmf-design`)

`SKILL.md` convierte este repositorio en una *skill*: un paquete de instrucciones que Claude
carga para producir piezas con la marca CMF (presentaciones, documentos Word, maquetas web,
piezas gráficas) usando los logos, colores, tipografía y plantillas oficiales de este repo.

**Instalar en Claude Code** (escritorio o terminal):

```bash
git clone https://github.com/<org>/cmf-design-system.git ~/.claude/skills/cmf-design
```

Para actualizarla cuando cambie el repositorio: `cd ~/.claude/skills/cmf-design && git pull`.

**Instalar en claude.ai** (Team o Enterprise): descargar el repositorio como ZIP
(*Code → Download ZIP*) y subirlo en *Configuración → Capacidades → Skills*. Al actualizar el
repositorio, volver a subir el ZIP.

**Usarla:** escribir `/cmf-design` seguido del pedido, o simplemente pedir algo de la CMF
(por ejemplo, *"Haz una presentación de 5 láminas sobre educación financiera con la marca
CMF"*); Claude la activa sola cuando el pedido calza. Sin más indicaciones, pregunta qué se
quiere construir.

**Mantenerla:** la skill lee siempre el `readme.md` y los archivos del repositorio, así que
basta con mantener estos al día. `SKILL.md` solo se edita para cambiar reglas de
comportamiento (por ejemplo, qué plantilla usar por defecto).

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

## Términos de uso

- La **marca CMF** (logos, isotipo, claim), los **fondos oficiales**, las **plantillas** Word y
  PowerPoint, el **manual de marca** y el set de iconos **cmf-icon-2025** son **propiedad de la
  Comisión para el Mercado Financiero**. Se usan solo en piezas institucionales de la CMF.
- No se pueden usar fuera de la institución ni en piezas de terceros sin autorización de
  Comunicaciones (`AreaComunicacionCMF@cmfchile.cl`).
- Los componentes de terceros conservan su propia licencia: **Phosphor Icons** (MIT,
  https://phosphoricons.com) y **Source Sans 3** (SIL Open Font License 1.1, Adobe).
- Este texto es provisorio: si el repositorio se publica, Comunicaciones (o Fiscalía) debe
  validarlo o reemplazarlo por una licencia formal.
