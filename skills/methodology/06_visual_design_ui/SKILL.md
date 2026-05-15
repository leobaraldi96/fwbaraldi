---
name: visual-design-ui
description: >
  Ejecuta la Etapa 06 (Visual Design / UI) del Framework Baraldi.
  Define la estética, los tokens de diseño y los componentes de alta fidelidad.
  Crea el contrato visual para la implementación agéntica (DESIGN.md).
keywords: visual design, ui, tokens, design system, luxury obsidian, design.md, css variables.
status: operational
version: "2.26.4"
---

# Etapa 06 — Visual Design (UI)

> **Objetivo:** Transformar la arquitectura e interacción en una interfaz de alta fidelidad, estética premium y coherencia visual absoluta. El entregable final es el **DESIGN.md**, la "Fuente de Verdad" para que cualquier agente de IA pueda codificar el producto.

---

## 🎨 Selector de Estética (Aesthetic Taste Selector)
El framework es **estéticamente agnóstico**. No fuerza un estilo visual. En su lugar, al iniciar esta etapa, la IA debe consultar qué "Taste" (gusto estético) se alinea con el negocio (inspirado en las arquitecturas de `leonxlnx`):

21. **High-End (SaaS / Premium):** Dark mode profundo, glassmorphism, gradientes sutiles y tipografía moderna (Geist / Satoshi / Outfit). Prohibido el uso de Inter en esta categoría por ser un "AI Tell" genérico.
22. **Minimalist UI (Productividad):** Fondos blancos puros o grises hiper-suaves, monocromía estricta, alta densidad de datos sin ruido visual. Ideal para dashboards densos.
23. **Industrial Brutalist (Dev Tools):** Bordes crudos, tipografías monoespaciadas, alto contraste en blanco y negro con un solo color de acento. Ideal para herramientas técnicas.
24. **Custom (Design System Existente):** La IA debe leer el sistema del cliente y adherirse estrictamente a él, sin inyectar creatividad no solicitada.

---

## ⚡ Entregable Estrella: DESIGN.md (Agent-First Contract)
Este archivo es obligatorio y debe cumplir con el **[Protocolo 36] (Taste Design)** para evitar resultados genéricos. Debe contener:
1. **Design Tokens (YAML):** Colores primarios, secundarios, estados, escalas de espaciado y tipografía.
2. **CSS Variables Mapping:** Definición de variables para implementación directa.
3. **Component Specs:** Reglas de redondeo (radius), sombras y bordes para componentes core.
4. **Anti-Patterns List:** Lista de elementos prohibidos para este proyecto específico.

---

## Flujo de la etapa — 4 momentos

0. **[MOMENTO 0] Design Intelligence:** El Motor Anti-Slop. Calibración de Taste, Layout y Guardrails UX (Reemplaza antiguas Skills 24, 36 y 38).
1. **[MOMENTO 1] Design Tokens & Moodboard:** Definición de la paleta y el lenguaje visual. Generación del Sistema de Tokens Base.
2. **[MOMENTO 2] High-Fidelity Components:** Creación de la biblioteca de componentes (Lógica Bottom-Up y Contrato Handoff).
3. **[MOMENTO 3] DESIGN.md Generation:** Consolidación de la fuente de verdad agéntica.
4. **[MOMENTO 4] Interactive Prototyping (Artifact):** Generación de un prototipo interactivo (React/Tailwind) listo para testeo.

---

## 🛠️ Integración con la Toolbox (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Momento 4 (Interactive Prototyping):** MANDATORIO para testeo de alta fidelidad.
2. **Skill 10 (i18n Readiness Audit):** MANDATORIO antes de cerrar el Momento 3.
3. **Skill 12 & 13 (Accessibility & Screen Reader):** Mandatorio durante el Momento 2.
4. **Skill 19 (Performance & Web Vitals):** Consultar para optimizar el peso de los assets visuales.
5. **Design Critique Engine (`skills/engines/design_critique_engine/`):** Revisión y pulido estético.
6. **Etapa 07 - Momento 2 (Figma-to-Code Sync):** Mandatorio para el **Momento 3** (Extracción vía API).
7. **Visual Reverse Engineering Engine (`skills/engines/visual_reverse_engineering_engine/`):** Recomendado para el **Momento 1** (Extracción vía Vision).
8. **Token Audit Engine (`skills/engines/design_token_audit_engine/`):** Auditoría matemática de consistencia de tokens.
9. **Component Inventory Engine (`skills/engines/component_inventory_engine/`):** Priorización estratégica de construcción.

---

## Criterio de calidad
- [ ] El **DESIGN.md** está presente en la raíz de `docs-fwbaraldi/`.
- [ ] Los tokens son consistentes con la identidad de marca definida.
- [ ] Se ha preparado el terreno para la sincronización 1:1 con Figma (Etapa 07 - Momento 2).
- [ ] La interfaz respeta los principios de accesibilidad (contraste, tamaños).
- [ ] Existe una jerarquía visual clara que guía la atención del usuario.

---

## 🚫 NEVER List — Anti-patrones de la Etapa 06
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER uses tipografías genéricas (Inter) en High-End:** El uso de Inter en productos premium es un "AI Tell". Usa Geist, Satoshi o Outfit.
2.  **NEVER permitas "Alucinaciones Visuales":** Todo componente debe usar los tokens definidos en el `DESIGN.md`. Prohibido inventar clases ad-hoc.
3.  **NEVER avances sin el DESIGN.md:** Este archivo es el contrato agéntico. Sin él, no hay fuente de verdad para el desarrollo.
4.  **NEVER ignores la auditoría i18n:** El diseño debe estar preparado para traducciones y expansión de textos.
5.  **NEVER entregues un diseño final sin hitos de decisión:** La UI es el resultado de una calibración continua con el humano.
6.  **NEVER ignores los estándares A11y en tokens:** Contraste y tamaños deben ser validados matemáticamente.

## ✅ ALWAYS List — Mandatos de Comportamiento
- **Siempre** justifica la estética basada en beneficios técnicos (legibilidad) o psicológicos.
- **Siempre** utiliza el *Taste Spectrum* como una conversación para calibrar el diseño.
- **Siempre** prepara el terreno para la sincronización 1:1 con Figma (API Sync).
- **Siempre** documenta las reglas de redondeo, sombras y elevación en las especificaciones.

---

## 🧠 Protocolo de Mentoría y Co-creación (E06)
En la fase visual, el Agente actúa como un **Director de Arte** que educa el ojo del usuario:
*   **Justificación Estética:** Al proponer una tipografía o color, explicar su beneficio técnico (ej. *"Esta fuente tiene una altura de x [x-height] generosa que mejora la legibilidad en pantallas pequeñas"*) o psicológico.
*   **Reflexión de Taste:** Usar el **Taste Spectrum (Momento 0)** no como un cuestionario, sino como una conversación: *"Si subimos la densidad aquí, ganamos eficiencia pero perdemos aire. ¿Cómo crees que afectará esto a tu usuario en [Contexto definido en E01]?"*.
*   **Decisión Compartida:** Nunca entregar un diseño finalizado sin haber transitado los hitos de decisión con el humano.

---
*Framework Baraldi v2.26.4 · skills/methodology/06_visual_design_ui/SKILL.md*
