# Icon Component

A flexible React component for rendering FontAwesome icons with customizable styling and accessibility features.

## Overview

The Icon component provides a simple interface for displaying FontAwesome icons throughout your application. It supports all FontAwesome icon styles (light, regular, solid, etc.) and includes built-in accessibility features.

## Installation

The Icon component is part of the web design system and uses the FontAwesome kit for icon rendering.

```tsx
import { Icon } from "@your-org/web-design-system";
```

## Props

| Prop         | Type                  | Default      | Description                                             |
| ------------ | --------------------- | ------------ | ------------------------------------------------------- |
| `icon`       | `string`              | **required** | FontAwesome icon class (e.g., 'fa-light fa-home')       |
| `color`      | `string`              | `'inherit'`  | Icon color (CSS color value or 'inherit')               |
| `size`       | `string`              | -            | Icon size (CSS font-size value, e.g., '2rem', '24px')   |
| `className`  | `string`              | `''`         | Additional CSS classes (e.g., 'me-2', 'ms-2')           |
| `ariaHidden` | `boolean`             | `true`       | ARIA hidden attribute for decorative icons              |
| `ariaLabel`  | `string`              | -            | ARIA label for accessibility (use for standalone icons) |
| `onClick`    | `() => void`          | -            | Click handler for interactive icons                     |
| `style`      | `React.CSSProperties` | -            | Custom inline styles                                    |

## Usage Examples

### Basic Icon

```tsx
<Icon icon="fa-light fa-home" />
```

### Colored Icon

```tsx
<Icon icon="fa-light fa-heart" color="#dc3545" />
```

### Sized Icon

```tsx
<Icon icon="fa-light fa-star" color="#ffc107" size="2rem" />
```

### Icon with Spacing

Use Bootstrap utility classes for spacing:

```tsx
<div>
  <Icon icon="fa-light fa-home" className="me-2" />
  <span>Home</span>
</div>
```

### Status Icons

Use design system color variables for consistent status colors:

```tsx
<Icon icon="fa-light fa-circle-check" color="var(--clr-status-success)" />
<Icon icon="fa-light fa-circle-info" color="var(--clr-status-info)" />
<Icon icon="fa-light fa-triangle-exclamation" color="var(--clr-status-warning)" />
<Icon icon="fa-light fa-circle-xmark" color="var(--clr-status-danger)" />
```

### Interactive Icon

```tsx
<Icon
  icon="fa-light fa-trash"
  color="#dc3545"
  onClick={() => handleDelete()}
  ariaLabel="Delete item"
  ariaHidden={false}
  style={{ cursor: "pointer" }}
/>
```

### Icon Styles

FontAwesome supports multiple icon styles:

```tsx
{
  /* Light style (default throughout this design system) */
}
<Icon icon="fa-light fa-user" />;

{
  /* Regular style (outlined) */
}
<Icon icon="fa-regular fa-user" />;

{
  /* Solid style */
}
<Icon icon="fa-solid fa-user" />;
```

## Accessibility

### Decorative Icons

For decorative icons that accompany text, use default `ariaHidden={true}`:

```tsx
<button>
  <Icon icon="fa-light fa-home" /> {/* aria-hidden="true" by default */}
  Home
</button>
```

### Standalone Icons

For standalone icons with meaning, provide an `ariaLabel` and set `ariaHidden={false}`:

```tsx
<Icon
  icon="fa-light fa-close"
  ariaLabel="Close dialog"
  ariaHidden={false}
  onClick={handleClose}
/>
```

## Design Guidelines

### Recommended Icon Style

Throughout this design system, the **fa-light** style is recommended for consistency:

```tsx
✅ <Icon icon="fa-light fa-home" />
❌ <Icon icon="fa-solid fa-home" />
```

### Icon Sizing

- **Small (0.875rem)**: Use for inline text icons
- **Normal (1rem)**: Default size for most UI elements
- **Medium (1.5rem)**: Use for buttons and larger UI components
- **Large (2rem+)**: Use for hero sections, empty states, or feature highlights

### Color Usage

- **Inherit**: Use `color="inherit"` or omit the prop to match parent text color
- **Status Colors**: Use design system status color variables for alerts and notifications
- **Custom Colors**: Use specific hex/rgb values for branding or special cases

## HTML API

The Icon component is available through the Storybook HTML API:

```bash
GET http://localhost:6006/api/html/Icon/Default
GET http://localhost:6006/api/html/Icon/WithColor
GET http://localhost:6006/api/html/Icon/StatusIcons
```

Example output:

```html
<i class="fa-light fa-circle-check" aria-hidden="true"></i>
```

## Examples in Storybook

Visit Storybook to see interactive examples:

- **Default**: Basic icon rendering
- **WithColor**: Icons with custom colors
- **WithSize**: Different icon sizes
- **WithSpacing**: Icons with spacing utilities
- **AllLightIcons**: Gallery of common fa-light icons
- **ColoredIcons**: Status and branded colored icons
- **Sizes**: Icon size variations
- **RegularIcons**: Outlined icon style
- **StatusIcons**: Icons used in status messages

## Integration with Other Components

The Icon component is used internally by other design system components:

### Button Component

```tsx
<Button iconLeft="fa-light fa-home" label="Home" />
<Button iconRight="fa-light fa-arrow-right" label="Next" />
```

### Notification Component

```tsx
<Notification
  variant="success"
  title="Success"
  message="Your changes have been saved successfully."
/>
// Note: Notification auto-assigns icons based on variant
```

### Card Component

```tsx
<Card title="Analytics" icon="fa-light fa-chart-line">
  Card content
</Card>
```

## FontAwesome Kit

This design system uses a custom FontAwesome kit:

```html
<script
  src="https://kit.fontawesome.com/9bf658a5c7.js"
  crossorigin="anonymous"
></script>
```

The kit is automatically loaded in both the demo app and Storybook environment.

## Browser Support

The Icon component supports all modern browsers that support:

- ES6+ JavaScript
- CSS custom properties
- FontAwesome 6.x

## Related Components

- [Button](../Button/BUTTON.md) - Uses Icon for button icons
- [Notification](../Notification/NOTIFICATION.md) - Auto-assigns icons based on status
- [Card](../Card/CARD.md) - Uses Icon for card header icons
