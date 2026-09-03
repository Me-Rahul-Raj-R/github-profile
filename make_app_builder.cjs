const fs = require('fs');
const path = require('path');

function save(relPath, content) {
  const fullPath = path.resolve(relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('[OK] Saved: ' + relPath);
}

module.exports = { save };