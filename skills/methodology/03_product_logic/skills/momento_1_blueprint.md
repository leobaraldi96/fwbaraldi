# Skill: Momento 1 — Product Logic Orchestration (Actor & Service Blueprint)

---

```yaml
name: product-logic-orchestration
description: >
  Ejecuta el Momento 1 de la Etapa 03. 
  Orquesta la maquinaria del producto mediante dos capas:
  1. Actor Logic (Estática): Alcance, permisos y reglas de negocio por actor.
  2. Service Blueprint (Temporal): Flujo paso a paso con línea de visibilidad.
  Keywords: product logic, actor logic, service blueprint, backstage, frontstage, línea de visibilidad.
skill_id: product_logic_momento_1
version: "2.25.13"
framework: Baraldi
stage: "03 - Product Logic"
momento: 1
memory_key: "pl-orchestration"
trigger: "Cuando el humano solicita iniciar la lógica de producto o el blueprint de orquestación."
input_requerido:
  - Mapa de Actores (de Etapa 02)
  - Flujos críticos (de Etapa 01)
output_format: "Respuesta directa en chat (Markdown renderizado) — NO uses un bloque de código global"
estado_artefacto: BORRADOR
```

---

## Rol en este momento

## Propósito
Definir la **Jurisdicción de Lógica** (quién puede hacer qué) y la **Orquestación Temporal** (cuándo sucede cada acción) para TODOS los actores identificados en el sistema.

## Pre-requisitos (Bloqueo)
> **⚠️ REGLA DE ORO:** Antes de proceder, la IA **DEBE** realizar una auditoría exhaustiva de los artefactos de la **Etapa 02 (System Analysis)**. 
> 
> **Protocolo de Inicio Obligatorio:**
> 1. Listar TODOS los actores (Humanos y Sistemas) detectados en el "Mapa de Actores" o "Ecosistema" de la Etapa 02.
> 2. No omitir actores secundarios ni integraciones externas (APIs de terceros, Logística, etc.).
> 3. Si la IA detecta una discrepancia entre lo mapeado en la Etapa 02 y lo solicitado ahora, debe alertar al humano antes de continuar.

---

## Instrucciones Operativas

### Paso 0 — Matriz de Orquestación y Priorización (Backlog Lógico)
Antes de orquestar, la IA debe proponer un **Inventario Estratégico de Circuitos**. Esta fase es de co-construcción; debés presentar una tabla basada en los artefactos de la Etapa 02 siguiendo este formato:

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
| Circuito | Naturaleza | Impacto (Core) | Prioridad MVP | Estado |
|---|---|---|---|---|
| **Acceso/Login** | Macro/General | Alto | **URGENTE** | To Map |
| **Envío de Email** | Comunicación | Medio | Backlog | Pendiente |
| **Slider Home** | Micro-flujo | Bajo | Futuro | Pendiente |

**Protocolo de Alineación:**
1.  **Mapeo de Universo:** La IA propone todos los flujos (Generales, Especiales, Comunicacionales, Cambios de Estado).
2.  **Selección de Foco:** El humano define en qué circuitos se hará "Doble Clic" (Paso 1 y 2) en esta sesión según la necesidad de Dev o el MVP.
3.  **Persistencia:** Los circuitos no seleccionados se registran como pendientes para expandir el backlog del proyecto, asegurando que la visión total no se pierda.

### Paso 1 — Actor Logic Definition (Capa Estática)
Para **CADA UNO** de los actores identificados en la auditoría previa, definís su lógica base:
- **Jurisdicción:** ¿Qué alcance tiene este actor? ¿Es multi-tenant? ¿Es global?
- **Capacidades de UI:** Qué acciones dispara desde la interfaz.
- **Reglas de Backend (RLS / SQL):** Qué filtros o permisos técnicos lo limitan.
- **Requerimientos Funcionales de Alto Nivel:** Lo que el desarrollador debe saber sobre la "responsabilidad" de este actor.

### Paso 2 — Service Blueprint (Capa Temporal)
Diseñás el paso a paso del servicio. Es **obligatorio** que sea un flujo secuencial:
- **Línea de Interacción:** Divide al usuario del sistema (Frontstage).
- **Línea de Visibilidad:** El "Muro de Berlín" del UX. Separa lo que el usuario ve de los procesos invisibles (Backstage).
- **Línea de Soporte Interno:** Conecta el backstage con sistemas externos, bases de datos o logística.

---

## Formato de entrega obligatorio

Entregás un documento Markdown con esta estructura:

```markdown
# Product Logic Orchestration — [Proyecto] [BORRADOR]

## 1. Actor Logic Definition (Matriz de Responsabilidad)
> Define el alcance legal y técnico de los actores principales.

### Actor: [Nombre del Actor]
- **Definición del Rol:** [Resumen del propósito del actor en el sistema]
- **Capacidades Críticas:** [Acciones que puede ejecutar]
- **Reglas Lógicas de Backend:** [Ej: RLS, Logs de auditoría, Validaciones]

---

## 2. Visual Orchestration (Service Blueprint Diagram)
> Diagrama de secuencia (Mermaid) que visualiza el "ping-pong" entre actor y backstage.
> **Regla:** Usar `sequenceDiagram` para mostrar claramente la Línea de Visibilidad.

[AQUÍ VA EL DIAGRAMA MERMAID]

---

## 3. Service Blueprint Detail (Tabla de Orquestación)
> Detalle técnico del paso a paso.

| Fase | Acción del Actor (Frontstage) | [LÍNEA DE VISIBILIDAD] | Procesos de Sistema (Backstage) | Soporte / DB / APIs |
|:--- |:--- |:---:|:--- |:--- |
| **Inicio** | [Acción con Verbo] | | [Respuesta Sistema] | [Query/Integración] |
| **...** | ... | | ... | ... |

---

## 4. Puntos de Falla y Momentos de la Verdad
- **Fail Points:** Donde la lógica puede romperse (ej: caída de API de pago).
- **Moments of Truth:** Donde la respuesta del backstage define la satisfacción (ej: velocidad de validación de QR).

---

## Metadata del artefacto
- **Etapa:** 03 - Product Logic
- **Momento:** 1 — Orchestration
- **Versión:** [Versión Actual]
```

---

## Reglas de Oro (Nunca rompas esto)
1. **Verbos de Acción:** En el Blueprint, cada celda debe empezar con un verbo (Entra, Valida, Envía, Registra).
2. **No al Agnosticismo en el Backstage:** El UX debe definir qué hace el sistema (ej: "Trigger de email" o "Cálculo de comisión"), no dejarlo como una caja negra.
3. **Sincronía:** El Blueprint describe UN flujo a la vez (ej: "Compra de curso" o "Reserva de práctica"). No intentes meter todo el producto en un solo cuadro.

---

## Protocolo de Memoria — Este Momento
**Eje Estratégico:** `pl-orchestration-logic`
Guardar en Engram la Matriz de Actor y los puntos de falla críticos.

