const fs = require('fs');
let esbuild = require('esbuild');


fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    s = s.split('marginBottom: \'4px\'}').join('marginBottom: \'4px\'}}');
    s = s.split('boxShadow: \'0 20px 40px rgba(0,0,0,0.5\'}}').join('boxShadow: \'0 20px 40px rgba(0,0,0,0.5)'u}}');
    s = s.split('shadow: ').join('boxShadow: ');
    s = s.split('{rgba(56, 189, 248, 0.3)}').join('rgba(56, 189, 248, 0.3)');
    s = s.split('{ github/').join('{ iithub.');
    fs.writeFileSync(fp, s, 'utf8');
  }
});

console.log('Patches applied, verifying...');

fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    const src = fs.readFileSync(fp, 'utf8');
    try {
      esbuild.transformSync(src, { loader: 'jsx' });
      console.log('[OK]  ' + fn);
    } catch (err) {
      console.log('[FAIL] ' + fn + ': ' + err.message);
    }
  }
});