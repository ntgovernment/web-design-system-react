#!/usr/bin/env node

/**
 * Validate Token CSS
 *
 * Checks that the installed @ntgovernment/web-design-tokens package exposes
 * the expected theme files and that all CSS variable references within each
 * theme file point to variables defined in the same file.
 *
 * Reads from: node_modules/@ntgovernment/web-design-tokens/dist/css/themes/
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const tokensCssDir = join(rootDir, "node_modules", "@ntgovernment", "web-design-tokens", "dist", "css");
const files = [
  join(tokensCssDir, "themes", "theme-ntg.css"),
  join(tokensCssDir, "themes", "theme-central.css"),
];

let allValid = true;

for (const file of files) {
  const css = readFileSync(file, "utf-8");

  // Extract all defined CSS variables
  const defined = new Set(
    [...css.matchAll(/^\s*--([\w-]+):/gm)].map((m) => m[1]),
  );

  // Extract all CSS variable references
  const refs = [...css.matchAll(/var\(--([^)]+)\)/g)].map((m) => m[1]);

  // Find undefined references
  const undefined_refs = refs.filter((r) => !defined.has(r));

  if (undefined_refs.length === 0) {
    console.log(
      `✅ ${file}: All ${refs.length} CSS variable references are valid!`,
    );
  } else {
    console.log(
      `❌ ${file}: Found ${undefined_refs.length} undefined variable references:`,
    );
    const unique = [...new Set(undefined_refs)];
    unique.forEach((ref) => console.log(`   - --${ref}`));
    allValid = false;
  }
}

if (allValid) {
  console.log("\n✅ CSS validation passed!");
} else {
  console.log("\n❌ CSS validation failed - fix undefined references");
  process.exit(1);
}
