# MiniCards Component

## Overview

The **MiniCards** component displays a responsive grid of mini cards (icon + title + link) in a flexible layout. Each card is a simplified variant of the Card component, designed for compact grids, dashboards, and quick-access navigation.

## Features

- **Responsive Grid Layout**: Adapts to screen size (1 col mobile, 2 col tablet, 3-4 col desktop)
- **Configurable Layouts**: Choose between 3 or 4 cards per row on desktop
- **Background Options**: White (default) or grey background color
- **Optional Section Title**: Display a heading above the card grid
- **Manual & Auto-Select Modes**: Use prop-based cards or fetch from Squiz API
- **Uniform Card Styling**: All cards have consistent sizing and appearance
- **Loading & Error States**: Built-in loading spinner and error message display
- **Keyboard Accessible**: Full keyboard navigation with theme-specific focus outlines
- **Theme Support**: NTG (orange focus) and Central (green focus) themes

## Usage

### Manual Selection (Static Cards)

```tsx
import { MiniCards } from '@ntgovernment/web-design-system';

const cards = [
  {
    id: '1',
    title: 'Grant applicants',
    href: 'https://cyber.nt.gov.au/grants',
    icon: 'fa-light fa-briefcase',
  },
  {
    id: '2',
    title: 'Service providers',
    href: 'https://cyber.nt.gov.au/services',
    icon: 'fa-light fa-globe',
  },
  {
    id: '3',
    title: 'Get in touch',
    href: 'https://cyber.nt.gov.au/contact',
    icon: 'fa-light fa-circle-info',
  },
];

export default function App() {
  return (
    <MiniCards
      title="Find out more"
      cards={cards}
      layout="3-col"
      backgroundColor="white"
      cardSelectionMode="manual"
    />
  );
}
```

### Auto-Select from API

```tsx
<MiniCards
  title="Services"
  cardSelectionMode="auto"
  apiEndpoint="/api/services"
  apiParams={{ category: 'business' }}
  layout="3-col"
  backgroundColor="white"
/>
```

## Props

### `title?: string`
Optional section heading displayed above the card grid.
- Default: undefined
- Example: `"Find out more"`

### `cards?: MiniCardItem[]`
Array of card objects (required for manual mode). Each card must have:
- `id: string` — Unique identifier
- `title: string` — Card title/text
- `href: string` — Card link URL
- `icon: string` — FontAwesome icon class (e.g., `'fa-light fa-briefcase'`)

Example:
```tsx
[
  { id: '1', title: 'Grants', href: '#', icon: 'fa-light fa-briefcase' }
]
```

### `layout?: '3-col' | '4-col'`
Desktop layout: number of cards per row on desktop view.
- Default: `'3-col'`
- Mobile: Always 1 column
- Tablet (576px+): Always 2 columns
- Desktop (768px+): 3 or 4 columns

### `backgroundColor?: 'white' | 'grey'`
Background color variant for the component container.
- Default: `'white'`
- `'white'`: Uses `--clr-bg-default` (primary background)
- `'grey'`: Uses `--clr-bg-shade` (secondary/shade background)

### `cardSelectionMode?: 'manual' | 'auto'`
How cards are sourced.
- Default: `'manual'`
- `'manual'`: Render `cards` prop as-is
- `'auto'`: Fetch from `apiEndpoint`, transform response

### `apiEndpoint?: string`
Squiz API endpoint URL for auto-select mode (required if `cardSelectionMode='auto'`).
- Example: `'/api/cards'`
- Full URL or relative path

### `apiParams?: Record<string, any>`
Optional query parameters for API request (auto mode only).
- Example: `{ category: 'business', limit: 6 }`

### `loading?: boolean`
Show loading spinner and "Loading cards..." message.
- Default: `false`
- Typically managed internally when using auto mode

### `error?: string`
Error message to display in an alert box. If set, no cards are shown.
- Example: `'Failed to load cards. Please try again later.'`

## Responsive Behavior

The MiniCards component is mobile-first and adapts to screen sizes:

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 576px | 1 column |
| Tablet | 576px - 768px | 2 columns |
| Desktop (3-col) | ≥ 768px | 3 columns |
| Desktop (4-col) | ≥ 768px | 4 columns |

Resize your browser to see the grid adapt in real-time. Cards stack vertically on mobile and expand horizontally as screen width increases.

## Styling & Theme Integration

### CSS Structure

The component uses three CSS files for consistent theming:

- **MiniCards.css** — Base responsive grid layout, spacing, typography
- **MiniCards-ntg.css** — NTG (NT.GOV.AU) theme colors and focus states
- **MiniCards-central.css** — Central theme colors and focus states

All spacing and colors use design tokens for consistency:
- Colors: `--clr-bg-default`, `--clr-bg-shade`, `--clr-text-default`, etc.
- Spacing: `--sp-xs` (4px) to `--sp-xxxl` (48px)
- Typography: `--type-heading-h2-*`, `--type-body-default-*`

### Background Colors

```css
/* White background (default) */
.mini-cards--bg-white {
  background-color: var(--clr-bg-default);
}

/* Grey background */
.mini-cards--bg-grey {
  background-color: var(--clr-bg-shade);
}
```

## States

### Loading State
When `cardSelectionMode='auto'` and data is being fetched:
```tsx
<MiniCards
  cardSelectionMode="auto"
  apiEndpoint="/api/cards"
  loading={true}
/>
```

Displays an animated spinner with "Loading cards..." message.

### Error State
When API fetch fails or error message is provided:
```tsx
<MiniCards
  cardSelectionMode="auto"
  apiEndpoint="/api/cards"
  error="Failed to load cards. Please try again later."
/>
```

Displays error message in a styled alert box.

### Empty State
When no cards are available:
```tsx
<MiniCards
  cards={[]}
  cardSelectionMode="manual"
/>
```

Displays "No cards to display." message.

## Accessibility

- **Keyboard Navigation**: All cards are keyboard focusable via Tab
- **Focus Indicators**: Theme-specific 4px colored box-shadow (orange for NTG, green for Central)
- **Click Targets**: Entire card is clickable when `href` is provided
- **ARIA**: Loading and error states have appropriate `role` and `aria-live` attributes
- **Color Contrast**: All text meets WCAG AAA standards

## Squiz API Integration

### Expected Response Format

For auto-select mode, the API should return one of these formats:

**Format 1: Direct array**
```json
[
  { "id": "1", "title": "Title 1", "href": "#", "icon": "fa-light fa-icon" },
  { "id": "2", "title": "Title 2", "href": "#", "icon": "fa-light fa-icon" }
]
```

**Format 2: Wrapped in cards property**
```json
{
  "cards": [
    { "id": "1", "title": "Title 1", "href": "#", "icon": "fa-light fa-icon" }
  ]
}
```

### Future DXP Service Integration

This component is designed for Squiz DXP deployment. A JSON schema will be created for DXP component input/output configuration, allowing administrators to:
- Define the API endpoint in the CMS
- Configure layout and background via UI
- Select cards manually or auto-fetch from the API
- Set section title and other display options

## Design References

This component is inspired by the [Cyber Invest Business Program](https://cyber.nt.gov.au/cyber-invest-business-program/about/) "Find out more" section and uses:
- Icon + title layout for quick recognition
- 3-column grid on desktop for balanced content distribution
- Uniform card sizing for visual consistency
- Clickable cards for improved UX

## Examples

### Basic Example
```tsx
<MiniCards
  title="Find out more"
  cards={[
    { id: '1', title: 'Grants', href: '#', icon: 'fa-light fa-briefcase' },
    { id: '2', title: 'Support', href: '#', icon: 'fa-light fa-headset' },
  ]}
/>
```

### 4-Column Layout
```tsx
<MiniCards
  title="All options"
  cards={cards}
  layout="4-col"
  backgroundColor="white"
/>
```

### Grey Background
```tsx
<MiniCards
  title="Resources"
  cards={cards}
  backgroundColor="grey"
/>
```

### With Custom HTML Attributes
```tsx
<MiniCards
  title="Services"
  cards={cards}
  data-component-id="mini-cards-1"
  id="services-section"
  className="custom-class"
/>
```

## Related Components

- **[Card](../Card/CARD.md)** — Base card component with more extensive props (this component uses Card with `variant="minicard"`)
- **[Icon](../Icon)** — Icon component used for card icons
- **[TopicListing](../TopicListing)** — Alternative grouping component for links/topics

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile latest

## Performance Notes

- Grid layout uses CSS Grid for optimal performance
- Loading spinner animation uses CSS keyframes (GPU-accelerated)
- API fetch is not cached; consider implementing caching at parent level for repeated requests
- Responsive breakpoints use standard Bootstrap media queries (576px, 768px, 1200px)
