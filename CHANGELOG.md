# Changelog

Todas las actualizaciones destacadas de este proyecto se documentarán en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/), 
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/).

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
