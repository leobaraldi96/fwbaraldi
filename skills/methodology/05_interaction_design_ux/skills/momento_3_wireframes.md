---
name: momento-3-wireframes
description: >
  Protocolo operativo para estructurar la jerarquía visual mediante Wireframes de baja/media fidelidad.
---

# [MOMENTO 3] Wireframing Funcional & Layout

> **Misión:** Traducir el Sitemap (Etapa 04), el VOICE.md (Momento 1) y los Estados (Momento 2) en estructuras de pantalla tangibles. Validar la jerarquía de la información antes de aplicar la capa estética.

## 🏁 Instrucciones para el Agente

### Paso 1: Selección de Pantallas Críticas y CRO
- No wireframear todo. Enfócate en las 3-5 pantallas que componen el *Core User Flow* (el camino crítico que cumple el Job To Be Done del usuario).
- **Regla:** Aplicar la **Ley de Respiro del Dato** (Density Rules) desde esta etapa.
- **[NUEVO] Optimización de Conversión (CRO):** Si la pantalla es un *Onboarding*, *Formulario de Registro* o *Paywall*, debes aplicar los estándares de fricción cero (inspirados en el ecosistema `coreyhaines31`):
  - **Formularios:** Reducir carga cognitiva. Mostrar solo campos estrictamente necesarios. Agrupar lógicamente.
  - **Onboarding/Sign Up:** Dividir procesos largos en pasos cortos (Progressive Disclosure).
  - **Paywalls:** Visibilidad clara de valor antes de pedir datos de pago.

### Paso 2: Diseño de Wireframes en ASCII / Markdown
Para cada pantalla crítica, genera una representación esquemática usando cajas ASCII o tablas Markdown. 
- **Estructura requerida por pantalla:**
  1. **Objetivo:** ¿Qué debe lograr el usuario aquí?
  2. **Wireframe visual:** (Representación en texto).
  3. **Data Points:** Qué datos vienen del Backend (Etapa 03).
  4. **Interacciones:** Qué elementos son tocables/clickeables.

*(Ejemplo de Wireframe ASCII)*
```text
+--------------------------------------------------+
|  [Logo]                             [Avatar] (V) |
+--------------------------------------------------+
|                                                  |
|  "Hola, {Nombre}. Tu saldo actual es:"           |
|                                                  |
|  [       $ 1,450.00       ]                      |
|                                                  |
|  [Botón: Transferir (Primary)]                   |
|  [Botón: Ver Movimientos (Secondary)]            |
|                                                  |
+--------------------------------------------------+
```

### Paso 3: Validación de Handoff a Etapa 06
Hazle al humano las siguientes preguntas de cierre:
- *"¿Sientes que el usuario sabe exactamente qué hacer en cada pantalla?"*
- *"¿Hemos dejado suficiente 'respiro' (espacio negativo) alrededor de la información vital?"*

## 📄 Salida Esperada
Un archivo Markdown (o exportado a una herramienta de prototipado si el usuario lo prefiere y lo guía) con los wireframes funcionales de las pantallas críticas, listos para ser vestidos de **Luxury Obsidian** en la Etapa 06.
