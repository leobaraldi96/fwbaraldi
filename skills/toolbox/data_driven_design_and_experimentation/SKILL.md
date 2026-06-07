---
name: data-driven-design-experimentation
description: >
  Protocolo para transformar datos analíticos (Google Analytics, Mixpanel, Hotjar) 
  en insights de diseño accionables y ejecutar experimentos validados con rigor estadístico.
keywords: analytics, data-driven, insights, experimentation, a/b testing, métricas, conversión, SRM
version: "2.26.9"
---

# 📊 Skill 07 — Protocolo de Diseño Basado en Datos y Experimentación

Esta skill actúa como el **puente entre el análisis de datos y la ejecución de diseño**. Su misión es eliminar las suposiciones y basar cada cambio en evidencia de comportamiento real, asegurando un ciclo de mejora continua validado estadísticamente.

---

## 🏛️ 1. Ciclo de Conversión: De Métricas a Insights

Al procesar datos analíticos, el Agente debe ejecutar este análisis:
- **Resumen de Patrones:** Identificación de tendencias y anomalías (outliers).
- **Puntos de Fricción:** Detección de "rage clicks", zonas de abandono (drop-offs) y áreas de confusión.
- **Hipótesis Blindada:** "Si cambiamos [X], entonces [Métrica Y] mejorará porque [Z]".
- **Impacto Proyectado:** Estimación del levantamiento (lift) esperado en la métrica North Star.

## 🧪 2. Protocolo de Experimentación (Rigor Científico)

Para validar cambios mediante Tests A/B o multivariante:
- **Rigor Temporal:** Todo test debe durar múltiplos de 7 días para cubrir variaciones semanales.
- **Validación SRM (Sample Ratio Mismatch):** Si la distribución de tráfico falla, el test se descarta por error técnico.
- **Significancia Práctica:** No solo importa el p-value (<0.05), sino si el impacto justifica el costo de implementación.

---

## 🚫 NEVER List — Anti-patrones de Datos
- **NUNCA** detengas un experimento antes de alcanzar el tamaño de muestra necesario solo por "ver una buena tendencia" (Anti-P-hacking).
- **NUNCA** tomes decisiones de diseño basadas en una sola métrica aislada sin entender el contexto cualitativo (el "por qué").
- **NUNCA** aceptes datos de baja calidad o fuentes no confiables como base para cambios estructurales.
- **NUNCA** ignores los resultados negativos de un test. Un fallo es un aprendizaje valioso que ahorra desarrollo mal enfocado.

## ✅ ALWAYS List — Mandatos de Rigor
- **SIEMPRE** define el KPI principal y las métricas de control antes de iniciar un experimento.
- **SIEMPRE** verifica que los eventos de tracking estén correctamente implementados en producción antes de medir.
- **SIEMPRE** presenta los resultados con intervalos de confianza claros.
- **SIEMPRE** documenta los aprendizajes de cada experimento en la memoria del proyecto para evitar repetir errores.

---

## 📄 Formatos de Entrega
1. **Data Insight Report:** Análisis de comportamiento y puntos de fricción detectados.
2. **Experiment Design Doc:** Definición de variantes, hipótesis y plan de medición.
3. **Analytics Tracking Spec:** Listado de eventos y propiedades a trackear.

---
*Framework Baraldi v2.26.9 · Skill 07 · Diseño Basado en Datos*
