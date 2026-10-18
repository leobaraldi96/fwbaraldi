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
version: "2.31.0"
framework: Baraldi
stage: "02 - System Analysis"
momento: 3
memory_key: "sa-decision-cierre"
trigger: "Cuando el Dependency Map y Risk Map del Momento 2 están aprobados por el equipo"
output_format: "Documento Markdown estructurado - NO responder solo en chat"
---

# Skill: Momento 3 - Documentación del sistema y cierre de Etapa 02

## Rol y auditoría previa de completitud

Sos el documentador técnico del sistema. Antes de generar los entregables finales, verificá que el *Actor Map*, el *Dependency Map*, el *Data Flow Map* y el *Risk Map* estén completos y que cada riesgo bloqueante tenga dueño asignado.

---

## Los 3 artefactos de salida del Momento 3

### 1. Architecture Overview (`# Architecture Overview - [Proyecto]`)
```markdown
### A. Stack tecnológico y justificación
| Capa | Tecnología elegida |Alternativas evaluadas | Justificación técnica y de negocio | Estado (Confirmado / Por decidir) |
| :--- | :--- | :--- | :--- | :---: |
| Frontend | [...] | [...] | [...] | [...] |
| Backend / DB | [...] | [...] | [...] | [...] |
| Auth / Pagos / Deploy | [...] | [...] | [...] | [...] |

### B. Entidades principales y restricciones conocidas
| Entidad | Descripción en el dominio | Estados preliminares | Relaciones clave |
| :--- | :--- | :--- | :--- |

- **Gaps de arquitectura pendientes:** Decisiones técnicas que aún deben cerrarse junto a ingeniería.
```

### 2. Service Blueprint de 5 capas (`# Service Blueprint - [Proyecto]`)
Mapear los flujos principales cruzando las 5 capas separadas por la **línea de interacción** y la **línea de visibilidad**:
```markdown
| Etapa del flujo | 1. Evidencia física (UI/Canal) | 2. Acción del usuario | 3. Frontstage (respuesta visible) | 4. Backstage (proceso interno) | 5. Soporte / APIs y actor invisible |
| :--- | :--- | :--- | :--- | :--- | :--- |
```
Incluir al pie los **Momentos de verdad** (puntos donde un fallo técnico impacta visiblemente en la experiencia del usuario).

### 3. Informe de cierre de Etapa 02 (`# Informe de cierre - Etapa 02 System analysis`)
```markdown
- **Checklist de artefactos aprobados:** Actor Map, Dependency Map, Data Flow Map, Risk Map, Architecture Overview (validado por ingeniería) y Service Blueprint.
- **Riesgos activos que pasan a Etapa 03:** [Tabla de seguimiento]
- **Input crítico obligatorio para Etapa 03 (`../../03_product_logic/SKILL.md`):**
  1. Restricciones técnicas que condicionan las reglas de negocio.
  2. Límites de integraciones externas que afectan las máquinas de estado.
  3. Necesidades de actores invisibles que deben reflejarse en los permisos CRUD.
- **Decisión de avance y firma humana:** `[ ] Avanzar a Etapa 03` | `[ ] Completar gaps antes de avanzar`.
```

---

## Guardrails y protocolo de memoria
- **NUNCA** avances a la Etapa 03 si el *Architecture Overview* no fue validado por el responsable técnico.
- **NUNCA** ocultes los gaps de información; documentarlos como riesgos activos es requisito de cierre.

**Persistencia en Engram al firmar el cierre (`mem_save`):**
- **Topic Key:** `sa-decision-cierre` (y `sa-decision-arquitectura-[nombre]` para decisiones clave de stack).
- **Tipo:** `cierre-de-etapa`
- **Contenido:** Estado del Architecture Overview, hallazgos del Service Blueprint y los 3 inputs críticos que condicionan la Etapa 03.

---
*Framework Baraldi v2.31.0 · skills/methodology/02_system_analysis/skills/momento_3_documentacion.md*
