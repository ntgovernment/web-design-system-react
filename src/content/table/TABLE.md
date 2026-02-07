# Tables (Bootstrap-aligned)

This content module provides Bootstrap table examples aligned with design tokens and Figma table styles. It is intended for documentation, Storybook examples, and demo usage rather than a production-ready data table component.

## Usage

Use the `TableContent` component to render example tables with Bootstrap variants.

```tsx
import { TableContent } from "../content/table/Table";

const columns = ["Service", "Owner", "Status", "Last updated"];
const rows = [
  ["Grants Portal", "Digital NT", "Active", "2 Feb 2026"],
  ["Vehicle Rego", "Transport", "Planned", "28 Jan 2026"],
];

<TableContent
  caption="Service status"
  columns={columns}
  rows={rows}
  bordered={true}
  responsive="md"
/>;
```

## Props

- `caption`: Optional table caption. Empty string hides the caption.
- `columns`: Array of header labels.
- `rows`: 2D array of cell strings. Each row should align with `columns` length.
- `bordered`: Adds `.table-bordered`.
- `borderless`: Adds `.table-borderless`.
- `striped`: Adds `.table-striped`.
- `hover`: Adds `.table-hover`.
- `size`: `"md" | "sm"`, maps to `.table-sm` when `"sm"`.
- `responsive`: Wrapper size for Bootstrap responsive tables.
  - `"always"` maps to `.table-responsive`
  - `"sm" | "md" | "lg" | "xl" | "xxl"` maps to `.table-responsive-*`
  - `"none"` renders no wrapper
- `variant`: Contextual table variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

## Styling and Tokens

`Table.css` maps Bootstrap CSS variables to design tokens:

- Cell padding: `--sp-xs` (x), `--sp-md` (y)
- Header text: `--type-uppercase-default-*`
- Body text: `--type-body-default-*`
- Header border: `--clr-border-strong-03`
- Row borders: `--clr-border-subtle`
- Zebra background: `--clr-bg-shade`
- Base background: `--clr-bg-default`
- Hover background: `--clr-bg-shade-alt`

These align with the Figma table styling and stay theme-aware.

## Accessibility

- Use proper table semantics (`<thead>`, `<tbody>`, `<th scope="col">`).
- Provide a meaningful caption when the table conveys important information.
- Avoid using color as the only indicator for status or meaning.

## Variants in Storybook

Storybook includes examples for:

- Default (striped + hover)
- Bordered and borderless
- Small (`.table-sm`)
- Responsive wrappers (`.table-responsive-md`)
- Contextual variants (e.g., `table-primary`)
