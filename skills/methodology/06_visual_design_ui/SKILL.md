---
name: visual-design-ui
description: >
  Ejecuta la Etapa 06 (Visual Design / UI) del Framework Baraldi.
  Define la estética, los tokens de diseño y los componentes de alta fidelidad.
  Crea el contrato visual para la implementación agéntica (DESIGN.md).
keywords: visual design, ui, tokens, design system, luxury obsidian, design.md, css variables.
status: operational
version: "2.28.0"
---

# Etapa 06 — Visual Design (UI)

> **Objetivo:** Transformar la arquitectura e interacción en una interfaz de alta fidelidad, estética premium y coherencia visual absoluta. El entregable final es el **DESIGN.md**, la "Fuente de Verdad" para que cualquier agente de IA pueda codificar el producto.

---

## Definición de Atmósfera Visual (Aesthetic Definition)
Al ser el framework **estéticamente agnóstico**, no impone estilos, temas ni tipografías predefinidas. En su lugar, el equipo de producto define libremente la dirección estética y los principios visuales alineados a la estrategia de negocio.

La IA debe:
1. **Consultar y relevar la estética:** Interrogar de forma obligatoria al usuario sobre sus definiciones estéticas, líneas de arte, estilos deseados y características visuales claves antes de definir cualquier artefacto visual.
2. **Capturar la dirección de diseño:** Analizar las respuestas del usuario o el código de UI preexistente para mapear la atmósfera visual deseada.
3. **Respetar los sistemas existentes:** Si ya existe un sistema de diseño o biblioteca de componentes en uso, la IA debe adherirse estrictamente a sus reglas y documentar las variables correspondientes sin introducir cambios no solicitados.
4. **Traducir a especificaciones técnicas:** Documentar la dirección acordada en tokens de diseño dentro del `DESIGN.md` para garantizar la consistencia en el código.
5. **Presentar resumen de carga y actualización:** Cada vez que el agente escriba por primera vez o realice una actualización en `DESIGN.md`, debe entregar obligatoriamente al usuario en el chat un resumen claro y estructurado de los tokens, componentes y cambios que se acaban de guardar.

---

## Entregables Estrella: DESIGN.md & Showroom / TestUI Interactivo

### 1. DESIGN.md (Agent-First Contract)
Este archivo es obligatorio y debe cumplir con el **[Protocolo 36] (Taste Design)** para evitar resultados genéricos. Debe contener:
1. **Design Tokens (YAML):** Colores primarios, secundarios, estados, escalas de espaciado y tipografía.
2. **CSS Variables Mapping:** Definición de variables para implementación directa.
3. **Component Specs:** Reglas de redondeo (radius), sombras y bordes para componentes core.
4. **Anti-Patterns List:** Lista de elementos prohibidos para este proyecto específico.

### 2. Showroom UI & Living Component Library (`docs-fwbaraldi/06_UI/showroom.html` o `test-ui.html`)
Para erradicar la ceguera de contratos y permitir una auditoría visual simultánea entre humano e IA, la Etapa 06 genera y mantiene vivo este archivo interactivo bajo el principio de **Agnosticismo Estricto**:
- **Naturaleza Agnóstica y Co-construida:** La plantilla base de `showroom.html` **NO impone componentes predeterminados** (no asume botones, tarjetas ni alertas de cajón). La estructura de componentes se va poblando y descubriendo en un diálogo ida y vuelta con el usuario a partir de sus necesidades reales o su código preexistente.
- **Vista Panorámica Total & Impacto Inmediato:** A medida que se definen tokens y componentes, se exponen en una sola pantalla con sus valores reales (paleta, tipografía, espaciados) y sus estados (`:hover`, `:active`, `:disabled`, `:focus`, estados vacíos y de error). Esto permite al usuario auditar al instante cómo impacta cualquier cambio global o nuevo elemento en todo el ecosistema.
- **Herramienta Viva de Actualización Continua (Mandato Proactivo):** Cada vez que se crea o modifica `DESIGN.md`, se añade un token o se acuerda un nuevo componente (ej. modales, menús, estados de carga, páginas de error), **este archivo se actualiza de manera activa y simultánea**.
- **Documentación Técnica Completa para Devs (Dev Specs & Snippets):** Todo componente acordado con el humano debe documentarse en el Showroom con:
  1. **Indicaciones de uso:** Propósito del elemento y reglas de interacción.
  2. **Opciones y Modificadores:** Tabla con clases CSS, variantes de tamaño/color y propiedades disponibles.
  3. **Estados documentados en funcionamiento:** Ejemplos funcionales e interactivos de cada estado (`normal`, `hover`, `focus`, `disabled`, `error`, `loading`).
  4. **Snippet de código listo para producción:** Bloque con botón de copiado rápido para desarrolladores.
- **Sincronización Bidireccional y Recomendación de Validación:** El Showroom se alimenta del `DESIGN.md` y, a su vez, sirve para validar visualmente nuevos acuerdos estéticos antes de tocar las vistas productivas.
- **Entrega Visible del Enlace (Mandato Proactivo):** Cada vez que el agente cree, actualice o modifique tokens o componentes en `DESIGN.md` o en vistas de UI, **debe proveer explícitamente en el chat el enlace directo al archivo local** (`[Abrir Showroom UI](file:///.../docs-fwbaraldi/06_UI/showroom.html)`) recomendando al usuario abrirlo en su navegador para validar visualmente el impacto inmediato del cambio.

---

## Flujo de la etapa — 5 momentos

0. **[MOMENTO 0] Design Intelligence:** El Motor Anti-Slop. Calibración de Taste, Layout y Guardrails UX (Reemplaza antiguas Skills 24, 36 y 38).
1. **[MOMENTO 1] Design Tokens & Moodboard:** Definición de la paleta y el lenguaje visual. Generación del Sistema de Tokens Base.
2. **[MOMENTO 2] High-Fidelity Components:** Creación de la biblioteca de componentes (Lógica Bottom-Up y Contrato Handoff).
3. **[MOMENTO 3] DESIGN.md Generation & Showroom / TestUI:** Consolidación de la fuente de verdad agéntica y montaje de la vista interactiva panorámica (`showroom.html`).
4. **[MOMENTO 4] Interactive Prototyping (Artifact):** Generación de un prototipo interactivo (React/Tailwind) listo para testeo.

---

## Integración con la Toolbox (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Momento 4 (Interactive Prototyping):** MANDATORIO para testeo de alta fidelidad.
2. **Skill 10 (i18n Readiness Audit):** MANDATORIO antes de cerrar el Momento 3.
3. **Skill 12 & 13 (Accessibility & Screen Reader):** Mandatorio durante el Momento 2.
4. **Skill 19 (Performance & Web Vitals):** Consultar para optimizar el peso de los assets visuales.
5. **Design Critique Engine (`skills/engines/design_critique_engine/`):** Revisión y pulido estético.
6. **Etapa 07 - Momento 2 (Figma-to-Code Sync):** Mandatorio para el **Momento 3** (Extracción vía API).
7. **Visual Reverse Engineering Engine (`skills/engines/visual_reverse_engineering_engine/`):** Recomendado para el **Momento 1** (Extracción vía Vision).
8. **Token Audit Engine (`skills/engines/design_token_audit_engine/`):** Auditoría matemática de consistencia de tokens.
9. **Component Inventory Engine (`skills/engines/component_inventory_engine/`):** Priorización estratégica de construcción.

---

## Criterio de calidad
- [ ] El **DESIGN.md** está presente en la raíz de `docs-fwbaraldi/` con la estructura YAML normalizada de tokens.
- [ ] El **DESIGN.md** ha sido lintiado y auditado con éxito usando `npx @google/design.md lint docs-fwbaraldi/DESIGN.md`.
- [ ] Los tokens son consistentes con la identidad de marca definida.
- [ ] Se ha preparado el terreno para la sincronización 1:1 con Figma (Etapa 07 - Momento 2).
- [ ] La interfaz respeta los principios de accesibilidad (contraste, tamaños).
- [ ] Existe una jerarquía visual clara que guía la atención del usuario.

---

## NEVER List — Anti-patrones de la Etapa 06
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER uses tipografías genéricas (Inter) en High-End:** El uso de Inter en productos premium es un "AI Tell". Usa Geist, Satoshi o Outfit.
2.  **NEVER permitas "Alucinaciones Visuales":** Todo componente debe usar los tokens definidos en el `DESIGN.md`. Prohibido inventar clases ad-hoc.
3.  **NEVER avances sin el DESIGN.md:** Este archivo es el contrato agéntico. Sin él, no hay fuente de verdad para el desarrollo.
6.  **NEVER ignores los estándares A11y en tokens ni uses fuentes menores a 10px:** Contraste y tamaños deben ser validados matemáticamente. **Prohibido terminantemente usar `font-size` menor a 10px (0.625rem)** en cualquier elemento, texto legal, badge o pie de foto.
7.  **NEVER generes vistas monolíticas o acoplamiento tóxico:** Prohibido amontonar JSX, lógica de fetch, tipos y estilos en un solo archivo gigante (ej: `page.tsx` de 500+ líneas). Divide en componentes atómicos (`components/ui/`), custom hooks y tipos aislados. En PHP/HTML, separa estrictamente estructura (marcado), decoración (CSS modular) e interacción (JS externo).
8.  **NEVER uses CSS inline ni inventes clases no acordadas:** Prohibido el uso de `style="..."` o cadenas de clases utilitarias de frameworks (Tailwind/Bootstrap/shadcn) que ensucien o contradigan las clases globales. Si un estilo no está en `showroom.html` + `DESIGN.md`, no se improvisa: se consulta al usuario para extender el sistema.

## ALWAYS List — Mandatos de Comportamiento
- **Siempre** justifica la estética basada en beneficios técnicos (legibilidad) o psicológicos.
- **Siempre** fragmenta la interfaz en componentes modulares reutilizables y desacoplados.
- **Siempre** utiliza el *Taste Spectrum* como una conversación para calibrar el diseño.
- **Siempre** prepara el terreno para la sincronización 1:1 con Figma (API Sync).
- **Siempre** documenta las reglas de redondeo, sombras y elevación en las especificaciones.
- **Siempre** en proyectos comenzados (Retrofit), detecta y solicita al usuario indicarte una o más "Vistas Semilla de Referencia" (código de componentes React/Vue/HTML ya aprobados) para autocompletar los tokens y estilos base de `DESIGN.md` de forma precisa y evitar discrepancias.

---

## Protocolo de Mentoría y Co-creación (E06)
En la fase visual, el Agente actúa como un **Director de Arte** que educa el ojo del usuario:
*   **Justificación Estética:** Al proponer una tipografía o color, explicar su beneficio técnico (ej. *"Esta fuente tiene una altura de x [x-height] generosa que mejora la legibilidad en pantallas pequeñas"*) o psicológico.
*   **Reflexión de Taste:** Usar el **Taste Spectrum (Momento 0)** no como un cuestionario, sino como una conversación: *"Si subimos la densidad aquí, ganamos eficiencia pero perdemos aire. ¿Cómo crees que afectará esto a tu usuario en [Contexto definido en E01]?"*.
*   **Decisión Compartida:** Nunca entregar un diseño finalizado sin haber transitado los hitos de decisión con el humano.

---
*Framework Baraldi v2.28.0 · skills/methodology/06_visual_design_ui/SKILL.md*
