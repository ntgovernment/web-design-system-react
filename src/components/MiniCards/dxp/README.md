# MiniCards DXP Component

## Overview

The **MiniCards** component is a responsive grid display for mini cards (icon + title + link). It renders on the Squiz Edge runtime as server-side HTML, providing a fast, accessible way to showcase grouped content.

## Status

- **Version**: 0.1.0
- **Type**: Edge Component (Server-Side Rendering)
- **Deployment**: Preview

## Input Schema

### `title` (string, optional)

Optional section heading displayed above the card grid.

- Default: empty
- Example: `"Find out more"`

### `cards` (array, required)

Array of card objects. Each card must have:

- `id` (string): Unique identifier
- `title` (string): Card display title
- `href` (string): Card link URL
- `icon` (string): FontAwesome icon class (e.g., `"fa-light fa-briefcase"`)

**Example:**

```json
[
  {
    "id": "1",
    "title": "Grant applicants",
    "href": "/grants",
    "icon": "fa-light fa-briefcase"
  },
  {
    "id": "2",
    "title": "Service providers",
    "href": "/services",
    "icon": "fa-light fa-globe"
  }
]
```

### `layout` (string, optional)

Desktop layout: number of cards per row.

- Values: `"3-col"` | `"4-col"`
- Default: `"3-col"`
- Mobile: Always 1 column
- Tablet (576px+): Always 2 columns
- Desktop (768px+): 3 or 4 columns based on this setting

### `backgroundColor` (string, optional)

Background color variant for the component container.

- Values: `"white"` | `"grey"`
- Default: `"white"`

## Output

Server-side rendered HTML:

```html
<div class="mini-cards mini-cards--layout-3-col mini-cards--bg-white">
  <h2 class="mini-cards__title">Find out more</h2>
  <div class="mini-cards__grid">
    <div class="mini-cards__item">
      <a href="..." class="card card--minicard">
        <div class="card-body">
          <div class="card__body-title-wrapper">
            <div class="card__minicard-icon">
              <i class="fa-light fa-briefcase"></i>
            </div>
            <h3 class="card-title">Grant applicants</h3>
          </div>
        </div>
      </a>
    </div>
    <!-- more cards... -->
  </div>
</div>
```

## Styling

The component uses CSS classes that match the React component:

- `.mini-cards` — Container
- `.mini-cards--layout-3-col` / `.mini-cards--layout-4-col` — Layout variant
- `.mini-cards--bg-white` / `.mini-cards--bg-grey` — Background variant
- `.mini-cards__title` — Section heading
- `.mini-cards__grid` — Card grid container
- `.mini-cards__item` — Individual card wrapper
- `.card.card--minicard` — Mini card (reuses Card component styles)

All styling is loaded via the site-wide theme CSS (e.g., `theme-ntg.min.css`).

## Responsive Behavior

| Breakpoint      | Width         | Layout    |
| --------------- | ------------- | --------- |
| Mobile          | < 576px       | 1 column  |
| Tablet          | 576px - 768px | 2 columns |
| Desktop (3-col) | ≥ 768px       | 3 columns |
| Desktop (4-col) | ≥ 768px       | 4 columns |

## Previews

The component includes 4 preview configurations:

- **3-Column Layout (White)** — 3 cards per row with white background
- **3-Column Layout (Grey)** — 3 cards per row with grey background
- **4-Column Layout (White)** — 4 cards per row with white background
- **4-Column Layout (Grey)** — 4 cards per row with grey background

## Features

### Pure HTML Output

- No JavaScript interactivity required
- All cards are clickable links
- Theme CSS handles all styling

### Accessibility

- Semantic HTML with proper heading hierarchy
- Icon elements have `aria-hidden="true"`
- Cards are focusable links with keyboard navigation
- Theme-specific focus outlines (orange for NTG, green for Central)

### Performance

- Server-side rendering on Edge runtime
- No client-side hydration overhead
- Theme CSS loaded site-wide (cached by browser)
- Compact HTML output

### Validation

- Required `cards` array with valid structure
- Layout/background values validated against enum
- Empty state displays "No cards to display" message

## Development

### Prepare DXP Component

```bash
npm run cmp-minicards-prepare
```

This copies the component to `dist/components/minicards/` and inlines theme CSS into preview files.

### Local Preview

```bash
npm run cmp-minicards-dev
```

Opens the Squiz DXP dev-ui for local testing and preview.

### Deploy

```bash
# Validate before deploying
npm run cmp-minicards-deploy:dry-run

# Deploy to live Squiz DXP
npm run cmp-minicards-deploy
```

## Architecture

- **manifest.json** — Component configuration + JSON Schema for DXP CMS
- **main.js** — Server-side renderer (async main function)
- **example.data.json** — Sample input configurations
- **previews/** — Preview harnesses and variant data
- **README.md** — This file

The component follows the same architecture as the Header DXP component for consistency.

## Related Components

- **MiniCards React** — [src/components/MiniCards/MiniCards.tsx](../../MiniCards.tsx) — Client-side React component
- **Card Component** — [src/components/Card/Card.tsx](../../Card/Card.tsx) — Base card component with minicard variant
- **Header DXP** — [src/components/Header/dxp/](../../Header/dxp/) — Reference implementation for DXP component architecture
