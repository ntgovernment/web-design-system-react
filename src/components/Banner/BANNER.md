# Banner Component

A large, salient component that introduces a page or calls attention to important calls to action.

## Overview

Banners are designed for home and landing pages to showcase important links and add visual interest. They support multiple variants including hero banners with breadcrumbs, titles, descriptions, CTAs, and links.

## Usage

Use a banner on home or landing pages to showcase important links and add visual interest to the page.

There are two types of banners:

- **Primary banner**: Sits at the top of a page, introducing it and key links
- **Secondary banner**: Can sit amongst other content to draw attention to an important call to action

Banner variants can include:

- H1 page title
- Heading
- Page description
- Primary, secondary and/or tertiary calls to action
- Links to other pages (displayed as pills)
- Decorative illustration elements

**Best for:**

- Home pages
- Landing pages (main entry point to content pages)
- Agency or department portals

## How to Use

- Use only on home and landing pages
- Only use one illustration or decorative element per banner
- Use relevant, high-quality content and test at each screen size
- Keep descriptions concise
- Limit the number of links to avoid clutter (4-6 recommended)
- Set `linksHeading` to "Popular", "Featured", or "Related" based on content context
- Omit optional props (breadcrumbs, ctaText, links) to hide those sections

## How Not to Use

- Do not use on content pages, search pages or in forms
- Do not clutter a banner with too many links or calls to action
- Descriptions should be concise, do not use long paragraphs
- Avoid generic placeholder text - use meaningful, contextual content

## Variants

### Primary Banner

Dark background banner with desert rose decorative element, used on home pages.

**Includes:**

- H1 page title
- Optional description
- Call to action button
- "Popular" links section (displayed as pills)
- Desert rose SVG watermark
- Inverted breadcrumbs (white text for dark background)

**Link heading options:**

- **"Popular"**: Most visited or commonly used on the site or topic. Do not use if a link name could be problematic with the word 'popular'. For example, on a landing page about aged care, do not use 'popular' if one of the links will be 'palliative care'.
- **"Featured"**: Highlights important or timely content. These links can change often.
- **"Related"**: Connected to the content on the page. Helps user find similar topics.

```tsx
<Banner
  variant="primary"
  title="Welcome to NT.GOV.AU"
  description="Your gateway to Northern Territory Government services and information."
  ctaText="Explore services"
  linksHeading="Popular"
  links={[
    { label: "Bus timetables and maps", href: "#" },
    { label: "Check your rego", href: "#" },
    { label: "Find a Motor Vehicle Registry (MVR)", href: "#" },
    { label: "Government priorities", href: "#" },
  ]}
/>
```

### Secondary Banner

Light background banner with vertical link list and visual divider between content and links. Can be used amongst other content to draw attention to important calls to action.

**Includes:**

- H1 page title
- Optional description
- Call to action button
- Border divider between main content and links
- Vertical link list (not pills)
- Geometric decorative shapes
- Regular breadcrumbs

```tsx
<Banner
  variant="secondary"
  title="Transport Services"
  description="Access public transport information, vehicle registration, and licensing services."
  ctaText="View all transport services"
  linksHeading="Featured"
  links={[
    { label: "Renew your driver's license", href: "/licenses" },
    { label: "Register a vehicle", href: "/registration" },
    { label: "Road safety information", href: "/safety" },
    { label: "Public transport timetables", href: "/transport" },
  ]}
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Current page", isCurrent: true },
  ]}
/>
```

## Anatomy

1. **Decorative elements** (optional) - Desert rose SVG watermark for primary variant, geometric decorative watermark for secondary variant
2. **Breadcrumbs** (optional) - Navigation context with inverted colors for dark backgrounds
3. **Page title** (required) - H1 heading
4. **Description** (optional) - Brief page introduction
5. **Call to action button** (optional) - Primary or secondary action
6. **Border divider** (secondary variant only) - Visual separator between main content and links
7. **Links section** (optional) - Heading and pill-style links (primary variant) or vertical link list (secondary variant)

## Props

| Prop             | Type                                     | Required | Default                                                              | Description                                                                                            |
| ---------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `variant`        | `"primary" \| "secondary"`               | No       | `"primary"`                                                          | Banner variant style                                                                                   |
| `title`          | `string`                                 | Yes      | -                                                                    | Page title (H1)                                                                                        |
| `description`    | `string`                                 | No       | -                                                                    | Optional page description                                                                              |
| `breadcrumbs`    | `BreadcrumbItem[]`                       | No       | -                                                                    | Optional breadcrumb items array                                                                        |
| `ctaText`        | `string`                                 | No       | -                                                                    | Call to action button text                                                                             |
| `ctaOnClick`     | `() => void`                             | No       | -                                                                    | CTA button click handler                                                                               |
| `ctaHref`        | `string`                                 | No       | -                                                                    | CTA button href (for link behavior)                                                                    |
| `ctaVariant`     | `"primary" \| "secondary" \| "tertiary"` | No       | `"secondary"` for dark and secondary variants, `"primary"` for light | CTA button variant                                                                                     |
| `linksHeading`   | `"Popular" \| "Featured" \| "Related"`   | No       | -                                                                    | Heading for links section                                                                              |
| `links`          | `Array<{ label: string; href: string }>` | No       | -                                                                    | Array of clickable link objects (displayed as pills for primary variant, vertical links for secondary) |
| `linkItems`      | `Array<{ label: string; href: string }>` | No       | -                                                                    | (Deprecated) Use `links` instead                                                                       |
| `showDecorative` | `boolean`                                | No       | `true` for primary and secondary                                     | Show decorative background elements                                                                    |
| `label`          | `string`                                 | No       | -                                                                    | Breadcrumb first item label (if not using breadcrumbs array)                                           |
| `href`           | `string`                                 | No       | -                                                                    | Breadcrumb first item href (if not using breadcrumbs array)                                            |

### TypeScript props (machine-readable)

```ts
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary";
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  ctaVariant?: "primary" | "secondary" | "tertiary";
  linksHeading?: "Popular" | "Featured" | "Related";
  links?: { label: string; href: string }[];
  /** @deprecated use `links` */
  linkItems?: { label: string; href: string }[];
  showDecorative?: boolean;
  label?: string;
  href?: string;
}
```

## Controlling Optional Sections

The Banner component allows you to show or hide different sections by providing or omitting the relevant props:

### Breadcrumbs

- **Show**: Provide `breadcrumbs` array or both `label` and `href` props
- **Hide**: Omit breadcrumbs, label, and href props

### Call to Action (CTA)

- **Show**: Provide `ctaText` prop (and optionally `ctaOnClick` or `ctaHref`)
- **Hide**: Omit `ctaText` prop

### Popular Links

- **Show**: Provide `links` array along with `linksHeading`
- **Hide**: Omit `links` or `linksHeading` props
- **Link heading**: Must be set to one of three values: `"Popular"`, `"Featured"`, or `"Related"`
- **Note**: `linkItems` is deprecated but still supported for backwards compatibility. Use `links` for all new implementations.

## Examples

### Minimal Banner (Title Only)

```tsx
<Banner variant="primary" title="Emergency Services" />
```

### With CTA Only

```tsx
<Banner
  variant="primary"
  title="Emergency Services"
  description="Quick access to emergency contact information"
  ctaText="Call 000"
/>
```

### With Breadcrumbs Only

```tsx
<Banner
  variant="primary"
  title="Emergency Services"
  description="Quick access to emergency contact information"
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Current page", isCurrent: true },
  ]}
/>
```

### With Popular Links Only

```tsx
<Banner
  variant="primary"
  title="Health Services"
  description="Access health information and services"
  linksHeading="Popular"
  links={[
    { label: "Hospital locations", href: "/hospitals" },
    { label: "Medicare services", href: "/medicare" },
    { label: "Mental health support", href: "/mental-health" },
  ]}
/>
```

### Full-Featured Banner (All Sections)

```tsx
<Banner
  variant="primary"
  title="Health and Wellbeing"
  description="Access health services, find medical facilities, and learn about public health programs in the Northern Territory."
  ctaText="Find health services"
  ctaVariant="secondary"
  linksHeading="Featured"
  links={[
    { label: "COVID-19 information", href: "/covid" },
    { label: "Mental health support", href: "/mental-health" },
    { label: "Hospital locations", href: "/hospitals" },
    { label: "Medicare services", href: "/medicare" },
  ]}
  breadcrumbs={[
    { label: "Home", href: "/" },
    { label: "Current page", isCurrent: true },
  ]}
  showDecorative={true}
/>
```

### Without Decorative Elements

```tsx
<Banner
  variant="primary"
  title="Clean Banner Design"
  description="This banner demonstrates the component without decorative background elements."
  ctaText="Learn more"
  showDecorative={false}
  linksHeading="Popular"
  links={[
    { label: "Service 1", href: "#" },
    { label: "Service 2", href: "#" },
    { label: "Service 3", href: "#" },
  ]}
/>
```

## Accessibility

- The title uses semantic H1 heading markup for proper document outline
- Breadcrumbs include proper ARIA attributes and current page indication
- CTA buttons are keyboard accessible and support focus states
- Links are fully clickable and keyboard accessible with proper focus states (both primary and secondary variants)
- All links use semantic `<a>` elements with proper href attributes
- Color contrast meets WCAG AA standards for both primary and secondary variants
- Focus states are theme-specific (orange for NTG, green for Central)

## Typography

The Banner component uses theme tokens for all typography:

- **Title**: `--type-heading-h1-*` tokens (40px at desktop, 32px at mobile)
- **Description**: `--type-body-default-*` tokens (16px)
- **Links heading**: `--type-heading-h3-*` tokens (20px)
- **Breadcrumbs**: `--type-link-sm-*` tokens (14px)

Font family automatically adapts to theme:

- NTG: Lato
- Central: Roboto

## Theming and Tokens

### Color Tokens

**Primary variant:**

- Background: `--clr-bg-dark-alt` (#44447A)
- Text: `--clr-text-inverse` (white)
- Links: `--clr-link-inverse` (white)
- Breadcrumb divider: White SVG

**Secondary variant:**

- Background: `--clr-bg-shade` (#F5F5F7)
- Text: `--clr-text-default` (dark)
- Links: `--clr-link-default` (theme primary color)
- Border: `--clr-border-subtle` (#D3D3D7)

**Pill links (primary variant):**

- Background: `--clr-bg-default` (white)
- Text: `--clr-text-default` (dark)

**Vertical links (secondary variant):**

- Background: transparent
- Text: `--clr-link-default` (theme primary color)

### Spacing Tokens

- Container padding: `--sp-md` (16px)
- Vertical padding: `--sp-xl` (24px) top, `--sp-xxxl` (48px) bottom
- Content gap: `--sp-xxl` (32px)
- Internal gaps: `--sp-md` (16px), `--sp-sm` (12px), `--sp-xs` (8px)

### Theme-Specific Tokens

- Button border radius: `--ntg-radii-button` / `--central-radii-button`
- Pill border radius (Pill component): `--ntg-radii-sm` / `--central-radii-sm`
- Banner pill links (primary variant) border radius: `--ntg-radii-none` / `--central-radii-none` (square corners)
- Focus outline: `--shadow-focus-ntg` / `--shadow-focus-central`

Theme overrides are defined in:

- `Banner-ntg.css` - NTG theme-specific styles
- `Banner-central.css` - Central theme-specific styles

## Responsive Behavior

The Banner component is fully responsive with the following breakpoints:

### Desktop (> 991px)

- Two-column layout: main content and links side-by-side
- Desert rose SVG decorative element visible
- Content max-width: 1168px

### Tablet (768px - 991px)

- Single-column layout: content stacks vertically
- Links section takes full width
- Desert rose decorative element remains visible

### Mobile (< 767px)

- Reduced vertical padding
- Smaller title font size (H2 size)
- Smaller content gaps
- Desert rose decorative element hidden for cleaner mobile layout

## Storybook Stories

Available stories demonstrating component variants:

- **PrimaryBanner** - Default primary banner with all features
- **PrimaryWithFeaturedLinks** - Using "Featured" heading
- **PrimaryWithRelatedLinks** - Using "Related" heading
- **WithoutBreadcrumbs** - No navigation context
- **WithoutDecorative** - Clean design without decorative elements
- **WithLongContent** - Demonstrates text wrapping behavior
- **SecondaryBanner** - Secondary variant with vertical links
- **SecondaryWithFeatured** - Secondary variant with featured links
- **SecondaryMinimal** - Minimal secondary variant without decorative
- **MinimalTitleOnly** - Shows only title and description (no optional sections)
- **WithoutCTA** - Banner without call to action button
- **WithoutLinks** - Banner without popular links section

## HTML API

Example endpoints when Storybook is running:

```
GET http://localhost:6006/api/html/Banner/PrimaryBanner
GET http://localhost:6006/api/html/Banner/SecondaryBanner
```

## File Structure

```
src/components/Banner/
  Banner.tsx           # Main component
  Banner.css           # Common styles
  Banner-ntg.css       # NTG theme overrides
  Banner-central.css   # Central theme overrides
  Banner.stories.tsx   # Storybook stories
  BANNER.md           # This documentation
  index.ts            # Export barrel
```

## Integration with Other Components

The Banner component integrates with:

1. **BreadcrumbsContent** (`src/content/breadcrumbs/`)
   - Provides navigation context
   - Automatically inverted for dark backgrounds
   - Uses theme-specific divider SVG

2. **Button** (`src/components/Button/`)
   - CTA buttons use Bootstrap CSS variables
   - Theme-specific focus states
   - Automatic variant selection based on background

3. **Pill** (`src/components/Pill/`)
   - Links displayed as non-interactive pills
   - Styled for readability on dark backgrounds
   - Close icon hidden in banner context

## Developer Notes

This section consolidates everything a developer or automation agent needs to implement, test, extend, or generate the `Banner` component.

### DOM Structure & Classnames

Stable selectors for testing and automation:

- Root: `.banner` with variant modifier `.banner--{variant}`
- Decorative wrapper: `.banner__decorative` (contains desert rose SVG for primary variant, geometric decorative watermark for secondary)
- Container: `.banner__container`
- Breadcrumbs: `.banner__breadcrumbs`
- Content wrapper: `.banner__content`
- Main content: `.banner__main`
  - Title: `.banner__title` (H1)
  - Description: `.banner__description` (p)
  - CTA container: `.banner__cta`
- Links section: `.banner__links`
  - Heading: `.banner__links-heading` (H2)
  - Pill list: `.banner__links-list` (hero variants)
  - Vertical list: `.banner__links-vertical` (secondary variant)
  - Individual pill: `.banner__pill`
  - Individual link: `.banner__link` (secondary variant)

### Automation & coding-agent hints

- Stable selectors for tests and automation: `.banner`, `.banner__title`, `.banner__description`, `.banner__links-list`, `.banner__pill-link`, `.banner__link`
- Props useful for automation/codegen: `links` (Array<{label, href}>), `linksHeading`, `ctaText`, `breadcrumbs`, `showDecorative`
- Example JSON for `links` (suitable for programmatic generation):

```json
[
  { "label": "Bus timetables and maps", "href": "/transport" },
  { "label": "Check your rego", "href": "/rego" }
]
```

- Migration tip for agents: map legacy `links: string[]` to `links.map(l => ({ label: l, href: '#' }))` or preferably provide real `href` values.
- Testing/visual-regression target: capture the `.banner` region and assert `.banner__pill-link` hover/focus states and `linksHeading` rendering.

### CSS Variables Available for Customization

Override these at runtime for custom styling:

```css
/* Background colors */
--clr-bg-dark-alt: #44447a; /* Dark banner background (primary) */
--clr-bg-default: white; /* Light banner background */
--clr-bg-shade: #f5f5f7; /* Light shade background (secondary) */

/* Text colors */
--clr-text-inverse: white; /* Dark background text */
--clr-text-default: #1f1e27; /* Light background text */
--clr-link-inverse: white; /* Dark background links */
--clr-link-default: #1f1f5f; /* Light background links */

/* Border */
--clr-border-subtle: #d3d3d7; /* Secondary variant divider */

/* Spacing */
--sp-xl: 24px; /* Top padding */
--sp-xxxl: 48px; /* Bottom padding */
--sp-xxl: 32px; /* Content gap, border padding */
--sp-md: 16px; /* Container padding */

/* Typography */
--type-heading-h1-size: 40px;
--type-heading-h1-weight: 700;
--type-heading-h1-lh: 44px;
```

### Tokens & CSS Variables (What to Change)

To modify Banner appearance:

1. **Update design tokens**: Edit `design-tokens/tokens.json`
2. **Rebuild CSS**: Run `npm run tokens:build`
3. **Component-specific overrides**: Edit `Banner.css`, `Banner-ntg.css`, or `Banner-central.css`

### Theming Workflow

The Banner component follows the token-based theming system:

1. **Common styles** in `Banner.css` use semantic tokens (`--clr-*`, `--sp-*`, `--type-*`)
2. **Theme files** (`Banner-ntg.css`, `Banner-central.css`) override with theme-specific tokens
3. **Storybook** dynamically loads correct theme file based on active theme
4. **Build process** bundles theme-specific styles from tokens

### Adding New Banner Variants

To add a new variant:

1. Add variant option to `BannerProps.variant` type union
2. Add variant-specific class in `Banner.css` (e.g., `.banner--new-variant`)
3. Define background, text, and spacing for the variant
4. Create Storybook story demonstrating the new variant
5. Update documentation with variant description and example
6. Add visual regression tests

### Testing Guidance

**Unit Tests (Vitest + React Testing Library):**

```typescript
import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';

test('renders title and description', () => {
  render(
    <Banner
      title="Test Banner"
      description="Test description"
    />
  );

  expect(screen.getByRole('heading', { level: 1, name: /Test Banner/i }))
    .toBeInTheDocument();
  expect(screen.getByText(/Test description/i)).toBeInTheDocument();
});

test('renders CTA button when ctaText provided', () => {
  const handleClick = vi.fn();

  render(
    <Banner
      title="Test"
      ctaText="Click me"
      ctaOnClick={handleClick}
    />
  );

  const button = screen.getByRole('button', { name: /Click me/i });
  expect(button).toBeInTheDocument();

  button.click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('renders breadcrumbs when provided', () => {
  render(
    <Banner
      title="Test"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Current", isCurrent: true }
      ]}
    />
  );

  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Current/i)).toBeInTheDocument();
});
```

**Accessibility Tests (axe-core):**

```typescript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('has no accessibility violations', async () => {
  const { container } = render(
    <Banner
      title="Accessible Banner"
      description="This is accessible"
      ctaText="Action"
    />
  );

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

**Visual Regression Tests:**

- Capture `.banner` region for all variants
- Test hover/focus states on CTA button
- Test responsive breakpoints (mobile, tablet, desktop)
- Test with/without decorative elements
- Test dark and light variants

### Edge Cases & QA Checklist

- [ ] Very long title text wraps correctly
- [ ] Very long description maintains readability
- [ ] Empty links array doesn't render links section
- [ ] Missing ctaText doesn't render button
- [ ] breadcrumbs array with single item
- [ ] breadcrumbs array with 5+ items
- [ ] links array with 10+ items (should wrap properly)
- [ ] Dark variant with light CTA button (contrast check)
- [ ] Light variant with dark CTA button (contrast check)
- [ ] Breadcrumb focus states visible and accessible
- [ ] Desert rose SVG renders correctly on all backgrounds
- [ ] Mobile view hides desert rose decorative element
- [ ] Theme switching updates colors and radii correctly

### Performance Considerations

- Desert rose SVG embedded as data URL (no additional HTTP request)
- SVG uses CSS positioning (hardware accelerated)
- No JavaScript for visual effects
- Breadcrumbs component memoized
- Pills are static (no event handlers except hidden onRemove)
- Responsive hiding uses CSS media queries (no JS)

### Maintenance Notes (For Contributors & Coding Agents)

- **Content**: Follow `CONTENT_STANDARDS.md` - never use Lorem ipsum
- **Token changes**: Always rebuild tokens after modifying `tokens.json`
- **Theme additions**: Add theme files for new themes following naming convention
- **Breaking changes**: Update TypeScript types, Storybook stories, tests, and this documentation
- **Deprecations**: Mark in code comments and add console warnings
- **Migration**: `linkItems` and legacy `links: string[]` should be migrated to `links: Array<{label, href}>`. Update Storybook stories and tests accordingly.
- **Documentation consolidation**: All Banner-specific documentation is consolidated in `BANNER.md`; no duplicate Banner docs were found.

### Common Pitfalls to Avoid

1. **Don't hardcode colors** - Always use tokens
2. **Don't hardcode spacing** - Use spacing tokens
3. **Don't break responsive layout** - Test at all breakpoints
4. **Don't forget theme files** - Both NTG and Central need updates
5. **Don't skip accessibility** - Test keyboard navigation and screen readers
6. **Don't use generic content** - Follow content standards for examples

### Bootstrap Integration

The Banner component uses the Button and Breadcrumbs components, which leverage Bootstrap 5.3's CSS variables approach:

- Buttons: Uses `--bs-btn-*` variables for customization
- Breadcrumbs: Uses Bootstrap breadcrumb structure with token overrides
- Layout: Uses Bootstrap's flexbox utilities and container classes

### Related Documentation

- [Button Component](../Button/BUTTON.md)
- [Breadcrumbs](../../content/breadcrumbs/BREADCRUMBS.md)
- [Pill Component](../Pill/PILL.md)
- [Content Standards](../../../CONTENT_STANDARDS.md)
- [Design Tokens](../../../design-tokens/DESIGN-TOKENS.md)
- [Theme System](../../themes/THEMES.md)

## Themes

Currently, this component is available in the external NTG environment. While the component includes Central theme overrides (`Banner-central.css`), it follows the same theming approach as other components in the design system.

Both themes provide:

- Theme-specific focus outlines
- Theme-specific border radii
- Automatic font family switching (Lato for NTG, Roboto for Central)
- Consistent spacing and layout principles

## Content Guidelines

When using the Banner component, follow these content guidelines:

### Title

- Use clear, descriptive H1 text
- Keep it concise (5-10 words ideal)
- Avoid generic titles like "Home" or "Welcome"

### Description

- 1-2 sentences maximum
- Explain the page purpose or value proposition
- Be specific about what users can do

### CTA Button

- Use action-oriented text (verb + object)
- Examples: "Find services", "Apply now", "Get started"
- Avoid generic text like "Click here" or "Learn more"

### Links Heading

Choose based on context:

- **Popular**: Most visited services/pages
- **Featured**: Timely or highlighted content
- **Related**: Connected topics or services

### Links Content

- Use clear, specific labels
- 4-6 links maximum for optimal UX
- Order by priority or usage frequency
- Keep labels 2-5 words when possible

### Example: Good vs. Bad

**Good:**

```tsx
<Banner
  variant="primary"
  title="Health Services in the Northern Territory"
  description="Access public health services, find hospitals and clinics, and learn about programs supporting your wellbeing."
  ctaText="Find health services"
  linksHeading="Popular"
  links={[
    { label: "Hospital locations", href: "/hospitals" },
    { label: "Medicare services", href: "/medicare" },
    { label: "Mental health support", href: "/mental-health" },
    { label: "COVID-19 updates", href: "/covid" },
  ]}
/>
```

**Bad:**

```tsx
<Banner
  variant="primary"
  title="Welcome"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque."
  ctaText="Click here"
  linksHeading="Links"
  links={[
    { label: "Link 1", href: "#" },
    { label: "Link 2", href: "#" },
    { label: "Link 3", href: "#" },
  ]}
/>
```

---

For implementation examples, see the Storybook stories or the [Banner.stories.tsx](./Banner.stories.tsx) file.
