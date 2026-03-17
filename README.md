# Framework Baraldi 🤖⚡

> **AI-Augmented System Product Design**
>
> Un framework metodológico diseñado para potenciar el diseño de productos digitales utilizando Inteligencia Artificial como copiloto estratégico en todas las etapas del proceso.

![Version](https://img.shields.io/badge/version-2.0-blue)
![Status](https://img.shields.io/badge/status-active-success)

## 📌 ¿Qué es este Framework?

El **Framework Baraldi** es una colección estructurada de "Skills" y prompts diseñados para guiar modelos de Inteligencia Artificial (Claude, GPT, Gemini) a través de las diferentes fases del diseño de producto.

A diferencia de un asistente genérico, este framework obliga a la IA a adoptar metodologías rigurosas, enfocarse en la divergencia, cuestionar asunciones y producir artefactos estructurados en lugar de respuestas conversacionales simples.

## 🚀 Fases del Proceso

1. **✅ Boot:** Set-up de identidad y contexto del proyecto para el modelo.
2. **✅ Problem Framing:** Entendimiento del problema, mapeo de actores y diseño de metodologías de validación.
3. **🔄 System Analysis:** Análisis del sistema (En desarrollo)
4. **🔄 Product Logic:** Lógica del producto (En desarrollo)
5. **🔄 UX Experience:** Experiencia de usuario (En desarrollo)
6. **🔄 UI Design:** Diseño de interfaces (En desarrollo)
7. **🔄 Implementation:** Implementación técnica (En desarrollo)
8. **🔄 System Reflection:** Evaluación final (En desarrollo)

## 🤖 Uso con Inteligencia Artificial

Si sos un modelo de IA o estás configurando un agente, **LEER PRIMERO:**

👉 **[Documentación para Modelos de IA (DOCUMENTACION_IA.md)](./DOCUMENTACION_IA.md)**

## 📁 Estructura del Repositorio

```
fwbaraldi/
├── 00_boot/
│   └── context.md                          ← System Orchestrator — cargar siempre primero
│
├── skills/
│   └── 01_problem_framing/
│       ├── SKILL.md                        ← Punto de entrada de la etapa
│       ├── prompts/
│       │   ├── momento_1_vision.md
│       │   ├── momento_feedback_metodologia.md
│       │   ├── momento_2_live_assistant.md
│       │   └── momento_3_cierre.md
│       └── references/
│           └── benchmark_guide.md          ← Guía completa de benchmark (6 secciones)
│
├── references/                             ← Recursos globales compartidos entre etapas
│   └── README.md
│
├── DOCUMENTACION_IA.md                     ← Instrucciones para modelos de IA
└── README.md                               ← Este archivo
```

## ⚡ Quick Start: Uso Básico (Humano + IA)

¿Querés probar esto rápido en el chat web de Claude o ChatGPT?

1. Abrí un chat nuevo y pegá todo el contenido de `00_boot/context.md`.
2. Completá los datos del *"Contexto del proyecto activo"* que te pide ese archivo.
3. Copiá el contenido del prompt de la etapa en la que estés (arrancando por `prompts/momento_1_vision.md`).
4. Contestá las preguntas de la IA. ¡Magia! ✨

> **Requisito Previos:** Diseñado para funcionar óptimamente con modelos de contexto largo e inteligencia avanzada de razonamiento (ej: Claude 3.5 Sonnet/Opus, GPT-4o, Gemini 1.5 Pro). Modelos más pequeños pueden ignorar ciertas constraints del prompt.

## 🔌 Instalabilidad via CLI

La instalación via `npx skills add` estará disponible cuando el framework tenga
al menos 3-4 etapas completas. Por ahora, usar carga manual según `DOCUMENTACION_IA.md`.

## 📄 Licencia y Uso Libre

El **Framework Baraldi** es de código abierto.

Podés usarlo **GRATIS** para tus proyectos personales, comerciales o agencia, podés modificarlo para que se adapte a tu equipo y podés publicar forks.

**La única condición (Licencia tipo CC BY 4.0 / MIT con atribución):**
Si compartís, publicás o enseñás este sistema públicamente, por favor da el crédito apropiado: mencionando a **Leo Baraldi** y enlazando a este repositorio.

---
*Desarrollado y mantenido por Leo Baraldi.*
