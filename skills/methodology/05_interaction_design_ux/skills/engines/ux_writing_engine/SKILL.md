---
name: ux_writing_engine
description: >
  Motor táctico de UX Writing y Content Design. Se utiliza durante la Etapa 05 (Interaction Design) 
  o de forma independiente cuando se necesite auditar, redactar o corregir textos de interfaz 
  (botones, errores, empty states, onboarding). Asegura que el contenido sea accesible, 
  conciso, mitigue el sesgo WEIRD en LatAm y alinee con la voz del producto.
keywords: ux-writing, content-design, microcopy, accessibility, tone-of-voice, weird-bias, error-messages
version: "2.26.14"
---

# ✍️ UX Writing & Content Design Engine

Este motor táctico provee las reglas algorítmicas y heurísticas para redactar textos de interfaz (Microcopy). Todo texto generado por la IA para una interfaz debe pasar por este filtro de calidad antes de considerarse "Handoff-Ready".

---

## ⚙️ Configuración Inicial (Project Context Setup)
Antes de redactar, revisar o auditar cualquier texto, el Agente debe definir o solicitar al usuario que aclare los siguientes parámetros del proyecto actual si no están documentados:

| Parámetro | Definición / Opciones |
| :--- | :--- |
| **Nombre del producto** | Marca o nombre comercial del software. |
| **Idioma/s y Región** | Idioma principal (ej. US English, Español de Argentina, etc.). |
| **Persona gramatical** | Tratamiento al usuario (ej. *tú*, *usted*, *vos*, *you*). |
| **Tono general** | Tonalidad de marca (ej. *técnico*, *cercano*, *conversacional*). |
| **Audiencia principal** | Perfil del usuario (ej. *desarrolladores*, *usuarios finales no técnicos*). |

---

## 🚫 NEVER List (Anti-Patrones de Redacción)
Queda **estrictamente prohibido** cometer los siguientes errores de redacción en las interfaces del producto:

1. **Anti-Robotic:** Nunca usar jerga de sistema, códigos de error en crudo o tono robótico (Ej. *Prohibido:* "Error 404: Input inválido", *Correcto:* "No pudimos encontrar esa página").
2. **Anti-Blame:** Nunca culpar al usuario en los mensajes de error. (Ej. *Prohibido:* "Ingresaste mal el correo", *Correcto:* "El correo debe incluir un @").
3. **Anti-Click-Here:** Nunca usar etiquetas de botón genéricas o sin contexto para Screen Readers. (Ej. *Prohibido:* "Haz clic aquí", "Enviar". *Correcto:* "Leer política de privacidad", "Enviar solicitud").
4. **Anti-Passive:** Nunca abusar de la voz pasiva en inglés. El producto hace cosas por el usuario, o el usuario hace cosas en el producto. (Ej. *Prohibido:* "Your account has been created", *Correcto:* "We created your account").
5. **Anti-Color-Only:** Nunca depender exclusivamente del color para comunicar estado. (Ej. *Prohibido:* Texto rojo para error. *Correcto:* Texto rojo + Icono de Alerta + Mensaje descriptivo).
6. **Anti-AI Writing (Anti-Slop):** Queda estrictamente prohibido usar vocabulario artificial de LLM ("crucial", "vibrante", "delve", "robusto"), rodeos sofisticados (como "sirve como" en lugar de "es/tiene"), guiones em en exceso, emojis decorativos en títulos o comillas curvas en los copys del producto. Consulta la guía en [references/humanizer.md](../../../../../../references/humanizer.md).
7. **Anti-Latin Abbreviations:** En interfaces en inglés, nunca usar abreviaciones latinas como `e.g.`, `i.e.`, `etc.`, `via` o `vs`. Utilizar alternativas en lenguaje plano (ej: `for example`, `that is`, `and so on`).
8. **Anti-Gerunds:** No terminar tooltips o descripciones de error con gerundios decorativos débiles (ej. *Prohibido:* "...permitiendo ahorrar tiempo", *Correcto:* "... Esto te permite ahorrar tiempo").
9. **Anti-Emojis:** Queda estrictamente prohibido incluir emojis en botones, tooltips, placeholders, diálogos de confirmación o mensajes de error. Clutarean el layout y mimetizan contenido de spam.
10. **Anti-Long-Dashes:** No usar guiones largos (`—` o `–`) para incisos en la interfaz. Rompen el flujo visual en layouts pequeños y causan problemas con los lectores de pantalla. Usar comas o paréntesis.

---

## ✅ ALWAYS List (Mandatos Operativos)
El Agente **debe** aplicar siempre las siguientes heurísticas al redactar:

1. **Las 4 Reglas de Oro:** Todo microcopy debe ser:
   - **Útil (Purposeful):** Ayuda al usuario a avanzar en su tarea.
   - **Conciso (Concise):** Usa la menor cantidad de palabras posibles.
   - **Conversacional (Conversational):** Suena como un ser humano real.
   - **Claro (Clear):** No deja lugar a la ambigüedad.
2. **Límites de Longitud (Cognitive A11y):** 
   - *Botones:* 2 a 4 palabras máximo.
   - *Instrucciones:* Máximo 14 palabras (garantiza 90%+ de comprensión).
   - *Mensajes de Error:* 12 a 18 palabras (explicación + solución clara).
3. **Estructura Estricta de Errores:** Aplicar siempre el patrón: `[Qué falló] + [Por qué falló / Contexto] + [Qué hacer ahora]`.
   - *Ejemplo:* "No pudimos guardar los cambios. Revisa tu conexión a internet e intenta nuevamente."
4. **Front-Loading:** Colocar el verbo o la información más importante al inicio de la oración. (Ej. *Correcto:* "La contraseña debe tener 8 caracteres" vs *Incorrecto:* "Para mayor seguridad, asegúrate de que tu contraseña tenga 8 caracteres").
5. **Mayúsculas Naturales en Español (Normas RAE):** Escribir en minúsculas las disciplinas, conceptos técnicos y metodologías (ej. "sistemas de diseño", "pruebas de usabilidad"). Usar mayúsculas únicamente al inicio de textos, tras un punto, en nombres propios y siglas. Corregir cualquier mayúscula innecesaria (Title Case) arrastrada de textos originales.
6. **Sentence Case Obligatorio:** Tanto en inglés como en español, usar **Sentence case** para títulos de secciones, encabezados, menús, etiquetas y botones (solo la primera letra en mayúscula).

---

## 🗂️ Convención de Nomenclatura i18n
Al organizar los diccionarios de traducción (JSON), el Agente sugerirá la nomenclatura basada en dot-notation:

| Patrón | Ejemplo | Cuándo usar |
| :--- | :--- | :--- |
| `generic.*` | `generic.cancel`, `generic.save` | Botones o etiquetas reutilizables en múltiples vistas. |
| `featureArea.subArea.element` | `auth.login.button`, `settings.profile.error` | Copys específicos de una funcionalidad o flujo. |
| `_reusableBase.*` | `_reusableBase.email` | Constantes compartidas a nivel global. |

---

## 🗣️ Voz vs. Tono — La Distinción Fundamental
> **Regla de Oro:** La **VOZ** es invariante (la personalidad del producto). El **TONO** es contextual (cómo suena esa personalidad según el estado emocional del usuario).

### Matriz de Adaptación de Tono
El tono del producto debe modularse según el contexto y el estado de la tarea:

| Contexto del Flujo | Estado del Usuario | Tono Recomendado | Objetivo de UX |
| :--- | :--- | :--- | :--- |
| **Onboarding / Primer uso** | Entusiasmado / Confundido | Cercano, instructivo, enfocado en valor | Motivar y guiar al usuario sin abrumarlo. |
| **Navegación diaria** | Confiado / Enfocado | Neutral, ágil, altamente eficiente | Completar la tarea rápido y sin fricciones. |
| **Éxito / Confirmación** | Aliviado / Exitoso | Positivo, gratificante, muy breve | Validar la finalización correcta del proceso. |
| **Error / Falla técnica** | Frustrado / Enojado | Empático, directo, enfocado en solución | Disminuir la frustración y dar un paso a seguir. |
| **Acción destructiva** | Cauteloso | Sobrio, extremadamente preciso | Asegurar la advertencia sin asustar de más. |
| **Estado vacío (Empty State)** | Expectante | Alentador, proactivo | Explicar el área y dar una llamada a la acción. |

---

## 🌐 Guías de Redacción Humana en Español
Cuando el usuario solicite redactar, revisar o auditar copys en español, aplica las siguientes directivas:
*   **Tratamiento Consistente:** Adaptarse al pronombre definido en la configuración del proyecto (tú, vos o usted). Evitar modismos locales de una sola región a menos que el proyecto lo exija explícitamente.
*   **Voz Pasiva Reflexiva:** A diferencia del inglés, en español es natural y correcto usar la pasiva reflexiva para indicar estados del sistema (ej. *"Se guardaron los cambios"*, *"No se pudo conectar"*), evitando que la oración suene robótica o artificial.
*   **Evitar la Complacencia Corporativa:** Dirigirse al usuario de manera horizontal, directa y honesta. Usar un trato directo y natural, rechazando el tono condescendiente u obsecuente (típico de las traducciones literales de Silicon Valley).
---

## 🗺️ Mitigación de Sesgo WEIRD (UX/Producto en LatAm)
Queda terminantemente prohibido asumir que el usuario promedio cuenta con la infraestructura o hábitos de los centros tecnológicos globales:
*   **Conectividad y Hardware:** No asumir conectividad constante, velocidad ultra alta o dispositivos de última generación. Todo flujo debe contemplar estados sin conexión, carga diferida o interfaces optimizadas para baja transferencia de datos.
*   **Bancarización y Confianza:** No asumir que el 100% de los usuarios cuenta con tarjetas de crédito internacionales o billeteras de integración nativa. Proveer claridad absoluta sobre métodos de pago locales, transferencias manuales y validaciones de seguridad.
*   **Fricciones Culturales:** Considerar las fricciones locales (burocracia tributaria, inestabilidad de pasarelas de pago locales) y estructurar mensajes que den calma e información transparente ante transacciones fallidas.

---

## 📖 Glosario UX (UX Writing Glossary)

| Concepto (Inglés) | Español Recomendado | Evitar en Español | Notas |
| :--- | :--- | :--- | :--- |
| **Sign in / Log in** | Iniciar sesión / Entrar | Loguearse, Registrarse | Acceso al sistema. |
| **Sign up / Register** | Registrarse / Crear cuenta | Signupearse | Para nuevos usuarios. |
| **Save** | Guardar | Salvar, Aceptar | Confirmar almacenamiento de datos. |
| **Apply** | Aplicar | Guardar | Para cambios temporales o filtros de datos. |
| **Cancel** | Cancelar | Abortar, Salir | Revertir una acción en curso. |
| **Close** | Cerrar | Cancelar | Descartar modales informativos. |
| **Delete** | Eliminar / Borrar | Remover, Quitar | Acción destructiva permanente e irreversible. |
| **Remove** | Quitar / Remover | Eliminar | Desasociar sin destruir los datos subyacentes. |
| **Settings** | Ajustes / Configuración | Preferencias, Opciones | Preferir "Ajustes" por brevedad. |
| **View** | Ver | Visualizar | Directo y conversacional. |

---

## 🛠️ Protocolo de Ejecución (UX Audit)
Cuando el usuario pida "Auditar los textos de esta pantalla" o "Aplicar el UX Writing Engine", responde con la siguiente estructura de tabla:

| Texto Original | Texto Optimizado (UXW) | Racional (Regla Aplicada) |
| :--- | :--- | :--- |
| "Aceptar" | "Confirmar pago" | *Accesibilidad:* Contexto claro para Screen Readers (especificidad). |
| "El usuario introdujo datos inválidos" | "El número de tarjeta está incompleto" | *Anti-Blame:* Evita culpar al usuario. Especificidad técnica. |

---

## 🔍 Patrones de Auditoría Automáticos (Grep)
Para auditorías automáticas en localizaciones JSON o plantillas de frontend, el Agente y los scripts locales deben buscar estos patrones de violación:

| Tipo de Violación | Expresión Regular | Notas |
| :--- | :--- | :--- |
| Abreviaciones latinas | `e\.g\.\|i\.e\.\|etc\.\| via \| vs ` | Ejecutar solo sobre archivos en inglés. |
| Ausencia de contracciones | `cannot\|do not\|will not\|does not\|is not\|are not` | Ejecutar solo sobre archivos en inglés. |
| Sobreuso de "please" | `[Pp]lease` | Permitido máximo una vez por pantalla de UI. |
| Lenguaje acusatorio | `You need\|You must\|You entered\|You have to` | Reescribir enfocándose en el estado del objeto. |
| Voz pasiva | `was created\|is controlled\|will be shown\|was deleted` | Ejecutar solo sobre archivos en inglés. |

---

## ✅ Checklist de Control de Calidad
Antes de finalizar cualquier microcopy, verifica:
- [ ] **Mayúsculas:** Sentence case obligatorio en todos los encabezados y botones.
- [ ] **Voz Activa:** Ausencia de voz pasiva y front-loading aplicado (acción primero).
- [ ] **i18n:** Llaves del diccionario sugeridas con dot-notation semántico.
- [ ] **Sin abreviaciones latinas:** Sin `e.g.`, `i.e.`, `etc.`, `via` o `vs` en inglés.
- [ ] **Sin lenguaje acusatorio:** Errores explican el estado del sistema, no culpan al usuario.
- [ ] **Estructura de Errores:** Contiene Qué pasó + Por qué + Qué hacer ahora.
- [ ] **Sin emojis:** Emojis totalmente ausentes de los textos de interfaz.
- [ ] **Sin gerundios:** Frases terminan con puntos y verbos en activo.
- [ ] **Tono dinámico:** Modulado según el estado emocional de la matriz de contexto.
- [ ] **Español (Voseo):** Voseo cordobés correcto con tildes (ej: "sabés", "hacés").
- [ ] **Sesgo WEIRD:** Se contempla la realidad de LatAm (baja conectividad, pasarelas locales).

---
*Framework Baraldi v2.26.14 · skills/methodology/05_interaction_design_ux/skills/engines/ux_writing_engine/SKILL.md*
