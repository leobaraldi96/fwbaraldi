# Framework Baraldi — Repositorio de Skills y Prompts

> **Para uso con IA:** cargar `00_boot/context.md` como System Orchestrator antes de cualquier skill.

**AI-Augmented System Product Design**
Versión 2.0 · Leo Baraldi

---

## Cómo usar este repositorio

### Paso 1 — Siempre empezá por el Boot
Antes de cualquier sesión de trabajo, cargá el archivo `00_boot/context.md` en tu LLM. Es el contrato de identidad y comportamiento de la IA dentro del framework.

```
1. Abrí una nueva conversación en Claude / Gemini / GPT
2. Copiá el contenido de 00_boot/context.md
3. Completá la sección "Contexto del proyecto activo"
4. A partir de ahí, usá los prompts de las skills
```

### Paso 2 — Ejecutá las skills en orden
Cada etapa tiene sus prompts ordenados por momento. No saltees momentos sin documentar el motivo en el Decision Log.

### Paso 3 — Guardá todos los outputs como documentos
Nunca queden los artefactos solo en el chat. Cada output es un archivo Markdown que se guarda en la carpeta del proyecto.

---

## Estructura del repositorio

```
framework-baraldi/
├── 00_boot/
│   └── context.md                    ← SIEMPRE cargar primero
│
├── skills/
│   ├── 01_problem_framing/
│   │   └── prompts/
│   │       ├── momento_1_vision.md              ← Visión y amplificación de campo
│   │       ├── momento_feedback_metodologia.md  ← Asistente de research + soportes
│   │       ├── momento_2_live_assistant.md      ← IA auxiliar on vivo
│   │       └── momento_3_cierre.md              ← Evaluación de cierre + decisión IF
│   │
│   ├── 02_system_analysis/
│   │   └── prompts/
│   │       ├── momento_1_mapeo.md
│   │       ├── momento_2_dependencias.md
│   │       └── momento_3_documentacion.md
│   │
│   ├── 03_product_logic/             ← En desarrollo
│   ├── 04_ux_experience/             ← En desarrollo
│   ├── 05_ui_design/                 ← En desarrollo
│   ├── 06_implementation/            ← En desarrollo
│   └── 07_system_reflection/         ← En desarrollo
│
└── templates/                        ← En desarrollo
    ├── decision_log.md
    └── artefactos_etapa1.md
```

---

## Formato de los archivos de skill

Cada skill tiene:
- **Frontmatter YAML** — metadata estructurada (id, versión, trigger, inputs, output format)
- **Rol** — quién es la IA en este momento específico
- **Proceso visible** — qué pasos ejecuta la IA y cómo los muestra
- **Formato de entrega** — estructura exacta del documento que produce
- **Qué NO hacer** — comportamientos a evitar explícitamente
- **Test de calidad** — checklist antes de entregar

---

## Compatibilidad

Estos prompts funcionan con:
- Claude (Anthropic) — recomendado
- Gemini (Google)
- GPT-4 / GPT-4o (OpenAI)

Para mejores resultados: cargar `context.md` completo al inicio de cada sesión.

---

## Estado actual

| Etapa | SKILL.md | Prompts | References | Estado |
|---|---|---|---|---|
| 00 Boot | — | context.md | — | ✅ Completo |
| 01 Problem Framing | ✅ | 4 prompts | benchmark_guide.md, research_methods_guide.md | ✅ Completo |
| 02 System Analysis | ✅ | 3 prompts | system_mapping_guide.md | ✅ Completo |
| 03 Product Logic | — | — | — | 🔄 En desarrollo |
| 04 UX Experience | — | — | — | 🔄 En desarrollo |
| 05 UI Design | — | — | — | 🔄 En desarrollo |
| 06 Implementation | — | — | — | 🔄 En desarrollo |
| 07 System Reflection | — | — | — | 🔄 En desarrollo |

---

*Framework Baraldi v2 · DOCUMENTACION_IA.md*
