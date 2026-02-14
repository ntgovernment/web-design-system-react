# Accordion Component - CSS Variables Customization

This document describes the Bootstrap CSS variables used to customize the Accordion component and how they map to the NTG Design System tokens.

## Overview

The Accordion component uses Bootstrap 5.3's CSS variable approach for customization. This allows for flexible theming and easy customization without modifying the component's core styles.

## Bootstrap Variables Used

### Container Variables

```css
.accordion {
  --bs-accordion-border-color: var(--clr-border-subtle);
  --bs-accordion-border-width: var(--border-width-md);
  --bs-accordion-border-radius: var(--radii-none);
  --bs-accordion-inner-border-radius: var(--radii-none);
  --bs-accordion-bg: var(--clr-bg-default);
  --bs-accordion-color: var(--clr-text-default);
  --bs-accordion-active-bg: var(--clr-bg-shade);
  --bs-accordion-active-color: var(--clr-link-default);
}
```

| Bootstrap Variable                   | Design Token          | Value (NTG) | Description                          |
| ------------------------------------ | --------------------- | ----------- | ------------------------------------ |
| `--bs-accordion-border-color`        | `--clr-border-subtle` | #D3D3D7     | Border color between accordion items |
| `--bs-accordion-border-width`        | `--border-width-md`   | 1px         | Border thickness                     |
| `--bs-accordion-border-radius`       | `--radii-none`        | 0px         | Outer border radius (square corners) |
| `--bs-accordion-inner-border-radius` | `--radii-none`        | 0px         | Inner border radius                  |
| `--bs-accordion-bg`                  | `--clr-bg-default`    | #FFFFFF     | Accordion background color           |
| `--bs-accordion-color`               | `--clr-text-default`  | #1F1E27     | Default text color                   |
| `--bs-accordion-active-bg`           | `--clr-bg-default`    | #FFFFFF     | Background when expanded             |
| `--bs-accordion-active-color`        | `--clr-link-default`  | #1F1F5F     | Text color when expanded             |

### Button Variables

```css
.accordion-button {
  --bs-accordion-btn-padding-x: var(--sp-xl);
  --bs-accordion-btn-padding-y: var(--sp-xl);
  --bs-accordion-btn-color: var(--clr-link-default);
  --bs-accordion-btn-bg: var(--clr-bg-default);
  --bs-accordion-btn-icon-width: 24px;
  --bs-accordion-btn-focus-box-shadow: none;
}
```

| Bootstrap Variable                    | Design Token         | Value (NTG) | Description                          |
| ------------------------------------- | -------------------- | ----------- | ------------------------------------ |
| `--bs-accordion-btn-padding-x`        | `--sp-xl`            | 24px        | Horizontal padding                   |
| `--bs-accordion-btn-padding-y`        | `--sp-xl`            | 24px        | Vertical padding                     |
| `--bs-accordion-btn-color`            | `--clr-link-default` | #1F1F5F     | Button text color                    |
| `--bs-accordion-btn-bg`               | `--clr-bg-default`   | #FFFFFF     | Button background                    |
| `--bs-accordion-btn-icon-width`       | -                    | 24px        | Chevron icon width                   |
| `--bs-accordion-btn-focus-box-shadow` | -                    | none        | Focus shadow (replaced with outline) |

### Body Variables

```css
.accordion-body {
  --bs-accordion-body-padding-x: var(--sp-xl);
  --bs-accordion-body-padding-y: var(--sp-xl);
}
```

| Bootstrap Variable              | Design Token | Value (NTG) | Description                |
| ------------------------------- | ------------ | ----------- | -------------------------- |
| `--bs-accordion-body-padding-x` | `--sp-xl`    | 24px        | Content horizontal padding |
| `--bs-accordion-body-padding-y` | `--sp-xl`    | 24px        | Content vertical padding   |

## Typography Customization

The accordion button uses design token typography values directly:

```css
.accordion-button {
  font-family: var(--type-font-default);
  font-size: var(--type-heading-h6-size);
  font-weight: var(--type-heading-h6-weight);
  line-height: var(--type-heading-h6-lh);
}
```

| Property      | Design Token               | Value (NTG) |
| ------------- | -------------------------- | ----------- |
| `font-family` | `--type-font-default`      | Lato        |
| `font-size`   | `--type-heading-h6-size`   | 16px        |
| `font-weight` | `--type-heading-h6-weight` | 700         |
| `line-height` | `--type-heading-h6-lh`     | 24px        |

## State Customization

### Hover State

```css
.accordion-button:hover {
  /* text color stays as token; background uses shade */
  color: var(--clr-link-default);
  background-color: var(--clr-bg-shade);
}
```

- Hover keeps title `color` at `--clr-link-default` (neutral/brand link tone)
- Header background uses `--clr-bg-shade` to indicate hover/closed emphasis
- Theme variants use theme-prefixed tokens (e.g. `--central-clr-bg-shade`) where appropriate

### Focus State

We override Bootstrap's default focus box-shadow and replace it with a token-driven outline for clarity and accessibility.

```css
/* Common (applies to focus and focus-visible) */
.accordion-button:focus,
.accordion-button:focus-visible {
  outline: 4px solid var(--clr-focus-focus); /* token */
  outline-offset: 0;
  box-shadow: none !important; /* reset Bootstrap */
}

/* Theme-specific (central) */
[data-theme="central"] .accordion-button:focus,
[data-theme="central"] .accordion-button:focus-visible {
  outline: 4px solid var(--central-clr-focus-focus);
}
```

- Focus uses `--clr-focus-focus` (NTG) or `--central-clr-focus-focus` (Central) at **4px**
- Bootstrap focus `box-shadow` is explicitly suppressed to prevent double rings
- Focus applies to both closed (`.collapsed:focus`) and open (`:not(.collapsed):focus`) headers

## Borders & radius

- `.accordion-item` has no outer border and no border-radius (we rely on a thin divider line instead).
- `.accordion-button` renders a subtle divider using `border-bottom: var(--border-width-md) solid var(--clr-border-subtle)` (token-driven).
- `border-radius` is intentionally set to `var(--radii-none)` for square corners.
- Several Bootstrap-compiled rules (expanded header background, box-shadow, rounded corners) are overridden with token-driven values; `!important` is used only where necessary to ensure token precedence.

## Icon Customization

### Icon Container

```css
.accordion-button-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--sp-sm);
  color: var(--clr-link-default);
}
```

| Property       | Design Token         | Value   | Description                    |
| -------------- | -------------------- | ------- | ------------------------------ |
| `width`        | -                    | 24px    | Fixed icon width (from Figma)  |
| `height`       | -                    | 24px    | Fixed icon height (from Figma) |
| `margin-right` | `--sp-sm`            | 12px    | Gap between icon and title     |
| `color`        | `--clr-link-default` | #1F1F5F | Icon color                     |

## Open/Close All Controls

```css
.accordion-controls {
  margin-bottom: var(--sp-md);
}

.accordion-controls-link {
  color: var(--clr-link-default);
  font-family: var(--type-font-default);
  font-size: var(--type-body-default-size);
  font-weight: var(--type-body-default-weight);
  line-height: var(--type-body-default-lh);
}
```

## Theme Switching

The component supports two themes through the `data-theme` attribute:

### NT.GOV.AU Theme (Default)

- Font: Lato
- Primary color: Blue (#1F1F5F)
- Accent color: Ochre (#C33826)

### NTG Central Theme

- Font: Roboto
- Primary color: Blue (#102040)
- Accent color: Green

## Custom Overrides

To override accordion styles, you can target the component with custom CSS:

```css
/* Custom background color */
.my-custom-accordion .accordion-button {
  --bs-accordion-btn-bg: #f0f0f0;
}

/* Custom padding */
.my-custom-accordion .accordion-body {
  --bs-accordion-body-padding-x: 32px;
  --bs-accordion-body-padding-y: 32px;
}

/* Custom border */
.my-custom-accordion {
  --bs-accordion-border-color: #000000;
  --bs-accordion-border-width: 2px;
}
```

## Design Token Integration

All Accordion CSS variables map to the design token system:

- **Colors**: Use semantic variables like `--clr-link-default`, `--clr-border-subtle`
- **Spacing**: Uses `--sp-xxs`, `--sp-xs`, `--sp-sm`, `--sp-md`, `--sp-xl` tokens
- **Typography**: References `--type-heading-h6-*` and `--type-body-default-*` tokens
- **Borders**: Uses `--border-width-md` and `--radii-none`

This ensures consistency across the design system and enables theme switching.

## Browser Compatibility

CSS custom properties are supported in:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

## Related Documentation

- [Bootstrap Accordion Documentation](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md)
- [Theme Guide](../../themes/THEMES.md)
