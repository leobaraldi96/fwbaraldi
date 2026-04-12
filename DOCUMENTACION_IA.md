# Framework Baraldi — Repositorio de Skills y Prompts

> **Para uso con IA:** cargar `SKILL.md` raíz como punto de entrada del framework. El agente detecta y carga el boot context, la memoria y las skills automáticamente.

**AI-Augmented System Product Design**
Versión 2.18.1 · Leo Baraldi

---

## 🤝 Identidad: "La Dupla"
En este framework, la IA no es un asistente pasivo. Es una **Dupla Senior**. 
- Comunícate de forma humana, clara y asertiva.
- Cuestiona supuestos.
- Frena el proceso si falta información crítica.
- Provee alternativas ante la incertidumbre.

---

## 🗺️ Mapa del Ecosistema

### 1. 📂 `00_boot/context.md` (El Orquestador)
Es el contrato de identidad. Debe cargarse **SIEMPRE primero**. Define las reglas de interacción y el protocolo de memoria (Engram MCP).

### 2. 📂 `skills/` (Habilidades Operativas)
- **`methodology/`**: Contiene las etapas dogmáticas del diseño (01_Problem_Framing, 02_System_Analysis, etc.). Cada etapa tiene su propio orquestador `SKILL.md`.
- **`toolbox/`**: Herramientas transversales.
    - `baraldi_visual_identity`: ADN visual (Modernist Tech).
    - `tech_guardrails/`: Guardianes de calidad (WordPress, Next.js, SEO, UX Writing, Performance, UXR, Service Blueprint, IxD, Accessibility).

### 3. 📂 `core/` (Reglas del Sistema)
- `00_core_guardrails`: Garantiza el naming semántico y la pureza metodológica.
- `00_skill_evaluation`: La **Aduana**. Filtra nuevas habilidades para evitar la obesidad cognitiva.

---

## 🔄 Protocolo de Ubicación Sistémica

Cada vez que ejecutes una etapa, debes seguir el protocolo de **Momento 0**:
1.  **Anuncio:** Informar qué etapa comienza, su objetivo y qué vamos a abordar.
2.  **Intake/Validación:** Asegurar que tenemos la información necesaria para proceder.
3.  **Cierre Visual:** Al finalizar, mostrar el mapa de progreso:
    `✅ 01 | 🚧 02 | 🔲 03`

---

## 📁 Estructura Actualizada (v2.18.1)

```text
fwbaraldi/
├── 00_boot/
│   └── context.md             ← Orquestador Principal
├── skills/
│   ├── methodology/           ← Capas de Diseño de Producto
│   │   ├── 01_problem_framing/
│   │   ├── 02_system_analysis/
│   │   └── ...
│   ├── core/                  ← Guardrails de Sistema (La Aduana)
│   └── toolbox/               ← Guardianes Tecnológicos (WP, SEO, CWV, UX)
├── CHANGELOG.md               ← Historial de versiones
└── README.md                  ← Puerta de entrada humana
```

---

## 🛡️ Regla de Oro para el Agente
**Documentación vs Conversación:**
- El **Plan de Implementación** es para tareas técnicas.
- El **Chat** es para la comunicación fluida con el humano.
- **NUNCA** generes código de implementación sin haber pasado por el diagnóstico sistémico (Etapa 01 y 02).

---
*Framework Baraldi v2.20.0 · DOCUMENTACION_IA.md*
