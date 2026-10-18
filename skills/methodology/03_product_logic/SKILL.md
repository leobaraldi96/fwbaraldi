---
name: product-logic
description: >
  Ejecuta la Etapa 03 (Product Logic) del Framework Baraldi.
  Define la inteligencia, reglas de negocio, permisos y modelo de datos antes del diseño visual.
  Keywords: product logic, reglas de negocio, modelo de datos, entidades,
  kpi, north star, flujos logicos, state machine, permisos.
  Activar cuando se cierre la Etapa 02 (System Analysis).
version: "2.31.0"
framework: Baraldi
stage: "03"
stage_name: "Product Logic"
status: operational
---

# Etapa 03 - Product logic

> **Objetivo:** Construir el "cerebro" del producto. Definir los flujos lógicos, las entidades de datos, los permisos por actor y las reglas de negocio que gobiernan el sistema antes de diseñar interfaces.

---

## Flujo de la etapa - 3 momentos en secuencia

```
[MOMENTO 1] Actor logic & permissions - quién hace qué (skills/momento_1_blueprint.md)
        ↓
  Validar viabilidad de roles
        ↓
[MOMENTO 2] Entidades de datos & business rules (skills/momento_2_entities_rules.md)
        ↓
  Validar integridad lógica
        ↓
[MOMENTO 3] Flujogramas lógicos & product KPIs (skills/momento_3_flows_metrics.md)
        ↓
  Validación de implementabilidad (Matriz SDD)
        ↓
       Etapa 04 - Information architecture (../04_information_architecture/SKILL.md)
```

---

## Los 3 momentos - cuándo activar cada uno

### Momento 1 - Actor logic & permissions
**Archivo:** `skills/momento_1_blueprint.md`
**Activar cuando:** Se aprueba el cierre de la Etapa 02 (`../02_system_analysis/SKILL.md`).
**Objetivo:** Definir la jurisdicción de los actores en el sistema (roles y permisos).
**Produce:**
1. **Actor Logic Matrix:** Tabla de alcance y reglas de permisos (CRUD) por actor.
2. **State Machines (estados):** Diagramas de cómo un objeto (ej. "Pedido") pasa de un estado a otro (Pendiente -> Pagado).

### Momento 2 - Entidades de datos & business rules
**Archivo:** `skills/momento_2_entities_rules.md`
**Activar cuando:** La Actor Logic Matrix está validada por el usuario.
**Objetivo:** Definir el "diccionario" del sistema y las leyes condicionales que lo rigen.
**Produce:**
1. **Data Schema (lite):** Listado de entidades, atributos principales y relaciones (1:1, 1:N, N:N). No requiere SQL, solo estructura lógica.
2. **Business Rules Matrix:** Matriz de condiciones y consecuencias. Debe incluir estos 4 tipos de reglas:
   - *Validación:* "No se puede [Acción] si no se cumple [Condición]".
   - *Derivación:* "Si el usuario es Premium, aplicar 20% de descuento".
   - *Estado (State Machine):* "Un pedido pasa a Pagado SOLO si la API de pago devuelve éxito".
   - *Restricción de tiempo:* "Las cancelaciones deben ocurrir con 24h de antelación".

### Momento 3 - Flujogramas lógicos & product KPIs
**Archivo:** `skills/momento_3_flows_metrics.md`
**Activar cuando:** Las entidades de datos y reglas de negocio están aprobadas.
**Objetivo:** Visualizar el movimiento de la información y definir la medición de éxito del producto.
**Produce:**
1. **Logical Flowcharts (Mermaid):** Diagramas de flujo lógico para procesos complejos (ej. Checkout, Registro).
2. **Product KPI Strategy:** Definición de North Star Metric y métricas de soporte (ej. HEART o AARRR).

> **Regla de clasificación de métricas:** Priorizar siempre **métricas Leading** (uso de features, tickets abiertos: avisan *antes* del problema) sobre **métricas Lagging** (MRR, Churn: miran el pasado y no pueden corregirse a tiempo). Si la métrica sube y no sabés qué acción tomar, es vanidad.

### Momento 3.5 - Validación de implementabilidad (Matriz SDD)
**Activar cuando:** Se cierra el Momento 3 y antes de entregar la lógica a la Etapa 04.
**Propósito:** Asegurar que la lógica definida no sea solo "teórica" sino **implementable**. Esta matriz actúa como contrato entre diseño y desarrollo.

**La Matriz SDD (Baraldi Edition):**
Cada funcionalidad crítica debe pasar por este flujo antes de darse por aprobada:

| Funcionalidad | Explore (riesgos) | Propose (alcance) | Apply (lógica core) | Verify (criterio de aceptación) |
|:---|:---|:---|:---|:---|
| **[Nombre feature]** | ¿Qué dependencias técnicas o bloqueos tiene? | ¿Qué se hace y qué queda fuera (scope)? | ¿Cuál es la regla de negocio central? | ¿Cómo sabemos que funciona correctamente? |

**Cross-check de integridad semántica:**
Antes de cerrar la matriz, verificar para cada feature:
1. **¿Es `scoped`?:** ¿Aparece en los artefactos de la Etapa 01 (Problem Framing)?
2. **¿Hay `conflicts_with`?:** ¿Contradice alguna limitación técnica detectada en la Etapa 02?
3. **¿Esta lógica `supersedes` a una propuesta anterior?:** Si sí, documentar cuál y por qué.

---

## Motores y herramientas (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Advanced Prioritization Protocol (`../../toolbox/advanced_prioritization_protocol/SKILL.md`):** Aplicar para priorizar el backlog de reglas lógicas.
2. **Pricing & Monetization Protocol (`../../toolbox/pricing_and_monetization_protocol/SKILL.md`):** Consultar siempre para alinear lógica de accesos/permisos con la estrategia de ingresos.
3. **Product Metrics Engine (`skills/engines/product_metrics_engine/SKILL.md`):** Motor mandatorio para el **Momento 3** (KPIs).

*(Nota: Si se requiere mapear un Service Blueprint con línea de visibilidad, se debe invocar a la Etapa 02, no a la 03).*

---

## NEVER List - Anti-patrones de la Etapa 03
El Agente debe **bloquear** el proceso si detecta:

1. **NEVER definas roles genéricos:** Los permisos (CRUD) deben ser granulares y específicos por cada tipo de actor.
2. **NEVER definas reglas sin edge cases:** Las reglas de negocio deben contemplar errores y excepciones, no solo el "camino feliz".
3. **NEVER avances sin validar factibilidad de datos:** El modelo de datos lógico debe poder ser construido por el equipo de ingeniería.
4. **NEVER uses "vanity metrics":** Prohibido usar clics o visitas como North Star. Usa métricas de conversión o retención real. Recordar: las métricas **Lagging** (MRR, Churn) miran el pasado; complementar siempre con **Leading** (uso de features, activación) que permiten actuar antes.
5. **NEVER omitas la estrategia de monetización:** La lógica del producto (ej. paywalls, límites de uso) debe estar conectada al modelo de negocio.
6. **NEVER uses pie charts para datos similares:** Usar pie charts solo si los componentes difieren en más del 20-30%. Si los segmentos son similares en tamaño, usar bar chart apilado horizontal (bullet graph). Un pie chart con 5 segmentos similares es ciego.

## ALWAYS List - Mandatos de comportamiento
- **Siempre** utiliza diagramas Mermaid para visualizar *State Machines* (cambios de estado) y *Flowcharts*.
- **Siempre** redacta las Business Rules en formato `Condición -> Acción -> Excepción`.
- **Siempre** busca los diagramas de sistema `sa-` (System Analysis) en Engram MCP antes de definir la lógica de permisos.
- **Siempre** define la *North Star Metric* antes de cerrar la etapa.

---

## Protocolo de memoria y handoff - Etapa 03

**Al iniciar:** Buscar en `Engram MCP` los hallazgos `sa-` de Etapa 02 para entender el ecosistema.

**Al cerrar cada momento (Persistencia en Engram):**

| Momento | Topic Key (`topic_key`) | Tipo | Contenido a persistir |
|---|---|---|---|
| Momento 1 | `pl-permissions` | `arquitectura` | Matriz CRUD de actores y máquinas de estado iniciales |
| Momento 2 | `pl-business-rules` | `decisión` | Esquema lógico de datos y matriz de reglas condicionales |
| Momento 3 | `pl-north-star-metric` | `estrategia` | Flujogramas lógicos, North Star Metric y Matriz SDD validada |

**Al cerrar la etapa (Handoff hacia Etapa 04):**
1. Ejecutar el protocolo de cierre de ubicación sistémica de `../../../00_boot/context.md`.
2. Mostrar mapa de progreso: `[x] 02 System Analysis -> [x] 03 Product Logic -> [ ] 04 Information Architecture`.
3. Proponer activamente la carga de `../04_information_architecture/SKILL.md` pasando los hallazgos `pl-` como input obligatorio.

---

*Framework Baraldi v2.31.0 · skills/methodology/03_product_logic/SKILL.md*
