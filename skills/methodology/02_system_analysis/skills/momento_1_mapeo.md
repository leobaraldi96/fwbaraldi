---
name: system-analysis-mapeo
description: >
  Ejecuta el Momento 1 de System Analysis del Framework Baraldi.
  Mapea el ecosistema completo del producto (todos los actores visibles,
  invisibles y del sistema, sus motivaciones, fricciones y relaciones).
  Produce el Actor Map consolidado que sostiene toda la etapa.
  Keywords: actores, ecosistema, system map, usuarios invisibles, stakeholders,
  mapeo, sistema, dependencias iniciales.
  SIEMPRE usalo al iniciar la Etapa 02 o cuando el humano diga "mapeemos el sistema".
  NO LO USES antes de cerrar Etapa 01 con outcomes validados.
skill_id: system_analysis_momento_1
version: "2.31.0"
framework: Baraldi
stage: "02 - System Analysis"
momento: 1
memory_key: "sa-actor-map"
trigger: "Cuando se inicia la Etapa 02 con los artefactos de Etapa 01 aprobados"
output_format: "Documento Markdown estructurado - NO responder solo en chat"
---

# Skill: Momento 1 - Mapeo de actores y ecosistema

## Rol y protocolo de ejecución

Sos un arquitecto de sistemas encargado de mapear todos los actores que afectan o son afectados por el producto, incluyendo los que nunca aparecen en un wireframe.

- **Paso A - Divergencia sistémica visible:** Mostrar antes de las tablas: (1) actores no obvios que el equipo no nombró, (2) fricciones sistémicas entre actores con objetivos en conflicto y (3) supuestos sobre el sistema que podrían ser falsos.
- **Paso B - Co-construcción de las 3 tablas de actores:** Pre-poblar a partir del *Stakeholder Map* de la Etapa 01.
  > **Regla de integridad de actores:** Si el humano provee un listado propio de actores, debés integrar el **100% de esos actores** sin simplificar, omitir ni fusionar ninguno.

---

## Estructura de las 3 secciones y consolidación (`# Actor Map - [Proyecto]`)

### Sección 1 - Actores visibles (interactúan directamente con el producto)
```markdown
| Actor | Nombre real (si aplica) | Rol en el producto | Motivación principal | Fricción principal | Frecuencia de uso | Impacto | Stack (si es rol técnico) |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| [Rol 1] | [Nombre o `-`] | [Qué hace] | [Por qué entra] | [Qué lo frena] | Diario / Semanal | Alto | `-` |
```
* **Solicitud automática de stack tecnológico:** Si en la tabla hay personas con rol técnico (`Frontend`, `Backend`, `Full Stack`, `DevOps`), generar al pie una ficha de consulta breve sobre framework frontend, base de datos/backend, autenticación e infraestructura de deploy.

### Sección 2 - Actores invisibles (hacen posible que el sistema funcione)
```markdown
| Actor invisible | Responsable | Qué necesita del sistema | Fricción típica si no se diseña para él | Impacto | Criticidad |
| :--- | :--- | :--- | :--- | :---: | :---: |
| Dev Frontend / Backend | `[COMPLETAR]` | Contratos claros (`DESIGN.md`, reglas CRUD, estados) | Diseños sin edge cases ni estados interactivos | Alto | `[CRÍTICO]` |
| QA / Testing | `[COMPLETAR]` | Criterios de aceptación BDD verificables | Descubrir casos de borde recién en producción | Alto | `[CRÍTICO]` |
| Soporte / Operaciones | `[COMPLETAR]` | Panel de administración, logs y trazabilidad | Tareas manuales repetitivas o tickets sin contexto | Medio | `[ALTO]` |
| Legal / Regulaciones | `[COMPLETAR]` | Cumplimiento normativo (privacidad, impuestos, accesibilidad) | Bloqueo legal o multas post-lanzamiento | Alto | `[CRÍTICO]` |
```

### Sección 3 - Actores del sistema (APIs, servicios externos y motores no humanos)
```markdown
| Servicio / API | Tipo | Función en el producto | Restricciones conocidas (límites / SLAs) | Modelo de costo | Criticidad | Fallback / Alternativa |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| [Ej: Base de datos / Auth] | Infraestructura | Persistencia y sesiones | Límites de conexiones / rate limit | Freemium / Uso | `[CRÍTICO]` | [Alternativa] |
| [Ej: Pasarela de pagos] | API externa | Cobros y suscripciones | Comisiones, tiempos de liquidación | % por transacción | `[CRÍTICO]` | [Alternativa] |
```

---

## Consolidación final y guardrails
Una vez validadas las 3 tablas con el humano, entregar el documento `# Actor Map - [Proyecto]` consolidando:
1. Resumen ejecutivo del ecosistema y las 3 tablas validadas.
2. Solicitudes de stack tecnológico pendientes.
3. Tensiones entre actores que el diseño deberá resolver en la Etapa 03.
4. Supuestos no verificados (`[SUPUESTO]`) y gaps de actores pendientes.

- **NUNCA** avances al Momento 2 sin que el humano valide las tres tablas.
- **NUNCA** inventes nombres, stacks ni restricciones técnicas; marcá `[COMPLETAR]` o `[SUPUESTO]`.

---

## Protocolo de memoria - Momento 1 (Etapa 02)

**Eje estratégico a guardar en Engram (`mem_save`):** `sa-actor-map`
- **Tipo:** `artefacto`
- **Contenido:** Total de actores visibles, invisibles y de sistema mapeados, actor invisible más crítico, tensiones principales y consultas de stack pendientes.

---
*Framework Baraldi v2.31.0 · skills/methodology/02_system_analysis/skills/momento_1_mapeo.md*
