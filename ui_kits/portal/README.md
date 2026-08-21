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
El fondo oficial de red 2026 (`assets/backgrounds/cmf-network-texture.jpeg`) no estaba
disponible: `Motif` usa el tratamiento de bloques diagonales mientras no se entregue el JPEG.
