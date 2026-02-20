# Button Component - Comprehensive Documentation

A foundational interface component for prominent call-to-action links and actions, designed to guide users toward important interactions.

## Purpose

Buttons indicate when a user can take an important action. They should be used sparingly and only for the most critical actions within a page or component. The label on the button should clearly communicate what will happen or where the user will go when activated.

## Features

- ✅ Three button variants (primary, secondary, tertiary) with distinct visual hierarchy
- ✅ Small size variant for compact layouts
- ✅ Icon support with left/right positioning
- ✅ Icon-only mode with accessibility support
- ✅ Full TypeScript support with complete type safety
- ✅ Theme-specific styling (NT.GOV.AU and NTG Central themes)
- ✅ Design token-driven styling for consistency
- ✅ Work with native HTML button attributes and accessibility features
- ✅ Bootstrap 5.3 CSS variables approach for easy customization
- ✅ Smooth transitions and focus states following WCAG standards

## When to Use Buttons

✅ **Use buttons for:**

- Linking to related content
- Viewing more information about something
- Initiating a search or action
- Logging in, signing up, or authenticating
- Starting an application
- Submitting a form
- Performing critical or destructive actions (with appropriate warning)

❌ **Do NOT use buttons for:**

- Simple text links or navigation (use anchor tags instead)
- Generic page navigation (use navigation components)
- Inactive states where possible (buttons should be actionable)
- More than 3-4 words in the label
- Multiple buttons per action group (use stacks instead)

## Button Variants

### Primary Button

**Use for:** The main call-to-action, the primary purpose of the page or component.

**Guidelines:**

- Only one per page or component (use sparingly to maintain impact)
- Never use for 'destructive' actions like cancelling or closing
- Users often click the most prominent button without reading - ensure the action is their logical next step
- Use action-oriented copy like "Submit Application", "Download Report", "Continue"

```tsx
<Button variant="primary" label="Submit Application" />
<Button variant="primary" label="Download Report" />
<Button variant="primary" label="Create Account" />
```

**Design Tokens (NTG Theme):**

- Default background: `--clr-action-pirmary` (#1F1F5F - Navy Blue)
- Hover background: `--clr-action-hover` (#c33826 - Ochre)
- Pressed background: `--clr-action-pressed` (#a22f20 - Darker Ochre)
- Text color: `--clr-text-inverse` (White)
- Border radius: `--radii-button` (0px - sharp corners)

### Secondary Button

**Use for:** A less important action that works independently or alongside a primary button.

**Guidelines:**

- Can be used alone without a primary button
- Don't use more than one secondary button in the same component or section
- Useful for "Save as Draft", "Cancel", "Back", or alternative actions

```tsx
<Button variant="secondary" label="Save as Draft" />
<Button variant="secondary" label="Cancel" />
<Button variant="secondary" label="Maybe Later" />
```

**Design Tokens:**

- Default background: `--clr-action-secondary` (White)
- Border: `--border-width-md` (1px) with `--clr-border-strong-01`
- Text color: `--clr-link-default`
- Hover: Transitions to primary button styling

### Tertiary Button

**Use for:** Even less important actions, often used for navigation, cancellation, or secondary links.

**Guidelines:**

- Often used as "Cancel", "Back", or "Skip" buttons
- Useful for navigating between internal and external content
- Provides visual de-emphasis for optional or less critical actions

```tsx
<Button variant="tertiary" label="View Details" />
<Button variant="tertiary" label="Back" />
<Button variant="tertiary" label="Learn More" iconRight="fa-light fa-arrow-right" />
```

**Design Tokens:**

- Default background: Transparent
- Text color: `--clr-link-default`
- Hover: `--clr-link-hover`
- Pressed: `--clr-link-pressed`

## Button Sizes

### Default Size

Full-width button with standard padding for primary actions.

```tsx
<Button variant="primary" label="Submit Application" />
```

**Sizing tokens:**

- Padding X: `--sp-xl` (24px)
- Padding Y: `--sp-md` (16px)
- Font size: `--type-button-label-default-size` (16px)
- Font weight: `--type-button-label-default-weight` (700)
- Line height: `--type-button-label-default-lh` (16px)

### Small Size

Compact button for secondary locations or tight layouts.

```tsx
<Button variant="primary" size="sm" label="Edit" />
<Button variant="secondary" size="sm" label="Skip" />
```

**Sizing tokens:**

- Padding X: `--sp-md` (12px)
- Padding Y: `--sp-sm` (12px)
- Font size: `--type-button-label-small-size` (14px)
- Font weight: `--type-button-label-default-weight` (700)
- Border radius: `--radii-button` (0px)

## Icon Integration

Buttons support icons on both left and right sides, as well as icon-only variants.

### Left Icon (Leading Icon)

Use when the icon is closely associated with the action.

```tsx
// Download report action
<Button
  variant="primary"
  iconLeft="fa-light fa-download"
  label="Download Report"
/>

// Home navigation
<Button
  variant="primary"
  iconLeft="fa-light fa-home"
  label="Home"
/>

// Add new item
<Button
  variant="primary"
  iconLeft="fa-light fa-plus"
  label="Add Item"
/>
```

**Icon positioning:**

- Icon-to-text gap: `--sp-xs` (8px via `.me-2` class)
- Icon size: 20px (inherited from Font Awesome)
- Icon alignment: Vertically centered

### Right Icon (Trailing Icon)

Use for supplementary information or directionality cues.

```tsx
// Navigation indicator
<Button
  variant="tertiary"
  label="Next"
  iconRight="fa-light fa-arrow-right"
/>

// Link indicator
<Button
  variant="tertiary"
  label="View All Services"
  iconRight="fa-light fa-external-link"
/>

// Open external link
<Button
  variant="secondary"
  label="Read Documentation"
  iconRight="fa-light fa-arrow-up-right-from-square"
/>
```

**Icon positioning:**

- Icon-to-text gap: `--sp-xs` (8px via `.ms-2` class)
- Icon size: 20px (inherited from Font Awesome)
- Icon alignment: Vertically centered

### Icon-Only Buttons

Buttons with only an icon, no text label. **MUST include `aria-label` for accessibility.**

```tsx
// ✅ CORRECT - Includes aria-label
<Button
  variant="primary"
  iconLeft="fa-light fa-search"
  aria-label="Search"
/>

<Button
  variant="secondary"
  iconLeft="fa-light fa-cog"
  aria-label="Settings"
/>

// ❌ INCORRECT - Missing aria-label (accessibility violation)
<Button
  variant="primary"
  iconLeft="fa-light fa-search"
/>
```

## States and Interactions

### Hover State

Visual feedback when user hovers over the button.

```tsx
<Button variant="primary" label="Submit" />
// Transitions to hover background color: --clr-action-hover
```

**Behavior:**

- Background color changes smoothly
- Cursor changes to pointer
- No text decoration changes
- Smooth 150ms transition

### Active/Pressed State

Visual feedback when button is actively clicked.

```tsx
<Button variant="primary" label="Submit" />
// When clicked, transitions to active background: --clr-action-pressed
```

**Behavior:**

- Background darkens further than hover
- Provides tactile feedback
- Transitions on click

### Focus State

Keyboard focus indicator for accessibility.

```tsx
<Button variant="primary" label="Submit" />
// Tab to focus, shows focus outline
```

**Focus styling:**

- NTG Theme: 4px orange outline (`--shadow-focus-ntg: 0px 0px 0px 4px #ec8c58ff`)
- Central Theme: 4px green outline (`--shadow-focus-central: 0px 0px 0px 4px #6ab06aff`)
- Meets WCAG AAA contrast requirements
- Keyboard-accessible (Tab/Shift+Tab navigation)

### Disabled State

Button is non-interactive.

```tsx
<Button variant="primary" label="Submit" disabled />
```

**Styling:**

- Background: `--clr-action-disabled` (Light gray)
- Text color: `--clr-text-muted`
- Cursor: Not-allowed
- Opacity: Reduced
- No interaction effects
- Not focusable via Tab key

**Accessibility:**

- Announced as "disabled" by screen readers
- ARIA: `aria-disabled="true"`
- Cannot receive focus or activation

## Theme Support

The Button component respects and adapts to both NTG and NTG Central themes through design tokens.

### NT.GOV.AU Theme (`Button-ntg.css`)

```tsx
<Button variant="primary" label="Submit" />
```

**Styling:**

- Font family: Lato
- Primary color: #1F1F5F (Navy Blue)
- Hover color: #c33826 (Ochre)
- Border radius: 0px (sharp corners)
- Focus outline: 4px #ec8c58 (orange)
- Uses all `--ntg-*` prefixed tokens

### NTG Central Theme (`Button-central.css`)

```css
/* Applied when Central theme is active */
:root {
  --clr-action-pirmary: var(--central-clr-action-pirmary);
  --radii-button: var(--central-radii-button);
}
```

**Styling:**

- Font family: Roboto
- Primary color: #102040 (Central Blue)
- Hover color: #384560 (lighter blue)
- Border radius: 50rem (pill-shaped)
- Focus outline: 4px #6ab06a (green)
- Uses all `--central-*` prefixed tokens

See [Theme Switching](../../themes/THEME_SWITCHING.md) for runtime theme switching.

## CSS Variables Customization

The Button component uses Bootstrap 5.3's CSS variables approach for maximum flexibility. All properties can be customized at runtime without modifying component code.

### Bootstrap Button Variables

| Variable                 | Default                                   | Purpose            |
| ------------------------ | ----------------------------------------- | ------------------ |
| `--bs-btn-color`         | `var(--clr-text-inverse)`                 | Text color         |
| `--bs-btn-bg`            | `var(--clr-action-pirmary)`               | Background color   |
| `--bs-btn-border-color`  | `var(--clr-action-pirmary)`               | Border color       |
| `--bs-btn-padding-x`     | `var(--sp-xl)` (24px)                     | Horizontal padding |
| `--bs-btn-padding-y`     | `var(--sp-md)` (16px)                     | Vertical padding   |
| `--bs-btn-font-family`   | `var(--type-font-default)`                | Font family        |
| `--bs-btn-font-size`     | `var(--type-button-label-default-size)`   | Font size          |
| `--bs-btn-font-weight`   | `var(--type-button-label-default-weight)` | Font weight        |
| `--bs-btn-line-height`   | `var(--type-button-label-default-lh)`     | Line height        |
| `--bs-btn-border-radius` | `var(--radii-button)`                     | Border radius      |
| `--bs-btn-hover-bg`      | `var(--clr-action-hover)`                 | Hover background   |
| `--bs-btn-active-bg`     | `var(--clr-action-pressed)`               | Active background  |

### Inline Customization

```tsx
<Button
  variant="primary"
  label="Extra Large Button"
  style={
    {
      "--bs-btn-padding-x": "3rem",
      "--bs-btn-padding-y": "1rem",
      "--bs-btn-font-size": "18px",
      "--bs-btn-border-radius": "8px",
    } as React.CSSProperties
  }
/>
```

### Class-Based Customization

```css
/* Define custom button variants in your CSS */
.btn-custom {
  --bs-btn-bg: #8b5cf6;
  --bs-btn-border-color: #8b5cf6;
  --bs-btn-hover-bg: #7c3aed;
}

.btn-xl {
  --bs-btn-padding-x: 40px;
  --bs-btn-padding-y: 20px;
  --bs-btn-font-size: 20px;
}

.btn-pill {
  --bs-btn-border-radius: 50rem;
}
```

```tsx
<Button variant="primary" className="btn-custom btn-xl" label="Custom Button" />
```

### Global Customization

```css
:root {
  /* Override button defaults globally */
  --bs-btn-padding-x: 32px;
  --bs-btn-padding-y: 20px;
  --bs-btn-border-radius: 8px;
}
```

See [CSS_VARIABLES.md](CSS_VARIABLES.md) for more detailed examples.

## Accessibility

### Semantic HTML

Buttons render as native `<button>` elements with all standard HTML attributes supported.

```tsx
<Button type="submit" variant="primary" label="Submit Form" />
// Renders: <button type="submit" class="btn btn-primary">Submit Form</button>
```

### Keyboard Navigation

- **Tab**: Focus on button
- **Shift+Tab**: Previous button
- **Enter**: Activate button
- **Space**: Activate button

```tsx
<form>
  <input type="text" />
  <Button variant="primary" type="submit" label="Submit" />
  {/* Tab navigates between input and button, Space/Enter submits form */}
</form>
```

### Screen Reader Announcements

Icon-only buttons MUST include `aria-label`:

```tsx
// ✅ Correct - icon with aria-label
<Button
  iconLeft="fa-light fa-search"
  aria-label="Search"
  variant="primary"
/>
// Announces: "Search, button"

// With text and icon - icon is hidden from screen readers
<Button
  iconLeft="fa-light fa-download"
  label="Download Report"
  variant="primary"
/>
// Announces: "Download Report, button"
```

### Focus Indicators

Strong, visible focus outlines meet WCAG AAA standards:

```
NTG Theme: 4px solid #ec8c58 (orange)
Central Theme: 4px solid #6ab06a (green)
Contrast ratio: Exceeds 7:1 requirement
```

### Disabled State Accessibility

```tsx
<Button variant="primary" label="Unavailable Action" disabled />
// Announces: "Unavailable Action, button, disabled"
// Not focusable
// Not clickable
```

## API Reference

### ButtonProps

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button visual style. Determines color, border, and interactive states.
   * @default "primary"
   */
  variant?: "primary" | "secondary" | "tertiary";

  /**
   * Button size. Affects padding and font size.
   * @default undefined (default size)
   */
  size?: "sm";

  /**
   * The button label text displayed to users.
   * @example "Submit Application"
   */
  label?: string;

  /**
   * FontAwesome icon class for the left side of the button.
   * Use when icon meaning is closely associated with the action.
   * @example "fa-light fa-download"
   */
  iconLeft?: string;

  /**
   * FontAwesome icon class for the right side of the button.
   * Use for supplementary information or direction indicators.
   * @example "fa-light fa-arrow-right"
   */
  iconRight?: string;

  /**
   * All standard React button attributes are supported.
   * @example type="submit", onClick={handler}, disabled={true}
   */
}
```

### Component Structure

```tsx
import { Button } from "@ntgovernment/web-design-system";

function MyComponent() {
  const handleAction = () => {
    console.log("Action performed");
  };

  return (
    <Button
      variant="primary"
      size="sm"
      type="button"
      disabled={false}
      label="Take Action"
      iconLeft="fa-light fa-check"
      onClick={handleAction}
      aria-label="optional aria label"
    />
  );
}
```

## Usage Examples

### Form Submission

```tsx
function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Submit logic
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <Button
        type="submit"
        variant="primary"
        label="Sign In"
        disabled={isLoading}
        iconLeft={isLoading ? "fa-light fa-spinner" : undefined}
      />

      <Button type="reset" variant="tertiary" label="Clear" />
    </form>
  );
}
```

### Call-to-Action Stack

```tsx
function ConfirmDialog() {
  return (
    <div className="modal-buttons">
      {/* Primary action - most important */}
      <Button
        variant="primary"
        label="Confirm Action"
        onClick={handleConfirm}
      />

      {/* Secondary action - alternative */}
      <Button variant="secondary" label="Save Draft" onClick={handleDraft} />

      {/* Tertiary action - cancellation */}
      <Button variant="tertiary" label="Back" onClick={handleCancel} />
    </div>
  );
}
```

### Navigation with Icons

```tsx
function ContentNavigation() {
  return (
    <div className="navigation-buttons">
      <Button
        variant="tertiary"
        iconLeft="fa-light fa-arrow-left"
        label="Previous"
      />

      <span>Page 2 of 5</span>

      <Button
        variant="primary"
        label="Next"
        iconRight="fa-light fa-arrow-right"
      />

      <Button
        variant="secondary"
        iconLeft="fa-light fa-times"
        aria-label="Close"
      />
    </div>
  );
}
```

### Action Menu

```tsx
function DocumentActions() {
  return (
    <div className="action-buttons">
      <Button
        variant="primary"
        iconLeft="fa-light fa-download"
        label="Download"
      />

      <Button variant="secondary" iconLeft="fa-light fa-print" label="Print" />

      <Button variant="tertiary" iconLeft="fa-light fa-share" label="Share" />

      <Button
        variant="secondary"
        iconLeft="fa-light fa-times"
        aria-label="Close"
        size="sm"
      />
    </div>
  );
}
```

## Implementation Notes

### Bootstrap 5.3 Dependency

The Button component requires Bootstrap 5.3.3+ to be loaded. This provides:

- Base button styles
- CSS variables definitions
- Flexible state management
- Cross-browser compatibility

```html
<!-- CDN option -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

<!-- Or via npm -->
import "bootstrap/dist/css/bootstrap.css";
```

### FontAwesome Icons

If using icons, FontAwesome must be available:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
/>
```

### Design Token Integration

All button properties map to the design token system:

| Property      | Token                                | Values                                          |
| ------------- | ------------------------------------ | ----------------------------------------------- |
| Primary color | `--clr-action-pirmary`               | Theme-specific (NTG: #1F1F5F, Central: #102040) |
| Hover color   | `--clr-action-hover`                 | Theme-specific                                  |
| Text color    | `--clr-text-inverse`                 | White (#ffffff)                                 |
| Padding X     | `--sp-xl`                            | 24px                                            |
| Padding Y     | `--sp-md`                            | 16px                                            |
| Border radius | `--radii-button`                     | 0px (NTG) / 50rem (Central)                     |
| Font size     | `--type-button-label-default-size`   | 16px                                            |
| Font weight   | `--type-button-label-default-weight` | 700                                             |
| Focus shadow  | `--shadow-focus-ntg`                 | 4px orange outline                              |

## Related Components

- [Icon Component](../Icon/ICON.md) - Use icons independently
- [Card Component](../Card/CARD.md) - Often includes buttons in footer
- [Notification Component](../Notification/NOTIFICATION.md) - Action buttons for alerts
- [Pill Component](../Pill/PILL.md) - Removable items with action buttons

## Related Documentation

- [CSS Variables Reference](CSS_VARIABLES.md) - Detailed CSS variable customization
- [Theme System](../../themes/THEMES.md) - Understanding the theming architecture
- [Theme Switching](../../themes/THEME_SWITCHING.md) - Runtime theme switching
- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md) - Complete token inventory
- [Bootstrap Buttons](https://getbootstrap.com/docs/5.3/components/buttons/) - Bootstrap documentation

## Storybook

View interactive examples and all button variants in Storybook:

```bash
npm run storybook
# Navigate to Components > Button
```

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import { Button, ButtonProps } from "@ntgovernment/web-design-system";

// Use for custom button wrappers
const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Type-safe prop access
const useButton = (props: ButtonProps) => {
  const { variant = "primary", size, label, ...rest } = props;
  return { variant, size, label, rest };
};
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (latest)
- Chrome Mobile (latest)

## Performance

- Minimal CSS bundle impact (~2KB per theme)
- No JavaScript bloat - pure CSS customization
- Efficient design token resolution
- Zero dependencies beyond Bootstrap

## Testing

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@ntgovernment/web-design-system";

test("Button renders with label", () => {
  render(<Button label="Click me" />);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("Button calls onClick handler", () => {
  const onClick = jest.fn();
  render(<Button label="Click me" onClick={onClick} />);
  fireEvent.click(screen.getByText("Click me"));
  expect(onClick).toHaveBeenCalled();
});

test("Disabled button cannot be clicked", () => {
  render(<Button label="Disabled" disabled />);
  const button = screen.getByText("Disabled");
  expect(button).toBeDisabled();
});
```

## Changelog

### v1.0.0 (February 2026)

- ✅ Complete design token integration
- ✅ Theme-specific styling for NTG and Central
- ✅ Bootstrap 5.3 CSS variables customization
- ✅ Icon support (left and right positioning)
- ✅ Size variants (default and small)
- ✅ WCAG AAA accessibility compliance
- ✅ Complete TypeScript support
- ✅ Comprehensive documentation

## Implementation Summary (Developer & Agent)

This section merges the former implementation summary, developer guide, and report into the component documentation so everything lives in one place.

### Architecture Snapshot

- **Design principle:** Bootstrap 5.3 CSS variables + design tokens as the single source of truth.
- **Theme agility:** Semantic tokens are redefined per theme (NTG, Central) without component changes.
- **Customization:** Runtime styling through `--bs-btn-*` variables.

### File Structure

```
src/components/Button/
├── Button.tsx
├── Button.css
├── Button-ntg.css
├── Button-central.css
├── Button.stories.tsx
├── BUTTON.md
├── CSS_VARIABLES.md
└── index.ts
```

### Import Hierarchy (Default NTG)

```
src/main.css
├── themes/theme-ntg.css (re-imports common/grid/typography)
├── components/Button/Button.css
└── components/Button/Button-ntg.css
```

### Token Mapping (Quick Reference)

- **Typography:** `--type-button-label-default-*`, `--type-button-label-small-*`
- **Spacing:** `--sp-xl`, `--sp-md`, `--sp-sm`, `--sp-xs`
- **Colors:** `--clr-action-*`, `--clr-text-*`, `--clr-link-*`
- **Borders & focus:** `--radii-button`, `--shadow-focus-ntg`, `--shadow-focus-central`

### Validation Checklist

- ✅ All styling uses design tokens (no hardcoded values).
- ✅ Focus states use theme-specific shadows.
- ✅ Icon spacing uses `--sp-xs` via flex `gap`.
- ✅ WCAG AAA focus indicators.
- ✅ Storybook stories use meaningful content.

### Build Output (Reference)

```
dist/
├── components.min.js
├── ntg-theme.min.css
├── central-theme.min.css
├── index.html
├── index.js
└── index.css
```

### Migration Guide (Hardcoded → Tokens)

```css
/* Before */
.btn-primary {
  padding: 16px 24px;
  background-color: #1f1f5f;
  color: white;
}

/* After */
.btn-primary {
  --bs-btn-padding-x: var(--sp-xl);
  --bs-btn-padding-y: var(--sp-md);
  --bs-btn-bg: var(--clr-action-pirmary);
  --bs-btn-color: var(--clr-text-inverse);
}
```

### Troubleshooting (Quick)

- **Styles missing:** Ensure Bootstrap CSS and component CSS are loaded.
- **Icons missing:** Ensure FontAwesome CSS is loaded and icon class names are valid.
- **Focus not visible:** Confirm no global `outline: none` overrides.

### Future Enhancements (Ideas)

- Loading state / spinner
- Button group component
- Outline and ghost variants
- RTL support
- High contrast mode
# Button Component - CSS Variables Customization

The Button component uses Bootstrap 5.3's CSS variables approach, allowing you to customize button styles at runtime without modifying the component code.

## Available CSS Variables

### Base Button Properties

```css
--bs-btn-padding-x: 24px;              /* Horizontal padding */
--bs-btn-padding-y: 16px;              /* Vertical padding */
--bs-btn-font-family: var(--ntg-type-font-default);  /* Font family (theme-specific) */
--bs-btn-font-size: 16px;              /* Font size */
--bs-btn-font-weight: 700;             /* Font weight */
--bs-btn-line-height: 16px;            /* Line height */
--bs-btn-border-width: 0;              /* Border width */
--bs-btn-border-radius: 0px;           /* Border radius (NTG: sharp, Central: pill) */
```

### Button States

```css
/* Default State */
--bs-btn-color: var(--clr-link-inverse, white);
--bs-btn-bg: var(--clr-action-pirmary);
--bs-btn-border-color: var(--clr-action-pirmary);

/* Hover State */
--bs-btn-hover-color: var(--clr-link-inverse, white);
--bs-btn-hover-bg: var(--clr-action-hover);
--bs-btn-hover-border-color: var(--clr-action-hover);

/* Active/Pressed State */
--bs-btn-active-color: var(--clr-link-inverse, white);
--bs-btn-active-bg: var(--clr-action-pressed);
--bs-btn-active-border-color: var(--clr-action-pressed);

/* Disabled State */
--bs-btn-disabled-color: var(--clr-text-subtle);
--bs-btn-disabled-bg: var(--clr-action-disabled);
--bs-btn-disabled-border-color: var(--clr-action-disabled);
--bs-btn-disabled-opacity: 1;
```

### Focus State

```css
--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(31, 31, 95, 0.25);
```

### Size Variants

```css
/* Small Buttons */
--bs-btn-padding-y-sm: 4px;
--bs-btn-padding-x-sm: 12px;
--bs-btn-font-size-sm: 14px;
--bs-btn-border-radius-sm: 0px;

/* Large Buttons */
--bs-btn-padding-y-lg: 16px;
--bs-btn-padding-x-lg: 32px;
--bs-btn-font-size-lg: 16px;
--bs-btn-border-radius-lg: 0px;
```

### Transitions

```css
--bs-btn-transition: color 0.15s ease-in-out, 
                     background-color 0.15s ease-in-out, 
                     border-color 0.15s ease-in-out, 
                     box-shadow 0.15s ease-in-out;
```

## Usage Examples

### Inline Customization

Override specific properties directly on a button instance:

```tsx
import { Button } from '@ntgovernment/web-design-system';

function MyComponent() {
  return (
    <Button 
      variant="primary"
      style={{
        '--bs-btn-padding-x': '3rem',
        '--bs-btn-padding-y': '1rem',
        '--bs-btn-font-size': '18px',
        '--bs-btn-border-radius': '8px'
      } as React.CSSProperties}
    >
      Custom Button
    </Button>
  );
}
```

### CSS Class Customization

Create custom button variants using CSS:

```css
/* Custom button variant */
.btn-custom {
  --bs-btn-bg: #8b5cf6;
  --bs-btn-border-color: #8b5cf6;
  --bs-btn-hover-bg: #7c3aed;
  --bs-btn-hover-border-color: #7c3aed;
  --bs-btn-active-bg: #6d28d9;
  --bs-btn-active-border-color: #6d28d9;
}

/* Extra large button size */
.btn-xl {
  --bs-btn-padding-x: 40px;
  --bs-btn-padding-y: 20px;
  --bs-btn-font-size: 20px;
}

/* Pill-shaped button (override NTG's sharp corners) */
.btn-pill {
  --bs-btn-border-radius: 50rem;
}
```

Then use in your component:

```tsx
<Button variant="primary" className="btn-custom btn-xl">
  Extra Large Custom Button
</Button>
```

### Global Customization

Override variables globally in your CSS:

```css
:root {
  /* Increase all button padding globally */
  --bs-btn-padding-x: 32px;
  --bs-btn-padding-y: 20px;
  
  /* Adjust focus ring color */
  --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.5);
}
```

## Theme-Specific Styles

The Button component includes theme-specific CSS files that automatically apply when you switch themes:

- **NT.GOV.AU Theme** (`Button-ntg.css`):
  - Font: Lato
  - Border Radius: 0px (sharp corners)
  - Primary Color: #1F1F5F (NT Gov blue)
  - Hover Color: #c33826 (ochre)

- **NTG Central Theme** (`Button-central.css`):
  - Font: Roboto  
  - Border Radius: 6.25rem (pill-shaped)
  - Primary Color: #102040 (Central blue)
  - Hover Color: #384560 (lighter blue)

## Icon Spacing

Icons within buttons have a gap of 8px (matching Figma specifications):

```tsx
<Button variant="primary" icon="fa-light fa-home" iconPosition="left">
  Home
</Button>
```

The spacing is automatically applied via the `.btn i.me-2` and `.btn i.ms-2` classes.

## Design Token Integration

All Button CSS variables map to the design token system:

- **Colors**: Use semantic variables like `--clr-action-pirmary`, `--clr-action-hover`
- **Spacing**: Uses `--sp-xxs`, `--sp-sm`, `--sp-md`, `--sp-xl` tokens
- **Typography**: References `--type-button-label-default-*` tokens
- **Border Radius**: Uses theme-specific `--ntg-radii-button` or `--central-radii-button`

This ensures consistency across the design system and enables theme switching.

## Bootstrap Documentation

For more details on Bootstrap's button CSS variables approach, see:
https://getbootstrap.com/docs/5.3/components/buttons/#variables

## Implementation Notes

The Button component uses standard Bootstrap classes (`btn`, `btn-primary`, etc.) with no custom HTML structure. All customization happens purely through CSS variables, maintaining full Bootstrap compatibility while enabling theme-specific styling.
