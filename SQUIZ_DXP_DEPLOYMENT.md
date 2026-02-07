# Squiz DXP Component Services Deployment Guide

This guide explains how to deploy the NT Government Web Design System to Squiz DXP Component Services.

## Overview

The NT Government Web Design System is a Vite-based React component library designed to be deployed as Component Services in Squiz DXP (formerly Matrix). It provides reusable UI components styled with Bootstrap 5.3 and custom NT Government themes.

## Prerequisites

- Access to Squiz Matrix admin interface
- Node.js 18+ installed locally for building
- Understanding of Matrix Asset structure

## Build Process

### 1. Build the Library

```bash
# Install dependencies (first time only)
npm install

# Build the library for production
npm run build
```

This creates the following files in the `dist/` directory:

- `web-design-system.es.js` - ES Module format (recommended)
- `web-design-system.umd.js` - UMD format (for broader compatibility)
- `style.css` - Compiled CSS with theme variables
- `index.d.ts` - TypeScript type definitions
- Additional chunk files as needed

### 2. Build Storybook (Optional)

For documentation and component preview:

```bash
npm run build-storybook
```

This creates a static Storybook site in `storybook-static/` that can be hosted separately.

## Deployment to Squiz Matrix

### Step 1: Create File Assets

1. **Login to Matrix** with admin privileges
2. **Navigate** to the appropriate site structure
3. **Create a new folder** (e.g., "NT Gov Design System v0.1.0")

### Step 2: Upload Library Files

Create the following **File Assets** in Matrix:

#### JavaScript Files
1. **Create File Asset**: `web-design-system.es.js`
   - Upload: `dist/web-design-system.es.js`
   - Asset Type: JS File
   - Note the Asset ID

2. **Create File Asset**: `web-design-system.umd.js` (optional, for UMD support)
   - Upload: `dist/web-design-system.umd.js`
   - Asset Type: JS File
   - Note the Asset ID

#### CSS Files
3. **Create File Asset**: `style.css`
   - Upload: `dist/style.css`
   - Asset Type: CSS File
   - Note the Asset ID

#### TypeScript Definitions (optional)
4. **Create File Asset**: `index.d.ts`
   - Upload: `dist/index.d.ts`
   - Asset Type: Text File

### Step 3: Configure CDN Dependencies

The library depends on Bootstrap 5.3 and FontAwesome. Ensure both are loaded in your pages:

**Option A: Add to Design Template**
```html
<!-- Bootstrap 5.3 -->
<link 
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
  rel="stylesheet" 
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
  crossorigin="anonymous"
>

<!-- FontAwesome Kit -->
<script src="https://kit.fontawesome.com/9bf658a5c7.js" crossorigin="anonymous"></script>
```

**Option B: Add via Paint Layout**
In your Paint Layout, add both the Bootstrap CDN link and FontAwesome Kit script in the `<head>` section.

### Step 4: Create Component Service Templates

#### Example: Button Component Service

Create a **Standard Page** asset for each component you want to expose:

**Asset Name**: `NT Gov Button Component`

**Content (HTML):**
```html
<div id="ntg-button-%asset_assetid%"></div>

<script type="module">
  import { Button } from '%globals_asset_url:YOUR_ES_MODULE_ASSET_ID%';
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
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- FontAwesome Kit -->
  <script src="https://kit.fontawesome.com/9bf658a5c7.js" crossorigin="anonymous"></script>
  
  <!-- Design System Styles -->
  <link rel="stylesheet" href="%globals_asset_url:YOUR_STYLE_CSS_ASSET_ID%">
</head>
<body>
  <div id="app"></div>
  
  <script type="module">
    import { Button, Card, Alert } from '%globals_asset_url:YOUR_ES_MODULE_ASSET_ID%';
    import { createRoot } from 'https://esm.sh/react-dom@18/client';
    import { createElement as h } from 'https://esm.sh/react@18';
    
    const root = createRoot(document.getElementById('app'));
    
    root.render(
      h('div', { className: 'container my-4' },
        h('h1', {}, 'Welcome'),
        h(Button, { variant: 'primary', icon: 'fa-solid fa-home' }, 'Home'),
        h(Card, { title: 'Info', icon: 'fa-solid fa-info-circle' }, 'This is a card'),
        h(Alert, { variant: 'success', icon: 'fa-solid fa-circle-check' }, 'Success!')
      )
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
<link rel="stylesheet" href="%globals_asset_url:YOUR_CENTRAL_THEME_CSS_ASSET_ID%">
```

Or dynamically switch themes via JavaScript:
```javascript
// Load central theme
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '%globals_asset_url:YOUR_CENTRAL_THEME_CSS_ASSET_ID%';
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
- Use ES Module format (`web-design-system.es.js`) for modern browsers
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
2. Review Storybook documentation
3. Contact the development team

## Updates

When updating the library:
1. Build new version locally
2. Create new versioned folder in Matrix
3. Upload new dist files
4. Test thoroughly
5. Update component services to use new version
6. Communicate changes to content editors
