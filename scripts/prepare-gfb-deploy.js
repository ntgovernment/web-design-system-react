#!/usr/bin/env node
/**
 * scripts/prepare-gfb-deploy.js
 *
 * Copies the Storybook `storybook-static/` build into a GFB-ready folder
 * at `gfb-package/webds/storybook/` so it can be committed or zipped for Git
 * File Bridge deployments.
 *
 * Usage: run `npm run prepare-storybook-gfb` (this script is invoked by that npm script)
 */
import { rmSync, mkdirSync, copyFileSync, readdirSync, statSync } from "fs";
import { join, resolve } from "path";

const root = resolve(process.cwd());
const buildDir = join(root, "storybook-static");
const outDir = join(root, "gfb-package", "webds", "storybook");

function copyRecursive(src, dest) {
  const stats = statSync(src);
  if (stats.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    for (const entry of readdirSync(src)) {
      copyRecursive(join(src, entry), join(dest, entry));
    }
  } else {
    copyFileSync(src, dest);
  }
}

try {
  // Ensure build exists
  statSync(buildDir);
} catch (err) {
  console.error(`Error: build directory not found: ${buildDir}`);
  console.error("Run `npm run build-storybook:squiz` first.");
  process.exit(1);
}

// Clear target
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

console.log(`Preparing GFB package: ${outDir}`);
copyRecursive(buildDir, outDir);

console.log("✓ GFB package prepared");
console.log("Next steps:");
console.log("  1) Review files in gfb-package/webds/storybook/");
console.log("  2) Copy or commit the files into your GFB repository as needed");
console.log(
  "  Example: cp -r gfb-package/webds/storybook/* /path/to/gfb-repo/webds/storybook/",
);
