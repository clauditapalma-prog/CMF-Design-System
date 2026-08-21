Ubica al usuario en la jerarquía del portal; obligatoria en toda página interior de trámite.

```jsx
<Breadcrumb items={[{ label: 'Inicio', href: '#' }, { label: 'Trámites', href: '#' }, { label: 'Presentar un reclamo' }]} />
```

- El último ítem va sin `href`, en semibold y color fuerte. Separador `/` en color de borde.
