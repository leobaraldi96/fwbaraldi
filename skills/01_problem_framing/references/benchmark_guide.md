---
name: benchmark-guide
description: >
  Guía completa para ejecutar el Informe de Benchmark Competitivo del Framework Baraldi.
  Leer este archivo antes de ejecutar la sección de benchmark del Momento Feedback.
  Define las 6 secciones obligatorias, las dimensiones de análisis por player,
  el gap analysis y la estructura del plan de acción.
version: "1.0"
framework: Baraldi
stage: "01 - Problem Framing"
tipo: reference
---

# Guía de Benchmark Competitivo
## Framework Baraldi — Referencia para Momento Feedback

> El benchmark no es solo una tabla de comparación.
> Es un informe de 6 secciones que conecta el análisis competitivo
> con las hipótesis del Momento 1 y genera un plan de acción accionable.

---

## Las 6 secciones obligatorias

### Sección 1 — Objetivos y KPIs del benchmark

Define qué área se analiza y qué hipótesis del Outcome Definition este benchmark debe validar o refutar.

```markdown
## Sección 1 — Objetivos y KPIs del benchmark

**Área analizada:** [ventas / contenido / logística / retención / automatización]

**Hipótesis a validar o refutar:**
- [Hipótesis 1 del Outcome Definition]
- [Hipótesis 2]

**KPIs comparables:**
| KPI | Descripción | Cómo se mide | Relevancia |
|---|---|---|---|
| [Precio por módulo] | [desc] | [fuente] | Alta/Media/Baja |
| [Volumen de contenido] | [desc] | [fuente] | |
| [Engagement promedio] | [desc] | [fuente] | |
```

---

### Sección 2 — Listado de players analizados

Tres tipos de players — nunca analizar solo competidores directos.

| Tipo | Descripción | Cuántos incluir |
|---|---|---|
| **Competidor directo** | Mismo segmento, mismo modelo de negocio | 2-4 |
| **Referente funcional** | Otro sector, destaca en un proceso específico | 1-2 |
| **Referente aspiracional** | El estándar global a emular | 1 |

```markdown
## Sección 2 — Players analizados

| # | Nombre | Tipo | URL | Por qué es relevante |
|---|---|---|---|---|
| 1 | [nombre] | Directo / Funcional / Aspiracional | [url] | [razón] |
```

---

### Sección 3 — Fichas por player

Una ficha completa por cada player. **Obligatorio incluir datos cuantitativos con fuente.**
Marcar `[ESTIMADO]` cuando el dato no pudo verificarse directamente.

```markdown
## Sección 3 — Fichas por player

### Player [N] — [Nombre]
**Tipo:** [Directo / Funcional / Aspiracional]
**URL:** [url]

#### Datos cuantitativos
| Dato | Valor | Fuente | Fecha |
|---|---|---|---|
| Precio base | [valor] | [web/review/estimado] | [fecha] |
| Volumen de contenido | [N cursos/videos/posts] | [fuente] | |
| Tamaño de comunidad | [seguidores/alumnos] | [fuente] | |
| Frecuencia de publicación | [posts/semana] | [fuente] | |
| Engagement promedio | [% likes/views] | [fuente] | |

#### Datos cualitativos
- **Propuesta de valor:** [qué promete al usuario en una oración]
- **Modelo de negocio:** [cómo monetiza]
- **Fortaleza principal:** [en qué destaca claramente]
- **Punto débil visible:** [fricción o quejas en reviews públicas]
- **Cross-selling:** [integra productos/servicios complementarios — sí/no/cómo]
- **Validación técnica:** [cómo valida que el usuario aprendió o usó correctamente]
- **Nivel de automatización:** [0% manual / 50% híbrido / 100% automático]
- **Práctica destacada a adaptar:** [qué haría este player que vale considerar]
```

---

### Sección 4 — Análisis comparativo y gap analysis

La parte más estratégica. Compara nuestro proyecto contra cada referente y cuantifica la brecha.

```markdown
## Sección 4 — Análisis comparativo y gap analysis

### Matriz de posicionamiento
| Player | Tipo | Precio | Contenido | Automatización | Validación técnica | Cross-sell |
|---|---|---|---|---|---|---|
| [Nuestro proyecto] | — | [baseline] | [baseline] | [baseline] | [baseline] | [baseline] |
| [Player 1] | | | | | | |

### Gap Analysis
| Dimensión | Nosotros hoy | Mejor referente | Brecha | Esfuerzo para cerrarla |
|---|---|---|---|---|
| [Precio/posicionamiento] | [valor] | [player + valor] | [diferencia] | Alto/Medio/Bajo |
| [Automatización] | | | | |
| [Validación técnica] | | | | |
| [Comunidad/escala] | | | | |

### Cuadrantes de posicionamiento
[Describir en qué cuadrante cae cada player — ej: Alto precio / Alta calidad]
```

---

### Sección 5 — Oportunidades y plan de acción

Lo que la competencia no hace, hace mal, o no hace para este mercado específico.

```markdown
## Sección 5 — Oportunidades y plan de acción

### Listado de oportunidades (gaps de propuesta)
| # | Oportunidad | Inspirado en | Por qué nadie lo hace bien | Impacto potencial |
|---|---|---|---|---|
| 1 | [descripción] | [player referente] | [razón del gap] | Alto/Medio/Bajo |

### Matriz de Oportunidades vs. Esfuerzo
| Oportunidad | Impacto en negocio | Esfuerzo de sistema | Prioridad |
|---|---|---|---|
| [nombre] | Muy Alto / Alto / Medio | Alto / Medio / Bajo | CRÍTICA / ALTA / MEDIA |

### Hoja de ruta de implementación
| Acción | Oportunidad que cierra | Responsable | Plazo | Recursos |
|---|---|---|---|---|
| [acción concreta] | [oportunidad #] | [quién] | [semanas/meses] | [qué se necesita] |
```

---

### Sección 6 — Conclusiones para el Outcome Definition

Conecta el benchmark con las hipótesis del Momento 1. **Esta sección es obligatoria** — sin ella el benchmark queda flotando sin anclaje estratégico.

```markdown
## Sección 6 — Conclusiones para el Outcome Definition

### Qué confirma el benchmark
[Párrafo: hipótesis del Momento 1 que el benchmark refuerza con evidencia]

### Qué refuta o matiza
[Párrafo: hipótesis que el benchmark debilita o matiza]

### Impacto en la propuesta de valor
[Párrafo: cómo lo encontrado cambia o refuerza el posicionamiento del proyecto]

**Confianza generada por este benchmark:** [Alta / Media / Baja] — [justificación]
```

---

## Reglas de calidad del benchmark

Antes de entregar, verificar:
- [ ] Sección 1: tiene KPIs comparables definidos con fuente
- [ ] Sección 2: incluye al menos 1 referente funcional (no solo competidores directos)
- [ ] Sección 3: cada player tiene datos cuantitativos con fuente, no solo cualitativos
- [ ] Sección 4: el Gap Analysis tiene la brecha real entre nosotros y cada referente
- [ ] Sección 5: la Matriz de Oportunidades vs. Esfuerzo está completa con prioridades
- [ ] Sección 6: conecta explícitamente con las hipótesis del Outcome Definition
- [ ] Los datos sin fuente verificable están marcados como `[ESTIMADO]`
- [ ] Las limitaciones del análisis están documentadas en el Metadata

---

## Metadata del documento

```markdown
## Metadata
- Etapa: 01 | Skill: Benchmark | Estado: [BORRADOR]
- Players analizados: [N]
- Fuentes: [lista de fuentes usadas]
- Limitaciones: [qué datos no se pudieron obtener y por qué]
- Pendiente de validación: [qué necesita confirmar el humano]
```

---

*Framework Baraldi v2 · skills/01_problem_framing/references/benchmark_guide.md*
