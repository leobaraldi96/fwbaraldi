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
version: "2.26.12"
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

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
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

### [PASO 0] Ecosystem Setup (Configuración del Entorno)
Antes de iniciar el Problem Framing, el Agente debe solicitar y documentar:
1. **Composición del Equipo:** ¿Lobo Solitario o Equipo? (Si es equipo, listar integrantes y roles: Dev, UX, PM, etc.).
2. **Gobernanza:** ¿Es un proyecto propio (In-house) o para un tercero (Cliente/Stakeholders)?
3. **Nivel de Burocracia Metodológica:** Informar al usuario que el framework ajustará la profundidad de los workshops y facilitación basándose en este setup.
4. **Reconfigurabilidad:** Indicar que este setup puede ser redefinido en cualquier momento si el equipo crece o cambia el contexto.
5. **Brand & Identity Assets (Herencia de Marca):** ¿Existe un Brandbook, manual de marca o librería de iconos mandatoria?
    *   **Si SÍ existe:** Capturar y auditar su viabilidad digital.
    *   **Si NO existe:** El Agente DEBE actuar como mentor técnico, guiando al usuario a elegir cimientos sólidos mediante la reflexión:
        *   **Tipografía:** Invitar a explorar [Google Fonts](https://fonts.google.com/). Explicar la importancia de las **Web Fonts** (Rendimiento, Consistencia y Licencias).
        *   **Iconografía:** Invitar a explorar [Lucide](https://lucide.dev/) o [Phosphor](https://phosphoricons.com/). Explicar la ventaja de los **vectores (SVG)** para la escalabilidad.
    *   **Misión:** El Agente explica los "porqués" técnicos, pero el **Humano decide**.
6. **Stack Tecnológico & Plataforma:** ¿Se ha definido el uso de un framework (ej. Bootstrap, Tailwind) o plataforma específica (ej. WordPress, Shopify, SAP)?
    *   **Escenario A (Framework/Plataforma):** Explicar que estos imponen **"Límites Creativos Saludables"**. El Agente debe guiar al usuario a respetar el sistema nativo para evitar sobrecostos.
    *   **Escenario B (A Medida / Vanilla):** Explicar que la libertad es absoluta, pero la responsabilidad de consistencia es mayor. El **DESIGN.md (E06)** será la única "ley" del sistema. Sin un framework externo, cada decisión atómica debe ser documentada con rigor para evitar caos en el desarrollo.
    *   **Registro Obligatorio:** Todas estas definiciones DEBEN quedar plasmadas en la **PRODUCT_MASTER_MATRIX.md (Skill 39)** dentro de la sección inicial **"0. Foundational DNA"**. Este artefacto es la "Cápsula del Tiempo" que garantiza que el ADN del producto no se degrade y pueda ser auditado en las Etapas 04, 05, 06 y 07.
    *   **Misión Final:** El Agente entrega al usuario el link a este artefacto como el primer gran hito de alineación del proyecto.

### Momento 1 — Visión y Amplificación de Campo
**Archivo:** `skills/momento_1_vision.md`
**Activar cuando:** El humano provee el contexto inicial del proyecto.
**Produce:** 5 artefactos — Problem Statement, Opportunity Map, Stakeholder Map, Success Metrics, Outcome Definition.
**Regla clave:** Mostrar siempre el proceso de divergencia antes del output. Nunca saltear.

### Momento Feedback — Research Planning Checkpoint (Metodología y Soportes)
**Archivo:** `skills/momento_2_feedback_metodologia.md`
**Activar cuando:** El humano aprueba los artefactos del Momento 1 y escribe "Solicitud continuar".
**Produce:** Plan de metodología + guión de entrevistas/encuestas + informe de benchmark + base de datos de entrevistados.

**⚡ PROACTIVIDAD OBLIGATORIA — Research Planning Checkpoint:**
Antes de diseñar el plan, el framework debe ejecutar el siguiente interrogatorio en este orden. **No asumas que el humano ya tiene el plan definido. Tu rol aquí es guiar, no esperar.**

```
[CHECKPOINT 1 — Diagnóstico de Research Existente]
→ "¿Ya tenés definida una metodología de investigación para este proyecto?"
→ Si SÍ: pedir que comparta el plan para validarlo y enriquecerlo.
→ Si NO: continuar al Checkpoint 2.

[CHECKPOINT 2 — ¿Hay datos existentes?]
→ "¿Contás con datos previos? (encuestas, feedback, soporte, reviews, analítica)"
→ Si SÍ: incorporarlos como evidencia base antes de diseñar nuevas metodologías.
→ Si NO: continuar al Checkpoint 3.

[CHECKPOINT 3 — Recomendación Metodológica Proactiva (Research Matrix)]
→ Basándote en la hipótesis central, recomendar el método adecuado:
   - Hipótesis de Comportamiento (Qué hacen) → Analytics + Obs (N > 100)
   - Hipótesis de Motivación (Por qué lo hacen) → Entrevistas Cualitativas (N = 8-15)
   - Hipótesis de Usabilidad (Qué tan bien lo hacen) → Test de Usabilidad (N = 5-8)
   - Hipótesis de Preferencia (Qué prefieren) → Encuesta + A/B Test (N > 50)
   - Validación de Mercado (Existe el dolor) → Entrevistas exploratorias (N = 8-12)

[CHECKPOINT 4 — ¿Hay plan de encuesta?]
→ Si el método incluye encuesta: "¿Ya tenés las preguntas diseñadas?"
→ Si SÍ: revisarlas y sugerir mejoras (evitar leading questions, añadir Likert, etc.)
→ Si NO: ofrecerse a diseñar el cuestionario completo con escala.

[CHECKPOINT 5 — Soporte de distribución]
→ "¿Tenés pensado cómo vas a reclutar o distribuir la investigación?"
→ Si NO: sugerir canales concretos según el perfil del usuario target del proyecto.
```

**Regla clave (El Benchmark Competitivo):** Si se requiere un Benchmark, **NUNCA** entregar una tabla simple. El entregable obligatorio debe tener 6 secciones:
1. **Objetivos y KPIs:** Hipótesis a validar y métricas de comparación.
2. **Players:** Incluir Directos, Referentes Funcionales y Referentes Aspiracionales.
3. **Fichas por Player:** Datos cuantitativos (con fuente o marcados `[ESTIMADO]`) y cualitativos.
4. **Gap Analysis (El Valor Central):** Matriz de posicionamiento evaluando **Nuestra Brecha** vs referente y el **Esfuerzo de Sistema** (Alto/Medio/Bajo) para cerrarla.
5. **Oportunidades:** Plan de acción accionable.
6. **Conclusiones:** Qué hipótesis confirma o refuta este benchmark.

**Regla anti-pasividad:** Si el humano llega a este momento sin un plan de research definido, **la IA es la responsable de guiarlo**. El framework nunca debe limitarse a esperar que el humano proponga la metodología.

### Momento 2 — IA Auxiliar / Asistente on Vivo (Research Execution)
**Archivo:** `skills/momento_3_live_assistant.md`
**Activar cuando:** El humano aprueba los soportes y está listo para ejecutar entrevistas o encuestas.
**Produce:** Briefs por entrevistado, notas estructuradas en tiempo real, matriz de evidencia.

**⚡ REGLAS DE ORO PARA ENTREVISTAS (Discovery & JTBD):**
Al generar o analizar guiones cualitativos, el Agente debe aplicar el rigor de Teresa Torres:
1. **Recolectar Historias, NO Opiniones:** 
   - ❌ *Mala Pregunta:* "¿Qué te gusta de esta herramienta?"
   - ✅ *Buena Pregunta:* "Cuéntame paso a paso cómo hiciste X la última vez."
2. **Focus Behavior (No Hipotéticos):**
   - ❌ *Mala Pregunta:* "¿Usarías esta herramienta si costara $10?" (La gente miente sobre el futuro).
   - ✅ *Buena Pregunta:* "¿Qué alternativas pagas has intentado en el último mes?"
3. **Falsificar, NO Validar:** Buscamos equivocarnos rápido. Buscar solo validar genera sesgo de confirmación.
4. **No a las Personas Demográficas:** Las "Personas" (ej. *Marketing Sarah, 35 años*) son inútiles. Define a los usuarios por sus **Jobs-to-be-Done (JTBD)**, sus dolores reales y los "Workarounds" (atajos) que inventan hoy.

**📋 Tabla de Tipos de Preguntas Cualitativas:**
Usar este menú al construir guiones de entrevistas. Ordenadas de mayor a menor confiabilidad del dato obtenido:

| Tipo | Ejemplo | Para qué usarla |
|---|---|---|
| **Comportamiento** *(más confiable)* | "Mostrándome, ¿cómo harías X?" | Observar acciones reales, no declaradas |
| **Contexto** | "Contame cómo es tu día típico cuando hacés X" | Entender el ambiente de uso real |
| **Objetivo** | "¿Qué estás tratando de lograr cuando hacés X?" | Descubrir motivaciones profundas |
| **Dolor** | "¿Cuál es la parte más difícil de X?" | Identificar fricciones reales |
| **Reflexión** *(menos confiable)* | "¿Qué cambiarías de cómo hacés X hoy?" | Generar ideas sin sugerir soluciones |

> ⚠️ **Alerta crítica:** Las preguntas de **Comportamiento** ("mostrándome") producen datos más confiables que las de **Reflexión** ("¿qué cambiarías?"). Lo que la gente dice que haría y lo que realmente hace suelen diferir. Registrar también si el dolor emergió de una pregunta directa o espontáneamente — es la diferencia entre `[CONFIRMA H1]` e `[CONFIRMA-ESPONTÁNEO H1]`.

**🚫 Anti-Patrones Estrictos del Research Cualitativo:**
1. **Anti-Muestra Mínima:** Nunca tomar decisiones macro en base a 2-3 entrevistas. El mínimo para extraer temas cualitativos sólidos es **7 a 14 participantes**. Menos es anecdótico; más tiene rendimientos decrecientes.
2. **Anti-Fans-Only:** Nunca entrevistar solo a usuarios satisfechos. El "oro" metodológico está en los detractores, los que abandonaron el onboarding y los que churnearon. Ignorarlos genera sesgo de supervivencia.
3. **Anti-Delegación:** Los diseñadores y PMs deben estar presentes en las entrevistas. Leer un reporte de una agencia de investigación no construye empatía profunda real ni detecta lo no dicho.

**Regla clave de registro:** Marcar evidencia con `[CONFIRMA H1]`, `[REFUTA H2]`, `[NUEVO INSIGHT]`. Prohibida la síntesis vaga; cada hallazgo debe asociarse a un dato específico.

### Momento 3 — Evaluación de Cierre + Output Format Selection (Synthesis)
**Archivo:** `skills/momento_4_cierre.md`
**Activar cuando:** El humano aprueba el Informe de Research y declara cierre de recolección.
**Produce:** Informe de Cierre con recomendación: avanzar / iterar / pivotar.

**⚡ PROTOCOLO DE TESTING CIENTÍFICO (cuando se ejecuten tests de usabilidad):**
Si el research incluye tests de usabilidad cuantitativa, aplicar este protocolo estrictamente:

1. **Diseño del Experimento:**
   - *Forced Error:* Diseñar al menos una ruta donde el sistema falla para observar cómo reacciona el usuario.
   - *Critical Path:* Mapear la ruta mínima viable al éxito y medir fricciones en esa ruta.

2. **Protocolo de Ejecución:**
   - *Think-Aloud:* Instruir al usuario a verbalizar su proceso mental en tiempo real.
   - *Intervención Cero:* El moderador no ayuda nunca. El sistema debe hablar por sí mismo.

3. **Síntesis de Hallazgos:**
   - No listar "quejas". Listar **Barreras de Interacción**.
   - Cada hallazgo debe incluir: `Severidad (1-4) + Evidencia + Recomendación de Cambio`.

> 🧠 **Regla de Juicio Senior:** Antes de validar resultados, preguntarse: *"¿Estamos testeando la interfaz o estamos testeando si el usuario entiende el valor del producto?"*. Separar siempre la **usabilidad** (¿puede hacerlo?) de la **deseabilidad** (¿quiere hacerlo?).

**⚡ REGLAS ESTRICTAS DE SÍNTESIS ANALÍTICA:**
1. **Thematic Analysis:** No mezclar insights. Agrupar por afinidad, no por categorías pre-creadas.
2. **El Valor del "Outlier":** Si hay un dato contradictorio, no lo promedies. Reporta la contradicción (Ej: Distribuciones bimodales donde la mitad ama algo y la mitad lo odia).
3. **Opportunity Sizing:** Todo problema debe dimensionarse: `Impacto = Usuarios Afectados x Frecuencia x Severidad`. (Un bug catastrófico 1 vez al año vs. botón feo 1000 veces al día).
4. **Triangulación:** Nunca confiar en una sola fuente. Encuestas dicen el *QUÉ*, entrevistas el *POR QUÉ*.

**⚡ OUTPUT DIMENSIONS CHECKPOINT (OBLIGATORIO antes de generar el informe):**
Antes de generar cualquier entregable de datos, el framework DEBE interrogar al usuario sobre las 4 dimensiones de salida.

```
📊 Tenemos los datos procesados. Antes de construirlos, necesito definir 4 variables clave:

1. Naturaleza Analítica: ¿Dashboard o Informe Profundo?
   → Dashboard Ágil (Ley de Miller): Máximo 5-7 métricas clave por vista. Economía visual estricta.
   → Informe Profundo (Max-Juice Doctrine): Exhaustividad absoluta. Muestra interconectividad y contexto profundo.

2. Formato Técnico (Soporte):
   → HTML interactivo, Exportación (CSV/JSON), Documento estático, Infografía.

3. Audiencia (¿Quién lo consume?):
   → Técnico (dato crudo), Ejecutivo (conclusión rápida), Público (narrativa accesible).

4. Contexto Físico de Uso:
   → ¿Bajo qué condiciones se leerá esto? Determina contraste y densidad visual.
```

→ **Protocolo de Transparencia de Exclusión (Brief de Filtrado):** 
Si el humano selecciona la ruta **"Dashboard"**, el framework tiene la regla estricta de NO mostrarlo todo. Pero NUNCA debe ocultar datos por asunción. Antes de generar el código, presentá un **Brief de Filtrado**:
*"Dado que es un Dashboard y requerimos economía visual, propongo mantener estas 5 métricas primarias [listar] y dejar fuera estas 3 [listar] porque [motivo]. ¿Estás de acuerdo o preferís cambiar el liderazgo de los datos?"*

---

## 🛠️ Herramientas de Estrategia Adicional (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Stakeholder Narrative Strategy:** Aplicar para blindar el *Stakeholder Map* y anticipar resistencias políticas.
2. **Business Strategy & Growth:** Aplicar para asegurar que el problema detectado tenga impacto directo en el ROI.

*(Nota: Los motores de Discovery, Scientific Testing y Synthesis operan de forma nativa a través de las reglas heurísticas de esta etapa).*

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

## 🚫 NEVER List — Anti-patrones de la Etapa 01
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER diseñes soluciones:** Esta etapa es de diagnóstico. Proponer features prematuras contamina el encuadre y genera sesgos.
2.  **NEVER presentes hipótesis como hechos:** Todo debe ser `[HIPÓTESIS]` hasta que la evidencia real lo transforme en `[VALIDADO]`.
3.  **NEVER saltees la divergencia:** Es obligatorio mostrar el abanico de posibilidades exploradas antes de converger en un Problem Statement.
4.  **NEVER realices síntesis vaga:** Cada hallazgo debe estar anclado a un dato o cita específica de la Matriz de Evidencia.
5.  **NEVER esperes que el humano defina la metodología:** El framework tiene la iniciativa. Debes recomendar métodos basados en trade-offs proactivamente.
6.  **NEVER ocultes datos por asunción:** Si usas formato Dashboard, presenta siempre un Brief de Filtrado para aprobación.

## ✅ ALWAYS List — Mandatos de Comportamiento
- **Siempre** entrega artefactos como documentos Markdown estructurados, nunca solo en el chat.
- **Siempre** marca explícitamente el estado del conocimiento: `[HIPÓTESIS]`, `[VALIDADO]`, `[SUPUESTO]`.
- **Siempre** busca en Engram MCP hallazgos previos con prefijo `pf-` al iniciar.
- **Siempre** explica el "porqué" técnico de cada recomendación metodológica.

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

*Framework Baraldi v2.26.12 · skills/methodology/01_problem_framing/SKILL.md*
