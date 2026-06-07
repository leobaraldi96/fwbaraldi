---
name: ai-ui-compliance-audit
description: >
  Protocolo de auditoría cruzada (Cross-Check) para validar que el código de UI 
  generado por IA respeta estrictamente el sistema de diseño (tokens) y no 
  introduce "alucinaciones" visuales o clases genéricas no aprobadas.
keywords: ai-coding, compliance, linter, design-tokens, ui-engineering, feedback-loop, qa
version: "2.26.13"
---

# 🤖 Skill 30 — Protocolo de Auditoría de Cumplimiento de UI Generada por IA

Este protocolo se activa durante la fase de implementación o prototyping para evaluar el código generado por herramientas de IA. Actúa como un "Linter de Alucinaciones Visuales", asegurando que la IA programadora utilice los tokens del `DESIGN.md` y no invente estilos ad-hoc.

## 🕵️‍♂️ Dimensiones de la Auditoría

Al analizar un componente o vista generada por IA, el Agente debe contrastar el código contra la fuente de verdad (DESIGN.md / Tokens) y estructurar su reporte así:

### 1. Control de Cumplimiento (Compliance Check & Copy/Style Lock)
- **Principio No Inline Values:** Auditar que el código no contenga valores en bruto (ej. HEX directos como `#1d4ed8`, margins fijos en `20px`). Todo debe resolverse mediante variables CSS (ej. `var(--color-primary)`) o clases de Tailwind (ej. `bg-primary`) registradas.
- **Colors & Contrast:** Validar que los colores mapeados a elementos de texto y fondo cumplan la relación de contraste WCAG (mínimo 4.5:1).
- **Typography:** Validar familias display/body aplicadas y la exclusión de fuentes prohibidas (como `Inter` en gamas altas).

### 2. Detección de Inconsistencias (Hallucination & Token Leak Log)
- **Listado de Violaciones:** Ubicación exacta donde el código ignora el sistema de tokens o inyecta estilos arbitrarios.
- **Tokens Huérfanos o Rotos:** Reportar el uso de clases que intentan simular el token pero que no se corresponden con el YAML oficial del `DESIGN.md`.
- **Riesgo de Deuda:** Explicación de cómo esa alucinación complica el mantenimiento a largo plazo.

### 3. Validación Anatómica de Componentes (YAML Schema Compliance)
Por cada componente clave detectado en el código:
- **Cumplimiento de Estructura YAML:** Validar que los estilos asignados en el código coincidan exactamente con la definición del bloque `components:` del `DESIGN.md`.
- **Estados Interactivos Estables:** Validar la correcta implementación de los estados `default`, `active` y `disabled` indicados en la estructura de componentes del YAML.
- **Hover Transitions:** Asegurar que las micro-interacciones sigan las reglas simplificadas de transición física de amortiguador (spring) sin glow exterior.

### 4. Responsividad y Accesibilidad Física
- **Responsive Behavior:** Verificar breakpoints y transiciones según la sección 7 del `DESIGN.md`.
- **Áreas Táctiles Mínimas:** Asegurar que los botones y enlaces interactivos tengan un tamaño físico de interacción mínimo de `44x44px` en móviles.

### 5. Recomendaciones de Refactorización y Bucle de Corrección (Refined AI Prompt) ⚡
Generar un **Prompt de Corrección Exacto** para que la IA corrija su código automáticamente:
> *"Reescribe el componente. Te has desviado del contrato visual de DESIGN.md. Reglas mandatorias: 1. No uses valores en bruto (HEX o px), reemplaza X por la variable de token Y. 2. Los estados del componente (default, active, disabled) deben alinearse estrictamente al YAML. 3. Incrementa el área táctil en móviles a un mínimo de 44x44px."*

---

## 🚫 NEVER List — Anti-patrones de la Auditoría
- **NUNCA** ignores un valor en duro (HEX o pixelaje plano) en el código. El sistema es binario: o consume el token o es una alucinación (violación de Copy/Style Lock).
- **NUNCA** apruebes componentes interactivos que carezcan de estados de foco (`:focus`, `:focus-visible`) o estados deshabilitados (`:disabled`).
- **NUNCA** dejes pasar elementos táctiles que no cumplan con el estándar mínimo de `44x44px` en interfaces adaptativas.

## ✅ ALWAYS List — Mandatos de la Auditoría
- **SIEMPRE** vincula cada falla a un token o componente específico de la estructura YAML del `DESIGN.md`.
- **SIEMPRE** prioriza la validación de la accesibilidad y el contraste de colores sobre la coincidencia visual subjetiva.
- **SIEMPRE** genera el prompt de corrección técnica si se detectan violaciones al principio de "No Inline Values".

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** Durante el desarrollo (Post-Etapa 07), inmediatamente después de que un LLM (o un Junior Dev) genere el código de una UI.
- **Sinergia:** Esta skill cruza los outputs técnicos con los contratos creados en las Etapas 04, 05 y 06.
- **Output:** Reporte de validación técnica + Prompt de autocorrección para la IA.

---
*Framework Baraldi v2.26.13 · Skill 30 · Engine de Auditoría AI*
