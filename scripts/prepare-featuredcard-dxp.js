#!/usr/bin/env node
/**
 * scripts/prepare-featuredcard-dxp.js
 *
 * Copies the FeaturedCard DXP component source from
 * src/components/FeaturedCard/dxp/ to dist/components/featured-card/ without
 * wiping the rest of dist/.
 *
 * Also inlines the NT Gov theme CSS into the preview wrapper between
 *   <!-- INLINE_THEME_CSS_START --> and <!-- INLINE_THEME_CSS_END -->
 *
 * Theme CSS is sourced from (in priority order):
 *   1. dist/theme-ntg.min.css
 *   2. Standard website template_files/theme-ntg.min.css (fallback)
 *
 * Run this before `npm run cmp-featuredcard-dev` or
 * `npm run cmp-featuredcard-deploy` whenever a full `npm run build` cannot
 * complete (e.g. dist/ files locked by running dev servers).
 *
 * Usage: node scripts/prepare-featuredcard-dxp.js
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
const src = join(root, "src", "components", "FeaturedCard", "dxp");
const dest = join(root, "dist", "components", "featured-card");

// Files/dirs skipped during copy (matches build-dist.js behaviour).
const SKIP_FILES = new Set(["preview.html"]);
const SKIP_DIRS = new Set([".wrangler", "_assets"]);

function copyRecursive(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      copyRecursive(join(srcDir, entry.name), join(destDir, entry.name));
    } else {
      if (SKIP_FILES.has(entry.name)) continue;
      copyFileSync(join(srcDir, entry.name), join(destDir, entry.name));
      console.log(
        `  ✓ ${join(destDir, entry.name)
          .replace(root + "/", "")
          .replace(root + "\\", "")}`,
      );
    }
  }
}

console.log("🧩 Preparing Featured Card DXP component...");
copyRecursive(src, dest);

// Inline theme CSS into dist/components/featured-card/previews/wrapper.html
const wrapperPath = join(dest, "previews", "wrapper.html");
if (existsSync(wrapperPath)) {
  const themeCandidates = [
    join(root, "dist", "theme-ntg.min.css"),
    join(root, "Standard website template_files", "theme-ntg.min.css"),
  ];
  const themePath = themeCandidates.find(existsSync);
  if (!themePath) {
    console.warn(
      "  ⚠ theme-ntg.min.css not found — wrapper will keep placeholder styles.",
    );
  } else {
    const themeCss = readFileSync(themePath, "utf8");
    let html = readFileSync(wrapperPath, "utf8");
    const START = "<!-- INLINE_THEME_CSS_START -->";
    const END = "<!-- INLINE_THEME_CSS_END -->";
    const s = html.indexOf(START);
    const e = html.indexOf(END);
    if (s !== -1 && e !== -1 && e > s) {
      html =
        html.slice(0, s + START.length) +
        `\n    <style>\n${themeCss}\n    </style>\n    ` +
        html.slice(e);
      writeFileSync(wrapperPath, html, "utf8");
      console.log("  ✓ Theme CSS inlined into previews/wrapper.html");
    } else {
      console.warn(
        "  ⚠ Inline CSS markers not found in wrapper.html — skipping theme injection.",
      );
    }
  }
}

console.log(
  "✅ Featured Card DXP component ready at dist/components/featured-card/",
);
