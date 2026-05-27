---
name: comprehensive-ds-audit
description: >
  Protocolo macro para auditar el estado de salud de un Sistema de Diseño completo. 
  Evalúa coherencia visual, cobertura de biblioteca, accesibilidad, calidad de 
  documentación e implementación técnica en código.
keywords: design-system, health-check, audit, macro-audit, design-ops, scalability
version: "2.26.6"
---

# 🏥 Skill 31 — Comprehensive Design System Audit Protocol (Health Check)

Este protocolo se activa para realizar una evaluación de alto nivel (macro) sobre la salud integral de un sistema de diseño o producto maduro. El Agente actúa como un **Design Operations (DesignOps) Lead**, diagnosticando el ecosistema completo para identificar áreas de degradación o deuda técnica estructural.

## 📋 Ejes de la Auditoría Macro

Al ejecutar este diagnóstico, el Agente debe analizar y generar un reporte estructurado en las siguientes 7 dimensiones:

### 1. Coherencia Visual (Visual Consistency)
- **Uso de Paletas:** ¿Existen colores huérfanos o desviaciones de la marca?
- **Tipografía:** Consistencia en las escalas de lectura y jerarquías.
- **Patrones de Layout:** Uso predecible de márgenes, grillas y espaciados.
- **Variaciones Injustificadas:** Múltiples estilos para componentes con la misma función.

### 2. Biblioteca de Componentes (Component Library)
- **Cobertura:** Porcentaje estimado de necesidades de UI cubiertas por componentes existentes.
- **Faltantes (Missing):** Componentes críticos que se construyen a mano ("detached") en los proyectos.
- **Calidad de Construcción:** Uso correcto de Auto Layout, variantes y propiedades en Figma.

### 3. Infraestructura de Tokens (Design Tokens)
- **Estado de la Nomenclatura:** ¿Los nombres son semánticos y escalables?
- **Organización:** Estructura jerárquica de variables.
- **Brechas (Gaps):** Tokens faltantes que obligan a usar valores absolutos (hardcoded).

### 4. Accesibilidad Global (Accessibility & Inclusivity)
- **Cumplimiento WCAG:** Auditoría general de ratios de contraste.
- **Navegabilidad:** Soporte consistente para teclado (Focus rings) en todo el sistema.
- **Tecnologías Asistivas:** Uso sistemático de ARIA y labels para lectores de pantalla.

### 5. Calidad Documental (Documentation)
- **Completitud:** ¿Tienen los componentes guías claras de uso (Do's and Don'ts)?
- **Ejemplos Reales:** Presencia de fragmentos de código, specs de diseño y directrices de UX.

### 6. Fidelidad de Implementación (Code & Framework)
- **Calidad del Código UI:** Consistencia entre los componentes de React/Vue y la librería de Figma.
- **Performance:** Peso de los estilos, uso excesivo de re-renders por mala arquitectura CSS/JS.
- **Compatibilidad:** Soporte cross-browser y respuesta responsiva real.

### 7. Diagnóstico y Oportunidades (Action Items)
El output final debe consolidarse en:
- **Missing Patterns:** Patrones recurrentes que deberían ser un componente.
- **Inconsistencias a Reparar:** Errores que dañan la experiencia de usuario o complican el desarrollo.
- **Matriz de Prioridades (Roadmap):** 
  - *High:* Reparaciones urgentes (A11y, bugs críticos).
  - *Medium:* Expansión de la biblioteca y refactorización.
  - *Low:* Mejoras de calidad de vida y documentación.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** En la **Etapa 02 (System Analysis)** para realizar el Onboarding de un producto legado o como revisión trimestral ("Health Check") en productos activos.
- **Output:** Un informe `Design_System_Health_Report.md` que justifica el roadmap de la fase de rediseño o mantenimiento.
- **Sinergia:** Detecta problemas a gran escala que luego serán resueltos quirúrgicamente por las **Skills 25, 29 y 30**.

---
*Framework Baraldi v2.26.6 · Skill 31*
