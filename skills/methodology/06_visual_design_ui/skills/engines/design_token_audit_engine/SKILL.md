---
name: design-token-audit
description: >
  Protocolo de auditorÃ­a y refactorizaciÃ³n para sistemas de diseÃ±o legados o 
  desorganizados. Identifica duplicados, brechas de cobertura y establece un plan de 
  migraciÃ³n hacia una arquitectura de tokens limpia.
keywords: design-tokens, audit, refactoring, technical-debt, linter, migration, consistency
version: "2.26.14"
---

# ðŸ§¹ Skill 29 â€” Design Token Audit & Refactoring Protocol

Este protocolo se activa cuando el Agente se enfrenta a un sistema de diseÃ±o legado, un archivo de Figma caÃ³tico o cÃ³digo CSS inflado ("Design Debt"). El objetivo es auditar, sanear y estructurar los tokens antes de cualquier nueva fase de desarrollo.

## ðŸ“Š Dimensiones de la AuditorÃ­a

Al analizar un sistema existente, el Agente debe documentar y estructurar el reporte en las siguientes Ã¡reas:

### 1. Inventario Actual (Token Inventory)
- **Mapeo Total:** Listado de todos los tokens por categorÃ­a (Color, TipografÃ­a, Espaciado).
- **Frecuencia de Uso:** IdentificaciÃ³n de los tokens mÃ¡s y menos utilizados.
- **Estructura Base:** EvaluaciÃ³n de cÃ³mo estÃ¡n organizados actualmente (si existe alguna organizaciÃ³n).

### 2. AnÃ¡lisis de Consistencia y Duplicados
- **DeduplicaciÃ³n:** Identificar valores duplicados (ej. 3 variables distintas para `#FFFFFF`) o valores visualmente idÃ©nticos que pueden fusionarse (ej. `#333` vs `#323232`).
- **Limpieza (Value Optimization):** Marcar tokens no utilizados o excesivamente especÃ­ficos que aportan ruido al sistema.
- **Nomenclatura (Naming Convention):** Auditar inconsistencias en los nombres (ej. mezcla de `camelCase`, `kebab-case`, nombres semÃ¡nticos vs. descriptivos).

### 3. AnÃ¡lisis de Brechas (Gap Analysis)
- **Tokens Faltantes:** Identificar quÃ© falta para tener un sistema robusto (ej. "Hay color primario, pero no hay variantes para hover/active").
- **Estados y Feedback:** Verificar cobertura de estados de error, Ã©xito, warning e info.

### 4. Propuesta de Arquitectura (Target Structure)
- **Nueva Estructura:** RecomendaciÃ³n de agrupaciÃ³n jerÃ¡rquica (Global Tokens > Semantic Tokens > Component Tokens).
- **Sistema de Nomenclatura:** DefiniciÃ³n estricta de cÃ³mo deben llamarse a partir de ahora (alineado con la Etapa 06 Momento 1).

### 5. Plan de MigraciÃ³n (Migration Strategy)
- **Matriz de DepreciaciÃ³n:** Tabla mapeando los tokens viejos (a eliminar) hacia los tokens nuevos consolidados.
- **Breaking Changes:** IdentificaciÃ³n de impactos graves en la UI al consolidar valores.
- **PriorizaciÃ³n de ImplementaciÃ³n:** 
  1. *High Priority:* Arreglos crÃ­ticos (ej. contraste inaccesible, duplicados masivos).
  2. *Medium Priority:* NormalizaciÃ³n de nomenclatura.
  3. *Quick Wins:* EliminaciÃ³n de variables no utilizadas (Dead Code).

---
## ðŸ’¡ CÃ³mo usar esta Skill (Bridge Architecture)
- **CuÃ¡ndo invocar:** En la **Etapa 02 (System Analysis)** al tomar un proyecto legado, o al inicio de la **Etapa 06 (Visual Design)** si el archivo de Figma base es inconsistente.
- **Sinergia:** Esta skill "limpia el terreno" para poder aplicar correctamente la **Etapa 06 Momento 1 (Tokens & Foundations)**.
- **Output:** Un documento `Token_Audit_Report.md` con el estado actual y la hoja de ruta de refactorizaciÃ³n.

---
*Framework Baraldi v2.26.14 Â· Skill 29*

