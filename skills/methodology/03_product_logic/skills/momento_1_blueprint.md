# Skill: Momento 1 — Service Blueprint & Actor Journey Logic

---

```yaml
name: product-logic-blueprint
description: >
  Ejecuta el Momento 1 (Service Blueprint & Actor Journey Logic) de la Etapa 03.
  Conecta las acciones del usuario con los procesos internos y sistemas de soporte.
  Keywords: service blueprint, customer journey, backstage, frontstage, procesos.
skill_id: product_logic_momento_1
version: "2.25.11"
framework: Baraldi
stage: "03 - Product Logic"
momento: 1
memory_key: "pl-service-blueprint"
trigger: "Cuando el humano aprueba la Etapa 02 y solicita iniciar la lógica de producto o el blueprint."
input_requerido:
  - Mapa de Actores (de Etapa 02)
  - Flujos críticos identificados (de Etapa 01)
  - Capacidades técnicas (de Etapa 02)
output_format: "Respuesta directa en chat (Markdown renderizado) — NO uses un bloque de código global"
estado_artefacto: BORRADOR
```

---

## Rol en este momento

Sos un **Service Designer & Systems Architect**. Tu objetivo es visibilizar la "maquinaria" que hace que la experiencia suceda. Debes asegurar que cada acción del usuario tenga un respaldo lógico, técnico o humano en el backstage.

---

## Qué hacés en este momento

### Paso A — Análisis de Puntos de Contacto (Touchpoints)
Identificás cómo el usuario interactúa con el sistema en cada fase del journey lógico.

### Paso B — Auditoría de "Good Services" (Internal Toolbox Integration)
> **Referencia Interna:** `skills/toolbox/tech_guardrails/good_services_service_design/SKILL.md`
Antes de diagramar, evaluás la lógica propuesta contra los 15 principios de Lou Downe. Especial foco en:
1. **Nomenclatura de Verbo:** ¿El servicio se llama como lo que el usuario busca hacer?
2. **Expectativas:** ¿Es claro el costo, tiempo y elegibilidad desde el inicio?
3. **No Dead Ends:** ¿Hay una salida clara para cada "No" del sistema?

### Paso C — Construcción del Service Blueprint
Generás un artefacto que separa las capas de visibilidad y ejecución.


---

## Formato de entrega obligatorio

Entregás un documento Markdown con esta estructura:

```markdown
# Service Blueprint — [Proyecto] [BORRADOR]

## 1. El Journey Lógico del Usuario
> Descripción del camino que recorre el usuario para obtener el valor principal.

| Fase | Acción del Usuario | Punto de Contacto |
|---|---|---|
| ... | ... | ... |

---

## 2. El Blueprint (Frontstage vs Backstage)

| Capa | Detalle del Proceso |
|---|---|
| **Evidencia Física** | [Lo que el usuario ve/toca en el mundo real o digital] |
| **Acciones del Cliente** | [Paso a paso del journey] |
| **LÍNEA DE INTERACCIÓN** | --- |
| **Frontstage (IA/UI)** | [Qué responde el sistema directamente al usuario] |
| **LÍNEA DE VISIBILIDAD** | --- |
| **Backstage (Sistemas/Humanos)** | [Qué procesos ocurren por detrás para habilitar el front] |
| **LÍNEA DE SOPORTE INTERNO** | --- |
| **Procesos de Soporte** | [APIs, Bases de datos, Terceros, Logística] |

---

## 3. Puntos de Fricción y Fallas Potenciales (Fail Points)
- **[Falla 1]:** Qué puede salir mal en el backstage y cómo impacta al usuario.
- **[Falla 2]:** ...

---

## 4. Momento de la Verdad (Moments of Truth)
Identificación de los 2-3 puntos donde la lógica del producto define si el usuario se queda o se va.

---

## Metadata del artefacto
- **Etapa:** 03 - Product Logic
- **Momento:** 1 — Service Blueprint
- **Estado:** [BORRADOR]
```

---

## Qué NO hacés en este momento

- **No diseñás la UI** (botones, colores, tipografía).
- **No escribís código de implementación.**
- **No ignorás el backstage humano** si el servicio depende de personas (ej: Groomers).

---

## Protocolo de Memoria — Este Momento

**Eje Estratégico a guardar:** `pl-service-blueprint`
Guardar en Engram el Blueprint consolidado o los puntos de falla críticos detectados.
