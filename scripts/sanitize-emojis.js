import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Regex de emojis Unicode completos
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1FA00}-\u{1FAFF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu;

const targetDirs = [
  path.join(rootDir, 'skills'),
  path.join(rootDir, '00_boot'),
  path.join(rootDir, 'templates')
];
const targetFiles = [
  path.join(rootDir, 'SKILL.md')
];

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

let allFiles = [...targetFiles];
for (const d of targetDirs) {
  if (fs.existsSync(d)) {
    allFiles = allFiles.concat(getFiles(d));
  }
}

let totalReplaced = 0;
let modifiedFiles = 0;

for (const file of allFiles) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  let matchCount = 0;
  
  // Limpiar emojis
  let newContent = content.replace(emojiRegex, () => {
    matchCount++;
    return '';
  });

  // Limpiar dobles espacios en títulos generados por la remoción de emojis
  newContent = newContent.replace(/^(#+)\s+/gm, '$1 ');
  newContent = newContent.replace(/\[\s+\]/g, '[ ]'); // preservar checkboxes
  newContent = newContent.replace(/[ \t]+$/gm, ''); // trim trailing spaces

  if (matchCount > 0 && newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    totalReplaced += matchCount;
    modifiedFiles++;
    console.log(`Limpio: ${path.relative(rootDir, file)} (${matchCount} emojis removidos)`);
  }
}

console.log(`\nResumen: ${totalReplaced} emojis eliminados en ${modifiedFiles} archivos.`);
