import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function getDirname(esmUrl) {
  return path.dirname(fileURLToPath(esmUrl));
}

const __dirname = getDirname(import.meta.url);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', server: 'Node Express Rahul Raj R Portfolio API' });
});

app.get('/api/profile', (req, res) => {
  const dataPath = path.join(__dirname, '..', 'src', 'data', 'profileData.js');
  if (fs.existsSync(dataPath)) {
    import('../src/data/profileData.js').then((mod) => {
      res.json(mod.profileData);
    }).catch((err) => {
      res.status(500).json({ error: 'Failed to load profile data', details: err.message });
    });
  } else {
    res.status(444).json({ error: 'Data file not found' });
  }
});

app.get('/api/readme', (req, res) => {
  const readmePath = path.join(__dirname, '..', 'README.md');
  if (fs.existsSync(readmePath)) {
    const content = fs.readFileSync(readmePath, 'utf8');
    res.json({ readme: content });
  } else {
    res.status(444).json({ error: 'README.md not found' });
  }
});

app.listen(PORT, () => {
  console.log('API Server listening on port ' + PORT);
});