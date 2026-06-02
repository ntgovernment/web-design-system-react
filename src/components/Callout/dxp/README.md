# Callout — Squiz DXP Component Service

✅ **READY FOR DEPLOYMENT** — Informational callout component packaged for Squiz DXP. Renders as **server-side HTML only** via `main.js`.

## Files

| File                | Purpose                                                                |
| ------------------- | -------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)        |
| `main.js`           | Edge renderer — emits full `<div class="callout">` HTML              |
| `example.data.json` | Sample inputs for different variants (used by preview and testing)   |
| `preview.html`      | Local preview (SSR test harness with self-contained styles)          |
| `previews/`         | Data files (`*.data.json`) and wrapper template for each variant      |
| `README.md`         | This file                                                            |

## Inputs

| Property  | Type    | Required | Default                            | Notes                           |
| --------- | ------- | -------- | ---------------------------------- | ------------------------------- |
| `heading` | string  | No       | -                                  | Optional heading text           |
| `content` | string  | Yes      | `Important information goes here.` | Main content text of the callout |

The full prop reference lives in
[`src/components/Callout/Callout.tsx`](../Callout.tsx).

## Features

- **Server-side rendering**: No client-side hydration or JavaScript required
- **Design token integration**: Uses design tokens for colors, spacing, and typography
- **Responsive layout**: Adapts to container width with proper text wrapping
- **Accessibility**: Semantic HTML with proper text content
- **Theme support**: Works seamlessly with NT.GOV.AU and Central themes

## Local Development

### Preview Locally

```bash
# Start the Vite dev server
npm run dev

# Then visit:
# http://localhost:5173/src/components/Callout/dxp/preview.html
```

### Test Rendering

```bash
# The preview.html loads example.data.json and calls main.js
# to render multiple variants in the browser
```

## Deployment

The Callout DXP component is ready to be deployed to Squiz DXP using standard deployment scripts.

```bash
npm run cmp-callout-prepare  # Prepare the component for deployment
npm run cmp-callout-dev      # Test in Squiz DXP dev-ui
npm run cmp-callout-deploy   # Deploy to production
```

## Architecture

### Mirrors React Component

The `main.js` renderer emits the same HTML structure as the React component:

```html
<div class="callout">
  <div class="callout__content">
    <div class="callout__text-container">
      <!-- Optional heading -->
      <div class="callout__heading">{{ heading }}</div>
      <!-- Required content -->
      <div class="callout__text">{{ content }}</div>
    </div>
  </div>
</div>
```

### No Client-Side Interactivity

Unlike the Header component, Callout requires no inline JavaScript or event handlers. All styling is provided by the theme CSS loaded site-wide.

### HTML Escaping

The renderer uses a standard `esc()` function to safely escape all dynamic content (heading and content) to prevent XSS vulnerabilities.

## Examples

### With Heading

```json
{
  "heading": "Quick Tip",
  "content": "Remember to save your work regularly to avoid losing progress."
}
```

### Without Heading

```json
{
  "content": "This callout has no heading, just content. Useful for simple informational messages."
}
```

### Long Content

```json
{
  "heading": "Privacy Notice",
  "content": "This callout demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure..."
}
```

## Styling

The component relies on the following CSS classes and design tokens:

- `.callout` — Main container with left border
- `.callout__content` — Content wrapper
- `.callout__text-container` — Flex container for heading and text
- `.callout__heading` — Heading element (uses H3 typography)
- `.callout__text` — Content text element

All styling is applied via `src/components/Callout/Callout.css` and loaded through the theme bundle.

## Related

- **React Component**: [`src/components/Callout/Callout.tsx`](../Callout.tsx)
- **Stories**: [`src/components/Callout/Callout.stories.tsx`](../Callout.stories.tsx)
- **Documentation**: [`src/components/Callout/CALLOUT.md`](../CALLOUT.md)
