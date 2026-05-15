---
name: ux_writing_engine
description: >
  Motor táctico de UX Writing (Microcopy). Se utiliza durante la Etapa 05 (Interaction Design) 
  o de forma independiente cuando se necesite auditar, redactar o corregir textos de interfaz 
  (botones, errores, empty states, onboarding). Asegura que el contenido sea accesible, 
  conciso y alinee con la voz del producto.
keywords: ux-writing, microcopy, accessibility, tone-of-voice, error-messages
version: "2.26.4"
---

# ✍️ UX Writing Engine

Este motor táctico provee las reglas algorítmicas y heurísticas para redactar textos de interfaz (Microcopy). Todo texto generado por la IA para una interfaz debe pasar por este filtro de calidad antes de considerarse "Handoff-Ready".

## 🎯 Objetivo del Engine
Transformar el "Lorem Ipsum" y los textos genéricos de sistema en conversaciones humanas que guíen al usuario de forma inequívoca, respetando los estándares de Accesibilidad Cognitiva y Screen Readers (WCAG).

---

## 🚫 NEVER List (Anti-Patrones de Redacción)
El Agente tiene **estrictamente prohibido** cometer los siguientes errores de redacción:

1. **Anti-Robotic:** Nunca usar jerga de sistema, códigos de error en crudo o tono robótico (Ej. *Prohibido:* "Error 404: Input inválido", *Correcto:* "No pudimos encontrar esa página").
2. **Anti-Blame:** Nunca culpar al usuario en los mensajes de error. (Ej. *Prohibido:* "Ingresaste mal el correo", *Correcto:* "El correo debe incluir un @").
3. **Anti-Click-Here:** Nunca usar etiquetas de botón genéricas o sin contexto para Screen Readers. (Ej. *Prohibido:* "Haz clic aquí", "Enviar". *Correcto:* "Leer política de privacidad", "Enviar solicitud").
4. **Anti-Passive:** Nunca abusar de la voz pasiva. El producto hace cosas por el usuario, o el usuario hace cosas en el producto. (Ej. *Prohibido:* "Tu cuenta ha sido creada", *Correcto:* "Creamos tu cuenta").
5. **Anti-Color-Only:** Nunca depender exclusivamente del color para comunicar estado (Ej. *Prohibido:* Un texto rojo para error. *Correcto:* Texto rojo + Icono de Alerta + Mensaje descriptivo).

---

## ✅ ALWAYS List (Mandatos Operativos)
El Agente **debe** aplicar siempre las siguientes heurísticas al redactar:

1. **Las 4 Reglas de Oro:** Todo microcopy debe ser:
   - **Útil (Purposeful):** Ayuda al usuario a avanzar.
   - **Conciso (Concise):** Usa la menor cantidad de palabras posibles.
   - **Conversacional (Conversational):** Suena humano.
   - **Claro (Clear):** No deja lugar a la ambigüedad.
2. **Límites de Longitud (Cognitive A11y):** 
   - *Botones:* 2 a 4 palabras máximo.
   - *Instrucciones:* Máximo 14 palabras (garantiza 90%+ de comprensión).
   - *Mensajes de Error:* 12 a 18 palabras (explicación + solución).
3. **Estructura Estricta de Errores:** Aplicar siempre el patrón: `[Qué falló] + [Por qué falló / Contexto] + [Qué hacer ahora]`.
   - *Ejemplo:* "No pudimos guardar los cambios. Revisa tu conexión a internet e intenta nuevamente."
4. **Escritura para Traducción (i18n):** Redactar asumiendo que los botones se expandirán un 30% en otros idiomas (como el alemán). Evitar modismos locales o metáforas deportivas.
5. **Front-Loading:** Colocar el verbo o la información más importante al inicio de la oración. (Ej. *Correcto:* "La contraseña debe tener 8 caracteres" vs *Incorrecto:* "Para mayor seguridad, asegúrate de que tu contraseña tenga 8 caracteres").

---

## 🎨 Patrones de Redacción Obligatorios (Templates)

**1. El Patrón "Empty State" (Páginas vacías sin datos):**
Nunca uses textos técnicos o callejones sin salida. Usa esta estructura exacta:
- **Título (Qué está vacío):** "Aún no tienes reportes guardados"
- **Cuerpo (Beneficio/Qué pasará):** "Guarda reportes para acceder a tu información más rápido."
- **Botón (Acción Específica):** "Crear mi primer reporte"

**2. El Patrón "Error Message" (Mensajes de Error):**
Nunca culpes al usuario o uses jerga técnica (Ej. "ERR_TIMEOUT").
- **Qué falló:** "No pudimos enviar tu invitación."
- **Por qué (Contexto):** "El correo electrónico no existe o está mal escrito."
- **Qué hacer ahora (Solución):** "Revisa que incluya un '@' e intenta nuevamente."

**3. El Patrón "Onboarding Flow":**
Un onboarding no es un manual de usuario. Debe ser rápido y accionable:
- **Paso 1:** Bienvenida + Propuesta de Valor.
- **Paso 2:** Setup mínimo indispensable (Solo información crítica).
- **Paso 3:** Feature 1 + CTA para probarlo ahora mismo.
- **Paso 4:** Celebración + Siguiente paso claro.

---

## 🗣️ Voz vs. Tono — La Distinción Fundamental

> **Regla de Oro:** La **VOZ** es invariante (la personalidad del producto). El **TONO** es contextual (cómo suena esa personalidad según el estado emocional del usuario).

**Ejemplos de Voz aplicada a distintos productos:**
| Atributo de Voz | Producto Utilitario (ej. App de Transporte) | Producto Social (ej. App de Juegos) | Producto Premium (ej. Club Exclusivo) |
| :--- | :--- | :--- | :--- |
| **Directa** | "El colectivo llega en 3 min." | "¡3 jugadores esperan tu movida!" | "Su mesa estará disponible a las 20h." |
| **Empática** | "La línea 5 tiene demoras. Sugerimos la 7." | "¡Casi! Un punto más y subes de nivel." | "Entendemos su inconveniente. Nuestro equipo lo contactará." |
| **Positiva** | "Llegaste. Descarga aquí tu comprobante." | "¡Ganaste 50 puntos! ¿Seguimos?" | "Todo listo para su experiencia." |

**Cómo construir la Voz de un producto (Voice Chart):**
1. Elegir 3-5 atributos (Ej: Directo, Experto, Cálido).
2. Para cada uno: definir qué SÍ hace, qué NO hace, y un ejemplo de interfaz real.
3. Testear la Voz contra 3 escenarios distintos: Error, Onboarding y Éxito.

---

## 🧠 Matriz de Adaptación de Tono
La **Voz** del producto (personalidad) es constante y se define en la Etapa 05 (VOICE.md), pero el **Tono** debe adaptarse al estado emocional del usuario:

| Estado del Usuario | Contexto de UI | Cómo debe sonar el Tono |
| :--- | :--- | :--- |
| **Frustrado** | Errores de pago, caídas de sistema, bloqueos. | Empático, directo al grano, enfocado en la solución. Cero humor. |
| **Confundido** | Onboarding complejo, features nuevos. | Paciente, explicativo, paso a paso. |
| **Cauteloso** | Borrar cuenta, pagos de alto valor. | Transparente, serio, mostrando consecuencias claras. |
| **Exitoso** | Tareas completadas, milestones. | Positivo, alentador (proporcional al logro). |
| **Confiado** | Uso diario, tareas repetitivas. | Eficiente, invisible, confirmaciones rápidas (Ej. "Guardado"). |

---

## 🛠️ Protocolo de Ejecución (UX Audit)
Cuando el usuario pida "Auditar los textos de esta pantalla" o "Aplicar el UX Writing Engine", el Agente debe responder con la siguiente estructura de tabla:

**Ejemplo de Salida Esperada:**

| Texto Original | Texto Optimizado (UXW) | Racional (Regla Aplicada) |
| :--- | :--- | :--- |
| "Aceptar" | "Confirmar pago" | *Accesibilidad:* Contexto claro para Screen Readers. |
| "El usuario introdujo datos inválidos" | "El número de tarjeta está incompleto" | *Anti-Blame:* Evita culpar al usuario. Especificidad. |

> **Protocolo de Memoria:** Si el agente establece patrones de escritura repetitivos (ej. "Siempre usamos 'Correo' en lugar de 'Email'"), debe usar `mem_save` para registrar este acuerdo en el Glosario de la Etapa 04.
