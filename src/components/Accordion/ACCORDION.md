# Accordion Component

A collapsable and expandable panel of content that gives the user choice over what they see.

## Overview

Accordions allow users to show and hide related sections of content quickly. They are a useful component for content designers but should be used sparingly with care. If users would need most of the content on a page, it should be formatted in plain text, not hidden in an accordion. They are not a way to simply fit more content on a page.

## Usage

Accordions are always used in a group, and never individually. Clicking or tapping on a single accordion within a group will expand only that accordion. The 'open/close all' link at the top right of the component gives the user more options on how they consume the content.

## Design Tokens Used

The component leverages the following design tokens:

### Colors

- `--clr-bg-default`: Background color
- `--clr-bg-shade`: Header hover / open background (e.g. #F5F5F7)
- `--clr-border-subtle`: Border color (#D3D3D7)
- `--clr-link-default`: Title text color (#1F1F5F for NTG)
- `--clr-link-hover`: Hover state color (typically used for links)
- `--clr-text-default`: Body text color
- `--clr-focus-focus`: Focus outline color (4px focus ring)
- `--clr-text-emphasis`: Accent/emphasis colour

### Spacing

- `--sp-xl` (24px): Header and body padding
- `--sp-sm` (12px): Gap between icon and title
- `--sp-md` (16px): Margin below controls

### Typography

- `--type-font-default`: Font family (Lato for NTG, Roboto for Central)
- `--type-heading-h6-size`: Title font size (16px)
- `--type-heading-h6-weight`: Title font weight (700)
- `--type-heading-h6-lh`: Title line height (24px)
- `--type-body-default-size`: Body text size (16px)

### Borders

- `--border-width-md` (1px): Border width
- `--radii-none` (0px): Border radius (square corners)

## How to Use

### Implementation notes & Bootstrap overrides

- Accordion items have had Bootstrap defaults intentionally overridden to match the design tokens and the Figma spec:
  - `.accordion-item` — **no outer border** and **no border-radius** (we render a thin divider instead).
  - `.accordion-button` — `border-bottom: 1px solid var(--clr-border-subtle)` is applied (token: `--clr-border-subtle` / `--border-width-md`) and `border-radius` is removed via `--radii-none`.
  - Header `hover` and `open` states use `--clr-bg-shade` for background; text color remains `--clr-link-default`.
  - Focus outline is a **4px** solid ring using `--clr-focus-focus` (applies to both `:focus` and `:focus-visible`).
  - Bootstrap `box-shadow` focus ring is **suppressed** and replaced with the token-based outline.
  - `!important` is used sparingly where necessary to override Bootstrap-compiled rules (e.g. expanded header background, divider line).

These overrides ensure the Accordion matches NTG token-driven visual behaviour and accessibility requirements.

## Best Practices

### Basic Implementation

```tsx
import { Accordion } from "@/components/Accordion";

<Accordion
  items={[
    { id: "1", title: "Question 1", content: <p>Answer 1</p> },
    { id: "2", title: "Question 2", content: <p>Answer 2</p> },
    { id: "3", title: "Question 3", content: <p>Answer 3</p> },
  ]}
  showOpenCloseAll={true}
/>;
```

### With Icons

```tsx
<Accordion
  items={[
    {
      id: "1",
      title: "Licenses",
      content: <p>Information about licenses</p>,
      icon: "fa-light fa-id-card",
      showIcon: true,
    },
    {
      id: "2",
      title: "Permits",
      content: <p>Information about permits</p>,
      icon: "fa-light fa-file-certificate",
      showIcon: true,
    },
  ]}
/>
```

### Theme Variants

```tsx
// NT.GOV.AU theme (external)
<Accordion items={items} theme="ntg" />

// NTG Central theme (internal)
<Accordion items={items} theme="central" />
```

## Best Practices

### Do ✅

- Use to conceal content that would only be relevant to smaller groups of specific users
- Make sure the accordion fills the entire width of the content area
- Use on standard pages only, not on landing pages
- Always use accordions in groups, with a minimum of 3 to create a group
- Insert links and text formatting inside an accordion as required
- Make sure accordion headings are self-explanatory, descriptive and succinct

### Don't ❌

- Don't use accordions for the main information on a page, or for content that most users will need
- Never use one single accordion
- Don't use more than one accordion group per page
- An accordion group should not sit at the top of the page. It's usually the last piece of content but can be in the middle if required
- There should be no more than 6-8 accordions in a group
- Do not use a button within an accordion. Main calls to action should not be hidden
- Avoid using accordions for frequently asked questions (FAQs)
- Do not disable an accordion in a group
- Do not have only an accordion group on a page. They should supplement other content
- Do not put an accordion within an accordion
- Do not use an accordion for a very small piece of content, like a few words. Use dot pointed lists or paragraphs instead
- Do not use an accordion for very long content. Use different sections or pages instead
- Avoid using accordions to explain a stepped process

## Variants

### Default Accordion

Standard accordion where the user can choose which content to view. Only one accordion can be open at a time.

### Accordion with Icons

Use sparingly when an additional visual aid to clarify the accordion's title would help the user. Icons should be meaningful and directly related to the content.

### Always Open

Allows multiple accordions to be expanded simultaneously. Users can open and close accordions independently without affecting others.

## Accessibility

The Accordion component is fully accessible and follows WCAG 2.1 guidelines:

- **Keyboard Navigation**: Use Tab to navigate between accordion buttons, Enter or Space to expand/collapse
- **Screen Reader Support**: Proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-labelledby`)
- **Focus Indicators**: Clear, visible focus states that meet contrast requirements
- **Semantic HTML**: Uses heading elements (`<h2>`) for accordion headers

## Props

| Prop               | Type                   | Default  | Description                                    |
| ------------------ | ---------------------- | -------- | ---------------------------------------------- |
| `items`            | `AccordionItemProps[]` | Required | Array of accordion items to display            |
| `showOpenCloseAll` | `boolean`              | `true`   | Show "Open/Close all" controls                 |
| `alwaysOpen`       | `boolean`              | `false`  | Allow multiple items to be open simultaneously |
| `theme`            | `'ntg' \| 'central'`   | -        | Theme variant                                  |
| `className`        | `string`               | `''`     | Additional CSS class names                     |

### AccordionItemProps

| Prop          | Type              | Default  | Description                                           |
| ------------- | ----------------- | -------- | ----------------------------------------------------- |
| `id`          | `string`          | Required | Unique identifier for the accordion item              |
| `title`       | `string`          | Required | Title text displayed in the accordion header          |
| `content`     | `React.ReactNode` | Required | Content displayed when accordion is expanded          |
| `defaultOpen` | `boolean`         | `false`  | Whether this accordion item should be open by default |
| `showIcon`    | `boolean`         | `false`  | Whether to show an icon in the accordion header       |
| `icon`        | `string`          | -        | FontAwesome icon class (e.g., 'fa-light fa-home')     |

## Browser Support

The Accordion component works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- **Card**: For static content containers
- **Callout**: For highlighted information
- **Notification**: For alerts and messages
# Accordion Component - CSS Variables Customization

This document describes the Bootstrap CSS variables used to customize the Accordion component and how they map to the NTG Design System tokens.

## Overview

The Accordion component uses Bootstrap 5.3's CSS variable approach for customization. This allows for flexible theming and easy customization without modifying the component's core styles.

## Bootstrap Variables Used

### Container Variables

```css
.accordion {
  --bs-accordion-border-color: var(--clr-border-subtle);
  --bs-accordion-border-width: var(--border-width-md);
  --bs-accordion-border-radius: var(--radii-none);
  --bs-accordion-inner-border-radius: var(--radii-none);
  --bs-accordion-bg: var(--clr-bg-default);
  --bs-accordion-color: var(--clr-text-default);
  --bs-accordion-active-bg: var(--clr-bg-shade);
  --bs-accordion-active-color: var(--clr-link-default);
}
```

| Bootstrap Variable                   | Design Token          | Value (NTG) | Description                          |
| ------------------------------------ | --------------------- | ----------- | ------------------------------------ |
| `--bs-accordion-border-color`        | `--clr-border-subtle` | #D3D3D7     | Border color between accordion items |
| `--bs-accordion-border-width`        | `--border-width-md`   | 1px         | Border thickness                     |
| `--bs-accordion-border-radius`       | `--radii-none`        | 0px         | Outer border radius (square corners) |
| `--bs-accordion-inner-border-radius` | `--radii-none`        | 0px         | Inner border radius                  |
| `--bs-accordion-bg`                  | `--clr-bg-default`    | #FFFFFF     | Accordion background color           |
| `--bs-accordion-color`               | `--clr-text-default`  | #1F1E27     | Default text color                   |
| `--bs-accordion-active-bg`           | `--clr-bg-default`    | #FFFFFF     | Background when expanded             |
| `--bs-accordion-active-color`        | `--clr-link-default`  | #1F1F5F     | Text color when expanded             |

### Button Variables

```css
.accordion-button {
  --bs-accordion-btn-padding-x: var(--sp-xl);
  --bs-accordion-btn-padding-y: var(--sp-xl);
  --bs-accordion-btn-color: var(--clr-link-default);
  --bs-accordion-btn-bg: var(--clr-bg-default);
  --bs-accordion-btn-icon-width: 24px;
  --bs-accordion-btn-focus-box-shadow: none;
}
```

| Bootstrap Variable                    | Design Token         | Value (NTG) | Description                          |
| ------------------------------------- | -------------------- | ----------- | ------------------------------------ |
| `--bs-accordion-btn-padding-x`        | `--sp-xl`            | 24px        | Horizontal padding                   |
| `--bs-accordion-btn-padding-y`        | `--sp-xl`            | 24px        | Vertical padding                     |
| `--bs-accordion-btn-color`            | `--clr-link-default` | #1F1F5F     | Button text color                    |
| `--bs-accordion-btn-bg`               | `--clr-bg-default`   | #FFFFFF     | Button background                    |
| `--bs-accordion-btn-icon-width`       | -                    | 24px        | Chevron icon width                   |
| `--bs-accordion-btn-focus-box-shadow` | -                    | none        | Focus shadow (replaced with outline) |

### Body Variables

```css
.accordion-body {
  --bs-accordion-body-padding-x: var(--sp-xl);
  --bs-accordion-body-padding-y: var(--sp-xl);
}
```

| Bootstrap Variable              | Design Token | Value (NTG) | Description                |
| ------------------------------- | ------------ | ----------- | -------------------------- |
| `--bs-accordion-body-padding-x` | `--sp-xl`    | 24px        | Content horizontal padding |
| `--bs-accordion-body-padding-y` | `--sp-xl`    | 24px        | Content vertical padding   |

## Typography Customization

The accordion button uses design token typography values directly:

```css
.accordion-button {
  font-family: var(--type-font-default);
  font-size: var(--type-heading-h6-size);
  font-weight: var(--type-heading-h6-weight);
  line-height: var(--type-heading-h6-lh);
}
```

| Property      | Design Token               | Value (NTG) |
| ------------- | -------------------------- | ----------- |
| `font-family` | `--type-font-default`      | Lato        |
| `font-size`   | `--type-heading-h6-size`   | 16px        |
| `font-weight` | `--type-heading-h6-weight` | 700         |
| `line-height` | `--type-heading-h6-lh`     | 24px        |

## State Customization

### Hover State

```css
.accordion-button:hover {
  /* text color stays as token; background uses shade */
  color: var(--clr-link-default);
  background-color: var(--clr-bg-shade);
}
```

- Hover keeps title `color` at `--clr-link-default` (neutral/brand link tone)
- Header background uses `--clr-bg-shade` to indicate hover/closed emphasis
- Theme variants use theme-prefixed tokens (e.g. `--central-clr-bg-shade`) where appropriate

### Focus State

We override Bootstrap's default focus box-shadow and replace it with a token-driven outline for clarity and accessibility.

```css
/* Common (applies to focus and focus-visible) */
.accordion-button:focus,
.accordion-button:focus-visible {
  outline: 4px solid var(--clr-focus-focus); /* token */
  outline-offset: 0;
  box-shadow: none !important; /* reset Bootstrap */
}

/* Theme-specific (central) */
[data-theme="central"] .accordion-button:focus,
[data-theme="central"] .accordion-button:focus-visible {
  outline: 4px solid var(--central-clr-focus-focus);
}
```

- Focus uses `--clr-focus-focus` (NTG) or `--central-clr-focus-focus` (Central) at **4px**
- Bootstrap focus `box-shadow` is explicitly suppressed to prevent double rings
- Focus applies to both closed (`.collapsed:focus`) and open (`:not(.collapsed):focus`) headers

## Borders & radius

- `.accordion-item` has no outer border and no border-radius (we rely on a thin divider line instead).
- `.accordion-button` renders a subtle divider using `border-bottom: var(--border-width-md) solid var(--clr-border-subtle)` (token-driven).
- `border-radius` is intentionally set to `var(--radii-none)` for square corners.
- Several Bootstrap-compiled rules (expanded header background, box-shadow, rounded corners) are overridden with token-driven values; `!important` is used only where necessary to ensure token precedence.

## Icon Customization

### Icon Container

```css
.accordion-button-icon {
  width: 24px;
  height: 24px;
  margin-right: var(--sp-sm);
  color: var(--clr-link-default);
}
```

| Property       | Design Token         | Value   | Description                    |
| -------------- | -------------------- | ------- | ------------------------------ |
| `width`        | -                    | 24px    | Fixed icon width (from Figma)  |
| `height`       | -                    | 24px    | Fixed icon height (from Figma) |
| `margin-right` | `--sp-sm`            | 12px    | Gap between icon and title     |
| `color`        | `--clr-link-default` | #1F1F5F | Icon color                     |

## Open/Close All Controls

```css
.accordion-controls {
  margin-bottom: var(--sp-md);
}

.accordion-controls-link {
  color: var(--clr-link-default);
  font-family: var(--type-font-default);
  font-size: var(--type-body-default-size);
  font-weight: var(--type-body-default-weight);
  line-height: var(--type-body-default-lh);
}
```

## Theme Switching

The component supports two themes through the `data-theme` attribute:

### NT.GOV.AU Theme (Default)

- Font: Lato
- Primary color: Blue (#1F1F5F)
- Accent color: Ochre (#C33826)

### NTG Central Theme

- Font: Roboto
- Primary color: Blue (#102040)
- Accent color: Green

## Custom Overrides

To override accordion styles, you can target the component with custom CSS:

```css
/* Custom background color */
.my-custom-accordion .accordion-button {
  --bs-accordion-btn-bg: #f0f0f0;
}

/* Custom padding */
.my-custom-accordion .accordion-body {
  --bs-accordion-body-padding-x: 32px;
  --bs-accordion-body-padding-y: 32px;
}

/* Custom border */
.my-custom-accordion {
  --bs-accordion-border-color: #000000;
  --bs-accordion-border-width: 2px;
}
```

## Design Token Integration

All Accordion CSS variables map to the design token system:

- **Colors**: Use semantic variables like `--clr-link-default`, `--clr-border-subtle`
- **Spacing**: Uses `--sp-xxs`, `--sp-xs`, `--sp-sm`, `--sp-md`, `--sp-xl` tokens
- **Typography**: References `--type-heading-h6-*` and `--type-body-default-*` tokens
- **Borders**: Uses `--border-width-md` and `--radii-none`

This ensures consistency across the design system and enables theme switching.

## Browser Compatibility

CSS custom properties are supported in:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

## Related Documentation

- [Bootstrap Accordion Documentation](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md)
- [Theme Guide](../../themes/THEMES.md)
