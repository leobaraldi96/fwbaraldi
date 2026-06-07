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

### Paso 1: Recuperación de Activos (Retrieval & Networking)
Para analizar la estética, debes consumir la fuente visual. Pregúntale al usuario de dónde vas a extraer el diseño:
1. **Opción A (Figma):** Usa el servidor MCP `figma-developer-mcp` para obtener el ID del proyecto, nodos y componentes. Extrae colores, sombras y radios de los bordes.
2. **Opción B (Código Front-End):** Usa `read_url_content` o lee los archivos locales del repositorio (Tailwind config, archivos CSS globales).
3. **Opción C (Stitch o herramientas externas):** Si el usuario usa Google Stitch, pídele el ID del proyecto y extrae el HTML/Screenshot para auditar la "vibe".

### Paso 2: Análisis y Síntesis (Extracción Estética & Taste Audit)
Una vez tengas los datos visuales, debes procesarlos usando estas reglas de **Taste Design (Momento 0)**:

#### 1. Calibrar el Espectro de Gusto (Taste Spectrum)
- Define los valores (1-10) para el proyecto:
  - **Density:** ¿Qué tan cargada está la UI?
  - **Variance:** ¿Qué tan asimétrico u "offset" es el diseño?
  - **Motion:** ¿Qué tan fluida y "cinemática" es la transición?

#### 2. Definir la Atmósfera y Tipografía (The Vibe)
- **Obligatorio:** Usa adjetivos evocativos.
- **Guardrail:** Si es un proyecto Premium, prohíbe explícitamente el uso de `Inter`. Sugiere `Geist`, `Satoshi` o `Outfit`.

#### 3. Mapear la Paleta de Colores (Color Palette)
- Identifica los colores clave. Por cada uno: Nombre Poético + HEX + Rol.
- **Prohibición:** Elimina cualquier rastro de "AI Neon" o negros puros (#000000).

#### 4. Componentes y Hero (Structure)
- Define reglas para el Hero (asimetría, sin overlapping).
- Detalla el estilo de botones y tarjetas (tactile feedback, no neon glows).

---

### Paso 3: Generación del Artefacto (DESIGN.md - Premium Version)
Crea o actualiza el archivo `docs-fwbaraldi/DESIGN.md` con esta estructura blindada, normalizada y compatible con las especificaciones de getdesign.md:

```markdown
---
# Design Tokens (YAML Schema compatible con @google/design.md y getdesign.md)
tokens:
  colors:
    primary: "[Hex de color principal, ej: #1d4ed8]"
    primary-dark: "[Hex de color principal activo, ej: #172554]"
    secondary: "[Hex de color secundario]"
    background: "[Hex de fondo, sin negros puros #000000]"
    text: "[Hex de texto principal]"
    text-on-primary: "[Hex de texto sobre fondo primario]"
    accent: "[Hex de acento]"
    danger: "[Hex de error/destructivo]"
  typography:
    fonts:
      display: "[Nombre tipografía display, ej: Satoshi, sans-serif]"
      body: "[Nombre tipografía body, ej: Geist, sans-serif]"
    sizes:
      base: "16px"
      scale: ["12px", "14px", "16px", "20px", "24px", "32px", "48px"]
  spacing:
    scale: ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"]
  borders:
    radius:
      default: "[Bordes por defecto, ej: 8px]"
      round: "9999px"

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

## 2. Color Palette & Roles
(Lista de colores: Nombre Descriptivo + Hex Code + Rol Funcional. Sin negros puros. Cada entrada en la prosa DEBE referenciar `{tokens.colors.primary}`, etc. Prohibido usar HEX planos aquí).

## 3. Typography Rules
- **Display:** {tokens.typography.fonts.display} - Track-tight hierarchy.
- **Body:** {tokens.typography.fonts.body} - Relaxed leading, 65ch max-width.
- **Banned:** Inter, generic system fonts (en productos High-End).

## 4. Component Stylings
- **Buttons:** Base style `{components.button-primary}`. States: Active `{components.button-primary.states.active}` and Disabled `{components.button-primary.states.disabled}`.
- **Cards/Containers:** Base style `{components.card}`. Soft shadows, hierarchy-driven use.
- **Inputs:** Label above, error below, accent focus ring.

## 5. Layout Principles
(Principios de grillas y estructuración visual usando CSS Grid y Flexbox. Uso de la escala `{tokens.spacing.scale}`).

## 6. Depth & Elevation
(Categorización de sombras, bordes y materiales. Uso de z-index y capas tridimensionales para la jerarquía visual).

## 7. Responsive Behavior
(Definición de breakpoints, tamaños mínimos de áreas táctiles [mínimo 44x44px] y reacomodamiento del layout en dispositivos móviles).

## 8. Do's and Don'ts (Anti-Patterns / BANNED)
(Lista explícita de lo que NO debe hacer la IA: No emojis en UI técnica, no usar valores HEX o px inline, no bordes redondeados inconsistentes).

## 9. Agent Prompt Guide
- **Copy/Style Lock Rule:** "You are an AI developer implementing this UI. You must NEVER inline any colors, margins, or padding values. You MUST reference CSS variables or Tailwind utility classes mapped exactly to this design system's tokens."
- **Bias Clauses:** Evitar el uso de tipografía por defecto o bordes genéricos. Mantener la asimetría del layout.
```

---

## 🧠 Protocolo de Memoria y Guardrails
- **Lenguaje Obligatorio:** Usa terminología de diseño descriptiva y natural. Prohibido usar solo jerga técnica sin traducción ("rounded-xl").
- **Explicar el Por Qué:** Siempre explica la razón detrás de los elementos de diseño, no solo el "qué".
- **Validación Técnica Obligatoria (Linter CLI):** Tras generar o actualizar el `DESIGN.md`, el Agente **debe** ejecutar localmente el linter oficial: `npx @google/design.md lint docs-fwbaraldi/DESIGN.md` para garantizar la compatibilidad semántica, verificar contrastes WCAG y corregir cualquier error estructural reportado.
- **Engram Save:** Al finalizar la generación del archivo y su verificación, lanza un `mem_save` con el título *"Establecido el DESIGN.md"* y el tag `visual-design-system`.
