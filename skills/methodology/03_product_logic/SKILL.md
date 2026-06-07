---
name: product-logic
description: >
  Ejecuta la Etapa 03 (Product Logic) del Framework Baraldi.
  Define la inteligencia, reglas de negocio, permisos y modelo de datos antes del diseño visual.
  Keywords: product logic, reglas de negocio, modelo de datos, entidades,
  kpi, north star, flujos logicos, state machine, permisos.
  Activar cuando se cierre la Etapa 02 (System Analysis).
version: "2.26.10"
framework: Baraldi
stage: "03"
stage_name: "Product Logic"
status: operational
---

# Etapa 03 — Product Logic

> **Objetivo:** Construir el "Cerebro" del producto. Definir los flujos lógicos, las entidades de datos, los permisos por actor y las reglas de negocio que gobiernan el sistema antes de diseñar interfaces.

---

## Flujo de la etapa — 3 momentos en secuencia

```
[MOMENTO 1] Actor Logic & Permissions (Quién hace qué)
        ↓
  Validar viabilidad de roles
        ↓
[MOMENTO 2] Entidades de Datos & Business Rules (Rules Engine)
        ↓
  Validar integridad lógica
        ↓
[MOMENTO 3] Flujogramas Lógicos & Product KPIs
        ↓
      Etapa 04 (Information Architecture)
```

---

## Los 3 momentos — cuándo activar cada uno

### Momento 1 — Actor Logic & Permissions
**Objetivo:** Definir la jurisdicción de los actores en el sistema (Roles y Permisos).
**Produce:** 
1. **Actor Logic Matrix:** Tabla de alcance y reglas de permisos (CRUD) por actor.
2. **State Machines (Estados):** Diagramas de cómo un objeto (ej. "Pedido") pasa de un estado a otro (Pendiente -> Pagado).

### Momento 2 — Entidades de Datos & Business Rules
**Objetivo:** Definir el "Diccionario" del sistema y las leyes condicionales que lo rigen.
**Produce:** 
1. **Data Schema (Lite):** Listado de entidades, atributos principales y relaciones (1:1, 1:N, N:N). No requiere SQL, solo estructura lógica.
2. **Business Rules Matrix:** Matriz de condiciones y consecuencias. Debe incluir estos 4 tipos de reglas:
   - *Validación:* "No se puede [Acción] si no se cumple [Condición]".
   - *Derivación:* "Si el usuario es Premium, aplicar 20% de descuento".
   - *Estado (State Machine):* "Un pedido pasa a Pagado SOLO si la API de pago devuelve éxito".
   - *Restricción de Tiempo:* "Las cancelaciones deben ocurrir con 24h de antelación".

### Momento 3 — Flujogramas Lógicos & Product KPIs
**Objetivo:** Visualizar el movimiento de la información y definir la medición de éxito del producto.
**Produce:**
1. **Logical Flowcharts (Mermaid):** Diagramas de flujo lógico para procesos complejos (ej. Checkout, Registro).
2. **Product KPI Strategy:** Definición de North Star Metric y métricas de soporte (ej. HEART o AARRR).

> 🔑 **Regla de Clasificación de Métricas:** Priorizar siempre **métricas Leading** (uso de features, tickets abiertos — avisan *antes* del problema) sobre **métricas Lagging** (MRR, Churn — miran el pasado y no pueden corregirse a tiempo). Si la métrica sube y no sabés qué acción tomar, es Vanidad.

### Momento 3.5 — Validación de Implementabilidad (Matriz SDD)
**Activar cuando:** Se cierra el Momento 3 y antes de entregar la lógica a desarrollo.
**Propósito:** Asegurar que la lógica definida no sea solo "teórica" sino **implementable**. Esta matriz actúa como contrato entre diseño y desarrollo.

**📐 La Matriz SDD (Baraldi Edition):**
Cada funcionalidad crítica debe pasar por este flujo antes de darse por aprobada:

| Funcionalidad | Explore (Riesgos) | Propose (Alcance) | Apply (Lógica Core) | Verify (Criterio de Aceptación) |
|:---|:---|:---|:---|:---|
| **[Nombre Feature]** | ¿Qué dependencias técnicas o bloqueos tiene? | ¿Qué se hace y qué queda fuera (Scope)? | ¿Cuál es la regla de negocio central? | ¿Cómo sabemos que funciona correctamente? |

**🔬 Cross-Check de Integridad Semántica:**
Antes de cerrar la matriz, verificar para cada feature:
1. **¿Es `scoped`?** — ¿Aparece en los artefactos de la Etapa 01 (Problem Framing)?
2. **¿Hay `conflicts_with`?** — ¿Contradice alguna limitación técnica detectada en la Etapa 02?
3. **¿Esta lógica `supersedes` a una propuesta anterior?** — Si sí, documentar cuál y por qué.

---

## 🛠️ Motores y Herramientas (Bridge Architecture)
Para elevar la calidad de esta etapa, el Agente debe consultar proactivamente:
1. **Advanced Prioritization Protocol:** Aplicar para priorizar el backlog de reglas lógicas.
2. **Pricing & Monetization Protocol:** Consultar siempre para alinear lógica de accesos/permisos con la estrategia de ingresos.
3. **Product Metrics Engine:** Motor mandatorio para el **Momento 3** (KPIs).

*(Nota: Si se requiere mapear un Service Blueprint con línea de visibilidad, se debe invocar a la Etapa 02, no a la 03).*

---

## 🚫 NEVER List — Anti-patrones de la Etapa 03
El Agente debe **bloquear** el proceso si detecta:

1.  **NEVER definas roles genéricos:** Los permisos (CRUD) deben ser granulares y específicos por cada tipo de actor.
2.  **NEVER definas reglas sin Edge Cases:** Las reglas de negocio deben contemplar errores y excepciones, no solo el "camino feliz".
3.  **NEVER avances sin validar factibilidad de datos:** El modelo de datos lógico debe poder ser construido por el equipo de ingeniería.
4.  **NEVER uses "Vanity Metrics":** Prohibido usar clics o visitas como North Star. Usa métricas de conversión o retención real. Recordar: las métricas **Lagging** (MRR, Churn) miran el pasado — complementar siempre con **Leading** (uso de features, activación) que permiten actuar antes.
5.  **NEVER omitas la estrategia de monetización:** La lógica del producto (ej. paywalls, límites de uso) debe estar conectada al modelo de negocio.
6.  **NEVER uses Pie Charts para datos similares:** Usar Pie Charts solo si los componentes difieren en más del 20-30%. Si los segmentos son similares en tamaño, usar Bar Chart apilado horizontal (Bullet Graph). Un Pie Chart con 5 segmentos similares es ciego.

## ✅ ALWAYS List — Mandatos de Comportamiento
- **Siempre** utiliza diagramas Mermaid para visualizar *State Machines* (cambios de estado) y *Flowcharts*.
- **Siempre** redacta las Business Rules en formato `Condición -> Acción -> Excepción`.
- **Siempre** busca los diagramas de sistema `sa-` (System Analysis) en Engram MCP antes de definir la lógica de permisos.
- **Siempre** define la *North Star Metric* antes de cerrar la etapa.

---

## Protocolo de Memoria — Etapa 03

**Al iniciar:** Buscar en `Engram MCP` los blueprints de Etapa 02 para entender el ecosistema.

**Al cerrar cada Momento:**
- Momento 1 → Eje: `pl-permissions` (tipo: `arquitectura`)
- Momento 2 → Eje: `pl-business-rules` (tipo: `decisión`)
- Momento 3 → Eje: `pl-north-star-metric` (tipo: `estrategia`)
