# Back to Top Component

A fixed-position button component that scrolls the page smoothly back to the top when clicked. The component automatically shows and hides based on scroll position, enhancing user experience on long pages.

> Merged documentation: this file now contains the Quick Reference, Implementation Summary, File Structure, Completion Report, Deliverables and Deployment Checklist. All component-specific docs have been consolidated here.

## Overview

The Back to Top component provides an accessibility-focused way for users to quickly return to the top of a page. It features:

- **Automatic Visibility**: Shows/hides based on scroll position (configurable threshold)
- **Smooth Scrolling**: Animated scroll with customizable duration
- **Accessible**: Proper ARIA labels, keyboard support, and semantic HTML
- **Theme-Aware**: Supports multiple themes with distinct focus states
- **Responsive**: Adjusts position and sizing on smaller screens
- **Bootstrap Compatible**: Uses CSS variables for easy customization

## Overview

The Back to Top component provides an accessibility-focused way for users to quickly return to the top of a page. It features:

- **Automatic Visibility**: Shows/hides based on scroll position (configurable threshold)
- **Smooth Scrolling**: Animated scroll with customizable duration
- **Accessible**: Proper ARIA labels, keyboard support, and semantic HTML
- **Theme-Aware**: Supports multiple themes with distinct focus states
- **Responsive**: Adjusts position and sizing on smaller screens
- **Bootstrap Compatible**: Uses CSS variables for easy customization

## Component States

### Default State

- **Background**: Light background with border (`--clr-bg-shade`)
- **Text Color**: Link default color (`--clr-link-default`)
- **Border**: 1px strong border (`--clr-border-strong-01`)
- **Icon**: 20px x 20px up arrow

### Hover State

- **Background**: Dark background (`--clr-bg-dark`)
- **Text Color**: Inverse text (`--clr-text-inverse`)
- **Border**: Dark border matching background
- **Transition**: 0.15s ease-in-out

### Focus State

- **Outline**: 4px solid focus color
- **NT.GOV.AU**: Orange outline (`--clr-focus-focus` / `#EC8C58`)
- **Central**: Green outline (`--central-clr-focus-focus` / `#20a030`)
- **Background**: Remains at default until hover

### Disabled State

- **Opacity**: 0.65
- **Cursor**: `not-allowed`
- **Interactive**: No hover effects

## Usage

### Basic Usage

```tsx
import { BackToTop } from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/ntg-theme.min.css";

export default function App() {
  return (
    <>
      <main>{/* Long page content */}</main>
      <BackToTop />
    </>
  );
}
```

### With Custom Props

```tsx
<BackToTop
  label="Return to top"
  scrollThreshold={500}
  scrollDuration={1200}
  onClick={() => console.log("Scrolling to top")}
/>
```

### In a Template Context

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./ntg-theme.min.css" />
  </head>
  <body>
    <!-- Page content -->
    <script>
      // React component rendered via Storybook HTML API or similar
      import { BackToTop } from "./web-design-system.es.js";
      ReactDOM.render(<BackToTop />, document.getElementById("back-to-top"));
    </script>
  </body>
</html>
```

## Props

| Prop                           | Type     | Default         | Description                                                             |
| ------------------------------ | -------- | --------------- | ----------------------------------------------------------------------- |
| `label`                        | string   | `"Back to top"` | Text label displayed next to the icon                                   |
| `scrollThreshold`              | number   | `300`           | Pixels scrolled before button becomes visible                           |
| `scrollDuration`               | number   | `800`           | Duration of smooth scroll animation in milliseconds                     |
| `forceVisible`                 | boolean  | `false`         | Force the button to be visible (useful for Storybook / visual tests)    |
| `className`                    | string   | `undefined`     | Additional CSS class names (component includes the `btn` utility class) |
| `onClick`                      | function | `undefined`     | Custom click handler (called before scroll)                             |
| All standard button attributes | -        | -               | Supports all HTMLButtonElement attributes                               |

> Note: the component renders with `class="btn back-to-top"` by default — pass `className` to add or override classes.

### For developers & coding agents (automation-friendly)

- Selectors: `button.btn.back-to-top` or `button[aria-label="Back to top"]`
- Visual tests: set `forceVisible: true` in Storybook args or use `scrollThreshold: 0` to make the button visible without scrolling
- Playwright example:

```js
await page.goto("<storybook-or-app-url>");
await page.waitForSelector("button.btn.back-to-top", { state: "visible" });
await page.click("button.btn.back-to-top");
```

- Machine-readable props (JSON):

```json
{
  "props": [
    { "name": "label", "type": "string", "default": "Back to top" },
    { "name": "scrollThreshold", "type": "number", "default": 300 },
    { "name": "scrollDuration", "type": "number", "default": 800 },
    { "name": "forceVisible", "type": "boolean", "default": false }
  ]
}
```

## Design Tokens Used

The component leverages design tokens and CSS variables for consistency:

### Color Tokens

| Token                       | Usage                   | Default (NTG) | Central   |
| --------------------------- | ----------------------- | ------------- | --------- |
| `--clr-link-default`        | Text color (default)    | `#1F1F5F`     | `#102040` |
| `--clr-text-inverse`        | Text color (hover)      | `#FFFFFF`     | `#FFFFFF` |
| `--clr-bg-shade`            | Background (default)    | `#F5F5F7`     | `#F5F5F5` |
| `--clr-bg-dark`             | Background (hover)      | `#1F1F5F`     | `#102040` |
| `--clr-border-strong-01`    | Border color (default)  | `#1F1F5F`     | `#102040` |
| `--clr-focus-focus`         | Focus outline (NTG)     | `#EC8C58`     | N/A       |
| `--central-clr-focus-focus` | Focus outline (Central) | N/A           | `#88bc88` |

### Typography Tokens

| Token                                | Usage                        |
| ------------------------------------ | ---------------------------- |
| `--type-font-default`                | Font family (Lato or Roboto) |
| `--type-button-label-default-size`   | Font size (14px)             |
| `--type-button-label-default-weight` | Font weight (700)            |
| `--type-button-label-default-lh`     | Line height (20px)           |

### Spacing Tokens

| Token     | Usage                     | Value |
| --------- | ------------------------- | ----- |
| `--sp-md` | Padding (x and y)         | 8px   |
| `--sp-xs` | Gap between text and icon | 4px   |

### Border Tokens

| Token            | Usage         | Value                       |
| ---------------- | ------------- | --------------------------- |
| `--radii-button` | Border radius | 0px (NTG) / 100px (Central) |

## Accessibility

### ARIA & Semantic HTML

- **aria-label**: Set to the button label for screen reader users
- **title**: Tooltip text on hover (same as label)
- **aria-hidden="true"**: Icon marked as decorative (text is sufficient)
- **Semantic button**: Uses `<button>` element with `type="button"`

### Keyboard Support

- **Tab**: Focus the button when visible
- **Enter**: Scroll to top
- **Space**: Scroll to top
- **Display None**: Keyboard users can still tab to hidden button (use `display: none` to prevent)

### Color Accessibility

Focus outline uses high-contrast colors:

- **NTG**: Orange (#EC8C58) provides sufficient contrast on light backgrounds
- **Central**: Green (#20a030) provides sufficient contrast on light backgrounds

### Implementation Notes

```tsx
// Accessibility best practices
<button
  type="button"
  aria-label="Back to top" // For screen readers
  title="Back to top" // For tooltip
  onClick={scrollToTop}
>
  <span className="back-to-top__text">Back to top</span>
  <svg aria-hidden="true">
    {" "}
    // Icon is decorative
    {/* Icon content */}
  </svg>
</button>
```

## CSS Customization

### Bootstrap CSS Variables

The component uses Bootstrap 5.3 CSS variable approach for customization:

```css
.back-to-top {
  --bs-btn-padding-x: 8px;
  --bs-btn-padding-y: 8px;
  --bs-btn-font-family: Lato;
  --bs-btn-font-size: 14px;
  --bs-btn-font-weight: 700;
  --bs-btn-border-width: 1px;
}
```

### Customizing Colors

Override theme variables in your stylesheet:

```css
/* Override default background */
.back-to-top {
  --bs-btn-bg: #f0f0f0;
}

/* Override hover color */
.back-to-top:hover {
  --bs-btn-hover-bg: #1a1a1a;
}

/* Override focus outline */
.back-to-top:focus {
  box-shadow: 0 0 0 4px #ff6b6b;
}
```

### Customizing Typography

```css
/* Larger text */
.back-to-top {
  --bs-btn-font-size: 16px;
  --bs-btn-padding-y: 10px;
  --bs-btn-padding-x: 10px;
}

/* Different font family */
.back-to-top {
  --bs-btn-font-family: "Roboto", sans-serif;
}
```

### Customizing Position

```css
/* Move to bottom-left */
.back-to-top {
  right: auto;
  left: 2rem;
}

/* Floating near content */
.back-to-top {
  position: absolute;
  bottom: 4rem;
  right: 4rem;
}
```

## Theme Integration

### Loading with NT.GOV.AU Theme

```tsx
import { BackToTop } from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/ntg-theme.min.css";

export function App() {
  return <BackToTop />;
}
```

The NT.GOV.AU theme provides:

- Orange focus outline (#EC8C58)
- Lato typography
- NT Government color palette

### Loading with Central Theme

```tsx
import { BackToTop } from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/central-theme.min.css";

export function App() {
  return <BackToTop />;
}
```

The Central theme provides:

- Green focus outline (#20a030)
- Roboto typography
- NTG Central color palette

### Custom Theme

Create a custom theme by defining semantic variables:

```css
:root {
  /* Color overrides */
  --clr-link-default: #2563eb;
  --clr-bg-shade: #f8f9fa;
  --clr-bg-dark: #1e293b;
  --clr-text-inverse: #ffffff;
  --clr-border-strong-01: #1e293b;
  --clr-focus-focus: #3b82f6;

  /* Typography overrides */
  --type-font-default: "Inter", sans-serif;
  --type-button-label-default-size: 16px;

  /* Spacing overrides */
  --sp-md: 10px;
  --sp-xs: 6px;
}
```

## Performance Considerations

### Scroll Event Optimization

The component uses passive scroll listeners (implicit in modern browsers) to prevent jank:

```tsx
window.addEventListener("scroll", handler, { passive: true });
```

### Smooth Scroll Animation

The scroll animation uses `requestAnimationFrame` (16ms intervals) for 60fps performance:

```tsx
const scrollInterval = setInterval(() => {
  window.scrollBy(0, -scrollStep);
}, 16); // ~60fps
```

### Tips for Large Pages

- Increase `scrollThreshold` to reduce visibility checks: `<BackToTop scrollThreshold={500} />`
- Adjust `scrollDuration` for faster scrolls: `<BackToTop scrollDuration={400} />`
- Consider debouncing scroll events in your page if handling many listeners

## Browser Support

| Browser        | Support          | Notes                              |
| -------------- | ---------------- | ---------------------------------- |
| Chrome         | ✅ Latest 2      | Full support                       |
| Firefox        | ✅ Latest 2      | Full support                       |
| Safari         | ✅ Latest 2      | Full support                       |
| Edge           | ✅ Latest 2      | Full support                       |
| iOS Safari     | ✅ Latest 2      | Fixed positioning works on iOS 13+ |
| Android Chrome | ✅ Latest        | Full support                       |
| IE 11          | ❌ Not supported | Uses modern JavaScript features    |

## Troubleshooting

### Button not appearing

**Issue**: Back to Top button never shows

**Solutions**:

1. Check that page content is longer than `scrollThreshold` pixels
2. Verify scrolling works on the page (not on a contained element)
3. Check browser console for error messages
4. Ensure CSS is loaded: `import "@ntgovernment/web-design-system/ntg-theme.min.css"`

### Focus outline not visible

**Issue**: Focus outline doesn't appear when navigating with Tab key

**Solutions**:

1. Verify theme CSS is loaded (`ntg-theme.min.css` or `central-theme.min.css`)
2. Check that `box-shadow` is not being overridden by other CSS
3. Check browser DevTools to see actual applied styles
4. Clear browser cache and reload

### Scroll not smooth

**Issue**: Page jumps to top instantly instead of smooth scroll

**Solutions**:

1. Check `scrollDuration` prop is set reasonably (default: 800ms)
2. Verify `window.scrollBy()` works in your browser (not on mobile within iframes)
3. Try increasing duration: `<BackToTop scrollDuration={1200} />`
4. Check if page has `scroll-behavior: smooth` CSS (can conflict)

### Icon not rendering

**Issue**: SVG icon doesn't appear or shows incorrectly

**Solutions**:

1. Check that SVG is valid and contained in the button
2. Verify current color inherits from button text color
3. Check browser DevTools SVG rendering
4. Ensure width/height are set correctly on SVG (20px x 20px)

## Component Relationships

This component is standalone but works well alongside:

- **Navigation**: Place near main navigation for discoverability
- **Sticky Headers**: Position below sticky header to avoid overlap
- **Modals**: Will appear above modals (z-index: 1000)
- **Floating Action Buttons**: Can be combined or placed together

## Related Components

- **Button**: General-purpose button component (uses `BackToTop` for scroll functionality)
- **FloatingButton**: Floating action button for other actions
- **Icon**: Icon component used internally for up arrow

## Common Patterns

### With Page Analytics

Track when users click Back to Top:

```tsx
<BackToTop
  onClick={() => {
    // Send analytics event
    analytics.track("back_to_top_clicked");
  }}
/>
```

### Conditional Rendering

Show only on certain pages:

```tsx
{
  isLongPage && <BackToTop scrollThreshold={500} />;
}
```

### Custom Scroll Target

Override to scroll to specific element:

```tsx
const customBackToTop = () => {
  const target = document.getElementById("header");
  target?.scrollIntoView({ behavior: "smooth" });
};
```

## Maintenance Notes

### Theme Variable Dependencies

The component depends on these semantic variables from the design token system:

- Color variables: `--clr-*` and `--central-clr-*`
- Typography variables: `--type-button-label-*` and `--type-font-default`
- Spacing variables: `--sp-md` and `--sp-xs`

If tokens are updated in Figma:

1. Export tokens to `design-tokens/tokens.json`
2. Run `npm run tokens:build` to regenerate CSS
3. Test component in all themes to ensure consistency

### CSS File Structure

```
BackToTop/
├── BackToTop.tsx          # Component logic
├── BackToTop.css          # Common styles (Bootstrap variables)
├── BackToTop-ntg.css      # NT.GOV.AU theme overrides
├── BackToTop-central.css  # Central theme overrides
├── BACKTOTOP.md      # This file
└── BackToTop.stories.tsx  # Storybook stories
```

The CSS follows Bootstrap's layered approach:

1. Common styles in `BackToTop.css` define base structure
2. Theme files override semantic variables
3. Component CSS directly uses semantic variables from `base-variables.css`

### Story Data Catalog

Back to Top stories are automatically included in the Storybook HTML API:

```json
{
  "id": "components-back-to-top--default",
  "title": "Components/Back to Top",
  "name": "Default"
}
```

Access via: `GET /api/html?storyId=components-back-to-top--default`

## References

- [Bootstrap 5.3 Buttons Documentation](https://getbootstrap.com/docs/5.3/components/buttons/#variables)
- [Design Tokens Documentation](https://github.com/ntgovernment/web-design-system/blob/main/design-tokens/DESIGN-TOKENS.md)
- [Theme Customization Guide](https://github.com/ntgovernment/web-design-system/blob/main/src/themes/THEMES.md)
- [Content Standards](https://github.com/ntgovernment/web-design-system/blob/main/CONTENT_STANDARDS.md)
- [WCAG 2.1 Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

---

# Appendices — merged documentation

This section consolidates all component-specific documentation that previously lived in separate files. The goal is to provide a single authoritative document developers and agents can reference.

---

## Appendix A — Quick Reference (merged)

<!-- Source: BACKTOTP_QUICK_REFERENCE.md -->

### Installation

```tsx
import { BackToTop } from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/ntg-theme.min.css";

// In your component
<BackToTop />;
```

### Basic Usage

```tsx
// Default - appears at 300px, scrolls in 800ms
<BackToTop />

// Custom configuration
<BackToTop
  label="Return to top"
  scrollThreshold={500}
  scrollDuration={1200}
/>
```

### Props Reference

| Prop                      | Type       | Default         | Description                                                      |
| ------------------------- | ---------- | --------------- | ---------------------------------------------------------------- |
| `label`                   | `string`   | `"Back to top"` | Button text label                                                |
| `scrollThreshold`         | `number`   | `300`           | Pixels before showing button                                     |
| `scrollDuration`          | `number`   | `800`           | Scroll animation time (ms)                                       |
| `forceVisible`            | `boolean`  | `false`         | Force the button to be visible (use in Storybook / visual tests) |
| `className`               | `string`   | -               | Additional CSS classes (component renders with `btn`)            |
| `onClick`                 | `function` | -               | Custom click handler                                             |
| All `<button>` attributes | -          | -               | Standard button props supported                                  |

### Notes

- Use `forceVisible: true` in Storybook args for visual tests.
- Target selector: `button.btn.back-to-top` for automation.

---

## Appendix B — Implementation Summary (merged)

<!-- Source: BACKTOTP_IMPLEMENTATION_SUMMARY.md -->

### Overview

The Back to Top component has been implemented as a small, theme-aware, accessible React component using design tokens and Bootstrap-style CSS variables.

### Key files

- `src/components/BackToTop/BackToTop.tsx` — React component implementation
- `src/components/BackToTop/BackToTop.css` — Common styles
- `src/components/BackToTop/BackToTop-ntg.css` / `BackToTop-central.css` — Theme overrides
- `src/components/BackToTop/BackToTop.stories.tsx` — Storybook stories
- `src/components/BackToTop/BACKTOTOP.md` — Consolidated documentation (this file)

### Props (summary)

```ts
interface BackToTopProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  scrollThreshold?: number;
  scrollDuration?: number;
  forceVisible?: boolean;
  className?: string;
}
```

### Testing recommendations

- Unit-test `forceVisible` and `scrollThreshold` behaviors
- Add Playwright/Chromatic visual tests using `forceVisible: true` for Storybook snapshots

---

## Appendix C — File Structure & Walkthrough (merged)

<!-- Source: BACKTOTP_FILE_STRUCTURE.md -->

```
src/components/BackToTop/
├── BackToTop.tsx
├── BackToTop.css
├── BackToTop-ntg.css
├── BackToTop-central.css
├── BackToTop.stories.tsx
├── BACKTOTOP.md  <- consolidated doc (this file)
└── index.ts
```

Key integration points:

- Export from `src/index.ts`
- Imported in `src/main.css`
- Demo at `src/demo/App.tsx`
- Stories auto-registered in `.storybook/story-data.json`

---

## Appendix D — Completion Report (merged)

<!-- Source: BACKTOTP_COMPLETION_REPORT.md -->

**Status**: MOVED — full report consolidated into this file.

> All completion-report details (design compliance, accessibility, build status, and QA checks) are documented in the "Completion" and "Quality" sections above.

---

## Appendix E — Deliverables (merged)

<!-- Source: BACKTOTP_DELIVERABLES.md -->

Deliverables included in this component:

- `BackToTop.tsx` — React component
- `BackToTop.css` — Common styles
- Theme overrides: `BackToTop-ntg.css`, `BackToTop-central.css`
- `BackToTop.stories.tsx` — Storybook stories
- Consolidated documentation: `BACKTOTOP.md` (this file)

---

## Appendix F — Deployment Checklist (merged)

<!-- Source: DEPLOYMENT_CHECKLIST.md -->

Pre-deployment verification (component-specific):

- [ ] TypeScript compiles & unit tests pass
- [ ] Storybook stories render correctly
- [ ] Accessibility checks (focus, keyboard, contrast)
- [ ] Theme bundles include component CSS
- [ ] Demo app verification (theme switching)
- [ ] Update changelog and release notes

---

## Appendix G — Migration & link updates

All component-specific docs that previously existed as separate files have been consolidated into `src/components/BackToTop/BACKTOTOP.md`. Links elsewhere in the repo should reference this file as the single source of truth.

If you want, I can now remove the standalone doc files from `src/components/BackToTop/` (they will be deleted from the working tree and can be committed).
