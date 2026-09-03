const fs = require('fs');
const esbuild = require('esbuild');
let p = fs.readFileSync('src/components/ProblemSolving.jsx', 'utf8');
p = p.replace("background: '#1E293B', borderRadius: '2px', overflow: 'hidden' >", "background: '#1E293B', borderRadius: '2px', overflow: 'hidden'}}>");
fs.writeFileSync('src/components/ProblemSolving.jsx', p, 'utf8');
let res = esbuild.transformSync(p, { loader: 'jsx' });
console.log('ProblemSolving SUCCESS!');