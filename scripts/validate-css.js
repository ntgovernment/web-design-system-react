#!/usr/bin/env node

/**
 * Validate Generated CSS
 * 
 * Checks that all CSS variable references point to defined variables
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const files = [
  'src/themes/ntg-theme.css',
  'src/themes/central-theme.css'
];

let allValid = true;

for (const file of files) {
  const css = readFileSync(join(rootDir, file), 'utf-8');
  
  // Extract all defined CSS variables
  const defined = new Set(
    [...css.matchAll(/^\s*--([\w-]+):/gm)].map(m => m[1])
  );
  
  // Extract all CSS variable references
  const refs = [...css.matchAll(/var\(--([^)]+)\)/g)].map(m => m[1]);
  
  // Find undefined references
  const undefined_refs = refs.filter(r => !defined.has(r));
  
  if (undefined_refs.length === 0) {
    console.log(`✅ ${file}: All ${refs.length} CSS variable references are valid!`);
  } else {
    console.log(`❌ ${file}: Found ${undefined_refs.length} undefined variable references:`);
    const unique = [...new Set(undefined_refs)];
    unique.forEach(ref => console.log(`   - --${ref}`));
    allValid = false;
  }
}

if (allValid) {
  console.log('\n✅ CSS validation passed!');
} else {
  console.log('\n❌ CSS validation failed - fix undefined references');
  process.exit(1);
}
