# Notas de sincronización — Claude Design

- **2026-09-08:** primer contacto con el proyecto "CMF Design System"
  (`projectId` en `config.json`). El proyecto ya existía, poblado a mano
  (mirror de archivos, no generado por este skill) desde el 2026-09-04.
- **No se corrió el conversor de componentes todavía.** Se evaluó el sync
  completo de alta fidelidad (paquete React, 10 componentes) pero se decidió
  no correrlo por ahora: el usuario solo quería subir `guidelines/plantillas-2026-nuevas/`
  y el `readme.md` actualizado, sin tocar ni reestructurar nada existente.
  Se subieron esos archivos con `write_files` directo (mismo estilo mirror que
  ya tenía el proyecto), sin `finalize_plan`/`deletes` amplios.
- **Riesgo para un futuro re-sync completo:** `guidelines/` en el proyecto
  remoto contiene binarios (PDF, PPTX, DOTX/DOCX/POTX/PPTX, `.card.html`) que
  el conversor de componentes no reproduce. Si en el futuro se corre el sync
  completo con las reglas por defecto (`writes`/`deletes` incluyendo
  `guidelines/**`), **hay riesgo real de que se borren** el manual, el PPTX
  oficial, las tarjetas de especímenes y las plantillas nuevas — revisar
  `list_files` y excluir `guidelines/**` de los deletes (o subir su contenido
  aparte, como se hizo hoy) antes de aprobar ese plan.
