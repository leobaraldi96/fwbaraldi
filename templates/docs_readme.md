# 📂 El Cerebro de tu Proyecto (docs-fwbaraldi)

¡Hola! Si estás viendo esta carpeta, estás en el centro de mando de tu proyecto. 
Aquí es donde el Framework Baraldi guarda todo el conocimiento estratégico, las definiciones de diseño y las reglas de tu producto. 

Este archivo es un mapa para vos y para tu agente de IA. Resume exactamente qué hay en cada subcarpeta, para qué sirve y cómo debe utilizarse esta información.

---

## 🗺️ Mapa de Carpetas y Artefactos

### `01_Problem_Framing/`
*   **¿Qué tiene?** El encuadre del problema. Artefactos como el `01_Business_Goal.md` y `02_User_Outcomes.md`.
*   **¿Para qué sirve?** Define el "Para qué" estamos construyendo esto. El modelo de negocio y los resultados esperados.
*   **Uso del Agente:** La IA debe consultar esta carpeta antes de proponer cualquier solución o *feature* para asegurarse de que impacta directamente en los KPIs del negocio.

### `02_System_Analysis/`
*   **¿Qué tiene?** El mapa del ecosistema. Artefactos como `01_Ecosystem_Map.md` y `02_Actor_Profiles.md`.
*   **¿Para qué sirve?** Entender todas las partes móviles: quiénes son los usuarios, qué sistemas se conectan y cómo fluye la información.
*   **Uso del Agente:** Crucial para que la IA entienda las restricciones técnicas y los diferentes roles (actores) antes de diseñar flujos.

### `03_Product_Logic/`
*   **¿Qué tiene?** La matriz de requerimientos y las historias de usuario. Artefactos como `01_Requirements_Matrix.md`.
*   **¿Para qué sirve?** Traduce los problemas en funcionalidades concretas, priorizadas y listas para diseñar.
*   **Uso del Agente:** Es el "Backlog" táctico. La IA lo lee para saber exactamente qué pantallas o flujos debe resolver en las siguientes etapas.

### `04_Information_Architecture/`
*   **¿Qué tiene?** El esqueleto del producto. Vocabulario, taxonomías, sitemap y modelos de objetos (ej. `04_Vocabulary_Object_States.md`).
*   **¿Para qué sirve?** Define cómo se organizan las cosas y cómo se llaman. Asegura que todos hablemos el mismo idioma (Ontología).
*   **Uso del Agente:** La IA debe memorizar el vocabulario de esta carpeta. Es la fuente de la verdad semántica (Ej: usar siempre la palabra oficial dictada acá y no inventar sinónimos).

### `05_Interaction_Design/`
*   **¿Qué tiene?** Los flujos de usuario (User Flows) y las especificaciones de micro-interacciones (ej. `05_Micro_Interactions_States.md`).
*   **¿Para qué sirve?** Detalla cómo navega el usuario pantalla por pantalla y qué pasa cuando hace clic, hay un error o el estado cambia.
*   **Uso del Agente:** *Regla de oro:* La IA debe leer exhaustivamente TODOS los actores (Etapa 02) y TODOS los requerimientos (Etapa 03) para mapear las interacciones sin tomar atajos ni omitir casos borde.

### `06_Visual_Design/`
*   **¿Qué tiene?** Especificaciones de interfaz de alta fidelidad, tokens de diseño y directrices estéticas.
*   **¿Para qué sirve?** Guía el "Look & Feel" y la construcción final de la UI.
*   **Uso del Agente:** La IA lo utiliza como sistema de diseño para estructurar componentes o generar código frontend sin alucinar estilos genéricos.

### `07_Handover_QA/`
*   **¿Qué tiene?** Los contratos de entrega a desarrollo, criterios de aceptación técnica y reportes de QA.
*   **¿Para qué sirve?** Asegurar que lo que se diseñó se puede construir con calidad y cumple los estándares.
*   **Uso del Agente:** La IA actúa como auditora (Red Team) verificando que el entregable final cumpla con este contrato técnico.

### Carpetas Transversales (UXR / UXW / IA)
*   **`UXR/` (Research):** Entrevistas, métricas y validaciones con usuarios. Datos crudos.
*   **`UXW/` (Writing):** Manual de tono, voz y glosarios de error. La IA lo consulta de forma constante para redactar copys (micro-copy).
*   **`IA/` (Inteligencia Artificial):** Prompts específicos, contextos y configuraciones avanzadas del arnés cognitivo.

---
*Este archivo es inicializado automáticamente por el Framework Baraldi como guía estructural de trabajo.*
