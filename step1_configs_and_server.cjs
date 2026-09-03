const { save } = require('./make_app_builder.cjs');

// 1. vite.config.js
save('vite.config.js', `/import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
`.substr(1));

// 2. index.html
save('index.html', `/<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rahul Raj R | Software Developer &amp; Engineering Portfolio</title>
    <meta name="description" content="Rahul Raj R - Software Developer | Java Backend Developer | Full Stack Web Developer" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700;&display=swap" rel="stylesheet" />
  </head>
  <body class="bg-dark-deep text-slate-100 antialiased overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`.substr(1));

console.log('Step 1 completed');