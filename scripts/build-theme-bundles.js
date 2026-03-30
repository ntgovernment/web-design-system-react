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
 *   1. base-variables.css  — semantic unprefixed variable mappings
 *   2. common.css          — spacing, shadows, borders, radii
 *   3. grid.css            — Bootstrap grid configuration
 *   4. typography.css      — typography scale variables
 *   5. theme-{ntg|central}.css  — palette + semantic color mappings
 *   6. typography-{ntg|central}.css — Bootstrap typography overrides
 *   7. Component CSS       — Button, Tag, Input, SearchBar base styles
 *   8. Component theme CSS — per-theme overrides for each component
 *
 * Output:
 *   dist/ntg-theme.min.css
 *   dist/central-theme.min.css
 *
 * Usage: node scripts/build-theme-bundles.js (invoked by build-dist.js)
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");
const tokensCssDir = join(rootDir, "node_modules", "@ntgovernment", "web-design-tokens", "dist", "css");

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

// Define CSS files to include in order (dependencies first)
const cssOrder = [
  // Foundation - base CSS variables
  {
    path: join(tokensCssDir, "base-variables.css"),
    name: "base-variables.css",
  },
  // Common design tokens
  { path: join(tokensCssDir, "common.css"), name: "common.css" },
  // Grid system
  { path: join(tokensCssDir, "grid.css"), name: "grid.css" },
  // Typography base
  {
    path: join(tokensCssDir, "typography.css"),
    name: "typography.css",
  },
];

// Component CSS files (currently only Button)
const componentCSS = [
  {
    path: join(rootDir, "src", "components", "Button", "Button.css"),
    name: "Button.css",
  },
  {
    path: join(rootDir, "src", "components", "Tag", "Tag.css"),
    name: "Tag.css",
  },
  {
    path: join(rootDir, "src", "components", "Input", "Input.css"),
    name: "Input.css",
  },
  {
    path: join(rootDir, "src", "components", "SearchBar", "SearchBar.css"),
    name: "SearchBar.css",
  },
];

// Theme configurations
const themes = [
  {
    name: "ntg",
    displayName: "NT.GOV.AU",
    themeFile: join(tokensCssDir, "themes", "theme-ntg.css"),
    bootstrapFile: join(tokensCssDir, "themes", "typography-ntg.css"),
    buttonTheme: join(rootDir, "src", "components", "Button", "Button-ntg.css"),
    tagTheme: join(rootDir, "src", "components", "Tag", "Tag-ntg.css"),
    inputTheme: join(rootDir, "src", "components", "Input", "Input-ntg.css"),
    searchBarTheme: join(
      rootDir,
      "src",
      "components",
      "SearchBar",
      "SearchBar-ntg.css",
    ),
    outputFile: "ntg-theme.min.css",
  },
  {
    name: "central",
    displayName: "NTG Central",
    themeFile: join(tokensCssDir, "themes", "theme-central.css"),
    bootstrapFile: join(tokensCssDir, "themes", "typography-central.css"),
    buttonTheme: join(
      rootDir,
      "src",
      "components",
      "Button",
      "Button-central.css",
    ),
    tagTheme: join(rootDir, "src", "components", "Tag", "Tag-central.css"),
    inputTheme: join(
      rootDir,
      "src",
      "components",
      "Input",
      "Input-central.css",
    ),
    searchBarTheme: join(
      rootDir,
      "src",
      "components",
      "SearchBar",
      "SearchBar-central.css",
    ),
    outputFile: "central-theme.min.css",
  },
];

// Build each theme bundle
themes.forEach((theme) => {
  console.log(`📦 Building ${theme.displayName} theme bundle...`);

  let cssBundle = "";

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

  const inputThemeContent = readCSSFile(theme.inputTheme);
  if (inputThemeContent) {
    cssBundle += `/* Input-${theme.name}.css */\n${inputThemeContent}\n\n`;
  }

  const searchBarThemeContent = readCSSFile(theme.searchBarTheme);
  if (searchBarThemeContent) {
    cssBundle += `/* SearchBar-${theme.name}.css */\n${searchBarThemeContent}\n\n`;
  }

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
console.log("   • Base CSS variables");
console.log("   • Common design tokens");
console.log("   • Grid system");
console.log("   • Typography");
console.log("   • Theme-specific variables");
console.log("   • Bootstrap overrides");
console.log("   • Component styles");
console.log("   • Component theme overrides");
