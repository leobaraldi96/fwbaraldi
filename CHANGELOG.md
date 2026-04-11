# Changelog

Todas las actualizaciones destacadas de este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/), 
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/).

## [2.6.0] - 2026-04-11

### Visión Estratégica y Disciplina Operativa (Simbiosis Cognitiva)

#### Añadido
- **🌟 North Star y Visión de Ecosistema:** Se formalizó en el `README.md` y `ARQUITECTURA_CORE.md` la visión del Framework Baraldi como un **Ecosistema Simbiótico**, definiendo el "Contrato de Poderes" entre el Humano (Director) y la IA (Orquestador).
- **🛡️ Capa 00 (Core Guardrails):** Creada la nueva skill `skills/00_core_guardrails/SKILL.md` actuando como "Guardián de la Metodología". Aisla reglas críticas de disciplina (Docs-Alignment, Naming Semántico y Zero-Copy).

#### Cambiado
- **Refactorización de Identidad (`00_boot/context.md`):** Se delegaron las reglas de nomenclatura y aislamiento de output a la nueva capa de *Guardrails*, dejando el Boot Context más limpio y enfocado exclusivamente en identidad, memoria y orquestación.

---

## [2.5.2] - 2026-04-09

### Arquitectura Mayor — "Cero-Copia" y Nomenclatura Semántica

#### Añadido
- **`ARQUITECTURA_CORE.md`:** Nuevo documento Maestro de arquitectura. Describe conceptualmente y mediante diagramas Mermaid el funcionamiento del framework, su valor vs GPTs transaccionales y el modelo tripartito global (Workspace + Skill + Engram).
- **Directiva de Nomenclatura Semántica:** Creada regla estricta en el `00_boot/context.md` que prohíbe que el framework nombre los entregables con identificadores del motor (ej. `01_pf_momento_1_vision.md`). Fuerza el uso de nombres semánticos, comprensibles para el humano (ej: `01_Vision_Estrategica.md`).
- **Aislamiento de Output Documental:** Todos los artefactos de diseño generados se guardarán ahora de forma automática y unificada en la subcarpeta `docs-fwbaraldi/` del proyecto activo, previniendo el ensuciamiento de la raíz.
- **Protocolo de Diálogo Estructurado:** Instrucción forzada en `context.md` para separar responsabilidades de UI: El Planificador IDE lista los bloqueos técnicos, pero *toda la comunicación conversacional* la IA la debe dirigir desde el Chat, sin ruidos.

#### Cambiado
- **Refactorización "Cero-Copia" (Zero-Copy):** Reestructuración masiva. A partir de la v2.5.2, el framework ya no intenta generar carpetas como `memory/` o `00_boot/` en el proyecto del usuario. Opera exclusivamente desde su núcleo central global, dejando el proyecto local 100% puro y enfocado sólo a código/artefactos. 
- **Desacople en Skills 01 y 02:** Se purgaron las referencias residuales a la base de conocimiento local (`memory/baraldi_knowledge_base.md`) incrustadas en las skills `01_problem_framing` y `02_system_analysis`. Todo el sistema apunta ahora a **Engram MCP** por mandato explícito.

---

## [2.5.1] - 2026-04-08

### Añadido
- **Paso -1 obligatorio en Boot:** El agente ahora detiene todo al inicio y pregunta la carpeta de trabajo antes de ejecutar cualquier tarea. Ejemplo: `"¿Cuál es la ruta raíz donde voy a crear los artefactos?"`. Previene que el agente use el directorio `scratch/` interno del framework.
- **Campo `Carpeta de trabajo` en el bloque de Contexto del Proyecto Activo:** Primer campo del template, marcado como OBLIGATORIO.
- **Regla explícita anti-scratch:** Agregada al listado "Qué NO hacés — nunca" la prohibición de usar `scratch/` o cualquier carpeta interna del framework para artefactos de proyecto.

### Cambiado
- **`00_boot/context.md`:** Actualizado a v2.5.1. Protocolo de cierre de sesión migrado a `mem_save` / `mem_session_summary`. Paso 0 de memoria actualizado para usar `mem_context` + `mem_search` de Engram MCP.

### Contexto
- Problema detectado en prueba real: al abrir el proyecto `C:\xampp\htdocs\prueba-fw`, el agente creó los artefactos en `C:\Users\leoba\.gemini\antigravity\scratch\la-cania-mantenimiento` porque el usuario no especificó carpeta y el agente no la preguntó. Esta versión lo corrige con bloqueo preventivo.

---

## [2.5.0] - 2026-04-08

### Migración Mayor — Sistema de Memoria

#### Cambiado
- **Sistema de memoria migrado de Markdown manual a Engram MCP.** El servidor `engram.exe mcp` (configurado en `mcp_config.json`) es ahora la fuente de verdad del framework. El archivo `memory/baraldi_knowledge_base.md` pasa a ser LEGADO (solo lectura histórica).
- **`memory/PROTOCOLO_MEMORIA.md`:** Actualizado a v2.5.0. Reemplaza todas las instrucciones de lectura/escritura de archivos Markdown por llamadas a las herramientas MCP: `mem_save`, `mem_search`, `mem_context`, `mem_session_summary`. Define el formato obligatorio de `topic_key` para evitar duplicados.
- **`memory/baraldi_knowledge_base.md`:** Marcado como LEGADO. El eje estratégico `fw-decision-memoria-opcion-b` fue reemplazado por `fw-decision-memoria-engram` (Revisión 2).

#### Contexto
- Validación realizada el 2026-04-08: conexión MCP con Engram operativa. Se probaron exitosamente `mem_context`, `mem_save` y `mem_search` desde múltiples ventanas/proyectos.
- Primer hallazgo migrado manualmente: `La Cañía — Cierre Etapa 01 Problem Framing` (fue guardado en el markdown por el agente de la otra ventana antes de la migración).
- **Proyecto Engram:** `baraldi-framework` | **Servidor:** `C:\Users\leoba\go\bin\engram.exe`

---

## [2.4.1] - 2026-04-07

### Decisión Arquitectónica
- **Deprecación del Track Chat:** La carpeta `chat/` queda congelada en v2.3.3 y no recibirá actualizaciones. El framework tiene un único track activo: el **Track Agéntico** (`skills/` + `memory/` + `templates/`).
- **Eliminación de la Regla de Sincronización Core↔Chat:** La obligatoriedad de replicar cambios del Core en `chat/` fue eliminada. Eliminada de `DOCUMENTACION_IA.md`.
- **Decisión registrada en la memoria sistémica** bajo el Eje Estratégico `fw-decision-deprecar-track-chat`.

### Añadido
- **`chat/DEPRECATED.md`:** Aviso formal de deprecación con contexto, razones y camino de migración al track Agéntico.

### Cambiado
- **`DOCUMENTACION_IA.md`:** La "Regla de Sincronización" fue reemplazada por la sección "Arquitectura de Tracks" que documenta los dos tracks y su estado actual. Actualizado a v2.4.1.

## [2.4.0] - 2026-04-07

### Añadido
- **Capa de Memoria Sistémica (Lite):** Primer sistema de memoria persistente del framework, basado en archivos Markdown sin dependencias externas. Inspirado en la arquitectura de `engram` (Gentleman-Programming) adaptada a la terminología y metodología Baraldi.
- **`memory/PROTOCOLO_MEMORIA.md`:** Instrucciones completas para el Agente sobre cuándo y cómo cargar, guardar y buscar en la memoria. Define los conceptos de **Hallazgo Sistémico** y **Eje Estratégico**.
- **`memory/baraldi_knowledge_base.md`:** Base de conocimiento activa del framework. Archivo append-only organizado por proyectos y ejes estratégicos. Pre-cargado con las primeras decisiones de arquitectura del framework.
- **`templates/hallazgo_sistemico.md`:** Template estructurado para registrar hallazgos, con tipos definidos (decisión, validación, riesgo, patrón, preferencia, cierre-de-etapa, cierre-de-sesión) y convención de slugs por etapa (`pf-`, `sa-`, `pl-`, etc.).
- **`templates/decision_log.md`:** Template de Decision Log cronológico con numeración (`DEC-001`) para registrar decisiones estratégicas con contexto, alternativas consideradas y consecuencias.
- **`temp-Gentleman-Programming/`:** Carpeta de referencia con repos clonados de Gentleman-Programming (`engram`, `gentle-ai`, `Gentleman-Skills`) para ingeniería inversa y adaptación.

### Cambiado
- **`00_boot/context.md`:** Integrada la capa de memoria. El Paso 0 obliga al Agente a cargar la base de conocimiento antes de ejecutar cualquier tarea. Agregado el Protocolo de Cierre de Sesión (guardar hallazgos antes de declarar done). Actualizado a v2.4.0.
- **`SKILL.md` (raíz):** Agregada la Regla de Oro **"Memoria Sistémica"**: el conocimiento nunca se pierde entre sesiones.
- **`skills/01_problem_framing/SKILL.md`:** Hook de memoria al activar la etapa. Protocolo de Memoria con Ejes Estratégicos recomendados por cada Momento (`pf-hipotesis-central`, `pf-metodologia-research`, etc.). Actualizado a v2.4.0.
- **`skills/02_system_analysis/SKILL.md`:** Hook de memoria al activar la etapa. Protocolo de Memoria con Ejes Estratégicos recomendados (`sa-actor-map`, `sa-riesgos-criticos`, `sa-dependencias-clave`). Actualizado a v2.4.0.
- **`DOCUMENTACION_IA.md`:** Estructura del repositorio actualizada con las nuevas carpetas `memory/` y `templates/`. Tabla de estado refactorizada.

## [2.3.3] - 2026-03-20

### Cambiado
- **Refuerzo Anti-Codeblock en Chat:** Modificadas explícitamente las directivas de la PARTE A en `etapa01_chat.md` y `etapa02_chat.md` para evitar que LLMs hiper-literales aíslen los artefactos y respuestas dentro de bloques de código markdown, garantizando que las interfaces web de ChatGPT y Claude rendericen nativamente tablas y encabezados.
- Actualizada la versión global del framework a `2.3.3`.

## [2.3.2] - 2026-03-20

### Añadido
- **Directiva de Renderizado Directo:** Incorporada regla global para prohibir que la IA envuelva toda su respuesta en un bloque de código (` ``` `). Se exige el uso de Markdown "crudo" para que las interfaces de chat (ChatGPT, Claude, Gemini) rendericen correctamente encabezados, tablas y negritas.
- **Refinamiento de Triggers (Anti-Patterns):** Agregadas reglas explícitas de "Cuándo NO usar" en `skills/01_problem_framing/SKILL.md` y `skills/02_system_analysis/SKILL.md` para prevenir que agentes autónomos activen etapas antiguas accidentalmente.

### Cambiado
- **Sincronización de Versiones:** Todos los metadatos internos (`00_boot/context.md` y `SKILL.md`) unificados declarativamente a la versión `v2.3.2`.
- **UX One-Page Restaurada y Evolucionada:** Actualizado el Boot Context (PARTE A) dentro de `chat/etapa01_chat.md` y `chat/etapa02_chat.md` con las reglas de la v2.3.2, asegurando que los usuarios de interfaces web puedan instanciar etapas críticas arrastrando un único archivo sin pérdida de contexto.

## [2.3.1] - 2026-03-20

### Añadido
- **Refuerzo Educativo:** Incorporadas "Notas Metodológicas" que explican el valor de la divergencia y la contextualización al inicio de cada entrega de artefactos.
- **Etiquetado de Títulos:** Obligatoriedad de incluir el tag `[BORRADOR]` en el título de cada artefacto individual para clarificar el estado del proceso.
- **Invitación Proactiva a la Iteración:** La IA ahora exige o solicita explícitamente que el humano complemente o cuestione los resultados, enfatizando que esta etapa es la base crítica del sistema.

### Cambiado
- Sincronización de estas reglas en `00_boot/context.md`, `skills/` y las versiones de la carpeta `chat/`.

## [2.3.0] - 2026-03-20

### Añadido
- **Protocolo de Humanización de la IA:** Nueva directiva global que obliga a la IA a presentarse de forma empática, resumir los planes de etapa en lenguaje natural y evitar el uso de códigos técnicos (ej. "[SKILL B1]") en el diálogo directo con el humano.
- **Instrucciones de Handoff en Chat:** Incorporada lógica en las versiones *flat* para solicitar activamente el archivo de la siguiente etapa (o proponer su búsqueda en el repositorio oficial de GitHub) al cerrar un ciclo, previniendo alucinaciones de contenido entre etapas.
- **Regla de Sincronización Arquitectónica:** Documentada en `DOCUMENTACION_IA.md` la obligatoriedad de mantener paridad funcional entre el Core (modular) y la carpeta `chat/` (one-page).

### Cambiado
- **Refactor de Salida en Chat:** Los encabezados y flujogramas de `chat/etapa01_chat.md` y `chat/etapa02_chat.md` fueron limpiados de ruidos técnicos excesivos para priorizar la legibilidad humana.
- Actualizada la versión global del framework a `2.3.0`.

## [2.2.1] - 2026-03-19

### Añadido
- **Regla Global de Tablas Markdown:** Incorporada en `00_boot/context.md` una directiva estricta para forzar a las IAs a generar exactamente la misma cantidad de columnas en el separador (`|---|`) que en la cabecera, previniendo la rotura visual del renderizado en los chats.
- Generadas representaciones visuales del framework en formato Mermaid para documentar los flujogramas interactivos de los Momentos 1, 2 y 3 (Etapa 02).

### Cambiado
- **Refactor interactivo en Momento 1 (v1.1):** Actualizado `momento_1_mapeo.md` (Etapa 02) para forzar un flujo secuencial ("parada y validación" por tabla). Se agregaron columnas críticas (como *Stack tecnológico* y *Nombre real*) y automatizaciones para generar "Solicitudes de Stack" a los devs.
- **Sincronización de SKILL.md de Etapa 02:** Se retiró la generación del *System Map inicial* de las responsabilidades del Momento 1, consolidando su entregable a un único *Actor Map Consolidado*. El diagnóstico de flujo sistémico y dependencias recae oficialmente sobre el Momento 2.

## [2.2.0] - 2026-03-18
### Añadido
- **Etapa 02 (System Analysis)** completa: agregada la carpeta `skills/02_system_analysis` con su SKILL.md, 3 prompts operativos (`momento_1_mapeo.md`, `momento_2_dependencias.md`, `momento_3_documentacion.md`) y guía de referencias (`system_mapping_guide.md`).
- Nueva versión one-page consolidada para interfaces chat de la Etapa 02 en `chat/etapa02_chat.md`.
- Agregada guía de métodos de investigación (`research_methods_guide.md`) en la Etapa 01.

### Cambiado
- Actualizada la versión flat `chat/etapa01_chat.md` incorporando la técnica de doble codificación (Capa Hipótesis y UX) y la fórmula de priorización (Frequency x Severity x Solvability).
- Actualizado el diagrama de estructura de carpetas y el status de Fases (pasando de 🔄 a ✅) en `README.md` y `DOCUMENTACION_IA.md`.
- Subida general de versión del framework a `2.2.0`.

## [2.1.0] - 2026-03-17

### Añadido
- Nueva versión one-page `chat/etapa01_chat.md` formato "Mega-Prompt" optimizada para interfaces web (Claude, ChatGPT, etc.).
- Sección de `Quick Start` y requisitos previos de LLMs en el `README.md` principal.
- Sección de Licencia de código abierto (Uso Libre con atribución).
- Advertencia de "amnesia de contexto" agregada en los headers de la versión chat.
- Incorporación de los orígenes metodológicos ("De dónde deviene") y los diferenciadores ("Lo que lo hace genuinamente distinto") en el `README.md` principal para justificar la teoría del framework.

### Cambiado
- **Identidad de la IA**: Actualizado el rol del asistente en `00_boot/context.md` y `chat/etapa01_chat.md` para operar explícitamente como la **capa cognitiva del equipo**, entendiendo que la experiencia termina en producción y no en el handoff.
- **Estandarización de Skills**: Incorporación de metadata YAML estricta (`name`, `description`, `keywords`) en los 4 prompts de la Etapa 01 (`momento_1_vision.md`, `momento_2_live_assistant.md`, `momento_3_cierre.md`, `momento_feedback_metodologia.md`) para garantizar compatibilidad "Nivel A" con agentes de IA autónomos (autodescubrimiento tipo `skill-judge`).
- **Arquitectura de Documentación**: Separada la documentación operativa para modelos de IA (`DOCUMENTACION_IA.md`) del `README.md` comercial para desarrolladores y diseñadores humanos.
- Renombrada la directiva global del framework a "System Orchestrator" en el mapa del repositorio.

## [2.0.0] - Versión Inicial Base

### Añadido
- Framework Baraldi v2 estructurado en 7 etapas.
- Etapa 01 "Problem Framing" completada con 4 prompts especializados.
- `00_boot/context.md` de identidad base.
