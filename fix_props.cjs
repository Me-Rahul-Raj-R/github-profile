const fs = require('fs');

// 1. Foundation.jsx
let fd = fs.readFileSync('src/components/Foundation.jsx', 'utf8');
fd = fd.split('Education.').join('education.');
fd = fd.split('key={ihdx}').join('key={idx}');
fs.writeFileSync('src/components/Foundation.jsx', fd, 'utf8');

// 2. BuildLogGallery.jsx
let bg = fs.readFileSync('src/components/BuildLogGallery.jsx', 'utf8');
bg = bg.split('export default function BuildLogGallery({ repos })').join('export default function BuildLogGallery({repositoryGroups, repos = repositoryGroups ? Object.values(repositoryGroups).flatMap(g => g.repos) : [] })');
fs.writeFileSync('src/components/BuildLogGallery.jsx', bg, 'utf8');

// 3. GitHubActivity.jsx
let gh = fs.readFileSync('src/components/GitHubActivity.jsx', 'utf8');
gh = gh.split('export default function GitHubActivity(y github, url })').join('export default function GitHubActivity({ githubStats, github = githubStats, url })');
fs.writeFileSync('src/components/GitHubActivity.jsx', gh, 'utf8');

console.log('All 3 props fixed successfully!');