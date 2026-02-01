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

```bash
npm install @ntgovernment/web-design-system
```

## Distribution Files

After building (`npm run build`), the `dist/` folder contains:

- **components.min.js** - Minified ES module bundle of all React components (23KB)
- **components.min.css** - Component-specific styles (currently uses Bootstrap classes)
- **ntg-theme.min.css** - Minified NT.GOV.AU theme with CSS variables (11KB)
- **central-theme.min.css** - Minified NTG Central theme with CSS variables (12KB)
- **index.html** - Demo page showcasing all components with theme switching
- **index.d.ts** - TypeScript type definitions

## Usage

### Basic Usage

```tsx
import {
  Button,
  Card,
  Notification,
  Icon,
} from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/components.min.css";
import "@ntgovernment/web-design-system/ntg-theme.min.css"; // or central-theme.min.css

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Welcome">
        <p>This is a card component</p>
      </Card>
      <Notification
        variant="success"
        title="Success"
        message="Operation completed successfully!"
      />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="2rem" />
    </div>
  );
}
```

### Using Themes

The library includes two pre-configured themes:

#### NT.GOV.AU Theme (Default)

Uses CSS variables with `ntg-` prefix:

```css
--ntg-primary: #003366;
--ntg-secondary: #6c757d;
/* ... more variables */
```

#### NTG Central Theme

Uses CSS variables with `central-` prefix:

```css
--central-primary: #0d6efd;
--central-secondary: #6c757d;
/* ... more variables */
```

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

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Validate design tokens
npm run tokens:validate

# Generate theme CSS from design tokens
npm run tokens:build

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build library
npm run build

# Build Storybook
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

#### Design Token Scripts

- **`npm run tokens:validate`** - Validate design token structure
  - Checks `design-tokens/tokens.json` for errors
  - Validates token format and required fields
  - Run before `tokens:build`
- **`npm run tokens:build`** - Generate CSS from design tokens
  - Uses Style Dictionary to transform tokens
  - Outputs to `src/themes/`
  - Generates: `common.css`, `grid.css`, `typography.css`, `ntg-theme.css`, `central-theme.css`, `base-variables.css`

#### Utility Scripts

- **`npm run generate-story-data`** - Generate Storybook story catalog
  - Creates `.storybook/story-data.json`
  - Required for HTML API functionality
  - Automatically runs before build and Storybook commands

#### Pre/Post Hooks

- **`prebuild`** - Runs before `build` (generates story data)
- **`prestorybook`** - Runs before `storybook` (generates story data)
- **`prebuild-storybook`** - Runs before `build-storybook` (generates story data)

### Design Token Workflow

This project uses an automated design token system:

1. **Source**: Design tokens are exported from Figma as `design-tokens/tokens.json`
2. **Transform**: Style Dictionary converts tokens to CSS custom properties
3. **Output**: Generated theme files in `src/themes/`
4. **Integration**: Vite bundles the CSS into the final library

See [design-tokens/README.md](design-tokens/README.md) for detailed workflow documentation.

## Deployment to Squiz DXP Component Services

This library is designed to be deployed as Component Services in Squiz DXP.

### Build for Production

```bash
npm run build
```

This creates:

- `dist/web-design-system.es.js` - ES module format
- `dist/web-design-system.umd.js` - UMD format for broader compatibility
- `dist/style.css` - Compiled styles
- `dist/index.d.ts` - TypeScript declarations

### Deployment Steps

1. **Build the library**: Run `npm run build`
2. **Upload to Squiz Matrix**: Upload the `dist` directory contents to Matrix
3. **Reference in Component Services**:
   ```html
   <script type="module" src="/path/to/web-design-system.es.js"></script>
   <link rel="stylesheet" href="/path/to/style.css" />
   ```
4. **Use components**: Components are available as React components

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

You can create custom themes by defining CSS variables:

```css
:root {
  /* Your custom theme variables */
  --custom-primary: #yourcolor;
  --custom-secondary: #yourcolor;

  /* Map to Bootstrap variables */
  --bs-primary: var(--custom-primary);
  --bs-secondary: var(--custom-secondary);
}
```

### Figma Design Tokens

Themes are based on design tokens exported from Figma and automatically transformed into CSS.

#### Token Workflow

1. **Export from Figma**: Export design tokens as JSON from your Figma design file
2. **Update tokens**: Replace `design-tokens/tokens.json` with the new export
3. **Generate CSS**: Run `npm run tokens:build` to transform tokens into CSS
4. **Rebuild library**: Run `npm run build`

#### Token Commands

```bash
# Validate token structure
npm run tokens:validate

# Generate CSS from tokens
npm run tokens:build

# Build library (includes token generation)
npm run build
```

#### Automated Generation

Theme CSS files in `src/themes/` are automatically generated from design tokens:

- `ntg-theme.css` - Generated from NTG theme tokens
- `central-theme.css` - Generated from Central theme tokens

⚠️ **Do not edit theme CSS files manually**. All changes should be made in `design-tokens/tokens.json`.

For more details, see [design-tokens/README.md](design-tokens/README.md).

## Components

### Available Components

- **Button**: Configurable button component with multiple variants and icon support
  - Props: `variant`, `size`, `disabled`, `icon`, `iconPosition`, `aria-label`
  - Supports FontAwesome icons in left/right positions or icon-only mode
- **Card**: Container component for content with optional icon in header
  - Props: `title`, `variant`, `footer`, `icon`
  - Icon appears before the card title
- **Alert**: Alert/notification component with contextual icon support
  - Props: `variant`, `dismissible`, `onDismiss`, `icon`
  - Icons help communicate alert context (success, warning, error, info)

More components will be added over time.

## CSS Variables Reference

### NT.GOV.AU Theme (`ntg-` prefix)

```css
--ntg-primary
--ntg-secondary
--ntg-success
--ntg-info
--ntg-warning
--ntg-danger
--ntg-light
--ntg-dark
--ntg-primary-dark
--ntg-primary-light
--ntg-accent
--ntg-accent-light
```

### NTG Central Theme (`central-` prefix)

```css
--central-primary
--central-secondary
--central-success
--central-info
--central-warning
--central-danger
--central-light
--central-dark
--central-primary-dark
--central-primary-light
--central-accent
--central-accent-light
```

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
   <link rel="stylesheet" href="./ntg-theme.min.css" />
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

1. Load theme CSS file (`ntg-theme.min.css` or `central-theme.min.css`)
2. Ensure theme CSS loads after Bootstrap CSS
3. Check browser DevTools to verify CSS variables are defined
4. Clear browser cache

#### Build Errors

**Problem**: `npm run build` fails.

**Solutions**:

1. Run `npm run tokens:validate` first to check token structure
2. Delete `node_modules` and run `npm install` again
3. Check Node.js version (18+ required)
4. Review error messages for specific file issues

#### Storybook Not Starting

**Problem**: `npm run storybook` fails or shows errors.

**Solutions**:

1. Delete `.storybook/story-data.json` and regenerate: `npm run generate-story-data`
2. Clear Storybook cache: Delete `node_modules/.cache/storybook`
3. Verify port 6006 is not in use
4. Check for conflicting Storybook addons

#### Design Token Changes Not Reflecting

**Problem**: Modified tokens don't appear in generated CSS.

**Solutions**:

1. Run `npm run tokens:validate` to check for JSON errors
2. Run `npm run tokens:build` to regenerate CSS
3. Check `src/themes/` for updated files
4. Rebuild library: `npm run build`
5. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)

### Getting Help

If you encounter issues not covered here:

1. **Check Documentation**:
   - [design-tokens/README.md](design-tokens/README.md)
   - [src/themes/README.md](src/themes/README.md)
   - [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)
   - Component-specific README files

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
- Testing procedures
- Pull request process
- Commit message guidelines

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes following the coding standards
4. Add/update tests and documentation
5. Run `npm run build` to ensure no errors
6. Commit with conventional commit format: `feat: add new component`
7. Push to your fork and create a pull request

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes, new features, and bug fixes.

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2026 Northern Territory Government
