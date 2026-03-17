# Framework Baraldi — Documentación para Modelos de IA

> **Para uso con IA:** cargar `00_boot/context.md` como System Orchestrator antes de cualquier skill.

**AI-Augmented System Product Design**
Versión 2.0 · Leo Baraldi

---

## Cómo usar este repositorio

### Paso 1 — Siempre empezá por el Boot
Antes de cualquier sesión, cargá `00_boot/context.md`. Es el contrato de identidad y comportamiento de la IA dentro del framework.

```
1. Abrí una nueva conversación en Claude / Gemini / GPT
2. Copiá el contenido de 00_boot/context.md
3. Completá la sección "Contexto del proyecto activo"
4. A partir de ahí, usá las skills
```

### Paso 2 — Leé el SKILL.md de la etapa antes de ejecutar
Cada etapa tiene un `SKILL.md` que es el punto de entrada. Describe el flujo completo, los momentos disponibles y cuándo activar cada uno. **Leerlo antes de ejecutar cualquier prompt.**

### Paso 3 — Ejecutá los prompts en orden
Los prompts están en `skills/[etapa]/prompts/`. No saltees momentos sin documentar el motivo en el Decision Log.

### Paso 4 — Consultá las referencias cuando el SKILL.md lo indique
Los archivos en `skills/[etapa]/references/` contienen guías detalladas para tareas específicas. El SKILL.md indica cuándo leer cada referencia.

### Paso 5 — Guardá todos los outputs como documentos
Nunca queden los artefactos solo en el chat. Cada output es un archivo Markdown.

---

## Estructura del repositorio

```
fwbaraldi/
├── 00_boot/
│   └── context.md                          ← SIEMPRE cargar primero (System Orchestrator)
│
├── skills/
│   └── 01_problem_framing/
│       ├── SKILL.md                        ← Leer antes de ejecutar cualquier prompt
│       ├── prompts/
│       │   ├── momento_1_vision.md
│       │   ├── momento_feedback_metodologia.md
│       │   ├── momento_2_live_assistant.md
│       │   └── momento_3_cierre.md
│       └── references/
│           └── benchmark_guide.md          ← Leer antes de ejecutar el benchmark
│
├── references/                             ← Templates globales (en desarrollo)
│   └── README.md
│
├── DOCUMENTACION_IA.md                     ← Este archivo
└── README.md                               ← Para humanos
```

---

## Jerarquía de lectura para la IA

```
1. context.md          → quién sos y cómo te comportás (siempre)
2. SKILL.md            → qué hace esta etapa y qué momentos tiene (por etapa)
3. prompts/[momento]   → cómo ejecutar el momento específico (por tarea)
4. references/[guía]   → detalle técnico cuando el SKILL.md lo indica (por necesidad)
```

**Nunca** saltear el nivel 2 (SKILL.md) e ir directo al nivel 3 (prompts).
El SKILL.md es el que da el contexto de cuándo y cómo usar cada prompt.

---

## Formato de los archivos de skill

Cada skill tiene frontmatter YAML con:
- `name` — identificador del skill (compatible con sistemas autodescubribles)
- `description` — qué hace + cuándo usarlo + keywords + restricciones
- `version`, `framework`, `stage` — metadata de contexto

Y cuerpo Markdown con:
- **Rol** — quién es la IA en este momento
- **Proceso visible** — pasos que ejecuta y muestra antes del output
- **Formato de entrega** — estructura exacta del documento que produce
- **Qué NO hacer** — con el "por qué" de cada restricción
- **Test de calidad** — checklist antes de entregar

---

## Compatibilidad

| Modelo | Compatibilidad | Notas |
|---|---|---|
| Claude (Anthropic) | ✅ Óptimo | Recomendado |
| GPT-4 / GPT-4o | ✅ Compatible | Cargar context.md completo |
| Gemini | ✅ Compatible | Cargar context.md completo |
| Otros LLMs | ⚠️ Probable | Depende del tamaño de contexto |

---

## Estado actual

| Etapa | SKILL.md | Prompts | References | Estado |
|---|---|---|---|---|
| 00 Boot | — | context.md | — | ✅ Completo |
| 01 Problem Framing | ✅ | 4 prompts | benchmark_guide.md | ✅ Completo |
| 02 System Analysis | — | — | — | 🔄 En desarrollo |
| 03 Product Logic | — | — | — | 🔄 En desarrollo |
| 04 UX Experience | — | — | — | 🔄 En desarrollo |
| 05 UI Design | — | — | — | 🔄 En desarrollo |
| 06 Implementation | — | — | — | 🔄 En desarrollo |
| 07 System Reflection | — | — | — | 🔄 En desarrollo |

---

*Framework Baraldi v2 · DOCUMENTACION_IA.md*
