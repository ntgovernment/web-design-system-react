import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.stories.tsx', 'src/demo/**/*'],
    }),
  ],
  build: {
    target: "es2020",
    minify: true,
    cssMinify: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "WebDesignSystem",
      formats: ["es"],
      fileName: () => "components.min.js",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "components.min.css";
          return assetInfo.name || "asset";
        },
      },
    },
  },
});
