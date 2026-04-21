# BASE DE CONOCIMIENTO — Framework Baraldi

> Archivo de memoria persistente del Framework Baraldi.
> Administrado por el Agente según el protocolo en `memory/PROTOCOLO_MEMORIA.md`.
> **No editar manualmente** salvo corrección explícita del humano.

---

> **Instrucción para el Agente:** Al iniciar una sesión, leer este archivo, filtrar los Hallazgos del proyecto activo y presentar un resumen al humano antes de ejecutar cualquier tarea.

---

## [Proyecto: Framework Baraldi — Meta]

### [Eje Estratégico: fw-decision-memoria-engram]

```
Tipo:         decisión
Proyecto:     Framework Baraldi — Meta
Etapa:        00 — Boot / Infraestructura
Revisión:     2

Qué:          ⚠️ MIGRACIÓN COMPLETADA — Se migró de Markdown manual (Opción B)
              a Engram MCP (Opción A) como sistema de memoria principal.
              Engram está operativo como servidor MCP en mcp_config.json.

Por qué:      Engram validado el 2026-04-08. Provee búsqueda semántica,
              deduplicación automática y persistencia real entre sesiones
              sin depender de lectura manual de archivos markdown.

Dónde:        C:\Users\leoba\go\bin\engram.exe (servidor MCP)
              mcp_config.json (configuración del servidor)
              memory/PROTOCOLO_MEMORIA.md (instrucciones actualizadas)

Aprendido:    El agente DEBE usar mem_save/mem_search/mem_context de Engram.
              Este archivo markdown queda como LEGADO. No escribir nuevos
              hallazgos aquí. Toda memoria nueva va a Engram bajo el
              proyecto "baraldi-framework".
```

---


<!-- 
  Por qué:      [razón, evidencia o contexto]
  
  Dónde:        [archivo, artefacto o contexto donde aplica]
  
  Aprendido:    [qué cambia, qué hay que recordar, qué evitar]
  ```
---

### [Eje Estratégico: pf-decision-cierre]

```
Tipo:         cierre-de-etapa
Proyecto:     La Cañía — Landing de Mantenimiento
Etapa:        01 — Problem Framing
Revisión:     1

Qué:          Se aprueba el avance a la etapa de diseño con una hipótesis de alta
              confianza: es necesaria una presencia oficial premium para mitigar el 
              riesgo de reputación en la zona de Rafael Núñez.

Por qué:      La competencia directa (LEROMA, Barilatte, Panicafé) marca un estándar
              estético alto que La Cañía debe igualar o superar incluso en mantenimiento.
              Urgencia definida: 1 semana para el lanzamiento.

Dónde:        docs/09_informe_cierre_etapa_01.md

Aprendido:    El público "de paso" del Cerro de las Rosas valora la exclusividad y la
              calidad artesanal. El Rojo + Inter Bold sobre #C4C4C4 son los tokens
              base aceptados por el owner.
```

---

### [Eje Estratégico: ui-ajuste-contactos-footer]

```
Tipo:         decisión-diseño
Proyecto:     La Cañía — Landing de Mantenimiento
Etapa:        02 — System Architecture (Mini-Sprint)
Revisión:     1

Qué:          Se integra un segundo canal de contacto (contacto@lacania.com.ar)
              en el footer, manteniendo alineación centrada y uso de flex-wrap.

Por qué:      Requerimiento explícito del humano para diversificar los canales 
              de entrada. Se opta por un divisor '/' con opacidad 0.3 para 
              mantener el aire premium sin sobrecargar visualmente.

Dónde:        src/index.html, src/style.css

Aprendido:    El uso de flex-gap permite escalar la cantidad de contactos 
              fácilmente en el futuro sin desordenar el layout.
```
