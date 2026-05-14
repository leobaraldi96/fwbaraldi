# Toolbox: AI Interaction Design & Briefing Protocol

---

```yaml
name: ai-interaction-design-brief
description: >
  Protocolo especializado para el diseño de features impulsadas por Inteligencia Artificial.
  Asegura la transparencia, la confianza del usuario y la gestión de la incertidumbre en sistemas no deterministas.
  Úsala en la Etapa 04 (Interaction Design) para definir el comportamiento de la IA.
  Keywords: AI, UX, trust, transparencia, alucinaciones, refinamiento, prompt, IA generativa.
skill_id: toolbox_ai_ux_brief
version: "1.0.0"
framework: Baraldi
type: "Toolbox / Specialized Design"
trigger: "Cuando el producto incluye capacidades de IA (LLMs, generación de imágenes, recomendaciones, etc.) y se necesita definir la experiencia de interacción."
```

---

## Rol de esta herramienta
Esta skill actúa como un **AI UX Architect**. Su misión es diseñar el "puente" entre la capacidad técnica del modelo y la necesidad humana, asegurando que el usuario mantenga el control y entienda cómo y por qué la IA está actuando.

---

## Estructura del AI Design Brief

### 1. Especificación del Comportamiento de la IA
- **Input/Output:** Qué datos recibe y qué formato entrega (texto, código, imagen, acción).
- **Expectativas de Calidad:** Qué constituye una "buena respuesta" y qué es un error inaceptable.
- **Tiempos de Respuesta:** Definición de latencia y gestión de estados de espera (skeleton screens, streaming de texto).

### 2. Patrones de Confianza y Transparencia
- **Indicadores de Trabajo:** Cómo comunicamos que la IA está procesando (no solo un spinner, sino contexto).
- **Citas y Fuentes:** Cómo demostramos la veracidad de la respuesta.
- **Niveles de Confianza:** Mostrar si la IA está muy segura o si es una sugerencia tentativa.

### 3. Flujo de Interacción y Refinamiento
- **Bucle de Feedback:** Botones de Like/Dislike o edición directa.
- **Regeneración:** Capacidad de pedir otra variante.
- **Historial y Contexto:** Cómo la IA recuerda lo que se habló antes en la sesión.

### 4. Gestión de Errores y Alucinaciones
- **Fallback UX:** Qué pasa cuando la API cae o el modelo no entiende.
- **Mensajes de Error Transparentes:** Explicar *por qué* falló (ej: "No tengo acceso a datos en tiempo real").
- **Guardrails:** Límites éticos y de seguridad visibles para el usuario.

---

## Formatos de Entrega
1.  **AI Feature Brief:** Documento técnico-creativo para desarrolladores y diseñadores.
2.  **Interaction Map (AI States):** Diagrama de estados (Input -> Processing -> Output -> Feedback).
3.  **Trust & Transparency Guide:** Listado de componentes de UI necesarios para construir confianza.

---

## Reglas de Oro del AI-UX Baraldi
- **Usuario al Mando:** La IA asiste, el usuario decide. Siempre debe haber una opción de "deshacer" o "editar".
- **Transparencia Radical:** Nunca finjas que la IA es humana. Sé claro sobre las limitaciones.
- **Valor sobre Novedad:** No uses IA porque es tendencia, usala porque resuelve un dolor que el código tradicional no puede.

---

*Framework Baraldi v2.26.0 · toolbox/08_ai_interaction_design_brief.md*
