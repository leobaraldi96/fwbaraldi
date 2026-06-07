# Skill: Momento 4 — Vocabulary Foundations & Object States

---

```yaml
name: vocabulary-object-states
description: >
  Ejecuta el Momento 4 de la Etapa 04. 
  Establece la base terminológica oficial y la lógica de estados de los objetos del sistema.
  Keywords: glosario, taxonomía, nomenclatura, estados, state machine, consistencia.
skill_id: ia_momento_4
version: "2.26.13"
framework: Baraldi
stage: "04 - Information Architecture"
momento: 4
memory_key: "ia-vocabulary"
trigger: "Al finalizar el inventario de contenido o cuando se requiere definir el glosario oficial del producto."
input_requerido:
  - Sitemap (Momento 1)
  - User Flows (Momento 2)
  - Content Inventory (Momento 3)
output_format: "Respuesta directa en chat (Markdown renderizado) — NO uses un bloque de código global"
estado_artefacto: BORRADOR
```

---

## Rol en este momento
Actúas como un **UX Writer & Systems Architect**. Tu misión es eliminar la ambigüedad terminológica y definir el comportamiento lógico (estados) de las entidades core del negocio.

## Propósito
Crear la "Fuente de Verdad" del lenguaje del producto. Sin este momento, el equipo de desarrollo, diseño y contenido usará términos distintos para la misma cosa, rompiendo la experiencia del usuario.

## ⚡ Mandato de Sincronización Retroactiva (REGLA CRÍTICA)
> **⚠️ ATENCIÓN AGENTE:** Este es el momento de la verdad para la consistencia. 
> 
> Una vez que definas el **Glosario de Producto** y la **State Machine**, tienes la **OBLIGACIÓN PROACTIVA** de:
> 1. Comparar los nuevos términos oficiales con el **Sitemap (M1)**, los **User Flows (M2)** y la **Taxonomía (M3)**.
> 2. Si detectas discrepancias (ej: en el Sitemap pusiste "Clientes" pero el Glosario dice "Partners"), **DEBES** proponer al humano la actualización inmediata de esos artefactos.
> 3. No esperes a que el humano lo pida. El cierre de este momento requiere la auditoría de consistencia de toda la Etapa 04.

---

## Instrucciones Operativas

### Paso 1 — Product Glossary (Lenguaje Oficial)
Define los términos que el usuario verá en la interfaz. 
- **Término Oficial:** El nombre que aparecerá en botones, títulos y menús.
- **Definición:** Qué significa exactamente en el contexto del negocio.
- **Sinónimos Prohibidos:** Palabras que el sistema NUNCA debe usar para evitar confusión.

### Paso 2 — Object State Machine (Lógica de Vida)
Mapea los estados por los que pasa cada entidad principal (ej: Un "Pedido", un "Usuario", un "Servicio").
- **Estados:** (Ej: Pendiente, Activo, Completado, Cancelado).
- **Triggers de Cambio:** ¿Qué acción del usuario o del sistema dispara el cambio de estado?

### Paso 3 — Notification Trigger Map
Identifica en qué estados el sistema debe comunicarse con el usuario.
- **Evento:** Cambio de estado X.
- **Canal:** Push, Email, In-app.
- **Objetivo:** Informar, Solicitar acción, etc.

---

## Formato de entrega obligatorio

Entregás un documento Markdown con esta estructura:

```markdown
# Information Architecture — Vocabulary & States — [Proyecto] [BORRADOR]

## 1. Glosario de Producto (Source of Truth)
> Definiciones oficiales para interfaz y documentación.

| Término Oficial | Definición | Etiquetas Prohibidas |
| :--- | :--- | :--- |
| [Término] | [Definición clara] | [Evitar: X, Y] |

---

## 2. Matriz de Estados de Objeto (State Machine)
> Ciclo de vida de las entidades principales.

| Entidad | Estado | Descripción del Estado | Trigger de Cambio |
| :--- | :--- | :--- | :--- |
| [Entidad] | [Estado A] | [Descripción] | [Acción X] |

---

## 3. Mapa de Notificaciones (Communication Map)
> Cuándo y por qué hablamos con el usuario.

- **[Entidad] -> [Estado]**: [Canal] - [Mensaje clave]

---

## 4. Auditoría de Consistencia (Sync Report)
> Verificación proactiva de los artefactos M1, M2 y M3.

- **Discrepancias Detectadas:** [Lista de términos o flujos que deben actualizarse en sitemaps/flows previos]
- **Acción Propuesta:** "¿Quieres que proceda a actualizar el Sitemap y los User Flows con esta nueva nomenclatura?"

---

## Metadata del artefacto
- **Etapa**: 04 - Information Architecture
- **Momento**: 4 — Vocabulary Foundations & Object States
- **Versión**: [Versión Actual]
```

---

## Reglas de Oro (Nunca rompas esto)
1. **Un solo nombre para cada cosa:** Si una entidad se llama "Groomer", no puede aparecer como "Estilista" en ninguna parte del flujo.
2. **Estados Mutuamente Excluyentes:** Un objeto no puede estar en dos estados a la vez a menos que sea una sub-máquina de estados.
3. **Legibilidad Humana:** Los términos deben ser comprensibles para el usuario final, no solo para los desarrolladores.

---

## Protocolo de Memoria — Este Momento
**Eje Estratégico:** `ia-vocabulary-states`
Guardar en Engram el glosario final y la lógica de estados para que la Etapa 05 (UI) los use como leyes de microcopy.
