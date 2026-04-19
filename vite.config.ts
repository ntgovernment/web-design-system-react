import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, join } from "path";
import { readFileSync } from "fs";

/**
 * Vite plugin that serves /squiz-preview.html by assembling the Squiz Matrix
 * design-parse template with the local nester HTML files. Edits to any nester
 * are reflected immediately on reload.
 */
function squizPreviewPlugin(): Plugin {
  const nestersDir = resolve(__dirname, "src/squiz/nesters");
  const designParsePath = resolve(__dirname, "src/squiz/design-parse.html");

  return {
    name: "squiz-preview",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== "/squiz-preview.html" && req.url !== "/squiz-preview") {
          return next();
        }

        try {
          let html = readFileSync(designParsePath, "utf-8");

          // Replace each <script runat="server">print(`%globals_asset_contents_raw:...:dist/nesters/<name>.html%`);</script>
          // with the contents of the corresponding local nester file
          html = html.replace(
            /<!--(<MySource_AREA[^>]*\/>)-->\s*\n\s*<script runat="server">\s*print\(`%globals_asset_contents_raw:\d+:dist\/nesters\/([^%]+)%`\);\s*<\/script>/g,
            (_match, comment, nesterFile) => {
              const nesterPath = join(nestersDir, nesterFile);
              const content = readFileSync(nesterPath, "utf-8");
              return `<!-- ${comment} -->\n${content}`;
            },
          );

          // Also handle the head nester (no preceding MySource_AREA comment)
          html = html.replace(
            /<script runat="server">\s*print\(`%globals_asset_contents_raw:\d+:dist\/nesters\/([^%]+)%`\);\s*<\/script>/g,
            (_match, nesterFile) => {
              const nesterPath = join(nestersDir, nesterFile);
              return readFileSync(nesterPath, "utf-8");
            },
          );

          // Remove the MySource_AREA body tag (not a nester)
          html = html.replace(
            /<MySource_AREA[^/]*\/>/g,
            "<!-- body content area -->",
          );

          // Rewrite relative asset paths from nesters to project root
          html = html.replace(
            /\.\/Standard website template_files\//g,
            "/Standard website template_files/",
          );

          res.setHeader("Content-Type", "text/html");
          res.end(html);
        } catch (e: unknown) {
          const message = e instanceof Error ? e.message : String(e);
          res.statusCode = 500;
          res.end(`<pre>Error assembling squiz preview:\n${message}</pre>`);
        }
      });
    },
  };
}

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
      plugins: [react(), squizPreviewPlugin()],
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
