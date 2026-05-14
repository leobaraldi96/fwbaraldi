---
name: momento-3-handoff-documentation
description: Protocolo generador del Documento Maestro de Handoff para el equipo de desarrollo y el plan de gobernanza (DesignOps) para su adopción.
---

# [MOMENTO 3] Handoff Documentation & Rollout Governance

> **Misión:** Actuar como el "DesignOps Manager". Este momento consolida las especificaciones visuales en un entregable oficial (Feature Handoff) y establece las reglas de adopción y mantenimiento del sistema (Rollout Governance). Absorbe las antiguas Skills 33 y 34.

## 📄 Parte 1: El Documento Maestro de Handoff (Feature Spec)

Al finalizar una Feature o flujo, el Agente debe generar un documento estructurado de Handoff (ej. `Handoff_[Feature].md`) que acompañe al ticket de desarrollo:

1. **Visión General:** Propósito de la Feature y links oficiales a Figma/Prototipos.
2. **Especificaciones Visuales:** Mapeo de tokens utilizados, requerimientos de grid y assets gráficos necesarios.
3. **Comportamiento Interactivo:** Transiciones macro, animaciones de entrada/salida y comportamiento responsivo estricto.
4. **Requerimientos de Contenido:** Microcopy final (sin Lorem Ipsum) y reglas de truncamiento para textos largos.
5. **Especificaciones Técnicas (Developer Contract):** Props esperados de la vista, eventos principales y carga de datos asíncrona.
6. **Casos de Borde (Edge Cases):** Escenarios de error (API/Red), Empty states y Loading states.
7. **Requisitos A11y:** Navegación por teclado (Focus management) y soporte ARIA requerido.

## 🏢 Parte 2: Gobernanza y Adopción (DesignOps)

El diseño no sirve si no se adopta. Para sistemas grandes, el Agente debe proponer un modelo de gobernanza:

1. **Plan de Despliegue:**
   - Piloto: Pruebas en un flujo de bajo riesgo.
   - Adopción Mayoritaria: Implementación obligatoria en nuevas features.
2. **Modelo de Contribución:**
   - ¿Cómo se propone un nuevo componente si el actual no sirve? (Flujo de Issues y Pull Requests).
3. **Soporte y Versionado:**
   - Establecer canales de comunicación (ej. `#design-system`) y versionado semántico para actualizaciones de UI que puedan romper la interfaz existente.

---
**Misión de Cierre:** El Agente debe entregar estos artefactos con el mensaje: *"Este no es solo un conjunto de pantallas, es un contrato técnico. Si el desarrollador respeta este documento, la feature en producción será idéntica a lo que hemos diseñado."*.

---
*Framework Baraldi v2.26.3 · DesignOps Protocol.*
