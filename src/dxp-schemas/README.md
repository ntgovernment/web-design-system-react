# Squiz DXP Component Schemas

Local reference copies of the JSON Schema files used by the [Squiz DXP Component Service](https://developers.squiz.net/dxp/) CLI tool (`@squiz/dxp-cli-next`).

## Purpose

These schemas provide:

- **IDE validation** — Point your `manifest.json` `$schema` field to the local file for editor autocomplete and validation during development.
- **Reference documentation** — Understand the valid structure for manifests, icons, input properties, and the custom Squiz content types (`SquizLink`, `SquizImage`, `FormattedText`).

The DXP CLI serves the authoritative versions of these schemas at `http://localhost:3000/schemas/v1.json#` when running `dxp-next cmp dev-ui`. The local copies here mirror that content.

## Schema Files

### `component-manifest.schema.json`

Main component manifest schema — validates the structure of DXP component `manifest.json` files.

**Key Properties:**

| Property       | Type               | Required | Description                                                   |
| -------------- | ------------------ | -------- | ------------------------------------------------------------- |
| `namespace`    | `string`           | ✅       | Lowercase hyphenated namespace (e.g. `ntg-web-design-system`) |
| `name`         | `string`           | ✅       | Lowercase hyphenated component name (e.g. `footer`)           |
| `displayName`  | `string`           | ✅       | Human-readable name shown in DXP UI                           |
| `description`  | `string`           | ✅       | Short description for DXP UI                                  |
| `icon`         | `Icon`             | ✅       | Component icon (see `component-icons.schema.json`)            |
| `type`         | `"edge"\|"server"` | ✅       | Runtime type — use `"edge"` for Cloudflare Workers            |
| `version`      | `string`           | ✅       | Semver version (e.g. `"1.0.0"`)                               |
| `mainFunction` | `string`           | ✅       | Name of the primary render function exported from `main.js`   |
| `functions`    | `Function[]`       | ✅       | Array of function definitions                                 |
| `previews`     | `Previews`         | —        | Map of preview variant names to preview configs               |

### `component-icons.schema.json`

Validates icon configurations for the `icon` field in `manifest.json`.

**Usage:**

```json
"icon": {
  "id": "web",
  "color": { "type": "enum", "value": "blue" }
}
```

- **`id`**: Font Awesome icon name — no `fa-` prefix (e.g. `"web"`, `"code"`, `"user"`)
  - Icons render as `fa-light fa-{id}` in the NT Gov Design System
  - NOT full class names: ~~`"fa-light fa-code"`~~
- **`color`**:
  - **Hex**: `{"type": "hex", "value": "#0066cc"}`
  - **Enum**: `{"type": "enum", "value": "blue"}` — valid values: `gray`, `blue`, `green`, `orange`, `red`, `purple`, `teal`, `yellow`, `pink`

### `component-input.schema.json`

Input validation schema for component functions. Extends `content-meta.schema.json` with DXP-specific constraints. Used in the `input` block of each function definition.

The root of the input schema must always be `{ "type": "object" }` with a `properties` map. Each property supports standard JSON Schema types plus the custom DXP types below.

### `content-meta.schema.json`

Core JSON Schema meta-schema with Squiz Matrix extensions.

**Custom Types:**

#### `SquizLink`

A Squiz Matrix asset link reference. Can be a plain URL string or a Matrix asset object.

```typescript
type SquizLink =
  | string // Plain URL — e.g. "https://nt.gov.au"
  | {
      assetId: string; // Matrix asset ID (required for asset references)
      url?: string; // Resolved URL
      text?: string; // Link display text
      target?: "_self" | "_blank" | "_parent" | "_top";
    };
```

> **Preview data:** For preview data JSON files, use a **plain string URL** for `SquizLink` fields:
>
> ```json
> "logo": "https://nt.gov.au/path/to/image.svg"
> ```
>
> Object references with `assetId` are only available in a live Squiz Matrix environment.

#### `SquizImage`

A Squiz Matrix image asset reference with responsive image variations.

```typescript
type SquizImage = {
  name?: string;
  alt?: string;
  caption?: string;
  imageVariations?: Record<
    string,
    {
      url?: string;
      width?: number;
      height?: number;
      byteSize?: number;
      mimeType?: string;
      aspectRatio?: string;
      sha1Hash?: string;
    }
  >;
};
```

#### `FormattedText`

A rich-text HTML string from the Squiz Matrix WYSIWYG editor. The value is raw HTML output.

**Custom Formats:**

| Format             | Description                                    |
| ------------------ | ---------------------------------------------- |
| `matrix-asset-uri` | Squiz Matrix asset URI                         |
| `multi-line`       | Multi-line text input (renders a `<textarea>`) |
| `phone`            | Phone number string                            |

## Usage

### In Component Manifests

Reference the schema in your `manifest.json` for IDE validation:

```json
{
  "$schema": "http://localhost:3000/schemas/v1.json#",
  "namespace": "ntg-web-design-system",
  "name": "footer",
  "displayName": "Footer",
  "type": "edge",
  "version": "0.1.0",
  "mainFunction": "main",
  "functions": [
    {
      "name": "main",
      "entry": "main.js",
      "input": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title"
          },
          "logo": {
            "type": "SquizLink",
            "title": "Logo image"
          },
          "body": {
            "type": "FormattedText",
            "title": "Body content"
          }
        },
        "required": []
      },
      "output": {
        "responseType": "html"
      }
    }
  ]
}
```

### In Preview Data Files

Preview data files must use types that pass DXP CLI validation:

- **`SquizLink` fields**: Use a **plain string URL** (the object form requires a real Matrix `assetId`)
- **`SquizImage` fields**: Use an object with `imageVariations.original.url`
- **`FormattedText` fields**: Use a plain HTML string

```json
{
  "logo": "https://nt.gov.au/path/to/image.svg",
  "heroImage": {
    "name": "Hero image",
    "alt": "Descriptive alt text",
    "imageVariations": {
      "original": {
        "url": "https://nt.gov.au/path/to/image.jpg",
        "width": 1200,
        "height": 630
      }
    }
  },
  "body": "<p>This is <strong>rich text</strong> HTML.</p>"
}
```

## Schema References

- **Squiz DXP Documentation**: <https://developers.squiz.net/dxp/>
- **JSON Schema Spec**: <https://json-schema.org/>
- **Font Awesome Icons**: <https://fontawesome.com/>
- **NT Gov Font Awesome Kit**: `9bf658a5c7` (fa-light variants)

## Notes

- **`MatrixAsset.schema.json`**: Referenced by `component-manifest.schema.json` but not included here. The DXP CLI provides this schema during runtime.
- **Icon Style**: All icons use `fa-light` style in the NT Gov Design System.
- **Schema Versioning**: Schemas follow Squiz DXP versioning (currently v1).
- **Validation**: Schemas are validated during `dxp-next cmp deploy`.

## Adding Custom Icons

Any valid Font Awesome icon name (without `fa-` prefix) can be used as the `icon.id`. The `component-icons.schema.json` includes a non-exhaustive `examples` list. If your icon isn't listed, it will still work as long as it's a valid Font Awesome icon supported by the NT Gov FA Kit (`9bf658a5c7`).
