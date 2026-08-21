import type { Preview, Decorator } from "@storybook/react-vite";
import { useEffect } from "react";

// Import bundled design tokens (includes base-variables, common, grid, typography,
// typography-literals, and theme palette in a single self-contained file)
import "@ntgovernment/web-design-tokens/css/theme-ntg-bundled";

// Suppress React act() warnings in Storybook
if (typeof globalThis !== "undefined") {
  globalThis.IS_REACT_ACT_ENVIRONMENT = false;
}

// Base path for design token CSS static assets.
// import.meta.env.BASE_URL is "/" in dev and the configured Vite base in production
// (e.g. "/web-design-system-react/" on GitHub Pages). The design-tokens-css/ directory is
// served from node_modules via staticDirs in main.ts.
const tokensCssBase = `${import.meta.env.BASE_URL}design-tokens-css`;

// Load Bootstrap CSS from CDN (with duplicate guard)
const loadBootstrapCSS = () => {
  if (document.getElementById("bootstrap-css")) return;
  const link = document.createElement("link");
  link.id = "bootstrap-css";
  link.rel = "stylesheet";
  link.href =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  link.integrity =
    "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
};

// Load FontAwesome Kit (with duplicate guard)
const loadFontAwesome = () => {
  if (document.getElementById("fontawesome-kit")) return;
  const script = document.createElement("script");
  script.id = "fontawesome-kit";
  script.src = "https://kit.fontawesome.com/9bf658a5c7.js";
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
};

// Load Bootstrap Typography Override (theme-specific)
const loadBootstrapTypography = (theme: string) => {
  // Remove existing Bootstrap typography override if present
  const existingTypography = document.getElementById(
    "bootstrap-typography-css",
  );
  if (existingTypography) {
    existingTypography.remove();
  }

  // Add theme-specific Bootstrap typography override
  const typographyOverride = document.createElement("link");
  typographyOverride.id = "bootstrap-typography-css";
  typographyOverride.rel = "stylesheet";
  typographyOverride.href = `${tokensCssBase}/themes/typography-${theme}.css`;
  document.head.appendChild(typographyOverride);
};

// Generic loader for component theme CSS — skips if already loaded with same href,
// swaps only when the theme changes.
const loadComponentThemeCSS = (
  componentName: string,
  cssId: string,
  cssPath: string,
  theme: string,
) => {
  const href = new URL(
    `../src/components/${cssPath}/${componentName}-${theme}.css`,
    import.meta.url,
  ).href;
  const existing = document.getElementById(cssId) as HTMLLinkElement | null;
  if (existing?.getAttribute("href") === href) return; // already loaded
  existing?.remove();

  const link = document.createElement("link");
  link.id = cssId;
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

// Load theme CSS files
const loadThemeCSS = (theme: string) => {
  // Remove existing theme CSS if present
  const existingTheme = document.getElementById("theme-css");
  if (existingTheme) {
    existingTheme.remove();
  }

  // Add theme-specific bundled CSS (changes when user switches themes, so loaded
  // dynamically). Each bundled file is self-contained with all token layers inlined.
  const themeCSS = document.createElement("link");
  themeCSS.id = "theme-css";
  themeCSS.rel = "stylesheet";
  themeCSS.href = `${tokensCssBase}/themes/theme-${theme}.bundled.css`;
  document.head.appendChild(themeCSS);

  // Load component styles (Button CSS with Bootstrap variable overrides)
  if (!document.getElementById("component-styles-css")) {
    const componentStylesCSS = document.createElement("link");
    componentStylesCSS.id = "component-styles-css";
    componentStylesCSS.rel = "stylesheet";
    componentStylesCSS.href = new URL("../src/style.css", import.meta.url).href;
    document.head.appendChild(componentStylesCSS);
  }
};

// HTML Decorator to view code as HTML and ensure Bootstrap is loaded
const withHTMLCode: Decorator = (Story, context) => {
  const theme = context.globals.theme || "ntg";

  useEffect(() => {
    loadBootstrapCSS();
    loadFontAwesome();
    loadThemeCSS(theme);
    loadBootstrapTypography(theme);

    // Load theme-specific CSS overrides for each component
    const components: [string, string, string][] = [
      ["Button", "button-theme-css", "Button"],
      ["Tag", "tag-theme-css", "Tag"],
      ["Input", "input-theme-css", "Input"],
      ["Pill", "pill-theme-css", "Pill"],
      ["Notification", "notification-theme-css", "Notification"],
      ["Callout", "callout-theme-css", "Callout"],
      ["Image", "image-theme-css", "Image"],
      ["Card", "card-theme-css", "Card"],
      ["Footer", "footer-theme-css", "Footer"],
      ["Breadcrumbs", "breadcrumbs-theme-css", "Breadcrumbs"],
      ["Pagination", "pagination-theme-css", "Pagination"],
      [
        "OnThisPageNavigation",
        "on-this-page-theme-css",
        "OnThisPageNavigation",
      ],
      ["Document", "document-theme-css", "Document"],
      ["Tab", "tab-theme-css", "Tab"],
      ["Table", "table-theme-css", "Table"],
      ["SideNavigation", "side-navigation-theme-css", "SideNavigation"],
    ];
    for (const [name, id, path] of components) {
      loadComponentThemeCSS(name, id, path, theme);
    }
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
          { value: "ntg", title: "NT.GOV.AU", icon: "globe" },
          { value: "central", title: "NTG Central", icon: "user" },
        ],
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
    // Story ordering: Components in alphabetical order
    options: {
      storySort: {
        order: [
          "Components",
          [
            "Accordion",
            "BackToTop",
            "Banner",
            "Breadcrumbs",
            "Button",
            "Callout",
            "Card",
            "Checkbox",
            "DateInput",
            "DatePicker",
            "Document",
            "Dropdown",
            "FileUpload",
            "FloatingButton",
            "Footer",
            "GlobalAlert",
            "Header",
            "Icon",
            "Image",
            "Input",
            "Notification",
            "OnThisPageNavigation",
            "Pagination",
            "Pill",
            "QuickExit",
            "Radio",
            "SearchBar",
            "SideNavigation",
            "StepList",
            "Tab",
            "Table",
            "Tag",
            "Textarea",
            "TopicListing",
          ],
          "Content",
          ["Typography"],
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
      context: "#storybook-root",

      manual: false,
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  decorators: [withHTMLCode],
  tags: ["autodocs"],
};

export default preview;
