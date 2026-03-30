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

The comprehensive list of CSS variables used by the component appears later in this document.

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

## Implementation Summary (Developer & Agent)

This section consolidates the former implementation summary into the component documentation.

### File Structure

```
src/components/DatePicker/
├── DatePicker.tsx
├── DatePicker.css
├── DatePicker-ntg.css
├── DatePicker-central.css
├── DatePicker.stories.tsx
├── DATEPICKER.md       # documentation consolidated here
└── index.ts
```

### Core Capabilities (Quick Scan)

- Keyboard navigation for calendar and input
- Validation states with messages and ARIA announcements
- Min/max date constraints and disabled dates
- Theme-aware focus outlines and typography
- Mobile-friendly calendar overlay

### Storybook Stories (Reference)

- Default
- Required
- WithDefaultValue
- Success
- Error
- Disabled
- ReadOnly
- WithMinDate
- WithMaxDate
- DateRange
- Controlled
- InForm
- MultipleFields
- Playground

### Build Output (Reference)

```
dist/
├── components.min.js
├── theme-ntg.min.css
├── theme-central.min.css
├── index.html
├── index.js
└── index.css
```

### Token Coverage (Snapshot)

- **Colors:** `--clr-bg-*`, `--clr-text-*`, `--clr-border-*`, `--clr-status-*`, `--clr-action-primary`
- **Spacing:** `--sp-xs`, `--sp-sm`, `--sp-md`, `--sp-lg`, `--sp-xl`, `--sp-xxxl`
- **Typography:** `--type-font-default`, `--type-desktop-body-default-size`, `--type-body-sm-*`
- **Focus & radii:** `--shadow-focus-ntg`, `--shadow-focus-central`, `--radii-input`, `--radii-button`

---

**Component Library**: NT Government Web Design System
**Last Updated**: February 14, 2026
**Maintained by**: NT Government Design System Team
# DatePicker CSS Variables

This document describes all CSS custom properties (variables) used in the DatePicker component.

## Color Variables

### Background Colors

| Variable             | Description                  | Used For                                       |
| -------------------- | ---------------------------- | ---------------------------------------------- |
| `--clr-bg-default`   | Default background           | Input field, calendar popup                    |
| `--clr-bg-shade-alt` | Alternative shade background | Hover states on calendar dates, disabled input |
| `--clr-bg-shade`     | Shade background             | Alternative background states                  |

### Text Colors

| Variable              | Description               | Used For                                    |
| --------------------- | ------------------------- | ------------------------------------------- |
| `--clr-text-default`  | Default text color        | Input value, calendar text, labels          |
| `--clr-text-muted`    | Muted/secondary text      | Helper text, weekday headers, disabled text |
| `--clr-text-emphasis` | Emphasis/highlighted text | Today indicator (date and dot)              |
| `--clr-text-inverse`  | Inverse text (on dark)    | Selected date text                          |

### Border Colors

| Variable                 | Description         | Used For                                   |
| ------------------------ | ------------------- | ------------------------------------------ |
| `--clr-border-strong-02` | Strong border color | Input field outline, selected state        |
| `--clr-border-strong-01` | Strong border alt   | Alternative border                         |
| `--clr-border-subtle`    | Subtle border       | Calendar actions separator, disabled state |

### Status Colors

| Variable               | Description         | Used For                                              |
| ---------------------- | ------------------- | ----------------------------------------------------- |
| `--clr-status-success` | Success status      | Validation success outline and message                |
| `--clr-status-danger`  | Danger/error status | Validation error outline, required indicator, message |

### Action Colors

| Variable               | Description        | Used For                                 |
| ---------------------- | ------------------ | ---------------------------------------- |
| `--clr-action-primary` | Primary action     | Selected date background, Confirm button |
| `--clr-action-hover`   | Hover action state | Selected date on hover                   |

### Focus Colors

| Variable            | Description     | Used For                               |
| ------------------- | --------------- | -------------------------------------- |
| `--clr-focus-focus` | Focus indicator | Focus outline for interactive elements |

## Spacing Variables

| Variable    | Size (px) | Description | Used For                                        |
| ----------- | --------- | ----------- | ----------------------------------------------- |
| `--sp-xs`   | 8         | Extra small | Gap between label/helper, weekday padding       |
| `--sp-sm`   | 12        | Small       | Small button padding                            |
| `--sp-md`   | 16        | Medium      | Input padding, calendar padding, button spacing |
| `--sp-lg`   | 20        | Large       | Navigation button size                          |
| `--sp-xl`   | 24        | Extra large | Button padding                                  |
| `--sp-xxxl` | 48        | 3X Large    | Input field min-height                          |

## Typography Variables

| Variable                           | Description              | Used For                            |
| ---------------------------------- | ------------------------ | ----------------------------------- |
| `--type-font-default`              | Default font family      | All text in the component           |
| `--type-desktop-body-default-size` | Body default size        | Input, calendar text, labels        |
| `--type-body-default-lh`           | Body default line-height | All body text                       |
| `--type-body-sm-size`              | Small body size          | Helper text, weekday headers        |
| `--type-body-sm-lh`                | Small body line-height   | Small text line-height              |
| `--type-desktop-h6-size`           | Heading 6 size           | Large input field (form-control-lg) |

## Border Radius Variables

| Variable         | Description          | Used For                       |
| ---------------- | -------------------- | ------------------------------ |
| `--radii-input`  | Input border radius  | Input field, calendar dropdown |
| `--radii-button` | Button border radius | Navigation and date buttons    |

## Shadow Variables

| Variable                 | Description          | Used For                            |
| ------------------------ | -------------------- | ----------------------------------- |
| `--shadow-focus-ntg`     | NTG focus shadow     | Focus outlined outline (4px orange) |
| `--shadow-focus-central` | Central focus shadow | Central theme focus outline         |
| `--shadow-dropdown`      | Dropdown shadow      | Calendar popup elevation            |

## Component-Specific CSS Variables

### Input Field

```css
.date-picker-input {
  /* Bootstrap integration */
  - form-control          /* Bootstrap class */

  /* Spacing */
  - padding-left: var(--sp-md)
  - padding-right: calc(var(--sp-md) * 3)
  - min-height: var(--sp-xxxl)

  /* Colors */
  - background: var(--clr-bg-default)
  - color: var(--clr-text-default)
  - outline-color: var(--clr-border-strong-02)

  /* Typography */
  - font-size: var(--type-desktop-body-default-size)
  - font-family: var(--type-font-default)

  /* Focus state (NTG) */
  - box-shadow: 0 0 0 4px #EC8C58  /* Direct NTG orange */
}
```

### Label

```css
.date-picker-label {
  - color: var(--clr-text-default)
  - font-size: var(--type-desktop-body-default-size)
  - font-weight: 700
}

.date-picker-required {
  - color: var(--clr-status-danger)
  - font-size: var(--type-body-sm-size)
}
```

### Helper Text

```css
.date-picker-helper {
  - color: var(--clr-text-muted)
  - font-size: var(--type-body-sm-size)
}
```

### Calendar Dropdown

```css
.date-picker-dropdown {
  - background: var(--clr-bg-default)
  - border-radius: var(--radii-input)
  - padding: var(--sp-md)
  - box-shadow: var(--shadow-dropdown)
}
```

### Calendar Header

```css
.calendar-header {
  - margin-bottom: var(--sp-md)
  - gap: var(--sp-xs)
}

.calendar-nav-button {
  - width: var(--sp-lg)
  - height: var(--sp-lg)
  - border-radius: var(--radii-button)
  - color: var(--clr-text-default)

  /* Hover state */
  - background: var(--clr-bg-shade-alt)

  /* Focus state */
  - box-shadow: var(--shadow-focus-*) /* Theme-specific */
}

.calendar-month,
.calendar-year {
  - color: var(--clr-text-default)
  - font-size: var(--type-desktop-body-default-size)
  - font-weight: 700
}
```

### Calendar Weekdays

```css
.calendar-weekday {
  - color: var(--clr-text-muted)
  - font-size: var(--type-body-sm-size)
  - padding: var(--sp-xs)
}
```

### Calendar Dates

```css
.calendar-date {
  - padding: var(--sp-xs)
  - border-radius: var(--radii-button)

  /* Default state */
  - color: var(--clr-text-default)

  /* Hover state */
  - background: var(--clr-bg-shade-alt)

  /* Other month dates */
  - color: var(--clr-text-muted)

  /* Today indicator */
  - color: var(--clr-text-emphasis)
  - background-color: var(--clr-text-emphasis) /* Dot color */

  /* Selected date */
  - background: var(--clr-action-primary)
  - color: var(--clr-text-inverse)
}
```

### Calendar Actions

```css
.calendar-actions {
  - border-top: 1px solid var(--clr-border-subtle)
  - gap: var(--sp-xs)
  - padding-top: var(--sp-xs)
}

.calendar-actions .btn {
  - /* Uses Bootstrap btn classes */
  - padding: var(--sp-md) var(--sp-xl)
}
```

### Validation Messages

```css
.date-picker-message {
  - font-size: var(--type-body-sm-size)
  - gap: var(--sp-xs)
}

.date-picker-message--success {
  - color: var(--clr-status-success)
}

.date-picker-message--error {
  - color: var(--clr-status-danger)
}
```

## Theme-Specific Overrides

### NTG Theme (DatePicker-ntg.css)

- `--radii-input`: `var(--ntg-radii-input)`
- `--radii-button`: `var(--ntg-radii-button)`
- **Focus shadow**: `0 0 0 4px #EC8C58` (4px orange outline)

### Central Theme (DatePicker-central.css)

- `--radii-input`: `var(--central-radii-input)`
- `--radii-button`: `var(--central-radii-button)`
- **Focus shadow**: `0 0 0 3px var(--central-clr-focus-focus)` (Central theme focus)

## Bootstrap Integration

The DatePicker component integrates with Bootstrap form styling:

```css
.date-picker-input {
  /* Inherits Bootstrap form-control class */
  - form-control

  /* Can be combined with Bootstrap sizing */
  - form-control-sm
  - form-control-lg
}

.calendar-actions .btn {
  /* Uses Bootstrap button classes */
  - btn btn-primary
  - btn btn-secondary
}
```

## Customization Examples

### Overriding Component Colors

To customize DatePicker colors, override semantic variables:

```css
:root {
  --clr-bg-default: #f5f5f5;
  --clr-text-default: #333;
  --clr-action-primary: #005a9c;
}
```

### Custom Border Radius

```css
:root {
  --radii-input: 8px;
  --radii-button: 4px;
}
```

### Custom Focus Shadow

```css
/* For custom theme */
:root {
  --shadow-focus-custom: 0 0 0 3px rgba(0, 90, 156, 0.25);
}

.date-picker-input:focus {
  box-shadow: var(--shadow-focus-custom);
}
```

## Migration from Bootstrap Select

If migrating from Bootstrap's native `<select>`, the DatePicker replaces it with calendar functionality while maintaining consistent CSS variable usage:

| Bootstrap Variable                | DatePicker Variable      |
| --------------------------------- | ------------------------ |
| `$form-select-bg`                 | `--clr-bg-default`       |
| `$form-select-color`              | `--clr-text-default`     |
| `$form-select-border-color`       | `--clr-border-strong-02` |
| `$form-select-focus-border-color` | `--clr-border-strong-02` |
| `$form-select-border-radius`      | `--radii-input`          |
| `$form-select-focus-box-shadow`   | `--shadow-focus-*`       |

## Machine-readable variable map (JSON)

```json
{
  "--clr-bg-default": {
    "type": "color",
    "usage": "input, calendar background"
  },
  "--clr-text-default": { "type": "color", "usage": "primary text" },
  "--clr-action-primary": {
    "type": "color",
    "usage": "selected date, confirm button"
  },
  "--clr-focus-focus": {
    "type": "color",
    "usage": "focus outline (theme-switchable)"
  },
  "--sp-md": { "type": "spacing", "usage": "input padding, calendar padding" },
  "--radii-input": { "type": "size", "usage": "input / dropdown border radius" }
}
```

## Quick override examples

Override globally:

```css
:root {
  --clr-action-primary: #007acc;
  --clr-focus-focus: rgba(0, 122, 204, 0.18);
  --radii-input: 8px;
}
```

Override for a single page or scope:

```css
.page--special {
  --clr-action-primary: #4a90e2;
}
```

## Visual regression guidance

Include these CSS variables in visual-regression snapshots to catch theme or focus regressions:

- `--clr-focus-focus`
- `--clr-action-primary`
- `--clr-text-emphasis` (today dot)
- `--clr-bg-default` (calendar background)

---

**Last Updated:** February 14, 2026
**Component Version:** 1.0.0
