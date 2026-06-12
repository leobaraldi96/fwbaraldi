---
name: momento-3-design-md-generation
description: >
  Protocolo operativo para extraer y sintetizar un Sistema de Diseño Semántico (Design System)
  a partir de pantallas existentes (Figma, Código o Stitch) y generar el contrato final DESIGN.md.
---

# [MOMENTO 3] DESIGN.md Generation (Semantic Synthesis)

> **Misión:** Actuar como el "Design Systems Lead" del equipo. Tu objetivo es auditar los activos técnicos y visuales (pantallas de Figma, código HTML/Tailwind o proyectos web), extraer la esencia estética y matemática del producto, y sintetizar todo en el documento maestro `docs-fwbaraldi/DESIGN.md`. 
> Este documento será la "fuente de verdad" para que cualquier IA futura pueda codificar pantallas nuevas manteniendo la fidelidad visual absoluta sin alucinar.

## 🏁 Instrucciones para el Agente (Cómo conducir este momento)

### Paso 1: Detección y Recuperación de Activos (Retrofit, Seed Views & Existing CSS)
Antes de generar el sistema de diseño, debes verificar si el proyecto ya está en desarrollo para evitar discrepancias con el código existente:
1. **Detección de Frameworks y CSS:** Inspecciona el espacio de trabajo en busca de archivos de configuración de frameworks de diseño (`tailwind.config.js`, `bootstrap.css`) o estilos globales (`index.css`, `globals.css`).
2. **Detección de Vistas Semilla (Seed Views):** Si el proyecto ya está iniciado, **debes preguntar explícitamente al usuario en el chat**:
   > *"Dado que este es un proyecto ya comenzado, ¿tienes alguna vista o componente específico (ej. un archivo `Home.jsx`, `index.html`, `Dashboard.vue` o similar) que ya esté 100% alineado al diseño y que debamos usar como base semilla de referencia?"*
3. **Autocompletado desde Vistas Semilla:** Si el usuario te indica estas vistas semilla, analízalas prioritariamente. Extrae de ellas las clases de estilo, variables y estructuras aplicadas y utilízalas para **autocompletar e importar automáticamente** los valores base de colores, fuentes, radios de borde y espaciado del `DESIGN.md`.
4. **Extracción Automática de Variables:** Extrae las variables CSS personalizadas (variables `--*`) y paletas configuradas de los archivos del proyecto detectados.
5. **Mapeo Obligatorio:** Registra estas variables en la sección de sincronización para asegurar consistencia técnica y evitar reescribir estilos.

### Paso 2: Alineación Estética y Calibración (Taste Alignment & Intake)
*El framework es estéticamente agnóstico y no debe imponer una línea de diseño predefinida.* Debes solicitar activamente el input del usuario:
1. **Intake del Usuario (Consulta Estética Obligatoria):** Pregunta obligatoriamente en el chat cuáles son las definiciones estéticas, líneas de arte, estilos deseados y características visuales clave que el usuario visualiza para el proyecto, o si prefiere mantener y documentar estrictamente la línea estética de las Vistas Semilla indicadas.
2. **Calibrar el Espectro de Gusto (Taste Spectrum):** Define con el usuario los valores (1-10) del proyecto (Density, Variance, Motion) para guiar la atmósfera visual.
3. **Neutralidad Tipográfica y de Color:** No impongas tipografías ni colores de forma unilateral. Si se detectó una tipografía o paleta en la Vista Semilla, incorpórala de inmediato. Si no hay estilos previos, sugiere opciones premium acordes al segmento una vez recibida la respuesta de la consulta de estética.
4. **Mapeo de Paleta y Estructura:** Diseña los tokens de color asignando nombres descriptivos coherentes con los HEX/OKLCH existentes.

---

### Paso 3: Generación del Artefacto (DESIGN.md - Premium Version)
Crea o actualiza el archivo `docs-fwbaraldi/DESIGN.md` con esta estructura blindada, normalizada y compatible con las especificaciones de getdesign.md. **La plantilla debe ser neutra, sin valores estéticos inducidos por defecto:**

```markdown
---
# Design Tokens (YAML Schema compatible con @google/design.md y getdesign.md)
tokens:
  colors:
    primary: "[Hex de color principal, ej: #1d4ed8]"
    primary-dark: "[Hex de color principal activo, ej: #172554]"
    secondary: "[Hex de color secundario]"
    background: "[Hex de fondo, sin negros puros #000000]"
    text: "[Hex de texto principal, ej: #xxxxxx]"
    text-on-primary: "[Hex de texto sobre color primario, ej: #xxxxxx]"
    accent: "[Hex de acento, ej: #xxxxxx]"
    danger: "[Hex de error/destructivo, ej: #xxxxxx]"
  typography:
    fonts:
      display: "[Familia tipografía display, ej: 'Nombre de Fuente', sans-serif]"
      body: "[Familia tipografía texto body, ej: 'Nombre de Fuente', sans-serif]"
    sizes:
      base: "[Medida base, ej: 16px o 1rem]"
      scale: ["[Escala tipográfica ordenada de menor a mayor, ej: 12px, 14px, 16px...]"]
  spacing:
    scale: ["[Escala de espaciado ordenada de menor a mayor, ej: 4px, 8px, 12px...]"]
  borders:
    radius:
      default: "[Radio de borde estándar por defecto, ej: 8px]"
      round: "9999px"

# Sincronización con Frameworks y Código CSS Existente (Retrofit Integration)
framework_sync:
  base_framework: "[Nombre del framework CSS si existe, ej: Tailwind / Bootstrap / Custom]"
  import_files:
    - "[Ruta del archivo CSS que define la base, ej: src/index.css]"
  variables_mapping:
    # Vincula los tokens del DESIGN.md con las variables CSS/Tailwind reales del proyecto
    primary: "[Nombre de la variable CSS mapeada, ej: var(--color-primary)]"
    secondary: "[Nombre de la variable CSS mapeada, ej: var(--color-secondary)]"
    background: "[Nombre de la variable CSS mapeada, ej: var(--color-bg)]"

# Definición estructurada de Componentes (Discrete YAML Entries)
components:
  button-primary:
    background: "{tokens.colors.primary}"
    text: "{tokens.colors.text-on-primary}"
    radius: "{tokens.borders.radius.default}"
    states:
      active:
        background: "{tokens.colors.primary-dark}"
      disabled:
        opacity: "0.5"
  card:
    background: "{tokens.colors.background}"
    border: "1px solid {tokens.colors.secondary}"
    radius: "{tokens.borders.radius.default}"
---

# Design System: [Nombre del Proyecto]
**Reference ID/URL:** [ID o Link de Figma/Stitch]

## 1. Visual Theme & Atmosphere
(Descripción del mood basada en el Taste Spectrum: Densidad, Varianza, Movimiento. Establece la vibra y filosofía visual).

## 2. Base Framework & CSS Integration
*   **Base Framework:** {framework_sync.base_framework}
*   **CSS Files Imported:** [Listado de archivos CSS base importados]
*   **Mapeo de Variables:** (Detalla cómo se relacionan los tokens del DESIGN.md con las variables CSS del proyecto preexistente. Explica si se pisan o heredan variables nativas de Bootstrap/Tailwind para no romper la consistencia del código preexistente).

## 3. Color Palette & Roles
(Lista de colores: Nombre Descriptivo + Hex Code + Rol Funcional. Sin negros puros. Cada entrada en la prosa DEBE referenciar `{tokens.colors.primary}`, etc. Prohibido usar HEX planos aquí).

## 4. Typography Rules
- **Display:** {tokens.typography.fonts.display} - Track-tight hierarchy.
- **Body:** {tokens.typography.fonts.body} - Relaxed leading, 65ch max-width.
- **Banned:** [Lista de tipografías prohibidas para este proyecto]

## 5. Component Stylings
- **Buttons:** Base style `{components.button-primary}`. States: Active `{components.button-primary.states.active}` and Disabled `{components.button-primary.states.disabled}`.
- **Cards/Containers:** Base style `{components.card}`. Soft shadows, hierarchy-driven use.
- **Inputs:** Label above, error below, accent focus ring.

## 6. Layout Principles
(Principios de grillas y estructuración visual usando CSS Grid y Flexbox. Uso de la escala `{tokens.spacing.scale}`).

## 7. Depth & Elevation
(Categorización de sombras, bordes y materiales. Uso de z-index y capas tridimensionales para la jerarquía visual).

## 8. Responsive Behavior
(Definición de breakpoints, tamaños mínimos de áreas táctiles [mínimo 44x44px] y reacomodamiento del layout en dispositivos móviles).

## 9. Do's and Don'ts (Anti-Patterns / BANNED)
(Lista explícita de lo que NO debe hacer la IA: No emojis en UI técnica, no usar valores HEX o px inline en el código, no crear variables CSS redundantes).

## 10. Agent Prompt Guide
- **Copy/Style Lock Rule:** "You are an AI developer implementing this UI. You must NEVER inline any colors, margins, or padding values. You MUST reference CSS variables or Tailwind utility classes mapped exactly to this design system's tokens."
- **Framework Base Rule:** "Respect the existing base framework ({framework_sync.base_framework}). Before introducing new utility classes or styles, verify if they exist in the imported files ({framework_sync.import_files}) or if they should be mapped via ({framework_sync.variables_mapping})."
- **Bias Clauses:** Evitar el uso de tipografía por defecto o bordes genéricos. Mantener la asimetría del layout.
```

---

## 🧠 Protocolo de Memoria y Guardrails
- **Lenguaje Obligatorio:** Usa terminología de diseño descriptiva y natural. Prohibido usar solo jerga técnica sin traducción ("rounded-xl").
- **Explicar el Por Qué:** Siempre explica la razón detrás de los elementos de diseño, no solo el "qué".
- **Validación Técnica Obligatoria (Linter CLI):** Tras generar o actualizar el `DESIGN.md`, el Agente **debe** ejecutar localmente el linter oficial: `npx @google/design.md lint docs-fwbaraldi/DESIGN.md` para garantizar la compatibilidad semántica, verificar contrastes WCAG y corregir cualquier error estructural reportado.
- **Resumen en el Chat (Mandatorio ante cada escritura o actualización):** Al finalizar la generación o cualquier actualización del `DESIGN.md`, el Agente **debe entregar obligatoriamente en el chat un resumen detallado y estructurado** de lo que se cargó, los tokens definidos (paleta, fuentes) y los cambios específicos realizados frente a la versión anterior.
- **Engram Save:** Al finalizar la generación del archivo y su verificación, lanza un `mem_save` con el título *"Establecido el DESIGN.md"* y el tag `visual-design-system`.

