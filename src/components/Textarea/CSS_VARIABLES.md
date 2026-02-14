# Textarea CSS Variables

This document explains how to customize the Textarea component using Bootstrap 5.3's CSS variables approach and design system tokens.

---

## Overview

The Textarea component uses Bootstrap's `form-control` class as a foundation, which provides built-in CSS variables for customization. The design system **overrides** Bootstrap's default styles with semantic design tokens, but you can still use CSS variables for further customization when needed.

## Design System Token Approach (Recommended)

The component primarily uses design system tokens for theming:

```css
/* Example from Textarea.css */
.textarea-field textarea.form-control {
  background: var(--clr-bg-default);
  outline: 1px var(--clr-border-subtle) solid;
  color: var(--clr-text-default);
  font-size: var(--type-desktop-body-default-size);
  /* ... etc */
}
```

These tokens automatically adapt to the active theme (NTG or Central).

## Bootstrap CSS Variables (Advanced Customization)

Bootstrap 5.3 exposes CSS variables on `form-control` that you can override inline or via CSS classes. These are prefixed with `--bs-`.

### Available Bootstrap Form Control Variables

Based on Bootstrap 5.3 documentation, the following CSS variables are available:

```css
/* Sass variables compiled to CSS custom properties */
--bs-body-color: /* Inherited text color */ --bs-body-bg:
  /* Inherited background */
  --bs-border-color: /* Default form border color */
  --bs-border-width: /* Border width */ --bs-border-radius: /* Corner radius */
  /* Form-control specific */ --bs-form-control-bg: /* Background color */
  --bs-form-control-disabled-bg: /* Disabled state background */;
```

### Typography & Spacing

```css
--bs-body-font-size: /* Font size */ --bs-body-font-family: /* Font family */
  --bs-body-font-weight: /* Font weight */
  --bs-body-line-height: /* Line height */;
```

## How to Override Variables

### Method 1: Inline Styles (Component-Specific)

Override variables directly on the component via the `style` prop:

```tsx
<Textarea
  label="Custom Styled Textarea"
  style={
    {
      "--bs-border-radius": "8px",
      "--bs-border-color": "#6366f1",
      "--bs-form-control-bg": "#f9fafb",
    } as React.CSSProperties
  }
/>
```

### Method 2: CSS Class (Reusable)

Create a CSS class that overrides specific variables:

```css
/* custom.css */
.custom-textarea textarea.form-control {
  --bs-border-radius: 12px;
  --bs-form-control-bg: #fef3c7;
  --bs-border-color: #f59e0b;
}
```

```tsx
<Textarea label="Custom Textarea" wrapperClassName="custom-textarea" />
```

### Method 3: Global Theme Override

Override variables globally for all textareas in your application:

```css
/* app.css */
:root {
  --bs-border-radius: 4px;
}

/* Or scope to specific theme */
[data-theme="ntg"] .form-control {
  --bs-border-color: #d3d3d7;
}
```

## Common Customization Examples

### Example 1: Rounded Corners

Override the NTG/Central theme's default sharp corners:

```tsx
<Textarea
  label="Rounded Textarea"
  style={
    {
      "--bs-border-radius": "8px",
    } as React.CSSProperties
  }
/>
```

### Example 2: Custom Focus Color

```css
.priority-textarea textarea.form-control {
  --bs-focus-ring-color: rgba(220, 53, 69, 0.25);
}

.priority-textarea textarea.form-control:focus {
  border-color: #dc3545;
}
```

```tsx
<Textarea label="High Priority" wrapperClassName="priority-textarea" />
```

### Example 3: Custom Background

```tsx
<Textarea
  label="Light Background"
  style={
    {
      "--bs-form-control-bg": "#f8f9fa",
    } as React.CSSProperties
  }
/>
```

### Example 4: Larger Text

```tsx
<Textarea
  label="Large Text"
  style={
    {
      "--bs-body-font-size": "18px",
      "--bs-body-line-height": "1.8",
    } as React.CSSProperties
  }
  rows={6}
/>
```

### Example 5: Disabled State Customization

```css
.special-disabled textarea.form-control:disabled {
  --bs-form-control-disabled-bg: #ffe5e5;
  color: #721c24;
  opacity: 1;
}
```

```tsx
<Textarea
  label="Special Disabled"
  wrapperClassName="special-disabled"
  disabled
  value="This has a custom disabled appearance"
/>
```

## Design System Token Override (Preferred)

Instead of using `--bs-*` variables, consider overriding design system tokens for better theme consistency:

```css
/* Preferred approach for theme-wide changes */
.custom-theme {
  --clr-bg-default: #fefefe;
  --clr-border-subtle: #e5e5e5;
  --clr-focus-focus: #3b82f6;
}
```

```tsx
<div className="custom-theme">
  <Textarea label="Theme Customized" />
</div>
```

## Important Notes

### Design System Tokens Take Precedence

The component CSS uses design system tokens with specific selectors that may override Bootstrap variables. For example:

```css
/* This takes precedence over --bs-form-control-bg */
.textarea-field textarea.form-control {
  background: var(--clr-bg-default);
}
```

To override, you need to match or exceed the specificity:

```css
/* Match specificity */
.my-wrapper .textarea-field textarea.form-control {
  background: #custom-color;
}
```

### Theme-Specific Overrides

Theme files (`Textarea-ntg.css`, `Textarea-central.css`) apply last and will override any Bootstrap variables for theme-specific properties like focus styles.

### !important Usage

The component CSS uses `!important` for certain properties (border-radius, focus styles) to ensure design system consistency. These cannot be overridden with CSS variables alone:

```css
border-radius: var(--radii-none) !important;
```

To override these, you must use CSS with higher specificity **and** `!important`:

```css
.force-rounded textarea.form-control {
  border-radius: 8px !important;
}
```

## When to Use Each Approach

| Use Case                    | Approach                 | Example                                    |
| --------------------------- | ------------------------ | ------------------------------------------ |
| One-off component styling   | Inline CSS variables     | Custom background for a specific textarea  |
| Reusable component variant  | CSS class with variables | "Bordered" variant used in multiple places |
| Application-wide theming    | Design system tokens     | Changing all border colors                 |
| Theme-specific override     | Theme CSS files          | Different focus colors per theme           |
| Prototyping/experimentation | Inline CSS variables     | Testing different styles quickly           |

## Testing Custom Styles

When customizing with CSS variables:

1. **Test in Storybook**: Create a story demonstrating your customization
2. **Test both themes**: Use the Theme toolbar to verify NTG and Central
3. **Test states**: Verify focus, hover, disabled, and error states
4. **Test accessibility**: Ensure color contrast meets WCAG standards
5. **Test responsiveness**: Verify styles work on mobile and desktop

## Bootstrap 5.3 Documentation

For a complete list of Bootstrap form-control variables, see:

- [Bootstrap 5.3 Forms - Form Control](https://getbootstrap.com/docs/5.3/forms/form-control/)
- [Bootstrap 5.3 Forms - Sass Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#sass-variables)
- [Bootstrap 5.3 CSS Variables](https://getbootstrap.com/docs/5.3/customize/css-variables/)

## Design System Tokens Reference

For available design tokens, see:

- `design-tokens/tokens.json` - Complete token definitions
- `src/themes/base-variables.css` - Base CSS variable definitions
- `src/themes/theme-ntg.css` - NTG theme tokens
- `src/themes/theme-central.css` - Central theme tokens

### Machine-readable token list (used by Textarea)

```json
[
  {
    "cssVar": "--clr-bg-default",
    "tokenPath": "themes.ntg.clr.bg.default",
    "usage": "container background"
  },
  {
    "cssVar": "--clr-border-subtle",
    "tokenPath": "themes.ntg.clr.border.subtle",
    "usage": "outline / border color"
  },
  {
    "cssVar": "--clr-focus-focus",
    "tokenPath": "themes.ntg.clr.focus.focus",
    "usage": "focus ring color"
  },
  {
    "cssVar": "--shadow-focus-ntg",
    "tokenPath": "effect.ntg-shadow.focus-ntg",
    "usage": "NTG theme focus shadow"
  },
  {
    "cssVar": "--shadow-focus-central",
    "tokenPath": "effect.ntg-shadow.focus-central",
    "usage": "Central theme focus shadow"
  },
  {
    "cssVar": "--radii-none",
    "tokenPath": "radii.none",
    "usage": "component border-radius"
  },
  {
    "cssVar": "--sp-md",
    "tokenPath": "sp.md",
    "usage": "horizontal padding (16px)"
  },
  {
    "cssVar": "--sp-xs",
    "tokenPath": "sp.xs",
    "usage": "vertical padding (8px)"
  }
]
```

### Quick agent instructions — change a visual token safely

1. Update `design-tokens/tokens.json` (edit the JSON token value).
2. Run `npm run tokens:build` to regenerate token outputs.
3. Rebuild library and check visuals: `npm run build` then `npm run storybook`.
4. Add a Storybook story demonstrating the change and a unit test if behaviour changed.

### Which properties are theme-specific?

- Border-radius: controlled by `--radii-*` tokens; change per-theme by editing the theme token or adding a component-scoped override.
- Focus outline: prefer `--shadow-focus-ntg` / `--shadow-focus-central` for theme-specific focus visuals.

---

**Remember**: Prefer design system tokens for theme consistency. Use Bootstrap CSS variables for one-off customizations or when prototyping.
