# Page Layouts

Squiz DXP Component Service **Layouts** for the NT Government web design system.

Each subfolder is one deployable layout that conforms to the Squiz Component
Service layout spec: <https://docs.squiz.net/component-service/latest/layouts/layout-files.html>.

## Folder convention

```
src/squiz/layouts/
└── <layout-name>/
    ├── manifest.json     # Layout configuration (metadata + zones + optional properties)
    └── markup.hbs        # Handlebars template rendering the zones
```

- **Folder name** uses kebab-case and matches the `name` field inside `manifest.json`.
- **`manifest.json`** declares `name`, `displayName`, `description`, `entry` (template filename), and the `zones` array. See the Squiz docs for the schema.
- **`markup.hbs`** is the Handlebars template referenced by `entry`. Render each zone with `{{#if zones.<key>}} {{zones.<key>}} {{/if}}`.

## Available layouts

| Layout               | Zones                      | Description                                                                 |
| -------------------- | -------------------------- | --------------------------------------------------------------------------- |
| `full-width-section` | `header`, `main`, `footer` | Single-column, full-width section with stacked header / main / footer rows. |

## Build & deployment

The `npm run build` step copies every layout under `src/squiz/layouts/` into
`dist/layouts/<layout-name>/` so they are picked up by the Squiz Git File Bridge
(asset `1607588`) for deployment to Squiz DXP.

Per-layout `mock/` folders are excluded from the build output — they exist only
for local testing.

## Local testing

Layouts can be previewed locally using the Squiz `dxp-next` CLI development
server. See <https://docs.squiz.net/component-service/latest/layouts/local-testing.html>.

Each layout that supports local testing has a `mock/` folder containing
placeholder HTML for each zone.

### Prerequisite

Build the theme bundles once so the `--stylesheet` argument has a target:

```bash
npm run build
```

This produces `dist/theme-ntg.min.css` and `dist/theme-central.min.css`.

### Run the dev server

From the repo root:

```bash
npm run layouts:dev          # full-width-section with the NTG theme (default)
npm run layouts:dev:central  # full-width-section with the Central theme
```

Both scripts invoke `npx @squiz/dxp-next@latest page layouts dev` from inside
`src/squiz/layouts/full-width-section/`, mapping each zone to the matching file
under `mock/` and loading the chosen theme stylesheet from `dist/`.

The dev server opens a browser at <http://localhost:4040> and auto-reloads when
the `manifest.json`, `markup.hbs`, or any `mock/*.html` file changes.
