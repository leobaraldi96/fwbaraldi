---
name: information-architecture
description: >
  Ejecuta la Etapa 04 (Information Architecture) del Framework Baraldi.
  Define la estructura, navegación y taxonomía del producto.
  Keywords: information architecture, sitemap, user flow, taxonomía, navegación, content inventory.
  Activar cuando se cierre la Etapa 03 o se necesite estructurar la navegación.
version: "2.25.25"
framework: Baraldi
stage: "04"
stage_name: "Information Architecture"
status: operational
---

# Etapa 04 — Information Architecture

> **Objetivo:** Definir el "Mapa y la Taxonomía" del producto. Organizar la información para que sea encontrable y estructurar los flujos de navegación que conectan la lógica con la experiencia final.

---

## ⚡ Reglas de Comportamiento Críticas (Anti-Degradación)

Para evitar la "poda de datos" y la pérdida de resolución sistémica detectada en versiones anteriores, el Agente debe seguir estas reglas bajo pena de fallo metodológico:

1. **Mandato de Alta Resolución (Deep Mapping):** Queda terminantemente prohibido generar sitemaps o inventarios "genéricos". Se debe mapear cada sección, subsección, estado y atributo técnico discutido en la Etapa 03. Si una sección es "estándar" (ej: Auth, Perfil), se mapea con todo su detalle, no se omite por obviedad.
2. **Prohibición de Resumen/Poda (Anti-Reductive Rule):** Toda actualización de los archivos de esta etapa debe ser **ADITIVA**. Queda prohibido eliminar, resumir o "limpiar" información previa sin un pedido explícito del humano. Si el humano pide un cambio en el Flujo A, el Flujo B debe permanecer intacto y con su resolución original.
3. **Estrategia de Redundancia:** En esta etapa, el objetivo es **Expandir, Redundar y Documentar**. Es preferible el exceso de detalle que la síntesis. La síntesis es para el humano; la documentación es para el sistema.
4. **Verificación de Integridad Pre-Guardado:** Antes de aplicar un `replace_file_content` o crear una nueva versión, el Agente debe auto-auditar que no ha "borrado por accidente" ninguna rama del sitemap o paso del flujo anteriormente validado.

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
**Objetivo:** Mapear el recorrido del usuario para completar tareas críticas, integrando a todos los actores involucrados.
**Reglas de Proactividad:**
- **Mandato de Omnipresencia de Actores:** Es OBLIGATORIO consultar el Actor Map (Etapa 02/03) antes de iniciar. Los flujos no son "aislados"; deben mostrar la interacción entre el Actor Principal, Actores Secundarios y el Sistema (Backstage).
- **Cobertura de Escenarios:** No se limita al "Happy Path". El Agente DEBE proponer y documentar proactivamente flujos de error, estados vacíos y bifurcaciones de decisión sin que el humano lo pida.
**Produce:** 
1. **Multi-Actor Flows (Mermaid):** Diagramas de flujo que integran carriles (swimlanes) o nodos de interacción para todos los actores implicados.
2. **Edge Case Matrix:** Inventario de puntos de fricción, errores y decisiones críticas.

### Momento 3 — Data Taxonomy & Content Inventory
**Objetivo:** Organizar el contenido y los atributos de información.
**Produce:**
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
1. **Content Inventory Matrix:** Listado de elementos informativos por vista.
2. **Taxonomy Schema:** Clasificación de datos (categorías, etiquetas, metadatos).

---

## Criterio de calidad para cerrar esta etapa

- [ ] El Sitemap tiene **Alta Resolución**: incluye subsecciones, estados y atributos específicos.
- [ ] No ha habido **Degradación de Información**: los nuevos cambios sumaron valor sin podar lo anterior.
- [ ] Los User Flows cubren el **100% de los Actores** relevantes definidos en la Etapa 03.
- [ ] Se han mapeado proactivamente los **Edge Cases** y estados de error.
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
*Framework Baraldi v2.25.25 · skills/methodology/04_information_architecture/SKILL.md*
