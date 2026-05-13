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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.join(__dirname, '..');

// Configuración de versión fuerte
const ENGRAM_VERSION = 'v1.15.11'; // Sincronizado con FWB v2.25.27
const REPO_ORIGEN = 'Gentleman-Programming';

async function downloadBinary(osType, arch) {
  let fileExt = osType === 'win32' ? 'zip' : 'tar.gz';
  let osName = osType === 'win32' ? 'windows' : osType === 'darwin' ? 'darwin' : 'linux';
  const downloadUrl = `https://github.com/${REPO_ORIGEN}/engram/releases/download/${ENGRAM_VERSION}/engram_${ENGRAM_VERSION.replace('v', '')}_${osName}_${arch}.${fileExt}`;

  const spinner = ora(`Descargando motor Engram (${osName}-${arch}) desde almacenamiento seguro...`).start();

  const homeDir = os.homedir();
  const targetDir = path.join(homeDir, '.fwbaraldi', 'bin');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const tmpFile = path.join(os.tmpdir(), `engram_${osName}_${arch}.${fileExt}`);

  try {
    const res = await fetch(downloadUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status} al descargar: ${downloadUrl}`);

    // Node.js nativo fetch stream
    const fileStream = fs.createWriteStream(tmpFile);
    await pipeline(res.body, fileStream);

    spinner.text = 'Extrayendo binario...';

    let binaryPath = '';
    if (fileExt === 'zip') {
      const zip = new AdmZip(tmpFile);
      zip.extractAllTo(targetDir, true);
      binaryPath = path.join(targetDir, 'engram.exe');
    } else {
      await tar.x({ file: tmpFile, C: targetDir });
      binaryPath = path.join(targetDir, 'engram');
    }

    spinner.succeed(chalk.green(`✓ Engram ${ENGRAM_VERSION} instalado con éxito en: `) + chalk.cyan(targetDir));
    fs.unlinkSync(tmpFile); // cleanup
    return binaryPath;
  } catch (err) {
    spinner.fail(chalk.red('Error descargando el binario: ' + err.message));
    process.exit(1);
  }
}

function copyDirectorySync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    // Evitar copiar cosas inútiles
    if (['node_modules', '.git', 'temp-Gentleman-Programming', 'scripts', '.gitignore'].includes(entry.name)) continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectorySync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function run() {
  const renderHeader = (eyes = 'o o') => {
    process.stdout.write('\x1Bc'); // Limpia la pantalla
    const logo = `
             |\\__/,|   (\`\\
           _.|${eyes}  |_   ) )
         -(((---(((--------
 _____ _ _ _ _____ _____ _____ _____ __    ____  _____ 
|   __| | | | __  |  _  | __  |  _  |  |  |    \\|     |
|   __| | | | __ -|     |    -|     |  |__|  |  |-   -|
|__|  |_____|_____|__|__|__|__|__|__|_____|____/|_____|

  -- FRAMEWORK BARALDI (v2.25.27) --
  AI-Augmented System Product Design
  `;
    console.log(chalk.bold.magenta(logo));
    console.log(chalk.dim('Un framework metodológico diseñado para potenciar el diseño de productos digitales'));
    console.log(chalk.dim('utilizando Inteligencia Artificial como copiloto estratégico en todo el proceso.\n'));
    
    console.log(chalk.dim('🌎 Web: ') + chalk.cyan('http://leobaraldi.com.ar/'));
    console.log(chalk.dim('📧 Contacto: ') + chalk.cyan('leobaraldi96@gmail.com'));
    console.log(chalk.dim('─'.repeat(60) + '\n'));
  };

  // Animación de bienvenida (Parpadeo secuencial seguro)
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  renderHeader('o o'); await sleep(800);
  renderHeader('- -'); await sleep(150);
  renderHeader('o o'); await sleep(100);
  renderHeader('- -'); await sleep(150);
  renderHeader('o o');
  
  console.log(chalk.cyan('Este instalador configurará dos componentes críticos en tu sistema:'));
  console.log(chalk.white(' 1. ') + chalk.bold('Metodología Baraldi:') + chalk.dim(' Las etapas, procesos y skills de diseño.'));
  console.log(chalk.white(' 2. ') + chalk.bold('Motor Engram:') + chalk.dim(' El sistema de memoria que permite a tu IA recordarlo todo.\n'));

  console.log(chalk.yellow('ℹ Nota: ') + chalk.dim('Durante el proceso, tu agente podría pedirte autorización para descargar'));
  console.log(chalk.dim('el motor de memoria desde GitHub. Es un proceso seguro y necesario.\n'));

  const agenteDestino = await select({
    message: '¿Dónde deseas instalar el cerebro del framework?',
    choices: [
      { name: 'Antigravity (Recomendado)', value: 'antigravity', description: 'Integración profunda con Google Antigravity' },
      { name: 'Claude Code', value: 'claude', description: 'Instala en el contexto global de Claude' },
      { name: 'Directorio Local', value: 'local', description: 'Crea una carpeta ./baraldi-framework en tu ubicación actual' }
    ]
  });

  console.log(chalk.bold('\n[1/3] 🧠 Configurando la Memoria...'));
  const sysOs = os.platform();
  const sysArch = os.arch() === 'x64' ? 'amd64' : 'arm64';
  const binaryAbsolutePath = await downloadBinary(sysOs, sysArch);

  console.log(chalk.bold('\n[2/3] 📂 Desplegando Metodología...'));
  let destPath = '';
  const homeDir = os.homedir();

  if (agenteDestino === 'antigravity') {
    destPath = path.join(homeDir, '.gemini', 'antigravity', 'skills', 'baraldi-framework');
  } else if (agenteDestino === 'local') {
    destPath = path.join(process.cwd(), 'baraldi-framework');
  } else {
    destPath = path.join(homeDir, '.fwbaraldi', 'skills');
  }

  const spinner = ora('Sincronizando skills y guardrails...').start();
  copyDirectorySync(packageRoot, destPath);
  
  // Hardening de Seguridad Post-Instalación (Identidad Blindada)
  if (agenteDestino === 'local') {
    const engramDir = path.join(destPath, '.engram');
    const engramConfigPath = path.join(engramDir, 'config.json');
    const gitignorePath = path.join(destPath, '.gitignore');

    if (!fs.existsSync(engramDir)) fs.mkdirSync(engramDir, { recursive: true });
    
    // Crear Identidad del Proyecto
    if (!fs.existsSync(engramConfigPath)) {
      const projectName = path.basename(destPath);
      fs.writeFileSync(engramConfigPath, JSON.stringify({ project: projectName }, null, 2));
    }

    // Proteger Memoria Local en .gitignore
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

  spinner.succeed(chalk.green(`✓ Framework desplegado con éxito en: `) + chalk.cyan(destPath));

  console.log(chalk.bold('\n[3/3] ⚙️ Vinculación Final'));
  console.log(chalk.dim('Para que tu IA tenga memoria, agrega este bloque a tu configuración MCP (mcp_config.json):\n'));

  const mcpConfig = {
    "mcpServers": {
      "engram": {
        "command": binaryAbsolutePath,
        "args": ["mcp"]
      }
    }
  };

  console.log(chalk.bgBlack.yellow(JSON.stringify(mcpConfig, null, 2)));

  console.log(chalk.bold.magenta('\n' + '═'.repeat(60)));
  console.log(chalk.bold.green('  ✨ ¡INSTALACIÓN COMPLETADA EXITOSAMENTE!'));
  console.log(chalk.dim('  Protocolo de Seguridad: ') + chalk.green('ACTIVO (Identidad Blindada)'));
  console.log(chalk.bold.magenta('═'.repeat(60)));

  console.log(chalk.bold('\nPróximos pasos para empezar:'));
  console.log(chalk.white(' 1. Abre tu proyecto en el editor.'));
  console.log(chalk.white(' 2. Llama a tu IA y dile: ') + chalk.italic.cyan('"Inicia el Framework Baraldi"'));
  console.log(chalk.white(' 3. ¡Disfruta del diseño de producto de alto nivel!\n'));

  console.log(chalk.dim('─'.repeat(60)));
  console.log(chalk.dim('🌎 Web: ') + chalk.cyan('http://leobaraldi.com.ar/'));
  console.log(chalk.dim('📧 Contacto: ') + chalk.cyan('leobaraldi96@gmail.com\n'));
}

run().catch(err => {
  console.error(chalk.red('\n❌ Error en la instalación: ' + err.message));
  process.exit(1);
});
