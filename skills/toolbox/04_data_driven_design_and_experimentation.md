---
name: data-driven-design-experimentation
description: >
  Protocolo para transformar datos analíticos en insights de diseño accionables y ejecutar experimentos validados.
  Une el análisis de comportamiento (Google Analytics, Mixpanel, Hotjar) con la toma de decisiones de UX/UI.
keywords: analytics, data-driven, insights, experimentation, a/b testing, metrics, conversion
version: "2.26.3"
---

# 📊 Skill 04 — Data-Driven Design & Experimentation

Este protocolo actúa como el puente entre el análisis de datos y la ejecución de diseño. Su misión es eliminar las suposiciones y basar cada cambio en evidencia de comportamiento real.

## 🔬 Protocolo de Conversión: De Métricas a Insights de Diseño

Cuando el usuario provee datos analíticos (métricas, funnels, mapas de calor), el Agente debe ejecutar este análisis:

### 1. Data Summary & Patterns
- **Métricas Clave:** Resumen de los KPIs principales y tendencias detectadas.
- **Anomalías:** Identificación de outliers o saltos inesperados en los datos.
- **Calidad:** Evaluación de si la data es suficiente para tomar decisiones.

### 2. User Behavior Insights
- **Uso Real:** Cómo interactúan realmente los usuarios (vs. el flujo ideal).
- **Paths & Flows:** Rutas más comunes y desvíos detectados.
- **Drop-offs:** Puntos exactos donde el usuario abandona o se distrae.

### 3. Identificación de Problemas (Friction Points)
- **Struggle Areas:** Zonas de confusión o clics de frustración (rage clicks).
- **Puntos de Fuga:** Donde el funnel se rompe y por qué.
- **Baja Engagement:** Áreas con potencial ignoradas por el usuario.

### 4. Análisis de Oportunidades
- **Quick Wins:** Mejoras de bajo esfuerzo y alto impacto visual/funcional.
- **Strategic Moves:** Cambios estructurales que requieren una apuesta de negocio.
- **Impacto Proyectado:** Estimación de cuánto podría mejorar la métrica.

### 5. Hipótesis de Diseño (El "Por qué")
- **Asunciones Causales:** Qué creemos que está causando el comportamiento observado.
- **Hipótesis Blindada:** "Si cambiamos [X], entonces [Métrica Y] mejorará porque [Z]".

### 6. Recomendaciones de Diseño
- **Cambios Específicos:** Propuesta concreta de intervención (UI, Copy, Flujo).
- **Rationale:** Justificación basada en la data analizada.
- **Priorización:** Orden de ejecución basado en impacto vs. esfuerzo.

### 7. Métricas de Éxito & Tracking
- **Baseline:** El punto de partida actual.
- **Target:** Qué número esperamos alcanzar tras el cambio.
- **Plan de Medición:** Qué eventos o eventos nuevos debemos trackear.

### 8. Next Steps & Testing Plan
- **Acciones Inmediatas:** Lo que se puede ejecutar ya.
- **Ruta de Experimento:** Si la incertidumbre es alta, definir el diseño del Test A/B (ver sección de Experimentación abajo).

---

## 🧪 Protocolo de Experimentación (Rigor Estadístico)

Si la recomendación requiere validación, aplicar las reglas de testeo:

1. **Rigor de la Semana Completa:** Todo test debe durar múltiplos de 7 días para cubrir variaciones de comportamiento.
2. **Anti-P-Hacking:** Prohibido detener un test por "buena tendencia" antes de alcanzar el tamaño de muestra.
3. **Check de SRM (Validación Técnica):** Si la distribución de tráfico falla, el test se descarta por error técnico.
4. **Significancia Práctica:** No solo importa si el p-value es <0.05, sino si el *lift* justifica el costo de implementación.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **En la Etapa 03 (Product Logic):** Para validar reglas de negocio contra data real.
- **En la Etapa 06 (Visual Design):** Para optimizar interfaces existentes basadas en mapas de calor o funnels.
- **Output:** Generar un documento `Data_Insights_[Proyecto].md` en `docs-fwbaraldi/Toolbox_Outputs/`.

---
*Framework Baraldi v2.26.3 · Skill 04*
