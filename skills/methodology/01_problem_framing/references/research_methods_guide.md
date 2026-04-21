---
name: research-methods-guide
description: >
  Guía de referencia para selección de métodos de research, cálculo de tamaño
  de muestra y codificación de datos del Framework Baraldi Etapa 01.
  Leer antes de ejecutar el Momento Feedback cuando se necesita definir metodología
  de recolección de datos. Define qué método usar según qué hipótesis se quiere
  validar, cuántos participantes justifican qué nivel de confianza, y cómo
  codificar los datos recolectados con doble capa de análisis.
version: "2.25.10"
framework: Baraldi
stage: "01 - Problem Framing"
tipo: reference
---

# Guía de Métodos de Research
## Framework Baraldi — Referencia para Momento Feedback y Momento 2

---

## 1. Selección de método según tipo de hipótesis

Antes de proponer la metodología, identificar qué tipo de pregunta responde cada hipótesis del Outcome Definition. El método se elige según la pregunta, no según la preferencia.

| Tipo de hipótesis | Pregunta que responde | Método recomendado | Muestra mínima |
|---|---|---|---|
| Comportamiento | ¿Qué hacen los usuarios? | Analytics + observación | 100+ eventos |
| Motivación | ¿Por qué lo hacen? | Entrevistas cualitativas | 8-15 usuarios |
| Usabilidad | ¿Qué tan bien pueden hacerlo? | Test de usabilidad | 5-8 usuarios |
| Preferencia | ¿Qué prefieren? | Encuesta + A/B test | 50+ usuarios |
| Emoción | ¿Cómo se sienten? | Entrevistas + diary study | 10-15 usuarios |
| Validación de mercado | ¿Existe el dolor? | Entrevistas cualitativas | 8-12 usuarios |

**Regla práctica para Problem Framing:**
En Etapa 01 el objetivo es validar si el problema existe y si las hipótesis son correctas — no medir comportamiento a escala. El método principal casi siempre es entrevistas cualitativas. El benchmark complementa con análisis competitivo.

---

## 2. Cálculo del N — criterio de confianza por tamaño de muestra

El número N no es arbitrario. Usar esta tabla para justificarlo en el Plan de Metodología.

| Tamaño de muestra | Nivel de confianza | Cuándo usar |
|---|---|---|
| 5-10 usuarios | **Bajo** — exploratorio | Primeras hipótesis, dirección inicial |
| 11-30 usuarios | **Medio** — direccional | Validación de hipótesis principales |
| 31+ usuarios | **Alto** — producción | Decisiones estratégicas de producto |

**Para Problem Framing en MVP / etapa 0:**
Un N de 8-12 entrevistas cualitativas produce confianza Media — suficiente para avanzar a Etapa 02 si la hipótesis central se confirma en ≥70% sin inducción. Para proyectos con mayor inversión o riesgo, aumentar a 15-20.

**Criterio de saturación:**
Cuando dos entrevistas consecutivas no producen ningún insight nuevo, se alcanzó saturación — independientemente del N planificado. Documentar cuándo ocurre.

---

## 3. Sistema de doble codificación para análisis de datos

Las notas de entrevista se codifican con DOS capas simultáneas.

### Capa 1 — Orientada a hipótesis (verificación)
Marca si el dato confirma, refuta o es nuevo respecto a las hipótesis del Momento 1.

| Tag | Uso |
|---|---|
| `[CONFIRMA H1]` | El usuario confirma la hipótesis espontáneamente |
| `[REFUTA H2]` | El usuario contradice la hipótesis |
| `[CONFIRMA-IND H1]` | El usuario confirma pero fue inducido por la pregunta |
| `[NUEVO INSIGHT]` | Información no anticipada en las hipótesis |
| `[PENDIENTE]` | Requiere análisis posterior |

### Capa 2 — Orientada a tipo de dato (categorización)
Marca qué tipo de información es el dato, independientemente de las hipótesis.

| Tag | Uso |
|---|---|
| `[GOAL]` | Qué quiere lograr el usuario |
| `[PAIN]` | Qué lo frustra o bloquea |
| `[BEHAVIOR]` | Qué hace realmente (no qué dice que hace) |
| `[CONTEXT]` | Cuándo y dónde ocurre |
| `[QUOTE]` | Palabras exactas del usuario — no parafrasear |

### Cómo aplicar las dos capas

```markdown
> "Siempre termino comprando en tres lugares distintos
>  y nunca encuentro todo en un mismo sitio."
[CONFIRMA H1] [PAIN] [QUOTE]

> "Lo que más me frustra es que no sé si lo que compro
>  va a funcionar con lo que ya tengo."
[CONFIRMA H2] [PAIN] [GOAL] [QUOTE]

> "A veces le pregunto a grupos de WhatsApp antes de comprar."
[NUEVO INSIGHT] [BEHAVIOR] [CONTEXT]
```

**Por qué la doble capa:**
- La Capa 1 alimenta directamente el Informe de Cierre (Momento 3) — qué hipótesis avanza o se descarta.
- La Capa 2 alimenta la Etapa 04 (UX Experience) — qué usuarios, comportamientos y contextos hay que diseñar.
- Codificar solo con Capa 1 produce un análisis correcto para Etapa 01 pero pierde información valiosa para etapas siguientes.

---

## 4. Priorización de hallazgos — fórmula de impacto

Para priorizar los patrones detectados en el Informe de Research:

```
Priority Score = Frequency × Severity × Solvability
```

| Dimensión | Escala | Criterio |
|---|---|---|
| **Frequency** | 1-5 | ¿En cuántas entrevistas apareció? (1=1-2, 5=casi todas) |
| **Severity** | 1-5 | ¿Cuánto impacta en el usuario? (1=molestia leve, 5=bloquea tarea) |
| **Solvability** | 1-5 | ¿Qué tan factible es resolverlo? (1=muy difícil, 5=fácil) |

**Escala de severidad de hallazgos:**

| Nivel | Definición | Acción recomendada |
|---|---|---|
| 4 — Crítico | Impide completar la tarea o alcanzar el objetivo | Resolver antes de avanzar |
| 3 — Mayor | Genera dificultad significativa y pérdida de confianza | Resolver antes del lanzamiento |
| 2 — Menor | Causa hesitación o confusión pero no bloquea | Resolver cuando sea posible |
| 1 — Cosmético | Notado pero no problemático para el usuario | Prioridad baja |

**Uso en el Informe de Research:**
Aplicar esta fórmula a los patrones detectados para ordenar los gaps antes de pasarlos al Momento 3. El Informe de Cierre usa estos scores para argumentar la recomendación de camino.

---

## 5. Tipos de preguntas para entrevistas — referencia rápida

| Tipo | Ejemplo | Para qué usarla |
|---|---|---|
| Contexto | "Contame cómo es tu día típico cuando hacés X" | Entender el ambiente de uso real |
| Comportamiento | "Mostrándome, ¿cómo harías X?" | Observar acciones reales, no declaradas |
| Objetivo | "¿Qué estás tratando de lograr cuando hacés X?" | Descubrir motivaciones profundas |
| Dolor | "¿Cuál es la parte más difícil de X?" | Identificar fricciones reales |
| Reflexión | "¿Qué cambiarías de cómo hacés X hoy?" | Generar ideas sin sugerir soluciones |

**Alertas para el entrevistador:**
- Las preguntas de Comportamiento ("mostrándome") producen datos más confiables que las de Contexto ("contame") — lo que la gente dice que hace y lo que realmente hace suelen diferir.
- Registrar siempre si el dolor emergió de una pregunta directa o espontáneamente — es la diferencia entre `[CONFIRMA H1]` y `[CONFIRMA-IND H1]`.

---

*Framework Baraldi v2 · skills/01_problem_framing/references/research_methods_guide.md*
