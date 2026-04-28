# Header Component

A comprehensive header component for site-wide navigation with logo, navigation links, search functionality, and theme support.

## Features

- Responsive navigation with logo, links, and search
- Bootstrap 5.3 navbar integration with CSS variable customization
- Integrated SearchBar component
- Icon support for navigation items
- Active state management for current page highlighting
- Custom logo support (image or custom React node)
- Theme-specific styling (NTG and Central themes)
- Fully accessible with ARIA attributes and keyboard navigation
- Mobile-responsive with collapsible navigation
- Print-optimized styles

## Usage

### NT.GOV.AU Variant (Default)

The primary NT Government header with desert-rose logo linking to https://nt.gov.au. No site title.

```tsx
import { Header } from "@ntgovernment/web-design-system";

<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
    },
    { label: "Contact", href: "/contact" },
  ]}
/>;
```

### Agency Internet Variant

For NT Government agency websites. Shows the NT Government mono logo (linking to nt.gov.au) with the agency name as a title link.

```tsx
<Header
  variant="agency-internet"
  logoAlt="Northern Territory Government"
  agencyName="Department of Health"
  agencyHref="https://health.nt.gov.au"
  navItems={[
    { label: "Programs", href: "/programs" },
    { label: "Contacts", href: "/contact" },
  ]}
/>
```

### Other Site Variant

Similar to agency-internet but with a different CSS class name for distinct styling. Use this for NT Government partner websites or other branded sites.

```tsx
<Header
  variant="other-site"
  logoAlt="Northern Territory Government"
  agencyName="My NT Services"
  agencyHref="/"
  navItems={[
    { label: "Dashboard", href: "/dashboard", icon: "fa-light fa-home" },
    { label: "Account", href: "/account", icon: "fa-light fa-user" },
  ]}
/>
```

### With Navigation Icons

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
    },
    {
      label: "Contacts",
      href: "/contact",
    },
  ]}
/>
```

### With Active State

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    { label: "Home", href: "/", active: false },
    { label: "Services", href: "/services", active: true },
    { label: "Contact", href: "/contact", active: false },
  ]}
/>
```

### With Search Handler

```tsx
const handleSearch = (query: string) => {
  console.log("Searching for:", query);
  // Implement your search logic
};

<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[{ label: "Home", href: "/" }]}
  searchPlaceholder="Search for services"
  onSearch={handleSearch}
/>;
```

### Icon Search Variant (Medium Layout)

Shows a search icon that expands to a full search bar when clicked. Ideal for responsive designs:

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
    },
    { label: "Contacts", href: "/contact" },
  ]}
  searchVariant="icon"
  searchPlaceholder="Search"
  onSearch={(query) => console.log(query)}
/>
```

The icon search variant:

- Shows only a search icon until clicked
- Expands to a full search bar when the icon is clicked
- Includes a close button (X icon) to collapse back to icon
- Auto-focuses the input when expanded
- Ideal for tablet/medium viewport sizes (max-width: 959px)

### With Custom Logo

```tsx
const CustomLogo = () => (
  <a href="/" className="custom-logo">
    <svg>...</svg>
    <span>Custom Brand</span>
  </a>
);

<Header
  customLogo={<CustomLogo />}
  navItems={[{ label: "Home", href: "/" }]}
/>;
```

## Props

### HeaderProps

| Prop                | Type                                               | Default       | Description                                                                    |
| ------------------- | -------------------------------------------------- | ------------- | ------------------------------------------------------------------------------ |
| `variant`           | `'nt-gov-au' \| 'agency-internet' \| 'other-site'` | `'nt-gov-au'` | Header layout variant (determines logo and title structure)                    |
| `agencyName`        | `string`                                           | `undefined`   | Agency or site name (shown in agency-internet and other-site variants)         |
| `agencyHref`        | `string`                                           | `"/"`         | URL the agency name links to (used by agency-internet and other-site variants) |
| `logoAlt`           | `string`                                           | `"NT.GOV.AU"` | Alt text for the logo image                                                    |
| `navItems`          | `HeaderNavItem[]`                                  | `[]`          | Array of navigation items                                                      |
| `showSearch`        | `boolean`                                          | `true`        | Whether to display the search bar                                              |
| `searchVariant`     | `'expanded' \| 'icon'`                             | `'expanded'`  | Search display variant: 'expanded' for full bar, 'icon' for icon-only          |
| `searchPlaceholder` | `string`                                           | `"Search"`    | Placeholder text for search input                                              |
| `onSearch`          | `(value: string) => void`                          | `undefined`   | Callback function when search is performed                                     |
| `className`         | `string`                                           | `undefined`   | Additional CSS class for the header element                                    |
| `customLogo`        | `React.ReactNode`                                  | `undefined`   | Custom content to replace the default logo (overrides variant)                 |
| ...props            | `React.HTMLAttributes<HTMLElement>`                | -             | All standard HTML header element attributes                                    |

### HeaderNavItem

| Property | Type      | Required | Description                                       |
| -------- | --------- | -------- | ------------------------------------------------- |
| `label`  | `string`  | Yes      | Text label for the navigation item                |
| `href`   | `string`  | Yes      | URL/path the navigation item links to             |
| `icon`   | `string`  | No       | FontAwesome icon class (e.g., 'fa-light fa-home') |
| `active` | `boolean` | No       | Whether this navigation item is currently active  |

### Mobile Layout with Hamburger Menu

On mobile devices (max-width: 767px), the header displays a hamburger menu icon instead of the full navigation list:

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
    },
    { label: "Contacts", href: "/contact" },
  ]}
  searchVariant="icon"
/>
```

/>

````

On mobile, this shows:

- Hamburger menu icon (three horizontal lines)
- Logo text
- Search icon (if enabled)
- Navigation items hidden until hamburger is clicked
- Mobile menu slides down below the header when opened
- Clicking a navigation item closes the menu automatically

### Expanded Search (Default)

The search bar is always visible and takes up horizontal space. Best for:

- Large desktop layouts with plenty of space
- When search is a primary action
- Desktop-first applications

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[...]}
  searchVariant="expanded"  // Always shows full search bar
  searchPlaceholder="Search"
/>
````

### Icon Search (Medium/Responsive)

Shows only a search icon until clicked, then expands to a full search bar. Best for:

- Responsive designs with limited space
- Tablet/medium viewport sizes (max-width: 959px)
- Mobile-first applications
- When search is a secondary action

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]}
  searchVariant="icon" // Shows search icon, expands on click
  searchPlaceholder="Search"
/>
```

**Features of Icon Search:**

- Search icon visible at all times
- Click icon to expand into full search bar
- Auto-focuses input when expanded
- Close button (X) to collapse back to icon
- Smooth transitions between states
- Accessible with proper ARIA labels

### Navigation Landmarks

The Header component uses semantic HTML5 elements for proper document structure:

```tsx
<header>
  <nav className="navbar">{/* Navigation content */}</nav>
</header>
```

Assistive technologies recognize this as the main navigation landmark.

### Active Page Indication

Active navigation items are marked with `aria-current="page"`:

```tsx
<a href="/services" aria-current="page">
  Services
</a>
```

This helps screen reader users understand which page they're currently on.

### Keyboard Navigation

All interactive elements support keyboard navigation:

- **Tab**: Navigate between logo, nav links, and search
- **Enter**: Activate links
- **Shift + Tab**: Navigate backwards

### Focus Management

Focus indicators use theme-specific colors and meet WCAG 2.1 standards:

- **NTG Theme**: 4px solid orange (#EC8C58)
- **Central Theme**: 4px solid green (#6AB06A)

Focus outlines are visible and have sufficient contrast against backgrounds.

### Logo Accessibility

The Header component provides appropriate semantic structure for all variants:

**NT.GOV.AU Variant:**

```tsx
<Header variant="nt-gov-au" logoAlt="NT.GOV.AU" />
```

The `logoAlt` prop provides alternative text for the desert-rose logo.

**Agency Internet Variant:**

```tsx
<Header
  variant="agency-internet"
  logoAlt="Northern Territory Government"
  agencyName="Department of Health"
  agencyHref="https://health.nt.gov.au"
/>
```

The header structure includes:

- NT Government mono logo link (to nt.gov.au) with `logoAlt` providing accessible text
- Agency name as a separate clickable link with semantic heading styling

### Hamburger Menu Accessibility

The hamburger menu button includes proper ARIA attributes:

```tsx
<button
  className="header__hamburger"
  aria-label="Toggle navigation menu"
  aria-expanded={isMobileMenuOpen}
  onClick={handleMenuToggle}
>
  {/* Three lines */}
</button>
```

This communicates to screen reader users:

- The button's purpose ("Toggle navigation menu")
- The current state (aria-expanded: true/false)
- When the menu opens/closes
- When to announce menu content

**Mobile Menu Accessibility:**

- Menu slides down with smooth animation
- Links within menu are keyboard navigable
- Focus management: First item receives focus when menu opens
- Escape key could close menu (consider implementing)
- Menu items marked with aria-current="page" when active
- Icons are decorative (hidden from screen readers)
- Text provides all accessible information

## Theming

The Header component uses Bootstrap 5.3 navbar and theme-specific CSS files:

- **Common styles**: `Header.css` - Shared styles for all themes (container max-width 1320 px, logo gap, search bar height overrides)
- **NTG theme**: `Header-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `Header-central.css` - NTG Central theme overrides

### Theme Differences

| Feature             | NTG Theme           | Central Theme         |
| ------------------- | ------------------- | --------------------- |
| Background          | Dark Blue (#1F1F5F) | Dark Blue (#102040)   |
| Font Family         | Lato                | Roboto                |
| Border Radius       | Sharp corners (0px) | Rounded (from tokens) |
| Focus Color         | Orange (#EC8C58)    | Green (#6AB06A)       |
| Border Bottom       | None                | Subtle white border   |
| Container max-width | 1320 px             | 1320 px               |
| Search bar height   | 24 px (in header)   | 24 px (in header)     |
| Logo layout         | Image + text        | Image + text          |

### Using CSS Variables

## CSS variables

This section consolidates the Header component's CSS variable and design-token guidance (previously in `CSS_VARIABLES.md`). Use these variables to customize spacing, colours, focus outlines, and Bootstrap navbar behaviours at component or application scope.

> NOTE: variables are provided at three levels — Bootstrap navbar overrides (`--bs-navbar-*`), semantic design tokens (`--clr-*`, `--type-*`, `--sp-*`), and component-specific variables (e.g. `--radii-header`).

### Overview

The Header component uses a three-tier CSS variable system:

1. **Bootstrap navbar variables** (`--bs-navbar-*`) - Component-level Bootstrap overrides
2. **Design tokens** (`--clr-*`, `--type-*`, `--sp-*`, etc.) - Semantic design system variables
3. **Component-specific variables** (`--radii-header`) - Header-specific customizations

### Bootstrap Navbar CSS Variables

The Header component overrides Bootstrap's navbar CSS variables. These can be customized per instance or globally.

#### Reference: Bootstrap Documentation

See [Bootstrap 5.3 Navbar CSS Variables](https://getbootstrap.com/docs/5.3/components/navbar/#variables) for the complete list of available Bootstrap navbar variables.

#### Header Component Overrides

| Variable                            | Default Value                           | Description                            |
| ----------------------------------- | --------------------------------------- | -------------------------------------- |
| `--bs-navbar-padding-x`             | `0`                                     | Horizontal padding of navbar           |
| `--bs-navbar-padding-y`             | `0`                                     | Vertical padding of navbar             |
| `--bs-navbar-color`                 | `var(--clr-text-inverse)`               | Text color for navbar items            |
| `--bs-navbar-hover-color`           | `var(--clr-link-inverse-hover)`         | Text color on hover                    |
| `--bs-navbar-disabled-color`        | `var(--clr-text-muted)`                 | Text color for disabled items          |
| `--bs-navbar-active-color`          | `var(--clr-link-inverse-hover)`         | Text color for active item             |
| `--bs-navbar-brand-padding-y`       | `0`                                     | Vertical padding for brand/logo        |
| `--bs-navbar-brand-margin-end`      | `0`                                     | Margin after brand/logo                |
| `--bs-navbar-brand-font-size`       | `var(--type-desktop-h1-size)`           | Font size for brand/logo text          |
| `--bs-navbar-brand-color`           | `var(--clr-text-inverse)`               | Brand/logo text color                  |
| `--bs-navbar-brand-hover-color`     | `var(--clr-text-inverse)`               | Brand/logo color on hover              |
| `--bs-navbar-nav-link-padding-x`    | `var(--sp-md)`                          | Horizontal padding for nav links       |
| `--bs-navbar-toggler-padding-y`     | `var(--sp-sm)`                          | Vertical padding for mobile toggler    |
| `--bs-navbar-toggler-padding-x`     | `var(--sp-md)`                          | Horizontal padding for mobile toggler  |
| `--bs-navbar-toggler-font-size`     | `var(--type-desktop-body-default-size)` | Font size for mobile toggler           |
| `--bs-navbar-toggler-border-color`  | `transparent`                           | Border color for mobile toggler        |
| `--bs-navbar-toggler-border-radius` | `var(--radii-button)`                   | Border radius for mobile toggler       |
| `--bs-navbar-toggler-focus-width`   | `var(--sp-xs)`                          | Focus outline width for mobile toggler |
| `--bs-navbar-toggler-transition`    | `box-shadow 0.15s ease-in-out`          | Transition for mobile toggler          |

### Design Token Variables

The Header component uses semantic design tokens that automatically adapt to the active theme (NTG or Central).

#### Color Tokens

| Variable                   | Usage                            | NTG Value | Central Value |
| -------------------------- | -------------------------------- | --------- | ------------- |
| `--clr-bg-dark`            | Header background                | #1F1F5F   | #102040       |
| `--clr-text-inverse`       | Logo and navigation text         | White     | White         |
| `--clr-link-inverse-hover` | Hover state for navigation links | #B4B4CA   | #D0E0E0       |
| `--clr-text-muted`         | Disabled/muted text              | #666774   | #6C7074       |
| `--clr-focus-focus`        | Focus outline color              | #EC8C58   | #6AB06A       |
| `--clr-border-strong-02`   | Print border color               | #1F1E27   | #56585A       |

#### Typography Tokens

| Variable                           | Usage                          | Value (NTG/Central) |
| ---------------------------------- | ------------------------------ | ------------------- |
| `--type-font-default`              | Font family                    | Lato / Roboto       |
| `--type-desktop-h1-size`           | Logo font size (desktop)       | 40px                |
| `--type-desktop-h5-size`           | Logo text size (desktop)       | 18px                |
| `--type-mobile-h6-size`            | Logo text size (mobile)        | 16px                |
| `--type-heading-h1-weight`         | Logo font weight               | 700                 |
| `--type-heading-h5-lh`             | Logo line height               | 20px                |
| `--type-desktop-body-default-size` | Navigation text size (desktop) | 16px                |
| `--type-mobile-body-default-size`  | Navigation text size (mobile)  | 16px                |
| `--type-body-default-weight`       | Navigation text weight         | 400                 |
| `--type-body-default-lh`           | Navigation line height         | 24px                |

#### Spacing Tokens

| Variable   | Value | Usage                                                    |
| ---------- | ----- | -------------------------------------------------------- |
| `--sp-xs`  | 8px   | Small gaps, focus outline offset                         |
| `--sp-xxs` | 4px   | Extra-small gaps                                         |
| `--sp-sm`  | 12px  | Small padding                                            |
| `--sp-md`  | 16px  | Medium padding, gaps (also logo image ↔ text gap)        |
| `--sp-lg`  | 20px  | Large padding                                            |
| `--sp-xl`  | 24px  | Search bar height in header; icon size                   |
| `--sp-2xl` | 32px  | Extra-large padding                                      |
| `--sp-3xl` | 48px  | Default search bar height (overridden to 24px in header) |

#### Border & Radius Tokens

| Variable            | Value (NTG) | Value (Central)    | Usage                  |
| ------------------- | ----------- | ------------------ | ---------------------- |
| `--border-width-xl` | 4px         | 4px                | Focus outline width    |
| `--radii-none`      | 0           | 0                  | Sharp corners (NTG)    |
| `--radii-button`    | 0           | From Central theme | Button radius          |
| `--radii-header`    | 0           | From Central theme | Header-specific radius |

### Component-Specific Variables

These variables are specific to the Header component and can be overridden for customization.

| Variable         | Default                                                                     | Description                    |
| ---------------- | --------------------------------------------------------------------------- | ------------------------------ |
| `--radii-header` | `var(--ntg-radii-none)` (NTG) <br/> `var(--central-radii-button)` (Central) | Border radius for focus states |

### Search Variant CSS Classes

The Header component uses CSS classes to manage different search variants:

| Class                                      | Usage                                  | When Applied                      |
| ------------------------------------------ | -------------------------------------- | --------------------------------- |
| `.header__search`                          | Container for all search functionality | Always (when showSearch=true)     |
| `.header__search[data-variant="expanded"]` | Full search bar variant                | searchVariant="expanded"          |
| `.header__search[data-variant="icon"]`     | Icon-only search variant               | searchVariant="icon"              |
| `.header__search[data-expanded="true"]`    | When icon search is expanded           | searchVariant="icon" AND expanded |
| `.header__search-icon-button`              | Search icon button for icon variant    | searchVariant="icon"              |
| `.header__search-expanded`                 | Container showing full search bar      | Icon variant when expanded        |
| `.header__search-close`                    | Close button in icon variant           | searchVariant="icon" AND expanded |

#### Header Search Bar Height

The search bar inside the header is scoped to **24 px** (overriding the SearchBar component default of 48 px). This keeps the header compact without affecting SearchBar instances used elsewhere.

```css
.header__search .search-bar__control.form-control {
  min-height: var(--sp-xl); /* 24px */
  padding-top: 0;
  padding-bottom: 0;
}

.header__search .search-bar__button.btn {
  --bs-btn-padding-y: 0;
  min-height: var(--sp-xl); /* 24px */
}
```

#### Search Variant Selection

The search variant can be controlled via the `searchVariant` prop:

```tsx
// Expanded search (always visible)
<Header searchVariant="expanded" />

// Icon search (clickable icon that expands)
<Header searchVariant="icon" />
```

#### Styling Icon Search States

You can style different states of the icon search variant:

```css
/* When collapsed (icon only) */
.header__search[data-variant="icon"]:not([data-expanded="true"]) {
  /* Styling for icon-only state */
}

/* When expanded (full search bar) */
.header__search[data-variant="icon"][data-expanded="true"] {
  /* Styling for expanded state */
}
```

### Customization Examples

#### Example 1: Change Header Background Color

```tsx
<Header
  logoAlt="Custom Header"
  navItems={[{ label: "Home", href: "/" }]}
  style={
    {
      "--clr-bg-dark": "#006975",
    } as React.CSSProperties
  }
/>
```

#### Example 2: Increase Navbar Padding

```tsx
<Header
  logoAlt="NT.GOV.AU"
  navItems={[{ label: "Home", href: "/" }]}
  style={
    {
      "--bs-navbar-padding-x": "var(--sp-xl)",
      "--bs-navbar-padding-y": "var(--sp-md)",
    } as React.CSSProperties
  }
/>
```

#### Example 3: Custom Navigation Link Spacing

```tsx
<Header
  logoAlt="NT.GOV.AU"
  navItems={[
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]}
  style={
    {
      "--bs-navbar-nav-link-padding-x": "var(--sp-xl)",
    } as React.CSSProperties
  }
/>
```

#### Example 4: Custom Hover Color

```tsx
<Header
  logoAlt="NT.GOV.AU"
  navItems={[{ label: "Home", href: "/" }]}
  style={
    {
      "--bs-navbar-hover-color": "#FFD700",
      "--bs-navbar-active-color": "#FFD700",
    } as React.CSSProperties
  }
/>
```

#### Example 5: Custom Focus Outline

```tsx
<Header
  logoAlt="NT.GOV.AU"
  navItems={[{ label: "Home", href: "/" }]}
  style={
    {
      "--clr-focus-focus": "#9d4edd",
      "--border-width-xl": "2px",
    } as React.CSSProperties
  }
/>
```

#### Example 6: Override Multiple Variables via CSS Class

```css
/* custom-header.css */
.custom-departmental-header {
  --clr-bg-dark: #007e91;
  --clr-link-inverse-hover: #aad4da;
  --bs-navbar-nav-link-padding-x: var(--sp-lg);
  --bs-navbar-brand-font-size: 24px;
}
```

```tsx
<Header
  className="custom-departmental-header"
  logoAlt="Department of Health"
  navItems={[{ label: "Programs", href: "/programs" }]}
/>
```

### Global Customization

You can override default values globally in your application's CSS:

```css
/* app.css or theme-overrides.css */
:root {
  /* Override header background for all headers */
  --clr-bg-dark: #102040;

  /* Increase all navbar link padding */
  --bs-navbar-nav-link-padding-x: 24px;

  /* Custom focus color */
  --clr-focus-focus: #6ab06a;
}
```

### Theme-Specific Customization

#### NT.GOV.AU Theme

```css
/* Override NTG theme defaults */
:root {
  --radii-header: 0;
  --clr-focus-focus: #ec8c58;
}
```

#### NTG Central Theme

```css
/* Override Central theme defaults */
[data-theme="central"],
.theme-central {
  --radii-header: var(--central-radii-button);
  --clr-focus-focus: #6ab06a;
}
```

### Responsive Customization

You can customize variables at different breakpoints:

```css
/* Desktop only */
@media (min-width: 992px) {
  .header {
    --bs-navbar-nav-link-padding-x: var(--sp-xl);
  }
}

/* Mobile only */
@media (max-width: 767px) {
  .header {
    --bs-navbar-padding-x: var(--sp-sm);
  }
}
```

### Best Practices

#### DO ✅

- Use semantic design tokens (`--clr-*`, `--type-*`, `--sp-*`) for consistency
- Override variables at the component level for instance-specific customization
- Test focus states when changing focus colors to ensure WCAG compliance
- Use spacing tokens instead of hard-coded pixel values
- Document custom variable usage in your application

#### DON'T ❌

- Hard-code color values when design tokens exist
- Override variables without considering accessibility (contrast, focus visibility)
- Mix different spacing scales (use design tokens consistently)
- Modify theme files directly (use overrides instead)
- Ignore responsive behavior when customizing padding/spacing

### Debugging CSS Variables

#### In Browser DevTools

1. Inspect the header element
2. Look at the "Computed" tab
3. Search for `--bs-navbar` or `--clr-` to see resolved values
4. Check which CSS file is setting each variable

#### Using CSS

```css
/* Debug: show all CSS variables */
.header {
  background: var(--clr-bg-dark, red); /* Fallback to red if variable missing */
}

/* Debug: log computed values */
.header::before {
  content: "BG: " var(--clr-bg-dark);
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  color: black;
  padding: 4px;
  font-size: 12px;
  z-index: 9999;
}
```

### Variable Inheritance

CSS variables cascade through the DOM:

```tsx
{/* Set variables at a parent level */}
<div style={{ '--clr-bg-dark': '#006975' }}>
  {/* Header inherits the custom background */}
  <Header logoAlt="NT.GOV.AU" navItems={[...]} />
</div>
```

### Migration from Hard-Coded Styles

#### Before (Hard-coded)

```css
.my-custom-header {
  background: #1f1f5f;
  color: white;
  padding: 16px 24px;
}
```

#### After (Using Design Tokens)

```css
.my-custom-header {
  background: var(--clr-bg-dark);
  color: var(--clr-text-inverse);
  padding: var(--sp-md) var(--sp-lg);
}
```

### Related Documentation

- [Bootstrap 5.3 Navbar CSS Variables](https://getbootstrap.com/docs/5.3/components/navbar/#variables)
- [Design Tokens Overview](../../../design-tokens/DESIGN-TOKENS.md)
- [Theme System](../../themes/THEMES.md)
- [Button CSS Variables](../Button/CSS_VARIABLES.md) - Similar pattern
- [SearchBar CSS Variables](../SearchBar/SEARCHBAR.md) - Related component

## Theme Switching

To switch themes at runtime:

```tsx
// Using data-theme attribute
document.body.setAttribute("data-theme", "central");

// Or add class
document.body.classList.add("theme-central");
```

See [Theme Switching Guide](../../themes/THEME_SWITCHING.md) for more details.

## Responsive Behavior

### Desktop (≥992px)

- Horizontal layout with logo on left, navigation and search on right
- Full-width navigation items with padding
- Search bar at standard width (312px)

### Tablet (768px - 991px)

- Navigation items stack vertically
- Reduced padding and gaps
- Full-width search bar

### Mobile (<768px)

- Logo centered
- Full vertical stacking
- Smaller logo size
- Mobile typography tokens

### Example Responsive Usage

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    { label: "Services", href: "/services", icon: "fa-light fa-search" },
    { label: "Contact", href: "/contact" },
  ]}
  searchPlaceholder="Search"
/>
```

On mobile, this automatically:

- Centers the logo
- Stacks navigation vertically
- Expands search to full width
- Uses mobile font sizes

## Integration Examples

### With Next.js

```tsx
import { Header } from "@ntgovernment/web-design-system";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const navItems = [
    {
      label: "Home",
      href: "/",
      active: router.pathname === "/",
    },
    {
      label: "Services",
      href: "/services",
      active: router.pathname.startsWith("/services"),
    },
    {
      label: "Contact",
      href: "/contact",
      active: router.pathname === "/contact",
    },
  ];

  return (
    <>
      <Header
        variant="nt-gov-au"
        logoAlt="NT.GOV.AU"
        navItems={navItems}
        onSearch={(query) => router.push(`/search?q=${query}`)}
      />
      <main>{children}</main>
    </>
  );
}
```

### With React Router

```tsx
import { Header } from "@ntgovernment/web-design-system";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      href: "/",
      active: location.pathname === "/",
    },
    {
      label: "Services",
      href: "/services",
      active: location.pathname.startsWith("/services"),
    },
  ];

  const handleSearch = (query) => {
    navigate(`/search?q=${query}`);
  };

  return (
    <Header
      variant="nt-gov-au"
      logoAlt="NT.GOV.AU"
      navItems={navItems}
      onSearch={handleSearch}
    />
  );
}
```

### With Static HTML

```tsx
// For server-rendered applications
<Header
  variant="nt-gov-au"
  logoAlt="Northern Territory Government"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
      active: false,
    },
    {
      label: "Contacts",
      href: "/contact",
      active: false,
    },
  ]}
  searchPlaceholder="Search"
  onSearch={(query) => {
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }}
/>
```

## Design Tokens Used

The Header component uses design tokens for consistent theming:

### Colors

- `--clr-bg-dark`: Header background
- `--clr-text-inverse`: Logo and navigation text
- `--clr-link-inverse-hover`: Hover state for links
- `--clr-focus-focus`: Focus outline color
- `--clr-border-strong-02`: Print border color

### Typography

- `--type-font-default`: Font family
- `--type-desktop-body-default-size`: Navigation text size (desktop)
- `--type-mobile-body-default-size`: Navigation text size (mobile)
- `--type-body-default-weight`: Text weight
- `--type-body-default-lh`: Line height

### Spacing

- `--sp-xs`, `--sp-sm`, `--sp-md`, `--sp-lg`, `--sp-xl`: Padding and gaps
- `--sp-xxxl`: Minimum touch target size (48px)

### Border & Radius

- `--border-width-xl`: Focus outline width (4px)
- `--radii-none`: Border radius (theme-specific)
- `--radii-header`: Header-specific radius

## Examples

### Full-Featured Header

```tsx
import { Header } from "@ntgovernment/web-design-system";

function SiteHeader() {
  const currentPath = window.location.pathname;

  const handleSearch = (query: string) => {
    if (query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <Header
      variant="nt-gov-au"
      logoAlt="Northern Territory Government"
      navItems={[
        {
          label: "Find online services",
          href: "/services",
          icon: "fa-light fa-search",
          active: currentPath.startsWith("/services"),
        },
        {
          label: "Contacts",
          href: "/contact",
          active: currentPath === "/contact",
        },
      ]}
      searchPlaceholder="Search"
      onSearch={handleSearch}
    />
  );
}
```

### Minimal Header (No Search)

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
  showSearch={false}
/>
```

### Custom Styled Header

```tsx
<Header
  variant="agency-internet"
  agencyName="Department of Health"
  agencyHref="/"
  logoAlt="NT Government"
  navItems={[
    { label: "Programs", href: "/programs", icon: "fa-light fa-briefcase" },
    { label: "Resources", href: "/resources", icon: "fa-light fa-book" },
  ]}
  className="custom-header"
  style={
    {
      // Override CSS variables
      "--clr-bg-dark": "#006975",
      "--clr-link-inverse-hover": "#aacdd1",
    } as React.CSSProperties
  }
/>
```

## Squiz DXP Component Service

The Header is packaged for Squiz DXP as a Component Service component at
[`src/components/Header/dxp/`](./dxp/). It uses the **hydration pattern**: the
edge `main.js` returns a minimal SSR container with the component's props
serialised as JSON, and the client-side runtime in
[`dist/hydrate.min.js`](../../../dist/hydrate.min.js) mounts the React Header
from `window.NTGDesignSystem` into that container on `DOMContentLoaded`.

### Package layout

```
src/components/Header/dxp/
├── manifest.json       # Squiz DXP v1 manifest + input JSON Schema
├── main.js             # Edge renderer (returns the hydration container)
├── example.data.json   # Sample inputs per variant (used by `cmp-dev`)
├── preview.html        # Local SSR + hydration preview
└── README.md           # Per-component documentation
```

The build copies the package (minus `preview.html`) to
`dist/components/header/` for deployment.

### Server output

`main.js` returns markup of the form:

```html
<div
  class="ntg-header-hydration"
  data-hydration-component="header"
  data-hydration-props='{"variant":"agency-internet","agencyName":"…",…}'
  data-instance-id="hdr-abc123xyz"
>
  <noscript>
    <div class="header header--noscript"><a href="…">…</a></div>
  </noscript>
</div>
```

`hydrate.min.js` scans for `[data-hydration-component]` containers, parses the
props, and calls `ReactDOM.createRoot(container).render(<Header {...props}/>)`.

### Inputs

See [`dxp/README.md`](./dxp/README.md#inputs) for the full input table. The
schema mirrors the `HeaderProps` interface above; `onSearch` is omitted (not
serialisable) and replaced by `searchAction` (form GET to that URL with the
field name `query`).

### Mounting

In Squiz DXP, drop the **NT Gov Header** component into the **header** zone of
the `full-width-section` Page Layout. CSS ships site-wide via the existing
`head.html` nester (`dist/theme-ntg.min.css` or `dist/theme-central.min.css`).

### Local development

```bash
npm run build                # produces dist/components.min.js, dist/hydrate.min.js, themes
npm run cmp-dev              # NTG theme via Squiz DXP CLI
npm run cmp-dev:central      # Central theme
npm run cmp-deploy:dry-run   # validate manifest only
npm run cmp-deploy           # push to the connected DXP tenant
```

Or open [`dxp/preview.html`](./dxp/preview.html) via the Vite dev server
(`npm run dev`) to verify SSR + hydration locally without the DXP CLI.

### Runtime dependencies (loaded via `footer_js.html`)

1. React 18 + ReactDOM 18 UMD globals
2. `dist/components.min.js` (`window.NTGDesignSystem.Header`)
3. `dist/hydrate.min.js` (mounts the component)

## Print Styles

The Header component includes print-optimized styles:

- Background removed (transparent)
- Search bar hidden
- Bottom border added for separation
- Maintains logo and navigation structure

## Related Documentation

- [CSS variables](#css-variables) - Detailed CSS variable documentation
- [SearchBar Component](../SearchBar/SEARCHBAR.md) - Integrated search component
- [Icon Component](../Icon/ICON.md) - Icon usage in navigation
- [Theming Guide](../../themes/THEMES.md) - Theme system overview
- [Theme Switching](../../themes/THEME_SWITCHING.md) - Runtime theme switching

## Storybook

View live examples and interact with the Header component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > Header** to see all variants and configurations.

## TypeScript

The Header component is fully typed with TypeScript:

```tsx
import {
  Header,
  HeaderProps,
  HeaderNavItem,
} from "@ntgovernment/web-design-system";

// Type-safe navigation items
const navItems: HeaderNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", icon: "fa-light fa-search" },
];

// Type-safe props
const headerProps: HeaderProps = {
  variant: "nt-gov-au",
  logoAlt: "NT.GOV.AU",
  navItems,
  onSearch: (query: string) => console.log(query),
};

<Header {...headerProps} />;
```

## Browser Support

The Header component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3.3 must be loaded for navbar functionality
- FontAwesome must be loaded if using navigation icons
- The SearchBar component is integrated and uses the same theming
- Logo images should be optimized for web (SVG recommended)
- Navigation items support standard anchor attributes via spread props
- Maximum header width is constrained to 1168px for readability

## Common Patterns

### Department-Specific Header

```tsx
<Header
  variant="agency-internet"
  agencyName="Department of Infrastructure"
  agencyHref="/infrastructure"
  logoAlt="NT Government"
  navItems={[
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/contact" },
  ]}
/>
```

### Service Portal Header

```tsx
<Header
  variant="other-site"
  agencyName="My NT Services"
  agencyHref="/services"
  logoAlt="NT Government"
  navItems={[
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "fa-light fa-home",
      active: true,
    },
    {
      label: "Applications",
      href: "/applications",
      icon: "fa-light fa-file",
    },
    {
      label: "Account",
      href: "/account",
      icon: "fa-light fa-user",
    },
  ]}
  searchPlaceholder="Search services"
/>
```

### Public Website Header

```tsx
<Header
  variant="nt-gov-au"
  logoAlt="NT.GOV.AU"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
    },
    {
      label: "Contacts",
      href: "/contact",
    },
  ]}
  searchPlaceholder="Search"
  onSearch={(query) => {
    // Google Custom Search or internal search
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }}
/>
```
