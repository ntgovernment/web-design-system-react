# Side Navigation Component

## Overview

The Side Navigation component provides a vertical list of navigation links placed within a content section, helping users quickly find and navigate to other related pages. It displays a hierarchical section header followed by navigation items with support for current/active page indication and expandable items.

This component is specifically designed for large, content-heavy sections where an additional navigation tool enhances user experience by providing context-aware navigation within a topic or section.

## Key Features

- **Section Header**: Displays the section name with an icon at the top
- **Current/Active State**: Shows which page the user is currently viewing with a colored left border and background highlight
- **Theme Support**: Works seamlessly with both NT.GOV.AU and NTG Central themes with theme-specific colors and focus states
- **Expandable Items**: Optional nested navigation items can be expanded/collapsed with a chevron icon
- **Design Token Integration**: Built entirely with design system tokens for consistency across the system
- **Accessibility**: Proper ARIA labels, keyboard navigation support, and semantic HTML
- **Responsive**: Adapts to mobile viewports while maintaining component functionality

## Usage Guidelines

### When to Use

✅ **Use Side Navigation when:**

- You have a content-heavy section with 5 or more related pages
- Users need quick access to sibling pages within the same topic
- The navigation structure is hierarchical with main topics and subtopics
- You want to provide context-aware navigation as a secondary navigation tool
- On large desktop layouts where sidebar navigation is beneficial

### When NOT to Use

❌ **Do NOT use Side Navigation when:**

- You have fewer than 5 pages in a section
- On home pages or landing pages
- For navigating to external websites (only use for internal section navigation)
- You want to add icons next to page titles (this component doesn't support icons in the labels)
- For primary navigation (use header/main navigation instead)

## Design Token Usage

The component leverages the following design tokens from the design system:

### Colors

| Token                    | Usage                         | Default (NTG) | Default (Central) |
| ------------------------ | ----------------------------- | ------------- | ----------------- |
| `--clr-link-default`     | Standard link and header text | #1F1F5F       | -                 |
| `--clr-link-hover`       | Link text on hover            | #C33826       | -                 |
| `--clr-border-strong-01` | Header border                 | #1F1F5F       | -                 |
| `--clr-border-subtle`    | Item separator borders        | #D3D3D7       | -                 |
| `--clr-border-accent`    | Active item left border       | #C33826       | -                 |
| `--clr-bg-shade`         | Active item background        | #F5F5F7       | -                 |
| `--clr-text-emphasis`    | Emphasis color on hover       | #C33826       | -                 |
| `--clr-focus-focus`      | Focus indicator color         | #EC8C58       | #6AB06A           |

### Spacing

| Token     | Value | Usage                                        |
| --------- | ----- | -------------------------------------------- |
| `--sp-xs` | 8px   | Gap between icon and text                    |
| `--sp-md` | 16px  | Padding around items and sections            |
| `--sp-xl` | 24px  | Horizontal padding (unused, for consistency) |

### Typography

| Element         | Size | Weight | Line Height | Font                          |
| --------------- | ---- | ------ | ----------- | ----------------------------- |
| Section Header  | 18px | 700    | 20px        | Lato (NTG) / Roboto (Central) |
| Navigation Item | 16px | 400    | 24px        | Lato (NTG) / Roboto (Central) |
| Active Item     | 16px | 700    | 24px        | Lato (NTG) / Roboto (Central) |

## Component API

### SideNavigation

Main component that renders the side navigation widget.

```tsx
interface SideNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Section header title displayed at the top */
  sectionTitle: string;
  /** Array of navigation items */
  items: SideNavigationItemProps[];
  /** Optional CSS class name */
  className?: string;
  /** Callback when navigation item is selected */
  onItemClick?: (itemId: string) => void;
  /** Callback when item is expanded/collapsed */
  onToggleExpand?: (itemId: string, isExpanded: boolean) => void;
  /** Icon class for expandable items (default: FontAwesome chevron) */
  expandIconClass?: string;
}
```

#### Props (quick reference)

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `sectionTitle` | string | yes | Header text shown at the top of the navigation block |
| `items` | SideNavigationItemProps[] | yes | Array of navigation items (see schema below) |
| `className` | string | no | Additional CSS class applied to the root `.side-nav` |
| `onItemClick` | (id: string) => void | no | Callback when a non-expandable item is clicked |
| `onToggleExpand` | (id: string, expanded: boolean) => void | no | Callback when an expandable item is toggled |
| `expandIconClass` | string | no | Override FontAwesome class used for expand/collapse icon |

#### Machine-friendly JSON schema (example)

```json
{
  "sectionTitle": "Documentation",
  "items": [
    {
      "id": "overview",
      "label": "Overview",
      "href": "#overview",
      "isCurrent": true
    },
    {
      "id": "guides",
      "label": "Guides",
      "isExpandable": true,
      "isExpanded": true,
      "children": [
        { "id": "setup", "label": "Setup Guide", "href": "#setup" }
      ]
    }
  ]
}
```

This structure is intentionally minimal so automated tools can construct, validate, or generate navigation items programmatically.

### SideNavigationItemProps

Configuration for individual navigation items.

```tsx
interface SideNavigationItemProps {
  /** Unique identifier for the item */
  id: string;
  /** Display label for the navigation item */
  label: string;
  /** Navigation URL or path */
  href?: string;
  /** Whether this item is the current/active page */
  isCurrent?: boolean;
  /** Whether this item is expandable */
  isExpandable?: boolean;
  /** Whether the item is initially expanded */
  isExpanded?: boolean;
  /** Nested child items */
  children?: SideNavigationItemProps[];
  /** Optional CSS class name */
  className?: string;
  /** Callback when item is clicked */
  onClick?: (id: string) => void;
}
```

## Usage Examples

### Basic Example

```tsx
import { SideNavigation } from "@ntgovernment/web-design-system";

export function ServicePage() {
  const navigationItems = [
    {
      id: "overview",
      label: "Service Overview",
      href: "/services/overview",
      isCurrent: true,
    },
    { id: "apply", label: "How to Apply", href: "/services/apply" },
    { id: "eligibility", label: "Eligibility", href: "/services/eligibility" },
    { id: "costs", label: "Costs and Fees", href: "/services/costs" },
    { id: "support", label: "Get Support", href: "/services/support" },
  ];

  return (
    <SideNavigation sectionTitle="Online Services" items={navigationItems} />
  );
}
```

### With Expandable Items

```tsx
import { SideNavigation } from "@ntgovernment/web-design-system";

export function DocumentationPage() {
  const navigationItems = [
    {
      id: "getting-started",
      label: "Getting Started",
      href: "/docs/getting-started",
      isCurrent: true,
      isExpandable: true,
      isExpanded: true,
      children: [
        {
          id: "setup",
          label: "Setup Guide",
          href: "/docs/getting-started/setup",
        },
        {
          id: "first-steps",
          label: "First Steps",
          href: "/docs/getting-started/first-steps",
        },
      ],
    },
    {
      id: "advanced",
      label: "Advanced Topics",
      href: "/docs/advanced",
      isExpandable: true,
      children: [
        {
          id: "performance",
          label: "Performance",
          href: "/docs/advanced/performance",
        },
        { id: "security", label: "Security", href: "/docs/advanced/security" },
      ],
    },
  ];

  return (
    <SideNavigation
      sectionTitle="Documentation"
      items={navigationItems}
      onItemClick={(id) => console.log(`Navigating to: ${id}`)}
      onToggleExpand={(id, expanded) =>
        console.log(`Item ${id} expanded: ${expanded}`)
      }
    />
  );
}
```

### With State Management

```tsx
import { useState } from "react";
import { SideNavigation } from "@ntgovernment/web-design-system";

export function NavigationWithState() {
  const [currentItem, setCurrentItem] = useState("overview");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["getting-started"]),
  );

  const navigationItems = [
    {
      id: "overview",
      label: "Service Overview",
      href: "#",
      isCurrent: currentItem === "overview",
    },
    {
      id: "apply",
      label: "How to Apply",
      href: "#",
      isCurrent: currentItem === "apply",
      isExpandable: true,
      isExpanded: expandedItems.has("apply"),
      children: [
        { id: "step1", label: "Step 1: Prepare", href: "#" },
        { id: "step2", label: "Step 2: Submit", href: "#" },
      ],
    },
  ];

  const handleItemClick = (id: string) => {
    setCurrentItem(id);
  };

  const handleToggleExpand = (id: string, expanded: boolean) => {
    const newExpanded = new Set(expandedItems);
    if (expanded) {
      newExpanded.add(id);
    } else {
      newExpanded.delete(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <SideNavigation
      sectionTitle="Services"
      items={navigationItems}
      onItemClick={handleItemClick}
      onToggleExpand={handleToggleExpand}
    />
  );
}
```

## CSS Classes Reference

### Main Container

- `.side-nav` - Main wrapper for the entire component
- `.side-nav__header` - Header section containing title and icon
- `.side-nav__content` - Container for all navigation items

### Header Components

- `.side-nav__header-title` - Section title text
- `.side-nav__header-icon` - Icon container in header

### Navigation Items

- `.side-nav__item-wrapper` - Wrapper around each navigation item
- `.side-nav__item` - Individual navigation item container
- `.side-nav__item--current` - Applied when item is current/active
- `.side-nav__link` - Navigation link element
- `.side-nav__label` - Label text within link

### Expand/Collapse

- `.side-nav__expand-btn` - Button to toggle submenu expansion
- `.side-nav__expand-btn--expanded` - Applied when expanded (rotates chevron)
- `.side-nav__expand-icon` - Icon inside expand button
- `.side-nav__submenu` - Container for nested items

## Theming

The Side Navigation component respects the active theme and automatically adjusts colors, focus states, and typography. The component integrates with the design system's theme switching mechanism.

### Customizing for Themes

Theme-specific CSS is loaded dynamically in Storybook's preview configuration:

```typescript
// In .storybook/preview.tsx
const loadSideNavigationStyles = (theme: string) => {
  const existingSideNav = document.getElementById("side-nav-theme-css");
  if (existingSideNav) {
    existingSideNav.remove();
  }

  const sideNavCSS = document.createElement("link");
  sideNavCSS.id = "side-nav-theme-css";
  sideNavCSS.rel = "stylesheet";
  sideNavCSS.href = new URL(
    `../src/components/SideNavigation/SideNavigation-${theme}.css`,
    import.meta.url,
  ).href;
  document.head.appendChild(sideNavCSS);
};
```

### CSS Variable Customization

To customize colors for your own theme, override these CSS variables in your theme file:

```css
/* Your custom theme CSS */
:root {
  --clr-link-default: #your-color;
  --clr-link-hover: #your-color;
  --clr-border-strong-01: #your-color;
  --clr-border-subtle: #your-color;
  --clr-border-accent: #your-color;
  --clr-bg-shade: #your-color;
  --clr-text-emphasis: #your-color;
  --clr-focus-focus: #your-color;

  /* Shadow for focus state (expand button only) */
  --shadow-focus-custom: 0px 0px 0px 4px #your-color-with-alpha;
}

/* Override focus styles */
.side-nav__link:focus,
.side-nav__link:focus-visible {
  background-color: var(--clr-focus-focus);
  border-bottom: 4px solid var(--clr-border-strong-01);
}

.side-nav__expand-btn:focus,
.side-nav__expand-btn:focus-visible {
  box-shadow: var(--shadow-focus-custom);
}
```

## Accessibility Features

### ARIA Labels

- Section header provides context for the navigation block
- Expand/collapse buttons include `aria-expanded` attribute
- Buttons include descriptive `aria-label` attributes

### Keyboard Navigation

- Links are fully keyboard accessible
- Expand/collapse buttons respond to Space and Enter keys
- Tab order follows DOM order for logical navigation flow

### Focus Indicators

- Link focus uses a theme-colored background with a 4px bottom border
- Expand button focus uses a theme-specific 4px shadow ring
- Focus states maintain color contrast above 4.5:1 for WCAG AA compliance

### Screen Reader Support

- Semantic HTML structure for assistive technology interpretation
- Descriptive labels for interactive elements
- Current/active state information communicated through styling and structure

## Related Documentation

- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md) - Design token system overview
- [Theming Guide](../../themes/THEMES.md) - Theme system overview
- [Theme Switching](../../themes/THEME_SWITCHING.md) - Runtime theme switching implementation
- [Button Component](../Button/BUTTON.md) - For related navigation elements
- [Icon Component](../Icon/ICON.md) - For icon usage within side navigation
- [Bootstrap Link Utilities](https://getbootstrap.com/docs/5.3/utilities/link/) - Link customization patterns

## Storybook

View live examples and interact with the Side Navigation component in Storybook:

```bash
npm run storybook
```

Navigate to **Components > SideNavigation** to see all variants and configurations.

## TypeScript

The Side Navigation component is fully typed with TypeScript. Import the types:

```tsx
import {
  SideNavigation,
  SideNavigationProps,
  SideNavigationItemProps,
} from "@ntgovernment/web-design-system";

// Use SideNavigationProps for custom wrappers or extensions
const MyCustomNavigation: React.FC<SideNavigationProps> = (props) => {
  return <SideNavigation {...props} />;
};

// Use SideNavigationItemProps for custom item structures
const myCustomItems: SideNavigationItemProps[] = [
  { id: "home", label: "Home", href: "/" },
];
```

## File Structure

```
src/components/SideNavigation/
├── SideNavigation.tsx           # Main component and sub-components
├── SideNavigation.css           # Common styles (not theme-specific)
├── SideNavigation-ntg.css       # NT.GOV.AU theme overrides
├── SideNavigation-central.css   # NTG Central theme overrides
├── SIDENAVIGATION.md            # Component documentation
├── SideNavigation.stories.tsx   # Storybook stories and examples
└── index.ts                     # Component exports
```

## Testing

The component is designed to be easily testable:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SideNavigation } from "./SideNavigation";

describe("SideNavigation", () => {
  it("displays the section title", () => {
    render(<SideNavigation sectionTitle="Services" items={[]} />);
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  it("highlights the current item", () => {
    const items = [{ id: "item1", label: "Item 1", isCurrent: true }];
    render(<SideNavigation sectionTitle="Navigation" items={items} />);
    const item = screen.getByText("Item 1").closest(".side-nav__item");
    expect(item).toHaveClass("side-nav__item--current");
  });

  it("calls onItemClick when an item is clicked", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const items = [{ id: "item1", label: "Item 1", href: "#" }];

    render(
      <SideNavigation
        sectionTitle="Navigation"
        items={items}
        onItemClick={handleClick}
      />,
    );

    await user.click(screen.getByText("Item 1"));
    expect(handleClick).toHaveBeenCalledWith("item1");
  });

  it("expands and collapses expandable items", async () => {
    const user = userEvent.setup();
    const items = [
      {
        id: "parent",
        label: "Parent",
        isExpandable: true,
        children: [{ id: "child", label: "Child", href: "#" }],
      },
    ];

    render(<SideNavigation sectionTitle="Navigation" items={items} />);

    expect(screen.queryByText("Child")).not.toBeInTheDocument();

    const expandBtn = screen.getByRole("button", {
      name: /toggle parent submenu/i,
    });
    await user.click(expandBtn);

    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});
```

## Best Practices

### 1. Always Include Minimum 5 Items

Don't use Side Navigation for sections with fewer than 5 related pages as it adds unnecessary complexity.

```tsx
// ❌ Don't do this - too few items
<SideNavigation
  sectionTitle="Help"
  items={[
    { id: "faq", label: "FAQ", href: "/help/faq", isCurrent: true },
    { id: "contact", label: "Contact", href: "/help/contact" },
  ]}
/>

// ✅ Do this - sufficient number of items
<SideNavigation
  sectionTitle="Services"
  items={[
    { id: "overview", label: "Service Overview", href: "/services/overview", isCurrent: true },
    { id: "apply", label: "How to Apply", href: "/services/apply" },
    { id: "eligibility", label: "Eligibility", href: "/services/eligibility" },
    { id: "costs", label: "Costs and Fees", href: "/services/costs" },
    { id: "support", label: "Get Support", href: "/services/support" },
  ]}
/>
```

### 2. No Icons in Labels

Don't include icons next to page titles in the navigation items. Icons should only appear in the section header.

```tsx
// ❌ Don't add icons to labels
<SideNavigation
  sectionTitle="Services"
  items={[
    {
      id: "apply",
      label: "🏗️ How to Apply",  // Wrong
      href: "/services/apply"
    },
  ]}
/>

// ✅ Keep labels clean and simple
<SideNavigation
  sectionTitle="Services"
  items={[
    {
      id: "apply",
      label: "How to Apply",  // Correct
      href: "/services/apply"
    },
  ]}
/>
```

### 3. Internal Navigation Only

Only use Side Navigation for navigating within the same content section or topic. Never link to external websites.

```tsx
// ❌ Don't link to external sites
<SideNavigation
  sectionTitle="Resources"
  items={[
    { id: "local", label: "Local Services", href: "/services/local", isCurrent: true },
    { id: "external", label: "National Site", href: "https://example.com" },  // Wrong
  ]}
/>

// ✅ Only link within the section
<SideNavigation
  sectionTitle="Resources"
  items={[
    { id: "local", label: "Local Services", href: "/services/local", isCurrent: true },
    { id: "regional", label: "Regional Services", href: "/services/regional" },
    { id: "category", label: "By Category", href: "/services/categories" },
  ]}
/>
```

### 4. Clear Section Titles

Use descriptive section titles that clearly indicate what content the navigation is for.

```tsx
// ❌ Too generic
<SideNavigation
  sectionTitle="Pages"
  items={navigationItems}
/>

// ✅ Descriptive and meaningful
<SideNavigation
  sectionTitle="Licensing Services"
  items={navigationItems}
/>
```

### 5. Always Set Current Item

Make sure the current/active page is always marked with the `isCurrent` flag so users know where they are.

```tsx
// ❌ No indication of current page
<SideNavigation
  sectionTitle="Services"
  items={[
    { id: "overview", label: "Overview", href: "/services/overview" },
    { id: "apply", label: "Apply", href: "/services/apply" },
  ]}
/>

// ✅ Current page is clearly marked
<SideNavigation
  sectionTitle="Services"
  items={[
    { id: "overview", label: "Overview", href: "/services/overview", isCurrent: true },
    { id: "apply", label: "Apply", href: "/services/apply" },
  ]}
/>
```

## Troubleshooting

### Focus outline not visible

**Problem**: Focus states are not showing up when tabbing through navigation.

**Solution**: Ensure theme CSS files are loaded properly. Check that `SideNavigation-ntg.css` or `SideNavigation-central.css` are imported in Storybook's preview file.

### Items not expanding

**Problem**: Expandable items don't respond to clicks.

**Solution**: Make sure `isExpandable` is set to `true` and that `children` array is populated with valid item objects.

### Wrong colors showing

**Problem**: Component colors don't match the expected theme colors.

**Solution**: Verify that the theme CSS file is loaded after the main `SideNavigation.css`. Also check that design tokens are correctly defined in your theme's CSS variables file.

### Responsive layout issues

**Problem**: Component doesn't adapt well on mobile viewports.

**Solution**: The component is 298px wide on desktop. On mobile, it expands to 100% width. Consider wrapping in a responsive container or adjusting the layout as needed for your use case.

## Browser Support

The Side Navigation component supports all modern browsers that support CSS custom properties (CSS variables) and CSS flexbox:

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- IE: Not supported

## Changelog

### Version 1.0.0 (Initial Release)

- ✅ Basic navigation items with links
- ✅ Current/active state with styling
- ✅ Section header with icon
- ✅ Expandable items with nested navigation
- ✅ Theme support (NTG and Central)
- ✅ Full keyboard accessibility
- ✅ Focus states with theme-specific colors
- ✅ Design token integration
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Comprehensive documentation

## Contributing

When contributing to the Side Navigation component:

1. Ensure all props are documented
2. Add TypeScript types for all data structures
3. Test keyboard navigation and focus states
4. Verify theme switching works correctly
5. Update documentation for any new features
6. Add Storybook stories for new variants
7. Maintain WCAG AA accessibility compliance

For detailed contributing guidelines, see [CONTRIBUTING.md](../../CONTRIBUTING.md)
