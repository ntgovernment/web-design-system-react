# Quick Exit — Squiz DXP Component Service

🧪 **PREVIEW** — Safety banner packaged for Squiz DXP. **Version 0.1.0 (initial preview release).**

Renders as **server-side HTML** via `main.js` plus a small self-contained inline `<script>` that wires the click → new-tab + redirect behavior. The interactive script is intentionally embedded (rather than relying on the GFB theme bundle) so this safety-critical feature continues to work even if the host page's external scripts fail to load.

## Files

| File                | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)        |
| `main.js`           | Edge renderer — emits the banner HTML mirroring `QuickExit.tsx`       |
| `example.data.json` | Sample inputs for the local `preview.html` harness                    |
| `preview.html`      | Local preview (SSR test harness with theme CSS via GFB URL)           |
| `previews/`         | Wrapper template + 5 `*.data.json` files — one per dev-ui preview tab |
| `README.md`         | This file                                                             |

## Inputs

| Property      | Type   | Default                                                                                    | Notes                                           |
| ------------- | ------ | ------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| `heading`     | string | `Quick exit`                                                                               | Required. Banner heading.                       |
| `content`     | string | `Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger.` | Required. Body copy below the heading.          |
| `exitUrl`     | string | `https://www.bom.gov.au/`                                                                  | Required. Decoy URL opened in a new tab.        |
| `redirectUrl` | string | `https://www.google.com/`                                                                  | Required. URL the current tab is replaced with. |
| `ariaLabel`   | string | `Quick exit - click to leave this page immediately`                                        | Accessible label for screen readers.            |

The full prop reference lives in
[`src/components/QuickExit/QuickExit.tsx`](../QuickExit.tsx) and
[`src/components/QuickExit/QUICKEXIT.md`](../QUICKEXIT.md).

## Local development

### Preview locally

```bash
npm run dev
# then visit http://localhost:5173/src/components/QuickExit/dxp/preview.html
```

> ⚠️ Clicking a banner in the local preview will actually open the configured exit URL and replace the current tab — that's the whole point of the component.

### Test in Squiz DXP dev-ui

The `cmp-quickexit-dev`, `cmp-quickexit-dev:runner`, `cmp-quickexit-deploy`, and `cmp-quickexit-deploy:dry-run` npm scripts auto-run `npm run cmp-quickexit-prepare` first, which copies the source to `dist/components/quick-exit/` and inlines the theme CSS.

```bash
# Squiz DXP dev-ui (NTG theme)
npm run cmp-quickexit-dev

# Squiz DXP dev runner with live reload
npm run cmp-quickexit-dev:runner
```

To preview **all** DXP components in a single dev-ui:

```bash
npm run cmp-dev
```

## Deployment

**Status:** 🧪 **Version 0.1.0 — preview release, not yet deployed.**

```bash
# 1. Bump the version in manifest.json (semantic versioning)
# 2. Commit and push
git add -A && git commit -m "Deploy: Quick Exit v0.1.x — <description>"
git push origin <branch>

# 3. Prepare and deploy
npm run cmp-quickexit-prepare
npm run cmp-quickexit-deploy:dry-run  # Validate first
npm run cmp-quickexit-deploy          # Deploy to live tenant
```

## Runtime dependencies

**CSS:** Served site-wide via the `head.html` nester (`dist/theme-ntg.min.css` or `dist/theme-central.min.css`).

**JavaScript:** Self-contained inline IIFE embedded in the rendered output. Reads `data-exit-url` and `data-redirect-url` from the rendered element (server-escaped) — it never interpolates URLs into the script body. Handles click and Enter/Space keyboard activation.

## Deployment placement

In Squiz DXP, drop the **NT Gov Quick Exit** component into the **header** zone (above all page content) of the `full-width-section` Page Layout, on any page containing sensitive information (domestic violence, child safety, sexual assault, whistleblower portals, mental health crisis support, etc.). Place it as the first focusable element so keyboard users can reach it quickly.
