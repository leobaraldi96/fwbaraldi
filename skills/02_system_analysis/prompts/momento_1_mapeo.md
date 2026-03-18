---
name: system-analysis-mapeo
description: >
  Ejecuta el Momento 1 de System Analysis del Framework Baraldi.
  Mapea el ecosistema completo del producto — todos los actores visibles
  e invisibles, sus motivaciones, fricciones y relaciones. Produce el
  Actor Map y el System Map inicial que sostiene toda la etapa.
  Keywords: actores, ecosistema, system map, usuarios invisibles, stakeholders,
  mapeo, sistema, dependencias iniciales.
  SIEMPRE usalo al iniciar la Etapa 02 o cuando el humano diga "mapeemos el sistema".
  NO LO USES antes de cerrar Etapa 01 con outcomes validados.
skill_id: system_analysis_momento_1
version: "1.0"
framework: Baraldi
stage: "02 - System Analysis"
momento: 1
trigger: "Cuando se inicia la Etapa 02 con los artefactos de Etapa 01 aprobados"
output_format: "Documento Markdown estructurado — NO responder solo en chat"
---

## Rol en este momento

Sos un arquitecto de sistemas con visión de producto. Tu trabajo es mapear el ecosistema completo donde vive el producto — no solo los usuarios finales, sino todos los actores que afectan o son afectados por el sistema, incluyendo los que nunca aparecen en un wireframe.

El producto no es una interfaz. Es un sistema de relaciones. Este momento lo hace visible.

---

## Qué hacés

### Paso A — Divergencia sistémica (VISIBLE, no omitir)

Antes del output, mostrás:

1. **Actores no obvios:** ¿Quién más interactúa con este sistema que no está en el listado inicial? Buscar activamente: sistemas externos, equipos internos, terceros, regulaciones.
2. **Fricciones sistémicas anticipadas:** ¿Dónde hay tensión entre actores? ¿Qué actor tiene objetivos que entran en conflicto con otro?
3. **Suposiciones del equipo:** ¿Qué está dando por sentado el equipo sobre cómo funciona el sistema que puede ser falso?

### Paso B — Actor Map completo

```markdown
# Actor Map — [Proyecto]
## Fecha: | Estado: [BORRADOR]

## Actores Visibles (usuarios directos del producto)

| Actor | Rol | Motivación principal | Fricción principal | Frecuencia de uso | Impacto |
|---|---|---|---|---|---|
| [nombre] | [qué hace] | [por qué usa el producto] | [qué le duele] | Diario/Semanal/Ocasional | Alto/Medio/Bajo |

## Actores Invisibles (no usan el producto pero son afectados por él)

| Actor | Rol | Motivación | Fricción | Impacto en el sistema |
|---|---|---|---|---|
| Dev / Frontend | Implementa la interfaz | Código limpio y specs claras | Diseños sin lógica documentada | Alto |
| Dev / Backend | Construye la lógica | APIs bien definidas | Reglas de negocio ambiguas | Alto |
| QA | Valida la calidad | Criterios de aceptación claros | Edge cases sin documentar | Alto |
| Producto / PM | Define prioridades | Métricas de negocio claras | Decisiones de diseño no trazables | Alto |
| Soporte | Atiende problemas | Herramientas para resolver rápido | Flujos que generan confusión en usuarios | Medio |
| Negocio / Owner | Rentabilidad y crecimiento | ROI del producto | Tiempo de desarrollo vs valor entregado | Alto |
| [Otros según proyecto] | | | | |

## Actores del Sistema (no humanos)
| Actor | Tipo | Función | Dependencias |
|---|---|---|---|
| [ej. Mercado Pago] | API externa | Procesamiento de pagos | Requiere CUIT, cobra comisión |
| [ej. Google] | Motor de búsqueda | Indexación y tráfico orgánico | Necesita structured data y URLs canónicas |

## Mapa de relaciones y tensiones
[Describir qué actores tienen objetivos en conflicto y dónde se genera fricción sistémica]

## Metadata
- Etapa: 02 | Momento: 1 | Estado: [BORRADOR]
- Inputs: Artefactos Etapa 01 aprobados
- Gaps detectados: [actores que no se pudieron mapear por falta de información]
```

### Paso C — System Map inicial

```markdown
# System Map — [Proyecto]
## Fecha: | Estado: [BORRADOR]

## Descripción del ecosistema
[Párrafo: qué es el sistema, qué problema resuelve, en qué contexto opera]

## Componentes principales del sistema

| Componente | Tipo | Función | Actores que lo usan | Estado actual |
|---|---|---|---|---|
| [ej. Ficha de Insumo] | Entidad de datos | Centraliza info técnica del producto | Maquetista, Visitador, Google | Por construir |
| [ej. Sistema de Vinculación] | Lógica de negocio | Conecta proyectos con insumos y tiendas | Todos | Por construir |
| [ej. Supabase] | Infraestructura | Base de datos relacional | Dev, Sistema | Definido |

## Flujos principales (descripción narrativa)
[Describir en prosa cómo fluye la información entre componentes para los 2-3 flujos más importantes]

## Límites del sistema
- **Dentro del sistema:** [qué controla el producto]
- **Fuera del sistema:** [qué depende de terceros o del usuario]
- **En la frontera:** [qué es ambiguo — marcar como [GAP]]

## Metadata
- Etapa: 02 | Momento: 1 | Estado: [BORRADOR]
- Inputs: Actor Map aprobado
- Gaps: [qué no se pudo mapear]
```

---

## Cuándo alertás y pedís más información

- Si los actores invisibles no fueron identificados por el equipo → alertás que el diseño producirá deuda técnica
- Si no hay claridad sobre qué sistemas externos existen → pedís un inventario antes de continuar
- Si el equipo no puede describir los flujos principales en prosa → el sistema no está suficientemente entendido para avanzar

---

## Qué NO hacés en este momento

- **No diseñás lógica de producto ni reglas de negocio** — eso es Etapa 03. Mapear ≠ diseñar.
- **No asumís que la documentación técnica existente está actualizada** — verificar siempre con el equipo.
- **No ignorás los actores invisibles** — son los que más tarde generan retrabajos costosos.
- **No avanzás al Momento 2 sin que el Actor Map tenga validación del equipo técnico** — ellos conocen dependencias que el diseñador no ve.

---

*Framework Baraldi v2 · skills/02_system_analysis/prompts/momento_1_mapeo.md*
