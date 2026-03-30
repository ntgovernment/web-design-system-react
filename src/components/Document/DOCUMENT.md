# Document Component

A component for presenting downloadable or viewable files with clear metadata and file type icons.

## Overview

The Document component makes attachments easy to find and understand in content-heavy pages. It surfaces a descriptive file name, a file type icon, metadata (type and size), and an optional description.

## Usage

Use this component to present documents without burying links in long blocks of text. It helps users quickly identify what they will download and how large the file is.

**Best for:**

- Landing pages and content pages
- Page content areas where attachments should stand out
- Lists of 1-3 documents (use a document variant of topic listing for longer lists)

## How to Use

- Always use a descriptive file name.
- Always include metadata (file type and file size).
- Add a short optional description when extra context helps.

## How Not to Use

- Avoid vague file names like "Document" or "File".
- Do not hide files inside paragraphs as inline links.

## Anatomy

1. File type icon (Word, PDF, Excel, PowerPoint)
2. Document title (link)
3. Metadata (file type and size)
4. Optional description

## Props

| Prop          | Type                                                             | Required | Description                                   |
| ------------- | ---------------------------------------------------------------- | -------- | --------------------------------------------- | ------ |
| `title`       | `string`                                                         | Yes      | Display name shown as the link text.          |
| `href`        | `string`                                                         | Yes      | URL to download or view the document.         |
| `fileType`    | `"docx" \| "doc" \| "pdf" \| "xlsx" \| "xls" \| "pptx" \| "ppt"` | Yes      | File type for icon and metadata label.        |
| `fileSize`    | `string`                                                         | Yes      | File size label (e.g., "182 KB").             |
| `description` | `string`                                                         | No       | Optional description text below the metadata. |
| `metadata`    | `string`                                                         | No       | Override for metadata line. Defaults to `TYPE | SIZE`. |
| `ariaLabel`   | `string`                                                         | No       | Accessibility label for the title link.       |
| `target`      | `string`                                                         | No       | Link target (use with care).                  |
| `rel`         | `string`                                                         | No       | Link rel attribute.                           |
| `download`    | `boolean`                                                        | No       | Adds the download attribute to the link.      |

## File Type Icons

The component automatically maps file types to FontAwesome icons:

- Word: `doc`, `docx` → `fa-light fa-file-word`
- PDF: `pdf` → `fa-light fa-file-pdf`
- Excel: `xls`, `xlsx` → `fa-light fa-file-excel`
- PowerPoint: `ppt`, `pptx` → `fa-light fa-file-powerpoint`

## Examples

### Basic Document

```tsx
import { Document } from "@ntgovernment/web-design-system";

<Document
  title="Emergency management plan template"
  href="/documents/emergency-management-plan.docx"
  fileType="docx"
  fileSize="182 KB"
/>;
```

### With Description

```tsx
<Document
  title="Public consultation guide"
  href="/documents/public-consultation-guide.pdf"
  fileType="pdf"
  fileSize="946 KB"
  description="Guidance for community consultation sessions and reporting."
/>
```

### Open in a New Tab

```tsx
<Document
  title="Strategic planning briefing"
  href="/documents/strategic-planning-briefing.pptx"
  fileType="pptx"
  fileSize="4.8 MB"
  target="_blank"
  rel="noreferrer"
/>
```

## Accessibility

- The file name is a standard link, providing familiar keyboard and screen reader behavior.
- Use `ariaLabel` if the visible title does not fully describe the document.
- Focus styles use theme tokens and are applied via `:focus-within` on the component wrapper.

## Typography

- Title uses the bold link typography tokens (`--type-link-default-bold-*`).
- Metadata and description use the small body typography tokens (`--type-body-sm-*`).
- Font family uses the theme default (`--type-font-default`), which maps to Lato (NTG) or Roboto (Central).

## Theming and Tokens

The component relies on semantic tokens for colors and spacing, and theme-specific tokens for focus outlines and border radii:

- Background shade: `--clr-bg-shade`
- Link colors: `--clr-link-default`, `--clr-link-hover`, `--clr-link-visited`
- Text colors: `--clr-text-default`, `--clr-text-muted`
- Focus outline: `--shadow-focus-ntg` and `--shadow-focus-central`
- Border radius: `--ntg-radii-sm` and `--central-radii-sm`

Theme overrides are defined in:

- `Document-ntg.css`
- `Document-central.css`

## Storybook Stories

- Default
- Without Description
- All File Types
- NTG Theme
- Central Theme

## HTML API

Example endpoints when Storybook is running:

```
GET http://localhost:6006/api/html/Document/Default
GET http://localhost:6006/api/html/Document/AllFileTypes
```

## File Structure

```
src/components/Document/
  Document.tsx
  Document.css
  Document-ntg.css
  Document-central.css
  Document.stories.tsx
  DOCUMENT.md
  index.ts
```

## Developer Notes

This section consolidates everything a developer or automation agent needs to implement, test, extend, or generate the `Document` component.

### DOM (structure & classnames)

- Root: `div.document` — component wrapper
- Header row: `div.document__header` — contains the icon + meta
- Icon container: `div.document__icon-wrapper`
- Icon inner: `div.document__icon` (FontAwesome `<i>` rendered by the shared `Icon` component)
- Meta column: `div.document__meta` (contains title + metadata)
- Title link: `a.document__title` — interactive element, keyboard-focusable
- Metadata: `div.document__info`
- Optional description: `div.document__description`

Selectors above are stable — prefer them in unit tests and visual regression suites.

### Tokens & CSS variables (what to change)

- Spacing: `--sp-xs` (8px) — gap between icon and meta; `--sp-xxxl` (48px) — icon container
- Icon sizing: `.document__icon i` uses `--type-heading-h4-size` (adjust typography tokens to change icon size)
- Colors: `--clr-link-default`, `--clr-link-hover`, `--clr-text-muted`, `--clr-bg-shade`
- Focus visuals: `--clr-focus-focus` (background), `--clr-border-strong-01` (focus bottom border), `--shadow-focus-ntg` / `--shadow-focus-central`
- Radii: `--radii-sm`, theme overrides `--ntg-radii-sm`, `--central-radii-sm`

Change tokens in `@ntgovernment/web-design-tokens` and bump `@ntgovernment/web-design-tokens` in `package.json`, then run `npm install && npm run build` to regenerate theme files.

### Theming

- Theme-specific overrides live in `Document-ntg.css` and `Document-central.css`.
- Storybook dynamically loads the correct theme file — add token-safe overrides there when required.

### File-type mapping (where to add new icons)

- Mapping is in `src/components/Document/Document.tsx` in the `fileTypeConfig` object.
- To add a new extension:
  1. Add the extension key and `{ label, icon }` pair to `fileTypeConfig` (use FontAwesome class names).
  2. Add a Storybook story demonstrating the new type.
  3. Update `DOCUMENT.md` `File Type Icons` section.
  4. Add unit + visual tests.

### Accessibility checklist (required)

- Title is a real `a` element — keyboard and screen reader supported by default.
- Ensure `ariaLabel` is used if the link text is not fully descriptive.
- Focus state: visible background + 4px bottom border (meets target contrast when using theme tokens).
- Metadata and description are plain text nodes (screen readers will read them in document order).
- Recommended automated checks: Axe (`a11y` Storybook addon), keyboard tab order, link semantics.

### Testing guidance (examples)

- Unit test (Vitest + React Testing Library):

```ts
import { render, screen } from '@testing-library/react';
import { Document } from './Document';

test('renders title, icon and metadata', () => {
  render(
    <Document
      title="Test PDF"
      href="/a.pdf"
      fileType="pdf"
      fileSize="946 KB"
    />,
  );

  expect(screen.getByRole('link', { name: /Test PDF/i })).toBeInTheDocument();
  expect(screen.getByText(/PDF \| 946 KB/)).toBeInTheDocument();
  // icon presence (FontAwesome class)
  expect(document.querySelector('.fa-file-pdf')).toBeTruthy();
});
```

- Accessibility test (axe-core): assert zero violations for interactive stories.
- Visual regression: capture `.document` region for hover/focus/normal states.

### Storybook & docs

- Stories live in `Document.stories.tsx` — add variants there for new file types and edge cases (long title, missing description, metadata override).
- Story names used by the docs UI: `Default`, `PDF`, `XLSX`, `PPTX`, `AllFileTypes`, `NTGTheme`, `CentralTheme`.
- HTML API endpoints (Storybook static) are available under `/api/html/Document/*`.

### HTML (static) example — for non-React integrations

```html
<div class="document">
  <div class="document__header d-flex gap-2">
    <div class="document__icon-wrapper" aria-hidden="true">
      <div class="document__icon"><i class="fa-light fa-file-pdf"></i></div>
    </div>
    <div class="document__meta">
      <a class="document__title" href="/a.pdf">Test PDF</a>
      <div class="document__info">PDF | 946 KB</div>
    </div>
  </div>
  <div class="document__description">Optional description</div>
</div>
```

### Edge-cases & QA checklist

- Very long title → wraps correctly and remains keyboard-focusable.
- Missing `fileSize` but `metadata` provided (use `metadata` to override).
- Target `_blank` + missing `rel` → `rel` defaults to `noreferrer` (handled in component).
- Theme switch → focus outline and colors come from tokens.

### Maintenance notes (for contributors & coding agents)

- When adding a new file type, update `fileTypeConfig`, `Document.stories.tsx`, and `DOCUMENT.md`.
- Keep all usage guidance, token mappings, and accessibility notes inside this `DOCUMENT.md` — remove any duplicate how-to content elsewhere.
- Use the selectors listed above during test automation to avoid brittle attribute-based matches.

---

If you want, I can now remove any remaining duplicate references (none found) and run the library + Storybook builds you requested.
