---
name: system-analysis
description: >
  Ejecuta la Etapa 02 completa (System Analysis) del Framework Baraldi.
  Usalo después de cerrar la Etapa 01 con outcomes validados. Mapea el ecosistema
  completo donde vive el producto (actores, dependencias técnicas, flujos de datos
  e integraciones) antes de diseñar cualquier solución. Detecta fricciones
  sistémicas, duplicaciones y riesgos ocultos que el diseño de UX no puede ver.
  Keywords: system analysis, sistema, ecosistema, dependencias, arquitectura,
  flujos de datos, integraciones, usuarios invisibles, etapa 2, system map.
  SIEMPRE usalo cuando el humano mencione "etapa 2", "system analysis",
  "mapear el sistema" o cuando los outcomes de Etapa 01 estén validados.
  NO LO USAR si el problema no se ha validado en la Etapa 01.
version: "2.31.0"
framework: Baraldi
stage: "02"
stage_name: "System Analysis"
status: complete
---

# Etapa 02 - System analysis

> **Objetivo:** Entender el ecosistema completo donde vive el producto antes de
> diseñar cualquier interfaz o lógica. El producto no es una pantalla: es un
> sistema de actores, reglas, flujos y dependencias. Si no se mapea el sistema,
> el diseño opera a ciegas.

---

## Cuándo se activa esta etapa

Se activa cuando:
- El Informe de cierre de Etapa 01 (`../01_problem_framing/SKILL.md`) tiene decisión firmada de "Avanzar"
- Los 5 artefactos de Problem Framing están aprobados
- La hipótesis central tiene confianza Media o Alta

No se activa si:
- Etapa 01 terminó con decisión de "Iterar" o "Pivotar"
- El Problem Statement todavía no está validado con usuarios reales

> **[MEMORIA - Al activar esta etapa]** Recuperar todos los hallazgos `pf-` del proyecto activo desde `Engram MCP`. Son los inputs fundamentales de esta etapa. Presentar resumen al humano antes de iniciar el Momento 1.

---

## Flujo de la etapa - 4 momentos en secuencia

```
Artefactos de Etapa 01 aprobados
        ↓
[MOMENTO 0] Anuncio y validación de bases (skills/momento_0_anuncio.md)
        ↓
[MOMENTO 1] Mapeo de actores y ecosistema (skills/momento_1_mapeo.md)
        ↓
  IF sistema suficientemente mapeado?
  ├── NO -> profundizar en áreas grises
  └── SÍ ↓
[MOMENTO 2] Análisis de dependencias y riesgos (skills/momento_2_dependencias.md)
        ↓
[MOMENTO 3] Documentación del sistema (skills/momento_3_documentacion.md)
        ↓
  System Map + Protocolo de ubicación sistémica
        ↓
       Etapa 03 - Product logic (../03_product_logic/SKILL.md)
```

---

## Los 4 momentos - cuándo activar cada uno

### Momento 0 - Anuncio y validación de bases
**Archivo:** `skills/momento_0_anuncio.md`
**Activar cuando:** Se cierra Etapa 01 y se inicia Etapa 02.
**Produce:** Bienvenida humanizada, objetivos de la etapa y validación del alcance previo.

### Momento 1 - Mapeo de actores y ecosistema
**Archivo:** `skills/momento_1_mapeo.md`
**Activar cuando:** Se cierra Etapa 01 y se inicia Etapa 02.
**Produce:** Actor Map consolidado (actores visibles, invisibles y del sistema) y solicitudes de stack tecnológico.

**REGLAS DE MAPEO DE ACTORES (búsqueda activa):**
El Agente debe buscar activamente actores invisibles que el humano suele olvidar:

| Categoría | Actores típicos | Por qué importa mapearlos |
|---|---|---|
| **Equipo técnico** | Dev Frontend, Dev Backend, DevOps, QA | Son los primeros usuarios invisibles: diseñar sin ellos genera deuda técnica |
| **Equipo de negocio** | Product Manager, Owner, Finanzas | Sus restricciones definen límites del sistema que el diseño no puede ignorar |
| **Operaciones** | Soporte, Admin, Moderación | Mantienen el sistema vivo: si su trabajo no está diseñado, el sistema se degrada |
| **Sistemas externos** | APIs de pago, motores de búsqueda, servicios de auth | Tienen sus propias reglas, costos y puntos de falla independientes |
| **Regulaciones** | AFIP, GDPR, App Store policies | Imponen restricciones que **no son negociables** y pueden invalidar el diseño entero |
| **Usuarios futuros** | Quienes se incorporarán cuando el sistema escale | Sus necesidades deben estar en la arquitectura desde el inicio, no como parche posterior |

### Momento 2 - Análisis de dependencias y riesgos
**Archivo:** `skills/momento_2_dependencias.md`
**Activar cuando:** El Actor Map y System Map inicial están aprobados por el equipo.
**Produce:** Dependency Map, Data Flow Map, Risk Map.

**REGLAS DE MAPEO DE DEPENDENCIAS Y RIESGOS:**
- **Patrones de dependencia a detectar (buscar estas topologías):**
  1. **Lineal (`A -> B -> C`):** Si B falla, C muere (cascada). *Mitigación:* Fallbacks en B.
  2. **Estrella / SPOF (`A -> HUB <- C`):** Un HUB central. Si cae, tira todo el sistema. *Mitigación:* Abstraer con capa intermedia o redundancia.
  3. **Circular (`A -> B -> C -> A`):** El más peligroso. Genera loops y estados inconsistentes. *Mitigación:* Romper el ciclo obligatoriamente.
  4. **Bidireccional fuerte (`A <-> B`):** Alto acoplamiento. Un cambio en A rompe B. *Mitigación:* Contratos de API estrictos.
- **Criticidad obligatoria:** Todo nodo debe etiquetarse como `[CRÍTICA]` (bloquea todo), `[ALTA]` (bloquea core), `[MEDIA]` (degrada experiencia), `[BAJA]` (invisible).
- **Tipos de riesgo a auditar:** Técnicos (deuda, escalabilidad), de datos (pérdida, GDPR), de negocio (vendor lock-in) y externos (leyes, App Store).

> **Señales de alerta de riesgo - frases que activan bandera roja inmediata:**
> - *Técnico:* "siempre lo hicimos así", "ese módulo nadie lo toca", "si cambiamos eso se rompe todo".
> - *Datos:* "no tenemos backup", "esos datos los guardamos por si acaso", "no sé exactamente qué hay en esa tabla".
> - *Negocio:* "dependemos de un solo proveedor para eso", "si ellos cambian el precio, cerramos".
> Cuando el equipo dice alguna de estas frases, documentar el riesgo como `[CRÍTICA]` hasta que se pruebe lo contrario.

### Momento 3 - Documentación del sistema (Service Blueprint)
**Archivo:** `skills/momento_3_documentacion.md`
**Activar cuando:** El Dependency Map y el Risk Map están validados.
**Produce:** Architecture Overview y Service Blueprint completo.

**FORMATO ESTRICTO DEL SERVICE BLUEPRINT:**
El mapa debe contener siempre 5 capas divididas por la línea de interacción y la línea de visibilidad:
1. **Evidencia física:** Qué ve/toca el usuario (pantalla, email).
2. **Acciones del usuario:** Qué hace (clic, navega).
3. **Frontstage (visible):** Qué hace el sistema de cara al usuario.
4. **Backstage (invisible):** Qué hace el sistema internamente (valida, procesa).
5. **Soporte/Sistemas:** Bases de datos, APIs de terceros, staff.

| Artefacto | Momento | Formato |
|---|---|---|
| Actor Map consolidado | 1 | Documento Markdown |
| Dependency Map | 2 | Documento Markdown |
| Data Flow Map | 2 | Documento Markdown |
| Risk Map | 2 | Documento Markdown |
| Architecture Overview | 3 | Documento Markdown |
| Service Blueprint | 3 | Documento Markdown |

---

## Motores de análisis (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **UX Audit Engine (`skills/engines/ux_audit_rethink_engine/SKILL.md`):** Motor de auditoría holística de UX. Activar en rediseños de productos legados.
2. **DS Audit Engine (`skills/engines/ds_audit_engine/SKILL.md`):** Auditoría de sistemas de diseño para evaluar escalabilidad.
3. **Competitor Intelligence Engine (`skills/engines/competitor_intelligence_engine/SKILL.md`):** Análisis de brechas competitivas (Momento 1).
4. **Good Services Engine (`skills/engines/good_services_engine/SKILL.md`):** 15 principios de Louise Downe (estándar de calidad sistémica).
5. **Systemic Issue Triage Protocol (`../../toolbox/systemic_issue_triage_protocol/SKILL.md`):** Triage y clasificación de cuellos de botella técnicos o de arquitectura.

---

## Modelo de decisión para avanzar a Etapa 03 (checklist de completitud)

**Avanzar a Etapa 03 - Product logic (`../03_product_logic/SKILL.md`)** cuando:

**Actor Map:**
- [ ] Actores visibles, invisibles y sistemas externos están incluidos.
- [ ] Los sistemas externos están tratados como actores con sus propias restricciones.
- [ ] Las motivaciones y fricciones de cada actor están documentadas.
- [ ] Las tensiones entre actores están identificadas.
- [ ] Regulaciones aplicables están mapeadas como actores no negociables.

**Dependency Map:**
- [ ] Cada dependencia tiene nivel de criticidad asignado (`[CRÍTICA]` a `[BAJA]`).
- [ ] Los SPOF están identificados con plan de mitigación documentado.
- [ ] Las dependencias circulares están resueltas o documentadas como riesgo activo.
- [ ] Las restricciones de cada servicio externo (costos, SLAs, contrato de API) están documentadas.

**Data Flow Map:**
- [ ] Los flujos más críticos están documentados paso a paso.
- [ ] Queda claro quién crea, lee, modifica y elimina (CRUD) cada entidad principal.
- [ ] Los estados posibles de las entidades principales están listados.

**Architecture Overview:**
- [ ] Las decisiones de stack tienen justificación documentada (no solo "lo sabemos usar").
- [ ] Las restricciones técnicas conocidas están listadas.
- [ ] Los gaps de arquitectura no resueltos están marcados explícitamente como riesgos activos.
- [ ] Validado por ingeniería antes de avanzar.

**No avanzar** si:
- Hay dependencias técnicas críticas sin resolver que bloquearían la lógica del producto.
- Los usuarios invisibles no fueron identificados.
- El equipo técnico no validó el Architecture Overview.

---

## NEVER List - Anti-patrones de la Etapa 02
El Agente debe **bloquear** el proceso si detecta:

1. **NEVER asumas que el sistema está documentado:** Siempre verifica y pregunta por la arquitectura real, no solo la declarada.
2. **NEVER ignores a los "usuarios invisibles":** Soporte, Legal y Ops son críticos. Ignorarlos genera fallos operativos graves.
3. **NEVER diseñes lógica (E03) antes de cerrar esta etapa:** No puedes definir el "cómo" sin conocer los límites del ecosistema.
4. **NEVER dejes dependencias sin nivel de riesgo:** Todo servicio externo debe marcarse como `[CRÍTICA]`, `[ALTA]`, `[MEDIA]` o `[BAJA]`.
5. **NEVER omitas los "gaps" del sistema:** Lo que no se pudo mapear debe quedar documentado como un riesgo activo.
6. **NEVER asumas factibilidad sin validación técnica:** El *Architecture Overview* debe ser validado por ingeniería antes de avanzar.

## ALWAYS List - Mandatos de comportamiento
- **Siempre** busca actores invisibles que no aparecen en el listado inicial.
- **Siempre** recupera los hallazgos `pf-` de la Etapa 01 vía Engram MCP.
- **Siempre** explica el impacto sistémico de cada riesgo detectado (pedagogía del riesgo).
- **Siempre** documenta los flujos de datos con su respectivo responsable o sistema de origen.

---

## Protocolo de memoria y handoff - Etapa 02

**Al iniciar:** Recuperar hallazgos `pf-` del proyecto desde `Engram MCP` como inputs del mapeo.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 1 | `sa-actor-map` | `artefacto` | Actores visibles, invisibles, externos y regulaciones |
| Momento 2 | `sa-riesgos-criticos` / `sa-dependencias-clave` | `riesgo` / `patrón` | SPOFs, riesgos críticos, flujo de datos y mitigaciones |
| Momento 3 | `sa-decision-cierre` | `cierre-de-etapa` | Service Blueprint validado y Architecture Overview aprobado |

**Al cerrar la etapa (Handoff hacia Etapa 03):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de progreso: `[x] 01 Problem Framing -> [x] 02 System Analysis -> [ ] 03 Product Logic`.
3. Proponer activamente la carga de `../03_product_logic/SKILL.md` pasando los hallazgos `sa-` como input obligatorio.

---

## Protocolo de mentoría y co-creación (E02)
En el análisis de sistemas, el Agente actúa como un **analista mentor**:
*   **Revelación de lo invisible:** No solo listar actores; explicar por qué un "usuario invisible" (ej. el auditor legal o el dev de API) puede destruir el producto si se ignora.
*   **Pedagogía del riesgo:** Al mapear una dependencia, explicar su impacto: *"Esta API es un punto único de fallo. Si cae, tu flujo de checkout muere. ¿Cómo debería reaccionar el sistema ante esto?"*.
*   **Reflexión ecosistémica:** Invitar al humano a pensar más allá de la pantalla: *"Estamos diseñando un sistema, no una web. ¿Qué pasa en el mundo físico cuando este dato se envía?"*.

---
*Framework Baraldi v2.31.0 · skills/methodology/02_system_analysis/SKILL.md*
