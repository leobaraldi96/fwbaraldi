---
name: interaction-design-ux
description: >
  Ejecuta la Etapa 05 (Interaction Design / UX) del Framework Baraldi.
  Define el comportamiento, los estados y el esqueleto de la experiencia.
keywords: ux, interaction design, micro-interactions, states, wireframes, user experience.
status: operational
version: "2.31.0"
framework: Baraldi
stage: "05"
stage_name: "Interaction Design (UX)"
---

# Etapa 05 - Interaction design (UX)

> **Objetivo:** Definir cómo el usuario interactúa con la arquitectura creada en la Etapa 04. Pasamos del "mapa" al "movimiento". Aquí se diseñan los comportamientos, los estados de los componentes, el **sistema de contenido (content systems architecture)** y la **Handoff Matrix** validada.

---

## Foco en el comportamiento y validación
En esta etapa no nos preocupamos por los colores, sino por:
1. **Micro-interacciones:** Qué pasa cuando el usuario hace clic, desliza o espera.
2. **Sistema de estados:** Definición exhaustiva de Hover, Active, Focus, Disabled, Loading y Error para cada componente.
3. **Validación multidimensional:** Alineación de cada wireframe con negocio, legal, producto y voz.

---

## Flujo de la etapa - 3 momentos en secuencia

```
[MOMENTO 1] Interaction patterns & tone (skills/momento_1_voice_tone.md)
        ↓
  Validar VOICE.md y patrones de interacción
        ↓
[MOMENTO 2] State machine & content refactoring (skills/momento_2_state_machine.md)
        ↓
  Validar estados interactivos y microcopy
        ↓
[MOMENTO 3] Handoff matrix & wireframes (skills/momento_3_wireframes.md)
        ↓
       Etapa 06 - Visual design / UI (../06_visual_design_ui/SKILL.md)
```

---

## Los 3 momentos - cuándo activar cada uno

### Momento 1 - Interaction patterns & tone
**Archivo:** `skills/momento_1_voice_tone.md`
**Activar cuando:** Se aprueba el cierre de la Etapa 04 (`../04_information_architecture/SKILL.md`).
**Produce:** Definición de gestos, patrones de interacción y el contrato normativo `docs-fwbaraldi/VOICE.md`.

### Momento 2 - State machine & content refactoring
**Archivo:** `skills/momento_2_state_machine.md`
**Activar cuando:** El `VOICE.md` está aprobado por el usuario.
**Produce:** Mapeo de los 6 estados interactivos por componente (`default`, `hover`, `focus`, `active`, `disabled`, `loading`/`error`) y optimización sistémica del microcopy.

### Momento 3 - Handoff matrix & wireframes
**Archivo:** `skills/momento_3_wireframes.md`
**Activar cuando:** La matriz de estados y el microcopy están validados.
**Produce:** Creación del inventario exhaustivo de pantallas (Layout Architecture) y wireframes validados para pasar a la Etapa 06.

---

## Integración con la Toolbox y motores (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **AI Interaction Engine (`skills/engines/ai_interaction_engine/SKILL.md`):** Si el producto incluye funcionalidades de IA, es MANDATORIO aplicar este protocolo para diseñar la gestión de latencia, estados de "pensamiento" y feedback de errores de la IA.
2. **UX Writing Engine (`skills/engines/ux_writing_engine/SKILL.md`):** Herramienta core para los Momentos 1, 2 y 3. Debe usarse para redactar el `VOICE.md` y asegurar que cada mensaje de error o estado de éxito siga principios de voz activa y sentence case.
3. **Design Critique Engine (`../06_visual_design_ui/skills/engines/design_critique_engine/SKILL.md`):** Facilitar sesiones de revisión con stakeholders usando el protocolo "I like / I wish / What if".
4. **Layers Interaction Engine (`skills/engines/layers_interaction_engine/SKILL.md`):** Utilizar para mapear flujos de interacción detallados y micro-navegación antes de prototipar.
5. **Multimodal Feedback Engine (`skills/engines/multimodal_feedback_engine/SKILL.md`):** Protocolos de feedback multimodal (gestos, audio, haptics, animaciones). Activar cuando el producto tenga interacciones táctiles, de voz o gestuales complejas.

---

## Criterio de calidad
- [ ] El artefacto de "Layout Architecture" cubre OBLIGATORIAMENTE el 100% de las vistas y rutas aprobadas en el Sitemap de la Etapa 04 (regla anti-shortcuts).
- [ ] Los flujos lógicos de la Etapa 04 están exhaustivamente representados en wireframes.
- [ ] El **VOICE.md** está presente en `docs-fwbaraldi/VOICE.md`, definiendo tono, voz y reglas de microcopy.
- [ ] Cada interacción crítica tiene definidos sus estados de Error y Loading con copy validado.
- [ ] La navegación es intuitiva y sigue patrones de diseño establecidos.

---

## NEVER List - Anti-patrones de la Etapa 05
El Agente debe **bloquear** el proceso si detecta:

1. **NEVER diseñes estética (UI):** Esta etapa es de comportamiento. El foco es el movimiento y la lógica de interacción, no el maquillaje.
2. **NEVER permitas componentes sin sistema de estados:** Hover, Focus, Disabled y Loading son obligatorios. Prohibido omitir estados interactivos.
3. **NEVER uses gestos ocultos sin pistas:** La interactividad debe ser descubrible. No asumas que el usuario conoce gestos complejos.
4. **NEVER permitas microcopy vago:** "Error" o "Cargando" son inaceptables. Todo mensaje debe seguir el **VOICE.md** y ser accionable.
5. **NEVER ignores la latencia en IA:** Prohibido no diseñar los estados de "pensamiento" y los fallos de modelo si el producto usa IA.
6. **NEVER avances sin Handoff Matrix:** El inventario de pantallas debe ser exhaustivo y validado antes de la alta fidelidad.

## ALWAYS List - Mandatos de comportamiento
- **Siempre** justifica la elección de patrones (tabs, accordions) basada en la jerarquía de información.
- **Siempre** realiza un "mental walkthrough" con el usuario para detectar fricciones antes de cerrar una pantalla.
- **Siempre** redacta el **VOICE.md** definiendo tono, voz y reglas gramaticales del sistema.
- **Siempre** utiliza el *AI Interaction Engine* para productos con capacidades de inteligencia artificial.

---

## Protocolo de memoria y handoff - Etapa 05

**Al iniciar:** Buscar en `Engram MCP` por `ia-` (Information Architecture) para importar el 100% de las vistas del Sitemap y el Glosario oficial.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 1 | `ux-voice-contract` | `ux-writing` | Contrato `VOICE.md`, arquetipo de voz, tono por contexto y diccionario |
| Momento 2 | `ux-state-machines` | `interacción` | Matriz de los 6 estados interactivos y microcopy de errores/loading |
| Momento 3 | `ux-handoff-wireframes` | `cierre-de-etapa` | Layout Architecture al 100% del Sitemap y wireframes aprobados |

**Al cerrar la etapa (Handoff hacia Etapa 06):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de progreso: `[x] 04 Information Architecture -> [x] 05 Interaction Design (UX) -> [ ] 06 Visual Design (UI)`.
3. Proponer activamente la carga de `../06_visual_design_ui/SKILL.md` pasando los hallazgos `ux-` y el contrato `docs-fwbaraldi/VOICE.md` como input obligatorio.

---

## Protocolo de mentoría y co-creación (E05)
En esta etapa, el Agente no solo dibuja; enseña y facilita la decisión arquitectónica:
*   **Justificación de patrones:** Al proponer un layout, el Agente debe explicar por qué ese patrón (ej. tabs, accordions, sidebars) es el más eficiente para la jerarquía de información definida.
*   **Reflexión de flujo:** Antes de dar una pantalla por cerrada, invitar al usuario a realizar un "mental walkthrough": *"¿Qué siente el usuario en este paso? ¿Hay fricción innecesaria?"*.
*   **Content refactoring:** Al redactar, el Agente debe tratar el texto como código. Refactorizar significa eliminar lo innecesario sin perder el significado, asegurando que el contenido sea una pieza de arquitectura funcional, no solo decoración.
*   **Validación obligatoria de voz (VOICE.md):** Antes de invitar al humano a dibujar, la IA DEBE redactar y presentarle el artefacto `VOICE.md`. Este documento DEBE generarse desde el primer intento con máxima profundidad arquitectónica (regla anti-shortcuts). Es MANDATORIO que incluya: 1) **Diccionario del sistema completo** (importando el 100% de los términos core de la Etapa 04, sin omitir ninguno), 2) **Mapeo de microcopy crítico** cruzado de forma exhaustiva con el 100% de los User Flows y el Sitemap (redactando el copy exacto para empty states, errores de infraestructura, notificaciones legales, bifurcaciones de pago y edge cases), y 3) **Guardrails gramaticales** (voz activa, prohibición estricta de robot speak). Queda terminantemente prohibido entregar resúmenes o versiones parciales. Sin la validación y aprobación explícita del humano sobre este contrato maestro, el handoff de diseño visual queda **bloqueado**.
*   **Handoff consciente:** Explicar al usuario que la claridad lograda aquí en texto es la base innegociable de la Etapa 06.
*   **Traspaso de dibujo (handoff visual al humano):** Al finalizar de entregar los artefactos, la IA debe detenerse y delegar explícitamente el diseño al humano con este enfoque: *"Listo, tenés todos los artefactos de la Etapa 05. Ahora te toca a vos diseñar los wireframes (en baja o media fidelidad) basándote en estas definiciones. Tenés dos opciones para que trabajemos juntos: 1) Si usás el protocolo MCP (Figma, Stitch), nos conectamos al lienzo y lo armamos en equipo. 2) Si preferís hacerlo por tu cuenta, no es obligatorio usar MCP: podés pasarme capturas de pantalla por acá, o ir guardando tus exportaciones dentro de la carpeta 'docs-fwbaraldi/05_Interaction_Design/wireframes/' y avisarme para que yo las revise, critique y vayamos iterando versión a versión."*

---
*Framework Baraldi v2.31.0 · skills/methodology/05_interaction_design_ux/SKILL.md*
