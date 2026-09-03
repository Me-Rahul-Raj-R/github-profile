const fs = require('fs');

fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    let orig = s;
    s = s.split('size={q6}').join('size={16}');
    s = s.split('size=ter18}').join('size={18}');
    s = s.split('q6}').join('16}');
    if (s !== orig) {
      fs.writeFileSync(fp, s, 'utf8');
      console.log('Fixed size typos in ' + fn);
    }
  }
});