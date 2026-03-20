---
name: problem-framing
description: >
  Ejecuta la Etapa 01 completa (Problem Framing) del Framework Baraldi.
  Usalo al inicio de cualquier proyecto nuevo, iteración o nueva feature.
  Guía al equipo desde el contexto inicial hasta outcomes validados con evidencia real,
  activando los momentos de IA en la secuencia correcta.
  Keywords: problem framing, problema, hipótesis, stakeholders, research, entrevistas,
  validación, outcomes, divergencia, producto, etapa 1.
  SIEMPRE usalo cuando el humano mencione "arrancamos", "nuevo proyecto", "etapa 1",
  "problem framing" o provea el contexto inicial de un proyecto.
  NO LO USAR con proyectos que ya tienen la Etapa 01 cerrada.
version: "2.3.3"
framework: Baraldi
stage: "01"
stage_name: "Problem Framing"
status: complete
---

# Etapa 01 — Problem Framing

> **Objetivo:** Comprender con claridad el problema real antes de diseñar cualquier solución.
> Evitar construir sobre supuestos. Producir 5 artefactos validados con evidencia real.

---

## Cuándo se activa esta etapa

| Tipo de entrada | Descripción |
|---|---|
| New project | Proyecto nuevo sin antecedentes |
| Iteración existente | Proyecto en curso que necesita reencuadrar el problema |
| New feature | Feature nueva que requiere validar el problema antes de diseñar |

---

## Flujo de la etapa — 4 momentos en secuencia

```
Contexto inicial del proyecto
        ↓
[MOMENTO 1] Visión y Amplificación de Campo
        ↓
  IF outputs alineados?
  ├── NO → iterar Momento 1
  └── SÍ ↓
[MOMENTO FEEDBACK] Metodología y Soportes
        ↓
  Validar metodología y herramientas
        ↓
[MOMENTO 2] IA Auxiliar on Vivo (entrevistas)
        ↓
  Validar, curar y aprobar recolección
        ↓
[MOMENTO 3] Evaluación de Cierre
        ↓
  Outcomes validados con evidencia real
        ↓
      Etapa 02
```

---

## Los 4 momentos — cuándo activar cada uno

### Momento 1 — Visión y Amplificación de Campo
**Archivo:** `prompts/momento_1_vision.md`
**Activar cuando:** El humano provee el contexto inicial del proyecto.
**Produce:** 5 artefactos — Problem Statement, Opportunity Map, Stakeholder Map, Success Metrics, Outcome Definition.
**Regla clave:** Mostrar siempre el proceso de divergencia antes del output. Nunca saltear.

### Momento Feedback — Metodología y Soportes
**Archivo:** `prompts/momento_feedback_metodologia.md`
**Referencia benchmark:** `references/benchmark_guide.md`
**Activar cuando:** El humano aprueba los artefactos del Momento 1 y escribe "Solicitud continuar".
**Produce:** Plan de metodología + guión de entrevistas + informe de benchmark (6 secciones) + base de datos de entrevistados.
**Regla clave:** El benchmark es un informe completo de 6 secciones. Leer `references/benchmark_guide.md` antes de ejecutarlo.

### Momento 2 — IA Auxiliar / Asistente on Vivo
**Archivo:** `prompts/momento_2_live_assistant.md`
**Activar cuando:** El humano aprueba los soportes y está listo para ejecutar entrevistas.
**Produce:** Briefs por entrevistado, notas estructuradas en tiempo real, informe de research completo.
**Regla clave:** Marcar evidencia con `[CONFIRMA H1]`, `[REFUTA H2]`, `[NUEVO INSIGHT]`. Nunca sacar conclusiones estratégicas durante el research.

### Momento 3 — Evaluación de Cierre
**Archivo:** `prompts/momento_3_cierre.md`
**Activar cuando:** El humano aprueba el Informe de Research y declara cierre de recolección.
**Produce:** Informe de Cierre con recomendación: avanzar / iterar / pivotar.
**Regla clave:** Ejecutar los 4 pasos visibles siempre. La honestidad del informe es no negociable.

---

## Artefactos de salida de la etapa

| Artefacto | Momento | Formato |
|---|---|---|
| Problem Statement | 1 | Documento Markdown |
| Opportunity Map | 1 | Documento Markdown |
| Stakeholder Map | 1 | Documento Markdown |
| Success Metrics | 1 | Documento Markdown |
| Outcome Definition | 1 | Documento Markdown |
| Plan de metodología | Feedback | Documento Markdown |
| Guión de entrevistas | Feedback | Documento Markdown editable |
| Informe de Benchmark | Feedback | Documento Markdown (6 secciones) |
| Base de datos entrevistados | Feedback | Documento Markdown editable |
| Notas de entrevista | 2 | Documento Markdown por entrevista |
| Informe de Research | 2 | Documento Markdown |
| Informe de Cierre | 3 | Documento Markdown con firma |

---

## Modelo de decisión — IF Outcomes

**Avanzar a Etapa 02** — hipótesis central con confianza Alta o Media, artefactos coherentes.

**Iterar en Etapa 01** — hipótesis central con confianza Baja pero evidencia parcial. Definir N adicional y criterio de nuevo cierre.

**Pivotar el Problem Statement** — hipótesis refutada o problema distinto emergió. Documentar en Decision Log y reiniciar desde Momento 1.

---

## Criterio de calidad para cerrar esta etapa

- [ ] Los 5 artefactos del Momento 1 son coherentes entre sí
- [ ] La hipótesis central tiene evidencia del N definido de entrevistas
- [ ] El benchmark tiene las 6 secciones con datos cuantitativos
- [ ] El Informe de Cierre tiene los 4 pasos visibles y la decisión firmada
- [ ] Los gaps de evidencia están documentados como riesgos activos para Etapa 02

---

## Protocolo de comportamiento en esta etapa

- **Nunca** diseñar soluciones o features — esto es etapa de diagnóstico
- **Nunca** presentar hipótesis como hechos validados
- **Siempre** mostrar el proceso de divergencia antes del output
- **Siempre** entregar artefactos como documentos Markdown, no en el chat
- **Siempre** marcar `[HIPÓTESIS]`, `[VALIDADO]`, `[SUPUESTO]` explícitamente

---

*Framework Baraldi v2.3.3 · skills/01_problem_framing/SKILL.md*
