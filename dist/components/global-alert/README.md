# Global Alert — Squiz DXP Component Service

🧪 **PREVIEW** — Site-wide global alert banner packaged for Squiz DXP. **Version 0.1.0 (initial preview release).**

Renders as **server-side HTML only** via `main.js`. The DXP version is intentionally non-interactive (the dismiss button has no JS handler) — host pages may attach their own dismiss behaviour if required.

## Files

| File                | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)        |
| `main.js`           | Edge renderer — emits full alert HTML mirroring `GlobalAlert.tsx`     |
| `example.data.json` | Sample inputs for the local `preview.html` harness                    |
| `preview.html`      | Local preview (SSR test harness with theme CSS via GFB URL)           |
| `previews/`         | Wrapper template + 7 `*.data.json` files — one per dev-ui preview tab |
| `README.md`         | This file                                                             |

## Inputs

| Property       | Type          | Default                                                           | Notes                                                                      |
| -------------- | ------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `variant`      | enum          | `info`                                                            | One of `info`, `info-alt`, `warning`, `critical`                           |
| `title`        | string        | `Important update`                                                | Required. Short scannable heading.                                         |
| `description`  | FormattedText | `<p>Service updates and important information for all users.</p>` | Required. HTML body — supports inline links.                               |
| `dismissible`  | boolean       | `false`                                                           | Show the close (×) button (no built-in dismiss handler in the DXP version) |
| `dismissLabel` | string        | `Dismiss alert`                                                   | Accessible label for the dismiss button                                    |
| `ctaText`      | string        | `""`                                                              | Optional CTA button label. Leave blank to hide the button.                 |
| `ctaHref`      | string        | `""`                                                              | URL the CTA button links to                                                |

The full prop reference lives in
[`src/components/GlobalAlert/GlobalAlert.tsx`](../GlobalAlert.tsx) and
[`src/components/GlobalAlert/GLOBALALERT.md`](../GLOBALALERT.md).

## Local development

### Preview locally

```bash
npm run dev
# then visit http://localhost:5173/src/components/GlobalAlert/dxp/preview.html
```

### Test in Squiz DXP dev-ui

The `cmp-globalalert-dev`, `cmp-globalalert-dev:runner`, `cmp-globalalert-deploy`, and `cmp-globalalert-deploy:dry-run` npm scripts auto-run `npm run cmp-globalalert-prepare` before executing, which copies the source to `dist/components/global-alert/` and inlines the theme CSS.

```bash
# Squiz DXP dev-ui (NTG theme)
npm run cmp-globalalert-dev

# Squiz DXP dev runner with live reload
npm run cmp-globalalert-dev:runner
```

To preview **all** DXP components (Header, Footer, Global Alert) in a single dev-ui:

```bash
npm run cmp-dev
```

## Deployment

**Status:** 🧪 **Version 0.1.0 — preview release, not yet deployed.**

To deploy:

```bash
# 1. Update the version in manifest.json
# "version": "0.1.1"  (use semantic versioning)

# 2. Commit and push
git add -A && git commit -m "Deploy: Global Alert v0.1.1 — <description>"
git push origin <branch>

# 3. Prepare and deploy to DXP
npm run cmp-globalalert-prepare
npm run cmp-globalalert-deploy:dry-run  # Validate first
npm run cmp-globalalert-deploy          # Deploy to live tenant
```

**The `cmp-globalalert-deploy` command automatically runs `cmp-globalalert-prepare` before executing.**

## Runtime dependencies

**CSS:** Served site-wide via the `head.html` nester (`dist/theme-ntg.min.css` or `dist/theme-central.min.css`).

**JavaScript:** None — the component emits plain HTML. No inline script, no client-side runtime, no React hydration. If a host page needs interactive dismissal, add a small inline script that hides `.global-alert` on click of `.global-alert__dismiss`.

## Styling

The component uses only HTML semantics and the project's `global-alert__*` BEM classes.

- **Local preview** (`preview.html`): External `<link>` to the GFB-hosted `theme-ntg.min.css`.
- **DXP deployment** (`previews/wrapper.html`): Theme CSS inlined at build time by `scripts/prepare-globalalert-dxp.js`.
- **Production** (Squiz Matrix): CSS loaded site-wide from the `head.html` nester.

## Deployment placement

In Squiz DXP, drop the **NT Gov Global Alert** component into the **header** zone (above the site header) of the `full-width-section` Page Layout. CSS is inherited from the site theme. Limit to one global alert per page; up to three may be stacked if absolutely required.
