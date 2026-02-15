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
