const fs = require('fs');
const esbuild = require('esbuild');
let p = fs.readFileSync('src/components/ProblemSolving.jsx', 'utf8');
p = p.split("fontWeight: '700'}>").join("fontWeight: '700'}}>");
fs.writeFileSync('src/components/ProblemSolving.jsx', p, 'utf8');
let err = null;
try { esbuild.transformSync(p, { loader: 'jsx' }); console.log('ProblemSolving SUCCESS'); } catch(e) { console.log(' ERROR: ', e.message); }