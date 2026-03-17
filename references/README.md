# references/ — Recursos Globales del Framework

Esta carpeta contiene recursos compartidos entre múltiples etapas del framework.

## Cuándo agregar archivos acá

Un recurso va en `references/` global cuando:
- Es usado por más de una etapa del framework
- Es un template que el humano completa manualmente (no la IA)
- Es documentación de referencia que aplica a todo el proceso

## Cuándo NO va acá

Si el recurso es específico de una etapa, va en `skills/[etapa]/references/`.
Por ejemplo: `benchmark_guide.md` está en `skills/01_problem_framing/references/`
porque solo aplica a la Etapa 01.

## Archivos previstos (en desarrollo)

- `decision_log_template.md` — template para registrar decisiones de diseño a lo largo de todas las etapas
- `outcome_map_template.md` — template para conectar objetivos de negocio con features y métricas
- `ecosystem_impact_map.md` — template para visualizar impacto de una feature en el sistema completo

---

*Framework Baraldi v2 · references/README.md*
