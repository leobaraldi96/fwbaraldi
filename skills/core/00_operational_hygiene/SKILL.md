---
name: fwbaraldi-operational-hygiene
description: >
  Protocolo de Higiene Operativa del Framework Baraldi.
  Define las convenciones semánticas de ramas (branches), sugerencias de mensajes de commit
  para el usuario (respetando la soberanía manual de Git) y auditorías profundas (Deep Reviews)
  entre las 8 etapas del framework.
  Trigger: Al preparar cierres de unidad de trabajo, sugerir convenciones de Git al usuario o revisar handoffs entre etapas.
version: "2.32.0"
---

# Higiene Operativa - Framework Baraldi

Este skill actúa como guardián de la prolijidad técnica en todo el ciclo de vida del producto. Unifica las mejores prácticas de ingeniería de software y las adapta para que Diseño, Producto e Ingeniería hablen el mismo idioma.

> [!IMPORTANT]
> **Soberanía Manual de Git (Regla P0):** El agente de IA tiene terminantemente **PROHIBIDO ejecutar `git add`, `git commit` o `git push` de forma autónoma**. El rol del agente en este protocolo es mantener el *working tree* impecable y **proponer al humano el nombre de rama o el mensaje de commit semántico sugerido** para que la persona lo ejecute manualmente cuando lo decida.

---

## 1. Nomenclatura de Branches (Convención para las 8 Etapas)

Evitar ramas genéricas (`bocetos`, `nueva-pantalla`, `update`). Cuando el equipo o el usuario trabaje con ramas por etapa o feature, la convención recomendada indica **qué fase** del framework se está abordando:

**Patrón:** `[fase]/[contexto]`

**[EJEMPLO DE ESTRUCTURA A SUGERIR POR LA IA]**
| Prefijo de Rama | Etapa del Framework | Ejemplo |
|---|---|---|
| `discovery/` | Etapas 01 y 02 (Problem Framing y System Analysis) | `discovery/actor-map-ecosystem` |
| `logic/` | Etapa 03 (Product Logic y modelo de datos) | `logic/checkout-business-rules` |
| `ia/` | Etapa 04 (Information Architecture y Sitemap) | `ia/navigation-taxonomy` |
| `ux/` | Etapa 05 (Interaction Design, estados y `VOICE.md`) | `ux/onboarding-state-machine` |
| `ui/` | Etapa 06 (Visual Design, tokens, `DESIGN.md` y Showroom) | `ui/design-tokens-showroom` |
| `qa/` | Etapa 07 (Handover, QA y `KNOWLEDGE.md`) | `qa/completeness-audit-v1` |
| `telemetry/` | Etapa 08 (Continuous Discovery y Data UX) | `telemetry/conversion-funnel-insights` |
| `docs/` | Actualizaciones transversales de contratos o backlog | `docs/update-strategic-backlog` |

---

## 2. Sugerencia de Commits Semánticos (Work-Unit Commits)

Cuando el usuario cierre una unidad atómica de valor y solicite ayuda para documentar su commit (o al cerrar un hito importante), el agente sugiere el mensaje siguiendo el estándar Conventional Commits:

**Patrón:** `<type>(<scope opcional>): <descripción clara en minúsculas>`

### Tipos Permitidos

| Tipo | Propósito | Ejemplo |
|---|---|---|
| `feat` | Nueva característica, vista o flujo funcional | `feat(checkout): add stock reservation flow` |
| `fix` | Corrección de un bug, estado faltante o inconsistencia | `fix(catalog): handle empty state in filter tabs` |
| `docs` | Creación o actualización de artefactos en `docs-fwbaraldi/` | `docs(logic): update actor permissions matrix` |
| `refactor` | Fragmentación modular de componentes sin alterar comportamiento | `refactor(ui): split product view into atomic components` |
| `chore` | Limpieza de assets, configuración o dependencias | `chore(assets): optimize svg icons and webp images` |

### Reglas de la Unidad Atómica de Trabajo (Work-Unit)
1. **Unidad de valor completa:** Un hito entregable incluye el código, su reflejo en `showroom.html` (si tocó UI) y el linaje de datos completo (desde el esquema hasta la vista).
2. **Frontera de Rollback limpia:** No mezclar cambios de refactorización masiva con cambios de lógica de negocio crítica en el mismo lote de trabajo.

---

## 3. Protocolo de Revisión Profunda (Deep Review entre Etapas)

Este protocolo fuerza a la IA a auditar el trabajo rigurosamente antes de declararlo listo o proponer el pase a la siguiente etapa:

1. **Rastreo de evidencia (Traceability):** ¿La solución planteada responde directamente a las fricciones y objetivos detectados en las Etapas 01 y 02?
2. **Casos límite (Edge Cases):** ¿Están cubiertos los estados vacíos (`empty`), de error, de carga (`loading`) y de permisos insuficientes?
3. **Linaje de datos (Data-to-UI Lineage):** Si se añadieron campos o atributos, ¿están sincronizados en esquema, tipos, consulta/API, vista de carga y vista pública?
4. **Higiene de naming y contratos:** ¿Los archivos siguen el estándar semántico de `00_core_guardrails` y respetan `DESIGN.md`, `showroom.html` y `VOICE.md`?
5. **Cierre humano claro:** Verificar que el turno cierre siempre con una explicación humana accionable posterior a cualquier llamada a herramientas técnicas.

---

*Framework Baraldi v2.32.0 · Higiene Operativa.*
