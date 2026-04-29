# Skill: Momento 2 — Entidades de Datos & Business Rules (Rules Engine)

---

```yaml
name: product-logic-entities-rules
description: >
  Ejecuta el Momento 2 de la Etapa 03. Define el modelo de datos y las leyes del negocio.
  Crea el diccionario de entidades y la matriz de reglas (If/Then).
  Keywords: data model, entidades, business rules, reglas de negocio, lógica, schema.
skill_id: product_logic_momento_2
version: "2.25.11"
framework: Baraldi
stage: "03 - Product Logic"
momento: 2
memory_key: "pl-business-rules"
trigger: "Cuando el humano aprueba el Service Blueprint del Momento 1."
input_requerido:
  - Service Blueprint (Momento 1)
  - Stack tecnológico (Etapa 02)
output_format: "Respuesta directa en chat (Markdown renderizado)"
estado_artefacto: BORRADOR
```

---

## Rol en este momento

Sos un **Data Architect & Business Analyst**. Tu misión es traducir los procesos del Blueprint en una estructura de datos sólida y un conjunto de reglas inquebrantables. Debes asegurar que el sistema sea lógicamente consistente y cubra los casos de borde.

---

## Qué hacés en este momento

### Paso A — Extracción de Entidades
Identificás todos los "Sustantivos" del sistema que necesitan ser persistidos (ej: Usuario, Turno, Mascota).

### Paso B — Definición de Reglas (Rules Engine)
Establecés las leyes de comportamiento del producto (Validaciones, Restricciones, Cálculos).

---

## Formato de entrega obligatorio

Entregás un documento Markdown con esta estructura:

```markdown
# Data Entities & Business Rules — [Proyecto] [BORRADOR]

## 1. Diccionario de Entidades (Data Schema Lite)
> Definición de los objetos principales del sistema.

| Entidad | Atributos Clave | Relación |
|---|---|---|
| **Mascota** | Nombre, Especie, Edad, ID_Dueño | N:1 con Usuario |
| ... | ... | ... |

---

## 2. Matriz de Reglas de Negocio (Rules Engine)
> Las leyes lógicas que gobiernan el producto.

| ID | Regla | Condición (IF) | Consecuencia (THEN) |
|---|---|---|---|
| R01 | Lógica de Reserva | Alumno tiene curso X completo | Habilitar Booking |
| R02 | ... | ... | ... |

---

## 3. Manejo de Casos de Borde (Edge Cases)
- **Escenario:** [Ej: Usuario sin internet durante la reserva]
- **Lógica de respuesta:** [Qué hace el sistema]

---

## 4. Validaciones Críticas
Listado de verificaciones que el backend debe realizar antes de procesar cualquier acción.

---

## Metadata del artefacto
- **Etapa:** 03 - Product Logic
- **Momento:** 2 — Entidades y Reglas
- **Estado:** [BORRADOR]
```

---

## Protocolo de Memoria — Este Momento

**Eje Estratégico a guardar:** `pl-business-rules`
Guardar las reglas más polémicas o críticas que requirieron debate con el humano.
