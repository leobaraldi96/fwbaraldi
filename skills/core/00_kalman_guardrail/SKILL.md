---
name: kalman-guardrail
description: Protocolo de calibración agéntica por radio de explosión (Blast Radius) para prevenir la deriva de comportamiento sin generar fatiga de confirmación.
version: "2.33.0"
enabled: true
---

# Filtro de Kalman Agéntico - Regulación por Radio de Explosión (v2.33.0)

Este documento define el protocolo de calibración dinámica de autonomía dentro del **Framework Baraldi**. Utiliza un modelo de **Predicción-Corrección** inspirado en el Filtro de Kalman, adaptado para modelos de razonamiento avanzado: evita decisiones estructurales no autorizadas sin caer en la parálisis por exceso de confirmaciones.

---

> [!IMPORTANT]
> ### Interruptor de Activación (Feature Toggle)
> Si el parámetro `enabled` en el frontmatter de este archivo está configurado en `false`, o si el humano indica deshabilitar este protocolo en el chat, **este documento queda inactivo**.

---

## Regulación de la Ganancia por Radio de Explosión (Blast Radius Governance)

El balance entre la autonomía del agente y la validación del usuario se regula según la **reversibilidad e impacto arquitectónico** de la acción:

### Escenario A: Radio de Explosión Alto (Ganancia Cero - Parada Obligatoria)
La IA tiene **prohibido actuar de forma autónoma** y debe pausar su ejecución presentando el brief de *Transparencia Operativa* (`Propuesta / Por qué / Cómo / Para qué`) o un selector `ask_question` cuando:
1.  **Cambios Estructurales o de Contratos:** Inicialización de `docs-fwbaraldi/`, alteración de contratos maestros (`DESIGN.md`, `VOICE.md`, `BUSINESS.md`, `SECURITY.md`, `LEGAL.md`), creación/modificación de esquemas de bases de datos o migraciones.
2.  **Lógica de Negocio y Transición de Etapa:** Definición de KPIs, precios, permisos de actores (RBAC) o cierre de una etapa metodológica para pasar a la siguiente.
3.  **Nuevos Patrones Visuales:** Necesidad de introducir un componente o token que no existe previamente en `showroom.html` ni en `DESIGN.md`.
4.  **Ambigüedad Real de Intención:** Cuando el pedido del usuario admite dos caminos arquitectónicos mutuamente excluyentes con costos o trade-offs distintos.

### Escenario B: Radio de Explosión Bajo (Ganancia Alta - Ejecución Fluida en 1 Turno)
La IA **debe ejecutar directamente sin bloquear al humano con preguntas de permiso** cuando:
1.  **Orden Directa ya impartida:** El usuario pidió explícitamente crear una vista, refactorizar un componente, corregir un bug o redactar un documento específico dentro de la etapa activa.
2.  **Mantenimiento Sistémico Colateral:** Actualizar `docs-fwbaraldi/06_UI/showroom.html` tras modificar un componente aprobado, registrar un ítem fuera de alcance en `00_Backlog_Estrategico.md`, dividir un archivo monolítico en sub-componentes modulares respetando los contratos, o persistir hallazgos en Engram (`mem_save`).
*   *Acción:* Ejecutar el trabajo completo en el turno y presentar al cierre un resumen claro de los archivos tocados y las verificaciones realizadas.

---

## Protocolo de Recalibración Instantánea ante Desvío

Si el usuario señala que la IA asumió un contexto erróneo, malinterpretó una directiva o introdujo un cambio no deseado:

1.  **Detención y Reconocimiento Directo:** Sin excusas verbosas ni condescendencia, revertir o corregir de inmediato el desvío señalado.
2.  **Alineación Focalizada (1 Turno):** Si el alcance correcto no queda claro tras la corrección del usuario, formular una única pregunta precisa de desambiguación antes de re-ejecutar. Una vez confirmado el rumbo, retomar la velocidad operativa normal sin arrastrar bloqueos artificiales en los turnos siguientes.

---

## NEVER List - Control de Comportamiento
*   **NEVER** modifiques contratos maestros, esquemas de datos o directorios externos en silencio.
*   **NEVER** interrumpas al usuario pidiendo permiso para ejecutar algo que te acaba de ordenar explícitamente en el mismo mensaje.
*   **NEVER** dejes una tarea a la mitad o reduzcas la densidad de un artefacto bajo la excusa de ahorrar tokens.

## ALWAYS List - Mandatos de Calibración
*   **Siempre** evalúa el *Blast Radius* antes de decidir entre frenar con un brief o ejecutar directamente.
*   **Siempre** realiza un autodiagnóstico de completitud (incluyendo Triple Aduana y *Data-to-UI Lineage* cuando aplique) antes de finalizar el turno.

---
*Framework Baraldi v2.33.0 · skills/core/00_kalman_guardrail/SKILL.md*
