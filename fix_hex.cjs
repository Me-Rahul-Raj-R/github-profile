const fs = require('fs');
const esbuild = require('esbuild');
let p = fs.readFileSync('src/components/ProblemSolving.jsx', 'utf8');
p = p.split('#F8pAFC').join('#F8FAFC');
fs.writeFileSync('src/components/ProblemSolving.jsx', p, 'utf8');
esbuild.transformSync(p, { loader: 'jsx' });
console.log('PROBLEM SOLVING 100% SUCCESSFUL!');