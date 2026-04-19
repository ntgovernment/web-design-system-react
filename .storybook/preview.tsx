import type { Preview, Decorator } from "@storybook/react-vite";
import { useEffect } from "react";

// Import bundled design tokens (includes base-variables, common, grid, typography,
// typography-literals, and theme palette in a single self-contained file)
import "@ntgovernment/web-design-tokens/css/theme-ntg-bundled";

// Import Button CSS files to ensure Vite processes them
import "../src/components/Button/Button.css";
import "../src/components/Button/Button-ntg.css";
import "../src/components/Button/Button-central.css";

// Import Tag CSS files to ensure Vite processes them
import "../src/components/Tag/Tag.css";
import "../src/components/Tag/Tag-ntg.css";
import "../src/components/Tag/Tag-central.css";

// Import Input CSS files to ensure Vite processes them
import "../src/components/Input/Input.css";
import "../src/components/Input/Input-ntg.css";
import "../src/components/Input/Input-central.css";

// Import Pill CSS files to ensure Vite processes them
import "../src/components/Pill/Pill.css";
import "../src/components/Pill/Pill-ntg.css";
import "../src/components/Pill/Pill-central.css";

// Import Notification CSS files to ensure Vite processes them
import "../src/components/Notification/Notification.css";
import "../src/components/Notification/Notification-ntg.css";
import "../src/components/Notification/Notification-central.css";

// Import Callout CSS files to ensure Vite processes them
import "../src/components/Callout/Callout.css";
import "../src/components/Callout/Callout-ntg.css";
import "../src/components/Callout/Callout-central.css";

// Import Image CSS files to ensure Vite processes them
import "../src/components/Image/Image.css";
import "../src/components/Image/Image-ntg.css";
import "../src/components/Image/Image-central.css";

// Import Card CSS files to ensure Vite processes them
import "../src/components/Card/Card.css";
import "../src/components/Card/Card-ntg.css";
import "../src/components/Card/Card-central.css";

// Import Footer CSS files to ensure Vite processes them
import "../src/components/Footer/Footer.css";
import "../src/components/Footer/Footer-ntg.css";
import "../src/components/Footer/Footer-central.css";

// Import Breadcrumbs CSS files to ensure Vite processes them
import "../src/components/Breadcrumbs/Breadcrumbs.css";
import "../src/components/Breadcrumbs/Breadcrumbs-ntg.css";
import "../src/components/Breadcrumbs/Breadcrumbs-central.css";

// Import Pagination CSS files to ensure Vite processes them
import "../src/components/Pagination/Pagination.css";
import "../src/components/Pagination/Pagination-ntg.css";
import "../src/components/Pagination/Pagination-central.css";

// Import OnThisPageNavigation CSS files to ensure Vite processes them
import "../src/components/OnThisPageNavigation/OnThisPageNavigation.css";
import "../src/components/OnThisPageNavigation/OnThisPageNavigation-ntg.css";
import "../src/components/OnThisPageNavigation/OnThisPageNavigation-central.css";

// Import Document CSS files to ensure Vite processes them
import "../src/components/Document/Document.css";
import "../src/components/Document/Document-ntg.css";
import "../src/components/Document/Document-central.css";

// Import SideNavigation CSS files to ensure Vite processes them
import "../src/components/SideNavigation/SideNavigation.css";
import "../src/components/SideNavigation/SideNavigation-ntg.css";
import "../src/components/SideNavigation/SideNavigation-central.css";

// Import Tab CSS files to ensure Vite processes them
import "../src/components/Tab/Tab.css";
import "../src/components/Tab/Tab-ntg.css";
import "../src/components/Tab/Tab-central.css";

// Import Table CSS files to ensure Vite processes them
import "../src/components/Table/Table.css";
import "../src/components/Table/Table-ntg.css";
import "../src/components/Table/Table-central.css";

// Suppress React act() warnings in Storybook
if (typeof globalThis !== "undefined") {
  globalThis.IS_REACT_ACT_ENVIRONMENT = false;
}

// Base path for design token CSS static assets.
// import.meta.env.BASE_URL is "/" in dev and the configured Vite base in production
// (e.g. "/web-design-system/" on GitHub Pages). The design-tokens-css/ directory is
// served from node_modules via staticDirs in main.ts.
const tokensCssBase = `${import.meta.env.BASE_URL}design-tokens-css`;

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

// Load Button Component Styles (theme-specific overrides)
const loadButtonStyles = (theme: string) => {
  // Remove existing theme-specific Button CSS if present
  const existingButton = document.getElementById("button-theme-css");
  if (existingButton) {
    existingButton.remove();
  }

  // Add theme-specific Button CSS overrides
  const buttonCSS = document.createElement("link");
  buttonCSS.id = "button-theme-css";
  buttonCSS.rel = "stylesheet";
  buttonCSS.href = new URL(
    `../src/components/Button/Button-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(buttonCSS);
};

// Load Tag Component Styles (theme-specific overrides)
const loadTagStyles = (theme: string) => {
  // Remove existing theme-specific Tag CSS if present
  const existingTag = document.getElementById("tag-theme-css");
  if (existingTag) {
    existingTag.remove();
  }

  // Add theme-specific Tag CSS overrides
  const tagCSS = document.createElement("link");
  tagCSS.id = "tag-theme-css";
  tagCSS.rel = "stylesheet";
  tagCSS.href = new URL(
    `../src/components/Tag/Tag-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(tagCSS);
};
// Load Input Component Styles (theme-specific overrides)
const loadInputStyles = (theme: string) => {
  const existingInput = document.getElementById("input-theme-css");
  if (existingInput) {
    existingInput.remove();
  }

  const inputCSS = document.createElement("link");
  inputCSS.id = "input-theme-css";
  inputCSS.rel = "stylesheet";
  inputCSS.href = new URL(
    `../src/components/Input/Input-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(inputCSS);
};
// Load Pill Component Styles (theme-specific overrides)
const loadPillStyles = (theme: string) => {
  // Remove existing theme-specific Pill CSS if present
  const existingPill = document.getElementById("pill-theme-css");
  if (existingPill) {
    existingPill.remove();
  }

  // Add theme-specific Pill CSS overrides
  const pillCSS = document.createElement("link");
  pillCSS.id = "pill-theme-css";
  pillCSS.rel = "stylesheet";
  pillCSS.href = new URL(
    `../src/components/Pill/Pill-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(pillCSS);
};

// Load Notification Component Styles (theme-specific overrides)
const loadNotificationStyles = (theme: string) => {
  // Remove existing theme-specific Notification CSS if present
  const existingNotification = document.getElementById(
    "notification-theme-css",
  );
  if (existingNotification) {
    existingNotification.remove();
  }

  // Add theme-specific Notification CSS overrides
  const notificationCSS = document.createElement("link");
  notificationCSS.id = "notification-theme-css";
  notificationCSS.rel = "stylesheet";
  notificationCSS.href = new URL(
    `../src/components/Notification/Notification-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(notificationCSS);
};

// Load Callout Component Styles (theme-specific overrides)
const loadCalloutStyles = (theme: string) => {
  // Remove existing theme-specific Callout CSS if present
  const existingCallout = document.getElementById("callout-theme-css");
  if (existingCallout) {
    existingCallout.remove();
  }

  // Add theme-specific Callout CSS overrides
  const calloutCSS = document.createElement("link");
  calloutCSS.id = "callout-theme-css";
  calloutCSS.rel = "stylesheet";
  calloutCSS.href = new URL(
    `../src/components/Callout/Callout-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(calloutCSS);
};

// Load Image Component Styles (theme-specific overrides)
const loadImageStyles = (theme: string) => {
  // Remove existing theme-specific Image CSS if present
  const existingImage = document.getElementById("image-theme-css");
  if (existingImage) {
    existingImage.remove();
  }

  // Add theme-specific Image CSS overrides
  const imageCSS = document.createElement("link");
  imageCSS.id = "image-theme-css";
  imageCSS.rel = "stylesheet";
  imageCSS.href = new URL(
    `../src/components/Image/Image-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(imageCSS);
};

// Load Card Component Styles (theme-specific overrides)
const loadCardStyles = (theme: string) => {
  // Remove existing theme-specific Card CSS if present
  const existingCard = document.getElementById("card-theme-css");
  if (existingCard) {
    existingCard.remove();
  }

  // Add theme-specific Card CSS overrides
  const cardCSS = document.createElement("link");
  cardCSS.id = "card-theme-css";
  cardCSS.rel = "stylesheet";
  cardCSS.href = new URL(
    `../src/components/Card/Card-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(cardCSS);
};

// Load Footer Component Styles (theme-specific overrides)
const loadFooterStyles = (theme: string) => {
  // Remove existing theme-specific Footer CSS if present
  const existingFooter = document.getElementById("footer-theme-css");
  if (existingFooter) {
    existingFooter.remove();
  }

  // Add theme-specific Footer CSS overrides
  const footerCSS = document.createElement("link");
  footerCSS.id = "footer-theme-css";
  footerCSS.rel = "stylesheet";
  footerCSS.href = new URL(
    `../src/components/Footer/Footer-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(footerCSS);
};

// Load Breadcrumbs Content Styles (theme-specific overrides)
const loadBreadcrumbsStyles = (theme: string) => {
  const existingBreadcrumbs = document.getElementById("breadcrumbs-theme-css");
  if (existingBreadcrumbs) {
    existingBreadcrumbs.remove();
  }

  const breadcrumbsCSS = document.createElement("link");
  breadcrumbsCSS.id = "breadcrumbs-theme-css";
  breadcrumbsCSS.rel = "stylesheet";
  breadcrumbsCSS.href = new URL(
    `../src/components/Breadcrumbs/Breadcrumbs-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(breadcrumbsCSS);
};

// Load Pagination Content Styles (theme-specific overrides)
const loadPaginationStyles = (theme: string) => {
  const existingPagination = document.getElementById("pagination-theme-css");
  if (existingPagination) {
    existingPagination.remove();
  }

  const paginationCSS = document.createElement("link");
  paginationCSS.id = "pagination-theme-css";
  paginationCSS.rel = "stylesheet";
  paginationCSS.href = new URL(
    `../src/components/Pagination/Pagination-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(paginationCSS);
};

// Load OnThisPageNavigation Content Styles (theme-specific overrides)
const loadOnThisPageNavigationStyles = (theme: string) => {
  const existingOnThisPage = document.getElementById("on-this-page-theme-css");
  if (existingOnThisPage) {
    existingOnThisPage.remove();
  }

  const onThisPageCSS = document.createElement("link");
  onThisPageCSS.id = "on-this-page-theme-css";
  onThisPageCSS.rel = "stylesheet";
  onThisPageCSS.href = new URL(
    `../src/components/OnThisPageNavigation/OnThisPageNavigation-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(onThisPageCSS);
};

// Load Document Component Styles (theme-specific overrides)
const loadDocumentStyles = (theme: string) => {
  const existingDocument = document.getElementById("document-theme-css");
  if (existingDocument) {
    existingDocument.remove();
  }

  const documentCSS = document.createElement("link");
  documentCSS.id = "document-theme-css";
  documentCSS.rel = "stylesheet";
  documentCSS.href = new URL(
    `../src/components/Document/Document-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(documentCSS);
};

// Load Tab Component Styles (theme-specific overrides)
const loadTabStyles = (theme: string) => {
  const existingTab = document.getElementById("tab-theme-css");
  if (existingTab) {
    existingTab.remove();
  }

  const tabCSS = document.createElement("link");
  tabCSS.id = "tab-theme-css";
  tabCSS.rel = "stylesheet";
  tabCSS.href = new URL(
    `../src/components/Tab/Tab-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(tabCSS);
};

// Load Table Component Styles (theme-specific overrides)
const loadTableStyles = (theme: string) => {
  const existingTable = document.getElementById("table-theme-css");
  if (existingTable) {
    existingTable.remove();
  }

  const tableCSS = document.createElement("link");
  tableCSS.id = "table-theme-css";
  tableCSS.rel = "stylesheet";
  tableCSS.href = new URL(
    `../src/components/Table/Table-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(tableCSS);
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
    loadThemeCSS(theme); // Load theme CSS FIRST (defines --clr-* variables)
    loadBootstrapTypography(theme);
    loadButtonStyles(theme); // Load theme-specific Button CSS overrides LAST
    loadTagStyles(theme); // Load theme-specific Tag CSS overrides
    loadInputStyles(theme); // Load theme-specific Input CSS overrides
    loadPillStyles(theme); // Load theme-specific Pill CSS overrides
    loadNotificationStyles(theme); // Load theme-specific Notification CSS overrides
    loadCalloutStyles(theme); // Load theme-specific Callout CSS overrides
    loadImageStyles(theme); // Load theme-specific Image CSS overrides
    loadCardStyles(theme); // Load theme-specific Card CSS overrides
    loadFooterStyles(theme); // Load theme-specific Footer CSS overrides
    loadBreadcrumbsStyles(theme); // Load theme-specific Breadcrumbs CSS overrides
    loadPaginationStyles(theme); // Load theme-specific Pagination CSS overrides
    loadOnThisPageNavigationStyles(theme); // Load theme-specific OnThisPageNavigation CSS overrides
    loadDocumentStyles(theme); // Load theme-specific Document CSS overrides
    loadTabStyles(theme); // Load theme-specific Tab CSS overrides
    loadTableStyles(theme); // Load theme-specific Table CSS overrides
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
