# Bootstrap Typography Integration

This folder contains Bootstrap CSS variable overrides that connect Bootstrap's typography system to the design system's theme tokens, enabling seamless theme switching between NTG and Central themes.

## Overview

Bootstrap 5.3+ uses CSS custom properties (`--bs-*` variables) that can be overridden to customize typography, colors, and component styles. These files map Bootstrap variables to our design token system while preserving the theme-switching functionality.

## Files

### `bootstrap-ntg.css`
Bootstrap variable overrides for the **NT.GOV.AU theme**:
- Font family: **Lato**
- Color palette: NTG blue, orange, ochre
- Design language: Sharp corners, bold accents

### `bootstrap-central.css`
Bootstrap variable overrides for the **Central Australia theme**:
- Font family: **Roboto**
- Color palette: Central blues, warm tones
- Design language: Similar structure, different palette

## CSS Load Order

Proper CSS cascade is critical for theme switching to work correctly:

```html
<!-- 1. Bootstrap from CDN (base styles) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- 2. Typography override (theme-specific Bootstrap vars) -->
<link id="bootstrap-typography-css" href="./typography/bootstrap-ntg.css" rel="stylesheet">

<!-- 3. Theme CSS (theme-specific design tokens) -->
<link id="theme-css" href="./themes/ntg-theme.css" rel="stylesheet">
```

### Why This Order Matters

1. **Bootstrap CDN** provides base component styles with default `--bs-*` variables
2. **Typography override** redefines `--bs-*` variables to reference theme tokens (`--ntg-*` or `--central-*`)
3. **Theme CSS** defines the actual theme token values that the typography overrides reference

## Variable Mapping

### Typography Variables

| Bootstrap Variable | Maps To | NTG Value | Central Value |
|-------------------|---------|-----------|---------------|
| `--bs-font-sans-serif` | `--{theme}-type-font-default` | Lato | Roboto |
| `--bs-body-font-family` | `--{theme}-type-font-default` | Lato | Roboto |
| `--bs-body-font-size` | `--{theme}-type-desktop-body-default-size` | Desktop body | Desktop body |
| `--bs-body-color` | `--{theme}-clr-text-default` | #1f1e27 | Theme text |
| `--bs-heading-color` | `--{theme}-clr-text-default` | #1f1e27 | Theme text |
| `--bs-link-color` | `--{theme}-clr-link-default` | #1f1f5f | Theme link |
| `--bs-link-hover-color` | `--{theme}-clr-link-hover` | #c33826 | Theme hover |

### Color Variables

| Bootstrap Variable | Maps To | Purpose |
|-------------------|---------|---------|
| `--bs-primary` | `--{theme}-clr-action-pirmary` | Primary buttons, active states |
| `--bs-success` | `--{theme}-success-03-d` | Success alerts, badges |
| `--bs-info` | `--{theme}-info-03-d` | Info alerts, badges |
| `--bs-warning` | `--{theme}-warning-03-d` | Warning alerts, badges |
| `--bs-danger` | `--{theme}-danger-03-d` | Danger alerts, error states |
| `--bs-border-color` | `--{theme}-clr-border-subtle` | Component borders |

## Theme Switching Implementation

### In HTML/Demo Pages

```javascript
function switchTheme(themeName) {
  // Update typography override
  const typographyLink = document.getElementById('bootstrap-typography-css');
  typographyLink.href = `./typography/bootstrap-${themeName}.css`;
  
  // Update theme CSS
  const themeLink = document.getElementById('theme-css');
  themeLink.href = `./themes/${themeName}-theme.css`;
}

// Usage
switchTheme('ntg');     // Loads Lato font, NTG colors
switchTheme('central'); // Loads Roboto font, Central colors
```

### In React/Storybook

Import both files dynamically or use a theme provider:

```tsx
// .storybook/preview.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/typography/bootstrap-ntg.css'; // or bootstrap-central.css
import '../src/themes/ntg-theme.css';
```

## Responsive Typography

Both override files include mobile breakpoint adjustments:

```css
@media (max-width: 768px) {
  :root {
    --bs-body-font-size: var(--{theme}-type-mobile-body-default-size);
  }
}
```

This ensures Bootstrap components use the correct mobile typography from design tokens.

## Adding New Overrides

To add additional Bootstrap variable mappings:

1. Identify the Bootstrap CSS variable from [Bootstrap docs](https://getbootstrap.com/docs/5.3/customize/css-variables/)
2. Find the corresponding design token in `design-tokens/tokens.json`
3. Add the mapping to **both** `bootstrap-ntg.css` AND `bootstrap-central.css`
4. Test with theme switching enabled

### Example: Adding Display Heading Support

```css
/* In both bootstrap-ntg.css and bootstrap-central.css */
:root {
  --bs-display-font-weight: 700;
  --bs-display-line-height: 1.2;
  /* Display headings will inherit --bs-heading-color */
}
```

## Testing Theme Switching

Verify the following when testing:

- [ ] **Font changes**: NTG shows Lato, Central shows Roboto
- [ ] **Link colors**: Hover states use theme-specific hover colors
- [ ] **Button colors**: Primary button uses theme action color
- [ ] **Alert backgrounds**: Info/success/warning/danger use theme status colors
- [ ] **Headings**: Use theme text color, not Bootstrap defaults
- [ ] **Mobile responsive**: Typography scales at mobile breakpoints

## Future Automation

Currently, these files are **manually maintained**. In the future, they could be auto-generated from `design-tokens/tokens.json` by extending `scripts/build-tokens.js` to:

1. Extract Bootstrap-compatible mappings from tokens
2. Generate `bootstrap-{theme}.css` files automatically
3. Keep mappings in sync with token updates

This would follow the same pattern as the auto-generated theme CSS files.

## Resources

- [Bootstrap CSS Variables Documentation](https://getbootstrap.com/docs/5.3/customize/css-variables/)
- [Bootstrap Typography](https://getbootstrap.com/docs/5.3/content/typography/)
- [Design Tokens README](../../design-tokens/README.md)
- [Theme Switching Guide](../themes/THEME_SWITCHING.md)

## Support

For questions or issues with Bootstrap typography integration:

1. Check the variable mapping table above
2. Verify CSS load order in browser DevTools
3. Inspect computed `--bs-*` values in Elements panel
4. Ensure theme CSS loads after typography override
