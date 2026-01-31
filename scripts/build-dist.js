#!/usr/bin/env node

import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const srcThemesDir = join(rootDir, 'src', 'themes');
const distDir = join(rootDir, 'dist');

console.log('🔨 Building distribution files...\n');

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Simple CSS minifier
function minifyCSS(css) {
  return css
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    // Remove whitespace around special characters
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    // Remove leading/trailing whitespace
    .trim();
}

// Copy and minify Bootstrap typography files
const typographyDir = join(rootDir, 'src', 'typography');
const bootstrapFiles = [
  'bootstrap-ntg.css',
  'bootstrap-central.css',
];

console.log('📦 Processing Bootstrap typography files...');
bootstrapFiles.forEach((filename) => {
  const srcPath = join(typographyDir, filename);
  const destPath = join(distDir, filename);
  
  if (existsSync(srcPath)) {
    const css = readFileSync(srcPath, 'utf-8');
    const minified = minifyCSS(css);
    writeFileSync(destPath, minified);
    
    const originalSize = (css.length / 1024).toFixed(2);
    const minifiedSize = (minified.length / 1024).toFixed(2);
    const savings = ((1 - minified.length / css.length) * 100).toFixed(1);
    
    console.log(`  ✓ ${filename} (${originalSize}KB → ${minifiedSize}KB, -${savings}%)`);
  } else {
    console.warn(`  ⚠ Warning: ${filename} not found`);
  }
});

// Copy and minify Button component CSS files
const buttonDir = join(rootDir, 'src', 'components', 'Button');
const buttonFiles = [
  'Button.css',
  'Button-ntg.css',
  'Button-central.css',
];

console.log('📦 Processing Button component styles...');
buttonFiles.forEach((filename) => {
  const srcPath = join(buttonDir, filename);
  const destPath = join(distDir, filename);
  
  if (existsSync(srcPath)) {
    const css = readFileSync(srcPath, 'utf-8');
    const minified = minifyCSS(css);
    writeFileSync(destPath, minified);
    
    const originalSize = (css.length / 1024).toFixed(2);
    const minifiedSize = (minified.length / 1024).toFixed(2);
    const savings = ((1 - minified.length / css.length) * 100).toFixed(1);
    
    console.log(`  ✓ ${filename} (${originalSize}KB → ${minifiedSize}KB, -${savings}%)`);
  } else {
    console.warn(`  ⚠ Warning: ${filename} not found`);
  }
});

// Minify theme files
const themeFiles = [
  { src: 'ntg-theme.css', dest: 'ntg-theme.min.css' },
  { src: 'central-theme.css', dest: 'central-theme.min.css' },
];

console.log('📦 Minifying theme files...');
themeFiles.forEach(({ src, dest }) => {
  const srcPath = join(srcThemesDir, src);
  const destPath = join(distDir, dest);
  
  if (existsSync(srcPath)) {
    const css = readFileSync(srcPath, 'utf-8');
    const minified = minifyCSS(css);
    writeFileSync(destPath, minified);
    
    const originalSize = (css.length / 1024).toFixed(2);
    const minifiedSize = (minified.length / 1024).toFixed(2);
    const savings = ((1 - minified.length / css.length) * 100).toFixed(1);
    
    console.log(`  ✓ ${dest} (${originalSize}KB → ${minifiedSize}KB, -${savings}%)`);
  } else {
    console.warn(`  ⚠ Warning: ${src} not found`);
  }
});

console.log('\n✅ Theme files minified!\n');
console.log('📦 Distribution files in dist/:');
console.log('   • index.html              - Demo app HTML');
console.log('   • index.js                - Bundled React app');
console.log('   • index.css               - Bundled component styles');
console.log('   • bootstrap-ntg.css       - Bootstrap overrides for NT.GOV.AU');
console.log('   • bootstrap-central.css   - Bootstrap overrides for NTG Central');
console.log('   • Button.css              - Common button styles');
console.log('   • Button-ntg.css          - Button overrides for NT.GOV.AU');
console.log('   • Button-central.css      - Button overrides for NTG Central');
console.log('   • ntg-theme.min.css       - Minified NT.GOV.AU theme');
console.log('   • central-theme.min.css   - Minified NTG Central theme');
console.log('\n🚀 To test: npm run preview or open dist/index.html in a browser');
