---
name: ai-ui-compliance-audit
description: >
  Protocolo de auditoría cruzada (Cross-Check) para validar que el código de UI 
  generado por IA respeta estrictamente el sistema de diseño (tokens) y no 
  introduce "alucinaciones" visuales o clases genéricas no aprobadas.
keywords: ai-coding, compliance, linter, design-tokens, ui-engineering, feedback-loop, qa
version: "2.26.3"
---

# 🤖 Skill 30 — AI-Generated UI Compliance Audit Protocol

Este protocolo se activa durante la fase de implementación o prototyping para evaluar el código generado por herramientas de IA. Actúa como un "Linter de Alucinaciones Visuales", asegurando que la IA programadora utilice los tokens del `DESIGN.md` y no invente estilos ad-hoc.

## 🕵️‍♂️ Dimensiones de la Auditoría

Al analizar un componente o vista generada por IA, el Agente debe contrastar el código contra la fuente de verdad y estructurar su reporte así:

### 1. Control de Cumplimiento (Compliance Check)
- **Colors:** ¿Usa variables del sistema (ej. `var(--primary)`) o alucina colores (ej. `bg-blue-500`)?
- **Typography:** ¿Aplica las escalas de fuente, pesos y familias documentadas?
- **Spacing:** ¿Respeta la escala matemática (padding/margins) del sistema?
- **Shape & Elevation:** ¿Los valores de `border-radius` y `box-shadow` existen en los tokens?

### 2. Detección de Inconsistencias (Hallucination Log)
- **Listado de Violaciones:** Ubicación exacta donde el código ignora el sistema de diseño.
- **Severidad:** Nivel de impacto (ej. High: rompe accesibilidad; Low: desvío menor en padding).
- **Riesgo de Deuda:** Explicación de cómo esa alucinación complica el mantenimiento.

### 3. Validación Anatómica de Componentes
Por cada componente clave detectado en el código:
- **Estados Interactivos:** ¿Implementó Hover, Focus, Active y Disabled según la **Etapa 06 Momento 2**?
- **Variantes:** ¿Usó la variante correcta o improvisó una nueva mezclando clases?

### 4. Recomendaciones de Refactorización (Fixes)
- Sustituciones exactas (ej. "Reemplazar `text-[15px]` por `text-body-md`").
- Ajustes de patrones estructurales para alinearse al DOM esperado.

### 5. Bucle de Corrección (Refined AI Prompt) ⚡
El entregable de mayor valor. Si la IA programadora falló, este agente debe generar un **Prompt de Corrección Exacto** para que el usuario pueda pegarlo y hacer que la IA arregle su propio código:
> *"Reescribe el componente. Te has desviado del sistema de diseño. Reglas mandatorias: 1. No uses colores absolutos, reemplaza X por Y. 2. Aplica las clases de estado Z para el focus ring. 3..."*

### 6. Checklist de Aceptación Manual
- Criterios visuales y técnicos que el humano debe corroborar en el navegador (ej. "Verificar que el focus ring sea visible con navegación por Tab").

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** Durante el desarrollo (Post-Etapa 07), inmediatamente después de que un LLM (o un Junior Dev) genere el código de una UI.
- **Sinergia:** Esta skill cruza los outputs técnicos con los contratos creados por las **Skills 23, 25 y 26**.
- **Output:** Reporte de validación + Prompt de autocorrección para la IA.

---
*Framework Baraldi v2.26.3 · Skill 30*
