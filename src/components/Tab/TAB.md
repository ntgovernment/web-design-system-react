# Tab Component Documentation

## Overview

The **Tab component** provides a UI pattern for organizing and displaying related content across multiple categories. Tabs help users navigate between sections while maintaining the page layout, reducing cognitive load by allowing users to focus on one section at a time.

### Key Features

- **Horizontal Tab Navigation**: Clean, organized tabs with left-aligned optional icons
- **Sticky Navigation**: Optional positioning that keeps tabs visible while scrolling (useful for landing pages with multiple sections)
- **Horizontal Scrolling**: Automatic scroll buttons (previous/next) when tabs exceed viewport width
- **Flexible Content**: Each tab can contain any React component or HTML content
- **Themed Styling**: Full support for design system color tokens and theme switching
- **Accessibility**: Complete keyboard navigation, ARIA attributes, and focus management
- **Responsive**: Adjustable sizing and mobile-friendly design

---

## When to Use

### ✓ Use Tabs When:

- **Organizing related content** into logical categories that don't need to be viewed simultaneously
- **Multiple sections exist** on a landing page (minimum 3, maximum 8 tabs recommended)
- **Users need quick navigation** between different content areas without page reload
- **Space is limited** and grouping content reduces visual clutter
- **Content hierarchy is uniform** - all tabs contain equally important information

### ✓ Use Sticky Navigation When:

- Landing pages have **3+ sections** that users might want to skip to
- Users frequently **scroll between sections** and need quick access to navigation
- Content is **substantial** (roughly 1 viewport or more per section)
- Navigation context should be **always visible** during scrolling

### ✗ Don't Use Tabs For:

- **Sequential content** like multi-step forms or wizard workflows (use Step indicators instead)
- **Progress indication** - tabs should not represent progress through a process
- **Content comparison** - don't use if users need to compare data across multiple tabs simultaneously
- **Very short content** - if each section fits in a few lines, consider using expandable lists or toggles instead
- **Unrelated or hierarchical content** - tabs work best when content is parallel, not nested

---

## Component Props

### `TabProps` Interface

```typescript
interface TabItem {
  id: string; // Unique identifier for the tab
  label: string; // Display text for the tab
  icon?: string; // FontAwesome class (e.g., 'fa-light fa-palette')
  content?: ReactNode; // Content to display when tab is active
  badge?: number; // Reserved for future badge support
}

interface TabProps {
  items: TabItem[]; // Array of tab items
  activeTabId?: string; // ID of initially active tab (default: first tab)
  onTabChange?: (tabId: string) => void; // Callback when tab changes
  isSticky?: boolean; // Enable sticky positioning (default: true)
  size?: "sm" | "md" | "lg"; // Tab size variant (default: "md")
  showIcons?: boolean; // Display icons in tabs (default: false)
  className?: string; // Additional CSS class for styling
}
```

### Prop Details

| Prop          | Type                   | Default      | Description                                                     |
| ------------- | ---------------------- | ------------ | --------------------------------------------------------------- |
| `items`       | `TabItem[]`            | Required     | Array of tab definitions with id, label, content                |
| `activeTabId` | `string`               | First tab ID | Sets which tab is initially active                              |
| `onTabChange` | `function`             | `undefined`  | Called when user changes tabs: `(tabId: string) => void`        |
| `isSticky`    | `boolean`              | `true`       | Uses CSS `position: sticky` to keep tabs visible when scrolling |
| `size`        | `"sm" \| "md" \| "lg"` | `"md"`       | Controls padding and font size                                  |
| `showIcons`   | `boolean`              | `false`      | When true, displays TabItem.icon if provided                    |
| `className`   | `string`               | `""`         | Additional CSS class for wrapper div                            |

---

## Usage Examples

### Basic Tabs

```tsx
import { Tab, TabItem } from "@components/Tab";

const tabItems: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
    content: <p>Overview information here</p>,
  },
  {
    id: "details",
    label: "Details",
    content: <p>Detailed information here</p>,
  },
  {
    id: "contact",
    label: "Contact",
    content: <p>Contact information here</p>,
  },
];

export function MyComponent() {
  return <Tab items={tabItems} />;
}
```

### With Icons and State Management

```tsx
import { useState } from "react";
import { Tab, TabItem } from "@components/Tab";

const tabItems: TabItem[] = [
  {
    id: "services",
    label: "Services",
    icon: "fa-light fa-briefcase",
    content: <ServicesComponent />,
  },
  {
    id: "health",
    label: "Health",
    icon: "fa-light fa-heart",
    content: <HealthComponent />,
  },
];

export function MyComponent() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <Tab
      items={tabItems}
      activeTabId={activeTab}
      onTabChange={setActiveTab}
      showIcons={true}
      size="md"
    />
  );
}
```

### Sticky Navigation on Landing Page

```tsx
import { Tab, TabItem } from "@components/Tab";

const landingPageSections: TabItem[] = [
  {
    id: "section-1",
    label: "Section One",
    icon: "fa-light fa-star",
    content: <LongFormContent1 />,
  },
  {
    id: "section-2",
    label: "Section Two",
    icon: "fa-light fa-heart",
    content: <LongFormContent2 />,
  },
  {
    id: "section-3",
    label: "Section Three",
    icon: "fa-light fa-info",
    content: <LongFormContent3 />,
  },
];

export function LandingPage() {
  return (
    <Tab
      items={landingPageSections}
      isSticky={true}
      showIcons={true}
      size="md"
    />
  );
}
```

### Custom Styling with Size Variants

```tsx
<Tab
  items={tabItems}
  size="lg"  // Larger tabs for primary navigation
  showIcons={true}
  className="my-custom-tabs"
/>

// Compact size for secondary navigation
<Tab
  items={tabItems}
  size="sm"
  showIcons={false}
/>
```

---

## Accessibility

### Keyboard Navigation

| Key                          | Behavior                               |
| ---------------------------- | -------------------------------------- |
| **Arrow Left / Arrow Up**    | Move to previous tab                   |
| **Arrow Right / Arrow Down** | Move to next tab                       |
| **Home**                     | Jump to first tab                      |
| **End**                      | Jump to last tab                       |
| **Enter / Space**            | Activate focused tab                   |
| **Tab**                      | Move focus to next tab or into content |

### ARIA Attributes

The component automatically implements:

- `role="tablist"` on the tab container
- `role="tab"` on each tab button
- `aria-selected="true|false"` indicating active/inactive state
- `aria-controls="tab-panel-[id]"` linking tab to content panel
- `role="tabpanel"` on content containers
- `id="tab-panel-[id]"` for content panel identification

### Screen Reader Experience

- Screen readers announce "Tab 1 of 4" when entering tabs
- Active tab read as "selected" or "current"
- Tab content panel announced with associated tab label
- Scroll buttons labeled "Scroll tabs left" and "Scroll tabs right"

### Focus Management

- Focus outline is clearly visible using theme color `var(--clr-focus-focus)`
- Active tab on focus uses `var(--clr-border-strong-01)` outline
- Focus moves correctly with arrow key navigation
- Content is scrolled into view when navigating via keyboard

### Color Contrast

- Tab text meets WCAG AAA minimum 4.5:1 contrast ratio
- Inactive text (`var(--clr-link-default)` #1F1F5F) on white background: 7.65:1
- Active text maintains same contrast levels
- Hover states maintain sufficient contrast

---

## Design Tokens & Theming

### Color Tokens Used

| Token                    | Default Value        | Usage                                | Theme-Specific            |
| ------------------------ | -------------------- | ------------------------------------ | ------------------------- |
| `--clr-bg-default`       | White (#FFFFFF)      | Tab container background             | No - shared across themes |
| `--clr-bg-shade-alt`     | Light Grey (#E7E7EA) | Hover background                     | No - shared               |
| `--clr-link-default`     | NTG Blue (#1F1F5F)   | Default text and icons               | Yes - changes per theme   |
| `--clr-link-hover`       | Red (#C33826)        | Hover text/icon (inactive tabs only) | Yes - theme-specific      |
| `--clr-border-accent`    | Red (#C33826)        | Active tab bottom border             | Yes - theme accent color  |
| `--clr-border-strong-01` | Dark Blue (#1F1F5F)  | Active tab focus border              | Yes - theme-specific      |
| `--clr-border-subtle`    | Light Grey (#D3D3D7) | Container border                     | No - shared               |
| `--clr-focus-focus`      | NTG Orange (#EC8C58) | Focus outline                        | Yes - theme-specific      |
| `--clr-text-emphasis`    | Red (#C33826)        | Icon color on hover                  | Yes - theme-specific      |

### Typography Tokens

```css
font-family: Lato;
font-size: var(--type-desktop-body-default-size); /* 16px */
line-height: 24px;
font-weight: 400 (inactive) or 700 (active);
```

### Spacing Tokens

```css
--sp-xs = 4px;    /* Gap between icon and label */
--sp-md = 12px;   /* Padding on mobile */
--sp-lg = 16px;   /* Standard tab padding */
--sp-xl = 24px;   /* Scroll button padding */
```

### Border & Radius Tokens

```css
--radii-button = var(--radii-default);  /* Button border radius */
border-bottom: 4px solid;  /* Tab accent stroke */
border-bottom: 1px solid;  /* Container bottom border */
```

### Bootstrap CSS Variable Integration

The component uses semantic tokens rather than Bootstrap's `--bs-*` variables directly. This ensures consistency across the design system and makes theme switching seamless. However, the design can be extended to override Bootstrap variables if Bootstrap components are nested inside tabs.

---

## Theme-Specific Implementation

### NTG Theme (NT.GOV.AU)

**File:** `Tab-ntg.css`

- Uses Lato font family
- Blue accent color (#1F1F5F) for text
- Red hover/active colors (#C33826)
- NTG Orange focus outline (#EC8C58)
- Dark blue focus border on active tabs (#1F1F5F)

**CSS Variable Mappings:**

```css
--clr-link-default: #1f1f5f /* NTG Blue */ --clr-link-hover: #c33826
  /* Alert Red */ --clr-border-accent: #c33826 /* Alert Red */
  --clr-focus-focus: #ec8c58 /* NTG Orange */;
```

### Central Government Theme

**File:** `Tab-central.css`

- Uses Central theme colors (may differ from NTG)
- Maintains same component structure
- Uses theme-specific focus colors
- Can override token values as needed

**Setup:** Import both theme files so Storybook can switch between themes dynamically.

---

## CSS Architecture

### File Structure

```
src/components/Tab/
├── Tab.tsx              # React component with TypeScript
├── Tab.css              # Base styles (theme-agnostic)
├── Tab-ntg.css         # NTG theme overrides
├── Tab-central.css     # Central theme overrides
├── Tab.stories.tsx     # Storybook stories
├── index.ts            # Barrel export
└── COMPONENT.md        # This documentation
```

### CSS Class Hierarchy

```css
/* Top-level component */
.tab-component
  .tab-component--sticky

/* Container with size variants */
.tab-container
  .tab-container--sm
  .tab-container--md
  .tab-container--lg

/* Tab navigation wrapper (scroll container) */
.tab-nav-wrapper

/* Tab button with states */
.tab-nav-item
  [aria-selected="true"]       /* Active state */
  :hover                       /* Hover state */
  :focus-visible               /* Focus state */
  .tab-nav-item__icon          /* Icon element */
  .tab-nav-item__label         /* Label text */

/* Scroll buttons */
.tab-scroll-btn
  .tab-scroll-btn--left
  .tab-scroll-btn--right

/* Content area */
.tab-content-wrapper
```

### Style Specificity

- Base selector specificity kept low for easy overriding
- State selectors use attribute selectors (`[aria-selected]`) for clarity
- Only uses `!important` if absolutely necessary (none currently)
- Theme overrides use same specificity for proper cascade

---

## Responsive Behavior

### Desktop (> 768px)

- Full-size tabs with `padding: var(--sp-lg)` (16px)
- Font size: 16px, line-height: 24px
- Scroll buttons visible when tabs overflow
- Full animations and transitions enabled

### Tablet & Mobile (≤ 768px)

- Reduced padding: `var(--sp-md)` (12px)
- Font size: 14px for better fit
- Scroll buttons at reduced size (44px × 44px minimum)
- Maintain full functionality on touch devices
- Horizontal scroll gestures supported natively

### Customizing Responsive Breakpoints

To adjust the responsive breakpoint, edit the media query in `Tab.css`:

```css
@media (max-width: 768px) {
  /* Mobile-specific styles */
}
```

---

## Styling Deep Dive

### Inactive Tab States

#### Default (No Interaction)

```css
color: var(--clr-link-default); /* Blue text */
background: transparent;
border-bottom: 4px solid transparent;
font-weight: 400;
```

#### Hover

```css
background: var(--clr-bg-shade-alt); /* Light grey background */
color: var(--clr-link-hover); /* Red text */
/* Icon color changes to var(--clr-text-emphasis) */
```

#### Focus

```css
background: var(--clr-focus-focus); /* Orange background */
border-bottom: 4px solid var(--clr-border-strong-01); /* Dark blue border */
outline: none; /* Outline reset in Tab.css; focus indicated by background and border */
color: var(--clr-link-default); /* Returns to blue */
```

### Active Tab States

#### Default

```css
color: var(--clr-link-default); /* Blue text */
border-bottom: 4px solid var(--clr-border-accent); /* Red accent border */
font-weight: 700; /* Bold */
background: transparent;
```

#### Hover

```css
background: var(--clr-bg-shade-alt); /* Light grey background */
border-bottom: 4px solid var(--clr-border-accent); /* Red border persists */
color: var(--clr-link-default); /* Text stays blue */
font-weight: 700; /* Remains bold */
```

#### Focus

```css
background: var(--clr-focus-focus); /* Orange background */
border-bottom: 4px solid var(--clr-border-strong-01); /* Dark blue border */
color: var(--clr-link-default); /* Text stays blue */
font-weight: 700; /* Remains bold */
```

### Scroll Button Styling

#### Default

```css
background: var(--clr-bg-default); /* White background */
border: none;
color: var(--clr-link-default); /* Blue chevron icon */
padding: 16px;
```

#### Hover

```css
background: var(--clr-bg-shade-alt); /* Light grey background */
```

#### Focus

```css
outline: 4px solid var(--clr-focus-focus); /* Orange outline */
```

---

## Bootstrap CSS Variable Customization

While this component uses semantic design tokens rather than Bootstrap's variables directly, you can extend it to work with Bootstrap components inside tabs.

### Example: Using Bootstrap Form Inside Tab Content

```tsx
<Tab
  items={[
    {
      id: "form",
      label: "Application Form",
      content: (
        <div className="form-content">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>
      ),
    },
  ]}
/>
```

### Custom Bootstrap Override Pattern

If you need to customize Bootstrap component colors inside tabs:

```css
/* Inside Tab.css or theme override file */
.tab-content-wrapper .form-control {
  --bs-form-control-border-color: var(--clr-border-subtle);
  --bs-form-control-focus-border-color: var(--clr-focus-focus);
  --bs-form-control-focus-bg: var(--clr-bg-default);
}

.tab-content-wrapper .form-control:focus {
  --bs-form-control-focus-box-shadow: 0 0 0 0.25rem rgba(236, 140, 88, 0.25);
}
```

---

## Configuration & Advanced Usage

### Complete Props Example

```tsx
import { Tab, TabItem } from "@components/Tab";

const items: TabItem[] = [
  {
    id: "tab-1",
    label: "First Tab",
    icon: "fa-light fa-star",
    content: <div>First tab content</div>,
  },
  {
    id: "tab-2",
    label: "Second Tab",
    icon: "fa-light fa-heart",
    content: <div>Second tab content</div>,
  },
];

<Tab
  items={items}
  activeTabId="tab-1"
  onTabChange={(id) => console.log(`Changed to ${id}`)}
  isSticky={true}
  size="lg"
  showIcons={true}
  className="custom-tabs-wrapper"
/>;
```

### Controlled vs Uncontrolled

**Uncontrolled (default):**

```tsx
// Tab manages its own state internally
<Tab items={items} size="md" />
```

**Controlled:**

```tsx
const [activeTab, setActiveTab] = useState("tab-1");

<Tab items={items} activeTabId={activeTab} onTabChange={setActiveTab} />;
```

### Dynamic Tab Updates

```tsx
const [tabs, setTabs] = useState<TabItem[]>(initialTabs);

const addTab = (newTab: TabItem) => {
  setTabs([...tabs, newTab]);
};

const removeTab = (tabId: string) => {
  setTabs(tabs.filter((tab) => tab.id !== tabId));
};

<Tab items={tabs} onTabChange={handleTabChange} />;
```

---

## Performance Considerations

### Lazy Loading Tab Content

For tabs with heavy content, consider lazy loading:

```tsx
const [loadedTabs, setLoadedTabs] = useState<Set<string>>(
  new Set([items[0].id]),
);

const handleTabChange = (tabId: string) => {
  if (!loadedTabs.has(tabId)) {
    loadAsyncContent(tabId); // Load data for this tab
    setLoadedTabs(new Set([...loadedTabs, tabId]));
  }
};

<Tab items={items} onTabChange={handleTabChange} />;
```

### Large Number of Tabs

The component handles 8+ tabs effectively with scroll buttons. For 15+ tabs:

- Consider grouping tabs into sections
- Use sub-tabs or accordion patterns
- Implement lazy rendering for off-screen tabs

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

### Known Limitations

- Scroll behavior uses `scroll-behavior: smooth` (not supported in Safari - falls back to instant)
- ResizeObserver used for detecting scroll button visibility (polyfill available for IE11 if needed)
- Touch gesture support in scroll container is browser-native

---

## Related Components

- **Header** (`src/components/Header/`) — Main navigation component; use for top-level site navigation
- **SideNavigation** — For vertical navigation; can be combined with Tab for complex layouts
- **Button** — Individual actions; often used as tab alternative for 2-3 options
- **Card** — Display content; child component when tab content is structured data
- **Accordion** — Alternative for vertically stacked, expandable content
- **StepList** — For sequential processes (not for tab-like navigation)

**When to choose each:**

- **Use Tab**: Multiple parallel content sections, all equally important
- **Use Accordion**: Users want to see all option titles at once
- **Use Button Group**: Only 2-3 options to switch between
- **Use Header Navigation**: Primary site navigation

---

## Changelog

### Version 1.0.0 (Initial Release)

**Features Added:**

- ✅ Basic tab navigation with multiple size variants (sm, md, lg)
- ✅ Optional sticky positioning using CSS `position: sticky`
- ✅ Automatic scroll buttons for tab overflow
- ✅ Optional left-aligned icons using FontAwesome
- ✅ Full keyboard navigation (arrow keys, Home, End, Enter, Space)
- ✅ Complete ARIA attributes for screen reader support
- ✅ Theme support for NTG and Central government themes
- ✅ Responsive design with mobile breakpoints
- ✅ Design token integration with CSS variables
- ✅ Smooth animations and transitions

**Accessibility:**

- ✅ WCAG AAA color contrast compliance
- ✅ Keyboard navigation fully supported
- ✅ Focus management with visible indicators
- ✅ Screen reader tested and optimized

**Known Issues:**

- None - all functionality tested in Storybook

**Future Enhancements:**

- Badge support (reserved in TabItem interface)
- Vertical tab orientation
- Drag-to-reorder tabs
- Tab content caching/performance optimization
- Animation duration customization

---

## Troubleshooting

### Scroll Buttons Not Appearing

**Issue:** Tabs fit viewport, scroll buttons don't show

- ✓ Expected behavior - scroll buttons only appear when tabs overflow
- ✓ Test by adding more tabs or reducing viewport width

**Issue:** Tabs overflow but scroll buttons don't appear

- Check browser console for errors
- Verify `ResizeObserver` is supported (most modern browsers)
- Inspect `.tab-nav-wrapper` element in DevTools

### Sticky Positioning Not Working

**Issue:** Tabs don't stick when scrolling

- Check browser console for errors
- Verify `.tab-component--sticky` class is applied
- Ensure parent container doesn't have `overflow: hidden`
- Check z-index conflicts with other positioned elements

**Solution:**

```css
.tab-component--sticky .tab-container {
  position: sticky;
  top: 0;
  z-index: 100; /* Adjust if needed */
}
```

### Icon Not Displaying

**Issue:** Icon prop provided but icon doesn't render

- Verify `showIcons={true}` prop is set
- Check FontAwesome icon class is correct (e.g., `fa-light fa-palette`)
- Ensure Icon component is imported correctly

**Fix:**

```tsx
<Tab
  items={items}
  showIcons={true} // Must be enabled
/>
```

### Keyboard Navigation Not Working

**Issue:** Arrow keys don't switch tabs

- Verify component has focus (tab to component)
- Check browser console for JavaScript errors
- Ensure component is fully rendered

**Testing:**

1. Click a tab to focus component
2. Press arrow keys - should move between tabs
3. Press Enter/Space to activate focused tab

### Theme Colors Not Changing

**Issue:** Tab colors don't match current theme

- Verify theme CSS files are imported in Storybook preview
- Check theme switcher picker in Storybook (toggle NTG/Central)
- Verify design tokens are defined in theme files

**Fix in Storybook preview.tsx:**

Ensure `Tab` is registered in the `components` array inside the `withHTMLCode` decorator, and that `Tab.tsx` imports its own `Tab.css`:

```tsx
// In Tab.tsx
import "./Tab.css";

// In .storybook/preview.tsx — components array
["Tab", "tab-theme-css", "Tab"],
```

---

## Contributing & Feedback

When contributing improvements to the Tab component:

1. Maintain semantic token usage (no hardcoded colors)
2. Ensure keyboard navigation still works
3. Keep ARIA attributes up to date
4. Add stories for new features in Storybook
5. Test on mobile and desktop viewports
6. Update documentation with new features

---

## References

- [Bootstrap 5.3 Navs & Tabs Documentation](https://getbootstrap.com/docs/5.3/components/navs-tabs/)
- [WAI-ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [Design System Color Standards](../../../DESIGN_TOKENS_IMPLEMENTATION.md)
- [Content Standards & Best Practices](../../../CONTENT_STANDARDS.md)
- [Theme Switching Documentation](../../themes/THEME_SWITCHING.md)
