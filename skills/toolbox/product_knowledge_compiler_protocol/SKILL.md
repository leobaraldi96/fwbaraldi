---
name: product-knowledge-compiler-protocol
description: >
  Protocolo de ingeniería de información para compilar la inteligencia de las Etapas 01 a 07
  en artefactos de Centro de Ayuda (KNOWLEDGE.md), manuales de usuario y RAG Copilots,
  con taxonomía cognitiva estricta (Concept vs. Task), pipeline de Continuous DocOps,
  validación Fresh Clone, adaptadores de exportación e internacionalización bajo normas ISO/IEC/IEEE 26514/26515.
keywords: knowledge base, help center, fresh clone test, nielsen norman 79 rule, anti-rot law, concept vs task, memory types, continuous docops, component translation, block diffing, iso 26514, information mapping, precision content, i18n, l10n, single sourcing, mintlify, zendesk, intercom, rag chunks, cx, onboarding, troubleshooting
version: "2.31.0"
---

# Protocolo: compilador de base de conocimiento y ayuda de producto

Elimina el handoff ciego hacia CX, soporte y documentación compilando la inteligencia de las Etapas 01 a 07 en artefactos multi-canal (`KNOWLEDGE.md`, MDX o chunks RAG) bajo normas **ISO/IEC/IEEE 26514/26515**, Information Mapping y Continuous DocOps.

---

## 1. Modelado semántico y taxonomía cognitiva

### A. Regla del 79%, ley anti-putrefacción y límite digital
- **Escaneo visual (regla 79%):** el contenido se diseña para encontrar la respuesta, ejecutar y detener la lectura de inmediato.
- **Ley anti-putrefacción (*Anti-Rot*):** prohibido documentar micro-detalles efímeros de UI o código volátil. Documentar flujos, invariantes de negocio y modelos mentales.
- **Límite de pantalla ($5 \pm 1$ ítems):** máximo **5 o 6 viñetas por lista, filas de tabla o pasos por sección**.

### B. Separación estricta entre concepto y tarea (Diátaxis + Precision Content)
Prohibido mezclar explicaciones teóricas (`<concept>`) o referencias de API dentro de una guía paso a paso (`<task>`):

| Dimensión | Concepto (`<concept>` - memoria semántica) | Tarea (`<task>` - memoria procedimental) |
| :--- | :--- | :--- |
| **Pregunta clave** | ¿Qué es esto y por qué existe? | ¿Cómo logro hacer esto en el sistema? |
| **Estructura** | Párrafos breves, diagramas y mapas. | Listas numeradas bajo la regla *"Un paso = una acción"*. |
| **Voz** | Tercera persona neutra / expositiva. | Segunda persona imperativa directa (*"Ingresá", "Seleccioná"*). |

### C. Mapeo de fuentes del framework a salidas CX / IA

| Origen en Framework Baraldi | Salida en base de conocimiento (CX / IA) |
| :--- | :--- |
| **E01:** Problem framing / pitch / JTBD | FAQ comercial, landing y quickstart (`< 5 min`) |
| **E02:** Actor map / service blueprint | Manuales de usuario segmentados por rol/actor |
| **E03:** Business rules / logic matrix | Matriz de troubleshooting blameless |
| **E04:** Sitemap / taxonomía / glosario | Glosario unívoco y taxonomía del help center |
| **E05:** Interaction flows / states | Guías procedimentales paso a paso (*"Cómo hacer X"*) |
| **E06:** `VOICE.md` & `DESIGN.md` | Tono contextual y system prompts del copiloto |
| **E07:** QA checklist & edge cases | Matriz de errores y caminos de recuperación |

---

## 2. Fresh clone test, higiene lingüística e i18n readiness

- **Fresh clone test (ISO 26514):** todo procedimiento debe ser ejecutable en un entorno limpio sin asunciones implícitas. Si el lector debe preguntar *"¿de dónde saco esto?"*, la guía se considera fallida.
- **Higiene lingüística (anti-slop):**
  - **Cero adjetivos promocionales:** eliminar *robusto, potente, innovador, líder*.
  - **Cero adverbios condescendientes:** eliminar *simplemente, fácilmente, obviamente, sencillamente*.
  - **Voz activa y concisión:** oraciones de máximo **25 palabras** y enlaces descriptivos (nunca *"clic aquí"*).
- **Ingeniería i18n-ready (L10n):**
  - **Clean source:** cero modismos o jerga local en la fuente base.
  - **Protección de cursivas:** prohibido usar cursivas para énfasis (rompe motores de traducción automática); reservarlas solo para inputs exactos del usuario (`*tu-nombre*`).
  - **Holgura del +30%:** contemplar expansión de texto al traducir y parametrizar formatos regionales (`{DATE_FORMAT}`, `{CURRENCY_SYMBOL}`, `{DECIMAL_SEPARATOR}`).

---

## 3. Continuous DocOps y adaptadores de publicación

Cada bloque informativo se gestiona de forma atómica (hashing y diffing por bloque) para re-traducir y actualizar en RAG únicamente el fragmento modificado:

```json
{
  "block_id": "blk_auth_mfa_setup",
  "version": "1.2.0",
  "hash": "e3b0c44298fc1c149afbf4c8996fb924",
  "diataxis_type": "how-to",
  "info_type": "procedure",
  "role_target": "Admin",
  "route_context": "/dashboard/onboarding",
  "locales": { "es": "synced", "en": "synced", "pt": "pending" },
  "token_count": 94
}
```

### Adaptadores de destino (consultar al usuario antes de exportar)
1. **Docs-as-Code (Mintlify / Docusaurus / Nextra):** archivos `.mdx` con frontmatter, `<AccordionGroup>`, `<CardGroup>`, `<Tabs>` y árbol `mint.json` / `sidebars.js`.
2. **Help Centers SaaS (Zendesk / Intercom / HubSpot):** artículos autónomos (*Every Page is Page One*) con tags de búsqueda, preguntas alternativas y snippets para widgets in-app.
3. **In-App Copilot RAG (Vector DBs):** archivo `docs-fwbaraldi/knowledge_chunks.json` con metadatos (`id`, `topic`, `role_target`, `route_context`, `diataxis_type`, `info_type`, `content`, `token_count`).
4. **Universal Markdown (`docs-fwbaraldi/KNOWLEDGE.md`):** documento maestro en 4 capas (ver sección 4).

---

## 4. Estructura canónica de `docs-fwbaraldi/KNOWLEDGE.md`

```markdown
# Base de conocimiento y manual del producto: {Nombre del producto}

## Capa 1: descubrimiento y quickstart (< 5 min)
- **Propuesta de valor:** {Resumen del dolor que resuelve derivado de E01}
- **Público objetivo:** {Perfiles y casos de uso principales}
- **Guía de inicio rápido (3 pasos):**
  1. Paso 1: {Acción mínima inicial}
  2. Paso 2: {Configuración básica}
  3. Paso 3: {Primer resultado visible / Time-to-First-Success}

## Capa 2: glosario oficial y taxonomía unívoca
| Término oficial | Definición en este producto | Términos prohibidos (evitar) |
| :--- | :--- | :--- |
| {Entidad de E04} | {Definición clara y concisa} | {Sinónimos confusos} |

## Capa 3: guías de tareas por rol (procedimientos "Cómo hacer X")
### Para el rol: {Rol A}
#### Cómo {Tarea principal 1}
- **Objetivo:** {Qué logrará el usuario}
- **Requisitos previos:** {Condición necesaria}
- **Procedimiento (un paso = una acción / máx. 5-6 pasos):**
  1. {Acción 1}
  2. {Acción 2}
  3. {Acción 3}

## Capa 4: matriz de troubleshooting y resolución de errores (blameless)
| Qué ve el usuario en pantalla | Causa de negocio (E03) | Solución paso a paso (camino de salida) |
| :--- | :--- | :--- |
| {Síntoma o mensaje visible} | {Regla o estado que lo dispara} | {Acción concreta de recuperación} |
```

---

## Reglas de oro
- **NUNCA** mezcles teoría (`<concept>`) dentro de pasos de ejecución (`<task>`), ni agrupes dos acciones físicas en un mismo paso numerado.
- **NUNCA** culpes al usuario en la matriz de troubleshooting ni uses adverbios condescendientes (*"simplemente"*).
- **SIEMPRE** valida cada guía con el *Fresh clone test*, asigna `block_id` para sincronización RAG y asegura un quickstart de menos de 5 minutos.

---
*Framework Baraldi v2.31.0 · Product Knowledge Compiler Protocol.*
