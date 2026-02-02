# Card Component

A flexible and extensible content container component for displaying grouped content with optional media, header metadata, and footer actions. Supports composition with Image, Tag, and Button components for rich content cards.

## Features

- **Multiple Variants** - Full, minicard (icon + title), and compact (horizontal icon + content) variants
- **Rich Media Support** - Images, videos, or custom components with aspect ratio control
- **Header Metadata** - Tag/label and date information for news articles and content listings
- **Footer Actions** - Buttons or custom components for calls-to-action
- **Flexible Composition** - Compose with Image, Tag, Button, and other components
- **Horizontal Layout** - Image on the side (responsive, stacks on mobile)
- **Clickable Cards** - Entire card as a link with hover and focus states
- **Grid Support** - Works with Bootstrap grid and equal height cards
- **Design Tokens** - Uses semantic tokens for consistent theming
- **Theme Support** - Works with both NTG and Central themes
- **Full TypeScript Support** - Complete type definitions with IntelliSense
- **Accessibility** - Proper ARIA attributes and keyboard navigation

## Design Tokens

The Card component uses the design system's semantic tokens for consistent theming:

### Spacing

- `--sp-xl` (24px) - Card padding
- `--sp-sm` (12px) - Internal gaps
- `--sp-xs` (8px) - Small gaps

### Colors

- `--clr-bg-default` - Card background
- `--clr-text-default` - Default text color
- `--clr-link-default` - Card title color
- `--clr-border-subtle` - Card border color

### Typography

- `--type-heading-h3-*` - Card title styling
- `--type-body-default-*` - Card text styling
- `--type-body-small-*` - Header date styling

### Other

- `--border-width-md` - Card border width
- `--shadow-md` - Hover shadow for clickable cards
- `--shadow-focus-ntg` / `--shadow-focus-central` - Theme-specific focus styles

## Usage

### Basic Card

```tsx
import { Card } from "@ntgovernment/web-design-system";

<Card
  title="Service Update"
  description="Your application has been submitted and is currently being reviewed."
/>;
```

### Full Card with All Features

Matches the Figma design with media, header metadata, and footer actions:

```tsx
import { Card, Image, Tag, Button } from "@ntgovernment/web-design-system";

<Card
  media={<img src="article.jpg" alt="News article" />}
  header={{
    tag: <Tag variant="info" label="News" />,
    date: "17 Feb 2025",
  }}
  title="Supporting survivors on National Day of Remembrance"
  description="Join in and honour the resilience of survivors and the lives lost."
  footer={
    <Button
      variant="tertiary"
      label="Find out more"
      iconRight="fa-solid fa-arrow-right"
    />
  }
  mediaAspectRatio="16:9"
/>;
```

### Card with Media

```tsx
<Card
  media={
    <img
      src="featured-image.jpg"
      alt="Featured content"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  title="Environmental Sustainability"
  description="Learn about our new programs to protect natural resources."
  mediaAspectRatio="16:9"
/>
```

### Card with Header Metadata

```tsx
<Card
  header={{
    tag: <Tag variant="success" label="Event" />,
    date: "25 Mar 2025",
  }}
  title="Community Engagement Session"
  description="Join us for a community discussion on local services."
/>
```

### Card with Footer Actions

```tsx
<Card
  title="Application Dashboard"
  description="View and manage all your applications in one place."
  footer={
    <div style={{ display: "flex", gap: "var(--sp-sm)" }}>
      <Button variant="primary" label="View Dashboard" />
      <Button variant="secondary" label="New Application" />
    </div>
  }
/>
```

### Horizontal Card Layout

Image on the side (automatically stacks on mobile):

```tsx
<Card
  horizontal
  media={<img src="side-image.jpg" alt="Department" />}
  title="Department of Health"
  description="Access health services, information, and resources."
  footer={
    <Button
      variant="tertiary"
      label="Access Services"
      iconRight="fa-solid fa-arrow-right"
    />
  }
/>
```

### Clickable Card

Entire card as a navigable link:

```tsx
<Card
  clickable
  href="/article/123"
  ariaLabel="Read more about service updates"
  media={<img src="article.jpg" alt="Service update" />}
  header={{
    tag: <Tag variant="warning" label="Alert" />,
    date: "1 Feb 2025",
  }}
  title="Important Service Update"
  description="Some services will have reduced hours during the holiday period."
/>
```

### Card Grid with Equal Heights

```tsx
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <Card
      className="h-100"
      media={<img src="service1.jpg" alt="Service 1" />}
      header={{
        tag: <Tag variant="info" label="Service" />,
        date: "15 Feb 2025",
      }}
      title="Licensing Services"
      description="Apply for licenses and permits online."
      footer={<Button variant="tertiary" label="Apply Now" />}
    />
  </div>
  <div className="col">
    <Card
      className="h-100"
      media={<img src="service2.jpg" alt="Service 2" />}
      header={{
        tag: <Tag variant="success" label="Service" />,
        date: "10 Feb 2025",
      }}
      title="Business Registration"
      description="Register your business entity."
      footer={<Button variant="tertiary" label="Register" />}
    />
  </div>
  {/* More cards... */}
</div>
```

## Props

### CardProps

| Prop               | Type                                | Default      | Description                                                   |
| ------------------ | ----------------------------------- | ------------ | ------------------------------------------------------------- |
| `title`            | `string`                            | **Required** | Card title (rendered as h5)                                   |
| `description`      | `React.ReactNode`                   | **Required** | Card body content                                             |
| `media`            | `React.ReactNode`                   | `undefined`  | Rich media content (Image component or custom ReactNode)      |
| `header`           | `CardHeaderMeta \| React.ReactNode` | `undefined`  | Header metadata with tag and date, or custom ReactNode        |
| `footer`           | `React.ReactNode`                   | `undefined`  | Footer content (Button component or custom ReactNode)         |
| `horizontal`       | `boolean`                           | `false`      | Horizontal layout with image on side (stacks on mobile)       |
| `clickable`        | `boolean`                           | `false`      | Make entire card clickable/linkable                           |
| `href`             | `string`                            | `undefined`  | URL for clickable card (when clickable is true)               |
| `className`        | `string`                            | `''`         | Additional CSS classes (e.g., 'h-100' for equal height)       |
| `ariaLabel`        | `string`                            | `undefined`  | ARIA label for clickable cards (required for accessibility)   |
| `mediaAspectRatio` | `'16:9' \| '4:3' \| '1:1'`          | `'16:9'`     | Aspect ratio for media container                              |
| `variant`          | `string`                            | `undefined`  | **DEPRECATED**: Use composition with Tag/Notification instead |

### CardHeaderMeta

Object type for structured header metadata:

| Property | Type              | Description                               |
| -------- | ----------------- | ----------------------------------------- |
| `tag`    | `React.ReactNode` | Tag/label component (e.g., Tag component) |
| `date`   | `string`          | Date string (e.g., "17 Feb 2025")         |

## Media Aspect Ratios

The `mediaAspectRatio` prop controls the aspect ratio of the media container:

| Ratio  | Use Case                   | Dimensions                             |
| ------ | -------------------------- | -------------------------------------- |
| `16:9` | Default, widescreen images | Wide landscape (e.g., 1920x1080)       |
| `4:3`  | Standard images            | Traditional landscape (e.g., 1024x768) |
| `1:1`  | Square images              | Square format (e.g., 1000x1000)        |

```tsx
<Card
  media={<img src="square.jpg" alt="Square image" />}
  mediaAspectRatio="1:1"
  title="Square Media Card"
>
  Content goes here
</Card>
```

## Component Composition

### With Image Component

```tsx
import { Card, Image } from "@ntgovernment/web-design-system";

<Card
  media={<Image src="article.jpg" alt="Article image" fluid />}
  title="News Article"
  description="Article content"
/>;
```

### With Tag Component

```tsx
import { Card, Tag } from "@ntgovernment/web-design-system";

<Card
  header={{
    tag: <Tag variant="info" label="News" />,
    date: "17 Feb 2025",
  }}
  title="Latest Update"
  description="Update content"
/>;
```

### With Button Component

```tsx
import { Card, Button } from "@ntgovernment/web-design-system";

<Card
  title="Take Action"
  description="Action content"
  footer={
    <Button
      variant="primary"
      label="Get Started"
      iconRight="fa-solid fa-arrow-right"
    />
  }
/>;
```

### With Multiple Components

```tsx
import { Card, Image, Tag, Button } from "@ntgovernment/web-design-system";

<Card
  media={<Image src="event.jpg" alt="Event" />}
  header={{
    tag: <Tag variant="success" label="Event" />,
    date: "25 Mar 2025",
  }}
  title="Community Event"
  description="Event description"
  footer={
    <>
      <Button variant="primary" label="Register" />
      <Button variant="secondary" label="Learn More" />
    </>
  }
/>;
```

## Layout Patterns

### Grid Layout

Use Bootstrap's grid system for responsive card layouts:

```tsx
<div className="row g-4">
  <div className="col-md-6 col-lg-4">
    <Card title="Card 1" description="Content 1" />
  </div>
  <div className="col-md-6 col-lg-4">
    <Card title="Card 2" description="Content 2" />
  </div>
  <div className="col-md-6 col-lg-4">
    <Card title="Card 3" description="Content 3" />
  </div>
</div>
```

### Equal Height Cards

Use Bootstrap's `h-100` utility class:

```tsx
<div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <Card className="h-100" title="Short Content" description="Brief text" />
  </div>
  <div className="col">
    <Card
      className="h-100"
      title="Long Content"
      description="Much longer text that extends the height..."
    />
  </div>
</div>
```

### Horizontal Layout

Image on the side (responsive):

```tsx
<Card
  horizontal
  media={<img src="side.jpg" alt="Side image" />}
  title="Horizontal Card"
  description="Content appears next to the image on desktop, stacks below on mobile devices."
/>
```

## Accessibility

### Semantic HTML

The Card component uses semantic HTML:

- `<div>` with `.card` class for container
- `<h5>` for card title (proper heading hierarchy)
- `<a>` tag when clickable with href
- Proper ARIA attributes for interactive elements

### Clickable Cards

When using clickable cards:

1. **Always provide `ariaLabel`** for screen readers:

```tsx
<Card
  clickable
  href="/article"
  ariaLabel="Read more about environmental initiatives"
  title="Environmental Initiatives"
>
  Content preview...
</Card>
```

2. **Keyboard Navigation** - Clickable cards support:
   - `Tab` to focus
   - `Enter` or `Space` to activate (when using button role)
   - Theme-specific focus indicators (orange for NTG, green for Central)

3. **Focus States** - Proper focus indicators with theme-specific colors:
   - NTG: 4px solid orange (`--shadow-focus-ntg`)
   - Central: 4px solid green (`--shadow-focus-central`)

### Images

Always provide descriptive `alt` text for images:

```tsx
<Card
  media={
    <img src="news.jpg" alt="Community members gathering at outdoor event" />
  }
  title="Community Gathering"
>
  Content
</Card>
```

### Color Contrast

All text maintains WCAG AAA color contrast ratios:

- Default text: `--clr-text-default` on `--clr-bg-default`
- Card titles: `--clr-link-default` (meets AAA standards)

## Theming

### Theme Support

The Card component automatically adapts to the active theme:

**NTG Theme**:

- Focus: 4px solid orange
- Border radius: 0px (sharp corners)

**Central Theme**:

- Focus: 4px solid green
- Border radius: Follows `--radii-md` token

### Custom Styling

Override with custom CSS or design tokens:

```tsx
<Card
  className="custom-card"
  style={
    {
      "--bs-card-border-color": "var(--clr-border-strong-01)",
      "--bs-card-bg": "var(--clr-bg-shade)",
    } as React.CSSProperties
  }
  title="Custom Styled Card"
>
  Custom content
</Card>
```

## Migration Guide

### From Old Card Component

**Old approach (deprecated)**:

```tsx
<Card title="News" variant="info" footer={<small>Updated 2 hours ago</small>}>
  Content
</Card>
```

**New approach (recommended)**:

```tsx
<Card
  variant="full"
  tagLabel="News"
  dateLabel="Updated 2 hours ago"
  title="News"
  description="Content"
  showTitleIcon={true}
  icon="fa-solid fa-newspaper"
  footer={<Button variant="tertiary" label="Read more" />}
/>
```

### Key Changes

1. **`variant` prop deprecated** - Use Tag or Notification components for colored indicators
2. **`icon` prop removed** - Use `showTitleIcon` and `icon` props instead
3. **New `media` prop** - For images, videos, or custom components
4. **New `header` prop** - For tag and date metadata
5. **New `horizontal` prop** - For side-by-side layouts
6. **New `clickable` props** - For interactive cards

## Examples

### News Article Card

```tsx
<Card
  media={<img src="/news/article-123.jpg" alt="Article image" />}
  header={{
    tag: <Tag variant="info" label="News" />,
    date: "17 Feb 2025",
  }}
  title="New Government Initiative Launched"
  description="The Northern Territory Government announces a $5M funding program for community development projects across regional areas."
  footer={
    <Button
      variant="tertiary"
      label="Read full article"
      iconRight="fa-solid fa-arrow-right"
    />
  }
  mediaAspectRatio="16:9"
/>
```

### Service Card

```tsx
<Card
  clickable
  href="/services/licensing"
  ariaLabel="Apply for business license"
  media={<img src="/services/licensing.jpg" alt="Licensing services" />}
  title="Business Licensing"
  description="Apply for business licenses, permits, and registrations online. Fast processing and easy tracking."
  footer={
    <Button
      variant="tertiary"
      label="Apply now"
      iconRight="fa-solid fa-arrow-right"
    />
  }
/>
```

### Alert Card

```tsx
<Card
  header={{
    tag: <Tag variant="danger" label="Urgent" />,
    date: "Due: 15 Feb 2025",
  }}
  title="Action Required: License Renewal"
  description="Your license renewal is due soon. Please complete the renewal process to avoid service interruption."
  footer={<Button variant="primary" label="Renew Now" />}
/>
```

### Compact Contact Cards

```tsx
<div className="row g-3">
  <div className="col-md-6">
    <Card
      variant="compact"
      title="Customer Service"
      description="1800 000 000 or ext 12345"
      icon="fa-solid fa-phone"
    />
  </div>
  <div className="col-md-6">
    <Card
      variant="compact"
      title="Email Support"
      description="support@nt.gov.au"
      icon="fa-solid fa-envelope"
    />
  </div>
</div>
```

## Related Components

- [Image Component](../Image/README.md) - For card media
- [Tag Component](../Tag/README.md) - For card header labels
- [Button Component](../Button/README.md) - For card footer actions
- [Pill Component](../Pill/README.md) - Alternative to tags
- [Notification Component](../Notification/README.md) - For alert-style cards

## Storybook

View live examples and interact with the Card component in Storybook:

```bash
npm run storybook
```

Navigate to **⭐ Recent > Card** to see all variants and configurations.

## TypeScript

Full TypeScript support with complete type definitions:

```tsx
import {
  Card,
  CardProps,
  CardHeaderMeta,
} from "@ntgovernment/web-design-system";

// Custom header metadata
const headerMeta: CardHeaderMeta = {
  tag: <Tag variant="info" label="News" />,
  date: "17 Feb 2025",
};

// Custom card wrapper
const MyCard: React.FC<CardProps> = (props) => {
  return <Card {...props} />;
};
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3.3 must be loaded for proper styling
- FontAwesome optional (only needed if using icon, actionIcon, or Button iconLeft/iconRight)
- `title` and `description` props are required - cards must have both
- Card adapts to container width (100% by default)
- Use `className="h-100"` for equal height cards in grids
- Horizontal layout automatically stacks on mobile (< 768px)
- Clickable cards require `ariaLabel` for accessibility
- When `showFooter` is false, the entire card becomes clickable automatically
