# UI kit — Portal público de la CMF

Recreación de alta fidelidad del sitio web público de la Comisión para el Mercado Financiero,
compuesta con los primitivos de `components/`.

**Entrada:** `index.html` — click-through real: Inicio → Trámites → asistente de Reclamo (3 pasos + folio) → CMF Educa.

| Archivo | Superficie |
|---|---|
| `Header.jsx` | Barra de gobierno + masthead con logo y "Portal de trámites" + nav principal con subrayado |
| `Footer.jsx` | Mapa del sitio en navy, banda de contacto y franja legal |
| `Home.jsx` | Hero con buscador, 6 tiles de servicios, alerta de mercado, sala de prensa |
| `Motif.jsx` | Tratamiento de portada (bloques diagonales) usado por los heroes |
| `Tramites.jsx` | Listado de trámites con pestañas, buscador y filtros |
| `ReclamoForm.jsx` | Trámite de 3 pasos con validación simulada y folio de seguimiento |
| `Educa.jsx` | CMF Educa: simuladores y temas, con acento teal |

**Pendiente / limitación:** Normativa, Estadísticas y Sala de prensa no venían en las fuentes
entregadas; se dejan como páginas vacías con nota explícita en vez de inventar diseño.

Referencia **de contenido** (no visual) en el portal real, revisado el 5 de noviembre de 2026:

- Normativa: https://www.cmfchile.cl/portal/normativa/624/w4-propertyvalue-49149.html (Buscador de normativa – Consulta Global)
- Estadísticas: https://www.cmfchile.cl/portal/estadisticas/626/w4-propertyname-972.html (Estadísticas generales)
- Sala de prensa: https://www.cmfchile.cl/portal/prensa/625/w4-propertyvalue-43349.html (Comunicados; también Presentaciones y Galerías de imágenes)

El portal actual usa otro sistema visual (Bootstrap, con azules, cian y rojo): sirve para saber
qué contenido y funciones necesita cada pantalla, **no para copiar su aspecto**. Si se diseñan,
hacerlo con los tokens y componentes de este sistema.
`Motif` usa el fondo oficial 2026 (`assets/backgrounds/cmf-fondo-oscuro-2026.jpg`); el
tratamiento de bloques diagonales se conserva solo en las diapositivas de sección y cierre.
