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

| Layout               | Zones                      | Description                                                                                                                                                                              |
| -------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `full-width-section` | `header`, `main`, `footer` | Single-column, full-width section with stacked header / main / footer rows.                                                                                                              |
| `content-container`  | `content`                  | Single-zone, width-constrained section for **text-only** editorial content. Wraps the zone in Bootstrap `.container-xl` with 16px horizontal padding on viewports narrower than 1200px.  |

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
npm run layouts:dev                            # full-width-section with the NTG theme (default)
npm run layouts:dev:central                    # full-width-section with the Central theme
npm run layouts:dev:content-container          # content-container with the NTG theme
npm run layouts:dev:content-container:central  # content-container with the Central theme
```

Each script invokes `npx --package=@squiz/dxp-cli-next@latest dxp-next page layouts dev` from inside
the layout's folder, mapping each zone to the matching file under `mock/` and
loading the chosen theme stylesheet from `dist/`.

> **Note on Bootstrap**: layouts that depend on Bootstrap classes (e.g.
> `content-container` uses `.container-xl`) only render with the correct
> max-width when a host page also loads Bootstrap. The local dev server does
> not bundle Bootstrap, so the container max-width will not apply in the
> preview — only the 16px sub-xl padding shipped by the theme bundle will be
> visible. Deployed pages on the NT Government site template load Bootstrap
> and render correctly.

The dev server opens a browser at <http://localhost:4040> and auto-reloads when
the `manifest.json`, `markup.hbs`, or any `mock/*.html` file changes.

## Deployment

Layouts are deployed to the Squiz DXP Component Service using the
`dxp-next page layouts deploy` command. See
<https://docs.squiz.net/component-service/latest/layouts/deploying-layouts.html>.

### Prerequisite

You must be authenticated against the target DXP tenant. Sign in once with:

```bash
npx -y --package=@squiz/dxp-cli-next@latest dxp-next auth login --tenant=YOUR-TENANT-ID
```

Replace `YOUR-TENANT-ID` with the tenant ID from your DXP Console URL
(`https://dxp.squiz.cloud/organization/<TENANT-ID>/`). The login command opens
a browser window for SSO / username + password.

### Recommended workflow

Run the dry-run first to validate the manifest before pushing:

```bash
npm run layouts:deploy:dry-run                     # validate full-width-section only
npm run layouts:deploy                             # deploy full-width-section to the logged-in tenant
npm run layouts:deploy:content-container:dry-run   # validate content-container only
npm run layouts:deploy:content-container           # deploy content-container to the logged-in tenant
```

The deploy script uses the tenant from your active login — if you have access
to more than one tenant, the CLI prompts you to choose.

A successful deploy prints a layout URL similar to:

```
Deployed layout URL: https://dxp.squiz.cloud/<tenant>/component-service/all-layouts/full-width-section
```

### Verify in DXP

1. Sign in to <https://dxp.squiz.cloud/>.
2. Open the **Component Service** capability.
3. Select **Components & Layouts**.
4. Confirm **Full-width section** appears under **All layouts**.
