<!-- 
🤖 NOTA PARA AGENTES DE IA (AI AGENTS ONLY):
Este archivo es EXCLUSIVAMENTE una guía de onboarding conceptual para humanos principiantes.
Si eres un agente de IA operando este repositorio, IGNORA este archivo para tu flujo de trabajo. 
Tu punto de partida operativo para ejecutar el framework es el archivo README.md o el Backlog Estratégico.
-->

# 🚀 Me siento más perdido que perro arriba del techo
## Cómo funciona la magia de FWB, ahora te explico.

Si llegaste hasta acá con la sospecha de que esto está buenísimo, pero no entendés un carajo de lo que estás viendo (¿qué es un LLM?, ¿qué es un IDE?, ¿qué es Antigravity?), relajá y tranca. **Este documento es por dónde comenzar.**

En el mundo de la tecnología, a veces los desarrolladores hablan en código difícil. Pero como en el **Framework Baraldi** diseñamos para humanos, vamos a desarmar todo esto con manzanas y peras.

---

## 1. Vamos con un ejemplo real, ponele que ChatGPT versión web es como un WhatsApp y este en cambio una persona.

La mayoría de la gente conoce la Inteligencia Artificial a través de una página web (como ChatGPT o Claude.ai) donde vos creás una nueva conversación en blanco y la cosa comienza ahí. 

*   **La IA de Chat (El "WhatsApp"):** Es como chatear con un consultor experto por WhatsApp. Vos le contás un problema, él te responde con texto lindo. Pero **él no puede ver tu computadora, no puede abrir tus carpetas, ni puede escribir tus archivos**. Si querés aplicar lo que te dice, tenés que copiar y pegar todo a mano. Otro tema es que a medida que vas laburando se va haciendo grande el contexto de lo que conversaste y este se va perdiendo, va tirando cualquiera. Otro punto es que es pasivo, vos entrás en una pantalla en blanco y debés comenzar de cero. 
*   **El Agente LLM en tu IDE (El "Copiloto"):** Herramientas como **Cursor**, **VS Code** o **Antigravity** son programas de trabajo (llamados "IDE") donde los desarrolladores escriben software. Pero tranca, no es que vas a escribir software, estos programas van más lejos, no es exclusivo para escribir software. Podés utilizar su potencial agéntico para realizar tareas como escribir un texto, diseñar, armar una planilla... es decir, podés hacer muchísimo más que escribir software. Acá el secreto es que seas más abierto a pensarlo de esta manera: El IDE es el programa que me da la posibilidad de usar agentes, agentes que usan contextos enormes, LLMs, que pueden bajo ese contexto tener sentido con todo lo que definamos dentro de un ámbito (carpeta o compu). Todo lo que coloquemos lo va a poder entender e interactuar, sacar datos, colocar, editar e incluso conectarse con otras herramientas. Al meter a la IA adentro de este entorno, **el consultor se sienta en el escritorio al lado tuyo**. Puede abrir tu carpeta del proyecto, ver tus archivos, crear documentos por vos y auditar que todo esté en su lugar en tiempo real. 

> [!TIP]
> **¿Por qué el Framework Baraldi necesita esto?** 
> Porque el FWB no es un libro que se lee. Es un **sistema de archivos vivos** (tu matriz de negocio, tus especificaciones de diseño, tu base de datos de memoria). El agente de IA necesita "tocar" tu espacio de trabajo para ayudarte a construir, validar y mantener todo en orden de punta a punta.
> 
> **¿Y la magia?** Sabiendo que esto puede tener contextos enormes, nos aprovechamos de eso construyendo un conjunto de habilidades entrelazadas entre sí. Por un lado le dan a la IA un contexto, un espíritu y una manera de trabajar; por el otro, le otorgan habilidades particulares. Claro que hay muchas cosas que no le decimos (porque esas ya las hace bien de por sí), pero sí le indicamos los límites, las formas correctas de hacer algo, y también lo que nunca debe hacer. Cómo debe conectar un punto con el otro y cómo debe conversar con vos.
> 
> No hay "magia negra" en esto: si explorás los archivos vas a ver que están en un formato súper claro para los humanos. En base a esos guardrails inducimos a la IA para que deje de ser una página en blanco y pase a ser una herramienta activa, viva, secuencial, asistente y... ¿por qué no? Mágica.

---

## 2. El Glosario Rápido (Sin vueltas técnicas)

*   **LLM (Large Language Model):** El "motor cognitivo" de la IA (como Claude o Gemini). Pensalo como un cerebro superdotado que leyó todo internet, pero que necesita que vos le des dirección. Que sea un superdotado de conocimiento no sirve de mucho si no sabe cómo utilizarlo o qué hacer para nosotros.
*   **Harness (Arnés):** Los límites y reglas de seguridad que le ponemos a la IA. Sin un arnés, la IA tiende a hacer el camino fácil y genérico. Con el arnés, la IA trabaja bajo tus estándares de calidad.
*   **Engram:** El "cerebro de memoria" del framework. Si cerrás el chat de ChatGPT, la IA olvida quién sos. Con Engram, la IA recuerda tus decisiones estratégicas del mes pasado. Esto queda en tu compu; no importa qué uses, las memorias se guardan localmente, son tu propiedad y están siempre disponibles, de forma transversal a todo lo que tengas, para cuando quieras y dimensionalmente conectadas. Una locura total.

---

## 3. ¿Cómo se usa el Framework si no sé programar?

El FWB está diseñado para democratizar el conocimiento. No necesitás escribir una sola línea de código para operarlo. Tu único trabajo es **dirigir la conversación**:

1.  **Instalás el entorno:** Te bajás un editor como Antigravity (se instala en 2 minutos). Si preferís ver a alguien haciéndolo, acá tenés un [video paso a paso de cómo instalar Antigravity](https://www.youtube.com/watch?v=3J6w5p2cPYA) que te lo explica en un toque.
2.  **Te instalás el FW:** Acá te dejo cómo lo hacés paso a paso en nuestra [Guía Rápida de Instalación v2.26.14](https://github.com/leobaraldi96/fwbaraldi#-quick-start--instalaci%C3%B3n-v2265). Como vas a ver, es una pavada. E incluso, si querés saltearte la teoría, **le podés decir directamente a tu agente de IA que se encargue él mismo**. ¿Qué más fácil que eso? Le pegás este comando en el chat y que trabaje: *"¡Che agente! Instalate esto: `npx github:leobaraldi96/fwbaraldi`"*.
3.  **Hablás natural con tu Agente:** Le decís directamente en el chat: *"Che, soy Fulano. Quiero que arranquemos un proyecto nuevo usando el fw-baraldi"*.

El agente se va a encargar de preparar todo, se remanga y te va a hacer las preguntas necesarias, las que hacen falta y también las que duelen (jeje). Va a leer los archivos si se los diste, y si no, no hay drama porque te los va a ir pidiendo a medida que avances. Va a ir dándote los entregables de cada etapa, no te deja tirado, se ajusta a tu nivel siempre empujando, guiando y llevándote al next step. 

Su misión es que termines el laburo de la mejor manera, con calidad, pero lo más importante es que sea un proceso de a dos. El agente va a aprender no solo para este proyecto, sino que todo lo que interactúa con vos lo va a recordar para otros proyectos. Aprender posta: cómo sos, quién sos, cómo te gusta laburar, las cosas que costaron y cómo las resolvieron; y si eso vuelve a pasar, lo va a recordar. 

El objetivo de este socio es llevarte a realizar la tarea: no te va a dejar de picar la cabeza hasta que no termines y que aprendas, para que cada día salgas un poco mejor.

---

**PD:** Una más: esto es código abierto... Entonces... ponele que sos un cocinero (cómo llegaste acá no sé, no voy a preguntar). ¿Quiere decir que si al agente le digo: *"mirá esto que hizo Leo, pero armemos un framework que me ayude con mi cocina y producción... como yo lo hago, donde pueda colocar mis secretos, cómo les gusta a mis clientes y cómo me gusta hacerlo a mí"*... funciona? ¡SÍ! ¡Heeee, está bueno, ¿no?!!!! Animáte, ¡te vas a volver loco!

---

*Framework Baraldi · Diseñado por Leo Baraldi · Hecho para todos.*
