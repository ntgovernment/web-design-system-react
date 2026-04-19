# Dropdown

Developer guide for the `Dropdown` component — concise API, implementation notes, token list, accessibility checklist and Storybook/testing guidance.

---

## Purpose

The Dropdown component (HTML `<select>`) allows users to choose a single option from a list. It provides a native, accessible way to select from multiple options while preserving Bootstrap compatibility and being fully token-driven and theme-aware.

## Import

```tsx
import { Dropdown } from "@ntgovernment/web-design-system";
```

## Component API (props)

- `label?: string` — visible label shown above the field.
- `helperText?: string` — small helper/hint text under the label.
- `requiredIndicator?: string` — text to display for required fields (default: `(Required)`).
- `validationState?: "success" | "error"` — visual validation state.
- `validationMessage?: string` — message shown when `validationState` is set.
- `size?: "sm" | "lg"` — Bootstrap sizing (`form-select-sm` / `form-select-lg`).
- `wrapperClassName?: string` — optional wrapper CSS class.
- `options?: DropdownOption[]` — array of options to display (see `DropdownOption` interface below).
- `placeholder?: string` — placeholder text when no option is selected (default: `"Select an option"`).
- All standard `select` attributes (`value`, `defaultValue`, `onChange`, `disabled`, etc.) are supported.

Note: `value` makes the component controlled; otherwise it uses `defaultValue` and internal state.

### DropdownOption Interface

```tsx
interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

## Data-attributes & classes (for CSS/automation)

- `class="form-select"` — always present for Bootstrap compatibility.
- `data-status="success"|"error"` — validation state (used by CSS selectors).
- `data-filled="true"` — present when an option is selected.
- `data-disabled="true"` — reflects `disabled` state.

These attributes make it easy for other tools and automated agents to detect component state.

## Design tokens / CSS variables used

### Color tokens

- `--clr-bg-default` — Default background color
- `--clr-bg-shade-alt` — Disabled background color
- `--clr-border-subtle` — Subtle border color
- `--clr-border-strong-02` — Strong border color (default state)
- `--clr-focus-focus` — Focus outline color (theme-specific)
- `--clr-status-success` — Success state color
- `--clr-status-danger` — Error/danger state color
- `--clr-text-default` — Default text color
- `--clr-text-muted` — Muted text color (helper text, disabled state)

### Spacing tokens

- `--sp-xs` (8px) — Small gap between elements
- `--sp-sm` (12px) — Small padding (sm size)
- `--sp-md` (16px) — Medium padding (default)
- `--sp-lg` (20px) — Icon size
- `--sp-xl` (24px) — Large padding (lg size)
- `--sp-xxxl` (48px) — Minimum height

### Typography tokens

- `--type-desktop-body-default-size` — Default font size (16px)
- `--type-body-sm-size` — Small font size (14px)
- `--type-desktop-h6-size` — Large size font
- `--type-body-default-lh` — Default line height
- `--type-body-sm-lh` — Small text line height

### Border tokens

- `--border-width-md` (1px) — Default border width
- `--border-width-xl` (4px) — Focus outline width
- `--radii-none` (0px) - No border radius (NTG theme)
- `--radii-sm` (4px) - Small border radius (Central theme)

### Shadow tokens (theme-specific)

- `--shadow-focus-ntg` — NTG theme focus shadow (orange)
- `--shadow-focus-central` — Central theme focus shadow (green)

These tokens are defined in the theme files; theme-specific overrides are applied in `Dropdown-ntg.css` / `Dropdown-central.css`.

## Theming

### Border Radius

- **NTG Theme**: Uses `--ntg-radii-none` (0px) for sharp corners
- **Central Theme**: Uses `--central-radii-sm` (4px) for rounded corners

### Focus Outline & Border

- Focus border (outline): the component uses the semantic border token `--clr-border-strong-02` for the visible outline/border when focused — this ensures consistency with hover and other focused form controls.
- Focus glow ring: the outer glow (box-shadow) remains theme-specific and uses `--clr-focus-focus` (implemented by `--shadow-focus-ntg` / `--shadow-focus-central`) so the glow colour is NTG orange or Central green depending on the active theme.

Per-theme overrides live in `Dropdown-ntg.css` and `Dropdown-central.css` and are automatically included in the theme bundles. Storybook loads the theme CSS at runtime — use the Theme toolbar to test NTG vs Central behavior.

## Important implementation details

- Native arrow removed: the native browser arrow is hidden (`appearance: none`) and replaced with a single design-system chevron icon to ensure a consistent visual across browsers.
- Icon colour: the chevron and validation icons use `currentColor` so they inherit from the surrounding tokenised text colour.
- Default sizing: the component wrapper defaults to `width: 100%` with `max-width: 480px` for consistent layout across Input, Dropdown and Textarea.

## Accessibility checklist

- ✅ Always include a visible `label` for screen reader users.
- ✅ Use `aria-describedby` to link helper text and validation messages.
- ✅ Error messages use `role="alert"` and `aria-live="assertive"` for immediate announcement.
- ✅ Success messages use `role="status"` and `aria-live="polite"`.
- ✅ Do not rely on color alone to indicate state; validation messages include text and icons.
- ✅ Keyboard accessible: dropdown is fully keyboard navigable (arrow keys, Enter, Space, Esc).
- ✅ Disabled options use the `disabled` attribute and are properly styled.
- ✅ Custom dropdown icon uses `aria-hidden="true"` to prevent screen reader announcement.
- ✅ Focus styles use theme-specific tokens for clear visual indication.

## Storybook

Stories are located at `src/components/Dropdown/Dropdown.stories.tsx` and cover:

- Default dropdown with options
- Required field
- Filled/selected state
- Active/focused state
- Success validation
- Error validation
- Disabled state
- Different sizes (sm, default, lg)
- With many options (scrolling)
- Playground for testing

Use the global Theme toolbar to switch between NTG and Central themes and verify focus styles and border radius differences.

## Implementation notes (for maintainers)

### Bootstrap Compatibility

The component uses the `form-select` class to maintain Bootstrap compatibility while overriding all visual styles with design tokens. This ensures the component works seamlessly with existing Bootstrap layouts and utilities.

### Custom Dropdown Icon

The native browser dropdown arrow is hidden using `appearance: none`, and a custom chevron icon is positioned absolutely on the right. This provides consistent cross-browser styling that matches the design system.

### Option Styling Limitations

Due to browser limitations, dropdown option styling (`:checked`, `:focus`) has limited cross-browser support. The component provides basic styling that works in modern browsers, but the actual dropdown menu appearance is largely controlled by the operating system.

### State Management

The component supports both controlled and uncontrolled modes:

- **Controlled**: Pass `value` and `onChange` props
- **Uncontrolled**: Pass `defaultValue` and optionally `onChange`

Internal state tracking ensures `data-filled` attribute updates correctly for CSS targeting.

### Component Structure

```
dropdown-field (wrapper)
├── dropdown-label-row
│   ├── dropdown-label
│   └── dropdown-required (if required)
├── dropdown-helper (if helperText provided)
├── dropdown-control-wrapper
│   ├── form-select (native select element)
│   │   └── option elements
│   └── dropdown-icon (custom chevron)
└── dropdown-message (if validation state set)
    ├── dropdown-message__icon
    └── message text
```

## Testing guidance

### Unit tests should assert:

- `aria-describedby` links to helper/validation text when present
- `role` / `aria-live` behavior for validation messages
- `data-filled` toggles correctly for controlled/uncontrolled variants
- `data-status` presence when `validationState` set
- Options render correctly from `options` prop
- Placeholder option is disabled when value is selected
- onChange handler is called with correct values

### Visual regression tests:

- Focus state (both themes)
- Success validation state
- Error validation state
- Disabled state with options
- Border radius differences between themes (NTG sharp, Central rounded)

### Accessibility tests:

- Keyboard navigation works (Tab, Arrow keys, Enter/Space)
- Screen reader announces label, helper text, and validation messages
- ARIA attributes are correctly applied

## Example usage

### Basic dropdown with options array

```tsx
<Dropdown
  label="Select your region"
  helperText="Choose the region closest to you"
  options={[
    { value: "darwin", label: "Darwin" },
    { value: "alice-springs", label: "Alice Springs" },
    { value: "katharine", label: "Katherine" },
    { value: "tennant-creek", label: "Tennant Creek" },
  ]}
  placeholder="Select a region"
/>
```

### Controlled dropdown with validation

```tsx
const [region, setRegion] = useState("");
const [error, setError] = useState("");

const handleChange = (e) => {
  const value = e.target.value;
  setRegion(value);

  if (!value) {
    setError("Please select a region");
  } else {
    setError("");
  }
};

<Dropdown
  label="Region"
  required
  value={region}
  onChange={handleChange}
  validationState={error ? "error" : undefined}
  validationMessage={error}
  options={[
    { value: "darwin", label: "Darwin" },
    { value: "alice-springs", label: "Alice Springs" },
  ]}
/>;
```

### Uncontrolled with default value

```tsx
<Dropdown
  label="Preferred contact method"
  defaultValue="email"
  options={[
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "mail", label: "Postal Mail" },
  ]}
/>
```

### With custom children (JSX options)

```tsx
<Dropdown label="Service type">
  <option value="">Select a service</option>
  <optgroup label="Online Services">
    <option value="license-renewal">License Renewal</option>
    <option value="registration">Vehicle Registration</option>
  </optgroup>
  <optgroup label="In-Person Services">
    <option value="appointment">Book Appointment</option>
    <option value="walk-in">Walk-in Service</option>
  </optgroup>
</Dropdown>
```

### Different sizes

```tsx
<Dropdown label="Small" size="sm" options={options} />
<Dropdown label="Default" options={options} />
<Dropdown label="Large" size="lg" options={options} />
```

## Bootstrap migration notes

For developers migrating from Bootstrap:

### Bootstrap code:

```html
<div class="mb-3">
  <label for="region" class="form-label">Region</label>
  <select class="form-select" id="region">
    <option selected>Select a region</option>
    <option value="darwin">Darwin</option>
    <option value="alice-springs">Alice Springs</option>
  </select>
</div>
```

### NT Design System equivalent:

```tsx
<Dropdown
  label="Region"
  options={[
    { value: "darwin", label: "Darwin" },
    { value: "alice-springs", label: "Alice Springs" },
  ]}
  placeholder="Select a region"
/>
```

### Key differences:

1. Automatic wrapper structure (`dropdown-field` replaces manual `mb-3` div)
2. Label automatically connected via `htmlFor`/`id`
3. Options passed as prop array or JSX children
4. All spacing uses design tokens instead of Bootstrap spacing utilities
5. Validation and helper text built-in
6. Theme-aware focus and borders

## Notes for contributors

- Add any new visual tokens to `@ntgovernment/web-design-tokens` and reference them in component CSS via semantic variable names.
- When adding stories, use realistic government service examples (see `CONTENT_STANDARDS.md`).
- Update `scripts/build-theme-bundles.js` if you add a new per-theme override file.
- Ensure focus styles are tested in both themes (NTG orange, Central green).
- Keep the component Bootstrap-compatible by maintaining the `form-select` class.

---

Component source: [src/components/Dropdown/Dropdown.tsx](Dropdown.tsx)  
Styles: [Dropdown.css](Dropdown.css) | [Dropdown-ntg.css](Dropdown-ntg.css) | [Dropdown-central.css](Dropdown-central.css)

# Dropdown Component - CSS Variables

This document lists all CSS custom properties (variables) used by the Dropdown component.

## Token Categories

### Colors

#### Background Colors

- `--clr-bg-default` - Default background color (white)
- `--clr-bg-shade-alt` - Disabled state background color (#e7e7ea)

#### Border Colors

- `--clr-border-subtle` - Subtle border for default state (#d3d3d7)
- `--clr-border-strong-02` - Strong border for hover state (#1f1e27)
- `--clr-focus-focus` - Focus outline color (theme-specific: NTG orange, Central green)

#### Status Colors

- `--clr-status-success` - Success validation color (#107810)
- `--clr-status-danger` - Error validation color (#a60f37)

#### Text Colors

- `--clr-text-default` - Default text color (#1f1e27)
- `--clr-text-muted` - Muted text for helper, disabled, placeholder (#666774)

### Spacing

- `--sp-xxs` (4px) - Extra extra small spacing
- `--sp-xs` (8px) - Extra small spacing / gaps between elements
- `--sp-sm` (12px) - Small padding (used in small size variant)
- `--sp-md` (16px) - Medium padding (default padding)
- `--sp-lg` (20px) - Large spacing / icon size
- `--sp-xl` (24px) - Extra large padding (used in large size variant)
- `--sp-xxxl` (48px) - Minimum height for default dropdown

### Typography

#### Font Sizes

- `--type-desktop-body-default-size` (16px) - Default font size
- `--type-body-sm-size` (14px) - Small text size (helper, validation messages, small variant)
- `--type-desktop-h6-size` (16px) - Large variant font size

#### Line Heights

- `--type-body-default-lh` (24px) - Default line height
- `--type-body-sm-lh` (20px) - Small text line height

### Borders

- `--border-width-md` (1px) - Standard border width
- `--border-width-xl` (4px) - Focus outline width

### Border Radius (Theme-Specific)

#### NTG Theme

- `--ntg-radii-none` (0px) - No border radius for sharp corners

#### Central Theme

- `--central-radii-sm` (4px) - Small border radius for rounded corners

### Shadows (Theme-Specific)

#### NTG Theme

- `--shadow-focus-ntg` - Focus box shadow (0px 0px 0px 4px #ec8c58ff)

#### Central Theme

- `--shadow-focus-central` - Focus box shadow (0px 0px 0px 4px #6ab06aff)

## CSS Class Variables Reference

### Component Structure Classes

```css
.dropdown-field              /* Main wrapper container */
.dropdown-label-row         /* Label and required indicator container */
.dropdown-label             /* Label text */
.dropdown-required          /* Required indicator text */
.dropdown-helper            /* Helper text below label */
.dropdown-control-wrapper   /* Select element wrapper (for positioning icon) */
.dropdown-icon              /* Custom chevron icon */
.dropdown-message           /* Validation message container */
.dropdown-message--success  /* Success message variant */
.dropdown-message--error    /* Error message variant */
.dropdown-message__icon     /* Validation message icon */
```

### Bootstrap Classes

```css
.form-select           /* Main select element class */
.form-select-sm       /* Small size variant */
.form-select-lg       /* Large size variant */
.is-valid             /* Bootstrap success state (alternative to data-status) */
.is-invalid           /* Bootstrap error state (alternative to data-status) */
```

### Data Attributes

```css
[data-status="success"]     /* Applied when validationState="success" */
[data-status="error"]       /* Applied when validationState="error" */
[data-filled="true"]        /* Applied when an option is selected */
[data-disabled="true"]      /* Applied when disabled prop is true */
[data-active="true"]        /* Applied to show active/focused state (for demos) */
```

## Size Variants

### Small (sm)

- Min height: `calc(var(--sp-xxxl) - var(--sp-md))` = 32px
- Font size: `var(--type-body-sm-size)` = 14px
- Padding: `var(--sp-sm)` = 12px

### Default

- Min height: `var(--sp-xxxl)` = 48px
- Font size: `var(--type-desktop-body-default-size)` = 16px
- Padding: `var(--sp-md)` = 16px

### Large (lg)

- Min height: `calc(var(--sp-xxxl) + var(--sp-md))` = 64px
- Font size: `var(--type-desktop-h6-size)` = 16px
- Padding: `var(--sp-xl)` = 24px

## State-Specific Styling

### Default State

```css
background: var(--clr-bg-default);
outline: 1px var(--clr-border-strong-02) solid;
color: var(--clr-text-default);
```

### Hover State

```css
outline-color: var(--clr-border-strong-02);
```

### Focus State

```css
outline-color: var(--clr-focus-focus);
box-shadow: 0 0 0 calc(var(--sp-xs) / 2) var(--clr-focus-focus);
/* Theme-specific shadow applied via theme CSS files */
```

### Success State

```css
outline-color: var(--clr-status-success);
```

### Error State

```css
outline-color: var(--clr-status-danger);
```

### Disabled State

```css
background: var(--clr-bg-shade-alt);
color: var(--clr-text-muted);
outline-color: var(--clr-border-subtle);
cursor: not-allowed;
pointer-events: none;
```

## Override Examples

### Custom focus color for specific dropdown

```css
.my-custom-dropdown .form-select:focus {
  --clr-focus-focus: #0066cc;
}
```

### Custom height

```css
.tall-dropdown .form-select {
  min-height: 60px;
}
```

### Custom border radius (override theme)

```css
.rounded-dropdown .form-select {
  border-radius: 8px !important;
}
```

## Theme Switching

The component responds to theme changes automatically when using the theme CSS files:

```html
<!-- Load NTG theme -->
<link rel="stylesheet" href="theme-ntg.css" />

<!-- OR Load Central theme -->
<link rel="stylesheet" href="theme-central.css" />
```

Alternatively, use data attributes:

```html
<body data-theme="ntg">
  <!-- Dropdown will use NTG theme styles -->
</body>

<body data-theme="central">
  <!-- Dropdown will use Central theme styles -->
</body>
```

## Browser-Specific Notes

### Option Styling Limitations

Due to browser security and rendering constraints, dropdown options have limited styling capabilities:

- **Chrome/Edge**: Limited support for `background-color`, `color`
- **Firefox**: Better support for option styling
- **Safari**: Minimal support; most styles ignored
- **All browsers**: Option appearance largely controlled by OS

For advanced custom dropdown experiences, consider using a custom component library (e.g., React Select) instead of native `<select>`.

## Tokens Source

All design tokens are defined in [`@ntgovernment/web-design-tokens`](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens):

- `@ntgovernment/web-design-tokens/css/theme-ntg-bundled` - NTG theme (self-contained, includes all token layers)
- `@ntgovernment/web-design-tokens/css/theme-central-bundled` - Central theme (self-contained, includes all token layers)

To modify token values, raise a PR in the `web-design-tokens` repository then bump the version in `package.json`.

```

## Related Documentation

- [DROPDOWN.md](DROPDOWN.md) - Component documentation
- [Dropdown.stories.tsx](Dropdown.stories.tsx) - Storybook stories
- [CONTENT_STANDARDS.md](../../CONTENT_STANDARDS.md) - Content guidelines
- [THEMES.md](../../themes/THEMES.md) - Theme system overview
```
