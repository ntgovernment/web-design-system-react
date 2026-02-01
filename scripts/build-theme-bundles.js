#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

console.log('🎨 Building complete theme CSS bundles...\n');

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

// Read CSS file safely
function readCSSFile(filePath) {
  if (existsSync(filePath)) {
    return readFileSync(filePath, 'utf-8');
  } else {
    console.warn(`  ⚠ Warning: ${filePath} not found, skipping...`);
    return '';
  }
}

// Define CSS files to include in order (dependencies first)
const cssOrder = [
  // Foundation - base CSS variables
  { path: join(rootDir, 'src', 'themes', 'base-variables.css'), name: 'base-variables.css' },
  // Common design tokens
  { path: join(rootDir, 'src', 'themes', 'common.css'), name: 'common.css' },
  // Grid system
  { path: join(rootDir, 'src', 'themes', 'grid.css'), name: 'grid.css' },
  // Typography base
  { path: join(rootDir, 'src', 'themes', 'typography.css'), name: 'typography.css' },
];

// Component CSS files (currently only Button)
const componentCSS = [
  { path: join(rootDir, 'src', 'components', 'Button', 'Button.css'), name: 'Button.css' },
  { path: join(rootDir, 'src', 'components', 'Tag', 'Tag.css'), name: 'Tag.css' },
];

// Theme configurations
const themes = [
  {
    name: 'ntg',
    displayName: 'NT.GOV.AU',
    themeFile: join(rootDir, 'src', 'themes', 'ntg-theme.css'),
    bootstrapFile: join(rootDir, 'src', 'typography', 'typography-ntg.css'),
    buttonTheme: join(rootDir, 'src', 'components', 'Button', 'Button-ntg.css'),
    tagTheme: join(rootDir, 'src', 'components', 'Tag', 'Tag-ntg.css'),
    outputFile: 'ntg-theme.min.css',
  },
  {
    name: 'central',
    displayName: 'NTG Central',
    themeFile: join(rootDir, 'src', 'themes', 'central-theme.css'),
    bootstrapFile: join(rootDir, 'src', 'typography', 'typography-central.css'),
    buttonTheme: join(rootDir, 'src', 'components', 'Button', 'Button-central.css'),
    tagTheme: join(rootDir, 'src', 'components', 'Tag', 'Tag-central.css'),
    outputFile: 'central-theme.min.css',
  },
];

// Build each theme bundle
themes.forEach(theme => {
  console.log(`📦 Building ${theme.displayName} theme bundle...`);
  
  let cssBundle = '';
  
  // Add common CSS files
  cssOrder.forEach(({ path, name }) => {
    const content = readCSSFile(path);
    if (content) {
      cssBundle += `/* ${name} */\n${content}\n\n`;
    }
  });
  
  // Add theme-specific CSS
  const themeContent = readCSSFile(theme.themeFile);
  if (themeContent) {
    cssBundle += `/* ${theme.name}-theme.css */\n${themeContent}\n\n`;
  }
  
  // Add Bootstrap typography overrides
  const bootstrapContent = readCSSFile(theme.bootstrapFile);
  if (bootstrapContent) {
    cssBundle += `/* bootstrap-${theme.name}.css */\n${bootstrapContent}\n\n`;
  }
  
  // Add component CSS
  componentCSS.forEach(({ path, name }) => {
    const content = readCSSFile(path);
    if (content) {
      cssBundle += `/* ${name} */\n${content}\n\n`;
    }
  });
  
  // Add component theme overrides
  const buttonThemeContent = readCSSFile(theme.buttonTheme);
  if (buttonThemeContent) {
    cssBundle += `/* Button-${theme.name}.css */\n${buttonThemeContent}\n\n`;
  }
  
  const tagThemeContent = readCSSFile(theme.tagTheme);
  if (tagThemeContent) {
    cssBundle += `/* Tag-${theme.name}.css */\n${tagThemeContent}\n\n`;
  }
  
  // Minify the bundle
  const minified = minifyCSS(cssBundle);
  
  // Write to dist
  const outputPath = join(distDir, theme.outputFile);
  writeFileSync(outputPath, minified);
  
  const originalSize = (cssBundle.length / 1024).toFixed(2);
  const minifiedSize = (minified.length / 1024).toFixed(2);
  const savings = ((1 - minified.length / cssBundle.length) * 100).toFixed(1);
  
  console.log(`  ✓ ${theme.outputFile} (${originalSize}KB → ${minifiedSize}KB, -${savings}%)`);
});

console.log('\n✅ Complete theme CSS bundles created!');
console.log('   Each theme bundle includes all dependencies:');
console.log('   • Base CSS variables');
console.log('   • Common design tokens');
console.log('   • Grid system');
console.log('   • Typography');
console.log('   • Theme-specific variables');
console.log('   • Bootstrap overrides');
console.log('   • Component styles');
console.log('   • Component theme overrides');
