#!/usr/bin/env node
/**
 * scripts/prepare-all-dxp.js
 *
 * Discovers every DXP component under `src/components/<Name>/dxp/manifest.json`
 * and stages each into `dist/components/<manifest.name>/`, inlining the
 * NT Gov theme CSS into `previews/wrapper.html` between the
 *   <!-- INLINE_THEME_CSS_START --> / <!-- INLINE_THEME_CSS_END -->
 * markers (same logic as the per-component prepare scripts).
 *
 * Why staged copies?
 *   The Squiz DXP CLI requires a flat directory containing manifest.json +
 *   main.js + previews/ with theme CSS already inlined. We can't point it
 *   at `src/components/<Name>/dxp/` directly because the wrapper.html there
 *   only contains a placeholder marker. This script keeps `src/` as the
 *   source of truth and produces the staged copy on demand.
 *
 * Used by `npm run cmp-prepare` and (transitively) `npm run cmp-dev`,
 * which points the DXP dev-ui at `dist/components/` — every staged
 * component then appears in a single preview UI.
 *
 * Usage: node scripts/prepare-all-dxp.js
 */
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = join(root, "src", "components");
const distComponentsDir = join(root, "dist", "components");

const SKIP_FILES = new Set(["preview.html"]);
const SKIP_DIRS = new Set([".wrangler", "_assets"]);

const themeCandidates = [
  join(root, "dist", "theme-ntg.min.css"),
  join(root, "Standard website template_files", "theme-ntg.min.css"),
];
const themePath = themeCandidates.find(existsSync);
const themeCss = themePath ? readFileSync(themePath, "utf8") : null;

function relPath(p) {
  return p.replace(root + "/", "").replace(root + "\\", "");
}

function copyRecursive(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      copyRecursive(join(srcDir, entry.name), join(destDir, entry.name));
    } else {
      if (SKIP_FILES.has(entry.name)) continue;
      copyFileSync(join(srcDir, entry.name), join(destDir, entry.name));
    }
  }
}

function inlineThemeCss(wrapperPath) {
  if (!existsSync(wrapperPath)) return false;
  if (!themeCss) return false;
  let html = readFileSync(wrapperPath, "utf8");
  const START = "<!-- INLINE_THEME_CSS_START -->";
  const END = "<!-- INLINE_THEME_CSS_END -->";
  const s = html.indexOf(START);
  const e = html.indexOf(END);
  if (s === -1 || e === -1) return false;
  html =
    html.slice(0, s + START.length) +
    `\n    <style>\n${themeCss}\n    </style>\n    ` +
    html.slice(e);
  writeFileSync(wrapperPath, html);
  return true;
}

function discoverComponents() {
  if (!existsSync(componentsDir)) return [];
  const found = [];
  for (const entry of readdirSync(componentsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const dxpDir = join(componentsDir, entry.name, "dxp");
    const manifestPath = join(dxpDir, "manifest.json");
    if (!existsSync(manifestPath)) continue;
    let manifest;
    try {
      manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    } catch (err) {
      console.warn(
        `  ⚠ Skipping ${entry.name}: invalid manifest.json (${err.message})`,
      );
      continue;
    }
    const name = manifest.name || entry.name.toLowerCase();
    found.push({ folder: entry.name, dxpDir, name });
  }
  return found.sort((a, b) => a.name.localeCompare(b.name));
}

console.log("🧩 Preparing all DXP components...");

if (!themePath) {
  console.warn(
    "  ⚠ theme-ntg.min.css not found — wrappers will keep placeholder styles.",
  );
} else {
  console.log(`  ℹ Theme CSS: ${relPath(themePath)}`);
}

const components = discoverComponents();
if (components.length === 0) {
  console.warn("  ⚠ No DXP components found under src/components/*/dxp/.");
  process.exit(0);
}

for (const cmp of components) {
  const dest = join(distComponentsDir, cmp.name);
  console.log(`\n  → ${cmp.folder} → ${relPath(dest)}`);
  copyRecursive(cmp.dxpDir, dest);
  const wrapperPath = join(dest, "previews", "wrapper.html");
  if (inlineThemeCss(wrapperPath)) {
    console.log(`    ✓ Inlined theme CSS`);
  } else if (existsSync(wrapperPath)) {
    console.log(`    · No CSS markers in wrapper.html — left as-is`);
  }
}

console.log(
  `\n✅ Prepared ${components.length} component(s) under dist/components/.`,
);
console.log("   Run:  npm run cmp-dev   — to preview all components in dev-ui");
