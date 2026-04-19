# Themes

This directory contains theme-related documentation and demo assets. Theme CSS is **not generated here** — it is consumed from the [`@ntgovernment/web-design-tokens`](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens) npm package and assembled into self-contained bundles by `scripts/build-theme-bundles.js`.

## Built Theme Bundles

`npm run build` produces two fully self-contained CSS bundles in `dist/`:

| File                         | Theme       |
| ---------------------------- | ----------- |
| `dist/theme-ntg.min.css`     | NT.GOV.AU   |
| `dist/theme-central.min.css` | NTG Central |

Each bundle includes base variables, common tokens, grid, typography, theme palette, and component styles — **no separate imports required** beyond Bootstrap CDN.

## Token Source

Design tokens live in the separate [`@ntgovernment/web-design-tokens`](https://github.com/orgs/ntgovernment/packages/npm/package/web-design-tokens) package. This repo consumes them as a direct npm dependency.

The tokens package exposes CSS via named export specifiers:

```css
/* Bundled theme files (recommended — self-contained, includes all token layers) */
@import "@ntgovernment/web-design-tokens/css/theme-ntg-bundled";
@import "@ntgovernment/web-design-tokens/css/theme-central-bundled";
```

## Updating Tokens

1. Raise a PR in the `web-design-tokens` repository
2. After a new version is published, bump `@ntgovernment/web-design-tokens` in `package.json`
3. Run `npm install` then `npm run build`

## Build Process

```
Figma Design
    ↓ (export)
@ntgovernment/web-design-tokens  ← external npm package
    ↓ (scripts/build-theme-bundles.js)
dist/theme-ntg.min.css / dist/theme-central.min.css
```

## CSS Variable Structure

Components use **unprefixed semantic variables** that automatically resolve for the active theme:

### Color tokens

- `--clr-action-primary`, `--clr-action-hover` — interactive elements
- `--clr-bg-default`, `--clr-bg-shade` — backgrounds
- `--clr-text-default`, `--clr-text-muted` — text
- `--clr-border-subtle`, `--clr-border-strong-01` — borders
- `--clr-focus-focus` — focus ring (NTG: orange; Central: green)
- `--clr-status-success/danger/warning/info` — status indicators

### Spacing tokens

- `--sp-xxs` (4px) through `--sp-xxxl` (48px)

### Typography tokens

- `--type-font-default` — body typeface (NTG: Lato; Central: Roboto)
- `--type-desktop-h1-size` through `--type-desktop-h6-size`
- `--type-body-default-lh`, `--type-body-sm-size`

## Theme Switching

See [THEME_SWITCHING.md](THEME_SWITCHING.md) for runtime theme switching patterns.

## Troubleshooting

**Theme styles not reflecting after a token package update?**

1. Confirm the version bump in `package.json` and re-run `npm install`
2. Run `npm run build` to regenerate the theme bundles
3. Hard-refresh the browser (Ctrl+Shift+R / Cmd+Shift+R)
