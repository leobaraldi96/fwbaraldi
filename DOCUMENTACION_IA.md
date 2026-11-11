# Framework Baraldi - Mapa de orientación del repositorio

> **⚠️ Este archivo es para humanos (desarrolladores, configuradores, colaboradores) y para agentes externos en primera instalación.**
> Los modelos de IA que ya tienen el framework instalado **no deben cargar este archivo** en el ciclo de boot porque genera tokens redundantes sin aportar valor operativo. El agente carga directamente `SKILL.md` -> `00_boot/context.md` -> `~/.fwbaraldi/user_harness.md` -> skills específicas.

**AI-Augmented System Product Design · v2.33.0 · Leo Baraldi**

---

## ¿Cómo navegar este repositorio?

### Punto de entrada para la IA (ejecución diaria)
```text
SKILL.md (raíz) -> 00_boot/context.md + ~/.fwbaraldi/user_harness.md -> skills/core/00_core_guardrails/SKILL.md
```

### Punto de entrada para humanos
```text
README.md -> ARQUITECTURA_CORE.md -> CHANGELOG.md
```

---

## 📁 Mapa del repositorio (v2.33.0)

```text
fwbaraldi/
├── SKILL.md                          <- Entrada del agente IA (cargar primero)
├── 00_boot/
│   └── context.md                    <- Identidad, protocolo de boot, Harness² y memoria
│
├── skills/
│   ├── core/
│   │   ├── 00_core_guardrails/       <- Reglas de disciplina, ergonomía cognitiva y comunicación (v2.33.0)
│   │   ├── 00_kalman_guardrail/      <- Calibración por Blast Radius y control de deriva (v2.33.0)
│   │   ├── 00_operational_hygiene/   <- Branches, soberanía Git manual y handoff (v2.33.0)
│   │   ├── 00_project_health_audit/  <- Framework Doctor (Auditoría de salud v2.33.0)
│   │   ├── 00_skill_evaluation/      <- Skill Judge y Contraste Conductual Harness² (v2.33.0)
│   │   └── 00_system_awareness/      <- Consciencia Sistémica, 3 Anillos y Memoria (Engram v1.20.0)
│   │
│   ├── methodology/
│   │   ├── 01_problem_framing/       <- Hardened v2.33.0
│   │   ├── 02_system_analysis/       <- Hardened v2.33.0
│   │   ├── 03_product_logic/         <- Hardened v2.33.0 (Parent/Child Slicing + Data Lineage)
│   │   ├── 04_information_architecture/ <- Hardened v2.33.0
│   │   ├── 05_interaction_design_ux/ <- Hardened v2.33.0 (Cross-Module Equalization)
│   │   ├── 06_visual_design_ui/      <- Hardened v2.33.0 (Triple Aduana)
│   │   ├── 07_handover_qa/           <- Hardened v2.33.0 (SDD Review Path + Live Env Audit)
│   │   └── 08_continuous_discovery_telemetry/ <- Telemetría y Data UX v2.33.0
│   │
│   └── toolbox/                      <- Arsenal de 16 protocolos estratégicos (v2.33.0)
│
├── templates/                        <- Suite de Contratos Vivos de Soberanía
│   ├── business_md.md
│   ├── security_md.md
│   ├── legal_md.md
│   ├── ux_md.md
│   ├── knowledge_md.md
│   ├── showroom_ui.html
│   ├── data_diagnostic_report.md
│   ├── action_registry_decisions.md
│   ├── decision_log.md
│   ├── hallazgo_sistemico.md
│   ├── ejemplo_knowledge_block.md
│   ├── user_harness.md               <- Arnés Evolutivo Personal del Usuario (Harness²)
│   └── docs_readme.md
├── scripts/                          <- Utilidades CLI y automatizaciones (install, align, backup, restore)
├── references/
│   └── templates/
│       └── baraldi_report_standard.css <- Firma visual Dark Mode para reportes
├── README.md                         <- Presentación pública del proyecto
├── ARQUITECTURA_CORE.md              <- Diagramas y diseño del sistema (3 Anillos + Cero-Copia)
├── MAPA_DE_ARTEFACTOS.md             <- Catálogo oficial de entregables
├── CHANGELOG.md                      <- Historial de versiones
└── SECURITY.md                       <- Políticas de privacidad y seguridad
```

---

## 🤖 Protocolo crítico de instalación para agentes de IA (anti-fragmentación)

Si un usuario te pide: *"Leé este repositorio de GitHub e instalá el Framework Baraldi en mi sistema / en Antigravity"*, debés ejecutar preferentemente `node scripts/install.js -y` o seguir estrictamente estas reglas:

### ⛔ Regla de oro (Single Skill Root Container - Omnipresente)
1. **Un solo skill global por entorno:** el Framework Baraldi debe instalarse como **un único orquestador** dentro de las carpetas globales de cada agente:
   ```text
   ~/.gemini/config/skills/baraldi-framework/   (Antigravity / Gemini)
   ~/.claude/skills/baraldi-framework/          (Claude Code)
   ```
2. **Estrictamente prohibido:** desglosar o copiar las subcarpetas internas (`skills/core/`, `skills/methodology/`, `skills/toolbox/`) directamente a la raíz `~/.gemini/config/skills/` o `~/.claude/skills/`. Si hacés esto, contaminarás la interfaz del usuario con más de 26 skills sueltas.
3. **Higiene automática:** si detectás que en `~/.gemini/config/skills/` o `~/.claude/skills/` existen sub-skills sueltas de FWB (como `00_core_guardrails`, `01_problem_framing`, `advanced_prioritization_protocol`, etc.), debés eliminarlas de la raíz y conservar únicamente la carpeta contenedora `baraldi-framework/`.

### 📂 Estructura global esperada en el sistema del usuario (Omnipresente)
```text
~/
├── .fwbaraldi/
│   ├── bin/engram(.exe)               <- Binario oficial del motor de memoria Engram
│   ├── package/                       <- Paquete maestro con dependencias CLI
│   └── user_harness.md                <- Arnés Evolutivo Personal (Anillo 2 - NUNCA sobrescribir si ya existe)
├── .engram/
│   └── engram.db                      <- Base de datos SQLite local de memorias
├── .claude.json                       <- Servidor MCP Engram registrado para Claude Code
├── .claude/
│   ├── CLAUDE.md                      <- Regla de integración global FWB y ruta absoluta a ui-check.js
│   ├── commands/                      <- 8 comandos nativos /fwb-* (fwb-init.md, fwb-etapa.md, etc.)
│   └── skills/
│       └── baraldi-framework/         <- ÚNICA carpeta de FWB en .claude/skills/
└── .gemini/config/
    ├── AGENTS.md                      <- Regla de integración global FWB y ruta absoluta a ui-check.js
    ├── mcp_config.json                <- Servidor MCP Engram configurado para Antigravity
    └── skills/
        └── baraldi-framework/         <- ÚNICA carpeta de FWB en .gemini/config/skills/
            ├── SKILL.md               <- Orquestador maestro (visible para el IDE)
            ├── package.json
            ├── 00_boot/
            ├── skills/                <- Sub-habilidades internas (no expuestas en raíz)
            │   ├── core/
            │   ├── methodology/
            │   └── toolbox/
            ├── references/
            ├── templates/
            └── scripts/               <- Incluye ui-check.js (Zero-Dependencies) y align.js
```

### ⚙️ Componentes a configurar por la IA (`node scripts/install.js -y`)
1. **Engram MCP:** descargar el binario `engram` oficial en `~/.fwbaraldi/bin/` y registrarlo en `~/.gemini/config/mcp_config.json` y en `~/.claude.json` bajo `mcpServers.engram`.
2. **Arnés evolutivo del usuario (`Harness²`):** si `~/.fwbaraldi/user_harness.md` no existe, copiar `templates/user_harness.md` hacia `~/.fwbaraldi/user_harness.md`. Si ya existe, **preservarlo intacto sin sobrescribirlo** para no perder el aprendizaje acumulado del usuario.
3. **Skill global omnipresente:** sincronizar el orquestador en `~/.gemini/config/skills/baraldi-framework`, `~/.claude/skills/baraldi-framework` y `~/.fwbaraldi/package`.
4. **Reglas globales y comandos `/fwb-*`:** actualizar `~/.gemini/config/AGENTS.md` y `~/.claude/CLAUDE.md` con rutas absolutas normalizadas, y generar los 8 comandos `/fwb-*` en `~/.claude/commands/`.

### 💾 Protocolo de salvaguarda de memoria y arnés (formateo / migración)
Si el usuario menciona que va a formatear su equipo, migrar de máquina o pide un backup de sus proyectos/memorias:
1. **Instruir o ejecutar:** invocar `fwbaraldi backup` (o `node scripts/backup.js`) para empaquetar `~/.engram/engram.db`, la exportación JSON y `~/.fwbaraldi/user_harness.md` en un archivo `.zip` portable.
2. **Indicar custodia:** explicar al usuario que guarde el archivo `.zip` fuera del disco a formatear (Drive, Pendrive).
3. **Restauración:** tras la reinstalación, guiarlo para ejecutar `fwbaraldi restore -f "<archivo.zip>"`.

---

*Framework Baraldi v2.33.0 · DOCUMENTACION_IA.md · Referencia de Arquitectura e Instalación*
