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
 *        dist/favicons/*.png        Favicon assets
 *        dist/images/ntg-logo.png   NT Government logo
 *   7. Copy vendor files (consolidated from ntgbase GFB 1484642):
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
nesterFiles.forEach((name) => {
  copyFileSync(join(nestersSourceDir, name), join(nestersDir, name));
  console.log(`  ✓ Copied nesters/${name}`);
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

// Step 7: Copy vendor files (consolidated from ntgbase GFB 1484642)
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
