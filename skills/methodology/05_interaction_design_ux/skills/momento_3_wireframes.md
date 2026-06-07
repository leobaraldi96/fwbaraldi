---
name: momento-3-wireframes
description: Protocolo de alta densidad para la creación, validación y priorización exhaustiva de Wireframes antes del diseño visual.
---

# [MOMENTO 3] Wireframing, Validación & Handoff Matrix

> **Misión:** Transformar la arquitectura e interacción en un esqueleto funcional blindado. Tu objetivo es asegurar que **ninguna pantalla** se quede sin definir y que cada decisión de layout esté alineada con Negocio, Legal, Producto y el tono de Voz.

## 🏁 Paso 1: Inventario Exhaustivo (Sitemap-to-Wireframe)
El Agente debe tomar el Sitemap de la Etapa 04 y listar **TODAS** las pantallas. No se permite "ignorar" pantallas secundarias sin una justificación estratégica.
1.  **Listado Completo:** Crear una tabla con todas las rutas del sistema.
2.  **Estado de Wireframe:** Marcar cada una como [Pendiente], [En Proceso] o [Completado].

## 🧠 Paso 2: Diseño & Alineación Multidimensional
Para cada pantalla, se debe generar el wireframe (ASCII o Tabla) y someterlo a la **Matriz de Validación Baraldi**:

| Dimensión | Criterio de Validación |
| :--- | :--- |
| **Negocio/ROI** | ¿Esta pantalla empuja el KPI principal definido en la Etapa 01? |
| **Producto/Lógica** | ¿Respeta las Business Rules y los estados definidos en la Etapa 03? |
| **Legal/Compliance**| ¿Contiene los disclaimers, checkboxes y textos legales obligatorios? |
| **Voz (VOICE.md)** | ¿El microcopy (botones, errores, empty states) sigue el tono de la marca? |
| **Stakeholders** | ¿Ha sido validada esta estructura con los tomadores de decisión? |

## 📊 Paso 3: Actualización de la Product Master Matrix (PMM)
Al finalizar los wireframes, el Agente debe actualizar el archivo central `PRODUCT_MASTER_MATRIX.md` (iniciado en la Etapa 04) con los nuevos datos de validación. Esta sección actúa como el contrato final para la Etapa 06:

| Pantalla | Prioridad (1-5) | Estado UX (E05) | Notas para Visual Design (UI) |
| :--- | :--- | :--- | :--- |
| Dashboard Principal | 1 (Máxima) | ✅ Validado | Requiere alta densidad de datos (Etapa 06 Momento 0). |
| Registro Step 2 | 2 | ✅ Validado | Foco en CRO; evitar ruidos visuales. |
| ... | ... | ... | ... | ... |

## 🧠 Protocolo de Calidad
- **No omitir estados:** Cada wireframe debe contemplar el estado "Loading" y "Error" (Skill 17).
- **Consistencia:** Si una interacción se definió en el Momento 2, debe estar presente en el Wireframe.
- **Engram Save:** Al cerrar este momento, realizar un `mem_save` con el título *"Handoff Matrix Stage 05 Finalizada"* para que la Etapa 06 tenga el contexto listo.

---
*Framework Baraldi v2.26.12 · Hardened UX Protocol.*
