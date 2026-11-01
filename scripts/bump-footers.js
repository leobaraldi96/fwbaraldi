import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const targetVersion = pkg.version;

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

const rootMdFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.md') && f !== 'CHANGELOG.md')
  .map(f => path.join(rootDir, f));

const files = walk(path.join(rootDir, 'skills'))
  .concat(walk(path.join(rootDir, '00_boot')))
  .concat(rootMdFiles);
let updated = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replace versions safely in UTF-8
  content = content.replace(/v2\.(26|27|28|29|30|31)\.\d+/g, `v${targetVersion}`);
  content = content.replace(/version:\s*"2\.(26|27|28|29|30|31)\.\d+"/g, `version: "${targetVersion}"`);

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    updated++;
    console.log(`Updated: ${path.relative(rootDir, file)}`);
  }
}

console.log(`\nTotal files updated with v${targetVersion}: ${updated}`);
