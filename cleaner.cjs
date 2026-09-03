const fs = require('fs');
fs.readdirSync('src/components').forEach(fn => {
  if (fn.endsWith('.jsx')) {
    const fp = 'src/components/' + fn;
    let s = fs.readFileSync(fp, 'utf8');
    s = s.split("0.2)' shadow:").join("0.1', boxShadow:");
    s = s.split("0.25)' shadow:").join("0.25', boxShadow:");
    s = s.split("#F8FAFC' margin:").join("'#F8FAFC', margin:");
    s = s.split("{{proj.theme}}")
.join("proj.theme");
    fs.writeFileSync(fp, s, 'utf8');
  }
});
console.log('All JSX components cleaned successfully!');