#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';
import { select } from '@inquirer/prompts';
import ora from 'ora';
import chalk from 'chalk';
import AdmZip from 'adm-zip';
import * as tar from 'tar';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';

import { runBackup } from './backup.js';
import { runRestore } from './restore.js';
import { runUiCheck } from './ui-check.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.join(__dirname, '..');

// Cargar versión oficial del framework
const pkg = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));
const FRAMEWORK_VERSION = pkg.version;

// Configuración de versión fuerte
const ENGRAM_VERSION = 'v1.20.0'; // Sincronizado con FWB v2.28.0
const REPO_ORIGEN = 'Gentleman-Programming';

// Lista de sub-habilidades de FWB que JAMÁS deben quedar sueltas en la raíz global de skills
const KNOWN_FWB_SUB_SKILLS = [
  '00_core_guardrails',
  '00_kalman_guardrail',
  '00_operational_hygiene',
  '00_project_health_audit',
  '00_skill_evaluation',
  '00_system_awareness',
  '01_problem_framing',
  '02_system_analysis',
  '03_product_logic',
  '04_information_architecture',
  '05_interaction_design_ux',
  '06_visual_design_ui',
  '07_handover_qa',
  '08_continuous_discovery_telemetry',
  'advanced_prioritization_protocol',
  'business_strategy_and_growth_protocol',
  'concept_synthesis_and_ideation_protocol',
  'data_driven_design_and_experimentation',
  'personal_impact_report',
  'pricing_and_monetization_protocol',
  'product_health_qbr_protocol',
  'product_knowledge_compiler_protocol',
  'product_launch_protocol',
  'product_master_matrix_protocol',
  'responsive_and_global_readiness_protocol',
  'sales_enablement_and_pitch_protocol',
  'stakeholder_narrative_strategy',
  'strategic_epic_slicing_protocol',
  'strategic_product_roadmap',
  'systemic_issue_triage_protocol'
];

function cleanupFragmentedSkills(parentSkillsDir) {
  if (!fs.existsSync(parentSkillsDir)) return 0;
  let cleanedCount = 0;
  const entries = fs.readdirSync(parentSkillsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== 'baraldi-framework' && KNOWN_FWB_SUB_SKILLS.includes(entry.name)) {
      const fullPath = path.join(parentSkillsDir, entry.name);
      try {
        fs.rmSync(fullPath, { recursive: true, force: true });
        cleanedCount++;
      } catch (e) {
        // Ignorar errores de permisos puntuales
      }
    }
  }
  return cleanedCount;
}

async function downloadBinary(osType, arch) {
  let fileExt = osType === 'win32' ? 'zip' : 'tar.gz';
  let osName = osType === 'win32' ? 'windows' : osType === 'darwin' ? 'darwin' : 'linux';
  const binaryFileName = osType === 'win32' ? 'engram.exe' : 'engram';
  const downloadUrl = `https://github.com/${REPO_ORIGEN}/engram/releases/download/${ENGRAM_VERSION}/engram_${ENGRAM_VERSION.replace('v', '')}_${osName}_${arch}.${fileExt}`;

  const homeDir = os.homedir();
  const targetDir = path.join(homeDir, '.fwbaraldi', 'bin');
  const binaryPath = path.join(targetDir, binaryFileName);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const spinner = ora(`Verificando motor Engram (${osName}-${arch})...`).start();
  const tmpFile = path.join(os.tmpdir(), `engram_${osName}_${arch}.${fileExt}`);

  try {
    const res = await fetch(downloadUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status} al descargar: ${downloadUrl}`);

    const fileStream = fs.createWriteStream(tmpFile);
    await pipeline(res.body, fileStream);

    spinner.text = 'Extrayendo binario...';

    try {
      if (fileExt === 'zip') {
        const zip = new AdmZip(tmpFile);
        zip.extractAllTo(targetDir, true);
      } else {
        await tar.x({ file: tmpFile, C: targetDir });
      }
      spinner.succeed(chalk.green(`✓ Engram ${ENGRAM_VERSION} instalado con éxito en: `) + chalk.cyan(targetDir));
    } catch (extractErr) {
      if ((extractErr.code === 'EBUSY' || extractErr.code === 'EPERM') && fs.existsSync(binaryPath)) {
        spinner.succeed(chalk.green(`✓ Engram ${ENGRAM_VERSION} activo y verificado en: `) + chalk.cyan(targetDir) + chalk.dim(' (Proceso en ejecución)'));
      } else {
        throw extractErr;
      }
    }

    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile); // cleanup
    return binaryPath;
  } catch (err) {
    if (fs.existsSync(binaryPath)) {
      spinner.succeed(chalk.green(`✓ Utilizando Engram existente en: `) + chalk.cyan(targetDir));
      if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
      return binaryPath;
    }
    spinner.fail(chalk.red('Error descargando el binario: ' + err.message));
    process.exit(1);
  }
}

function copyDirectorySync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    // Evitar copiar cosas inútiles o identidad local del repo (.engram) hacia las skills globales (nota: conservamos 'scripts' para que ui-check.js y align.js estén disponibles en la skill instalada)
    if (['node_modules', '.git', '.engram', 'docs-fwbaraldi', 'temp-Gentleman-Programming', 'temp-Engram-v1.15.11', '.gitignore'].includes(entry.name)) continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function configureMcpServer(binaryPath) {
  const homeDir = os.homedir();
  const mcpConfigPath = path.join(homeDir, '.gemini', 'config', 'mcp_config.json');
  const mcpConfigDir = path.dirname(mcpConfigPath);

  if (!fs.existsSync(mcpConfigDir)) {
    fs.mkdirSync(mcpConfigDir, { recursive: true });
  }

  let config = { mcpServers: {} };
  if (fs.existsSync(mcpConfigPath)) {
    try {
      const raw = fs.readFileSync(mcpConfigPath, 'utf8').trim();
      if (raw) config = JSON.parse(raw);
    } catch (e) {
      config = { mcpServers: {} };
    }
  }

  if (!config.mcpServers) config.mcpServers = {};
  config.mcpServers.engram = {
    command: binaryPath,
    args: ["mcp"]
  };

  fs.writeFileSync(mcpConfigPath, JSON.stringify(config, null, 2), 'utf8');
  return mcpConfigPath;
}

function configureClaudeMcpServer(binaryPath) {
  const homeDir = os.homedir();
  const claudeConfigPath = path.join(homeDir, '.claude.json');

  let config = {};
  if (fs.existsSync(claudeConfigPath)) {
    try {
      const raw = fs.readFileSync(claudeConfigPath, 'utf8').trim();
      if (raw) config = JSON.parse(raw);
    } catch (e) {
      // Si el archivo existe pero tiene formato inválido, respaldar antes de tocar
      try {
        fs.copyFileSync(claudeConfigPath, `${claudeConfigPath}.bak`);
      } catch (_) {}
      config = {};
    }
  }

  if (!config.mcpServers || typeof config.mcpServers !== 'object') {
    config.mcpServers = {};
  }
  config.mcpServers.engram = {
    type: "stdio",
    command: binaryPath,
    args: ["mcp"],
    env: {}
  };

  fs.writeFileSync(claudeConfigPath, JSON.stringify(config, null, 2), 'utf8');
  return claudeConfigPath;
}

function buildGlobalRuleContent(uiCheckScriptPath, userHarnessPath) {
  return `
# Integración del Sistema Framework Baraldi (FWB) y Autoaprendizaje (Harness²)
- Framework Baraldi (v${FRAMEWORK_VERSION}) está integrado de forma global en este entorno.
- Tienes acceso a todas las etapas del Framework Baraldi (Problem Framing, System Analysis, Product Logic, Information Architecture, Interaction Design, Visual Design, Handover & QA, Continuous Discovery & Telemetry y los 16 protocolos de la Toolbox).
- Cuando el usuario solicite iniciar, alinear o diseñar con Framework Baraldi (mediante los comandos \`/fwb-init\`, \`/fwb-etapa\`, \`/fwb-align\`, \`/fwb-upgrade\`, \`/fwb-backlog\`, \`/fwb-toolbox\`, \`/fwb-evolve\`, \`/fwb-help\` o sus equivalentes naturales), sigue estrictamente la metodología, contratos y protocolos definidos en la skill \`baraldi-framework\`.
- Persiste el conocimiento y las decisiones de diseño utilizando el servidor de memoria Engram (\`mem_save\`, \`mem_context\`, \`mem_search\`).
- **Gatillo de aprendizaje en caliente (Hot-Reflection - Harness²):** Cada vez que el usuario corrija un hábito o error de comportamiento de la IA o establezca una preferencia transversal de trabajo durante una conversación, registra esa regla **en ese mismo turno** (sin esperar al cierre de la sesión) en \`${userHarnessPath}\` y en Engram (\`scope: "personal"\`, \`topic_key: "harness/invariant-rule"\`).
- **Compuerta Determinista de UI (Tool-Call Gate & ui-check P0):** Antes de crear o editar cualquier vista UI (\`.tsx\`, \`.jsx\`, \`.html\`), lee en ese mismo turno (\`read_file\` / \`Read\`) el archivo \`globals.css\` y 1 vista canónica de referencia. Tras editar y antes de responder al usuario, ejecuta por terminal \`node "${uiCheckScriptPath}" <archivos-tocados>\` y corrige cualquier \`[FAIL]\` antes de entregar.
`;
}

function upsertRuleBlock(filePath, uiCheckScriptPath, userHarnessPath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const ruleContent = buildGlobalRuleContent(uiCheckScriptPath, userHarnessPath);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, ruleContent.trimStart(), 'utf8');
    return filePath;
  }

  let existing = fs.readFileSync(filePath, 'utf8');
  if (!existing.includes('Framework Baraldi')) {
    fs.appendFileSync(filePath, '\n' + ruleContent.trimStart(), 'utf8');
  } else {
    // Actualizar versión, nombres de herramientas multi-host y rutas absolutas de ui-check.js sin usar '~' entre comillas
    existing = existing.replace(/Framework Baraldi \(v\d+\.\d+\.\d+\)/g, `Framework Baraldi (v${FRAMEWORK_VERSION})`);
    existing = existing.replace(/node\s+"[^"]*ui-check\.js"/g, `node "${uiCheckScriptPath}"`);
    existing = existing.replace(/`~\/\.fwbaraldi\/user_harness\.md`/g, `\`${userHarnessPath}\``);
    existing = existing.replace(/ejecuta `read_file` en ese mismo turno/g, 'lee en ese mismo turno (`read_file` / `Read`)');
    fs.writeFileSync(filePath, existing, 'utf8');
  }
  return filePath;
}

function configureGlobalAgentsRule() {
  const homeDir = os.homedir();
  const agentsPath = path.join(homeDir, '.gemini', 'config', 'AGENTS.md');
  const uiCheckPosix = path.join(homeDir, '.gemini', 'config', 'skills', 'baraldi-framework', 'scripts', 'ui-check.js').replace(/\\/g, '/');
  const harnessPosix = path.join(homeDir, '.fwbaraldi', 'user_harness.md').replace(/\\/g, '/');
  return upsertRuleBlock(agentsPath, uiCheckPosix, harnessPosix);
}

function configureClaudeGlobalRule() {
  const homeDir = os.homedir();
  const claudeMdPath = path.join(homeDir, '.claude', 'CLAUDE.md');
  const uiCheckPosix = path.join(homeDir, '.claude', 'skills', 'baraldi-framework', 'scripts', 'ui-check.js').replace(/\\/g, '/');
  const harnessPosix = path.join(homeDir, '.fwbaraldi', 'user_harness.md').replace(/\\/g, '/');
  return upsertRuleBlock(claudeMdPath, uiCheckPosix, harnessPosix);
}

function configureClaudeCommands() {
  const homeDir = os.homedir();
  const commandsDir = path.join(homeDir, '.claude', 'commands');
  if (!fs.existsSync(commandsDir)) {
    fs.mkdirSync(commandsDir, { recursive: true });
  }

  const skillRootPosix = path.join(homeDir, '.claude', 'skills', 'baraldi-framework').replace(/\\/g, '/');
  const skillPathPosix = `${skillRootPosix}/SKILL.md`;
  const bootPathPosix = `${skillRootPosix}/00_boot/context.md`;
  const methodologyDirPosix = `${skillRootPosix}/skills/methodology`;
  const toolboxDirPosix = `${skillRootPosix}/skills/toolbox`;
  const userHarnessPosix = path.join(homeDir, '.fwbaraldi', 'user_harness.md').replace(/\\/g, '/');
  const alignScriptPosix = path.join(homeDir, '.fwbaraldi', 'package', 'scripts', 'align.js').replace(/\\/g, '/');

  const commands = [
    {
      name: 'fwb-init',
      description: 'Inicializa la estructura del Framework Baraldi con Onboarding Adaptativo (Greenfield o Retrofit) y calibra el Perfil de Rigor.',
      body: `Lee \`${skillPathPosix}\` y \`${bootPathPosix}\` y ejecuta inmediatamente la directiva \`/fwb-init\` del Framework Baraldi.\n\n1. Realiza un censo no-invasivo del workspace actual para detectar si es Greenfield (vacío) o In-flight/Legacy.\n2. Utiliza \`AskUserQuestion\` para calibrar en un único paso el **Setup Operativo** (Solo-Pilot vs. Equipo) y el **Perfil de Rigor Operativo** (Lean, Standard, Enterprise, Custom).\n3. Si el usuario pasó argumentos adicionales, tenlos en cuenta: $ARGUMENTS`
    },
    {
      name: 'fwb-etapa',
      description: 'Activa directamente una etapa metodológica (1 a 8) del Framework Baraldi.',
      argumentHint: '[1-8]',
      body: `Lee \`${skillPathPosix}\` y \`${bootPathPosix}\`, y salta directamente al contexto operativo de la **Etapa $ARGUMENTS** del Framework Baraldi.\n\nCarga únicamente el archivo \`SKILL.md\` correspondiente a la etapa indicada dentro de \`${methodologyDirPosix}/\`, anuncia la apertura de la etapa (Momento 0) y ejecuta su flujo adaptado al perfil de rigor del proyecto activo.`
    },
    {
      name: 'fwb-align',
      description: 'Audita y alinea la carpeta docs-fwbaraldi/ y la identidad Engram del proyecto activo.',
      body: `Lee \`${skillPathPosix}\` y ejecuta la auditoría de alineación (\`/fwb-align\`) sobre la carpeta \`docs-fwbaraldi/\` del proyecto actual.\n\nVerifica la taxonomía de carpetas, la identidad blindada en \`.engram/config.json\`, las reglas en \`.gitignore\` y notifica cualquier desvío (o apóyate en \`${alignScriptPosix}\`). Argumentos adicionales: $ARGUMENTS`
    },
    {
      name: 'fwb-upgrade',
      description: 'Inicia la refactorización guiada de artefactos en docs-fwbaraldi/ tras una actualización de versión del Framework Baraldi.',
      body: `Lee \`${skillPathPosix}\` y ejecuta el protocolo \`/fwb-upgrade\` del Framework Baraldi.\n\n1. Revisa \`docs-fwbaraldi/.UPGRADE_REPORT.md\` (o escanea los documentos en \`docs-fwbaraldi/\` frente a la versión actual v${FRAMEWORK_VERSION}).\n2. Aconseja realizar backup previo de \`docs-fwbaraldi/\`.\n3. Presenta un plan detallado de qué archivos se actualizarán.\n4. Refactoriza archivo por archivo preservando el 100% del valor original y esperando confirmación humana en cada paso. NUNCA modifiques código fuera de \`docs-fwbaraldi/\`.`
    },
    {
      name: 'fwb-backlog',
      description: 'Lee, analiza y resume de forma priorizada el estado actual de docs-fwbaraldi/00_Backlog_Estrategico.md.',
      body: `Lee \`${skillPathPosix}\` y ejecuta la directiva \`/fwb-backlog\`: inspecciona \`docs-fwbaraldi/00_Backlog_Estrategico.md\` (y la memoria reciente en Engram del proyecto activo), y presenta un resumen priorizado con el próximo paso recomendado (Next Best Action). Argumentos: $ARGUMENTS`
    },
    {
      name: 'fwb-toolbox',
      description: 'Lista los 16 protocolos estratégicos de la Toolbox del Framework Baraldi y aplica el seleccionado.',
      argumentHint: '[nombre-o-numero-protocolo]',
      body: `Lee \`${skillPathPosix}\` y ejecuta la directiva \`/fwb-toolbox\`.\n\nSi no se especificó protocolo en \`$ARGUMENTS\`, presenta los 16 protocolos estratégicos de la Toolbox y consulta cuál aplicar mediante \`AskUserQuestion\`. Si se especificó (\`$ARGUMENTS\`), carga únicamente ese protocolo desde \`${toolboxDirPosix}/\` y ejecútalo en el proyecto activo.`
    },
    {
      name: 'fwb-evolve',
      description: 'Activa el protocolo Harness² (Experience Reflector) para destilar aprendizajes de dominio e invariantes del usuario.',
      body: `Lee \`${skillPathPosix}\` y \`${bootPathPosix}\`, y ejecuta inmediatamente el protocolo \`/fwb-evolve\` (Evolución Recursiva del Arnés - Harness²).\n\n1. Si estás en el proyecto de un producto: audita las correcciones de la sesión y separa las reglas de dominio (\`docs-fwbaraldi/\` + Engram \`scope: "project"\`) de las reglas invariantes del usuario (\`${userHarnessPosix}\` + Engram \`scope: "personal"\`, \`topic_key: "harness/invariant-rule"\`).\n2. Si estás en el repositorio fuente del Framework Baraldi: busca en Engram (\`all_projects=true\`, \`topic_key: "harness/invariant-rule"\`) y en \`${userHarnessPosix}\` las lecciones acumuladas, abstráelas de forma 100% agnóstica y presenta una tabla de candidatas para promover al Core.`
    },
    {
      name: 'fwb-help',
      description: 'Muestra el menú de comandos /fwb-*, las 8 etapas, las 16 herramientas de Toolbox y la North Star del Framework Baraldi.',
      body: `Lee \`${skillPathPosix}\` y ejecuta la directiva \`/fwb-help\`: muestra de forma clara y directa la tabla de comandos \`/fwb-*\`, las 8 etapas metodológicas, los 16 protocolos de la Toolbox y un resumen de tres líneas de la North Star del Framework Baraldi (v${FRAMEWORK_VERSION}).`
    }
  ];

  for (const cmd of commands) {
    const frontmatterLines = [
      '---',
      `description: ${cmd.description}`
    ];
    if (cmd.argumentHint) {
      frontmatterLines.push(`argument-hint: ${cmd.argumentHint}`);
    }
    frontmatterLines.push('---', '', cmd.body, '');
    const filePath = path.join(commandsDir, `${cmd.name}.md`);
    fs.writeFileSync(filePath, frontmatterLines.join('\n'), 'utf8');
  }

  return commandsDir;
}

async function run() {
  const args = process.argv.slice(2);
  const firstArg = args[0]?.toLowerCase();

  if (firstArg === 'backup') {
    await runBackup(args.slice(1));
    return;
  }

  if (firstArg === 'restore') {
    await runRestore(args.slice(1));
    return;
  }

  if (firstArg === 'ui-check' || firstArg === 'uicheck' || firstArg === 'lint-ui') {
    await runUiCheck(args.slice(1));
    return;
  }

  const isHelp = args.includes('--help') || args.includes('-h');
  const isSilent = args.includes('--silent') || args.includes('-s');
  const isNonInteractive = args.includes('--yes') || args.includes('-y') || args.includes('--non-interactive');

  let chosenAgent = null;
  const agentArg = args.find(a => a.startsWith('--agent=') || a.startsWith('-a='));
  if (agentArg) {
    chosenAgent = agentArg.split('=')[1].toLowerCase();
  } else {
    const agentIdx = args.findIndex(a => a === '--agent' || a === '-a');
    if (agentIdx !== -1 && args[agentIdx + 1]) {
      chosenAgent = args[agentIdx + 1].toLowerCase();
    }
  }

  if (isHelp) {
    console.log(`
Framework Baraldi (v${FRAMEWORK_VERSION}) — CLI

Uso:
  npx github:leobaraldi96/fwbaraldi [opciones]
  fwbaraldi [opciones]
  fwbaraldi backup [opciones]
  fwbaraldi restore [opciones]

Comandos:
  (default)             Instala y despliega el orquestador global
  ui-check [archivos]   Ejecuta el UI Gatekeeper determinista sobre vistas modificadas
  backup                Crea una copia de seguridad (.zip) de la memoria Engram
  restore               Restaura una copia de seguridad de la memoria Engram

Opciones:
  -y, --yes             Instalación desatendida/automática (Omnipresente: Antigravity + Claude Code)
  --agent <destino>     Define el destino: all, antigravity, claude, local
  -s, --silent          Modo silencioso (sin animaciones de cabecera)
  -h, --help            Muestra esta ayuda
`);
    process.exit(0);
  }

  const renderHeader = (eyes = 'o o') => {
    process.stdout.write('\x1Bc');
    const logo = `
             |\\__/,|   (\`\\
           _.|${eyes}  |_   ) )
         -(((---(((--------
 _____ _ _ _ _____ _____ _____ _____ __    ____  _____ 
|   __| | | | __  |  _  | __  |  _  |  |  |    \\|     |
|   __| | | | __ -|     |    -|     |  |__|  |  |-   -|
|__|  |_____|_____|__|__|__|__|__|__|_____|____/|_____|

  -- FRAMEWORK BARALDI (v${FRAMEWORK_VERSION}) --
  AI-Augmented System Product Design
  `;
    console.log(chalk.bold.magenta(logo));
    console.log(chalk.dim('Un framework metodológico diseñado para potenciar el diseño de productos digitales'));
    console.log(chalk.dim('utilizando Inteligencia Artificial como copiloto estratégico en todo el proceso.\n'));
    console.log(chalk.dim('🌎 Web: ') + chalk.cyan('http://leobaraldi.com.ar/'));
    console.log(chalk.dim('📧 Contacto: ') + chalk.cyan('leobaraldi96@gmail.com'));
    console.log(chalk.dim('─'.repeat(60) + '\n'));
  };

  if (!isSilent && !isNonInteractive) {
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    renderHeader('o o'); await sleep(500);
    renderHeader('- -'); await sleep(120);
    renderHeader('o o');
  } else {
    console.log(chalk.bold.magenta(`\n⚡ FRAMEWORK BARALDI (v${FRAMEWORK_VERSION}) — INSTALADOR\n`));
  }

  console.log(chalk.cyan('Este instalador configurará dos componentes críticos en tu sistema:'));
  console.log(chalk.white(' 1. ') + chalk.bold('Metodología Baraldi:') + chalk.dim(' Un ÚNICO Orquestador Global (baraldi-framework).'));
  console.log(chalk.white(' 2. ') + chalk.bold('Motor Engram:') + chalk.dim(' El sistema de memoria persistente para tu IA.\n'));

  let agenteDestino = chosenAgent || (isNonInteractive ? 'all' : null);

  if (!agenteDestino) {
    agenteDestino = await select({
      message: '¿Dónde deseas instalar el cerebro del framework?',
      choices: [
        { name: 'Omnipresente: Antigravity + Claude Code (Recomendado)', value: 'all', description: 'Sincroniza el Orquestador Único, MCP y reglas globales en ambos entornos a la vez' },
        { name: 'Solo Antigravity / Gemini', value: 'antigravity', description: 'Instala en ~/.gemini/config/skills/baraldi-framework' },
        { name: 'Solo Claude Code', value: 'claude', description: 'Instala en ~/.claude/skills/baraldi-framework y configura CLAUDE.md + ~/.claude.json' },
        { name: 'Directorio Local', value: 'local', description: 'Crea una carpeta ./baraldi-framework en tu ubicación actual' }
      ]
    });
  }

  console.log(chalk.bold('\n[1/3] 🧠 Configurando la Memoria (Engram MCP)...'));
  const sysOs = os.platform();
  const sysArch = os.arch() === 'x64' ? 'amd64' : 'arm64';
  const binaryAbsolutePath = await downloadBinary(sysOs, sysArch);

  console.log(chalk.bold('\n[2/3] 📂 Desplegando Metodología Unificada...'));
  const homeDir = os.homedir();
  const targets = [];

  if (agenteDestino === 'all' || agenteDestino === 'both') {
    targets.push({ type: 'antigravity', path: path.join(homeDir, '.gemini', 'config', 'skills', 'baraldi-framework') });
    targets.push({ type: 'claude', path: path.join(homeDir, '.claude', 'skills', 'baraldi-framework') });
    targets.push({ type: 'package', path: path.join(homeDir, '.fwbaraldi', 'package') });
  } else if (agenteDestino === 'antigravity') {
    targets.push({ type: 'antigravity', path: path.join(homeDir, '.gemini', 'config', 'skills', 'baraldi-framework') });
    targets.push({ type: 'package', path: path.join(homeDir, '.fwbaraldi', 'package') });
  } else if (agenteDestino === 'claude') {
    targets.push({ type: 'claude', path: path.join(homeDir, '.claude', 'skills', 'baraldi-framework') });
    targets.push({ type: 'package', path: path.join(homeDir, '.fwbaraldi', 'package') });
  } else if (agenteDestino === 'local') {
    targets.push({ type: 'local', path: path.join(process.cwd(), 'baraldi-framework') });
  } else {
    targets.push({ type: 'antigravity', path: path.join(homeDir, '.gemini', 'config', 'skills', 'baraldi-framework') });
    targets.push({ type: 'claude', path: path.join(homeDir, '.claude', 'skills', 'baraldi-framework') });
  }

  for (const target of targets) {
    const spinner = ora(`Sincronizando orquestador en ${target.path}...`).start();
    copyDirectorySync(packageRoot, target.path);

    // Protocolo de Higiene Anti-Fragmentación: Limpiar sub-skills sueltas en la carpeta padre de skills
    if (target.type === 'antigravity' || target.type === 'claude') {
      const parentSkillsDir = path.dirname(target.path);
      const cleaned = cleanupFragmentedSkills(parentSkillsDir);
      if (cleaned > 0) {
        spinner.info(chalk.yellow(`ℹ Higiene ejecutada en ${parentSkillsDir}: Se consolidaron ${cleaned} sub-skills sueltas dentro del orquestador único.`));
      }
    }

    // Hardening de Seguridad Post-Instalación (Identidad Blindada) para instalación local
    if (target.type === 'local') {
      const engramDir = path.join(target.path, '.engram');
      const engramConfigPath = path.join(engramDir, 'config.json');
      const gitignorePath = path.join(target.path, '.gitignore');

      if (!fs.existsSync(engramDir)) fs.mkdirSync(engramDir, { recursive: true });

      if (!fs.existsSync(engramConfigPath)) {
        const projectName = path.basename(target.path);
        fs.writeFileSync(engramConfigPath, JSON.stringify({ project_name: projectName, project: projectName }, null, 2));
      }

      const gitignoreRules = '\n# Engram Memory (Framework Baraldi Security)\n.engram/\n!.engram/config.json\n';
      if (fs.existsSync(gitignorePath)) {
        const content = fs.readFileSync(gitignorePath, 'utf8');
        if (!content.includes('.engram/')) {
          fs.appendFileSync(gitignorePath, gitignoreRules);
        }
      } else {
        fs.writeFileSync(gitignorePath, gitignoreRules);
      }
    }

    if (target.type !== 'package') {
      spinner.succeed(chalk.green(`✓ Orquestador Baraldi (${target.type}) desplegado en: `) + chalk.cyan(target.path));
    } else {
      spinner.succeed(chalk.green(`✓ Paquete maestro sincronizado en: `) + chalk.cyan(target.path));
    }
  }

  // Higiene de copias huérfanas obsoletas en rutas legadas (~/.gemini/antigravity/skills/baraldi-framework y ~/.fwbaraldi/skills/)
  const legacyPaths = [
    path.join(homeDir, '.gemini', 'antigravity', 'skills', 'baraldi-framework'),
    path.join(homeDir, '.fwbaraldi', 'skills', 'baraldi-framework')
  ];
  for (const legacyPath of legacyPaths) {
    if (fs.existsSync(legacyPath)) {
      try {
        fs.rmSync(legacyPath, { recursive: true, force: true });
        console.log(chalk.yellow(`ℹ Copia legada obsoleta eliminada: `) + chalk.dim(legacyPath));
      } catch (_) {}
    }
  }

  // Inicializar Arnés Evolutivo Personal del Usuario (Harness² - Persistente fuera de skills/)
  const userHarnessDir = path.join(homeDir, '.fwbaraldi');
  const userHarnessPath = path.join(userHarnessDir, 'user_harness.md');
  const userHarnessTemplate = path.join(packageRoot, 'templates', 'user_harness.md');
  if (!fs.existsSync(userHarnessDir)) {
    fs.mkdirSync(userHarnessDir, { recursive: true });
  }
  if (!fs.existsSync(userHarnessPath) && fs.existsSync(userHarnessTemplate)) {
    fs.copyFileSync(userHarnessTemplate, userHarnessPath);
    console.log(chalk.green('✓ Arnés Evolutivo Personal inicializado en: ') + chalk.cyan(userHarnessPath));
  } else if (fs.existsSync(userHarnessPath)) {
    console.log(chalk.green('✓ Arnés Evolutivo Personal preservado intacto en: ') + chalk.cyan(userHarnessPath));
  }

  console.log(chalk.bold('\n[3/3] ⚙️ Autoconfiguración de MCP y Reglas Globales...'));

  const hasAntigravity = targets.some(t => t.type === 'antigravity');
  const hasClaude = targets.some(t => t.type === 'claude');

  if (hasAntigravity) {
    const mcpFile = configureMcpServer(binaryAbsolutePath);
    console.log(chalk.green('✓ [Antigravity] Servidor MCP Engram configurado en: ') + chalk.cyan(mcpFile));

    const agentsFile = configureGlobalAgentsRule();
    console.log(chalk.green('✓ [Antigravity] Reglas globales vinculadas en: ') + chalk.cyan(agentsFile));
  }

  if (hasClaude) {
    const claudeMcpFile = configureClaudeMcpServer(binaryAbsolutePath);
    console.log(chalk.green('✓ [Claude Code] Servidor MCP Engram configurado en: ') + chalk.cyan(claudeMcpFile));

    const claudeMdFile = configureClaudeGlobalRule();
    console.log(chalk.green('✓ [Claude Code] Reglas globales vinculadas en: ') + chalk.cyan(claudeMdFile));

    const claudeCmdsDir = configureClaudeCommands();
    console.log(chalk.green('✓ [Claude Code] 8 comandos /fwb-* instalados en: ') + chalk.cyan(claudeCmdsDir));
  }

  if (!hasAntigravity && !hasClaude) {
    console.log(chalk.dim('Configuración MCP manual requerida para este entorno:'));
    const mcpConfig = {
      "mcpServers": {
        "engram": {
          "command": binaryAbsolutePath,
          "args": ["mcp"]
        }
      }
    };
    console.log(chalk.bgBlack.yellow(JSON.stringify(mcpConfig, null, 2)));
  }

  console.log(chalk.bold.magenta('\n' + '═'.repeat(60)));
  console.log(chalk.bold.green('  ✨ ¡INSTALACIÓN COMPLETADA EXITOSAMENTE!'));
  console.log(chalk.dim('  Estructura: ') + chalk.green('Orquestador Único (1 Skill Global)'));
  console.log(chalk.dim('  Protocolo de Seguridad: ') + chalk.green('ACTIVO (Identidad Blindada)'));
  console.log(chalk.bold.magenta('═'.repeat(60)));

  console.log(chalk.bold('\nPróximos pasos para empezar:'));
  console.log(chalk.white(' 1. Abre tu proyecto en el editor.'));
  console.log(chalk.white(' 2. Llama a tu IA y dile: ') + chalk.italic.cyan('"Inicia el Framework Baraldi"'));
  console.log(chalk.white(' 3. ¡Disfruta del diseño de producto sistémico!\n'));

  console.log(chalk.bold.yellow('🛡️  IMPORTANTE — Salvaguarda de Memoria (Formateos o Migración de equipo):'));
  console.log(chalk.dim('   Toda la memoria de tus proyectos se almacena localmente en tu equipo (~/.engram).'));
  console.log(chalk.dim('   Si alguna vez vas a formatear tu PC o cambiarte de máquina, ejecuta antes:'));
  console.log(chalk.cyan('     npx github:leobaraldi96/fwbaraldi backup') + chalk.dim('  o  ') + chalk.cyan('fwbaraldi backup'));
  console.log(chalk.dim('   Y luego de reinstalar tu entorno, restáurala fácilmente con:'));
  console.log(chalk.cyan('     fwbaraldi restore'));
  console.log(chalk.dim('   ¡No pierdas meses de decisiones y aprendizajes estratégicos!\n'));

  console.log(chalk.dim('─'.repeat(60)));
  console.log(chalk.dim('🌎 Web: ') + chalk.cyan('http://leobaraldi.com.ar/'));
  console.log(chalk.dim('📧 Contacto: ') + chalk.cyan('leobaraldi96@gmail.com\n'));
}

run().catch(err => {
  console.error(chalk.red('\n❌ Error en la instalación: ' + err.message));
  process.exit(1);
});
