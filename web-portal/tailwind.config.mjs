import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Recursively find all files in a directory that match the given extensions
function getFilesRecursively(dir, extensions) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

// Get all files to scan for Tailwind utility classes
const contentFiles = getFilesRecursively(
  path.join(__dirname, 'src'),
  ['.astro', '.html', '.js', '.jsx', '.md', '.mdx', '.ts', '.tsx']
);

/** @type {import('tailwindcss').Config} */
export default {
  content: contentFiles,
  theme: {
    extend: {
      colors: {
        mathBgPrimary: 'var(--background-primary)',
        mathBgSecondary: 'var(--background-secondary)',
        mathTextNormal: 'var(--text-normal)',
        mathTextMuted: 'var(--text-muted)',
        mathBorder: 'var(--border-color)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
