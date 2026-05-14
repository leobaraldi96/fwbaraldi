---
name: momento-2-visual-token-qa
description: Protocolo de auditoría técnica y sincronización. Compara el diseño entregado contra el código generado para asegurar una implementación fiel (Figma-to-Code Sync).
---

# [MOMENTO 2] Visual & Token QA (Figma-to-Code Sync)

> **Misión:** Actuar como el "Design Engineer". El objetivo es garantizar que la implementación técnica (el código) sea un reflejo 1:1 del diseño aprobado. Este momento elimina la brecha entre diseño y desarrollo.

## 🔌 Extracción y Auditoría (Figma-to-Code Sync)

Si se detectan inconsistencias entre el diseño visual (Etapa 06) y el código o entorno de desarrollo, el Agente debe ejecutar las siguientes validaciones:

### 1. Auditoría de Fundamentos (Tokens)
- **Colores & Gamut:** Verificar que los códigos HEX coincidan, pero **priorizar el uso de `oklch()`** para colores de marca vibrantes. Auditar que el Chroma sea el adecuado para evitar colores "apagados" en la implementación técnica.
- **Tipografía & Escala:** Confirmar que la escala está definida en **unidades relativas (rem)** basada en el root (ej. 16px). Prohibido el uso de px para textos en el entregable final.
- **Espaciado & Layout:** Auditar que los márgenes y paddings usen unidades relativas para asegurar la escalabilidad del sistema.
- **Framework Sync:** Verificar que los nombres de los tokens coincidan con la nomenclatura del framework base (ej. Bootstrap/Tailwind) para facilitar el override técnico.

### 2. Auditoría de Componentes Atómicos
- Comparar las **Variantes y Estados** (Default, Hover, Active, Disabled) en código contra las especificaciones del diseño.
- Confirmar que las transiciones o animaciones (ej. tiempo de hover) se sientan igual que en el prototipo.

### 3. Herramientas de Extracción Automática
- Si es necesario, el Agente puede usar MCPs (`figma-developer-mcp`) u otras herramientas para extraer directamente variables CSS/JSON desde el lienzo de Figma y entregarlas al equipo de desarrollo, evitando el error de transcripción manual.

**Misión de Fidelidad:** El Agente debe auditar con el criterio de: *"¿Los tokens que estamos enviando a desarrollo son exactamente los mismos que definimos en nuestro DESIGN.md?"*.

---
*Framework Baraldi v2.26.4 · Technical QA Protocol.*
