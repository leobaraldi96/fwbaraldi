---
name: ai-system-prompt-compiler
description: >
  Protocolo de traducción (Compilador) que transforma un Sistema de Diseño estructurado 
  (DESIGN.md) en un System Prompt hiper-detallado para guiar a IAs codificadoras 
  (v0, Cursor, Claude) en la generación de UI sin alucinaciones.
keywords: prompt-engineering, ai-coder, v0, cursor, system-prompt, design-system-compiler, handoff
version: "2.26.14"
---

# 🪄 Skill 32 — Protocolo de Generación de System Prompt para IA (Compilador)

Este protocolo se activa durante el Handoff (**Etapa 07**) cuando el desarrollo de la interfaz de usuario va a ser delegado a un Agente de IA (como v0 de Vercel, Cursor, o Claude Artifacts). Actúa como un "Compilador", traduciendo el `DESIGN.md` a un formato instruccional restrictivo que impide que la IA use estilos genéricos.

## 🛠️ Estructura del System Prompt Generado

Al ejecutar este protocolo sobre un sistema de diseño, el Agente debe generar un Mega-Prompt estructurado con las siguientes secciones:

### 1. Rol y Restricciones del Sistema (System Role & Copy/Style Lock)
- **Definición de Rol:** "Eres un Design Engineer experto. Tu objetivo es escribir código que cumpla estrictamente con el sistema de diseño provisto."
- **Restricción Inviolable (Copy/Style Lock):** Prohibición explícita de "inventar" valores (HEX, px, rem) en el código. El código generado DEBE usar exclusivamente variables CSS o clases de Tailwind mapeadas directamente a los tokens. Ningún valor en bruto (No Inline Values) debe existir en los componentes.

### 2. Inyección de Tokens e Integración CSS Base (Design System & Retrofit Injection)
Transcripción en formato "Machine-Readable" de los tokens globales y su sincronización con la base existente:
- **Framework Sync & Variables Mapping:** Si el proyecto tiene un framework base preexistente (Bootstrap, Tailwind) o variables CSS ya definidas (mapeadas en `framework_sync`), el prompt compilado **debe exigir** el uso exclusivo de las variables CSS nativas mapeadas (ej. `var(--color-primary)`) en lugar de generar nuevas variables o clases utilitarias redundantes.
- **Color Palette & Roles:** Mapeo exacto de HEX a variables semánticas existentes.
- **Typography:** Familias display/body, pesos y escala tipográfica modular.
- **Spacing & Layout:** Escala estricta de espaciado y márgenes (`{tokens.spacing.scale}`).
- **Depth & Elevation:** Valores exactos de `box-shadow`, bordes y jerarquía de capas (z-index).

### 3. Patrones de Componentes Semánticos (YAML-to-Prompt)
Traducción directa de la sección `components:` del `DESIGN.md` en especificaciones de código:
- **Mapeo de Estados:** Generar micro-prompts exigiendo la implementación de los estados exactos definidos en YAML (`default`, `active`, `disabled`), asegurando que no se asuman estilos genéricos de hover y que se respete la opacidad o transformaciones definidas.
- **Validación de Componente:** "El componente X debe tener exactamente el background Y y bordes Z definidos en la estructura YAML."

### 4. Guías de Composición y Responsive Behavior
- **Base Framework Rules:** Instruir a la IA para que respete y utilice las clases utilitarias del framework base detectado (ej. Tailwind o clases de Bootstrap) sin escribir CSS personalizado redundante.
- **Responsive System:** Breakpoints permitidos y reglas de reacomodamiento.
- **Áreas Táctiles:** Garantizar un tamaño mínimo de interacción física de `44x44px` en móviles.
- **Dark Mode Logic:** Inversión de colores semánticos basada en tokens de fondo/texto.

### 5. Check de Autovalidación (Self-Correction Audit)
Instrucción final para la IA implementadora:
> *"Antes de entregar el código, verifica internamente: 1. ¿Utilicé algún color HEX o pixelaje plano (en duro) en el código? Si es así, corrígelo por el token correspondiente. 2. ¿Los estados del componente (default, active, disabled) coinciden con el YAML de DESIGN.md? 3. ¿El contraste WCAG cumple con las relaciones mínimas de accesibilidad?"*

---

## 🚫 NEVER List — Anti-patrones del Compilador
- **NUNCA** generes un prompt genérico sin inyectar la estructura YAML real de tokens y componentes.
- **NUNCA** permitas que la IA de desarrollo asuma valores por defecto si no están definidos en el `DESIGN.md`.
- **NUNCA** ignores las restricciones de accesibilidad física (mínimo 44x44px) ni la legibilidad de contraste WCAG.

## ✅ ALWAYS List — Mandatos del Compilador
- **SIEMPRE** impón la regla "Copy/Style Lock" de no usar valores en bruto (No Inline Values) al inicio de las instrucciones.
- **SIEMPRE** traduce las variantes y estados del YAML a clases CSS dinámicas equivalentes en el prompt generado.
- **SIEMPRE** comprueba que los nombres de los tokens generados sigan una nomenclatura coherente y estándar con el proyecto destino.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** En la **Etapa 07 (Handoff)**, justo antes de empezar a programar la UI con herramientas asistidas por IA.
- **Input:** Requiere que el `DESIGN.md` haya sido completado por la **Etapa 06** o extraído con la **Etapa 07 Momento 2**.
- **Output:** Un archivo `AI_System_Prompt.txt` listo para ser copiado y pegado como "Contexto Custom" en Cursor o como prompt inicial en v0/Claude.
- **Sinergia:** El output generado por la IA usando este prompt será posteriormente auditado por el **AI UI Compliance Audit Engine** para verificar cumplimiento.

---
*Framework Baraldi v2.26.14 · Skill 32 · Engine de Compilación AI*
