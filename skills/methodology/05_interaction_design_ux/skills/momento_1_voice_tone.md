---
name: momento-1-voice-tone
description: >
  Protocolo operativo para definir la Voz, Tono y Microcopy del producto.
  Produce el artefacto VOICE.md.
---

# [MOMENTO 1] Voice, Tone & Microcopy (VOICE.md)

> **Misión:** Transmutar la estrategia de producto (Etapa 01 y 03) en la **Personalidad del Sistema**. Definiremos cómo "habla" el producto para luego plasmarlo en el `VOICE.md`, un contrato agéntico para futuras IAs y desarrolladores.

## 🏁 Instrucciones para el Agente (Cómo conducir este momento)

### Paso 1: Recuperación de Contexto e Idioma (Context & i18n)
Antes de preguntar nada al usuario, debes:
1. Buscar en el `docs-fwbaraldi/` o en `Engram` el *Problem Statement* y las *Business Rules*.
2. Entender quién es el *Actor* (Usuario) y cuál es su estado emocional al usar el producto.
3. **Determinar el Idioma (i18n) y Mentoría:** Pregunta en qué idioma(s) estará el producto. 
   - **[CRÍTICO - EMPATÍA]:** Muchos diseñadores o UXW no saben qué es un archivo JSON. Si el proyecto es multilingüe (o incluso de un solo idioma, para buenas prácticas), debes explicarle al usuario de forma amigable qué es un JSON de localización.
   - *Ejemplo de explicación obligatoria:* "En lugar de usar planillas de Excel para pasarle los textos a los programadores, voy a crear un archivo técnico (JSON). Es simplemente una lista ordenada que los programadores pueden conectar directamente a la app. ¿Te parece bien que armemos este archivo para ahorrarte ese trabajo manual? Te sugiero consultarlo con tu equipo Frontend para confirmar si les sirve este formato."
4. Leer la "Guía Maestra" en `skills/methodology/05_interaction_design_ux/skills/engines/ux_writing_engine/SKILL.md` para asimilar las leyes universales de escritura del framework.

### Paso 2: Alineación de Personalidad y Localización (El Brief)
Presenta al usuario un análisis rápido de lo encontrado y propón **3 arquetipos de voz**.
Si el producto es en otro idioma o multilingüe, define aquí las reglas regionales (ej: *Tú vs Usted vs Vos* para español, *You* informal para inglés).
*Ejemplo:* 
*   **A. El Guía Experto:** Directo, seguro, profesional. Usa lenguaje técnico preciso.
*   **B. El Compañero Empático:** Cálido, alentador, humano. Minimiza la fricción con amabilidad.
*   **C. El Operador Eficiente:** Minimalista, hiper-conciso, sin adornos. Orientado 100% a la acción.

Pídele al usuario que elija uno o proponga una mezcla.

### Paso 3: Matrices de Tono y Microcopy (El Core)
Una vez definida la Voz, diseña con el usuario las matrices operativas:
1. **Matriz de Tono Variables:** Cómo cambia la voz según el estado (Éxito, Error Crítico, Onboarding, Loading).
2. **Estándares de Microcopy:**
    *   **Botones (CTAs):** ¿Verbos en infinitivo ("Guardar") o primera persona ("Guardar mi perfil")?
    *   **Empty States:** Deben responder 3 preguntas: *¿Qué es este espacio? / ¿Por qué está vacío? / ¿Cómo empiezo?*. Nunca usar solo un ícono vacío sin texto de orientación.
    *   **Mensajes de Error:** Prohibido culpar al usuario. Estructura fija: *Qué pasó + Por qué + Cómo solucionarlo*. (Ej: *"No pudimos guardar los cambios. Revisa tu conexión e inténtalo de nuevo."*)
    *   **Tooltips:** Máximo 150 caracteres. Un solo concepto por globo. Nunca esconder información crítica dentro de un tooltip.
3. **Estados Temporales y de Confirmación** *(patrón incorporado desde AI UX Playground)*
    *   **Carga / Progreso — Regla de los 3 umbrales:**
        | Tiempo de espera | Qué mostrar |
        | :--- | :--- |
        | **< 2 segundos** | Solo spinner visual, sin texto |
        | **2 – 10 segundos** | Mensaje de estado descriptivo (ej: *"Guardando cambios..."*) |
        | **> 10 segundos** | Duración estimada + porcentaje de progreso (ej: *"Procesando tu video. Suele tomar 1-2 minutos."*) |
    *   **Mensajes de Éxito — Más allá de la confirmación:**
        *   ❌ Genérico: *"¡Éxito!"*
        *   ✅ Específico: *"Tu perfil ha sido actualizado."*
        *   ✅ Con datos: *"Mensaje enviado a usuario@ejemplo.com"* / *"Pedido #12345 confirmado."*
        *   ✅ Con siguiente paso: *"Contraseña cambiada. Ya puedes iniciar sesión con tu nueva contraseña."*

### Paso 4: Auditoría Semántica (Feedback Loop con Etapa 04)
**[CRÍTICO - EVITAR DRIFT ARQUITECTÓNICO]:** Antes de aprobar el microcopy final o los JSON, la IA debe cruzar los términos elegidos aquí con el artefacto de la Etapa 04: `04_VOCABULARY.md`.
- Si el UX Writer propone usar la palabra *"Cliente"*, pero en la Etapa 04 el vocabulario oficial del negocio dictaba *"Huésped"*, la IA debe levantar una alerta de **Discrepancia Semántica**.
- Si el humano y la IA deciden que la nueva palabra es mejor, la IA **está obligada** a actualizar retroactivamente el `04_VOCABULARY.md` (Etapa 04) para que la ontología del sistema no se fracture.

### Paso 5: Generación de Artefactos (VOICE.md y Diccionario i18n)
Con todas las validaciones aprobadas por el humano, debes generar dos cosas:
1. El archivo `docs-fwbaraldi/VOICE.md` (El contrato de personalidad).
2. **[NUEVO] El Diccionario de Localización (i18n Map):** Para evitar planillas de Excel engorrosas entre Diseño y Frontend, debes extraer todo el microcopy acordado (CTAs, Errores, Labels) y generar archivos JSON de llaves de traducción (`docs-fwbaraldi/locales/es.json`, `en.json`, etc.). 

*Ejemplo de estructura JSON requerida (`es.json`):*
```json
{
  "auth": {
    "login": {
      "title": "Iniciar sesión",
      "cta_primary": "Entrar a mi cuenta",
      "error_invalid_credentials": "El correo o la contraseña no coinciden. Inténtalo de nuevo."
    }
  }
}
```

> 🛡️ **Autonomía del UX Writer:** El humano (UXW) puede editar estos archivos JSON manualmente en cualquier momento, o simplemente pasarle a la IA sus traducciones crudas para que ella actualice las llaves correspondientes. La IA se encargará de mantener la **paridad estructural** (asegurar que la llave `auth.login.title` exista tanto en `es.json` como en `en.json` con sus respectivos valores).

**Regla para Wireframes:** A partir de ahora, cuando diseñes wireframes en el Momento 3 o pases a UI en la Etapa 06, debes referenciar el texto usando la llave (ej: `[Botón: auth.login.cta_primary]`) en lugar de inventar texto nuevo, asegurando sincronía total con el Frontend.

---

## 📄 Estructura Obligatoria del Artefacto `VOICE.md`

Cuando escribas el archivo físico, usa esta estructura exacta:

```markdown
# VOICE.md — Fuente de Verdad de Contenido

> **Prompt Inyectable:** "Eres un UX Writer experto. Aplica estrictamente las siguientes reglas de Tono, Voz y Microcopy para cualquier texto, botón o mensaje de error que generes para este proyecto."

## 1. La Voz (Nuestra Personalidad Constante)
- **Arquetipo:** [Ej: Guía Experto]
- **Somos:** [Ej: Precisos, Empáticos, Claros]
- **NO Somos:** [Ej: Robóticos, Condescendientes, Excesivamente informales]

## 2. El Tono (Nuestra Actitud Variable)
| Contexto / Estado | Emoción del Usuario | Nuestro Tono | Regla de Oro |
| :--- | :--- | :--- | :--- |
| **Onboarding** | Expectante, ansioso | Cálido, alentador | Celebrar cada pequeño paso. |
| **Error (Fricción)** | Frustrado | Directo, resolutivo | Jamás usar humor. Dar la solución inmediata. |
| **Success** | Aliviado, feliz | Celebratorio pero breve | Confirmar la acción en menos de 5 palabras. |

## 3. Estándares de Microcopy (Gramática de UI)
- **CTAs (Botones):** [Regla de redacción, ej: Verbo de acción fuerte + Objeto]
- **Etiquetas de Formularios:** [Regla, ej: Sentence case, sin dos puntos]
- **Mensajes de Error:** [Estructura, ej: Problema -> Solución]
- **Empty States:** [Regla, ej: Orientados a la acción principal]

## 4. Diccionario de Términos (Naming)
*Conectado con la Etapa 04 (Vocabulary).*
- **Sí decir:** [Término A] -> **NO decir:** [Término B]

## 5. Guardrails de Escritura Humana (Anti-Slop de Interfaz)
*Heredados del manual de la organización.*
Toda redacción de interfaz (títulos, modales, alertas, correos) debe regirse bajo los principios del manual de escritura humana:
- **Tono conversacional y ritmo natural:** Evitar la neutralidad estéril de chatbot; tomar una postura de marca clara y variar la longitud de las oraciones.
- **Lista de palabras prohibidas de IA:** Queda prohibido usar palabras del vocabulario redundante de LLM (ej. "crucial", "vibrante", "tapiz", "delve").
- **Directivas gramaticales:** No usar guiones largos (—) en exceso, comillas tipográficas curvas o emojis decorativos en títulos. Usar el verbo directo "es/tiene" en lugar de rodear con "sirve como/actúa como".
- Para ver ejemplos prácticos de antes/después, consúltese la guía universal [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) o las directivas del manual de escritura humana del framework.
```

---

## 🧠 Protocolo de Memoria y Guardrails
- **Mandato de Soberanía:** No resumas el input del usuario al generar el `VOICE.md`. Sus palabras exactas sobre la identidad de la marca son oro.
- **Engram Save:** Al generar el archivo, lanza un `mem_save` con el título *"Establecido el VOICE.md"* y el tag `ux-voice-tone`.

---
*Framework Baraldi v2.26.8 · Etapa 05 / Momento 1*
