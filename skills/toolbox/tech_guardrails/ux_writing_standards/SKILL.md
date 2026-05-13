---
name: ux-writing-standards
description: >
  Estándares maestros de UX Writing y Content Design para el Framework Baraldi.
  Úsala para redactar, revisar o auditar todo el texto de la interfaz: 
  botones, mensajes de error, tooltips y flujos de onboarding.
version: "2.26.0"
---

# ✍️ UX Writing & Content Design Standards

En el Framework Baraldi, el texto **es** interfaz. Esta habilidad asegura que la comunicación con el usuario sea clara, humana, profesional y orientada a la acción.

## ⚖️ Principios Fundacionales (Los 4 Pilares)
Basado en los estándares de clase mundial (Inspirado en *Content Design* de Stripe), todo texto generado debe someterse a esta prueba de 4 filtros:

1. **Propósito (Purposeful):** ¿El texto ayuda al usuario a tomar una decisión o completar una tarea? Si es puramente decorativo y no aporta valor, elimínalo.
2. **Concisión (Concise):** ¿Se puede decir con menos palabras sin perder significado? Cortar el relleno.
3. **Conversacional (Conversational):** ¿Suena como un ser humano experto hablando, o suena como una máquina burocrática? Tratar al usuario como un colega inteligente.
4. **Claridad (Clear):** ¿El usuario tiene que leerlo dos veces para entenderlo? Evitar jerga interna. Prohibido culpar al usuario en los errores.

### ♿ Accesibilidad Cognitiva y Screen Readers
- Escribe pensando en que un software de lectura de pantalla (VoiceOver/TalkBack) leerá el texto en voz alta. 
- Evita usar instrucciones basadas puramente en lo visual (ej: "Haz clic en el botón verde de abajo"). Usa referencias estructurales: "Haz clic en Confirmar Pago".
- **Nivel de lectura:** Apunta a un nivel de comprensión de escuela secundaria (grado 8) para asegurar que el contenido sea universalmente accesible.

---

## ⚡ Ejecución Rápida (Prompt Command)
Inspirado en la arquitectura de *Denisse Peduzzi*, esta skill soporta ejecución inmediata.
Si el usuario escribe el comando:
`/ux-writing [elemento] [contexto]`
*(Ejemplo: `/ux-writing botón para eliminar cuenta`)*

**La IA DEBE:**
1. Ignorar saludos o conversación extra.
2. Aplicar las reglas de esta skill + el `VOICE.md` del proyecto.
3. Devolver **únicamente** la opción de copy final (y 2 alternativas ultra-concisas).

---

## 🛠️ Guía de Estilo Operativa

### 1. Voz y Gramática
- **Voz Activa:** "Guardar cambios" en lugar de "Los cambios serán guardados".
- **Sentence Case:** Solo capitalizar la primera palabra y nombres propios. (Do: "Ajustes de cuenta" / Don't: "Ajustes de Cuenta").
- **Sin Periodo en Fragmentos:** Las etiquetas sueltas o botones no llevan punto final. Solo grupos de varias oraciones llevan puntuación completa.
- **Evitar Latinismos:** NUNCA uses `e.g.`, `i.e.`, `etc.` o `vs`. Usa "por ejemplo", "es decir" o "comparado con".

### 2. Micro-copy por Superficie (Inspirado en D. Peduzzi)
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**

- **CTAs y Botones:**
  - Formato estricto: **verbo + sustantivo**. (Do: "Ver perfil", "Descargar informe" / Don't: "Ir", "Haz clic aquí", "Continuar").
  - Nunca usar "Sí/No" en alertas, usar la acción exacta (ej: "Eliminar cuenta").

- **Estados Vacíos (Empty States):**
  - *Primera vez (nunca hubo datos):* Explicar qué verá el usuario y ofrecer un CTA para empezar. (Do: "Aún no tienes favoritos. Explora el mapa para agregar el primero.")
  - *Sin resultados (filtro/búsqueda):* Explicar por qué y ofrecer salida. (Do: "No hay resultados con estos filtros. Prueba ampliando la búsqueda.")

- **Formularios (Reglas de Oro):**
  - *Label:* Identifica qué es. (Do: "Correo electrónico").
  - *Placeholder:* Muestra formato esperado, no repite el label. (Do: "nombre@ejemplo.com").
  - *Helper Text:* Previene errores *antes* de que ocurran. (Do: "Usaremos este correo para enviarte el acceso.")
  - *Error Text:* Corrige el error. Debe decir **Qué pasó + Qué hacer**. (Do: "Formato inválido. Ingresa un correo como nombre@ejemplo.com")

- **Confirmaciones Destructivas:**
  - Cuando no se puede deshacer, el texto debe ser preciso y neutral. Sin alarmar, pero sin minimizar.
  - El botón de cancelar debe ser siempre la opción visualmente menos prominente.

- **Onboarding:**
  - Una idea por pantalla.
  - Estructura: **Beneficio principal (Titular) -> Explicación breve (1 línea) -> CTA claro.**

### 3. Tono en el Error vs Éxito
- **Éxito:** Pasado simple y gratificante. "Proyecto creado". Evitar exclamaciones excesivas.
- **Error:** Neutral, empático y orientado a la solución. NUNCA bromear en un error o advertencia.

### 4. Protocolo Multi-idioma e Internacionalización (i18n)
Si el producto se diseña en un idioma distinto al del framework o es multilingüe, la IA **DEBE** aplicar estas reglas de localización:
- **Expansión de Texto:** Diseñar botones y contenedores asumiendo que el alemán u otros idiomas pueden ocupar un 30-50% más de espacio que el inglés o el español. Nunca forzar anchos fijos pequeños.
- **Gramática Regional:** 
  - *Español:* Definir explícitamente si se usa "Tú", "Usted" o "Vos". Uso obligatorio de signos de apertura (`¡`, `¿`).
  - *Inglés:* Capitalización diferente (Title Case común en botones) y formato de fecha (MM/DD/YYYY).
  - *Portugués (BR):* Tono usualmente más cálido, uso de "Você".
- **Variables Dinámicas:** Escribir los placeholders de variables pensando en la gramática. En lugar de `"Error en {campo}"` (que puede fallar por género), usar `"Error al procesar: {campo}"`.

---

## 📋 Checklist de Revisión (Baraldi Quality)
- [ ] ¿Está en voz activa?
- [ ] ¿Usa sentence case?
- [ ] ¿Evita tecnicismos innecesarios o abreviaturas latinas?
- [ ] ¿El botón describe la acción exacta?
- [ ] ¿El mensaje de error provee una salida o solución?

---
*Framework Baraldi v2.26.0 · Core / Tech Guardrails / UX Writing Expert*
