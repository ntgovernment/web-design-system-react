# Tag Component

## Overview

Used to categorise and differentiate content that helps users find what they need quickly and easily.

Tags allow UX and content designers to categorise content using keywords. They help users scan and easily find content that's relevant to them.

## Features

- **Six visual variants**: Default, Grey, Green, Blue, Warning, and Red
- **Uppercase typography**: Uses design token typography for consistent small-caps labeling
- **Theme-aware**: Automatically adapts colors for NTG and Central themes
- **Static (non-interactive)**: Tags are visual labels only, not clickable elements
- **Semantic HTML**: Uses `<span>` element with proper semantic class names
- **Accessible**: Ensures sufficient color contrast for readability (WCAG AAA compliant)
- **Customizable**: Supports custom className and all standard HTML span attributes

## Where Tags Are Used

Tags are commonly used on:

- **Search results** - Categorize search results by topic or content type
- **News items** - Indicate news categories or topics
- **Events** - Mark events by type or region
- **Card components** - Provide quick content categorization

## Key Characteristics

- **Static**: Tags are currently static and have no interactive states
- **Non-selectable**: They cannot be selected to view other content with the same tag
- **Non-hierarchical**: Tags do not denote any kind of hierarchy to content
- **Visual categorization**: Provide visual cues for quick content scanning

## How to Use

### Best Practices

- **Keep labels short** - Use no more than 2 or 3 words. Tags should be easily identifiable with clear keywords relating to the content.
- **Use nouns or adjectives** - For example: use "Online systems" not "Find online systems". Verbs or action words can make users think it's an interactive link or button.
- **Draw attention to categories** - Use tags to highlight a category of content or key information about it.
- **Multiple tags allowed** - Content can have more than one tag associated with it.
- **Present horizontally** - Groups of tags should be presented horizontally only.
- **Limit quantity** - A piece of content should have no more than 3 or 4 tags.

### How NOT to Use

Do not:

- **Use punctuation** - Tags should be clean, simple text
- **Overuse tags** - Limit to 3-4 tags per piece of content
- **Include icons** - Tags should be text-only
- **Use as links or CTAs** - Tags are not interactive elements
- **Create hierarchy** - Tags are non-hierarchical categorization tools
- **Use as status indicators** - Use the Notification component for status messages

## Usage Examples

### Basic Example

```tsx
import { Tag } from "@nt-web-design-system/components";

function MyComponent() {
  return (
    <div>
      <Tag variant="default" label="News" />
      <Tag variant="blue" label="Events" />
      <Tag variant="grey" label="Archived" />
    </div>
  );
}
```

### In Search Results

```tsx
<div className="search-result">
  <h3>Northern Territory Education Services</h3>
  <div className="d-flex gap-2 mb-2">
    <Tag variant="blue" label="Education" />
    <Tag variant="green" label="Services" />
  </div>
  <p>Find information about education services across the NT...</p>
</div>
```

### On News Items

```tsx
<article className="news-item">
  <div className="d-flex gap-2 mb-2">
    <Tag variant="default" label="Government" />
    <Tag variant="blue" label="Infrastructure" />
  </div>
  <h2>New Infrastructure Projects Announced</h2>
  <p className="text-muted">20 Feb 2026</p>
</article>
```

### On Event Listings

```tsx
<div className="event-card">
  <div className="d-flex gap-2 mb-2">
    <Tag variant="warning" label="Community Event" />
    <Tag variant="green" label="Alice Springs" />
  </div>
  <h3>Community Consultation Workshop</h3>
  <p>25 March 2026</p>
</div>
```

### In Card Components

```tsx
import { Card } from "@nt-web-design-system/components";

<Card
  title="Indigenous Programs"
  description="Supporting Indigenous communities across the NT"
  tagLabel="Community, Services, Regional"
  dateLabel="Updated 12 Feb 2026"
/>;
```

### Multiple Tags (2-3 Words Each)

```tsx
<div className="d-flex gap-2 flex-wrap">
  <Tag variant="blue" label="Online Services" />
  <Tag variant="default" label="Darwin" />
  <Tag variant="grey" label="Business" />
</div>
```

## Props

| Prop        | Type                                    | Default     | Description                                     |
| ----------- | --------------------------------------- | ----------- | ----------------------------------------------- |
| `variant`   | See Variants section below              | `'default'` | The visual style variant of the tag             |
| `label`     | `string`                                | -           | The text label to display inside the tag        |
| `className` | `string`                                | -           | Additional CSS class names                      |
| `...props`  | `React.HTMLAttributes<HTMLSpanElement>` | -           | All standard HTML span attributes are supported |

## Variants

The Tag component includes multiple color variants suitable for different categorization needs:

### Base Variants (Both Themes)

**Default** - Neutral styling for general categorization

- Use for: General content categories, topics, keywords

**Grey (Subtle)** - Muted neutral color for secondary tags

- Use for: Less prominent categories, archived content, secondary information

**Green** - Success or positive categorization

- Use for: Active content, approved items, positive categories

**Blue** - Informational categorization

- Use for: News, information, general topics

**Warning** - Attention or caution categorization

- Use for: Important notices, time-sensitive content, highlighted categories

**Red** - Urgent or high-priority categorization

- Use for: Urgent content, critical information, high-priority items

### NTG Theme Regional Variants

The NTG theme includes seven regional color variants for tagging region-specific content such as events, news items, and services. These align with the NT.GOV.AU regional brand colors:

| Variant        | Region                            | Use Case                                | Example                                             |
| -------------- | --------------------------------- | --------------------------------------- | --------------------------------------------------- |
| `orange`       | Darwin / Top End                  | Events, news, services in Darwin region | `<Tag variant="orange" label="Darwin Region" />`    |
| `ochre`        | Katherine / Big Rivers            | Katherine region content                | `<Tag variant="ochre" label="Katherine Event" />`   |
| `coral`        | Tennant Creek / Barkly            | Barkly region content                   | `<Tag variant="coral" label="Barkly Services" />`   |
| `sky-blue`     | Alice Springs / Central Australia | Central Australia content               | `<Tag variant="sky-blue" label="Alice Springs" />`  |
| `teal`         | East Arnhem                       | East Arnhem region content              | `<Tag variant="teal" label="East Arnhem" />`        |
| `rubine-red`   | Top End East                      | Regional content variant                | `<Tag variant="rubine-red" label="Top End East" />` |
| `bottle-green` | Big Rivers                        | Regional content variant                | `<Tag variant="bottle-green" label="Big Rivers" />` |

**Usage Example:**

```tsx
// Tagging a regional event
<div className="event-card">
  <div className="d-flex gap-2 mb-2">
    <Tag variant="warning" label="Community Event" />
    <Tag variant="sky-blue" label="Alice Springs" />
  </div>
  <h3>Central Australia Consultation</h3>
</div>
```

### Central Theme Agency Variants

The Central theme includes agency secondary color variants for categorizing agency-specific content. These are primarily used on agency intranets for search results and content categorization:

| Variant              | Purpose             | Use Case                         | Example                                                    |
| -------------------- | ------------------- | -------------------------------- | ---------------------------------------------------------- |
| `central-green`      | NTG Central content | Tag NTG Central specific content | `<Tag variant="central-green" label="NTG Central" />`      |
| `central-orange`     | Agency secondary    | Agency-specific categorization   | `<Tag variant="central-orange" label="Agency Resource" />` |
| `central-blue-light` | Agency secondary    | Agency-specific categorization   | `<Tag variant="central-blue-light" label="Policy" />`      |

**Usage Example:**

```tsx
// Categorizing agency content in search results
<div className="search-result">
  <div className="d-flex gap-2 mb-2">
    <Tag variant="central-green" label="NTG Central" />
    <Tag variant="blue" label="Policy Document" />
  </div>
  <h4>Central Government Policy Guidelines</h4>
</div>
```

## Accessibility

### Color Contrast

All tag variants meet WCAG AAA color contrast requirements for readability across both NTG and Central themes.

### Semantic HTML

Tags use semantic `<span>` elements with descriptive class names. For screen readers, ensure the tag content is meaningful:

```tsx
// Good - descriptive label
<Tag variant="green" label="Education" />

// If tags are purely decorative, provide context
<div>
  <span className="visually-hidden">Category: </span>
  <Tag variant="blue" label="News" />
</div>
```

### Non-Interactive Elements

Tags are non-interactive by default and do not receive keyboard focus. They are for visual categorization only.

**Important:** Do NOT wrap tags in buttons or links to make them clickable. Tags are designed to be static labels, not navigation elements.

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

**Colors (variant-specific):**

- Default: `--clr-bg-default`, `--clr-text-default`, `--clr-border-subtle`
- Grey: `--ntg-neutral-02`, `--ntg-neutral-08`, `--ntg-neutral-04`
- Green: `--clr-status-success-bg`, `--clr-status-success`
- Blue: `--clr-status-info-bg`, `--clr-status-info`
- Warning: `--clr-status-warning-bg`, `--clr-status-warning`
- Red: `--clr-status-danger-bg`, `--clr-status-danger`

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

### Available Base Classes

- `.tag` - Base tag styles
- `.tag-default` - Default variant
- `.tag-grey` - Grey variant (subtle)
- `.tag-green` - Green variant
- `.tag-blue` - Blue variant
- `.tag-warning` - Warning variant
- `.tag-red` - Red variant

### NTG Regional Variant Classes

- `.tag-orange` - Orange (Darwin/Top End)
- `.tag-ochre` - Ochre (Katherine/Big Rivers)
- `.tag-coral` - Coral (Tennant Creek/Barkly)
- `.tag-sky-blue` - Sky Blue (Alice Springs/Central Australia)
- `.tag-teal` - Teal (East Arnhem)
- `.tag-rubine-red` - Rubine Red (Top End East)
- `.tag-bottle-green` - Bottle Green (Big Rivers)

### Central Agency Variant Classes

- `.tag-central-green` - Central Green (NTG Central content)
- `.tag-central-orange` - Central Orange (Agency secondary)
- `.tag-central-blue-light` - Central Blue Light (Agency secondary)

## Related Documentation

- [Design Tokens (`@ntgovernment/web-design-tokens`)](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens)
- [Typography](../../themes/THEMES.md)
- [Theme Switching](../../themes/THEME_SWITCHING.md)
- [Card Component](../Card/CARD.md) - Uses tags for content categorization
- [Notification Component](../Notification/NOTIFICATION.md) - For interactive status indicators
- [Pill Component](../Pill/PILL.md) - For removable/interactive tags

## Browser Support

The Tag component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Version History

See [CHANGELOG.md](../../../CHANGELOG.md) for version history and updates.
