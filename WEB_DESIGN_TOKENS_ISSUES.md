# Upstream Issues Report: @ntgovernment/web-design-tokens v3.0.1

**Reported by:** Web Design System team  
**Date:** 19 April 2026  
**Package version:** `@ntgovernment/web-design-tokens@3.0.1`  
**Consumer:** `@ntgovernment/web-design-system`

---

## Executive Summary

During the migration of `@ntgovernment/web-design-system` from web-design-tokens v2 to v3, we identified **6 categories of bugs** in the token package itself. These issues result in **152 undefined CSS variable references per theme file** and cause silent rendering failures at runtime. Several of the issues are in auto-generated files, suggesting problems in the token build pipeline (`tokens:build`).

---

## Issue 1: Broken Alias Chains in `base-variables.css` — Desktop Typography

**Severity:** High  
**Files affected:** `dist/css/base-variables.css`

The desktop typography aliases in `base-variables.css` reference intermediate token names that **do not exist** anywhere in the package.

### Examples

| Alias in `base-variables.css`                                         | References                   | Actually defined in `typography.css` as |
| --------------------------------------------------------------------- | ---------------------------- | --------------------------------------- |
| `--type-desktop-h1-size: var(--type-heading-h1-size)`                 | `--type-heading-h1-size`     | `--type-heading-h1-size` ✅ (works)     |
| `--type-desktop-button-default-size: var(--type-button-default-size)` | `--type-button-default-size` | ❌ **Does not exist**                   |
| `--type-desktop-button-sm-size: var(--type-button-sm-size)`           | `--type-button-sm-size`      | ❌ **Does not exist**                   |

The actual token names in `typography.css` are:

- `--type-button-label-default-size` (not `--type-button-default-size`)
- `--type-button-label-small-size` (not `--type-button-sm-size`)

**Impact:** `--type-desktop-button-default-size` and `--type-desktop-button-sm-size` resolve to nothing. Any component using these tokens for button font sizing gets no value.

**Root cause:** The alias generator appears to use a different naming convention (`button-default`, `button-sm`) than the typography token definitions (`button-label-default`, `button-label-small`).

### Missing font-weight and line-height aliases

`base-variables.css` only aliases the `-size` property for button and body tokens. It does **not** alias `-weight`, `-lh`, or `-ls` variants, even though the heading tokens (`--type-desktop-h1-*`) have corresponding `-weight` and `-lh` tokens in `typography.css`. This inconsistency forces consumers to hardcode values or use different indirection paths for different properties.

---

## Issue 2: Broken Alias Chains — Mobile Heading Typography

**Severity:** High  
**Files affected:** `dist/css/base-variables.css`

Mobile heading aliases reference names that don't match actual definitions:

| Alias in `base-variables.css`                               | References                      | Actually defined in `typography.css` as |
| ----------------------------------------------------------- | ------------------------------- | --------------------------------------- |
| `--type-mobile-h1-size: var(--type-mobile-heading-h1-size)` | `--type-mobile-heading-h1-size` | ❌ **Does not exist**                   |
| `--type-mobile-h2-size: var(--type-mobile-heading-h2-size)` | `--type-mobile-heading-h2-size` | ❌ **Does not exist**                   |
| ... (through h3–h6)                                         |                                 |                                         |

The actual tokens in `typography.css` are:

- `--type-mobile-h1-size: 2rem` (direct value, not `--type-mobile-heading-h1-size`)

**Impact:** The alias `--type-mobile-h1-size` in `base-variables.css` references `var(--type-mobile-heading-h1-size)` which doesn't exist, while `typography.css` separately defines `--type-mobile-h1-size: 2rem` directly. When both files are loaded, `typography.css` wins in cascade order, masking the broken alias. However, if only `base-variables.css` is loaded (without `typography.css`), all mobile heading sizes resolve to nothing.

---

## Issue 3: Self-Referencing Circular Variables in `base-variables.css`

**Severity:** High  
**Files affected:** `dist/css/base-variables.css`

**20 CSS variables** reference themselves, creating circular definitions that resolve to the CSS `initial` value (effectively nothing):

```css
/* These are ALL circular — the variable references itself */
--type-mobile-body-default-size: var(--type-mobile-body-default-size);
--type-mobile-body-default-bold-size: var(--type-mobile-body-default-bold-size);
--type-mobile-body-sm-size: var(--type-mobile-body-sm-size);
--type-mobile-body-sm-bold-size: var(--type-mobile-body-sm-bold-size);
--type-mobile-button-default-size: var(--type-mobile-button-default-size);
--type-mobile-button-default-sm-size: var(--type-mobile-button-default-sm-size);
--type-mobile-tag-size: var(--type-mobile-tag-size);
--type-link-default-decoration: var(--type-link-default-decoration);
--type-link-default-paragraph-spacing: var(
  --type-link-default-paragraph-spacing
);
--type-link-default-bold-decoration: var(--type-link-default-bold-decoration);
--type-link-default-bold-paragraph-spacing: var(
  --type-link-default-bold-paragraph-spacing
);
--type-link-sm-decoration: var(--type-link-sm-decoration);
--type-caption-default-paragraph-spacing: var(
  --type-caption-default-paragraph-spacing
);
--type-uppercase-sm-text-transform: var(--type-uppercase-sm-text-transform);
--type-uppercase-md-text-transform: var(--type-uppercase-md-text-transform);
--type-uppercase-default-text-transform: var(
  --type-uppercase-default-text-transform
);
--type-mobile-link-default-decoration: var(
  --type-mobile-link-default-decoration
);
--type-mobile-link-default-paragraph-spacing: var(
  --type-mobile-link-default-paragraph-spacing
);
--type-mobile-link-sm-decoration: var(--type-mobile-link-sm-decoration);
--type-mobile-tag-text-transform: var(--type-mobile-tag-text-transform);
```

Per the CSS specification, a custom property that references itself is **invalid at computed-value time** and resolves to the guaranteed-invalid value. These aliases do nothing and only work at runtime because `typography.css` defines the same variable names with concrete values earlier in the cascade.

**Root cause:** The alias generator is producing `--X: var(--X)` instead of mapping to theme-prefixed values like `var(--ntg-X)`.

---

## Issue 4: Theme Files Use `@import` Statements

**Severity:** Medium  
**Files affected:** `dist/css/themes/theme-ntg.css`, `dist/css/themes/theme-central.css`

Both theme files contain four `@import` statements at the top:

```css
@import "../common.css";
@import "../grid.css";
@import "../typography.css";
@import "../typography-literals.css";
```

**Impact on consumers:**

1. When a bundler (Vite, webpack) processes a consumer's CSS that imports a theme file, the `@import` statements get inlined, duplicating `common.css`, `grid.css`, `typography.css`, and `typography-literals.css` in every theme bundle.

2. If a consumer builds **separate theme bundles** (one for NTG, one for Central), both bundles contain identical copies of these shared files, bloating output.

3. In some bundler configurations, `@import` statements that appear after other CSS rules are invalid per the CSS specification and may be silently dropped.

**Recommendation:** Either:

- Remove `@import` statements and make the theme files self-contained, or
- Document in the README that consumers must strip `@import` statements when bundling theme files independently, or
- Provide pre-bundled "standalone" theme files that include all dependencies

---

## Issue 5: Theme Files Reference Unprefixed Variables Without Ensuring They Exist

**Severity:** Medium  
**Files affected:** `dist/css/themes/theme-ntg.css`, `dist/css/themes/theme-central.css`

The theme files contain prefixed aliases that reference unprefixed base tokens:

```css
/* In theme-ntg.css */
--ntg-radii-none: var(--radii-none);
--ntg-radii-sm: var(--radii-sm);
--ntg-radii-lg: var(--radii-lg);
--ntg-type-desktop-h1-size: var(--type-heading-h1-size);
--ntg-type-desktop-button-default-size: var(--type-button-default-size);
/* ...and ~130 more */
```

These `var()` targets (e.g., `--radii-none`, `--type-heading-h1-size`, `--type-button-default-size`) are defined in `common.css` and `typography.css`, which are only available via `@import`. If a consumer loads the theme file without the imported dependencies (or if imports are stripped during bundling), **152 variables per theme** resolve to nothing.

**Validation output** (using our `validate-css.js` tool scanning only the theme file):

- `theme-ntg.css`: 152 undefined variable references
- `theme-central.css`: 152 undefined variable references

**Recommendation:** Theme files should either:

- Be self-contained with all needed tokens inlined, or
- Only reference variables they themselves define

---

## Issue 6: Undocumented Breaking Token Renames (v2 → v3)

**Severity:** High  
**Files affected:** Multiple — `common.css`, `typography.css`, `base-variables.css`

The v3.0.0 release renamed several tokens without a migration guide or CHANGELOG. The following renames broke our design system's component CSS:

### Spacing tokens

| v2 Name    | v3 Name    | Components affected                                                                                                                                                                                                                                                                                                                        |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--sp-xxl` | `--sp-2xl` | Accordion, BackToTop, Banner, Breadcrumbs, Card, Callout, Checkbox, DateInput, DatePicker, Document, Dropdown, FileUpload, FloatingButton, Footer, GlobalAlert, Header, Image, Input, Notification, OnThisPageNavigation, Pagination, Pill, QuickExit, Radio, SearchBar, SideNavigation, StepList, Tab, Table, Tag, Textarea, TopicListing |

> **Note:** Only `--sp-xxl → --sp-2xl` changed. Other spacing tokens (`xs`, `sm`, `md`, `lg`, `xl`) were not renamed. This inconsistency is confusing — the convention should be documented.

### Typography tokens

| v2 Name                    | v3 Name                         |
| -------------------------- | ------------------------------- |
| `--type-font-default`      | `--type-font-family-default`    |
| `--type-font-alt`          | `--type-font-family-alt`        |
| `--type-body-small-*`      | `--type-body-sm-*`              |
| `--type-uppercase-small-*` | `--type-uppercase-sm-*`         |
| `--type-button-default-*`  | `--type-button-label-default-*` |
| `--type-button-small-*`    | `--type-button-label-small-*`   |

### Inconsistency in naming convention

The renames mix conventions inconsistently:

- `small → sm` for body/uppercase tokens
- `small → small` retained in `button-label-small` (not `button-label-sm`)
- `xxl → 2xl` for spacing but `xxl` retained in `border-width-xxl`

**Recommendation:** Publish a migration guide or CHANGELOG entry documenting all renamed tokens between v2 and v3, ideally with a codemods or find-and-replace guide.

---

## Issue 7: Spurious RGB Decomposition Tokens

**Severity:** Low  
**Files affected:** `dist/css/themes/theme-ntg.css`, `dist/css/themes/theme-central.css`

The theme files generate `-r`, `-g`, `-b`, and `-rgb` suffix variants for **non-colour tokens** such as typography sizes, border radii, text decorations, and text transforms:

```css
--ntg-type-heading-h1-size-r: var(
  --type-heading-h1-size-r
); /* font-size is not a colour */
--ntg-type-heading-h1-size-g: var(--type-heading-h1-size-g);
--ntg-type-heading-h1-size-b: var(--type-heading-h1-size-b);
--ntg-radii-none-r: var(--radii-none-r); /* border-radius is not a colour */
--ntg-type-uppercase-sm-text-transform-r: var(
  --type-uppercase-sm-text-transform-r
); /* text-transform is not a colour */
```

These tokens reference variables that don't exist (e.g., `--type-heading-h1-size-r` is never defined) and serve no purpose since font-size, border-radius, and text-transform values are not colours that can be decomposed into RGB channels.

**Impact:** These add ~90 useless variables per theme file that all resolve to nothing, bloating file size and confusing developers.

**Root cause:** The token build pipeline appears to unconditionally generate RGB decomposition suffixes for all tokens, not just colour tokens.

---

## Summary of Actions Needed

| #   | Issue                                                | Severity | Suggested Fix                                                                      |
| --- | ---------------------------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| 1   | Broken button aliases in base-variables.css          | High     | Fix alias targets: `--type-button-default-size → --type-button-label-default-size` |
| 2   | Broken mobile heading aliases                        | High     | Fix alias targets: `--type-mobile-heading-h1-size → --type-mobile-h1-size`         |
| 3   | Self-referencing circular variables (20 tokens)      | High     | Generate `--X: var(--ntg-X)` or inline concrete values                             |
| 4   | @import statements in theme files                    | Medium   | Remove or provide standalone bundles                                               |
| 5   | Theme files depend on unprefixed tokens from imports | Medium   | Inline dependencies or document requirement                                        |
| 6   | Undocumented breaking renames (v2 → v3)              | High     | Publish migration guide / CHANGELOG                                                |
| 7   | RGB decomposition on non-colour tokens               | Low      | Filter token build to only generate -r/-g/-b for colour tokens                     |

---

## Appendix: Validation Tool

We used a custom `validate-css.js` script to detect these issues. It parses each CSS file, extracts all `var(--*)` references, and reports any that are not defined within the same file. Happy to share the script with the tokens team for integration into CI.

---

## Appendix: Full List of 152 Undefined Variables per Theme File

<details>
<summary>Click to expand</summary>

### Category: Typography size aliases (20 vars)

```
--type-heading-h1-size through --type-heading-h6-size
--type-body-default-size, --type-body-default-bold-size
--type-body-sm-size, --type-body-sm-bold-size
--type-button-default-size, --type-button-sm-size
--type-uppercase-sm-size, --type-uppercase-default-size
--type-mobile-heading-h1-size through --type-mobile-heading-h6-size
```

### Category: Border radii (3 vars)

```
--radii-none, --radii-sm, --radii-lg
```

### Category: Spurious RGB decomposition of typography tokens (~90 vars)

```
--type-heading-h1-size-r, -g, -b (through h6)
--type-body-default-size-r, -g, -b (and bold, sm, sm-bold)
--type-button-default-size-r, -g, -b (and sm)
--type-uppercase-sm-size-r, -g, -b (and default)
--type-mobile-heading-h1-size-r, -g, -b (through h6)
--type-mobile-body-default-size-r, -g, -b (and bold, sm, sm-bold)
--type-mobile-button-default-size-r, -g, -b (and sm)
--type-mobile-tag-size-r, -g, -b
--radii-none-r, -g, -b (and sm, lg)
```

### Category: Spurious RGB decomposition of non-numeric tokens (~39 vars)

```
--type-link-default-decoration-r, -g, -b (and bold)
--type-link-default-paragraph-spacing-r, -g, -b (and bold)
--type-link-sm-decoration-r, -g, -b
--type-caption-default-paragraph-spacing-r, -g, -b
--type-uppercase-sm-text-transform-r, -g, -b (and md, default)
--type-mobile-link-default-decoration-r, -g, -b
--type-mobile-link-default-paragraph-spacing-r, -g, -b
--type-mobile-link-sm-decoration-r, -g, -b
--type-mobile-tag-text-transform-r, -g, -b
```

</details>
