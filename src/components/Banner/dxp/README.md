# Banner — Squiz DXP Component Service

Page banner component for home and landing pages, packaged for Squiz DXP. **Version 0.3.0.**

Renders as **server-side HTML only** via `main.js`. The DXP version is intentionally non-interactive — no React, no event handlers, no breadcrumb truncation menu. Theme CSS (loaded site-wide via the head nester) provides all styling.

## Files

| File                | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `manifest.json`     | Squiz DXP v1 manifest (component metadata + input JSON Schema)        |
| `main.js`           | Edge renderer — emits full banner HTML mirroring `Banner.tsx`         |
| `example.data.json` | Sample inputs for the local `preview.html` harness                    |
| `preview.html`      | Local preview harness (loads theme CSS from NT Gov CDN)               |
| `previews/`         | Wrapper template + 7 `*.data.json` files — one per dev-ui preview tab |
| `README.md`         | This file                                                             |

## Inputs

| Property         | Type    | Default      | Notes                                                                                      |
| ---------------- | ------- | ------------ | ------------------------------------------------------------------------------------------ |
| `title`          | string  | `Page title` | **Required.** H1 heading.                                                                  |
| `variant`        | enum    | `primary`    | `primary` = dark background; `secondary` = light shade background with border divider.     |
| `description`    | string  | `Optional short description of the page goal` | Optional subtitle displayed below the title.                              |
| `ctaText`        | string  | `Call to action` | CTA button label. Leave blank to hide the button.                                    |
| `ctaHref`        | string  | `#`          | URL for the CTA button link. Required when `ctaText` is set.                               |
| `ctaVariant`     | enum    | `secondary`  | Bootstrap button style: `primary`, `secondary`, or `tertiary`.                             |
| `linksHeading`   | enum    | `Popular`    | `Popular`, `Featured`, or `Related`. Leave blank to hide the links panel.                  |
| `links`          | array   | 4 NT Gov service links | `{ label, href }` pairs. Primary = pill links; secondary = vertical text links. |
| `breadcrumbs`    | array   | `[]`         | Full breadcrumb trail `{ label, href, isCurrent }`. Takes precedence over `label`/`href`.  |
| `label`          | string  |              | Shortcut: first breadcrumb item label (e.g. `Home`). Adds a "Current page" crumb after it. |
| `href`           | string  |              | Shortcut: first breadcrumb item URL. Used together with `label`.                           |
| `showDecorative` | boolean | `true`       | Show the decorative SVG background element.                                                |

## Limitations

- `ctaOnClick` is not available on the edge — authors must supply `ctaHref` for the button to be functional.
- Breadcrumb truncation menu (for long trails) requires React state and is not rendered; all crumbs are shown inline.
- Deprecated `linkItems` prop is not exposed in the DXP schema; use `links` instead.

## Usage

```sh
# Stage + open local dev-ui preview
npm run cmp-banner-dev

# Validate manifest without deploying
npm run cmp-banner-deploy:dry-run

# Deploy (bump version in manifest.json first)
npm run cmp-banner-deploy
```

The full prop reference lives in `src/components/Banner/Banner.tsx`.
