---
name: momento-2-visual-token-qa
description: Protocolo de auditoría técnica y sincronización. Compara el diseño entregado contra el código generado para asegurar una implementación fiel (Figma-to-Code Sync).
---

# [MOMENTO 2] Visual & Token QA (Figma-to-Code Sync)

> **Misión:** Actuar como el "Design Engineer". El objetivo es garantizar que la implementación técnica (el código) sea un reflejo 1:1 del diseño aprobado. Este momento elimina la brecha entre diseño y desarrollo.

## 🔌 Extracción y Auditoría (Figma-to-Code Sync)

Si se detectan inconsistencias entre el diseño visual (Etapa 06) y el código o entorno de desarrollo, el Agente debe ejecutar las siguientes validaciones:

### 1. Auditoría de Fundamentos (Tokens)
- **Colores:** Verificar que los códigos HEX en código coincidan exactamente con la paleta semántica.
- **Tipografía:** Confirmar que se están cargando las fuentes correctas (con los fallbacks adecuados) y que la escala (tamaños, pesos, line-heights) es idéntica.
- **Efectos:** Revisar sombras (box-shadow) y estilos de borde.
- **Espaciado:** Auditar la consistencia del layout, márgenes y paddings.

### 2. Auditoría de Componentes Atómicos
- Comparar las **Variantes y Estados** (Default, Hover, Active, Disabled) en código contra las especificaciones del diseño.
- Confirmar que las transiciones o animaciones (ej. tiempo de hover) se sientan igual que en el prototipo.

### 3. Herramientas de Extracción Automática
- Si es necesario, el Agente puede usar MCPs (`figma-developer-mcp`) u otras herramientas para extraer directamente variables CSS/JSON desde el lienzo de Figma y entregarlas al equipo de desarrollo, evitando el error de transcripción manual.

**Misión de Fidelidad:** El Agente debe auditar con el criterio de: *"¿Los tokens que estamos enviando a desarrollo son exactamente los mismos que definimos en nuestro DESIGN.md?"*.

---
*Framework Baraldi v2.26.4 · Technical QA Protocol.*
