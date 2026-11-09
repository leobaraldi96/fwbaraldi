# Framework Baraldi - Mapa de orientación del repositorio

> **⚠️ Este archivo es para humanos (desarrolladores, configuradores, colaboradores) y para agentes externos en primera instalación.**
> Los modelos de IA que ya tienen el framework instalado **no deben cargar este archivo** en el ciclo de boot porque genera tokens redundantes sin aportar valor operativo. El agente carga directamente `SKILL.md` -> `00_boot/context.md` -> `~/.fwbaraldi/user_harness.md` -> skills específicas.

**AI-Augmented System Product Design · v2.32.1 · Leo Baraldi**

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

## 📁 Mapa del repositorio (v2.32.1)

```text
fwbaraldi/
├── SKILL.md                          <- Entrada del agente IA (cargar primero)
├── 00_boot/
│   └── context.md                    <- Identidad, protocolo de boot, Harness² y memoria
│
├── skills/
│   ├── core/
│   │   ├── 00_core_guardrails/       <- Reglas de disciplina, ergonomía cognitiva y comunicación (v2.32.1)
│   │   ├── 00_kalman_guardrail/      <- Calibración por Blast Radius y control de deriva (v2.32.1)
│   │   ├── 00_operational_hygiene/   <- Branches, soberanía Git manual y handoff (v2.32.1)
│   │   ├── 00_project_health_audit/  <- Framework Doctor (Auditoría de salud v2.32.1)
│   │   ├── 00_skill_evaluation/      <- Skill Judge y Contraste Conductual Harness² (v2.32.1)
│   │   └── 00_system_awareness/      <- Consciencia Sistémica, 3 Anillos y Memoria (Engram v1.20.0)
│   │
│   ├── methodology/
│   │   ├── 01_problem_framing/       <- Hardened v2.32.1
│   │   ├── 02_system_analysis/       <- Hardened v2.32.1
│   │   ├── 03_product_logic/         <- Hardened v2.32.1 (Parent/Child Slicing + Data Lineage)
│   │   ├── 04_information_architecture/ <- Hardened v2.32.1
│   │   ├── 05_interaction_design_ux/ <- Hardened v2.32.1 (Cross-Module Equalization)
│   │   ├── 06_visual_design_ui/      <- Hardened v2.32.1 (Triple Aduana)
│   │   ├── 07_handover_qa/           <- Hardened v2.32.1 (SDD Review Path + Live Env Audit)
│   │   └── 08_continuous_discovery_telemetry/ <- Telemetría y Data UX v2.32.1
│   │
│   └── toolbox/                      <- Arsenal de 16 protocolos estratégicos (v2.32.1)
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

### ⛔ Regla de oro (Single Skill Root Container)
1. **Un solo skill global:** el Framework Baraldi debe instalarse como **un único orquestador** dentro de la carpeta:
   ```text
   ~/.gemini/config/skills/baraldi-framework/
   ```
2. **Estrictamente prohibido:** desglosar o copiar las subcarpetas internas (`skills/core/`, `skills/methodology/`, `skills/toolbox/`) directamente a la raíz `~/.gemini/config/skills/`. Si hacés esto, contaminarás la interfaz del usuario con más de 26 skills sueltas.
3. **Higiene automática:** si detectás que en `~/.gemini/config/skills/` existen sub-skills sueltas de FWB (como `00_core_guardrails`, `01_problem_framing`, `advanced_prioritization_protocol`, etc.), debés eliminarlas de la raíz y conservar únicamente la carpeta contenedora `baraldi-framework/`.

### 📂 Estructura global esperada en el sistema del usuario
```text
~/
├── .fwbaraldi/
│   ├── bin/engram(.exe)               <- Binario oficial del motor de memoria Engram
│   └── user_harness.md                <- Arnés Evolutivo Personal (Anillo 2 - NUNCA sobrescribir si ya existe)
├── .engram/
│   └── engram.db                      <- Base de datos SQLite local de memorias
└── .gemini/config/
    ├── AGENTS.md                      <- Regla de integración global FWB
    ├── mcp_config.json                <- Servidor MCP Engram configurado
    └── skills/
        └── baraldi-framework/         <- ÚNICA carpeta en skills/
            ├── SKILL.md               <- Orquestador maestro (visible para el IDE)
            ├── package.json
            ├── 00_boot/
            ├── skills/                <- Sub-habilidades internas (no expuestas en raíz)
            │   ├── core/
            │   ├── methodology/
            │   └── toolbox/
            ├── references/
            ├── templates/
            └── scripts/
```

### ⚙️ Componentes a configurar por la IA
1. **Engram MCP:** descargar el binario `engram` oficial en `~/.fwbaraldi/bin/` y registrarlo en `~/.gemini/config/mcp_config.json` bajo `mcpServers.engram`.
2. **Arnés evolutivo del usuario (`Harness²`):** si `~/.fwbaraldi/user_harness.md` no existe, copiar `templates/user_harness.md` hacia `~/.fwbaraldi/user_harness.md`. Si ya existe, **preservarlo intacto sin sobrescribirlo** para no perder el aprendizaje acumulado del usuario.
3. **Skill global:** clonar/copiar el repositorio completo en `~/.gemini/config/skills/baraldi-framework`.
4. **Reglas globales:** añadir en `~/.gemini/config/AGENTS.md` el bloque de integración del Framework Baraldi.

### 💾 Protocolo de salvaguarda de memoria y arnés (formateo / migración)
Si el usuario menciona que va a formatear su equipo, migrar de máquina o pide un backup de sus proyectos/memorias:
1. **Instruir o ejecutar:** invocar `fwbaraldi backup` (o `node scripts/backup.js`) para empaquetar `~/.engram/engram.db`, la exportación JSON y `~/.fwbaraldi/user_harness.md` en un archivo `.zip` portable.
2. **Indicar custodia:** explicar al usuario que guarde el archivo `.zip` fuera del disco a formatear (Drive, Pendrive).
3. **Restauración:** tras la reinstalación, guiarlo para ejecutar `fwbaraldi restore -f "<archivo.zip>"`.

---

*Framework Baraldi v2.32.1 · DOCUMENTACION_IA.md · Referencia de Arquitectura e Instalación*
