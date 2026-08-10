#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
import { select, confirm, input } from '@inquirer/prompts';
import ora from 'ora';
import chalk from 'chalk';
import AdmZip from 'adm-zip';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.join(__dirname, '..');

const pkg = JSON.parse(fs.readFileSync(path.join(packageRoot, 'package.json'), 'utf8'));
const FRAMEWORK_VERSION = pkg.version;

function getEngramBinaryPath() {
  const homeDir = os.homedir();
  const binaryFileName = os.platform() === 'win32' ? 'engram.exe' : 'engram';
  const customPath = path.join(homeDir, '.fwbaraldi', 'bin', binaryFileName);
  
  if (fs.existsSync(customPath)) return customPath;

  try {
    const whichCmd = os.platform() === 'win32' ? 'where' : 'which';
    const output = execFileSync(whichCmd, ['engram'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    const firstLine = output.split('\n')[0].trim();
    if (firstLine && fs.existsSync(firstLine)) return firstLine;
  } catch (e) {}

  return null;
}

function getEngramDataDir() {
  if (process.env.ENGRAM_DATA_DIR) {
    return path.resolve(process.env.ENGRAM_DATA_DIR);
  }
  return path.join(os.homedir(), '.engram');
}

function formatTimestamp(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  return `${y}-${m}-${d}_${hh}-${mm}-${ss}`;
}

function findCandidateBackups() {
  const candidates = [];
  const searchDirs = [
    process.cwd(),
    os.homedir(),
    path.join(os.homedir(), 'Desktop'),
    path.join(os.homedir(), 'Downloads'),
    path.join(os.homedir(), 'Escritorio'),
    path.join(os.homedir(), 'Descargas')
  ];

  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    try {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        if (file.isFile()) {
          const lower = file.name.toLowerCase();
          if (
            (lower.startsWith('fwb-memory-backup') && lower.endsWith('.zip')) ||
            (lower.startsWith('engram-export') && lower.endsWith('.json')) ||
            lower === 'engram.db'
          ) {
            const fullPath = path.join(dir, file.name);
            candidates.push({
              name: `${file.name} (${path.relative(process.cwd(), fullPath)})`,
              value: fullPath
            });
          }
        }
      }
    } catch (e) {}
  }
  return candidates;
}

export async function runRestore(cliArgs = process.argv.slice(2)) {
  const isHelp = cliArgs.includes('--help') || cliArgs.includes('-h');
  const isSilent = cliArgs.includes('--silent') || cliArgs.includes('-s');
  const isNonInteractive = cliArgs.includes('--yes') || cliArgs.includes('-y') || cliArgs.includes('--non-interactive');

  if (isHelp) {
    console.log(`
Framework Baraldi (v${FRAMEWORK_VERSION}) — Restauración de Memoria Engram

Uso:
  fwbaraldi restore [opciones]
  npx github:leobaraldi96/fwbaraldi restore [opciones]
  fwb-restore [opciones]

Opciones:
  -f, --file <ruta>      Ruta al archivo de backup (.zip, .json o .db)
  -y, --yes              Restauración desatendida / sobrescritura automática
  -s, --silent           Modo silencioso
  -h, --help             Muestra esta ayuda
`);
    return;
  }

  if (!isSilent) {
    console.log(chalk.bold.magenta(`\n🔄 FRAMEWORK BARALDI — RESTAURACIÓN DE MEMORIA (Engram)\n`));
  }

  let filePath = null;
  const fileIdx = cliArgs.findIndex(a => a === '--file' || a === '-f' || a.startsWith('--file=') || a.startsWith('-f='));
  if (fileIdx !== -1) {
    if (cliArgs[fileIdx].includes('=')) {
      filePath = cliArgs[fileIdx].split('=')[1];
    } else if (cliArgs[fileIdx + 1]) {
      filePath = cliArgs[fileIdx + 1];
    }
  }

  if (!filePath && !isNonInteractive) {
    const candidates = findCandidateBackups();
    if (candidates.length > 0) {
      candidates.push({ name: '📝 Ingresar ruta manualmente...', value: '__manual__' });
      const chosen = await select({
        message: 'Selecciona el archivo de backup a restaurar:',
        choices: candidates
      });
      if (chosen === '__manual__') {
        filePath = await input({ message: 'Ingresa la ruta completa del archivo de backup (.zip, .json, .db):' });
      } else {
        filePath = chosen;
      }
    } else {
      filePath = await input({ message: 'Ingresa la ruta del archivo de backup (.zip, .json, .db):' });
    }
  }

  if (!filePath) {
    console.log(chalk.red('❌ Debes especificar un archivo de backup para restaurar con la opción --file <ruta>'));
    process.exitCode = 1;
    return;
  }

  filePath = path.resolve(filePath);
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red(`❌ El archivo especificado no existe: ${filePath}`));
    process.exitCode = 1;
    return;
  }

  const engramDataDir = getEngramDataDir();
  const currentDbFile = path.join(engramDataDir, 'engram.db');

  if (fs.existsSync(currentDbFile) && !isNonInteractive) {
    console.log(chalk.yellow(`⚠️ Ya existe una base de datos de memoria en: ${engramDataDir}`));
    const proceed = await confirm({
      message: '¿Deseas restaurar la copia de seguridad? (Se creará un respaldo de seguridad previo automáticamente)',
      default: true
    });
    if (!proceed) {
      console.log(chalk.dim('Operación cancelada por el usuario.'));
      return;
    }
  }

  const spinner = ora('Preparando restauración de memoria...').start();
  const tmpRestoreDir = path.join(os.tmpdir(), `fwb-restore-${Date.now()}`);
  fs.mkdirSync(tmpRestoreDir, { recursive: true });

  try {
    // Safety Net: Respaldar base de datos actual antes de tocar nada
    if (fs.existsSync(currentDbFile)) {
      spinner.text = 'Creando snapshot de seguridad de la memoria actual...';
      const safetyBackupName = `pre-restore-safety-${formatTimestamp()}.zip`;
      const safetyZipPath = path.join(engramDataDir, safetyBackupName);
      try {
        const safetyZip = new AdmZip();
        safetyZip.addLocalFile(currentDbFile);
        const wal = path.join(engramDataDir, 'engram.db-wal');
        if (fs.existsSync(wal)) safetyZip.addLocalFile(wal);
        safetyZip.writeZip(safetyZipPath);
      } catch (e) {}
    }

    let sourceDbFile = null;
    let sourceJsonFile = null;
    let manifestInfo = null;

    if (filePath.endsWith('.zip')) {
      spinner.text = 'Descomprimiendo y validando paquete de backup...';
      const zip = new AdmZip(filePath);
      zip.extractAllTo(tmpRestoreDir, true);

      const possibleDb = path.join(tmpRestoreDir, 'engram.db');
      if (fs.existsSync(possibleDb)) sourceDbFile = possibleDb;

      const possibleJson = path.join(tmpRestoreDir, 'engram-export.json');
      if (fs.existsSync(possibleJson)) sourceJsonFile = possibleJson;

      const possibleManifest = path.join(tmpRestoreDir, 'manifest.json');
      if (fs.existsSync(possibleManifest)) {
        try {
          manifestInfo = JSON.parse(fs.readFileSync(possibleManifest, 'utf8'));
        } catch (e) {}
      }
    } else if (filePath.endsWith('.json')) {
      sourceJsonFile = filePath;
    } else if (filePath.endsWith('.db')) {
      sourceDbFile = filePath;
    }

    if (!fs.existsSync(engramDataDir)) {
      fs.mkdirSync(engramDataDir, { recursive: true });
    }

    const engramBin = getEngramBinaryPath();

    if (sourceDbFile) {
      spinner.text = 'Restaurando base de datos SQLite...';
      
      // Limpiar archivos WAL y SHM antiguos para evitar inconsistencias
      const walTarget = path.join(engramDataDir, 'engram.db-wal');
      const shmTarget = path.join(engramDataDir, 'engram.db-shm');
      if (fs.existsSync(walTarget)) {
        try { fs.unlinkSync(walTarget); } catch (e) {}
      }
      if (fs.existsSync(shmTarget)) {
        try { fs.unlinkSync(shmTarget); } catch (e) {}
      }

      fs.copyFileSync(sourceDbFile, currentDbFile);
    } else if (sourceJsonFile && engramBin) {
      spinner.text = 'Importando memorias desde JSON con motor Engram...';
      execFileSync(engramBin, ['import', sourceJsonFile], {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe']
      });
    } else {
      throw new Error('El archivo de backup no contiene una base de datos válida ni un export JSON.');
    }

    spinner.succeed(chalk.green('✓ Memoria restaurada con éxito en: ') + chalk.cyan(engramDataDir));

    console.log(chalk.bold.magenta('\n' + '═'.repeat(60)));
    console.log(chalk.bold.green('  🎉 RESTAURACIÓN COMPLETADA CON ÉXITO'));
    console.log(chalk.dim('  Destino: ') + chalk.white(engramDataDir));
    if (manifestInfo) {
      console.log(chalk.dim('  Fecha Original: ') + chalk.cyan(manifestInfo.createdAt || 'N/A'));
      console.log(chalk.dim('  Versión FWB:   ') + chalk.cyan(manifestInfo.frameworkVersion || 'N/A'));
    }
    console.log(chalk.bold.magenta('═'.repeat(60)));

    if (engramBin) {
      try {
        const statsOut = execFileSync(engramBin, ['stats'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
        console.log(chalk.dim('\nEstadísticas actuales de la memoria:'));
        console.log(chalk.cyan(statsOut.trim()));
      } catch (e) {}
    }

    console.log(chalk.bold.green('\nTu agente de IA ya tiene acceso a todo el conocimiento y proyectos recuperados.\n'));

  } catch (err) {
    spinner.fail(chalk.red('Error durante la restauración: ' + err.message));
    process.exitCode = 1;
  } finally {
    try {
      if (fs.existsSync(tmpRestoreDir)) {
        fs.rmSync(tmpRestoreDir, { recursive: true, force: true });
      }
    } catch (e) {}
  }
}

// Ejecutar directamente si se llama como script principal
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  runRestore();
}
