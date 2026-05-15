---
name: system-analysis
description: >
  Ejecuta la Etapa 02 completa (System Analysis) del Framework Baraldi.
  Usalo después de cerrar la Etapa 01 con outcomes validados. Mapea el ecosistema
  completo donde vive el producto — actores, dependencias técnicas, flujos de datos
  e integraciones — antes de diseñar cualquier solución. Detecta fricciones
  sistémicas, duplicaciones y riesgos ocultos que el diseño de UX no puede ver.
  Keywords: system analysis, sistema, ecosistema, dependencias, arquitectura,
  flujos de datos, integraciones, usuarios invisibles, etapa 2, system map.
  SIEMPRE usalo cuando el humano mencione "etapa 2", "system analysis",
  "mapear el sistema" o cuando los outcomes de Etapa 01 estén validados.
  NO LO USAR si el problema no se ha validado en la Etapa 01.
version: "2.26.4"
framework: Baraldi
stage: "02"
stage_name: "System Analysis"
status: complete
---

# Etapa 02 — System Analysis

> **Objetivo:** Entender el ecosistema completo donde vive el producto antes de
> diseñar cualquier interfaz o lógica. El producto no es una pantalla — es un
> sistema de actores, reglas, flujos y dependencias. Si no se mapea el sistema,
> el diseño opera a ciegas.

---

## Cuándo se activa esta etapa

Se activa cuando:
- El Informe de Cierre de Etapa 01 tiene decisión firmada de "Avanzar"
- Los 5 artefactos de Problem Framing están aprobados
- La hipótesis central tiene confianza Media o Alta

No se activa si:
- Etapa 01 terminó con decisión de "Iterar" o "Pivotar"
- El Problem Statement todavía no está validado con usuarios reales

> **[MEMORIA — Al activar esta etapa]** Recuperar todos los hallazgos `pf-` del proyecto activo desde `Engram MCP`. Son los inputs fundamentales de esta etapa. Presentar resumen al humano antes de iniciar el Momento 1.

---

## Flujo de la etapa — 3 momentos en secuencia

```
Artefactos de Etapa 01 aprobados
        ↓
[MOMENTO 0] Anuncio y Validación de Bases
        ↓
[MOMENTO 1] Mapeo de Actores y Ecosistema
        ↓
  IF sistema suficientemente mapeado?
  ├── NO → profundizar en áreas grises
  └── SÍ ↓
[MOMENTO 2] Análisis de Dependencias y Riesgos
        ↓
[MOMENTO 3] Documentación del Sistema
        ↓
  System Map + Protocolo de Ubicación Sistémica
        ↓
      Etapa 03 — Product Logic
```

---

## Los 4 momentos — cuándo activar cada uno

### Momento 0 — Anuncio y Validación de Bases
**Archivo:** `skills/momento_0_anuncio.md`
**Activar cuando:** Se cierra Etapa 01 y se inicia Etapa 02.
**Produce:** Bienvenida humanizada, objetivos de la etapa y validación del alcance previo.

### Momento 1 — Mapeo de Actores y Ecosistema
**Archivo:** `skills/momento_1_mapeo.md`
**Activar cuando:** Se cierra Etapa 01 y se inicia Etapa 02.
**Produce:** Actor Map Consolidado (Actores Visibles, Invisibles y del Sistema) y solicitudes de stack tecnológico.

**⚡ REGLAS DE MAPEO DE ACTORES (Búsqueda Activa):**
El Agente debe buscar activamente actores invisibles que el humano suele olvidar:

| Categoría | Actores típicos | Por qué importa mapearlos |
|---|---|---|
| **Equipo técnico** | Dev Frontend, Dev Backend, DevOps, QA | Son los primeros usuarios invisibles — diseñar sin ellos genera deuda técnica |
| **Equipo de negocio** | Product Manager, Owner, Finanzas | Sus restricciones definen límites del sistema que el diseño no puede ignorar |
| **Operaciones** | Soporte, Admin, Moderación | Mantienen el sistema vivo — si su trabajo no está diseñado, el sistema se degrada |
| **Sistemas externos** | APIs de pago, motores de búsqueda, servicios de auth | Tienen sus propias reglas, costos y puntos de falla independientes |
| **Regulaciones** | AFIP, GDPR, App Store policies | Imponen restricciones que **no son negociables** y pueden invalidar el diseño entero |
| **Usuarios futuros** | Quienes se incorporarán cuando el sistema escale | Sus necesidades deben estar en la arquitectura desde el inicio — no como parche posterior |

### Momento 2 — Análisis de Dependencias y Riesgos
**Archivo:** `skills/momento_2_dependencias.md`
**Activar cuando:** El Actor Map y System Map inicial están aprobados por el equipo.
**Produce:** Dependency Map, Data Flow Map, Risk Map.

**⚡ REGLAS DE MAPEO DE DEPENDENCIAS Y RIESGOS:**
- **Patrones de Dependencia a Detectar (Buscar estas topologías):**
  1. **Lineal (`A → B → C`):** Si B falla, C muere (Cascada). *Mitigación:* Fallbacks en B.
  2. **Estrella / SPOF (`A → HUB ← C`):** Un HUB central. Si cae, tira todo el sistema. *Mitigación:* Abstraer con capa intermedia o redundancia.
  3. **Circular (`A → B → C → A`):** El más peligroso. Genera loops y estados inconsistentes. *Mitigación:* Romper el ciclo obligatoriamente.
  4. **Bidireccional Fuerte (`A ↔ B`):** Alto acoplamiento. Un cambio en A rompe B. *Mitigación:* Contratos de API estrictos.
- **Criticidad Obligatoria:** Todo nodo debe etiquetarse como `[CRÍTICA]` (bloquea todo), `[ALTA]` (bloquea core), `[MEDIA]` (degrada experiencia), `[BAJA]` (invisible).
- **Tipos de Riesgo a Auditar:** Técnicos (Deuda, Escalabilidad), de Datos (Pérdida, GDPR), de Negocio (Vendor lock-in) y Externos (Leyes, App Store).

> ⚠️ **Señales de Alerta de Riesgo — Frases que activan bandera roja inmediata:**
> - *Técnico:* "siempre lo hicimos así", "ese módulo nadie lo toca", "si cambiamos eso se rompe todo".
> - *Datos:* "no tenemos backup", "esos datos los guardamos por si acaso", "no sé exactamente qué hay en esa tabla".
> - *Negocio:* "dependemos de un solo proveedor para eso", "si ellos cambian el precio, cerramos".
> Cuando el equipo dice alguna de estas frases, documentar el riesgo como `[CRÍTICA]` hasta que se pruebe lo contrario.

### Momento 3 — Documentación del Sistema (Service Blueprint)
**Archivo:** `skills/momento_3_documentacion.md`

**⚡ FORMATO ESTRICTO DEL SERVICE BLUEPRINT:**
El mapa debe contener siempre 5 capas divididas por la Línea de Interacción y la Línea de Visibilidad:
1. **Evidencia Física:** Qué ve/toca el usuario (Pantalla, email).
2. **Acciones del Usuario:** Qué hace (Clic, navega).
3. **Frontstage (Visible):** Qué hace el sistema de cara al usuario.
4. **Backstage (Invisible):** Qué hace el sistema internamente (Valida, procesa).
5. **Soporte/Sistemas:** Bases de datos, APIs de terceros, Staff.

| Artefacto | Momento | Formato |
|---|---|---|
| Actor Map Consolidado | 1 | Documento Markdown |
| Dependency Map | 2 | Documento Markdown |
| Data Flow Map | 2 | Documento Markdown |
| Risk Map | 2 | Documento Markdown |
| Architecture Overview | 3 | Documento Markdown |
| Service Blueprint | 3 | Documento Markdown |

## 🛠️ Motores de Análisis (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Concept Synthesis:** Técnicas de *Problem Reframing* para convertir riesgos en oportunidades de diseño.
2. **UX Audit Engine (`skills/engines/ux_audit_rethink_engine/`):** Motor de Auditoría Holística de UX. Activar en rediseños de productos legados.
3. **DS Audit Engine (`skills/engines/ds_audit_engine.md`):** Auditoría de Design Systems para evaluar escalabilidad.
4. **Competitor Intelligence Engine (`skills/engines/competitor_intelligence_engine/`):** Análisis de brechas competitivas (Momento 1).
5. **Good Services Engine (`skills/engines/good_services_engine/`):** 15 principios de Louise Downe (Estándar de calidad sistémica).

---

## Modelo de decisión para avanzar a Etapa 03 (Checklist de Completitud)

**Avanzar a Etapa 03 — Product Logic** cuando:

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

## 🚫 NEVER List — Anti-patrones de la Etapa 02
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER asumas que el sistema está documentado:** Siempre verifica y pregunta por la arquitectura real, no solo la declarada.
2.  **NEVER ignores a los "Usuarios Invisibles":** Soporte, Legal y Ops son críticos. Ignorarlos genera fallos operativos graves.
3.  **NEVER diseñes lógica (E03) antes de cerrar esta etapa:** No puedes definir el "cómo" sin conocer los límites del ecosistema.
4.  **NEVER dejes dependencias sin nivel de riesgo:** Todo servicio externo debe marcarse como `[CRÍTICA]`, `[ALTA]`, `[MEDIA]` o `[BAJA]`.
5.  **NEVER omitas los "Gaps" del sistema:** Lo que no se pudo mapear debe quedar documentado como un riesgo activo.
6.  **NEVER asumas factibilidad sin validación técnica:** El *Architecture Overview* debe ser validado por ingeniería antes de avanzar.

## ✅ ALWAYS List — Mandatos de Comportamiento
- **Siempre** busca actores invisibles que no aparecen en el listado inicial.
- **Siempre** recupera los hallazgos `pf-` de la Etapa 01 vía Engram MCP.
- **Siempre** explica el impacto sistémico de cada riesgo detectado (Pedagogía del Riesgo).
- **Siempre** documenta los flujos de datos con su respectivo responsable o sistema de origen.

### Protocolo de Memoria — Etapa 02

**Al iniciar:** Recuperar hallazgos `pf-` del proyecto desde `Engram MCP` como inputs del mapeo.

**Al cerrar cada Momento:** Guardar Hallazgo Sistémico:
- Momento 1 → Eje: `sa-actor-map` (tipo: `artefacto`)
- Momento 2 → Eje: `sa-riesgos-criticos` (tipo: `riesgo`) y `sa-dependencias-clave` (tipo: `patrón`)
- Momento 3 → Eje: `sa-decision-cierre` (tipo: `cierre-de-etapa`)

**Al cerrar la etapa:** 
1. Ejecutar el Protocolo de Cierre de Ubicación Sistémica del `00_boot/context.md`.
2. Mostrar Mapa de Progreso: `✅ 01 Problem Framing | ✅ 02 System Analysis | 🚧 03 Product Logic`.
3. Ejecutar el Protocolo de Cierre de Sesión del `00_boot/context.md`.

---
## 🧠 Protocolo de Mentoría y Co-creación (E02)
En el análisis de sistemas, el Agente actúa como un **Analista Mentor**:
*   **Revelación de lo Invisible:** No solo listar actores; explicar por qué un "usuario invisible" (ej. el auditor legal o el dev de API) puede destruir el producto si se ignora.
*   **Pedagogía del Riesgo:** Al mapear una dependencia, explicar su impacto: *"Esta API es un Punto Único de Fallo. Si cae, tu flujo de checkout muere. ¿Cómo debería reaccionar el sistema ante esto?"*.
*   **Reflexión Ecosistémica:** Invitar al humano a pensar más allá de la pantalla: *"Estamos diseñando un sistema, no una web. ¿Qué pasa en el mundo físico cuando este dato se envía?"*.

---
*Framework Baraldi v2.26.3 · skills/methodology/02_system_analysis/SKILL.md*
