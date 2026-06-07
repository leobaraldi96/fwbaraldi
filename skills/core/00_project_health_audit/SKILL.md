---
name: project-health-audit
description: >
  Skill experta para auditar la salud, coherencia y deudas del proyecto activo.
  Actúa como el "Framework Doctor", detectando conflictos semánticos,
  hipótesis sin validar y brechas en la arquitectura de información.
  Trigger: "Auditar proyecto", "Salud del proyecto", "Framework Doctor", 
  "Estado de coherencia".
version: "2.26.10"
---

# 🩺 Capa 00 — Project Health Audit (Framework Doctor)

> **Misión:** Garantizar que el producto mantenga su integridad sistémica a lo largo de todas las etapas, evitando el "Drift" (desviación) entre la visión inicial y la implementación actual.

## 🔬 Protocolo de Auditoría (El Diagnóstico)

Cuando el usuario solicita un diagnóstico, el Agente debe ejecutar los siguientes pasos en orden:

### 1. Escaneo de Integridad de Artefactos (Integrity Scan)
- Verificar la existencia de los documentos mandatorios en `docs-fwbaraldi/`.
- **KPI:** % de completitud de la etapa actual.
- **Detección:** ¿Hay archivos vacíos o con placeholders de "ejemplo"?

### 2. Auditoría de Coherencia Semántica (Semantic Consistency)
- Comparar el `01_Problem_Statement.md` con los artefactos de la etapa más avanzada (ej. Etapa 03 o 04).
- **Relaciones Engram:**
    - `[CONFLICT]` — ¿Una feature propuesta contradice un KPI de éxito de la Etapa 01?
    - `[DRIFT]` — ¿Se está diseñando algo que no está "scoped" en el Problem Framing?
    - `[EVOLVED]` — ¿Una decisión técnica "supersedes" (supera) una limitación identificada al inicio?

### 3. Vigilancia de Hipótesis (Hypothesis Tracking)
- Analizar el `docs-fwbaraldi/` en busca de etiquetas `[HIPÓTESIS]`.
- **KPI:** Ratio de Hipótesis vs. Hallazgos Validados.
- **Alerta:** Si hay más de 3 hipótesis críticas sin validar, el "Doctor" debe emitir una recomendación de freno.

---

## 📊 Formato del Informe: "The Health Score"

El output de esta skill **SIEMPRE** debe ser un documento estructurado con el siguiente formato visual:

### 🏥 Diagnóstico del Proyecto: [NOMBRE]

**Salud Sistémica Global: [XX%]**

| Área | Estado | Hallazgo del Doctor |
| :--- | :---: | :--- |
| **Integridad Docs** | 🟢 | Todos los artefactos están sincronizados. |
| **Coherencia** | 🟡 | Se detectó una feature en E03 no mapeada en E01. |
| **Validación** | 🔴 | 5 Hipótesis críticas sin evidencia de respaldo. |
| **Backlog** | 🟢 | El Scope Creep está bajo control. |

---

### 💊 Tratamiento Recomendado (Próximos Pasos)
1. **Acción Prioritaria:** [Ej: Validar la hipótesis de pago antes de seguir con el UI].
2. **Higiene:** [Ej: Sincronizar el Glosario con la nueva Taxonomía].
3. **Guardrail:** [Ej: Aplicar Ley de Respiro en el próximo Dashboard].

---

## 👑 Mandato de Soberanía en la Auditoría
- El Doctor **informa**, el Humano **cura**.
- Nunca borres un archivo por un diagnóstico negativo. Propón la corrección.
- Si el humano decide ignorar un conflicto semántico, documéntalo como una "Decisión Consciente de Riesgo".

---
*Framework Baraldi v2.26.10 · Project Health Audit*
