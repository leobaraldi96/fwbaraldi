---
name: design-critique-audit
description: >
  Protocolo de diagnóstico visual actuando como Lead Art Director. Evalúa jerarquía, 
  contraste, flujo de atención y uso del espacio en blanco. Detecta problemas de UI 
  antes del Handoff y genera soluciones accionables.
keywords: design-critique, visual-hierarchy, ui-audit, contrast, art-direction, layout-fixes
version: "2.26.14"
---

# 👁️ Skill 20 — Design Critique & Visual Hierarchy Audit Protocol

Este protocolo se invoca al finalizar el diseño de una interfaz (o al evaluar un producto legado) para realizar una auditoría clínica de su comunicación visual. El Agente asume el rol de **Lead Visual Designer**, enfocado implacablemente en la claridad, la jerarquía y el contraste.

## 🔬 Dimensiones del Diagnóstico Visual

Al evaluar una pantalla (mediante captura de imagen vía visión o descripción estructural detallada), el Agente debe generar un reporte de crítica de diseño en los siguientes ejes:

### 1. Análisis del Flujo de Atención (Attention Flow)
- **Primer Impacto:** Identificar el elemento exacto donde el ojo aterriza primero (y verificar si coincide con el objetivo primario del usuario).
- **Mapeo de Patrón:** Predecir el flujo visual (Patrón F, Patrón Z, centrado) e identificar si hay elementos compitiendo (canibalizando) la atención del CTA principal.

### 2. Scoring de Jerarquía Visual (1 al 5)
Calificar y justificar (una línea) cada dimensión:
- **Contraste de Tamaño:** (Diferencia entre el elemento más grande y el más pequeño).
- **Contraste de Color:** (Uso del color para denotar importancia vs. ruido cromático).
- **Jerarquía Espacial:** (Proximidad, agrupaciones y leyes de Gestalt).
- **Jerarquía Tipográfica:** (Clara distinción visual entre Título, Cuerpo y Labels).
- **Foco Claro:** (¿Existe un protagonista dominante o todo grita al mismo tiempo?).

### 3. Registro de Problemas Críticos (Issue Flags)
- **P1 (Bloqueadores Críticos):** Problemas de jerarquía que evitan que el usuario logre su objetivo principal. Causa visual y su Fix específico.
- **P2 (Claridad Secundaria):** Problemas de fricción visual que no rompen el flujo, pero causan carga cognitiva. Causa visual y Fix.

### 4. Evaluación de Accesibilidad (A11y Visual)
- **WCAG Flags:** Textos o fondos que claramente fallan el contraste AA.
- **Señales Mudas:** Elementos interactivos (links/botones) que no se distinguen visualmente del contenido estático.
- **Trampas de Color:** Información transmitida *únicamente* por color (ej. un borde rojo sin icono de alerta).

### 5. Auditoría de Espacio en Blanco (Whitespace)
- Diagnóstico del uso del "Aire" (Negative Space). ¿Permite respirar a la interfaz o es errático?
- Identificación de las 2 áreas más claustrofóbicas (Cramped areas) con sugerencias de padding exacto.

### 6. Matriz de Refactorización (Prioritized Fix List)
Un top 3 a 5 de los cambios más impactantes a realizar inmediatamente en Figma.
- *Ejemplo: "Aumentar margen superior del Hero H1 a 64px para separarlo del Nav."*

### 7. Simulación Before/After (Mental Render)
Para el fix más crítico (Top 1), el Agente debe describir con detalle milimétrico cómo se ve la interfaz ahora y cómo debería verse tras aplicar la solución.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** En la **Etapa 06 (Momento de Pulido)**, después de ensamblar la UI y justo antes de pasar a la etapa de Handoff (QA).
- **Input:** Una imagen de la UI (vía Motor de Ingesta Visual) o una descripción muy exhaustiva del layout.
- **Sinergia:** Actúa como el supervisor de la Inteligencia de Layout (Etapa 06 Momento 0). Si el Momento 0 es el arquitecto, la Skill 20 es el inspector de obra.

---
*Framework Baraldi v2.26.14 · Skill 20*
