---
name: ai-interaction-design
description: >
  Protocolo experto para el diseño de interfaces y experiencias basadas en Inteligencia Artificial.
  Define el comportamiento, la transparencia, la gestión de errores y los patrones de interacción
  específicos para features de IA (LLMs, Generative AI, etc.).
keywords: ai-ux, ai-interaction, trust-patterns, error-handling-ai, ai-design-brief
version: "2.26.4"
---

# 🤖 Skill 08 — AI Interaction Design Brief

Este protocolo se activa cuando el producto incluye funcionalidades de IA. Su objetivo es transformar una "caja negra" técnica en una experiencia de usuario confiable, transparente y controlable.

## 📝 Estructura del Design Brief para Features de IA

### 1. Feature Overview
- **Propósito:** Qué hace la feature y qué problema humano resuelve.
- **Habilitador IA:** Cómo la IA permite esta solución que antes era imposible o costosa.
- **Diferenciadores:** Por qué esta implementación es superior a una solución estática.

### 2. Especificación del Comportamiento IA
- **Inputs:** Requerimientos de entrada del usuario o del sistema.
- **Output:** Formato, estructura y naturaleza de la respuesta.
- **Procesamiento:** Cómo "piensa" la IA y qué expectativas de tiempo de respuesta (latencia) existen.
- **Calidad:** Definición de qué constituye una respuesta de alta calidad.

### 3. Flujo de Experiencia de Usuario (UX Flow)
- **Journey:** El camino del usuario desde el trigger hasta la resolución.
- **Estados de Procesamiento:** Diseño de esqueletos (skeletons), loaders o mensajes de "pensamiento" para gestionar la espera.
- **Presentación de Salida:** Cómo se visualiza el resultado para que sea accionable.

### 4. Patrones de Confianza y Transparencia (Trust Patterns)
- **Indicadores de Actividad:** Mostrar claramente que la IA está trabajando.
- **Nivel de Confianza:** Indicadores visuales de qué tan segura está la IA de su respuesta.
- **Citas y Fuentes:** Si aplica, mostrar de dónde viene la información para evitar la percepción de alucinación.
- **Control Humano:** Mecanismos para que el usuario supervise, edite o rechace el output.

### 5. Gestión de Errores y Casos de Borde
- **Escenarios de Fallo:** Qué pasa si el modelo falla, hay timeout o se alcanzan los límites (rate limiting).
- **Mensajes de Recuperación:** Copy que explique el error de forma humana y ofrezca caminos de salida.
- **Fallback Behavior:** ¿Existe una versión "tonta" o manual si la IA no está disponible?

### 6. Patrones de Interacción y Refinamiento
- **Regeneración:** Capacidad de pedir otra versión del mismo prompt.
- **Refinamiento:** Poder ajustar el resultado mediante diálogo o controles (sliders, opciones).
- **Historial y Contexto:** Cómo la IA recuerda (o olvida) interacciones previas.

### 7. Requerimientos de Diseño Visual y UI
- **Componentes:** UI específica (chat-bubbles, prompts, magic wands, sparkles).
- **Accesibilidad:** Garantizar que los estados dinámicos sean legibles por screen readers (aria-live).
- **Performance:** Minimizar el Layout Shift durante la generación de contenido.

### 8. Métricas de Éxito
- **Satisfacción:** Feedback directo del usuario (Thumbs up/down).
- **Calidad Técnica:** Tasa de alucinación o errores de modelo detectados.
- **Impacto:** Tiempo ahorrado o éxito en la tarea.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **En la Etapa 05:** Es obligatorio consultar esta skill al diseñar wireframes de features con IA.
- **Output:** Se debe generar un documento `AI_Design_Brief_[FeatureName].md` en la carpeta de documentación o artefactos del proyecto actual.

---
*Framework Baraldi v2.26.4 · Skill 08*
