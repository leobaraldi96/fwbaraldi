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
version: "2.25.10"
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
**Activar cuando:** El Dependency Map y Risk Map están completos.
**Produce:** Architecture Overview, Service Blueprint, documentación técnica lista para Etapa 03.
**Regla clave:** El output de esta etapa es el input de Product Logic. Si falta algo, Product Logic va a tomar decisiones sobre supuestos — documentar los gaps explícitamente.

---

## Artefactos de salida de la etapa

| Artefacto | Momento | Formato |
|---|---|---|
| Actor Map Consolidado | 1 | Documento Markdown |
| Dependency Map | 2 | Documento Markdown |
| Data Flow Map | 2 | Documento Markdown |
| Risk Map | 2 | Documento Markdown |
| Architecture Overview | 3 | Documento Markdown |
| Service Blueprint | 3 | Documento Markdown |

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

## Protocolo de comportamiento en esta etapa

- **Nunca** asumir que el sistema está documentado — preguntar y verificar
- **Siempre** buscar actores invisibles que no aparecen en el listado inicial
- **Nunca** diseñar lógica de producto antes de cerrar esta etapa
- **Siempre** marcar dependencias con nivel de criticidad: `[CRÍTICA]`, `[ALTA]`, `[MEDIA]`, `[BAJA]`
- **Siempre** documentar lo que NO se pudo mapear como gaps explícitos

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

*Framework Baraldi v2.25.10 · skills/methodology/02_system_analysis/SKILL.md*
