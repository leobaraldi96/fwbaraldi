---
name: continuous-discovery-telemetry
description: >
  Ejecuta la Etapa 08 completa (Continuous Discovery & Data Intelligence) del Framework Baraldi.
  Transforma la telemetría y datos de uso real post-lanzamiento en diagnósticos de UX,
  diseña dashboards por rol y nivel de urgencia, y genera planes de acción priorizados
  para retroalimentar el Backlog Estratégico y la Etapa 01.
keywords: continuous discovery, telemetría, analytics, data ux, dashboards, métricas, post-launch, feedback loop, data intelligence, etapa 8
version: "2.29.0"
framework: Baraldi
stage: "08"
stage_name: "Continuous Discovery & Data Intelligence"
status: complete
---

# Etapa 08 — Continuous Discovery & Data Intelligence

> **Objetivo:** Cerrar el ciclo de vida del producto transformando el comportamiento real de los usuarios en producción en evidencia cuantitativa y cualitativa. Eliminar la barrera técnica de las analíticas para cualquier diseñador o creador, traduciendo datos fríos a decisiones de diseño y acciones de negocio priorizadas.
>
> **Lema Baraldi:** *"El diseño no termina en el deploy; empieza cuando el usuario y el negocio toman decisiones con él."*

---

## 🧭 Principio Filosófico: "Zero-Math & Human-First"

Esta etapa está diseñada para que cualquier persona (desde un diseñador junior hasta un fundador no técnico) pueda liderar con datos:
- **Metáfora del Tablero:** Una métrica no es una fórmula matemática compleja; es el tablero del auto que te avisa si tienes combustible, a qué velocidad vas o si el motor calienta.
- **Cero Jerga Intimidante:** La IA nunca exige saber SQL ni modelos estadísticos avanzados. Acepta datos en cualquier formato (texto simple, capturas, CSVs) y los traduce a lenguaje humano.
- **El Bucle Infinito:** Los hallazgos de producción no mueren en un reporte estático; se confirman con el usuario y retroalimentan automáticamente el `00_Backlog_Estrategico.md` y la **Etapa 01 (Problem Framing)** para la siguiente iteración.

---

## 🔄 Flujo Operacional de la Etapa (4 Momentos)

```
[MOMENTO 0] Alfabetización & Censo de Arquetipo de Proyecto
      ↓     (Identificar tipo de producto + Recomendar herramientas simples + Plan de Tracking)
[MOMENTO 1] Arquitectura de Visualización por Rol (Data UX)
      ↓     (Pirámide de Urgencia + Árbol de Decisión de Gráficos Anti-Slop)
[MOMENTO 2] Ingesta Simple & Diagnóstico Causa-Efecto (Zero-Math)
      ↓     (Hecho Objetivo ➔ Interpretación Humana ➔ Soluciones con Pros/Contras)
[MOMENTO 3] Priorización, Registro de Decisiones y Bucle de Backlog
      ↓     (Scoring de Impacto/Esfuerzo ➔ Aprobación Humana ➔ Registro en Backlog / E01)
```

---

## 🟢 [MOMENTO 0] Alfabetización, Arquetipos & Plan de Tracking

Antes de pedir o analizar datos, la IA calibra el contexto del creador y del producto:

### 1. Censo de Arquetipo de Proyecto
La IA identifica qué tipo de producto estamos analizando y calibra las métricas e instrumentos:

| Arquetipo de Producto | Preocupación Central del Creador | Métricas Clave Sencillas | Herramienta Recomendada (Gratis / No-Code) |
| :--- | :--- | :--- | :--- |
| **🎮 Videojuego / App Lúdica** | "¿La gente se aburre? ¿Pasan el nivel?" | Retención Día 1 / Día 7, Nivel de abandono, Tiempo de sesión. | GameAnalytics, Unity Analytics. |
| **📄 Landing Page / Portfolio** | "¿Alguien lee esto o rebotan de inmediato?" | Scroll Depth (% que llega al final), Tasa de Clic en CTA, Tiempo en página. | Microsoft Clarity (Heatmaps y grabaciones gratis). |
| **📱 SaaS / App Web / CRM** | "¿Usan la plataforma o se van tras registrarse?" | Activación inicial, Time-to-First-Value, Tasa de conversión de tareas core. | PostHog (Eventos y grabaciones), Mixpanel, GA4. |
| **🛒 E-commerce / Tienda** | "¿Dónde pierdo ventas en el carrito?" | Abandono de checkout, Ticket promedio, Tasa de recompra. | Shopify / WooCommerce Analytics, Stripe Dashboard. |

### 2. Generación del Tracking Plan de 1 Carilla (`TRACKING_PLAN.md`)
La IA genera una guía minimalista para que el programador configure solo los 3 o 4 eventos vitales:
- **Evento 1:** Inicio de flujo (ej. `view_pricing`, `start_level_1`).
- **Evento 2:** Paso de mayor valor (ej. `click_checkout`, `complete_onboarding`).
- **Evento 3:** Conversión de éxito (ej. `payment_success`, `finish_level_1`).

---

## 📊 [MOMENTO 1] Arquitectura de Visualización por Rol (Data UX)

El diseño de dashboards e informes debe responder a la **Pirámide de Urgencia y Consumo Cognitivo**:

### 1. La Pirámide de los 3 Tipos de Dashboards

```
       ▲
      / \     1. OPERATIVO (Vendedor, Soporte, Cajero)
     /   \       ➔ Tiempo de visión: < 3 segundos (Acción inmediata)
    /-----\
   /       \   2. TÁCTICO / GERENCIAL (Team Leader, Product Manager)
  /         \     ➔ Tiempo de visión: 1 a 5 minutos (Desvíos y metas)
 /-----------\
/             \ 3. ESTRATÉGICO / C-LEVEL (CEO, Inversores, Fundadores)
/_______________\   ➔ Tiempo de visión: 30 segundos (Salud global y North Star)
```

- **Nivel Operativo:** *Tablas con estados en color (Verde/Rojo), tarjetas de tareas pendientes, botones de acción directa ("Llamar", "Aprobar"). Cero gráficos complejos.*
- **Nivel Táctico:** *Gráficos de barras comparativas, embudos de conversión (funnels), barras de progreso contra metas del sprint/mes.*
- **Nivel Estratégico:** *Tarjetas KPI gigantes (MRR, Churn, NPS, LTV) y gráficos de líneas de tendencia trimestral. Cero micro-detalles operativos.*

### 2. Árbol de Decisión de Componentes Gráficos (Anti-Slop Visual)
- **Tarjeta KPI (Big Stat Card):** Para el número principal actual (ej: *"$14.200 facturados"*).
- **Gráfico de Líneas / Área:** Para **tiempo continuo** (evolución por días/semanas/meses).
- **Gráfico de Barras:** Para **comparar categorías independientes** (ej: planes, canales, roles).
- **Embudo (Funnel):** Para **flujos secuenciales obligatorios** (Paso 1 ➔ Paso 2 ➔ Paso 3).
- **Regla Anti-Torta (Pie Chart Rule):** Prohibido usar gráficos de torta con más de 3 o 4 porciones o para datos temporales.

---

## 🔍 [MOMENTO 2] Ingesta Simple & Diagnóstico Causa-Efecto (Zero-Math)

### 1. Formas de Ingesta Aceptadas (Cero Fricción)
El usuario puede ingresar datos a la IA mediante:
- **Texto en lenguaje natural:** *"Entraron 500 personas esta semana, 400 hicieron clic en ver precio pero solo 5 se registraron."*
- **Archivos planos / exports:** CSV o Excel exportado de Google Analytics, Stripe, PostHog o Supabase.
- **Capturas o transcripciones:** Resúmenes de métricas o comentarios literales de usuarios en soporte.

### 2. Estructura de Diagnóstico Obligatoria (5 Pasos)
Ante cualquier dato ingresado, la IA **DEBE** estructurar su respuesta bajo este formato innegociable:

```markdown
### 1. 🔍 Hecho Objetivo (Qué está sucediendo en números reales)
[Descripción exacta del dato sin suposiciones. Ej: "De 500 visitas al pricing, el 80% abandona en el selector de tarjeta."]

### 2. 🧠 Interpretación de UX & Negocio (Qué significa)
[Traducción al comportamiento humano. Ej: "Los usuarios muestran interés en el producto, pero pedir la tarjeta antes de la prueba genera fricción de desconfianza."]

### 3. 💡 Opciones de Solución (Con Pros y Contras)
- **Opción A (Quick Win):** [Descripción + Pro + Contra]
- **Opción B (Estructural):** [Descripción + Pro + Contra]

### 4. 🎯 Priorización Estimada (Scoring)
- **Impacto:** [Alto / Medio / Bajo]
- **Esfuerzo:** [Bajo / Medio / Alto]
- **Nivel de Prioridad:** [P0 Urgente / P1 Próximo Sprint / P2 Backlog]

### 5. 📋 Propuesta de Acción para Aprobación
"¿Querés que registremos la Opción A en el Backlog Estratégico para implementarla en el próximo ciclo?"
```

---

## 📋 [MOMENTO 3] Registro de Decisiones y Bucle Infinito

Una vez que el humano valida las propuestas en el chat:

### 1. Generación de Artefactos Físicos en `docs-fwbaraldi/08_Telemetry/`
- **`01_Data_Diagnostic_and_Insights.md`:** Reporte consolidado de métricas reales vs. hipótesis de la Etapa 01, con el diagnóstico de hechos e interpretaciones.
- **`02_Action_Registry_and_Decisions.md`:** Registro formal de decisiones aprobadas por el usuario, con fecha, responsable y prioridad.

### 2. Sincronización Automática con `00_Backlog_Estrategico.md`
La IA vuelca las tareas aprobadas en las secciones correspondientes:
- *Ideas de UX/UI*
- *Deuda Técnica / Lógica*
- *Requisitos de Negocio*

### 3. El Salto a Etapa 01 (Nuevo Ciclo de Producto)
Si el diagnóstico revela que la propuesta de valor original no funcionó o se descubrió un nuevo segmento de usuarios, la IA propone formalmente:
> *"Los datos demuestran que el dolor principal cambió. ¿Querés que reabramos la **Etapa 01 (Problem Framing)** con esta evidencia para redefinir el Problem Statement?"*

---

## 🛠️ Integración con la Toolbox (Bridge Architecture)

Esta etapa se conecta bidireccionalmente con el arsenal estratégico de la Toolbox:
- **`data_driven_design_and_experimentation`:** Para diseñar y correr Tests A/B rigurosos sobre las soluciones planteadas.
- **`product_health_qbr_protocol`:** Para consolidar revisiones trimestrales de salud de producto ante stakeholders.
- **`systemic_issue_triage_protocol`:** Para clasificar bugs o fricciones reportadas en producción según su severidad sistémica.

---

## 🛡️ Guardrails y Directivas Específicas de la Etapa 08

<stage_08_guardrails>
<always>
- **SIEMPRE** separa el Hecho Objetivo (el número real) de la Interpretación (la hipótesis de UX).
- **SIEMPRE** adapta el vocabulario y las recomendaciones de herramientas al tipo de producto del usuario.
- **SIEMPRE** presenta opciones de solución con sus trade-offs (pros y contras) antes de pedir confirmación.
- **SIEMPRE** espera la aprobación humana explícita antes de escribir tareas en `00_Backlog_Estrategico.md`.
- **SIEMPRE** diseña dashboards segmentados por nivel de urgencia según el rol del usuario (Operativo vs. Táctico vs. Estratégico).
</always>

<never>
- **NUNCA** utilices fórmulas matemáticas complejas o jerga estadística intimidante sin explicar su significado práctico.
- **NUNCA** recomiendes gráficos de torta (pie charts) para más de 3 categorías o para mostrar series de tiempo.
- **NUNCA** inventes métricas ficticias ni asumas datos de tráfico que el usuario no haya provisto.
- **NUNCA** cierres un diagnóstico de datos sin ofrecer una solución concreta y accionable de diseño o negocio.
</never>
</stage_08_guardrails>

---

*Framework Baraldi v2.29.0 · Etapa 08: Continuous Discovery & Data Intelligence.*