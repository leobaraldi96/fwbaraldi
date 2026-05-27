---
name: ai-ui-compliance-audit
description: >
  Protocolo de auditoría cruzada (Cross-Check) para validar que el código de UI 
  generado por IA respeta estrictamente el sistema de diseño (tokens) y no 
  introduce "alucinaciones" visuales o clases genéricas no aprobadas.
keywords: ai-coding, compliance, linter, design-tokens, ui-engineering, feedback-loop, qa
version: "2.26.7"
---

# 🤖 Skill 30 — Protocolo de Auditoría de Cumplimiento de UI Generada por IA

Este protocolo se activa durante la fase de implementación o prototyping para evaluar el código generado por herramientas de IA. Actúa como un "Linter de Alucinaciones Visuales", asegurando que la IA programadora utilice los tokens del `DESIGN.md` y no invente estilos ad-hoc.

## 🕵️‍♂️ Dimensiones de la Auditoría

Al analizar un componente o vista generada por IA, el Agente debe contrastar el código contra la fuente de verdad (DESIGN.md / Tokens) y estructurar su reporte así:

### 1. Control de Cumplimiento (Compliance Check)
- **Colors:** ¿Usa variables del sistema (ej. `var(--primary)`) o alucina colores (ej. `bg-blue-500`)?
- **Typography:** ¿Aplica las escalas de fuente, pesos y familias documentadas?
- **Spacing:** ¿Respeta la escala matemática (padding/margins) del sistema?
- **Shape & Elevation:** ¿Los valores de `border-radius` y `box-shadow` existen en los tokens?

### 2. Detección de Inconsistencias (Hallucination Log)
- **Listado de Violaciones:** Ubicación exacta donde el código ignora el sistema de diseño.
- **Severidad:** Nivel de impacto (ej. **Alta:** rompe accesibilidad; **Baja:** desvío menor en padding).
- **Riesgo de Deuda:** Explicación de cómo esa alucinación complica el mantenimiento a largo plazo.

### 3. Validación Anatómica de Componentes
Por cada componente clave detectado en el código:
- **Estados Interactivos:** ¿Implementó Hover, Focus, Active y Disabled según la **Etapa 06 Momento 2**?
- **Variantes:** ¿Usó la variante correcta definida en el sistema o improvisó una nueva mezclando clases?

### 4. Recomendaciones de Refactorización (Fixes)
- Sustituciones exactas (ej. "Reemplazar `text-[15px]` por el token `text-body-md`").
- Ajustes de patrones estructurales para alinearse al DOM semántico esperado.

### 5. Bucle de Corrección (Refined AI Prompt) ⚡
El entregable de mayor valor. Si la IA programadora falló, este agente debe generar un **Prompt de Corrección Exacto** para que el usuario pueda pegarlo y hacer que la IA arregle su propio código:
> *"Reescribe el componente. Te has desviado del sistema de diseño. Reglas mandatorias: 1. No uses colores absolutos, reemplaza X por Y. 2. Aplica las clases de estado Z para el focus ring. 3. Usa exclusivamente la escala de espaciado rem definida."*

---

## 🚫 NEVER List — Anti-patrones de la Auditoría
- **NUNCA** ignores una alucinación de color por "parecerse" al original. El sistema es binario: o es el token o no lo es.
- **NUNCA** apruebes código que carezca de estados de foco (`:focus`, `:focus-visible`).
- **NUNCA** permitas el uso de unidades absolutas (`px`) en el código auditado.

## ✅ ALWAYS List — Mandatos de la Auditoría
- **SIEMPRE** vincula cada falla a un token específico del `DESIGN.md`.
- **SIEMPRE** prioriza la corrección de la semántica HTML sobre la estética visual.
- **SIEMPRE** genera el prompt de corrección técnica si se detectan más de 3 alucinaciones.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** Durante el desarrollo (Post-Etapa 07), inmediatamente después de que un LLM (o un Junior Dev) genere el código de una UI.
- **Sinergia:** Esta skill cruza los outputs técnicos con los contratos creados en las Etapas 04, 05 y 06.
- **Output:** Reporte de validación técnica + Prompt de autocorrección para la IA.

---
*Framework Baraldi v2.26.7 · Skill 30 · Engine de Auditoría AI*
