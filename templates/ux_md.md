# 🧭 Contrato de Ergonomía & UX — {NOMBRE_DEL_PRODUCTO}

> **Fuente de Verdad de Experiencia de Usuario:** Este documento formaliza las leyes de comportamiento interactivo, tiempos de respuesta, feedback sensorial y ergonomía para garantizar un producto de alto impacto y cero fricción.

---

## ⚡ 1. Leyes de Tiempo y Feedback Interactivo

| Rango de Tiempo | Comportamiento Requerido de UI | Ejemplo de Implementación |
| :--- | :--- | :--- |
| **< 100ms** | Respuesta instantánea percibida | Efecto ripple/hover, toggle switches, tabs. |
| **100ms – 300ms** | Feedback visual inmediato | Micro-spinner en botón presionado / estado *pending*. |
| **300ms – 1s** | Transición y Skeleton Loaders | Skeletons con pulsación suave que reflejen la forma del contenido real. |
| **> 1s** | Barra de progreso determinista o mensaje informativo | Barra de porcentaje, estimación de tiempo y opción de cancelar. |

---

## 🚀 2. Filosofía de Optimistic UI

1. **Mutaciones Inmediatas:**
   - Acciones simples como dar "Like", archivar un elemento, marcar una casilla o cambiar un toggle se reflejan en la interfaz de forma instantánea, **antes** de que el backend responda.
2. **Estrategia de Rollback Elegante:**
   - Si la mutación falla en el servidor:
     1. La UI revierte suavemente el estado al valor anterior.
     2. Se muestra un Toast no intrusivo con el motivo del fallo y un botón de acción: `[Reintentar]`.

---

## 🛑 3. Mandato de "Zero Dead-Ends" (Cero Callejones sin Salida)

Ninguna pantalla o estado del sistema puede dejar al usuario bloqueado sin una vía de acción:

```
┌─────────────────────────────────────────────────────────────┐
│                 ANATOMÍA DE ESTADOS SIN SALIDA               │
├─────────────────────────────────────────────────────────────┤
│ 1. Ilustración / Ícono alusivo (No decorativo sin sentido)   │
│ 2. Título claro del estado ("Todavía no tienes proyectos")  │
│ 3. Explicación concisa ("Crea tu primer proyecto en 1 min") │
│ 4. BOTÓN DE ACCIÓN PRIMARIA ([ + Crear Proyecto ])          │
│ 5. Enlace secundario opcional ("Ver tutorial o guía")       │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 4. Ergonomía Táctil y Accesibilidad Física

* **Dimensiones de Hit Targets:** Mínimo `44x44px` (o `2.75rem`) para cualquier elemento clickeable o interactivo en interfaces móviles/táctiles.
* **Separación entre Targets:** Al menos `8px` de separación entre dos botones contiguos para evitar toques accidentales (*fat finger protection*).
* **Zona de Pulgar (Thumb Zone):** Las acciones destructivas o primarias en móvil deben posicionarse en la mitad inferior de la pantalla.

---

## 🚫 NEVER List — Prohibiciones de UX
- **NUNCA** bloquees la pantalla completa con un loader bloqueante si solo se está actualizando una tarjeta o sección puntual.
- **NUNCA** cierres un modal o pierdas información ingresada por un clic accidental fuera del área (*backdrop click*) sin confirmación previa si hay cambios sin guardar.
- **NUNCA** muestres modales apilados (un modal abriendo otro modal).

---
*Framework Baraldi · docs-fwbaraldi/UX.md Template.*
