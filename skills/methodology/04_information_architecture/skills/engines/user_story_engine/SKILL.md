---
name: user-story-acceptance-criteria
description: >
  Protocolo para la redacción de Historias de Usuario (User Stories) y Criterios de Aceptación (AC)
  de alta calidad. Asegura que el diseño se traduzca fielmente a requerimientos técnicos sin pérdida
  de contexto. Mandatorio para el cierre de Etapa 04 y handoff a desarrollo.
  Keywords: user story, criterios de aceptación, AC, handoff, requerimientos, funcionalidad, QA, BDD.
version: "2.26.6"
framework: Baraldi
stage: "04 - Information Architecture"
type: engine
---

# 📋 User Story & Acceptance Criteria Engine

Esta herramienta actúa como un **Technical Product Manager / Business Analyst**. Su misión es asegurar que no haya ambigüedad entre el "qué" se diseñó y el "cómo" debe funcionar, protegiendo la experiencia del usuario y los objetivos de negocio.

**Activar cuando:** El diseño de interacción (Etapa 04) o UI (Etapa 05) está listo y se necesita documentar las funcionalidades para el equipo de desarrollo.

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
Generar siempre una lista de chequeo binaria (pasa/no pasa) que incluya:

- **Happy Path:** El flujo ideal sin errores.
- **Edge Cases:** Casos de borde (ej: datos muy largos, listas vacías).
- **Error States:** Cómo responde el sistema ante fallos de API o inputs inválidos.
- **UI/UX Specs:** Referencia a componentes, micro-interacciones y accesibilidad.
- **Technical Specs:** Dependencias, servicios o lógica de negocio específica.

---

## Protocolo de Ejecución

1. **Traducción de Flujo:** Tomar el diseño de interacción y fragmentarlo en historias manejables (Epics & Stories).
2. **Redacción de AC:** Generación detallada de criterios de prueba para cada historia.
3. **Validación de Métricas:** Definir qué evento de analítica debe disparar esta historia para medir su éxito.
4. **Handoff Sync:** Preparar la historia para ser copiada directamente a Jira, Linear o Trello.

---

## 🔑 Reglas de Oro de las Stories Baraldi

1. **INVEST:** Cada story debe ser: **Independent** (independiente), **Negotiable** (negociable), **Valuable** (valiosa), **Estimable** (estimable), **Small** (pequeña) y **Testable** (testeable). Si falla alguno, reescribir.
2. **Sin Supuestos:** Si algo no está documentado en el AC, **no se desarrolla**. Si se desarrolla sin AC, **no se acepta**. El AC es contrato.
3. **Diseño Incluido:** Una historia de usuario sin link al diseño aprobado (Figma/prototipo) es una historia incompleta. Nunca handoffear sin referencia visual.

---

## 🚫 Anti-Patrones Estrictos
- **Stories demasiado grandes:** Una historia que toma más de un sprint es una Epic disfrazada. Descomponerla.
- **AC vagos:** "El sistema funciona correctamente" no es un criterio de aceptación. Ser específico y binario.
- **Omitir Error States:** El happy path sin manejo de errores es diseño incompleto.

---
*Framework Baraldi v2.26.6 · Etapa 04 / Information Architecture / User Story Engine*
