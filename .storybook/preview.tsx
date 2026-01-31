import type { Preview, Decorator } from "@storybook/react";
import { useEffect } from "react";
import React from "react";

// Suppress React act() warnings in Storybook
if (typeof globalThis !== "undefined") {
  globalThis.IS_REACT_ACT_ENVIRONMENT = false;
}

// Load Bootstrap CSS from CDN
const loadBootstrapCSS = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  link.integrity =
    "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

// Load FontAwesome Kit
const loadFontAwesome = () => {
  const script = document.createElement("script");
  script.src = "https://kit.fontawesome.com/9bf658a5c7.js";
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};

// Load Bootstrap Typography Override (theme-specific)
const loadBootstrapTypography = (theme: string) => {
  // Remove existing Bootstrap typography override if present
  const existingTypography = document.getElementById("bootstrap-typography-css");
  if (existingTypography) {
    existingTypography.remove();
  }

  // Add theme-specific Bootstrap typography override
  const typographyOverride = document.createElement("link");
  typographyOverride.id = "bootstrap-typography-css";
  typographyOverride.rel = "stylesheet";
  typographyOverride.href = new URL(`../src/typography/bootstrap-${theme}.css`, import.meta.url).href;
  document.head.appendChild(typographyOverride);
};

// Load theme CSS files
const loadThemeCSS = (theme: string) => {
  // Remove existing theme CSS if present
  const existingTheme = document.getElementById("theme-css");
  if (existingTheme) {
    existingTheme.remove();
  }

  // Load common CSS files (only once)
  if (!document.getElementById("common-css")) {
    const commonCSS = document.createElement("link");
    commonCSS.id = "common-css";
    commonCSS.rel = "stylesheet";
    commonCSS.href = new URL("../src/themes/common.css", import.meta.url).href;
    document.head.appendChild(commonCSS);
  }

  if (!document.getElementById("grid-css")) {
    const gridCSS = document.createElement("link");
    gridCSS.id = "grid-css";
    gridCSS.rel = "stylesheet";
    gridCSS.href = new URL("../src/themes/grid.css", import.meta.url).href;
    document.head.appendChild(gridCSS);
  }

  if (!document.getElementById("typography-css")) {
    const typographyCSS = document.createElement("link");
    typographyCSS.id = "typography-css";
    typographyCSS.rel = "stylesheet";
    typographyCSS.href = new URL("../src/themes/typography.css", import.meta.url).href;
    document.head.appendChild(typographyCSS);
  }

  if (!document.getElementById("base-variables-css")) {
    const baseVariablesCSS = document.createElement("link");
    baseVariablesCSS.id = "base-variables-css";
    baseVariablesCSS.rel = "stylesheet";
    baseVariablesCSS.href = new URL("../src/themes/base-variables.css", import.meta.url).href;
    document.head.appendChild(baseVariablesCSS);
  }

  // Add theme-specific CSS
  const themeCSS = document.createElement("link");
  themeCSS.id = "theme-css";
  themeCSS.rel = "stylesheet";
  themeCSS.href = new URL(`../src/themes/${theme}-theme.css`, import.meta.url).href;
  document.head.appendChild(themeCSS);
};

// HTML Decorator to view code as HTML and ensure Bootstrap is loaded
const withHTMLCode: Decorator = (Story, context) => {
  const theme = context.globals.theme || "ntg";

  useEffect(() => {
    loadBootstrapCSS();
    loadFontAwesome();
    loadBootstrapTypography(theme);
    loadThemeCSS(theme);
  }, [theme]);

  return (
    <div>
      <Story />
    </div>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "ntg",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "ntg", title: "NT.GOV.AU", icon: "circle" },
          { value: "central", title: "NTG Central", icon: "circlehollow" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: "dynamic",
      },
    },
    // Show HTML in docs
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      },
    },
    // Story ordering: Design System (Typography, Icons) first, then Components
    options: {
      storySort: {
        order: [
          'Design System',
          ['Typography', 'Icon'],
          'Components',
          ['Alert', 'Button', 'Card'],
        ],
      },
    },
    // Strict WCAG AAA accessibility testing
    a11y: {
      config: {
        rules: [
          // Enable strict color contrast checking (WCAG AAA)
          {
            id: "color-contrast",
            enabled: true,
          },
          // Ensure all interactive elements have accessible names
          {
            id: "label",
            enabled: true,
          },
          // Check for proper ARIA usage
          {
            id: "aria-valid-attr-value",
            enabled: true,
          },
          {
            id: "aria-required-attr",
            enabled: true,
          },
          // Ensure proper heading hierarchy
          {
            id: "heading-order",
            enabled: true,
          },
          // Validate landmark regions
          {
            id: "region",
            enabled: true,
          },
        ],
      },
      // Run on active story only for performance
      element: "#storybook-root",
      manual: false,
    },
  },
  decorators: [withHTMLCode],
};

export default preview;
