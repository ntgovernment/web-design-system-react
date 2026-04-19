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

### Basic Header

```tsx
import { Header } from "@ntgovernment/web-design-system";

<Header
  logoAlt="NT.GOV.AU"
  logoHref="/"
  navItems={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]}
/>;
```

### With Logo Image

```tsx
<Header
  logoSrc="/images/logo.svg"
  logoAlt="NT.GOV.AU"
  logoHref="/"
  navItems={[{ label: "Home", href: "/" }]}
/>
```

### With Navigation Icons

```tsx
<Header
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
  logoAlt="NT.GOV.AU"
  navItems={[{ label: "Home", href: "/" }]}
  searchPlaceholder="Search for services"
  onSearch={handleSearch}
/>;
```

### With Search Handler

```tsx
const handleSearch = (query: string) => {
  console.log("Searching for:", query);
  // Implement your search logic
};

<Header
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

| Prop                | Type                                | Default       | Description                                                           |
| ------------------- | ----------------------------------- | ------------- | --------------------------------------------------------------------- |
| `logoSrc`           | `string`                            | `undefined`   | URL to the logo image                                                 |
| `logoAlt`           | `string`                            | `"NT.GOV.AU"` | Alt text for the logo (also used as text fallback)                    |
| `logoHref`          | `string`                            | `"/"`         | Destination URL for logo link                                         |
| `navItems`          | `HeaderNavItem[]`                   | `[]`          | Array of navigation items                                             |
| `showSearch`        | `boolean`                           | `true`        | Whether to display the search bar                                     |
| `searchVariant`     | `'expanded' \| 'icon'`              | `'expanded'`  | Search display variant: 'expanded' for full bar, 'icon' for icon-only |
| `searchPlaceholder` | `string`                            | `"Search"`    | Placeholder text for search input                                     |
| `onSearch`          | `(value: string) => void`           | `undefined`   | Callback function when search is performed                            |
| `className`         | `string`                            | `undefined`   | Additional CSS class for the header element                           |
| `customLogo`        | `React.ReactNode`                   | `undefined`   | Custom content to replace the default logo                            |
| ...props            | `React.HTMLAttributes<HTMLElement>` | -             | All standard HTML header element attributes                           |

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
  logoAlt="NT.GOV.AU"
  navItems={[...]}
  searchVariant="expanded"  // Always shows full search bar
  searchPlaceholder="Search"
/>
```

### Icon Search (Medium/Responsive)

Shows only a search icon until clicked, then expands to a full search bar. Best for:

- Responsive designs with limited space
- Tablet/medium viewport sizes (max-width: 959px)
- Mobile-first applications
- When search is a secondary action

```tsx
<Header
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

When using an image logo:

```tsx
<Header
  logoSrc="/logo.svg"
  logoAlt="Northern Territory Government"
  logoHref="/"
/>
```

The `logoAlt` prop provides alternative text for screen readers.

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

- **Common styles**: `Header.css` - Shared styles for all themes
- **NTG theme**: `Header-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `Header-central.css` - NTG Central theme overrides

### Theme Differences

| Feature       | NTG Theme           | Central Theme         |
| ------------- | ------------------- | --------------------- |
| Background    | Dark Blue (#1F1F5F) | Dark Blue (#102040)   |
| Font Family   | Lato                | Roboto                |
| Border Radius | Sharp corners (0px) | Rounded (from tokens) |
| Focus Color   | Orange (#EC8C58)    | Green (#6AB06A)       |
| Border Bottom | None                | Subtle white border   |

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

| Variable    | Value | Usage                            |
| ----------- | ----- | -------------------------------- |
| `--sp-xs`   | 4px   | Small gaps, focus outline offset |
| `--sp-sm`   | 8px   | Small padding (mobile)           |
| `--sp-md`   | 16px  | Medium padding, gaps             |
| `--sp-lg`   | 24px  | Large padding, icon size         |
| `--sp-xl`   | 32px  | Extra large padding              |
| `--sp-xxxl` | 48px  | Minimum touch target size        |

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
  logoSrc="/logo.svg"
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
        logoSrc="/logo.svg"
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
      logoSrc="/logo.svg"
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
  logoSrc="/images/logo.svg"
  logoAlt="Northern Territory Government"
  logoHref="/"
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
      logoSrc="/images/nt-gov-logo.svg"
      logoAlt="Northern Territory Government"
      logoHref="/"
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
  logoAlt="NT.GOV.AU"
  logoHref="/"
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
  logoSrc="/logo.svg"
  logoAlt="Department of Health"
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

## Squiz Matrix CMS Integration

The Header component is used in the Squiz Matrix design nester `src/squiz/nesters/header_content.html`. The nester renders static HTML that mirrors the React component's output, using Squiz Matrix keywords for dynamic content.

### Nester Markup

```html
<header class="header d-print-none" id="header">
    <nav class="navbar header__navbar">
        <div class="header__container">

            <!-- Logo Section with Hamburger -->
            <div class="header__logo-section">
                <button class="header__hamburger" type="button"
                    aria-label="Toggle navigation menu" aria-expanded="false">
                    <span class="header__hamburger-line"></span>
                    <span class="header__hamburger-line"></span>
                    <span class="header__hamburger-line"></span>
                </button>
                <div class="header__logo">
                    <a href="%globals_site_url%" class="header__logo-link">
                        <img src="%globals_asset_url_with_hash:1607588:dist/ntgbase/images/ntg-desert-rose-reverse.svg%"
                             alt="NT.GOV.AU logo" class="header__logo-image">
                        <span class="header__logo-text">%globals_site_name%</span>
                    </a>
                </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <a href="/services" class="header__nav-link">
                            <i class="fa-light fa-search header__nav-icon" aria-hidden="true"></i>
                            <span class="header__nav-text">Find online services</span>
                        </a>
                    </li>
                    <li class="header__nav-item">
                        <a href="https://nt.gov.au/contacts" class="header__nav-link">
                            <span class="header__nav-text">Contacts</span>
                        </a>
                    </li>
                </ul>

                <!-- Search — expanded on desktop -->
                <div class="header__search" data-variant="expanded">
                    <div class="header__search-expanded">
                        <form action="https://nt.gov.au/search" class="search-bar"
                              role="search" data-variant="primary">
                            <div class="input-group search-bar__group">
                                <input class="form-control search-bar__control" type="search"
                                       name="query" placeholder="Search"
                                       aria-label="Search" autocomplete="off">
                                <button class="btn search-bar__button" type="submit"
                                        aria-label="Run search">
                                    <span class="search-bar__icon" aria-hidden="true">
                                        <i class="fa-light fa-search search-bar__icon-glyph"></i>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="header__mobile-menu">
        <ul class="header__mobile-nav-list">...</ul>
        <div class="header__mobile-search">
            <form action="https://nt.gov.au/search" class="search-bar" role="search" data-variant="primary">
                <!-- Same search markup as desktop -->
            </form>
        </div>
    </div>
</header>
```

### CMS Keywords

| Keyword | Purpose | Maps to |
| --- | --- | --- |
| `%globals_site_url%` | Site home URL | `logoHref` prop / `header__logo-link` href |
| `%globals_site_name%` | Site display name | `logoAlt` prop / `.header__logo-text` |
| `%globals_asset_url_with_hash:1607588:dist/ntgbase/images/ntg-desert-rose-reverse.svg%` | NTG logo SVG | `logoSrc` prop / `.header__logo-image` src |

### Key Differences from React Component

| Aspect | React Component | CMS Nester |
| --- | --- | --- |
| Search action | `onSearch` callback | `<form action="https://nt.gov.au/search">` with `name="query"` |
| Mobile menu toggle | React `useState` | Inline vanilla JS toggling `aria-expanded` + `display` |
| Dismiss (GlobalAlert) | `onDismiss` callback | Inline JS hiding `.global-alert` |
| Icons | `<Icon>` component | Font Awesome `<i>` tags directly |
| Logo / site name | Props | Squiz Matrix keywords |

### Hamburger Toggle Script

The nester includes inline JavaScript for the mobile menu toggle:

```js
var hamburger = document.querySelector('.header__hamburger');
var mobileMenu = document.querySelector('.header__mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
        var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!isOpen));
        mobileMenu.style.display = isOpen ? '' : 'flex';
    });
}
```

### File Location

Source: `src/squiz/nesters/header_content.html`
Build output: `dist/nesters/header_content.html` (copied by `scripts/build-dist.js`)

The nester is included in the Squiz Matrix design parse file (`src/squiz/design-parse.html`) via:

```html
<script runat="server">
    print(`%globals_asset_contents_raw:1607588:dist/nesters/header_content.html%`);
</script>
```

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
  logoSrc: "/logo.svg",
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
  logoSrc="/dept-logo.svg"
  logoAlt="Department of Infrastructure"
  navItems={[
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "Contact", href: "/contact" },
  ]}
/>
```

### Service Portal Header

````tsx
<Header
  logoSrc="/portal-logo.svg"
  logoAlt="My NT Services"
  navItems={[
    {
      label: "Dashboard",
      href: "/dashboard",
    Medium Layout with Icon Search

The medium layout uses the icon search variant for responsive space-saving:

```tsx
<Header
  logoSrc="/nt-gov-logo.svg"
  logoAlt="NT.GOV.AU"
  logoHref="/"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    },
    {
      label: "Contacts",
      href: "/contact"
    }
  ]}
  searchVariant="icon"  // Space-saving search icon
  searchPlaceholder="Search"
  onSearch={(query) => {
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }}
/>
````

In this configuration:

- Max-width is 959px (medium layout)
- Search shows as icon until clicked
- Click to expand into full search bar
- Close button (X) to collapse
- Ideal for tablets and medium viewports

### icon: "fa-light fa-home",

      active: true
    },
    {
      label: "Applications",
      href: "/applications",
      icon: "fa-light fa-file"
    },
    {
      label: "Account",
      href: "/account",
      icon: "fa-light fa-user"
    }

]}
searchPlaceholder="Search services"
/>

````

### Public Website Header

```tsx
<Header
  logoSrc="/nt-gov-logo.svg"
  logoAlt="NT.GOV.AU"
  logoHref="/"
  navItems={[
    {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    },
    {
      label: "Contacts",
      href: "/contact"
    }
  ]}
  searchPlaceholder="Search"
  onSearch={(query) => {
    // Google Custom Search or internal search
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }}
/>
````
