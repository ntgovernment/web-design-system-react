# Date Input

Developer guide for the `DateInput` component — concise API, implementation notes, token list, accessibility checklist and Storybook/testing guidance.

---

## Purpose

Date Input helps users enter a date manually into a form. It should be used for dates they already know well or one they can enter without needing a calendar view for context. For example, their date of birth, date of marriage, or passport expiry.

The component consists of three separate input fields for Day, Month, and Year, preserving Bootstrap compatibility while being token-driven and theme-aware.

## When to Use

- Use for well-known dates or dates that don't need a calendar for context
- Dates the user already knows (date of birth, anniversary, etc.)
- Single important dates that need careful manual entry
- For Australian audiences (DD/MM/YYYY format)

## When NOT to Use

- Do not use if users may not know the exact date
- Do not use if a calendar view would help them select the correct date
- Do not use for date ranges or multiple date selections

## Import

```tsx
import { DateInput } from "@ntgovernment/web-design-system";
```

## Component API (props)

- `label?: string` — visible label shown above the fields.
- `helperText?: string` — small helper/hint text under the label.
- `requiredIndicator?: string` — text to display for required fields (default: `(Required)`).
- `validationState?: "success" | "error"` — visual validation state applied to all three fields.
- `validationMessage?: string` — message shown when `validationState` is set.
- `required?: boolean` — marks all three fields as required.
- `disabled?: boolean` — disables all three input fields.
- `readOnly?: boolean` — makes all three fields read-only.
- `wrapperClassName?: string` — optional wrapper CSS class.
- `value?: DateInputValue` — controlled value for the date input (object with `day`, `month`, `year` strings).
- `defaultValue?: DateInputValue` — default value for uncontrolled usage.
- `onChange?: (value: DateInputValue) => void` — callback fired when any field changes.
- `id?: string` — optional id for the container (for accessibility).

### DateInputValue Interface

```typescript
interface DateInputValue {
  day: string;
  month: string;
  year: string;
}
```

Note: `value` makes the component controlled; otherwise it uses `defaultValue` and internal state.

## Data-attributes & classes (for CSS/automation)

- `class="form-control date-input-field-control"` — present on each input field for Bootstrap compatibility.
- `data-status="success"|"error"` — validation state (used by CSS selectors).
- `data-filled="true"` — present when the specific input field contains text.
- `data-readonly="true"`, `data-disabled="true"` — reflect `readOnly` / `disabled`.

These attributes make it easy for other tools and automated agents to detect component state.

## Design tokens / CSS variables used

### Color Tokens

- `--clr-bg-default` — default input background
- `--clr-border-subtle` — default border color
- `--clr-border-strong-02` — focused/hover border color
- `--clr-focus-focus` — theme-specific focus glow (box-shadow)
- `--clr-status-success` — success state color
- `--clr-status-danger` — error/required indicator color
- `--clr-text-default` — default text color
- `--clr-text-muted` — placeholder and helper text color
- `--clr-bg-shade` — read-only background
- `--clr-bg-shade-alt` — disabled background

### Spacing Tokens

- `--sp-xs` (8px) — gap between elements
- `--sp-xxs` (4px) — smaller gaps on mobile
- `--sp-md` (16px) — field padding
- `--sp-lg` (20px) — icon size
- `--sp-xxxl` (48px) — minimum input height

### Typography Tokens

- `--type-desktop-body-default-size` — label and input text size
- `--type-body-default-lh` — label and input line height
- `--type-body-sm-size` — helper text and validation messages
- `--type-body-sm-lh` — helper text line height

### Other Tokens

- `--radii-none` — border radius (0 for both themes)
- `--border-width-md` — border width

### Theme-Specific Tokens (Applied via theme CSS files)

- `--shadow-focus-ntg` — NTG theme orange focus glow
- `--shadow-focus-central` — Central theme green focus glow
- `--ntg-neutral-01` — NTG read-only background
- `--central-neutrals-02` — Central read-only background

## Theming

- Per-theme overrides live in `DateInput-ntg.css` and `DateInput-central.css` and are automatically included in the theme bundles.
- Storybook loads the theme CSS at runtime — use the Theme toolbar to test NTG vs Central behavior (focus ring, read-only backgrounds, etc.).
- Both themes use `border-radius: 0` (no rounding) as per design tokens `--radii-none`.
- Focus outline uses theme-specific shadow tokens for the outer glow while maintaining consistent border colors.

## Field Sizing & Layout

- **Day field**: 63px wide, accepts 2 digits (01-31)
- **Month field**: 63px wide, accepts 2 digits (01-12)
- **Year field**: 78px wide, accepts 4 digits (YYYY)
- Fields are arranged horizontally with 8px gap (`--sp-xs`)
- On mobile (< 768px), gap reduces to 4px (`--sp-xxs`) and field widths adjust slightly
- All fields have 52px height with 48px minimum (matching Figma spec)
- Placeholder text: DD, MM, YYYY respectively

## Focus Behaviour

- Each field can be focused independently
- Focus (border): uses semantic token `--clr-border-strong-02` for border/outline
- Focus glow ring: uses theme-specific `--clr-focus-focus` token
  - NTG: Orange glow (`--shadow-focus-ntg`)
  - Central: Green glow (`--shadow-focus-central`)
- Box-shadow spread: 4px (`calc(var(--sp-xs) / 2)`)

## Validation Behaviour

- Validation state applies to all three fields simultaneously
- Success state: green outline (`--clr-status-success`)
- Error state: red outline (`--clr-status-danger`)
- Validation message appears below all three fields with appropriate icon
- Icon uses FontAwesome: check for success, circle-xmark for error

## Accessibility Checklist

- ✅ Always include a visible `label` for the date input group
- ✅ Each field (Day, Month, Year) has its own label for clarity
- ✅ Use `aria-describedby` to point at helper or validation text
- ✅ All three fields share the same description and validation messages
- ✅ Error text uses `role="alert"` and `aria-live="assertive"` so screen readers announce failures
- ✅ Success text uses `role="status"` / `aria-live="polite"`
- ✅ Do not rely on color alone to indicate state; messages must include text
- ✅ Keyboard: all three fields are focusable in order (day → month → year)
- ✅ Users can navigate between fields using Tab/Shift+Tab
- ✅ Do NOT auto-tab between fields — let users control navigation
- ✅ Fields use `inputMode="numeric"` for mobile numeric keyboards
- ✅ Pattern attribute `[0-9]*` guides mobile browsers to show numeric keyboard
- ✅ Required attribute properly applied when `required` prop is true

## Best Practices

### ✅ DO

- Use for well-known dates (date of birth, marriage date, passport expiry)
- Keep the DD/MM/YYYY format for Australian audiences
- Provide clear helper text about the expected format (e.g., "Enter date as 02 04 2022")
- Use validation messages that explain how to fix errors
- Allow users to copy and paste into fields
- Show clear examples in helper text or placeholder

### ❌ DON'T

- Don't auto-tab to the next field when filled (confusing and disorienting)
- Don't disable copy and paste functionality
- Don't use for dates that need a calendar for context (use a date picker instead)
- Don't use for date ranges (use separate date inputs or a range picker)
- Don't rely on placeholder text alone—always include a label

## Storybook

- Stories located at `src/components/DateInput/DateInput.stories.tsx`
- Stories cover: Default, Required, Filled, Success, Error, Disabled, ReadOnly, Controlled, FormExample, and theme variations
- Use the global Theme toolbar to switch between NTG and Central and verify focus/read-only visual differences

## Implementation Notes (for maintainers)

- Component uses three separate `<input>` elements, each wrapped in a field group
- Each input applies `form-control` class for Bootstrap compatibility while overriding visuals with tokens
- Component supports both controlled and uncontrolled usage patterns
- Input validation only allows numeric characters (0-9)
- `maxLength` enforced: 2 for day/month, 4 for year
- Fields do NOT auto-advance (intentional UX decision per guidelines)
- Validation messages use the `Icon` component (FontAwesome kit loaded in Storybook preview)
- All visual values are tokenized — no hard-coded colors/sizes in component CSS

## Testing Guidance

- Unit tests should assert:
  - `aria-describedby` links to helper/validation text when present
  - `role` / `aria-live` behavior for validation messages
  - `data-filled` toggles correctly for each field
  - `data-status` presence when `validationState` set
  - Numeric-only input validation (non-numeric chars rejected)
  - `maxLength` enforcement for each field
  - Controlled vs uncontrolled behavior
  - `onChange` callback fired with correct `DateInputValue` structure
- Visual regression: test focus states, success/error states across both themes
- Accessibility: test keyboard navigation, screen reader announcements

## Example Usage

### Uncontrolled with validation

```tsx
<DateInput
  label="Date of Birth"
  helperText="Enter your date of birth in DD MM YYYY format"
  required
  validationState="error"
  validationMessage="Please enter a valid date of birth"
/>
```

### Controlled date input

```tsx
const [dateValue, setDateValue] = useState<DateInputValue>({
  day: "",
  month: "",
  year: "",
});

<DateInput
  label="Passport Expiry Date"
  helperText="Enter the expiry date from your passport"
  value={dateValue}
  onChange={(value) => setDateValue(value)}
  required
/>;
```

### With success validation

```tsx
<DateInput
  label="Date of Marriage"
  helperText="Enter the date you were married"
  value={{ day: "14", month: "02", year: "2020" }}
  onChange={(value) => console.log(value)}
  validationState="success"
  validationMessage="Date verified successfully"
/>
```

### Read-only state

```tsx
<DateInput
  label="Application Date"
  value={{ day: "15", month: "12", year: "2024" }}
  readOnly
/>
```

## Form Integration Example

```tsx
function ApplicationForm() {
  const [dateOfBirth, setDateOfBirth] = useState<DateInputValue>({
    day: "",
    month: "",
    year: "",
  });
  const [error, setError] = useState("");

  const validateDate = (value: DateInputValue) => {
    const { day, month, year } = value;

    if (!day || !month || !year) {
      setError("All date fields are required");
      return false;
    }

    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (dayNum < 1 || dayNum > 31) {
      setError("Day must be between 01 and 31");
      return false;
    }

    if (monthNum < 1 || monthNum > 12) {
      setError("Month must be between 01 and 12");
      return false;
    }

    if (yearNum < 1900 || yearNum > new Date().getFullYear()) {
      setError("Please enter a valid year");
      return false;
    }

    setError("");
    return true;
  };

  const handleChange = (value: DateInputValue) => {
    setDateOfBirth(value);
    validateDate(value);
  };

  return (
    <DateInput
      label="Date of Birth"
      helperText="Enter your date of birth in DD MM YYYY format"
      required
      value={dateOfBirth}
      onChange={handleChange}
      validationState={error ? "error" : undefined}
      validationMessage={error}
    />
  );
}
```

## CSS Class Reference

| Class                          | Purpose                                       |
| ------------------------------ | --------------------------------------------- |
| `.date-input-field`            | Main wrapper container                        |
| `.date-input-label-row`        | Container for label and required indicator    |
| `.date-input-label`            | Main label text                               |
| `.date-input-required`         | Required indicator "(Required)"               |
| `.date-input-helper`           | Helper text below label                       |
| `.date-input-fields-wrapper`   | Horizontal container for the three fields     |
| `.date-input-field-group`      | Individual field group (label + input)        |
| `.date-input-field-label`      | Individual field label (Day/Month/Year)       |
| `.date-input-field-control`    | Individual input field (with `.form-control`) |
| `.date-input-message`          | Validation message container                  |
| `.date-input-message--success` | Success message variant                       |
| `.date-input-message--error`   | Error message variant                         |
| `.date-input-message__icon`    | Icon wrapper in message                       |

## Notes for Contributors

- Add any new visual tokens to `@ntgovernment/web-design-tokens` and reference them in component CSS via semantic variable names
- Update `scripts/build-theme-bundles.js` if you add new per-theme override files
- When adding stories, ensure realistic content following `CONTENT_STANDARDS.md` (no Lorem ipsum)
- Test thoroughly across both NTG and Central themes
- Ensure all new features maintain Bootstrap compatibility where applicable

## Related Components

- **Input** — Single-line text input for general use
- **Dropdown** — For selecting from predefined options
- **Textarea** — Multi-line text input

## Machine-readable metadata (for coding agents)

```json
{
  "name": "DateInput",
  "package": "@ntgovernment/web-design-system",
  "props": {
    "label": { "type": "string", "required": false },
    "helperText": { "type": "string", "required": false },
    "required": { "type": "boolean", "default": false },
    "validationState": { "type": "enum", "values": ["success", "error"] },
    "validationMessage": { "type": "string" },
    "value": {
      "type": "object",
      "shape": { "day": "string", "month": "string", "year": "string" }
    }
  },
  "stories": [
    "Default",
    "Required",
    "Filled",
    "Success",
    "Error",
    "Disabled",
    "ReadOnly",
    "Controlled (Interactive)",
    "With Validation",
    "In a Form",
    "NTG Theme",
    "Central Theme"
  ],
  "tokens_used": [
    "--clr-bg-default",
    "--clr-border-subtle",
    "--clr-border-strong-02",
    "--clr-focus-focus",
    "--clr-status-success",
    "--clr-status-danger",
    "--clr-text-default",
    "--clr-text-muted",
    "--sp-xs",
    "--sp-md",
    "--sp-xxxl",
    "--radii-none"
  ],
  "selectors_for_tests": {
    "day": "getByLabelText('Day')",
    "month": "getByLabelText('Month')",
    "year": "getByLabelText('Year')",
    "helper": "getByText('Enter your date of birth in DD MM YYYY format')"
  }
}
```

---

## Quick reference (developer + agent cheatsheet)

- Component: `DateInput`
- Location: `src/components/DateInput`
- Exported from package index: `DateInput` (Type: `DateInputProps` / `DateInputValue`)
- Format: DD / MM / YYYY (Australian default)
- Controlled shape: `{ day: string, month: string, year: string }`

---

## Automated test snippets (copy/paste)

### 1) Unit test (Vitest + React Testing Library)

```ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from './DateInput';

test('calls onChange with correct structure and enforces numeric input', async () => {
  const user = userEvent.setup();
  const handle = vi.fn();

  render(<DateInput label="Date of Birth" onChange={handle} />);

  const day = screen.getByLabelText('Day');
  await user.type(day, '14a');
  expect(handle).toHaveBeenCalled();
  // last call contains day '14' (non-numeric ignored)
  expect(handle.mock.calls.at(-1)[0].day).toBe('14');

  const month = screen.getByLabelText('Month');
  await user.type(month, '02');
  expect(handle.mock.calls.at(-1)[0].month).toBe('02');

  const year = screen.getByLabelText('Year');
  await user.type(year, '2024');
  expect(handle.mock.calls.at(-1)[0].year).toBe('2024');
});
```

### 2) Storybook interaction test (play function)

```ts
// inside a story's `play` function
import { within, userEvent } from "@storybook/testing-library";

export const InteractionPlay = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Day"), "01");
    await userEvent.type(canvas.getByLabelText("Month"), "01");
    await userEvent.type(canvas.getByLabelText("Year"), "2025");
    // assert visible success/error UI via role/text
  },
};
```

### 3) Accessibility test (axe / jest-axe)

- Check that `aria-describedby` exists when helperText or validationMessage present
- Ensure `role="alert"` on validation error messages
- Validate keyboard order: Day → Month → Year

```ts
// example with jest-axe
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('a11y: no detectable accessibility violations', async () => {
  const { container } = render(<DateInput label="DOB" helperText="Enter date" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## JSON Schema for DateInputValue (useful for form libraries / validation)

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "DateInputValue",
  "type": "object",
  "properties": {
    "day": { "type": "string", "pattern": "^(0[1-9]|[12][0-9]|3[01])?$" },
    "month": { "type": "string", "pattern": "^(0[1-9]|1[0-2])?$" },
    "year": { "type": "string", "pattern": "^[0-9]{0,4}$" }
  },
  "required": []
}
```

---

## End-to-end test scenarios (Playwright / Cypress)

- User fills valid DOB (14/02/1990) → form submits successfully
- User types non-numeric characters → non-numeric ignored; fields retain numeric characters only
- Partially completed date → validation error message shown with `role="alert"`
- Leap-year check (29/02/2024) → accepted; (29/02/2023) → rejected
- Keyboard navigation: Tab through Day → Month → Year; Shift+Tab reverses order

---

## Edge cases & expected behaviour (short list)

- Empty fields: `onChange` still returns object with empty strings
- Partial input: component does not auto-tab; partial entries are permitted but validation should be performed externally when needed
- Over-length input: `maxLength` prevents extra digits (2, 2, 4)
- Paste: copy/paste allowed; non-digits are stripped

---

## Example helper validators (recommended)

```ts
export function isCompleteDate(v: {
  day: string;
  month: string;
  year: string;
}) {
  return !!(v.day && v.month && v.year);
}

export function toISO(v: { day: string; month: string; year: string }) {
  if (!isCompleteDate(v)) return null;
  return `${v.year.padStart(4, "0")}-${v.month.padStart(2, "0")}-${v.day.padStart(2, "0")}`;
}
```

---

## Contributor PR checklist (required before merge)

- [ ] Story(s) added/updated for new behaviour or variations
- [ ] Unit tests and accessibility tests added/updated
- [ ] Visual regression snapshots (if applicable) updated
- [ ] Design token changes (if any) contributed to `web-design-tokens` repo and version bumped in `package.json`
- [ ] Documentation updated (`DATEINPUT.md`) with examples and developer guidance
- [ ] No usage of Lorem ipsum; content follows `CONTENT_STANDARDS.md`

---

## FAQ for coding agents (short)

Q: Should the component auto-advance when a field is filled?
A: No — do not auto-advance (UX decision). Tests should assert absence of auto-tab.

Q: Where should validation live?
A: Component provides structural validation (numeric + maxLength). Business rules (complete/valid date) should be enforced by the host form.

Q: Which selectors are reliable for automated tests?
A: Use accessible selectors: `getByLabelText('Day')`, `getByLabelText('Month')`, `getByLabelText('Year')`. Avoid fragile class-based selectors.

---

## Resources (updated)

- Component source: `src/components/DateInput/DateInput.tsx`
- Storybook stories: `src/components/DateInput/DateInput.stories.tsx`
- Design tokens: [`@ntgovernment/web-design-tokens`](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens)
- Theme documentation: [THEMES.md](../../themes/THEMES.md)
- Bootstrap form controls: https://getbootstrap.com/docs/5.3/forms/form-control/

---

**Last Updated**: 14 February 2026
