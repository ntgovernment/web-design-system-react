# Changelog

All notable changes to the NT Government Web Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Component-specific README files for Button, Card, Alert, and Typography components
- CONTRIBUTING.md with development guidelines and contribution process
- CHANGELOG.md to track version history
- Comprehensive documentation for HTML API feature

### Changed
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
  - **Typography**: Storybook documentation for typography system (not a component)
- Dual-theme support:
  - NTG theme (NT.GOV.AU) with Lato font
  - Central theme (NTG Central) with Roboto font
- Automated design token system:
  - 849 tokens in `design-tokens/tokens.json`
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
  - Typography system documentation in `src/typography/`
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
- `npm run tokens:validate` - Validate design token structure
- `npm run tokens:build` - Generate CSS from design tokens
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
- @typescript-eslint/* ^8.20.0

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
