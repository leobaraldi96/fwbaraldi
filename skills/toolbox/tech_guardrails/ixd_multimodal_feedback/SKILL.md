---
name: ixd-multimodal-feedback
description: >
  Habilidad experta en Diseño de Interacción y Feedback Sensorial. 
  Úsala para definir el comportamiento físico, visual y auditivo de la 
  interfaz, asegurando una experiencia táctil y fluida.
version: "2.25.13"
---

# ⚡ Interaction & Multimodal Feedback Expert

Esta habilidad asegura que la interfaz no sea solo un dibujo, sino un **objeto físico digital**.

## 🧠 Los 3 Canales de Feedback

1.  **Visual:** Transiciones, micro-animaciones, cambios de estado (Hover, Active, Loading, Success).
2.  **Háptico (Vibración):** Definir patrones de vibración para dispositivos móviles (ej: "Impact light" al confirmar, "Heavy error").
3.  **Auditivo:** Sonidos sutiles de confirmación o alerta que refuerzan la acción sin molestar.

---

## 🕒 Reglas de Timing y Movimiento

- **Duration Standard:** 200ms - 300ms para la mayoría de las transiciones. Más lento se siente pesado, más rápido es imperceptible.
- **Easing:** Usar siempre `Cubic Bezier` (Out-Quint o Out-Expo) para movimientos orgánicos. NUNCA usar animaciones lineales.
- **Gesture Interruption:** El sistema debe permitir interrumpir una animación si el usuario realiza un nuevo gesto.

---

## 🛠️ Especificación de Interactividad

Al definir un componente, debes especificar:
- **Trigger:** Qué inicia el cambio (Click, Tap, Long Press, Scroll).
- **Response:** Qué cambia visualmente.
- **Haptic/Sound:** Qué sucede a nivel sensorial periférico.
- **Continuity:** Cómo se conecta con la siguiente pantalla o estado.

---

## 🔍 Regla de Juicio Senior
*"Si el usuario tiene que preguntarse si su clic funcionó, el diseño falló"*. El feedback debe ocurrir en menos de 100ms después de la interacción.

---
*Framework Baraldi v2.25.13 · Core / Tech Guardrails / IxD Expert*
