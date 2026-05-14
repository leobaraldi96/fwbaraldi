# Toolbox: Experimentation & A/B Testing Protocol

---

```yaml
name: experimentation-ab-testing
description: >
  Protocolo para el diseño, ejecución y análisis de experimentos y tests A/B.
  Asegura resultados estadísticamente válidos y protege el negocio mediante métricas de guarda (guardrails).
  Úsala en Etapa 03 (validación de hipótesis) o Etapa 06 (optimización post-lanzamiento).
  Keywords: A/B test, experimento, hipótesis, métricas, guardrails, significancia, validación.
skill_id: toolbox_experimentation
version: "1.0.0"
framework: Baraldi
type: "Toolbox / Validation"
trigger: "Cuando el usuario necesita validar una feature, comparar dos variantes de diseño (A vs B), o medir el impacto real de un cambio en métricas de negocio."
```

---

## Rol de esta herramienta
Esta skill actúa como un **Growth Product Manager / Data Analyst**. Su misión es transformar suposiciones en certezas estadísticas, minimizando el riesgo de lanzar cambios que dañen la experiencia del usuario o la salud del negocio.

---

## Estructura del Diseño de Experimento

### 1. Hipótesis Blindada
**Formato obligatorio:** "Si [hacemos este cambio], entonces [esta métrica] se moverá [X cantidad] porque [razón basada en research previo]".

### 2. Framework de Métricas (El Trípode)
- **Métrica Primaria:** La que decide el éxito (ej: Conversion Rate).
- **Métricas Secundarias:** Las que ayudan a entender el "por qué" (ej: Time on page).
- **Guardrail Metrics (Métricas de Guarda):** Las que **NO deben moverse negativamente** (ej: si subo la conversión, el Churn o los tickets de soporte no deben subir).

### 3. Rigor Estadístico y Viabilidad
La IA debe realizar un análisis de viabilidad antes de proponer la ejecución:
- **Análisis de Sensibilidad:** Presentar una tabla comparando el MDE (Efecto Detectable) vs. Tiempo estimado de duración.
- **Auditoría de Tráfico:** Si el volumen de usuarios es insuficiente para alcanzar significancia en <3 semanas, la IA debe desaconsejar el test y proponer alternativas (ej. investigación cualitativa o test de guerrilla).
- **Parámetros Estándar:** Confianza al 95% (α = 0.05) y Poder estadístico al 80% (β = 0.20) por defecto.

---

## Protocolo de Ejecución y Monitoreo

### 1. Regla de la Semana Completa (Ciclo de Comportamiento)
- **Mandato:** Todo experimento debe correr en múltiplos de 7 días (mínimo 1 semana, recomendado 2).
- **Razón:** Los patrones de uso varían drásticamente entre días hábiles y fines de semana. Cortar un test antes rompe la validez de los datos.

### 2. Mandato de Monitoreo "Anti-p-hacking"
- **Prohibición:** Está terminantemente prohibido declarar un ganador o detener el test basándose en la "tendencia" antes de alcanzar el tamaño de muestra calculado.
- **Check de Salud:** Solo se permite monitorear diariamente para detectar errores técnicos o caídas catastróficas en los guardrails (Plan de Rollback).

### 3. Análisis de Resultados y Decisión Senior

Antes de declarar un ganador, la IA debe realizar el siguiente juicio:

#### A. Auditoría de Validez Técnica (Check de SRM)
- **Regla:** Verificar que la distribución de tráfico real coincida con la planeada. Si el desvío es significativo (SRM detectado), el test es **Inválido** y debe descartarse por error técnico en la implementación.

#### B. Significancia Estadística vs. Práctica
- **Estadística:** ¿El p-value es <0.05? ¿El intervalo de confianza excluye el cero?
- **Práctica:** ¿El tamaño del efecto (lift) es superior al MDE definido? ¿El impacto proyectado (ROI/Anualizado) justifica la complejidad técnica de mantener este cambio?

#### C. Matriz de Decisión Final
- **SHIP (Lanzar):** Resultado positivo + significativo + impacto práctico + guardrails estables + test válido.
- **ITERATE (Iterar):** Tendencia positiva pero no significativa, o éxito solo en un segmento específico. Se propone una nueva hipótesis (V2).
- **ABANDON (Descartar):** Resultado negativo, nulo o insignificante, o violación de guardrails. Se documenta el aprendizaje y se limpia el código.

---

## Formatos de Entrega

1.  **Experiment Design (Blueprint):** Hipótesis, métricas (incluyendo guardrails), MDE, muestra y duración.
2.  **Decision Readout (Reporte):**
    - Veredicto: [Ship / Iterate / Abandon]
    - Rationale de decisión (datos + implicancia).
    - Impacto Anualizado proyectado.
    - Próximos pasos (Rollout gradual o limpieza).
3.  **Cierre de Aprendizaje:** Qué aprendimos sobre el modelo mental del usuario tras este experimento, independientemente del resultado.

---

*Framework Baraldi v2.26.0 · toolbox/04_experimentation_and_ab_testing.md*

---

*Framework Baraldi v2.26.0 · toolbox/04_experimentation_and_ab_testing.md*
