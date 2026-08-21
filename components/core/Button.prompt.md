Acción principal de cualquier pantalla o formulario CMF; usa **primary** una sola vez por vista.

```jsx
<Button variant="primary" iconEnd={<Icon name="arrowRight" size={16} color="#fff" />}>Continuar</Button>
```

- `secondary` (contorno 2px) para acciones alternativas, `ghost` para "Cancelar"/"Atrás".
- `accent` (teal) sólo en contextos de educación financiera; `danger` para acciones destructivas.
- Hover oscurece al tono fuerte; press baja 1px. No hay escala ni rebote.
