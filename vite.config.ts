import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, join } from "path";

// Resolve bundled token CSS — Vite's package exports resolver doesn't handle
// the ".bundled.css" file extension in the exports map, so we alias directly.
const tokensCssThemesDir = join(
  __dirname,
  "node_modules",
  "@ntgovernment",
  "web-design-tokens",
  "dist",
  "css",
  "themes",
);
const bundledTokenAliases = {
  "@ntgovernment/web-design-tokens/css/theme-ntg-bundled": join(
    tokensCssThemesDir,
    "theme-ntg.bundled.css",
  ),
  "@ntgovernment/web-design-tokens/css/theme-central-bundled": join(
    tokensCssThemesDir,
    "theme-central.bundled.css",
  ),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibraryMode = mode === "library";

  if (isLibraryMode) {
    // Library build configuration - generates components.umd.js
    return {
      plugins: [react()],
      resolve: { alias: bundledTokenAliases },
      build: {
        target: "es2020",
        outDir: "dist/lib",
        emptyOutDir: true,
        minify: "esbuild",
        sourcemap: false,
        lib: {
          entry: resolve(__dirname, "src/index.ts"),
          name: "NTGDesignSystem",
          fileName: "components",
          formats: ["umd"],
        },
        rollupOptions: {
          // Externalize React and ReactDOM - they should be loaded separately
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
            // Prevent CSS from being generated in library mode
            assetFileNames: (assetInfo) => {
              // Skip CSS output in library mode
              if (assetInfo.name && assetInfo.name.endsWith(".css")) {
                return "unused/[name].[ext]";
              }
              return "[name].[ext]";
            },
          },
        },
      },
    };
  } else {
    // Demo build configuration - generates index.html, index.js, index.css
    return {
      plugins: [react()],
      resolve: { alias: bundledTokenAliases },
      base: "./",
      server: {
        fs: {
          // Allow serving node_modules CSS for dev-mode theme switching
          allow: [".."],
        },
      },
      build: {
        target: "es2020",
        outDir: "dist/demo",
        emptyOutDir: true,
        minify: "esbuild",
        cssMinify: true,
        sourcemap: false,
        rollupOptions: {
          output: {
            entryFileNames: "index.js",
            chunkFileNames: "[name].js",
            assetFileNames: "[name].[ext]",
          },
        },
      },
    };
  }
});
