# Button Component - CSS Variables Customization

The Button component uses Bootstrap 5.3's CSS variables approach, allowing you to customize button styles at runtime without modifying the component code.

## Available CSS Variables

### Base Button Properties

```css
--bs-btn-padding-x: 24px;              /* Horizontal padding */
--bs-btn-padding-y: 16px;              /* Vertical padding */
--bs-btn-font-family: var(--ntg-type-font-default);  /* Font family (theme-specific) */
--bs-btn-font-size: 16px;              /* Font size */
--bs-btn-font-weight: 700;             /* Font weight */
--bs-btn-line-height: 16px;            /* Line height */
--bs-btn-border-width: 0;              /* Border width */
--bs-btn-border-radius: 0px;           /* Border radius (NTG: sharp, Central: pill) */
```

### Button States

```css
/* Default State */
--bs-btn-color: var(--clr-link-inverse, white);
--bs-btn-bg: var(--clr-action-pirmary);
--bs-btn-border-color: var(--clr-action-pirmary);

/* Hover State */
--bs-btn-hover-color: var(--clr-link-inverse, white);
--bs-btn-hover-bg: var(--clr-action-hover);
--bs-btn-hover-border-color: var(--clr-action-hover);

/* Active/Pressed State */
--bs-btn-active-color: var(--clr-link-inverse, white);
--bs-btn-active-bg: var(--clr-action-pressed);
--bs-btn-active-border-color: var(--clr-action-pressed);

/* Disabled State */
--bs-btn-disabled-color: var(--clr-text-subtle);
--bs-btn-disabled-bg: var(--clr-action-disabled);
--bs-btn-disabled-border-color: var(--clr-action-disabled);
--bs-btn-disabled-opacity: 1;
```

### Focus State

```css
--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(31, 31, 95, 0.25);
```

### Size Variants

```css
/* Small Buttons */
--bs-btn-padding-y-sm: 4px;
--bs-btn-padding-x-sm: 12px;
--bs-btn-font-size-sm: 14px;
--bs-btn-border-radius-sm: 0px;

/* Large Buttons */
--bs-btn-padding-y-lg: 16px;
--bs-btn-padding-x-lg: 32px;
--bs-btn-font-size-lg: 16px;
--bs-btn-border-radius-lg: 0px;
```

### Transitions

```css
--bs-btn-transition: color 0.15s ease-in-out, 
                     background-color 0.15s ease-in-out, 
                     border-color 0.15s ease-in-out, 
                     box-shadow 0.15s ease-in-out;
```

## Usage Examples

### Inline Customization

Override specific properties directly on a button instance:

```tsx
import { Button } from '@ntgovernment/web-design-system';

function MyComponent() {
  return (
    <Button 
      variant="primary"
      style={{
        '--bs-btn-padding-x': '3rem',
        '--bs-btn-padding-y': '1rem',
        '--bs-btn-font-size': '18px',
        '--bs-btn-border-radius': '8px'
      } as React.CSSProperties}
    >
      Custom Button
    </Button>
  );
}
```

### CSS Class Customization

Create custom button variants using CSS:

```css
/* Custom button variant */
.btn-custom {
  --bs-btn-bg: #8b5cf6;
  --bs-btn-border-color: #8b5cf6;
  --bs-btn-hover-bg: #7c3aed;
  --bs-btn-hover-border-color: #7c3aed;
  --bs-btn-active-bg: #6d28d9;
  --bs-btn-active-border-color: #6d28d9;
}

/* Extra large button size */
.btn-xl {
  --bs-btn-padding-x: 40px;
  --bs-btn-padding-y: 20px;
  --bs-btn-font-size: 20px;
}

/* Pill-shaped button (override NTG's sharp corners) */
.btn-pill {
  --bs-btn-border-radius: 50rem;
}
```

Then use in your component:

```tsx
<Button variant="primary" className="btn-custom btn-xl">
  Extra Large Custom Button
</Button>
```

### Global Customization

Override variables globally in your CSS:

```css
:root {
  /* Increase all button padding globally */
  --bs-btn-padding-x: 32px;
  --bs-btn-padding-y: 20px;
  
  /* Adjust focus ring color */
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.5);
}
```

## Theme-Specific Styles

The Button component includes theme-specific CSS files that automatically apply when you switch themes:

- **NT.GOV.AU Theme** (`Button-ntg.css`):
  - Font: Lato
  - Border Radius: 0px (sharp corners)
  - Primary Color: #1F1F5F (NT Gov blue)
  - Hover Color: #c33826 (ochre)

- **NTG Central Theme** (`Button-central.css`):
  - Font: Roboto  
  - Border Radius: 6.25rem (pill-shaped)
  - Primary Color: #102040 (Central blue)
  - Hover Color: #384560 (lighter blue)

## Icon Spacing

Icons within buttons have a gap of 8px (matching Figma specifications):

```tsx
<Button variant="primary" icon="fa-light fa-home" iconPosition="left">
  Home
</Button>
```

The spacing is automatically applied via the `.btn i.me-2` and `.btn i.ms-2` classes.

## Design Token Integration

All Button CSS variables map to the design token system:

- **Colors**: Use semantic variables like `--clr-action-pirmary`, `--clr-action-hover`
- **Spacing**: Uses `--sp-xxs`, `--sp-sm`, `--sp-md`, `--sp-xl` tokens
- **Typography**: References `--type-button-label-default-*` tokens
- **Border Radius**: Uses theme-specific `--ntg-radii-button` or `--central-radii-button`

This ensures consistency across the design system and enables theme switching.

## Bootstrap Documentation

For more details on Bootstrap's button CSS variables approach, see:
https://getbootstrap.com/docs/5.3/components/buttons/#variables

## Implementation Notes

The Button component uses standard Bootstrap classes (`btn`, `btn-primary`, etc.) with no custom HTML structure. All customization happens purely through CSS variables, maintaining full Bootstrap compatibility while enabling theme-specific styling.
