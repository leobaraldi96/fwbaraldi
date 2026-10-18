---
name: handover-qa
description: >
  Ejecuta la Etapa 07 (Handover & Quality Assurance) del Framework Baraldi.
  Establece los protocolos de entrega a desarrollo, validación de completitud
  y auditoría técnica/visual final.
keywords: handover, qa, quality-assurance, design-handoff, completeness-audit, developer-handoff
status: operational
version: "2.31.0"
framework: Baraldi
stage: "07"
stage_name: "Handover & Quality Assurance"
---

# Etapa 07 - Handover & quality assurance

> **Objetivo:** Auditar y certificar que el diseño (arquitectura, interacción y UI) está 100% completo, accesible y técnicamente preparado para ser implementado por el equipo de ingeniería (o agentes de desarrollo) sin bloqueos ni ambigüedades.

---

## Flujo de la etapa - el criterio "Go/No-Go"

Esta etapa actúa como la aduana final antes del desarrollo. Si el producto no pasa esta etapa, debe regresar a las Etapas 05 (`../05_interaction_design_ux/SKILL.md`) o 06 (`../06_visual_design_ui/SKILL.md`) para resolución.

0. **[MOMENTO 0] Ceremonies & rituals (`skills/momento_0_ceremonies_and_rituals.md`):** El protocolo de sincronía humana. Ejecución de las ceremonias de kickoff y el ritual formal de handoff.
1. **[MOMENTO 1] Design completeness audit (`skills/momento_1_completeness_audit.md`):** Revisión exhaustiva (la aduana QA) de edge cases, estados interactivos y cobertura de pantallas.
2. **[MOMENTO 2] Visual & token QA (`skills/momento_2_visual_token_qa.md`):** Auditoría de fidelidad técnica para garantizar que el código respeta los tokens de `DESIGN.md`, el `showroom.html` y la anatomía del diseño.
3. **[MOMENTO 3] Handoff documentation & accompaniment (`skills/momento_3_handoff_documentation.md`):** Entrega de la "fuente de verdad", generación de tickets y pase a producción / **Etapa 08 (`../08_continuous_discovery_telemetry/SKILL.md`)**.

---

## Integración con la Toolbox y motores (Bridge Architecture)
Para asegurar un cierre de grado industrial, el Agente debe ejecutar los siguientes protocolos:

1. **Momento 1 & 2 (`skills/momento_1_completeness_audit.md` y `skills/momento_2_visual_token_qa.md`):** Son bloqueantes. No se puede dar el alta de producción sin aprobarlos.
2. **AI System Prompt Compiler (`skills/engines/ai_system_prompt_compiler_engine/SKILL.md`):** Generador de instrucciones para IAs de desarrollo (v0, Cursor, Antigravity).
3. **AI UI Compliance Audit (`skills/engines/ai_ui_compliance_audit_engine/SKILL.md`):** Protocolo para auditar el output de las IAs contra el diseño (`DESIGN.md` y `VOICE.md`).
4. **WCAG Accessibility Audit (`skills/engines/wcag_accessibility_audit_engine/SKILL.md`):** Auditoría completa de accesibilidad (WCAG 2.2, principios POUR). **MANDATORIO** antes de aprobar el Momento 1.
5. **Screen Reader Testing Engine (`skills/engines/screen_reader_testing_engine/SKILL.md`):** Guía operativa para pruebas manuales con tecnología asistiva (AT). Activar al cerrar el Momento 2.
6. **Product Knowledge Compiler Protocol (`../../toolbox/product_knowledge_compiler_protocol/SKILL.md`):** Compilación de toda la inteligencia de E01-E07 en `KNOWLEDGE.md`, manuales de ayuda por rol y prompts para copilotos IA (Landing & In-App).
7. **Jira Tasks Engine (`skills/engines/jira_tasks_engine/SKILL.md`):** Protocolo de creación de tickets estratégicos (Parent/Child). **Último paso del Momento 3** antes del Go/No-Go final.
8. **Product Launch Protocol (`../../toolbox/product_launch_protocol/SKILL.md`):** Orquestación del despliegue gradual (Interno -> F&F -> Público). Se activa tras la aprobación del Handoff para planificar la salida a producción.

---

## Próximos pasos: el despegue y transición a Etapa 08
Una vez superada la "aduana" de la Etapa 07, el framework continúa acompañando el ciclo de vida del producto:
1. Invocar el **Product Launch Protocol (`../../toolbox/product_launch_protocol/SKILL.md`)** y el **Product Knowledge Compiler (`../../toolbox/product_knowledge_compiler_protocol/SKILL.md`)** para:
   * Configurar el entorno para la **Alpha interna**.
   * Compilar y desplegar la base de conocimiento (`KNOWLEDGE.md`) para CX y el asistente Copilot IA.
   * Mapear los canales de soporte y feedback.
2. **Conectar con la Etapa 08 - Continuous discovery & data intelligence (`../08_continuous_discovery_telemetry/SKILL.md`):** Configurar el `TRACKING_PLAN.md`, medir el comportamiento real post-lanzamiento y alimentar el bucle continuo hacia el backlog estratégico y la Etapa 01.

---

## Criterio de calidad
- [ ] El 100% de los puntos del **Momento 1 (Completeness Audit)** han sido auditados y aprobados.
- [ ] No existen pantallas con "Lorem Ipsum" (copy finalizado según `docs-fwbaraldi/VOICE.md`).
- [ ] Los casos de borde (errores de red, estados vacíos, límites de caracteres) están documentados en el **Momento 3**.
- [ ] Los activos (íconos, imágenes) están exportados y accesibles en formatos vectoriales/optimizados.

---

## NEVER List - Anti-patrones de la Etapa 07
Para garantizar la integridad del sistema, el Agente debe **bloquear** el avance si detecta cualquiera de estos comportamientos:

1. **NEVER permitas un handoff con "Lorem Ipsum":** El copy es diseño. Sin texto final, no se puede auditar la adaptabilidad real de los componentes.
2. **NEVER entregues assets sin optimizar:** El rendimiento se define aquí. Prohibido el uso de íconos en PNG o assets pesados (SVG-First/WebP-First obligatorio).
3. **NEVER uses unidades absolutas (`px`):** Toda documentación y token debe estar en unidades relativas (`rem`) para asegurar accesibilidad.
4. **NEVER asumas estados de borde:** Si el Empty State, Error de red o Loading no están documentados, la etapa se considera incompleta.
5. **NEVER ignores la auditoría WCAG (Base A/AA):** La accesibilidad no es opcional; es un requisito de bloqueo para el Go/No-Go.
6. **NEVER permitas "callejones sin salida":** Todo flujo de usuario debe tener una salida o retorno lógico documentado.
7. **NEVER ignores la ceremonia de handoff:** El handoff no es un link, es un contrato. La ausencia de sincronía con ingeniería invalida la etapa.

---

## Protocolo de memoria y handoff - Etapa 07

**Al iniciar:** Buscar en `Engram MCP` por `ui-` y `ux-`, y verificar la existencia de `docs-fwbaraldi/DESIGN.md`, `docs-fwbaraldi/VOICE.md` y `docs-fwbaraldi/06_UI/showroom.html`.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 0 & 1 | `qa-completeness-audit` | `auditoría` | Resultado de la aduana de completitud, edge cases y auditoría WCAG |
| Momento 2 | `qa-visual-token-sync` | `calidad-ui` | Veredicto de fidelidad de tokens (`rem`, `oklch`, cero CSS inline) |
| Momento 3 | `qa-handoff-signoff` | `cierre-de-etapa` | Aprobación Go/No-Go, tickets generados y compilación de `KNOWLEDGE.md` |

**Al cerrar la etapa (Handoff hacia Etapa 08):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de progreso: `[x] 06 Visual Design (UI) -> [x] 07 Handover & QA -> [ ] 08 Continuous Discovery & Telemetry`.
3. Proponer activamente la carga de `../08_continuous_discovery_telemetry/SKILL.md` pasando los hallazgos `qa-` y las métricas de éxito de `pf-` / `pl-` como input obligatorio.

---

## Protocolo de mentoría y co-creación (E07)
En el cierre, el Agente actúa como un **guardián de la excelencia y veedor de la experiencia**:
*   **Soberanía del ritual:** Enfatizar que el handoff no es un archivo, es un acuerdo: *"Esta ceremonia formaliza que el diseño está blindado. A partir de ahora, nuestra misión es acompañar a ingeniería para que este diseño brille en producción"*.
*   **QA proactivo vs. reactivo:** Educar sobre la supervisión continua: *"No esperamos al final del desarrollo para testear. Vamos a auditar cada sprint para asegurar que el ADN del producto no se degrade"*.
*   **Reflexión del viaje simbiótico:** Invitar al equipo a celebrar el hito: *"Hemos transitado desde un problema en la E01 hasta un sistema listo para nacer. Este ritual marca el paso del diseño a la realidad"*.
*   **El rol de acompañamiento:** Recordar que el diseño sigue vivo durante el código, asistiendo y resolviendo dudas técnicas en tiempo real.

---
*Framework Baraldi v2.31.0 · skills/methodology/07_handover_qa/SKILL.md*
