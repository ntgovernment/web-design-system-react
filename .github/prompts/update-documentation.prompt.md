---
description: "Update comprehensive documentation for @ntgovernment/web-design-system — README, component docs, inline comments, and CHANGELOG — so it is accurate, complete, and useful to both developers and coding agents."
name: "Update Documentation"
agent: agent
tools: [read_file, replace_string_in_file, multi_replace_string_in_file, semantic_search, grep_search, run_in_terminal, file_search]
---

Update the documentation for this repository to be comprehensive, accurate, and agent-friendly. Work through each area below in order.

## 1. README.md

Review [README.md](../../README.md) against the current state of [package.json](../../package.json) and update:

- **Installation** — confirm the registry requirement mentions `.npmrc` scoping `@ntgovernment` to `https://npm.pkg.github.com` (required for `@ntgovernment/web-design-tokens` dependency)
- **`@ntgovernment/web-design-tokens` dependency** — document that design tokens are now an external dependency; link to the tokens package for customisation
- **CSS import paths** — verify every `@import` and `<link>` example uses the correct export specifiers from `@ntgovernment/web-design-tokens` (e.g. `@ntgovernment/web-design-tokens/css/theme-ntg`) — never `src/themes/`
- **Distribution file list** — reconcile with what `npm run build` actually produces in `dist/` (run `ls dist/` to check)
- **Component listing** — verify the component table / list matches the 34 components exported from [src/index.ts](../../src/index.ts)
- **Scripts table** — ensure documented scripts match `scripts` in [package.json](../../package.json); remove any reference to `tokens:build` or `tokens:validate` (deleted)
- Add a **Development** section covering: `npm run dev`, `npm run storybook`, `npm test`
- Add a **Architecture** section describing the token dependency, component CSS, and theme-bundle build

## 2. Component documentation files

For each component under `src/components/*/`, check the corresponding `*.md` file:
- Any path like `src/themes/theme-ntg.css` → update to `@ntgovernment/web-design-tokens/css/theme-ntg`
- Any path like `src/themes/common.css` → update to `@ntgovernment/web-design-tokens/css/common`
- Any import example that references a now-deleted local token file — fix or remove it
- Run `grep -r "src/themes/" src/components/ --include="*.md"` to find all stale references

## 3. Inline comments in scripts/

Review and update header comments and inline docs in:
- [scripts/build-dist.js](../../scripts/build-dist.js) — ensure the file header accurately describes the full build pipeline (tokens from `@ntgovernment/web-design-tokens`, not local generation)
- [scripts/build-theme-bundles.js](../../scripts/build-theme-bundles.js) — verify section comments are correct; confirm the `tokensCssDir` constant usage is explained
- [scripts/prepare-gfb-deploy.js](../../scripts/prepare-gfb-deploy.js) — check the file header is still accurate
- [scripts/validate-css.js](../../scripts/validate-css.js) — check the file header is still accurate

## 4. CHANGELOG.md

Append a new entry to [CHANGELOG.md](../../CHANGELOG.md) for the current unreleased changes. Follow the Keep a Changelog format (`## [Unreleased]` header), covering:
- `@ntgovernment/web-design-tokens` added as an external dependency (replaces local token generation)
- Removed: `design-tokens/` folder, `scripts/build-tokens.js`, `scripts/validate-tokens.js`
- Removed: local `src/themes/` generated CSS files (base-variables, common, grid, theme-ntg, theme-central, typography, typography-literals, typography-ntg, typography-central)
- Removed: `style-dictionary` devDependency
- Updated: all component CSS `@import` paths to use package export specifiers
- Added: `.npmrc` for GitHub Packages registry scoping

## 5. package.json metadata

Check [package.json](../../package.json):
- `description` field is still accurate
- `keywords` array includes relevant terms (design-tokens, css-variables, theme)
- All `exports` paths resolve to real files — run `npm run build` or `ls dist/` to verify

## Quality bar

After editing, validate:
- `grep -r "src/themes/" src/ --include="*.md"` returns zero CSS import examples (doc links to `THEMES.md` are OK)
- `grep -r "design-tokens/tokens.json" .` returns zero results
- `grep -r "tokens:build\|tokens:validate" .` returns zero results
- Every code example in README.md is syntactically valid
- Run `npm run build` — must complete with zero errors or warnings
