Usa **Logo** siempre que la marca CMF aparezca en una interfaz, documento o diapositiva: elige el archivo oficial correcto según el fondo en vez de recolorear.

```jsx
<Logo fondo="oscuro" tam="lg" base="../../" />
```

- `fondo="claro"` → archivo de color · `"oscuro"` → archivo blanco (SVG en web) · `"documento"` → archivo gris.
- `conClaim` por defecto `true`; el manual pide preferir el lockup con claim. Con `vertical` se degrada a sin claim (esa combinación no existe).
- Nunca apliques `filter`, `invert`, `currentColor` ni edites los rellenos del SVG: es una variación prohibida. Reglas completas en `assets/logos/LOGOS.md`.
