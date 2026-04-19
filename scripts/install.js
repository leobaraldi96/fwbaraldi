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
const ENGRAM_VERSION = 'v1.12.0'; // TODO: Cambiar esto para que pase a tu cuenta de Github Releases después
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
  console.log(chalk.bold.magenta('\n🚀 Iniciando instalación de Framework Baraldi y Capa de Memoria...\n'));

  const agenteDestino = await select({
    message: '¿Para qué entorno deseas instalar el framework?',
    choices: [
      { name: 'Antigravity (Global)', value: 'antigravity', description: 'Instala en ~/.gemini/antigravity/skills' },
      { name: 'Claude Code (Global)', value: 'claude', description: 'Instalará en el contexto base de Claude' },
      { name: 'Local (Solo este proyecto)', value: 'local', description: 'Descarga en la carpeta actual ./baraldi-framework' }
    ]
  });

  // 1. Instalar Binario Engram
  const sysOs = os.platform();
  const sysArch = os.arch() === 'x64' ? 'amd64' : 'arm64';
  const binaryAbsolutePath = await downloadBinary(sysOs, sysArch);

  // 2. Definir rutas del framework
  let destPath = '';
  const homeDir = os.homedir();

  if (agenteDestino === 'antigravity') {
    destPath = path.join(homeDir, '.gemini', 'antigravity', 'skills', 'baraldi-framework');
  } else if (agenteDestino === 'local') {
    destPath = path.join(process.cwd(), 'baraldi-framework');
  } else {
    // Claude o genérico
    destPath = path.join(homeDir, '.fwbaraldi', 'skills');
  }

  const spinner = ora('Armando estructura del framework en sistema...').start();
  copyDirectorySync(packageRoot, destPath);
  spinner.succeed(chalk.green(`✓ Framework copiado en: `) + chalk.cyan(destPath));

  console.log(chalk.bold.blue('\n⚙️ Configuración final del Agente requerida:'));
  console.log('Agrega este bloque al archivo de configuración de tu Agente (Ej: mcp_config.json) para vincular la memoria:\n');
  
  const mcpConfig = {
    "mcpServers": {
      "engram": {
        "command": binaryAbsolutePath,
        "args": ["mcp", "--project", "baraldi-framework"]
      }
    }
  };
  
  console.log(chalk.yellow(JSON.stringify(mcpConfig, null, 2)));
  console.log(chalk.green('\n¡Instalación desatendida completada! Ya podés usar el framework.'));
}

run().catch(err => {
  console.error(chalk.red(err));
  process.exit(1);
});
