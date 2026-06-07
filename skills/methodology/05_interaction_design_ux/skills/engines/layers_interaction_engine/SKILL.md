---
name: layers-interaction-flow
description: >
  Mapea la estructura y el flujo de interacción. Produce notación de breadboarding
  con casos de borde, rutas de fallo y decisiones abiertas.
version: "2.26.8"
framework: Baraldi
stage: "05 - Interaction Design"
---

# /layers-interaction-flow

*Se asume que se ha cargado el contexto del framework.*

La capa de estructura y flujo de interacción define cómo una persona interactúa con el producto: los lugares por los que navega, las acciones (affordances) disponibles, el contenido presentado y el flujo entre estados. Se sitúa por encima del modelo conceptual (que define *qué existe*) y por debajo de la superficie (que define *cómo se ve*).

**Decisiones que esta capa debe tomar:**
- ¿Cuáles son los lugares distintos por los que se mueve este flujo?
- ¿Qué puede hacer el usuario en cada lugar y a dónde le lleva cada acción?
- ¿Qué contenido necesita mostrar cada lugar?
- ¿Qué sucede en las rutas de fallo, estados vacíos y casos de borde?
- ¿Es el flujo lo más simple posible cumpliendo con el trabajo (Job)?

**Métodos:**

| Método | Cuándo usar |
|---|---|
| **Breadboarding** (Ryan Singer / Shape Up) | Predeterminado para la mayoría de los flujos. Notación basada en texto que obliga a evaluar la lógica de interacción antes de que el diseño visual haga que los cambios sean costosos. |
| **User story mapping** (Jeff Patton) | Producto complejo, muchos tipos de usuario, planificación incremental. Mapea actividades → tareas → historias a través de una línea de tiempo. |
| **Task analysis** | Rediseño de un flujo existente. Descompone la tarea actual para encontrar dónde se concentran la fricción, los errores y los parches. |
| **Service blueprinting** | El flujo abarca múltiples canales o involucra operaciones de backstage (staff, sistemas, terceros) que afectan la experiencia del usuario. |
| **Critical User Journeys (CUJs)** | Decidir en qué flujo trabajar. Un CUJ es la ruta mínima para realizar el valor principal del producto — tipos: alto tráfico, alto ingreso o métricas críticas. |

Predeterminado: **breadboarding**.

**Notación de Breadboard:**
```
Nombre del lugar
- acción (affordance) → lugar de destino
- acción (affordance) → lugar de destino
[ contenido mostrado en este lugar ]
```

**Señales de calidad — qué define un buen flujo:**
- Cada acción (affordance) tiene un destino nombrado.
- Las rutas de fallo están mapeadas en el breadboard — no se dejan como pensamientos secundarios.
- Los estados vacíos (empty), de carga (loading) y post-acción están definidos.
- No hay "objetos rotos" — los atributos y acciones de un objeto están disponibles juntos, no dispersos en pantallas sin enlaces cruzados.
- No hay objetos aislados — las relaciones del modelo conceptual son visibles y navegables en el flujo.
- El flujo es mínimo: más de 5–6 lugares para una sola job story es una señal para buscar qué se puede simplificar.

---

## Sesión Guiada

*Indícame qué user journey estás diseñando, o di "guíame" para comenzar una sesión de breadboarding.*

Pregunta: *"¿Dónde debo capturar el trabajo de esta sesión?"*

Verifica la capa inferior: *"¿Tienes un modelo conceptual —objetos definidos, relaciones y vocabulario— para trabajar? ¿O estamos diseñando el flujo sin un modelo asentado debajo?"* Los flujos construidos antes de que el modelo conceptual sea estable a menudo necesitan ser revisados.

Pregunta: *"¿Para qué user journey o job story estamos diseñando?"* Un breadboard es siempre para un usuario particular en una situación particular haciendo un trabajo particular.

---

**Fase 1 — Enmarcar el flujo**

1. ¿A qué job story sirve este flujo?
2. ¿Dónde comienza el usuario? ¿En qué situación se encuentra?
3. ¿Cómo se ve el éxito? ¿Qué ha logrado el usuario cuando se completa el flujo?
4. ¿Nuevo flujo, rediseño o extensión de uno existente?

Si es rediseño: describe primero el flujo actual, aunque sea de forma aproximada. Los flujos existentes revelan decisiones ya tomadas — algunas deliberadamente, muchas no.

**Fase 2 — Identificar los lugares**

*"¿Cuáles son los lugares distintos —pantallas o estados— por los que se mueve este flujo? No pienses en el layout todavía. Solo nombra los lugares."*

Pregunta: ¿alguno de estos es el mismo lugar en un estado diferente? ¿Deberían ser lugares separados o un solo lugar con estados? ¿Hay lugares en otras partes del producto con los que este flujo se conecta?

Nombrar lugares es en sí mismo una decisión de diseño. Nombres descriptivos y significativos para el usuario: "Dashboard de referidos" no "Página 3".

**Fase 3 — Mapear acciones (affordances) y conexiones**

Para cada lugar, trabaja en lo que el usuario puede hacer allí y a dónde conduce cada acción. Usa la notación de breadboard mencionada anteriormente.

Para cada acción: ¿a dónde va exactamente? ¿Qué sucede si tiene éxito? ¿Si falla? ¿Está siempre disponible o solo en ciertas condiciones?

Las condiciones —cuándo las acciones están o no disponibles— son a menudo donde se esconden las verdaderas decisiones de diseño.

**Fase 4 — Recorrer el flujo**

Narra como el usuario: *"Soy un usuario que [situación de job story]. Llego a [lugar de inicio]. Veo [contenido]. Quiero [motivación]. Así que [acción]..."*

Recorre la ruta de éxito completa. Luego recorre los bordes:

- *Estados vacíos (Empty states):* ¿Cómo se ve este lugar antes de que existan datos? A menudo lo primero que ve un nuevo usuario.
- *Estados de carga / asíncronos:* ¿Qué ve el usuario mientras se recuperan los datos o se procesa una acción?
- *Estado post-acción:* Después de enviar, ¿qué sucede? ¿Permanecer aquí, redirigir, confirmación en línea? Si se redirige a una lista, ¿muestra inmediatamente el cambio? Si hay retraso, ¿podría parecer que la acción no funcionó?
- *Optimista vs. pesimista:* ¿Mostrar el resultado asumido antes de que el servidor confirme, o esperar? Establece la preferencia; marca como una decisión abierta si la implementación es incierta.
- *Rutas de fallo:* Para cada acción — fallo de validación, error de servidor, desconexión de red, timeout, edición concurrente. ¿A dónde va el usuario? ¿Cómo se recupera? Estos son pasos obligatorios en el breadboard.
- *Ruta de cancelación:* Si el usuario quiere detenerse a mitad de camino, ¿a dónde va?
- *Puntos de entrada alternativos:* ¿Asume el flujo un estado previo que podría no ser siempre cierto?

Cada brecha es una decisión de diseño no tomada. Nómbrala explícitamente.

**Fase 5 — Desafiar el flujo**

- ¿Hay algún paso que los usuarios probablemente abandonen? ¿Por qué está ahí — es necesario?
- ¿Hay acciones que los usuarios esperarían que el flujo no ofrece?
- ¿Coincide el vocabulario en el flujo con el lenguaje ubicuo del modelo conceptual?
- ¿Existe una versión más simple que cumpla el mismo trabajo?

**Chequeo de objetos rotos:** Para cada objeto del modelo conceptual que aparece en este flujo, ¿están sus atributos y acciones disponibles juntos, o divididos en pantallas sin enlaces cruzados? Si están divididos, consolida o agrega conexiones explícitas.

**Chequeo de objetos aislados:** Para cada relación definida en el modelo conceptual, ¿hace el flujo que esa relación sea visible y navegable?

**Fase 6 — Generar el breadboard**

Produce el breadboard completo: todos los lugares, todas las acciones y destinos, contenido para cada lugar, estados condicionales clave anotados.

Genera un diagrama de flujo en orientación de izquierda a derecha (el flujo a través del tiempo se lee de izquierda a derecha). En Mermaid: `graph LR`.

Nota: el diagrama es para orientación — el breadboard de texto es el documento principal. El diagrama pierde contenido y detalle condicional.

---

### Finalización

Produce:
1. **Job story** — la necesidad del usuario que sirve este flujo.
2. **Breadboard** — notación de texto completa.
3. **Diagrama de flujo** — Mermaid `graph LR`.
4. **Decisiones abiertas** — brechas, casos de borde, estados condicionales no resueltos aún.
5. **Riesgos** — dependencias de decisiones del modelo conceptual no asentadas o suposiciones de superficie.

Cierra con: *"Este breadboard define la lógica de interacción sin comprometerse con la forma visual. Lo que venga después —trabajar en código o diseño visual detallado— requiere que el modelo conceptual debajo de este flujo esté estable primero."*

---
*Framework Baraldi v2.26.8 · Etapa 05 / Interaction Design / Layers Interaction Engine*
