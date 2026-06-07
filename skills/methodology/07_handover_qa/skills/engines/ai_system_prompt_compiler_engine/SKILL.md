---
name: ai-system-prompt-compiler
description: >
  Protocolo de traducción (Compilador) que transforma un Sistema de Diseño estructurado 
  (DESIGN.md) en un System Prompt hiper-detallado para guiar a IAs codificadoras 
  (v0, Cursor, Claude) en la generación de UI sin alucinaciones.
keywords: prompt-engineering, ai-coder, v0, cursor, system-prompt, design-system-compiler, handoff
version: "2.26.10"
---

# 🪄 Skill 32 — Protocolo de Generación de System Prompt para IA (Compilador)

Este protocolo se activa durante el Handoff (**Etapa 07**) cuando el desarrollo de la interfaz de usuario va a ser delegado a un Agente de IA (como v0 de Vercel, Cursor, o Claude Artifacts). Actúa como un "Compilador", traduciendo el `DESIGN.md` a un formato instruccional restrictivo que impide que la IA use estilos genéricos.

## 🛠️ Estructura del System Prompt Generado

Al ejecutar este protocolo sobre un sistema de diseño, el Agente debe generar un Mega-Prompt estructurado con las siguientes secciones:

### 1. Rol y Restricciones del Sistema (System Role)
- **Definición de Rol:** "Eres un Design Engineer experto. Tu objetivo es escribir código que cumpla estrictamente con el sistema de diseño provisto."
- **Restricción Absoluta:** Prohibición explícita de inventar colores, márgenes o tipografías fuera de los tokens definidos.

### 2. Inyección de Tokens (Design System Injection)
Transcripción en formato "Machine-Readable" (Ej. listas de Tailwind o variables CSS) de:
- **Color Palette:** Mapeo exacto de HEX/OKLCH a clases (ej. `brand-500: #FF3366`).
- **Typography:** Familias de fuentes, escalas modulares (text-sm, text-xl) y pesos permitidos.
- **Spacing & Layout:** Escala estricta (p-4, m-8) y variables de gap (múltiplos de 4/8).
- **Shape & Elevation:** Valores exactos de `border-radius` y `box-shadow`.

### 3. Patrones de Componentes Core (Micro-Prompts)
Generación de "Sub-prompts" que se invocan al crear elementos específicos:
- **Button Prompt:** "Cuando crees un botón, debe tener radius X, transition Y, y los estados Hover/Active Z."
- **Input Prompt:** "Los campos de formulario deben tener border color A, y un focus ring de tamaño B con color C."
- **Card Prompt:** "Las tarjetas usan shadow D, padding E y background F."

### 4. Guías de Estilo y Composición
- **Dark Mode Logic:** Instrucciones de cómo invertir los colores semánticos.
- **Responsividad:** Breakpoints permitidos y comportamiento de colapso de grillas.

### 5. Check de Autovalidación (Self-Correction)
Instrucción final para la IA:
> *"Antes de entregar el código, verifica internamente: 1. ¿Usé algún color genérico de Tailwind? Si sí, reemplázalo por el token correspondiente. 2. ¿El focus state está presente en elementos interactivos? 3. ¿El padding es múltiplo de 4?"*

---

## 🚫 NEVER List — Anti-patrones del Compilador
- **NUNCA** generes un prompt genérico sin inyectar los tokens reales del proyecto.
- **NUNCA** permitas que la IA de desarrollo asuma valores por defecto si no están en el `DESIGN.md`.
- **NUNCA** ignores la lógica de accesibilidad (aria-labels, focus states) en la instrucción generada.

## ✅ ALWAYS List — Mandatos del Compilador
- **SIEMPRE** usa unidades relativas (`rem`) en el prompt generado para asegurar accesibilidad.
- **SIEMPRE** incluye una sección de "Restricciones Inviolables" al inicio del prompt.
- **SIEMPRE** verifica que los nombres de los tokens coincidan exactamente con la implementación técnica deseada (Tailwind Config o CSS Variables).

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** En la **Etapa 07 (Handoff)**, justo antes de empezar a programar la UI con herramientas asistidas por IA.
- **Input:** Requiere que el `DESIGN.md` haya sido completado por la **Etapa 06** o extraído con la **Etapa 07 Momento 2**.
- **Output:** Un archivo `AI_System_Prompt.txt` listo para ser copiado y pegado como "Contexto Custom" en Cursor o como prompt inicial en v0/Claude.
- **Sinergia:** El output generado por la IA usando este prompt será posteriormente auditado por el **AI UI Compliance Audit Engine** para verificar cumplimiento.

---
*Framework Baraldi v2.26.10 · Skill 32 · Engine de Compilación AI*
