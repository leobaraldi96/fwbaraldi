# Framework Baraldi 🤖⚡

> **AI-Augmented System Product Design**
>
> Un framework metodológico diseñado para potenciar el diseño de productos digitales utilizando Inteligencia Artificial como copiloto estratégico en todas las etapas del proceso.

![Version](https://img.shields.io/badge/version-2.3.3-blue)
![Status](https://img.shields.io/badge/status-active-success)

---

## 📌 Qué es este framework

El **Framework Baraldi** es una colección estructurada de Skills y prompts que guían a modelos de IA (Claude, GPT, Gemini) a través de las fases del diseño de producto.

A diferencia de un asistente genérico, este framework obliga a la IA a adoptar metodologías rigurosas, mostrar su proceso de razonamiento, cuestionar supuestos y producir artefactos estructurados — en lugar de respuestas conversacionales que el diseñador no puede validar ni reutilizar.

### 🎨 Representación Visual y Arquitectura Core
Tenemos diagramas y explicaciones de carácter gráfico para ilustrar de qué va el framework, cómo funciona bajo la Arquitectura Cero-Copia y cómo iterar con IA.

👉 **[Ver Documentación Oficial de Arquitectura del Framework (ARQUITECTURA_CORE.md)](./ARQUITECTURA_CORE.md)**
👉 **[Ver Diagramas Conceptuales Antiguos en Figma](https://www.figma.com/design/E8PBny6kx3RUriuyuM1uRu/Framework-Baraldi?node-id=0-1&t=7rqvxMKhPUemHSMQ-1)**

---

## 🗺️ De dónde deviene el Framework

No deviene de un solo modelo. Es una síntesis crítica de varios referentes metodológicos:

- **Double Diamond** *(Design Council, 2005)* — Es el antecedente más directo en estructura (Divergir → Converger, dos veces). El Framework Baraldi toma esa lógica pero la extiende: agrega la capa sistémica, la responsabilidad post-handoff y la IA como capa transversal. El Double Diamond era para diseñadores que entregaban interfaces. Esto es para diseñadores que orquestan sistemas.
- **Design Thinking** *(IDEO / Stanford d.school)* — Comparte el foco en empatía y validación con usuarios reales. Pero Design Thinking es un proceso de innovación, no de diseño de producto continuo. No escala bien a equipos técnicos ni a productos complejos con deuda técnica.
- **Systems Thinking** *(Donella Meadows)* — La idea de producto como sistema vivo viene de acá. Meadows habla de stocks, flujos, loops de retroalimentación. El Framework Baraldi traduce eso al lenguaje operativo del diseño de producto.
- **Jobs To Be Done** *(Christensen / Ulwick)* — El foco en outcomes medibles y en entender el progreso que el usuario quiere hacer, no solo el dolor que siente. Está implícito en el Outcome Definition y en el criterio de validación.
- **Shape Up** *(Basecamp / Ryan Singer)* — La idea de ciclos acotados con criterios de cierre explícitos. El modelo IF/Else del diagrama y los cierres de etapa tienen ADN de Shape Up.

## 💎 Lo que lo hace genuinamente distinto

Ninguno de los frameworks anteriores tiene estas tres características juntas:

1. **IA como capa cognitiva, no como herramienta**: No es "usá Midjourney para hacer mockups más rápido". Es un modelo orquestado de **cuándo el humano dirige y cuándo la IA ejecuta** en cada momento exacto del proceso. Eso no existe en ningún framework anterior porque, tecnológicamente, no podía existir.
2. **Experiencia implementada como principio fundacional**: El diseño no termina en el handoff de Figma. Termina cuando la experiencia funciona y aporta valor en producción. Eso redefine el rol del diseñador de forma radical, y ningún framework clásico lo enuncia explícitamente como su meta.
3. **El problema del nivel de madurez resuelto con estructura**: El diseñador académico conoce los modelos teóricos pero no sabe cómo adaptarlos a la velocidad actual. El senior experimentado sabe qué hacer de forma empírica pero no tiene un modelo que lo sostenga estructuradamente. El Framework Baraldi **le da al académico la experiencia embebida en el proceso, y al senior le da el modelo que le faltaba**.

---

## 🚀 Fases del proceso

1. **✅ Boot:** Set-up de identidad y contexto del proyecto para el modelo.
2. **✅ Problem Framing:** Entendimiento del problema, mapeo de actores y diseño de metodologías de validación.
3. **✅ System Analysis:** Análisis del sistema.
4. **🔄 Product Logic:** Lógica del producto *(En desarrollo)*
5. **🔄 UX Experience:** Experiencia de usuario *(En desarrollo)*
6. **🔄 UI Design:** Diseño de interfaces *(En desarrollo)*
7. **🔄 Implementation:** Implementación técnica *(En desarrollo)*
8. **🔄 System Reflection:** Evaluación final *(En desarrollo)*

---

## 🧠 Sistema de Memoria Global (Engram MCP)

El Framework Baraldi es el primer framework que delega la retención de conocimiento a través de sesiones y proyectos utilizando [Engram](https://github.com/Gentleman-Programming/engram), un motor de base de datos SQLite persistente expuesto como servidor MCP.

A diferencia del pasado donde te perdías el contexto entre chats, el Agente utiliza estas herramientas internamente de forma automática en cada inicio y cierre, pero **también puedes solicitárselas explícitamente en el chat**:

| Comando de Memoria | Qué hace | Cuándo usarlo (o cuándo lo usa la IA) |
|---|---|---|
| `mem_context` | Trae el contexto reciente del proyecto activo. | Se usa en el **Paso 0** al iniciar la IDE para saber en qué quedamos. |
| `mem_search` | Búsqueda Full-Text Pura sobre actas y hallazgos. | Útil si querés pedirle a la IA: *"Buscá qué decidimos sobre la pasarela de pagos hace 2 meses"*. |
| `mem_save` | Guarda una observación estructurada (Decisión, Bug, Riesgo). | La IA lo lanza al finalizar cada **Momento** crucial para crear actas. |
| `mem_session_summary`| Realiza un Volcado de Fin de Sesión. | Obligatorio antes de apagar la IDE para consolidar aprendizajes. |
| `mem_stats` | Muestra el estado global de tu cerebro. | Útil para ver cuántos proyectos o insights llevás grabados en Engram. |

*Todo esto ocurre en tu disco duro (zero-cloud) y hace que saltar de un proyecto a otro sea una experiencia de inteligencia continua.*

### ⚡ Ventaja de Infraestructura: Ahorro Masivo de Tokens (90%+)
A nivel de infraestructura (LLM Ops), el Framework Baraldi hereda una de las mayores ventajas arquitectónicas de Engram: **la eficiencia de contexto (RAG local)**. 
En lugar de inyectar bases enteras de conocimiento kilométricas en el prompt (que consumen miles de tokens por request), el Framework realiza consultas semánticas exactas (`mem_search`). Al cargar en memoria viva solo los hallazgos estrictamente necesarios para la toma de decisión del momento, **estamos estimando un ahorro del contexto (tokens de entrada) superior al 90%** en fases de desarrollo avanzado, manteniendo la IA enfocada, rápida y económicamente viable.

### 🌟 Inspiración y Reconocimientos
El soporte tecnológico actual para el manejo de esta memoria fue inspirado y potenciado por el excelente trabajo del ecosistema open-source [Gentleman-Programming](https://github.com/Gentleman-Programming), particularmente su protocolo **Engram**.

**¿En qué se diferencian ambos proyectos?**
- **Gentleman-Programming (Engram):** Es una solución de arquitectura técnica y de propósito general diseñada para dar memoria a agentes de programación (Coding Agents). Su objetivo es resolver el *cómo* la IA recuerda bases de código.
- **Framework Baraldi:** Es una **metodología dogmática de diseño**. Resuelve el *qué, el por qué y el orden estructurado* de la ideación de productos. 

> **Nota de desarrollo:** Actualmente utilizamos el binario `engram.exe` como proxy de memoria externo para agilizar nuestras pruebas. Esto nos "libera las manos" y nos permite poner el 100% de nuestro foco y energía en desarrollar y pulir las rígidas **Etapas del Framework** (Diagnóstico, Lógica, UX/UI). Una vez que todas las etapas del framework estén construidas, evaluaremos desarrollar un servidor MCP Baraldi nativo si es necesario.

---

## 🤖 Uso con Inteligencia Artificial

Si sos un modelo de IA o estás configurando un agente, **LEER PRIMERO:**

👉 **[Documentación para Modelos de IA (DOCUMENTACION_IA.md)](./DOCUMENTACION_IA.md)**

---

## 📁 Estructura del repositorio

```text
fwbaraldi/
├── 00_boot/
│   └── context.md                          ← System Orchestrator — cargar siempre primero
│
├── skills/
│   ├── 01_problem_framing/
│   │   ├── SKILL.md                        ← Punto de entrada de la etapa
│   │   ├── prompts/
│   │   │   ├── momento_1_vision.md
│   │   │   ├── momento_feedback_metodologia.md
│   │   │   ├── momento_2_live_assistant.md
│   │   │   └── momento_3_cierre.md
│   │   └── references/
│   │       ├── benchmark_guide.md          ← Guía completa de benchmark (6 secciones)
│   │       └── research_methods_guide.md   ← Métodos de recolección de datos
│   │
│   └── 02_system_analysis/
│       ├── SKILL.md                        ← Punto de entrada de la etapa 2
│       ├── prompts/
│       │   ├── momento_1_mapeo.md
│       │   ├── momento_2_dependencias.md
│       │   └── momento_3_documentacion.md
│       └── references/
│           └── system_mapping_guide.md     ← Guía de mapas sistémicos
│
├── chat/                                   ← [DEPRECATED] Track legacy para web
│   ├── etapa01_chat.md                     
│   └── etapa02_chat.md                     
│
├── references/                             ← Recursos globales compartidos entre etapas
│   └── README.md
│
├── DOCUMENTACION_IA.md                     ← Instrucciones para modelos de IA
└── README.md                               ← Este archivo
```

---

## ⚡ Quick Start

**Instalación Global (Recomendado para Antigravity):**
Si usas el agente **Antigravity**, podés hacer que este framework esté disponible en **cualquier proyecto** siguiendo estos pasos:
1. Copiá la carpeta completa `fw-baraldi` a:
   `C:\Users\\[TuUsuario\]\\.gemini\\antigravity\\skills\\baraldi-framework`
2. ¡Listo! Ahora, desde cualquier chat o proyecto, podés decirle al agente: *"Ejecutemos la Etapa 1 del Framework Baraldi"* y el sistema lo indexará automáticamente gracias al `SKILL.md` del root.

**Uso Manual con Acceso a Carpetas (Cursor, VS Code):**
1. Cargá `00_boot/context.md` como context inicial.
2. Leé el `SKILL.md` de la etapa en la que estés *(arrancando por `01_problem_framing/SKILL.md`)*.

**Uso en la Web (Claude.ai, ChatGPT, Gemini) [TRACK LEGACY]:**
> *Aviso: La interfaz conversacional manual de copiar/pegar un "mega-prompt" se descontinuó en v2.4.1. Úsala solo si no tienes entorno agéntico (Antigravity).*
1. Abrí un chat y pegá el contenido de `chat/etapa01_chat.md`.

> **Modelos recomendados:** Claude 3.5 Sonnet/Opus, GPT-4o, Gemini 1.5 Pro o superior. Modelos más limitados pueden ignorar ciertas constraints del prompt.

---

## 🔌 Instalabilidad via CLI

La instalación via `npx skills add` estará disponible cuando el framework tenga al menos 3-4 etapas completas. Por ahora, debes usar la carga manual.

---

## 📄 Licencia y Uso Libre

El **Framework Baraldi** es de código abierto.

Podés usarlo **GRATIS** para tus proyectos personales, comerciales o de agencia. Podés modificarlo para adaptarlo a tu equipo y publicar forks.

**La única condición (Licencia tipo CC BY 4.0 / MIT con atribución):**
Si compartís, publicás o enseñás este sistema públicamente, por favor da el crédito apropiado: mencionando a **Leo Baraldi** y enlazando a este repositorio.

---
*Desarrollado y mantenido por Leo Baraldi.*
