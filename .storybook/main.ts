// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from "@storybook/react-vite";
import type { Plugin } from "vite";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load static story data
const storyDataPath = join(__dirname, "story-data.json");
let storyData: any;
try {
  storyData = JSON.parse(readFileSync(storyDataPath, "utf-8"));
} catch (error) {
  console.warn(
    "Warning: story-data.json not found. Run: node .storybook/generate-story-data.js",
  );
  storyData = { components: {} };
}

interface StoryModule {
  default: {
    component: any;
    title: string;
  };
  [key: string]: any;
}

function htmlApiPlugin(): Plugin {
  // Simple HTML template generators for each component
  const generateHTML = (componentName: string, props: any): string => {
    switch (componentName) {
      case "Button":
        const size = props.size ? ` btn-${props.size}` : "";
        return `<button type="button" class="btn btn-${props.variant || "primary"}${size}">${props.children || "Button"}</button>`;

      case "Card":
        return `<div class="card"${props.style ? ` style="${props.style}"` : ""}>
  ${props.image ? `<img src="${props.image}" class="card-img-top" alt="${props.imageAlt || "Card image"}" />` : ""}
  <div class="card-body">
    ${props.title ? `<h5 class="card-title">${props.title}</h5>` : ""}
    ${props.text ? `<p class="card-text">${props.text}</p>` : ""}
    ${props.children || ""}
  </div>
</div>`;

      case "Icon":
        const iconStyle = [
          props.color && props.color !== "inherit"
            ? `color: ${props.color}`
            : "",
          props.size ? `font-size: ${props.size}` : "",
        ]
          .filter(Boolean)
          .join("; ");

        return `<i class="${props.icon}${props.className ? " " + props.className : ""}"${iconStyle ? ` style="${iconStyle}"` : ""}${props.ariaHidden !== false ? ' aria-hidden="true"' : ""}${props.ariaLabel ? ` aria-label="${props.ariaLabel}"` : ""}></i>`;

      default:
        return `<div>Unknown component: ${componentName}</div>`;
    }
  };

  return {
    name: "storybook-html-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Handle OPTIONS for CORS preflight
        if (req.method === "OPTIONS") {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
          res.setHeader("Access-Control-Allow-Headers", "Content-Type");
          res.statusCode = 204;
          res.end();
          return;
        }

        // List all available components and stories
        if (req.url === "/api/html") {
          const catalog: Record<string, string[]> = {};

          Object.entries(storyData.components).forEach(
            ([component, data]: [string, any]) => {
              catalog[component] = Object.keys(data.stories);
            },
          );

          res.setHeader("Access-Control-Allow-Origin", "*");
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify(
              {
                components: catalog,
                usage:
                  "GET /api/html/:component/:story to get HTML for a specific story",
                generated: storyData.generated,
              },
              null,
              2,
            ),
          );
          return;
        }

        // Match /api/html/:component/:story
        const match = req.url?.match(/^\/api\/html\/([^\/]+)\/([^\/]+)$/);

        if (!match) {
          return next();
        }

        const [, componentName, storyName] = match;

        // Look up story in static data
        const componentData = storyData.components[componentName];

        if (!componentData) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              error: "Component not found",
              component: componentName,
              available: Object.keys(storyData.components),
            }),
          );
          return;
        }

        const story = componentData.stories[storyName];

        if (!story) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              error: "Story not found",
              component: componentName,
              story: storyName,
              available: Object.keys(componentData.stories),
            }),
          );
          return;
        }

        // Generate HTML using template function
        const html = generateHTML(componentName, story.args);

        // Set CORS headers for external access
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.setHeader("Content-Type", "text/html; charset=utf-8");

        res.end(html);
      });
    },
  };
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
  ],

  staticDirs: [
    "public",
    // Serve design token CSS files so they can be loaded by preview.tsx at runtime.
    // This copies them into the Storybook output, making them available in production
    // (GitHub Pages) where node_modules is not served.
    {
      from: "../node_modules/@ntgovernment/web-design-tokens/dist/css",
      to: "/design-tokens-css",
    },
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: undefined,
      },
    },
  },

  // Only set a custom <base> and Vite base for production builds (storybook build).
  // This prevents the dev server from serving assets under `/webds/storybook/` which
  // would otherwise produce 404s when running `storybook dev` locally.
  managerHead: (head) => {
    if (process.env.NODE_ENV === "production") {
      const basePath = process.env.STORYBOOK_BASE_PATH || "/webds/storybook/";
      return `
    ${head}
    <base href="${basePath}" />
  `;
    }
    return head;
  },

  async viteFinal(config) {
    // Only apply the custom base path for production builds
    if (process.env.NODE_ENV === "production") {
      // Use STORYBOOK_BASE_PATH env variable if set (for GitHub Pages),
      // otherwise use default for Squiz Matrix deployment
      config.base = process.env.STORYBOOK_BASE_PATH || "/webds/storybook/";

      // Fix: @storybook/addon-vitest injects vite-inject-mocker-entry.js with an
      // absolute path (/vite-inject-mocker-entry.js) into iframe.html. Vite's base
      // transformation only rewrites relative paths, so we convert it to a relative
      // path here so that Vite can correctly rewrite it with the configured base.
      config.plugins = config.plugins || [];
      config.plugins.push({
        name: "fix-storybook-absolute-paths",
        transformIndexHtml: {
          order: "pre" as const,
          handler(html: string) {
            return html.replace(
              /src="\/vite-inject-mocker-entry\.js"/g,
              'src="./vite-inject-mocker-entry.js"',
            );
          },
        },
      });
    }

    // Add custom HTML API plugin (always present)
    config.plugins = config.plugins || [];
    config.plugins.push(htmlApiPlugin());

    // Resolve bundled token CSS — Vite's package exports resolver doesn't handle
    // the ".bundled.css" file extension in the exports map, so we alias directly.
    const tokensDir = join(
      __dirname,
      "..",
      "node_modules",
      "@ntgovernment",
      "web-design-tokens",
      "dist",
      "css",
      "themes",
    );
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ntgovernment/web-design-tokens/css/theme-ntg-bundled": join(
        tokensDir,
        "theme-ntg.bundled.css",
      ),
      "@ntgovernment/web-design-tokens/css/theme-central-bundled": join(
        tokensDir,
        "theme-central.bundled.css",
      ),
    };

    return config;
  },
};
export default config;
