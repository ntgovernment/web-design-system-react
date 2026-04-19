# Changelog

All notable changes to the NT Government Web Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- **Storybook CSS deduplication**: Eliminated redundant CSS loading that caused stylesheets to be processed 2–3 times per component
  - Removed 45 static CSS imports from `.storybook/preview.tsx` (components now self-import their base CSS)
  - Added `import './Component.css'` to 6 components that were missing it: Button, Notification, Tag, Pill, Image, Footer
  - Added duplicate guards to `loadBootstrapCSS()` and `loadFontAwesome()` to prevent re-injection on every render
  - Consolidated 15 per-component `loadXxxStyles()` functions (~200 lines) into a single generic `loadComponentThemeCSS()` function that skips loading when the same href is already present
- **Design Tokens v3.1.0 Bundled CSS Migration**: Switched from individual token CSS imports to self-contained bundled theme files (`theme-ntg.bundled.css` / `theme-central.bundled.css`)
  - `.storybook/preview.tsx`: replaced 5 individual token imports (`base-variables`, `common`, `grid`, `typography`, `typography-literals`) with single `theme-ntg-bundled` import; updated `loadThemeCSS()` for dynamic theme switching
  - `src/main.css`: switched from `theme-ntg` to `theme-ntg-bundled`
  - `scripts/build-theme-bundles.js`: simplified to read one bundled theme file per theme instead of 4 individual files
  - `.storybook/main.ts`: added `resolve.alias` in `viteFinal` to work around Vite exports resolution for `.bundled.css` files
  - `vite.config.ts`: added matching `resolve.alias` for dev and build modes
  - Removed `@import` statements for individual token CSS from 10 component files (TopicListing, Document, FileUpload, SideNavigation, Callout, StepList)
- **Design Tokens v3 Migration**: Updated all component CSS to match `@ntgovernment/web-design-tokens` v3.0 token renames
  - Spacing: `--sp-xxl` → `--sp-2xl`, `--sp-xxxl` → `--sp-3xl` (13 component files, 32 references)
  - Typography: `--type-font-default` → `--type-font-family-default` (22 component files)
  - Typography: `--type-body-small-*` → `--type-body-sm-*` (Card)
  - Typography: `--type-uppercase-small-*` → `--type-uppercase-sm-*` (Tag, Table)
  - Typography: `--type-button-label-*` → `--type-button-label-default-*` (Pill)
  - Typography: `--type-mobile-heading-h4-*` → `--type-mobile-h4-*` (GlobalAlert)

### Fixed

- **Footer theme overrides**: Removed broken indirection through non-existent prefixed spacing (`--ntg-sp-*`, `--central-sp-*`), border-width (`--ntg-border-width-md`, `--central-border-width-md`), and button typography tokens. Common tokens are used directly.
- **Build system**: Strip `@import` statements from concatenated theme bundle CSS before minification — prevents invalid mid-file `@import` in dist output
- **Component CSS**: Removed `@import` statements from Button.css and Tag.css (tokens are loaded by theme bundles and Storybook preview)
- **Storybook**: Added missing `base-variables.css` import to `.storybook/preview.tsx` for `--type-desktop-*` alias availability

### Added

- **Design Tokens Package**: Migrated to `@ntgovernment/web-design-tokens` (v2.0.0) as an external npm dependency
  - Added `.npmrc` scoping `@ntgovernment` packages to the GitHub Packages registry
  - Component CSS imports now use package export specifiers (e.g. `@ntgovernment/web-design-tokens/css/common`)
  - Storybook preview imports updated to use package specifiers
  - Dev-mode theme switching (`index.html`, `App.tsx`) updated to serve files from `node_modules/@ntgovernment/web-design-tokens`
- **Squiz Matrix Design Nesters**: Added `src/squiz/` with a design parse template and 5 HTML nesters for Squiz DXP deployment
  - `design-parse.html` — Matrix design file that maps nesters to page regions via `print()` calls
  - `nesters/head.html` — `<head>` content (meta, favicons, Bootstrap/FontAwesome CDNs, jQuery CDN) using Squiz Matrix keywords (`%frontend_asset_%`, `%globals_%`)
  - `nesters/skip_links.html` — skip navigation link
  - `nesters/header_content.html` — global alert banner, site header, mobile search with Squiz Matrix keywords
  - `nesters/footer_content.html` — site footer using `%globals_site_metadata_site-*%` keywords for all footer sections (footerInfo, footerSocial, welcomeToCountry, careTakerMessage)
  - `nesters/footer_js.html` — Bootstrap JS, React 18 CDN, `process.env` shim, components bundle, Funnelback search
  - Vite plugin `squizPreviewPlugin` serves `/squiz-preview.html` during `npm run dev` for local preview
  - Build outputs nesters and static assets (favicons, logo) to `dist/`
- **Vendor Files Consolidation**: Consolidated 6 vendor files from ntgbase GFB (1484642) into `src/squiz/vendor/` for deployment via this repo's GFB (1607588)
  - `globals/js/bootstrap.bundle.min.js` — Bootstrap 5.3 JS bundle
  - `globals/js/typeahead.bundle.min.js` — Typeahead for search autocomplete
  - `globals/js/handlebars.min.js` — Handlebars templating for Funnelback
  - `globals/js/funnelback.autocompletion-2.6.0.js` — Funnelback search autocompletion
  - `ntgbase/images/ntg-desert-rose-reverse.svg` — NTG desert rose logo reversed
  - `ntgbase/images/logo-ntg-mono.svg` — NTG monochrome logo for footer
  - Build Step 7 in `build-dist.js` recursively copies vendor files to `dist/`

### Removed

- `design-tokens/` folder (`tokens.json`, `DESIGN-TOKENS.md`, `config/style-dictionary.config.js`)
- `scripts/build-tokens.js` and `scripts/validate-tokens.js`
- Generated `src/themes/` CSS files: `base-variables.css`, `common.css`, `grid.css`, `theme-ntg.css`, `theme-central.css`, `typography.css`, `typography-literals.css`, `typography-ntg.css`, `typography-central.css`
- `style-dictionary` devDependency
- `tokens:build` and `tokens:validate` npm scripts

### Changed

- `scripts/build-theme-bundles.js`: resolves token CSS from `node_modules/@ntgovernment/web-design-tokens/dist/css/`
- `scripts/validate-css.js`: now validates theme files from the installed `@ntgovernment/web-design-tokens` package
- Added `server.fs.allow: ['..']` to `vite.config.ts` to permit serving token CSS in Vite dev server
- **Renamed distribution theme bundles** for naming consistency:
  - `dist/ntg-theme.min.css` → `dist/theme-ntg.min.css`
  - `dist/central-theme.min.css` → `dist/theme-central.min.css`
  - `package.json` export specifiers updated accordingly (`./theme-ntg.min.css`, `./theme-central.min.css`)
- **Fixed Storybook GitHub Pages 404 errors** (`@storybook/addon-vitest`, design token CSS, component CSS):
  - `staticDirs` in `.storybook/main.ts` now serves `node_modules/@ntgovernment/web-design-tokens/dist/css/` at `/design-tokens-css` so token CSS is available in the built output
  - Added `transformIndexHtml` Vite plugin in `viteFinal` to convert the absolute `/vite-inject-mocker-entry.js` injected by `@storybook/addon-vitest` to a relative path so Vite correctly prepends the configured base path
  - `loadThemeCSS()` and `loadBootstrapTypography()` in `.storybook/preview.tsx` now reference token CSS via `${import.meta.env.BASE_URL}design-tokens-css/…` instead of hardcoded `/node_modules/…` paths
  - Removed redundant dynamic `<link>` loading of `common`, `grid`, `typography`, `typography-literals`, and `base-variables` CSS (these are already bundled into the Storybook JS output via top-level ES imports)
  - Removed `loadButtonCommonStyles()`: the function used `new URL(staticString, import.meta.url)`, which caused Vite to copy `Button.css` verbatim (bypassing PostCSS), leaving a bare `@import "@ntgovernment/web-design-tokens/css/common"` in the output that browsers cannot resolve; `Button.css` is already correctly processed via the top-level ES import

### Added

- **Image Component**: Responsive image component with Bootstrap styling integration
  - Responsive fluid images (max-width: 100%, height: auto) enabled by default
  - Thumbnail styling with borders, padding, shadows using design tokens
  - Border radius variants (sm, md, lg, circle) with theme-aware values
  - Automatic semantic `<figure>` wrapper when caption is provided
  - Design token integration for all styling (borders, shadows, spacing, radii)
  - Theme-aware border radius and caption colors for NTG and Central themes
  - Support for native HTML img attributes (srcSet, sizes, loading)
  - WCAG AAA compliant with required alt text
  - Asset folder structure for development placeholders (src/assets/images/)
  - TypeScript type declarations for image imports (.webp, .png, .jpg, .jpeg)
  - 11 comprehensive Storybook stories showcasing all variants
  - Complete documentation with accessibility guidelines
  - Integration with demo page and theme switching
- **Callout Component**: Informational message component with prominent left border
  - Clean, structured layout with heading and content text
  - Design token-based spacing (--sp-xl for padding, --sp-md and --sp-xs for gaps)
  - Prominent 8px left border using --clr-border-strong-01 (#1F1F5F)
  - Typography optimized for readability (24px heading, 16px body with proper line-height)
  - Theme-aware color adaptation for NTG and Central themes
  - WCAG AAA compliant color contrast
  - Responsive text wrapping for long content
  - Storybook stories with multiple content length examples
  - Comprehensive documentation and usage examples
- **Notification Component**: Status callout component with structured content layout
  - 4 status variants (info, success, warning, danger) with auto-assigned FontAwesome Light icons
  - Distinctive 8px left accent bar for visual emphasis
  - Structured API with separate title and message props
  - Optional title with smart gap handling (no gap when title is empty)
  - Design token-based sizing (--sp-xxl for icon container, --sp-xl for icon font size)
  - Non-dismissible by design for persistent status messages
  - WCAG AAA compliant with proper ARIA roles
  - Theme-aware color adaptation for NTG and Central themes
  - Storybook stories with interactive demos
  - Comprehensive documentation and usage examples
- **Tag Component**: Simple status indicator component with 6 color variants (default, grey, green, blue, warning, red)
  - Uppercase typography using design token system
  - Theme-aware color adaptation for NTG and Central themes
  - WCAG AAA compliant color contrast
  - Storybook stories with interactive demos
  - Comprehensive documentation and usage examples
- Component-specific documentation for Button, Card, Alert, and content showcase files
- CONTRIBUTING.md with development guidelines and contribution process
- CHANGELOG.md to track version history
- Comprehensive documentation for HTML API feature

### Changed

- **Storybook Organization**: Introduced "⭐ Recent" group for newly-created components
  - New components now appear at the top of Storybook sidebar for easy discovery
  - Components are moved to "Components" group once stable
  - Updated `.storybook/preview.tsx` with story ordering configuration
- **Component Removal**: Removed Alert component in favor of the new Notification component for better design consistency
- Updated LICENSE from GPL v3 to MIT for broader compatibility
- Enhanced main README with complete npm scripts documentation and HTML API section

## [0.1.0] - 2026-02-01

### Added

- Initial release of NT Government Web Design System
- React component library with TypeScript support
- Four production-ready components:
  - **Button**: Configurable button with 3 variants (primary, secondary, tertiary), icon support, and size options
  - **Card**: Flexible container with header, body, footer, 8 contextual variants, and icon support
  - **Alert**: Notification component with 8 variants, dismissible functionality, and icon support
  - **Icon**: FontAwesome icon wrapper with accessibility features and status color support
  - **Typography**: Storybook content showcase for typography system (moved to content/ folder)
- Dual-theme support:
  - NTG theme (NT.GOV.AU) with Lato font
  - Central theme (NTG Central) with Roboto font
- Automated design token system:
  - 849 design tokens (now in `@ntgovernment/web-design-tokens`)
  - Style Dictionary integration for CSS generation
  - Layered CSS architecture (common, grid, typography, themes)
  - 28-30% reduction in theme file sizes through optimization
- Comprehensive documentation:
  - Main README with quick start and component usage
  - FEATURES.md with detailed feature list and metrics
  - IMPLEMENTATION_SUMMARY.md with technical implementation details
  - DESIGN_TOKENS_IMPLEMENTATION.md with deep dive into token system
  - SQUIZ_DXP_DEPLOYMENT.md for Squiz DXP integration
  - Theme-specific documentation in `src/themes/`
  - Bootstrap typography integration documentation in `src/themes/typography-integration.md`
- Storybook 8.6.15 setup:
  - 30+ component stories with examples
  - Accessibility addon (@storybook/addon-a11y) configured for WCAG AAA testing
  - Custom HTML API plugin for component rendering
  - Theme switching toolbar (NTG ↔ Central)
  - Auto-documentation generation
- Build tooling:
  - Vite 6.0.7 for fast development and optimized production builds
  - TypeScript 5.7.2 with strict mode
  - ESLint for code quality
  - Custom build scripts for token processing and distribution optimization
- Development features:
  - Hot module replacement (HMR) for rapid development
  - Source maps for debugging
  - TypeScript declaration files for type safety
  - `prebuild` hooks for automated token generation
- Deployment support:
  - Optimized build output (~23KB ES module)
  - Minified theme CSS files (11-12KB)
  - UMD and ES module formats
  - Squiz DXP Component Services integration guide
- External dependencies:
  - Bootstrap 5.3.3 (loaded via CDN)
  - FontAwesome icons (kit support)
  - React 18.3.1
  - Google Fonts (Lato, Roboto)
- Accessibility features:
  - WCAG AAA compliance target
  - ARIA attributes on components
  - Semantic HTML structure
  - Screen reader support
  - Keyboard navigation support

### Build Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build library for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build static Storybook site
- `npm run generate-story-data` - Generate Storybook data for HTML API
- `npm run preview` - Preview production build

### Documentation

- README.md - Main project documentation with setup and usage
- Component documentation with usage examples and API references
- Design token workflow documentation with debugging guide
- Deployment documentation for Squiz DXP
- Theme switching implementation guide
- Bootstrap typography integration guide

### Dependencies

**Production:**

- react ^18.3.1
- react-dom ^18.3.1

**Development:**

- vite ^6.0.7
- typescript ^5.7.2
- @vitejs/plugin-react ^4.3.3
- storybook 8.6.15
- style-dictionary ^5.2.0
- eslint ^9.17.0
- @typescript-eslint/\* ^8.20.0

### License

- MIT License

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Chrome Mobile (latest)

---

## Release Notes Format

Going forward, releases will follow this structure:

### Major Version (X.0.0)

- Breaking changes
- Major new features
- Significant refactoring

### Minor Version (0.X.0)

- New components
- New features (backward compatible)
- Enhancements to existing components
- New design tokens or theme updates

### Patch Version (0.0.X)

- Bug fixes
- Documentation updates
- Performance improvements
- Dependency updates

---

## Upcoming Features

Planned for future releases:

- Additional components (Table, Form, Modal, Dropdown, Badge, Tabs)
- Unit testing infrastructure (Vitest)
- End-to-end testing (Playwright)
- CI/CD pipeline (GitHub Actions)
- npm package publishing
- Additional theme variants
- Expanded icon library
- Advanced accessibility features
- Performance optimizations

---

[Unreleased]: https://github.com/ntgovernment/web-design-system/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/ntgovernment/web-design-system/releases/tag/v0.1.0
