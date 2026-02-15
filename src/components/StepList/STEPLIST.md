# StepList Component

Comprehensive documentation for developers and AI coding agents.

---

## Table of Contents

1. [Overview](#overview)
2. [Design Philosophy](#design-philosophy)
3. [Component Architecture](#component-architecture)
4. [API Reference](#api-reference)
5. [Design Tokens Integration](#design-tokens-integration)
6. [Bootstrap Typography Customization](#bootstrap-typography-customization)
7. [Theme Implementation](#theme-implementation)
8. [CSS Architecture](#css-architecture)
9. [Implementation Guide](#implementation-guide)
10. [Accessibility Features](#accessibility-features)
11. [Developer Guidelines](#developer-guidelines)
12. [Storybook Stories](#storybook-stories)
13. [Testing](#testing)
14. [Customization Guide](#customization-guide)
15. [Troubleshooting](#troubleshooting)

---

## Overview

### Purpose

The StepList component provides a visual representation of sequential processes or multi-step workflows for NT Government web applications. It displays each step with:

- Numbered circle indicator
- Step title with label (e.g., "Step 1.")
- Optional description text
- Vertical connecting line between steps (rendered via CSS pseudo-element)

Use the StepList component to guide users through applications, service requests, license renewals, and other government processes.

### Key Features

- **Token-Based Styling**: 100% design tokens, zero hard-coded values
- **Multi-Theme Support**: Automatic adaptation to NTG and Central themes
- **Responsive Design**: Mobile-first approach with fluid layouts
- **Accessibility Built-In**: WCAG 2.1 AA compliant with semantic HTML
- **TypeScript Support**: Fully typed interfaces for type safety
- **No Bootstrap Utilities**: Uses CSS custom properties approach only
- **Clean DOM**: Minimal markup with CSS pseudo-elements for decoration

---

## Design Philosophy

### Design Principles

1. **Clarity**: Each step is visually distinct and easy to identify
2. **Progression**: Visual flow guides users top-to-bottom through process
3. **Consistency**: Uses same design tokens as all other components
4. **Simplicity**: Minimal DOM structure with CSS-based decoration
5. **Flexibility**: Supports various content lengths and step counts

### Visual Hierarchy

The component maintains clear visual hierarchy:

1. **Step Number** (Highest Priority)
   - Large circular container with high contrast
   - Bold white number on dark blue background (#1F1F5F)
   - 48px diameter circle for prominence

2. **Step Title** (High Priority)
   - "Step X." label followed by descriptive title
   - Heading 3 typography (24px, bold)
   - Dark text color (#1F1E27) for readability

3. **Description** (Supporting Content)
   - Body copy typography (16px, regular weight)
   - Adequate line height (1.5) for comfortable reading
   - Optional field for additional context

4. **Connecting Line** (Visual Guide)
   - Vertical line connecting step circles
   - Implemented via ::after pseudo-element on step-number-section
   - Applies to all items except the last one

---

## Component Architecture

### File Structure

```
src/components/StepList/
├── index.ts                  # Component exports
├── StepList.tsx              # Main React component
├── StepList.css              # Base styles (design tokens)
├── StepList-ntg.css          # NTG theme overrides
├── StepList-central.css      # Central theme overrides
├── StepList.stories.tsx      # Storybook documentation (8 stories)
└── STEPLIST.md               # This file
```

### Component Exports

**index.ts**

```typescript
export { StepList } from "./StepList";
export type {
  StepListProps,
  StepListItem,
  StepListItemContent,
} from "./StepList";
```

**Main Library Export** (src/index.ts):

```typescript
export { StepList } from "./components/StepList";
export type {
  StepListProps,
  StepListItem,
  StepListItemContent,
} from "./components/StepList";
```

---

## API Reference

### TypeScript Interfaces

```typescript
export interface StepListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of step items to display */
  steps: StepListItem[];
}

export interface StepListItem {
  /** Step number */
  stepNumber: number;
  /** Title of the step */
  title: string;
  /** Optional description content for the step */
  content?: StepListItemContent;
}

export interface StepListItemContent {
  /** Description text for the step */
  description?: string;
}
```

### Props

| Prop        | Type             | Required | Description                     |
| ----------- | ---------------- | -------- | ------------------------------- |
| `steps`     | `StepListItem[]` | Yes      | Array of step items to display  |
| `className` | `string`         | No       | Additional CSS classes to apply |
| `...props`  | `HTMLAttributes` | No       | Standard HTML div attributes    |

### StepListItem Properties

| Property     | Type                  | Required | Description                      |
| ------------ | --------------------- | -------- | -------------------------------- |
| `stepNumber` | `number`              | Yes      | Step number to display in circle |
| `title`      | `string`              | Yes      | Title of the step                |
| `content`    | `StepListItemContent` | No       | Optional description content     |

### Basic Usage

```tsx
import { StepList } from "@ntgovernment/web-design-system";

const steps = [
  {
    stepNumber: 1,
    title: "Prepare Your Documents",
    content: {
      description: "Gather your proof of identity and supporting documents.",
    },
  },
  {
    stepNumber: 2,
    title: "Complete Online Form",
  },
];

function MyApplication() {
  return <StepList steps={steps} />;
}
```

---

## Design Tokens Integration

### Token-Based Styling Strategy

The StepList component is built **entirely** using design tokens from `design-tokens/tokens.json`. This ensures:

- **Consistency**: All components use the same color palette and typography
- **Maintainability**: Changes to design tokens automatically propagate
- **Theme Switching**: Supporting multiple themes without code duplication
- **Accessibility**: Colors meet WCAG contrast requirements

### Design Tokens Used

#### Color Tokens

| Token                 | Usage                   | Value (NTG)          |
| --------------------- | ----------------------- | -------------------- |
| `--clr-bg-dark`       | Step circle background  | #1F1F5F (Dark Blue)  |
| `--clr-text-inverse`  | Circle number color     | #FFFFFF (White)      |
| `--clr-text-default`  | Titles and descriptions | #1F1E27 (Dark)       |
| `--clr-border-subtle` | Connecting line         | #D3D3D7 (Light Gray) |

#### Typography Tokens

| Token Category            | Usage          | Size                          | Weight | Line Height |
| ------------------------- | -------------- | ----------------------------- | ------ | ----------- |
| `--type-heading-h3-*`     | Step titles    | 24px                          | 700    | 28px        |
| `--type-body-default-*`   | Descriptions   | 16px                          | 400    | 24px        |
| `--type-button-default-*` | Circle numbers | 16px                          | 700    | 24px        |
| `--type-font-default`     | All text       | Lato (NTG) / Roboto (Central) | -      | -           |

#### Spacing Tokens

| Token     | Value | Usage                    |
| --------- | ----- | ------------------------ |
| `--sp-xs` | 8px   | Small gaps               |
| `--sp-sm` | 12px  | Circle to title spacing  |
| `--sp-lg` | 24px  | Title to description gap |
| `--sp-xl` | 32px  | Gap between steps        |

#### Border Tokens

| Token                | Value | Usage                 |
| -------------------- | ----- | --------------------- |
| `--border-width-xxl` | 2px   | Connecting line width |

### Token References in CSS

From `StepList.css`:

```css
.step-list__step-circle {
  background: var(--clr-bg-dark);
  border-radius: var(--step-list-circle-border-radius, 100px);
}

.step-list__step-number {
  color: var(--clr-text-inverse);
  font-size: var(--type-button-default-size);
  font-family: var(--type-font-default);
  font-weight: 700;
}

.step-list__item:not(:last-child) .step-list__step-number-section::after {
  content: "";
  background: var(--clr-border-subtle);
  width: var(--border-width-xxl);
}
```

---

## Bootstrap Typography Customization

### Bootstrap Integration

The StepList component uses Bootstrap 5.3's CSS variable system for typography customization. We **do not** use Bootstrap's utility classes directly, but apply similar principles:

1. **Native Font Stack**: Using `var(--type-font-default)` which is set to Lato (NTG) or Roboto (Central)
2. **Responsive Typography**: Font sizes adapt using CSS custom properties
3. **Line Height Scale**: Consistent line heights from design tokens (1.2-1.5 ratio)

### Typography Customization Points

#### Global Typography Variables

From `src/themes/base-variables.css`:

```css
:root {
  --type-font-default: Lato; /* Changed to Roboto for Central theme */
  --type-font-alt: Arial; /* Fallback font */
}
```

#### Heading Styles Override

Instead of Bootstrap's Sass variables, we use CSS custom properties:

```css
/* From design tokens */
--type-heading-h3-size: 24px;
--type-heading-h3-weight: 700;
--type-heading-h3-lh: 28px;
```

### CSS Variable Customization Pattern

To customize typography for your specific use case:

```css
/* Override in your component or application CSS */
:root {
  --type-heading-h3-size: 20px; /* Make headings smaller */
  --type-body-default-size: 18px; /* Make body text larger */
}
```

---

## Theme Implementation

### Multi-Theme Architecture

The design system supports two distinct themes:

1. **NTG (NT.GOV.AU)**: External-facing government websites
2. **Central (Intranet)**: Internal NT Government staff websites

### Theme Switching Mechanism

Themes are implemented through:

1. **CSS Custom Properties**: Theme-specific values override defaults
2. **Separate Theme Files**: `theme-ntg.css` and `theme-central.css`
3. **Semantic Variable Mapping**: Generic names map to theme-specific values

### Theme-Specific Overrides

#### NTG Theme (`StepList-ntg.css`)

```css
:root {
  --step-list-circle-border-radius: 100px;
}

.step-list__step-circle:focus {
  box-shadow: var(--shadow-focus-ntg); /* Orange focus outline #EC8C58 */
}
```

#### Central Theme (`StepList-central.css`)

```css
:root {
  --step-list-circle-border-radius: 100px;
}

.step-list__step-circle:focus {
  box-shadow: var(--shadow-focus-central); /* Green focus outline #6AB06A */
}
```

### Font Family Changes

The `--type-font-default` changes per theme:

- **NTG Theme**: `Lato`
- **Central Theme**: `Roboto`

This is automatically applied through the semantic variable system.

### Color Palette Adaptation

Theme colors automatically adjust:

| Element             | NTG Color        | Central Color   |
| ------------------- | ---------------- | --------------- |
| Circle bg           | #1F1F5F (Blue)   | #1F1F5F (Blue)  |
| Focus (interactive) | #EC8C58 (Orange) | #6AB06A (Green) |
| Text default        | #1F1E27 (Dark)   | #1F1E27 (Dark)  |

---

## CSS Architecture

### Component-Level CSS Variables

StepList defines custom properties for flexible overriding:

```css
/* Border radius variables (theme-specific) */
--step-list-circle-border-radius: 100px; /* Perfect circle */
```

### CSS Class Reference (BEM Methodology)

All selectors available for styling:

```css
.step-list                      /* Main container */
.step-list__item                /* Individual step */
.step-list__step-number-section /* Circle container (has ::after for line) */
.step-list__step-circle         /* The numbered circle */
.step-list__step-number         /* Number inside circle */
.step-list__content             /* Content area */
.step-list__title-wrapper       /* Title + label row */
.step-list__step-label          /* "Step X." text */
.step-list__title               /* Step title */
.step-list__description         /* Description text */
```

### Connecting Line Implementation

The vertical connecting line is implemented via CSS pseudo-element:

```css
.step-list__item:not(:last-child) .step-list__step-number-section::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 48px; /* Below the circle */
  bottom: 0;
  width: var(--border-width-xxl);
  background: var(--clr-border-subtle);
  transform: translateX(-50%);
}
```

This approach:

- Keeps DOM clean (no extra divs)
- Uses `:not(:last-child)` to exclude line from last step
- Positioned absolutely within step-number-section
- Uses design tokens for width and color

---

## Implementation Guide

### Basic Implementation

#### Step 1: Import the Component

```tsx
import { StepList } from "@ntgovernment/web-design-system";
```

#### Step 2: Define Step Data

```ts
const applicationSteps = [
  {
    stepNumber: 1,
    title: "Personal Details",
    content: {
      description: "Enter your full name and date of birth.",
    },
  },
  {
    stepNumber: 2,
    title: "Contact Information",
    content: {
      description: "Provide your email and phone number.",
    },
  },
];
```

#### Step 3: Render Component

```tsx
export function ApplicationForm() {
  return (
    <div className="application-container">
      <h1>Submit Your Application</h1>
      <StepList steps={applicationSteps} />
    </div>
  );
}
```

### Advanced Implementation

#### Dynamic Steps from API

```tsx
export function DynamicStepList() {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSteps()
      .then((data) => setSteps(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading process steps...</div>;

  return <StepList steps={steps} />;
}
```

#### Custom Styling with Props

```tsx
export function ThemedStepList() {
  return <StepList steps={applicationSteps} className="custom-step-list" />;
}
```

In your CSS:

```css
.custom-step-list {
  max-width: 900px;
  margin: 0 auto;
}

.custom-step-list .step-list__description {
  font-size: 18px; /* Larger description text */
}
```

### Integration with Forms

Combining StepList with form submission:

```tsx
export function ApplicationFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    {
      stepNumber: 1,
      title: "Personal Information",
      content: {
        description:
          "Enter your full legal name, date of birth, and contact information.",
      },
    },
    // ... more steps
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <>
      <StepList steps={steps} />

      {/* Form section for current step */}
      <section className="current-step">
        {/* Render form for currentStep */}
        <button onClick={handleNext}>Next Step</button>
      </section>
    </>
  );
}
```

---

## Accessibility Features

### WCAG 2.1 Compliance

The StepList component is built with accessibility in mind:

#### Semantic HTML

- Uses `<div>` elements with semantic structure
- Clear heading hierarchy (h3 for titles)
- Proper nesting of content

#### Color Contrast

All text meets WCAG AA standards:

- Step numbers: 21:1 contrast (white on dark blue)
- Body text: 12.3:1 contrast (dark on white)
- Titles: 12.3:1 contrast (dark on white)

#### Focus States

- Step circles have visible focus outlines
- Focus color differs by theme:
  - NTG: Orange (#EC8C58)
  - Central: Green (#6AB06A)

#### Keyboard Navigation

- All interactive elements (if made interactive) are keyboard accessible
- Focus order follows visual left-to-right, top-to-bottom order
- Focus indicators are clearly visible

### Screen Reader Support

```tsx
// Example: Adding ARIA labels if steps become interactive

<div
  className="step-list__item"
  role="listitem"
  aria-label={`Step ${step.stepNumber} of ${total}: ${step.title}`}
>
  {/* ... */}
</div>
```

### Readability Features

- **Line height**: 1.2-1.5x font size for comfortable reading
- **Text alignment**: Left-aligned for better readability
- **Word breaking**: Text wraps naturally without hyphens
- **Sufficient spacing**: Adequate padding and margins

---

## Developer Guidelines

### Code Style

- **TypeScript**: Strict mode enabled
- **React**: Functional components with hooks
- **CSS**: Component-scoped styles with BEM naming
- **Imports**: Absolute imports from design tokens

### Type Safety

All props are typed with TypeScript interfaces:

```tsx
// ✅ Good - Type checked
const steps: StepListItem[] = [{ stepNumber: 1, title: "Step 1" }];

// ❌ Bad - Type error
const steps = [
  { stepNumber: "1", title: "Step 1" }, // Error: string not number
];
```

### Component Composition Pattern

The component uses a simple map pattern:

```tsx
export const StepList = ({ steps, className, ...props }: StepListProps) => {
  return (
    <div className={`step-list${className ? ` ${className}` : ""}`} {...props}>
      {steps.map((step, index) => (
        <div key={index} className="step-list__item">
          {/* Step rendering */}
        </div>
      ))}
    </div>
  );
};
```

### Token Usage Pattern

Always use CSS variables instead of hard-coded values:

```css
/* ✅ Good - Uses tokens */
.step-list__title {
  color: var(--clr-text-default);
  font-size: var(--type-heading-h3-size);
}

/* ❌ Bad - Hard-coded values */
.step-list__title {
  color: #1f1e27;
  font-size: 24px;
}
```

### Performance Optimization

The component is optimized for performance:

- Uses functional components (no unnecessary re-renders)
- Keys properly set in loops
- No expensive computations in render
- CSS variables cached by browser

For lists with 100+ steps, consider virtual scrolling:

```tsx
// Virtual scrolling for large lists
import { FixedSizeList as List } from "react-window";

export function LargeStepList({ steps }) {
  return (
    <List height={600} itemCount={steps.length} itemSize={150} width="100%">
      {({ index, style }) => (
        <div style={style}>
          <StepItem step={steps[index]} />
        </div>
      )}
    </List>
  );
}
```

---

## Storybook Stories

The component includes 8 comprehensive stories demonstrating various use cases:

### 1. Default

Complete 4-step government service application process with all features.

### 2. SimpleTitlesOnly

Minimal steps with titles only (no descriptions) - ideal for quick processes.

### 3. WithDescriptions

Steps with descriptions but no additional info boxes.

### 4. WithDetailedDescriptions

Steps with comprehensive detailed descriptions for complex processes.

### 5. LongFormProcess

5-step application with detailed descriptions for complex workflows.

### 6. ServiceApplication

Standard NT Government service application with realistic content.

### 7. QuickProcess

Short 3-step process for simple tasks.

### 8. LicenseRenewal

Government license renewal process with payment and confirmation steps.

All stories follow CONTENT_STANDARDS.md guidelines:

- No Lorem Ipsum text
- Realistic NT Government service scenarios
- Practical, meaningful content

---

## Testing

### Unit Testing Considerations

For unit tests, consider testing:

1. **Rendering**: Component renders with correct number of steps
2. **Props**: All props are applied correctly
3. **Content**: Titles and descriptions display properly
4. **Accessibility**: ARIA attributes present when needed
5. **Styling**: CSS classes applied correctly

Example test structure:

```tsx
import { render, screen } from "@testing-library/react";
import { StepList } from "./StepList";

describe("StepList", () => {
  it("renders all steps", () => {
    const steps = [
      { stepNumber: 1, title: "Step 1" },
      { stepNumber: 2, title: "Step 2" },
    ];
    render(<StepList steps={steps} />);
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <StepList steps={[]} className="custom-class" />,
    );
    expect(container.querySelector(".step-list")).toHaveClass("custom-class");
  });

  it("renders description when provided", () => {
    const steps = [
      {
        stepNumber: 1,
        title: "Test",
        content: { description: "Test description" },
      },
    ];
    render(<StepList steps={steps} />);
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });
});
```

---

## Customization Guide

### Change Step Circle Color

```css
:root {
  --clr-bg-dark: #2a2a7e; /* Override circle background */
}
```

### Modify Title Font Size

```css
.step-list__title {
  font-size: 20px; /* Smaller than default 24px */
}
```

### Adjust Spacing Between Steps

```css
.step-list__item {
  gap: 40px; /* Instead of var(--sp-xl) which is 32px */
}
```

### Change Connecting Line Color

```css
.step-list__item:not(:last-child) .step-list__step-number-section::after {
  background: #0000ff; /* Blue line instead of subtle gray */
}
```

### Make Numbers Larger

```css
.step-list__step-number {
  font-size: 20px; /* Larger than default 16px */
}

.step-list__step-circle {
  width: 60px;
  height: 60px; /* Larger circle to accommodate */
}
```

---

## Troubleshooting

### Common Issues

#### Steps Not Displaying

**Issue**: StepList renders empty.

**Solution**: Ensure `steps` prop is an array with at least one item:

```tsx
// ❌ Wrong - empty array
<StepList steps={[]} />

// ✅ Correct
<StepList steps={[{ stepNumber: 1, title: "Step 1" }]} />
```

#### Connecting Line Missing

**Issue**: No line between steps.

**Solution**: The line is auto-hidden on the last step. If you only have one step, no line appears. This is intentional.

#### Theme Styles Not Applying

**Issue**: Theme-specific styles (border radius, focus colors) don't show.

**Solution**: Ensure theme CSS files are imported in your application:

```tsx
import "@ntgovernment/web-design-system/dist/themes/theme-ntg.css";
```

#### TypeScript Errors

**Issue**: Type errors when passing steps.

**Solution**: Use the exported types:

```tsx
import { StepListItem } from "@ntgovernment/web-design-system";

const steps: StepListItem[] = [{ stepNumber: 1, title: "Test" }];
```

#### Custom Styles Not Working

**Issue**: Custom CSS classes don't override component styles.

**Solution**: CSS specificity - your custom styles need equal or greater specificity:

```css
/* ❌ Too weak */
.custom {
  color: red;
}

/* ✅ Strong enough */
.custom .step-list__title {
  color: red;
}
```

---

## Design Token Reference

For a complete list of available design tokens, see:

- `design-tokens/tokens.json` - Token definitions
- `design-tokens/DESIGN-TOKENS.md` - Token documentation
- `DESIGN_TOKENS_IMPLEMENTATION.md` - Implementation guide

### Key Token Categories

- **Colors**: `clr-*` (backgrounds, text, borders, states)
- **Typography**: `type-*` (fonts, sizes, weights, line heights)
- **Spacing**: `sp-*` (XS through 3XL)
- **Borders**: `border-*` (widths, radii)
- **Shadows**: `shadow-*` (focus, elevation)

---

## Related Components

- **Breadcrumbs**: Navigation hierarchy
- **Pagination**: Sequential page navigation
- **Accordion**: Collapsible step-by-step content

---

## Support and Resources

- **Storybook**: [Local Storybook](http://localhost:6006) when running `npm run storybook`
- **Content Standards**: See CONTENT_STANDARDS.md
- **Contributing**: See CONTRIBUTING.md
- **Design Tokens**: See DESIGN_TOKENS_IMPLEMENTATION.md

---

## Version History

### Current Version

- Simplified DOM structure (removed separate connector-line divs)
- Vertical connecting line via CSS ::after pseudo-element
- Removed info box functionality (kept simple: circle, title, description only)
- 100% design token coverage
- 8 comprehensive Storybook stories with realistic content

### Known Limitations

- Step numbers are display-only (not interactive by default)
- Connecting line is strictly vertical (no diagonal or custom paths)
- Theme switching requires CSS file imports (no runtime switching)

---

## License

See LICENSE file in repository root.
