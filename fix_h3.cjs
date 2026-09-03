const fs = require('fs');
let p = fs.readFileSync('src/components/GitHubActivity.jsx', 'utf8');
p = p.split("style={fontSize: '36px',").join("style={{fontSize: '36px', ");
fs.writeFileSync('src/components/GitHubActivity.jsx', p, 'utf8');