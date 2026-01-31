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
import { Button, Card, Alert, Icon } from '@ntgovernment/web-design-system';
import '@ntgovernment/web-design-system/components.min.css';
import '@ntgovernment/web-design-system/ntg-theme.min.css'; // or central-theme.min.css

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Welcome">
        <p>This is a card component</p>
      </Card>
      <Alert variant="success">Operation successful!</Alert>
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
>
```

### FontAwesome Icons

The library uses FontAwesome for icons. Add the FontAwesome Kit to your HTML:

```html
<script src="https://kit.fontawesome.com/9bf658a5c7.js" crossorigin="anonymous"></script>
```

#### Using Icons in Components

Components support FontAwesome icons via the `icon` prop:

```tsx
import { Button, Alert, Card } from '@ntgovernment/web-design-system';

// Button with icon
<Button variant="primary" icon="fa-solid fa-home" iconPosition="left">
  Home
</Button>

// Icon-only button (requires aria-label for accessibility)
<Button variant="primary" icon="fa-solid fa-search" aria-label="Search" />

// Alert with icon
<Alert variant="success" icon="fa-solid fa-circle-check">
  Your changes have been saved!
</Alert>

// Card with icon in header
<Card title="Dashboard" icon="fa-solid fa-chart-line">
  View your analytics
</Card>
```

#### Icon Props

- **Button**: `icon` (icon class), `iconPosition` ('left' | 'right')
- **Alert**: `icon` (icon class)
- **Card**: `icon` (icon class, displayed in header)

All icon classes should follow FontAwesome's naming convention (e.g., `fa-solid fa-home`, `fa-regular fa-user`).

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
   <link rel="stylesheet" href="/path/to/style.css">
   ```
4. **Use components**: Components are available as React components

### Example Squiz DXP Integration

```html
<!DOCTYPE html>
<html>
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="%globals_asset_url:YOUR_STYLE_ASSET_ID%">
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import { Button } from '%globals_asset_url:YOUR_JS_ASSET_ID%';
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

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Follow the existing code style
2. Write TypeScript with proper types
3. Add Storybook stories for new components
4. Update documentation

## License

MIT
