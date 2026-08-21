# Logo CMF — archivos oficiales y reglas de uso

Fuente: **kit digital de la CMF**, https://kitdigital.cmfchile.cl/logo-CMF.html
(versión 1.3, actualizado 14/05/2026). Consultas: `AreaComunicacionCMF@cmfchile.cl`.

Todos los archivos de esta carpeta se descargaron de ahí **sin modificar**. El manual de marca
completo está en `../templates/Manual-uso-CMF-breve-2026.pdf`.

## Los tres elementos del logo

| Elemento | Regla |
|---|---|
| **Imagen** | Identifica la organización. **Puede** funcionar independiente del texto. |
| **Texto** | Describe la organización. **No puede** funcionar independiente de la imagen. |
| **Claim** | Frase de descripción, se incluye de manera permanente. **No es un eslogan**: es fija, no varía. |

## Las nueve variantes

| Archivo | Variante |
|---|---|
| `logo-CMF-color-claim.png` / `.jpg` | Color horizontal **con claim** |
| `logo-CMF-color-horizontal.png` | Color horizontal |
| `logo-CMF-color-vertical.jpg` | Color vertical |
| `logo-CMF-gris-claim.png` | Gris horizontal **con claim** |
| `logo-CMF-gris-horizontal.png` | Gris horizontal |
| `logo-CMF-gris-vertical.png` | Gris vertical |
| `logo-CMF-blanco-claim.png` | Blanco **con claim** |
| `logo-CMF-blanco-horizontal.png` | Blanco horizontal |
| `logo-CMF-blanco-vertical.png` | Blanco vertical |
| `logo-cmf-blanco.svg` | Blanco con claim, **vectorial** — preferir este en web |
| `logoCMF.ai` | Original Adobe Illustrator |

> `logo-CMF-color-vertical` se publica con extensión `.png` pero el archivo es un **JPEG**.
> Aquí se renombró a `.jpg` para que coincida con su contenido real.

## Preferir la versión con claim

> "Al momento de usar el logo se debe preferir hacerlo con la incorporación del claim."

**El logo con claim no tiene versión vertical.**

Se puede usar **sin claim** solo cuando el claim quedaría ilegible por tamaño, o cuando la marca
CMF aparece de forma secundaria dentro de un documento.

## Los tres casos de uso correcto

| Caso | Situación | Variante |
|---|---|---|
| **1** | Superficie de tono claro o blanco | Color |
| **2** | Interior de documentos, presencia secundaria de marca | Gris (monocromático en tono muy claro) |
| **3** | Superficie oscura, **cualquiera sea su tonalidad o color** | Blanco |

### La regla que más se incumple

> "Uso de logo sobre superficie oscura, cualquiera sea su tonalidad o color,
> **NO se deben hacer variaciones del color del logo ni del claim**."

Sobre fondo oscuro se usa el **archivo blanco oficial**. No se recolorea el archivo de color, ni
con CSS (`filter`, `invert`), ni editando los rellenos del SVG, ni aplicando `currentColor`.
Existe un archivo oficial para cada caso: usarlo.

> "El logotipo sólo puede ser utilizado de las maneras descritas y se debe evitar toda situación
> en la que se deba modificar su color o ubicación."

## Redes sociales

> "La referencia del sitio web y redes sociales, siempre se deben ubicar como una sola unidad visual."

## Colores del logo

El logo trae `#6d4c95`, `#52307e` y `#737373`. **No coinciden** con los tokens de marca de este
sistema (`--cmf-purple-700` = `#5b2b82`, Pantone 268 C). Es esperable: los tokens vienen del manual
de marca y el logo es un archivo cerrado. **No "corregir" los colores del logo para que calcen con
los tokens** — eso sería una variación prohibida.

## Espacio de protección

El manual resumido publicado en el kit digital **no especifica una medida numérica**. El readme de
este sistema de diseño usa la convención "≈ la altura de la F". Mientras no haya una cifra oficial,
tratarla como una convención de este sistema, no como una regla del manual.
