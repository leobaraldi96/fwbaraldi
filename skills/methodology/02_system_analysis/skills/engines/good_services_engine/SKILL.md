---
name: good_services_engine
description: >
  Motor táctico de Service Design y auditoría basado en los 15 principios de "Good Services" (Lou Downe).
  Se utiliza durante la Etapa 02 (System Analysis) para mapear servicios de extremo a extremo (Service Blueprints),
  diagnosticar fricciones operativas y asegurar que la experiencia sea agnóstica a la estructura organizacional.
keywords: service-design, blueprint, good-services, journey-map, system-analysis
version: "2.26.12"
---

# 🗺️ Good Services Engine

Este motor táctico provee las herramientas de análisis sistémico para diseñar, diagnosticar y mejorar servicios. Entendemos por "Servicio" a **todo aquello que ayuda a un usuario a lograr un objetivo**, independientemente de cuántos canales o departamentos internos estén involucrados.

## 🎯 Objetivo del Engine
Mapear el servicio completo (Frontstage y Backstage), identificar puntos de quiebre operativos y garantizar que el servicio cumpla con los estándares universales de usabilidad sistémica.

---

## 🚫 NEVER List (Anti-Patrones de Servicio)
El Agente tiene **estrictamente prohibido** diseñar o auditar bajo estos supuestos:

1. **Anti-Organigrama (Silos):** Nunca diseñar la experiencia basándose en la estructura interna de la empresa. Al usuario no le importa qué departamento procesa su solicitud; el servicio debe sentirse como un ente único.
2. **Anti-Dead-Ends (Callejones sin salida):** Nunca diseñar un flujo donde un "No" o un "Error" deje al usuario sin alternativas. Siempre debe existir un paso siguiente claro (una apelación, una alternativa o asistencia humana).
3. **Anti-Acrónimos:** Nunca nombrar un servicio usando jerga interna o sustantivos. (Ej. *Prohibido:* "Portal SYXT". *Correcto:* "Renovar licencia de conducir").
4. **Anti-Asunción de Conocimiento:** Nunca asumir que el usuario sabe cómo funciona el ecosistema de la empresa antes de usarlo.

---

## ✅ ALWAYS List (Mandatos Operativos)
El Agente **debe** aplicar estas reglas al generar mapas o auditorías:

1. **Definición Basada en Verbos:** El nombre y propósito del servicio siempre deben definirse como una acción clara desde la perspectiva del usuario (Ej. "Aprender a manejar", no "Educación Vial").
2. **Línea de Visibilidad (Blueprint):** Todo mapeo debe separar claramente:
   - *Frontstage:* Lo que el usuario ve y con lo que interactúa.
   - *Backstage:* Lo que el empleado o el sistema hace detrás de escena.
   - *Procesos de Soporte:* Sistemas técnicos de fondo.
3. **Expectativas Claras:** El servicio debe dejar explícito el costo, el tiempo que tomará y los requisitos *antes* de que el usuario comience.
4. **Rescate Humano:** Siempre debe mapearse el momento exacto y la vía por la cual el usuario puede pedir ayuda a un humano si el sistema digital falla.

---

## 🧠 Los 15 Principios de Good Services (Auditoría)
Cuando se solicite una **"Auditoría de Servicio"**, la IA evaluará el flujo contra estas 15 reglas de Lou Downe. 
**Regla de Auditoría:** Para cada principio violado, la IA DEBE documentar el **Failure Mode** (cómo falla hoy) y el **Improvement Move** (cómo arreglarlo sistémicamente).

1. Es fácil de encontrar.
2. Explica claramente su propósito.
3. Establece expectativas (tiempo, costo, requisitos).
4. Permite completar la tarea.
5. Funciona de manera familiar.
6. No requiere conocimiento previo.
7. **Agnóstico a estructuras organizacionales** (Silos).
8. Requiere la menor cantidad de pasos.
9. Consistente en todos los canales.
10. **Sin callejones sin salida (No Dead-Ends).**
11. Utilizable por todas las personas equitativamente.
12. Fomenta comportamientos correctos.
13. Responde rápidamente al cambio.
14. Explica por qué se tomó una decisión (rechazos).
15. **Hace fácil obtener asistencia humana.**

**🎯 El Triple Estándar de Calidad — Un servicio es "Good" cuando es:**
- **Bueno para el Usuario:** Lo ayuda a lograr su objetivo sin esfuerzo innecesario.
- **Bueno para la Organización:** Sostenible (costo, riesgo, capacidad) y alineado con los objetivos de negocio.
- **Bueno para la Sociedad:** No genera daño evitable (exclusión, sesgo, impacto ambiental).
> Usar este trío al priorizar mejoras y elegir métricas de éxito.

**📊 Scorecard de Auditoría — Formato Obligatorio:**
Cuando se audite un servicio, documentar cada principio con esta tabla:

| # | Principio | Score (0-2) | Evidencia (dato/investigación) | Dónde falla en el journey | Fix ideas |
|---|---|---|---|---|---|
| 1 | Fácil de encontrar | | | | |
| 7 | Agnóstico a org. | | | | |
| 10 | Sin callejones | | | | |
| 15 | Asistencia humana | | | | |
| ... | *resto de principios* | | | | |

**Resumen Final de Auditoría:**
- Top 5 principios fallidos (por impacto/daño):
- Causa sistémica más común (lenguaje, datos, política, ops):
- Quick wins (alto impacto / bajo esfuerzo):

---

## 🛠️ Protocolos de Ejecución (Templates)

### 1. Service Definition Canvas
Antes de hacer un Blueprint complejo, el Agente debe definir el servicio respondiendo estrictamente a estas dimensiones:
- **Nombre (Verbo):** Ej. "Solicitar permiso de construcción".
- **Trigger:** Qué detona la necesidad del usuario.
- **Scope (Alcance):** Cuándo empieza y cuándo termina exactamente (End condition).
- **Expectativas:** Costo, tiempo estimado y requisitos previos.
- **Canales (Touchpoints):** Digital, telefónico, presencial.
- **Operational Reality:** Equipos internos y sistemas técnicos involucrados.
- **Medición de Éxito:** Completion rate, Cost-to-serve, Tasa de errores.

### 2. Service Blueprint Canvas
Cuando el usuario pida "Mapear el servicio", la IA NO debe hacer una tabla genérica. Debe usar la siguiente estructura de 7 capas, marcando claramente las líneas de visibilidad e interacción:

**Estructura Obligatoria del Blueprint:**
1. **Evidencia Física (Physical Evidence):** Lo que el usuario toca/ve (Pantalla, Notificación, Local).
2. **Acciones del Usuario (Customer Actions):** Lo que el usuario hace paso a paso.
*(--- Línea de Interacción ---)*
3. **Frontstage (Onstage Contact):** Lo que hace el empleado/sistema de cara al usuario.
*(--- Línea de Visibilidad ---)*
4. **Backstage (Invisible Contact):** Acciones internas invisibles que habilitan el frontstage.
*(--- Línea de Interacción Interna ---)*
5. **Soporte y Sistemas (Support Processes):** Bases de datos, APIs de terceros, Proveedores.
6. **Métricas de Tiempo / Fallo:** Cuánto tarda cada paso y dónde se cae el usuario.
7. **Oportunidades (Improvement Moves):** Qué principio de Good Service se está violando y cómo arreglarlo.

**⚠️ Checklist de Riesgos Operativos del Blueprint** (revisar siempre antes de cerrar):
- [ ] Handoffs de datos entre equipos (duplicación, desincronización, latencia).
- [ ] Desalineación de políticas entre departamentos u organizaciones.
- [ ] Restricciones de capacidad (colas, staffing, tiempo de respuesta).
- [ ] Manejo de excepciones (¿qué pasa fuera del happy path?).
- [ ] Trazabilidad de decisiones (¿quedan registros auditables?).

**🔑 Reglas de Oro del Blueprint Técnico** (aplicar en cada paso del backstage):
- **Mapeo de Errores de Backend:** Por cada acción del usuario, documentar qué sucede si el servidor devuelve un `500` (error interno), `403` (sin permiso) o `401` (no autenticado). Un blueprint sin rutas de error es incompleto.
- **Latency Design:** Si una tarea de backstage tarda más de 2 segundos, el blueprint **DEBE** incluir un estado de interacción intermedio (skeleton screen, spinner con mensaje, progress bar). Nunca dejar al usuario sin feedback.
- **Data Provenance:** Identificar de dónde viene cada dato que se muestra en la UI. Si el backend no puede proveer ese campo, no puede existir en el diseño. Nunca inventar datos sin fuente confirmada.

> 🧠 **Regla de Juicio Senior:** *"Un gran diseño frente a un mal proceso de backstage genera una mala experiencia de cliente."* Siempre auditar si el proceso interno es tan fluido como la interfaz que lo representa.



### 3. Journey Map (Vista del Usuario)
Cuando se quiera mapear la experiencia desde la perspectiva del usuario (sin el backstage):

| Paso | Objetivo del usuario | Tareas | Canal | Info/Evidencia necesaria | Pain points | Dónde busca ayuda | Riesgos/Handoffs |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |

**Al cerrar el Journey Map, documentar:**
- Top 3 puntos de abandono (drop-offs).
- Top 3 causas de contacto a soporte.
- Restricciones de política/operación conocidas.

### 4. Service Standard (Principios 14 y 15)
Para servicios donde las decisiones automáticas o rechazos son frecuentes, documentar obligatoriamente:

**Decision Policy (Principio 14 — Explicar decisiones):**
- ¿Qué decisiones toma el servicio de forma automática?
- ¿Qué inputs usa y por qué importan?
- ¿Cómo se le explica al usuario la decisión?
- ¿Cómo puede el usuario apelar o corregir sus datos?

**Human Assistance Model (Principio 15 — Asistencia humana fácil):**
- Puntos de entrada a ayuda humana (dónde y cómo se accede).
- Reglas de triage y escalada.
- Qué puede decidir/hacer el staff sin escalar.
- ¿El knowledge base del staff está alineado con el journey digital?

### 5. Improvement Backlog (Post-Auditoría)
Al cerrar la auditoría, convertir los fallos en ítems de backlog orientados a outcomes:

| Prioridad | Problema del usuario / Outcome esperado | Principio(s) fallidos | Cambio propuesto | Impacto (A/M/B) | Esfuerzo (A/M/B) | Owner | Criterio de aceptación observable |
|---|---|---|---|---|---|---|---|
| Ahora | | | | | | | |
| Próximo | | | | | | | |
| Después | | | | | | | |

> ⚠️ Marcar los ítems que requieren cambios de política/legal vs. cambios de diseño/ops. Para ítems cross-org, documentar qué estándares o incentivos compartidos son necesarios.

> **Protocolo de Memoria:** Si durante el mapeo se detectan dependencias técnicas críticas o silos organizacionales que bloquean la experiencia, la IA debe usar `mem_save` para registrar este "Riesgo Sistémico" antes de avanzar a la Etapa 03.
