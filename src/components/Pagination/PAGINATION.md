# Pagination

## Overview

Pagination helps users navigate a large set of paged content (search results, listings, document pages). This document gives implementation details, token mappings, accessibility checks, runtime customization examples, Storybook guidance, and developer/agent notes so other engineers or automation agents can work with the component confidently.

---

## Quick links

- Component: `src/content/pagination/Pagination.tsx`
- Styles: `src/content/pagination/Pagination.css`
- Theme overrides: `src/content/pagination/Pagination-ntg.css`, `Pagination-central.css`
- Stories / docs: `src/content/pagination/Pagination.stories.tsx`, `Pagination.md`

---

## When to use

- Use for content separated into two or more pages (search results, content feeds).
- Avoid for single-page content, short lists that fit on one screen, or linear step-based flows.

## What this component provides

- Previous / Next controls (hidden at bounds)
- Page numbers with selectable pages
- Non-interactive ellipses when pages are skipped
- Clear visual highlight of the active page
- Keyboard focus, screen-reader semantics, and theme-aware styling

---

## Anatomy (HTML)

- nav[aria-label] — identifies the pagination landmark
- ul.pagination — bootstrap container (component-level CSS variables applied here)
- li.page-item — container for each item
- a.page-link — interactive link
- span.page-link — used for current page and ellipses

Example:

```html
<nav aria-label="Search results pages">
  <ul class="pagination">
    <li class="page-item disabled"><span class="page-link">Previous</span></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
```

---

## Accessibility (must-haves)

- Add `aria-label` to the `nav` to describe the pagination purpose (e.g. "Search results pages").
- Mark the active page with `aria-current="page"` and render it as a non-interactive `span`.
- Disabled items should be non-focusable (`tabindex="-1"`) and have `pointer-events: none` to prevent keyboard focus.
- Keyboard: page links must be reachable via Tab and activate with Enter/Space. Previous/Next should be operable with keyboard.
- Screen reader check: pagination should announce the number of links and indicate current page.

Automated checks to include in CI:

- Storybook a11y (axe) for color contrast and ARIA usage
- Playwright/Vitest tests for keyboard navigation and focus order

---

## Theming, tokens & Bootstrap variables

This component uses design tokens (theme-first) and maps them to Bootstrap pagination CSS variables on `.pagination` for runtime customization.

Token → Semantic variable → Bootstrap variable (used)

- Active background: `--clr-link-default` → `--bs-pagination-active-bg`
- Active foreground: `--clr-link-inverse` → `--bs-pagination-active-color`
- Default link color: `--clr-link-default` → `--bs-pagination-color`
- Hover color: `--clr-link-hover` → `--bs-pagination-hover-color`
- Disabled color: `--clr-text-muted` → `--bs-pagination-disabled-color`
- Spacing: `--sp-*` → `--bs-pagination-padding-x/y`
- Font-size: `--type-body-default-size` → `--bs-pagination-font-size`
- Border-radius (theme-specific): `--pagination-radius` → `--bs-pagination-border-radius` (set from `--ntg-radii-*` / `--central-radii-*` in theme overrides)
- Focus outline: `--clr-focus-focus` (used as component outline; component intentionally uses a plain outline rather than Bootstrap's focused background)

Where to change values:

- Theme-level changes: update `@ntgovernment/web-design-tokens` and bump `@ntgovernment/web-design-tokens` in `package.json`, then run `npm install && npm run build` (preferred).
- Component-level overrides: change `src/content/pagination/Pagination.css` or set CSS variables at runtime.

---

## Important implementation notes (why things are done this way)

- We prefer unprefixed semantic tokens in component CSS so components are theme-agnostic (use `--clr-*`, `--type-*`, `--sp-*`).
- Focus style: the component enforces a simple outline (using `--clr-focus-focus`) and explicitly prevents Bootstrap's focus background/border style from changing the element background or border-bottom.
- Active state uses token-driven colors to maintain contrast across themes.
- The component sets Bootstrap's `--bs-pagination-*` variables at the `.pagination` scope so consumers can override those variables at runtime (inline styles, utility classes).

---

## Runtime customization examples

Change active color for a single instance (React inline):

```tsx
<PaginationContent
  style={
    {
      "--bs-pagination-active-bg": "#8b5cf6",
      "--bs-pagination-active-color": "white",
    } as React.CSSProperties
  }
/>
```

Change via CSS class (global):

```css
.custom-pagination .pagination {
  --bs-pagination-active-bg: #8b5cf6;
  --bs-pagination-active-color: #fff;
}
```

Theme-level change (preferred):

1. Update `@ntgovernment/web-design-tokens` to the required version (change `clr-link-default` or radius tokens).
2. Run `npm run build`.

---

## Focus / Bootstrap override (developer reference)

Bootstrap's `_pagination.scss` exposes `--bs-pagination-focus-bg` and related variables. We intentionally override focused state so focus does not change background/border. Use these rules to enforce the design:

```css
/* ensure focused pagination links keep transparent background and no border-bottom */
.content-pagination .page-link:focus,
.content-pagination .page-link:focus-visible {
  background-color: transparent !important; /* override BS */
  border-bottom: none !important; /* override BS */
  outline: var(--border-width-xl) solid var(--clr-focus-focus);
  outline-offset: 2px;
}

/* keep the active page's background while still preventing other focused background changes */
.content-pagination .page-item.active .page-link:focus {
  background-color: var(--clr-link-default) !important;
  border-bottom: none !important;
}
```

Use `!important` intentionally here to override Bootstrap's component-focused styles.

---

## Storybook & testing

- Stories: `Default`, `FirstPage`, `LastPage`, `Themes` (use the Theme toolbar to compare NTG vs Central).
- Run Storybook locally: `npm run storybook`.
- Build static Storybook: `npm run build-storybook`.
- Recommended tests:
  - Vitest unit tests for pagination logic (page ranges, ellipses).
  - Playwright + Storybook for visual/interaction tests (keyboard focus, theme switch, active/disabled states).
  - Storybook a11y checks (already configured in preview).

---

## Developer / agent checklist (PR template)

- [ ] Real content in stories (no Lorem ipsum). See `CONTENT_STANDARDS.md`.
- [ ] Accessibility: `aria-label` present, `aria-current="page"` used for active page.
- [ ] Keyboard: Tab/Enter/Space operate pagination controls.
- [ ] Visual: Active page uses `--clr-link-default` with sufficient contrast.
- [ ] Theme: No hard-coded `--ntg-*` or `--central-*` tokens inside component CSS — use unprefixed `--clr-*` tokens.
- [ ] Unit tests for pagination range and ellipses logic.
- [ ] Storybook story added/updated and documented.

---

## Troubleshooting

- Focus ring missing? Verify `outline` is not overridden by a global `:focus` rule and that `--clr-focus-focus` token is defined for the active theme.
- Background changes on focus? Ensure `--bs-pagination-focus-bg` is not set elsewhere — component enforces `background-color: transparent !important;` on focus.
- Active color wrong for Central theme? Check that `--clr-link-default` is set correctly in `@ntgovernment/web-design-tokens/css/theme-central`.

---

## Example test cases (suggested)

- Unit tests:
  - current page in middle of range → pagination items include ellipses
  - current page is 1 → no Previous button
  - current page is last → no Next button
- Visual tests:
  - Active page background color is `--clr-link-default` in both themes
  - Focus outline is visible and does not change background
- Accessibility tests:
  - `aria-current="page"` present on active page
  - Disabled items are not focusable

---

If you want, I can add unit tests and Playwright visual checks for the Pagination stories next. â✅
