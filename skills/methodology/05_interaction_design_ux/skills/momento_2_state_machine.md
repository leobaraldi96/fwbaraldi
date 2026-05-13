---
name: momento-2-state-machine
description: >
  Protocolo operativo para definir el Sistema de Estados y la lógica de interacción a nivel micro.
---

# [MOMENTO 2] State Machine & Micro-interacciones

> **Misión:** Mapear cómo responde el sistema a las acciones del usuario. Un producto "Luxury Obsidian" no tiene estados muertos; cada interacción tiene feedback visual y funcional.

## 🏁 Instrucciones para el Agente

### Paso 1: Mapeo de Componentes Críticos
1. Basado en los *User Flows* (Etapa 04), identifica los 3-5 componentes interactivos más importantes del producto (ej: Botón de Pago, Tarjeta de Suscripción, Input de Búsqueda).

### Paso 2: Matriz de Estados Universales y Prevención de Fricción
Para cada componente crítico, debes co-crear con el humano el comportamiento en los siguientes estados, aplicando la óptica de **CRO (Conversion Rate Optimization)**:
- **Default (Idle):** Estado base. CTA principal debe contrastar.
- **Hover / Focus:** Feedback pre-interacción (visual) para asegurar "clicabilidad".
- **Active / Pressed:** Momento del toque.
- **Loading / Processing:** Feedback durante latencia. En procesos largos (ej: Checkout), usar skeleton loaders o microcopy tranquilizador para evitar el abandono de carrito (*Churn Prevention*).
- **Success:** Confirmación visual. Si es el final de un flujo (ej: Registro exitoso), enganchar inmediatamente con el siguiente paso de Onboarding.
- **Error / Disabled:** Prevención o recuperación de fallo. Un error nunca es un "callejón sin salida"; el diseño debe ofrecer la ruta de recuperación inmediata.

### Paso 3: Estándares de Transición y Animación (Motion UI)
Define con el usuario las leyes de movimiento:
- **Tiempos (Easings & Durations):** ¿Las animaciones son rápidas y secantes (Eficiencia) o fluidas y elásticas (Calidez)?
- **Feedback Sensorial:** Si es una app móvil, ¿hay retroalimentación háptica (vibración) en errores o éxitos?

## 📄 Salida Esperada
Generar una matriz en Markdown detallando el comportamiento de los componentes críticos en todos sus estados. Esto servirá de input directo para los Wireframes (Momento 3) y el Visual Design (Etapa 06).
