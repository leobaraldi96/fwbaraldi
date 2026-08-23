import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(walk(fullPath));
      }
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(path.join(rootDir, 'skills')).concat(walk(path.join(rootDir, '00_boot')));
let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Replace footer versions safely
  content = content.replace(/\*Framework Baraldi v2\.(26\.\d+|27\.\d+)/g, '*Framework Baraldi v2.28.0');
  content = content.replace(/version: "(2\.26\.\d+|2\.27\.\d+)"/g, 'version: "2.28.0"');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updated++;
    console.log(`Updated: ${path.relative(rootDir, file)}`);
  }
}

console.log(`\nTotal files updated with v2.28.0: ${updated}`);
