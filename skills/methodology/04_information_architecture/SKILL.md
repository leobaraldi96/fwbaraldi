---
name: information-architecture
description: >
  Ejecuta la Etapa 04 (Information Architecture) del Framework Baraldi.
  Define la estructura, navegación y taxonomía del producto.
  Keywords: information architecture, sitemap, user flow, taxonomía, navegación, content inventory.
  Activar cuando se cierre la Etapa 03 o se necesite estructurar la navegación.
version: "2.26.4"
framework: Baraldi
stage: "04"
stage_name: "Information Architecture"
status: operational
---

# Etapa 04 — Information Architecture

> **Objetivo:** Definir el "Mapa y la Taxonomía" del producto. Organizar la información para que sea encontrable y estructurar los flujos de navegación que conectan la lógica con la experiencia final.

---

## 🚫 NEVER List — Anti-patrones de la Etapa 04
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER realices una "Poda de Datos":** Toda actualización debe ser aditiva. No resumas ni limpies información validada anteriormente.
2.  **NEVER generes sitemaps "genéricos":** La alta resolución es mandatoria. Mapea cada sección, estado y atributo técnico discutido.
3.  **NEVER ignores la omnipresencia de actores:** Los flujos deben mostrar la interacción de todos los actores definidos (Front vs Backstage).
4.  **NEVER permitas inconsistencias terminológicas:** Si un término está en el Glosario (M04), debe ser idéntico en todo el sistema.
5.  **NEVER omitas los estados de los objetos core:** La State Machine es obligatoria para entender el ciclo de vida del producto.
6.  **NEVER permitas navegación de más de 3 clics:** Las tareas críticas deben ser eficientes y directas.

## ✅ ALWAYS List — Mandatos de Comportamiento
- **Siempre** busca expandir y redundar el detalle informativo antes de sintetizar.
- **Siempre** verifica la integridad del sitemap para no borrar ramas validadas por accidente.
- **Siempre** integra activamente el Actor Map de las etapas 02/03 en los flujos de usuario.
- **Siempre** justifica la navegación basada en modelos mentales y carga cognitiva.

---

## Flujo de la etapa — 4 momentos en secuencia

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
[MOMENTO 4] Vocabulary Foundations & Object States
        ↓
      Etapa 05 (Visual Design / UI)
```

---

## Los 4 momentos — cuándo activar cada uno

### Momento 1 — Sitemap & Navigation Strategy
**Objetivo:** Definir el inventario de vistas y la jerarquía de navegación.
**Produce:** 
1. **Sitemap Visual (Mermaid):** Estructura jerárquica de páginas y subsecciones.
2. **Navigation Model:** Definición de niveles de navegación (Global, Local, Contextual).
3. **[NUEVO] PRODUCT_MASTER_MATRIX.md:** Inicialización del artefacto de trazabilidad (Skill 39) con el listado de pantallas y sus prioridades de negocio.

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

### Momento 4 — Vocabulary Foundations & Object States
**Objetivo:** Garantizar la consistencia terminológica y lógica de los estados del sistema.
**Reglas de Consistencia:**
- **Blindaje de Lenguaje:** Establecer el nombre oficial de cada entidad para evitar sinonimia confusa en la interfaz.
- **Lógica de Estados:** Definir el ciclo de vida de los objetos principales (ej: Pedido, Usuario, Contenido).
- **Mandato de Sincronización Retroactiva (P0):** Dado que este momento establece la "Fuente de Verdad" terminológica, el Agente tiene la **OBLIGACIÓN PROACTIVA** de proponer y ejecutar la revisión de los artefactos de los Momentos 01, 02 y 03 (Sitemap, Flows y Taxonomía). Se debe asegurar que la nomenclatura y los estados coincidan al 100% con el Glosario y la State Machine antes de cerrar la etapa.
**Produce:** 
1. **Product Glossary:** Tabla de términos críticos, definiciones y etiquetas de interfaz prohibidas vs. sugeridas.
2. **Object State Machine:** Matriz de estados y transiciones para las entidades core del negocio.
3. **Notification Trigger Map:** Definición de puntos de contacto (Push, Email) basados en cambios de estado o hitos de navegación.

---

## 🛠️ Motores Integrados (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **UX Writing Engine (`../05_interaction_design_ux/skills/ux_writing_engine/`):** Aplicar para asegurar precisión semántica en taxonomías y glosarios.
2. **Design Critique Engine (`../06_visual_design_ui/skills/design_critique_engine.md`):** Aplicar para validar la arquitectura con stakeholders o como auditoría crítica interna.
3. **Layers Interaction Engine (`../05_interaction_design_ux/skills/layers_interaction_engine/`):** Mandatorio para el **Momento 2**. Asegura que los flujos cubran validaciones, estados de error y todos los actores definidos.
4. **User Story Engine (`skills/engines/user_story_engine/`):** Mandatorio para el **cierre de Etapa 04**. Transforma los flujos aprobados en tickets BDD listos para desarrollo. Aplicar siempre las **3 Reglas de Oro**: (1) **INVEST** — cada story debe ser Independent, Negotiable, Valuable, Estimable, Small y Testable; (2) **Sin Supuestos** — si no está en el AC no se desarrolla; (3) **Diseño Incluido** — nunca handoffear sin link al diseño aprobado en Figma.

---

## Criterio de calidad para cerrar esta etapa

- [ ] El Sitemap tiene **Alta Resolución**: incluye subsecciones, estados y atributos específicos.
- [ ] No ha habido **Degradación de Información**: los nuevos cambios sumaron valor sin podar lo anterior.
- [ ] Los User Flows cubren el **100% de los Actores** relevantes definidos en la Etapa 03.
- [ ] Se han mapeado proactivamente los **Edge Cases** y estados de error.
- [ ] La taxonomía de datos es coherente con el esquema de base de datos de la Etapa 03.
- [ ] Se ha definido un **Glosario de Términos Críticos** para asegurar la consistencia del lenguaje.
- [ ] **Auditoría de Consistencia:** Se ha verificado que el Sitemap, los Flows y la Taxonomía (M01-M03) utilizan el lenguaje oficial definido en el Glosario (M04).
- [ ] Los **Estados de los Objetos** core están mapeados (State Machine).
- [ ] La navegación permite acceder a secciones clave en menos de 3 clics.
- [ ] Se han identificado y mapeado todos los puntos de decisión del usuario.

---

## Protocolo de Memoria — Etapa 04

**Al iniciar:** Buscar en `Engram MCP` por `pl-` (Product Logic) para asegurar consistencia con el Blueprint.

**Al cerrar cada Momento:**
- Momento 1 → Eje: `ia-sitemap-structure` (tipo: `arquitectura`)
- Momento 2 → Eje: `ia-user-flows` (tipo: `diseño`)
- Momento 3 → Eje: `ia-taxonomy-content` (tipo: `estructural`)
- Momento 4 → Eje: `ia-vocabulary-states` (tipo: `ux-writing`)

---
## 🧠 Protocolo de Mentoría y Co-creación (E04)
En la fase de arquitectura, el Agente actúa como un **Arquitecto de Información Mentor**:
*   **Justificación de Navegación:** Al proponer una estructura, explicar el **Modelo Mental** (ej. *"Propongo una navegación lateral porque tu producto tiene muchas herramientas paralelas que requieren acceso rápido, evitando la fatiga de clics"*).
*   **Gestión de Carga Cognitiva:** Desafiar al usuario si una sección tiene demasiados niveles o ítems: *"Estamos superando la regla de 7 elementos; ¿podemos agrupar estos conceptos para no abrumar al usuario?"*.
*   **Pedagogía de Taxonomía:** No solo definir términos, sino explicar por qué ciertas palabras facilitan la **Encontrabilidad (Findability)** basada en el perfil de usuario de la Etapa 01.
*   **Construcción Coherente:** Asegurar que el humano entienda que lo que decidimos aquí es el "esqueleto" que sostendrá toda la UI posterior.

---
*Framework Baraldi v2.26.3 · skills/methodology/04_information_architecture/SKILL.md*
