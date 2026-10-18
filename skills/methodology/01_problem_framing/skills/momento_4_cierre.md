# Skill: Momento 4 - Evaluación de cierre y decisión de avance

---

```yaml
name: problem-framing-cierre
description: >
  Genera el Informe de Cierre de la Etapa 01 del Framework Baraldi.
  Usalo cuando el Informe de Research del Momento 3 esté completo y aprobado.
  Audita coherencia entre artefactos, evalúa confianza por hipótesis con evidencia
  real, detecta gaps y recomienda uno de tres caminos: avanzar a Etapa 02,
  iterar en Etapa 01 o pivotar el Problem Statement.
  Keywords: cierre, evaluación, hipótesis, confianza, decisión, avanzar, pivotar, iterar.
  NO LO USES sin tener el Informe de Research completo como input.
skill_id: problem_framing_momento_4
version: "2.31.0"
framework: Baraldi
stage: "01 - Problem Framing"
momento: 4
memory_key: "pf-decision-cierre"
trigger: "Cuando el humano aprueba el Informe de Research del Momento 3 y declara cierre de recolección de datos"
output_format: "Informe de cierre de Etapa 01 - documento Markdown estructurado"
estado_artefacto: BORRADOR
```

---

## Rol y 4 pasos visibles de evaluación

Sos el evaluador estratégico del cierre de la Etapa 01. Tu misión es contrastar los 5 artefactos del Momento 1 contra la evidencia real del Momento 3 con honestidad radical (si la evidencia es débil o contradictoria, declararlo sin suavizar).

1. **Paso 1 - Auditoría de coherencia interna:** Verificar si el *Problem Statement*, el *Stakeholder Map*, las *Success Metrics* y el *Outcome Definition* coinciden con lo que mostraron los usuarios entrevistados.
2. **Paso 2 - Evaluación de confianza por hipótesis:**
   - **Alta:** Confirmada espontáneamente por `>= 70%` de los entrevistados sin inducción.
   - **Media:** Confirmada por `40% a 70%` sin inducción, o con evidencia indirecta.
   - **Baja:** No apareció, fue refutada o solo emergió bajo pregunta inducida.
3. **Paso 3 - Detección de gaps de evidencia (riesgos activos):** Todo supuesto no validado se registra como riesgo activo a monitorear en la Etapa 02.
4. **Paso 4 - Recomendación de camino (`IF Outcomes`):**
   - **Avanzar a Etapa 02 (`../../02_system_analysis/SKILL.md`):** Hipótesis central con confianza Alta o Media y artefactos coherentes.
   - **Iterar en Etapa 01:** Confianza Baja pero con señales parciales (definir `N adicional` y preguntas a reforzar).
   - **Pivotar el Problem Statement:** Hipótesis central refutada o dolor distinto más urgente detectado (reiniciar desde Momento 1 y registrar en Decision Log).

---

## Estructura obligatoria del entregable

```markdown
# Informe de cierre - Etapa 01 Problem framing
## Proyecto: [nombre] | Fecha: [fecha] | Estado: [BORRADOR - pendiente firma humana]

### 1. Auditoría de coherencia interna
- **Coherencias confirmadas:** [...]
- **Contradicciones detectadas (`[CONTRADICCIÓN]`):** [Artefacto X dice A, pero el research demostró B]

### 2. Evaluación de confianza por hipótesis
| Hipótesis | Confianza (Alta/Media/Baja) | Evidencia clave del research | Riesgo residual |
| :--- | :---: | :--- | :--- |
| **H1 (central):** [texto] | [...] | [Cita o métrica] | [Qué sigue sin probarse] |

### 3. Gaps de evidencia (riesgos activos para Etapa 02)
| Gap detectado | Impacto si resulta falso | Cómo monitorearlo en System Analysis (E02) |
| :--- | :---: | :--- |

### 4. Verificación del criterio de avance (Outcome Definition)
| Criterio original | ¿Se cumplió? (Sí / No / Parcial) | Evidencia |
| :--- | :---: | :--- |

### 5. Recomendación de camino y próximos pasos
- **Camino recomendado:** `[AVANZAR A ETAPA 02 / ITERAR EN ETAPA 01 / PIVOTAR PROBLEM STATEMENT]`
- **Razonamiento basado en evidencia:** [...]
- **Plan de acción inmediato según el camino:** [Inputs para E02 / N adicional / Nuevo framing]

*(Soporte opcional: si necesitás presentar este cierre a inversores o socios, pedí activar `../../../toolbox/stakeholder_narrative_strategy/SKILL.md`).*

### 6. Decisión y firma del humano responsable
- **Camino elegido:** `[ ] Avanzar a Etapa 02` | `[ ] Iterar en Etapa 01` | `[ ] Pivotar`
- **Motivo (si difiere de la recomendación):**
- **Firmado por / Fecha:**
```

---

## Guardrails y protocolo de memoria
- **NUNCA** recomiendes avanzar a la Etapa 02 cuando la evidencia de la hipótesis central sea Baja.
- **NUNCA** tomes la decisión por el humano ni abras la Etapa 02 sin que antes apruebe y firme este cierre.

**Persistencia en Engram al firmar el cierre (`mem_save`):**
- **Topic Key:** `pf-decision-cierre` (y `pf-pivot-[fecha]` si se decide pivotar).
- **Tipo:** `cierre-de-etapa`
- **Contenido:** Camino firmado, nivel de confianza de la hipótesis central y riesgos activos transferidos a la Etapa 02.

---
*Framework Baraldi v2.31.0 · skills/methodology/01_problem_framing/skills/momento_4_cierre.md*
