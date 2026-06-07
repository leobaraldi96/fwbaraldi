import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const rootDir = process.cwd();

console.log(chalk.bold.blue('\n🔍 Iniciando Auditoría Interna del Framework Baraldi (v2.26.9)\n'));

let issues = 0;

function reportIssue(msg) {
    console.log(chalk.red(`  ❌ [ERROR] ${msg}`));
    issues++;
}

function reportSuccess(msg) {
    console.log(chalk.green(`  ✅ [OK] ${msg}`));
}

// 1. Check Versiones
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const currentVersion = pkg.version;

// Check README
const readme = fs.readFileSync(path.join(rootDir, 'README.md'), 'utf8');
if (!readme.includes(currentVersion)) reportIssue(`Versión ${currentVersion} no encontrada en README.md`);
else reportSuccess(`Versión sincronizada en README.md`);

// Check SKILL.md
const rootSkill = fs.readFileSync(path.join(rootDir, 'SKILL.md'), 'utf8');
if (!rootSkill.includes(currentVersion)) reportIssue(`Versión ${currentVersion} no encontrada en SKILL.md (raíz)`);
else reportSuccess(`Versión sincronizada en SKILL.md`);

// Check CHANGELOG
const changelog = fs.readFileSync(path.join(rootDir, 'CHANGELOG.md'), 'utf8');
if (!changelog.includes(`## [${currentVersion}]`)) reportIssue(`No existe entrada para la versión ${currentVersion} en CHANGELOG.md`);
else reportSuccess(`Entrada encontrada en CHANGELOG.md`);

// 2. Check Toolbox Integrity
const toolboxDir = path.join(rootDir, 'skills', 'toolbox');
const toolDirs = fs.readdirSync(toolboxDir).filter(f => {
    const fullPath = path.join(toolboxDir, f);
    return fs.statSync(fullPath).isDirectory();
});
const toolboxCount = toolDirs.length;

console.log(chalk.yellow(`\n📦 Auditando Toolbox (${toolboxCount} herramientas detectadas)...`));

toolDirs.forEach(dir => {
    // Normalizamos el nombre del directorio para la búsqueda
    const toolName = dir;
    let toolNameNoNumber = dir;
    if (/^\d+_/.test(dir)) {
        toolNameNoNumber = dir.replace(/^\d+_/, '');
    }
    const toolClean = toolNameNoNumber.replace(/_/g, ' '); // ej: stakeholder narrative strategy

    // Buscamos todas las variaciones posibles
    const searchPatterns = [
        toolName.toLowerCase(), // advanced_prioritization_protocol
        toolName.toLowerCase().replace(/_/g, ' '), // advanced prioritization protocol
        toolClean.toLowerCase(), // stakeholder narrative strategy
        toolClean.toLowerCase().replace(/ab/g, 'a b'), // a b testing if matches
        toolNameNoNumber.toLowerCase()
    ];

    const readmeLow = readme.toLowerCase().replace(/\//g, ' ');
    const skillLow = rootSkill.toLowerCase().replace(/\//g, ' ');

    const foundInReadme = searchPatterns.some(p => readmeLow.includes(p));
    const foundInSkill = searchPatterns.some(p => skillLow.includes(p));

    if (!foundInReadme) {
        reportIssue(`Herramienta '${dir}' no está listada correctamente en el README.md`);
    }
    if (!foundInSkill) {
        reportIssue(`Herramienta '${dir}' no está listada correctamente en el SKILL.md maestro`);
    }
});

if (toolboxCount === 13) reportSuccess(`Conteo de Toolbox correcto (13 de 13)`);
else reportIssue(`Se detectaron ${toolboxCount} herramientas, se esperaban 13.`);

// 3. Check Guardrails
const guardrails = fs.readFileSync(path.join(rootDir, 'skills', 'core', '00_core_guardrails', 'SKILL.md'), 'utf8');
const guardrailsClean = guardrails.toLowerCase();
if (!guardrailsClean.includes('prohibido resumir') && !guardrailsClean.includes('inmunidad del mapa')) {
    reportIssue(`La Cláusula de Inmunidad del Mapa no está presente en los Core Guardrails`);
} else {
    reportSuccess(`Cláusula de Inmunidad del Mapa verificada`);
}

// 4. Check Etapas Metodología
const methodologyDir = path.join(rootDir, 'skills', 'methodology');
for (let i = 1; i <= 7; i++) {
    const etapa = `0${i}`;
    const etapaDirName = fs.readdirSync(methodologyDir).find(d => d.startsWith(etapa));
    if (!etapaDirName) {
        reportIssue(`Falta la carpeta de la Etapa ${etapa} en methodology/`);
    } else {
        reportSuccess(`Etapa ${etapa} presente: ${etapaDirName}`);
        
        // Check Bridge Architecture
        const etapaFile = path.join(methodologyDir, etapaDirName, 'SKILL.md');
        const etapaContent = fs.readFileSync(etapaFile, 'utf8');
        if (etapaContent.includes('## 🛠️ Integración con la Toolbox') || etapaContent.includes('(Bridge Architecture)')) {
            reportSuccess(`  ↳ Bridge Architecture verificado`);
        } else {
            reportIssue(`  ↳ Falta conexión con Toolbox (Bridge Architecture)`);
        }
    }
}

console.log('\n------------------------------------------------');
if (issues === 0) {
    console.log(chalk.bold.green('🚀 RESULTADO: FRAMEWORK NIVELADO Y LISTO PARA SUBIR.'));
} else {
    console.log(chalk.bold.red(`🛑 RESULTADO: SE ENCONTRARON ${issues} INCONSISTENCIAS. NO SUBIR.`));
}
console.log('------------------------------------------------\n');
