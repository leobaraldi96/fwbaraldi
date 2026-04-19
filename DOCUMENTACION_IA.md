# Framework Baraldi — Mapa de Orientación del Repositorio

> **⚠️ Este archivo es para HUMANOS (desarrolladores, configuradores, colaboradores).**
> Los modelos de IA **no deben cargar este archivo** en el ciclo de boot — genera tokens redundantes sin aportar valor operativo. El agente carga directamente `SKILL.md` → `00_boot/context.md` → skills específicas.

**AI-Augmented System Product Design · v2.25.9 · Leo Baraldi**

---

## ¿Cómo navegar este repositorio?

### Punto de entrada para la IA
```
SKILL.md (raíz)  →  00_boot/context.md  →  skills/core/00_core_guardrails/SKILL.md
```

### Punto de entrada para humanos
```
README.md  →  ARQUITECTURA_CORE.md  →  CHANGELOG.md
```

---

## 📁 Mapa del repositorio (v2.25.9)

```
fwbaraldi/
├── SKILL.md                          ← Entrada del agente IA (cargar primero)
├── 00_boot/
│   └── context.md                    ← Identidad, protocolo de boot y memoria
│
├── skills/
│   ├── core/
│   │   ├── 00_core_guardrails/       ← Reglas de disciplina y comunicación
│   │   ├── 00_operational_hygiene/   ← Branches, commits semánticos, handoff
│   │   └── 00_skill_evaluation/      ← La "Aduana": anti-obesidad cognitiva
│   │
│   ├── methodology/
│   │   ├── 01_problem_framing/       ← ✅ Completa
│   │   ├── 02_system_analysis/       ← ✅ Completa
│   │   ├── 03_product_logic/         ← 🔄 WIP
│   │   ├── 04_ux_experience/         ← 🔄 WIP
│   │   ├── 05_ui_design/             ← 🔄 WIP
│   │   ├── 06_implementation/        ← 🔄 WIP
│   │   └── 07_system_reflection/     ← 🔄 WIP
│   │
│   └── toolbox/
│       ├── baraldi_visual_identity/  ← ADN visual (Modernist Tech, Paul Rand)
│       └── tech_guardrails/          ← WP, Next.js, Tailwind 4, SEO, CWV,
│                                        UXR, Competitor, Metrics, A11y, IxD...
│
├── references/
│   └── templates/
│       └── baraldi_report_standard.css  ← Firma visual Dark Mode para reportes
│
├── README.md                         ← Presentación pública del proyecto
├── ARQUITECTURA_CORE.md              ← Diagramas y diseño del sistema
├── CHANGELOG.md                      ← Historial de versiones
└── SECURITY.md                       ← Políticas de privacidad y seguridad
```

---

## 📂 Estructura de salida en proyectos (`docs-fwbaraldi/`)

Todo lo que genera el framework vive aquí — organizado por naturaleza del contenido:

| Carpeta | Contenido |
|---|---|
| `01_Problem_Framing/` | Artefactos de la Etapa 01 |
| `02_System_Analysis/` | Artefactos de la Etapa 02 |
| `[03–07_Etapa]/` | Una por cada etapa metodológica |
| `UXR/` | Research: encuestas, entrevistas, síntesis, informes HTML |
| `UX/` | Flujos, IA, journeys, wireframes conceptuales |
| `UXW/` | Voz & tono, microcopy, directivas de contenido |
| `UI/` | Design tokens, spec de componentes |
| `IA/` | Prompts para herramientas externas (Figma, ChatGPT, Claude) |
| `00_Backlog_Estrategico.md` | Gestión de scope y pendientes (en la raíz) |
| `00_Confirmacion_Foco` | Protocolo de validación de contexto (Boot) |

**Regla de oro:** Si un archivo no va a producción → va a `docs-fwbaraldi/`.

---

*Framework Baraldi v2.25.9 · DOCUMENTACION_IA.md · Referencia para humanos*
