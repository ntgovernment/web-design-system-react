# Radio Component - CSS Variables Reference

This document provides a comprehensive reference of all CSS variables used by the Radio component, enabling theme customization and override capabilities.

## Overview

The Radio component uses CSS variables (custom properties) from the NT Government Design System's token system. This approach provides:

- **Consistent theming** across all components
- **Easy customization** at the component or application level
- **Runtime theme switching** without rebuilding assets
- **Design token integration** with Figma and other design tools

## CSS Variable Categories

### Color Variables

#### Background Colors

```css
/* Default background for unselected radio buttons */
--clr-bg-default: #ffffff; /* White */

/* Hover state background */
--clr-bg-shade-alt: #e7e7ea; /* NTG: Light gray */
--clr-bg-shade-alt: #ecf0f0; /* Central: Light gray */
```

#### Border Colors

```css
/* Primary border color (unselected and selected) */
--clr-border-strong-02: #1f1e27; /* NTG: Dark gray/black */
--clr-border-strong-02: #102040; /* Central: Navy blue */

/* Border for disabled state */
--clr-border-subtle: #d3d3d7; /* NTG: Light gray */
--clr-border-subtle: #dce0e4; /* Central: Light gray */
```

#### Fill Colors

```css
/* Inner circle color when selected */
--clr-link-default: #1f1f5f; /* NTG: Blue */
--clr-link-default: #102040; /* Central: Navy blue */
```

#### Text Colors

```css
/* Default label text */
--clr-text-default: #1f1e27; /* NTG: Dark gray/black */
--clr-text-default: #102040; /* Central: Navy blue */

/* Helper text and disabled labels */
--clr-text-muted: #666774; /* NTG: Medium gray */
--clr-text-muted: #6c7074; /* Central: Medium gray */
```

#### Validation Colors

```css
/* Success state */
--clr-status-success: #107810; /* Green */

/* Error/danger state */
--clr-status-danger: #a60f37; /* Red */
```

#### Focus Outline

```css
/* Focus ring color */
--clr-focus-focus: #ec8c58; /* NTG: Orange */
--clr-focus-focus: #6ab06a; /* Central: Green */
```

### Spacing Variables

```css
/* Extra small spacing (8px) - gap between radio and label */
--sp-xs: 0.5rem; /* 8px */

/* Extra extra small spacing (4px) - label padding */
--sp-xxs: 0.25rem; /* 4px */
```

### Typography Variables

```css
/* Body text size (desktop) */
--type-desktop-body-default-size: 1rem; /* 16px */

/* Small text size */
--type-body-sm-size: 0.875rem; /* 14px */

/* Line heights */
--type-body-default-lh: 1.5rem; /* 24px */
--type-body-sm-lh: 1.25rem; /* 20px */

/* Mobile overrides */
--type-mobile-body-default-size: 1rem; /* 16px */
--type-mobile-body-sm-size: 0.875rem; /* 14px */
```

### Border Radius Variables

```css
/* Note: Radio buttons use border-radius: 50% for circular shape */
/* This is hardcoded and not controlled by a variable */
```

## Component-Specific Classes

### Radio Group

```css
.radio-group {
  gap: var(--sp-xs); /* 8px between elements */
}

.radio-group-label {
  color: var(--clr-text-default);
  font-size: var(--type-desktop-body-default-size); /* 16px */
  font-weight: 700;
  line-height: var(--type-body-default-lh); /* 24px */
}

.radio-group-required {
  color: var(--clr-status-danger);
  font-size: var(--type-body-sm-size); /* 14px */
}

.radio-group-helper {
  color: var(--clr-text-muted);
  font-size: var(--type-body-sm-size); /* 14px */
}

.radio-group-message--success {
  color: var(--clr-status-success);
}

.radio-group-message--error {
  color: var(--clr-status-danger);
}
```

### Radio Input

```css
.form-check-input[type="radio"] {
  width: 1.5rem; /* 24px - fixed */
  height: 1.5rem; /* 24px - fixed */
  background-color: var(--clr-bg-default);
  border: 1.5px solid var(--clr-border-strong-02);
  border-radius: 50%; /* Always circular */
}

/* Hover state */
.form-check-input[type="radio"]:not(:disabled):not(:checked):hover {
  background-color: var(--clr-bg-shade-alt);
}

/* Focus state */
.form-check-input[type="radio"]:focus {
  box-shadow: 0 0 0 4px var(--clr-focus-focus);
}

/* Selected state — outer filled + inner white dot */
.form-check-input[type="radio"]:checked {
  background-color: var(--clr-link-default);
}
.form-check-input[type="radio"]:checked::before {
  width: 0.625rem; /* 10px - fixed */
  height: 0.625rem; /* 10px - fixed */
  background-color: var(--clr-bg-default); /* white centre */
}

/* Disabled + checked: outer muted, centre white */
.form-check-input[type="radio"]:disabled:checked {
  background-color: var(--clr-text-muted);
}
.form-check-input[type="radio"]:disabled:checked::before {
  background-color: var(--clr-bg-default);
}

/* Disabled state */
.form-check-input[type="radio"]:disabled {
  background-color: var(--clr-bg-shade-alt);
  border-color: var(--clr-border-subtle);
}

.form-check-input[type="radio"]:disabled::before {
  background-color: var(--clr-border-subtle);
}

/* Error state */
.form-check-input[type="radio"][data-status="error"] {
  border-color: var(--clr-status-danger);
}

/* Success state */
.form-check-input[type="radio"][data-status="success"] {
  border-color: var(--clr-status-success);
}
```

### Radio Label

```css
.form-check-label {
  color: var(--clr-text-default);
  font-size: var(--type-desktop-body-default-size);
  line-height: var(--type-body-default-lh);
  padding: var(--sp-xxs) var(--sp-xs); /* 4px 8px */
}

.form-check-input:disabled ~ .form-check-label {
  color: var(--clr-text-muted);
  opacity: 0.65;
}
```

## Customization Examples

### Example 1: Custom Theme Colors

Override specific colors for a custom theme:

```css
:root {
  /* Custom brand colors */
  --clr-border-strong-02: #2c3e50;
  --clr-link-default: #3498db;
  --clr-focus-focus: #e74c3c;
}
```

### Example 2: Larger Radio Buttons

Create larger radio buttons for accessibility:

```css
.form-check-input[type="radio"] {
  width: 2rem !important; /* 32px instead of 24px */
  height: 2rem !important;
}

.form-check-input[type="radio"]:checked::before {
  width: 0.875rem !important; /* 14px instead of 10px */
  height: 0.875rem !important;
}
```

### Example 3: Custom Focus Outline

Change focus outline style:

```css
.form-check-input[type="radio"]:focus {
  box-shadow: 0 0 0 3px var(--clr-focus-focus) !important;
  /* Changed from 4px to 3px */
}
```

### Example 4: Increased Spacing

More spacing between radio buttons:

```css
.radio-group-items {
  gap: 1rem; /* 16px instead of 8px */
}
```

### Example 5: Custom Border Width

Thicker borders for better visibility:

```css
.form-check-input[type="radio"] {
  border: 2px solid var(--clr-border-strong-02) !important;
  /* Changed from 1.5px to 2px */
}
```

## Theme Switching

The Radio component supports runtime theme switching through CSS variable updates:

### Method 1: CSS File Switching

Load different theme CSS files:

```html
<!-- NTG Theme -->
<link rel="stylesheet" href="theme-ntg.css" />

<!-- OR Central Theme -->
<link rel="stylesheet" href="theme-central.css" />
```

### Method 2: Data Attribute

Use `data-theme` attribute:

```html
<body data-theme="ntg">
  <!-- Radio components will use NTG theme -->
</body>
```

```css
[data-theme="ntg"] {
  --clr-focus-focus: #ec8c58;
  --clr-link-default: #1f1f5f;
  /* ... other NTG variables */
}

[data-theme="central"] {
  --clr-focus-focus: #6ab06a;
  --clr-link-default: #102040;
  /* ... other Central variables */
}
```

### Method 3: JavaScript

Programmatically switch themes:

```javascript
// Switch to Central theme
document.body.dataset.theme = "central";

// Switch to NTG theme
document.body.dataset.theme = "ntg";
```

## Component Hierarchy

Understanding component structure helps with targeted customization:

```
.radio-group (fieldset)
├── .radio-group-legend (legend)
│   ├── .radio-group-label-row
│   │   ├── .radio-group-label (span)
│   │   └── .radio-group-required (span) [if required]
│   └── .radio-group-helper (div) [if helperText]
├── .radio-group-items (div)
│   └── .radio-wrapper (div) [for each Radio]
│       ├── .form-check (div)
│       │   ├── .form-check-input[type="radio"] (input)
│       │   │   └── ::before [inner circle when checked]
│       │   └── .form-check-label (label)
│       └── .radio-message (div) [if validationMessage]
└── .radio-group-message (div) [if group validationMessage]
```

## Variable Dependencies

Some variables reference other variables:

```css
/* Base semantic variables depend on theme primitives */
--clr-bg-default: var(--ntg-neutral-white);
--clr-border-strong-02: var(--ntg-neutral-09);
--clr-link-default: var(--ntg-blue-03-d);
--clr-focus-focus: var(--ntg-orange-02);

/* Mobile typography falls back to desktop */
--type-mobile-body-default-size: var(
  --type-mobile-body-default-size,
  var(--type-desktop-body-default-size)
);
```

## Fixed Values (Not Customizable via Tokens)

Some values are intentionally fixed for consistency:

```css
/* Radio button dimensions */
width: 1.5rem; /* 24px */
height: 1.5rem; /* 24px */

/* Inner circle dimensions */
width: 0.625rem; /* 10px */
height: 0.625rem; /* 10px */

/* Border radius (always circular) */
border-radius: 50%;

/* Border width */
border: 1.5px solid;

/* Focus outline offset */
box-shadow: 0 0 0 4px; /* 4px spread */

/* Transitions */
transition:
  background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out,
  box-shadow 0.15s ease-in-out;
```

## Responsive Behavior

Typography variables change at mobile breakpoint (max-width: 767px):

```css
@media (max-width: 767px) {
  /* Uses mobile-specific variables */
  font-size: var(
    --type-mobile-body-default-size,
    var(--type-desktop-body-default-size)
  );
}
```

## Bootstrap Override Strategy

The Radio component uses `!important` on critical properties to ensure design system consistency:

```css
/* Properties with !important */
.form-check-input[type="radio"] {
  width: 1.5rem !important;
  height: 1.5rem !important;
  border: 1.5px solid var(--clr-border-strong-02) !important;
  border-radius: 50% !important;
}

.form-check-label {
  padding: var(--sp-xxs) var(--sp-xs) !important;
}
```

This ensures Bootstrap defaults don't interfere with the design system.

## Design Token Source

All CSS variables originate from design tokens defined in:

```
design-tokens/tokens.json
```

To modify the token values:

1. Edit `design-tokens/tokens.json`
2. Run `npm run tokens:build`
3. Generated CSS files will update automatically

See [DESIGN_TOKENS_IMPLEMENTATION.md](../../../DESIGN_TOKENS_IMPLEMENTATION.md) for more information.

## Related Documentation

- [Radio Component Documentation](RADIO.md) - Main component documentation
- [Design Tokens Guide](../../../design-tokens/DESIGN-TOKENS.md) - Design token system
- [Theme Switching Guide](../../../src/themes/THEME_SWITCHING.md) - How to implement theme switching
- [Component README](../../../README.md) - Overall design system documentation

## Questions?

For questions about CSS variable usage or customization:

1. Check the [CONTRIBUTING.md](../../../CONTRIBUTING.md) guide
2. Review existing component CSS files for patterns
3. Consult the [design token documentation](../../../design-tokens/DESIGN-TOKENS.md)
4. Refer to [Bootstrap 5.3 documentation](https://getbootstrap.com/docs/5.3/) for form control details
