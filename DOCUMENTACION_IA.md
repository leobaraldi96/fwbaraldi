# Framework Baraldi — Repositorio de Skills y Prompts

> **Para uso con IA:** cargar `SKILL.md` raíz como punto de entrada del framework. El agente detecta y carga el boot context, la memoria y las skills automáticamente.

**AI-Augmented System Product Design**
Versión 2.5.1 · Leo Baraldi

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

## Arquitectura de Tracks

El Framework Baraldi existe en dos tracks con misiones distintas y **sin paridad obligatoria**:

### Track Agéntico (Full) — `skills/` + `memory/` + `templates/`
La experiencia completa del framework. Requiere un agente de IA configurado (Antigravity, Claude Code, Cursor, etc.). Incluye memoria persistente, modularidad y evolución continua. **Este es el track activo.**

### Track Chat (Lite) — `chat/` ⚠️ DEPRECADO
Versiones one-page de las Etapas 01 y 02 para uso en interfaces de chat web tradicionales (ChatGPT, Claude, Gemini). Congelado en v2.3.3. No se actualiza con las nuevas versiones del Core. Ver `chat/DEPRECATED.md` para contexto completo.

> **Nota:** La regla de sincronización obligatoria Core↔Chat fue eliminada en v2.4.1. El track Chat está en proceso de deprecación progresiva.

---

## Estructura del repositorio

```
framework-baraldi/
├── 00_boot/
│   └── context.md                    ← SIEMPRE cargar primero
│
├── memory/                           ← CAPA DE MEMORIA SISTEMICA (Engram MCP)
│   ├── PROTOCOLO_MEMORIA.md          ← Instrucciones de memoria para el Agente (v2.5.0)
│   └── baraldi_knowledge_base.md     ← LEGADO — solo lectura histórica
│
├── templates/
│   ├── hallazgo_sistemico.md         ← Template para registrar hallazgos
│   └── decision_log.md               ← Template de Decision Log cronológico
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

| Capa | Componente | Estado |
|---|---|---|
| **00 Boot** | context.md | ✅ v2.5.1 — Paso -1 carpeta + Engram MCP |
| **Memoria** | PROTOCOLO_MEMORIA.md | ✅ v2.5.0 — Migrado a Engram MCP |
| **Memoria** | baraldi_knowledge_base.md | ⚠️ LEGADO — solo lectura histórica |
| **Memoria** | Engram MCP (`engram.exe mcp`) | ✅ Activo desde v2.5.0 |
| **Templates** | hallazgo_sistemico.md | ✅ Nuevo en v2.4.0 |
| **Templates** | decision_log.md | ✅ Nuevo en v2.4.0 |
| **01 Problem Framing** | SKILL.md + 4 prompts | ✅ Completo + hooks de memoria |
| **02 System Analysis** | SKILL.md + 3 prompts | ✅ Completo + hooks de memoria |
| **03 Product Logic** | — | 🔄 En desarrollo |
| **04 UX Experience** | — | 🔄 En desarrollo |
| **05 UI Design** | — | 🔄 En desarrollo |
| **06 Implementation** | — | 🔄 En desarrollo |
| **07 System Reflection** | — | 🔄 En desarrollo |

---

*Framework Baraldi v2.5.1 · DOCUMENTACION_IA.md*
