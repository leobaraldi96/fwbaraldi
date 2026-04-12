---
name: ux-writing-standards
description: >
  Estándares maestros de UX Writing y Content Design para el Framework Baraldi.
  Úsala para redactar, revisar o auditar todo el texto de la interfaz: 
  botones, mensajes de error, tooltips y flujos de onboarding.
version: "1.0.0"
---

# ✍️ UX Writing & Content Design Standards

En el Framework Baraldi, el texto **es** interfaz. Esta habilidad asegura que la comunicación con el usuario sea clara, humana, profesional y orientada a la acción.

## ⚖️ Principios Fundacionales
1.  **Voz Activa:** Liderar siempre con la acción o el resultado.
2.  **Economía de Palabras:** Cortar el relleno. Cada palabra debe ganarse su lugar.
3.  **Humanidad (La Dupla):** Tratar al usuario como un colega inteligente. Ser cálido en el éxito y asertivo en el error.
4.  **No Culpar:** El sistema asume la responsabilidad; el usuario solo recibe soluciones.

---

## 🛠️ Guía de Estilo Operativa

### 1. Voz y Gramática
- **Voz Activa:** "Guardar cambios" en lugar de "Los cambios serán guardados".
- **Sentence Case:** Solo capitalizar la primera palabra y nombres propios. (Do: "Ajustes de cuenta" / Don't: "Ajustes de Cuenta").
- **Sin Periodo en Fragmentos:** Las etiquetas sueltas o botones no llevan punto final. Solo grupos de varias oraciones llevan puntuación completa.
- **Evitar Latinismos:** NUNCA uses `e.g.`, `i.e.`, `etc.` o `vs`. Usa "por ejemplo", "es decir" o "comparado con".

### 2. Micro-copy por Superficie
- **Botones (CTAs):** Deben empezar con un verbo de acción específico. (Do: "Crear proyecto", "Eliminar cuenta" / Don't: "Enviar", "OK").
- **Mensajes de Error:** Estructura obligatoria: **¿Qué pasó? + ¿Por qué? (si se sabe) + ¿Cómo solucionarlo?**. (Do: "No se pudo conectar. Verifica tu clave API y reintenta.").
- **Empty States:** No solo informes, guía al usuario. (Do: "Aún no hay proyectos. Crea el primero para empezar a diseñar.").
- **Placeholders:** Usa ejemplos realistas, no repitas la etiqueta. (Do: Etiqueta "Email" -> Placeholder "ejemplo@correo.com").

### 3. Tono en el Error vs Éxito
- **Éxito:** Pasado simple y gratificante. "Proyecto creado". Evitar exclamaciones excesivas.
- **Error:** Neutral, técnico pero claro. "Clave inválida". NUNCA bromear en un momento de error o advertencia.

---

## 📋 Checklist de Revisión (Baraldi Quality)
- [ ] ¿Está en voz activa?
- [ ] ¿Usa sentence case?
- [ ] ¿Evita tecnicismos innecesarios o abreviaturas latinas?
- [ ] ¿El botón describe la acción exacta?
- [ ] ¿El mensaje de error provee una salida o solución?

---
*Framework Baraldi v2.18.0 · Core / Tech Guardrails / UX Writing Expert*
