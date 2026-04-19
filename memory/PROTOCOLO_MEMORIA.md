# Protocolo de Memoria — Framework Baraldi

> Este archivo contiene las instrucciones operativas para que el Agente gestione la memoria del framework.
> NO es un artefacto de proyecto. Es una instrucción interna para la IA.

---

## SISTEMA DE MEMORIA ACTUALIZADO — Usar Engram MCP

> **Version 2.6.0** — Actualización de Infraestructura (Engram v1.12.0) el 2026-04-19.
> El sistema de memoria del framework es **GLOBAL** y reside exclusivamente en **Engram MCP**.
> **NO repliques carpetas de memoria en el proyecto local.** Esto garantiza que el aprendizaje sea sistémico entre todos tus proyectos.

---

## Que es la Memoria Sistemica

La memoria es la capa transversal del Framework Baraldi que permite que el conocimiento generado en una sesion este disponible en sesiones futuras.

**Fuente de verdad actual:** Servidor **Engram MCP** `v1.12.0` (`engram.exe mcp`)
**Proyecto Engram (Infraestructura):** `fw-baraldi-core`
**Proyecto Engram (Producto):** `[slug-del-proyecto]` (Ej: `app-comercio`, `proyecto-alfa`)

---

## Cuando CARGAR memoria (inicio de sesion)

Al iniciar cualquier sesion, **antes de ejecutar cualquier tarea**, el Agente DEBE:

1. Llamar `mem_context(project="fw-baraldi-core", limit=10)` para obtener historial de arquitectura.
2. Llamar `mem_context(project="[slug-del-proyecto]", limit=20)` para filtrar hallazgos específicos del producto.
3. Presentar un resumen breve al humano: "Tengo memoria de X hallazgos en este proyecto. Los mas recientes son..."
4. Si no hay hallazgos del proyecto, comunicarlo: "Es la primera sesion registrada para este proyecto."

---

## Cuando GUARDAR un Hallazgo Sistemico

Usar `mem_save(...)` inmediatamente cuando ocurre cualquiera de estos eventos:

| Evento | `type` en Engram |
|---|---|
| Se toma una decision de diseno o arquitectura | `decision` |
| Se valida o refuta una hipotesis | `discovery` |
| Se descubre un riesgo no mapeado | `discovery` |
| Se aprende un patron reutilizable | `pattern` |
| El humano expresa una preferencia explicita | `decision` |
| Se cierra un Momento o Etapa | `decision` |
| Se genera un artefacto aprobado | `decision` |

**Parametros obligatorios de `mem_save`:**

```
title:     "[Proyecto] — [descripcion corta]"
content:   formato **What/Why/Where/Learned**
project:   "[slug-del-proyecto]"
type:      segun la tabla anterior
topic_key: "[eje-estrategico]"
```

---

## Cuando BUSCAR en la memoria

Usar `mem_search(query="...", project="[slug-del-proyecto]")` antes de:
- Proponer una solucion o decision similar a algo ya trabajado
- Iniciar una nueva etapa del framework
- El humano pregunta "ya habiamos decidido algo sobre X?"
- El Agente detecta que algo contradice un artefacto previo

---

## Protocolo de CIERRE de sesion

Antes de declarar "listo", "terminamos" o "cerramos esta etapa":

1. Llamar `mem_session_summary(...)` con:
   - Objetivo de la sesion
   - Hallazgos registrados
   - Artefactos producidos
   - Proximos pasos definidos
2. Usar `project: "[slug-del-proyecto]"` (o `fw-baraldi-core` si es un cambio al framework) en todos los llamados.

---

## Privacidad

Si el contenido a guardar incluye tokens, contrasenas, datos personales de entrevistados (apellidos, emails, telefonos), **NO** guardarlo en Engram. Reemplazar con `[DATO PRIVADO]`.

---

## Estructura de proyecto en Engram

Todos los hallazgos del framework usan:
- `project: "[slug-del-proyecto]"` (Ej: `proyecto-alfa`)
- `topic_key: "[eje-estrategico]"`

Ejemplos de topic_key:
- `pf-hipotesis-central` (dentro del proyecto `la-cania`)
- `sa-actor-map` (dentro del proyecto `proyecto-alfa`)
- `fw-decision-memoria-engram` (dentro del proyecto `fw-baraldi-core`)

## Mantenimiento y Actualización del Motor
El motor de memoria (Engram) debe mantenerse actualizado para aprovechar las capacidades proactivas del framework.

### Cómo actualizar el motor
Si ya tienes el framework instalado, puedes actualizar el binario de Engram de dos formas:
1. **Vía Go (Recomendado):** Ejecuta `go install github.com/Gentleman-Programming/engram/cmd/engram@latest`.
2. **Reinstalación:** Vuelve a ejecutar el script `npm run install` del framework, el cual descargará automáticamente la versión estable definida en `scripts/install.js`.

### Mejoras de la v1.12.0
- **Save Nudges:** El motor detecta periodos de inactividad de guardado (10 min+) y envía recordatorios al agente para evitar pérdida de contexto.
- **Activity Score:** Al ejecutar `mem_session_summary`, el sistema añade un reporte de actividad (ej: "47 herramientas usadas, 2 guardados") para medir el esfuerzo de documentación.
- **Obsidian Brain:** Capacidad nativa de exportar toda la memoria para visualizarla como un grafo de conocimiento en Obsidian.

---

*Framework Baraldi v2.6.0 · memory/PROTOCOLO_MEMORIA.md · Capa de Memoria Sistémica*
