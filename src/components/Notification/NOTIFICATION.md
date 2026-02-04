# Notification Component

The Notification component displays informational callouts with status-specific styling and icons. It features a distinctive left accent bar and structured content layout.

## Usage

```tsx
import { Notification } from "@your-org/design-system";

function App() {
  return (
    <Notification
      variant="info"
      title="Information alert"
      message="Your application has been submitted for review. You will receive an email notification once the review process is complete."
    />
  );
}
```

## Props

| Prop        | Type                                           | Default  | Description                                 |
| ----------- | ---------------------------------------------- | -------- | ------------------------------------------- |
| `variant`   | `"info" \| "success" \| "warning" \| "danger"` | `"info"` | The variant/status type of the notification |
| `title`     | `string`                                       | Required | The title/heading of the notification       |
| `message`   | `string`                                       | Required | The message content of the notification     |
| `className` | `string`                                       | -        | Additional CSS classes                      |

All standard HTML div attributes are also supported via spread props.

## Variants

### Info (Default)

Used for general informational messages.

```tsx
<Notification
  variant="info"
  title="Information alert"
  message="This is an informational message."
/>
```

### Success

Used to indicate successful completion of an action.

```tsx
<Notification
  variant="success"
  title="Success"
  message="Your action was completed successfully."
/>
```

### Warning

Used to display warnings or cautionary information.

```tsx
<Notification
  variant="warning"
  title="Warning"
  message="Please review this information carefully."
/>
```

### Danger

Used to display errors or critical issues.

```tsx
<Notification
  variant="danger"
  title="Error"
  message="An error has occurred. Please try again."
/>
```

## Features

- **Status-specific styling**: Each variant has a distinct color scheme based on design tokens
- **Automatic icons**: FontAwesome Light icons are automatically assigned based on variant
- **Left accent bar**: Visual 8px bar emphasizes the notification status
- **Structured content**: Separate title and message props ensure consistent layout
- **Flexible title**: Title is optional - when empty, no gap is rendered above the message
- **Responsive**: Text wraps appropriately for long content
- **Accessible**: Semantic HTML with proper ARIA roles

## Accessibility

- Uses `role="status"` for screen reader announcements
- Icons are marked with `aria-hidden="true"` as they are decorative
- FontAwesome Light icons provide clear visual indicators
- Color is not the only indicator of status (icon + text provide context)
- Meets WCAG AAA color contrast requirements for all variants
- Text is selectable and readable at all standard zoom levels
- Title can be omitted when not needed, improving content flexibility

## Design Tokens

The Notification component uses the following design tokens:

### Colors

- `--clr-bg-default`: Background color (white)
- `--clr-text-default`: Text color
- `--clr-status-info`: Info variant color (#107CC0)
- `--clr-status-success`: Success variant color (#107810)
- `--clr-status-warning`: Warning variant color (#D6410A)
- `--clr-status-danger`: Danger variant color (#A60F37)

### Spacing

- `--sp-xs` (8px): Accent bar width, content gaps
- `--sp-md` (16px): Gap between icon and text
- `--sp-xl` (24px): Content padding, icon font size
- `--sp-xxl` (32px): Icon container width and height

### Typography

- `--type-desktop-h3-size` (24px): Title font size
- `--type-body-default-size` (16px): Message font size
- `--type-font-default`: Font family (Lato)

### Borders

- `--border-width-md` (1px): Outline width

## Theme Support

The component supports both NT.GOV.AU and Central themes through semantic design tokens. Theme-specific overrides can be added to:

- `Notification-ntg.css`: NT.GOV.AU theme customizations
- `Notification-central.css`: Central theme customizations
