# CMF-plantilla-2026.pptx — qué se corrigió

Preparado por el **Departamento de Arquitectura Tecnológica** para incorporar al sistema de diseño.

El archivo original se conserva sin tocar como `CMF-plantilla-2026.original.pptx`, para poder
comparar y para poder volver atrás.

**La gráfica no cambia**: mismos colores, tipografías, portada, franjas y logotipos. Las tres
diapositivas de muestra se conservan tal cual. Todo lo que sigue es estructura del archivo.

---

## 1 · El archivo pedía reparación al abrirse

PowerPoint avisaba que el archivo tenía un problema y ofrecía repararlo. Ocurría también con
cualquier presentación construida a partir de la plantilla.

**La causa:** el **patrón de notas compartía tema** con el patrón de diapositivas. Ambos apuntaban a
`theme1.xml`. Todo archivo de PowerPoint bien formado tiene un tema por patrón —uno para las
diapositivas y otro para las notas—, y PowerPoint no tolera que se compartan.

**Qué se hizo.** El patrón de notas recibe `theme2.xml`, copia exacta del original con otro nombre
para distinguirlos. Como es una copia, la gráfica es idéntica.

### Una advertencia para quien construya sobre esta plantilla

Hay un segundo defecto de la misma familia que **no está en la plantilla** pero aparece en cuanto se
la usa como base: las propiedades del documento —`docProps/app.xml`— declaran el número de
diapositivas y sus títulos. En la plantilla son tres y hay tres, así que está bien. Pero si se
quitan o agregan diapositivas por programa y no se actualizan esas propiedades, el archivo termina
declarando tres diapositivas y conteniendo cuarenta, y PowerPoint pide repararlo.

Si vas a generar presentaciones desde esta plantilla con herramientas como `python-pptx`, recuerda
reescribir `docProps/app.xml` al guardar. `build/presentacion.py` de este proyecto lo hace.

---

## 2 · «Nueva diapositiva» no ofrecía nada de la marca

La plantilla traía un único diseño llamado `DEFAULT`, sin marcadores de posición. Quien insertaba una
diapositiva obtenía una lámina en blanco, así que la práctica era duplicar las diapositivas de
muestra y sobrescribirlas a mano.

Las tres diapositivas prototipo se convirtieron en **cuatro diseños reutilizables**, que ahora
aparecen en el selector de diseño:

| Diseño | Marcadores | Para qué |
|---|---|---|
| **CMF Portada** | Título, nombre, cargo/dirección, fecha, folio | Primera lámina |
| **CMF Sección** | Antetítulo y título | Separador entre bloques |
| **CMF Contenido** | Antetítulo, título y cuatro viñetas | Lámina de trabajo |
| **CMF En blanco** | — | Lámina con la marca, para componer libre |
| **CMF Separador** | Número de bloque, antetítulo, título y bajada | Corte entre bloques, a sangre |

### Sobre «CMF Separador»

Es el único diseño que no se deriva de una diapositiva prototipo: se construyó nuevo. La razón es
que `CMF Sección` comparte antetítulo, título y regla de acento con `CMF Contenido`, así que
proyectado un separador se confunde con una lámina más. Este invierte el contraste —fondo
institucional a sangre, tipografía en blanco y el número del bloque como marca de agua— para que el
corte se lea desde el fondo de la sala.

**Se agrega, no reemplaza.** `CMF Sección` se conserva tal cual: cambiarlo rompería las
presentaciones que ya lo usan.

El número del bloque es un marcador que se escribe a mano —`01`, `02`—, no un campo automático:
PowerPoint no tiene un contador de secciones. La bajada es opcional; si se deja vacía, desaparece.

Las cajas de texto se redimensionaron a la banda de contenido de la marca —de 1,00" a 19,00", que es
donde la propia plantilla dibuja su línea de pie—. En el original estaban dimensionadas al texto de
muestra: el pie derecho medía 1,18" porque eso ocupa «Marzo 2026 · 3», de modo que cualquier
contenido real se partía en dos líneas.

El diseño `DEFAULT` se conserva, porque es al que apuntan las tres diapositivas de muestra.

---

## 3 · El número de página estaba escrito a mano

El pie decía `Marzo 2026 · 3` como texto literal, así que toda diapositiva heredaba el número 3.

El número pasó a ser un **campo de número de diapositiva**, que PowerPoint resuelve solo. La fecha
sigue siendo texto editable, que es lo que corresponde.

---

## 4 · Higiene del paquete

Dos arreglos menores, que **no eran la causa del aviso de reparación** pero conviene dejar limpios:

- **Dos imágenes eran JPEG con extensión `.png`.** Se renombraron a `.jpeg`, que es lo que realmente
  son, y se actualizaron las referencias. Vale aclarar que esto por sí solo no rompe el archivo:
  otros `.pptx` que abren sin problema tienen la misma inconsistencia.
- **`[Content_Types].xml` declaraba dos patrones de diapositiva** —`slideMaster2` y `slideMaster3`—
  que no existen dentro del archivo. Se retiraron esas dos declaraciones.

---

## Qué se conserva idéntico

- Las seis imágenes, **byte a byte**.
- Las tres diapositivas de muestra.
- El patrón de diapositivas, el tema, la paleta y las tipografías.
- El tamaño de lámina: 20 × 11,25 pulgadas.

El archivo pesa menos que el original (778 KB contra 1,0 MB) sólo porque el original guardaba 53 de
sus partes sin comprimir.

## Cómo se regenera

```bash
python3 build/corregir_plantilla.py
```

Lee `CMF-plantilla-2026.original.pptx` y escribe `CMF-plantilla-2026.pptx`. El script está comentado
y es la referencia de qué hace cada corrección.
