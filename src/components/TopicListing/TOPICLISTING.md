# Topic Listing Component

A flexible component that groups related links or documents under a single topic heading.

## Overview

Topic listings help users scan and navigate related content quickly. Use this component to group links, topics, or documents under a heading with supporting text and an optional secondary CTA.

This component is currently only available in the external NTG environment, not NTG Central.

## Usage

A topic listing helps organise relevant links, documents and other information in both landing and content pages.

### How to Use

- Topic and link variants should only be used on landing pages.
- Document variants can be used on both landing and content pages.
- Add an optional secondary CTA to topic and link variants.
- All variants are responsive and will adjust to long heading or document titles.
- All links and topic headers should be children pages of the main parent link in the component. Do not link to grandchildren pages or other pages not in that section of the site.
- Make sure link, document or topic names are concise and make it clear what the user will find if they click on it.

### How Not to Use

- For the topic variant, do not use more than 4 subheadings or topics.
- There is no limit on how many links or documents you can add, but the more there are, the more cognitive load for the user. Try to limit to 6-8 max.
- Since it condenses a lot of information, do not overuse this component. Do not use more than one document variant on a page, and limit to 2 or 3 of the topics or links variants.
- Do not use this component as the only way for a user to navigate onwards from a landing page. Consider using other navigational components like cards and banners.

## Variants

### Topics

Also known as topic links, this variant groups up to four children pages of a parent page, so a user can easily navigate within a relevant section of content.

This variant includes:

- A parent link with a short description
- An optional icon next to the parent link
- An optional secondary CTA button under the parent link
- Up to four children links with a short description each

### Links

Also known as a link listing, this variant lists dot pointed text links together into an overarching category, making it easier for users to find what they need.

This variant includes:

- A heading that may or may not be a link
- An optional icon next to the heading
- An optional short description under the heading
- An optional secondary CTA button under the heading
- A minimum of 4 dot pointed text links

### Documents

This variant groups documents and their meta data in a section with a description. This is a good way to make documents in a content page easily accessible, instead of just having them within text as inline links.

The variant includes:

- Section title. This cannot be a link and does not have an option to have an icon.
- A short description under the section title.
- At least 2 documents. The component auto-fills in the meta data and the correct icon.
- Documents render in two columns on larger screens and stack into one column on smaller screens.

## Props

| Prop           | Type                                     | Required | Description                                          |
| -------------- | ---------------------------------------- | -------- | ---------------------------------------------------- |
| `variant`      | `"topics" \| "links" \| "documents"`     | No       | Component variant (default: `topics`).               |
| `title`        | `string`                                 | Yes      | Section heading text.                                |
| `titleHref`    | `string`                                 | No       | Optional link for the title (ignored for documents). |
| `description`  | `string`                                 | No       | Optional supporting description.                     |
| `icon`         | `string`                                 | No       | Optional FontAwesome icon class for topics/links.    |
| `ctaLabel`     | `string`                                 | No       | Optional secondary CTA label.                        |
| `ctaHref`      | `string`                                 | No       | Optional CTA href (renders as link).                 |
| `ctaOnClick`   | `() => void`                             | No       | Optional CTA handler (renders Button).               |
| `ctaVariant`   | `"primary" \| "secondary" \| "tertiary"` | No       | Button variant (default: `secondary`).               |
| `links`        | `TopicListingLink[]`                     | No       | Link items for topics/links variants.                |
| `documents`    | `DocumentProps[]`                        | No       | Document items for documents variant.                |
| `linksColumns` | `1 \| 2`                                 | No       | Columns for links variant (default: 2).              |

### `TopicListingLink`

| Prop          | Type     | Required | Description                              |
| ------------- | -------- | -------- | ---------------------------------------- |
| `label`       | `string` | Yes      | Visible link label.                      |
| `href`        | `string` | Yes      | Link URL.                                |
| `description` | `string` | No       | Short description (topics variant only). |
| `ariaLabel`   | `string` | No       | Accessibility label for links.           |
| `target`      | `string` | No       | Optional target for links.               |
| `rel`         | `string` | No       | Optional rel attribute.                  |

## Examples

### Topics Variant

```tsx
import { TopicListing } from "@ntgovernment/web-design-system";

<TopicListing
  variant="topics"
  title="Family and community support"
  titleHref="/services/family"
  description="Navigate key services for families, carers, and community wellbeing across the Territory."
  icon="fa-light fa-family"
  ctaLabel="View all family services"
  ctaHref="/services/family"
  links={[
    {
      label: "Child care subsidies",
      href: "/services/family/child-care",
      description:
        "Find eligibility criteria, payment schedules, and how to apply.",
    },
    {
      label: "Support for carers",
      href: "/services/family/carers",
      description:
        "Access respite programs, allowances, and local support groups.",
    },
  ]}
/>;
```

### Links Variant

```tsx
<TopicListing
  variant="links"
  title="Planning and approvals"
  titleHref="/planning"
  description="Quick access to planning schemes, applications, and guidance for development approvals."
  ctaLabel="Start a planning application"
  ctaHref="/planning/apply"
  links={[
    { label: "Submit a development application", href: "/planning/apply" },
    { label: "Check planning zones", href: "/planning/zones" },
    { label: "Building approvals checklist", href: "/planning/checklist" },
    { label: "Heritage assessment guidance", href: "/planning/heritage" },
  ]}
/>
```

### Documents Variant

```tsx
<TopicListing
  variant="documents"
  title="Emergency management resources"
  description="Download templates and guidance to prepare your organisation for emergencies."
  documents={[
    {
      title: "Emergency management plan template",
      href: "/documents/emergency-management-plan.docx",
      fileType: "docx",
      fileSize: "182 KB",
      description:
        "Editable template for building an organisation-wide response plan.",
    },
    {
      title: "Business continuity checklist",
      href: "/documents/continuity-checklist.pdf",
      fileType: "pdf",
      fileSize: "946 KB",
      description:
        "Checklist to confirm critical services and recovery actions.",
    },
  ]}
/>
```

## Accessibility

- Uses semantic headings for section titles.
- Links are standard anchor elements for expected keyboard and screen reader support.
- Focus states use theme-specific focus shadow tokens and do not rely on color alone.
- Use `ariaLabel` when the visible link text does not fully describe the destination.

## Theming and Tokens

The component relies on semantic tokens for colour, spacing, typography and theme-specific tokens for focus outlines and border radii. Change tokens in `@ntgovernment/web-design-tokens` and bump `@ntgovernment/web-design-tokens` in `package.json`, then run `npm install && npm run build` to regenerate theme CSS.

Primary tokens used (component-level):

- Colours: `--clr-link-default`, `--clr-link-hover`, `--clr-text-default`, `--clr-text-muted`, `--clr-text-emphasis`, `--clr-bg-shade`
- Typography: `--type-heading-h4-*`, `--type-body-default-*`, `--type-body-sm-*`, `--type-link-default-*`
- Spacing: `--sp-xxs`, `--sp-xs`, `--sp-md`, `--sp-xxl`
- Focus / Outline: `--shadow-focus-ntg`, `--shadow-focus-central`, `--clr-focus-focus`
- Radii: `--ntg-radii-sm`, `--central-radii-sm`

Component-level CSS variables (in `TopicListing.css`):

- `--topic-listing-focus-shadow` → maps to theme shadow tokens
- `--topic-listing-focus-radius` → maps to theme radii
- `--topic-listing-link-rgb` / `--topic-listing-link-hover-rgb` → used to set `--bs-link-color-rgb`/`--bs-link-hover-color-rgb`

Theme overrides live in:

- `TopicListing-ntg.css`
- `TopicListing-central.css`

Bootstrap Link Utilities

This component uses Bootstrap 5.3 link utilities (`link-underline`, `link-offset-*`, `link-underline-opacity-*`) while overriding the underlying CSS variables with design tokens so underline, hover and opacity behaviours match the theme.

Key Bootstrap variables set by the component:

- `--bs-link-color`, `--bs-link-hover-color`
- `--bs-link-color-rgb`, `--bs-link-hover-color-rgb`
- `--bs-link-decoration`

These keep the component fully compatible with Bootstrap helpers while using token-driven values.

Storybook Stories

- `Components/TopicListing` → `Topics`, `Links`, `Documents`

Story IDs (used by HTML/API):

- `components-topiclisting--topics`
- `components-topiclisting--links`
- `components-topiclisting--documents`

HTML API endpoints (Storybook running):

```
http://localhost:6006/api/html?storyId=components-topiclisting--documents
```

File Structure

```
src/components/TopicListing/
  TopicListing.tsx
  TopicListing.css
  TopicListing-ntg.css
  TopicListing-central.css
  TopicListing.stories.tsx
  TOPICLISTING.md
  index.ts
```

Developer / Coding-agent Notes

DOM structure & stable selectors (use these in tests/automation):

- `.topic-listing` — root
- `.topic-listing__layout` — two-column layout (content + items)
- `.topic-listing__content` — left column (title, description, CTA)
- `.topic-listing__items` — right column (links/topics/documents)
- `.topic-listing__list-item` — list row (links variant)
- `.topic-listing__bullet` — decorative bullet for list rows
- `.topic-listing__topic-item` — topic with optional description
- `.topic-listing__documents` — documents grid (each document is a `Document` component)
- `a.topic-listing__link`, `a.topic-listing__topic-link`, `a.topic-listing__title-link` — anchor selectors

Testing guidance (recommended automated checks):

- Unit tests (Vitest + React Testing Library): assert title, description, link count, document metadata and ARIA attributes.
- Accessibility (axe): no violations for `Topics`, `Links`, `Documents` stories; check keyboard focus order and visible focus rings.
- Visual regression: capture `.topic-listing` for normal / hover / focus / mobile states.

Example unit test (suggested):

```ts
import { render, screen } from '@testing-library/react';
import { TopicListing } from './TopicListing';

test('renders documents variant in two columns with correct metadata', () => {
  render(<TopicListing variant="documents" title="Docs" documents={[{title:'One', href:'#', fileType:'pdf', fileSize:'100 KB'},{title:'Two', href:'#', fileType:'docx', fileSize:'200 KB'}]} />);
  expect(screen.getByRole('heading', { name: /Docs/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link')).toHaveLength(2); // title links inside Document
});
```

Accessibility checklist

- All interactive items must be anchor elements (`<a>`).
- Focus outlines must be visible and token-driven (NTG/Central focus shadows).
- Link text must be descriptive; use `ariaLabel` when needed.
- Documents must include file type & size metadata.

Maintenance & extension

- Add new document types by updating `Document` `fileTypeConfig` and stories in `src/components/Document/`.
- Update token values in `@ntgovernment/web-design-tokens` and run:
  - `npm run build`
- Regenerate Storybook catalog when adding stories: `npm run generate-story-data` (run automatically by `npm run storybook` / `build-storybook`).
- Export: Confirm `src/index.ts` exports `TopicListing` (already wired).

When to update this doc (quick checklist for contributors)

- Adding or removing public props → update Props table + examples
- Changing DOM structure or class names → update "DOM structure & stable selectors"
- Changing visual tokens (colour, spacing, focus) → update "Theming and Tokens" and add Storybook theme examples
- Adding behaviour (analytics, tracking) → add usage and testing guidance

---

If you need I can also add concrete unit tests and Storybook snapshots for the `Documents` layout.
