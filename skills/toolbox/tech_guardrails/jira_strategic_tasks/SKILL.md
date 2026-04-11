---
name: baraldi-jira-strategic-tasks
description: >
  Protocolo para la creación de tareas en Jira que puentean Diseño y Desarrollo.
  Divide el "Qué" (Producto/UX) del "Cómo" (Implementación técnica).
  Trigger: Al redactar tickets, historias de usuario o especificaciones técnicas.
version: "1.0"
---

# 📋 Jira Strategic Tasks (Baraldi Edition)

Este skill asegura que cada tarea en Jira sea una herramienta de comunicación infalible entre el equipo de Producto y el equipo de IT. Evitamos el "over-engineering" en la descripción y la ambigüedad en la técnica.

## 🧠 La Regla de Oro: Separación de Responsabilidades

Nunca crees una tarea técnica gigante. Divide siempre el trabajo en:
1.  **Parent Task (Estratégico/UX):** Para los Stakeholders. Describe el problema del usuario y el beneficio esperado.
2.  **Child Tasks (Implementación):** Para los Developers. Detalla los archivos afectados, la lógica de datos y los criterios de aceptación técnica.

---

## 🎨 Plantilla de Tarea de Producto (Parent)

```markdown
## 🎯 Objetivo / User Story
Como un {perfil de usuario}, quiero {acción} para que {beneficio estratégico}.

## 📦 Alcance (User Perspective)
- [ ] El usuario puede {funcionalidad principal}.
- [ ] Se visualiza {elemento visual clave}.
- [ ] {Comportamiento esperado en casos de error}.

## 🖼️ Diseño y Referencias
- **Link a Figma:** {URL del prototipo focalizado}
- **Referencia Visual:** Ver etapa 05 del Framework Baraldi.
```

---

## ⚙️ Plantilla de Tarea Técnica (Child)

```markdown
## 🛠️ Detalles de Implementación (Tech)
Implementación técnica del flujo {nombre} para el componente {API/UI}.

## 🚥 Criterios de Aceptación Técnica
- [ ] Endpoints afectados: `{ruta_api}`
- [ ] Componentes UI: `{ruta_componente}`
- [ ] Lógica de validación: {ej: Usar Zod para esquemas}.

## 🧪 Plan de Pruebas
- [ ] Prueba de "Happy Path".
- [ ] Validación de {Edge Case detectado en etapa 01/02}.
```

---

## 🏷️ Convención de Títulos (Baraldi Sync)

Formato: `[TYPE] Descripción corta (Componente)`

- `[BUG]` - Algo que funcionaba y se rompió.
- `[FEATURE]` - Nueva funcionalidad estratégica.
- `[ENHANCEMENT]` - Mejora a algo que ya existe.
- `[HANDOFF]` - Tareas exclusivas de entrega de diseño a dev.

---
*Framework Baraldi v2.9.0 · Disciplina Colaborativa.*
