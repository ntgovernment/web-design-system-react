# GlobalAlert Component

## Overview

The GlobalAlert component is a prominent notification displayed across the entire site to communicate important information that affects all users. It sits above the header at the top of a website and is deliberately eye-catching and intrusive.

## Purpose

Global alerts inform users about something that affects the entire website, service, or all users. They are not initiated by user interaction or system events but are used to communicate critical, time-sensitive, or site-wide information.

## Usage

### When to Use

- **System-wide outages or maintenance**: Inform all users about planned or unplanned service disruptions
- **Emergency situations**: Communicate natural disasters, public health emergencies, or other critical events
- **Important policy changes**: Notify users about significant changes that affect everyone
- **Security alerts**: Warn about security issues that require immediate attention
- **Service updates**: Announce major updates or changes to services

### When NOT to Use

Do not use global alerts for:

- **System updates**: Use notification components instead
- **Validation errors**: Use inline validation or error messages
- **Small, localized incidents**: Use contextual notifications
- **Internal events**: Use email or internal communication channels
- **Marketing campaigns**: Use banners or promotional areas
- **Primary entry point for information**: Use proper navigation and content structure

### Best Practices

1. **Use sparingly**: Global alerts are intrusive and should be reserved for truly important information
2. **Be clear and concise**: Key actionable information should be visible at a glance
3. **Include links**: Provide links to follow-up information or calls to action wherever possible
4. **Limit quantity**: Try to use one global alert per site; maximum of three can be stacked
5. **Order by importance**: If stacking alerts, present them from top to bottom in order of importance
6. **Remove promptly**: Don't keep a global alert live longer than necessary
7. **One CTA maximum**: Use only one call-to-action button per alert

## Component Structure

A global alert includes:

- **Alert title**: Clear, concise heading (required)
- **Alert description**: Supporting information with optional inline links (required)
- **Optional dismiss button**: Allows users to hide the alert
- **Optional CTA button**: Single call-to-action for primary user action

## Variants

### Information (Blue)

The information variant is for low-level alerts indicating a minor problem or update that still affects the entire service or site and all users.

**Use for:**

- Service updates and improvements
- New feature announcements
- Non-critical system changes
- General announcements affecting all users

**Color:** Blue (#107CC0 - `var(--clr-status-info)`)

```tsx
<GlobalAlert
  variant="info"
  title="Service Update Available"
  description="A new version of our online services portal is now available. <a href='#'>Learn more</a>"
/>
```

### Information Alternative (Light Blue)

The information alternative variant uses a light blue background with dark text. This is an alternative color for websites where the default blue is prominent and the solid blue background may get lost or compete with other design elements.

**Use for:**

- Same use cases as Information variant
- Websites with prominent blue branding
- When better readability with dark text is preferred
- Content-heavy pages where solid colors may be distracting

**Color:** Light Blue (#E4F0F8 - `var(--clr-status-info-bg)`)  
**Text Color:** Dark (#1F1E27 - `var(--clr-text-default)`)

```tsx
<GlobalAlert
  variant="info-alt"
  title="Service Update Available"
  description="A new version of our online services portal is now available. <a href='#'>Learn more</a>"
/>
```

### Warning (Orange)

The warning variant should be used when an event has happened or is about to happen that poses a threat to or will seriously affect a service. It communicates ongoing crises that seriously affect a service's operation.

**Use for:**

- Planned maintenance affecting services
- Service disruptions or degraded performance
- Approaching deadlines requiring user action
- Weather events affecting services
- System migrations or significant changes

**Color:** Orange (#D6410A - `var(--clr-status-warning)`)

```tsx
<GlobalAlert
  variant="warning"
  title="Service Disruption Expected"
  description="Due to planned maintenance, services will be unavailable tonight. <a href='#'>View details</a>"
  ctaText="View Affected Services"
/>
```

### Critical (Red)

The critical variant should only be used for immediate, significant threats to the community, such as natural disasters, disease outbreaks, or other emergencies requiring immediate action.

**Use for:**

- Natural disasters (cyclones, floods, bushfires)
- Public health emergencieinfo-alt" \| "s
- Security threats
- Evacuation orders
- Emergency situations requiring immediate action

**Color:** Red (#A60F37 - `var(--clr-status-danger)`)

```tsx
<GlobalAlert
  variant="critical"
  title="Emergency: Bushfire Warning"
  description="Evacuate immediately. <a href='#'>View evacuation centers</a>"
  ctaText="Emergency Information"
  dismissible={true}
/>
```

## Props

| Prop           | Type                                | Default           | Description                                |
| -------------- | ----------------------------------- | ----------------- | ------------------------------------------ |
| `variant`      | `"info" \| "warning" \| "critical"` | `"info"`          | Alert severity level                       |
| `title`        | `string`                            | required          | Alert heading                              |
| `description`  | `string`                            | required          | Alert content (can include HTML for links) |
| `dismissible`  | `boolean`                           | `false`           | Show dismiss button                        |
| `onDismiss`    | `() => void`                        | -                 | Dismiss button click handler               |
| `dismissLabel` | `string`                            | `"Dismiss alert"` | Aria label for dismiss button              |
| `ctaText`      | `string`                            | -                 | CTA button text                            |
| `ctaOnClick`   | `() => void`                        | -                 | CTA button click handler                   |
| `ctaHref`      | `string`                            | -                 | CTA button href (renders as link)          |
| `className`    | `string`                            | -                 | Additional CSS classes                     |

## Examples

### Basic Information Alert

```tsx
import { GlobalAlert } from "@ntgovernment/web-design-system";

function App() {
  return (
    <GlobalAlert
      variant="info"
      title="System Maintenance Scheduled"
      description="Planned maintenance will occur tonight. Some services may be temporarily unavailable."
    />
  );
}
```

### Warning with CTA

```tsx
<GlobalAlert
  variant="warning"
  title="Action Required: License Expiring"
  description="Your license expires in 14 days. Renew now to avoid penalties."
  ctaText="Renew License"
  ctaHref="/renew"
/>
```

### Critical with Dismiss

```tsx
<GlobalAlert
  variant="critical"
  title="Emergency: Severe Weather Warning"
  description="Cyclone approaching. Follow emergency service directions. <a href='#'>View safety information</a>"
  dismissible={true}
  onDismiss={() => console.log("Alert dismissed")}
/>
```

### With Inline Link

```tsx
<GlobalAlert
  variant="info"
  title="New Features Available"
  description="We've updated our services. <a href='/features'>Explore new features</a> to learn more."
  dismissible={true}
/>
```

### Stacked Alerts

```tsx
function App() {
  return (
    <>
      <GlobalAlert
        variant="critical"
        title="Emergency Weather Warning"
        description="Severe weather event. Take immediate action."
        dismissible={true}
      />
      <GlobalAlert
        variant="warning"
        title="Service Disruption"
        description="Some services temporarily unavailable."
        dismissible={true}
      />
      <GlobalAlert
        variant="info"
        title="Scheduled Maintenance"
        description="Maintenance tonight 11 PM - 2 AM."
        dismissible={true}
      />
    </>
  );
}
```

## Design Tokens & CSS Variables

The GlobalAlert component uses design system tokens for consistent theming and overrides Bootstrap Alert CSS variables.

### Bootstrap CSS Variables Override

```css
--bs-alert-bg: transparent;
--bs-alert-padding-x: var(--sp-md);
--bs-alert-padding-y: var(--sp-xl);
--bs-alert-margin-bottom: 0;
--bs-alert-color: var(--clr-text-inverse);
--bs-alert-border-color: transparent;
--bs-alert-border: 0;
--bs-alert-border-radius: var(--ntg-radii-none, 0px);
--bs-alert-link-color: var(--clr-link-inverse);
```

### Design Tokens Used

#### Colors

- **Background (variants):**
  - Info: `var(--clr-status-info)` (#107CC0)
  - Info-alt: `var(--clr-status-info-bg)` (#E4F0F8)
  - Warning: `var(--clr-status-warning)` (#D6410A)
  - Critical: `var(--clr-status-danger)` (#A60F37)
- **Text (solid variants):** `var(--clr-text-inverse)` (white)
- **Text (info-alt):** `var(--clr-text-default)` (dark)
- **Links (solid variants):** `var(--clr-link-inverse)` (white)
- **Links (info-alt):** `var(--clr-link-default)` (dark)
- **Link hover:** `var(--clr-link-inverse-hover)` or `var(--clr-link-hover)`

#### Spacing

- **Container max-width:** 1168px
- **Padding vertical:** `var(--sp-xl)` (24px)
- **Padding horizontal:** `var(--sp-md)` (16px)
- **Content gap:** `var(--sp-md)` (16px)
- **Text gap:** `var(--sp-xs)` (8px)

#### Typography

- **Title:**
  - Size: `var(--type-heading-h4-size)` (20px)
  - Weight: `var(--type-heading-h4-weight)` (700)
  - Line height: `var(--type-heading-h4-lh)` (24px)
- **Description:**
  - Size: `var(--type-body-default-size)` (16px)
  - Weight: `var(--type-body-default-weight)` (400)
  - Line height: `var(--type-body-default-lh)` (24px)
- **Font family:** `var(--type-font-default)` (Lato)

#### Shadows

- **NTG focus:** `var(--shadow-focus-ntg)`
- **Central focus:** `var(--shadow-focus-central)`

#### Border Radius

- **NTG:** `var(--ntg-radii-none, 0px)` (no radius)
- **Central:** `var(--central-radii-none, 0px)` (no radius)

## Theme Support

The GlobalAlert component supports both NTG and Central themes through theme-specific CSS files.

### NTG Theme

```css
/* Import in your NTG theme bundle */
@import "GlobalAlert.css";
@import "GlobalAlert-ntg.css";
```

### Central Theme

```css
/* Import in your Central theme bundle */
@import "GlobalAlert.css";
@import "GlobalAlert-central.css";
```

### Theme Switching

The component automatically adapts to the active theme using the `[data-theme]` attribute:

```tsx
<body data-theme="ntg">
  <GlobalAlert variant="info" title="Alert" description="Content" />
</body>

<body data-theme="central">
  <GlobalAlert variant="info" title="Alert" description="Content" />
</body>
```

## Accessibility

### ARIA Attributes

- `role="alert"`: Announces the alert to screen readers
- `aria-label`: Provided for dismiss button (customizable via `dismissLabel` prop)

### Keyboard Navigation

- **Tab**: Navigate through links and buttons
- **Enter/Space**: Activate links and buttons
- **Escape**: Optionally dismiss alert (if implemented)

### Focus Management

- Visible focus indicators using theme-specific colors
- Focus outline width: 2px
- NTG focus color: `var(--ntg-orange-02)`
- Central focus color: `var(--central-success-02)`

### Screen Reader Considerations

- Alert role ensures screen readers announce the content
- Dismiss button has descriptive aria-label
- Link context provided within description

### Color Contrast

All variants meet WCAG AA standards for color contrast:

- White text on blue background (Info): Contrast ratio > 4.5:1
- White text on orange background (Warning): Contrast ratio > 4.5:1
- White text on red background (Critical): Contrast ratio > 4.5:1

## Responsive Behavior

### Mobile (< 768px)

- Padding reduced to `var(--sp-md)` (16px)
- Container switches to vertical layout
- Dismiss button aligns to flex-end
- Typography scales using mobile heading sizes
- Full width content area

### Tablet and Desktop (≥ 768px)

- Full padding: 24px vertical, 16px horizontal
- Horizontal layout with dismiss button on right
- Maximum content width enforced (1168px)
- Desktop typography sizes

## Implementation Notes

### Integration with Existing Sites

```tsx
// Place GlobalAlert above header
function Layout() {
  return (
    <>
      <GlobalAlert
        variant="info"
        title="Important Update"
        description="Service announcement"
      />
      <Header />
      <main>{/* content */}</main>
      <Footer />
    </>
  );
}
```

### State Management

```tsx
import { useState } from "react";
import { GlobalAlert } from "@ntgovernment/web-design-system";

function App() {
  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;

  return (
    <GlobalAlert
      variant="info"
      title="Welcome"
      description="Important announcement"
      dismissible={true}
      onDismiss={() => setShowAlert(false)}
    />
  );
}
```

### Multiple Alerts with Priority

```tsx
const alerts = [
  {
    id: 1,
    variant: "critical",
    title: "Emergency",
    description: "Critical information",
    priority: 1,
  },
  {
    id: 2,
    variant: "warning",
    title: "Warning",
    description: "Important notice",
    priority: 2,
  },
  {
    id: 3,
    variant: "info",
    title: "Update",
    description: "Service update",
    priority: 3,
  },
];

function App() {
  return (
    <>
      {alerts
        .sort((a, b) => a.priority - b.priority)
        .map((alert) => (
          <GlobalAlert
            key={alert.id}
            variant={alert.variant}
            title={alert.title}
            description={alert.description}
            dismissible={true}
          />
        ))}
    </>
  );
}
```

### Persistent Dismissal

```tsx
import { useState, useEffect } from "react";

function App() {
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem("alert-dismissed") === "true";
  });

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem("alert-dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <GlobalAlert
      variant="info"
      title="Update"
      description="New features available"
      dismissible={true}
      onDismiss={handleDismiss}
    />
  );
}
```

## HTML/CSS Only Implementation

For non-React implementations, use the CSS classes directly:

```html
<div class="global-alert global-alert--info" role="alert">
  <div class="global-alert__container">
    <div class="global-alert__content">
      <div class="global-alert__text">
        <div class="global-alert__title">System Maintenance Scheduled</div>
        <div class="global-alert__description">
          Planned maintenance tonight. <a href="#">More information</a>
        </div>
      </div>
      <div class="global-alert__actions">
        <a href="#" class="btn btn-secondary global-alert__cta">
          View Schedule
        </a>
      </div>
    </div>
    <button
      type="button"
      class="global-alert__dismiss"
      aria-label="Dismiss alert"
    >
      <i class="fa-light fa-xmark"></i>
    </button>
  </div>
</div>
```

## Testing

### Unit Tests

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { GlobalAlert } from "./GlobalAlert";

describe("GlobalAlert", () => {
  test("renders title and description", () => {
    render(
      <GlobalAlert
        variant="info"
        title="Test Title"
        description="Test Description"
      />,
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  test("calls onDismiss when dismiss button clicked", () => {
    const handleDismiss = jest.fn();
    render(
      <GlobalAlert
        variant="info"
        title="Test"
        description="Content"
        dismissible={true}
        onDismiss={handleDismiss}
      />,
    );

    fireEvent.click(screen.getByLabelText("Dismiss alert"));
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  test("applies correct variant class", () => {
    const { container } = render(
      <GlobalAlert variant="warning" title="Warning" description="Content" />,
    );

    expect(
      container.querySelector(".global-alert--warning"),
    ).toBeInTheDocument();
  });
});
```

### Visual Regression Tests

- Test all three variants (info, warning, critical)
- Test with and without dismiss button
- Test with and without CTA
- Test stacked alerts
- Test responsive breakpoints
- Test theme switching (NTG/Central)

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Migration from Bootstrap Alerts

If migrating from Bootstrap's standard alerts to GlobalAlert:

### Before (Bootstrap)

```html
<div class="alert alert-info" role="alert">This is an info alert</div>
```

### After (GlobalAlert)

```tsx
<GlobalAlert
  variant="info"
  title="Information"
  description="This is an info alert"
/>
```

### Key Differences

1. **Structure**: GlobalAlert has distinct title and description
2. **Positioning**: GlobalAlert is full-width, centered container
3. **Theming**: Uses design system tokens instead of Bootstrap variables
4. **Dismiss**: Explicit `dismissible` prop instead of modifier classes
5. **Variants**: Three specific variants (info, warning, critical) instead of 8+ Bootstrap variants

## Related Components

- **Notification**: For localized, contextual alerts within page content
- **Banner**: For hero sections and page introductions
- **Callout**: For highlighting important information within content

## Resources

- [Storybook Examples](/storybook/?path=/story/components-globalalert)
- [Design Tokens Documentation](/design-tokens/DESIGN-TOKENS.md)
- [Bootstrap Alert Documentation](https://getbootstrap.com/docs/5.3/components/alerts/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Version History

- **1.0.0** (2026-02-15): Initial release with info, warning, and critical variants

## Contributing

When contributing to this component:

1. Follow [Content Standards](../../CONTENT_STANDARDS.md) - no Lorem ipsum
2. Use design tokens for all colors, spacing, and typography
3. Ensure accessibility standards are met
4. Test across all supported browsers
5. Update documentation and stories
6. Add unit tests for new functionality

## Support

For questions or issues:

- Create an issue in the repository
- Contact the design system team
- Refer to the [Contributing Guide](../../CONTRIBUTING.md)
