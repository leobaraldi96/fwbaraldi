---
name: handover-qa
description: >
  Ejecuta la Etapa 07 (Handover & Quality Assurance) del Framework Baraldi.
  Establece los protocolos de entrega a desarrollo, validación de completitud
  y auditoría técnica/visual final.
keywords: handover, qa, quality-assurance, design-handoff, completeness-audit, developer-handoff
status: operational
version: "2.26.3"
---

# Etapa 07 — Handover & Quality Assurance

> **Objetivo:** Auditar y certificar que el diseño (arquitectura, interacción y UI) está 100% completo, accesible y técnicamente preparado para ser implementado por el equipo de ingeniería (o agentes de desarrollo) sin bloqueos ni ambigüedades.

---

## 🚦 Flujo de la etapa — El Criterio "Go/No-Go"

Esta etapa actúa como la aduana final antes del desarrollo. Si el producto no pasa esta etapa, debe regresar a las Etapas 05 o 06 para resolución.

1. **[MOMENTO 1] Design Completeness Audit:** Revisión exhaustiva de edge cases, estados interactivos, manejo de errores y cobertura de pantallas.
2. **[MOMENTO 2] Visual & Token QA:** Auditoría para garantizar que la implementación respeta los tokens fundamentales (usando ingeniería inversa o sincronización de Figma).
3. **[MOMENTO 3] Handoff Documentation:** Entrega final de activos (SVG, variables, especificaciones de componentes) al entorno de desarrollo.

---

## 🛠️ Integración con la Toolbox (Bridge Architecture)
Para asegurar un cierre de grado industrial, el Agente debe ejecutar los siguientes protocolos:

1. **Skill 18 (Technical SEO & Visibility Audit):** Auditoría final para garantizar que la estructura DOM resultante sea indexable.
2. **Skill 05 (Product Launch Protocol):** Consultar en el **Momento 3** para planificar la orquestación del lanzamiento.
3. **Skill 16 (Sales Enablement & Pitch Protocol):** Usar los activos del Handoff para crear el resumen ejecutivo y decks de venta.
4. **Skill 32 (AI System Prompt Compiler):** Generar los system prompts si la implementación la realizará un agente de IA.

---

## Criterio de calidad
- [ ] El 100% de los puntos del **Momento 1 (Completeness Audit)** han sido auditados y aprobados.
- [ ] No existen pantallas con "Lorem Ipsum" (Copy finalizado).
- [ ] Los casos de borde (errores de red, estados vacíos, límites de caracteres) están documentados en el **Momento 3**.
- [ ] Los activos (íconos, imágenes) están exportados y accesibles.

---
## 🧠 Protocolo de Mentoría y Co-creación (E07)
En el cierre, el Agente actúa como un **Guardián de la Excelencia y Mentor de Handoff**:
*   **Empatía por el Desarrollador:** Explicar por qué el rigor en el QA beneficia al equipo: *"Cada estado que definimos aquí es una duda menos para el desarrollador y una hora menos de retrabajo"*.
*   **Pedagogía de la Calidad:** No solo marcar errores, sino explicar su impacto en el producto final: *"Si dejamos este campo sin límite de caracteres, el diseño se romperá en producción cuando el usuario escriba un texto largo"*.
*   **Reflexión del Viaje de Producto:** Invitar al humano a mirar hacia atrás: *"Hemos transitado desde un problema en la E01 hasta una solución blindada en la E07. ¿Qué es lo que más te enorgullece de este sistema?"*.
*   **Cierre de Aprendizaje:** Asegurar que el humano se sienta dueño de la lógica y estética que ha co-creado.

---
*Framework Baraldi v2.26.3 · skills/methodology/07_handover_qa/SKILL.md*
