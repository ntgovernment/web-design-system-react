# Card Component

A flexible container component for displaying grouped content with optional header, footer, and icon support.

## Features

- Optional title with header
- Optional footer section
- Eight contextual variants (primary, secondary, success, danger, warning, info, light, dark)
- Icon support in header
- Full TypeScript support
- Bootstrap 5.3 styling
- Flexible content area

## Usage

### Basic Card

```tsx
import { Card } from '@ntgovernment/web-design-system';

<Card title="Card Title">
  Card content goes here.
</Card>
```

### Card with Footer

```tsx
<Card 
  title="Dashboard Statistics" 
  footer={<small className="text-muted">Last updated 3 mins ago</small>}
>
  <p>Your application has 1,254 active users this month.</p>
</Card>
```

### Card with Icon

```tsx
<Card 
  title="Analytics" 
  icon="fa-solid fa-chart-line"
>
  View your website analytics and metrics.
</Card>
```

### Card with Variant

```tsx
<Card title="Success" variant="success">
  Your operation completed successfully!
</Card>

<Card title="Warning" variant="warning">
  Please review these pending items.
</Card>

<Card title="Danger" variant="danger">
  Action required: resolve these errors.
</Card>
```

### Card without Title

```tsx
<Card>
  <p>Simple card with just body content, no header.</p>
</Card>
```

### Full Featured Card

```tsx
<Card 
  title="Project Overview" 
  variant="primary"
  icon="fa-solid fa-folder-open"
  footer={
    <div className="d-flex justify-content-between">
      <span>Updated: Jan 2026</span>
      <a href="#">View details →</a>
    </div>
  }
>
  <h6>Project Status: In Progress</h6>
  <p>This project is currently 65% complete with 12 tasks remaining.</p>
  <ul>
    <li>Design phase: Complete</li>
    <li>Development: In progress</li>
    <li>Testing: Pending</li>
  </ul>
</Card>
```

## Props

### CardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `undefined` | Card header title (optional) |
| `children` | `React.ReactNode` | **Required** | Card body content |
| `footer` | `React.ReactNode` | `undefined` | Card footer content (optional) |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `undefined` | Bootstrap contextual variant for background/text color |
| `icon` | `string` | `undefined` | FontAwesome icon class for the header (e.g., 'fa-solid fa-chart-line') |

## Variants

The Card component supports eight Bootstrap contextual variants that apply background and text colors:

| Variant | Use Case | Example |
|---------|----------|---------|
| `primary` | Primary information or emphasis | System notifications, primary content |
| `secondary` | Secondary information | Support content, metadata |
| `success` | Successful operations or positive status | Completed tasks, success messages |
| `danger` | Errors, critical warnings | Error states, urgent actions needed |
| `warning` | Warnings, cautions | Pending items, attention required |
| `info` | Informational content | Tips, helpful information |
| `light` | Light-themed cards | Subtle emphasis |
| `dark` | Dark-themed cards | High contrast, dark mode |

**Note**: When no variant is specified, the card uses the default Bootstrap card styling (white background with subtle border).

## Structure

A Card can have up to three sections:

### Header (Optional)
- Displayed when `title` prop is provided
- Shows the title as an `<h5>` element
- Icon (if provided) appears before the title
- Uses Bootstrap `.card-header` class

### Body (Required)
- Contains the `children` prop content
- Always rendered
- Uses Bootstrap `.card-body` class

### Footer (Optional)
- Displayed when `footer` prop is provided
- Can contain any React node (text, links, buttons, etc.)
- Uses Bootstrap `.card-footer` class

## Examples

### Dashboard Cards

```tsx
<div className="row">
  <div className="col-md-4">
    <Card 
      title="Total Users" 
      icon="fa-solid fa-users"
      variant="primary"
    >
      <h2 className="mb-0">1,254</h2>
      <small className="text-white-50">+12% from last month</small>
    </Card>
  </div>
  
  <div className="col-md-4">
    <Card 
      title="Revenue" 
      icon="fa-solid fa-dollar-sign"
      variant="success"
    >
      <h2 className="mb-0">$45,230</h2>
      <small className="text-white-50">+8% from last month</small>
    </Card>
  </div>
  
  <div className="col-md-4">
    <Card 
      title="Pending Tasks" 
      icon="fa-solid fa-list-check"
      variant="warning"
    >
      <h2 className="mb-0">23</h2>
      <small className="text-dark-50">Review required</small>
    </Card>
  </div>
</div>
```

### Content Card with Actions

```tsx
<Card 
  title="Article Title" 
  icon="fa-solid fa-newspaper"
  footer={
    <div>
      <Button variant="primary" size="sm">Read More</Button>
      <Button variant="tertiary" size="sm">Share</Button>
    </div>
  }
>
  <p className="card-text">
    This is a preview of the article content. Click "Read More" to 
    view the full article with all details and images.
  </p>
  <p className="card-text">
    <small className="text-muted">Published: February 1, 2026</small>
  </p>
</Card>
```

### List Card

```tsx
<Card title="Recent Activity" icon="fa-solid fa-clock">
  <ul className="list-group list-group-flush">
    <li className="list-group-item">User logged in - 2 mins ago</li>
    <li className="list-group-item">Document uploaded - 15 mins ago</li>
    <li className="list-group-item">Profile updated - 1 hour ago</li>
  </ul>
</Card>
```

## Accessibility

### Semantic HTML
The Card component uses semantic HTML structure:
- `<div>` with `.card` class for the container
- Proper heading hierarchy (`<h5>` for card title)
- Icons are marked with `aria-hidden="true"` to avoid redundancy

### Title as Heading
When using a `title`, it's rendered as an `<h5>` element. Ensure this fits within your page's heading hierarchy. If you need a different heading level, consider using a card without a title and providing your own heading in the body:

```tsx
<Card>
  <h3>Custom Heading Level</h3>
  <p>Card content with proper heading hierarchy.</p>
</Card>
```

### Color Contrast
When using colored variants, ensure text content maintains sufficient contrast for readability. Bootstrap's contextual utilities automatically adjust text color, but custom content may need additional styling.

### Interactive Elements
If the card contains interactive elements (buttons, links), ensure they have:
- Visible focus indicators
- Descriptive text or labels
- Proper tab order

## Styling

### Default Card Styles
Cards use Bootstrap 5.3's card component styling:
- White background with subtle border (default)
- Rounded corners
- Padding for content areas
- Responsive width (adapts to container)

### Custom Styling
You can add custom classes using Bootstrap utilities or custom CSS by wrapping the Card:

```tsx
<div className="my-3 shadow-lg">
  <Card title="Styled Card">
    Content with custom wrapper styling
  </Card>
</div>
```

### Grid Layouts
Cards work well with Bootstrap's grid system:

```tsx
<div className="row g-3">
  <div className="col-12 col-md-6 col-lg-4">
    <Card title="Card 1">Content 1</Card>
  </div>
  <div className="col-12 col-md-6 col-lg-4">
    <Card title="Card 2">Content 2</Card>
  </div>
  <div className="col-12 col-md-6 col-lg-4">
    <Card title="Card 3">Content 3</Card>
  </div>
</div>
```

## Related Documentation

- [Button Component](../Button/README.md) - For card actions
- [Alert Component](../Alert/README.md) - For similar contextual styling
- [Icon Component](../Icon/README.md) - Using icons independently
- [Theming Guide](../../themes/README.md) - Theme system overview

## Storybook

View live examples and interact with the Card component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > Card** to see all variants and configurations.

## TypeScript

The Card component is fully typed with TypeScript. Import the types:

```tsx
import { Card, CardProps } from '@ntgovernment/web-design-system';

// Use CardProps for custom wrappers or extensions
const MyCustomCard: React.FC<CardProps> = (props) => {
  return <Card {...props} />;
};
```

## Browser Support

The Card component supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3.3 must be loaded for proper styling
- FontAwesome must be loaded if using the `icon` prop
- The `children` prop is required - cards must have content
- Title and footer are optional
- Card adapts to the width of its container
- Use Bootstrap grid classes for responsive card layouts
