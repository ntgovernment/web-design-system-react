# SearchBar — Developer & Agent Guide

A compact, token-driven search input built on Bootstrap `input-group`. This guide is written for engineers and coding agents: it contains a clear API table, actionable examples, accessibility checklist, test checklist, and a machine-friendly JSON schema.

---

## Quick summary

- Purpose: single-line search input with two visual variants — `primary` (button addon) and `secondary` (trailing icon).
- Key behaviour: `onSearch` is invoked on the button click or when the user presses Enter.
- API shape: small and focused — no `size`, `disabled`, or `readOnly` props (manage those at form-wrapper level).

## Import

```tsx
import { SearchBar } from "@ntgovernment/web-design-system";
```

## API (props)

| Prop                     | Type                                                       | Default                | Description                                                                                                  |
| ------------------------ | ---------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| `variant`                | `"primary" \| "secondary"`                                 | `"primary"`            | Visual style — `primary` shows a button; `secondary` shows a trailing icon.                                  |
| `wrapperClassName`       | `string`                                                   | —                      | Optional wrapper CSS class for layout or token overrides.                                                    |
| `onSearch`               | `(value: string) => void`                                  | —                      | Called when the user triggers search (button click or Enter). Receives the input string.                     |
| `icon`                   | `string`                                                   | `"fa-light fa-search"` | FontAwesome class for the glyph.                                                                             |
| `searchButtonLabel`      | `string`                                                   | `"Run search"`         | `aria-label` used for the primary button.                                                                    |
| _(standard input attrs)_ | `placeholder, value, defaultValue, onChange, name, aria-*` | —                      | All other standard `input` attributes are accepted, except `disabled`/`readOnly` (these props were removed). |

Notes:

- `value` toggles controlled mode; otherwise `defaultValue` enables uncontrolled behavior.
- `disabled` and `readOnly` props were intentionally removed to keep the component API focused.

## Behaviours & edge cases

- Pressing Enter while focused triggers `onSearch` with the current input text.
- `onSearch` is only a notification — the component itself does not clear or mutate the value.
- `data-filled` attribute appears on the root when the input contains text (useful for visual tests).

## Data-attributes & classes (for CSS/automation)

- `class="input-group"` — preserved for Bootstrap compatibility.
- `class="form-control"` — used on the input for Bootstrap form styling.
- `data-variant="primary|secondary"` — used for variant-specific styling.
- `data-filled` — reflects whether the input has content for CSS/tests.

## Design tokens / CSS variables used

- --clr-bg-default
- --clr-bg-shade-alt
- --clr-bg-accent
- --clr-bg-accent-alt
- --clr-action-pressed
- --clr-border-subtle
- --clr-border-strong-02
- --clr-focus-focus (fallback focus color)
- --clr-text-default
- --clr-text-muted
- --clr-text-inverse
- --sp-xs, --sp-sm, --sp-md, --sp-lg, --sp-xl, --sp-xxxl
- --type-font-default
- --type-desktop-body-default-size
- --type-body-default-lh
- --border-width-md

### Component-specific variables

- `--search-bar-radius` — border radius for the search bar container
- `--search-bar-focus-shadow` — focus ring shadow used on `:focus-within`

Theme-specific overrides are defined in `SearchBar-ntg.css` and `SearchBar-central.css`.

## Bootstrap integration (Input Group)

The SearchBar is built on Bootstrap input groups and maps token values to Bootstrap defaults:

- Input uses `.form-control` (Bootstrap form control).
- Wrapper uses `.input-group` for layout.
- Primary variant uses a `.btn` button addon.
- Secondary variant uses `.input-group-text` for the trailing icon.

### Bootstrap Sass variables (reference)

From Bootstrap 5.3 input-group docs:

- `$input-group-addon-padding-y`
- `$input-group-addon-padding-x`
- `$input-group-addon-font-weight`
- `$input-group-addon-color`
- `$input-group-addon-bg`
- `$input-group-addon-border-color`

SearchBar maps these concepts to design tokens (spacing, color, border) rather than overriding Sass directly.

## Focus and border-radius (theme-specific)

- **Focus**: The component applies `:focus-within` on the input group using `--search-bar-focus-shadow`, which is theme-specific:
  - NTG: `--shadow-focus-ntg`
  - Central: `--shadow-focus-central`
- **Border radius**: Uses `--search-bar-radius` mapped to theme button radius tokens.

## Accessibility checklist

- Provide `aria-label` or `aria-labelledby` on the input when there is no visible label.
- Search button uses `aria-label` (`searchButtonLabel`) to describe the action.
- Ensure color contrast for icon/button meets WCAG standards.

## Storybook (what to verify visually)

Stories: `Primary`, `Secondary`, `WithOnSearch`, `Playground`.

- Verify focus ring and radius under both NTG and Central themes.
- Verify primary icon color resolves to `--clr-text-inverse`.
- Validate keyboard behaviour and `onSearch` in the `WithOnSearch` story.

## Implementation notes (for maintainers)

- The component overrides Bootstrap input-group styles using design tokens.
- Input focus styles are suppressed on the input itself; focus ring is applied to the group for a unified outline.
- Theme overrides define `--search-bar-radius` and `--search-bar-focus-shadow` at `:root`.
- Keep icons as `fa-light` for visual consistency.
- Prefer tokens over raw values. Only introduce raw values when no token exists.

## Example usage

### Primary (CTA search)

```tsx
<SearchBar placeholder="Search" onSearch={(value) => console.log(value)} />
```

### Secondary (inline filter)

```tsx
<SearchBar placeholder="Search" variant="secondary" />
```

### Controlled

```tsx
const [query, setQuery] = useState("");

<SearchBar
  placeholder="Search by headline or date"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  onSearch={(value) => console.log("Searching for:", value)}
/>;
```

## For coding agents (machine-friendly schema)

- Component: `SearchBar`
- Source: `src/components/SearchBar/SearchBar.tsx`
- Primary classes: `input-group`, `form-control`, `btn`, `input-group-text`
- Theme variables: `--search-bar-radius`, `--search-bar-focus-shadow`

Machine-friendly props schema (JSON):

```json
{
  "component": "SearchBar",
  "props": {
    "variant": {
      "type": "string",
      "enum": ["primary", "secondary"],
      "default": "primary"
    },
    "onSearch": { "type": "function" },
    "icon": { "type": "string", "default": "fa-light fa-search" },
    "searchButtonLabel": { "type": "string", "default": "Run search" }
  },
  "dataAttributes": ["data-variant", "data-filled"]
}
```

Agent instructions:

- Do not generate `disabled`, `readOnly`, or `size` props — they were removed.
- Prefer `aria-label` when the input has no visible label.
- Use `onSearch` for behavioural tests (Enter key and button click).

## Testing guidance

- Verify `onSearch` fires on button click and Enter key.
- Confirm `aria-label` is present on the button in the primary variant.
- Confirm focus ring applies to the input group, not the input element.
- Validate `data-filled` toggles with controlled and uncontrolled input.
- Check both themes: border radius and focus shadow tokens apply.

---

Component source: `src/components/SearchBar/SearchBar.tsx`
