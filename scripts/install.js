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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.join(__dirname, '..');

// Cargar versión oficial del framework
const pkg = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));
const FRAMEWORK_VERSION = pkg.version;

// Configuración de versión fuerte
const ENGRAM_VERSION = 'v1.20.0'; // Sincronizado con FWB v2.27.0
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
  'advanced_prioritization_protocol',
  'business_strategy_and_growth_protocol',
  'concept_synthesis_and_ideation_protocol',
  'data_driven_design_and_experimentation',
  'personal_impact_report',
  'pricing_and_monetization_protocol',
  'product_health_qbr_protocol',
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
    // Evitar copiar cosas inútiles
    if (['node_modules', '.git', 'temp-Gentleman-Programming', 'temp-Engram-v1.15.11', 'scripts', '.gitignore'].includes(entry.name)) continue;

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

function configureGlobalAgentsRule() {
  const homeDir = os.homedir();
  const agentsPath = path.join(homeDir, '.gemini', 'config', 'AGENTS.md');
  const agentsDir = path.dirname(agentsPath);

  if (!fs.existsSync(agentsDir)) {
    fs.mkdirSync(agentsDir, { recursive: true });
  }

  const ruleContent = `
# Framework Baraldi (FWB) System Integration
- Framework Baraldi (v${FRAMEWORK_VERSION}) is globally integrated into this environment.
- You have access to Framework Baraldi skills (Problem Framing, System Analysis, Product Logic, IA, Interaction Design, Visual Design, Handover QA, and Toolbox Protocols).
- When the user asks to start, align, or design with Framework Baraldi, follow the methodology and protocols defined in the baraldi-framework skill.
- Persist knowledge using the Engram memory server when available.
`;

  let existing = '';
  if (fs.existsSync(agentsPath)) {
    existing = fs.readFileSync(agentsPath, 'utf8');
  }

  if (!existing.includes('Framework Baraldi')) {
    fs.appendFileSync(agentsPath, ruleContent, 'utf8');
  }
  return agentsPath;
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
  backup                Crea una copia de seguridad (.zip) de la memoria Engram
  restore               Restaura una copia de seguridad de la memoria Engram

Opciones:
  -y, --yes             Instalación desatendida/automática (Antigravity por defecto)
  --agent <destino>     Define el destino: antigravity, claude, local
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

  let agenteDestino = chosenAgent || (isNonInteractive ? 'antigravity' : null);

  if (!agenteDestino) {
    agenteDestino = await select({
      message: '¿Dónde deseas instalar el cerebro del framework?',
      choices: [
        { name: 'Antigravity (Recomendado)', value: 'antigravity', description: 'Integración profunda con Google Antigravity como Orquestador Único' },
        { name: 'Claude Code', value: 'claude', description: 'Instala en el contexto global de Claude' },
        { name: 'Directorio Local', value: 'local', description: 'Crea una carpeta ./baraldi-framework en tu ubicación actual' }
      ]
    });
  }

  console.log(chalk.bold('\n[1/3] 🧠 Configurando la Memoria (Engram MCP)...'));
  const sysOs = os.platform();
  const sysArch = os.arch() === 'x64' ? 'amd64' : 'arm64';
  const binaryAbsolutePath = await downloadBinary(sysOs, sysArch);

  console.log(chalk.bold('\n[2/3] 📂 Desplegando Metodología Unificada...'));
  let destPath = '';
  const homeDir = os.homedir();

  if (agenteDestino === 'antigravity') {
    destPath = path.join(homeDir, '.gemini', 'config', 'skills', 'baraldi-framework');
  } else if (agenteDestino === 'local') {
    destPath = path.join(process.cwd(), 'baraldi-framework');
  } else {
    destPath = path.join(homeDir, '.fwbaraldi', 'skills', 'baraldi-framework');
  }

  const spinner = ora('Sincronizando orquestador unificado...').start();
  copyDirectorySync(packageRoot, destPath);

  // Protocolo de Higiene Anti-Fragmentación: Limpiar sub-skills sueltas si se instaló en .gemini/config/skills
  if (agenteDestino === 'antigravity') {
    const parentSkillsDir = path.dirname(destPath);
    const cleaned = cleanupFragmentedSkills(parentSkillsDir);
    if (cleaned > 0) {
      spinner.info(chalk.yellow(`ℹ Higiene ejecutada: Se consolidaron ${cleaned} sub-skills sueltas dentro del orquestador único.`));
    }
  }

  // Hardening de Seguridad Post-Instalación (Identidad Blindada)
  if (agenteDestino === 'local') {
    const engramDir = path.join(destPath, '.engram');
    const engramConfigPath = path.join(engramDir, 'config.json');
    const gitignorePath = path.join(destPath, '.gitignore');

    if (!fs.existsSync(engramDir)) fs.mkdirSync(engramDir, { recursive: true });

    if (!fs.existsSync(engramConfigPath)) {
      const projectName = path.basename(destPath);
      fs.writeFileSync(engramConfigPath, JSON.stringify({ project: projectName }, null, 2));
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

  spinner.succeed(chalk.green(`✓ Orquestador Baraldi desplegado como Skill Única en: `) + chalk.cyan(destPath));

  console.log(chalk.bold('\n[3/3] ⚙️ Autoconfiguración de MCP y Reglas Globales...'));

  if (agenteDestino === 'antigravity') {
    const mcpFile = configureMcpServer(binaryAbsolutePath);
    console.log(chalk.green('✓ Servidor MCP Engram configurado en: ') + chalk.cyan(mcpFile));

    const agentsFile = configureGlobalAgentsRule();
    console.log(chalk.green('✓ Reglas globales vinculadas en: ') + chalk.cyan(agentsFile));
  } else {
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

