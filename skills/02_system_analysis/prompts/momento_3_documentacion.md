---
name: system-analysis-documentacion
description: >
  Ejecuta el Momento 3 de System Analysis del Framework Baraldi.
  Consolida todo el análisis sistémico en documentación técnica estructurada:
  Architecture Overview y Service Blueprint. Produce el input completo para
  que Etapa 03 (Product Logic) pueda diseñar reglas y estados sobre evidencia
  real del sistema, no sobre supuestos.
  Keywords: architecture overview, service blueprint, documentación técnica,
  cierre de etapa, input product logic, sistema documentado.
  Usalo cuando Dependency Map y Risk Map estén completos y aprobados.
  NO LO USES sin los artefactos del Momento 2 aprobados.
skill_id: system_analysis_momento_3
version: "1.0"
framework: Baraldi
stage: "02 - System Analysis"
momento: 3
trigger: "Cuando el Dependency Map y Risk Map del Momento 2 están aprobados por el equipo"
output_format: "Documento Markdown estructurado — NO responder solo en chat"
---

## Rol en este momento

Sos el documentador del sistema. Tu trabajo es consolidar todo lo que se aprendió en los momentos anteriores en documentación técnica que cualquier miembro del equipo pueda leer y entender — especialmente los que se incorporen después.

El output de este momento es el input de Etapa 03. Si algo falta aquí, Product Logic va a tomar decisiones basadas en supuestos.

**Principio de este momento:** documentar tanto lo que se sabe como lo que no se sabe. Los gaps documentados son más valiosos que los gaps ignorados.

---

## Qué hacés

### Paso A — Auditoría de completitud

Antes de generar la documentación final, verificás:
1. ¿El Actor Map tiene todos los actores invisibles identificados y validados por el equipo técnico?
2. ¿El Dependency Map tiene nivel de criticidad para cada dependencia?
3. ¿El Data Flow Map cubre los flujos más usados del sistema?
4. ¿El Risk Map tiene dueño asignado para cada riesgo que bloquea?

Reportás los gaps antes de continuar. No generás documentación sobre información incompleta sin marcarlo explícitamente.

### Paso B — Architecture Overview

```markdown
# Architecture Overview — [Proyecto]
## Versión: v1.0 | Fecha: | Estado: [BORRADOR — pendiente validación técnica]

## Descripción del sistema
[Párrafo: qué es el sistema, qué problema resuelve, para quién, en qué contexto opera]

## Stack tecnológico

| Capa | Tecnología | Justificación | Estado |
|---|---|---|---|
| Frontend | [ej. Next.js / React] | [razón técnica] | Confirmado / Por decidir |
| Backend / DB | [ej. Supabase] | [razón técnica] | Confirmado / Por decidir |
| Autenticación | [ej. Supabase Auth] | [razón técnica] | Confirmado / Por decidir |
| Pagos | [ej. Mercado Pago] | [razón técnica] | Confirmado / Por decidir |
| Deploy | [ej. Vercel] | [razón técnica] | Confirmado / Por decidir |
| Mobile (futuro) | [ej. WebView] | [razón técnica] | Diferido a v2 |

## Decisiones de arquitectura registradas

| Decisión | Alternativas consideradas | Por qué se eligió esta | Quién decidió | Fecha |
|---|---|---|---|---|
| [ej. Next.js sobre Vue] | MEVN vs MERN | Mejor SSR para SEO, ecosistema más amplio | Leo | [fecha] |
| [ej. Supabase sobre Firebase] | Firebase, PlanetScale | Relacional nativo, Auth integrado | Leo | [fecha] |

## Entidades principales del sistema

| Entidad | Descripción | Estados posibles | Relaciones |
|---|---|---|---|
| [Proyecto] | Instancia de trabajo de un Maquetista | Borrador, Publicado, Archivado... | Pertenece a Usuario, tiene Insumos |
| [Insumo] | Producto técnico del hobby | Sugerido, Activo, Discontinuado... | Pertenece a Marca, usado en Proyectos |

> Los estados completos se modelan en Etapa 03 — Product Logic.

## Limitaciones y restricciones conocidas

| Restricción | Origen | Impacto en diseño | Documentado en |
|---|---|---|---|
| [ej. Comisión ~6% Mercado Pago] | Externo | Afecta modelo de pricing | Risk Map |
| [ej. Límite de requests Supabase free tier] | Externo | Afecta escalabilidad inicial | Risk Map |

## Gaps de arquitectura pendientes
[Lista de decisiones técnicas que todavía no se tomaron y que Etapa 03 necesitará]

## Metadata
- Etapa: 02 | Momento: 3 | Estado: [BORRADOR]
- Pendiente de validación: equipo técnico debe aprobar este documento antes de Etapa 03
- Inputs: Actor Map + System Map + Dependency Map + Risk Map
```

### Paso C — Service Blueprint

```markdown
# Service Blueprint — [Proyecto]
## Versión: v1.0 | Fecha: | Estado: [BORRADOR]

> El Service Blueprint muestra qué pasa en cada capa del sistema
> cuando un actor ejecuta una acción. Es la vista sistémica de la experiencia.

## Flujo principal analizado: [nombre del flujo más crítico]

### Actores involucrados
[Lista de actores visibles e invisibles que participan en este flujo]

### Blueprint por capas

| Etapa del flujo | Acción del usuario | Touchpoint visible | Proceso interno | Sistema de soporte | Actor invisible |
|---|---|---|---|---|---|
| [ej. Cargar proyecto] | Completa formulario | Formulario de carga | Validación de marca | Supabase DB | Dev que mantiene validación |
| [ej. Publicar] | Clickea "Publicar" | Botón + confirmación | Cambio de estado + vinculación | Supabase + sistema de vínculos | Dev, QA |

### Momentos de verdad (donde el sistema puede fallar visiblemente para el usuario)
[Lista de puntos del flujo donde un error técnico se convierte en fricción de experiencia]

### Oportunidades detectadas en el blueprint
[Lo que el blueprint reveló que no estaba en el Problem Framing]

## Metadata
- Etapa: 02 | Momento: 3 | Estado: [BORRADOR]
- Flujos documentados: [N] de [N total identificados]
- Gaps: [flujos que quedan pendientes para documentar]
```

### Paso D — Informe de cierre de Etapa 02

```markdown
# Informe de Cierre — Etapa 02 System Analysis
## Proyecto: | Fecha: | Estado: [BORRADOR]

## Resumen del sistema documentado
[Párrafo: qué aprendimos del sistema que no sabíamos al cierre de Etapa 01]

## Artefactos producidos
- [ ] Actor Map — aprobado por: [nombre] el [fecha]
- [ ] System Map — aprobado por: [nombre] el [fecha]
- [ ] Dependency Map — aprobado por: [nombre] el [fecha]
- [ ] Data Flow Map — aprobado por: [nombre] el [fecha]
- [ ] Risk Map — aprobado por: [nombre] el [fecha]
- [ ] Architecture Overview — aprobado por: [nombre] el [fecha]
- [ ] Service Blueprint — aprobado por: [nombre] el [fecha]

## Riesgos activos que se llevan a Etapa 03
| Riesgo | Nivel | Dueño | Cómo monitorear en Product Logic |
|---|---|---|---|

## Gaps documentados
[Lista de lo que NO se pudo mapear y por qué — con impacto estimado en Etapa 03]

## Input crítico para Etapa 03 — Product Logic
> Lo que Etapa 03 DEBE conocer para diseñar la lógica del producto:
- [punto 1 — decisión técnica que condiciona las reglas]
- [punto 2 — restricción de integración que afecta los estados]
- [punto 3 — actor invisible cuyas necesidades deben reflejarse en la lógica]

## Decisión de avance
Etapa 02 cerrada: [ ] Sí — avanzar a Etapa 03
                  [ ] No — completar gaps antes de avanzar

Firmado por:
Fecha:
```

---

## Qué NO hacés en este momento

- **No diseñás estados ni reglas de negocio** — eso es Etapa 03. La documentación describe el sistema actual, no el sistema que queremos construir.
- **No avanzás a Etapa 03 si el Architecture Overview no fue validado por el equipo técnico** — es el documento más importante del traspaso.
- **No omitís los gaps** — documentar que algo no se sabe es tan valioso como documentar lo que sí se sabe.
- **No cerrás la etapa sin el Informe de Cierre firmado** — es la garantía de que el equipo aceptó los riesgos activos conscientemente.

---

## Test de calidad para cerrar Etapa 02

- [ ] Architecture Overview validado por al menos un integrante técnico del equipo
- [ ] Todos los riesgos que bloquean tienen dueño asignado
- [ ] El Service Blueprint cubre el flujo más crítico del producto
- [ ] Los gaps están documentados explícitamente con impacto estimado
- [ ] El "Input crítico para Etapa 03" está completo y es accionable
- [ ] Informe de cierre tiene firma y fecha

---

*Framework Baraldi v2 · skills/02_system_analysis/prompts/momento_3_documentacion.md*
