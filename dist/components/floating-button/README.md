# Floating Button — Squiz DXP Component Service

🧪 **PREVIEW** — Persistent bottom-of-screen CTA component packaged for Squiz DXP. **Version 0.1.0 (initial preview release).**

Renders as **server-side HTML** via `main.js` plus a small self-contained inline `<script>` that manages optional hide-on-scroll behavior based on the configured target element.

## Files

| File                | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)        |
| `main.js`           | Edge renderer — emits the floating button HTML                         |
| `example.data.json` | Sample inputs for the local `preview.html` harness                    |
| `preview.html`      | Local preview (SSR test harness with theme CSS via GFB URL)           |
| `previews/`         | Wrapper template + named `*.data.json` files for DXP dev-ui previews  |
| `README.md`         | This file                                                             |

## Inputs

| Property         | Type      | Default                    | Notes                                                                 |
| ---------------- | --------- | -------------------------- | --------------------------------------------------------------------- |
| `label`          | string    | `Continue`                 | Required. Button text label.                                           |
| `href`           | string    | `https://www.nt.gov.au/`   | Optional. Link destination for the button.                            |
| `external`       | boolean   | `false`                    | Whether the link opens in a new tab with `noopener noreferrer`.       |
| `variant`        | string    | `primary`                  | `primary` or `secondary` button style.                                |
| `iconLeft`       | string    | ` `                        | FontAwesome icon class before the label.                              |
| `iconRight`      | string    | `fa-light fa-arrow-right`  | FontAwesome icon class after the label.                               |
| `autoHide`       | boolean   | `true`                     | When true, hides the button when the target element becomes visible.  |
| `targetButtonId` | string    | `#demo-target`             | ID or selector of the content element used to hide the button.        |
| `ariaLabel`      | string    | `Continue`                 | Accessible label for the floating action button.                      |

The full prop reference lives in [`src/components/FloatingButton/FloatingButton.tsx`](../FloatingButton.tsx) and [`src/components/FloatingButton/FLOATINGBUTTON.md`](../FLOATINGBUTTON.md).

## Local development

### Preview locally

```bash
npm run dev
# then visit http://localhost:5173/src/components/FloatingButton/dxp/preview.html
```

### Test in Squiz DXP dev-ui

This component is discovered by the shared DXP prepare script (`cmp-prepare`) and staged into `dist/components/floating-button/`.

```bash
npm run cmp-prepare
npm run cmp-dev
```

To preview all DXP components in a single dev-ui:

```bash
npm run cmp-dev
```

## Deployment

**Status:** 🧪 **Version 0.1.0 — preview release, not yet deployed.**

To deploy a new version:

1. Bump `version` in `src/components/FloatingButton/dxp/manifest.json`
2. Commit and push your changes
3. Run `npm run cmp-prepare` to stage the component
4. Deploy with the Squiz DXP CLI from `dist/components/floating-button/`

## Runtime dependencies

**CSS:** Served site-wide via the `head.html` nester (`dist/theme-ntg.min.css` or `dist/theme-central.min.css`).

**JavaScript:** Self-contained inline IIFE embedded in the rendered output. It reads `data-fab-target` from the rendered element and toggles the `.floating-button--hidden` class when the target becomes visible.

## Recommended placement

In Squiz DXP, place the Floating Button component near the bottom of the page experience in a full-width section so it remains visible above content. Use it on pages with one clear call to action and a corresponding target button inside the page content.
