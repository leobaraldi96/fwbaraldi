---
name: fwbaraldi-operational-hygiene
description: >
  Protocolo de Higiene Operativa del Framework Baraldi. 
  Define las reglas críticas para la nomenclatura de ramas (branches), commits semánticos
  y auditorías profundas (Deep Reviews), adaptadas al diseño y estrategia de producto.
  Trigger: Al crear commits, ramas de trabajo, o al revisar el trabajo entre etapas.
version: "1.0"
---

# Higiene Operativa — Framework Baraldi

Este skill actúa como guardián de la prolijidad técnica en todo el ciclo de vida del producto. Unifica las mejores prácticas del desarrollo de software (Commits, Branches, Reviews) y las adapta para que el equipo de Diseño y Estrategia hable el mismo idioma que Ingeniería.

## Cuándo usar este skill

- 📝 **Al hacer Commits:** Cuando necesitas registrar un progreso, artefacto o avance.
- 🌿 **Al crear Branches:** Cuando abres una nueva línea de trabajo (ej. una iteración de UX o un nuevo flujo funcional).
- 🔍 **Al hacer Handoff o Auditorías (Deep Review):** Cuando pasas de una etapa del framework a otra, o le entregas material a Desarrollo.

---

## 1. Nomenclatura de Branches (Ramas)

Prohibido mantener el trabajo en ramas genéricas (`bocetos`, `nueva-pantalla`, `update`). Las ramas deben indicar **Qué Fase** del framework están trabajando y **Qué Feature** están abordando.

### Formato Obligatorio
**Patrón:** `[fase]/[contexto]`

| Fase (Type) | Cuándo se usa | Ejemplo |
|-------------|---------------|---------|
| `discovery/` | Etapas 01 y 02 (Investigación y mapeo) | `discovery/actor-map-fintech` |
| `logic/` | Etapa 03 (Lógica de negocio y data) | `logic/checkout-rules` |
| `ux/` | Etapa 04 (Arquitectura, Service Blueprint) | `ux/onboarding-flow` |
| `ui/` | Etapa 05 (Diseño visual, DS, Hi-Fi) | `ui/dark-mode-system` |
| `handoff/` | Etapa 06 (Entrega a dev, documentación) | `handoff/login-specs` |
| `docs/` | Actualizaciones exclusivas de documentación | `docs/update-kpi-metrics` |

---

## 2. Commits Semánticos para Diseño

Cada cambio en el repositorio (archivos de requisitos, JSONs de diseño, documentación, actas de decisión) debe quedar registrado con un formato semántico claro.

**Patrón:** `<type>(<scope opcional>): <descripción clara>`

### Tipos Permitidos

| Tipo | Propósito | Ejemplo |
|------|-----------|---------|
| `feat` | Nueva característica o flujo introducido | `feat(auth): add biometric login workflow` |
| `fix` | Corrección a un flujo roto o inconsistencia | `fix(checkout): resolve missing empty state` |
| `docs` | Cambios en artefactos o documentación | `docs(map): update stakeholder list` |
| `chore` | Limpieza, organización de archivos en Figma/Repo | `chore(assets): restructure icon library` |
| `review` | Cambios aplicados tras feedback o validación | `review(ui): adjust contrast for accessibility` |

> ⚠️ **Regla de Oro:** Un commit por cada unidad lógica de trabajo. Nunca agrupes un cambio de arquitectura de información (UX) con un ajuste de componentes (UI) en el mismo commit.

---

## 3. Protocolo de Revisión Profunda (Deep Review)

Basado en la lógica ingenieril, este protocolo fuerza a la IA (y al equipo) a auditar el trabajo rigurosamente antes de declararlo "Terminado" o pasarlo a la siguiente etapa.

### Checklist de Handoff interno:

1. **Rastreo de Evidencia (Traceability):** ¿La solución planteada responde directamente a las fricciones detectadas en la Etapa 01 y 02?
2. **Casos Límite (Edge Cases):** ¿Se han diseñado los estados vacíos, de error, de carga y de éxito excepcional? (Si no es así, la etapa no ha concluido).
3. **Consistencia Sistémica:** Revisar si el cambio en este flujo rompe otro componente mapeado en el Service Blueprint.
4. **Higiene de Naming:** ¿Están los IDs y nombres de componentes usando nomenclatura humana y de negocio (como obliga `00_core_guardrails`)?

---

*Framework Baraldi v2.7.0 · Higiene Operativa.*
