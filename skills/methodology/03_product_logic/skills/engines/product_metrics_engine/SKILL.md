---
name: product_metrics_expert
description: >
  Definición técnica y estratégica de métricas de producto.
  Desde Frameworks (North Star, HEART, AARRR) hasta visualización de datos en React (Recharts).
version: "2.26.14"
---

# 📈 Product Metrics & Analytics Expert

Este guardián fusiona la estrategia de producto (Qué medimos) con la ejecución de desarrollo (Cómo lo visualizamos). Asegura que el producto sea gobernable por métricas accionables (Etapa 03 y Etapa 05).

## 🧭 Estrategia de Métricas (Qué Medimos)

### 1. El Marco North Star (NSM)
El producto debe tener **UNA sola métrica de la estrella polar** que resuma de manera perfecta que el usuario obtuvo el valor por el cual "contrató" la solución (ej: Spotify = Minutos escuchados). A esta la siguen 3-4 Input Metrics que el equipo puede afectar directamente.

### 2. Clasificación de Métricas (Regla de Oro: Accionables)
- **Vanity vs Actionable:** "Total de usuarios registrados" es vanidad. "Ventas cerradas por sesión activa" es accionable (cambia tu comportamiento). Si la métrica sube y no sabes qué hacer, es Vanidad.
- **Leading vs Lagging:** Las variables *Lagging* (MRR, Churn) miran el pasado y no las puedes corregir a tiempo. Las *Leading* (Tickets abiertos, uso de features) avisan antes de que ocurra la pérdida.
- **Cualitativas vs Cuantitativas:** Qué está pasando (Cuan) vs Por Qué está pasando (Cual).

### 3. Frameworks Clásicos de Medición
- **HEART (Google):** Happiness (Satisfacción), Engagement (Uso), Adoption (Nuevos), Retention (Regresos), Task Success (Éxito).
- **AARRR (Pirate Metrics):** Acquisition, Activation, Retention, Referral, Revenue. Fundamental para el Funnel analysis.

## 📐 Visualización de Métricas (Principios de Diseño)

> ⚠️ **Nota:** El código de implementación de dashboards (Recharts, React, Next.js) pertenece al **Baraldi Engineering Framework**. Aquí definimos el *qué* mostrar y *por qué*, no el *cómo* programarlo.

**Principios para el diseño de dashboards:**
- **Jerarquía visual:** La métrica North Star debe dominar visualmente (tamaño, posición, color). Las input metrics van subordinadas.
- **Colores funcionales:** El color rojo/verde solo para métricas de salud crítica. Evitar el "rainbow chart".
- **Cero ambigüedad de escala:** Siempre mostrar el período de tiempo y la unidad de medida. Un porcentaje sin contexto es inútil.
- **Patrones de carga:** Usar Skeletons en dashboards. Nunca bloquear toda la UI mientras cargan los datos.


## 🚫 Anti-Patrones Estrictos
- **Síndrome "Tengo que Medir Todo":** Un Dashboard con 50 KPIs es ciego. Obliga al humano a podar. Solo entre 5 a 10 métricas que importen a nivel Board.
- **Gráficos de Pastel (Pie Charts) Engañosos:** Úsalos SOLO si los componentes superan el 20-30% de diferencia. Si es complejo, prefiere un Bar Chart apilado horizontal (*Bullet graph*).

---
*Framework Baraldi v2.26.14 · Core / Tech Guardrails / Product Metrics*
