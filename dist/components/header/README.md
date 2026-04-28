# Header — Squiz DXP Component Service

✅ **DEPLOYED** — Site-wide NT Government header packaged for Squiz DXP. **Version 1.0.1 is live on DXP cloud.**

Renders as **server-side HTML only** via `main.js`. A small inline `<script>` handles hamburger toggle and search-icon expansion — no client-side React or hydration runtime required.

## Files

| File                | Purpose                                                                  |
| ------------------- | ---------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)         |
| `main.js`           | Edge renderer — emits full `<header>` HTML + inline interactivity code |
| `example.data.json` | Sample inputs for each variant (used by `cmp-dev`)                     |
| `preview.html`      | Local preview (SSR test harness with self-contained styles)            |
| `previews/`         | Data files (`*.data.json`) and wrapper template for each variant       |
| `README.md`         | This file                                                              |

## Inputs

| Property            | Type    | Default     | Notes                                                     |
| ------------------- | ------- | ----------- | --------------------------------------------------------- |
| `variant`           | enum    | `nt-gov-au` | `nt-gov-au` \| `agency-internet` \| `other-site`          |
| `agencyName`        | string  | —           | Title shown for `agency-internet` / `other-site` variants |
| `agencyHref`        | string  | `/`         | URL the agency title links to                             |
| `logoAlt`           | string  | `NT.GOV.AU` | Alt text for the logo image                               |
| `navItems`          | array   | `[]`        | `{ label, href, icon?, active? }` — top-level navigation  |
| `showSearch`        | boolean | `true`      | Whether a search bar is rendered                          |
| `searchVariant`     | enum    | `expanded`  | `expanded` \| `icon`                                      |
| `searchPlaceholder` | string  | `Search`    | Placeholder for the search input                          |
| `searchAction`      | string  | `/search`   | Form GET URL; the search field name is `query`            |

The full prop reference lives in
[`src/components/Header/Header.tsx`](../Header.tsx).

## Local development

### Preview locally

```bash
# (Re-)inline Header CSS variables to literal values (after editing Header.css)
node scripts/inline-header-css.js

# Open preview.html in a browser via any static server (or Vite)
npm run dev
# then visit http://localhost:5173/src/components/Header/dxp/preview.html
```

### Test in Squiz DXP dev-ui

The `cmp-dev`, `cmp-dev:runner`, `cmp-deploy`, and `cmp-deploy:dry-run` npm scripts auto-run `npm run cmp-prepare` before executing, which copies the source to `dist/components/header/` and inlines the theme CSS.

```bash
# Squiz DXP dev-ui (NTG theme)
npm run cmp-dev

# Squiz DXP dev runner with live reload
npm run cmp-dev:runner
```

## Deployment

**Status:** ✅ **Version 1.0.1 deployed and live on DXP cloud.**

To deploy new versions after making changes:

```bash
# 1. Update the version in manifest.json
# "version": "1.0.2"  (use semantic versioning)

# 2. Regenerate inlined styles (if you edited CSS)
node scripts/inline-header-css.js

# 3. Commit and push
git add -A && git commit -m "Deploy: Header v1.0.2 — <description>"
git push origin <branch>

# 4. Prepare and deploy to DXP
npm run cmp-prepare
npm run cmp-deploy:dry-run  # Validate first
npm run cmp-deploy          # Deploy to live tenant
```

**The `cmp-deploy` command automatically runs `cmp-prepare` before executing.**

For detailed deployment instructions, see [DEPLOYMENT_READY.md](../../DEPLOYMENT_READY.md).

## Runtime dependencies

**CSS:** Served site-wide via the `head.html` nester (`dist/theme-ntg.min.css` or `dist/theme-central.min.css`).

**JavaScript:** None — the component emits plain HTML with an inline `<script>` for DOM interactivity (hamburger toggle, search expansion). No client-side runtime or React hydration is needed.

## Styling

The component uses only HTML semantics and Bootstrap 5 classes (`.navbar`, `.container`, `.input-group`, `.form-control`, `.btn`, etc.).

- **Local preview** (`preview.html`): Self-contained `<style>` block with Header rules + minimal Bootstrap (populated by `scripts/inline-header-css.js`).
- **DXP deployment** (`previews/wrapper.html`): Theme CSS inlined at build time by `scripts/prepare-header-dxp.js`.
- **Production** (Squiz Matrix): CSS loaded site-wide from the `head.html` nester.

## Deployment

In Squiz DXP, drop the **NT Gov Header** component into the **header** zone of the `full-width-section` Page Layout. CSS is inherited from the site theme.
