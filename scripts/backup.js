#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
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

  // Intentar encontrar en PATH
  try {
    const whichCmd = os.platform() === 'win32' ? 'where' : 'which';
    const output = execFileSync(whichCmd, ['engram'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] }).trim();
    const firstLine = output.split('\n')[0].trim();
    if (firstLine && fs.existsSync(firstLine)) return firstLine;
  } catch (e) {
    // No en PATH
  }

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

export async function runBackup(cliArgs = process.argv.slice(2)) {
  const isHelp = cliArgs.includes('--help') || cliArgs.includes('-h');
  const isSilent = cliArgs.includes('--silent') || cliArgs.includes('-s');

  if (isHelp) {
    console.log(`
Framework Baraldi (v${FRAMEWORK_VERSION}) — Backup de Memoria Engram

Uso:
  fwbaraldi backup [opciones]
  npx github:leobaraldi96/fwbaraldi backup [opciones]
  fwb-backup [opciones]

Opciones:
  -o, --output <ruta>    Directorio o archivo .zip de destino (por defecto: directorio actual)
  -s, --silent           Modo silencioso
  -h, --help             Muestra esta ayuda
`);
    return;
  }

  if (!isSilent) {
    console.log(chalk.bold.magenta(`\n💾 FRAMEWORK BARALDI — BACKUP DE MEMORIA (Engram)\n`));
  }

  const engramDataDir = getEngramDataDir();
  const dbFile = path.join(engramDataDir, 'engram.db');

  if (!fs.existsSync(dbFile)) {
    console.log(chalk.red(`❌ No se encontró ninguna base de datos de memoria en: ${engramDataDir}`));
    console.log(chalk.yellow(`Asegúrate de haber utilizado el Framework Baraldi o de haber guardado memorias con Engram.`));
    process.exitCode = 1;
    return;
  }

  let outputArg = null;
  const outIdx = cliArgs.findIndex(a => a === '--output' || a === '-o' || a.startsWith('--output=') || a.startsWith('-o='));
  if (outIdx !== -1) {
    if (cliArgs[outIdx].includes('=')) {
      outputArg = cliArgs[outIdx].split('=')[1];
    } else if (cliArgs[outIdx + 1]) {
      outputArg = cliArgs[outIdx + 1];
    }
  }

  const timestamp = formatTimestamp();
  let targetZipPath = '';

  if (outputArg) {
    const resolvedOut = path.resolve(outputArg);
    if (fs.existsSync(resolvedOut) && fs.statSync(resolvedOut).isDirectory()) {
      targetZipPath = path.join(resolvedOut, `fwb-memory-backup-${timestamp}.zip`);
    } else if (resolvedOut.endsWith('.zip')) {
      targetZipPath = resolvedOut;
    } else {
      targetZipPath = path.join(resolvedOut, `fwb-memory-backup-${timestamp}.zip`);
    }
  } else {
    targetZipPath = path.join(process.cwd(), `fwb-memory-backup-${timestamp}.zip`);
  }

  const spinner = ora('Generando copia de seguridad consolidada...').start();
  const tmpBackupDir = path.join(os.tmpdir(), `fwb-backup-${Date.now()}`);
  fs.mkdirSync(tmpBackupDir, { recursive: true });

  const engramBin = getEngramBinaryPath();
  let jsonExportSuccess = false;
  let statsSummary = { projects: 'Desconocido', observations: 'Desconocido' };

  try {
    // 1. Exportar en formato universal JSON si el binario de Engram está disponible
    if (engramBin) {
      spinner.text = 'Exportando memorias a formato universal JSON...';
      const jsonExportPath = path.join(tmpBackupDir, 'engram-export.json');
      try {
        execFileSync(engramBin, ['export', jsonExportPath], {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'pipe']
        });
        jsonExportSuccess = fs.existsSync(jsonExportPath) && fs.statSync(jsonExportPath).size > 0;
      } catch (e) {
        // Continuar con respaldo físico SQLite
      }

      // Obtener estadísticas para el reporte
      try {
        const statsOut = execFileSync(engramBin, ['stats'], { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
        statsSummary.raw = statsOut.trim();
      } catch (e) {}
    }

    // 2. Copiar archivos físicos de SQLite
    spinner.text = 'Copiando base de datos física SQLite...';
    fs.copyFileSync(dbFile, path.join(tmpBackupDir, 'engram.db'));

    const walFile = path.join(engramDataDir, 'engram.db-wal');
    if (fs.existsSync(walFile)) {
      fs.copyFileSync(walFile, path.join(tmpBackupDir, 'engram.db-wal'));
    }
    const shmFile = path.join(engramDataDir, 'engram.db-shm');
    if (fs.existsSync(shmFile)) {
      fs.copyFileSync(shmFile, path.join(tmpBackupDir, 'engram.db-shm'));
    }

    // 3. Crear manifiesto de metadatos
    const manifest = {
      framework: 'Framework Baraldi',
      frameworkVersion: FRAMEWORK_VERSION,
      createdAt: new Date().toISOString(),
      hostname: os.hostname(),
      platform: os.platform(),
      arch: os.arch(),
      engramDataDir,
      databaseSizeBytes: fs.statSync(dbFile).size,
      hasJsonExport: jsonExportSuccess,
      backupFormat: '1.0'
    };
    fs.writeFileSync(path.join(tmpBackupDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

    // 4. Empaquetar todo en ZIP
    spinner.text = 'Comprimiendo archivo de backup (.zip)...';
    const zip = new AdmZip();
    zip.addLocalFolder(tmpBackupDir);

    const targetDir = path.dirname(targetZipPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    zip.writeZip(targetZipPath);
    spinner.succeed(chalk.green('✓ Backup generado con éxito: ') + chalk.cyan(targetZipPath));

    const zipSizeMB = (fs.statSync(targetZipPath).size / (1024 * 1024)).toFixed(2);

    console.log(chalk.bold.magenta('\n' + '═'.repeat(60)));
    console.log(chalk.bold.green('  📦 COPIA DE SEGURIDAD COMPLETADA'));
    console.log(chalk.dim('  Archivo: ') + chalk.cyan(targetZipPath));
    console.log(chalk.dim('  Tamaño:  ') + chalk.white(`${zipSizeMB} MB`));
    console.log(chalk.dim('  Origen:  ') + chalk.dim(engramDataDir));
    console.log(chalk.bold.magenta('═'.repeat(60)));

    console.log(chalk.bold('\n🛡️ ¿Vas a formatear tu PC o cambiar de equipo?'));
    console.log(chalk.white(' 1. Copia este archivo ') + chalk.cyan(path.basename(targetZipPath)) + chalk.white(' a un pendrive o Google Drive/Dropbox.'));
    console.log(chalk.white(' 2. En tu nuevo equipo, instala el framework con: ') + chalk.cyan('npx github:leobaraldi96/fwbaraldi'));
    console.log(chalk.white(' 3. Restaura tu memoria ejecutando: ') + chalk.cyan(`fwbaraldi restore -f "${path.basename(targetZipPath)}"`));
    console.log(chalk.dim('─'.repeat(60) + '\n'));

  } catch (err) {
    spinner.fail(chalk.red('Error creando el backup: ' + err.message));
    process.exitCode = 1;
  } finally {
    try {
      if (fs.existsSync(tmpBackupDir)) {
        fs.rmSync(tmpBackupDir, { recursive: true, force: true });
      }
    } catch (e) {}
  }
}

// Ejecutar directamente si se llama como script principal
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  runBackup();
}
