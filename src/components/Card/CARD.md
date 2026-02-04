# Card Component

A flexible and extensible content container component for displaying grouped content with optional media, header metadata, and footer actions. Supports composition with Image, Tag, and Button components for rich content cards.

## Features

- **Three Layout Variants** - Full (complete), minicard (icon + title only), and compact (horizontal layout)
- **Flexible Footer Behavior** - Footer container always renders for full variant; button visibility controlled independently
- **Rich Media Support** - Images, videos, or custom components with 16:9 aspect ratio
- **Header Metadata** - Tags and dates in header section (full variant only)
- **Footer Actions** - Semantic tertiary button or custom footer content
- **Responsive Design** - Mobile-friendly with stacking and reflow layouts
- **Horizontal Layout** - Optional image-on-side layout (responsive, stacks on mobile)
- **Clickable Cards** - Entire card as interactive link with keyboard support
- **Design Tokens** - Semantic spacing, typography, color, and focus tokens
- **Theme Support** - NT.GOV.AU (orange focus) and Central (green focus) themes
- **Type-Safe** - Complete TypeScript definitions with IntelliSense
- **Accessibility** - WCAG AAA compliant with proper ARIA labels and keyboard nav

## Design Tokens

The Card component uses the design system's semantic tokens for consistent theming:

### Spacing

- `--sp-xl` (24px) - Card padding (all sides)
- `--sp-xxs` (4px) - Minimal spacing (between body and footer)
- `--sp-xs` (8px) - Extra-small gaps
- `--sp-sm` (12px) - Small gaps

### Colors

- `--clr-bg-default` - Card background color
- `--clr-text-default` - Default text color
- `--clr-text-default-muted` - Secondary text color
- `--clr-border-strong-01` - Card border color

### Typography

- `--type-heading-h5-*` - Card title (size, weight, line-height, letter-spacing)
- `--type-body-base-*` - Card description text
- `--type-body-sm-*` - Header date and small text

### Focus & Interactive

- `--border-width-md` (1px) - Card border width
- `--shadow-focus-ntg` - Orange 4px focus outline for NT.GOV.AU theme
- `--shadow-focus-central` - Green 4px focus outline for Central theme

### Implementation

All spacing uses CSS variables:

```css
.card {
  padding: var(--sp-xl); /* 24px all sides */
}
.card-body {
  padding: var(--sp-xl) var(--sp-xl) var(--sp-xxs) var(--sp-xl); /* top/right/bottom/left */
}
.card-footer {
  padding: var(--sp-xl); /* 24px all sides */
}
```

## Usage

### Basic Card

```tsx
import { Card } from "@ntgovernment/web-design-system";

<Card
  title="Service Update"
  description="Your application has been submitted and is currently being reviewed."
/>;
```

### Full Card - Complete with All Sections

Default full variant rendering:

- Media (16:9 image)
- Header metadata (tags and date)
- Title with optional icon
- Description
- Footer with "Find out more" button

```tsx
<Card
  title="Supporting survivors on National Day of Remembrance"
  description="Join in and honour the resilience of survivors and the lives lost."
  imageURL="article.jpg"
  tagLabel="News:blue"
  dateLabel="17 Feb 2025"
  showTitleIcon={true}
  icon="fa-light fa-circle-info"
  actionText="Find out more"
  actionIcon="fa-light fa-arrow-right"
/>
```

### Footer Behavior - showButton Prop (Important!)

The footer container **always renders for full variant** to maintain consistent card spacing:

```tsx
// With button (default showButton={true})
<Card
  title="Article Title"
  description="Content here"
  actionText="Read more"
/>
// Result: Footer renders with button

// Without button (showButton={false})
<Card
  title="Article Title"
  description="Content here"
  showButton={false}
/>
// Result: Footer container still renders but button is hidden (maintains spacing!)

// Custom footer content (overrides default button)
<Card
  title="Article Title"
  description="Content here"
  footer={<p>Updated 2 hours ago</p>}
/>
// Result: Custom footer renders instead of default button
```

**Why?** The footer container persists to prevent layout shift when toggling button visibility dynamically. This is important for:

- Consistent card height in responsive grids
- Smooth transitions when showing/hiding buttons
- Predictable layout behavior

### Card with Image

```tsx
<Card
  title="Environmental Sustainability"
  description="Learn about our new programs to protect natural resources."
  imageURL="featured-image.jpg"
  showImage={true}
/>
```

### Card with Header Metadata

```tsx
<Card
  title="Community Engagement Session"
  description="Join us for a community discussion on local services."
  tagLabel="Event:green"
  dateLabel="25 Mar 2025"
/>
```

### Card with Custom Footer

Using custom footer content instead of default action button:

```tsx
<Card
  title="Application Dashboard"
  description="View and manage all your applications in one place."
  footer={<p style={{ fontSize: "0.875rem" }}>Updated 2 hours ago</p>}
/>
```

### Card Without Button (Footer Container Persists)

Use `showButton={false}` to hide button while maintaining footer spacing:

```tsx
<Card
  title="News Article"
  description="Read the latest updates about government services."
  showButton={false}
/>
// Footer container still renders, maintaining card spacing
```

### Horizontal Card Layout

Image on the side (automatically stacks on mobile):

```tsx
<Card
  horizontal={true}
  title="Department of Health"
  description="Access health services, information, and resources."
  imageURL="side-image.jpg"
  actionText="Access Services"
  actionIcon="fa-light fa-arrow-right"
/>
```

### Clickable Card

Entire card becomes a navigable link with keyboard support:

```tsx
<Card
  clickable={true}
  href="/article/123"
  ariaLabel="Read more about service updates"
  title="Important Service Update"
  description="Some services will have reduced hours during the holiday period."
  imageURL="article.jpg"
  tagLabel="Alert:warning"
  dateLabel="1 Feb 2025"
/>
```

### Card Grid with Equal Heights

```tsx
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <Card
      className="h-100"
      title="Licensing Services"
      description="Apply for licenses and permits online."
      imageURL="service1.jpg"
      tagLabel="Service:blue"
      dateLabel="15 Feb 2025"
      actionText="Apply Now"
    />
  </div>
  <div className="col">
    <Card
      className="h-100"
      title="Business Registration"
      description="Register your business entity."
      imageURL="service2.jpg"
      tagLabel="Service:green"
      dateLabel="10 Feb 2025"
      actionText="Register"
    />
  </div>
  {/* More cards... */}
</div>
```

## Props

### CardProps

| Prop               | Type                                | Default       | Description                                                                  |
| ------------------ | ----------------------------------- | ------------- | ---------------------------------------------------------------------------- |
| `title`            | `string`                            | **Required**  | Card title (rendered as h5)                                                  |
| `description`      | `React.ReactNode`                   | **Required**  | Card body content (not shown in minicard)                                    |
| `variant`          | `'full' \| 'minicard' \| 'compact'` | `'full'`      | Layout variant (full=complete, minicard=title+icon, compact=horizontal)      |
| `showImage`        | `boolean`                           | `true`        | Show/hide image section (full variant only)                                  |
| `imageURL`         | `string`                            | placeholder   | Image URL for card media section                                             |
| `media`            | `React.ReactNode`                   | `undefined`   | Custom media content (overrides imageURL)                                    |
| `mediaAspectRatio` | `'16:9'`                            | `'16:9'`      | Aspect ratio for media container (only 16:9 currently supported)             |
| `showMeta`         | `boolean`                           | `true`        | Show/hide header metadata (tags and date, full variant only)                 |
| `tagLabel`         | `string`                            | `'News:blue'` | Tag labels comma-separated with optional :variant suffix                     |
| `dateLabel`        | `string`                            | `undefined`   | Date label for header metadata section                                       |
| `showTitleIcon`    | `boolean`                           | `false`       | Show/hide title icon (auto-true for minicard/compact, full=false by default) |
| `icon`             | `string`                            | `undefined`   | FontAwesome icon class (e.g., 'fa-light fa-circle-info')                     |
| `showButton`       | `boolean`                           | `true`        | Show/hide footer button (footer container always renders for full variant)   |
| `actionText`       | `string`                            | `undefined`   | Action button text label (default: "Find out more")                          |
| `actionIcon`       | `string`                            | `undefined`   | Action button icon (FontAwesome class)                                       |
| `footer`           | `React.ReactNode`                   | `undefined`   | Custom footer content (overrides default button)                             |
| `horizontal`       | `boolean`                           | `false`       | Horizontal layout with image on side (stacks on mobile)                      |
| `clickable`        | `boolean`                           | `true`        | Make entire card clickable/keyboard navigable                                |
| `href`             | `string`                            | `undefined`   | URL for clickable card (renders as anchor tag)                               |
| `ariaLabel`        | `string`                            | `undefined`   | ARIA label for accessibility (recommended for clickable cards)               |

### Variant Behavior Details

#### Full Variant (Default)

- All sections render: media, metadata, title, description, footer
- Footer container **always renders** for spacing consistency
- Button visibility controlled by `showButton` prop
- Height expands with content

```tsx
<Card variant="full" title="..." description="..." />
```

#### Minicard Variant

- Only icon and title render
- No media, metadata, description, or footer
- Best for: grids, dashboards, category displays
- Icon always shows (showTitleIcon forced true)

```tsx
<Card variant="minicard" title="..." icon="..." />
```

#### Compact Variant

- Horizontal layout with icon, title, and description
- No media, metadata, or footer
- Best for: contact cards, quick info blocks, lists
- Icon always shows (showTitleIcon forced true)

```tsx
<Card variant="compact" title="..." description="..." icon="..." />
```

### CardHeaderMeta

Object type for structured header metadata (full variant only):

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

### Using Built-in Props vs Custom Components

The Card component provides props to render common layouts. You can use:

**Option 1: Built-in Props (Recommended)**

```tsx
<Card
  title="News Article"
  description="Article content here"
  imageURL="article.jpg"
  tagLabel="News:blue"
  dateLabel="17 Feb 2025"
  actionText="Read more"
  actionIcon="fa-light fa-arrow-right"
/>
```

**Option 2: Custom Footer with Component**

```tsx
<Card
  title="Take Action"
  description="Action content"
  footer={
    <div style={{ display: "flex", gap: "var(--sp-sm)" }}>
      <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-secondary">Learn More</button>
    </div>
  }
/>
```

**Option 3: Custom Media**

```tsx
<Card
  title="Community Event"
  description="Join us for community discussion"
  media={<video src="event.mp4" controls />}
  tagLabel="Event:green"
  dateLabel="25 Mar 2025"
  actionText="Register"
/>
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

### Semantic HTML Structure

The Card component produces semantic HTML:

- `<div class="card">` - Container (or `<a>` when clickable)
- `<h5 class="card-title">` - Proper heading hierarchy for titles
- `<img alt="...">` - Descriptive alt text for images
- `<span class="btn ..." aria-hidden="true">` - Footer button with aria-hidden to prevent duplicate announcements

### Keyboard Navigation

- **Tab** - Navigate to focused card
- **Enter/Space** - Activate card link when href provided
- **Internal elements** - Pointer-events disabled to prevent focus stealing
- **Focus indicators** - Theme-specific 4px colored shadow outline
  - NT.GOV.AU: Orange (`--shadow-focus-ntg`)
  - Central: Green (`--shadow-focus-central`)

### Clickable Cards Best Practices

Always provide `ariaLabel` for screen reader users when card doesn't have a clear link text:

```tsx
<Card
  clickable={true}
  href="/article/123"
  ariaLabel="Read more about environmental initiatives"
  title="Environmental Initiatives"
  description="Learn about new conservation programs..."
/>
```

### Image Accessibility

Always provide descriptive `alt` text for images:

```tsx
<Card
  title="Community Gathering"
  description="Community members at outdoor event"
  imageURL="community.jpg"
/>
// imageURL assumes filename describes image

// Or with custom media element:
<Card
  title="Community Gathering"
  description="Community members at outdoor event"
  media={<img src="community.jpg" alt="Community members gathering at outdoor event" />}
/>
```

### Color Contrast

All text meets WCAG AAA color contrast standards:

- Default text: `--clr-text-default` on `--clr-bg-default` (≥7:1)
- Card titles: Semantic heading color tokens (≥7:1)
- Link text: Proper contrast on hover/focus states

### Button in Footer

The footer button uses `aria-hidden="true"` because:

1. Button is not a real button element (it's a span with button styling)
2. Button is inside the clickable card wrapper
3. To prevent screen reader duplicate announcements
4. Card as whole is the interactive element, not individual button

For custom footers with actual interactive elements:

```tsx
<Card
  title="Actions Available"
  description="Choose an action below"
  footer={
    <div style={{ display: "flex", gap: "var(--sp-sm)" }}>
      <button className="btn btn-primary">Save</button>
      <button className="btn btn-secondary">Cancel</button>
    </div>
  }
/>
```

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

### Recent Changes: showFooter → showButton

**Old approach (deprecated)**:

```tsx
<Card showFooter={false} title="News" description="..." />
// Footer section completely hidden
```

**New approach (current)**:

```tsx
<Card showButton={false} title="News" description="..." />
// Footer container still renders (maintains spacing), button hidden
```

**Key difference**: Footer container always renders for full variant now (better layout consistency).

### Footer Behavior Changes

**Before showButton refactor**:

- `showFooter={false}` → Entire footer section hidden, no spacing
- Could cause layout shift when toggling visibility

**After showButton refactor**:

- `showButton={false}` → Footer container renders with consistent spacing, button hidden
- Prevents layout shift/jumping
- Better for responsive grids where consistent height is important

### Updated Props

| Old Pattern            | New Pattern                             | Notes                                            |
| ---------------------- | --------------------------------------- | ------------------------------------------------ |
| `showFooter={boolean}` | `showButton={boolean}`                  | Footer container always renders for full variant |
| `footer={<Button...>}` | `actionText="..."` + `actionIcon="..."` | Use built-in button props, or pass custom footer |
| `media={<img>}`        | `imageURL="..."` or `media={<img>}`     | Both work; imageURL is simpler                   |
| `header={{tag, date}}` | `tagLabel="..."` + `dateLabel="..."`    | Both work; string props are simpler              |
| `clickable={false}`    | `clickable={false}`                     | No change (already working)                      |

### Example Migration

**Old Full Card**:

```tsx
<Card
  title="News"
  description="Content"
  showFooter={true}
  footer={<Button variant="tertiary" label="Read more" />}
/>
```

**New Full Card (equivalent)**:

```tsx
<Card
  title="News"
  description="Content"
  showButton={true}
  actionText="Read more"
  actionIcon="fa-light fa-arrow-right"
/>
```

## Examples

### Full Card - News Article

Complete card with media, metadata, and action button:

```tsx
<Card
  title="New Government Initiative Launched"
  description="The Northern Territory Government announces a $5M funding program for community development projects across regional areas."
  imageURL="/news/article-123.jpg"
  tagLabel="News:blue"
  dateLabel="17 Feb 2025"
  actionText="Read full article"
  actionIcon="fa-light fa-arrow-right"
/>
```

### Clickable Service Card

Card becomes a navigable link:

```tsx
<Card
  clickable={true}
  href="/services/licensing"
  ariaLabel="Apply for business license"
  title="Business Licensing"
  description="Apply for business licenses, permits, and registrations online. Fast processing and easy tracking."
  imageURL="/services/licensing.jpg"
  actionText="Apply now"
  actionIcon="fa-light fa-arrow-right"
/>
```

### Card Without Button (Footer Persists)

Footer container remains for consistent spacing:

```tsx
<Card
  title="Service Information"
  description="Important information about our services."
  imageURL="/info/service.jpg"
  tagLabel="News:blue"
  dateLabel="15 Feb 2025"
  showButton={false}
/>
```

### Alert Card with Custom Footer

Custom footer content instead of default button:

```tsx
<Card
  title="Action Required: License Renewal"
  description="Your license renewal is due soon. Please complete the renewal process to avoid service interruption."
  tagLabel="Urgent:warning"
  dateLabel="Due: 15 Feb 2025"
  footer={
    <p style={{ color: "var(--clr-text-danger)" }}>Deadline: 15 Feb 2025</p>
  }
/>
```

### Compact Contact Cards List

Horizontal layout cards for contact information:

```tsx
<div className="row g-3">
  <div className="col-md-6">
    <Card
      variant="compact"
      title="Customer Service"
      description="1800 000 000 or ext 12345"
      icon="fa-light fa-phone"
    />
  </div>
  <div className="col-md-6">
    <Card
      variant="compact"
      title="Email Support"
      description="support@nt.gov.au"
      icon="fa-light fa-envelope"
    />
  </div>
</div>
```

### Minicard Grid Dashboard

Multiple minicards for categories/services:

```tsx
<div className="row g-3 row-cols-2 row-cols-md-3 row-cols-lg-4">
  <div className="col">
    <Card variant="minicard" title="Licensing" icon="fa-light fa-certificate" />
  </div>
  <div className="col">
    <Card
      variant="minicard"
      title="Registration"
      icon="fa-light fa-clipboard"
    />
  </div>
  <div className="col">
    <Card variant="minicard" title="Applications" icon="fa-light fa-file" />
  </div>
  <div className="col">
    <Card variant="minicard" title="Support" icon="fa-light fa-headset" />
  </div>
</div>
```

### Responsive Grid with Equal Heights

Full cards in responsive grid with consistent dimensions:

```tsx
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  <div className="col">
    <Card
      className="h-100"
      title="Licensing Services"
      description="Apply for licenses and permits online. Fast processing and easy tracking."
      imageURL="/services/licensing.jpg"
      tagLabel="Service:blue"
      dateLabel="15 Feb 2025"
      actionText="Apply Now"
    />
  </div>
  <div className="col">
    <Card
      className="h-100"
      title="Business Registration"
      description="Register your business entity quickly and securely online."
      imageURL="/services/registration.jpg"
      tagLabel="Service:green"
      dateLabel="10 Feb 2025"
      actionText="Register"
    />
  </div>
  <div className="col">
    <Card
      className="h-100"
      title="Job Applications"
      description="Browse and apply for job opportunities with the NT Government."
      imageURL="/services/jobs.jpg"
      tagLabel="Careers:blue"
      dateLabel="20 Feb 2025"
      actionText="Apply"
    />
  </div>
</div>
```

## Related Components

- [Image Component](../Image/IMAGE.md) - For card media sections
- [Tag Component](../Tag/TAG.md) - For card header labels (alternative to tagLabel prop)
- [Icon Component](../Icon/ICON.md) - For title icons and action icons (FontAwesome wrapper)
- [Notification Component](../Notification/NOTIFICATION.md) - For alert/callout style cards
- [Button Component](../Button/BUTTON.md) - Reference for Button.css dependency (used in footer)
- [Pill Component](../Pill/PILL.md) - Alternative label component

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

## Implementation Notes

### Dependencies

- **Bootstrap 5.3.3** - Required for grid system and utility classes
- **FontAwesome 6** - Required only if using icon, actionIcon props
- **Button.css** - Required for footer button styling (imported automatically with Card.css)

### Required Props

- `title` (string) - Card always requires a title
- `description` (React.ReactNode) - Card body content (note: not shown in minicard variant)

### Responsive Behavior

- **Width**: Card adapts to container width (100% by default)
- **Height**:
  - Use `className="h-100"` for equal height cards in grids
  - Footer persists regardless of showButton state (maintains consistent height)
- **Horizontal layout**:
  - Desktop: Image on left side
  - Mobile (< 768px): Image stacks above content

### Focus and Keyboard

- Clickable cards receive focus with `Tab` key
- Theme-specific 4px colored focus outline appears on focus
- NTG: Orange outline
- Central: Green outline
- Interior pointer-events disabled to maintain focus on card wrapper (not interior elements)

### Footer Container

**Important**: Footer container ALWAYS renders for full variant:

- Maintains consistent card height across layouts
- Prevents layout shift when toggling button visibility
- Provides predictable spacing with `var(--sp-xl)` padding
- Button visibility controlled independently via `showButton` prop

### Design Token Usage

All spacing uses CSS variables:

- `--sp-xl` (24px) for card and footer padding
- `--sp-xxs` (4px) between body and footer
- `--type-heading-h5-*` for title styling
- `--shadow-focus-ntg` / `--shadow-focus-central` for focus states

### Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- iOS Safari (latest)
- Chrome Mobile (latest)
- CSS variables required (IE 11 not supported)
