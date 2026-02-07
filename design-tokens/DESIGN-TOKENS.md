# Design Tokens

This directory contains the design tokens for the NT Government Web Design System.

## Overview

Design tokens are the source of truth for all design decisions in this system. They are exported from Figma and transformed into a layered CSS custom property architecture:

1. **common.css** - Shared tokens (shadows, spacing, borders, radii)
2. **grid.css** - Bootstrap-compatible grid system
3. **typography.css** - Theme-agnostic typography (size, weight, line-height, letter-spacing, decoration, text-transform, paragraph-spacing)
4. **theme-ntg.css** - NT.GOV.AU theme (Lato font, ochre accent)
5. **theme-central.css** - NTG Central theme (Roboto font, green accent)

## Structure

```
design-tokens/
├── tokens.json              # Source tokens exported from Figma (4433 lines, 849 tokens)
└── DESIGN-TOKENS.md         # This file

scripts/
└── build-tokens.js          # Custom build script (Node.js ES modules)

src/themes/
├── common.css               # AUTO-GENERATED - 54 lines, 25 shared variables
├── grid.css                 # AUTO-GENERATED - 31 lines, 15 grid variables
├── typography.css           # AUTO-GENERATED - 171 lines, 144 typography variables
├── theme-ntg.css            # AUTO-GENERATED - 171 lines, 131+ theme variables
├── theme-central.css        # AUTO-GENERATED - 151 lines, 131+ theme variables
└── THEMES.md                # Usage documentation
```

## Workflow

### 1. Export from Figma

When design tokens are updated in Figma:

1. Open Figma design file
2. Use the design tokens plugin to export tokens
3. Save/download as JSON
4. Replace `design-tokens/tokens.json` with the new export

### 2. Generate CSS

After updating `tokens.json`, regenerate all CSS files:

```bash
npm run tokens:build
```

This runs `scripts/build-tokens.js` which:

- Reads `design-tokens/tokens.json`
- Extracts common tokens (shadows, spacing, borders, radii)
- Extracts grid tokens from `grid.ntg-breakpoint`
- Extracts typography tokens from `font.ntg-type` and `font.ntg-type-sm`
- Generates `src/themes/common.css` (25 shared variables)
- Generates `src/themes/grid.css` (15 grid variables)
- Generates `src/themes/typography.css` (144 theme-agnostic variables)
- Generates `src/themes/theme-ntg.css` (with variable references)
- Generates `src/themes/theme-central.css` (with variable references)

### 3. Build Library

The token generation is integrated into the main build:

```bash
npm run build
```

This automatically runs `tokens:build` before building the component library.

## Token Structure

The `tokens.json` file contains:

### Grid

- Breakpoint configurations (xs, sm, md, lg, xl)
- Column counts, gutter sizes, offsets

### Font

- Typography scales for desktop and mobile
- Font families, sizes, weights, line heights
- Letter spacing values

### Effects

- Shadow definitions (sm, md, lg variants)
- Focus states for both themes

### Primitives

- **NTG Colors**: Blue, orange, ochre, coral, sky-blue, teal, rubine-red, bottle-green, neutral
- **Central Colors**: Blue, green, orange, neutrals
- **Status Colors**: Info, success, warning, danger

### Themes

- **ntg**: NT.GOV.AU theme tokens
  - Background colors
  - Action/button colors
  - Border colors
  - Text colors
  - Link colors
  - Status colors
  - Typography settings
  - Border radius
  - Spacing scale
- **central**: NTG Central theme tokens
  - Same structure as ntg theme
  - Different color values

## Layered CSS Architecture

### Import Hierarchy

```css
/* Theme files import foundation layers */
@import "./common.css"; /* Shadows, spacing, borders, radii */
@import "./grid.css"; /* Bootstrap grid configuration */
@import "./typography.css"; /* Theme-agnostic typography */

/* Then define theme-specific values */
:root {
  --ntg-type-font-default: Lato; /* Theme-specific font family */
  --ntg-clr-bg-default: #ffffff; /* Theme-specific colors */
  --ntg-type-desktop-h1-size: var(
    --type-heading-h1-size
  ); /* Reference typography */
}
```

### Variable Reference System

**Typography variables use references** instead of raw values:

```css
/* typography.css - Theme-agnostic values */
--type-heading-h1-size: 2.5rem;
--type-heading-h1-weight: 700;
--type-heading-h1-lh: 2.75rem;
--type-heading-h1-ls: 0px;
--type-link-default-decoration: underline;
--type-uppercase-small-text-transform: uppercase;

/* theme-ntg.css - References shared values */
--ntg-type-font-default: Lato; /* Only font family is theme-specific */
--ntg-type-desktop-h1-size: var(--type-heading-h1-size);
--ntg-type-desktop-h1-weight: var(--type-heading-h1-weight);
--ntg-type-desktop-h1-lh: var(--type-heading-h1-lh);
--ntg-type-desktop-h1-ls: var(--type-heading-h1-ls);

/* theme-central.css - Same references, different font family */
--central-type-font-default: Roboto;
--central-type-desktop-h1-size: var(--type-heading-h1-size);
```

### Property Name Mappings

**Understanding the naming conventions:**

| Token Property     | CSS Variable Suffix  | Example                                 |
| ------------------ | -------------------- | --------------------------------------- |
| `fontWeight`       | `-weight`            | `--type-heading-h1-weight`              |
| `lineHeight`       | `-lh`                | `--type-heading-h1-lh`                  |
| `letterSpacing`    | `-ls`                | `--type-heading-h1-ls`                  |
| `fontSize`         | `-size`              | `--type-heading-h1-size`                |
| `textDecoration`   | `-decoration`        | `--type-link-default-decoration`        |
| `textCase`         | `-text-transform`    | `--type-uppercase-small-text-transform` |
| `paragraphSpacing` | `-paragraph-spacing` | `--type-link-default-paragraph-spacing` |

## Validation

To validate token structure:

```bash
npm run tokens:validate
```

This checks for:

- Valid JSON syntax
- Required token categories
- Consistent naming conventions
- Missing value references

## Debugging & Troubleshooting

### Common Issues

**1. Missing Typography Properties**

If you see missing properties like `decoration`, `text-transform`, or `paragraph-spacing`:

- Check `tokens.json` → `font.ntg-type` section has the property (e.g., `textDecoration`, `textCase`, `paragraphSpacing`)
- Verify `extractTypographyTokens()` in `build-tokens.js` extracts that property
- Check the property is not `'none'` or `0` (these are excluded)
- Run `npm run tokens:build` to regenerate

**2. Theme Variables Not Referencing Typography**

If theme files duplicate raw values instead of using `var()`:

- Check `generateCSS()` function runs the typography extras logic
- Verify `mapToTypographyVar()` correctly maps theme paths to typography variables
- Look for the property in the `typographyExtras` Map

**3. Properties Converting to Wrong Type**

- **Font weight as rem**: Check `processDimension()` special handling for `weight`/`fontWeight` properties
- **Shadow as [object Object]**: Check `processShadow()` handles custom-shadow type
- **Variable references with duplicate prefixes**: Check `resolveReference()` removes duplicate prefix

**4. Verify Variable Counts**

```bash
# Expected counts
grep -c "^  --" src/themes/common.css       # ~25 variables
grep -c "^  --" src/themes/grid.css         # ~15 variables
grep -c "^  --" src/themes/typography.css   # ~144 variables
grep -c "^  --" src/themes/theme-ntg.css    # ~170+ variables
```

### Debugging Commands

```bash
# Check for specific property types
grep "decoration\|text-transform\|paragraph-spacing" src/themes/typography.css
grep "decoration\|text-transform\|paragraph-spacing" src/themes/theme-ntg.css

# Verify variable references (should show var() calls)
grep "type-desktop-h1" src/themes/theme-ntg.css

# Check import statements
head -20 src/themes/theme-ntg.css | grep "@import"

# Find duplicate or missing properties
diff <(grep "^  --ntg-type" src/themes/theme-ntg.css | sort) <(grep "^  --central-type" src/themes/theme-central.css | sed 's/central/ntg/g' | sort)
```

### Build Script Architecture

**Key Functions in `scripts/build-tokens.js`:**

1. **`extractCommonTokens()`** - Extracts shadows, spacing, borders, radii
2. **`extractGridTokens()`** - Extracts Bootstrap grid configuration
3. **`extractTypographyTokens()`** - Extracts font properties (EXCLUDES fontFamily)
4. **`mapToTypographyVar()`** - Maps theme token paths to typography variable names
5. **`generateCSS()`** - Generates theme files with:
   - Font family declarations (theme-specific)
   - Variable references for typography properties
   - Additional properties (decoration, text-transform, paragraph-spacing)

**Processing Pipeline:**

```
tokens.json
    ↓
[extractCommonTokens] → common.css (25 vars)
[extractGridTokens] → grid.css (15 vars)
[extractTypographyTokens] → typography.css (144 vars)
    ↓
[generateCSS]
    ↓
theme-ntg.css (171 lines)
theme-central.css (151 lines)
```

## Manual Editing

⚠️ **NEVER manually edit generated CSS files** in `src/themes/`

- All generated files have auto-generation warnings in headers
- All changes MUST be made in `tokens.json`
- Run `npm run tokens:build` to regenerate CSS
- Commit both `tokens.json` AND generated CSS files

## Token Categories

### Colors

- Primitive colors (foundation)
- Semantic colors (contextual usage)
- Status colors (info, success, warning, danger)

### Typography

- Font families
- Font sizes (rem values)
- Font weights
- Line heights
- Letter spacing

### Spacing

- Spacer scale (xxs to xxxl)
- Consistent spacing system

### Borders

- Border widths
- Border radius values
- Border colors

### Effects

- Box shadows
- Focus states
- Elevation system

## Adding New Tokens

To add new tokens:

1. Update the Figma design file
2. Export updated tokens
3. Replace `tokens.json`
4. Run `npm run tokens:build`
5. Verify generated CSS
6. Test in Storybook
7. Commit both `tokens.json` and generated CSS files

## Resources

- [Style Dictionary Documentation](https://amzn.github.io/style-dictionary/)
- [Bootstrap 5.3 CSS Variables](https://getbootstrap.com/docs/5.3/customize/css-variables/)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)
