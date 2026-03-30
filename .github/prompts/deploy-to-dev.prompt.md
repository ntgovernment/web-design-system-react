---
description: "Stage all changes, bump the semantic version in package.json, generate a conventional commit message from recent changes, commit, and push to the dev branch."
name: "Deploy to Dev"
agent: agent
tools: [run_in_terminal, read_file, replace_string_in_file]
---

Deploy the current working state to the `dev` branch. Work through each step in order without skipping.

## Step 1 — Stage all changes

```bash
git add .
```

Confirm with `git status` that all intended files are staged. If any unexpected files are staged (e.g. `dist/`, `node_modules/`, `.env`), unstage them before proceeding.

## Step 2 — Determine the semantic version bump

Read the current version from [package.json](../../package.json).

Inspect the staged diff to classify the change type:

```bash
git diff --cached --stat
git diff --cached -- package.json src/ scripts/ .github/
```

Apply **semver** rules:
- **patch** (`x.x.Z`) — bug fixes, docs updates, minor config tweaks, no API or behaviour changes
- **minor** (`x.Y.0`) — new features, new components, new exports, new dependencies that extend capability (e.g. adding `@ntgovernment/web-design-tokens`)
- **major** (`X.0.0`) — breaking changes: removed exports, renamed components, changed CSS variable names, dropped support

For the current session, the primary change was migrating local design tokens to an external dependency (`@ntgovernment/web-design-tokens`), which is a **minor** bump.

Calculate the new version string and update it in [package.json](../../package.json) using `replace_string_in_file`. Then stage the version change:

```bash
git add package.json
```

## Step 3 — Generate the commit message

Construct a [Conventional Commits](https://www.conventionalcommits.org/) message based on the staged changes.

**Format:**
```
<type>(<scope>): <short summary>

<body — bullet list of what changed, why, and any breaking notes>
```

**Rules:**
- `type` must be one of: `feat`, `fix`, `chore`, `refactor`, `docs`, `test`, `build`, `ci`
- `scope` should be the primary area affected (e.g. `tokens`, `build`, `deps`, `components`, `docs`)
- Summary line must be ≤ 72 characters, lowercase, no trailing period
- Body bullets should be concise and meaningful to a developer reading `git log`
- Prefix any removed items with `remove:` and any breaking changes with `BREAKING CHANGE:`

**Example for the token migration:**
```
feat(deps): migrate design tokens to @ntgovernment/web-design-tokens

- add @ntgovernment/web-design-tokens as a runtime dependency
- update all component CSS @import paths to use package export specifiers
- update build-theme-bundles.js to resolve token CSS from node_modules
- remove local design-tokens/ folder, build-tokens.js, validate-tokens.js
- remove generated src/themes/ CSS files (common, grid, typography, themes)
- remove style-dictionary devDependency
- add .npmrc scoping @ntgovernment to npm.pkg.github.com
```

## Step 4 — Commit

```bash
git commit -m "<type>(<scope>): <summary>" -m "<body>"
```

Use separate `-m` flags for the subject and body so the body is properly separated by a blank line.

## Step 5 — Push to dev

```bash
git push origin dev
```

Confirm the push succeeded. If it fails due to a non-fast-forward (remote has commits you don't have), run:

```bash
git pull --rebase origin dev
git push origin dev
```

Do **not** force-push unless the user explicitly confirms.

## Quality gate

Before pushing, verify the build still passes:

```bash
npm run build
```

If the build fails, fix the issue before committing. Do **not** push broken code.
