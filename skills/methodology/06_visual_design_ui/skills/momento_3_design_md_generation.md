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

### Paso 1: Detección y Recuperación de Activos (Retrofit & Existing Code Check)
Antes de generar el sistema de diseño, debes verificar si el proyecto ya está en desarrollo para evitar discrepancias con el código existente:
1. **Verificación de Proyecto Comenzado:** Inspecciona el espacio de trabajo en busca de archivos de configuración de frameworks de diseño (`tailwind.config.js`, `tailwind.config.ts`, `postcss.config.js`, `bootstrap.css`) o archivos de estilos globales (`index.css`, `globals.css`, `main.css`, `App.css`).
2. **Extracción Automática de Variables:** Si detectas estos archivos, léelos y extrae las variables CSS personalizadas (variables `--*`), la paleta de colores configurada y los tamaños de tipografía o espaciado existentes.
3. **Mapeo Obligatorio:** Registra estas variables base. El `DESIGN.md` final deberá mapear de forma explícita estos tokens existentes para asegurar consistencia técnica y evitar sobrescribir estilos en producción.
4. **Opción Adicional (Figma/Stitch):** Si el usuario proporciona una fuente de diseño externa, usa el servidor MCP `figma-developer-mcp` o Stitch para obtener ID de nodos, componentes, colores, sombras y radios de los bordes.

### Paso 2: Alineación Estética y Calibración (Taste Alignment & Intake)
*El framework es estéticamente agnóstico y no debe imponer una línea de diseño predefinida.* Debes solicitar activamente el input del usuario o sugerir una calibración basada en el CSS base detectado:
1. **Intake del Usuario:** Pregunta en el chat qué estética o "vibe" busca el usuario, o si prefiere mantener y documentar estrictamente la línea estética actual del proyecto existente.
2. **Calibrar el Espectro de Gusto (Taste Spectrum):** Dialoga para definir los valores (1-10) del proyecto:
   - **Density:** UI compacta vs espaciada.
   - **Variance:** Asimetría y disrupción vs simetría tradicional.
   - **Motion:** Transiciones sutiles vs cinemáticas fluidas.
3. **Neutralidad Tipográfica y de Color:** No impongas tipografías (como Satoshi o Geist) o colores por defecto. Solicita al usuario definir su fuente display/body o extrae las declaradas en el CSS base. Si es un producto High-End sin estilos previos, sugiere opciones premium justificando el motivo (legibilidad, peso visual).
4. **Mapeo de Paleta y Estructura:** Diseña los tokens de color asignando nombres descriptivos coherentes con los HEX/OKLCH existentes. Elimina el uso de negros puros (`#000000`) si buscas un look moderno y premium.

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
- **Engram Save:** Al finalizar la generación del archivo y su verificación, lanza un `mem_save` con el título *"Establecido el DESIGN.md"* y el tag `visual-design-system`.
