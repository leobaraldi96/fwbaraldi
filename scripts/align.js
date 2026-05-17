#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { select, confirm } from '@inquirer/prompts';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frameworkRoot = path.join(__dirname, '..');

// Cargar versión oficial del framework
const pkg = JSON.parse(fs.readFileSync(path.join(frameworkRoot, 'package.json'), 'utf8'));
const FRAMEWORK_VERSION = pkg.version;

const MANDATORY_FOLDERS = [
    '01_Problem_Framing',
    '02_System_Analysis',
    '03_Product_Logic',
    '04_Information_Architecture',
    '05_Interaction_Design',
    '06_Visual_Design',
    '07_Handover_QA',
    'UXR',
    'UXW',
    'IA'
];

async function runAlign() {
    console.log(chalk.bold.magenta('\n🚀 Baraldi Framework Alignment Tool — Project Guard\n'));

    const projectPath = process.cwd();
    const docsPath = path.join(projectPath, 'docs-fwbaraldi');

    if (!fs.existsSync(docsPath)) {
        console.log(chalk.yellow(`\n⚠️ No se detectó la carpeta 'docs-fwbaraldi/' en la raíz del proyecto.`));
        console.log(chalk.dim('   Esta carpeta es el "Cerebro Estratégico" donde se guardan los artefactos del framework'));
        console.log(chalk.dim('   sin ensuciar tu código de producción.\n'));
        
        const init = await confirm({ message: '¿Deseas inicializar la estructura del framework en este proyecto?' });
        if (!init) process.exit(0);
        
        fs.mkdirSync(docsPath, { recursive: true });
        console.log(chalk.green('✓ Carpeta docs-fwbaraldi creada.'));
    }

    const spinner = ora('Escaneando alineamientos y versiones...').start();
    const report = {
        foldersToAdd: [],
        filesToUpdate: [],
        versionMismatches: [],
        engramConfig: false,
        gitIgnoreUpdate: false
    };

    // 0. Verificar Identidad Blindada (Engram Config)
    const engramDir = path.join(projectPath, '.engram');
    const engramConfigPath = path.join(engramDir, 'config.json');
    if (!fs.existsSync(engramConfigPath)) {
        report.engramConfig = true;
    }

    // Verificar .gitignore
    const gitignorePath = path.join(projectPath, '.gitignore');
    if (fs.existsSync(gitignorePath)) {
        const content = fs.readFileSync(gitignorePath, 'utf8');
        if (!content.includes('.engram/')) {
            report.gitIgnoreUpdate = true;
        }
    } else {
        report.gitIgnoreUpdate = true;
    }

    // 1. Verificar Taxonomía de Carpetas
    MANDATORY_FOLDERS.forEach(folder => {
        const folderPath = path.join(docsPath, folder);
        if (!fs.existsSync(folderPath)) {
            report.foldersToAdd.push(folder);
        }
    });

    // 2. Verificar Archivos Mandatorios (Backlog y README explicativo)
    const backlogPath = path.join(docsPath, '00_Backlog_Estrategico.md');
    if (!fs.existsSync(backlogPath)) {
        report.filesToUpdate.push('00_Backlog_Estrategico.md');
    }

    const readmePath = path.join(docsPath, 'README.md');
    if (!fs.existsSync(readmePath)) {
        report.filesToUpdate.push('README.md (Explicativo)');
    }

    // 3. Verificar Versiones en archivos Markdown del proyecto
    function scanVersions(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                scanVersions(fullPath);
            } else if (entry.name.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf8');
                const versionMatch = content.match(/v\d+\.\d+\.\d+/);
                if (versionMatch && versionMatch[0] !== `v${FRAMEWORK_VERSION}`) {
                    report.versionMismatches.push({
                        file: path.relative(projectPath, fullPath),
                        old: versionMatch[0],
                        new: `v${FRAMEWORK_VERSION}`
                    });
                }
            }
        }
    }
    scanVersions(docsPath);

    spinner.stop();

    // Mostrar Reporte
    if (report.foldersToAdd.length === 0 && report.filesToUpdate.length === 0 && report.versionMismatches.length === 0 && !report.engramConfig && !report.gitIgnoreUpdate) {
        console.log(chalk.green.bold('\n✅ ¡Tu proyecto está perfectamente alineado con la v' + FRAMEWORK_VERSION + '!\n'));
        process.exit(0);
    }

    console.log(chalk.bold.blue('📋 Resumen de cambios sugeridos:'));
    
    if (report.engramConfig) {
        console.log(chalk.cyan('\n🔐 Seguridad e Identidad:'));
        console.log(`  + .engram/config.json (Identidad Blindada)`);
    }

    if (report.gitIgnoreUpdate) {
        console.log(chalk.cyan(report.engramConfig ? '' : '\n🔐 Seguridad e Identidad:'));
        console.log(`  ~ .gitignore (Reglas de exclusión de memoria local)`);
    }
    
    if (report.foldersToAdd.length > 0) {
        console.log(chalk.cyan('\n📂 Carpetas a crear (Taxonomía mandatoria):'));
        report.foldersToAdd.forEach(f => console.log(`  + ${f}/`));
    }

    if (report.filesToUpdate.length > 0) {
        console.log(chalk.cyan('\n📄 Archivos a inicializar:'));
        report.filesToUpdate.forEach(f => console.log(`  + ${f}`));
    }

    if (report.versionMismatches.length > 0) {
        console.log(chalk.cyan('\n🔄 Actualizaciones de versión detectadas:'));
        console.log(chalk.dim('  ¡Hola! Detectamos que tus documentos están en una versión anterior y hay'));
        console.log(chalk.dim('  actualizaciones y mejoras disponibles (esto lo llamamos un "Version Bump").'));
        console.log(chalk.dim('  Te recomendamos preguntarle a tu agente de IA "¿qué trae de nuevo esta versión?"'));
        console.log(chalk.dim('  o consultar el CHANGELOG para ver cómo impactan estas mejoras en tu proyecto.\n'));
        report.versionMismatches.forEach(m => {
            console.log(`  ~ ${m.file}: ${chalk.dim(m.old)} → ${chalk.green(m.new)}`);
        });
    }

    console.log('');
    const proceed = await confirm({ message: '¿Todo listo? ¿Deseas aplicar estos alineamientos en tus archivos ahora?' });

    if (proceed) {
        const applySpinner = ora('Aplicando alineamientos...').start();
        
        // 0. Aplicar Identidad Blindada
        if (report.engramConfig) {
            if (!fs.existsSync(engramDir)) fs.mkdirSync(engramDir, { recursive: true });
            const projectName = path.basename(projectPath);
            fs.writeFileSync(engramConfigPath, JSON.stringify({ project: projectName }, null, 2));
        }

        if (report.gitIgnoreUpdate) {
            const rules = '\n# Engram Memory\n.engram/\n!.engram/config.json\n';
            if (fs.existsSync(gitignorePath)) {
                fs.appendFileSync(gitignorePath, rules);
            } else {
                fs.writeFileSync(gitignorePath, rules);
            }
        }

        // Crear carpetas
        report.foldersToAdd.forEach(folder => {
            fs.mkdirSync(path.join(docsPath, folder), { recursive: true });
        });

        // Crear Backlog si no existe
        if (report.filesToUpdate.some(f => f.includes('00_Backlog_Estrategico.md'))) {
            const templatePath = path.join(frameworkRoot, '00_Backlog_Estrategico.md');
            if (fs.existsSync(templatePath)) {
                let content = fs.readFileSync(templatePath, 'utf8');
                // Limpiar el contenido del template para el usuario pero mantener la estructura
                content = content.replace(/Operational v\d+\.\d+\.\d+/g, 'Pendiente');
                fs.writeFileSync(path.join(docsPath, '00_Backlog_Estrategico.md'), content);
            }
        }

        // Crear README explicativo si no existe
        if (report.filesToUpdate.some(f => f.includes('README.md'))) {
            const templatePath = path.join(frameworkRoot, 'templates', 'docs_readme.md');
            if (fs.existsSync(templatePath)) {
                const content = fs.readFileSync(templatePath, 'utf8');
                fs.writeFileSync(path.join(docsPath, 'README.md'), content);
            }
        }

        // Actualizar versiones
        report.versionMismatches.forEach(m => {
            const fullPath = path.join(projectPath, m.file);
            let content = fs.readFileSync(fullPath, 'utf8');
            content = content.replace(new RegExp(m.old, 'g'), m.new);
            fs.writeFileSync(fullPath, content);
        });

        const reportPath = path.join(docsPath, '.UPGRADE_REPORT.md');
        const reportContent = `# 🚀 FWB Upgrade Report (v${FRAMEWORK_VERSION})\n\n**Estado Estructural:** Alineado físicamente por consola.\n**Carpetas Creadas:** ${report.foldersToAdd.length ? report.foldersToAdd.join(', ') : 'Ninguna'}\n**Archivos Inicializados:** ${report.filesToUpdate.length ? report.filesToUpdate.join(', ') : 'Ningunos'}\n**Archivos que requieren refactorización de contenido (por salto de versión):**\n${report.versionMismatches.length ? report.versionMismatches.map(m => `- ${m.file} (saltó de ${m.old} a v${FRAMEWORK_VERSION})`).join('\n') : '- Ninguno. Todo está al día.'}\n\n**Directiva para la IA:** Cuando el usuario ejecute '/upgrade', lee este reporte. Sugiere un backup de 'docs-fwbaraldi'. Luego, presenta un plan de refactorización para actualizar el contenido de los archivos listados arriba, preservando el 100% del valor original y esperando confirmación archivo por archivo. Nunca operes fuera de 'docs-fwbaraldi'.\n`;
        fs.writeFileSync(reportPath, reportContent);

        applySpinner.succeed(chalk.green('✓ Proyecto alineado con éxito a la v' + FRAMEWORK_VERSION));
        
        console.log(chalk.bold.magenta('\n🤖 ¡El trabajo de la consola terminó, ahora le toca a tu Agente IA!'));
        console.log(chalk.cyan('   Escribí el comando ') + chalk.white.bgMagenta.bold(' /upgrade ') + chalk.cyan(' en el chat de tu editor'));
        console.log(chalk.cyan('   para que la IA lea el reporte de actualización y te guíe paso a paso'));
        console.log(chalk.cyan('   refactorizando el contenido de tus archivos viejos de forma segura.\n'));
    } else {
        console.log(chalk.yellow('\nAlineación cancelada por el usuario.'));
    }
}

runAlign().catch(err => {
    console.error(chalk.red('\nError durante la alineación:'), err);
    process.exit(1);
});
