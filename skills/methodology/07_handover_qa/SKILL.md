---
name: handover-qa
description: >
  Ejecuta la Etapa 07 (Handover & Quality Assurance) del Framework Baraldi.
  Establece los protocolos de entrega a desarrollo, validación de completitud
  y auditoría técnica/visual final.
keywords: handover, qa, quality-assurance, design-handoff, completeness-audit, developer-handoff
status: operational
version: "2.26.8"
---

# Etapa 07 — Handover & Quality Assurance

> **Objetivo:** Auditar y certificar que el diseño (arquitectura, interacción y UI) está 100% completo, accesible y técnicamente preparado para ser implementado por el equipo de ingeniería (o agentes de desarrollo) sin bloqueos ni ambigüedades.

---

## 🚦 Flujo de la etapa — El Criterio "Go/No-Go"

Esta etapa actúa como la aduana final antes del desarrollo. Si el producto no pasa esta etapa, debe regresar a las Etapas 05 o 06 para resolución.

0. **[MOMENTO 0] Ceremonies & Rituals:** El Protocolo de Sincronía Humana. Ejecución de las ceremonias de Kickoff y el Ritual Formal de Handoff.
1. **[MOMENTO 1] Design Completeness Audit:** Revisión exhaustiva (La Aduana QA) de edge cases, estados interactivos y cobertura de pantallas.
2. **[MOMENTO 2] Visual & Token QA:** Auditoría de fidelidad técnica para garantizar que el código respeta los tokens y la anatomía del diseño.
3. **[MOMENTO 3] Handoff Documentation & Accompaniment:** Entrega de la "Fuente de Verdad" y establecimiento del plan de Supervisión y QA Proactivo durante el desarrollo.

---

## 🛠️ Integración con la Toolbox (Bridge Architecture)
Para asegurar un cierre de grado industrial, el Agente debe ejecutar los siguientes protocolos:

1. **Momento 1 & 2 (Obligatorios):** Son bloqueantes. No se puede escribir código sin esto.
2. **AI System Prompt Compiler (`skills/engines/ai_system_prompt_compiler_engine/`):** Generador de instrucciones para IAs de desarrollo (v0, Cursor).
3. **AI UI Compliance Audit (`skills/engines/ai_ui_compliance_audit_engine/`):** Protocolo para auditar el output de las IAs contra el diseño.
4. **WCAG Accessibility Audit (`skills/engines/wcag_accessibility_audit_engine/`):** Auditoría completa de accesibilidad (WCAG 2.2, principios POUR). **MANDATORIO** antes de aprobar el Momento 1.
5. **Screen Reader Testing Engine (`skills/engines/screen_reader_testing_engine/`):** Guía operativa para pruebas manuales con tecnología asistiva (AT). Activar al cerrar el Momento 2.
6. **Jira Tasks Engine (`skills/engines/jira_tasks_engine/`):** Protocolo de creación de tickets estratégicos (Parent/Child). **Último paso del Momento 3** antes del Go/No-Go final.
7. **Product Launch Protocol (`skills/toolbox/product_launch_protocol/`):** Orquestación del despliegue gradual (Interno -> F&F -> Público). Se activa tras la aprobación del Handoff para planificar la salida a producción.

---

## 🚀 Próximos Pasos: El Despegue
Una vez superada la "Aduana" de la Etapa 07, el framework no te deja solo. El siguiente paso natural es invocar el **Product Launch Protocol** para:
*   Configurar el servidor de pruebas para la **Alpha Interna**.
*   Mapear los canales de soporte y feedback.
*   Establecer el bucle de "Regreso al Lápiz" para casos no mapeados en el mundo real.

---

## Criterio de calidad
- [ ] El 100% de los puntos del **Momento 1 (Completeness Audit)** han sido auditados y aprobados.
- [ ] No existen pantallas con "Lorem Ipsum" (Copy finalizado).
- [ ] Los casos de borde (errores de red, estados vacíos, límites de caracteres) están documentados en el **Momento 3**.
- [ ] Los activos (íconos, imágenes) están exportados y accesibles.

---

## 🚫 NEVER List — Anti-patrones de la Etapa 07
Para garantizar la integridad del sistema, el Agente debe **bloquear** el avance si detecta cualquiera de estos comportamientos:

1.  **NEVER permitas un Handoff con "Lorem Ipsum":** El copy es diseño. Sin texto final, no se puede auditar la adaptabilidad real de los componentes.
2.  **NEVER entregues assets sin optimizar:** El performance se define aquí. Prohibido el uso de íconos en PNG o assets pesados (SVG-First/WebP-First obligatorio).
3.  **NEVER uses unidades absolutas (`px`):** Toda documentación y token debe estar en unidades relativas (`rem`) para asegurar accesibilidad.
4.  **NEVER asumas estados de borde:** Si el Empty State, Error de Red o Loading no están documentados, la etapa se considera incompleta.
5.  **NEVER ignores la Auditoría WCAG (Base A):** La accesibilidad no es opcional; es un requisito de bloqueo para el Go/No-Go.
6.  **NEVER permitas "Callejones sin Salida":** Todo flujo de usuario debe tener una salida o retorno lógico documentado.
7.  **NEVER ignores la Ceremonia de Handoff:** El handoff no es un link, es un contrato. La ausencia de sincronía con ingeniería invalida la etapa.

---

## 🧠 Protocolo de Mentoría y Co-creación (E07)
En el cierre, el Agente actúa como un **Guardián de la Excelencia y Veedor de la Experiencia**:
*   **Soberanía del Ritual:** Enfatizar que el Handoff no es un archivo, es un acuerdo: *"Esta ceremonia formaliza que el diseño está blindado. A partir de ahora, nuestra misión es acompañar a ingeniería para que este diseño brille en producción"*.
*   **QA Proactivo vs. Reactivo:** Educar sobre la supervisión continua: *"No esperamos al final del desarrollo para testear. Vamos a auditar cada sprint para asegurar que el ADN del producto no se degrade"*.
*   **Reflexión del Viaje Simbiótico:** Invitar al equipo a celebrar el hito: *"Hemos transitado desde un problema en la E01 hasta un sistema listo para nacer. Este ritual marca el paso del diseño a la realidad"*.
*   **El Rol de Acompañamiento:** Recordar que el diseño sigue vivo durante el código, asistiendo y resolviendo dudas técnicas en tiempo real.

---
*Framework Baraldi v2.26.8 · skills/methodology/07_handover_qa/SKILL.md*
