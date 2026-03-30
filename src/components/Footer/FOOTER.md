# Footer Component Documentation

## Overview

The Footer component is a comprehensive, theme-aware footer section for NT Government websites and applications. It provides a flexible, responsive layout for displaying:

- Organized link sections (e.g., "Information and services", "Find out more")
- Social media links
- Organization branding and logos
- Aboriginal acknowledgement statements
- Copyright and legal information
- Bottom navigation links with customizable separators

The component uses **Bootstrap 5.3 CSS Variables** and **design tokens** to ensure consistency across themes (NTG and Central) and seamless styling customization.

## File Structure

```
src/components/Footer/
├── Footer.tsx              # Main React component
├── Footer.css              # Common Bootstrap CSS variable customizations
├── Footer-ntg.css          # NTG theme-specific overrides
├── Footer-central.css      # Central theme-specific overrides
├── Footer.stories.tsx      # Storybook component showcase
├── FOOTER.md              # This documentation file
└── index.ts               # Component exports
```

## Design Tokens & CSS Variables

The Footer component uses the following design tokens and CSS variables:

### Color Tokens

| Token                  | Usage                     | NTG Value          | Central Value     |
| ---------------------- | ------------------------- | ------------------ | ----------------- |
| `--clr-bg-dark`        | Background                | `#1F1F5F`          | Theme-specific    |
| `--clr-text-inverse`   | Text on dark background   | `#FFFFFF`          | Theme-specific    |
| `--clr-text-muted`     | Muted text (dividers)     | `#666774`          | Theme-specific    |
| `--clr-border-inverse` | Border on dark background | `#FFFFFF`          | Theme-specific    |
| `--clr-focus-focus`    | Focus outline color       | `#EC8C58` (orange) | `#6AB06A` (green) |

### Typography Tokens

| Token                   | Size | Weight     | Line Height | Usage                 |
| ----------------------- | ---- | ---------- | ----------- | --------------------- |
| `--footer-heading-size` | 18px | 700 (bold) | 20px        | Section headings      |
| `--footer-body-size`    | 16px | 400        | 24px        | Links and body text   |
| `--footer-sm-size`      | 14px | 400        | 20px        | Small text, copyright |

### Spacing Tokens

| Token                     | Value | Usage                      |
| ------------------------- | ----- | -------------------------- |
| `--footer-padding-top`    | 48px  | Main section top padding   |
| `--footer-padding-x`      | 16px  | Horizontal padding         |
| `--footer-section-gap`    | 48px  | Gap between major sections |
| `--footer-subsection-gap` | 24px  | Gap between subsections    |
| `--footer-item-gap`       | 8px   | Gap between list items     |
| `--footer-link-gap`       | 32px  | Gap between link columns   |
| `--footer-marker-size`    | 6px   | Bullet point diameter      |

### Bootstrap CSS Variable Integration

The component uses **Bootstrap 5.3's component-level CSS variables** approach for maintainability:

```css
.footer {
  --footer-bg: var(--clr-bg-dark);
  --footer-text: var(--clr-text-inverse);
  --footer-border: var(--clr-border-inverse);
  /* ... more variables ... */
}
```

This approach aligns with [Bootstrap's CSS Variables documentation](https://getbootstrap.com/docs/5.3/customize/css-variables/).

## Component Props

### FooterLink Interface

```typescript
interface FooterLink {
  label: string; // Display text for the link
  href: string; // URL destination
}
```

### FooterSection Interface

```typescript
interface FooterSection {
  title: string; // Section heading
  links: FooterLink[]; // Array of links in this section
}
```

### SocialLink Interface

```typescript
interface SocialLink {
  platform: string; // Display name (e.g., "Facebook")
  href: string; // URL to social profile
  icon: string; // FontAwesome icon class (e.g., "fa-brands fa-facebook")
}
```

### FooterProps Interface

```typescript
interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  sections?: FooterSection[]; // Link section groups
  socialLinks?: SocialLink[]; // Social media links
  bottomLinks?: FooterLink[]; // Bottom navigation links
  logo?: React.ReactNode; // Logo/branding element
  acknowledgement?: string; // Aboriginal acknowledgement text
  copyrightText?: string; // Copyright notice
  linkDivider?: string | React.ReactNode; // Separator for bottom links
}
```

### Machine-readable contract (JSON Schema)

Coding agents can rely on this JSON Schema to validate and generate Footer props programmatically.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "FooterProps",
  "type": "object",
  "properties": {
    "sections": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": { "type": "string" },
          "links": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "label": { "type": "string" },
                "href": { "type": "string" }
              },
              "required": ["label", "href"]
            }
          },
          "columns": { "type": "integer", "enum": [1, 2], "default": 1 }
        },
        "required": ["title", "links"]
      }
    },
    "socialLinks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "platform": { "type": "string" },
          "href": { "type": "string" },
          "icon": { "type": "string" }
        },
        "required": ["platform", "href"]
      }
    },
    "bottomLinks": { "$ref": "#/properties/sections/items/properties/links" },
    "logo": { "oneOf": [{ "type": "string" }, { "type": "object" }] },
    "acknowledgement": { "type": "string" },
    "copyrightText": { "type": "string" },
    "linkDivider": { "oneOf": [{ "type": "string" }, { "type": "object" }] }
  },
  "additionalProperties": false
}
```

### Example props (JSON) — use in tests or for story generation

```json
{
  "sections": [
    {
      "title": "Information and services",
      "columns": 2,
      "links": [
        { "label": "Art, sport and leisure", "href": "/services/arts" },
        { "label": "Boating, fishing and marine", "href": "/services/boating" }
      ]
    }
  ],
  "socialLinks": [
    {
      "platform": "Facebook",
      "href": "https://facebook.com/ntgov",
      "icon": "fa-brands fa-facebook"
    }
  ],
  "bottomLinks": [
    { "label": "Privacy", "href": "/privacy" },
    { "label": "Accessibility", "href": "/accessibility" }
  ],
  "acknowledgement": "The Northern Territory Government acknowledges...",
  "copyrightText": "© 2025 Northern Territory Government"
}
```

## Coding‑agent guidance (for automated PRs, generators and assistants)

- Always prefer design tokens over raw values. Use `--clr-*`, `--ntg-*` or `--central-*` tokens.
- Use the `sections[].columns` property to request a two‑column layout on md–xxl (example: `columns: 2`).
- Provide meaningful, contextual link labels (see Content Standards). Do not use placeholders.
- For accessibility, ensure `aria-label` is present when links are generated from untrusted sources.
- When generating stories, include `acknowledgement` and `copyrightText` in NTG examples.
- Validate generated props against the JSON Schema above before creating stories or PRs.

### Quick rules for programmatic edits

- To change background/text colors use tokens: `--clr-bg-dark`, `--clr-text-inverse`.
- To change focus outline or focus background use `--clr-focus-focus` (Footer uses it as background on focus).
- To change link-divider color/border use `--clr-border-inverse`.
- For visited link color override use `#8A38F5` only if no token exists.

## Developer checklist (must pass before PR merge)

- [ ] Story(s) added/updated for visual verification (Default, Mobile, WithLogo)
- [ ] Unit tests added/updated for new behavior (columns, focus styles)
- [ ] Accessibility checks passed in Storybook (a11y panel)
- [ ] No Lorem Ipsum in examples (see CONTENT_STANDARDS.md)
- [ ] Design token usage validated (avoid raw hex where token exists)
- [ ] Documentation updated (this file)
- [ ] CI: `npm test` and `npm run build-storybook` succeed

## Automated tests & CI commands

- Unit tests: `npm test` (Vitest)
- Build library: `npm run build`
- Build Storybook static site: `npm run build-storybook`
- Token generation (when editing tokens): `npm run build`

### Example unit test (columns prop)

```ts
import { render } from "@testing-library/react";
import { Footer } from "./Footer";

test("renders two-column section when columns=2", () => {
  const { container } = render(
    <Footer
      sections={[{ title: "Info", links: [{ label: "A", href: "#" }], columns: 2 }]}
    />
  );
  expect(container.querySelector('.footer__section--cols-2')).toBeTruthy();
});
```

## Story generation instructions for agents

- Story file: `src/components/Footer/Footer.stories.tsx`
- Story name conventions: `WithLogo`, `Default`, `MobileResponsive`, `MultipleSections`
- Use `columns: 2` for the `Information and services` example when showing dense content
- Follow content guidelines from `CONTENT_STANDARDS.md`

## Search keywords (for code + AI agents)

footer, ntg-footer, footer-links, footer-columns, footer-tokens, --clr-bg-dark, --clr-text-inverse, --clr-focus-focus, --clr-border-inverse, FooterProps, FooterSection, columns

## Edge cases & behaviour notes for implementers

- If `sections` is empty the Footer still renders `bottomLinks` and `acknowledgement` if present.
- `columns: 2` gracefully falls back to single column on small screens.
- Long link lists will paginate visually into columns but do not add pagination behavior.

## API quick reference

| Prop              | Type            | Default     | Notes                                            |
| ----------------- | --------------- | ----------- | ------------------------------------------------ |
| `sections`        | FooterSection[] | `[]`        | Use `columns: 2` for two-column layout on md–xxl |
| `socialLinks`     | SocialLink[]    | `[]`        | Provide `icon` as FontAwesome class for visuals  |
| `bottomLinks`     | FooterLink[]    | `[]`        | Shown under branding area                        |
| `logo`            | ReactNode       | `undefined` | Use for department/agency logos                  |
| `acknowledgement` | string          | `undefined` | Aboriginal acknowledgement text                  |
| `copyrightText`   | string          | `undefined` | Copyright/legal notice                           |

## Implementation notes for maintainers

- Footer relies on CSS variables defined in theme CSS files (from `@ntgovernment/web-design-tokens/css/theme-ntg` / `theme-central`)
- Storybook loads theme CSS first; component CSS is imported via `src/style.css` and Storybook preview loader
- Prefer adding token mappings in the `web-design-tokens` repository rather than hard-coding values

---

## Usage Examples

### Basic Footer

```tsx
import { Footer } from "@ntgovernment/web-design-system";

export function BasicFooter() {
  return (
    <Footer
      bottomLinks={[
        { label: "Privacy", href: "/privacy" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Contact", href: "/contact" },
      ]}
      copyrightText="© 2025 Northern Territory Government"
    />
  );
}
```

### Complete Footer with All Sections

```tsx
import { Footer } from "@ntgovernment/web-design-system";

export function CompleteFooter() {
  const sections = [
    {
      title: "Information and services",
      links: [
        { label: "Art, sport and leisure", href: "#" },
        { label: "Business and industry", href: "#" },
        { label: "Education and learning", href: "#" },
      ],
    },
    {
      title: "Find out more",
      links: [
        { label: "About government", href: "#" },
        { label: "Public consultations", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      href: "https://facebook.com/ntgovernment",
      icon: "fa-brands fa-facebook",
    },
    {
      platform: "LinkedIn",
      href: "https://linkedin.com/company/nt-government",
      icon: "fa-brands fa-linkedin",
    },
  ];

  const bottomLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Footer
      sections={sections}
      socialLinks={socialLinks}
      bottomLinks={bottomLinks}
      acknowledgement="The Northern Territory Government acknowledges Traditional Owners..."
      copyrightText="© 2025 Northern Territory Government"
    />
  );
}
```

### Footer with Logo

```tsx
import { Footer } from "@ntgovernment/web-design-system";

export function FooterWithLogo() {
  return (
    <Footer
      logo={<img src="/logo.svg" alt="NT Government" />}
      sections={/* ... */}
      socialLinks={/* ... */}
      bottomLinks={/* ... */}
      copyrightText="© 2025 Northern Territory Government"
    />
  );
}
```

### Custom Divider

```tsx
<Footer
  bottomLinks={/* ... */}
  linkDivider="•" // Use bullet point instead of pipe
  copyrightText="© 2025 Northern Territory Government"
/>
```

## Theme Integration

### NTG Theme (`--ntg-*` prefix)

The NTG theme uses:

- **Background**: Dark blue (`#1F1F5F`)
- **Text**: White (`#FFFFFF`)
- **Focus Outline**: Orange (`#EC8C58`) - 4px solid shadow
- **Typography**: Lato font family

**Import in your application:**

```html
<link
  rel="stylesheet"
  href="@ntgovernment/web-design-system/theme-ntg.min.css"
/>
```

**Usage in CSS:**

```css
:root {
  --clr-bg-dark: var(--ntg-clr-bg-dark);
  --clr-text-inverse: var(--ntg-clr-text-inverse);
  --clr-focus-focus: #ec8c58;
}
```

### Central Theme (`--central-*` prefix)

The Central theme uses:

- **Background**: Dark blue (theme-specific value)
- **Text**: White (`#FFFFFF`)
- **Focus Outline**: Green (`#6AB06A`) - 4px solid shadow
- **Typography**: Roboto font family (or default system font)

**Import in your application:**

```html
<link
  rel="stylesheet"
  href="@ntgovernment/web-design-system/theme-central.min.css"
/>
```

**Usage in CSS:**

```css
:root {
  --clr-bg-dark: var(--central-clr-bg-dark);
  --clr-text-inverse: var(--central-clr-text-inverse);
  --clr-focus-focus: #6ab06a;
}
```

## Accessibility Features

The Footer component includes several accessibility features:

1. **Semantic HTML**: Uses `<footer>`, `<nav>`, and `<ul>` elements appropriately
2. **ARIA Labels**: Provides `aria-label` attributes for navigation regions:
   - `aria-label` on link lists identifies section purposes
   - `aria-label` on social links identifies each platform
   - `aria-label` on bottom navigation
3. **Focus Management**:
   - Theme-specific focus outlines (orange for NTG, green for Central)
   - 4px spread shadow for clear focus visibility
   - Visible focus states on all interactive elements
4. **Color Contrast**: All text meets WCAG AA standards on dark background
5. **Link Semantics**: Uses proper `<a>` tags with descriptive `href` attributes

### Testing with Accessibility Audits

To verify accessibility compliance, use:

- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- Storybook's built-in a11y addon: http://localhost:6006/?path=/story/components-footer--default&addonPanel=storybook/a11y/panel

## Responsive Design

The Footer component is fully responsive with breakpoints aligned to the design system:

### Breakpoints

| Breakpoint             | Screen Width | Changes                                      |
| ---------------------- | ------------ | -------------------------------------------- |
| **Desktop (xl)**       | ≥1200px      | Full layout with all sections in 1 row       |
| **Large Desktop (lg)** | ≥992px       | Full layout with slight adjustments          |
| **Tablet (md)**        | ≥768px       | Sections may wrap, adjusted spacing          |
| **Small Mobile (sm)**  | <768px       | Sections stack vertically, reduced gaps      |
| **Mobile (xs)**        | <576px       | Optimized for small screens, hidden dividers |

### Mobile Optimizations

At mobile breakpoints (< 576px):

- Bottom link dividers (`|`) are hidden
- Bottom links stack vertically
- Section gaps reduced from 48px to 24px
- Padding and font sizes optimized for touch targets
- Content remains fully accessible

### Example Responsive Behavior

```jsx
// Desktop: Links display in 2-3 columns
// Tablet: Links wrap to 2 rows
// Mobile: Links stack single-column
<Footer
  sections={[
    {
      title: "Services",
      links: [
        { label: "Item 1", href: "#" },
        { label: "Item 2", href: "#" },
        { label: "Item 3", href: "#" },
        // More links...
      ],
    },
  ]}
/>
```

## Customization Guide

### Override Bootstrap CSS Variables

To customize the Footer for your specific needs, override CSS variables:

```css
/* Override global Footer variables */
:root {
  --footer-padding-top: 60px; /* Increase top padding */
  --footer-section-gap: 64px; /* Increase section gap */
  --footer-heading-size: 20px; /* Larger headings */
}

/* Or apply to specific component instance */
.footer {
  --footer-bg: var(--custom-dark-color);
  --footer-text: var(--custom-light-color);
}
```

### Theme-Specific Customization

Each theme file (Footer-ntg.css, Footer-central.css) can be extended:

```css
/* In your application's custom theme file */
:root {
  /* Override NTG theme for Footer specifically */
  --footer-heading-size: 20px;
  --footer-link-gap: 48px;

  /* Apply custom focus behavior */
  --clr-focus-focus: var(--custom-brand-color);
}
```

### Modify Component Structure

For more extensive customization, you can extend the component:

```tsx
import { Footer, FooterProps } from "@ntgovernment/web-design-system";

export function CustomFooter(props: FooterProps) {
  return (
    <Footer
      {...props}
      className={`footer ${props.className || ""} my-custom-footer`}
    />
  );
}
```

## Design Rationale

### Why Bootstrap CSS Variables?

1. **No Build Step Required**: Changes apply immediately in the browser
2. **Theme Switching**: Easily switch between NTG and Central themes at runtime
3. **Consistency**: Aligns with Bootstrap 5.3's official approach
4. **Maintainability**: Centralized variable management
5. **Developer Experience**: Familiar Bootstrap patterns

### CSS Variable Structure

```
Footer Component Variables
├── Color Variables (--clr-*)
│   ├── Background (--clr-bg-dark)
│   ├── Text (--clr-text-inverse)
│   ├── Text Muted (--clr-text-muted)
│   ├── Border (--clr-border-inverse)
│   └── Focus (--clr-focus-focus)
├── Typography Variables (--footer-*)
│   ├── Font family (--footer-font-family)
│   ├── Heading sizes (--footer-heading-size)
│   ├── Body sizes (--footer-body-size)
│   └── Small text sizes (--footer-sm-size)
└── Spacing Variables (--footer-*)
    ├── Padding (--footer-padding-top, --footer-padding-x)
    ├── Gaps (--footer-section-gap, --footer-item-gap)
    └── Marker size (--footer-marker-size)
```

### Theme Token Mapping

**NTG Theme:**

```
Bootstrap var() → Design Token
--clr-bg-dark var(--ntg-clr-bg-dark) → #1F1F5F
--clr-text-inverse var(--ntg-clr-text-inverse) → #FFFFFF
--clr-focus-focus #EC8C58 → Orange
```

**Central Theme:**

```
Bootstrap var() → Design Token
--clr-bg-dark var(--central-clr-bg-dark) → Theme-specific
--clr-text-inverse var(--central-clr-text-inverse) → #FFFFFF
--clr-focus-focus #6AB06A → Green
```

## Best Practices

### 1. Use Real Content

Follow the [CONTENT_STANDARDS.md](../../CONTENT_STANDARDS.md):

- Never use Lorem Ipsum in any section
- Use realistic NT Government service categories
- Provide meaningful link labels that describe their destination

**Good:**

```tsx
sections={[
  {
    title: "Information and services",
    links: [
      { label: "Art, sport and leisure", href: "/services/arts" },
      { label: "Business and industry", href: "/services/business" },
    ],
  },
]}
```

**Avoid:**

```tsx
// ❌ Generic placeholder content
sections={[
  {
    title: "Links",
    links: [
      { label: "Link 1", href: "#" },
      { label: "Link 2", href: "#" },
    ],
  },
]}
```

### 2. Semantic HTML Structure

The component automatically uses semantic HTML:

- `<footer>` as the main container
- `<nav>` for navigation regions
- `<ul>` and `<li>` for link lists
- Proper heading hierarchy with `<h5>`

### 3. Accessibility Best Practices

- Ensure all links have descriptive, unique labels
- Include Aboriginal acknowledgement for government content
- Test focus states with keyboard navigation
- Use real icons (FontAwesome) for social media

### 4. Theme Consistency

- Always import the appropriate theme CSS (theme-ntg.min.css or theme-central.min.css)
- Don't override theme colors unless creating a custom theme
- Test both themes during development

### 5. Link Management

Keep links organized and limited:

- Max 3-4 link sections recommended
- Keep section titles short (3-5 words)
- 6-12 links per section for best UX
- Use hierarchical organization (e.g., "Information" → specific categories)

### 6. Mobile Optimization

- Test footer on mobile devices (< 576px width)
- Ensure touch targets are minimum 44px
- Verify bottom links are accessible on small screens
- Check readability with mobile font sizes

## Common Patterns

### Government Website Footer

Standard NT Government footer with service categories:

```tsx
const sections: FooterSection[] = [
  {
    title: "Information and services",
    links: [
      { label: "Art, sport and leisure", href: "/" },
      { label: "Business and industry", href: "/" },
      // ... more categories
    ],
  },
  {
    title: "Find out more",
    links: [
      { label: "About government", href: "/about" },
      { label: "Media releases", href: "/media" },
      // ... more links
    ],
  },
];
```

### Single Organization Footer

Minimal footer for department-specific sites:

```tsx
const bottomLinks: FooterLink[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Contact us", href: "/contact" },
];
```

### Application Footer

Tech-focused footer for internal applications:

```tsx
const sections: FooterSection[] = [
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Support", href: "/support" },
    ],
  },
];
```

## Testing

### Unit Tests

Test component rendering and props:

```typescript
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders footer sections", () => {
    render(
      <Footer
        sections={[
          { title: "Services", links: [{ label: "Link 1", href: "#" }] },
        ]}
      />
    );
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Link 1")).toBeInTheDocument();
  });

  it("renders copyright text", () => {
    render(<Footer copyrightText="© 2025 NT Government" />);
    expect(screen.getByText("© 2025 NT Government")).toBeInTheDocument();
  });
});
```

### Accessibility Testing

Use Storybook's a11y addon:

```bash
npm run storybook
# Navigate to Footer story
# Open Accessibility panel
# Run axe checks
```

### Visual Testing

Test responsive behavior:

```bash
# Mobile view (< 576px)
# Tablet view (576px - 991px)
# Desktop view (> 992px)
```

## Troubleshooting

### Focus States Not Appearing

**Issue**: Focus outline not visible on links
**Solution**: Ensure theme CSS is imported:

```html
<link
  rel="stylesheet"
  href="@ntgovernment/web-design-system/theme-ntg.min.css"
/>
```

### Links Not Styled Correctly

**Issue**: Links appear unstyled
**Solution**: Check CSS variables are applied:

```css
/* Verify in DevTools */
getComputedStyle(link).color === "rgb(255, 255, 255)" /* White */
```

### Responsive Layout Breaking

**Issue**: Footer doesn't wrap on mobile
**Solution**: Check viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Theme Not Switching

**Issue**: Central theme not applying
**Solution**:

1. Ensure correct CSS file is imported
2. Clear browser cache
3. Check CSS variable names match theme file

## Browser Support

The Footer component supports all modern browsers:

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

**CSS Variable Support**: Supported in all modern browsers (IE 11 not supported)

## Related Components

- [Button](../Button) - Used in footer actions
- [Icon](../Icon) - Used for social media icons
- [Header](../Header) - Complements the Footer

## Design System References

- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md)
- [Themes Documentation](../themes/THEMES.md)
- [Content Standards](../../CONTENT_STANDARDS.md)
- [Bootstrap CSS Variables](https://getbootstrap.com/docs/5.3/customize/css-variables/)

## Contributing

When contributing changes to the Footer component:

1. Update component in Footer.tsx
2. Update common styles in Footer.css
3. Update theme-specific overrides (Footer-ntg.css, Footer-central.css)
4. Add/update Storybook stories demonstrating changes
5. Update this documentation
6. Test across all themes and breakpoints
7. Ensure accessibility compliance

## Version History

| Version | Date       | Changes                          |
| ------- | ---------- | -------------------------------- |
| 1.0.0   | 2026-02-15 | Initial Footer component release |

## Support

For questions or issues with the Footer component:

1. Check this documentation
2. Review Storybook examples
3. Search existing GitHub issues
4. Create a new issue with detailed description
5. Contact the design system team

---

**Last Updated**: February 15, 2026
**Component Version**: 1.0.0
**Design System Version**: 0.1.0
