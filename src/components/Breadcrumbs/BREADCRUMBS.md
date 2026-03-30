# Breadcrumbs (developer guide)

A token-driven wrapper around Bootstrap's breadcrumb that provides:

- three variants (default, truncated, mobile),
- theme-aware styling, and
- accessible markup out of the box.
- **Enhanced truncated menu** – ellipsis has a larger hit-area and the menu closes when clicking outside.

---

## Quick usage

```tsx
import {
  BreadcrumbsContent,
  BreadcrumbItem,
} from "@ntgovernment/web-design-system"; // or relative path to component

const items: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Permits", href: "/services/permits" },
  { label: "Current page", isCurrent: true },
];

// default/full trail
<BreadcrumbsContent items={items} variant="default" />;

// truncated (first + menu + current)
<BreadcrumbsContent items={items} variant="truncated" />;

// mobile (home + parent)
<BreadcrumbsContent items={items} variant="mobile" />;
```

---

## API (TypeScript)

```ts
export interface BreadcrumbItem {
  label: string;
  href?: string; // if omitted the item is treated as non-link
  isCurrent?: boolean; // component will ensure exactly one current item
}

export interface BreadcrumbsContentProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[]; // default: generated demo trail
  variant?: "default" | "truncated" | "mobile"; // default: "default"
  ariaLabel?: string; // default: "Breadcrumb"
}
```

Default props and behavior

- If no `isCurrent` is provided the last item becomes the current item.
- `variant === "truncated"` renders: first item, a menu with middle items, then the current item.
- `variant === "mobile"` renders `Home` + parent item (so divider displays naturally).

---

## DOM & classes (what to test/assert)

- Root: `<nav aria-label="..." class="content-breadcrumbs" data-variant="...">`
- List: `<ol class="breadcrumb content-breadcrumbs__list">`
- Items: `<li class="breadcrumb-item">` with one `.active` item
- Links: `.content-breadcrumbs__link` — focusable, receives `box-shadow` token on focus
- Truncated menu: `<details class="content-breadcrumbs__menu">` with a `<summary class="content-breadcrumbs__menu-trigger">` and list `.content-breadcrumbs__menu-list`

Use these selectors in unit/visual tests and Storybook snapshots.

---

## Styling & tokens (what the component uses)

Primary tokens used (refer to `@ntgovernment/web-design-tokens`):

- Colors: `--clr-link-default`, `--clr-link-hover`, `--clr-text-default`, `--clr-icon-alt`, `--clr-text-emphasis`
- Divider (theme-controlled): `--breadcrumbs-divider-color` (set per theme)
- Typography: `--type-link-sm-*`, `--type-body-sm-*`
- Spacing: `--sp-xxs`, `--sp-xs`, `--sp-md`, `--sp-xxxl`
- Radius / focus: `--breadcrumbs-radius`, `--breadcrumbs-focus-shadow`

Important CSS variables exposed/used by the component

- `--bs-breadcrumb-divider` (contains the SVG data-URI used as the separator)
- `--breadcrumbs-divider-color` (theme override: controls divider fill)

How to override in your app

- To change the divider color in a theme file, override `--breadcrumbs-divider-color` in the theme-specific CSS (see `Breadcrumbs-ntg.css`/`Breadcrumbs-central.css`).
- To replace the separator glyph entirely, set `--bs-breadcrumb-divider: url('data:image/svg+xml;utf8,...')` scoped to `.content-breadcrumbs .breadcrumb`.

---

## Accessibility checklist (for reviewers)

- nav element has `aria-label` (prop `ariaLabel` available)
- the trailing/current item includes `aria-current="page"`
- menu trigger (`summary`) has an accessible label (we use `aria-label="Open breadcrumb menu"`)
- focus styles are visible and not removed by consumers
- keyboard: `summary` opens/closes with Enter/Space and menu links are tabbable

---

## Testing guidance (recommended)

Unit tests

- normalize behavior: assert last item becomes current when `isCurrent` missing
- truncated menu: verify `details` contains all middle items and opens on click
- truncated menu closes when clicking outside the menu
- ellipsis summary receives padding such that its hit area is larger than the icon
- mobile variant: renders `Home` + parent only
- accessibility: `aria-current` present on active item

Visual regression

- Capture stories for `Default`, `Truncated` (closed + open), `Mobile`, and theme variants

Storybook

- `Content / Breadcrumbs / Default`
- `Content / Breadcrumbs / Truncated`
- `Content / Breadcrumbs / Mobile`
- Use the Theme toolbar to validate `NTG` vs `Central` styles

---

## Implementation notes (for contributors and agents)

- normalizeItems(items) ensures exactly one `isCurrent` (prefers explicit `isCurrent`, otherwise last item)
- Render strategies:
  - default → render every item
  - truncated → render first, a `<details>` menu with middle items, then the resolved current
  - mobile → render `Home` and the _parent_ item (useful for small screens/back-navigation)
- Key classes and data attributes are stable and intended for testing (`content-breadcrumbs`, `data-variant`)

Edge cases

- If the list has a single item it will show as active and no separators appear
- If the first item is also the current item the truncated menu will not duplicate it

---

## Migration / changelog notes

- The divider glyph was changed from a text `>` to an SVG data-URI. If you previously relied on the textual divider, update any visual tests or expectations.

---

If you'd like, I can add unit tests and Storybook snapshots for each variant and theme next.
