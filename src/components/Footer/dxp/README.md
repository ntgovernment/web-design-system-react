# Footer — Squiz DXP Component Service

🧪 **PREVIEW** — Site-wide NT Government footer packaged for Squiz DXP. **Version 0.1.0 (initial preview release).**

Renders as **server-side HTML only** via `main.js`. The Footer has no interactive state, so no inline `<script>` is emitted — markup only.

## Files

| File                | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)        |
| `main.js`           | Edge renderer — emits full `<footer>` HTML mirroring Footer.tsx       |
| `example.data.json` | Sample inputs for the local `preview.html` harness                    |
| `preview.html`      | Local preview (SSR test harness with theme CSS via GFB URL)           |
| `previews/`         | Wrapper template + 5 `*.data.json` files — one per dev-ui preview tab |
| `README.md`         | This file                                                             |

## Inputs

| Property             | Type      | Default           | Notes                                                            |
| -------------------- | --------- | ----------------- | ---------------------------------------------------------------- |
| `sections`           | array     | `[]`              | `{ title, links: [{ label, href }], columns?: 1\|2 }`            |
| `socialLinks`        | array     | `[]`              | `{ platform, href, icon? }` — Font Awesome icon class            |
| `socialSectionTitle` | string    | `Connect with us` | Heading for the social-links block                               |
| `bottomLinks`        | array     | `[]`              | `{ label, href }` — utility links rendered with dividers between |
| `linkDivider`        | string    | `\|`              | Separator drawn between adjacent bottom links                    |
| `logo`               | SquizLink | —                 | Image asset reference; resolves to URL and renders an `<img>`    |
| `logoAlt`            | string    | `""`              | Alt text for the logo image                                      |
| `logoHref`           | string    | —                 | Optional URL the logo links to                                   |
| `acknowledgement`    | string    | —                 | Aboriginal acknowledgement paragraph                             |
| `copyrightText`      | string    | —                 | Copyright statement                                              |

The full prop reference lives in
[`src/components/Footer/Footer.tsx`](../Footer.tsx) and
[`src/components/Footer/FOOTER.md`](../FOOTER.md).

## Local development

### Preview locally

```bash
npm run dev
# then visit http://localhost:5173/src/components/Footer/dxp/preview.html
```

### Test in Squiz DXP dev-ui

The `cmp-footer-dev`, `cmp-footer-dev:runner`, `cmp-footer-deploy`, and `cmp-footer-deploy:dry-run` npm scripts auto-run `npm run cmp-footer-prepare` before executing, which copies the source to `dist/components/footer/` and inlines the theme CSS.

```bash
# Squiz DXP dev-ui (NTG theme)
npm run cmp-footer-dev

# Squiz DXP dev runner with live reload
npm run cmp-footer-dev:runner
```

## Deployment

**Status:** 🧪 **Version 0.1.0 — preview release, not yet deployed.**

To deploy:

```bash
# 1. Update the version in manifest.json
# "version": "0.1.1"  (use semantic versioning)

# 2. Commit and push
git add -A && git commit -m "Deploy: Footer v0.1.1 — <description>"
git push origin <branch>

# 3. Prepare and deploy to DXP
npm run cmp-footer-prepare
npm run cmp-footer-deploy:dry-run  # Validate first
npm run cmp-footer-deploy          # Deploy to live tenant
```

**The `cmp-footer-deploy` command automatically runs `cmp-footer-prepare` before executing.**

## Runtime dependencies

**CSS:** Served site-wide via the `head.html` nester (`dist/theme-ntg.min.css` or `dist/theme-central.min.css`).

**JavaScript:** None — the component emits plain HTML. No inline script, no client-side runtime, no React hydration.

## Styling

The component uses only HTML semantics and the project's `footer__*` BEM classes.

- **Local preview** (`preview.html`): External `<link>` to `https://nt.gov.au/__data/assets/git_bridge/0008/1607588/dist/theme-ntg.min.css`.
- **DXP deployment** (`previews/wrapper.html`): Theme CSS inlined at build time by `scripts/prepare-footer-dxp.js`.
- **Production** (Squiz Matrix): CSS loaded site-wide from the `head.html` nester.

## Deployment placement

In Squiz DXP, drop the **NT Gov Footer** component into the **footer** zone of the `full-width-section` Page Layout. CSS is inherited from the site theme.
