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
**Regla clave:** Siempre incluir usuarios invisibles (devs, QA, ops, negocio, soporte). Son tan importantes como los usuarios finales.

### Momento 2 — Análisis de Dependencias y Riesgos
**Archivo:** `skills/momento_2_dependencias.md`
**Referencia:** `references/system_mapping_guide.md`
**Activar cuando:** El Actor Map y System Map inicial están aprobados por el equipo.
**Produce:** Dependency Map, Data Flow Map, Risk Map.
**Regla clave:** Las dependencias ocultas son más peligrosas que las visibles. Buscar activamente lo que no está documentado.

### Momento 3 — Documentación del Sistema
**Archivo:** `skills/momento_3_documentacion.md`
| Artefacto | Momento | Formato |
|---|---|---|
| Actor Map Consolidado | 1 | Documento Markdown |
| Dependency Map | 2 | Documento Markdown |
| Data Flow Map | 2 | Documento Markdown |
| Risk Map | 2 | Documento Markdown |
| Architecture Overview | 3 | Documento Markdown |
| Service Blueprint | 3 | Documento Markdown |

## u{1F6E0}u{FE0F} Motores de Análisis (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Concept Synthesis (Toolbox):** Técnicas de *Problem Reframing* para convertir riesgos en oportunidades de diseño.
2. **UX Audit Engine (`skills/engines/ux_audit_rethink_engine/`):** Motor de Auditoría Holística de UX. Activar cuando se analiza un producto **legado** con UI preexistente que necesita diagnóstico antes de rediseñar.
3. **DS Audit Engine (`skills/engines/ds_audit_engine.md`):** Auditoría de Design Systems. Activar cuando el producto legado tiene un DS existente (Figma, Storybook) que debe evaluarse antes de asumir la Etapa 06.
4. **Competitor Intelligence Engine (`skills/engines/competitor_intelligence_engine/`):** Análisis de brechas competitivas, SEO/GEO y battlecards. Activar durante el **Momento 1** para completar el análisis del ecosistema.
5. **Service Blueprint Engine (`skills/engines/service_blueprint_engine/`):** Conecta experiencia frontstage con operación backstage. Activar en el **Momento 3** (Documentación del Sistema).
6. **Good Services Engine (`skills/engines/good_services_engine/`):** Estándares de diseño de servicios de alta calidad (Louise Downe). Consultar como guardrail de calidad sistémica.

---

## Modelo de decisión para avanzar a Etapa 03

**Avanzar a Etapa 03 — Product Logic** cuando:
- El Actor Map cubre a todos los actores visibles, invisibles y del sistema
- Las dependencias críticas están identificadas con nivel de riesgo
- Los flujos de datos principales están documentados
- Los gaps del sistema están explícitamente marcados como riesgos activos

**No avanzar** si:
- Hay dependencias técnicas críticas sin resolver que bloquearían la lógica del producto
- Los usuarios invisibles no fueron identificados (producirá diseño con deuda técnica)
- El equipo técnico no validó el Architecture Overview

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
