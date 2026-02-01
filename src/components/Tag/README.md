# Tag Component

A simple, lightweight component for displaying status indicators, categories, labels, and metadata. Tags provide visual cues using color-coded variants with uppercase typography styling.

## Features

- **Six visual variants**: Default, Grey, Green, Blue, Warning, and Red
- **Uppercase typography**: Uses design token typography for consistent small-caps labeling
- **Theme-aware**: Automatically adapts colors for NTG and Central themes
- **Semantic HTML**: Uses `<span>` element with proper semantic class names
- **Accessible**: Ensures sufficient color contrast for readability (WCAG AAA compliant)
- **Customizable**: Supports custom className and all standard HTML span attributes

## Usage

### Basic Example

```tsx
import { Tag } from '@nt-web-design-system/components';

function MyComponent() {
  return (
    <div>
      <Tag variant="default">Draft</Tag>
      <Tag variant="green">Active</Tag>
      <Tag variant="warning">Pending</Tag>
    </div>
  );
}
```

### All Variants

```tsx
<Tag variant="default">Default</Tag>
<Tag variant="grey">Grey</Tag>
<Tag variant="green">Green</Tag>
<Tag variant="blue">Blue</Tag>
<Tag variant="warning">Warning</Tag>
<Tag variant="red">Red</Tag>
```

### Common Use Cases

**Status Indicators:**
```tsx
<Tag variant="green">Published</Tag>
<Tag variant="warning">Under Review</Tag>
<Tag variant="red">Rejected</Tag>
```

**Categories:**
```tsx
<Tag variant="blue">News</Tag>
<Tag variant="default">Events</Tag>
<Tag variant="grey">Archived</Tag>
```

**Priority Levels:**
```tsx
<Tag variant="red">High Priority</Tag>
<Tag variant="warning">Medium Priority</Tag>
<Tag variant="grey">Low Priority</Tag>
```

### With Custom Styling

```tsx
<Tag variant="green" className="me-2">
  Active
</Tag>
<Tag 
  variant="blue" 
  style={{ marginLeft: '8px' }}
>
  Featured
</Tag>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'grey' \| 'green' \| 'blue' \| 'warning' \| 'red'` | `'default'` | The visual style variant of the tag |
| `children` | `React.ReactNode` | - | The content to display inside the tag |
| `className` | `string` | - | Additional CSS class names |
| `...props` | `React.HTMLAttributes<HTMLSpanElement>` | - | All standard HTML span attributes are supported |

## Accessibility

### Color Contrast
All tag variants meet WCAG AAA color contrast requirements for readability across both NTG and Central themes.

### Semantic HTML
Tags use semantic `<span>` elements with descriptive class names. For screen readers, ensure the tag content is meaningful:

```tsx
// Good
<Tag variant="green">Active</Tag>

// Better - if tag is purely decorative, provide context
<div>
  <Tag variant="green">Active</Tag>
  <span className="visually-hidden">Status: </span>
</div>
```

### Keyboard Navigation
Tags are non-interactive by default. If you need clickable tags, wrap them in a button or link:

```tsx
<button onClick={handleClick} className="btn btn-link p-0 border-0">
  <Tag variant="blue">Clickable Tag</Tag>
</button>
```

## Theming

### Design Tokens Used

The Tag component uses the following design tokens:

**Typography:**
- `--type-uppercase-small-size`: Font size (0.75rem / 12px)
- `--type-uppercase-small-weight`: Font weight (700)
- `--type-uppercase-small-lh`: Line height (1rem / 16px)
- `--type-uppercase-small-ls`: Letter spacing (2px)
- `--type-uppercase-small-text-transform`: Text transform (uppercase)
- `--type-font-default`: Font family (Lato)

**Spacing:**
- `--sp-xxs`: Vertical padding (4px)
- `--sp-xs`: Horizontal padding (8px)
- `--radii-sm`: Border radius (4px)

**Colors (variant-specific):**
- Default: `--clr-bg-shade`, `--clr-text-default`, `--clr-border-subtle`
- Grey: `--ntg-neutral-02`, `--ntg-neutral-08`, `--ntg-neutral-04`
- Green: `--clr-status-success-bg`, `--clr-status-success`
- Blue: `--clr-status-info-bg`, `--clr-status-info`
- Warning: `--clr-status-warning-bg`, `--clr-status-warning`
- Red: `--clr-status-danger-bg`, `--clr-status-danger`

### Theme Customization

You can customize tag appearance using CSS variables:

```tsx
<Tag 
  variant="green"
  style={{
    '--sp-xs': '12px',
    '--radii-sm': '8px',
  } as React.CSSProperties}
>
  Custom Padding
</Tag>
```

### NTG vs Central Themes

Tags automatically adapt to the active theme. Colors are sourced from theme-specific design tokens:

- **NTG Theme**: Uses NT.GOV.AU brand colors
- **Central Theme**: Uses Central brand colors

Both themes maintain WCAG AAA contrast ratios.

## CSS Classes

The component generates the following CSS class structure:

```html
<span class="tag tag-{variant}">Label</span>
```

Available classes:
- `.tag` - Base tag styles
- `.tag-default` - Default variant
- `.tag-grey` - Grey variant
- `.tag-green` - Green variant
- `.tag-blue` - Blue variant
- `.tag-warning` - Warning variant
- `.tag-red` - Red variant

## Examples

### In a Card Header

```tsx
<div className="card">
  <div className="card-header d-flex justify-content-between align-items-center">
    <h5 className="mb-0">Document Title</h5>
    <Tag variant="green">Published</Tag>
  </div>
  <div className="card-body">
    Card content...
  </div>
</div>
```

### In a List

```tsx
<ul className="list-group">
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Item 1
    <Tag variant="blue">New</Tag>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    Item 2
    <Tag variant="warning">Updated</Tag>
  </li>
</ul>
```

### Multiple Tags

```tsx
<div className="d-flex gap-2 flex-wrap">
  <Tag variant="default">React</Tag>
  <Tag variant="blue">TypeScript</Tag>
  <Tag variant="green">Accessible</Tag>
  <Tag variant="grey">Design System</Tag>
</div>
```

## Related Documentation

- [Design Tokens](../../../design-tokens/README.md)
- [Typography](../../../src/themes/README.md)
- [Theme Switching](../../../src/themes/THEME_SWITCHING.md)
- [Alert Component](../Alert/README.md) - Related component with similar variant system
- [Button Component](../Button/README.md) - Interactive component patterns

## Browser Support

The Tag component supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Version History

See [CHANGELOG.md](../../../CHANGELOG.md) for version history and updates.
