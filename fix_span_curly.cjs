const fs = require('fs');
const esbuild = require('esbuild');
let p = fs.readFileSync('src/components/ProblemSolving.jsx', 'utf8');
p = p.split("color: '#64748B'}>").join("color: '#64748B'}}>");
fs.writeFileSync('src/components/ProblemSolving.jsx', p, 'utf8');
esbuild.transformSync(p, { loader: 'jsx' });
console.log('PROBLEM SOLVING IS 100% SUCCESSFULLY VERIFIED!!!');