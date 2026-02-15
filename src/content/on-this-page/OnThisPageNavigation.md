# On This Page Navigation

## Overview

The On This Page Navigation component provides a compact table of contents for long pages. It uses Bootstrap link utilities for underline control and design tokens for colors, spacing, focus outlines, and typography.

---

## Quick links

- Component: `src/content/on-this-page/OnThisPageNavigation.tsx`
- Styles: `src/content/on-this-page/OnThisPageNavigation.css`
- Theme overrides: `OnThisPageNavigation-ntg.css`, `OnThisPageNavigation-central.css`
- Stories: `src/content/on-this-page/OnThisPageNavigation.stories.tsx`

---

## When to use

- Use for long pages where users need quick access to major sections.
- Place near the start of the content column or in a right-hand sidebar.
- Avoid for short pages that fit on a single screen.

---

## Anatomy (HTML)

- nav[aria-label] — navigation landmark for the page sections
- heading element — label for the list (defaults to "On this page")
- ul — unordered list of section links
- li — list item container (with optional nested ul for children)
- a — link to a section anchor
- span.content-on-this-page\_\_chevron — optional icon indicator for child items

Example flat:

```html
<nav aria-label="On this page" class="content-on-this-page">
  <h2 class="content-on-this-page__heading">On this page</h2>
  <ul class="content-on-this-page__list">
    <li class="content-on-this-page__item" data-level="0">
      <div class="content-on-this-page__content">
        <a
          class="content-on-this-page__link link-underline link-underline-opacity-100 link-offset-2"
          href="#overview"
          >Overview</a
        >
      </div>
    </li>
  </ul>
</nav>
```

Example hierarchical (2 levels):

```html
<nav aria-label="On this page" class="content-on-this-page">
  <h2 class="content-on-this-page__heading">On this page</h2>
  <ul class="content-on-this-page__list">
    <li class="content-on-this-page__item" data-level="0">
      <div class="content-on-this-page__content">
        <a
          class="content-on-this-page__link link-underline link-underline-opacity-100 link-offset-2"
          href="#overview"
          >Overview</a
        >
      </div>
    </li>
    <li class="content-on-this-page__item" data-level="0">
      <div class="content-on-this-page__content">
        <a
          class="content-on-this-page__link link-underline link-underline-opacity-100 link-offset-2"
          href="#installation"
          >Installation</a
        >
      </div>
      <ul class="content-on-this-page__sublist">
        <li
          class="content-on-this-page__item"
          data-level="1"
          style="padding-left: 16px"
        >
          <div class="content-on-this-page__content">
            <span class="content-on-this-page__chevron" aria-hidden="true"
              >›</span
            >
            <a
              class="content-on-this-page__link link-underline link-underline-opacity-100 link-offset-2"
              href="#prerequisites"
              >Prerequisites</a
            >
          </div>
        </li>
      </ul>
    </li>
  </ul>
</nav>
```

---

## Accessibility (must-haves)

- `nav` must include a meaningful `aria-label` (defaults to the heading).
- Use `aria-current="location"` on the active section link when known.
- Links must be reachable by keyboard and display a visible focus outline.
- Section anchors should exist in the page content so links are valid.

---

## Component API (TypeScript)

```ts
export interface OnThisPageNavigationItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
  level?: number; // 0-based nesting level (0 = root, auto-calculated if omitted)
  children?: OnThisPageNavigationItem[]; // nested sub-items with automatic chevron rendering
}

export interface OnThisPageNavigationProps extends React.HTMLAttributes<HTMLElement> {
  heading?: string; // default: "On this page"
  items?: OnThisPageNavigationItem[]; // default: demo list
  ariaLabel?: string; // default: heading or "On this page"
}
```

### Item structure:

- **label** (required): Display text for the link or heading.
- **href** (optional): Target anchor URL. If omitted, renders as non-clickable text (e.g., category heading).
- **isCurrent** (optional): Boolean. When true, link gets `aria-current="location"` and `--clr-link-pressed` color (bold).
- **level** (optional): Integer. Manually override nesting depth for indentation. Auto-calculated from recursion if omitted.
- **children** (optional): Array of OnThisPageNavigationItem. Creates nested ul with automatic chevron icon rendering (chevron only for level > 0).

### Example:

```tsx
const items: OnThisPageNavigationItem[] = [
  {
    label: "Installation",
    href: "#installation",
    children: [
      { label: "Prerequisites", href: "#prerequisites" },
      {
        label: "Advanced setup",
        href: "#advanced",
        children: [{ label: "Configuration", href: "#config" }],
      },
    ],
  },
];
```

---

## Theming, tokens, and Bootstrap link utilities

This component scopes Bootstrap link utilities so underline styling and hover states inherit design tokens.

Token or semantic variable → Bootstrap variable (scoped)

- `--clr-link-default` → `--bs-link-color`
- `--clr-link-hover` → `--bs-link-hover-color`
- `--type-link-default-decoration` → `--bs-link-decoration`
- `--shadow-focus-ntg` / `--shadow-focus-central` → `--on-this-page-focus-shadow`
- `--ntg-radii-sm` / `--central-radii-sm` → `--on-this-page-radius`
- `--sp-md` / `--sp-xs` → layout spacing and list gaps

Bootstrap link utility classes used:

- `link-underline` and `link-underline-opacity-100` for underline color control
- `link-offset-2` for consistent underline offset

This keeps link appearance consistent with Bootstrap utilities while staying token-driven.

---

## Runtime customization examples

Change link color for a single instance:

```tsx
<OnThisPageNavigation
  style={
    {
      "--bs-link-color": "#0f4c81",
      "--bs-link-hover-color": "#0b3960",
    } as React.CSSProperties
  }
/>
```

Override focus outline globally:

```css
.content-on-this-page {
  --on-this-page-focus-shadow: 0 0 0 4px rgba(16, 124, 192, 0.35);
}
```

---

## Implementation notes

- Component CSS avoids theme-prefixed tokens; theme overrides are defined in `OnThisPageNavigation-ntg.css` and `OnThisPageNavigation-central.css`.
- Focus styles intentionally override the global link focus treatment from typography overrides to preserve the design system focus ring.
- Active links use `aria-current="location"` for screen reader clarity and a token-based emphasis color.

---

## Storybook and testing

Stories:

- Default — flat and two-level hierarchy
- ActiveSection — demonstrates aria-current with nested items
- LongLabels — text wrapping with nested structures
- DeeplyNested — three-level hierarchy showing chevron rendering at each level
- Themes (use the Theme toolbar) — switch between NTG and Central themes

Recommended checks:

- Keyboard focus and visible focus ring at all nesting levels
- Link underline and hover styles
- Chevron icon visibility for nested items (level > 0)
- Proper indentation at each level (16px per level)
- Theme switch consistency (NTG vs Central)
- Contrast for active link styling

---

## Developer checklist

- [ ] No placeholder text (see CONTENT_STANDARDS.md).
- [ ] `aria-label` present on `nav`.
- [ ] Active link uses `aria-current="location"` when applicable.
- [ ] Focus ring uses theme tokens and remains visible.
- [ ] All links reference real section ids.

---

## Machine-readable schema (for code generators)

Use this JSON Schema when producing `items` programmatically. Keep labels meaningful and avoid placeholder text.

```json
{
  "$id": "https://nt.gov.au/schemas/on-this-page-navigation.json",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["label"],
    "properties": {
      "label": { "type": "string", "minLength": 1 },
      "href": { "type": "string", "pattern": "^#.*" },
      "isCurrent": { "type": "boolean" },
      "level": { "type": "integer", "minimum": 0 },
      "children": { "$ref": "#/$defs/itemList" }
    }
  },
  "$defs": {
    "itemList": {
      "type": "array",
      "items": { "$ref": "#/$defItem" }
    },
    "$defItem": { "$ref": "#/items" }
  }
}
```

> Tip for agents: produce `href` values that reference existing section ids; prefer 2–3 nesting levels and avoid Lorem ipsum.

---

## Testing examples

Vitest + Testing Library (basic):

```ts
import { render, screen } from '@testing-library/react';
import { OnThisPageNavigation } from './OnThisPageNavigation';

test('renders nested items and marks current section', () => {
  render(<OnThisPageNavigation items={[{ label: 'A', href: '#a' }, { label: 'B', href: '#b', isCurrent: true }]} />);
  expect(screen.getByText('A')).toBeInTheDocument();
  expect(screen.getByText('B')).toHaveAttribute('aria-current', 'location');
});
```

axe-core accessibility check (example):

```ts
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';

test('a11y: OnThisPageNavigation has no violations', async () => {
  const { container } = render(<OnThisPageNavigation items={[{ label: 'Overview', href: '#overview' }]} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Code-generation guidance for bots & engineers

- Use the JSON Schema above when generating `items`.
- Labels must be real, descriptive section titles (no placeholders).
- Include `isCurrent: true` only for the visible/active section.
- Prefer a maximum of 3 nesting levels for readability and accessibility.
- When in doubt, add a plain `href` string starting with `#` — the component renders non-link text if `href` is omitted.

---

## Source-of-truth & duplicate removal

- This file (`OnThisPageNavigation.md`) is the canonical documentation for the component. Short descriptions in stories were removed so the MD is the single source of truth.

---

If you want, I can add unit tests and automated a11y checks for the stories next.
