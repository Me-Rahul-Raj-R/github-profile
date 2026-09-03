const fs = require('fs');
fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    const src = fs.readFileSync(fp, 'utf8');
    console.log(fn, 'parsing...');
  }
});