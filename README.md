# NT Government Web Design System

A modern component library and theme system for NT Government websites and intranets, built with Vite, React, TypeScript, and Bootstrap 5.3.

## Features

- 🚀 **Modern Stack**: Built with Vite + React + TypeScript
- 🎨 **Multiple Themes**: NT.GOV.AU and NTG Central themes with CSS variables
- 📦 **Bootstrap 5.3**: Leverages Bootstrap CSS variables for theming
- 🧩 **Component Library**: Reusable React components
- 📚 **Storybook**: Interactive component documentation and testing
- 🔧 **Squiz DXP Ready**: Optimized for deployment in Squiz DXP Component Services
- 🎯 **TypeScript**: Full type safety and IntelliSense support

## Installation

This package and its design token dependency are hosted on [GitHub Packages](https://github.com/orgs/ntgovernment/packages). Add the following to your project's `.npmrc` so npm resolves the `@ntgovernment` scope correctly:

```
@ntgovernment:registry=https://npm.pkg.github.com
```

Then install:

```bash
npm install @ntgovernment/web-design-system
```

This will also install `@ntgovernment/web-design-tokens` (a direct dependency) which provides the CSS custom property design tokens used by all components. You can import those tokens directly if needed — see the [Design Tokens](#design-tokens) section below.

## Distribution Files

After building (`npm run build`), the `dist/` folder contains:

| File                                            | Description                                             |
| ----------------------------------------------- | ------------------------------------------------------- |
| `components.min.js`                             | UMD bundle of all React components (React externalized) |
| `theme-ntg.min.css`                             | Complete NT.GOV.AU theme — tokens + component CSS       |
| `theme-central.min.css`                         | Complete NTG Central theme — tokens + component CSS     |
| `index.html`                                    | Interactive demo page with theme switching              |
| `index.js`                                      | Demo application bundle                                 |
| `index.css`                                     | Demo application styles                                 |
| `nesters/head.html`                             | Squiz Matrix design nester — `<head>` content           |
| `nesters/skip_links.html`                       | Squiz Matrix design nester — skip navigation links      |
| `nesters/header_content.html`                   | Squiz Matrix design nester — site header                |
| `nesters/footer_content.html`                   | Squiz Matrix design nester — site footer                |
| `nesters/footer_js.html`                        | Squiz Matrix design nester — bottom-of-body scripts     |
| `layouts/full-width-section/manifest.json`      | Squiz DXP page layout config — single column, 3 zones   |
| `layouts/full-width-section/markup.hbs`         | Squiz DXP page layout template — Handlebars            |
| `favicons/apple-touch-icon-180x180.png`         | Apple touch icon (180×180)                              |
| `favicons/favicon-16x16.png`                    | 16×16 favicon                                           |
| `favicons/favicon-32x32.png`                    | 32×32 favicon                                           |
| `images/ntg-logo.png`                           | NT Government logo                                      |
| `globals/js/bootstrap.bundle.min.js`            | Bootstrap 5.3 JS bundle (vendor)                        |
| `globals/js/typeahead.bundle.min.js`            | Typeahead JS for search autocomplete (vendor)           |
| `globals/js/handlebars.min.js`                  | Handlebars templating for Funnelback (vendor)           |
| `globals/js/funnelback.autocompletion-2.6.0.js` | Funnelback search autocompletion (vendor)               |
| `ntgbase/images/ntg-desert-rose-reverse.svg`    | NTG desert rose logo reversed (vendor)                  |
| `ntgbase/images/logo-ntg-mono.svg`              | NTG monochrome logo for footer (vendor)                 |

The theme bundles (`theme-ntg.min.css`, `theme-central.min.css`) are fully self-contained — they include the design token CSS variables, typography, grid, and all component styles. You only need to load Bootstrap from CDN and one theme bundle.

## Squiz DXP Integration

The system is optimized for deployment to Squiz DXP as both Component Services (individual React components) and Page Layouts (structural templates for Page Builder).

### Page Layouts

Page Layouts define the structural templates available in the DXP's Page Builder. They consist of a manifest (metadata + zones) and a Handlebars template for rendering.

**Available layouts:**
- **`full-width-section`** — single-column, full-width layout with three stacked zones (header, main, footer) for building flexible page structures.

**Develop locally:**

```bash
# Build the themes first (required for stylesheets)
npm run build

# Run the layout dev server (opens http://localhost:4040)
npm run layouts:dev          # with NTG theme
npm run layouts:dev:central  # with Central theme
```

The dev server auto-reloads when `manifest.json`, `markup.hbs`, or `mock/*.html` files change. See [src/squiz/layouts/README.md](src/squiz/layouts/README.md) for details.

**Deploy to DXP:**

You must be authenticated with `dxp-next auth login --tenant=<TENANT-ID>` first.

```bash
# Validate before deploying
npm run layouts:deploy:dry-run

# Deploy to your logged-in tenant
npm run layouts:deploy
```

Verify deployment in the DXP Console → **Component Service** → **Components & Layouts**.

### Squiz Matrix Nesters

The `src/squiz/nesters/` folder contains design nester files for Squiz Matrix. These are loaded into the design template via the Git File Bridge (asset `1607588`). See [SQUIZ_DXP_DEPLOYMENT.md](SQUIZ_DXP_DEPLOYMENT.md) for details.

## Usage

### Basic Usage

```tsx
import {
  Button,
  Card,
  Notification,
  Icon,
  Image,
} from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/theme-ntg.min.css"; // or theme-central.min.css

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      {/*
        See the component-specific documentation for detailed examples:
        src/components/Card/CARD.md
      */}
      <Card title="Welcome">
        <p>This is a card component</p>
      </Card>
      <Notification
        variant="success"
        title="Success"
        message="Operation completed successfully!"
      />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="2rem" />
      <Image
        src="/path/to/image.jpg"
        alt="Description"
        caption="Image caption"
        thumbnail={true}
      />
    </div>
  );
}
```

### Using Themes

The library ships two pre-configured themes. Load one theme bundle to get all design tokens and component styles:

```html
<!-- Bootstrap (required) -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<!-- Pick ONE theme bundle -->
<link
  rel="stylesheet"
  href="node_modules/@ntgovernment/web-design-system/dist/theme-ntg.min.css"
/>
<!-- OR -->
<link
  rel="stylesheet"
  href="node_modules/@ntgovernment/web-design-system/dist/theme-central.min.css"
/>
```

#### NT.GOV.AU Theme (`ntg-` prefix)

Primary palette: NT Government blue (`#1f1f5f`), orange accent (`#ec8c58`), Lato typeface.

#### NTG Central Theme (`central-` prefix)

Primary palette: Central blue (`#102040`), green accent (`#20a030`), Roboto typeface.

### Bootstrap 5.3 CDN Integration

The components are designed to work with Bootstrap 5.3 loaded from CDN. Add this to your HTML:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>
```

### FontAwesome Icons

The library uses FontAwesome for icons. Add the FontAwesome Kit to your HTML:

```html
<script
  src="https://kit.fontawesome.com/9bf658a5c7.js"
  crossorigin="anonymous"
></script>
```

#### Using Icons in Components

Components support FontAwesome icons via the `icon` prop:

```tsx
import { Button, Notification, Card } from '@ntgovernment/web-design-system';

// Button with icon
<Button variant="primary" icon="fa-solid fa-home" iconPosition="left">
  Home
</Button>

// Icon-only button (requires aria-label for accessibility)
<Button variant="primary" icon="fa-solid fa-search" aria-label="Search" />

// Notification with auto-assigned icon
<Notification
  variant="success"
  title="Success"
  message="Your changes have been saved!"
/>

// Card with icon in header
<Card title="Dashboard" icon="fa-solid fa-chart-line">
  View your analytics
</Card>
```

#### Icon Props

- **Button**: `icon` (icon class), `iconPosition` ('left' | 'right')
- **Notification**: Auto-assigned icons based on variant (uses FontAwesome Light)
- **Card**: `icon` (icon class, displayed in header)

All icon classes should follow FontAwesome's naming convention (e.g., `fa-solid fa-home`, `fa-regular fa-user`).

## HTML API

The design system includes a custom HTML API that allows you to access pre-rendered HTML for components without running React. This is particularly useful for Squiz DXP integration where you may need static HTML output.

### How It Works

The HTML API leverages Storybook's custom addon system:

1. Component stories are defined in Storybook with various configurations
2. During build, `generate-story-data.js` creates a catalog of all stories
3. The custom Storybook addon provides an HTTP endpoint to access rendered HTML
4. Each story can be accessed via its unique ID

### Accessing the HTML API

When Storybook is running (`npm run storybook`), the HTML API is available at:

```
http://localhost:6006/api/html?storyId=<story-id>
```

### Finding Story IDs

Story IDs are generated from the story title and name. Format: `{title}--{name}` (lowercase, spaces replaced with dashes).

**Examples:**

| Component | Story Name  | Story ID                       |
| --------- | ----------- | ------------------------------ |
| Button    | Primary     | `components-button--primary`   |
| Button    | Secondary   | `components-button--secondary` |
| Alert     | Success     | `components-alert--success`    |
| Card      | With Footer | `components-card--with-footer` |
| Icon      | Basic Icon  | `components-icon--basic-icon`  |

You can also find story IDs in:

- `.storybook/story-data.json` (generated catalog)
- Storybook URL bar when viewing a story
- Storybook's "Docs" tab

### Using the HTML API

#### JavaScript/Node.js

```javascript
// Fetch rendered HTML for a component
fetch("http://localhost:6006/api/html?storyId=components-button--primary")
  .then((response) => response.text())
  .then((html) => {
    console.log(html);
    // Insert into your application
    document.getElementById("container").innerHTML = html;
  });
```

#### cURL

```bash
curl "http://localhost:6006/api/html?storyId=components-button--primary"
```

#### Python

```python
import requests

response = requests.get('http://localhost:6006/api/html?storyId=components-button--primary')
html = response.text
print(html)
```

### Squiz DXP Integration

The HTML API is designed for Squiz Matrix integration:

```html
<!-- In a Squiz Matrix paint layout or design file -->
<div id="button-container"></div>

<script>
  // Fetch component HTML from Storybook instance
  fetch(
    "https://your-storybook-instance.com/api/html?storyId=components-button--primary",
  )
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("button-container").innerHTML = html;
    });
</script>
```

**Note**: For production use, deploy the built Storybook (`npm run build-storybook`) to a static hosting service or Squiz Matrix, then use that URL instead of localhost.

### Example Output

Requesting the Primary Button story:

```bash
curl "http://localhost:6006/api/html?storyId=components-button--primary"
```

Returns:

```html
<button type="button" class="btn btn-primary">Primary Button</button>
```

### Limitations

- HTML API returns static HTML snapshots - no interactivity
- Event handlers (onClick, etc.) are not included in HTML output
- For interactive components, use the React component library instead
- Best suited for static/presentational content

### Story Data Catalog

The complete catalog of available stories is in `.storybook/story-data.json`:

```json
{
  "stories": [
    {
      "id": "components-button--primary",
      "title": "Components/Button",
      "name": "Primary"
    },
    ...
  ]
}
```

This file is automatically generated and updated whenever you run:

- `npm run generate-story-data`
- `npm run build`
- `npm run storybook`
- `npm run build-storybook`

## Development

### Prerequisites

- Node.js ≥ 22.0.0
- npm ≥ 9.0.0
- A GitHub Packages auth token with `read:packages` scope (for `@ntgovernment` scoped deps)

### Setup

```bash
# Configure GitHub Packages registry (once per machine)
echo "@ntgovernment:registry=https://npm.pkg.github.com" >> ~/.npmrc

# Install dependencies
npm install

# Start development server (Vite)
npm run dev

# Start Storybook (interactive component docs)
npm run storybook

# Build library + theme bundles
npm run build

# Run tests
npm test

# Build Storybook static site
npm run build-storybook
```

### Available Scripts

The project includes several npm scripts for development, building, and testing:

#### Development Scripts

- **`npm run dev`** - Start Vite development server with hot module replacement (HMR)
  - URL: `http://localhost:5173`
  - Watches files for changes and rebuilds automatically
- **`npm run storybook`** - Start Storybook development server
  - URL: `http://localhost:6006`
  - Interactive component documentation and playground
  - Automatically runs `prestorybook` hook to generate story data

#### Build Scripts

- **`npm run build`** - Build the library for production
  - Runs TypeScript compiler (`tsc`)
  - Builds with Vite
  - Runs post-build optimization (`build-dist.js`)
  - Automatically runs `prebuild` hook first
- **`npm run build-storybook`** - Build static Storybook site
  - Output: `storybook-static/`
  - Can be deployed as static website
  - Automatically runs `prebuild-storybook` hook first
- **`npm run preview`** - Preview production build locally
  - Serves the built `dist/` folder
  - Useful for testing before deployment

#### Utility Scripts

- **`npm run generate-story-data`** - Generate Storybook story catalog
  - Creates `.storybook/story-data.json`
  - Required for HTML API functionality
  - Automatically runs before build and Storybook commands

#### Pre/Post Hooks

- **`prebuild`** - Runs before `build` (generates story data)
- **`prestorybook`** - Runs before `storybook` (generates story data)
- **`prebuild-storybook`** - Runs before `build-storybook` (generates story data)

### Design Tokens

Design tokens are managed in the separate [`@ntgovernment/web-design-tokens`](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens) package. This repo consumes them as an npm dependency — **no local token generation is required**.

The tokens package (v3.1.0+) exposes self-contained **bundled** theme CSS files that include all token layers (base-variables, common, grid, typography, typography-literals, and theme palette):

```css
/* Bundled theme files (recommended — self-contained, no extra imports needed) */
@import "@ntgovernment/web-design-tokens/css/theme-ntg-bundled"; /* NTG theme */
@import "@ntgovernment/web-design-tokens/css/theme-central-bundled"; /* Central theme */
```

Individual layers are still available if needed:

```css
@import "@ntgovernment/web-design-tokens/css/common"; /* spacing, shadows, borders, radii */
@import "@ntgovernment/web-design-tokens/css/grid"; /* Bootstrap grid configuration */
@import "@ntgovernment/web-design-tokens/css/typography"; /* type scale variables */
@import "@ntgovernment/web-design-tokens/css/theme-ntg"; /* NTG palette + semantic colors (unbundled) */
```

To update tokens, raise a PR in the `web-design-tokens` repository and bump the version in this repo's `package.json`.

### Architecture

```
@ntgovernment/web-design-tokens (npm)   ← CSS custom-property tokens
        │
        ▼
scripts/build-theme-bundles.js          ← reads token CSS from node_modules/
        │
        ▼
theme-{ntg|central}.min.css            ← bundled tokens + component CSS
        │
src/components/*/Component.css          ← base component styles (token vars)
src/components/*/Component-ntg.css      ← NTG theme overrides
src/components/*/Component-central.css  ← Central theme overrides
        │
        ▼
scripts/build-dist.js                   ← orchestrates: Vite lib build → demo build → theme bundles → dist/
```

**Token dependency** — `@ntgovernment/web-design-tokens` supplies all CSS custom properties (colours, spacing, typography, grid). No tokens are generated locally.

**Component CSS** — Each component has a base `.css` file using semantic token variables plus optional per-theme override files (`-ntg.css`, `-central.css`).

**Theme bundles** — `build-theme-bundles.js` concatenates the self-contained bundled token CSS with all component CSS and theme overrides, then minifies. The result is a single CSS file per theme.

## Deployment to Squiz DXP Component Services

This library is designed to be deployed as Component Services in Squiz DXP.

### Build for Production

```bash
npm run build
```

This creates the distribution files listed in the [Distribution Files](#distribution-files) section above.

### Deployment Steps

1. **Build the library**: `npm run build`
2. **Upload to Squiz Matrix**: Upload `dist/` contents as File Assets
3. **Reference in Component Services**:
   ```html
   <!-- Bootstrap CDN (required) -->
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
     rel="stylesheet"
   />
   <!-- Choose one theme bundle -->
   <link rel="stylesheet" href="%globals_asset_url:NTG_THEME_ASSET_ID%" />
   <!-- React component bundle -->
   <script src="%globals_asset_url:COMPONENTS_ASSET_ID%"></script>
   ```
4. **Use components**: React components are available via the UMD global `NTGDesignSystem`

### Example Squiz DXP Integration

```html
<!DOCTYPE html>
<html>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="%globals_asset_url:YOUR_STYLE_ASSET_ID%" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
      import { Button } from "%globals_asset_url:YOUR_JS_ASSET_ID%";
      // Your component code here
    </script>
  </body>
</html>
```

## Storybook

Storybook provides an interactive environment for developing and testing components.

```bash
npm run storybook
```

Visit `http://localhost:6006` to view the component library.

### HTML Code View

Storybook is configured with a decorator that shows the HTML output of components. This helps with:

- Verifying Bootstrap class names
- Understanding component structure
- Debugging styling issues

## Theme Customization

### Creating Custom Themes

You can extend or override a theme by defining CSS variables after the theme bundle:

```css
/* Load the base theme, then override specific tokens */
:root {
  --clr-action-primary: #yourcolor;
  --type-font-family-default: "Your Font", sans-serif;
}
```

### Design Token Updates

Tokens are managed in the [`@ntgovernment/web-design-tokens`](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens) package. To use updated tokens:

1. Bump the `@ntgovernment/web-design-tokens` version in `package.json`
2. Run `npm install`
3. Run `npm run build`

## Components

### Available Components

Each component has its own detailed documentation at `src/components/<Name>/<NAME>.md`.
Consult those files for prop tables, CSS token references, and usage examples.

| Component            | Export                      | Description                               |
| -------------------- | --------------------------- | ----------------------------------------- |
| Accordion            | `Accordion`                 | Collapsible content panels                |
| BackToTop            | `BackToTop`                 | Scroll-to-top button                      |
| Banner               | `Banner`                    | Full-width promotional banner             |
| Breadcrumbs          | `BreadcrumbsContent`        | Page hierarchy navigation                 |
| Button               | `Button`                    | Primary interactive element with variants |
| Callout              | `Callout`                   | Highlighted informational block           |
| Card                 | `Card`                      | Content container with image/body/footer  |
| Checkbox             | `Checkbox`, `CheckboxGroup` | Form checkbox with label                  |
| DateInput            | `DateInput`                 | Day/month/year split date input           |
| DatePicker           | `DatePicker`                | Calendar date picker                      |
| Document             | `Document`                  | File/document link with icon              |
| Dropdown             | `Dropdown`                  | Select dropdown form control              |
| FileUpload           | `FileUpload`                | File attachment input                     |
| FloatingButton       | `FloatingButton`            | Fixed-position action button              |
| Footer               | `Footer`                    | Site footer with links and social         |
| GlobalAlert          | `GlobalAlert`               | Site-wide alert banner                    |
| Header               | `Header`                    | Site header with navigation               |
| Icon                 | `Icon`                      | FontAwesome icon wrapper                  |
| Image                | `Image`                     | Responsive image with caption             |
| Input                | `Input`                     | Text input form control                   |
| Notification         | `Notification`              | Inline status notification                |
| OnThisPageNavigation | `OnThisPageNavigation`      | In-page anchor links                      |
| Pagination           | `PaginationContent`         | Page navigation controls                  |
| Pill                 | `Pill`                      | Small status badge                        |
| QuickExit            | `QuickExit`                 | Emergency exit button                     |
| Radio                | `Radio`, `RadioGroup`       | Radio button form control                 |
| SearchBar            | `SearchBar`                 | Search input with submit                  |
| SideNavigation       | `SideNavigation`            | Vertical section navigation               |
| StepList             | `StepList`                  | Numbered step process list                |
| Tab                  | _(see component)_           | Tabbed content panels                     |
| Table                | `TableContent`              | Data table with Bootstrap styling         |
| Tag                  | `Tag`                       | Colour-coded label                        |
| Textarea             | `Textarea`                  | Multi-line text input                     |
| TopicListing         | `TopicListing`              | Link list with topic grouping             |

## CSS Variables Reference

All CSS custom properties are defined in `@ntgovernment/web-design-tokens`. Components use **unprefixed semantic variables** (e.g. `--clr-action-primary`, `--sp-md`) which resolve to the correct values for the currently loaded theme.

### Semantic color tokens

```css
--clr-bg-default          /* Page background */
--clr-text-default        /* Body text */
--clr-text-inverse        /* Text on dark backgrounds */
--clr-action-primary      /* Primary button / link color */
--clr-action-hover        /* Hover state */
--clr-link-default        /* Hyperlink color */
--clr-link-visited        /* Visited link */
--clr-border-default      /* Standard border */
--clr-border-subtle       /* Subtle / light border */
--clr-status-success      /* Success green */
--clr-status-danger       /* Error red */
--clr-status-warning      /* Warning amber */
--clr-focus-focus         /* Focus ring color */
```

### Spacing tokens

```css
--sp-xxs: 4px --sp-xs: 8px --sp-sm: 12px --sp-md: 16px --sp-lg: 20px
  --sp-xl: 24px --sp-2xl: 32px --sp-3xl: 48px;
```

### Typography tokens

```css
--type-heading-h1-size    --type-heading-h1-weight    --type-heading-h1-lh
--type-body-default-size  --type-body-default-weight  --type-body-default-lh
--type-font-family-default /* Loaded typeface (Lato / Roboto) */
```

For the full token catalogue see the [`@ntgovernment/web-design-tokens` README](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens).

## Browser Support

The NT Government Web Design System supports all modern browsers:

| Browser               | Version           | Support            |
| --------------------- | ----------------- | ------------------ |
| **Chrome**            | Latest 2 versions | ✅ Fully supported |
| **Edge**              | Latest 2 versions | ✅ Fully supported |
| **Firefox**           | Latest 2 versions | ✅ Fully supported |
| **Safari**            | Latest 2 versions | ✅ Fully supported |
| **iOS Safari**        | Latest 2 versions | ✅ Fully supported |
| **Chrome Mobile**     | Latest version    | ✅ Fully supported |
| **Internet Explorer** | All versions      | ❌ Not supported   |

### Browser Requirements

- **CSS Custom Properties**: Required for theming
- **ES Modules**: Required for component loading
- **Flexbox & Grid**: Used in layout components
- **JavaScript**: ES2020+ features

### Testing

Components are tested in:

- Chrome (primary development browser)
- Firefox
- Safari
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Troubleshooting

### Common Issues

#### Components Not Styling Correctly

**Problem**: Components appear unstyled or have broken layout.

**Solutions**:

1. Ensure Bootstrap 5.3.3 CSS is loaded:
   ```html
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
     rel="stylesheet"
   />
   ```
2. Load theme CSS after Bootstrap:
   ```html
   <link rel="stylesheet" href="./theme-ntg.min.css" />
   ```
3. Check browser console for CSS loading errors

#### Icons Not Displaying

**Problem**: Icons show as empty squares or missing.

**Solutions**:

1. Verify FontAwesome kit is loaded:
   ```html
   <script
     src="https://kit.fontawesome.com/9bf658a5c7.js"
     crossorigin="anonymous"
   ></script>
   ```
2. Check icon class names are correct (e.g., `fa-solid fa-home`, not `fa-home`)
3. Ensure internet connection (FontAwesome loads from CDN)

#### TypeScript Type Errors

**Problem**: TypeScript errors when importing components.

**Solutions**:

1. Ensure types are exported: `import type { ButtonProps } from '@ntgovernment/web-design-system'`
2. Check `dist/index.d.ts` exists after building
3. Verify `types` field in package.json points to correct file

#### Theme Not Applied

**Problem**: Theme colors not showing, components use default Bootstrap colors.

**Solutions**:

1. Load theme CSS file (`theme-ntg.min.css` or `theme-central.min.css`)
2. Ensure theme CSS loads after Bootstrap CSS
3. Check browser DevTools to verify CSS variables are defined
4. Clear browser cache

#### Build Errors

**Problem**: `npm run build` fails.

**Solutions**:

1. Delete `node_modules` and run `npm install` again
2. Check Node.js version (22+ required)
3. Ensure GitHub Packages auth is configured in `.npmrc` (required to install `@ntgovernment/web-design-tokens`)
4. Review error messages for specific file issues

#### Storybook Not Starting

**Problem**: `npm run storybook` fails or shows errors.

**Solutions**:

1. Delete `.storybook/story-data.json` and regenerate: `npm run generate-story-data`
2. Clear Storybook cache: Delete `node_modules/.cache/storybook`
3. Verify port 6006 is not in use
4. Check for conflicting Storybook addons

#### Design Token Changes Not Reflecting

**Problem**: Design token updates from `@ntgovernment/web-design-tokens` don't appear in the built CSS.

**Solutions**:

1. Update `@ntgovernment/web-design-tokens` to the latest version: `npm install @ntgovernment/web-design-tokens@latest`
2. Rebuild the library: `npm run build`
3. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

### Getting Help

If you encounter issues not covered here:

1. **Check Documentation**:
   - [src/themes/THEMES.md](src/themes/THEMES.md)
   - [SQUIZ_DXP_DEPLOYMENT.md](SQUIZ_DXP_DEPLOYMENT.md)
   - Component-specific docs at `src/components/<Name>/<NAME>.md`

2. **Search Issues**: Check if the issue is already reported in the repository

3. **Create an Issue**: Open a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, browser)
   - Error messages or screenshots

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on:

- Code of conduct
- Development workflow
- Coding standards
- Component development guidelines
- Design token modifications
- Documentation requirements
- Content standards and guidelines
- Testing procedures
- Pull request process
- Commit message guidelines

**Important**: All examples and documentation must follow our [Content Standards](CONTENT_STANDARDS.md) - never use Lorem ipsum placeholder text. Use meaningful, contextual content that demonstrates realistic use cases.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes following the coding standards
4. Add/update tests and documentation
5. Run `npm run build` to ensure no errors
6. Commit with conventional commit format: `feat: add new component`
7. Push to your fork and create a pull request

**Important**: Never use Lorem ipsum placeholder text in stories, examples, or documentation. Use meaningful, contextual content that demonstrates realistic use cases. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed content guidelines.

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes, new features, and bug fixes.

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Northern Territory Government
