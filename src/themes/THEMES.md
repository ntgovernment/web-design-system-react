# Theme CSS Files

⚠️ **DO NOT EDIT THESE FILES MANUALLY** ⚠️

The CSS files in this directory are automatically generated from design tokens.

## Generated Files

- `theme-ntg.css` - NT.GOV.AU theme (auto-generated)
- `theme-central.css` - NTG Central theme (auto-generated)

## Making Changes

To update theme CSS:

1. **Update design tokens**: Edit `design-tokens/tokens.json`
2. **Rebuild CSS**: Run `npm run tokens:build`
3. **Verify changes**: Check Storybook or run `npm run dev`
4. **Commit both**: Commit both `tokens.json` and generated CSS files

## Build Process

The build process automatically generates theme CSS from tokens:

```bash
npm run tokens:validate  # Validate token structure
npm run tokens:build     # Generate CSS from tokens
npm run build            # Build library (includes token generation)
```

## Token Workflow

```
Figma Design
    ↓ (export)
design-tokens/tokens.json
    ↓ (Style Dictionary)
src/themes/*.css
    ↓ (Vite build)
dist/style.css
```

## CSS Variable Structure

### NT.GOV.AU Theme (`--ntg-*` prefix)

- Colors: `--ntg-primary`, `--ntg-secondary`, etc.
- Typography: `--ntg-font-family-sans-serif`, etc.
- Spacing: `--ntg-spacer-1` through `--ntg-spacer-5`
- Borders: `--ntg-border-radius`, `--ntg-border-width`, etc.
- Shadows: `--ntg-box-shadow`, etc.

### NTG Central Theme (`--central-*` prefix)

- Same structure with `--central-*` prefix

### Bootstrap Integration

Both themes map to Bootstrap 5.3 variables:

```css
--bs-primary: var(--ntg-primary);
--bs-body-font-family: var(--ntg-font-family-sans-serif);
```

## Documentation

For more information about the design token system:

- See `design-tokens/DESIGN-TOKENS.md`
- View Style Dictionary config: `design-tokens/config/style-dictionary.config.js`
- Read build script: `scripts/build-tokens.js`

## Troubleshooting

**CSS not updating after token changes?**

1. Run `npm run tokens:build`
2. Clear browser cache
3. Restart Vite dev server

**Build errors?**

1. Run `npm run tokens:validate` to check token structure
2. Check `design-tokens/tokens.json` for syntax errors
3. Review console output for specific error messages
