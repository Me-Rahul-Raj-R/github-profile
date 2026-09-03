const fs = require('fs');
fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    s = s.split('&lt; developer.profile />').join('{"< developer.profile />"}');
    s = s.split('> whoami').join('{"> whoami"}');
    s = s.split('> status --current').join('{"> status --current"}');
    s = s.split('> ready_for_action').join('{"> ready_for_action"}');
    s = s.split('> { r }').join('{"> " + r}');
    s = s.split('&&').join('and');
    fs.writeFileSync(fp, s, 'utf8');
  }
});
console.log('Rigorous JSX fixes applied!');