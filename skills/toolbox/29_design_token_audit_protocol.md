---
name: design-token-audit
description: >
  Protocolo de auditoría y refactorización para sistemas de diseño legados o 
  desorganizados. Identifica duplicados, brechas de cobertura y establece un plan de 
  migración hacia una arquitectura de tokens limpia.
keywords: design-tokens, audit, refactoring, technical-debt, linter, migration, consistency
version: "2.26.3"
---

# 🧹 Skill 29 — Design Token Audit & Refactoring Protocol

Este protocolo se activa cuando el Agente se enfrenta a un sistema de diseño legado, un archivo de Figma caótico o código CSS inflado ("Design Debt"). El objetivo es auditar, sanear y estructurar los tokens antes de cualquier nueva fase de desarrollo.

## 📊 Dimensiones de la Auditoría

Al analizar un sistema existente, el Agente debe documentar y estructurar el reporte en las siguientes áreas:

### 1. Inventario Actual (Token Inventory)
- **Mapeo Total:** Listado de todos los tokens por categoría (Color, Tipografía, Espaciado).
- **Frecuencia de Uso:** Identificación de los tokens más y menos utilizados.
- **Estructura Base:** Evaluación de cómo están organizados actualmente (si existe alguna organización).

### 2. Análisis de Consistencia y Duplicados
- **Deduplicación:** Identificar valores duplicados (ej. 3 variables distintas para `#FFFFFF`) o valores visualmente idénticos que pueden fusionarse (ej. `#333` vs `#323232`).
- **Limpieza (Value Optimization):** Marcar tokens no utilizados o excesivamente específicos que aportan ruido al sistema.
- **Nomenclatura (Naming Convention):** Auditar inconsistencias en los nombres (ej. mezcla de `camelCase`, `kebab-case`, nombres semánticos vs. descriptivos).

### 3. Análisis de Brechas (Gap Analysis)
- **Tokens Faltantes:** Identificar qué falta para tener un sistema robusto (ej. "Hay color primario, pero no hay variantes para hover/active").
- **Estados y Feedback:** Verificar cobertura de estados de error, éxito, warning e info.

### 4. Propuesta de Arquitectura (Target Structure)
- **Nueva Estructura:** Recomendación de agrupación jerárquica (Global Tokens > Semantic Tokens > Component Tokens).
- **Sistema de Nomenclatura:** Definición estricta de cómo deben llamarse a partir de ahora (alineado con la Etapa 06 Momento 1).

### 5. Plan de Migración (Migration Strategy)
- **Matriz de Depreciación:** Tabla mapeando los tokens viejos (a eliminar) hacia los tokens nuevos consolidados.
- **Breaking Changes:** Identificación de impactos graves en la UI al consolidar valores.
- **Priorización de Implementación:** 
  1. *High Priority:* Arreglos críticos (ej. contraste inaccesible, duplicados masivos).
  2. *Medium Priority:* Normalización de nomenclatura.
  3. *Quick Wins:* Eliminación de variables no utilizadas (Dead Code).

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** En la **Etapa 02 (System Analysis)** al tomar un proyecto legado, o al inicio de la **Etapa 06 (Visual Design)** si el archivo de Figma base es inconsistente.
- **Sinergia:** Esta skill "limpia el terreno" para poder aplicar correctamente la **Etapa 06 Momento 1 (Tokens & Foundations)**.
- **Output:** Un documento `Token_Audit_Report.md` con el estado actual y la hoja de ruta de refactorización.

---
*Framework Baraldi v2.26.3 · Skill 29*
