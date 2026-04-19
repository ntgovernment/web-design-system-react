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
 *   3. Component CSS       — Button, Tag, Input, SearchBar base styles
 *   4. Component theme CSS — per-theme overrides for each component
 *
 * Output:
 *   dist/theme-ntg.min.css
 *   dist/theme-central.min.css
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

// Component CSS files
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
  {
    path: join(rootDir, "src", "components", "GlobalAlert", "GlobalAlert.css"),
    name: "GlobalAlert.css",
  },
  {
    path: join(rootDir, "src", "components", "Header", "Header.css"),
    name: "Header.css",
  },
];

// Theme configurations
const themes = [
  {
    name: "ntg",
    displayName: "NT.GOV.AU",
    themeFile: join(tokensCssDir, "themes", "theme-ntg.bundled.css"),
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
    globalAlertTheme: join(
      rootDir,
      "src",
      "components",
      "GlobalAlert",
      "GlobalAlert-ntg.css",
    ),
    headerTheme: join(rootDir, "src", "components", "Header", "Header-ntg.css"),
    outputFile: "theme-ntg.min.css",
  },
  {
    name: "central",
    displayName: "NTG Central",
    themeFile: join(tokensCssDir, "themes", "theme-central.bundled.css"),
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
    globalAlertTheme: join(
      rootDir,
      "src",
      "components",
      "GlobalAlert",
      "GlobalAlert-central.css",
    ),
    headerTheme: join(
      rootDir,
      "src",
      "components",
      "Header",
      "Header-central.css",
    ),
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

  const globalAlertThemeContent = readCSSFile(theme.globalAlertTheme);
  if (globalAlertThemeContent) {
    cssBundle += `/* GlobalAlert-${theme.name}.css */\n${globalAlertThemeContent}\n\n`;
  }

  const headerThemeContent = readCSSFile(theme.headerTheme);
  if (headerThemeContent) {
    cssBundle += `/* Header-${theme.name}.css */\n${headerThemeContent}\n\n`;
  }

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
