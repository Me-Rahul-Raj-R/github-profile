const fs = require('fs');

let b = fs.readFileSync('src/components/BuildLogGallery.jsx', 'utf8');
b = b.replace("background: '#121A26''}}", "background: '#121A26'}}");
fs.writeFileSync('src/components/BuildLogGallery.jsx', b, 'utf8');

let p = fs.readFileSync('src/components/ProblemSolving.jsx', 'utf8');
p = p.replace("fontWeight: '700'}}EASY", "fontWeight: '700'}>EASY");
p = p.replace("fontWeight: '700'}}MEDIUM", "fontWeight: '700'}>MEDIUM");
p = p.replace("fontWeight: '700'}}HARD", "fontWeight: '700'}>HARD");
p = p.replace("#F8pAFC", "#F8FAFC");
fs.writeFileSync('src/components/ProblemSolving.jsx', p, 'utf8');

console.log('Patched both successfully!');