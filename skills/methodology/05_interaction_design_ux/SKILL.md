---
name: interaction-design-ux
description: >
  Ejecuta la Etapa 05 (Interaction Design / UX) del Framework Baraldi.
  Define el comportamiento, los estados y el esqueleto de la experiencia.
keywords: ux, interaction design, micro-interactions, states, wireframes, user experience.
status: operational
version: "2.26.4"
---

# Etapa 05 — Interaction Design (UX)

> **Objetivo:** Definir cómo el usuario interactúa con la arquitectura creada en la Etapa 04. Pasamos del "Mapa" al "Movimiento". Aquí se diseñan los comportamientos, los estados de los componentes, el **Sistema de Contenido (Content Systems Architecture)** y la **Handoff Matrix** validada.

---

## 🏗️ Foco en el Comportamiento y Validación
En esta etapa no nos preocupamos por los colores, sino por:
1. **Micro-interacciones:** Qué pasa cuando el usuario hace clic, desliza o espera.
2. **Sistema de Estados:** Definición exhaustiva de Hover, Active, Focus, Disabled, Loading y Error para cada componente.
3. **Validación Multidimensional:** Alineación de cada wireframe con Negocio, Legal, Producto y Voz.

---

## Flujo de la etapa — 3 momentos

1. **[MOMENTO 1] Interaction Patterns & Tone:** Definición de gestos y la personalidad del sistema (Voz).
2. **[MOMENTO 2] State Machine & Content Refactoring:** Mapeo de estados y optimización sistémica del microcopy (Error, Success).
3. **[MOMENTO 3] Handoff Matrix & Wireframes:** Creación del inventario exhaustivo de pantallas y validación final para Etapa 06.

---

## 🛠️ Integración con la Toolbox (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **AI Interaction Engine (`skills/engines/ai_interaction_engine/`):** Si el producto incluye funcionalidades de IA, es MANDATORIO aplicar este protocolo para diseñar la gestión de latencia, estados de "pensamiento" y feedback de errores de la IA.
2. **UX Writing Engine (`skills/engines/ux_writing_engine/`):** Herramienta core para el Momento 2 y 3. Debe usarse para redactar el *VOICE.md* y asegurar que cada mensaje de error o estado de éxito siga principios de voz activa y sentence case.
3. **Design Critique (Consultar Momento 0 de E06):** Facilitar sesiones de revisión con stakeholders usando el protocolo "I like / I wish / What if".
4. **Layers Interaction Engine (`skills/engines/layers_interaction_engine/`):** Utilizar para mapear flujos de interacción detallados y micro-navegación antes de prototipar.
5. **Multimodal Feedback Engine (`skills/engines/multimodal_feedback_engine/`):** Protocolos de feedback multimodal (gestos, audio, haptics, animaciones). Activar cuando el producto tenga interacciones táctiles, de voz o gestuales complejas.

---

## Criterio de calidad
- [ ] Los flujos lógicos de la Etapa 04 están representados en wireframes.
- [ ] El **VOICE.md** está presente, definiendo Tono, Voz y reglas de Microcopy.
- [ ] Cada interacción crítica tiene definidos sus estados de Error y Loading con copy validado.
- [ ] La navegación es intuitiva y sigue patrones de diseño establecidos.

---

## 🚫 NEVER List — Anti-patrones de la Etapa 05
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER diseñes estética (UI):** Esta etapa es de comportamiento. El foco es el movimiento y la lógica de interacción, no el maquillaje.
2.  **NEVER permitas componentes sin sistema de estados:** Hover, Focus, Disabled y Loading son obligatorios. Prohibido omitir estados interactivos.
3.  **NEVER uses gestos ocultos sin pistas:** La interactividad debe ser descubrible. No asumas que el usuario conoce gestos complejos.
4.  **NEVER permitas microcopy vago:** "Error" o "Cargando" son inaceptables. Todo mensaje debe seguir el **VOICE.md** y ser accionable.
5.  **NEVER ignores la latencia en IA:** Prohibido no diseñar los estados de "pensamiento" y los fallos de modelo si el producto usa IA.
6.  **NEVER avances sin Handoff Matrix:** El inventario de pantallas debe ser exhaustivo y validado antes de la alta fidelidad.

## ✅ ALWAYS List — Mandatos de Comportamiento
- **Siempre** justifica la elección de patrones (Tabs, Accordions) basada en la jerarquía de información.
- **Siempre** realiza un "Mental Walkthrough" con el usuario para detectar fricciones antes de cerrar una pantalla.
- **Siempre** redacta el **VOICE.md** definiendo Tono, Voz y reglas gramaticales del sistema.
- **Siempre** utiliza el *AI Interaction Engine* para productos con capacidades de inteligencia artificial.

---

## 🧠 Protocolo de Mentoría y Co-creación (E05)
En esta etapa, el Agente no solo dibuja; enseña y facilita la decisión arquitectónica:
*   **Justificación de Patrones:** Al proponer un layout, el Agente debe explicar por qué ese patrón (ej. Tabs, Accordions, Sidebars) es el más eficiente para la jerarquía de información definida.
*   **Reflexión de Flujo:** Antes de dar una pantalla por cerrada, invitar al usuario a realizar un "Mental Walkthrough": *"¿Qué siente el usuario en este paso? ¿Hay fricción innecesaria?"*.
*   **Content Refactoring:** Al redactar, el Agente debe tratar el texto como código. Refactorizar significa eliminar lo innecesario sin perder el significado, asegurando que el contenido sea una pieza de arquitectura funcional, no solo decoración.
*   **Handoff Consciente:** Explicar al usuario que la claridad lograda aquí es lo que permitirá que la Etapa 06 sea fluida y de alta calidad.

---
*Framework Baraldi v2.26.4 · skills/methodology/05_interaction_design_ux/SKILL.md*
