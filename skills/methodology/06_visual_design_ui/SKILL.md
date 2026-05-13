---
name: visual-design-ui
description: >
  Ejecuta la Etapa 06 (Visual Design / UI) del Framework Baraldi.
  Define la estética, los tokens de diseño y los componentes de alta fidelidad.
  Crea el contrato visual para la implementación agéntica (DESIGN.md).
keywords: visual design, ui, tokens, design system, luxury obsidian, design.md, css variables.
status: operational
version: "2.26.0"
---

# Etapa 06 — Visual Design (UI)

> **Objetivo:** Transformar la arquitectura e interacción en una interfaz de alta fidelidad, estética premium y coherencia visual absoluta. El entregable final es el **DESIGN.md**, la "Fuente de Verdad" para que cualquier agente de IA pueda codificar el producto.

---

## 🎨 Selector de Estética (Aesthetic Taste Selector)
El framework es **estéticamente agnóstico**. No fuerza un estilo visual. En su lugar, al iniciar esta etapa, la IA debe consultar qué "Taste" (gusto estético) se alinea con el negocio (inspirado en las arquitecturas de `leonxlnx`):

1. **High-End (SaaS / Premium):** Dark mode profundo (tipo "Luxury Obsidian"), glassmorphism, gradientes sutiles y tipografía moderna (Outfit/Inter). Ideal para herramientas pro y fintech.
2. **Minimalist UI (Productividad):** Fondos blancos puros o grises hiper-suaves, monocromía estricta, alta densidad de datos sin ruido visual. Ideal para dashboards densos.
3. **Industrial Brutalist (Dev Tools):** Bordes crudos, tipografías monoespaciadas, alto contraste en blanco y negro con un solo color de acento. Ideal para herramientas técnicas.
4. **Custom (Design System Existente):** La IA debe leer el sistema del cliente y adherirse estrictamente a él, sin inyectar creatividad no solicitada.

---

## ⚡ Entregable Estrella: DESIGN.md (Agent-First)
Este archivo es obligatorio y debe contener:
1. **Design Tokens (YAML):** Colores primarios, secundarios, estados, escalas de espaciado y tipografía.
2. **CSS Variables Mapping:** Definición de variables para implementación directa.
3. **Component Specs:** Reglas de redondeo (radius), sombras y bordes para componentes core.
4. **Agent Instructions:** Guía en lenguaje natural para que la IA tome decisiones estéticas coherentes.

---

## Flujo de la etapa — 3 momentos

1. **[MOMENTO 1] Design Tokens & Moodboard:** Definición de la paleta y el lenguaje visual.
2. **[MOMENTO 2] High-Fidelity Components:** Creación de la biblioteca de componentes en Figma/Código.
3. **[MOMENTO 3] DESIGN.md Generation:** Consolidación de la fuente de verdad agéntica.

---

## Criterio de calidad
- [ ] El **DESIGN.md** está presente en la raíz de `docs-fwbaraldi/`.
- [ ] Los tokens son consistentes con la identidad de marca definida.
- [ ] La interfaz respeta los principios de accesibilidad (contraste, tamaños).
- [ ] Existe una jerarquía visual clara que guía la atención del usuario.

---
*Framework Baraldi v2.26.0 · skills/methodology/06_visual_design_ui/SKILL.md*
