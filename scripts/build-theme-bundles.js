#!/usr/bin/env node
/**
 * scripts/build-theme-bundles.js
 *
 * Assembles and minifies the self-contained theme CSS bundles written to dist/.
 *
 * Token CSS is read from `tokensCssDir`:
 *   node_modules/@ntgovernment/web-design-tokens/dist/css/
 *
 * Bundle contents (in cascade order):
 *   1. theme-{ntg|central}.bundled.css — self-contained token bundle
 *      (base-variables + common + grid + typography + typography-literals + theme palette)
 *   2. typography-{ntg|central}.css — Bootstrap typography overrides
 *   3. Component CSS       — all ComponentName.css base styles (auto-discovered)
 *   4. Component theme CSS — all ComponentName-{theme}.css overrides (auto-discovered)
 *
 * Output:
 *   dist/theme-ntg.min.css
 *   dist/theme-central.min.css
 *
 * Usage: node scripts/build-theme-bundles.js (invoked by build-dist.js)
 */

import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");
const tokensCssDir = join(
  rootDir,
  "node_modules",
  "@ntgovernment",
  "web-design-tokens",
  "dist",
  "css",
);

console.log("🎨 Building complete theme CSS bundles...\n");

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Simple CSS minifier
function minifyCSS(css) {
  return (
    css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Remove extra whitespace
      .replace(/\s+/g, " ")
      // Remove whitespace around special characters
      .replace(/\s*([{}:;,>+~])\s*/g, "$1")
      // Remove leading/trailing whitespace
      .trim()
  );
}

// Read CSS file safely
function readCSSFile(filePath) {
  if (existsSync(filePath)) {
    return readFileSync(filePath, "utf-8");
  } else {
    console.warn(`  ⚠ Warning: ${filePath} not found, skipping...`);
    return "";
  }
}

// Auto-discover all component CSS files from src/components/
const componentsDir = join(rootDir, "src", "components");

function discoverComponentCSS() {
  const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const baseFiles = [];
  const themeFiles = { ntg: [], central: [] };

  for (const dir of componentDirs) {
    const basePath = join(componentsDir, dir, `${dir}.css`);
    if (existsSync(basePath)) {
      baseFiles.push({ path: basePath, name: `${dir}.css` });
    }
    for (const theme of ["ntg", "central"]) {
      const themePath = join(componentsDir, dir, `${dir}-${theme}.css`);
      if (existsSync(themePath)) {
        themeFiles[theme].push({
          path: themePath,
          name: `${dir}-${theme}.css`,
        });
      }
    }
  }

  return { baseFiles, themeFiles };
}

const { baseFiles: componentCSS, themeFiles } = discoverComponentCSS();

// Theme configurations
const themes = [
  {
    name: "ntg",
    displayName: "NT.GOV.AU",
    themeFile: join(tokensCssDir, "themes", "theme-ntg.bundled.css"),
    bootstrapFile: join(tokensCssDir, "themes", "typography-ntg.css"),
    outputFile: "theme-ntg.min.css",
  },
  {
    name: "central",
    displayName: "NTG Central",
    themeFile: join(tokensCssDir, "themes", "theme-central.bundled.css"),
    bootstrapFile: join(tokensCssDir, "themes", "typography-central.css"),
    outputFile: "theme-central.min.css",
  },
];

// Build each theme bundle
themes.forEach((theme) => {
  console.log(`📦 Building ${theme.displayName} theme bundle...`);

  let cssBundle = "";

  // Add bundled theme CSS (self-contained: base-variables + common + grid +
  // typography + typography-literals + theme palette — all inlined)
  const themeContent = readCSSFile(theme.themeFile);
  if (themeContent) {
    cssBundle += `/* theme-${theme.name}.bundled.css */\n${themeContent}\n\n`;
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
  themeFiles[theme.name].forEach(({ path, name }) => {
    const content = readCSSFile(path);
    if (content) {
      cssBundle += `/* ${name} */\n${content}\n\n`;
    }
  });

  // Strip @import statements — all imported content is already concatenated above
  cssBundle = cssBundle.replace(/@import\s+['"][^'"]*['"]\s*;?/g, "");

  // Minify the bundle
  const minified = minifyCSS(cssBundle);

  // Write to dist
  const outputPath = join(distDir, theme.outputFile);
  writeFileSync(outputPath, minified);

  const originalSize = (cssBundle.length / 1024).toFixed(2);
  const minifiedSize = (minified.length / 1024).toFixed(2);
  const savings = ((1 - minified.length / cssBundle.length) * 100).toFixed(1);

  console.log(
    `  ✓ ${theme.outputFile} (${originalSize}KB → ${minifiedSize}KB, -${savings}%)`,
  );
});

console.log("\n✅ Complete theme CSS bundles created!");
console.log("   Each theme bundle includes all dependencies:");
console.log(
  "   • Bundled design tokens (base-variables, common, grid, typography, theme palette)",
);
console.log("   • Bootstrap overrides");
console.log("   • Component styles");
console.log("   • Component theme overrides");
