# Callout Component

The Callout component is used to display informational messages with a prominent left border, making it ideal for highlighting important content, tips, or notices within your application.

## Features

- **Prominent Visual Design**: Features a bold left border (8px) to draw attention to important information
- **Clean Layout**: Structured with a clear heading and content area for organized information presentation
- **Responsive**: Adapts to container width and wraps text appropriately
- **Theme Support**: Works seamlessly with both NT.GOV.AU and Central themes
- **Accessibility**: Uses semantic HTML and proper heading hierarchy
- **Design Token Integration**: Built entirely with design system tokens for consistency

## Usage

```tsx
import { Callout } from "@ntgov/web-design-system";

function MyComponent() {
  return (
    <Callout
      heading="Important Information"
      content="This is an informational message for users to review carefully."
    />
  );
}
```

## Props

| Prop        | Type     | Required | Default | Description                                              |
| ----------- | -------- | -------- | ------- | -------------------------------------------------------- |
| `heading`   | `string` | No       | -       | The heading text displayed at the top of the callout     |
| `content`   | `string` | Yes      | -       | The main content text displayed below the heading        |
| `className` | `string` | No       | -       | Additional CSS classes to apply to the callout container |

The component also accepts all standard HTML `div` attributes through prop spreading.

## Examples

### Basic Callout

```tsx
<Callout
  heading="Quick Tip"
  content="Remember to save your work regularly to avoid losing progress."
/>
```

### Callout with Custom Styling

```tsx
<Callout
  heading="System Update"
  content="The system will undergo maintenance tonight from 11 PM to 2 AM."
  className="mb-4"
/>
```

### Long Content

```tsx
<Callout
  heading="Privacy Notice"
  content="This callout demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Use callouts to highlight important information, tips, or notices that users should pay attention to without being as urgent as notifications."
/>
```

### Without Heading

```tsx
<Callout content="This callout has no heading, just content. Useful for simple informational messages." />
```

## Design Tokens Used

The component leverages the following design tokens:

- **Colors**:
  - `--clr-bg-default`: Background color
  - `--clr-border-strong-01`: Left border color (#1F1F5F)
  - `--clr-text-default`: Text color
- **Spacing**:
  - `--sp-xl` (24px): Outer padding
  - `--sp-md` (16px): Gap between content elements
  - `--sp-xs` (8px): Gap between heading and text

- **Typography**:
  - `--type-font-default`: Font family (Lato)
  - `--type-body-default-size`: Body text size (16px)
  - Heading: 24px, 700 weight, 28px line-height
  - Content: 16px, 400 weight, 24px line-height

## Accessibility

The Callout component follows accessibility best practices:

- **Semantic HTML**: Uses proper `div` elements with descriptive class names
- **Heading Hierarchy**: The heading uses appropriate typography sizing (24px) to maintain visual hierarchy
- **Color Contrast**: All text meets WCAG AAA standards (7:1 ratio for normal text)
  - Default text (#1F1E27) on white background exceeds requirements
  - Border color (#1F1F5F) provides strong visual distinction
- **Responsive Text**: Content wraps properly and maintains readability at all viewport sizes
- **Screen Readers**: Content is presented in a logical reading order (heading, then content)

### Accessibility Checklist

- ✅ Semantic HTML structure
- ✅ Proper color contrast ratios (WCAG AAA)
- ✅ Logical content flow
- ✅ Readable text sizing
- ✅ Word wrapping for long content
- ✅ Theme-aware colors

## Best Practices

1. **Concise Headings**: Keep headings short and descriptive (3-7 words)
2. **Clear Content**: Write clear, actionable content that users can quickly scan
3. **Appropriate Usage**: Use Callouts for important but non-critical information
   - For urgent messages, consider using the Notification component instead
4. **Spacing**: Use Bootstrap spacing classes (`mb-3`, `mb-4`) to provide adequate spacing between multiple callouts
5. **Placement**: Position callouts near related content they're highlighting or clarifying

## Comparison with Notification Component

| Feature      | Callout                           | Notification                                            |
| ------------ | --------------------------------- | ------------------------------------------------------- |
| Purpose      | General informational messages    | Status-specific alerts (info, success, warning, danger) |
| Variants     | Single default style              | Multiple semantic variants with icons                   |
| Visual Style | Blue left border                  | Colored left accent bar with auto-generated icons       |
| Use Case     | Tips, notices, general highlights | System feedback, alerts, status messages                |

## Browser Compatibility

The Callout component is compatible with all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- [Notification](../Notification/README.md) - For status-specific alerts with semantic variants
- [Card](../Card/README.md) - For grouping related content in a container
