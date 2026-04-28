# Squiz DXP Component Services Deployment Guide

This guide explains how to deploy the NT Government Web Design System to Squiz DXP Component Services.

## Overview

The NT Government Web Design System is a Vite-based React component library designed to be deployed as Component Services in Squiz DXP (formerly Matrix). It provides reusable UI components styled with Bootstrap 5.3 and custom NT Government themes.

## Deployment Options

This repository supports two different deployment scenarios to Squiz Matrix:

### 1. Component Library Deployment (This Document)

Deploy individual React components as **Component Services** in Matrix for use within content pages. This allows content editors to add and configure components through the Matrix interface.

**Target**: Matrix File Assets and Component Service Templates  
**Files**: `dist/` directory (JavaScript and CSS bundles)  
**Use Case**: Embedding interactive components in Matrix content pages

### 2. Storybook Documentation Deployment

Deploy the complete **Storybook documentation site** as a static website via Git File Bridge.

**Target**: https://cmsexternal.nt.gov.au/webds/storybook  
**Files**: `storybook-static/` directory (complete static site)  
**Use Case**: Interactive documentation and component showcase

📖 **See [STORYBOOK_GFB_DEPLOYMENT.md](STORYBOOK_GFB_DEPLOYMENT.md) for Storybook deployment instructions.**

---

## Component Library Deployment

The following sections describe deploying individual components as Matrix Component Services.

## Prerequisites

- Access to Squiz Matrix admin interface
- Node.js 22+ installed locally for building
- Understanding of Matrix Asset structure

## Build Process

### 1. Build the Library

```bash
# Install dependencies (first time only)
npm install

# Build the library for production
npm run build
```

This creates the following files in the `dist/` directory.

During build, nester files are copied from `src/squiz/nesters/` and any legacy GFB asset references (`1484642`) are automatically replaced with the current GFB asset ID (`1607588`). See `scripts/build-dist.js` Step 6.

```
dist/
├── components.min.js          UMD component bundle (React external)
├── theme-ntg.min.css          Complete NT.GOV.AU theme bundle (tokens + component CSS incl. GlobalAlert, Header)
├── theme-central.min.css      Complete NTG Central theme bundle (tokens + component CSS incl. GlobalAlert, Header)
├── index.html                 Interactive demo page
├── index.js                   Demo application bundle
├── index.css                  Demo application styles
├── nesters/                   Squiz Matrix nest_content HTML files
│   ├── head.html              <head> content (metadata, OG tags, favicons, Bootstrap CDN, theme CSS)
│   ├── skip_links.html        Skip navigation links
│   ├── header_content.html    Site header (alert banner, logo, navigation)
│   ├── footer_content.html    Site footer (links, logos, utility nav)
│   └── footer_js.html         Footer scripts (Bootstrap JS, components, search)
├── favicons/                  Favicon image assets
│   ├── apple-touch-icon-180x180.png
│   ├── favicon-32x32.png
│   └── favicon-16x16.png
└── images/                    Site image assets
    └── ntg-logo.png           NTG mono logo (print only)
```

### Source Files

The design parse template and nester source files are maintained at:

```
src/squiz/
├── design-parse.html              Matrix design parse template (server-side print())
├── nesters/
│   ├── head.html                  <head> content (meta, CSS, analytics, jQuery)
│   ├── skip_links.html            Skip navigation links
│   ├── header_content.html        (Empty placeholder — provided by Header component in a layout zone)
│   ├── footer_content.html        (Empty placeholder — provided by Footer component in a layout zone)
│   └── footer_js.html             Footer scripts (Bootstrap, React CDN, components, Funnelback)
└── layouts/                       Squiz DXP Page Layouts (manifest.json + markup.hbs per layout)
    └── full-width-section/        Single column, 3 zones: header / main / footer
```

### 2. Build Storybook (Optional)

For documentation and component preview:

```bash
npm run build-storybook
```

This creates a static Storybook site in `storybook-static/` that can be hosted separately.

## Deployment to Squiz Matrix

### Git File Bridge (GFB)

The repository is connected to Squiz Matrix via a **Git File Bridge** asset.

| Setting          | Value                            |
| ---------------- | -------------------------------- |
| **GFB Asset ID** | `1607588`                        |
| **Branch**       | `dev`                            |
| **Repository**   | `ntgovernment/web-design-system` |

All `dist/` files are served through the GFB. Use these keywords to reference them:

- **File contents** (inline HTML into nest_content): `%globals_asset_file_contents:1607588:dist/nesters/<file>.html%`
- **File URL** (for `src`/`href` attributes): `%globals_asset_url_with_hash:1607588:dist/<file>%`

### Step 1: Load Nesters into Design Areas

Each `MySource_AREA` nest_content area is populated using `globals_asset_file_contents`:

```
head:           %globals_asset_file_contents:1607588:dist/nesters/head.html%
skip_links:     %globals_asset_file_contents:1607588:dist/nesters/skip_links.html%
header_content: %globals_asset_file_contents:1607588:dist/nesters/header_content.html%
footer_content: %globals_asset_file_contents:1607588:dist/nesters/footer_content.html%
footer_js:      %globals_asset_file_contents:1607588:dist/nesters/footer_js.html%
```

Within the nester HTML files, all references to `dist/` assets use `%globals_asset_url_with_hash:1607588:dist/...%` for cache-busted URLs.

### Step 2: Sync the GFB

After pushing changes to the `dev` branch:

1. Open the GFB asset (`1607588`) in Matrix admin
2. Click **Sync Now** (or wait for the scheduled sync)
3. Verify the nesters render correctly in Preview mode

### Standard Design File

The Squiz Matrix design parse file is maintained at `src/squiz/design-parse.html`. It uses server-side `print()` to inline each nester from the Git File Bridge:

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
  <head>
    <script runat="server">
      print(`%globals_asset_contents_raw:1607588:dist/nesters/head.html%`);
    </script>
  </head>

  <body>
    <div id="top"></div>

    <script runat="server">
      print(
        `%globals_asset_contents_raw:1607588:dist/nesters/skip_links.html%`,
      );
    </script>
    <script runat="server">
      print(
        `%globals_asset_contents_raw:1607588:dist/nesters/header_content.html%`,
      );
    </script>

    <div class="ntg-body">
      <MySource_AREA id_name="body" design_area="body" />
    </div>

    <script runat="server">
      print(
        `%globals_asset_contents_raw:1607588:dist/nesters/footer_content.html%`,
      );
    </script>
    <script runat="server">
      print(`%globals_asset_contents_raw:1607588:dist/nesters/footer_js.html%`);
    </script>
  </body>
</html>
```

### Local Preview

The design template can be previewed locally during development:

```bash
npm run dev
# Open http://localhost:5173/squiz-preview.html
```

The Vite dev server assembles the design-parse template by inlining the nester HTML files from `src/squiz/nesters/` on each request. Edits to any nester file are reflected immediately on reload.

> **Note**: The local preview disables analytics (Google Analytics, Monsido/heatmaps) and loads React/jQuery from CDN since those dependencies are provided differently in production Matrix.

Each `MySource_AREA` nest_content area corresponds to a file in `dist/nesters/`. Asset references within each nester use `%globals_asset_url_with_hash:1607588:dist/...%` for cache-busted URLs served via GFB.

| Design Area      | Nester File                   | Description                                                                                                                      |
| ---------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `head`           | `nesters/head.html`           | Page title, metadata, Dublin Core, Open Graph, no-JS script, FontAwesome CSS, favicons, theme CSS, jQuery CDN                    |
| `skip_links`     | `nesters/skip_links.html`     | Skip-to-content and skip-to-footer links                                                                                         |
| `header_content` | `nesters/header_content.html` | Top page alert, NTG logo (print), site header with navigation and search                                                         |
| `footer_content` | `nesters/footer_content.html` | Footer links, social media, logos, utility links, acknowledgement                                                                |
| `footer_js`      | `nesters/footer_js.html`      | Bootstrap 5.3 bundle JS, FontAwesome fallback, lightbox plugins, React 18 CDN, components.min.js, Funnelback search autocomplete |

### Nester Reference

#### `head.html`

The `<head>` nester loads all page-level metadata, stylesheets, and pre-body scripts. Contents in order:

| Section          | What it loads                                                    | Asset reference                                                       |
| ---------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| Page title       | `%frontend_asset_name%` with `%globals_site_name%` fallback      | Squiz keywords                                                        |
| Metadata         | Description, robots, Dublin Core (`dcterms.*`), language         | `%frontend_asset_metadata_*%`                                         |
| Open Graph       | Title, type, URL, image, description, site name, dates, keywords | `%frontend_asset_*%`                                                  |
| No-JS script     | Swaps `no-js` → `js` class on `<html>`                           | Inline                                                                |
| Font Awesome 6   | Kit CSS from `kit.fontawesome.com/f73a36f593.css`                | External CDN                                                          |
| Favicons         | apple-touch-icon (180×180), favicon (32×32, 16×16)               | Matrix asset IDs (`./?a=1185686` etc.)                                |
| Theme CSS        | `dist/theme-ntg.min.css` — complete NTG theme bundle             | `%globals_asset_url_with_hash:1607588:dist/theme-ntg.min.css%`        |
| Print CSS        | Separate print stylesheet                                        | Matrix asset ID (`./?a=1300941`)                                      |
| jQuery           | `dist/globals/js/jquery.min.js`                                  | `%globals_asset_url_with_hash:1607588:dist/globals/js/jquery.min.js%` |
| SSJS console     | Server-side `ssconsole.log` stub                                 | Inline + `%globals_asset_contents_raw:1248208%`                       |
| Google Analytics | gtag.js with site-specific GA ID                                 | Conditional: `%begin_globals_site_metadata_site-googleAnalytics%`     |
| Monsido          | Accessibility monitoring and heatmaps                            | Conditional: `%begin_globals_site_metadata_site-monsido%`             |

> **Note:** All nesters now reference GFB asset `1607588` for both CSS/JS bundles and nester file contents.

#### `header_content.html`

The header nester renders the GlobalAlert and Header design system components as static HTML with Squiz Matrix keywords. See component-level docs for full markup:

- [GlobalAlert — CMS Integration](src/components/GlobalAlert/GLOBALALERT.md#squiz-matrix-cms-integration)
- [Header — CMS Integration](src/components/Header/HEADER.md#squiz-matrix-cms-integration)

| Section      | Component                                 | Key CMS keywords                                                                                                                 |
| ------------ | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Global alert | `GlobalAlert` (`global-alert--{variant}`) | `%globals_site_metadata_site-alertType%`, `site-alertTitle`, `site-alertMessage`                                                 |
| Print logo   | —                                         | `%globals_asset_url_with_hash:1607588:dist/images/ntg-logo.png%`                                                                 |
| Site header  | `Header` (`header__navbar`)               | `https://nt.gov.au` (logo link), `%globals_site_url%` (agency link), `%globals_site_name%`, `logo-ntg-mono.svg` (agency variant) |
| Mobile menu  | `Header` (`header__mobile-menu`)          | Same nav items as desktop                                                                                                        |
| Inline JS    | —                                         | GlobalAlert dismiss + hamburger toggle                                                                                           |

#### `footer_js.html`

The footer JS nester loads all page-level scripts after the closing `</body>` content. Contents in order:

| Section               | What it loads                                                                                            | Asset reference                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Bootstrap JS          | `dist/globals/js/bootstrap.bundle.min.js`                                                                | `%globals_asset_url_with_hash:1607588:dist/globals/js/bootstrap.bundle.min.js%` |
| Font Awesome fallback | jQuery check for FA6 Pro font-family, with commented fallback link                                       | Inline                                                                          |
| Lightbox              | Conditional load of lightbox CSS + `ntg-base-plugins.min.js` (only if `[data-plugin="lightbox"]` exists) | `%globals_asset_url_with_hash:1607588:dist/ntgbase/ntg-base-plugins.min.js%`    |
| React 18              | `react.production.min.js` + `react-dom.production.min.js` (required by UMD component bundle)             | unpkg.com CDN                                                                   |
| process.env shim      | `window.process = { env: { NODE_ENV: 'production' } }`                                                   | Inline                                                                          |
| Components JS         | `dist/components.min.js` — UMD component bundle                                                          | `%globals_asset_url_with_hash:1607588:dist/components.min.js%`                  |
| Anchor scroll         | Scrolls to hash target on page load                                                                      | Inline                                                                          |
| Alt JS                | Optional per-site additional JS                                                                          | Conditional: `%begin_globals_site_metadata_site-altJs%`                         |
| DataTables            | jQuery DataTables init for `.datatable` / `.data-table` elements                                         | Inline                                                                          |
| Funnelback            | Typeahead, Handlebars, and Funnelback autocompletion for search                                          | `%globals_asset_url_with_hash:1607588:dist/globals/js/*.js%`                    |

### Step 4: Create Component Service Templates

#### Example: Button Component Service

Create a **Standard Page** asset for each component you want to expose:

**Asset Name**: `NT Gov Button Component`

**Content (HTML):**

```html
<!-- Load the theme CSS -->
<link rel="stylesheet" href="%globals_asset_url:YOUR_THEME_CSS_ASSET_ID%" />

<div id="ntg-button-%asset_assetid%"></div>

<script type="module">
  import { Button } from '%globals_asset_url:YOUR_COMPONENTS_JS_ASSET_ID%';
  import { createRoot } from 'https://esm.sh/react-dom@18/client';
  import { createElement } from 'https://esm.sh/react@18';

  const container = document.getElementById('ntg-button-%asset_assetid%');
  const root = createRoot(container);

  root.render(
    createElement(Button, {
      variant: '%globals_get_variant:primary%',
      size: '%globals_get_size%',
      icon: '%globals_get_icon%',
      iconPosition: '%globals_get_iconPosition:left%',
      onClick: () => { %globals_get_onclick% }
    }, '%globals_get_label:Click Me%')
  );
</script>
```

**Metadata Fields**:

- `variant`: Select (primary, secondary, success, danger, warning, info, light, dark)
- `size`: Select (sm, default, lg)
- `label`: Text
- `icon`: Text (e.g., "fa-solid fa-home")
- `iconPosition`: Select (left, right)
- `onclick`: Text

### Step 5: Usage in Content Pages

Once deployed, content editors can:

1. **Create a new page** or edit existing page
2. **Add Component** via the content editor
3. **Select** "NT Gov Button Component"
4. **Configure** the component using metadata fields
5. **Publish** the page

## Alternative Deployment: Direct Import

For developers with more control, you can import the library directly in Paint Layouts or custom templates:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Bootstrap 5.3 -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- FontAwesome Kit -->
    <script
      src="https://kit.fontawesome.com/9bf658a5c7.js"
      crossorigin="anonymous"
    ></script>

    <!-- Design System Theme (pick one) -->
    <link
      rel="stylesheet"
      href="%globals_asset_url:YOUR_THEME_NTG_CSS_ASSET_ID%"
    />
  </head>
  <body>
    <div id="app"></div>

    <script type="module">
      import {
        Button,
        Card,
        Notification,
      } from "%globals_asset_url:YOUR_COMPONENTS_JS_ASSET_ID%";
      import { createRoot } from "https://esm.sh/react-dom@18/client";
      import { createElement as h } from "https://esm.sh/react@18";

      const root = createRoot(document.getElementById("app"));

      root.render(
        h(
          "div",
          { className: "container my-4" },
          h("h1", {}, "Welcome"),
          h(Button, { variant: "primary", icon: "fa-solid fa-home" }, "Home"),
          h(
            Card,
            { title: "Info", icon: "fa-solid fa-info-circle" },
            "This is a card",
          ),
          h(Notification, {
            variant: "success",
            title: "Success",
            message: "Operation completed.",
          }),
        ),
      );
    </script>
  </body>
</html>
```

## Theme Switching

### NT.GOV.AU Theme (Default)

The default theme uses the `ntg-` CSS variable prefix and NT Government branding colors.

### NTG Central Theme

To use the NTG Central theme, import the central theme CSS:

```html
<link
  rel="stylesheet"
  href="%globals_asset_url:YOUR_CENTRAL_THEME_CSS_ASSET_ID%"
/>
```

Or dynamically switch themes via JavaScript:

```javascript
// Load central theme
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "%globals_asset_url:YOUR_CENTRAL_THEME_CSS_ASSET_ID%";
document.head.appendChild(link);
```

## Best Practices

### 1. Version Management

- Create versioned folders (e.g., "v0.1.0", "v0.2.0")
- Don't overwrite existing versions
- Use Asset Lineage to track changes

### 2. Cache Busting

Matrix automatically handles cache busting through Asset IDs, but you can also:

- Append version query parameters: `?v=0.1.0`
- Use Matrix's cache management tools

### 3. Performance

- The theme CSS bundles (`theme-ntg.min.css`, `theme-central.min.css`) are self-contained — they include tokens, typography, and all component styles
- Lazy load components when possible
- Bootstrap is loaded from CDN for better caching

### 4. Testing

- Test in Matrix Preview mode before publishing
- Test across different browsers
- Verify Bootstrap CSS is loading correctly

### 5. Accessibility

- Components follow Bootstrap's accessibility guidelines
- Always test with screen readers
- Ensure proper ARIA labels

## Troubleshooting

### Components Not Rendering

- Verify Bootstrap CSS is loaded
- Check browser console for errors
- Ensure Asset IDs are correct in globals_asset_url

### Styling Issues

- Confirm theme CSS is loaded after Bootstrap
- Check CSS variable conflicts
- Verify Bootstrap version is 5.3+

### Import Errors

- Ensure using ES Module format
- Check if React/ReactDOM are available
- Verify file paths are correct

## Support

For issues or questions:

1. Check the main README.md
2. Review Storybook documentation at https://cmsexternal.nt.gov.au/webds/storybook
3. Contact the development team

## Related Documentation

- **[STORYBOOK_GFB_DEPLOYMENT.md](STORYBOOK_GFB_DEPLOYMENT.md)** - Deploy Storybook documentation site to Squiz Matrix
- [README.md](README.md) - Main project documentation
- [THEME_SWITCHING.md](src/themes/THEME_SWITCHING.md) - Theme switching implementation

## Updates

When updating the library:

1. Build new version locally (`npm run build`)
2. Commit `dist/` changes and push to `dev` branch
3. Sync GFB asset `1607588` in Matrix
4. Verify nesters render correctly in Preview mode
5. Test thoroughly across browsers
6. Communicate changes to content editors
