---
name: continuous-discovery-telemetry
description: >
  Ejecuta la Etapa 08 completa (Continuous Discovery & Data Intelligence) del Framework Baraldi.
  Transforma la telemetría y datos de uso real post-lanzamiento en diagnósticos de UX,
  diseña dashboards por rol y nivel de urgencia, y genera planes de acción priorizados
  para retroalimentar el Backlog Estratégico y la Etapa 01.
keywords: continuous discovery, telemetría, analytics, data ux, dashboards, métricas, post-launch, feedback loop, data intelligence, etapa 8
version: "2.31.0"
framework: Baraldi
stage: "08"
stage_name: "Continuous Discovery & Data Intelligence"
status: complete
---

# Etapa 08 - Continuous discovery & data intelligence

> **Objetivo:** Cerrar el ciclo de vida del producto transformando el comportamiento real de los usuarios en producción en evidencia cuantitativa y cualitativa. Eliminar la barrera técnica de las analíticas para cualquier diseñador o creador, traduciendo datos fríos a decisiones de diseño y acciones de negocio priorizadas.
>
> **Lema Baraldi:** *"El diseño no termina en el deploy; empieza cuando el usuario y el negocio toman decisiones con él."*

---

## Principio filosófico: "Zero-math & human-first"

Esta etapa está diseñada para que cualquier persona (desde un diseñador junior hasta un fundador no técnico) pueda liderar con datos:
- **Metáfora del tablero:** Una métrica no es una fórmula matemática compleja; es el tablero del auto que te avisa si tienes combustible, a qué velocidad vas o si el motor calienta.
- **Cero jerga intimidante:** La IA nunca exige saber SQL ni modelos estadísticos avanzados. Acepta datos en cualquier formato (texto simple, capturas, CSVs) y los traduce a lenguaje humano.
- **El bucle infinito:** Los hallazgos de producción no mueren en un reporte estático; se confirman con el usuario y retroalimentan automáticamente el `00_Backlog_Estrategico.md` y la **Etapa 01 (`../01_problem_framing/SKILL.md`)** para la siguiente iteración.

---

## Flujo operacional de la etapa (4 momentos)

```
[MOMENTO 0] Alfabetización & censo de arquetipo de proyecto
      ↓     (Identificar tipo de producto + Recomendar herramientas simples + Plan de tracking)
[MOMENTO 1] Arquitectura de visualización por rol (Data UX)
      ↓     (Pirámide de urgencia + Árbol de decisión de gráficos anti-slop)
[MOMENTO 2] Ingesta simple & diagnóstico causa-efecto (Zero-math)
      ↓     (Hecho objetivo -> Interpretación humana -> Soluciones con pros/contras)
[MOMENTO 3] Priorización, registro de decisiones y bucle de backlog
      ↓     (Scoring de impacto/esfuerzo -> Aprobación humana -> Registro en Backlog / Etapa 01)
```

---

## [MOMENTO 0] Alfabetización, arquetipos & plan de tracking

Antes de pedir o analizar datos, la IA calibra el contexto del creador y del producto:

### 1. Censo de arquetipo de proyecto
La IA identifica qué tipo de producto estamos analizando y calibra las métricas e instrumentos:

| Arquetipo de producto | Preocupación central del creador | Métricas clave sencillas | Herramienta recomendada (gratis / no-code) |
| :--- | :--- | :--- | :--- |
| **Videojuego / App lúdica** | "¿La gente se aburre? ¿Pasan el nivel?" | Retención Día 1 / Día 7, nivel de abandono, tiempo de sesión. | GameAnalytics, Unity Analytics. |
| **Landing page / Portfolio** | "¿Alguien lee esto o rebotan de inmediato?" | Scroll depth (% que llega al final), tasa de clic en CTA, tiempo en página. | Microsoft Clarity (heatmaps y grabaciones gratis). |
| **SaaS / App web / CRM** | "¿Usan la plataforma o se van tras registrarse?" | Activación inicial, Time-to-First-Value, tasa de conversión de tareas core. | PostHog (eventos y grabaciones), Mixpanel, GA4. |
| **E-commerce / Tienda** | "¿Dónde pierdo ventas en el carrito?" | Abandono de checkout, ticket promedio, tasa de recompra. | Shopify / WooCommerce Analytics, Stripe Dashboard. |

### 2. Generación del tracking plan de 1 carilla (`TRACKING_PLAN.md`)
La IA genera una guía minimalista para que el programador configure solo los 3 o 4 eventos vitales:
- **Evento 1:** Inicio de flujo (ej. `view_pricing`, `start_level_1`).
- **Evento 2:** Paso de mayor valor (ej. `click_checkout`, `complete_onboarding`).
- **Evento 3:** Conversión de éxito (ej. `payment_success`, `finish_level_1`).

---

## [MOMENTO 1] Arquitectura de visualización por rol (Data UX)

El diseño de dashboards e informes debe responder a la **pirámide de urgencia y consumo cognitivo**:

### 1. La pirámide de los 3 tipos de dashboards

```
       ▲
      / \     1. OPERATIVO (Vendedor, Soporte, Cajero)
     /   \       -> Tiempo de visión: < 3 segundos (Acción inmediata)
    /-----\
   /       \   2. TÁCTICO / GERENCIAL (Team Leader, Product Manager)
  /         \     -> Tiempo de visión: 1 a 5 minutos (Desvíos y metas)
 /-----------\
/             \ 3. ESTRATÉGICO / C-LEVEL (CEO, Inversores, Fundadores)
/_______________\   -> Tiempo de visión: 30 segundos (Salud global y North Star)
```

- **Nivel operativo:** *Tablas con estados en color (verde/rojo), tarjetas de tareas pendientes, botones de acción directa ("Llamar", "Aprobar"). Cero gráficos complejos.*
- **Nivel táctico:** *Gráficos de barras comparativas, embudos de conversión (funnels), barras de progreso contra metas del sprint/mes.*
- **Nivel estratégico:** *Tarjetas KPI gigantes (MRR, Churn, NPS, LTV) y gráficos de líneas de tendencia trimestral. Cero micro-detalles operativos.*

### 2. Árbol de decisión de componentes gráficos (anti-slop visual)
- **Tarjeta KPI (Big Stat Card):** Para el número principal actual (ej: *"\$14.200 facturados"*).
- **Gráfico de líneas / área:** Para **tiempo continuo** (evolución por días/semanas/meses).
- **Gráfico de barras:** Para **comparar categorías independientes** (ej: planes, canales, roles).
- **Embudo (Funnel):** Para **flujos secuenciales obligatorios** (Paso 1 -> Paso 2 -> Paso 3).
- **Regla anti-torta (Pie Chart Rule):** Prohibido usar gráficos de torta con más de 3 o 4 porciones o para datos temporales.

---

## [MOMENTO 2] Ingesta simple & diagnóstico causa-efecto (Zero-math)

### 1. Formas de ingesta aceptadas (cero fricción)
El usuario puede ingresar datos a la IA mediante:
- **Texto en lenguaje natural:** *"Entraron 500 personas esta semana, 400 hicieron clic en ver precio pero solo 5 se registraron."*
- **Archivos planos / exports:** CSV o Excel exportado de Google Analytics, Stripe, PostHog o Supabase.
- **Capturas o transcripciones:** Resúmenes de métricas o comentarios literales de usuarios en soporte.

### 2. Estructura de diagnóstico obligatoria (5 pasos)
Ante cualquier dato ingresado, la IA **DEBE** estructurar su respuesta bajo este formato innegociable:

```markdown
### 1. Hecho objetivo (qué está sucediendo en números reales)
[Descripción exacta del dato sin suposiciones. Ej: "De 500 visitas al pricing, el 80% abandona en el selector de tarjeta."]

### 2. Interpretación de UX y negocio (qué significa)
[Traducción al comportamiento humano. Ej: "Los usuarios muestran interés en el producto, pero pedir la tarjeta antes de la prueba genera fricción de desconfianza."]

### 3. Opciones de solución (con pros y contras)
- **Opción A (Quick win):** [Descripción + Pro + Contra]
- **Opción B (Estructural):** [Descripción + Pro + Contra]

### 4. Priorización estimada (scoring)
- **Impacto:** [Alto / Medio / Bajo]
- **Esfuerzo:** [Bajo / Medio / Alto]
- **Nivel de prioridad:** [P0 Urgente / P1 Próximo sprint / P2 Backlog]

### 5. Propuesta de acción para aprobación
"¿Querés que registremos la Opción A en el Backlog estratégico para implementarla en el próximo ciclo?"
```

---

## [MOMENTO 3] Registro de decisiones y bucle infinito

Una vez que el humano valida las propuestas en el chat:

### 1. Generación de artefactos físicos en `docs-fwbaraldi/08_Telemetry/`
- **`01_Data_Diagnostic_and_Insights.md`:** Reporte consolidado de métricas reales vs. hipótesis de la Etapa 01, con el diagnóstico de hechos e interpretaciones.
- **`02_Action_Registry_and_Decisions.md`:** Registro formal de decisiones aprobadas por el usuario, con fecha, responsable y prioridad.

### 2. Sincronización automática con `00_Backlog_Estrategico.md`
La IA vuelca las tareas aprobadas en las secciones correspondientes:
- *Ideas de UX/UI*
- *Deuda técnica / lógica*
- *Requisitos de negocio*

> [!IMPORTANT]
> **Aduana visual obligatoria en acciones de telemetría:** Si la acción correctiva derivada de los datos implica crear o modificar archivos de renderizado o páginas de error/sistema (ej. eliminar una redirección 301 y crear `404.php`, rediseñar un modal de checkout, corregir un flujo de error en `.php`/`.html`/`.jsx`), la IA **NO DEBE** tratarlo como un cambio técnico aislado de backend. Debe invocar obligatoriamente el **Universal UI Gatekeeper (`../../core/00_core_guardrails/SKILL.md`)** y leer `docs-fwbaraldi/DESIGN.md` y `docs-fwbaraldi/VOICE.md` para garantizar que la nueva plantilla herede 100% el ADN visual y de voz del proyecto.

### 3. El salto a Etapa 01 (nuevo ciclo de producto)
Si el diagnóstico revela que la propuesta de valor original no funcionó o se descubrió un nuevo segmento de usuarios, la IA propone formalmente:
> *"Los datos demuestran que el dolor principal cambió. ¿Querés que reabramos la **Etapa 01 (`../01_problem_framing/SKILL.md`)** con esta evidencia para redefinir el Problem Statement?"*

---

## Integración con la Toolbox (Bridge Architecture)

Esta etapa se conecta bidireccionalmente con el arsenal estratégico de la Toolbox:
- **Data-Driven Design & Experimentation (`../../toolbox/data_driven_design_and_experimentation/SKILL.md`):** Para diseñar y correr tests A/B rigurosos sobre las soluciones planteadas.
- **Product Health & QBR Protocol (`../../toolbox/product_health_qbr_protocol/SKILL.md`):** Para consolidar revisiones trimestrales de salud de producto ante stakeholders.
- **Systemic Issue Triage Protocol (`../../toolbox/systemic_issue_triage_protocol/SKILL.md`):** Para clasificar bugs o fricciones reportadas en producción según su severidad sistémica.

---

## Protocolo de memoria y handoff - Etapa 08

**Al iniciar:** Buscar en `Engram MCP` por `qa-`, `pl-` y `pf-` para comparar las métricas reales en producción contra las hipótesis originales y la North Star Metric.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 0 & 1 | `cd-tracking-architecture` | `telemetría` | Arquetipo del proyecto, `TRACKING_PLAN.md` y arquitectura de dashboards |
| Momento 2 | `cd-data-diagnosis` | `validación` | Hechos objetivos medidos en producción e interpretación causa-efecto |
| Momento 3 | `cd-backlog-loop` | `cierre-de-ciclo` | Decisiones priorizadas, actualización de `00_Backlog_Estrategico.md` y disparo a E01 |

**Al cerrar el ciclo (Handoff recursivo hacia Etapa 01 o etapa específica):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de ciclo continuo: `[x] 08 Continuous Discovery -> [↻] 00_Backlog_Estrategico.md / 01 Problem Framing`.
3. Si se requiere rediseñar flujos o vistas puntuales, enrutar a `../05_interaction_design_ux/SKILL.md` o `../06_visual_design_ui/SKILL.md`. Si se requiere reencuadrar el problema, cargar `../01_problem_framing/SKILL.md`.

---

## Guardrails y directivas específicas de la Etapa 08

<stage_08_guardrails>
<always>
- **SIEMPRE** separa el hecho objetivo (el número real) de la interpretación (la hipótesis de UX).
- **SIEMPRE** adapta el vocabulario y las recomendaciones de herramientas al tipo de producto del usuario.
- **SIEMPRE** presenta opciones de solución con sus trade-offs (pros y contras) antes de pedir confirmación.
- **SIEMPRE** espera la aprobación humana explícita antes de escribir tareas en `00_Backlog_Estrategico.md`.
- **SIEMPRE** diseña dashboards segmentados por nivel de urgencia según el rol del usuario (operativo vs. táctico vs. estratégico).
</always>

<never>
- **NUNCA** utilices fórmulas matemáticas complejas o jerga estadística intimidante sin explicar su significado práctico.
- **NUNCA** recomiendes gráficos de torta (pie charts) para más de 3 categorías o para mostrar series de tiempo.
- **NUNCA** inventes métricas ficticias ni asumas datos de tráfico que el usuario no haya provisto.
- **NUNCA** cierres un diagnóstico de datos sin ofrecer una solución concreta y accionable de diseño o negocio.
</never>
</stage_08_guardrails>

---

*Framework Baraldi v2.31.0 · skills/methodology/08_continuous_discovery_telemetry/SKILL.md*