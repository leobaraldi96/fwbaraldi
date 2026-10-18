---
name: system-analysis-dependencias
description: >
  Ejecuta el Momento 2 de System Analysis del Framework Baraldi.
  Analiza dependencias técnicas, flujos de datos e integraciones del sistema.
  Detecta dependencias ocultas, puntos únicos de falla y riesgos sistémicos
  antes de diseñar la lógica del producto.
  Keywords: dependencias, riesgos, data flow, integraciones, APIs, arquitectura,
  puntos de falla, deuda técnica, dependency map.
  Usalo cuando el Actor Map esté aprobado por el equipo.
  NO LO USES sin el Actor Map del Momento 1 aprobado.
skill_id: system_analysis_momento_2
version: "2.31.0"
framework: Baraldi
stage: "02 - System Analysis"
momento: 2
memory_key: "sa-riesgos-criticos"
trigger: "Cuando el Actor Map del Momento 1 está aprobado"
output_format: "Documento Markdown estructurado - NO responder solo en chat"
---

# Skill: Momento 2 - Análisis de dependencias, flujos de datos y riesgos

## Rol y análisis previo visible

Sos un arquitecto de sistemas enfocado en hacer visibles las dependencias ocultas, los puntos únicos de falla (SPOF) y los riesgos antes de diseñar la lógica en la Etapa 03.
- **Trazabilidad obligatoria:** El **100% de los actores** (visibles, invisibles y de sistema) del Momento 1 deben tener sus dependencias y flujos representados aquí. Prohibido resumir o podar actores.

---

## Los 3 artefactos de salida del Momento 2

### 1. Dependency Map (`# Dependency Map - [Proyecto]`)
```markdown
### A. Dependencias internas (entre módulos y actores operativos)
| Componente / Módulo A | Depende de | Tipo (Lógica / Datos / Operativa) | Criticidad (`[CRÍTICA]` a `[BAJA]`) | Qué pasa si falla |
| :--- | :--- | :---: | :---: | :--- |

### B. Dependencias externas (APIs y terceros)
| Servicio | Proveedor | Función | Criticidad | Restricciones (SLAs / Límites / Costos) | Alternativa / Fallback |
| :--- | :--- | :--- | :---: | :--- | :--- |

### C. Puntos únicos de falla (SPOF) y dependencias circulares
| Componente SPOF / Circular | Topología (`Lineal` / `HUB` / `Circular`) | Impacto en el sistema | Mitigación obligatoria |
| :--- | :---: | :--- | :--- |
```

### 2. Data Flow Map (`# Data Flow Map - [Proyecto]`)
```markdown
### A. Matriz CRUD de entidades principales
| Entidad de datos | Quién la crea (Create) | Quién la lee (Read) | Quién la modifica (Update) | Quién la elimina (Delete) |
| :--- | :--- | :--- | :--- | :--- |

### B. Flujos críticos de datos paso a paso
[Diagrama o secuencia `Actor A -> crea Entidad X -> Sistema valida -> notifica a Actor B -> actualiza API externa`]
```

### 3. Risk Map (`# Risk Map - [Proyecto]`)
```markdown
| Riesgo detectado | Categoría (`Técnico` / `Datos` / `Negocio` / `Legal`) | Probabilidad | Impacto | Nivel | Mitigación | Dueño |
| :--- | :---: | :---: | :---: | :---: | :--- | :--- |
```
Separar explícitamente **Riesgos que bloquean el paso a la Etapa 03** de los **Riesgos activos a monitorear**.

---

## Guardrails y protocolo de memoria
- **NUNCA** asumas que una integración externa carece de límites de tasa, costos o fallos.
- **NUNCA** avances al Momento 3 si existen dependencias circulares o riesgos bloqueantes sin dueño ni plan de mitigación.

**Persistencia en Engram al cerrar el momento (`mem_save`):**
- **Topic Keys:** `sa-riesgos-criticos` (tipo: `riesgo`) y `sa-dependencias-clave` (tipo: `patrón`).
- **Contenido:** SPOFs detectados, riesgos bloqueantes, restricciones críticas de APIs externas y estrategias de fallback.

---
*Framework Baraldi v2.31.0 · skills/methodology/02_system_analysis/skills/momento_2_dependencias.md*
