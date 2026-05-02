---
name: information-architecture
description: >
  Ejecuta la Etapa 04 (Information Architecture) del Framework Baraldi.
  Define la estructura, navegación y taxonomía del producto.
  Keywords: information architecture, sitemap, user flow, taxonomía, navegación, content inventory.
  Activar cuando se cierre la Etapa 03 o se necesite estructurar la navegación.
version: "2.25.13"
framework: Baraldi
stage: "04"
stage_name: "Information Architecture"
status: operational
---

# Etapa 04 — Information Architecture

> **Objetivo:** Definir el "Mapa y la Taxonomía" del producto. Organizar la información para que sea encontrable y estructurar los flujos de navegación que conectan la lógica con la experiencia final.

---

## Flujo de la etapa — 3 momentos en secuencia

```
[MOMENTO 1] Sitemap & Navigation Strategy
        ↓
  Validar jerarquía de información
        ↓
[MOMENTO 2] User Flows & Interaction Paths
        ↓
  Validar caminos críticos
        ↓
[MOMENTO 3] Data Taxonomy & Content Inventory
        ↓
      Etapa 05 (Visual Design / UI)
```

---

## Los 3 momentos — cuándo activar cada uno

### Momento 1 — Sitemap & Navigation Strategy
**Objetivo:** Definir el inventario de vistas y la jerarquía de navegación.
**Produce:** 
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
1. **Sitemap Visual (Mermaid):** Estructura jerárquica de páginas y subsecciones.
2. **Navigation Model:** Definición de niveles de navegación (Global, Local, Contextual).

### Momento 2 — User Flows & Interaction Paths
**Objetivo:** Mapear el recorrido del usuario para completar tareas críticas.
**Produce:** 
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
1. **Critical Path Flows (Mermaid):** Diagramas de flujo de tareas (ej: "Proceso de compra").
2. **Decision Points Map:** Identificación de momentos donde el usuario debe elegir o validar datos.

### Momento 3 — Data Taxonomy & Content Inventory
**Objetivo:** Organizar el contenido y los atributos de información.
**Produce:**
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
1. **Content Inventory Matrix:** Listado de elementos informativos por vista.
2. **Taxonomy Schema:** Clasificación de datos (categorías, etiquetas, metadatos).

---

## Criterio de calidad para cerrar esta etapa

- [ ] El Sitemap cubre todas las funcionalidades definidas en la Etapa 03.
- [ ] Los User Flows resuelven los caminos de error y estados vacíos (empty states).
- [ ] La taxonomía de datos es coherente con el esquema de base de datos de la Etapa 03.
- [ ] La navegación permite acceder a secciones clave en menos de 3 clics.
- [ ] Se han identificado y mapeado todos los puntos de decisión del usuario.

---

## Protocolo de Memoria — Etapa 04

**Al iniciar:** Buscar en `Engram MCP` por `pl-` (Product Logic) para asegurar consistencia con el Blueprint.

**Al cerrar cada Momento:**
- Momento 1 → Eje: `ia-sitemap-structure` (tipo: `arquitectura`)
- Momento 2 → Eje: `ia-user-flows` (tipo: `diseño`)
- Momento 3 → Eje: `ia-taxonomy-content` (tipo: `estructural`)

---
*Framework Baraldi v2.25.13 · skills/methodology/04_information_architecture/SKILL.md*
