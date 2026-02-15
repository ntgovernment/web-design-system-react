# Dropdown Component - CSS Variables

This document lists all CSS custom properties (variables) used by the Dropdown component.

## Token Categories

### Colors

#### Background Colors

- `--clr-bg-default` - Default background color (white)
- `--clr-bg-shade-alt` - Disabled state background color (#e7e7ea)

#### Border Colors

- `--clr-border-subtle` - Subtle border for default state (#d3d3d7)
- `--clr-border-strong-02` - Strong border for hover state (#1f1e27)
- `--clr-focus-focus` - Focus outline color (theme-specific: NTG orange, Central green)

#### Status Colors

- `--clr-status-success` - Success validation color (#107810)
- `--clr-status-danger` - Error validation color (#a60f37)

#### Text Colors

- `--clr-text-default` - Default text color (#1f1e27)
- `--clr-text-muted` - Muted text for helper, disabled, placeholder (#666774)

### Spacing

- `--sp-xxs` (4px) - Extra extra small spacing
- `--sp-xs` (8px) - Extra small spacing / gaps between elements
- `--sp-sm` (12px) - Small padding (used in small size variant)
- `--sp-md` (16px) - Medium padding (default padding)
- `--sp-lg` (20px) - Large spacing / icon size
- `--sp-xl` (24px) - Extra large padding (used in large size variant)
- `--sp-xxxl` (48px) - Minimum height for default dropdown

### Typography

#### Font Sizes

- `--type-desktop-body-default-size` (16px) - Default font size
- `--type-body-sm-size` (14px) - Small text size (helper, validation messages, small variant)
- `--type-desktop-h6-size` (16px) - Large variant font size

#### Line Heights

- `--type-body-default-lh` (24px) - Default line height
- `--type-body-sm-lh` (20px) - Small text line height

### Borders

- `--border-width-md` (1px) - Standard border width
- `--border-width-xl` (4px) - Focus outline width

### Border Radius (Theme-Specific)

#### NTG Theme

- `--ntg-radii-none` (0px) - No border radius for sharp corners

#### Central Theme

- `--central-radii-sm` (4px) - Small border radius for rounded corners

### Shadows (Theme-Specific)

#### NTG Theme

- `--shadow-focus-ntg` - Focus box shadow (0px 0px 0px 4px #ec8c58ff)

#### Central Theme

- `--shadow-focus-central` - Focus box shadow (0px 0px 0px 4px #6ab06aff)

## CSS Class Variables Reference

### Component Structure Classes

```css
.dropdown-field              /* Main wrapper container */
.dropdown-label-row         /* Label and required indicator container */
.dropdown-label             /* Label text */
.dropdown-required          /* Required indicator text */
.dropdown-helper            /* Helper text below label */
.dropdown-control-wrapper   /* Select element wrapper (for positioning icon) */
.dropdown-icon              /* Custom chevron icon */
.dropdown-message           /* Validation message container */
.dropdown-message--success  /* Success message variant */
.dropdown-message--error    /* Error message variant */
.dropdown-message__icon     /* Validation message icon */
```

### Bootstrap Classes

```css
.form-select           /* Main select element class */
.form-select-sm       /* Small size variant */
.form-select-lg       /* Large size variant */
.is-valid             /* Bootstrap success state (alternative to data-status) */
.is-invalid           /* Bootstrap error state (alternative to data-status) */
```

### Data Attributes

```css
[data-status="success"]     /* Applied when validationState="success" */
[data-status="error"]       /* Applied when validationState="error" */
[data-filled="true"]        /* Applied when an option is selected */
[data-disabled="true"]      /* Applied when disabled prop is true */
[data-active="true"]        /* Applied to show active/focused state (for demos) */
```

## Size Variants

### Small (sm)

- Min height: `calc(var(--sp-xxxl) - var(--sp-md))` = 32px
- Font size: `var(--type-body-sm-size)` = 14px
- Padding: `var(--sp-sm)` = 12px

### Default

- Min height: `var(--sp-xxxl)` = 48px
- Font size: `var(--type-desktop-body-default-size)` = 16px
- Padding: `var(--sp-md)` = 16px

### Large (lg)

- Min height: `calc(var(--sp-xxxl) + var(--sp-md))` = 64px
- Font size: `var(--type-desktop-h6-size)` = 16px
- Padding: `var(--sp-xl)` = 24px

## State-Specific Styling

### Default State

```css
background: var(--clr-bg-default);
outline: 1px var(--clr-border-strong-02) solid;
color: var(--clr-text-default);
```

### Hover State

```css
outline-color: var(--clr-border-strong-02);
```

### Focus State

```css
outline-color: var(--clr-focus-focus);
box-shadow: 0 0 0 calc(var(--sp-xs) / 2) var(--clr-focus-focus);
/* Theme-specific shadow applied via theme CSS files */
```

### Success State

```css
outline-color: var(--clr-status-success);
```

### Error State

```css
outline-color: var(--clr-status-danger);
```

### Disabled State

```css
background: var(--clr-bg-shade-alt);
color: var(--clr-text-muted);
outline-color: var(--clr-border-subtle);
cursor: not-allowed;
pointer-events: none;
```

## Override Examples

### Custom focus color for specific dropdown

```css
.my-custom-dropdown .form-select:focus {
  --clr-focus-focus: #0066cc;
}
```

### Custom height

```css
.tall-dropdown .form-select {
  min-height: 60px;
}
```

### Custom border radius (override theme)

```css
.rounded-dropdown .form-select {
  border-radius: 8px !important;
}
```

## Theme Switching

The component responds to theme changes automatically when using the theme CSS files:

```html
<!-- Load NTG theme -->
<link rel="stylesheet" href="theme-ntg.css" />

<!-- OR Load Central theme -->
<link rel="stylesheet" href="theme-central.css" />
```

Alternatively, use data attributes:

```html
<body data-theme="ntg">
  <!-- Dropdown will use NTG theme styles -->
</body>

<body data-theme="central">
  <!-- Dropdown will use Central theme styles -->
</body>
```

## Browser-Specific Notes

### Option Styling Limitations

Due to browser security and rendering constraints, dropdown options have limited styling capabilities:

- **Chrome/Edge**: Limited support for `background-color`, `color`
- **Firefox**: Better support for option styling
- **Safari**: Minimal support; most styles ignored
- **All browsers**: Option appearance largely controlled by OS

For advanced custom dropdown experiences, consider using a custom component library (e.g., React Select) instead of native `<select>`.

## Tokens Source

All design tokens are defined in:

- `src/themes/common.css` - Shared tokens (spacing, shadows, border widths)
- `src/themes/theme-ntg.css` - NTG-specific tokens
- `src/themes/theme-central.css` - Central-specific tokens
- `src/themes/base-variables.css` - Semantic variable mappings

To modify token values, update `design-tokens/tokens.json` and run:

```bash
npm run tokens:build
```

## Related Documentation

- [DROPDOWN.md](DROPDOWN.md) - Component documentation
- [Dropdown.stories.tsx](Dropdown.stories.tsx) - Storybook stories
- [CONTENT_STANDARDS.md](../../CONTENT_STANDARDS.md) - Content guidelines
- [THEMES.md](../../themes/THEMES.md) - Theme system overview
