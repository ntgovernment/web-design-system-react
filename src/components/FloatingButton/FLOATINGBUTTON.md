# FloatingButton Component

A button banner anchored to the bottom of the screen that keeps important calls to action front and centre for the user.

## Overview

The floating button component is an anchored banner at the bottom of the viewport or screen that 'floats' above the rest of the page as the user scrolls. When the user scrolls to a target button within the content, the floating button component disappears, then reappears if they scroll back up. Therefore, the call to action (CTA) is always visible, no matter where the user is on the page.

It allows high information users to immediately go to the CTA without having to look for it, while the CTA is always accessible for lower information users who want to read more detail before progressing.

## Features

- Fixed positioning at bottom of viewport
- Automatic show/hide based on scroll position
- IntersectionObserver API for smooth visibility detection
- Primary and secondary button variants
- Icon support with left/right positioning
- Responsive design (mobile-friendly)
- Theme-specific styling (NTG and Central themes)
- Full accessibility support
- TypeScript support

## Usage

### Basic Floating Button

The floating button is best used for applications, like for licences, grants or permits.

```tsx
import { FloatingButton } from "@ntgovernment/web-design-system";

<FloatingButton
  label="Start Application"
  variant="primary"
  iconRight="fa-light fa-arrow-right"
/>;
```

### With Auto-Hide Behavior

Use together with a standard button within the content. When the user scrolls to the target button, the floating button automatically hides.

```tsx
// In your page content
<Button
  id="main-apply-button"
  variant="primary"
  label="Start Application"
/>

// Floating button at bottom of screen
<FloatingButton
  label="Start Application"
  variant="primary"
  iconRight="fa-light fa-arrow-right"
  targetButtonId="main-apply-button"
/>
```

### With Icon

```tsx
// Icon on the right (recommended for forward actions)
<FloatingButton
  label="Continue to Application"
  iconRight="fa-light fa-arrow-right"
/>

// Icon on the left
<FloatingButton
  label="Download Form"
  iconLeft="fa-light fa-download"
/>
```

### With Click Handler

```tsx
const handleApply = () => {
  window.location.href = "/apply";
};

<FloatingButton
  label="Apply Now"
  onClick={handleApply}
  iconRight="fa-light fa-arrow-right"
/>;
```

### Secondary Variant

While primary buttons are recommended for floating buttons, you can use secondary variant if needed:

```tsx
<FloatingButton label="Learn More" variant="secondary" />
```

### Without Auto-Hide

Disable auto-hide if you want the button to always be visible:

```tsx
<FloatingButton label="Need Help?" autoHide={false} />
```

## Props

### FloatingButtonProps

| Prop             | Type                                                   | Default     | Description                                                                |
| ---------------- | ------------------------------------------------------ | ----------- | -------------------------------------------------------------------------- |
| `label`          | `string`                                               | Required    | Button text label                                                          |
| `iconLeft`       | `string`                                               | `undefined` | FontAwesome icon class for left side (e.g., 'fa-light fa-download')        |
| `iconRight`      | `string`                                               | `undefined` | FontAwesome icon class for right side (e.g., 'fa-light fa-arrow-right')    |
| `variant`        | `'primary' \| 'secondary'`                             | `'primary'` | Button style variant                                                       |
| `onClick`        | `(event: React.MouseEvent<HTMLButtonElement>) => void` | `undefined` | Click handler function                                                     |
| `targetButtonId` | `string`                                               | `undefined` | ID or selector of the target button in page content for auto-hide behavior |
| `autoHide`       | `boolean`                                              | `true`      | Whether to enable auto-hide/show behavior based on scroll                  |
| `className`      | `string`                                               | `undefined` | Additional CSS classes for the container                                   |
| `type`           | `'button' \| 'submit' \| 'reset'`                      | `'button'`  | HTML button type attribute                                                 |
| `disabled`       | `boolean`                                              | `false`     | Whether the button is disabled                                             |
| `ariaLabel`      | `string`                                               | `undefined` | ARIA label for accessibility (defaults to label prop if not provided)      |

## How to Use

### ✅ Do

- **Use for when there is only one main call to action on the page.** The primary reason the user is on that page should be to complete or progress via that call to action.
- **Use together with a standard button within the content**, which should be as near to the bottom of the page as possible.
- **Only use if the CTA on the page is a primary button.** Do not use it for secondary or tertiary buttons, or text links.
- **Use for content pages with a single clear action.** The floating button is best used for applications, like for licences, grants or permits.
- **Floating button can be used for both online and offline CTAs** (e.g., separate online application system or downloadable Word document application form).
- **Always provide the same label and action** for both the floating button and the target button in content.

### ❌ Don't

- **Don't use if there are multiple primary calls to action on a page.**
- **Do not use on home or landing pages.** For content pages only.
- **Don't use for a content page that has diverse information** where there isn't one singular call to action or purpose for the page.
- **Never use for a link that is ordinarily an inline text link.** Only primary or secondary buttons can be used in a floating button component.
- **Don't use without a corresponding button in the page content.** There should always be a target button that users can find by scrolling.

## Auto-Hide Behavior

The floating button uses the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect when the target button comes into view:

1. When the user is at the top of the page, the floating button is **visible**
2. As the user scrolls down and the target button comes into view, the floating button **slides down and hides**
3. If the user scrolls back up and the target button goes out of view, the floating button **slides up and appears again**

### Configuration

```tsx
<FloatingButton
  label="Start Application"
  targetButtonId="main-apply-button" // ID of button in content
  autoHide={true} // Enable auto-hide (default)
/>
```

The observer triggers when:

- **Threshold**: 10% of the target button is visible
- **Root Margin**: Accounts for the floating button's height (100px bottom margin)

## Accessibility

### Semantic HTML

The FloatingButton component uses semantic HTML and ARIA attributes:

- Container has `role="complementary"` to indicate supplementary content
- Container has `aria-label="Floating action button"` for screen reader context
- Button inherits all accessibility features from the Button component

### Keyboard Navigation

The floating button supports standard keyboard interaction:

- **Tab**: Moves focus to the button
- **Enter** or **Space**: Activates the button
- **Shift + Tab**: Moves focus away from the button

### Screen Readers

Screen readers announce:

- The floating button's purpose via the container's aria-label
- The button's label and role
- The button's state (enabled/disabled)

### Focus Management

When the floating button appears/disappears:

- Focus is **not** automatically moved (prevents disruption)
- Users can tab to the button when it's visible
- Focus outline follows theme-specific styles (orange for NTG, green for Central)

## Theming

The FloatingButton component uses theme-specific CSS files for styling:

- **Common styles**: `FloatingButton.css` - Shared styles for all themes
- **NTG theme**: `FloatingButton-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `FloatingButton-central.css` - NTG Central theme overrides

### Theme Differences

| Feature              | NTG Theme           | Central Theme       |
| -------------------- | ------------------- | ------------------- |
| Font Family          | Lato                | Roboto              |
| Button Border Radius | Sharp corners (0px) | Pill-shaped (50rem) |
| Primary Color        | NT.GOV.AU Blue      | NTG Central Blue    |
| Focus Outline        | Orange (#EC8C58)    | Green (#6AB06A)     |

### Design Tokens Used

The FloatingButton component uses the following design tokens:

#### Spacing

- `--sp-xl` (24px): Container padding (large screens)
- `--sp-md` (16px): Container padding (small screens), gap between elements
- `--sp-xs` (8px): Gap between icon and text in button

#### Colors

- `--clr-bg-default`: Background color (white)
- `--clr-border-subtle`: Border top color
- `--clr-action-pirmary`: Primary button background
- `--clr-action-hover`: Button hover state
- `--clr-action-pressed`: Button active/pressed state
- `--clr-text-inverse`: Button text color (white)

#### Shadows

- `--shadow-sm-top`: Box shadow on top of floating button (0px -2px 4px)

#### Border

- `--border-width-sm` (0.5px): Border top width
- `--radii-button`: Button border radius (theme-specific)

#### Focus

- `--shadow-focus-ntg`: NTG theme focus outline (4px orange)
- `--shadow-focus-central`: Central theme focus outline (4px green)

## Responsive Design

### Large Screens (≥768px)

- Container padding: `24px`
- Max width: `1168px` (centered)
- Button positioned to the left
- Full button width with padding

### Small Screens (<768px)

- Container padding: `16px`
- Button takes full width
- Centered layout
- Optimized for mobile touch targets

## Examples

### Complete Application Page Example

```tsx
import { FloatingButton, Button } from "@ntgovernment/web-design-system";

function LicenseApplicationPage() {
  const handleApply = () => {
    window.location.href = "/apply/license";
  };

  return (
    <div className="page">
      <h1>Business License Application</h1>

      <section>
        <h2>Requirements</h2>
        <ul>
          <li>Valid ABN or ACN</li>
          <li>Proof of identity</li>
          <li>Business address details</li>
        </ul>
      </section>

      <section>
        <h2>Application Process</h2>
        <p>
          Complete the online application form. Processing typically takes 5-10
          business days.
        </p>
      </section>

      <section>
        <h2>Ready to Apply?</h2>
        <Button
          id="main-apply-button"
          variant="primary"
          label="Start Application"
          iconRight="fa-light fa-arrow-right"
          onClick={handleApply}
        />
      </section>

      {/* Floating button - auto-hides when main button is visible */}
      <FloatingButton
        label="Start Application"
        variant="primary"
        iconRight="fa-light fa-arrow-right"
        onClick={handleApply}
        targetButtonId="main-apply-button"
      />
    </div>
  );
}

## Squiz DXP Component Service

The Floating Button is also packaged for Squiz DXP under `src/components/FloatingButton/dxp/`.

- `manifest.json` defines the Squiz DXP component metadata and input schema.
- `main.js` renders server-side HTML for the Floating Button.
- `preview.html` and `example.data.json` provide a local preview harness.
- `README.md` documents DXP usage, local preview, and deployment.

For the full DXP guide, see [`src/components/FloatingButton/dxp/README.md`](./dxp/README.md).

### Download Form Example

```tsx
function DownloadFormPage() {
  const handleDownload = () => {
    window.open("/forms/application.pdf", "_blank");
  };

  return (
    <div className="page">
      <h1>Application Form</h1>

      {/* Page content */}
      <section>
        <p>Download and complete the application form.</p>

        <Button
          id="download-button"
          variant="primary"
          label="Download Form"
          iconLeft="fa-light fa-download"
          onClick={handleDownload}
        />
      </section>

      {/* Floating button */}
      <FloatingButton
        label="Download Form"
        variant="primary"
        iconLeft="fa-light fa-download"
        onClick={handleDownload}
        targetButtonId="download-button"
      />
    </div>
  );
}
```

### Always Visible Example

For pages where you want the CTA always visible (no auto-hide):

```tsx
<FloatingButton
  label="Need Help? Contact Us"
  variant="secondary"
  iconRight="fa-light fa-phone"
  onClick={() => (window.location.href = "/contact")}
  autoHide={false}
/>
```

## Storybook

View live examples and interact with the FloatingButton component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > FloatingButton** to see all variants and configurations.

## TypeScript

The FloatingButton component is fully typed with TypeScript. Import the types:

```tsx
import {
  FloatingButton,
  FloatingButtonProps,
} from "@ntgovernment/web-design-system";

// Use FloatingButtonProps for custom wrappers or extensions
const MyCustomFloatingButton: React.FC<FloatingButtonProps> = (props) => {
  return <FloatingButton {...props} />;
};
```

## Browser Support

The FloatingButton component uses the IntersectionObserver API, which is supported in all modern browsers:

- Chrome/Edge (≥51)
- Firefox (≥55)
- Safari (≥12.1)
- Mobile browsers (iOS Safari ≥12.2, Chrome Mobile)

## Squiz DXP Component Service

The Floating Button is also packaged for Squiz DXP under `src/components/FloatingButton/dxp/`.

- `manifest.json` defines the Squiz DXP component metadata and input schema.
- `main.js` renders server-side HTML for the Floating Button.
- `preview.html` and `example.data.json` provide a local preview harness.
- `README.md` documents DXP usage, local preview, and deployment.

For the full DXP guide, see [`src/components/FloatingButton/dxp/README.md`](./dxp/README.md).

For older browsers, consider using a polyfill:

```bash
npm install intersection-observer
```

```tsx
import "intersection-observer"; // Import at app entry point
```

## Performance Considerations

### Efficient Scroll Detection

The FloatingButton uses IntersectionObserver instead of scroll event listeners for better performance:

- **Native browser API** - More efficient than JavaScript scroll handlers
- **Automatic throttling** - Browser optimizes callback timing
- **No layout thrashing** - Doesn't cause reflows or repaints
- **Cleanup on unmount** - Observer is properly disconnected

### Best Practices

1. **Use unique IDs** for target buttons to ensure proper observer setup
2. **Limit to one floating button** per page to avoid confusion
3. **Test on mobile devices** to ensure smooth animation
4. **Provide fallback** for browsers without IntersectionObserver support

## CSS Variables Customization

You can customize the FloatingButton using CSS variables:

```css
.floating-button {
  /* Adjust z-index if needed */
  --floating-button-z-index: 1030;

  /* Customize shadow */
  --shadow-sm-top: 0px -4px 8px 0px rgba(0, 0, 0, 0.1);

  /* Adjust max-width */
  --floating-button-max-width: 1200px;
}
```

## Related Components

- [Button](../Button/BUTTON.md) - Base button component used within FloatingButton
- [Icon](../Icon/ICON.md) - Icon component for button icons

## Related Documentation

- [Theming Guide](../../themes/THEMES.md) - Theme system overview
- [Theme Switching](../../themes/THEME_SWITCHING.md) - Runtime theme switching
- [Content Standards](../../CONTENT_STANDARDS.md) - Content guidelines

## Notes

- Bootstrap 5.3.3 must be loaded (either via CDN or npm) for the component to style correctly
- FontAwesome must be loaded if using the `iconLeft` or `iconRight` props
- The component is only available for NT.GOV.AU theme (NTG), not for NTG Central
- Always pair with a corresponding button in the page content
- Use meaningful, action-oriented labels (no generic "Click Here" or "Button")

## Themes

**Note:** The floating button component is currently only available on external websites in the main NTG design system, not for NTG Central.

For NTG Central websites, consider using a standard call-to-action button in a prominent location instead of a floating button.

---

## Testing & QA ✅

- **Scroll behavior:** Verify auto-hide shows/hides when the target button becomes visible from multiple scroll directions and at different scroll speeds.
- **Mobile:** Test on small screens to confirm full-width layout, touch target sizes, and slide animation.
- **Keyboard:** Ensure Tab focuses the button and Enter/Space activate it; verify focus ring styles for both themes.
- **Screen readers:** Confirm the container's `aria-label` and the button label are announced correctly; test when the floating button appears/disappears.
- **Themes:** Validate NTG and Central focus outlines, radii, and color tokens.
- **Performance:** Use DevTools to confirm IntersectionObserver is used (no continuous scroll listeners) and animations are GPU-friendly.

## Developer checklist (Next steps) 🔧

1. Build the library: `npm run build`
2. Build Storybook (static): `npm run build-storybook`
3. Test in the demo app and Storybook stories (see `Components → FloatingButton`).
4. Verify accessibility with a screen reader and keyboard-only navigation.
5. Add automated tests or visual regression checks if required.
6. Open a PR with the component, documentation, and stories; include screenshots or a short GIF if useful.

## Component API (TypeScript) 📎

```typescript
interface FloatingButtonProps {
  label: string; // Required button text
  iconLeft?: string; // Left icon (FontAwesome class)
  iconRight?: string; // Right icon (FontAwesome class)
  variant?: "primary" | "secondary"; // Button variant (default: "primary")
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Click handler
  targetButtonId?: string; // ID of target button for auto-hide
  autoHide?: boolean; // Enable auto-hide (default: true)
  className?: string; // Additional CSS classes
  type?: "button" | "submit" | "reset"; // HTML button type
  disabled?: boolean; // Disabled state
  ariaLabel?: string; // Accessibility label
}
```

## Implementation summary (files added)

- `FloatingButton.tsx` — React component using IntersectionObserver
- `FloatingButton.css` — Common styles (tokens, responsive)
- `FloatingButton-ntg.css` / `FloatingButton-central.css` — Theme overrides
- `FloatingButton.stories.tsx` — Storybook stories and demos
- `FLOATINGBUTTON.md` — Primary documentation (this file)

## Notes for developers

- Follows existing project patterns (Button, BackToTop).
- Uses Bootstrap 5.3 variable overrides (`--bs-btn-*`) via `Button.css`.
- Prefer tokens/variables; use raw values only when no token exists.
- Keep examples realistic and meaningful (see `CONTENT_STANDARDS.md`).

## Notes for AI agents 🤖

- This repository enforces realistic examples and no Lorem Ipsum.
- Use design tokens (`--sp-*`, `--clr-*`, `--shadow-*`, `--radii-*`) for styling.
- Prefer IntersectionObserver over scroll listeners for visibility logic.
- Update `FLOATINGBUTTON.md` when changing behavior or props so code-generators and agents find authoritative docs.
