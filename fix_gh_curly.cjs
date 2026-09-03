const fs = require('fs');
let p = fs.readFileSync('src/components/GitHubActivity.jsx', 'utf8');
p = p.split("color: '#64748B'}>").join("color: '#64748B'}}>");
fs.writeFileSync('src/components/GitHubActivity.jsx', p, 'utf8');