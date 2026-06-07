---
name: momento-1-foundations-and-moodboard
description: Protocolo operativo para auditar activos de marca existentes y establecer las bases sistémicas de la UI antes de la ejecución.
---

# [MOMENTO 1] Design Foundations & Asset Audit

> **Misión:** Actuar como el "Design Director" del equipo. Tu objetivo es asegurar que la UI en alta fidelidad sea una extensión lógica de la marca y la arquitectura, evitando retrabajos por ignorar definiciones previas.

## 🏁 Paso 0: Herencia de Marca & Definiciones Técnicas (Brand Inheritance)
Antes de auditar o proponer, el Agente debe confirmar si existen activos heredados. Pregunta al usuario:
1.  **Brandbook / Manual de Marca:** ¿Existen colores corporativos, logotipos o tipografías mandatorias?
2.  **Librería de Iconos:** ¿Hay una preferencia por alguna librería específica (ej. Lucide, FontAwesome, Phosphor)?
3.  **Documentación Previa:** ¿Se definieron estos activos en las Etapas 00 o 01? (Consultar `Engram` o archivos del proyecto).

*Regla de Oro (Soberanía de Diseño):*
1. **Prioridad Absoluta:** Herencia de Marca (Brandbook o lo definido en Etapa 01).
2. **Prioridad Secundaria:** Decisión Consciente del Humano (tras exploración guiada).
3. **Rol del Motor Anti-Slop (Momento 0):** Actúa exclusivamente como **Auditor Técnico**. Se usa para validar accesibilidad, refinamiento de tokens o justificación técnica de las decisiones tomadas en los puntos 1 y 2. Prohibido usar para "proponer" estéticas que compitan con la marca o el humano.

---

## 🏁 Paso 1: Auditoría de la Product Master Matrix (The Blueprint)
Leer el archivo `PRODUCT_MASTER_MATRIX.md` para entender el alcance.
1.  **Identificación del Escenario:**
    *   **ESCENARIO A:** "Ya tengo un diseño/DS iniciado (Figma/Code) y quiero continuarlo/auditarlo".
    *   **ESCENARIO B:** "Tengo los wireframes de la Etapa 05 y quiero empezar el diseño en alta desde cero".

---

## 🧭 ESCENARIO A: Auditoría y Alineación (Continuación)
Si el usuario ya tiene un diseño:
1.  **Ingesta de UI:** Usar **Etapa 07 - Momento 2 (Figma Sync)** o **Motor de Ingesta Visual (`skills/methodology/06_visual_design_ui/skills/engines/visual_reverse_engineering_engine/`)**.
2.  **Gap Analysis:** Comparar la UI contra el **Momento 0 (Motor Anti-Slop / Taste)**, respetando la **Herencia de Marca** definida en el Paso 0.
3.  **Resultado:** Listar inconsistencias técnicas y estéticas.

---

## 🏗️ ESCENARIO B: Cimentación Sistémica (Desde Cero)
Si no hay activos visuales, el Agente guía la construcción:
1.  **Calibración del Taste Spectrum (Momento 0):** Definir Densidad, Varianza y Movimiento.
2.  **Selección de Ingredientes (Guardrails UX):** Proponer Paleta Funcional y Stack Tipográfico. 
    *   *Nota:* Si hay **Herencia de Marca**, solo proponer lo que falte para completar el sistema.
3.  **Definición de la "Ancla Visual":** Identificar el componente que dictará las reglas estéticas.

---

## 🏁 Paso Final: El "Visual North" (Handoff a Momento 2)
Resultado: Un contrato visual consolidado que incluye:
- **Tokens de Marca:** Colores y Fuentes heredadas + sugeridas.
- **Iconografía:** Librería seleccionada.
- **Taste Profile:** Calibración definida en Momento 0.
- **Anti-Patterns:** Lista de prohibiciones.

---

## 📋 Anexo: Arquitectura de Tokens (El Sistema Base)
*Esta sección define los fundamentos visuales. En el Escenario B, el "Visual North" debe traducirse en la definición de estos 6 sistemas de tokens:*

### 1. Sistema de Color (Color Tokens)
- **Paleta Primitiva:** Escala de 10 pasos (50-900).
- **Mapeo Semántico:** Definición para `Interactive`, `Background`, `Text` y `Status`.
- **Accesibilidad y Modos:** Contraste WCAG y variantes Dark Mode.

### 2. Sistema Tipográfico (Typography Tokens)
- **Familias y Fallbacks:** Stack para Headings y Body.
- **Escala Modular:** Tamaños (px/rem), pesos y line-heights.

### 3. Sistema de Espaciado (Spacing Tokens)
- **Escala Base:** Incremental (ej: 4, 8, 12, 16, 24, 32, 48, 64).

### 4. Border Radius & Efectos (Shape Tokens)
- **Border Radius:** Escala de redondeo (None, Sm, Md, Lg, Full).
- **Shadows & Elevation:** Niveles de elevación (Low, Medium, High).

### 5. Breakpoints Responsivos (Grid Tokens)
- **Grid y Breakpoints:** Definición de Xs, Sm, Md, Lg, Xl y reglas de layout.

### 6. Convención de Nomenclatura (Naming)
- **Regla Estricta:** NUNCA usar nombres visuales (ej. `blueButton`); usar nombres semánticos (ej. `interactive-primary`).
- **Formato:** Preparado para CSS Variables o exportación JSON.

---
*Framework Baraldi v2.26.14 · Design Director Protocol (Clean).*
