---
name: visual-design-ui
description: >
  Ejecuta la Etapa 06 (Visual Design / UI) del Framework Baraldi.
  Define la estética, los tokens de diseño y los componentes de alta fidelidad.
  Crea el contrato visual para la implementación agéntica (DESIGN.md).
keywords: visual design, ui, tokens, design system, luxury obsidian, design.md, css variables.
status: operational
version: "2.31.0"
---

# Etapa 06 - Visual design (UI)

> **Objetivo:** Transformar la arquitectura e interacción en una interfaz de alta fidelidad, estética premium y coherencia visual absoluta. El entregable final es el **DESIGN.md**, la "fuente de verdad" para que cualquier agente de IA pueda codificar el producto.

---

## Definición de atmósfera visual (Aesthetic Definition)
Al ser el framework **estéticamente agnóstico**, no impone estilos, temas ni tipografías predefinidas. En su lugar, el equipo de producto define libremente la dirección estética y los principios visuales alineados a la estrategia de negocio.

La IA debe:
1. **Consultar y relevar la estética:** Interrogar de forma obligatoria al usuario sobre sus definiciones estéticas, líneas de arte, estilos deseados y características visuales claves antes de definir cualquier artefacto visual.
2. **Capturar la dirección de diseño:** Analizar las respuestas del usuario o el código de UI preexistente para mapear la atmósfera visual deseada.
3. **Respetar los sistemas existentes:** Si ya existe un sistema de diseño o biblioteca de componentes en uso, la IA debe adherirse estrictamente a sus reglas y documentar las variables correspondientes sin introducir cambios no solicitados.
4. **Traducir a especificaciones técnicas:** Documentar la dirección acordada en tokens de diseño dentro del `DESIGN.md` para garantizar la consistencia en el código.
5. **Presentar resumen de carga y actualización:** Cada vez que el agente escriba por primera vez o realice una actualización en `DESIGN.md`, debe entregar obligatoriamente al usuario en el chat un resumen claro y estructurado de los tokens, componentes y cambios que se acaban de guardar.

---

## Entregables estrella: DESIGN.md y Showroom / TestUI interactivo

### 1. DESIGN.md (Agent-First Contract)
Este archivo es obligatorio y debe cumplir con la calibración de `skills/momento_0_design_intelligence.md` para evitar resultados genéricos. Debe contener:
1. **Design Tokens (YAML):** Colores primarios, secundarios, estados, escalas de espaciado y tipografía.
2. **CSS Variables Mapping:** Definición de variables para implementación directa.
3. **Component Specs:** Reglas de redondeo (radius), sombras y bordes para componentes core.
4. **Anti-Patterns List:** Lista de elementos prohibidos para este proyecto específico.

### 2. Showroom UI & Living Component Library (`docs-fwbaraldi/06_UI/showroom.html` o `test-ui.html`)
Para erradicar la ceguera de contratos y permitir una auditoría visual simultánea entre humano e IA, la Etapa 06 genera y mantiene vivo este archivo interactivo bajo el principio de **agnosticismo estricto** (usando la plantilla base `../../../templates/showroom_ui.html`):
- **Naturaleza agnóstica y co-construida:** La plantilla base de `showroom.html` **NO impone componentes predeterminados** (no asume botones, tarjetas ni alertas de cajón). La estructura de componentes se va poblando y descubriendo en un diálogo ida y vuelta con el usuario a partir de sus necesidades reales o su código preexistente.
- **Vista panorámica total e impacto inmediato:** A medida que se definen tokens y componentes, se exponen en una sola pantalla con sus valores reales (paleta, tipografía, espaciados) y sus estados (`:hover`, `:active`, `:disabled`, `:focus`, estados vacíos y de error). Esto permite al usuario auditar al instante cómo impacta cualquier cambio global o nuevo elemento en todo el ecosistema.
- **Herramienta viva de actualización continua (mandato proactivo):** Cada vez que se crea o modifica `DESIGN.md`, se añade un token o se acuerda un nuevo componente (ej. modales, menús, estados de carga, páginas de error), **este archivo se actualiza de manera activa y simultánea**.
- **Documentación técnica completa para devs (Dev Specs & Snippets):** Todo componente acordado con el humano debe documentarse en el Showroom con:
  1. **Indicaciones de uso:** Propósito del elemento y reglas de interacción.
  2. **Opciones y modificadores:** Tabla con clases CSS, variantes de tamaño/color y propiedades disponibles.
  3. **Estados documentados en funcionamiento:** Ejemplos funcionales e interactivos de cada estado (`normal`, `hover`, `focus`, `disabled`, `error`, `loading`).
  4. **Snippet de código listo para producción:** Bloque con botón de copiado rápido para desarrolladores.
- **Sincronización bidireccional y recomendación de validación:** El Showroom se alimenta del `DESIGN.md` y, a su vez, sirve para validar visualmente nuevos acuerdos estéticos antes de tocar las vistas productivas.
- **Entrega visible del enlace (mandato proactivo):** Cada vez que el agente cree, actualice o modifique tokens o componentes en `DESIGN.md` o en vistas de UI, **debe proveer explícitamente en el chat el enlace directo al archivo local** (`[Abrir Showroom UI](file:///.../docs-fwbaraldi/06_UI/showroom.html)`) recomendando al usuario abrirlo en su navegador para validar visualmente el impacto inmediato del cambio.

---

## Flujo de la etapa - 5 momentos en secuencia

0. **[MOMENTO 0] Design intelligence (`skills/momento_0_design_intelligence.md`):** El motor anti-slop. Calibración de taste, layout y guardrails UX.
1. **[MOMENTO 1] Design tokens & moodboard (`skills/momento_1_foundations_and_moodboard.md`):** Definición de la paleta y el lenguaje visual. Generación del sistema de tokens base.
2. **[MOMENTO 2] High-fidelity components (`skills/momento_2_components.md`):** Creación de la biblioteca de componentes (lógica bottom-up y contrato handoff).
3. **[MOMENTO 3] DESIGN.md generation & Showroom / TestUI (`skills/momento_3_design_md_generation.md`):** Consolidación de la fuente de verdad agéntica (`docs-fwbaraldi/DESIGN.md`) y montaje de la vista interactiva panorámica (`docs-fwbaraldi/06_UI/showroom.html`).
4. **[MOMENTO 4] Interactive prototyping (`skills/momento_4_interactive_prototyping.md`):** Generación de un prototipo interactivo listo para testeo y pase a la Etapa 07 (`../07_handover_qa/SKILL.md`).

---

## Integración con la Toolbox y motores (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Interactive Prototyping (`skills/momento_4_interactive_prototyping.md`):** MANDATORIO para testeo de alta fidelidad.
2. **Responsive & Global Readiness Protocol (`../../toolbox/responsive_and_global_readiness_protocol/SKILL.md`):** MANDATORIO antes de cerrar el Momento 3 para validar adaptabilidad e i18n.
3. **WCAG Accessibility & Screen Reader (`../07_handover_qa/skills/engines/wcag_accessibility_audit_engine/SKILL.md` y `../07_handover_qa/skills/engines/screen_reader_testing_engine/SKILL.md`):** Mandatorio durante el Momento 2 para auditar contraste y semántica de componentes.
4. **Design Critique Engine (`skills/engines/design_critique_engine/SKILL.md`):** Revisión y pulido estético.
5. **Visual & Token QA Sync (`../07_handover_qa/skills/momento_2_visual_token_qa.md`):** Mandatorio para el **Momento 3** (extracción y sincronización vía API/Figma).
6. **Visual Reverse Engineering Engine (`skills/engines/visual_reverse_engineering_engine/SKILL.md`):** Recomendado para el **Momento 1** (extracción de tokens desde vistas semilla o referencias).
7. **Token Audit Engine (`skills/engines/design_token_audit_engine/SKILL.md`):** Auditoría matemática de consistencia de tokens.
8. **Component Inventory Engine (`skills/engines/component_inventory_engine/SKILL.md`):** Priorización estratégica de construcción.

---

## Criterio de calidad
- [ ] El **DESIGN.md** está presente en `docs-fwbaraldi/DESIGN.md` con la estructura YAML normalizada de tokens.
- [ ] El **Showroom UI** está presente y sincronizado en `docs-fwbaraldi/06_UI/showroom.html`.
- [ ] Los tokens son consistentes con la identidad de marca definida.
- [ ] Se ha preparado el terreno para la sincronización 1:1 con Figma (`../07_handover_qa/skills/momento_2_visual_token_qa.md`).
- [ ] La interfaz respeta los principios de accesibilidad (contraste, tamaños en `rem`, prohibido menor a `0.625rem`).
- [ ] Existe una jerarquía visual clara que guía la atención del usuario.

---

## NEVER List - Anti-patrones de la Etapa 06
El Agente debe **bloquear** el proceso si detecta:

1. **NEVER uses tipografías genéricas (Inter) en High-End:** El uso de Inter en productos premium es un "AI Tell". Usa Geist, Satoshi o Outfit.
2. **NEVER permitas "alucinaciones visuales":** Todo componente debe usar los tokens definidos en el `DESIGN.md`. Prohibido inventar clases ad-hoc.
3. **NEVER avances sin el DESIGN.md:** Este archivo es el contrato agéntico. Sin él, no hay fuente de verdad para el desarrollo.
4. **NEVER ignores los estándares A11y en tokens ni uses fuentes menores a 10px:** Contraste y tamaños deben ser validados matemáticamente. **Prohibido terminantemente usar `font-size` menor a 10px (0.625rem)** en cualquier elemento, texto legal, badge o pie de foto.
5. **NEVER generes vistas monolíticas o acoplamiento tóxico:** Prohibido amontonar JSX, lógica de fetch, tipos y estilos en un solo archivo gigante (ej: `page.tsx` de 500+ líneas). Divide en componentes atómicos (`components/ui/`), custom hooks y tipos aislados. En PHP/HTML, separa estrictamente estructura (marcado), decoración (CSS modular) e interacción (JS externo).
6. **NEVER uses CSS inline ni inventes clases no acordadas:** Prohibido el uso de `style="..."` o cadenas de clases utilitarias de frameworks (Tailwind/Bootstrap/shadcn) que ensucien o contradigan las clases globales. Si un estilo no está en `showroom.html` + `DESIGN.md`, no se improvisa: se consulta al usuario para extender el sistema.

## ALWAYS List - Mandatos de comportamiento
- **Siempre** justifica la estética basada en beneficios técnicos (legibilidad) o psicológicos.
- **Siempre** fragmenta la interfaz en componentes modulares reutilizables y desacoplados.
- **Siempre** utiliza el *Taste Spectrum* como una conversación para calibrar el diseño.
- **Siempre** prepara el terreno para la sincronización 1:1 con Figma (API Sync).
- **Siempre** documenta las reglas de redondeo, sombras y elevación en las especificaciones.
- **Siempre** en proyectos comenzados (Retrofit), detecta y solicita al usuario indicarte una o más "vistas semilla de referencia" (código de componentes React/Vue/HTML ya aprobados) para autocompletar los tokens y estilos base de `DESIGN.md` de forma precisa y evitar discrepancias.

---

## Protocolo de memoria y handoff - Etapa 06

**Al iniciar:** Buscar en `Engram MCP` por `ux-` (Interaction Design) y leer `docs-fwbaraldi/VOICE.md` para asegurar que la biblioteca de componentes cubra todos los estados y microcopys aprobados.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 0 & 1 | `ui-tokens-foundation` | `sistema-visual` | Dirección estética, paleta `oklch()`, escalas tipográficas y grillas |
| Momento 2 | `ui-component-library` | `componentes` | Inventario de componentes atómicos y moléculas con sus 6 estados |
| Momento 3 & 4 | `ui-design-contract` | `cierre-de-etapa` | Contrato `DESIGN.md` consolidado, `showroom.html` vivo y prototipo validado |

**Al cerrar la etapa (Handoff hacia Etapa 07):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de progreso: `[x] 05 Interaction Design (UX) -> [x] 06 Visual Design (UI) -> [ ] 07 Handover & QA`.
3. Proponer activamente la carga de `../07_handover_qa/SKILL.md` pasando los hallazgos `ui-`, `docs-fwbaraldi/DESIGN.md` y `docs-fwbaraldi/06_UI/showroom.html` como input obligatorio.

---

## Protocolo de mentoría y co-creación (E06)
En la fase visual, el Agente actúa como un **director de arte** que educa el ojo del usuario:
*   **Justificación estética:** Al proponer una tipografía o color, explicar su beneficio técnico (ej. *"Esta fuente tiene una altura de x [x-height] generosa que mejora la legibilidad en pantallas pequeñas"*) o psicológico.
*   **Reflexión de taste:** Usar el **Taste Spectrum (Momento 0)** no como un cuestionario, sino como una conversación: *"Si subimos la densidad aquí, ganamos eficiencia pero perdemos aire. ¿Cómo crees que afectará esto a tu usuario en [Contexto definido en E01]?"*.
*   **Decisión compartida:** Nunca entregar un diseño finalizado sin haber transitado los hitos de decisión con el humano.

---
*Framework Baraldi v2.31.0 · skills/methodology/06_visual_design_ui/SKILL.md*
