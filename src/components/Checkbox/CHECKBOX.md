# Checkbox Component

A customizable checkbox component for selecting one or more options from a list, with full theme support, validation states, and accessibility features.

## Overview

Often used in forms, a checkbox allows users to select one or more options from a list. It can also be used to toggle one option on or off, for example to give consent to receive email communications from a website.

## Features

- Individual checkbox component
- Checkbox group component for related options
- Required field indication
- Helper text support
- Success and error validation states
- Full TypeScript support
- Theme-specific styling (NTG and Central themes)
- Accessible HTML with ARIA attributes
- Keyboard navigation support

## Usage

### Basic Checkbox

```tsx
import { Checkbox } from "@ntgovernment/web-design-system";

<Checkbox label="I agree to the terms and conditions" />;
```

### Checkbox with Pre-selected State

```tsx
<Checkbox label="Subscribe to newsletter" defaultChecked />
```

### Checkbox Group

```tsx
import { Checkbox, CheckboxGroup } from "@ntgovernment/web-design-system";

<CheckboxGroup
  label="Select your preferred contact methods"
  helperText="Choose one or more options"
>
  <Checkbox label="Email" />
  <Checkbox label="Phone" />
  <Checkbox label="SMS" />
</CheckboxGroup>;
```

### Required Checkbox Group

```tsx
<CheckboxGroup
  label="Terms and Conditions"
  helperText="Please review and accept the following"
  required
>
  <Checkbox label="I agree to the privacy policy" />
  <Checkbox label="I agree to receive communications" />
</CheckboxGroup>
```

### With Validation States

```tsx
// Success state
<Checkbox
  label="Email notifications"
  validationState="success"
  validationMessage="Preferences saved successfully"
  defaultChecked
/>

// Error state - Individual checkbox
<Checkbox
  label="Terms and conditions"
  validationState="error"
  validationMessage="You must agree to the terms and conditions"
/>

// Error state - Checkbox group
<CheckboxGroup
  label="Required selections"
  helperText="Select at least one option"
  required
  validationState="error"
  validationMessage="Please select at least one contact method"
>
  <Checkbox label="Email" />
  <Checkbox label="Phone" />
  <Checkbox label="SMS" />
</CheckboxGroup>
```

### Disabled State

```tsx
<Checkbox label="This option is unavailable" disabled />
<Checkbox label="Pre-selected and disabled" defaultChecked disabled />
```

### Controlled Component

```tsx
const [isChecked, setIsChecked] = useState(false);

<Checkbox
  label="Marketing communications"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>;
```

## When to Use

### Do Use Checkboxes When:

- **Multiple selections**: Users can select one or more options from a list
- **Toggle options**: Users need to turn a single option on or off (e.g., consent checkboxes)
- **Optional selections**: None of the options are required to be selected
- **Independent choices**: Each option is independent from the others

### Common Use Cases:

- Form preferences and settings
- Consent and agreement statements
- Filter selections
- Multi-select lists
- Feature toggles

## How to Use

### Best Practices

✅ **Do:**

- Always use a clear, descriptive label with each checkbox
- Use a group label when presenting multiple related checkboxes
- Position the checkbox to the left of its label only
- Align checkboxes vertically in a group
- Order checkboxes alphabetically or from most-to-least common
- Include a 'None' or 'N/A' option if it's possible that none apply
- Use helper text to clarify that multiple selections are allowed
- Make error messages specific and actionable
- Keep helper text short and concise

❌ **Don't:**

- Use checkboxes when only one option can be selected (use radio buttons instead)
- Pre-select checkboxes by default (users may miss the question or submit wrong answers)
- Display checkboxes horizontally in a group
- Use the disabled state unless absolutely necessary
- Assume users know the difference between checkboxes and radio buttons
- Use long paragraphs or bullet points in helper text
- Use generic error messages like "Error" or "Required field"

### Accessibility Guidelines

- Each checkbox has a clear, descriptive label
- Checkbox groups use `<fieldset>` and `<legend>` elements
- Required fields are indicated both visually and with `aria-required`
- Error states use `aria-invalid` and `role="alert"`
- Validation messages are associated with inputs using `aria-describedby`
- Focus states are clearly visible with theme-appropriate colors
- Disabled checkboxes cannot receive focus
- Keyboard navigation is fully supported (Space to toggle, Tab to navigate)

## Props

### Checkbox Component

| Prop                | Type                   | Default     | Description                                            |
| ------------------- | ---------------------- | ----------- | ------------------------------------------------------ |
| `label`             | `string`               | `undefined` | Checkbox label text                                    |
| `validationState`   | `'success' \| 'error'` | `undefined` | Validation state for the checkbox                      |
| `validationMessage` | `string`               | `undefined` | Validation message shown below the checkbox            |
| `wrapperClassName`  | `string`               | `undefined` | Additional CSS classes for the wrapper                 |
| `id`                | `string`               | `auto`      | HTML id attribute (auto-generated if not provided)     |
| `disabled`          | `boolean`              | `false`     | Disables the checkbox                                  |
| `checked`           | `boolean`              | `undefined` | Controlled checked state                               |
| `defaultChecked`    | `boolean`              | `undefined` | Default checked state (uncontrolled)                   |
| `onChange`          | `function`             | `undefined` | Change handler function                                |
| `required`          | `boolean`              | `false`     | Marks the checkbox as required                         |
| ...props            | `HTMLInputAttributes`  | -           | All standard HTML input attributes (except type, size) |

### CheckboxGroup Component

| Prop                | Type                   | Default        | Description                                        |
| ------------------- | ---------------------- | -------------- | -------------------------------------------------- |
| `label`             | `string`               | `undefined`    | Group label shown above the checkboxes             |
| `helperText`        | `string`               | `undefined`    | Helper text shown under the group label            |
| `requiredIndicator` | `string`               | `"(Required)"` | Text shown when the group is required              |
| `required`          | `boolean`              | `false`        | Whether the group is required                      |
| `validationState`   | `'success' \| 'error'` | `undefined`    | Validation state for the group                     |
| `validationMessage` | `string`               | `undefined`    | Validation message shown below the group           |
| `children`          | `React.ReactNode`      | `required`     | Checkbox elements to render in the group           |
| `wrapperClassName`  | `string`               | `undefined`    | Additional CSS classes for the wrapper             |
| `id`                | `string`               | `auto`         | HTML id attribute (auto-generated if not provided) |

## Theming

The Checkbox component uses Bootstrap 5.3 classes and theme-specific CSS files for styling:

- **Common styles**: `Checkbox.css` - Shared styles for all themes
- **NTG theme**: `Checkbox-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `Checkbox-central.css` - NTG Central theme overrides

### Theme Differences

| Feature                 | NTG Theme            | Central Theme        | Implementation Details                  |
| ----------------------- | -------------------- | -------------------- | --------------------------------------- |
| Font Family             | Lato                 | Roboto               | Via theme tokens                        |
| Border Radius           | 4px                  | 4px                  | `var(--radii-sm)`                       |
| Focus Outline           | Orange (#ec8c58)     | Green (#6ab06a)      | `var(--clr-focus-focus)` with 4px width |
| Checkbox Size           | 24px × 24px          | 24px × 24px          | `1.5rem` enforced with `!important`     |
| Border Width            | 1.5px                | 1.5px                | Fixed value                             |
| Border Color (Default)  | #1F1E27              | #102040              | `var(--clr-border-strong-02)`           |
| Border Color (Checked)  | #1F1E27 (same)       | #102040 (same)       | `var(--clr-border-strong-02)`           |
| Checked Fill            | #1F1F5F (blue)       | #102040 (blue)       | `var(--clr-link-default)`               |
| Hover Background        | #E7E7EA (light gray) | #ECF0F0 (light gray) | `var(--clr-bg-shade-alt)`               |
| Label Padding           | 4px 8px              | 4px 8px              | `var(--sp-xxs) var(--sp-xs)`            |
| Gap (checkbox to label) | 8px                  | 8px                  | `var(--sp-xs)`                          |

### Implementation Notes for Developers

- **Border colors remain consistent**: Both unchecked and checked states use `var(--clr-border-strong-02)` to maintain visual consistency
- **Focus outline uses theme color**: Orange for NTG, green for Central via `var(--clr-focus-focus)`
- **All critical styles use `!important`**: To override Bootstrap defaults and ensure design system consistency
- **Checkbox fill on checked state**: Uses `var(--clr-link-default)` which differs between themes
- **Hover state**: Applies light background fill (`var(--clr-bg-shade-alt)`) on unchecked state only
- **Error state persistence**: Error border color (`var(--clr-status-danger)`) is maintained even when disabled
- **Checkmark icon size**: 24px to match checkbox dimensions

Both themes apply to the same component, with theme-specific tokens automatically loaded based on the active theme.

### Using CSS Variables in Your Theme

See [Checkbox/CSS_VARIABLES.md](CSS_VARIABLES.md) for detailed information about customizing Checkbox styles using CSS variables.

## Examples

### Online Service Application Form

```tsx
<CheckboxGroup
  label="Service Options"
  helperText="Select all services you wish to apply for"
  required
>
  <Checkbox label="Business registration" />
  <Checkbox label="Tax file number" />
  <Checkbox label="Working with children check" />
  <Checkbox label="Food handling license" />
</CheckboxGroup>
```

### Newsletter Preferences

```tsx
<CheckboxGroup
  label="Email Preferences"
  helperText="Choose the types of emails you'd like to receive"
>
  <Checkbox label="Weekly newsletter" />
  <Checkbox label="Event notifications" />
  <Checkbox label="Policy updates" />
  <Checkbox label="Emergency alerts" defaultChecked />
</CheckboxGroup>
```

### Contact Preferences with Validation

```tsx
const [selectedMethods, setSelectedMethods] = useState({
  email: false,
  phone: false,
  sms: false,
});

const hasSelection = Object.values(selectedMethods).some((v) => v);

<CheckboxGroup
  label="Preferred Contact Methods"
  helperText="Select at least one way we can contact you"
  required
  validationState={hasSelection ? undefined : "error"}
  validationMessage={
    hasSelection ? undefined : "Please select at least one contact method"
  }
>
  <Checkbox
    label="Email"
    checked={selectedMethods.email}
    onChange={(e) =>
      setSelectedMethods({ ...selectedMethods, email: e.target.checked })
    }
  />
  <Checkbox
    label="Phone"
    checked={selectedMethods.phone}
    onChange={(e) =>
      setSelectedMethods({ ...selectedMethods, phone: e.target.checked })
    }
  />
  <Checkbox
    label="SMS"
    checked={selectedMethods.sms}
    onChange={(e) =>
      setSelectedMethods({ ...selectedMethods, sms: e.target.checked })
    }
  />
</CheckboxGroup>;
```

### Terms and Conditions

```tsx
<Checkbox
  label="I have read and agree to the terms and conditions"
  required
  validationState={agreed ? "success" : "error"}
  validationMessage={
    agreed ? undefined : "You must agree to the terms to continue"
  }
/>
```

### Form with Multiple Checkbox Groups

```tsx
<form>
  <CheckboxGroup
    label="Areas of Interest"
    helperText="Select all topics you'd like to receive information about"
  >
    <Checkbox label="Health services" />
    <Checkbox label="Education programs" />
    <Checkbox label="Community events" />
    <Checkbox label="Business support" />
  </CheckboxGroup>

  <CheckboxGroup label="Communication Preferences" required>
    <Checkbox label="Email updates" />
    <Checkbox label="Phone notifications" />
  </CheckboxGroup>

  <Checkbox
    label="I consent to the collection and use of my personal information"
    required
  />
</form>
```

## Keyboard Navigation

The Checkbox component supports standard keyboard interaction:

- **Tab**: Move focus to/from the checkbox
- **Space**: Toggle the checkbox checked state
- **Shift + Tab**: Move focus backwards

## Related Components

- [Input](../Input/INPUT.md) - For text input fields
- [Dropdown](../Dropdown/DROPDOWN.md) - For single selection from a list
- [Button](../Button/BUTTON.md) - For form submission

## For developers & coding agents 📣

Quick notes:

- Validation messages include a decorative FontAwesome light icon (`fa-light fa-circle-check` for success, `fa-light fa-circle-exclamation` for error) inserted before the message text.
- Validation icons are added in `src/components/Checkbox/Checkbox.tsx` using the `Icon` component — change the icon class there to update the visuals.

Prop JSON (machine-friendly example):

```json
{
  "label": "string",
  "validationState": "success|error",
  "validationMessage": "string",
  "disabled": "boolean",
  "checked": "boolean"
}
```

Unit-test example (checks icon presence):

```ts
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

test('renders error icon with error message', () => {
  render(<Checkbox label="T" validationState="error" validationMessage="Required" />);
  expect(screen.getByRole('alert')).toHaveTextContent('Required');
  expect(document.querySelector('.fa-light.fa-circle-exclamation')).toBeTruthy();
});
```

PR checklist

1. Add/modify story for visual verification.
2. Add unit tests for validation messaging and icon presence.
3. Update documentation and token references if colours change.
4. Run `npm run build` and `npm run storybook` locally.

## Storybook

View live examples and interact with the Checkbox component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > Checkbox** to see all variants and configurations.

## TypeScript

The Checkbox component is fully typed with TypeScript. Import the types:

```tsx
import {
  Checkbox,
  CheckboxGroup,
  CheckboxProps,
  CheckboxGroupProps,
} from "@ntgovernment/web-design-system";

// Use CheckboxProps for custom wrappers or extensions
const MyCustomCheckbox: React.FC<CheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};
```

## Browser Support

The Checkbox component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3 must be loaded for the component to style correctly
- The component uses native HTML checkbox inputs with custom styling
- Custom CSS classes can be added via the `className` prop
- The component extends all native HTML input attributes (except `type` and `size`)
- Checkbox groups use semantic HTML (`<fieldset>` and `<legend>`) for better accessibility
# Checkbox CSS Variables

This document provides details about the CSS variables used in the Checkbox component, allowing you to customize the styling to fit your theme or brand.

## Overview

The Checkbox component uses CSS custom properties (variables) from the NT Government Design System token system. These variables ensure consistency across themes while allowing for customization.

## Critical Implementation Notes

### For Developers and Coding Agents

⚠️ **Important**:

- **Checkbox dimensions**: Fixed at **24px × 24px** (1.5rem) with `!important` flags
- **Border consistency**: Both checked and unchecked states use `var(--clr-border-strong-02)` - NOT separate colors
- **Checked state fill**: Uses `var(--clr-link-default)` for the background, keeping the same border color
- **Focus outline**: Always uses theme-specific `var(--clr-focus-focus)` (orange for NTG, green for Central)
- **Hover state**: Applies `var(--clr-bg-shade-alt)` background only on unchecked checkboxes
- **Label padding**: 4px 8px (`var(--sp-xxs) var(--sp-xs)`) enforced with `!important`
- **Error persistence**: Error border color persists even when checkbox is disabled
- **All critical styles use `!important`**: This overrides Bootstrap defaults - do not remove these flags

### Design System Alignment

The checkbox follows these Figma specifications:

- Size: 24px × 24px
- Border width: 1.5px
- Border radius: ~5px (via `--radii-sm` token = 4px)
- Default border: Uses text color token (`--clr-border-strong-02`)
- Checked border: Same as default (not filled border)
- Checked background: Blue (`--clr-link-default`)
- Focus outline: 4px theme color
- Hover: Light gray fill on unchecked state

## CSS Variable Categories

### Color Variables

#### Background Colors

| Variable             | Token Reference    | NTG Value | Central Value | Description                     | State           |
| -------------------- | ------------------ | --------- | ------------- | ------------------------------- | --------------- |
| `--clr-bg-default`   | `clr.bg.default`   | `#ffffff` | `#ffffff`     | Default background              | Default         |
| `--clr-bg-shade`     | `clr.bg.shade`     | `#f5f5f7` | `#f5f5f5`     | Read-only background (not used) | N/A             |
| `--clr-bg-shade-alt` | `clr.bg.shade-alt` | `#e7e7ea` | `#ecf0f0`     | Hover & disabled background     | Hover, Disabled |

#### Border Colors

| Variable                 | Token Reference        | NTG Value | Central Value | Description                           | State                            |
| ------------------------ | ---------------------- | --------- | ------------- | ------------------------------------- | -------------------------------- |
| `--clr-border-strong-02` | `clr.border.strong-02` | `#1f1e27` | `#102040`     | Default, hover, checked, focus border | All states except disabled/error |
| `--clr-border-subtle`    | `clr.border.subtle`    | `#d3d3d7` | `#d0e0e0`     | Disabled border color                 | Disabled                         |

#### Text Colors

| Variable             | Token Reference    | NTG Value | Central Value | Description                 |
| -------------------- | ------------------ | --------- | ------------- | --------------------------- |
| `--clr-text-default` | `clr.text.default` | `#1f1e27` | `#102040`     | Label text color            |
| `--clr-text-muted`   | `clr.text.muted`   | `#666774` | `#384560`     | Helper text, disabled state |

#### Status Colors

| Variable               | Token Reference      | NTG Value | Central Value | Description                     |
| ---------------------- | -------------------- | --------- | ------------- | ------------------------------- |
| `--clr-status-danger`  | `clr.status.danger`  | `#a60f37` | `#a60f37`     | Error state, required indicator |
| `--clr-status-success` | `clr.status.success` | `#107810` | `#107810`     | Success state                   |

#### Interactive Colors

| Variable             | Token Reference    | NTG Value | Central Value | Description              |
| -------------------- | ------------------ | --------- | ------------- | ------------------------ |
| `--clr-link-default` | `clr.link.default` | `#1f1f5f` | `#102040`     | Checked background color |
| `--clr-focus-focus`  | `clr.focus.focus`  | `#ec8c58` | `#6ab06a`     | Focus outline color      |

### Spacing Variables

| Variable   | Token Reference | Value  | Description                    | Usage in Component                     |
| ---------- | --------------- | ------ | ------------------------------ | -------------------------------------- |
| `--sp-xs`  | `sp.xs`         | `8px`  | Gap between checkbox and label | `.form-check` gap                      |
| `--sp-xxs` | `sp.xxs`        | `4px`  | Vertical padding on label      | `.form-check-label` padding-top/bottom |
| `--sp-md`  | `sp.md`         | `16px` | Not currently used in Checkbox | N/A                                    |
| `--sp-lg`  | `sp.lg`         | `20px` | Not currently used in Checkbox | N/A                                    |

### Sizing Variables

| Variable | Value  | Description                    | Enforced With |
| -------- | ------ | ------------------------------ | ------------- |
| `1.5rem` | `24px` | Checkbox width and height      | `!important`  |
| `1.5rem` | `24px` | Checkmark icon background-size | Standard      |

### Border & Radius Variables

| Variable       | Token Reference | NTG Value | Central Value | Description                 | Notes               |
| -------------- | --------------- | --------- | ------------- | --------------------------- | ------------------- |
| Fixed `1.5px`  | N/A             | `1.5px`   | `1.5px`       | Checkbox border width       | Not a variable      |
| `--radii-sm`   | `radii.sm`      | `4px`     | `4px`         | Checkbox border radius      | Used in both themes |
| `--radii-none` | `radii.none`    | `0px`     | `0px`         | No border radius (fallback) | Not actively used   |

### Typography Variables

#### Font Sizes

| Variable                           | Token Reference                  | Value  | Description           |
| ---------------------------------- | -------------------------------- | ------ | --------------------- |
| `--type-desktop-body-default-size` | `type.desktop.body-default.size` | `16px` | Label font size       |
| `--type-body-sm-size`              | `type.desktop.body-sm.size`      | `14px` | Helper text, messages |
| `--type-mobile-body-default-size`  | `type.mobile.body-default.size`  | `16px` | Mobile label size     |
| `--type-mobile-body-sm-size`       | `type.mobile.body-sm.size`       | `14px` | Mobile helper text    |

#### Line Heights

| Variable                 | Token Reference                | Value  | Description             |
| ------------------------ | ------------------------------ | ------ | ----------------------- |
| `--type-body-default-lh` | `type.desktop.body-default.lh` | `24px` | Label line height       |
| `--type-body-sm-lh`      | `type.desktop.body-sm.lh`      | `20px` | Helper text line height |

### Shadow Variables

| Variable                 | Token Reference        | NTG Value                         | Central Value                      | Description                        |
| ------------------------ | ---------------------- | --------------------------------- | ---------------------------------- | ---------------------------------- |
| `--shadow-focus-ntg`     | `shadow.focus-ntg`     | `0 0 0 4px rgba(236, 140, 88, 1)` | N/A                                | NTG theme focus shadow (orange)    |
| `--shadow-focus-central` | `shadow.focus-central` | N/A                               | `0 0 0 4px rgba(106, 176, 106, 1)` | Central theme focus shadow (green) |

## Customizing Checkbox Styles

### Method 1: Override CSS Variables

You can override CSS variables at different levels:

#### Global Override (affects all checkboxes)

```css
:root {
  --clr-link-default: #0066cc; /* Custom checked color */
  --clr-focus-focus: #ff6600; /* Custom focus color */
  --radii-sm: 8px; /* More rounded corners */
}
```

#### Component-Specific Override

```css
.my-custom-checkbox .form-check-input {
  --clr-link-default: #0066cc;
  width: 24px; /* Smaller checkbox */
  height: 24px;
}
```

#### Theme-Specific Override

```css
[data-theme="ntg"] .form-check-input {
  --radii-sm: 0px; /* Square checkboxes for NTG */
}

[data-theme="central"] .form-check-input {
  --radii-sm: 50%; /* Circular checkboxes for Central */
}
```

### Method 2: Direct CSS Overrides

For more specific customization, you can target the component classes directly:

```css
/* Custom checkbox size */
.my-form .form-check-input {
  width: 24px;
  height: 24px;
}

/* Custom checked state */
.my-form .form-check-input:checked {
  background-color: #0066cc;
  border-color: #0066cc;
}

/* Custom focus state */
.my-form .form-check-input:focus {
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3);
}

/* Custom label styling */
.my-form .form-check-label {
  font-weight: 600;
  color: #333;
}
```

## Component Structure & Classes

Understanding the component structure helps in targeting specific elements:

### Individual Checkbox Structure

```html
<div class="checkbox-wrapper">
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="..." />
    <label class="form-check-label" for="...">Label text</label>
  </div>
  <div class="checkbox-message checkbox-message--error">Error message</div>
</div>
```

### Checkbox Group Structure

```html
<fieldset class="checkbox-group">
  <legend class="checkbox-group-legend">
    <div class="checkbox-group-label-row">
      <span class="checkbox-group-label">Group Label</span>
      <span class="checkbox-group-required">(Required)</span>
    </div>
    <div class="checkbox-group-helper">Helper text</div>
  </legend>
  <div class="checkbox-group-items">
    <!-- Individual checkboxes here -->
  </div>
  <div class="checkbox-group-message checkbox-group-message--error">
    Group error message
  </div>
</fieldset>
```

## Practical Examples

### Example 1: Larger Checkboxes

```css
.large-checkboxes .form-check-input {
  width: 40px;
  height: 40px;
}

.large-checkboxes .form-check {
  gap: 12px; /* Increase gap */
}
```

### Example 2: Custom Brand Colors

```css
.brand-checkboxes {
  --clr-link-default: #8b0000; /* Dark red */
  --clr-focus-focus: #ffa500; /* Orange focus */
  --clr-border-strong-02: #333333; /* Darker border */
}
```

### Example 3: Minimal Style

```css
.minimal-checkboxes .form-check-input {
  border-width: 1px;
  border-radius: 2px;
}

.minimal-checkboxes .form-check-label {
  font-weight: 400;
  color: #666;
}
```

### Example 4: High Contrast Mode

```css
.high-contrast .form-check-input {
  border-width: 2px;
  border-color: #000;
}

.high-contrast .form-check-input:checked {
  background-color: #000;
  border-color: #000;
}

.high-contrast .form-check-label {
  color: #000;
  font-weight: 700;
}
```

## Data Attributes

The component uses data attributes for state management:

| Attribute     | Values                 | Description                         |
| ------------- | ---------------------- | ----------------------------------- |
| `data-status` | `"success"`, `"error"` | Validation state                    |
| `data-theme`  | `"ntg"`, `"central"`   | Active theme (on body or container) |

## Browser Compatibility

All CSS variables used are supported in:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+
- All modern mobile browsers

For older browsers, consider providing fallback values:

```css
.form-check-input {
  background-color: #ffffff; /* Fallback */
  background-color: var(--clr-bg-default, #ffffff); /* With variable */
}
```

## Related Documentation

- [Checkbox Component Documentation](CHECKBOX.md) - Main component documentation
- [Theme System](../../themes/THEMES.md) - Overview of the theme system
- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md) - Complete token reference
- [CSS Architecture](../../FEATURES.md) - CSS structure and methodology

## Questions or Issues?

For questions about CSS variables or customization:

1. Check the [CONTRIBUTING.md](../../CONTRIBUTING.md) guide
2. Review existing component implementations
3. Consult the design token system documentation
4. Open an issue for clarification
