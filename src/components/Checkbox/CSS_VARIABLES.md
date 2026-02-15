# Checkbox CSS Variables

This document provides details about the CSS variables used in the Checkbox component, allowing you to customize the styling to fit your theme or brand.

## Overview

The Checkbox component uses CSS custom properties (variables) from the NT Government Design System token system. These variables ensure consistency across themes while allowing for customization.

## Critical Implementation Notes

### For Developers and Coding Agents

⚠️ **Important**:

- **Checkbox dimensions**: Fixed at **24px × 24px** (1.5rem) with `!important` flags
- **Border consistency**: Both checked and unchecked states use `var(--clr-border-strong-02)` - NOT separate colors
- **Checked state fill**: Uses `var(--clr-link-default)` for the background, keeping the same border color
- **Focus outline**: Always uses theme-specific `var(--clr-focus-focus)` (orange for NTG, green for Central)
- **Hover state**: Applies `var(--clr-bg-shade-alt)` background only on unchecked checkboxes
- **Label padding**: 4px 8px (`var(--sp-xxs) var(--sp-xs)`) enforced with `!important`
- **Error persistence**: Error border color persists even when checkbox is disabled
- **All critical styles use `!important`**: This overrides Bootstrap defaults - do not remove these flags

### Design System Alignment

The checkbox follows these Figma specifications:

- Size: 24px × 24px
- Border width: 1.5px
- Border radius: ~5px (via `--radii-sm` token = 4px)
- Default border: Uses text color token (`--clr-border-strong-02`)
- Checked border: Same as default (not filled border)
- Checked background: Blue (`--clr-link-default`)
- Focus outline: 4px theme color
- Hover: Light gray fill on unchecked state

## CSS Variable Categories

### Color Variables

#### Background Colors

| Variable             | Token Reference    | NTG Value | Central Value | Description                     | State           |
| -------------------- | ------------------ | --------- | ------------- | ------------------------------- | --------------- |
| `--clr-bg-default`   | `clr.bg.default`   | `#ffffff` | `#ffffff`     | Default background              | Default         |
| `--clr-bg-shade`     | `clr.bg.shade`     | `#f5f5f7` | `#f5f5f5`     | Read-only background (not used) | N/A             |
| `--clr-bg-shade-alt` | `clr.bg.shade-alt` | `#e7e7ea` | `#ecf0f0`     | Hover & disabled background     | Hover, Disabled |

#### Border Colors

| Variable                 | Token Reference        | NTG Value | Central Value | Description                           | State                            |
| ------------------------ | ---------------------- | --------- | ------------- | ------------------------------------- | -------------------------------- |
| `--clr-border-strong-02` | `clr.border.strong-02` | `#1f1e27` | `#102040`     | Default, hover, checked, focus border | All states except disabled/error |
| `--clr-border-subtle`    | `clr.border.subtle`    | `#d3d3d7` | `#d0e0e0`     | Disabled border color                 | Disabled                         |

#### Text Colors

| Variable             | Token Reference    | NTG Value | Central Value | Description                 |
| -------------------- | ------------------ | --------- | ------------- | --------------------------- |
| `--clr-text-default` | `clr.text.default` | `#1f1e27` | `#102040`     | Label text color            |
| `--clr-text-muted`   | `clr.text.muted`   | `#666774` | `#384560`     | Helper text, disabled state |

#### Status Colors

| Variable               | Token Reference      | NTG Value | Central Value | Description                     |
| ---------------------- | -------------------- | --------- | ------------- | ------------------------------- |
| `--clr-status-danger`  | `clr.status.danger`  | `#a60f37` | `#a60f37`     | Error state, required indicator |
| `--clr-status-success` | `clr.status.success` | `#107810` | `#107810`     | Success state                   |

#### Interactive Colors

| Variable             | Token Reference    | NTG Value | Central Value | Description              |
| -------------------- | ------------------ | --------- | ------------- | ------------------------ |
| `--clr-link-default` | `clr.link.default` | `#1f1f5f` | `#102040`     | Checked background color |
| `--clr-focus-focus`  | `clr.focus.focus`  | `#ec8c58` | `#6ab06a`     | Focus outline color      |

### Spacing Variables

| Variable   | Token Reference | Value  | Description                    | Usage in Component                     |
| ---------- | --------------- | ------ | ------------------------------ | -------------------------------------- |
| `--sp-xs`  | `sp.xs`         | `8px`  | Gap between checkbox and label | `.form-check` gap                      |
| `--sp-xxs` | `sp.xxs`        | `4px`  | Vertical padding on label      | `.form-check-label` padding-top/bottom |
| `--sp-md`  | `sp.md`         | `16px` | Not currently used in Checkbox | N/A                                    |
| `--sp-lg`  | `sp.lg`         | `20px` | Not currently used in Checkbox | N/A                                    |

### Sizing Variables

| Variable | Value  | Description                    | Enforced With |
| -------- | ------ | ------------------------------ | ------------- |
| `1.5rem` | `24px` | Checkbox width and height      | `!important`  |
| `1.5rem` | `24px` | Checkmark icon background-size | Standard      |

### Border & Radius Variables

| Variable       | Token Reference | NTG Value | Central Value | Description                 | Notes               |
| -------------- | --------------- | --------- | ------------- | --------------------------- | ------------------- |
| Fixed `1.5px`  | N/A             | `1.5px`   | `1.5px`       | Checkbox border width       | Not a variable      |
| `--radii-sm`   | `radii.sm`      | `4px`     | `4px`         | Checkbox border radius      | Used in both themes |
| `--radii-none` | `radii.none`    | `0px`     | `0px`         | No border radius (fallback) | Not actively used   |

### Typography Variables

#### Font Sizes

| Variable                           | Token Reference                  | Value  | Description           |
| ---------------------------------- | -------------------------------- | ------ | --------------------- |
| `--type-desktop-body-default-size` | `type.desktop.body-default.size` | `16px` | Label font size       |
| `--type-body-sm-size`              | `type.desktop.body-sm.size`      | `14px` | Helper text, messages |
| `--type-mobile-body-default-size`  | `type.mobile.body-default.size`  | `16px` | Mobile label size     |
| `--type-mobile-body-sm-size`       | `type.mobile.body-sm.size`       | `14px` | Mobile helper text    |

#### Line Heights

| Variable                 | Token Reference                | Value  | Description             |
| ------------------------ | ------------------------------ | ------ | ----------------------- |
| `--type-body-default-lh` | `type.desktop.body-default.lh` | `24px` | Label line height       |
| `--type-body-sm-lh`      | `type.desktop.body-sm.lh`      | `20px` | Helper text line height |

### Shadow Variables

| Variable                 | Token Reference        | NTG Value                         | Central Value                      | Description                        |
| ------------------------ | ---------------------- | --------------------------------- | ---------------------------------- | ---------------------------------- |
| `--shadow-focus-ntg`     | `shadow.focus-ntg`     | `0 0 0 4px rgba(236, 140, 88, 1)` | N/A                                | NTG theme focus shadow (orange)    |
| `--shadow-focus-central` | `shadow.focus-central` | N/A                               | `0 0 0 4px rgba(106, 176, 106, 1)` | Central theme focus shadow (green) |

## Customizing Checkbox Styles

### Method 1: Override CSS Variables

You can override CSS variables at different levels:

#### Global Override (affects all checkboxes)

```css
:root {
  --clr-link-default: #0066cc; /* Custom checked color */
  --clr-focus-focus: #ff6600; /* Custom focus color */
  --radii-sm: 8px; /* More rounded corners */
}
```

#### Component-Specific Override

```css
.my-custom-checkbox .form-check-input {
  --clr-link-default: #0066cc;
  width: 24px; /* Smaller checkbox */
  height: 24px;
}
```

#### Theme-Specific Override

```css
[data-theme="ntg"] .form-check-input {
  --radii-sm: 0px; /* Square checkboxes for NTG */
}

[data-theme="central"] .form-check-input {
  --radii-sm: 50%; /* Circular checkboxes for Central */
}
```

### Method 2: Direct CSS Overrides

For more specific customization, you can target the component classes directly:

```css
/* Custom checkbox size */
.my-form .form-check-input {
  width: 24px;
  height: 24px;
}

/* Custom checked state */
.my-form .form-check-input:checked {
  background-color: #0066cc;
  border-color: #0066cc;
}

/* Custom focus state */
.my-form .form-check-input:focus {
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3);
}

/* Custom label styling */
.my-form .form-check-label {
  font-weight: 600;
  color: #333;
}
```

## Component Structure & Classes

Understanding the component structure helps in targeting specific elements:

### Individual Checkbox Structure

```html
<div class="checkbox-wrapper">
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="..." />
    <label class="form-check-label" for="...">Label text</label>
  </div>
  <div class="checkbox-message checkbox-message--error">Error message</div>
</div>
```

### Checkbox Group Structure

```html
<fieldset class="checkbox-group">
  <legend class="checkbox-group-legend">
    <div class="checkbox-group-label-row">
      <span class="checkbox-group-label">Group Label</span>
      <span class="checkbox-group-required">(Required)</span>
    </div>
    <div class="checkbox-group-helper">Helper text</div>
  </legend>
  <div class="checkbox-group-items">
    <!-- Individual checkboxes here -->
  </div>
  <div class="checkbox-group-message checkbox-group-message--error">
    Group error message
  </div>
</fieldset>
```

## Practical Examples

### Example 1: Larger Checkboxes

```css
.large-checkboxes .form-check-input {
  width: 40px;
  height: 40px;
}

.large-checkboxes .form-check {
  gap: 12px; /* Increase gap */
}
```

### Example 2: Custom Brand Colors

```css
.brand-checkboxes {
  --clr-link-default: #8b0000; /* Dark red */
  --clr-focus-focus: #ffa500; /* Orange focus */
  --clr-border-strong-02: #333333; /* Darker border */
}
```

### Example 3: Minimal Style

```css
.minimal-checkboxes .form-check-input {
  border-width: 1px;
  border-radius: 2px;
}

.minimal-checkboxes .form-check-label {
  font-weight: 400;
  color: #666;
}
```

### Example 4: High Contrast Mode

```css
.high-contrast .form-check-input {
  border-width: 2px;
  border-color: #000;
}

.high-contrast .form-check-input:checked {
  background-color: #000;
  border-color: #000;
}

.high-contrast .form-check-label {
  color: #000;
  font-weight: 700;
}
```

## Data Attributes

The component uses data attributes for state management:

| Attribute     | Values                 | Description                         |
| ------------- | ---------------------- | ----------------------------------- |
| `data-status` | `"success"`, `"error"` | Validation state                    |
| `data-theme`  | `"ntg"`, `"central"`   | Active theme (on body or container) |

## Browser Compatibility

All CSS variables used are supported in:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- All modern mobile browsers

For older browsers, consider providing fallback values:

```css
.form-check-input {
  background-color: #ffffff; /* Fallback */
  background-color: var(--clr-bg-default, #ffffff); /* With variable */
}
```

## Related Documentation

- [Checkbox Component Documentation](CHECKBOX.md) - Main component documentation
- [Theme System](../../themes/THEMES.md) - Overview of the theme system
- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md) - Complete token reference
- [CSS Architecture](../../FEATURES.md) - CSS structure and methodology

## Questions or Issues?

For questions about CSS variables or customization:

1. Check the [CONTRIBUTING.md](../../CONTRIBUTING.md) guide
2. Review existing component implementations
3. Consult the design token system documentation
4. Open an issue for clarification
