---
name: good_services_engine
description: >
  Motor táctico de Service Design y auditoría basado en los 15 principios de "Good Services" (Lou Downe).
  Se utiliza durante la Etapa 02 (System Analysis) para mapear servicios de extremo a extremo (Service Blueprints),
  diagnosticar fricciones operativas y asegurar que la experiencia sea agnóstica a la estructura organizacional.
keywords: service-design, blueprint, good-services, journey-map, system-analysis
version: "2.26.4"
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
Cuando se solicite una **"Auditoría de Servicio"**, el Agente debe puntuar la experiencia (o la propuesta) contra estas 15 reglas de Lou Downe:

1. Es fácil de encontrar.
2. Explica claramente su propósito.
3. Establece las expectativas del usuario (tiempo, costo, requisitos).
4. Permite al usuario completar la tarea que se propuso.
5. Funciona de una manera que resulta familiar.
6. No requiere conocimiento previo para ser usado.
7. Es **agnóstico a las estructuras organizacionales**.
8. Requiere la menor cantidad de pasos posibles.
9. Es consistente en todos los canales (omnicanalidad).
10. **No tiene callejones sin salida** (No Dead-Ends).
11. Es utilizable por todas las personas, equitativamente.
12. Fomenta los comportamientos correctos de usuarios y empleados (Incentivos).
13. Puede responder rápidamente al cambio.
14. Explica claramente por qué se ha tomado una decisión (Ej. en rechazos).
15. Hace que sea **fácil obtener asistencia humana**.

---

## 🛠️ Protocolo de Ejecución (Service Blueprint)
Cuando el usuario pida "Mapear el servicio" o "Hacer un Blueprint", el Agente debe responder con la siguiente estructura tabular:

**Estructura Esperada (Formato Markdown):**

| Paso del Usuario | Frontstage (Touchpoint) | Backstage (Empleado/Operación) | Sistemas de Soporte | Puntos de Dolor / Fricción |
| :--- | :--- | :--- | :--- | :--- |
| *Acción que intenta hacer* | *Pantalla, email, local* | *Qué hace el staff para cumplir* | *APIs, CRMs, BDs* | *Principio violado o riesgo* |

> **Protocolo de Memoria:** Si durante el mapeo se detectan dependencias técnicas críticas o silos organizacionales que bloquean la experiencia, la IA debe usar `mem_save` para registrar este "Riesgo Sistémico" antes de avanzar a la Etapa 03.
