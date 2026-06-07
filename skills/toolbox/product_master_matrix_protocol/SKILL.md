---
name: product-master-matrix-protocol
description: >
  Protocolo para la gestión de la Product Master Matrix (PMM). El "Cerebro de Trazabilidad" 
  que registra cada vista, componente e interacción desde la concepción hasta el QA final.
keywords: trazabilidad, matriz, PMM, seguimiento, inventario, QA, Handover, consistencia
version: "2.26.13"
---

# 📊 Skill 06 — Protocolo de Matriz Maestra de Producto (PMM)

Esta skill actúa como el **Cerebro de Trazabilidad** del proyecto. Su misión es mantener un artefacto vivo (`PRODUCT_MASTER_MATRIX.md`) que garantice que ninguna decisión tomada en las etapas de descubrimiento (E01-E03) o arquitectura (E04) se pierda durante la ejecución visual o técnica (E06-E07).

---

## 🏗️ 1. Estructura del Artefacto PMM

El archivo debe residir en la raíz del proyecto y seguir este formato de tabla mandatorio:

| ID | Vista / Pantalla | Prioridad | E04 (Arch) | E05 (UX) | E06 (UI) | E07 (QA) | Notas / Componentes Core |
|:---|:---|:---|:---:|:---:|:---:|:---:|:---|
| P01 | Dashboard Home | Alta | ✅ | ✅ | 🏗️ | ❌ | Sidebar, StatsGrid, ChartArea |

**Leyenda:** ✅ (Completado), 🏗️ (En Proceso), ❌ (Pendiente).

---

## 🔄 2. Ciclo de Vida y Sincronía

- **Fase de Inicio (Etapa 04):** Se inicializa la matriz basada en el Sitemap. Se define la prioridad de negocio (Necesidad vs. Urgencia).
- **Fase de Interacción (Etapa 05):** Se vincula cada vista con su flujo de estados (Loading, Empty, Error) y su tono de voz (`VOICE.md`).
- **Fase de QA (Etapa 07):** Se realiza el check final de trazabilidad. Si una pantalla no está marcada en E07, el producto no está listo para el Handoff.

---

## 🚫 NEVER List — Anti-patrones de Trazabilidad
- **NUNCA** elimines una fila de la matriz sin consenso explícito del equipo de producto. Si una pantalla se descarta, se marca como `[DESCARTADA]` con el motivo.
- **NUNCA** permitas que la matriz se desincronice con el Sitemap o los archivos de diseño en Figma.
- **NUNCA** apruebes una vista en la Etapa 06 si no tiene definidos sus componentes core en la columna de Notas.

## ✅ ALWAYS List — Mandatos de la Matrix
- **SIEMPRE** muestra un resumen del estado de completitud de la PMM al inicio de cada sesión de trabajo.
- **SIEMPRE** utiliza la matriz como la fuente de verdad única para definir el "Definition of Done".
- **SIEMPRE** vincula cada ID de la matriz (ej. P01) con los tickets correspondientes en el **Jira Tasks Engine**.
- **SIEMPRE** asegura que la prioridad de los ítems refleje el ROI definido en la **Skill 02**.

---

## 📋 Protocolo de Mantenimiento
1. **PMM Audit:** Revisión semanal de estados y actualización de bloqueos.
2. **Consistency Check:** Validación cruzada entre PMM y el archivo `context.md` del proyecto.
3. **Drill-down Report:** Generación de un reporte de "Puntos Ciegos" (vistas sin documentación UX o UI).

---
*Framework Baraldi v2.26.13 · Skill 06 · Trazabilidad de Producto*
