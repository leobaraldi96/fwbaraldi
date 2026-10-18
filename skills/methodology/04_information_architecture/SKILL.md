---
name: information-architecture
description: >
  Ejecuta la Etapa 04 (Information Architecture) del Framework Baraldi.
  Define la estructura, navegación y taxonomía del producto.
  Keywords: information architecture, sitemap, user flow, taxonomía, navegación, content inventory.
  Activar cuando se cierre la Etapa 03 o se necesite estructurar la navegación.
version: "2.31.0"
framework: Baraldi
stage: "04"
stage_name: "Information Architecture"
status: operational
---

# Etapa 04 - Information architecture

> **Objetivo:** Definir el "mapa y la taxonomía" del producto. Organizar la información para que sea encontrable y estructurar los flujos de navegación que conectan la lógica con la experiencia final.

---

## NEVER List - Anti-patrones de la Etapa 04
El Agente debe **bloquear** el proceso si detecta:

1. **NEVER realices una "poda de datos":** Toda actualización debe ser aditiva. No resumas ni limpies información validada anteriormente.
2. **NEVER generes sitemaps "genéricos":** La alta resolución es mandatoria. Mapea cada sección, estado y atributo técnico discutido.
3. **NEVER ignores la omnipresencia de actores:** Los flujos deben mostrar la interacción de todos los actores definidos (Front vs Backstage).
4. **NEVER permitas inconsistencias terminológicas:** Si un término está en el Glosario (M04), debe ser idéntico en todo el sistema.
5. **NEVER omitas los estados de los objetos core:** La State Machine es obligatoria para entender el ciclo de vida del producto.
6. **NEVER permitas navegación de más de 3 clics:** Las tareas críticas deben ser eficientes y directas.

## ALWAYS List - Mandatos de comportamiento
- **Siempre** busca expandir y redundar el detalle informativo antes de sintetizar.
- **Siempre** verifica la integridad del sitemap para no borrar ramas validadas por accidente.
- **Siempre** integra activamente el Actor Map de las etapas 02/03 en los flujos de usuario.
- **Siempre** justifica la navegación basada en modelos mentales y carga cognitiva.

---

## Flujo de la etapa - 4 momentos en secuencia

```
[MOMENTO 1] Sitemap & navigation strategy (skills/momento_1_sitemap.md)
        ↓
  Validar jerarquía de información
        ↓
[MOMENTO 2] User flows & interaction paths (skills/momento_2_user_flows.md)
        ↓
  Validar caminos críticos
        ↓
[MOMENTO 3] Data taxonomy & content inventory (skills/momento_3_data_taxonomy.md)
        ↓
[MOMENTO 4] Vocabulary foundations & object states (skills/momento_4_vocabulary.md)
        ↓
       Etapa 05 - Interaction design / UX (../05_interaction_design_ux/SKILL.md)
```

---

## Los 4 momentos - cuándo activar cada uno

### Momento 1 - Sitemap & navigation strategy
**Archivo:** `skills/momento_1_sitemap.md`
**Activar cuando:** Se cierra la Etapa 03 (`../03_product_logic/SKILL.md`).
**Objetivo:** Definir el inventario de vistas y la jerarquía de navegación.
**Produce:**
1. **Sitemap visual (Mermaid):** Estructura jerárquica de páginas y subsecciones.
2. **Navigation Model:** Definición de niveles de navegación (global, local, contextual).
3. **`PRODUCT_MASTER_MATRIX.md`:** Actualización del artefacto de trazabilidad (`../../toolbox/product_master_matrix_protocol/SKILL.md`) con el listado de pantallas y sus prioridades de negocio.

### Momento 2 - User flows & interaction paths
**Archivo:** `skills/momento_2_user_flows.md`
**Activar cuando:** El Sitemap y el Navigation Model están aprobados.
**Objetivo:** Mapear el recorrido del usuario para completar tareas críticas, integrando a todos los actores involucrados.
**Reglas de proactividad:**
- **Mandato de omnipresencia de actores:** Es OBLIGATORIO consultar el Actor Map (Etapas 02/03) antes de iniciar. Los flujos no son "aislados"; deben mostrar la interacción entre el actor principal, actores secundarios y el sistema (backstage).
- **Cobertura de escenarios:** No se limita al "happy path". El Agente DEBE proponer y documentar proactivamente flujos de error, estados vacíos y bifurcaciones de decisión sin que el humano lo pida.
**Produce:**
1. **Multi-Actor Flows (Mermaid):** Diagramas de flujo que integran carriles (swimlanes) o nodos de interacción para todos los actores implicados.
2. **Edge Case Matrix:** Inventario de puntos de fricción, errores y decisiones críticas.

### Momento 3 - Data taxonomy & content inventory
**Archivo:** `skills/momento_3_data_taxonomy.md`
**Activar cuando:** Los User Flows y la Edge Case Matrix están aprobados.
**Objetivo:** Organizar el contenido y los atributos de información.
**Produce:**
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
1. **Content Inventory Matrix:** Listado de elementos informativos por vista.
2. **Taxonomy Schema:** Clasificación de datos (categorías, etiquetas, metadatos).

### Momento 4 - Vocabulary foundations & object states
**Archivo:** `skills/momento_4_vocabulary.md`
**Activar cuando:** La matriz de inventario de contenido y la taxonomía están aprobadas.
**Objetivo:** Garantizar la consistencia terminológica y lógica de los estados del sistema.
**Reglas de consistencia:**
- **Blindaje de lenguaje:** Establecer el nombre oficial de cada entidad para evitar sinonimia confusa en la interfaz.
- **Lógica de estados:** Definir el ciclo de vida de los objetos principales (ej: Pedido, Usuario, Contenido).
- **Mandato de sincronización retroactiva (P0):** Dado que este momento establece la "fuente de verdad" terminológica, el Agente tiene la **OBLIGACIÓN PROACTIVA** de proponer y ejecutar la revisión de los artefactos de los Momentos 01, 02 y 03 (Sitemap, Flows y Taxonomía). Se debe asegurar que la nomenclatura y los estados coincidan al 100% con el Glosario y la State Machine antes de cerrar la etapa.
**Produce:**
1. **Product Glossary:** Tabla de términos críticos, definiciones y etiquetas de interfaz prohibidas vs. sugeridas.
2. **Object State Machine:** Matriz de estados y transiciones para las entidades core del negocio.
3. **Notification Trigger Map:** Definición de puntos de contacto (Push, Email) basados en cambios de estado o hitos de navegación.

---

## Motores integrados (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **UX Writing Engine (`../05_interaction_design_ux/skills/engines/ux_writing_engine/SKILL.md`):** Aplicar para asegurar precisión semántica en taxonomías y glosarios.
2. **Design Critique Engine (`../06_visual_design_ui/skills/engines/design_critique_engine/SKILL.md`):** Aplicar para validar la arquitectura con stakeholders o como auditoría crítica interna.
3. **Layers Interaction Engine (`../05_interaction_design_ux/skills/engines/layers_interaction_engine/SKILL.md`):** Mandatorio para el **Momento 2**. Asegura que los flujos cubran validaciones, estados de error y todos los actores definidos.
4. **User Story Engine (`skills/engines/user_story_engine/SKILL.md`):** Mandatorio para el **cierre de Etapa 04**. Transforma los flujos aprobados en tickets BDD listos para desarrollo. Aplicar siempre las **3 reglas de oro**: (1) **INVEST** - cada story debe ser Independent, Negotiable, Valuable, Estimable, Small y Testable; (2) **Sin supuestos** - si no está en el AC no se desarrolla; (3) **Diseño incluido** - nunca handoffear sin link al diseño aprobado en Figma.

---

## Criterio de calidad para cerrar esta etapa

- [ ] El Sitemap tiene **alta resolución**: incluye subsecciones, estados y atributos específicos.
- [ ] No ha habido **degradación de información**: los nuevos cambios sumaron valor sin podar lo anterior.
- [ ] Los User Flows cubren el **100% de los actores** relevantes definidos en la Etapa 03.
- [ ] Se han mapeado proactivamente los **edge cases** y estados de error.
- [ ] La taxonomía de datos es coherente con el esquema de base de datos de la Etapa 03.
- [ ] Se ha definido un **glosario de términos críticos** para asegurar la consistencia del lenguaje.
- [ ] **Auditoría de consistencia:** Se ha verificado que el Sitemap, los Flows y la Taxonomía (M01-M03) utilizan el lenguaje oficial definido en el Glosario (M04).
- [ ] Los **estados de los objetos** core están mapeados (State Machine).
- [ ] La navegación permite acceder a secciones clave en menos de 3 clics.
- [ ] Se han identificado y mapeado todos los puntos de decisión del usuario.

---

## Protocolo de memoria y handoff - Etapa 04

**Al iniciar:** Buscar en `Engram MCP` por `pl-` (Product Logic) para asegurar consistencia con el Blueprint.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 1 | `ia-sitemap-structure` | `arquitectura` | Sitemap de alta resolución, modelo de navegación y matriz maestra |
| Momento 2 | `ia-user-flows` | `diseño` | Flujos multi-actor y matriz de edge cases |
| Momento 3 | `ia-taxonomy-content` | `estructural` | Inventario de contenido por vista y esquema de taxonomía |
| Momento 4 | `ia-vocabulary-states` | `ux-writing` | Glosario oficial de producto, State Machine y mapa de notificaciones |

**Al cerrar la etapa (Handoff hacia Etapa 05):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de progreso: `[x] 03 Product Logic -> [x] 04 Information Architecture -> [ ] 05 Interaction Design (UX)`.
3. Proponer activamente la carga de `../05_interaction_design_ux/SKILL.md` pasando los hallazgos `ia-` como input obligatorio.

---
## Protocolo de mentoría y co-creación (E04)
En la fase de arquitectura, el Agente actúa como un **arquitecto de información mentor**:
*   **Justificación de navegación:** Al proponer una estructura, explicar el **modelo mental** (ej. *"Propongo una navegación lateral porque tu producto tiene muchas herramientas paralelas que requieren acceso rápido, evitando la fatiga de clics"*).
*   **Gestión de carga cognitiva:** Desafiar al usuario si una sección tiene demasiados niveles o ítems: *"Estamos superando la regla de 7 elementos; ¿podemos agrupar estos conceptos para no abrumar al usuario?"*.
*   **Pedagogía de taxonomía:** No solo definir términos, sino explicar por qué ciertas palabras facilitan la **encontrabilidad (findability)** basada en el perfil de usuario de la Etapa 01.
*   **Construcción coherente:** Asegurar que el humano entienda que lo que decidimos aquí es el "esqueleto" que sostendrá toda la UI posterior.

---
*Framework Baraldi v2.31.0 · skills/methodology/04_information_architecture/SKILL.md*
