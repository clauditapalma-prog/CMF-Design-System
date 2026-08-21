Filtra una misma lista por categoría dentro de una página (no para navegar entre secciones del sitio: eso es el header).

```jsx
<Tabs value={tab} onChange={setTab} items={[{ id: 'todos', label: 'Todos', count: 24 }, { id: 'usuarios', label: 'Usuarios' }]} />
```

- El subrayado de 4px anima con `--ease-out`; el contador sólo va en la pestaña que resume el total.
