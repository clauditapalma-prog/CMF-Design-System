# Sistema de Diseño CMF

Sistema de diseño para la **Comisión para el Mercado Financiero (CMF)** — el organismo público encargado de regular y supervisar a las instituciones financieras de Chile, asegurando que operen de forma segura, transparente y estable para proteger a los usuarios. Bajada de marca: *"Regulador y Supervisor Financiero de Chile."*

Este sistema codifica la marca CMF —logos, color, tipografía, motivos gráficos— más componentes de interfaz reutilizables y una recreación del portal público, para que los agentes de diseño puedan producir interfaces, documentos y presentaciones fieles a la marca.

> **Idioma:** la CMF opera en español de Chile. Toda la redacción de producto, etiquetas y componentes está escrita en español (es-CL).

---

## Fuentes

Estos archivos fueron entregados y usados para construir el sistema (almacenados en `uploads/` — asume que quien lee podría no tenerlos):

- `Manual-uso-CMF-breve-2026.pdf` — manual de marca oficial (versión resumida, 2026). Fuente de la paleta de color principal, las reglas de uso del logo y el lenguaje de motivos gráficos.
- `logo-CMF-color-claim---.jpg` — logo horizontal con claim.
- `logo-CMF-color-vertical.jpg` / `.png` — logo vertical (el `.png` es transparente).
- `Plantilla-CMF-externo.png`, `Plantilla-CMF-interno.png`, `Plantilla-CMF-PP-Externo-2026.png` — plantillas/masters oficiales de PowerPoint (estilos de bloques diagonales 2024 y banda de red 2026).
- `CMF.pptx` — plantilla oficial de PowerPoint 2026. **Procesada**: se confirmó el navy de marca exacto `#162D56`; se extrajeron la banda de portada oficial, la franja de pie y la marca de agua gris hacia `assets/` (ver más abajo). El XML del tema es Office estándar (Aptos) — el look CMF vive en las imágenes de fondo incrustadas y los layouts del master, así que el color y la tipografía de marca vienen del manual, no del tema.
- `CMF.pdf` — referencia de apoyo.

**Confirmado con el usuario:**
- **Tipografía** — ✅ aprobada. **Verdana** para documentos/diapositivas oficiales (`--font-brand`); **Source Sans 3** para digital/UI (`--font-sans`).
- **Iconografía** — ✅ aprobada. Iconos de línea **Lucide** (ver ICONOGRAFÍA).
- **Navy de marca** — ✅ validado exacto contra `CMF.pptx` (`#162D56`; el token redondea a `#162C55`).

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
- **Sin emoji.** Nunca, en contextos institucionales. La iconografía aporta las señales visuales.
- **Números:** formato chileno — coma decimal, punto de miles (15,6 %; 1.247 entidades). Espacio antes del %.

---

## Fundamentos visuales

**Vibra general:** institucional, sobria, confiable. Un regulador estatal — contención por sobre el alarde. Las superficies blancas/claras llevan el contenido; el color intenso se reserva para portadas, cabeceras y acentos.

- **Color:** la identidad de marca es **morado** (Pantone 268 C `#5B2B82`, con 2587 C `#8547AD` como par más claro). La familia neutra es el gris cálido Pantone 424 C `#717271`. Una **paleta de apoyo gráfico** —**navy** profundo `#162C55`, **teal/verde** `#12A095`, **índigo** `#3F3A7E`, teal suave `#97D6D2`— aparece en portadas y bloques gráficos. El morado es el color de acción principal; el teal es el acento secundario. Ver `tokens/colors.css`.
- **Tipografía:** Verdana para documentos oficiales/títulos de diapositiva; Source Sans 3 para interfaz digital. Los títulos van en negrita, estilo de oración, interlineado ajustado. Cuerpo 16px a 1.5. Un **antetítulo en mayúsculas con tracking** (`.cmf-eyebrow`) en morado es un motivo de etiqueta recurrente.
- **Fondos:** predominantemente **blanco / gris muy claro** (`#F5F5F4`) para el contenido. El tratamiento de portada principal es la **banda navy 2026** — navy profundo `#162D56` con la textura oficial de "red conectada" (`assets/backgrounds/cmf-network-texture.jpeg`, recortada sin logo desde el master institucional; banda completa + pie en `cmf-cover-band-2026.jpeg` / `cmf-footer-strip-2026.jpg`). Este es el componente `Motif` y ahora respalda **todos** los heroes del portal (Inicio, Educación) y la diapositiva oficial. Un tratamiento secundario de **bloques diagonales 2024** —planos navy→teal→índigo rotados ~36–40° con un acento morado— se conserva en la tarjeta `brand-motif` y en las diapositivas `section`/`closing` para cortes de sección con más energía. Sin texturas fotográficas, sin ruido/grano. Los degradados aparecen solo dentro de los bloques diagonales, nunca como fondos planos decorativos.
- **La regla de acento:** una barra morada corta (~56–72px) de 4–5px con extremos redondeados se ubica bajo el logo y bajo los títulos — un motivo estructural consistente (`.cmf-rule`).
- **Animación:** discreta y funcional. Fundidos y deslizamientos cortos (120–320ms) con la curva estándar `cubic-bezier(0.2,0,0.2,1)`. Los indicadores de pestaña/subrayado animan con `--ease-out`. **Sin rebote, sin movimiento elástico/juguetón.** Respeta `prefers-reduced-motion`.
- **Estados hover:** los botones se oscurecen al tono más fuerte (`--color-brand-strong`); los ghost/secundarios se rellenan con un tinte morado tenue; las tarjetas se elevan 2px y profundizan la sombra (sm→md) con un borde algo más oscuro. Los enlaces pasan de morado a morado más oscuro + subrayado.
- **Estados de pulsación (press):** los botones bajan 1px (`translateY(1px)`). Sin encogimiento de escala.
- **Bordes:** filete de 1px en `--border-subtle` (`#D7D7D6`) para tarjetas/campos; 2px para énfasis (botones secundarios, casillas). La **barra de acento de 4px** (arriba de tarjetas / izquierda de alertas) es el borde expresivo.
- **Sombras:** suaves, de poca dispersión, gris neutro (nunca de color, salvo la opcional `--shadow-brand`). Cuatro pasos xs→lg. Las tarjetas usan `sm` por defecto.
- **Radio de esquina:** contenido. Escala 3/5/8/12px; tarjetas 8px, botones/campos 5px, pills para insignias y la regla de acento. Nada muy redondeado.
- **Transparencia y blur:** con moderación. El texto blanco va directo sobre los bloques diagonales oscuros (sin scrims); ocasionalmente chips de icono `rgba(255,255,255,.16)` en heroes oscuros. Sin glassmorphism/backdrop-blur.
- **Vibra de imágenes:** fría, profesional. La paleta tiende a lo frío (navy/teal/morado). Si se usa fotografía, debe ser neutra, corporativa, bien iluminada — no cálida ni con grano. (No se incluye ninguna; agrega imágenes reales de la CMF según se necesite.)
- **Tarjetas:** blancas, borde sutil de 1px, sombra `sm` suave, radio de 8px; regla de acento superior opcional (morado por defecto, teal para contextos de educación). Las tarjetas interactivas se elevan al hover.

---

## Iconografía

- **Set:** **Lucide** (https://lucide.dev) — línea, 24×24, trazo `1.75`, `currentColor`, extremos/uniones redondeados. Un subconjunto curado se incluye en `ui_kits/portal/Icon.jsx` (`<Icon name="…" />`). Es una **sustitución** — la página de iconos del manual ("iconografías habituales en piezas gráficas CMF") no pudo extraerse; el estilo de línea humanista y calmo de Lucide calza con un regulador público. Reemplázalo por el set oficial si está disponible.
- **Uso:** los iconos apoyan la comprensión, nunca decoran porque sí. En los tiles de servicios se ubican en un chip redondeado morado suave (o teal, para educación). De un solo color, ajustado al contexto (`--color-brand` sobre claro, blanco sobre oscuro).
- **Sin emoji**, sin iconos multicolor/3D, sin mezclar estilo de icono relleno con el set de línea.
- **Unicode/símbolos:** las flechas (→) y los glifos de chevron son aceptables en línea; las comillas usan comillas tipográficas reales ("…").
- **Logo:** nunca recoloreado ni redibujado — ver las tarjetas de marca y las reglas más abajo. Solo tres formas permitidas: color pleno (fondo claro), blanco total (fondo oscuro), timbre de agua `#CCCCCC` (interiores de documentos). Mantén un margen de protección ≈ la altura de la "F".

---

## Índice de archivos / manifiesto

**Raíz**
- `styles.css` — punto de entrada global (los consumidores enlazan este archivo). Solo `@import`s.
- `readme.md` — esta guía.
- `SKILL.md` — front matter de Agent-Skill para usar en Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.

**`assets/logos/`** — `cmf-logo-horizontal-claim.jpg`, `cmf-logo-vertical.png` (transparente), `cmf-logo-vertical.jpg`, `cmf-logo-vertical-white.png` (fondo oscuro), `cmf-logo-vertical-watermark.png` (timbre #CCCCCC), `cmf-logo-vertical-grey-official.jpg` (marca de agua gris oficial del .pptx).

**`assets/backgrounds/`** — `cmf-cover-band-2026.jpeg` (banda navy de red oficial), `cmf-footer-strip-2026.jpg` (pie navy oficial con sitio + iconos sociales), `cmf-network-texture.jpeg` (textura de red sin logo, para heroes).

**`components/`** — primitivos React reutilizables (cada uno: `.jsx` + `.d.ts` + `.prompt.md`, con un `*.card.html` por grupo):
- `core/` — **Button**, **Badge**, **Card**, **Alert**
- `forms/` — **Input**, **Select**, **Checkbox**
- `navigation/` — **Tabs**, **Breadcrumb**

**`ui_kits/portal/`** — recreación del sitio web público de la CMF. `index.html` es la entrada interactiva (Inicio → Trámites → asistente de Reclamo → Educación). Archivos: `Header`, `Footer`, `Home` (+ `Motif`), `Tramites`, `ReclamoForm`, `Educa`, `Icon`.

**`slides/`** — diapositivas de muestra que replican las plantillas PPTX oficiales: `title-oficial-2026` (master oficial 2026 de banda navy), `title`, `section`, `content`, `data`, `closing`.

**`guidelines/cards/`** — tarjetas de especímenes de fundamentos (Colores, Tipografía, Espaciado, Marca) que se muestran en la pestaña Design System.

**Generados (no editar):** `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.

**Namespace:** los componentes quedan expuestos en `window.CMFDesignSystem_8adfb2.<Name>` tras cargar `_ds_bundle.js`.
