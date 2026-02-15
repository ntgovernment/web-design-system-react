# Radio Button Component

A customizable radio button component for selecting one option from a mutually exclusive list, with full theme support, validation states, and accessibility features.

## Overview

A round button for forms or surveys that allows a user to select only one option from a list. Radio buttons can only be used in a group of two or more options where only one selection is permitted.

## Features

- Individual radio button component
- Radio button group component for mutually exclusive options
- Required field indication
- Helper text support
- Success and error validation states
- Full TypeScript support
- Theme-specific styling (NTG and Central themes)
- Accessible HTML with ARIA attributes
- Keyboard navigation support
- Automatic name attribute management in groups

## Usage

### Basic Radio Button Group

```tsx
import { Radio, RadioGroup } from "@ntgovernment/web-design-system";

<RadioGroup label="Do you live in the Northern Territory?" name="residence">
  <Radio label="Yes, I live in the Northern Territory" value="yes" />
  <Radio label="No, I do not live in the Northern Territory" value="no" />
</RadioGroup>;
```

### Radio Group with Helper Text

```tsx
<RadioGroup
  label="Select your preferred contact method"
  helperText="Choose only one option"
  name="contact-method"
>
  <Radio label="Email" value="email" />
  <Radio label="Phone" value="phone" />
  <Radio label="SMS" value="sms" />
</RadioGroup>
```

### Required Radio Group

```tsx
<RadioGroup
  label="Application Type"
  helperText="Please select the type of application you wish to submit"
  required
  name="application-type"
>
  <Radio label="New application" value="new" />
  <Radio label="Renewal" value="renewal" />
  <Radio label="Amendment" value="amendment" />
</RadioGroup>
```

### Radio Group with Pre-selected Value

```tsx
<RadioGroup
  label="Email Frequency"
  helperText="How often would you like to receive updates?"
  name="frequency"
>
  <Radio label="Daily" value="daily" />
  <Radio label="Weekly" value="weekly" defaultChecked />
  <Radio label="Monthly" value="monthly" />
</RadioGroup>
```

### With Validation States

```tsx
// Error state
<RadioGroup
  label="Payment Method"
  helperText="Select your preferred payment method"
  required
  validationState="error"
  validationMessage="Please select a payment method to continue"
  name="payment"
>
  <Radio label="Credit card" value="card" />
  <Radio label="Direct debit" value="debit" />
  <Radio label="PayPal" value="paypal" />
</RadioGroup>

// Success state
<RadioGroup
  label="Delivery Method"
  validationState="success"
  validationMessage="Delivery preference saved successfully"
  name="delivery"
>
  <Radio label="Standard delivery" value="standard" defaultChecked />
  <Radio label="Express delivery" value="express" />
  <Radio label="Pick up" value="pickup" />
</RadioGroup>
```

### Disabled State

```tsx
<RadioGroup label="Service Status" name="status">
  <Radio label="Active" value="active" defaultChecked />
  <Radio label="Inactive" value="inactive" disabled />
  <Radio label="Pending" value="pending" />
</RadioGroup>
```

### Controlled Component

```tsx
const [selected, setSelected] = useState("email");

<RadioGroup label="Notification Method" name="notifications">
  <Radio
    label="Email"
    value="email"
    checked={selected === "email"}
    onChange={(e) => setSelected(e.target.value)}
  />
  <Radio
    label="SMS"
    value="sms"
    checked={selected === "sms"}
    onChange={(e) => setSelected(e.target.value)}
  />
  <Radio
    label="Phone"
    value="phone"
    checked={selected === "phone"}
    onChange={(e) => setSelected(e.target.value)}
  />
</RadioGroup>;
```

## When to Use

### Do Use Radio Buttons When:

- **Single selection only**: Users can select only one option from a mutually exclusive list
- **Limited options**: You have 2-8 clear options to choose from
- **All options visible**: Users benefit from seeing all available options at once
- **Clear choices**: Each option is distinct and mutually exclusive

### Common Use Cases:

- Yes/No questions
- Single-choice survey questions
- Payment method selection
- Delivery options
- Account type selection
- Gender or title selection

## How to Use

### Best Practices

✅ **Do:**

- **Always use in groups**: Radio buttons must be used in a group of two or more
- **Use clear labels**: Make labels descriptive for both the group and individual options
- **Position left only**: Only position the radio button to the left of its label
- **Vertical alignment**: Display radio buttons vertically in a group
- **Logical ordering**: Order options alphabetically or from most-to-least common
- **Include 'None' option**: Add "None of the above" or "I don't know" if applicable
- **Repeat question context**: For yes/no questions, repeat part of the question in labels (e.g., "Yes, I live in the Northern Territory" instead of just "Yes")
- **Clear error messages**: Make error messages specific by repeating part of the question
- **Use helper text**: Clarify that users can only select one option

✅ **Don't:**

- **Use for multiple selections**: Use checkboxes instead if users can select more than one option
- **Pre-select by default**: Avoid pre-selecting options as users may miss the question or submit wrong answers
- **Display horizontally**: Never display radio buttons horizontally; use vertical alignment only
- **Too many options**: Limit to 6-8 options maximum; consider a dropdown for more options
- **Use disabled state unnecessarily**: Avoid the disabled state wherever possible
- **Long helper text**: Keep helper text short and concise; avoid paragraphs or bullet points
- **Assume user knowledge**: Don't assume users know the difference between radio buttons and checkboxes

### Accessibility Guidelines

- Each radio button has a clear, descriptive label
- Radio button groups use `<fieldset>` and `<legend>` elements
- Required fields are indicated visually and with `aria-required`
- Error states use `aria-invalid` and `role="alert"`
- Validation messages are associated with groups using `aria-describedby`
- Focus states are clearly visible with theme-appropriate colors
- Disabled radio buttons cannot receive focus
- Keyboard navigation is fully supported:
  - **Tab**: Move to/from the radio group
  - **Arrow keys**: Navigate between radio buttons within a group
  - **Space**: Select the focused radio button

## Props

### Radio Component

| Prop                | Type                   | Default     | Description                                           |
| ------------------- | ---------------------- | ----------- | ----------------------------------------------------- |
| `label`             | `string`               | `undefined` | Radio button label text                               |
| `validationState`   | `'success' \| 'error'` | `undefined` | Validation state for the radio button                 |
| `validationMessage` | `string`               | `undefined` | Validation message shown below the radio button       |
| `wrapperClassName`  | `string`               | `undefined` | Additional CSS classes for the wrapper                |
| `id`                | `string`               | `auto`      | HTML id attribute (auto-generated if not provided)    |
| `name`              | `string`               | `required`  | Name attribute to group radio buttons                 |
| `value`             | `string`               | `undefined` | Value of the radio button                             |
| `disabled`          | `boolean`              | `false`     | Disables the radio button                             |
| `checked`           | `boolean`              | `undefined` | Controlled checked state                              |
| `defaultChecked`    | `boolean`              | `undefined` | Default checked state (uncontrolled)                  |
| `onChange`          | `function`             | `undefined` | Change handler function                               |
| ...props            | `HTMLInputAttributes`  | -           | All standard HTML input attributes (except type,size) |

### RadioGroup Component

| Prop                | Type                   | Default        | Description                                        |
| ------------------- | ---------------------- | -------------- | -------------------------------------------------- |
| `label`             | `string`               | `undefined`    | Group label shown above the radio buttons          |
| `helperText`        | `string`               | `undefined`    | Helper text shown under the group label            |
| `requiredIndicator` | `string`               | `"(Required)"` | Text shown when the group is required              |
| `required`          | `boolean`              | `false`        | Whether the group is required                      |
| `validationState`   | `'success' \| 'error'` | `undefined`    | Validation state for the group                     |
| `validationMessage` | `string`               | `undefined`    | Validation message shown below the group           |
| `children`          | `React.ReactNode`      | `required`     | Radio button elements to render in the group       |
| `wrapperClassName`  | `string`               | `undefined`    | Additional CSS classes for the wrapper             |
| `id`                | `string`               | `auto`         | HTML id attribute (auto-generated if not provided) |
| `name`              | `string`               | `auto`         | Name attribute for all radio buttons in the group  |

## Theming

The Radio component uses Bootstrap 5.3 classes and theme-specific CSS files for styling:

- **Common styles**: `Radio.css` - Shared styles for all themes
- **NTG theme**: `Radio-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `Radio-central.css` - NTG Central theme overrides

### Theme Differences

| Feature                 | NTG Theme                                                                             | Central Theme                                                                         | Implementation Details                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Font Family             | Lato                                                                                  | Roboto                                                                                | Via theme tokens                                                                                           |
| Border Radius           | 50% (circle)                                                                          | 50% (circle)                                                                          | Fixed at `border-radius: 50%`                                                                              |
| Focus Outline           | Orange (#ec8c58)                                                                      | Green (#6ab06a)                                                                       | `var(--clr-focus-focus)` with 4px width                                                                    |
| Radio Size              | 24px × 24px                                                                           | 24px × 24px                                                                           | `1.5rem` enforced with `!important`                                                                        |
| Border Width            | 1.5px                                                                                 | 1.5px                                                                                 | Fixed value                                                                                                |
| Border Color (Default)  | #1F1E27                                                                               | #102040                                                                               | `var(--clr-border-strong-02)`                                                                              |
| Border Color (Selected) | #1F1E27 (same)                                                                        | #102040 (same)                                                                        | `var(--clr-border-strong-02)`                                                                              |
| Selected appearance     | Outer fill with `var(--clr-link-default)` + inner white dot (`var(--clr-bg-default)`) | Outer fill with `var(--clr-link-default)` + inner white dot (`var(--clr-bg-default)`) | Outer filled colour uses `var(--clr-link-default)`; inner white centre uses `var(--clr-bg-default)` (10px) |
| Hover Background        | #E7E7EA (light gray)                                                                  | #ECF0F0 (light gray)                                                                  | `var(--clr-bg-shade-alt)`                                                                                  |
| Label Padding           | 0 8px                                                                                 | 0 8px                                                                                 | `0 var(--sp-xs)` (vertical padding removed)                                                                |
| Gap (radio to label)    | 8px                                                                                   | 8px                                                                                   | `var(--sp-xs)`                                                                                             |

### Implementation Notes for Developers

- **Circular shape**: Both themes use `border-radius: 50%` for perfect circles
- **Selected appearance**: Outer circle is filled using `var(--clr-link-default)` and the white centre indicator is produced via the CSS `::before` pseudo-element (10px diameter).
- **Border colors remain consistent**: Both unselected and selected states use `var(--clr-border-strong-02)`
- **Focus outline uses theme color**: Orange for NTG, green for Central via `var(--clr-focus-focus)`
- **All critical styles use `!important`**: To override Bootstrap defaults and ensure design system consistency
- **Selected state fill**: Inner circle uses `var(--clr-link-default)` which differs between themes
- **Hover state**: Applies light background fill (`var(--clr-bg-shade-alt)`) on unselected state only
- **Error state persistence**: Error border color (`var(--clr-status-danger)`) is maintained even when disabled
- **Based on Figma specifications**: Matches the provided SVG designs with proper proportions

Both themes apply to the same component, with theme-specific tokens automatically loaded based on the active theme.

### Using CSS Variables in Your Theme

See [Radio/CSS_VARIABLES.md](CSS_VARIABLES.md) for detailed information about customizing Radio button styles using CSS variables.

## Examples

### Yes/No Question (Best Practice)

```tsx
<RadioGroup
  label="Do you live in the Northern Territory?"
  helperText="Select only one option"
  required
  name="nt-resident"
>
  <Radio label="Yes, I live in the Northern Territory" value="yes" />
  <Radio label="No, I do not live in the Northern Territory" value="no" />
</RadioGroup>
```

### Application Type Selection

```tsx
<RadioGroup
  label="Application Type"
  helperText="Select the type of application you wish to submit"
  required
  name="app-type"
>
  <Radio label="New application" value="new" />
  <Radio label="Renewal application" value="renewal" />
  <Radio label="Amendment to existing application" value="amendment" />
</RadioGroup>
```

### Payment Method

```tsx
<RadioGroup
  label="Payment Method"
  helperText="Choose your preferred payment method"
  required
  name="payment"
>
  <Radio label="Credit card" value="card" />
  <Radio label="Direct debit" value="debit" />
  <Radio label="PayPal" value="paypal" />
  <Radio label="Bank transfer" value="transfer" />
</RadioGroup>
```

### Delivery Options

```tsx
<RadioGroup
  label="Delivery Method"
  helperText="Select how you would like to receive your documents"
  name="delivery"
>
  <Radio label="Standard post (7-10 business days)" value="standard" />
  <Radio label="Express post (2-3 business days)" value="express" />
  <Radio label="Email (immediate)" value="email" defaultChecked />
  <Radio label="Pick up in person" value="pickup" />
</RadioGroup>
```

### Survey Question with 'I Don't Know' Option

```tsx
<RadioGroup
  label="How satisfied are you with our online services?"
  helperText="Please rate your experience"
  name="satisfaction"
>
  <Radio label="Very satisfied" value="very-satisfied" />
  <Radio label="Satisfied" value="satisfied" />
  <Radio label="Neutral" value="neutral" />
  <Radio label="Dissatisfied" value="dissatisfied" />
  <Radio label="Very dissatisfied" value="very-dissatisfied" />
  <Radio label="I don't know" value="unknown" />
</RadioGroup>
```

### Form with Validation

```tsx
const [selectedMethod, setSelectedMethod] = useState("");
const [showError, setShowError] = useState(false);

const handleSubmit = () => {
  if (!selectedMethod) {
    setShowError(true);
  }
};

<RadioGroup
  label="How did you hear about us?"
  helperText="Please select one option"
  required
  validationState={showError && !selectedMethod ? "error" : undefined}
  validationMessage={
    showError && !selectedMethod
      ? "Please select how you heard about us"
      : undefined
  }
  name="referral"
>
  <Radio
    label="Internet search"
    value="search"
    checked={selectedMethod === "search"}
    onChange={(e) => {
      setSelectedMethod(e.target.value);
      setShowError(false);
    }}
  />
  <Radio
    label="Social media"
    value="social"
    checked={selectedMethod === "social"}
    onChange={(e) => {
      setSelectedMethod(e.target.value);
      setShowError(false);
    }}
  />
  <Radio
    label="Friend or colleague"
    value="referral"
    checked={selectedMethod === "referral"}
    onChange={(e) => {
      setSelectedMethod(e.target.value);
      setShowError(false);
    }}
  />
  <Radio
    label="Advertisement"
    value="ad"
    checked={selectedMethod === "ad"}
    onChange={(e) => {
      setSelectedMethod(e.target.value);
      setShowError(false);
    }}
  />
</RadioGroup>;
```

## Radio vs Checkbox

Use this comparison to decide which component to use:

| Feature               | Radio Button                         | Checkbox                      |
| --------------------- | ------------------------------------ | ----------------------------- |
| **Selection**         | Single selection only                | Multiple selections allowed   |
| **Use case**          | Mutually exclusive options           | Independent options           |
| **Minimum options**   | 2 or more required                   | Can be used standalone        |
| **Pre-selection**     | Avoid pre-selecting                  | Avoid pre-selecting           |
| **Visual indicator**  | Circular                             | Square                        |
| **Best for**          | Yes/No, payment methods, single vote | Preferences, filters, consent |
| **Typical grouping**  | Always grouped                       | Can be grouped or standalone  |
| **User expectation**  | "Choose one"                         | "Choose any number"           |
| **Example questions** | "What is your gender?"               | "Which services do you need?" |
| **Helper text**       | "Select only one option"             | "Select all that apply"       |

## Keyboard Navigation

The Radio component supports standard keyboard interaction:

- **Tab**: Move focus to the first radio button in the group (or the checked one)
- **Arrow Up/Left**: Select the previous radio button
- **Arrow Down/Right**: Select the next radio button
- **Space**: Select the focused radio button
- **Shift + Tab**: Move focus backwards out of the group

## Related Components

- [Checkbox](../Checkbox/CHECKBOX.md) - For multiple selections from a list
- [Dropdown](../Dropdown/DROPDOWN.md) - For single selection from many options
- [Input](../Input/INPUT.md) - For text input fields
- [Button](../Button/BUTTON.md) - For form submission

## For developers & coding agents 📣

Quick summary (useful for code-generators and reviewers):

- Validation messages now include a decorative FontAwesome light icon (success: `fa-light fa-circle-check`, error: `fa-light fa-circle-exclamation`) preceding the message.
- Selection visual: outer fill = `var(--clr-link-default)`, inner centre = `var(--clr-bg-default)` (white). Disabled+checked uses outer `var(--clr-text-muted)` with a white centre.
- Label vertical padding for `Radio` is `0` (horizontal padding remains `var(--sp-xs)`).

Prop JSON (machine-friendly example):

```json
{
  "name": "string",
  "label": "string",
  "value": "string",
  "validationState": "success|error",
  "validationMessage": "string",
  "disabled": "boolean"
}
```

Small unit-test examples (Vitest + React Testing Library):

```ts
// Radio - validation icon appears
import { render, screen } from '@testing-library/react';
import { Radio } from './Radio';

test('shows success icon for success validation', () => {
  render(<Radio label="A" validationState="success" validationMessage="Saved" />);
  expect(screen.getByRole('status')).toHaveTextContent('Saved');
  expect(document.querySelector('.fa-light.fa-circle-check')).toBeTruthy();
});
```

Common agent tasks

- Update tokens: change `--clr-link-default` in `design-tokens/tokens.json` and run `npm run tokens:build`.
- Change validation icon: edit `Icon` usage in `src/components/Radio/Radio.tsx` or `Checkbox/Checkbox.tsx`.
- Add a Storybook story: create a new `.stories.tsx` with meaningful content (follow Content Standards).
- Tests: add unit tests under the component folder; run `npm test` or `pnpm test`.

PR checklist for contributors

1. Add/modify Storybook entry for visual review.
2. Add unit tests for new behavior (validation states, disabled/checked visuals).
3. Update docs (`RADIO.md` and `CSS_VARIABLES.md`).
4. Run `npm run build` and `npm run storybook` locally.

Commands

- Build library: `npm run build`
- Start Storybook: `npm run storybook`
- Run tests: `npm test`

## Storybook

View live examples and interact with the Radio component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > Radio** to see all variants and configurations.

## TypeScript

The Radio component is fully typed with TypeScript. Import the types:

```tsx
import {
  Radio,
  RadioGroup,
  RadioProps,
  RadioGroupProps,
} from "@ntgovernment/web-design-system";

// Use RadioProps for custom wrappers or extensions
const MyCustomRadio: React.FC<RadioProps> = (props) => {
  return <Radio {...props} />;
};
```

## Browser Support

The Radio component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3 must be loaded for the component to style correctly
- Radio buttons within a RadioGroup automatically share the same `name` attribute
- The component uses native HTML radio inputs with custom styling
- Custom CSS classes can be added via the `className` prop
- The component extends all native HTML input attributes (except `type` and `size`)
- Radio button groups use semantic HTML (`<fieldset>` and `<legend>`) for better accessibility
- Unlike checkboxes, radio buttons cannot be unchecked by clicking them again once selected
