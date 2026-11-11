#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Helper ANSI nativo (Zero-Dependencies) para que ui-check.js funcione desde cualquier carpeta sin node_modules
const chalk = {
    cyan: (s) => `\x1b[36m${s}\x1b[0m`,
    dim: (s) => `\x1b[2m${s}\x1b[0m`,
    yellow: (s) => `\x1b[33m${s}\x1b[0m`,
    green: (s) => `\x1b[32m${s}\x1b[0m`,
    red: (s) => `\x1b[31m${s}\x1b[0m`,
    white: (s) => `\x1b[37m${s}\x1b[0m`,
    bold: {
        magenta: (s) => `\x1b[1m\x1b[35m${s}\x1b[0m`,
        red: (s) => `\x1b[1m\x1b[31m${s}\x1b[0m`,
        green: (s) => `\x1b[1m\x1b[32m${s}\x1b[0m`
    }
};

const UI_EXTENSIONS = new Set(['.tsx', '.jsx', '.html', '.vue', '.svelte', '.php']);
const MAX_COMPONENT_LINES = 350;

function findGlobalCss(projectRoot) {
    const candidates = [
        path.join(projectRoot, 'src', 'app', 'globals.css'),
        path.join(projectRoot, 'src', 'styles', 'globals.css'),
        path.join(projectRoot, 'app', 'globals.css'),
        path.join(projectRoot, 'styles', 'globals.css'),
        path.join(projectRoot, 'src', 'index.css')
    ];
    for (const c of candidates) {
        if (fs.existsSync(c)) return c;
    }
    return null;
}

function extractCanonicalClasses(cssPath) {
    if (!cssPath || !fs.existsSync(cssPath)) return [];
    const content = fs.readFileSync(cssPath, 'utf8');
    const classSet = new Set();
    const regex = /\.([a-zA-Z][a-zA-Z0-9_-]{2,})\s*[,{]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const cls = match[1];
        if (!cls.startsWith('tw-') && !cls.startsWith('dark')) {
            classSet.add(`.${cls}`);
        }
    }
    return Array.from(classSet).sort();
}

function getModifiedUiFiles(projectRoot) {
    try {
        const statusOut = execSync('git status --porcelain', { cwd: projectRoot, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
        const files = [];
        for (const rawLine of statusOut.split('\n')) {
            const line = rawLine.trim();
            if (!line) continue;
            const status = line.slice(0, 2).trim();
            if (status === 'D') continue;
            let filePath = line.slice(3).trim();
            if (filePath.includes(' -> ')) {
                filePath = filePath.split(' -> ')[1].trim();
            }
            filePath = filePath.replace(/^"|"$/g, '');
            const ext = path.extname(filePath).toLowerCase();
            if (UI_EXTENSIONS.has(ext) && !filePath.includes('docs-fwbaraldi') && !filePath.includes('node_modules')) {
                const abs = path.resolve(projectRoot, filePath);
                if (fs.existsSync(abs)) files.push(abs);
            }
        }
        return files;
    } catch {
        return [];
    }
}

function resolveTargetFiles(args, projectRoot) {
    const cleanArgs = args.filter(a => !a.startsWith('-'));
    if (cleanArgs.length === 0) {
        return getModifiedUiFiles(projectRoot);
    }
    const resolved = [];
    for (const arg of cleanArgs) {
        const abs = path.resolve(projectRoot, arg);
        if (!fs.existsSync(abs)) continue;
        const stat = fs.statSync(abs);
        if (stat.isDirectory()) {
            for (const entry of fs.readdirSync(abs, { withFileTypes: true })) {
                if (entry.isFile() && UI_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
                    resolved.push(path.join(abs, entry.name));
                }
            }
        } else if (UI_EXTENSIONS.has(path.extname(abs).toLowerCase())) {
            resolved.push(abs);
        }
    }
    return resolved;
}

export async function runUiCheck(args = []) {
    const projectRoot = process.cwd();
    const targetFiles = resolveTargetFiles(args, projectRoot);
    const cssPath = findGlobalCss(projectRoot);
    const canonicalClasses = extractCanonicalClasses(cssPath);

    console.log(chalk.bold.magenta('\n🛡️  Framework Baraldi — Deterministic UI Gatekeeper (ui-check)\n'));

    if (cssPath && canonicalClasses.length > 0) {
        const relCss = path.relative(projectRoot, cssPath);
        console.log(chalk.cyan(`📦 Clases compuestas detectadas en ${relCss}:`));
        console.log(chalk.dim(`   ${canonicalClasses.slice(0, 28).join(', ')}${canonicalClasses.length > 28 ? ' ...' : ''}\n`));
    }

    if (targetFiles.length === 0) {
        console.log(chalk.yellow('ℹ️  No se especificaron archivos ni se detectaron vistas modificadas en git status.'));
        console.log(chalk.dim('   Uso: fwbaraldi ui-check <ruta/al/archivo.tsx>\n'));
        return 0;
    }

    let totalErrors = 0;
    let totalWarnings = 0;

    for (const filePath of targetFiles) {
        const relPath = path.relative(projectRoot, filePath);
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split(/\r?\n/);
        const fileErrors = [];
        const fileWarnings = [];

        // 1. Line Count Gate (Max 350 lines)
        if (lines.length > MAX_COMPONENT_LINES) {
            fileErrors.push({
                line: lines.length,
                rule: 'MONOLITH_LIMIT',
                msg: `El archivo tiene ${lines.length} líneas (máximo permitido: ${MAX_COMPONENT_LINES}). Extrae modales, sub-vistas o hooks a archivos independientes.`
            });
        }

        // 2. Nested Modals Gate
        const modalMatches = content.match(/<(Dialog|Modal|AlertDialog|Drawer|Sheet)\b/g) || [];
        if (modalMatches.length > 1) {
            fileErrors.push({
                line: 1,
                rule: 'NESTED_MODALS',
                msg: `Se detectaron ${modalMatches.length} modales/drawers en el mismo archivo (${modalMatches.join(', ')}). Desacopla cada modal en su propio componente.`
            });
        }

        // 3. Hybrid Button-Checkbox Gate
        if (/<Button\b[\s\S]{0,300}?<(Square|CheckSquare)\b/.test(content)) {
            fileErrors.push({
                line: 1,
                rule: 'HYBRID_CONTROL',
                msg: `Se detectó un <Button> con íconos <Square>/<CheckSquare> simulando un checkbox. Usa <input type="checkbox"> o un componente Checkbox accesible.`
            });
        }

        // Line-by-line inspection (con estado para bloques de comentarios y bloques <style>)
        const isShowroomFile = /showroom(_ui)?\.html$/i.test(filePath);
        let inBlockComment = false;
        let inStyleTag = false;

        lines.forEach((rawLineText, idx) => {
            const lineNum = idx + 1;

            // Limpiar comentarios inline en la misma línea (<!-- ... -->, {/* ... */}, /* ... */, // ...)
            let lineText = rawLineText
                .replace(/<!--[\s\S]*?-->/g, '')
                .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
                .replace(/\/\*[\s\S]*?\*\//g, '');

            // Manejo de comentarios multilínea /* ... */ o <!-- ... -->
            if (inBlockComment) {
                if (lineText.includes('-->') || lineText.includes('*/')) {
                    inBlockComment = false;
                    lineText = lineText.replace(/^[\s\S]*?(?:-->|\*\/)/, '');
                } else {
                    return;
                }
            }
            if (lineText.includes('<!--') && !lineText.includes('-->')) {
                inBlockComment = true;
                lineText = lineText.replace(/<!--[\s\S]*$/, '');
            } else if ((lineText.includes('/*') && !lineText.includes('*/'))) {
                inBlockComment = true;
                lineText = lineText.replace(/\/\*[\s\S]*$/, '');
            }

            const trimmed = lineText.trim();
            if (!trimmed || trimmed.startsWith('//') || trimmed.startsWith('*')) return;

            // Detección de bloques <style> empotrados y colores HEX crudos en CSS
            if (/<style\b[^>]*>/i.test(lineText)) {
                inStyleTag = true;
                if (!isShowroomFile) {
                    fileErrors.push({
                        line: lineNum,
                        rule: 'NO_EMBEDDED_STYLE_TAG',
                        msg: `Prohibido insertar bloques <style> empotrados en vistas o componentes. Usa hojas de estilo globales (globals.css) y tokens del sistema.`
                    });
                }
            }
            if (inStyleTag) {
                const rawHexInCss = lineText.match(/#[0-9a-fA-F]{3,8}\b/);
                if (rawHexInCss) {
                    fileErrors.push({
                        line: lineNum,
                        rule: 'NO_RAW_HEX_IN_STYLE',
                        msg: `Color HEX crudo ('${rawHexInCss[0]}') dentro de <style>. Usa variables CSS ('var(--*)') o espacio perceptual 'oklch(...)'.`
                    });
                }
                if (/<\/style>/i.test(lineText)) {
                    inStyleTag = false;
                }
            }

            // 4. Inline Style Gate
            if (/\bstyle\s*=\s*(\{\{|["'])/.test(lineText)) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'NO_INLINE_STYLE',
                    msg: `Prohibido el uso de style inline. Usa variables CSS o clases del sistema.`
                });
            }

            // 5. Tracking Manipulation Gate
            const trackingMatch = lineText.match(/\btracking-(tighter|tight|wide|wider|widest)\b/);
            if (trackingMatch) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'NO_TRACKING',
                    msg: `Prohibido '${trackingMatch[0]}'. Respeta el letter-spacing nativo de la tipografía oficial.`
                });
            }

            // 6. Generic Off-Token Palette Gate
            const genericColorMatch = lineText.match(/\b(bg-gray-\d+|text-gray-\d+|border-gray-\d+|shadow-2xs)\b/);
            if (genericColorMatch) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'OFF_TOKEN_CLASS',
                    msg: `Clase genérica fuera de contrato detectada ('${genericColorMatch[0]}'). Usa los tokens oficiales de DESIGN.md / globals.css (ej. slate-*, brand-*).`
                });
            }

            // 7. font-mono Gate in UI
            if (/\bfont-mono\b/.test(lineText) && !/(hash|sha|uuid|token|code|serial|hex|key|secret)/i.test(lineText)) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'FONT_MONO_UI',
                    msg: `Uso de 'font-mono' en elemento de interfaz. Toda la UI debe usar 'font-sans'; reserva 'font-mono' solo para hashes/código.`
                });
            }

            // 8. Em-dash / En-dash Gate in UI strings
            if (/[\u2014\u2013]/.test(lineText)) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'NO_EM_DASH',
                    msg: `Guion largo (— o –) detectado. Usa guion simple (-), comas o paréntesis.`
                });
            }

            // 9. Minimum Font Size A11y Gate (>= 10px / 0.625rem)
            const sub10pxMatch = lineText.match(/\btext-\[(?:[0-9](?:\.[0-9]+)?px|0\.(?:[0-5][0-9]*|6[01][0-9]*|62[0-4][0-9]*)rem)\]/i);
            if (sub10pxMatch) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'MIN_FONT_SIZE_10PX',
                    msg: `Violación del umbral mínimo A11y (${sub10pxMatch[0]} < 10px / 0.625rem). Ningún texto en interfaz puede ser menor a 10px.`
                });
            }

            // 10. Arbitrary Tailwind JIT Values Gate (No Inline Values: #hex, rgb, px)
            const arbitraryHexOrColor = lineText.match(/\b(?:bg|text|border|ring|fill|stroke|from|via|to)-\[(?:#[0-9a-fA-F]{3,8}|rgb[a]?\([^)]+\)|hsl[a]?\([^)]+\))\]/);
            if (arbitraryHexOrColor) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'NO_ARBITRARY_COLOR',
                    msg: `Color arbitrario hardcodeado detectado ('${arbitraryHexOrColor[0]}'). Usa exclusivamente los tokens de color de DESIGN.md / globals.css.`
                });
            }

            const arbitraryPx = lineText.match(/\b(?:text|p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|gap-x|gap-y|rounded|top|bottom|left|right)-\[[0-9.]+px\]/);
            if (arbitraryPx) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'NO_ARBITRARY_PX',
                    msg: `Valor arbitrario en píxeles detectado ('${arbitraryPx[0]}'). Respeta la política REM-First y la escala de espaciado/tipografía del sistema.`
                });
            }

            // 11. No Emojis in Product UI Gate
            const emojiMatch = lineText.match(/\p{Extended_Pictographic}/u);
            if (emojiMatch && !/[©®™]/.test(emojiMatch[0])) {
                fileErrors.push({
                    line: lineNum,
                    rule: 'NO_UI_EMOJI',
                    msg: `Emoji decorativo detectado en código de interfaz ('${emojiMatch[0]}'). Usa iconografía vectorial SVG del sistema (ej. Lucide).`
                });
            }

            // 12. Ad-hoc Badge Inflation Warning
            if (
                canonicalClasses.includes('.badge-pill') &&
                /\b(rounded-full|rounded)\b/.test(lineText) &&
                /\bpx-[123](\.5)?\b/.test(lineText) &&
                /\bpy-0(\.5)?\b/.test(lineText) &&
                /\btext-(xs|xxs|\[10px\])\b/.test(lineText) &&
                !lineText.includes('badge-')
            ) {
                fileWarnings.push({
                    line: lineNum,
                    rule: 'ADHOC_BADGE',
                    msg: `Posible badge construido con Tailwind ad-hoc. Verifica si corresponde usar '.badge-pill' / '.badge-tech' de globals.css.`
                });
            }
        });

        if (fileErrors.length === 0 && fileWarnings.length === 0) {
            console.log(chalk.green(`  ✅ [PASS] ${relPath} (${lines.length} líneas)`));
        } else {
            if (fileErrors.length > 0) {
                console.log(chalk.red(`  ❌ [FAIL] ${relPath} (${fileErrors.length} violaciones de contrato)`));
                for (const err of fileErrors) {
                    console.log(chalk.red(`     ↳ Línea ${err.line} [${err.rule}]: `) + chalk.white(err.msg));
                }
            } else {
                console.log(chalk.yellow(`  ⚠️  [WARN] ${relPath}`));
            }
            for (const warn of fileWarnings) {
                console.log(chalk.yellow(`     ↳ Línea ${warn.line} [${warn.rule}]: `) + chalk.dim(warn.msg));
            }
        }

        totalErrors += fileErrors.length;
        totalWarnings += fileWarnings.length;
    }

    console.log('\n' + '─'.repeat(64));
    if (totalErrors > 0) {
        console.log(chalk.bold.red(`🛑 UI GATE RECHAZADO: ${totalErrors} errores críticos detectados.`));
        console.log(chalk.yellow('   La IA tiene PROHIBIDO dar la tarea por terminada hasta corregir estas líneas y obtener PASS.\n'));
        process.exit(1);
    } else {
        console.log(chalk.bold.green(`🚀 UI GATE APROBADO (PASS): 0 violaciones críticas (${totalWarnings} advertencias).\n`));
        return 0;
    }
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, '/')}` || process.argv[1]?.endsWith('ui-check.js')) {
    runUiCheck(process.argv.slice(2));
}
