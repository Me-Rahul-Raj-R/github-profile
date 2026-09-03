const fs = require('fs');
fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    s = s.split('&gt;').join('>');
    s = s.split('&amp;').join('&');
    fs.writeFileSync(fp, s, 'utf8');
  }
});
console.log('Entities fixed!');