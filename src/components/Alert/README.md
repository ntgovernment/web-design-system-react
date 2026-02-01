# Alert Component

A flexible alert component for displaying important messages with contextual styling, icons, and optional dismiss functionality.

## Features

- Eight contextual variants (primary, secondary, success, danger, warning, info, light, dark)
- Optional dismiss button
- Icon support
- Callback on dismiss
- Full TypeScript support
- Bootstrap 5.3 styling
- ARIA role="alert" for accessibility

## Usage

### Basic Alert

```tsx
import { Alert } from '@ntgovernment/web-design-system';

<Alert variant="success">
  Operation completed successfully!
</Alert>
```

### Alert with Icon

```tsx
<Alert variant="success" icon="fa-solid fa-circle-check">
  Your changes have been saved!
</Alert>

<Alert variant="danger" icon="fa-solid fa-triangle-exclamation">
  An error occurred while processing your request.
</Alert>

<Alert variant="info" icon="fa-solid fa-circle-info">
  New features are now available in your dashboard.
</Alert>
```

### Dismissible Alert

```tsx
<Alert 
  variant="warning" 
  dismissible 
  onDismiss={() => console.log('Alert dismissed')}
>
  Please review the pending items before proceeding.
</Alert>
```

### Alert with Icon and Dismiss

```tsx
<Alert 
  variant="success" 
  icon="fa-solid fa-check-circle"
  dismissible
  onDismiss={() => handleAlertClose()}
>
  Profile updated successfully!
</Alert>
```

## Props

### AlertProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `'primary'` | Alert contextual variant for background/text color |
| `children` | `React.ReactNode` | **Required** | Alert message content |
| `dismissible` | `boolean` | `false` | Shows dismiss button if true |
| `onDismiss` | `() => void` | `undefined` | Callback function called when alert is dismissed |
| `icon` | `string` | `undefined` | FontAwesome icon class (e.g., 'fa-solid fa-circle-check') |

## Variants

The Alert component supports eight contextual variants:

| Variant | Use Case | Recommended Icon | Example |
|---------|----------|------------------|---------|
| `primary` | Primary/general information | `fa-circle-info` | System announcements |
| `secondary` | Secondary/less prominent info | `fa-bookmark` | Optional tips |
| `success` | Success messages, confirmations | `fa-circle-check` | "Saved successfully" |
| `danger` | Errors, critical issues | `fa-circle-xmark`, `fa-triangle-exclamation` | "Error occurred" |
| `warning` | Warnings, cautionary messages | `fa-triangle-exclamation` | "Review required" |
| `info` | Informational messages | `fa-circle-info` | "New update available" |
| `light` | Light-themed alerts | - | Subtle messages |
| `dark` | Dark-themed alerts | - | High contrast messages |

## Examples

### Status Messages

```tsx
// Success
<Alert variant="success" icon="fa-solid fa-circle-check">
  Your account has been created successfully!
</Alert>

// Info
<Alert variant="info" icon="fa-solid fa-circle-info">
  System maintenance will occur tonight from 10 PM to 2 AM.
</Alert>

// Warning
<Alert variant="warning" icon="fa-solid fa-triangle-exclamation">
  Your session will expire in 5 minutes.
</Alert>

// Danger
<Alert variant="danger" icon="fa-solid fa-circle-xmark">
  Failed to save changes. Please try again.
</Alert>
```

### Form Validation

```tsx
function FormWithValidation() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (/* validation fails */) {
      setError('Please fill in all required fields.');
      return;
    }
    
    // Submit form
    setSuccess(true);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Alert 
          variant="danger" 
          icon="fa-solid fa-circle-xmark"
          dismissible
          onDismiss={() => setError(null)}
        >
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert 
          variant="success" 
          icon="fa-solid fa-circle-check"
          dismissible
          onDismiss={() => setSuccess(false)}
        >
          Form submitted successfully!
        </Alert>
      )}
      
      {/* Form fields */}
    </form>
  );
}
```

### Notification System

```tsx
function NotificationCenter() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Document uploaded', icon: 'fa-solid fa-upload' },
    { id: 2, type: 'info', message: 'You have 3 new messages', icon: 'fa-solid fa-envelope' },
    { id: 3, type: 'warning', message: 'Low storage space', icon: 'fa-solid fa-database' },
  ]);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div>
      {notifications.map(notif => (
        <Alert
          key={notif.id}
          variant={notif.type}
          icon={notif.icon}
          dismissible
          onDismiss={() => removeNotification(notif.id)}
        >
          {notif.message}
        </Alert>
      ))}
    </div>
  );
}
```

### Rich Content Alerts

```tsx
<Alert variant="info" icon="fa-solid fa-lightbulb">
  <strong>Pro Tip:</strong> You can save time by using keyboard shortcuts. 
  Press <kbd>Ctrl+S</kbd> to save or <kbd>Ctrl+Z</kbd> to undo.
</Alert>

<Alert variant="warning" icon="fa-solid fa-clock">
  <h4 className="alert-heading">Deadline Approaching</h4>
  <p>Your project submission is due in 2 days.</p>
  <hr />
  <p className="mb-0">
    <a href="#" className="alert-link">Review guidelines</a> before submitting.
  </p>
</Alert>
```

## Accessibility

### ARIA Role
The Alert component automatically includes `role="alert"` which announces the alert to screen readers immediately when it appears.

### Dismissible Alerts
The dismiss button includes:
- `aria-label="Close"` for screen reader users
- Proper click/keyboard handling
- Visual close icon (×)

### Icons
Icons in alerts are marked with `aria-hidden="true"` to prevent redundant announcements, since the alert text already conveys the message.

### Color Independence
While variants use color to convey meaning, the message text should be clear without relying solely on color. Use descriptive text and icons to reinforce the message type.

### Focus Management
When an alert is dismissed:
- Focus should move to a logical location (next alert, form field, etc.)
- Handle this in your `onDismiss` callback if needed

## Styling

### Bootstrap Classes
The Alert component uses Bootstrap 5.3's alert component with contextual classes:
- `.alert` - Base alert styling
- `.alert-{variant}` - Contextual colors
- `.alert-dismissible` - Adds spacing for dismiss button
- `.fade .show` - Smooth transitions

### Custom Styling
Alerts can include custom HTML and Bootstrap utility classes:

```tsx
<Alert variant="success">
  <div className="d-flex align-items-center">
    <Icon icon="fa-solid fa-check-circle" size="2x" className="me-3" />
    <div>
      <h5 className="mb-1">Success!</h5>
      <p className="mb-0">Your operation completed successfully.</p>
    </div>
  </div>
</Alert>
```

### Positioning
Common alert positioning patterns:

```tsx
// Top of page
<div className="container mt-3">
  <Alert variant="info">Welcome to the dashboard!</Alert>
</div>

// Fixed top notification
<div className="position-fixed top-0 start-50 translate-middle-x p-3" style={{ zIndex: 11 }}>
  <Alert variant="success" dismissible>
    Changes saved!
  </Alert>
</div>

// Inline with content
<div className="card">
  <div className="card-body">
    <Alert variant="warning" className="mb-3">
      This action cannot be undone.
    </Alert>
    <button className="btn btn-danger">Delete</button>
  </div>
</div>
```

## State Management

### Managing Alert Visibility

```tsx
function ComponentWithAlert() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert && (
        <Alert
          variant="info"
          dismissible
          onDismiss={() => setShowAlert(false)}
        >
          This is a dismissible alert.
        </Alert>
      )}
    </>
  );
}
```

### Auto-Dismiss After Timeout

```tsx
function AutoDismissAlert({ message, duration = 5000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <Alert
      variant="success"
      icon="fa-solid fa-check"
      dismissible
      onDismiss={() => setVisible(false)}
    >
      {message}
    </Alert>
  );
}
```

## Related Documentation

- [Icon Component](../Icon/README.md) - Using icons independently
- [Card Component](../Card/README.md) - Similar contextual variants
- [Button Component](../Button/README.md) - For alert actions
- [Theming Guide](../../themes/README.md) - Theme system overview

## Storybook

View live examples and interact with the Alert component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > Alert** to see all variants and configurations.

## TypeScript

The Alert component is fully typed with TypeScript. Import the types:

```tsx
import { Alert, AlertProps } from '@ntgovernment/web-design-system';

// Use AlertProps for custom wrappers or extensions
const MyCustomAlert: React.FC<AlertProps> = (props) => {
  return <Alert {...props} />;
};
```

## Browser Support

The Alert component supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3.3 must be loaded for proper styling
- FontAwesome must be loaded if using the `icon` prop
- The `children` prop is required - alerts must have content
- Dismiss button requires Bootstrap's JavaScript for the fade transition (or handle manually)
- Use meaningful text content, not just relying on color/icons for meaning
- Consider auto-dismissing success messages while keeping error messages persistent
