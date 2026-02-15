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
