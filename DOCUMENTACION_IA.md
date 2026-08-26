# Framework Baraldi — Mapa de Orientación del Repositorio

> **⚠️ Este archivo es para HUMANOS (desarrolladores, configuradores, colaboradores).**
> Los modelos de IA **no deben cargar este archivo** en el ciclo de boot — genera tokens redundantes sin aportar valor operativo. El agente carga directamente `SKILL.md` → `00_boot/context.md` → skills específicas.

**AI-Augmented System Product Design · v2.28.0 · Leo Baraldi**

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

## 📁 Mapa del repositorio (v2.28.0)

```
fwbaraldi/
├── SKILL.md                          ← Entrada del agente IA (cargar primero)
├── 00_boot/
│   └── context.md                    ← Identidad, protocolo de boot y memoria
│
├── skills/
│   ├── core/
│   │   ├── 00_core_guardrails/       ← Reglas de disciplina, ergonomía cognitiva y comunicación
│   │   ├── 00_kalman_guardrail/      ← Calibración agéntica y control de deriva
│   │   ├── 00_operational_hygiene/   ← Branches, commits semánticos/work-units, handoff
│   │   ├── 00_project_health_audit/  ← Framework Doctor (Auditoría de salud)
│   │   ├── 00_skill_evaluation/      ← Skill Judge (Filtro de calidad)
│   │   └── 00_system_awareness/      ← Consciencia Sistémica y Memoria (Engram v1.20.0)
│   │
│   ├── methodology/
│   │   ├── 01_problem_framing/       ← Hardened v2.28.0
│   │   ├── 02_system_analysis/       ← Hardened v2.28.0
│   │   ├── 03_product_logic/         ← Hardened v2.28.0 (Parent/Child Slicing)
│   │   ├── 04_information_architecture/ ← Hardened v2.28.0
│   │   ├── 05_interaction_design_ux/ ← Hardened v2.28.0
│   │   ├── 06_visual_design_ui/      ← Hardened v2.28.0
│   │   └── 07_handover_qa/           ← Hardened v2.28.0 (SDD Review Path)
│   │
│   └── toolbox/                      ← Arsenal de 16 protocolos estratégicos
│
├── templates/                        ← Suite de Contratos Vivos de Soberanía
│   ├── business_md.md
│   ├── security_md.md
│   ├── legal_md.md
│   ├── ux_md.md
│   ├── knowledge_md.md
│   ├── decision_log.md
│   ├── hallazgo_sistemico.md
│   ├── ejemplo_knowledge_block.md
│   └── docs_readme.md
├── scripts/                          ← Utilidades CLI y automatizaciones
├── references/
│   └── templates/
│       └── baraldi_report_standard.css  ← Firma visual Dark Mode para reportes
├── README.md                         ← Presentación pública del proyecto
├── ARQUITECTURA_CORE.md              ← Diagramas y diseño del sistema
├── CHANGELOG.md                      ← Historial de versiones
└── SECURITY.md                       ← Políticas de privacidad y seguridad
```

---

## 🤖 Protocolo Crítico de Instalación para Agentes de IA (Anti-Fragmentación)

Si un usuario te pide: *"Lee este repositorio de GitHub e instala el Framework Baraldi en mi sistema / en Antigravity"*, debes seguir estrictamente estas reglas:

### ⛔ Regla de Oro (Single Skill Root Container)
1. **UN SOLO SKILL GLOBAL:** El Framework Baraldi debe instalarse como **un único orquestador** dentro de la carpeta:
   ```
   ~/.gemini/config/skills/baraldi-framework/
   ```
2. **ESTRICTAMENTE PROHIBIDO:** Desglosar o copiar las subcarpetas internas (`skills/core/`, `skills/methodology/`, `skills/toolbox/`) directamente a la raíz `~/.gemini/config/skills/`. Si haces esto, contaminarás la interfaz del usuario con más de 26 skills sueltas.
3. **HIGIENE AUTOMÁTICA:** Si detectas que en `~/.gemini/config/skills/` existen sub-skills sueltas de FWB (como `00_core_guardrails`, `01_problem_framing`, `advanced_prioritization_protocol`, etc.), debes eliminarlas de la raíz y conservar únicamente la carpeta contenedora `baraldi-framework/`.

### 📂 Estructura Global Esperada en el Sistema del Usuario
```text
~/.gemini/config/
├── AGENTS.md                          ← Regla de integración global FWB
├── mcp_config.json                    ← Servidor MCP Engram configurado
└── skills/
    └── baraldi-framework/             ← ÚNICA carpeta en skills/
        ├── SKILL.md                   ← Orquestador maestro (visible para el IDE)
        ├── package.json
        ├── 00_boot/
        ├── skills/                    ← Sub-habilidades internas (no expuestas en raíz)
        │   ├── core/
        │   ├── methodology/
        │   └── toolbox/
        ├── references/
        ├── templates/
        └── scripts/
```

### ⚙️ Componentes a Configurar por la IA
1. **Engram MCP:** Descargar el binario `engram` oficial en `~/.fwbaraldi/bin/` y registrarlo en `~/.gemini/config/mcp_config.json` bajo `mcpServers.engram`.
2. **Skill Global:** Clonar/copiar el repositorio completo en `~/.gemini/config/skills/baraldi-framework`.
3. **Reglas Globales:** Añadir en `~/.gemini/config/AGENTS.md` el bloque de integración del Framework Baraldi.

### 💾 Protocolo de Salvaguarda de Memoria (Formateo / Migración)
Si el usuario menciona que va a formatear su equipo, migrar de equipo o pide un backup de sus proyectos/memorias:
1. **Instruir o ejecutar:** Invocar `fwbaraldi backup` (o `node scripts/backup.js`) para empaquetar `~/.engram` en un archivo `.zip` portable.
2. **Indicar custodia:** Explicar al usuario que guarde el archivo `.zip` fuera del disco a formatear (Drive, Pendrive).
3. **Restauración:** Tras la reinstalación, guiarlo para ejecutar `fwbaraldi restore -f "<archivo.zip>"`.

---

*Framework Baraldi v2.28.0 · DOCUMENTACION_IA.md · Referencia de Arquitectura e Instalación*
