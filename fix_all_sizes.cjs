const fs = require('fs');

fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    let orig = s;
    s = s.replace(/size={[qu](\d)}/g, 'size={1$11}');
    if (s !== orig) {
      fs.writeFileSync(fp, s, 'utf8');
      console.log('Fixed sizes in ' + fn + ': ' + s.match(/size={[^}]+}/g));
    }
  }
});