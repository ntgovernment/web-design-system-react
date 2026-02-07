# Typography Component

The Typography component is a Storybook-only documentation component that showcases the NT Government Web Design System's typography styles, scales, and theme-specific font usage.

## Overview

**Note**: Typography is **not** a React component that can be imported. It exists solely as Storybook stories to document the typography system. All typography styles come from Bootstrap 5.3.3 with theme-specific customizations applied via CSS variables.

## Typography System

The design system uses Bootstrap's comprehensive typography system with two theme-specific font families:

### Font Families

| Theme                     | Font Family | Usage                                    |
| ------------------------- | ----------- | ---------------------------------------- |
| **NTG (NT.GOV.AU)**       | Lato        | Sans-serif font for NT.GOV.AU websites   |
| **Central (NTG Central)** | Roboto      | Sans-serif font for NTG Central/intranet |

### Font Loading

Fonts are loaded via Google Fonts CDN in the theme-specific typography files:

- `src/themes/typography-ntg.css` - Loads Lato for NTG theme
- `src/themes/typography-central.css` - Loads Roboto for Central theme

## Typography Scale

The design system follows Bootstrap's typography hierarchy:

### Headings

```html
<h1>Heading 1</h1>
<!-- 2.5rem / 40px -->
<h2>Heading 2</h2>
<!-- 2rem / 32px -->
<h3>Heading 3</h3>
<!-- 1.75rem / 28px -->
<h4>Heading 4</h4>
<!-- 1.5rem / 24px -->
<h5>Heading 5</h5>
<!-- 1.25rem / 20px -->
<h6>Heading 6</h6>
<!-- 1rem / 16px -->
```

### Display Headings

For larger, more prominent headings:

```html
<h1 class="display-1">Display 1</h1>
<!-- 5rem / 80px -->
<h1 class="display-2">Display 2</h1>
<!-- 4.5rem / 72px -->
<h1 class="display-3">Display 3</h1>
<!-- 4rem / 64px -->
<h1 class="display-4">Display 4</h1>
<!-- 3.5rem / 56px -->
<h1 class="display-5">Display 5</h1>
<!-- 3rem / 48px -->
<h1 class="display-6">Display 6</h1>
<!-- 2.5rem / 40px -->
```

### Body Text

```html
<p>Default paragraph text</p>
<!-- 1rem / 16px -->
<p class="lead">Lead paragraph</p>
<!-- 1.25rem / 20px, lighter weight -->
<small>Small text</small>
<!-- 0.875rem / 14px -->
```

## Theme-Specific Typography

### NTG Theme (Lato)

- **Font**: Lato (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
- **Character**: Clean, professional, official government aesthetic
- **Used for**: NT.GOV.AU websites and official government communications

### Central Theme (Roboto)

- **Font**: Roboto (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- **Character**: Modern, geometric, readable
- **Used for**: NTG Central intranet and internal applications

## Using Typography in Your App

### Basic HTML Elements

Typography styles are automatically applied to standard HTML elements when Bootstrap is loaded:

```tsx
function MyPage() {
  return (
    <div>
      <h1>Page Title</h1>
      <p class="lead">This is a lead paragraph with larger, lighter text.</p>
      <p>Regular paragraph text with automatic styling from Bootstrap.</p>
      <h2>Section Heading</h2>
      <p>
        More content with <strong>bold text</strong> and <em>italic text</em>.
      </p>
    </div>
  );
}
```

### Bootstrap Utility Classes

Use Bootstrap's text utilities for additional styling:

```html
<!-- Text alignment -->
<p class="text-start">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">Right aligned text</p>

<!-- Text colors -->
<p class="text-primary">Primary color text</p>
<p class="text-success">Success color text</p>
<p class="text-danger">Danger color text</p>
<p class="text-muted">Muted color text</p>

<!-- Font weight and style -->
<p class="fw-bold">Bold text</p>
<p class="fw-light">Light text</p>
<p class="fst-italic">Italic text</p>
<p class="text-decoration-underline">Underlined text</p>

<!-- Font size -->
<p class="fs-1">Font size 1 (largest)</p>
<p class="fs-6">Font size 6 (smallest)</p>
```

## Lists

### Unordered Lists

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Ordered Lists

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

### Unstyled Lists

```html
<ul class="list-unstyled">
  <li>Item without bullets</li>
  <li>Another item</li>
</ul>
```

### Inline Lists

```html
<ul class="list-inline">
  <li class="list-inline-item">Item 1</li>
  <li class="list-inline-item">Item 2</li>
  <li class="list-inline-item">Item 3</li>
</ul>
```

## Links

### Default Links

Links automatically use theme colors:

```html
<a href="#">This is a link</a>
```

### Link Colors

```html
<a href="#" class="link-primary">Primary link</a>
<a href="#" class="link-secondary">Secondary link</a>
<a href="#" class="link-success">Success link</a>
<a href="#" class="link-danger">Danger link</a>
```

### Link Utilities

```html
<!-- Remove underline -->
<a href="#" class="text-decoration-none">Link without underline</a>

<!-- Underline on hover only -->
<a href="#" class="text-decoration-none text-decoration-underline-hover">
  Underline on hover
</a>
```

## Blockquotes

```html
<blockquote class="blockquote">
  <p>A well-known quote, contained in a blockquote element.</p>
  <footer class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>
```

## Code and Preformatted Text

### Inline Code

```html
<p>Use the <code>&lt;Button&gt;</code> component for actions.</p>
```

### Code Blocks

```html
<pre><code>function greet(name) {
  return `Hello, ${name}!`;
}</code></pre>
```

### Keyboard Input

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
```

### Sample Output

```html
<p>The command output: <samp>File saved successfully.</samp></p>
```

### Variables

```html
<p>Set the <var>x</var> variable to 42.</p>
```

## Responsive Typography

Bootstrap's typography scales automatically on different screen sizes. You can also use responsive font size utilities:

```html
<!-- Responsive font sizes -->
<p class="fs-1 fs-md-2 fs-lg-3">Responsive font size</p>

<!-- Responsive text alignment -->
<p class="text-start text-md-center text-lg-end">Responsive alignment</p>
```

## Best Practices

### Heading Hierarchy

- Use only one `<h1>` per page (typically the page title)
- Don't skip heading levels (e.g., don't jump from `<h2>` to `<h4>`)
- Use headings for structure, not styling (use classes for visual appearance)

```html
<!-- ✅ Correct hierarchy -->
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
<h2>Another Section</h2>

<!-- ❌ Incorrect - skipped h2 -->
<h1>Page Title</h1>
<h3>Subsection</h3>
```

### Semantic HTML

Use semantic elements appropriately:

- `<p>` for paragraphs
- `<strong>` for importance (renders bold)
- `<em>` for emphasis (renders italic)
- `<blockquote>` for quotes
- `<code>` for code snippets

### Accessibility

- Ensure sufficient color contrast (WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text)
- Don't rely solely on color to convey meaning
- Use relative units (rem, em) instead of fixed pixel sizes for better scalability
- Provide alternative text for visual-only content

### Line Length

For optimal readability, limit line length to 50-75 characters. Use container widths or CSS to control:

```html
<div class="col-lg-8">
  <p>Long form content with optimal line length for reading...</p>
</div>
```

## CSS Variables

The typography system uses CSS variables from the design token system. Key variables include:

### Font Families

```css
--ntg-font-family-primary: "Lato", sans-serif;
--central-font-family-primary: "Roboto", sans-serif;
```

### Font Weights

```css
--ntg-font-weight-light: 300;
--ntg-font-weight-regular: 400;
--ntg-font-weight-bold: 700;
--ntg-font-weight-black: 900;
```

### Font Sizes

```css
--bs-body-font-size: 1rem;
--bs-h1-font-size: 2.5rem;
--bs-h2-font-size: 2rem;
/* etc. */
```

For complete details, see [src/themes/typography-integration.md](../../themes/typography-integration.md).

## Examples in Storybook

The Typography component in Storybook demonstrates:

1. **Headings** - All heading levels (h1-h6) with both themes
2. **Display Headings** - Large display headings for hero sections
3. **Body Text** - Paragraphs, lead text, and small text
4. **Lists** - Unordered, ordered, unstyled, and inline lists
5. **Links** - Default and colored link styles
6. **Blockquotes** - Quote styling with attribution
7. **Code** - Inline code, code blocks, keyboard input
8. **Text Utilities** - Alignment, colors, weights, etc.
9. **Responsive Typography** - How typography adapts to screen sizes

View these examples:

```bash
npm run storybook
```

Navigate to **Design System > Typography** to see all typography styles in action.

## Integration with Components

Typography styles are automatically applied to component content:

```tsx
import { Card, Notification } from '@ntgovernment/web-design-system';

<Card title="Card Title">
  <h3>Heading in Card</h3>
  <p>Paragraph text with standard typography.</p>
  <ul>
    <li>List item</li>
  </ul>
</Card>

<Notification
  variant="info"
  title="Note"
  message="This is important information with standard typography."
/>
```

## Related Documentation

- [Bootstrap Typography Documentation](https://getbootstrap.com/docs/5.3/content/typography/) - Full Bootstrap typography reference
- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md) - Design token system documentation
- [Theme System](../../themes/THEMES.md) - Theme structure and usage
- [Bootstrap Integration](../../typography/TYPOGRAPHY.md) - Detailed Bootstrap typography integration

## Browser Support

Typography styles work in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Typography is **documentation only** - not a React component
- All styles come from Bootstrap 5.3.3 + theme CSS
- Font families change based on active theme
- Design tokens generate theme-specific typography CSS
- Google Fonts CDN is used for Lato and Roboto fonts
- Typography scales responsively across viewport sizes
- Use Bootstrap utility classes for additional styling customization
