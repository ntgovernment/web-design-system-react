# DisplayCards Component

A flexible grid-based component for displaying multiple cards in a customizable layout. It composes the Card component and supports various layout options, content visibility toggles, and background color schemes.

## Overview

The DisplayCards component creates a responsive card grid suitable for displaying collections of items such as services, applications, resources, or products. It supports:

- **Flexible column layouts** (2, 3, or 4 columns on desktop)
- **Content visibility controls** (show/hide descriptions and buttons)
- **Customizable styling** (white/grey backgrounds, theme-aware)
- **Optional section headers** (title and subtitle)
- **Responsive design** (adapts to tablet and mobile views)
- **Data source flexibility** (manual card props or automatic Squiz page fetch)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cards` | `CardProps[]` | *required* | Array of Card component props to display in the grid |
| `columns` | `2 \| 3 \| 4` | `3` | Number of columns for the grid layout on desktop |
| `backgroundColor` | `"white" \| "grey"` | `"white"` | Background color of the section |
| `showImage` | `boolean` | `false` | Whether to display card images |
| `showMetadata` | `boolean` | `false` | Whether to display card metadata (tags, dates) |
| `showDescription` | `boolean` | `true` | Whether to display card descriptions |
| `showButton` | `boolean` | `true` | Whether to display action buttons |
| `buttonText` | `string` | `"Read more"` | Custom text for the action button (overrides card's `actionText`) |
| `sectionTitle` | `string` | *optional* | Section heading displayed above the cards |
| `sectionSubtitle` | `string` | *optional* | Section subheading displayed below the title |
| `selectionMode` | `"manual" \| "parent"` | `"manual"` | Selects whether cards are provided manually or derived from a parent asset for DXP mapping |
| `parentAssetId` | `string` | *optional* | Parent asset URI used when `selectionMode` is `parent` |
| `selectedCardAssetIds` | `string[]` | *optional* | Optional list of selected card asset URIs for asset picker metadata |
| `className` | `string` | *empty* | Additional CSS class for custom styling |

## Basic Usage

### Manual Card Selection (Without Images - Default)

```tsx
import { DisplayCards } from "@ntgovernment/web-design-system";

export const MiningApplicationsPage = () => {
  const applications = [
    {
      variant: "full",
      title: "Preliminary exploration",
      description: "Getting access to land and notice to landowners, exploration on existing title areas, disputes over access.",
      actionText: "Read more",
      actionIcon: "fa-light fa-arrow-right",
    },
    {
      variant: "full",
      title: "Mineral titles",
      description: "Types of mineral title, summary of title types and conditions.",
      actionText: "Read more",
      actionIcon: "fa-light fa-arrow-right",
    },
    {
      variant: "full",
      title: "Access to land for exploration",
      description: "Processes for negotiating land access agreements.",
      actionText: "Read more",
      actionIcon: "fa-light fa-arrow-right",
    },
  ];

  return (
    <DisplayCards
      cards={applications}
      columns={3}
      backgroundColor="white"
      showImage={false}
      sectionTitle="Mining applications and processes"
    />
  );
};
```

### With Images Enabled

```tsx
<DisplayCards
  cards={cardsWithImages}
  columns={3}
  backgroundColor="white"
  showImage={true}
  sectionTitle="Featured Services"
/>
```
  showButton={true}
  buttonText="Get Started"
/>
```

## Responsive Behavior

- **Desktop (1025px+)**: Uses specified column count (2, 3, or 4 columns)
- **Tablet (768px - 1024px)**: 
  - 2-column layout remains as is
  - 3-column layout collapses to 2 columns
  - 4-column layout collapses to 2 columns
- **Mobile (<768px)**: All layouts collapse to 1 column (full width)

## Styling & Theming

The component uses CSS custom properties (design tokens) for theming:

- **Background colors** use `--clr-bg-default` (white) and `--clr-bg-subtle` (grey)
- **Focus states** use theme-specific colors:
  - NT theme: Orange (`--shadow-focus-ntg`)
  - Central theme: Green (`--shadow-focus-central`)
- **Typography** uses semantic token variables for headings and body text
- **Spacing** uses consistent gap values from the token system

### CSS Classes

- `.display-cards` — Main container
- `.display-cards--2col` / `.display-cards--3col` / `.display-cards--4col` — Column variants
- `.display-cards--bg-white` / `.display-cards--bg-grey` — Background variants
- `.display-cards__header` — Section header wrapper
- `.display-cards__title` — Section title
- `.display-cards__subtitle` — Section subtitle
- `.display-cards__grid` — Grid container for cards
- `.display-cards__card-wrapper` — Individual card wrapper (ensures equal height)

## Card Requirements

Each card passed to the `cards` prop should be a valid `CardProps` object. Typically:

```typescript
{
  variant: "full" | "minicard" | "compact";
  title: string;
  description?: string;
  imageURL?: string;
  showImage?: boolean;
  actionText?: string;
  actionIcon?: string;
  tagLabel?: string;
  dateLabel?: string;
  showButton?: boolean;
  // ... other Card props
}
```

## Accessibility

- Section titles use semantic `<h2>` heading
- Cards maintain focus visibility with theme-appropriate focus states
- Grid uses `display: grid` for proper navigation with assistive technologies
- Content visibility toggles allow flexible presentation for different use cases
- Responsive design ensures usability on all device sizes

## Parent asset selection for DXP conversion

The component exposes parent asset metadata for DXP conversion, while leaving card data fetching to the integration layer.

```tsx
<DisplayCards
  selectionMode="parent"
  parentAssetId="matrix-asset://api-identifier/12345"
  selectedCardAssetIds={[
    "matrix-asset://api-identifier/12345",
    "matrix-asset://api-identifier/12346",
  ]}
  cards={manualCards}
/>
```

This mode is intended to expose the selected parent asset and card asset IDs for the DXP layer, not to fetch content by itself.


## Squiz DXP Component Service

A DXP-compatible version of `DisplayCards` is available under `src/components/DisplayCards/dxp/`.
It renders the same markup on the Squiz Edge runtime and exposes the parent/manual asset selection metadata required for DXP conversion.


## Examples

See Storybook stories for interactive examples:
- Manual selection with multiple column layouts
- Background color variants
- Content visibility toggles
- Section headers
- Responsive behavior preview
