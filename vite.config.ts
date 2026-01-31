import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// Plugin to copy theme CSS files to dist for demo app
function copyThemeFiles() {
  return {
    name: 'copy-theme-files',
    writeBundle() {
      const dist = resolve(__dirname, 'dist');
      const srcTypography = resolve(__dirname, 'src/typography');
      const srcThemes = resolve(__dirname, 'src/themes');
      
      // Ensure dist exists
      if (!existsSync(dist)) {
        mkdirSync(dist, { recursive: true });
      }
      
      // Copy Bootstrap typography files (will be minified by build-dist.js)
      const typographyFiles = ['bootstrap-ntg.css', 'bootstrap-central.css'];
      typographyFiles.forEach(file => {
        const src = resolve(srcTypography, file);
        const dest = resolve(dist, file);
        if (existsSync(src)) {
          copyFileSync(src, dest);
          console.log(`✓ Copied ${file} to dist/`);
        }
      });
      
      // Copy theme files (will be minified by build-dist.js)
      const themeFiles = ['ntg-theme.css', 'central-theme.css'];
      themeFiles.forEach(file => {
        const src = resolve(srcThemes, file);
        const dest = resolve(dist, file);
        if (existsSync(src)) {
          copyFileSync(src, dest);
          console.log(`✓ Copied ${file} to dist/`);
        }
      });
      
      // Post-process index.html to remove ./ prefix for consistency
      const htmlPath = resolve(dist, 'index.html');
      if (existsSync(htmlPath)) {
        let html = readFileSync(htmlPath, 'utf-8');
        // Remove ./ from src and href attributes
        html = html.replace(/src="\.\//g, 'src="');
        html = html.replace(/href="\.\//g, 'href="');
        writeFileSync(htmlPath, html);
        console.log(`✓ Cleaned paths in index.html`);
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyThemeFiles()],
  base: './', // Use relative paths for local file access
  build: {
    target: "es2020",
    outDir: "dist",
    emptyOutDir: true,
    minify: true,
    cssMinify: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        // Generate files in root of dist/ for local file access
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
