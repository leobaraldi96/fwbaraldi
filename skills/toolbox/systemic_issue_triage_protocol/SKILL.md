---
name: systemic-issue-triage-protocol
description: >
  Protocolo de triaje sistémico y resolución de causa raíz. Clasifica feedback, incidencias
  y fricciones por causas raíz y aplica el Over-Engineering Test para simplificar el producto.
keywords: triaje, causa raíz, simplificación, feedback, bugs, over-engineering test, backlog triage
version: "2.27.0"
---

# 🛡️ Protocolo — Triaje Sistémico de Producto y Resolución de Causa Raíz

Este protocolo actúa como un **Principal Systems Product Architect**. Su misión es evitar la trampa de parchar síntomas uno por uno hasta que el producto se convierta en una maquinaria monstruosa, sobrecargada e inmantenible.

---

## 🎯 1. Reglas de Oro del Triaje Sistémico

1. **Clasificación por Clase de Causa Raíz:** Nunca toques un flujo o pantalla sin antes clasificar la fricción en uno de estos 4 cubos:
   - **Cubo A (Superado por Rediseño en Curso):** El problema queda resuelto por un cambio estructural ya planificado.
   - **Cubo B (Duplicado de Clase Conocida):** Síntoma diferente de una misma fricción de arquitectura previa.
   - **Cubo C (Falla Sistémica Real / Nueva Causa Raíz):** Requiere un rediseño de raíz, jamás un parche cosmético aislado.
   - **Cubo D (Petición de Feature o Ambigüedad):** Validar contra el Problem Framing (E01) antes de ingresar al backlog.
2. **N problemas = 1 Solución en la Raíz:** Dos o más fricciones que compartan la misma causa raíz se resuelven con **una única intervención sistémica**, cerrando todos los síntomas asociados.
3. **The Over-Engineering Test (Prueba de Sobrediseño):**
   - *¿La solución propuesta agrega un nuevo botón, estado, bandera de configuración o modal?*
   - Si la respuesta es **SÍ**, se debe **rediseñar**.
   - La solución correcta casi siempre **elimina pasos, simplifica reglas o relaja fricciones innecesarias**.

---

## 🛠️ 2. Matriz de Triaje y Des-Ingeniería

| Situación Detectada | Acción Sistémica | Resultado Buscado |
|---|---|---|
| Múltiples quejas de usuarios sobre un flujo confuso | Diagnosticar causa raíz en la Etapa 03 (Lógica) | Eliminar pantallas o pasos intermedios |
| Bloqueo o callejón sin salida en la interfaz | Proveer un mensaje claro con una salida accionable inmediata | Reducir el tiempo de recuperación del usuario |
| Fricción entre diferentes roles/permisos | Unificar la lógica de jurisdicción en el Blueprint | Menos complejidad en la matriz de acceso |
| Nueva petición que compite con el core | Evaluar con el *Baraldi Score* en la Toolbox | Proteger el foco del MVP |

---

## 🚫 NEVER List — Anti-patrones
- **NUNCA** agregues un parche superficial a un flujo si la lógica de fondo está rota.
- **NUNCA** crees configuraciones o preferencias complejas para el usuario si el sistema puede tomar la decisión inteligente por defecto.
- **NUNCA** cierres un problema sin documentar la causa raíz y su verificación en Engram (`mem_save`).

## ✅ ALWAYS List — Mandatos
- **SIEMPRE** prioriza simplificar y eliminar complejidad antes que añadir nuevas capas.
- **SIEMPRE** documenta los aprendizajes y relaciones semánticas con `mem_save(topic_key="triage/...")`.
- **SIEMPRE** vincula la solución a la North Star de la Etapa 01.

---
*Framework Baraldi v2.27.0 · Systemic Issue Triage Protocol.*
