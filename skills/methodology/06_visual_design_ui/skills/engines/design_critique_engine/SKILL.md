---
name: design-critique-audit
description: >
  Protocolo de diagnÃ³stico visual actuando como Lead Art Director. EvalÃºa jerarquÃ­a, 
  contraste, flujo de atenciÃ³n y uso del espacio en blanco. Detecta problemas de UI 
  antes del Handoff y genera soluciones accionables.
keywords: design-critique, visual-hierarchy, ui-audit, contrast, art-direction, layout-fixes
version: "2.26.7"
---

# ðŸ‘ï¸ Skill 20 â€” Design Critique & Visual Hierarchy Audit Protocol

Este protocolo se invoca al finalizar el diseÃ±o de una interfaz (o al evaluar un producto legado) para realizar una auditorÃ­a clÃ­nica de su comunicaciÃ³n visual. El Agente asume el rol de **Lead Visual Designer**, enfocado implacablemente en la claridad, la jerarquÃ­a y el contraste.

## ðŸ”¬ Dimensiones del DiagnÃ³stico Visual

Al evaluar una pantalla (mediante captura de imagen vÃ­a visiÃ³n o descripciÃ³n estructural detallada), el Agente debe generar un reporte de crÃ­tica de diseÃ±o en los siguientes ejes:

### 1. AnÃ¡lisis del Flujo de AtenciÃ³n (Attention Flow)
- **Primer Impacto:** Identificar el elemento exacto donde el ojo aterriza primero (y verificar si coincide con el objetivo primario del usuario).
- **Mapeo de PatrÃ³n:** Predecir el flujo visual (PatrÃ³n F, PatrÃ³n Z, centrado) e identificar si hay elementos compitiendo (canibalizando) la atenciÃ³n del CTA principal.

### 2. Scoring de JerarquÃ­a Visual (1 al 5)
Calificar y justificar (una lÃ­nea) cada dimensiÃ³n:
- **Contraste de TamaÃ±o:** (Diferencia entre el elemento mÃ¡s grande y el mÃ¡s pequeÃ±o).
- **Contraste de Color:** (Uso del color para denotar importancia vs. ruido cromÃ¡tico).
- **JerarquÃ­a Espacial:** (Proximidad, agrupaciones y leyes de Gestalt).
- **JerarquÃ­a TipogrÃ¡fica:** (Clara distinciÃ³n visual entre TÃ­tulo, Cuerpo y Labels).
- **Foco Claro:** (Â¿Existe un protagonista dominante o todo grita al mismo tiempo?).

### 3. Registro de Problemas CrÃ­ticos (Issue Flags)
- **P1 (Bloqueadores CrÃ­ticos):** Problemas de jerarquÃ­a que evitan que el usuario logre su objetivo principal. Causa visual y su Fix especÃ­fico.
- **P2 (Claridad Secundaria):** Problemas de fricciÃ³n visual que no rompen el flujo, pero causan carga cognitiva. Causa visual y Fix.

### 4. EvaluaciÃ³n de Accesibilidad (A11y Visual)
- **WCAG Flags:** Textos o fondos que claramente fallan el contraste AA.
- **SeÃ±ales Mudas:** Elementos interactivos (links/botones) que no se distinguen visualmente del contenido estÃ¡tico.
- **Trampas de Color:** InformaciÃ³n transmitida *Ãºnicamente* por color (ej. un borde rojo sin icono de alerta).

### 5. AuditorÃ­a de Espacio en Blanco (Whitespace)
- DiagnÃ³stico del uso del "Aire" (Negative Space). Â¿Permite respirar a la interfaz o es errÃ¡tico?
- IdentificaciÃ³n de las 2 Ã¡reas mÃ¡s claustrofÃ³bicas (Cramped areas) con sugerencias de padding exacto.

### 6. Matriz de RefactorizaciÃ³n (Prioritized Fix List)
Un top 3 a 5 de los cambios mÃ¡s impactantes a realizar inmediatamente en Figma.
- *Ejemplo: "Aumentar margen superior del Hero H1 a 64px para separarlo del Nav."*

### 7. SimulaciÃ³n Before/After (Mental Render)
Para el fix mÃ¡s crÃ­tico (Top 1), el Agente debe describir con detalle milimÃ©trico cÃ³mo se ve la interfaz ahora y cÃ³mo deberÃ­a verse tras aplicar la soluciÃ³n.

---
## ðŸ’¡ CÃ³mo usar esta Skill (Bridge Architecture)
- **CuÃ¡ndo invocar:** En la **Etapa 06 (Momento de Pulido)**, despuÃ©s de ensamblar la UI y justo antes de pasar a la etapa de Handoff (QA).
- **Input:** Una imagen de la UI (vÃ­a *Motor de Ingesta Visual*) o una descripciÃ³n muy exhaustiva del layout.
- **Sinergia:** ActÃºa como el supervisor de la Inteligencia de Layout (Etapa 06 Momento 0). Si el Momento 0 es el arquitecto, la Skill 20 es el inspector de obra.

---
*Framework Baraldi v2.26.7 Â· Skill 20*

