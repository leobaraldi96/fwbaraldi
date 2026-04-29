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
version: "2.25.11"
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

> **[MEMORIA — Al activar esta etapa]** Buscar en `Engram MCP` hallazgos con prefijo `pf-` del proyecto activo. Presentar al humano cualquier decisión o validación previa relevante antes de ejecutar el Momento 1.

---

## Flujo de la etapa — 4 momentos en secuencia

```
[MOMENTO 0] Anuncio e Intake de Proyecto
        ↓
  Validar inputs suficientes?
  ├── NO → solicitar info faltante
  └── SÍ ↓
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
  Informe de Cierre + Protocolo de Ubicación Sistémica
        ↓
      Etapa 02
```

---

## Los 5 momentos — cuándo activar cada uno

### Momento 0 — Anuncio e Intake de Proyecto
**Archivo:** `skills/momento_0_anuncio.md`
**Activar cuando:** El humano menciona que quiere iniciar un proyecto, la etapa 01 o escribe "arrancamos".
**Produce:** Bienvenida humanizada, explicación de objetivos y solicitud de 5 inputs clave (Intake).

### Momento 1 — Visión y Amplificación de Campo
**Archivo:** `skills/momento_1_vision.md`
**Activar cuando:** El humano provee el contexto inicial del proyecto.
**Produce:** 5 artefactos — Problem Statement, Opportunity Map, Stakeholder Map, Success Metrics, Outcome Definition.
**Regla clave:** Mostrar siempre el proceso de divergencia antes del output. Nunca saltear.

### Momento Feedback — Research Planning Checkpoint (Metodología y Soportes)
**Archivo:** `skills/momento_feedback_metodologia.md`
**Referencia benchmark:** `references/benchmark_guide.md`
**Activar cuando:** El humano aprueba los artefactos del Momento 1 y escribe "Solicitud continuar".
**Produce:** Plan de metodología + guión de entrevistas/encuestas + informe de benchmark (6 secciones) + base de datos de entrevistados.

**⚡ PROACTIVIDAD OBLIGATORIA — Research Planning Checkpoint:**
Antes de diseñar el plan, el framework debe ejecutar el siguiente interrogatorio en este orden. **No asumas que el humano ya tiene el plan definido. Tu rol aquí es guiar, no esperar.**

```
[CHECKPOINT 1 — Diagnóstico de Research Existente]
→ "¿Ya tenés definida una metodología de investigación para este proyecto?"
→ Si SÍ: pedir que comparta el plan para validarlo y enriquecerlo.
→ Si NO: continuar al Checkpoint 2.

[CHECKPOINT 2 — ¿Hay datos existentes?]
→ "¿Contás con datos previos? (encuestas anteriores, feedback de clientes,
   análisis de soporte, reviews públicas, métricas de uso)"
→ Si SÍ: incorporarlos como evidencia base antes de diseñar nuevas metodologías.
→ Si NO: continuar al Checkpoint 3.

[CHECKPOINT 3 — Recomendación Metodológica Proactiva]
→ Basándote en la hipótesis central y el tipo de problema definidos en el Momento 1,
   recomendar proactivamente una combinación de métodos:
   - Problema de DESCUBRIMIENTO → Entrevistas en profundidad (N ≥ 5-8) + Desk Research
   - Problema de VALIDACIÓN → Encuesta cuantitativa (N ≥ 30) + Test de concepto
   - Problema MIXTO → Entrevistas exploratorias (N=5) + Encuesta de validación posterior
   - Presentar las opciones con sus trade-offs (tiempo, costo, profundidad del insight)

[CHECKPOINT 4 — ¿Hay plan de encuesta?]
→ Si el método incluye encuesta: "¿Ya tenés las preguntas diseñadas?"
→ Si SÍ: revisarlas y sugerir mejoras (evitar preguntas leading, añadir escalas, etc.)
→ Si NO: ofrecerse a diseñar el cuestionario completo con escala,
   formato de respuesta recomendado (Likert, abierta, NPS) y soporte sugerido
   (Google Forms, Typeform, u otro). Generar el guión listo para usar.

[CHECKPOINT 5 — Soporte de distribución]
→ "¿Tenés pensado cómo vas a reclutar o distribuir la investigación?"
→ Si NO: sugerir canales concretos según el perfil del usuario target del proyecto.
```

**Regla clave:** El benchmark es un informe completo de 6 secciones. Leer `references/benchmark_guide.md` antes de ejecutarlo.
**Regla anti-pasividad:** Si el humano llega a este momento sin un plan de research definido, **la IA es la responsable de guiarlo**. El framework nunca debe limitarse a esperar que el humano proponga la metodología. La iniciativa es del framework, no del humano.

### Momento 2 — IA Auxiliar / Asistente on Vivo
**Archivo:** `skills/momento_2_live_assistant.md`
**Activar cuando:** El humano aprueba los soportes y está listo para ejecutar entrevistas.
**Produce:** Briefs por entrevistado, notas estructuradas en tiempo real, informe de research completo con **Matriz de Evidencia** (Hipótesis vs. Dato real vs. Hallazgo). Incluye la identificación de hallazgos sutiles por parte del humano.
**Regla clave:** Marcar evidencia con `[CONFIRMA H1]`, `[REFUTA H2]`, `[NUEVO INSIGHT]`. Prohibida la síntesis vaga; cada hallazgo debe asociarse a una pregunta o dato específico. Dar espacio proactivo para que el humano indique hallazgos sutiles o intuitivos.

### Momento 3 — Evaluación de Cierre + Output Format Selection
**Archivo:** `skills/momento_3_cierre.md`
**Activar cuando:** El humano aprueba el Informe de Research y declara cierre de recolección.
**Produce:** Informe de Cierre con recomendación: avanzar / iterar / pivotar.
**Regla clave:** Ejecutar los 4 pasos visibles siempre. La honestidad del informe es no negociable.

**⚡ OUTPUT DIMENSIONS CHECKPOINT (OBLIGATORIO antes de generar el informe):**
Antes de generar cualquier entregable de datos, el framework DEBE interrogar al usuario sobre las 4 dimensiones de salida. Esto es crítico para no confundir un dashboard con un informe.

```
📊 Tenemos los datos procesados. Antes de construirlos, necesito definir 4 variables clave:

1. Naturaleza Analítica: ¿Dashboard o Informe Profundo?
   → Dashboard Ágil: Economía visual, 5-7 métricas clave máximo, para consumo rápido y accionar inmediato.
   → Informe Profundo (Deep Report): Densidad analítica, cruces de datos complejos, pensado para el entendimiento exhaustivo y decisiones a largo plazo.

2. Formato Técnico (Soporte):
   → HTML interactivo, Exportación (CSV/JSON), Documento estático, Infografía.
   *(Nota: Si es un Dashboard exportable para BI como PowerBI/Tableau, por favor indícame qué schema/estructura requiere ese software).*

3. Audiencia (¿Quién lo consume?):
   → Técnico (quiere ver el dato crudo), Ejecutivo C-Level (quiere ver la conclusión rápida), Público general (quiere narrativa accesible).

4. Contexto Físico de Uso:
   → ¿Bajo qué condiciones se leerá esto? (Ej: "En una iPad en el exterior con sol directo", "En pantallas industriales lejanas", "En una oficina tranquila"). Esto dictará mis reglas de contraste tipográfico y ui-tokens.
```

→ **Protocolo de Transparencia de Exclusión (Brief de Filtrado):** 
Si el humano selecciona la ruta **"Dashboard"**, el framework tiene la regla estricta de NO mostrarlo todo. Pero NUNCA debe ocultar datos por asunción. Antes de generar el código, presentá un **Brief de Filtrado**:
*"Dado que es un Dashboard y requerimos economía visual, propongo mantener estas 5 métricas primarias [listar] y dejar fuera estas 3 [listar] porque [motivo]. ¿Estás de acuerdo o preferís cambiar el liderazgo de los datos?"*

→ **Proactividad de Soporte:** Si se elige HTML, ofrecer generar el código (Tailwind, Chart.js) acorde a las elecciones de contraste (Contexto) y densidad (Naturaleza).


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

### Protocolo de Memoria — Etapa 01

**Al iniciar:** Buscar en `Engram MCP` por `pf-` y proyecto activo.

**Al cerrar cada Momento:** Guardar un Hallazgo Sistémico con el aprendizaje clave:
- Momento 1 → Eje: `pf-hipotesis-central` (tipo: `validación` o `decisión`)
- Momento Feedback → Eje: `pf-metodologia-research` (tipo: `decisión`)
- Momento 2 → Eje: `pf-insight-principal` (tipo: `validación`) — Patrones de alta tracción + insights humanos sutiles.
- Momento 3 → Eje: `pf-decision-cierre` (tipo: `cierre-de-etapa`)

**Al cerrar la etapa:** 
1. Ejecutar el Protocolo de Cierre de Ubicación Sistémica del `00_boot/context.md`.
2. Mostrar Mapa de Progreso: `✅ 01 Problem Framing | 🚧 02 System Analysis | 🔲 03 Product Logic`.
3. Ejecutar el Protocolo de Cierre de Sesión del `00_boot/context.md`.

---

*Framework Baraldi v2.25.12 · skills/methodology/01_problem_framing/SKILL.md*
