# Tables

> Merged documentation: this file now contains the Quick Reference, Usage guidance, API details, styling notes, and accessibility recommendations. All Table-specific docs have been consolidated here for developers and code‑generating agents.

Table content lays information out in a grid to help users scan, analyze, and compare. This module uses Bootstrap table markup with design token overrides to align to the NTG design system.

## Usage

A table allows users to scan information in rows and columns. Present content in a simple and logical way with clear headings, ordered by hierarchy or alphabetically. This component uses zebra stripes to differentiate rows for easier scanning. On smaller screens, tables can stack vertically when `stacked` is enabled.

## How to use

- Use for complex content and data sets with consistent structure.
- Make the table self-explanatory because some users skip straight to the table.
- Order columns by importance.
- Use a simplified variant (with or without zebra stripes) to show small, structured content like contact details.
- Optional title and subtitle are supported; do not use a subtitle by itself.
- Specify which column or row is the header. Headers are styled and read differently by screen readers.
- Use an en dash (–) for missing values. Do not leave cells blank.
- Align text content to the left.
- Left-align nominal numbers like post codes, phone numbers, and IP addresses.
- Right-align numeric content like financial figures or file sizes.
- Column headers should match the alignment of their column content.
- All content should be vertically centered within each cell.

## How not to use

- Do not use for long-form content. Cells should be brief and scannable.
- Consider a chart or graph if it is a better visualization.
- Do not nest tables inside tables.
- Avoid merged or split cells.
- Avoid too many columns. If content is squashed, split into smaller tables.
- Do not remove zebra stripes except for very limited cases (like simplified tables).
- Do not center-align content.
- Do not create a table for one or two items.
- Do not use tables for page layout; use components such as cards instead.

## Variants

- **Standard table**: Column headers with zebra stripes for scanning.
- **Title and subtitle**: Optional heading block above the table.
- **Headers with filters**: Sort buttons in headers (visual and focusable; provide sorting logic via `onSort`).
- **Bold first column**: Use when the first column is the primary anchor for each row.
- **Simplified**: No header and no zebra stripes for small sets of structured info.
- **Responsive stacked**: On smaller screens, rows stack vertically when `stacked` is enabled.

## Component API

```tsx
import { TableContent } from "../components/Table/Table";

const columns = ["Service", "Owner", "Status", "Last updated"];
const rows = [
  ["Grants Portal", "Digital NT", "Active", "2 Feb 2026"],
  ["Vehicle Rego", "Transport", "Planned", "28 Jan 2026"],
];

<TableContent
  title="Service status overview"
  subtitle="Latest updates for digital services across NT Government."
  caption="Service status overview"
  columns={columns}
  rows={rows}
  striped
  hover
  sortable
  onSort={(columnIndex, direction) => {
    console.log(columnIndex, direction);
  }}
/>;
```

### Props

- `title`: Optional heading above the table.
- `subtitle`: Optional subheading below `title`.
- `caption`: Optional table caption. Use an empty string to hide it.
- `columns`: Column header labels. Also used for stacked labels.
- `rows`: 2D array of row data. Each row should align with `columns` length.
- `showHeader`: Show or hide the table header row.
- `sortable`: Shows ascending/descending sort buttons in headers.
- `onSort`: Callback for sort buttons with `(columnIndex, direction)`.
- `boldFirstColumn`: Renders the first column as row headers and bold text.
- `stacked`: Enables stacked layout on smaller screens.
- `bordered`: Adds `.table-bordered`.
- `borderless`: Adds `.table-borderless`.
- `striped`: Adds `.table-striped`.
- `hover`: Adds `.table-hover`.
- `size`: `"md" | "sm"` (adds `.table-sm` when `"sm"`).
- `responsive`: Wrapper size for responsive tables.
  - `"always"` maps to `.table-responsive`
  - `"sm" | "md" | "lg" | "xl" | "xxl"` maps to `.table-responsive-*`
  - `"none"` renders no responsive wrapper
- `variant`: Contextual Bootstrap variants (e.g., `primary`, `secondary`, `success`).

## Responsive behavior

- When `stacked` is enabled, the table switches to a stacked layout at mobile breakpoints.
- Each cell displays its column label using `data-label` for clarity.
- Use `responsive="always"` or a breakpoint-specific responsive wrapper for horizontal scrolling when needed.

## Sorting controls

- Sort arrows are focusable buttons in column headers.
- Provide sorting logic using `onSort`.
- Use the current column label to describe sorting in `aria-label`.

## Styling and tokens

`Table.css` maps Bootstrap table custom properties to NTG design tokens. These overrides ensure tables inherit theme colors, spacing, and typography.

Key overrides:

- `--bs-table-color`: `--clr-text-default`
- `--bs-table-bg`: `--clr-bg-default`
- `--bs-table-border-color`: `--clr-border-subtle`
- `--bs-table-border-width`: `--border-width-md`
- `--bs-table-striped-bg`: `--clr-bg-shade`
- `--bs-table-hover-bg`: `--clr-bg-shade-alt`
- `--bs-table-active-bg`: `--clr-bg-shade-alt`
- `--bs-table-cell-padding-x`: `--sp-xs`
- `--bs-table-cell-padding-y`: `--sp-md`
- `--bs-table-caption-color`: `--clr-text-muted`
- Header typography: `--type-uppercase-default-*`
- Body typography: `--type-body-default-*`

Theme-specific overrides (loaded via `Table-ntg.css` and `Table-central.css`):

- `--table-radius`: theme-specific radius token (`--ntg-radii-sm` or `--central-radii-sm`).
- `--table-focus-shadow`: theme-specific focus outline (`--shadow-focus-ntg` or `--shadow-focus-central`).

## Accessibility

- Use proper table semantics (`<thead>`, `<tbody>`, `<th scope="col">`).
- Use row headers (`<th scope="row">`) when `boldFirstColumn` is enabled.
- Provide a meaningful `caption` when the table conveys important information.
- Do not use color alone to convey meaning.

## Themes

The NTG design system supports NT.GOV.AU and NTG Central themes. Both themes use the same table guidance but apply their own radius and focus tokens.

## Bootstrap reference

Bootstrap tables are opt-in and built on custom properties. The component relies on Bootstrap classes like `.table`, `.table-striped`, `.table-hover`, `.table-borderless`, and `.table-responsive-*`. For a full Bootstrap reference, see the Bootstrap tables documentation for v5.3.
