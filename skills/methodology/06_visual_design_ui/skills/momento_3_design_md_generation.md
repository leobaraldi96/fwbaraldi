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
Crea o actualiza el archivo `docs-fwbaraldi/DESIGN.md` con esta estructura blindada:

```markdown
# Design System: [Nombre del Proyecto]
**Reference ID/URL:** [ID o Link de Figma/Stitch]

## 1. Visual Theme & Atmosphere
(Descripción del mood basada en el Taste Spectrum: Densidad, Varianza, Movimiento).

## 2. Color Palette & Roles
(Lista de colores: Nombre Descriptivo + Hex Code + Rol Funcional. Sin negros puros).

## 3. Typography Rules
- **Display:** [Font Name] - Track-tight hierarchy.
- **Body:** [Font Name] - Relaxed leading, 65ch max-width.
- **Banned:** Inter, generic system fonts.

## 4. Component Stylings
- **Buttons:** Flat, tactile active state, no outer glow.
- **Cards/Containers:** Rounded, soft shadow, hierarchy-driven use.
- **Inputs:** Label above, error below, accent focus ring.

## 5. Hero Section & Layout
(Reglas de asimetría, espaciado con CSS Grid, y contenedores max-width).

## 6. Motion & Interaction
(Spring physics, micro-loops perpetuos, transform/opacity-only).

## 7. Anti-Patterns (BANNED)
(Lista explícita de lo que NO debe hacer la IA: No emojis, no Inter, no neon glows, no John Doe).
```

---

## 🧠 Protocolo de Memoria y Guardrails
- **Lenguaje Obligatorio:** Usa terminología de diseño descriptiva y natural. Prohibido usar solo jerga técnica sin traducción ("rounded-xl").
- **Explicar el Por Qué:** Siempre explica la razón detrás de los elementos de diseño, no solo el "qué".
- **Engram Save:** Al finalizar la generación del archivo, lanza un `mem_save` con el título *"Establecido el DESIGN.md"* y el tag `visual-design-system`.
