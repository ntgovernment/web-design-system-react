# DatePicker Component

A flexible, accessible date picker component that allows users to select a single date using the keyboard or an interactive calendar interface. The component supports validation, custom date ranges, and works seamlessly with both NT.GOV.AU and NTG Central themes.

## Overview

The DatePicker component combines a text input field with an interactive calendar popup. Users can:

- Type a date directly in DD/MM/YYYY format
- Click a calendar icon to open an interactive month/year calendar
- Navigate between months and years using arrow buttons
- Select individual dates from the calendar grid
- See today's date highlighted with a red indicator
- Confirm or cancel their selection

## Features

- ✅ **Accessible**: Full keyboard navigation (Arrow keys, Escape, Enter)
- ✅ **Themeable**: Supports NTG (with orange 4px focus outline) and Central themes
- ✅ **Validatable**: Success/error states with validation messages
- ✅ **Date Constraints**: Support for minimum and maximum selectable dates
- ✅ **Controlled/Uncontrolled**: Works as both controlled and uncontrolled component
- ✅ **Responsive**: Mobile-optimized calendar pop-up
- ✅ **Bootstrap Compatible**: Uses Bootstrap form styling classes
- ✅ **Token-Based**: All colors and spacing use design tokens

## Usage

### Basic Example

```tsx
import { DatePicker } from "@ntgovernment/web-design-system";

function MyApp() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <DatePicker
      label="Date of birth"
      helperText="Please enter your date of birth"
      value={date}
      onChange={setDate}
    />
  );
}
```

### With Validation

```tsx
<DatePicker
  label="Service application date"
  helperText="When did you apply for this service?"
  value={date}
  onChange={setDate}
  validationState="error"
  validationMessage="This service has expired. Please apply again."
  required
/>
```

### With Date Constraints

```tsx
const today = new Date();
const minDate = new Date(2024, 0, 1); // January 1, 2024

<DatePicker
  label="License renewal date"
  helperText="Select a date between January 1, 2024 and today"
  value={date}
  onChange={setDate}
  min={minDate}
  max={today}
/>;
```

### In a Form

```tsx
function ApplicationForm() {
  const [formData, setFormData] = useState({
    applicationDate: null as Date | null,
    serviceDate: null as Date | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form...
  };

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker
        label="Application date"
        required
        value={formData.applicationDate}
        onChange={(date) =>
          setFormData((prev) => ({ ...prev, applicationDate: date }))
        }
      />

      <DatePicker
        label="Preferred service date"
        required
        value={formData.serviceDate}
        onChange={(date) =>
          setFormData((prev) => ({ ...prev, serviceDate: date }))
        }
      />

      <button type="submit" className="btn btn-primary">
        Submit Application
      </button>
    </form>
  );
}
```

## Props

### DatePickerProps

| Prop                | Type                            | Default        | Description                                    |
| ------------------- | ------------------------------- | -------------- | ---------------------------------------------- |
| `label`             | `string?`                       | -              | Label displayed above the input field          |
| `helperText`        | `string?`                       | -              | Helper text displayed below the label          |
| `requiredIndicator` | `string?`                       | `"(Required)"` | Text shown next to label for required fields   |
| `required`          | `boolean?`                      | -              | Whether the field is required                  |
| `disabled`          | `boolean?`                      | -              | Whether the field is disabled                  |
| `readOnly`          | `boolean?`                      | -              | Whether the field is read-only                 |
| `value`             | `Date \| null?`                 | -              | Currently selected date (controlled component) |
| `defaultValue`      | `Date \| null?`                 | -              | Default date value (uncontrolled component)    |
| `onChange`          | `(date: Date \| null) => void?` | -              | Callback when date is selected                 |
| `validationState`   | `'success' \| 'error'?`         | -              | Validation state for the field                 |
| `validationMessage` | `string?`                       | -              | Validation message shown below the field       |
| `min`               | `Date?`                         | -              | Minimum selectable date                        |
| `max`               | `Date?`                         | -              | Maximum selectable date                        |
| `id`                | `string?`                       | -              | HTML id attribute                              |
| `className`         | `string?`                       | -              | Additional CSS classes                         |
| `wrapperClassName`  | `string?`                       | -              | CSS classes for the wrapper div                |
| `placeholder`       | `string?`                       | `"DD/MM/YYYY"` | Placeholder text for the input field           |

All standard HTML input attributes are also supported (e.g., `name`, `aria-label`, etc.)

## Keyboard Navigation

The DatePicker component supports full keyboard navigation:

| Key                | Behavior                                       |
| ------------------ | ---------------------------------------------- |
| `Enter` or `Space` | Open calendar when focused on input            |
| `Escape`           | Close calendar and refocus input               |
| `Arrow Left`       | Previous month                                 |
| `Arrow Right`      | Next month                                     |
| `Tab`              | Navigate to next/previous interactive elements |

## Calendar Behavior

### Month/Year Navigation

- **Single arrows** (`<` and `>`): Navigate between months
- **Double arrows** (`<<` and `>>`): Navigate between years
- Swipe gestures supported on mobile devices

### Date Selection

- **Dates from current month**: Always selectable (unless disabled by min/max)
- **Dates from other months**: Greyed out, not selectable
- **Today**: Marked with a red/emphasis-colored indicator dot
- **Selected date**: Highlighted with primary action color

### Confirmation

The calendar popup includes Cancel and Confirm buttons:

- **Cancel**: Closes the calendar without changing the date
- **Confirm**: Closes the calendar and confirms the selection

You can also click a date directly to select it immediately.

## Validation States

### Success State

```tsx
<DatePicker
  label="Transaction date"
  value={date}
  onChange={setDate}
  validationState="success"
  validationMessage="Date confirmed. Your transaction is processing."
/>
```

The input outline will be colored with the success color, and the validation message will display below.

### Error State

```tsx
<DatePicker
  label="Birth date"
  value={date}
  onChange={setDate}
  validationState="error"
  validationMessage="You must be 18 years or older to apply."
/>
```

The input outline will be colored with the danger/error color, and the validation message will display as an alert.

## Date Format

The DatePicker uses **DD/MM/YYYY** format following Australian conventions:

- Users can type directly: `14/02/2026`
- Dates are validated on input
- Invalid dates (e.g., `32/13/2025`) are rejected
- The calendar always shows dates in ISO format internally but displays DD/MM/YYYY to users

## Themes

### NT.GOV.AU Theme

- **Focus outline**: 4px solid orange (#EC8C58)
- **Font**: Lato
- **Border radius**: Defined by `--ntg-radii-input` and `--ntg-radii-button`
- **Date on today**: Red/emphasis color (#C33826)

### NTG Central Theme

- **Focus outline**: Custom central focus color (typically blue/dark)
- **Font**: Roboto
- **Border radius**: Defined by `--central-radii-input` and `--central-radii-button`
- **Date on today**: Emphasis color specific to Central theme

## Accessibility

The DatePicker component is fully accessible:

### ARIA Support

- `aria-label`: For the calendar icon button
- `aria-pressed`: Indicates if calendar is open
- `aria-haspopup="dialog"`: Indicates the input opens a dialog
- `aria-expanded`: Shows whether calendar is open/closed
- `aria-current="date"`: Marks today's date
- `aria-invalid`: Indicates validation errors
- `aria-describedby`: Links helper text and validation messages

### Screen Reader Support

- Labels and helper text are properly associated
- Validation messages are announced as alerts
- Calendar navigation buttons have descriptive labels
- Each date includes a full date string for announcements

### Keyboard Support

- Full keyboard navigation (see [Keyboard Navigation](#keyboard-navigation))
- Tab navigation through all interactive elements
- Escape key to close calendar
- Enter/Space to open calendar

## Mobile Behavior

On mobile devices (screens smaller than 768px):

- Calendar popup slides up from the bottom of the screen
- Takes up the full width of the viewport
- Maximum height is 80% of viewport (scrollable if needed)
- Touch-friendly button sizes (40px minimum)

## Styling with CSS Variables

All colors and spacing in the DatePicker use CSS variables. To customize:

```css
/* Override in your app's CSS */
:root {
  --clr-bg-default: #f9f9f9;
  --clr-text-default: #1a1a1a;
  --clr-action-primary: #005a9c;
  --sp-md: 18px;
  --radii-input: 8px;
}
```

See [CSS_VARIABLES.md](./CSS_VARIABLES.md) for a complete list of customizable variables.

---

## Developer & agent-friendly API (quick reference)

- Format dates as `Date` objects in code — the component displays `DD/MM/YYYY`.
- Prefer `value` + `onChange` for forms (controlled pattern).
- Use `min` / `max` to constrain selectable dates; invalid dates are rendered `disabled`.

### Machine-friendly props (TypeScript summary)

- `label` (string)
- `helperText` (string)
- `required` (boolean)
- `disabled` (boolean)
- `readOnly` (boolean)
- `value` (Date | null)
- `defaultValue` (Date | null)
- `min`, `max` (Date)
- `validationState` ("success" | "error")
- `validationMessage` (string)
- `onChange` ((date: Date | null) => void)

## Tests & automation (copy/paste-ready)

### Unit tests (Vitest + React Testing Library)

- Open calendar with button or Enter/Space on input
- Select a current-month date → click `Confirm` → expect `onChange` called
- Click `Cancel` → expect no `onChange` and input unchanged
- `min`/`max` prevent selection (disabled date buttons)
- Keyboard navigation: Arrow keys change months; `Escape` closes popup

Example test (paste into `*.test.tsx`):

```ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { DatePicker } from './DatePicker';

test('select date and confirm updates value', async () => {
  const user = userEvent.setup();
  const onChange = vi.fn();
  render(<DatePicker label="Date" onChange={onChange} />);

  await user.click(screen.getByRole('button', { name: /open calendar/i }));
  const dialog = screen.getByRole('dialog', { name: /calendar/i });
  expect(dialog).toBeInTheDocument();

  const dateBtn = dialog.querySelector('.calendar-date:not(.calendar-date--other-month):not(:disabled)') as Element;
  await user.click(dateBtn);
  await user.click(screen.getByRole('button', { name: /confirm/i }));

  expect(onChange).toHaveBeenCalled();
  expect(screen.getByPlaceholderText(/dd\/mm\/yyyy/i)).toHaveValue(expect.stringMatching(/\d{2}\/\d{2}\/\d{4}/));
});
```

### E2E checks (Playwright / Cypress)

- Theme check: load NTG theme → focus input → expect focus outline equals `--clr-focus-focus` (orange)
- Full flow: open → navigate → select → confirm → assert value in form submission

## Storybook & automation-friendly knobs

- Recommended `args` for stories: `label`, `helperText`, `required`, `disabled`, `readOnly`, `min`, `max`, `validationState`, `validationMessage`.
- Prefer `aria-*` attributes and button text for automation selectors (avoid internal class names).

## Accessibility checklist (developer)

- Label present or use `aria-label` / `aria-labelledby`
- `aria-expanded` / `aria-haspopup` present on calendar toggle only
- `role="dialog"` and descriptive `aria-label` on calendar popup
- `aria-current="date"` on today's date
- `aria-invalid` when validationState is `error`
- Validation messages use `role="alert"` for screen reader announcement

---

## When to Use

### ✅ Use DatePicker When:

- Users need to select a date that is **not well-known to them** (hiring date, appointment date, etc.)
- You want to show the **day of the week** or **week number** to help context
- Users need to see dates **in relation to other dates** (e.g., calendar view)
- You need **month/year navigation** for dates far in the past/future
- Users might not know the exact date format or value

### ❌ Don't Use DatePicker When:

- Users need to select a **date range** (use Date Range Picker instead)
- The date is **well-known to the user** (birthday, preferred date) - use Input with pattern validation instead
- Space is limited and a simple text input would suffice
- Users primarily type dates rather than select them

## Examples

### Application Submission

```tsx
<DatePicker
  label="When are you submitting your application?"
  helperText="Select today or a future date"
  required
  min={new Date()}
  value={date}
  onChange={setDate}
/>
```

### Service Appointment

```tsx
<DatePicker
  label="Available appointment date"
  helperText="Choose from available dates"
  validationState={date ? "success" : undefined}
  validationMessage={date ? "Appointment confirmed" : undefined}
  value={date}
  onChange={setDate}
/>
```

### License Renewal

```tsx
<DatePicker
  label="License expiry date"
  helperText="Your current license expires on this date"
  readOnly
  defaultValue={licenseExpiry}
/>
```

### Date Range Selection (Two DatePickers)

```tsx
function DateRangeSelection() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="d-flex flex-column gap-3">
      <DatePicker
        label="From date"
        value={startDate}
        onChange={setStartDate}
        max={endDate || undefined}
      />
      <DatePicker
        label="To date"
        value={endDate}
        onChange={setEndDate}
        min={startDate || undefined}
      />
    </div>
  );
}
```

## Validation Examples

### Birth Date Validation

```tsx
function BirthDateField() {
  const [date, setDate] = useState<Date | null>(null);
  const today = new Date();
  const maxAge = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  );

  let validationState = undefined;
  let validationMessage = undefined;

  if (date && date > maxAge) {
    validationState = "error";
    validationMessage = "You must be at least 18 years old";
  } else if (date) {
    validationState = "success";
    validationMessage = "Age verified";
  }

  return (
    <DatePicker
      label="Date of birth"
      value={date}
      onChange={setDate}
      validationState={validationState}
      validationMessage={validationMessage}
      required
    />
  );
}
```

### Service Eligibility

```tsx
function ServiceDateField() {
  const [date, setDate] = useState<Date | null>(null);
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  let validationState = undefined;
  let validationMessage = undefined;

  if (date && date < oneYearAgo) {
    validationState = "error";
    validationMessage = "Services more than 1 year old are not eligible";
  } else if (date) {
    validationState = "success";
    validationMessage = "Service eligible for renewal";
  }

  return (
    <DatePicker
      label="Original service date"
      value={date}
      onChange={setDate}
      validationState={validationState}
      validationMessage={validationMessage}
      helperText="Select the date you originally received this service"
      required
    />
  );
}
```

## Performance Considerations

- Calendar rendering is optimized for smooth interactions
- Date calculations use native JavaScript Date API
- Click handlers are debounced to prevent rapid selection
- Calendar markup is kept minimal (42 date buttons max)

## Browser Support

The DatePicker component works in all modern browsers:

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 13+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Related Components

- **[Input](../Input/INPUT.md)** - Simple text input field
- **[Dropdown](../Dropdown/DROPDOWN.md)** - Select from predefined options
- **[Notification](../Notification/NOTIFICATION.md)** - Display validation feedback

## Changelog

### Version 1.0.0 (February 2026)

- Initial release
- Supports NTG and Central themes
- Full keyboard and accessibility support
- Calendar navigation with month/year selection
- Validation states and messages
- Date constraints (min/max)
- Mobile-responsive design

---

**Component Library**: NT Government Web Design System
**Last Updated**: February 14, 2026
**Maintained by**: NT Government Design System Team
