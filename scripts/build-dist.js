#!/usr/bin/env node
/**
 * scripts/build-dist.js
 *
 * Main build orchestrator for @ntgovernment/web-design-system.
 *
 * Pipeline:
 *   1. Clean dist/
 *   2. Build component library (UMD) via Vite --mode library → dist/lib/
 *   3. Build demo application via Vite --mode demo → dist/demo/
 *   4. Build complete theme CSS bundles via build-theme-bundles.js
 *      (reads token CSS from node_modules/@ntgovernment/web-design-tokens)
 *   5. Organise final dist/ structure:
 *        dist/components.min.js     UMD component bundle
 *        dist/theme-ntg.min.css     Self-contained NT.GOV.AU theme bundle
 *        dist/theme-central.min.css Self-contained NTG Central theme bundle
 *        dist/index.html            Interactive demo
 *        dist/index.js / index.css  Demo app bundle
 *   6. Copy Squiz Matrix nester and asset files:
 *        dist/nesters/*.html        Squiz Matrix design nesters (5 files)
 *        - Replaces legacy GFB 1484642 references with current GFB 1607588
 *        dist/favicons/*.png        Favicon assets
 *        dist/images/ntg-logo.png   NT Government logo
 *   7. Copy vendor files (from src/squiz/vendor/):
 *        dist/globals/js/           Bootstrap, Typeahead, Handlebars, Funnelback JS
 *        dist/ntgbase/images/       NTG logos and icons (desert-rose, mono logo)
 *
 * Usage: node scripts/build-dist.js (invoked by `npm run build`)
 */

import { execSync } from "child_process";
import {
  readFileSync,
  writeFileSync,
  copyFileSync,
  renameSync,
  mkdirSync,
  existsSync,
  rmSync,
  readdirSync,
} from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");
const distLibDir = join(rootDir, "dist", "lib");
const distDemoDir = join(rootDir, "dist", "demo");

console.log("🔨 Building NT Government Web Design System...\n");

// Step 1: Clean dist directory
console.log("🧹 Cleaning dist directory...");
if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}
mkdirSync(distDir, { recursive: true });
console.log("  ✓ Cleaned dist/\n");

// Step 2: Build library (components.umd.js)
console.log("📦 Building component library (UMD)...");
try {
  execSync("vite build --mode library", {
    cwd: rootDir,
    stdio: "inherit",
  });
  console.log("  ✓ Library built to dist/lib/\n");
} catch (error) {
  console.error("  ✗ Library build failed");
  process.exit(1);
}

// Step 3: Build demo application
console.log("📦 Building demo application...");
try {
  execSync("vite build --mode demo", {
    cwd: rootDir,
    stdio: "inherit",
  });
  console.log("  ✓ Demo built to dist/demo/\n");
} catch (error) {
  console.error("  ✗ Demo build failed");
  process.exit(1);
}

// Step 4: Build complete theme CSS bundles
console.log("🎨 Building complete theme CSS bundles...");
try {
  execSync("node scripts/build-theme-bundles.js", {
    cwd: rootDir,
    stdio: "inherit",
  });
  console.log("");
} catch (error) {
  console.error("  ✗ Theme bundle build failed");
  process.exit(1);
}

// Step 5: Organize files into final dist structure
console.log("📂 Organizing distribution files...\n");

// Move library file: dist/lib/components.umd.js or .cjs -> dist/components.min.js
let libFile = join(distLibDir, "components.umd.js");
if (!existsSync(libFile)) {
  libFile = join(distLibDir, "components.umd.cjs"); // Vite may use .cjs extension
}
if (existsSync(libFile)) {
  copyFileSync(libFile, join(distDir, "components.min.js"));
  console.log("  ✓ Moved components.umd.* → components.min.js");
} else {
  console.warn("  ⚠ Warning: components.umd.js or .cjs not found in dist/lib/");
}

// Move demo files from dist/demo/ to dist/
const demoFiles = ["index.html", "index.js", "index.css"];
demoFiles.forEach((file) => {
  const srcPath = join(distDemoDir, file);
  const destPath = join(distDir, file);
  if (existsSync(srcPath)) {
    if (file === "index.html") {
      // Transform index.html to use bundled theme CSS
      let html = readFileSync(srcPath, "utf-8");

      // Vite strips out individual CSS links during build, so we need to add back the theme CSS
      // Insert theme CSS link after Bootstrap CDN link
      html = html.replace(
        /(<!-- Bootstrap 5\.3[^>]*>\n\s*<link[^>]*bootstrap[^>]*>\n)/,
        '$1  <!-- Theme CSS - Complete bundle with all dependencies (swapped during theme switching) -->\n  <link id="theme-css" href="theme-ntg.min.css" rel="stylesheet">\n',
      );

      writeFileSync(destPath, html);
      console.log(
        `  ✓ Moved demo/${file} → ${file} (transformed for production)`,
      );
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`  ✓ Moved demo/${file} → ${file}`);
    }
  } else {
    console.warn(`  ⚠ Warning: ${file} not found in dist/demo/`);
  }
});

// Clean up temporary directories
console.log("\n🧹 Cleaning up temporary build directories...");
if (existsSync(distLibDir)) {
  rmSync(distLibDir, { recursive: true, force: true });
  console.log("  ✓ Removed dist/lib/");
}
if (existsSync(distDemoDir)) {
  rmSync(distDemoDir, { recursive: true, force: true });
  console.log("  ✓ Removed dist/demo/");
}

// Clean up unused CSS directory if it exists
const unusedDir = join(distDir, "unused");
if (existsSync(unusedDir)) {
  rmSync(unusedDir, { recursive: true, force: true });
  console.log("  ✓ Removed dist/unused/");
}

// Step 6: Copy Squiz Matrix nester and asset files
console.log("\n📄 Copying Squiz Matrix nester files...");
const nestersDir = join(distDir, "nesters");
const nestersSourceDir = join(rootDir, "src", "squiz", "nesters");
mkdirSync(nestersDir, { recursive: true });

const nesterFiles = [
  "head.html",
  "skip_links.html",
  "header_content.html",
  "footer_content.html",
  "footer_js.html",
];
// GFB asset ID for all nester references (CSS/JS bundles, images, etc.)
const GFB_ASSET_ID = "1607588";
const LEGACY_GFB_ID = "1484642";

nesterFiles.forEach((name) => {
  const srcPath = join(nestersSourceDir, name);
  let content = readFileSync(srcPath, "utf-8");
  if (content.includes(LEGACY_GFB_ID)) {
    content = content.replaceAll(LEGACY_GFB_ID, GFB_ASSET_ID);
    console.log(
      `  ✓ Copied nesters/${name} (updated GFB ${LEGACY_GFB_ID} → ${GFB_ASSET_ID})`,
    );
  } else {
    console.log(`  ✓ Copied nesters/${name}`);
  }
  writeFileSync(join(nestersDir, name), content);
});

// Create favicons directory with placeholder files
// Replace these with real favicon PNGs before deployment
console.log("\n🖼️  Creating favicons directory...");
const faviconsDir = join(distDir, "favicons");
mkdirSync(faviconsDir, { recursive: true });
const favicons = [
  "apple-touch-icon-180x180.png",
  "favicon-32x32.png",
  "favicon-16x16.png",
];
favicons.forEach((name) => {
  writeFileSync(join(faviconsDir, name), "");
  console.log(`  ✓ Created favicons/${name} (placeholder)`);
});

// Create images directory with placeholder files
// Replace these with real images before deployment
console.log("\n🖼️  Creating images directory...");
const imagesDir = join(distDir, "images");
mkdirSync(imagesDir, { recursive: true });
const images = ["ntg-logo.png"];
images.forEach((name) => {
  writeFileSync(join(imagesDir, name), "");
  console.log(`  ✓ Created images/${name} (placeholder)`);
});

// Step 7: Copy Squiz DXP Page Layouts (manifest.json + markup.hbs per layout)
console.log("\n🧱 Copying Squiz DXP page layouts...");
const layoutsSourceDir = join(rootDir, "src", "squiz", "layouts");
const layoutsDestDir = join(distDir, "layouts");
function copyLayoutsRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      // Skip per-layout mock content used only for local testing.
      if (entry.name === "mock") continue;
      copyLayoutsRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`  ✓ Copied ${destPath.replace(distDir, "dist")}`);
    }
  }
}
if (existsSync(layoutsSourceDir)) {
  copyLayoutsRecursive(layoutsSourceDir, layoutsDestDir);
}

// Step 7b: Copy Squiz DXP Component Service components
//
// Each React component may ship a `dxp/` subfolder containing a Squiz DXP
// Component Service package (manifest.json + main.js + example data + README).
// Walk src/components/*/dxp/ and copy each to dist/components/<name>/.
console.log("\n🧩 Copying Squiz DXP component services...");
const reactComponentsDir = join(rootDir, "src", "components");
const componentsDestDir = join(distDir, "components");
mkdirSync(componentsDestDir, { recursive: true });
function copyDxpRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      // Skip the locally-populated preview assets folder — wrapper resources
      // are sourced from the main dist/ at runtime, not shipped per-component.
      if (entry.name === "_assets") continue;
      copyDxpRecursive(srcPath, destPath);
    } else {
      // Skip files only relevant to local development.
      if (entry.name === "preview.html") continue;
      copyFileSync(srcPath, destPath);
      console.log(`  ✓ Copied ${destPath.replace(distDir, "dist")}`);
    }
  }
}
const dxpComponents = [];
if (existsSync(reactComponentsDir)) {
  for (const entry of readdirSync(reactComponentsDir, {
    withFileTypes: true,
  })) {
    if (!entry.isDirectory()) continue;
    const dxpDir = join(reactComponentsDir, entry.name, "dxp");
    if (!existsSync(join(dxpDir, "manifest.json"))) continue;
    // Use the manifest `name` field as the slug so the dist directory matches
    // the DXP component name (e.g. "global-alert" not "globalalert").
    let slug;
    try {
      const manifest = JSON.parse(
        readFileSync(join(dxpDir, "manifest.json"), "utf8"),
      );
      slug = manifest.name || entry.name.toLowerCase();
    } catch {
      slug = entry.name.toLowerCase();
    }
    copyDxpRecursive(dxpDir, join(componentsDestDir, slug));
    dxpComponents.push(slug);
  }
}

// Step 7c: Build the client-side hydration bundle (dist/hydrate.min.js)
console.log("\n💧 Building client-side hydration bundle...");
try {
  execSync("vite build --mode hydrate", { cwd: rootDir, stdio: "inherit" });
  const hydrateBuildDir = join(distDir, "hydrate-build");
  // Vite emits hydrate.iife.js (or hydrate.iife.cjs); rename to hydrate.min.js
  const candidates = ["hydrate.iife.js", "hydrate.iife.cjs", "hydrate.js"];
  let found = null;
  for (const candidate of candidates) {
    const p = join(hydrateBuildDir, candidate);
    if (existsSync(p)) {
      found = p;
      break;
    }
  }
  if (found) {
    copyFileSync(found, join(distDir, "hydrate.min.js"));
    console.log("  ✓ Built dist/hydrate.min.js");
  } else {
    console.warn("  ⚠ Hydrate bundle output not found in dist/hydrate-build/");
  }
  if (existsSync(hydrateBuildDir)) {
    rmSync(hydrateBuildDir, { recursive: true, force: true });
  }
} catch (error) {
  console.error("  ✗ Hydrate bundle build failed");
  process.exit(1);
}

// Step 7d: Inline preview wrapper stylesheets.
//
// The Squiz component-service dev-ui only resolves fully qualified URLs from
// preview wrapper HTML (relative paths 404 with `text/html` MIME). For each
// DXP component that ships a `previews/wrapper.html` containing the marker
//   <!-- INLINE_THEME_CSS_START --> ... <!-- INLINE_THEME_CSS_END -->
// inline the contents of `dist/theme-ntg.min.css` between the markers in the
// dist copy so `npm run cmp-dev` loads the styles successfully. The source
// wrapper keeps its placeholder so it stays diff-friendly.
console.log("\n🎨 Inlining theme CSS into preview wrappers...");
const themeCssPath = join(distDir, "theme-ntg.min.css");
const inlineMarkerStart = "<!-- INLINE_THEME_CSS_START -->";
const inlineMarkerEnd = "<!-- INLINE_THEME_CSS_END -->";
if (existsSync(themeCssPath)) {
  const themeCss = readFileSync(themeCssPath, "utf-8");
  for (const slug of dxpComponents) {
    const wrapperPath = join(
      componentsDestDir,
      slug,
      "previews",
      "wrapper.html",
    );
    if (!existsSync(wrapperPath)) continue;
    let html = readFileSync(wrapperPath, "utf-8");
    const startIdx = html.indexOf(inlineMarkerStart);
    const endIdx = html.indexOf(inlineMarkerEnd);
    if (startIdx === -1 || endIdx === -1) continue;
    const before = html.slice(0, startIdx + inlineMarkerStart.length);
    const after = html.slice(endIdx);
    html = `${before}\n    <style>\n${themeCss}\n    </style>\n    ${after}`;
    writeFileSync(wrapperPath, html);
    console.log(
      `  ✓ Inlined theme CSS into dist/components/${slug}/previews/wrapper.html`,
    );
  }
} else {
  console.warn("  ⚠ dist/theme-ntg.min.css not found; skipping inline step.");
}

// Clean up any legacy `_assets/` folders left over from the previous
// hydration-runtime workflow so they don't get committed.
for (const entry of readdirSync(reactComponentsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const legacyAssetsDir = join(
    reactComponentsDir,
    entry.name,
    "dxp",
    "previews",
    "_assets",
  );
  if (existsSync(legacyAssetsDir)) {
    rmSync(legacyAssetsDir, { recursive: true, force: true });
  }
}

// Step 8: Copy vendor files (consolidated from ntgbase GFB 1484642)
console.log("\n📦 Copying vendor files...");
const vendorSourceDir = join(rootDir, "src", "squiz", "vendor");
function copyDirRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`  ✓ Copied ${destPath.replace(distDir, "dist")}`);
    }
  }
}
if (existsSync(vendorSourceDir)) {
  copyDirRecursive(vendorSourceDir, distDir);
}

// Display final build summary
console.log("\n✅ Build complete!\n");
console.log("📦 Distribution files in dist/:");
console.log("   ┌─ Component Library (for Squiz Matrix deployment)");
console.log(
  "   ├─ components.min.js       - UMD component bundle (React external)",
);
console.log("   ├─ hydrate.min.js          - DXP component hydration runtime");
console.log("   ├─ theme-ntg.min.css       - Complete NT.GOV.AU theme bundle");
console.log(
  "   ├─ theme-central.min.css   - Complete NTG Central theme bundle",
);
console.log("   ┌─ Demo Application");
console.log("   ├─ index.html              - Demo page with theme switching");
console.log("   ├─ index.js                - Demo application bundle");
console.log("   ├─ index.css               - Demo application styles");
console.log("   ┌─ Squiz Matrix Nesters (dist/nesters/)");
console.log("   ├─ head.html               - <head> nest content");
console.log("   ├─ skip_links.html         - Skip links nest content");
console.log("   ├─ header_content.html     - Header nest content");
console.log("   ├─ footer_content.html     - Footer nest content");
console.log("   └─ footer_js.html          - Footer JS nest content");
console.log("   ┌─ Squiz DXP Page Layouts (dist/layouts/)");
console.log(
  "   └─ full-width-section/     - Single column / 3 zones (header, main, footer)",
);
console.log("   ┌─ Squiz DXP Components (dist/components/)");
for (let i = 0; i < dxpComponents.length; i++) {
  const prefix = i === dxpComponents.length - 1 ? "└─" : "├─";
  console.log(`   ${prefix} ${dxpComponents[i]}/`);
}
console.log("   ┌─ Vendor Files (consolidated from ntgbase)");
console.log("   ├─ globals/js/             - Bootstrap, jQuery, Funnelback JS");
console.log("   └─ ntgbase/images/         - NTG logos and icons");

// Display file sizes
console.log("\n📊 File sizes:");
const filesToMeasure = [
  "components.min.js",
  "theme-ntg.min.css",
  "theme-central.min.css",
  "index.html",
  "index.js",
  "index.css",
];

filesToMeasure.forEach((file) => {
  const filePath = join(distDir, file);
  if (existsSync(filePath)) {
    const stats = readFileSync(filePath);
    const sizeKB = (stats.length / 1024).toFixed(2);
    console.log(`   ${file.padEnd(25)} ${sizeKB.padStart(8)} KB`);
  }
});

console.log("\n🚀 Ready for deployment!");
console.log("   • To test demo: npm run preview or open dist/index.html");
console.log(
  "   • To deploy to Squiz Matrix: Upload dist/ files as File Assets",
);
