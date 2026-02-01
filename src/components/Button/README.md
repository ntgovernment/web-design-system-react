# Button Component

A customizable button component with theme support, icon integration, and accessibility features.

## Features

- Three button variants (primary, secondary, tertiary)
- Small size variant
- Icon support with left/right positioning
- Icon-only mode (children optional)
- Full TypeScript support
- Theme-specific styling (NTG and Central themes)
- Accessible HTML button properties

## Usage

### Basic Button

```tsx
import { Button } from '@ntgovernment/web-design-system';

<Button variant="primary" label="Click me" />
<Button variant="secondary" label="Cancel" />
<Button variant="tertiary" label="More options" />
```

### Small Size

```tsx
<Button variant="primary" size="sm" label="Small Button" />
```

### With Icons

```tsx
// Icon on the left
<Button variant="primary" iconLeft="fa-solid fa-home" label="Home" />

// Icon on the right
<Button variant="primary" iconRight="fa-solid fa-arrow-right" label="Next" />

// Icon-only button (requires aria-label for accessibility)
<Button
  variant="primary"
  iconLeft="fa-solid fa-search"
  aria-label="Search"
/>
```

### Disabled State

```tsx
<Button variant="primary" disabled label="Disabled Button" />
```

### With Click Handler

```tsx
const handleClick = () => {
  console.log("Button clicked!");
};

<Button variant="primary" onClick={handleClick} label="Click me" />;
```

### Custom Button Type

```tsx
<Button variant="primary" type="submit" label="Submit Form" />
```

## Props

### ButtonProps

| Prop        | Type                                                   | Default     | Description                                                             |
| ----------- | ------------------------------------------------------ | ----------- | ----------------------------------------------------------------------- |
| `variant`   | `'primary' \| 'secondary' \| 'tertiary'`               | `'primary'` | Button style variant                                                    |
| `size`      | `'sm'`                                                 | `undefined` | Button size (smaller variant)                                           |
| `label`     | `string`                                               | `undefined` | Button text label                                                       |
| `iconLeft`  | `string`                                               | `undefined` | FontAwesome icon class for left side (e.g., 'fa-solid fa-home')         |
| `iconRight` | `string`                                               | `undefined` | FontAwesome icon class for right side (e.g., 'fa-solid fa-arrow-right') |
| `disabled`  | `boolean`                                              | `false`     | Disables the button                                                     |
| `onClick`   | `(event: React.MouseEvent<HTMLButtonElement>) => void` | `undefined` | Click handler function                                                  |
| `type`      | `'button' \| 'submit' \| 'reset'`                      | `'button'`  | HTML button type                                                        |
| `className` | `string`                                               | `undefined` | Additional CSS classes                                                  |
| ...props    | `React.ButtonHTMLAttributes<HTMLButtonElement>`        | -           | All standard HTML button attributes                                     |

## Accessibility

### Icon-Only Buttons

Icon-only buttons (buttons without a `label`) **must** include an `aria-label` to be accessible to screen readers:

```tsx
// ✅ Correct - has aria-label
<Button iconLeft="fa-solid fa-search" aria-label="Search" />

// ❌ Incorrect - missing aria-label
<Button iconLeft="fa-solid fa-search" />
```

### Icons in Buttons with Text

When a button has both an icon and a label, the icon is automatically marked with `aria-hidden="true"` to prevent duplication for screen readers:

```tsx
<Button iconLeft="fa-solid fa-home" label="Home" />
// The icon is decorative and hidden from screen readers
```

### Keyboard Navigation

Buttons support standard keyboard interaction:

- **Enter** or **Space**: Activates the button
- **Tab**: Moves focus to/from the button

### Disabled State

Disabled buttons:

- Cannot be focused or activated
- Are announced as "disabled" by screen readers
- Have reduced opacity for visual indication

## Theming

The Button component uses Bootstrap 5.3 classes and theme-specific CSS files for styling:

- **Common styles**: `Button.css` - Shared styles for all themes
- **NTG theme**: `Button-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `Button-central.css` - NTG Central theme overrides

### Theme Differences

| Feature       | NTG Theme           | Central Theme       |
| ------------- | ------------------- | ------------------- |
| Font Family   | Lato                | Roboto              |
| Border Radius | Sharp corners (0px) | Pill-shaped (50rem) |
| Primary Color | NT.GOV.AU Orange    | NTG Central Blue    |

### Using CSS Variables in Your Theme

See [Button/CSS_VARIABLES.md](CSS_VARIABLES.md) for detailed information about customizing Button styles using CSS variables.

## Examples

### Full Example with All Features

```tsx
import { Button } from "@ntgovernment/web-design-system";

function MyComponent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      {/* Primary action */}
      <Button
        variant="primary"
        iconLeft="fa-solid fa-check"
        onClick={handleSubmit}
        label="Save Changes"
      />

      {/* Secondary action */}
      <Button variant="secondary" iconLeft="fa-solid fa-times" label="Cancel" />

      {/* Tertiary/less prominent action */}
      <Button variant="tertiary" label="View Details" />

      {/* Small icon-only button */}
      <Button
        variant="primary"
        size="sm"
        iconLeft="fa-solid fa-edit"
        aria-label="Edit"
      />
    </div>
  );
}
```

### Integration with Forms

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" name="username" />

  <Button
    type="submit"
    variant="primary"
    iconLeft="fa-solid fa-paper-plane"
    label="Submit"
  />

  <Button type="reset" variant="secondary" label="Reset" />
</form>
```

## Related Documentation

- [CSS Variables Customization](CSS_VARIABLES.md) - Detailed CSS variable documentation
- [Theming Guide](../../themes/README.md) - Theme system overview
- [Theme Switching](../../themes/THEME_SWITCHING.md) - Runtime theme switching
- [Icon Component](../Icon/README.md) - Using icons independently

## Storybook

View live examples and interact with the Button component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > Button** to see all variants and configurations.

## TypeScript

The Button component is fully typed with TypeScript. Import the types:

```tsx
import { Button, ButtonProps } from "@ntgovernment/web-design-system";

// Use ButtonProps for custom wrappers or extensions
const MyCustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Browser Support

The Button component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3.3 must be loaded (either via CDN or npm) for the component to style correctly
- FontAwesome must be loaded if using the `icon` prop
- The component extends all native HTML button attributes
- Custom CSS classes can be added via the `className` prop
