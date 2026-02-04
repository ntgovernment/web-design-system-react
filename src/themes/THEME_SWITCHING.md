# Theme Switching Guide

## Overview

The design system now supports **dual-variable system** for flexible theme switching with both prefixed and unprefixed semantic variables.

## File Structure

```
src/themes/
├── common.css              # Shared tokens (shadows, spacing, borders, radii)
├── grid.css                # Bootstrap grid configuration
├── typography.css          # Theme-agnostic typography
├── base-variables.css      # NEW: Unprefixed semantic variables (82 vars)
├── theme-ntg.css           # NT.GOV.AU theme (255 lines)
└── theme-central.css       # NTG Central theme (235 lines)
```

## Variable System

### Prefixed Variables (Theme-Specific)

Each theme defines its own prefixed variables:

```css
/* theme-ntg.css */
--ntg-blue-03-d: #1f1f5f;
--ntg-clr-bg-default: var(--ntg-neutral-white);
--ntg-type-desktop-h1-size: var(--type-heading-h1-size);

/* theme-central.css */
--central-blue-04: #102040;
--central-clr-bg-default: var(--central-neutrals-01);
--central-type-desktop-h1-size: var(--type-heading-h1-size);
```

### Unprefixed Variables (Theme Switching)

Both themes also define unprefixed semantic variables that reference their prefixed counterparts:

```css
/* theme-ntg.css */
--clr-bg-default: var(--ntg-clr-bg-default);
--clr-action-primary: var(--ntg-clr-action-pirmary);
--type-desktop-h1-size: var(--ntg-type-desktop-h1-size);

/* theme-central.css */
--clr-bg-default: var(--central-clr-bg-default);
--clr-action-primary: var(--central-clr-action-pirmary);
--type-desktop-h1-size: var(--central-type-desktop-h1-size);
```

## Usage Patterns

### Pattern A: Direct Theme Import (Existing)

Import a specific theme file. Components can use either prefixed or unprefixed variables:

```css
/* In your app CSS */
@import "./themes/theme-ntg.css";

/* Components can use either: */
.button {
  background: var(--ntg-clr-action-primary); /* Prefixed - works */
  background: var(--clr-action-primary); /* Unprefixed - also works */
}
```

**Pros:** Simple, backward compatible
**Cons:** Hard-coded theme, no dynamic switching

### Pattern B: Base Variables + CSS File Switching

Use base-variables.css as defaults and swap theme CSS files:

```html
<!-- index.html -->
<link rel="stylesheet" href="./themes/base-variables.css" />
<link rel="stylesheet" href="./themes/theme-ntg.css" id="theme-css" />
```

```javascript
// Theme switcher
function switchTheme(themeName) {
  const themeLink = document.getElementById("theme-css");
  themeLink.href = `./themes/${themeName}-theme.css`;
}

// Usage
switchTheme("central"); // Switch to Central theme
switchTheme("ntg"); // Switch to NTG theme
```

```css
/* Components use unprefixed variables only */
.button {
  background: var(--clr-action-primary);
  font-size: var(--type-desktop-h1-size);
}
```

**Pros:** Simple theme switching, clean component CSS
**Cons:** Full CSS file reload (small performance cost)

### Pattern C: Data Attribute Switching (Future Enhancement)

This would require theme-specific override files scoped to `[data-theme]`:

```html
<body data-theme="central">
  <button>Click me</button>
</body>
```

**Note:** This pattern requires additional override files (not yet implemented). Would need:

- `ntg-overrides.css` with `[data-theme="ntg"]` scope
- `central-overrides.css` with `[data-theme="central"]` scope

## Component Development Guidelines

### ✅ Recommended: Use Unprefixed Semantic Variables

```css
.card {
  background: var(--clr-bg-default);
  color: var(--clr-text-default);
  border: 1px solid var(--clr-border-subtle);
  font-size: var(--type-desktop-body-default-size);
}
```

**Benefits:**

- Works with theme switching
- Cleaner, more semantic
- Theme-agnostic component code

### ❌ Avoid: Hardcoded Theme Prefixes in Components

```css
/* Don't do this in reusable components */
.card {
  background: var(--ntg-clr-bg-default); /* Hard-coded to NTG theme */
}
```

**Problem:** Component only works with one theme

### ✅ Acceptable: Prefixed Variables in Theme-Specific Overrides

```css
/* ntg-specific.css - Theme-specific customizations */
.hero-banner {
  background: var(--ntg-ochre-02-d); /* Use NTG accent color */
}
```

## Available Semantic Variables

### Color Variables (52 total)

**Backgrounds:**

- `--clr-bg-default`, `--clr-bg-shade`, `--clr-bg-shade-alt`
- `--clr-bg-dark`, `--clr-bg-dark-alt`
- `--clr-bg-accent`, `--clr-bg-accent-alt`

**Actions:**

- `--clr-action-primary`, `--clr-action-hover`, `--clr-action-pressed`
- `--clr-action-disabled`, `--clr-action-secondary`

**Borders:**

- `--clr-border-strong-01`, `--clr-border-strong-02`, `--clr-border-strong-03`
- `--clr-border-subtle`, `--clr-border-inverse`, `--clr-border-accent`

**Text:**

- `--clr-text-default`, `--clr-text-inverse`, `--clr-text-muted`, `--clr-text-emphasis`

**Links:**

- `--clr-link-default`, `--clr-link-hover`, `--clr-link-visited`, `--clr-link-pressed`
- `--clr-link-inverse`, `--clr-link-inverse-hover`, `--clr-link-inverse-visited`

**Status:**

- `--clr-status-info`, `--clr-status-info-bg`
- `--clr-status-success`, `--clr-status-success-bg`
- `--clr-status-warning`, `--clr-status-warning-bg`
- `--clr-status-danger`, `--clr-status-danger-bg`

**Focus:**

- `--clr-focus-focus`

**Misc:**

- `--clr-misc-backdrop`, `--clr-misc-black`, `--clr-misc-transparent`

### Typography Variables (41 total)

**Font Families:**

- `--type-font-default`, `--type-font-alt`

**Desktop Typography:**

- `--type-desktop-h1-size` through `--type-desktop-h6-size`
- `--type-desktop-body-default-size`, `--type-desktop-body-default-bold-size`
- `--type-desktop-body-sm-size`, `--type-desktop-body-sm-bold-size`
- `--type-desktop-button-default-size`, `--type-desktop-button-sm-size`
- `--type-desktop-uppercase-sm-size`, `--type-desktop-uppercase-default-size`

**Mobile Typography:**

- `--type-mobile-h1-size` through `--type-mobile-h6-size`
- `--type-mobile-body-default-size`, `--type-mobile-body-default-bold-size`
- `--type-mobile-body-sm-size`, `--type-mobile-body-sm-bold-size`
- `--type-mobile-button-default-size`, `--type-mobile-button-default-sm-size`
- `--type-mobile-tag-size`

**Typography Extensions:**

- `--type-link-default-decoration`, `--type-link-default-paragraph-spacing`
- `--type-link-default-bold-decoration`, `--type-link-default-bold-paragraph-spacing`
- `--type-link-sm-decoration`
- `--type-caption-default-paragraph-spacing`
- `--type-uppercase-small-text-transform`, `--type-uppercase-default-text-transform`
- `--type-mobile-link-default-decoration`, `--type-mobile-link-default-paragraph-spacing`
- `--type-mobile-link-sm-decoration`, `--type-mobile-tag-text-transform`

## Storybook Integration

### Decorator Approach

```javascript
// .storybook/preview.js
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "ntg",
    toolbar: {
      icon: "paintbrush",
      items: [
        { value: "ntg", title: "NT.GOV.AU" },
        { value: "central", title: "NTG Central" },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    // Update link element
    useEffect(() => {
      const themeLink = document.getElementById("theme-css");
      if (themeLink) {
        themeLink.href = `./themes/${theme}-theme.css`;
      }
    }, [theme]);

    return <Story />;
  },
];
```

## Creating New Themes

To create a new theme (e.g., "region" theme):

1. **Export from Figma** with new theme tokens
2. **Update tokens.json** with new theme data under `primitives.region` and `themes.region`
3. **Run build script**: `npm run tokens:build`
4. **New files generated:**
   - `src/themes/region-theme.css` (with both prefixed and unprefixed variables)
   - `base-variables.css` updated (if using region as default)

**No code changes needed!** The build script automatically generates both prefixed and unprefixed variables for any theme in tokens.json.

## Migration Guide

### Updating Existing Components

**Before (theme-specific):**

```css
.button {
  background: var(--ntg-clr-action-primary);
  color: var(--ntg-clr-text-inverse);
}
```

**After (theme-agnostic):**

```css
.button {
  background: var(--clr-action-primary);
  color: var(--clr-text-inverse);
}
```

**Result:** Component now works with any theme!

## Technical Details

### How It Works

1. **Build script** generates theme files with dual variables
2. **Prefixed variables** hold theme-specific primitive values
3. **Unprefixed variables** reference the prefixed ones via `var()`
4. **Theme switching** works by either:
   - Swapping CSS files (overwrites unprefixed variables)
   - Using scoped overrides with `[data-theme]` (future)

### Performance Considerations

- **CSS file size:** Each theme file ~10KB (unminified)
- **Switching cost:** Minimal - browsers efficiently handle `var()` references
- **Memory:** Loading one theme at a time = ~34KB total CSS

### Browser Support

CSS custom properties (variables) are supported in:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

**IE11:** Not supported (no CSS variables)

## Summary

✅ **82 semantic variables** available for theme switching
✅ **Both themes** (NTG + Central) support dual-variable system
✅ **Backward compatible** - existing prefixed variables still work
✅ **Auto-generated** - no manual duplication needed
✅ **Future-proof** - easy to add new themes

**Recommended approach:** Use unprefixed semantic variables (`--clr-*`, `--type-*`) in all new components for maximum flexibility.
