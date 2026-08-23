---
name: product-knowledge-compiler-protocol
description: >
  Protocolo de ingeniería de información para compilar la inteligencia de las Etapas 01 a 07
  en artefactos de Centro de Ayuda (KNOWLEDGE.md), manuales de usuario y RAG Copilots,
  con taxonomía cognitiva estricta (Concept vs. Task), pipeline de Continuous DocOps,
  validación Fresh Clone, adaptadores de exportación e internacionalización bajo normas ISO/IEC/IEEE 26514/26515.
keywords: knowledge base, help center, fresh clone test, nielsen norman 79 rule, anti-rot law, concept vs task, memory types, continuous docops, component translation, block diffing, iso 26514, information mapping, precision content, i18n, l10n, single sourcing, mintlify, zendesk, intercom, rag chunks, cx, onboarding, troubleshooting
version: "2.28.0"
---

# Protocolo — Compilador de Base de Conocimiento y Ayuda de Producto

Este protocolo actúa como un **Lead Information Architect & Technical Documentation Engineer**. Su objetivo es eliminar el **"Handoff Ciego"** hacia los equipos de CX, Soporte y Documentación, compilando la inteligencia estructurada de las Etapas 01 a 07 del **Framework Baraldi** bajo estándares mundiales de ingeniería de información (**ISO/IEC/IEEE 26514/26515**), psicología cognitiva (separación estricta entre Memoria Semántica y Memoria Procedimental), mantenimiento continuo de bloques (*Continuous DocOps*) y adaptadores de publicación multicanal.

---

## 1. Modelado Semántico de la Información & Taxonomía Cognitiva

La compilación prohíbe la prosa plana indiferenciada; estructura el contenido bajo principios de neurociencia cognitiva y arquitectura de información:

### A. La Regla del 79% (Nielsen Norman Group) & Lenguaje para la Información
* **Diseño para el Escaneo:** El 79% de los usuarios web nunca lee palabra por palabra; escanea visualmente en busca de soluciones rápidas.
* **Propósito:** El contenido no busca entretener; está diseñado para **encontrar la respuesta, ejecutar y detener la lectura de inmediato**.
* **La Ley Anti-Putrefacción (*Anti-Rot Principle*):** Prohibido sobre-documentar micro-detalles efímeros de código o UI volátiles que se pudren con un simple hotfix. Documentar arquitecturas, flujos de datos, modelos mentales e invariantes de negocio.

### B. Taxonomía Cognitiva: Separación Estricta entre Concepto y Tarea
Mezclar conceptos y tareas en una misma sección es la causa principal de abandono de lectura y alucinaciones en motores RAG:

| Dimensión | 📘 Concepto (Concept) | 🛠️ Tarea / Procedimiento (Task) |
| :--- | :--- | :--- |
| **Intención del usuario** | Asimilar teoría, reglas y modelos mentales. | Completar un objetivo práctico en el menor tiempo. |
| **Pregunta clave** | *¿Qué es esto y por qué existe?* | *¿Cómo logro hacer esto en el sistema?* |
| **Memoria activada** | **Memoria Semántica** (conocimiento abstracto). | **Memoria Procedimental** (acción automática). |
| **Carga cognitiva** | Alta (requiere atención y lectura reflexiva). | Mínima (escaneo visual rápido y ejecución directa). |
| **Estructura** | Párrafos descriptivos breves, diagramas y mapas. | Listas numeradas bajo la regla *"Un paso = Una acción"*. |
| **Voz y Tratamiento** | Tercera persona neutra o expositiva. | Segunda persona directa e imperativa (*"Haz clic", "Ingresa"*). |
| **Impacto en RAG** | Indexado como `<concept>` para preguntas de alcance. | Indexado como `<task>` con cero ruido conceptual. |

### C. Information Mapping® (Robert Horn) & Límite Digital
* **Regla de Pantalla ($5 \pm 1$ ítems):** Basada en la Ley de Miller, la legibilidad en pantallas digitales exige un límite estricto de máximo **5 o 6 viñetas por lista, filas de tabla o bloques por sección** para mitigar la sobrecarga cognitiva.
* **Tipificación Estricta en 6 Bloques de Información:**
  1. **Procedimiento (Task):** Instrucciones secuenciales ("¿Cómo lo hago?").
  2. **Proceso:** Flujo y funcionamiento sistémico ("¿Cómo opera el sistema?").
  3. **Principio:** Reglas, límites y políticas no negociables ("¿Cuáles son los guardrails?").
  4. **Concepto (Concept):** Definición ontológica ("¿Qué es este objeto?").
  5. **Estructura:** Anatomía de pantalla o partes componentes ("¿Cómo está compuesto?").
  6. **Hecho:** Datos concretos, URLs, parámetros o especificaciones fijas.

### D. Precision Content (Rob Hanna) & Cuadrantes Diátaxis
* **Propósito Único:** Cada bloque de información tiene un único propósito técnico y un solo tipo de respuesta esperada.
* **Separación Absoluta Diátaxis:** Prohibido mezclar explicaciones teóricas ("Explicación") o tablas de API ("Referencia") dentro de una guía paso a paso ("Guía de tareas" / *How-to*).

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│       ARTEFACTOS FW BARALDI          │     │    BASE DE CONOCIMIENTO (CX / AI)    │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ E01: Problem Framing / Pitch / JTBD  │ --> │ FAQ Comercial, Landing, Quickstart   │
│ E02: Actor Map / Service Blueprint   │ --> │ Manuales de Usuario por Rol/Actor    │
│ E03: Business Rules / Logic Matrix   │ --> │ Troubleshooting (Matriz Blameless)   │
│ E04: Sitemap / Taxonomía / Glosario  │ --> │ Glosario y Taxonomía del Help Center │
│ E05: Interaction Flows / States      │ --> │ Guías Procedimentales ("Cómo hacer") │
│ E06: VOICE.md & DESIGN.md            │ --> │ Tono Contextual & Copilot Prompts    │
│ E07: QA Checklist & Edge Cases       │ --> │ Matriz de Errores y Recuperación     │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

---

## 2. Estándares de Calidad Internacionales (ISO/IEC/IEEE 2651x) & Fresh Clone Test

El compilador evalúa los entregables contra la norma **ISO/IEC/IEEE 26514:2022** asegurando los 8 atributos de calidad:

1. **Usabilidad:** Orientada a la tarea inmediata del usuario.
2. **Claridad:** Comprensión sin ambigüedades en la primera lectura.
3. **Accesibilidad:** WCAG compliant, lectura en lectores de pantalla y enlaces descriptivos.
4. **Corrección:** Concordancia técnica 1:1 con el código y diseño.
5. **Consistencia:** Vocabulario unívoco heredado de la Etapa 04.
6. **Comprensibilidad:** Nivel de lectura equivalente a 8º grado.
7. **Concisión:** Eliminación de cualquier palabra que no aporte a la resolución.
8. **Minimalismo:** Solo la información necesaria para el momento enseñable.

> **Auditoría de Usabilidad — "Fresh Clone Test":** Toda guía técnica o procedimiento debe ser ejecutable por un miembro nuevo del equipo o agente en un entorno limpio sin asunciones implícitas. Si el lector debe preguntar *"¿de dónde saco esto?"*, la guía se considera fallida.

---

## 3. Higiene Lingüística y Filtros Anti-Slop

La IA aplicará filtros automáticos de rechazo ante las siguientes violaciones de estilo:

| Categoría | Palabras y Patrones Prohibidos | Corrección Obligatoria |
| :--- | :--- | :--- |
| **Adjetivos Promocionales** | *robusto, potente, innovador, revolucionario, líder, vanguardia* | Eliminar de raíz. Describir la función objetiva. |
| **Adverbios Condescendientes**| *simplemente, fácilmente, obviamente, por supuesto, rápidamente, sencillamente* | Erradicar. Nunca asumir la destreza del usuario. |
| **Rellenos Sintácticos** | *en orden a, apalancar, con el fin de, proceder a* | Usar verbos directos: *para, usar, hacer*. |
| **Voz Pasiva** | *"Los cambios son guardados por el sistema"* | Voz activa: *"El sistema guarda los cambios"*. |
| **Longitud de Oraciones** | Oraciones de más de 25 palabras | Dividir en dos oraciones independientes. |
| **Enlaces Genéricos** | *"haz clic aquí"*, *"más info"* | Enlace descriptivo: *"Descarga la plantilla CSV"*. |

---

## 4. Directivas de Internacionalización y Diseño i18n-Ready (L10n Engineering)

El contenido base debe redactarse bajo estándares que faciliten la traducción automática (Machine Translation) y humana sin romper interfaces ni inflar costos:

* **Filtro "Clean Source" (Cero Localismos):** Prohibido el uso de modismos, refranes, analogías culturales o jerga regional. El texto base debe ser culturalmente neutro.
* **La Regla de la Cursiva (Machine Translation Protection):** Prohibido usar cursivas para enfatizar en el cuerpo del texto (los motores de traducción suelen interpretarlas como código o nombres propios no traducibles). La cursiva se reserva **exclusivamente para datos de entrada exactos del usuario** (`*tu-nombre*`).
* **Regla del +30% de Expansión de Texto:** Toda guía o micro-artículo debe contemplar una holgura del 30% en espacio visual para absorber el crecimiento natural de palabras al traducir a español, alemán o francés.
* **Parametrización de Formatos Regionales:** No quemar formatos estáticos en el texto; utilizar marcadores de posición para:
  - Fechas: `{DATE_FORMAT}` (`DD/MM/AAAA` vs `MM/DD/AAAA`).
  - Monedas y separadores: `{CURRENCY_SYMBOL}`, `{DECIMAL_SEPARATOR}` (`.` vs `,`).
  - Unidades: `{METRIC_UNIT}` vs `{IMPERIAL_UNIT}`.
* **Traducción a Nivel de Bloque Modular (*Single-Source*):** La actualización de un procedimiento solo re-traduce el Bloque de Información afectado, preservando las Memorias de Traducción (TM) y reduciendo costos hasta en un 80%.
* **Universalidad Visual:** Iconografía universal sin gestos corporales; numeración de ilustraciones (*"Figura 1.2"*) evitando incrustar texto quemado dentro de las imágenes.

---

## 5. Pipeline de Traducción Atómica de Bloques (Continuous DocOps)

Para resolver el problema del software que cambia constantemente y desincroniza manuales monolíticos, el compilador opera bajo el ciclo de **Traducción de Componentes**:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│              CONTINUOUS DOCOPS PIPELINE (Traducción Atómica)                     │
└────────────────────────────────────────┬─────────────────────────────────────────┘
                                         │
                                         ▼
1. Fragmentación Semántica ────────► División en bloques atómicos (Procedimiento, Concepto, etc.)
                                         │
                                         ▼
2. Hashing & Metadatos     ────────► Asignación de `block_id`, `hash` de contenido y estado i18n
                                         │
                                         ▼
3. Single-Sourcing         ────────► Redactado una sola vez; referenciado en múltiples salidas
                                         │
                                         ▼
4. Detección de Cambios    ────────► Diffing automatizado: identifica solo el bloque modificado
                                         │
                                         ▼
5. Localización Aislada    ────────► Envío exclusivo del bloque modificado (<100 palabras)
                                         │
                                         ▼
6. Propagación Multicanal  ────────► Actualización simultánea en Web, PDF y Vector DB (RAG)
```

### Esquema de Metadatos de Bloque Atómico
```json
{
  "block_id": "blk_auth_mfa_setup",
  "version": "1.2.0",
  "hash": "e3b0c44298fc1c149afbf4c8996fb924",
  "diataxis_type": "how-to",
  "info_type": "procedure",
  "locales": {
    "es": { "status": "synced", "updated_at": "2026-08-23" },
    "en": { "status": "synced", "updated_at": "2026-08-23" },
    "pt": { "status": "pending", "updated_at": "2026-08-20" }
  },
  "token_count": 94
}
```

---

## 6. Adaptadores de Destino de Publicación (Target Publishing Adapters)

Al invocar el compilador, la IA pregunta el destino de publicación para formatear la salida con la sintaxis exacta requerida:

### Adaptador 1: Docs-as-Code (Mintlify / Docusaurus / Nextra)
* **Formato:** Archivos `.mdx` segmentados por categoría con frontmatter enriquecido.
* **Componentes interactivos:** Genera `<AccordionGroup>`, `<CardGroup cols={2}>`, `<Tabs>` y callouts nativos (`<Note>`, `<Warning>`).
* **Navegación:** Genera el bloque de configuración JSON para el árbol de navegación (ej. `mint.json` o `sidebars.js`).

### Adaptador 2: Help Centers SaaS (Zendesk / Intercom / HelpDocs / HubSpot)
* **Formato:** Artículos HTML/Markdown independientes y autónomos (*Every Page is Page One*).
* **Metadatos de Búsqueda:** Incluye lista de *Tags de indexación*, *Search Keywords* y preguntas alternativas para el motor de soporte.
* **Snippets de Widget:** Genera fragmentos cortos listos para ser consumidos por widgets flotantes in-app (tipo Intercom Messenger o Zendesk Web Widget).

### Adaptador 3: Factoría Propia / In-App Copilot RAG (Vector DBs)
* **Formato:** Archivo `docs-fwbaraldi/knowledge_chunks.json` estructurado para embeddings en bases vectoriales (Supabase `pgvector`, Pinecone, Qdrant).
* **Esquema de Chunking:**
  ```json
  {
    "id": "chunk_01_onboarding_quickstart",
    "topic": "Quickstart",
    "role_target": "Admin",
    "route_context": "/dashboard/onboarding",
    "locale_base": "es",
    "diataxis_type": "how-to",
    "info_type": "procedure",
    "content": "Para crear tu primera cuenta...",
    "token_count": 142
  }
  ```

### Adaptador 4: Universal Markdown & No-Code (Notion / Confluence / KNOWLEDGE.md)
* **Formato:** Documento maestro `docs-fwbaraldi/KNOWLEDGE.md` estructurado en 4 capas universales.

---

## 7. Tubería Multiagente de Compilación (Pipeline Architecture)

```
┌─────────────────────────┐
│ 1. Content Ordering     │ ➔ Analiza especificaciones y datos crudos. Determina la
│    Agent (CO)           │   secuencia lógica óptima sin redactar prosa.
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 2. Text Structuring     │ ➔ Divide la secuencia en bloques tipificados (Information
│    Agent (TS)           │   Mapping) aplicando la regla "Un paso = Una sola acción".
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 3. Surface Realization  │ ➔ Redacta en voz activa, Plain Language, i18n-Ready y modulación
│    Agent (SR)           │   de tono contextual según el Adaptador de Destino seleccionado.
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐      REJECTED_INPUT (Violación de estilo, i18n o formato)
│ 4. Guardrail Evaluation │ ──────────────────────────────────────────────┐
│    Agent (QA)           │                                               │
└───────────┬─────────────┘                                               │
            │ PASA (100% compliant & Fresh Clone Test)                    ▼
            ▼                                               ┌───────────────────────────┐
┌─────────────────────────┐                                 │ Bucle de Refinamiento     │
│ Salida Adaptada         │                                 │ Iterativo (Feedback a SR) │
│ (MDX / JSON / Markdown) │                                 └───────────────────────────┘
└─────────────────────────┘
```

---

## 8. Estructura Canónica de `docs-fwbaraldi/KNOWLEDGE.md`

```markdown
# Base de Conocimiento & Manual del Producto — {Nombre del Producto}

## Capa 1: Descubrimiento & Quickstart (< 5 min)
- **Propuesta de Valor:** {Resumen del dolor que resuelve derivado de E01}
- **Público Objetivo:** {Perfiles y casos de uso principales}
- **Guía de Inicio Rápido (3 pasos):**
  1. Paso 1: {Acción mínima inicial}
  2. Paso 2: {Configuración básica}
  3. Paso 3: {Primer resultado visible / Time-to-First-Success}

## Capa 2: Glosario Oficial y Taxonomía Unívoca
| Término Oficial | ¿Qué significa en este producto? | Términos NO recomendados (Evitar) |
| :--- | :--- | :--- |
| {Entidad de E04} | {Definición clara y concisa} | {Sinónimos confusos} |

## Capa 3: Guías de Tareas por Rol (Procedimientos "Cómo hacer X")
### Para el Rol: {Rol A - Ej: Administrador / Dueño}
#### Cómo {Tarea Principal 1}
- **Objetivo:** {Qué logrará el usuario}
- **Requisitos previos:** {Condición necesaria}
- **Procedimiento (Regla: Un paso = Una acción / Máx 5-6 pasos):**
  1. {Acción 1}
  2. {Acción 2}
  3. {Acción 3}

## Capa 4: Matriz de Troubleshooting y Resolución de Errores (Blameless)
| Qué ve el usuario en pantalla | Causa de Negocio (E03) | Solución Paso a Paso (Camino de Salida) |
| :--- | :--- | :--- |
| Botón de acción deshabilitado | Falta completar campo obligatorio | Completar el campo requerido {Y} |
| "Turno no disponible" | Cupo agotado o fuera de horario | Seleccionar un horario disponible en verde |
| Error de conexión o pasarela | Timeout de servidor | Aguardar 2 min o reintentar con otro medio |
```

---

## 9. Motor de System Prompts para Copilotos IA (Dual RAG)

```xml
<System_Role>
Actúas como el Asistente Oficial de {Producto}. Tu objetivo es coordinar la información
para el usuario siguiendo rigurosamente la norma ISO/IEC/IEEE 26514:2022 y los principios
de minimalismo cognitivo, Information Mapping, i18n Readiness y Continuous DocOps.
</System_Role>

<Metodologia_Estructuracion>
1. TAXONOMÍA COGNITIVA: Separa rígidamente bloques de Concepto (<concept>) de guías de Tarea (<task>).
2. INFORMATION MAPPING: Segmenta el contenido en bloques autocontenidos. Limita listas y tablas
   a un máximo de 5 o 6 ítems para evitar fatiga en lectura digital.
3. PRECISION CONTENT: Clasifica cada bloque (Procedimiento, Proceso, Principio, Concepto, Estructura, Hecho).
4. DIÁTAXIS: No mezcles conceptos teóricos en guías de procedimiento paso a paso.
5. I18N READY: Redacta en lenguaje culturalmente neutro, sin modismos ni cursivas de énfasis.
6. CONTINUOUS DOCOPS: Modula las actualizaciones a nivel de bloque atómico para sincronización RAG instantánea.
</Metodologia_Estructuracion>

<Higiene_Linguistica>
- Prohibidos adjetivos inflados (robusto, potente, innovador) y adverbios condescendientes (fácilmente, simplemente).
- Voz activa y lenguaje claro obligatorio. Ninguna oración debe superar las 25 palabras.
- Troubleshooting blameless: empático, sin culpar al usuario y con salida accionable inmediata.
</Higiene_Linguistica>
```

---

## NEVER List — Anti-patrones
1. **NUNCA** caigas en la trampa del sobre-detalle efímero que pudre la documentación con cada hotfix.
2. **NUNCA** mezcles explicaciones conceptuales teóricas dentro de guías de tareas (*Tasks*).
3. **NUNCA** reescribas manuales completos ante cambios menores (aplicar siempre diffing de bloques).
4. **NUNCA** uses cursivas para dar énfasis (rompe los motores de traducción automática).
5. **NUNCA** incluyas modismos locales o jerga regional en el texto base.
6. **NUNCA** superes los 5 o 6 ítems por lista o bloque procedimental sin segmentar.
7. **NUNCA** uses adverbios condescendientes (*"simplemente haz clic"*) ni adjetivos promocionales (*"nuestra potente herramienta"*).
8. **NUNCA** agrupes dos acciones físicas en un solo paso numerado.
9. **NUNCA** culpes al usuario en mensajes de error o matrices de troubleshooting.

## ALWAYS List — Mandatos
1. **SIEMPRE** diseña para el escaneo visual bajo la regla del 79% (Nielsen Norman).
2. **SIEMPRE** valida los procedimientos contra el *Fresh Clone Test* (sin asunciones previas).
3. **SIEMPRE** separa la memoria semántica (*Conceptos*) de la memoria procedimental (*Tareas*).
4. **SIEMPRE** asigna un `block_id` único y metadatos de sincronización a cada bloque informativo.
5. **SIEMPRE** aplica el filtro *Clean Source* para redactar en un español/inglés neutro e internacionalizable.
6. **SIEMPRE** consulta el Adaptador de Destino (Docs-as-Code, SaaS, In-App RAG o Markdown Universal).
7. **SIEMPRE** aplica la regla $5 \pm 1$ para escaneo visual en pantalla y contempla el +30% de expansión de texto.
8. **SIEMPRE** evalúa contra los 8 atributos de calidad ISO/IEC/IEEE 26514.
9. **SIEMPRE** redacta en voz activa con oraciones de menos de 25 palabras.
10. **SIEMPRE** diseña el Quickstart para lograr el primer éxito en < 5 minutos.

---
*Framework Baraldi v2.28.0 · Product Knowledge Compiler Protocol.*
