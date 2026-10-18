import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const rootDir = process.cwd();

// 1. Check Versiones
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const currentVersion = pkg.version;

console.log(chalk.bold.blue(`\n🔍 Iniciando Auditoría Interna del Framework Baraldi (v${currentVersion})\n`));

let issues = 0;

function reportIssue(msg) {
    console.log(chalk.red(`  ❌ [ERROR] ${msg}`));
    issues++;
}

function reportSuccess(msg) {
    console.log(chalk.green(`  ✅ [OK] ${msg}`));
}

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

// Check Boot Context
const bootContext = fs.readFileSync(path.join(rootDir, '00_boot', 'context.md'), 'utf8');
if (!bootContext.includes(currentVersion)) reportIssue(`Versión ${currentVersion} no encontrada en 00_boot/context.md`);
else reportSuccess(`Versión sincronizada en 00_boot/context.md`);

if (bootContext.includes('—')) reportIssue(`Se detectaron guiones largos (—) prohibidos en 00_boot/context.md`);
else reportSuccess(`Ortotipografía sin guiones largos verificada en 00_boot/context.md`);

// Check Showroom Template Hygiene
const showroomPath = path.join(rootDir, 'templates', 'showroom_ui.html');
if (fs.existsSync(showroomPath)) {
    const showroomHtml = fs.readFileSync(showroomPath, 'utf8');
    if (showroomHtml.includes('style="')) {
        reportIssue(`Se detectaron estilos inline prohibidos (style="...") en templates/showroom_ui.html`);
    } else {
        reportSuccess(`Plantilla showroom_ui.html libre de estilos inline (Zero-Inline CSS)`);
    }
}

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

if (toolboxCount === 16) reportSuccess(`Conteo de Toolbox correcto (16 de 16)`);
else reportIssue(`Se detectaron ${toolboxCount} herramientas, se esperaban 16.`);

// 3. Check Guardrails
const guardrails = fs.readFileSync(path.join(rootDir, 'skills', 'core', '00_core_guardrails', 'SKILL.md'), 'utf8');
const guardrailsClean = guardrails.toLowerCase();
if (!guardrailsClean.includes('prohibido resumir') && !guardrailsClean.includes('inmunidad del mapa')) {
    reportIssue(`La Cláusula de Inmunidad del Mapa no está presente en los Core Guardrails`);
} else {
    reportSuccess(`Cláusula de Inmunidad del Mapa verificada`);
}
if (!guardrails.includes(currentVersion)) {
    reportIssue(`Versión ${currentVersion} no sincronizada en 00_core_guardrails/SKILL.md`);
} else {
    reportSuccess(`Versión sincronizada en 00_core_guardrails/SKILL.md`);
}

// 4. Check Etapas Metodología y Cableado Secuencial
const methodologyDir = path.join(rootDir, 'skills', 'methodology');
console.log(chalk.yellow(`\n🔗 Auditando Etapas de Metodología y Cableado Secuencial (01 a 08)...`));

for (let i = 1; i <= 8; i++) {
    const etapa = `0${i}`;
    const etapaDirName = fs.readdirSync(methodologyDir).find(d => d.startsWith(etapa));
    if (!etapaDirName) {
        reportIssue(`Falta la carpeta de la Etapa ${etapa} en methodology/`);
    } else {
        const etapaDirPath = path.join(methodologyDir, etapaDirName);
        const etapaFile = path.join(etapaDirPath, 'SKILL.md');
        const etapaContent = fs.readFileSync(etapaFile, 'utf8');

        reportSuccess(`Etapa ${etapa} presente: ${etapaDirName}`);

        // 4.1 Check Versión sincronizada en la etapa
        if (!etapaContent.includes(currentVersion)) {
            reportIssue(`  ↳ Versión ${currentVersion} no sincronizada en ${etapaDirName}/SKILL.md`);
        }

        // 4.2 Check Ortotipografía (cero guiones largos —)
        if (etapaContent.includes('—')) {
            reportIssue(`  ↳ Se detectaron guiones largos (—) prohibidos en ${etapaDirName}/SKILL.md`);
        }

        // 4.3 Check Bridge Architecture y Protocolo de Handoff
        if (etapaContent.includes('(Bridge Architecture)')) {
            reportSuccess(`  ↳ Bridge Architecture verificado`);
        } else {
            reportIssue(`  ↳ Falta conexión con Toolbox (Bridge Architecture) en ${etapaDirName}`);
        }

        if (etapaContent.includes('Protocolo de memoria y handoff')) {
            reportSuccess(`  ↳ Tabla de persistencia Engram y Handoff verificados`);
        } else {
            reportIssue(`  ↳ Falta bloque estandarizado 'Protocolo de memoria y handoff' en ${etapaDirName}`);
        }

        // 4.4 Verificar que todos los archivos skills/momento_*.md en disco estén conectados en SKILL.md
        const subSkillsDir = path.join(etapaDirPath, 'skills');
        if (fs.existsSync(subSkillsDir)) {
            const momentoFiles = fs.readdirSync(subSkillsDir).filter(f => f.startsWith('momento_') && f.endsWith('.md'));
            momentoFiles.forEach(mf => {
                const relRef = `skills/${mf}`;
                if (!etapaContent.includes(relRef)) {
                    reportIssue(`  ↳ Sub-archivo huérfano no conectado en ${etapaDirName}/SKILL.md: ${relRef}`);
                }
            });
            if (momentoFiles.length > 0) {
                reportSuccess(`  ↳ ${momentoFiles.length} sub-archivos momento_*.md conectados correctamente`);
            }
        }

        // 4.5 Verificar existencia física en disco de todas las rutas relativas en backticks o paréntesis
        const relPathRegex = /(?:`| \()((?:\.\.\/|skills\/)[^\s`)]+\.(?:md|html))(?:`|\))/g;
        let match;
        let brokenLinks = 0;
        let checkedLinks = 0;
        while ((match = relPathRegex.exec(etapaContent)) !== null) {
            const relTarget = match[1];
            const resolvedPath = path.resolve(etapaDirPath, relTarget);
            checkedLinks++;
            if (!fs.existsSync(resolvedPath)) {
                reportIssue(`  ↳ Ruta rota en ${etapaDirName}/SKILL.md: '${relTarget}' (no existe en ${resolvedPath})`);
                brokenLinks++;
            }
        }
        if (brokenLinks === 0 && checkedLinks > 0) {
            reportSuccess(`  ↳ ${checkedLinks} cables/rutas relativas verificadas físicamente en disco`);
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
