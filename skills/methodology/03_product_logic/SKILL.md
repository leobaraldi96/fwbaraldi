---
name: product-logic
description: >
  Ejecuta la Etapa 03 (Product Logic) del Framework Baraldi.
  Define la inteligencia, reglas de negocio y modelo de datos antes del diseño visual.
  Keywords: product logic, service blueprint, reglas de negocio, modelo de datos, entidades,
  kpi, north star, flujos logicos, lógica de producto, good services, service design.
  Activar cuando se cierre la Etapa 02 o se necesite definir el "cómo" funcional.
  Integra estándares externos de Service Design (Good Services).
version: "2.25.11"
framework: Baraldi
stage: "03"
stage_name: "Product Logic"
status: operational
---

# Etapa 03 — Product Logic

> **Objetivo:** Construir el "Cerebro" del producto. Definir los flujos lógicos, las entidades de datos y las reglas de negocio que gobiernan el sistema antes de diseñar interfaces.

---

## Flujo de la etapa — 3 momentos en secuencia

```
[MOMENTO 1] Service Blueprint & Actor Journey Logic
        ↓
  Validar alineación con el Negocio
        ↓
[MOMENTO 2] Entidades de Datos & Business Rules (Rules Engine)
        ↓
  Validar integridad del modelo
        ↓
[MOMENTO 3] Flujogramas Lógicos & North Star Metrics
        ↓
      Etapa 04 (UX Experience)
```

---

## Los 3 momentos — cuándo activar cada uno

### Momento 1 — Service Blueprint & Actor Journey Logic
**Archivo:** `skills/momento_1_blueprint.md`
**Objetivo:** Conectar las acciones del usuario (Frontstage) con la maquinaria interna (Backstage).
**Produce:** Service Blueprint con capas de: Evidencia Física, Acciones del Cliente, Frontstage, Backstage y Procesos de Soporte.

### Momento 2 — Entidades de Datos & Business Rules
**Archivo:** `skills/momento_2_entities_rules.md`
**Objetivo:** Definir el "Diccionario" del sistema y las leyes que lo rigen.
**Produce:** 
1. **Data Schema (Lite):** Listado de entidades, atributos y relaciones (1:N, N:N).
2. **Business Rules Matrix:** Matriz de condiciones y consecuencias (If/Then).

### Momento 3 — Flujogramas Lógicos & North Star Metrics
**Archivo:** `skills/momento_3_flows_metrics.md`
**Objetivo:** Visualizar el movimiento de la información y definir el éxito.
**Produce:**
1. **Logical Flowcharts (Mermaid):** Diagramas de secuencia y flujo lógico.
2. **Product KPI Strategy:** Definición de North Star Metric y métricas de soporte (HEART/AARRR).

---

## Criterio de calidad para cerrar esta etapa

- [ ] El Service Blueprint cubre el 100% de los flujos críticos definidos en Etapa 01.
- [ ] No existen "Cajas Negras" en el Backstage (procesos sin responsable o sistema).
- [ ] El modelo de datos es consistente con las necesidades técnicas de la Etapa 02.
- [ ] Las reglas de negocio contemplan los casos de error (Edge Cases).

---

## Protocolo de Memoria — Etapa 03

**Al iniciar:** Buscar en `Engram MCP` por `sa-` (System Analysis) para entender los límites técnicos.

**Al cerrar cada Momento:**
- Momento 1 → Eje: `pl-service-blueprint` (tipo: `arquitectura`)
- Momento 2 → Eje: `pl-business-rules` (tipo: `decisión`)
- Momento 3 → Eje: `pl-north-star-metric` (tipo: `estrategia`)

---
*Framework Baraldi v2.25.11 · skills/methodology/03_product_logic/SKILL.md*
