const fs = require('fs');
const esbuild = require('esbuild');

fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    s = s.replace(/[\x00\x19\x7F-\x9F\x1D]/g, '');
    fs.writeFileSync(fp, s, 'utf8');
  }
});

console.log('Control characters cleaned! Verifying...');