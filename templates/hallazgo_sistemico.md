# Template — Hallazgo Sistémico

> Usar este template para registrar conocimiento valioso en `memory/baraldi_knowledge_base.md`.
> Cada hallazgo vive dentro de la sección del proyecto activo `## [Proyecto: ...]`.

---

## Cómo usar este template

1. Copiar el bloque de código de abajo completo (incluyendo los backticks)
2. Pegar al final de la sección del proyecto activo en `memory/baraldi_knowledge_base.md`
3. Si el `Eje Estratégico` ya existe, **actualizar** el bloque existente e incrementar `Revisión:`
4. Nunca duplicar un Eje Estratégico dentro del mismo proyecto

---

## Template

```
### [Eje Estratégico: slug-del-tema]

`​`​`
Tipo:         [decisión / validación / riesgo / patrón / preferencia / cierre-de-etapa / artefacto / cierre-de-sesión]
Proyecto:     [nombre del proyecto]
Etapa:        [00-07 — nombre de etapa]
Revisión:     [1]

Qué:          [descripción concisa — qué pasó, qué se decidió, qué se descubrió]

Por qué:      [razón, evidencia o contexto que respalda este hallazgo]

Dónde:        [archivo, artefacto, momento o contexto donde aplica]

Aprendido:    [qué cambia a partir de este hallazgo, qué recordar, qué evitar]
`​`​`
```

---

## Tipos de Hallazgo

| Tipo | Cuándo usar |
|---|---|
| `decisión` | Se tomó una decisión de diseño, arquitectura o metodología |
| `validación` | Una hipótesis fue confirmada o refutada con evidencia |
| `riesgo` | Se identificó un riesgo sistémico no mapeado previamente |
| `patrón` | Se descubrió un patrón reutilizable para futuras etapas o proyectos |
| `preferencia` | El humano expresó una preferencia explícita sobre cómo trabajar |
| `cierre-de-etapa` | Se cerró un Momento o Etapa del framework |
| `artefacto` | Se produjo y aprobó un artefacto clave |
| `cierre-de-sesión` | Resumen de la sesión completa de trabajo |

---

## Convención para Ejes Estratégicos (slugs)

Los slugs deben ser descriptivos y estables. Estructura recomendada:
`[etapa-abreviada]-[tema]`

| Etapa | Prefijo | Ejemplos |
|---|---|---|
| 00 Boot / Meta | `fw-` | `fw-decision-modelo`, `fw-preferencia-formato` |
| 01 Problem Framing | `pf-` | `pf-hipotesis-central`, `pf-stakeholder-clave` |
| 02 System Analysis | `sa-` | `sa-actor-map`, `sa-riesgo-api`, `sa-dependencia-critica` |
| 03 Product Logic | `pl-` | `pl-regla-negocio-x`, `pl-flujo-principal` |
| 04 UX Experience | `ux-` | `ux-patron-navegacion`, `ux-friction-clave` |
| 05 UI Design | `ui-` | `ui-decision-componente`, `ui-sistema-tokens` |
| 06 Implementation | `im-` | `im-decision-stack`, `im-patron-api` |
| 07 System Reflection | `sr-` | `sr-aprendizaje-ciclo`, `sr-deuda-tecnica` |

---

*Framework Baraldi v2.4.0 · templates/hallazgo_sistemico.md*
