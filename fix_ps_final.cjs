const fs = require('fs');
const esbuild = require('esbuild');
let p = fs.readFileSync('src/components/ProblemSolving.jsx', 'utf8');
p = p.split('/ {leetcode.easyTotal}').join(' / ' + '{leetcode.easyTotal}');
p = p.split('/ {leetcode.mediumTotal}').join(' / ' + '{leetcode.mediumTotal}');
p = p.split('/ {leetcode.hardTotal}').join(' / ' + '{leetcode.hardTotal}');
fs.writeFileSync('src/components/ProblemSolving.jsx', p, 'utf8');
esbuild.transformSync(p, { loader: 'jsx' });
console.log('PROBLEM SOLVING IS COMPLETELY SUCCESSFULLY VALIDATED!');