# Toolbox: User Story & Acceptance Criteria Protocol

---

```yaml
name: user-story-acceptance-criteria
description: >
  Protocolo para la redacción de Historias de Usuario (User Stories) y Criterios de Aceptación (AC) de alta calidad.
  Asegura que el diseño se traduzca fielmente a requerimientos técnicos sin pérdida de contexto.
  Úsala para el handoff a desarrollo y la creación de tickets de ejecución.
  Keywords: user story, criterios de aceptación, AC, handoff, requerimientos, funcionalidad, QA.
skill_id: toolbox_user_stories
version: "2.26.3"
framework: Baraldi
type: "Toolbox / Execution & Handoff"
trigger: "Cuando el diseño de interacción (Etapa 04) o UI (Etapa 05) está listo y se necesita documentar las funcionalidades para el equipo de desarrollo."
```

---

## Rol de esta herramienta
Esta skill actúa como un **Technical Product Manager / Business Analyst**. Su misión es asegurar que no haya ambigüedad entre el "qué" se diseñó y el "cómo" debe funcionar, protegiendo la experiencia del usuario y los objetivos de negocio.

---

## Estándar de Historia de Usuario Baraldi

### 1. El Formato Canónico
- **Como** [Persona definida en Etapa 01]
- **Quiero** [Acción específica y medible]
- **Para que** [Valor o beneficio real que obtiene el usuario]

### 2. Contexto de Valor
- **Valor para el Usuario:** Por qué esta historia le soluciona la vida.
- **Valor para el Negocio:** A qué OKR o métrica North Star contribuye.

---

## Criterios de Aceptación (AC)
La IA debe generar una lista de chequeo binaria (pasa/no pasa) que incluya:

- **Happy Path:** El flujo ideal sin errores.
- **Edge Cases:** Casos de borde (ej: datos muy largos, listas vacías).
- **Error States:** Cómo responde el sistema ante fallos de API o inputs inválidos.
- **UI/UX Specs:** Referencia a componentes, micro-interacciones y accesibilidad.
- **Technical Specs:** Dependencias, servicios o lógica de negocio específica.

---

## Protocolo de Ejecución

1. **Traducción de Flujo:** La IA toma el diseño de interacción y lo fragmenta en historias manejables (Epics & Stories).
2. **Redacción de AC:** Generación detallada de criterios de prueba para cada historia.
3. **Validación de Métricas:** Definición de qué evento de analítica debe disparar esta historia para medir su éxito.
4. **Handoff Sync:** Preparación de la historia para ser copiada directamente a Jira, Linear o Trello.

---

## Reglas de Oro de las Stories Baraldi
- **INVEST:** Independent, Negotiable, Valuable, Estimable, Small, Testable.
- **Sin Supuestos:** Si algo no está en el AC, no se desarrolla. Si se desarrolla sin AC, no se acepta.
- **Diseño Incluido:** Una historia de usuario sin link al diseño es una historia incompleta.

---

*Framework Baraldi v2.26.3 · toolbox/09_user_story_and_acceptance_criteria_protocol.md*
