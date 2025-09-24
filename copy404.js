// copy404.js
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to build folder
const distPath = join(__dirname, 'dist');

// Copy index.html to 404.html
fs.copyFileSync(join(distPath, 'index.html'), join(distPath, '404.html'));

console.log('404.html created successfully!');

