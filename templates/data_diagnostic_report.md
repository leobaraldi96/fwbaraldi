# Informe de Diagnóstico de Datos & Insights — {NOMBRE_DEL_PRODUCTO}

> **Fuente de Verdad Telemetría:** Este documento consolida el análisis de datos reales de uso post-lanzamiento, contrastando hipótesis iniciales contra el comportamiento observado para extraer oportunidades de diseño y negocio.

---

## 1. Tablero Ejecutivo de Métricas Clave

| Métrica / Evento | Hipótesis Inicial (E01) | Resultado Real (Producción) | Desvío / Estado |
| :--- | :--- | :--- | :--- |
| **North Star Metric** | {Valor esperado} | {Valor medido} | 🟢 Superado / 🟡 En Rango / 🔴 Alerta |
| **Tasa de Activación** | {Obj: X%} | {Real: Y%} | {Diferencia} |
| **Drop-off en Funnel** | {Máx permitido: X%} | {Real medido: Y%} | {Punto de fricción} |
| **Tiempo de Primera Tarea** | < {N} minutos | {Real: M} minutos | {Evaluación} |

---

## 2. Diagnóstico Causa-Efecto por Pantalla o Flujo

### Flujo: {Nombre del Flujo analizado - Ej: Onboarding / Checkout}

#### A. 🔍 Hecho Objetivo (Datos reales observados)
- **Muestra analizada:** {N} usuarios / sesiones entre el {Fecha inicio} y {Fecha fin}.
- **Comportamiento medido:** {Descripción exacta de números, caídas o patrones sin especulaciones}.

#### B. 🧠 Interpretación de UX y Negocio (Por qué ocurre)
- **Diagnóstico humano:** {Traducción del número a la psicología y contexto del usuario}.
- **Causa raíz probable:** {Fricción de interfaz / Falta de claridad en copy / Sobrecarga cognitiva / Desconfianza}.

#### C. 💡 Opciones de Solución Planteadas
- **Opción A (Quick Win / Inmediata):** {Descripción}
  - *Pro:* {Ventaja rápida}
  - *Contra:* {Limitación}
- **Opción B (Estructural / Rediseño):** {Descripción}
  - *Pro:* {Impacto duradero}
  - *Contra:* {Requiere mayor esfuerzo}

#### D. 🎯 Priorización y Scoring
- **Impacto estimado:** Alto / Medio / Bajo
- **Esfuerzo técnico:** Bajo / Medio / Alto
- **Nivel de Prioridad:** `[P0 - Urgente]` / `[P1 - Próximo Sprint]` / `[P2 - Backlog]`

---

## 3. Estado de Validación de Hipótesis de Negocio

- [x] **[HIPÓTESIS VALIDADA]:** {Hipótesis de E01 confirmada con datos}.
- [ ] **[HIPÓTESIS REFUTADA / A PIVOTAR]:** {Hipótesis que no se cumplió y requiere ajuste}.

---
*Framework Baraldi v2.29.0 · docs-fwbaraldi/08_Telemetry/01_Data_Diagnostic_and_Insights.md*