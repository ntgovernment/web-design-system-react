# Input Field

Developer guide for the `Input` component — concise API, implementation notes, token list, accessibility checklist and Storybook/testing guidance.

---

## Purpose

Single-line text input used for short user-entered values (email, name, postcode, etc.). The component preserves Bootstrap compatibility (`form-control` class) while being token-driven and theme-aware.

## Import

```tsx
import { Input } from "@ntgovernment/web-design-system";
```

## Component API (props)

- `label?: string` — visible label shown above the field.
- `helperText?: string` — small helper/hint text under the label.
- `requiredIndicator?: string` — text to display for required fields (default: `(Required)`).
- `validationState?: "success" | "error"` — visual validation state.
- `validationMessage?: string` — message shown when `validationState` is set.
- `size?: "sm" | "lg"` — Bootstrap sizing (`form-control-sm` / `form-control-lg`).
- `wrapperClassName?: string` — optional wrapper CSS class.
- All standard `input` attributes (`placeholder`, `type`, `value`, `defaultValue`, `onChange`, `disabled`, `readOnly`, etc.) are supported.

Note: `value` makes the component controlled; otherwise it uses `defaultValue` and internal state.

## Data-attributes & classes (for CSS/automation)

- `class="form-control"` — always present for Bootstrap compatibility.
- `data-status="success"|"error"` — validation state (used by CSS selectors).
- `data-filled="true"` — present when the input contains text (useful for styles/tests).
- `data-readonly="true"`, `data-disabled="true"` — reflect `readOnly` / `disabled`.

These attributes make it easy for other tools and automated agents to detect component state.

## Design tokens / CSS variables used

- --clr-bg-default
- --clr-border-subtle
- --clr-border-strong-02 (used for focused outline/border)
- --clr-focus-focus (theme-specific glow used for box-shadow)
- --clr-status-success
- --clr-status-danger
- --clr-text-default
- --clr-text-muted
- --clr-bg-shade
- --clr-bg-shade-alt
- --sp-xs, --sp-md, --sp-xxxl
- --type-desktop-body-default-size, --type-body-sm-size
- --radii-none
- --border-width-md

These tokens are defined in the theme files; override per-theme in `Input-ntg.css` / `Input-central.css` when necessary.

## Theming

- Per-theme overrides live in `Input-ntg.css` and `Input-central.css` and are automatically included in the theme bundles.
- Storybook loads the theme CSS at runtime — use the Theme toolbar to test NTG vs Central behavior (focus ring, read-only backgrounds, etc.).

## Focus behaviour & sizing (important details for implementers)

- Focus (outline/border): the visible `border`/`outline` on focus uses the semantic token `--clr-border-strong-02` so the border contrasts with the background and matches hover state.
- Focus glow ring: the outer glow (box-shadow) remains theme-specific and uses `--clr-focus-focus` (NTG orange / Central green) for the focus ring.
- Default sizing: the component wrapper defaults to `width: 100%` with `max-width: 480px` — override via wrapperClassName or layout container when needed.
- Validation icons and inline messages inherit color from the message container (icons use `currentColor`) so they follow tokenised colours.

## Accessibility checklist

- Always include a visible `label`.
- Use `aria-describedby` to point at helper or validation text.
- Error text uses `role="alert"` and `aria-live="assertive"` so screen readers announce failures.
- Success text uses `role="status"` / `aria-live="polite"`.
- Do not rely on color alone to indicate state; messages must include text.
- Keyboard: input is focusable and uses the theme focus token for visible focus styles.

## Storybook

- Stories located at `src/components/Input/Input.stories.tsx` cover: Default, Required, Filled, Active, Success, Error, Disabled, ReadOnly, Sizes and Playground.
- Use the global Theme toolbar to switch between NTG and Central and verify focus/read-only visual differences.

## Implementation notes (for maintainers)

- The component always applies `form-control` and preserves Bootstrap semantics while overriding visuals with design tokens.
- Styles rely on `data-*` attributes (e.g. `data-status`) so CSS can target states without modifying markup.
- Validation icons use the `Icon` component (FontAwesome kit loaded in Storybook preview).
- Keep visual values tokenized — avoid hard-coded colors/sizes in component CSS.

## Testing guidance

- Unit tests should assert:
  - `aria-describedby` links to helper/validation text when present
  - `role` / `aria-live` behavior for validation messages
  - `data-filled` toggles correctly for controlled/uncontrolled variants
  - `data-status` presence when `validationState` set
- Visual regression: add Storybook interaction tests for focus, success, and error states.

## Example usage

Controlled input:

```tsx
const [email, setEmail] = useState("");
<Input
  label="Email"
  placeholder="name@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>;
```

Uncontrolled with validation message:

```tsx
<Input
  label="Postcode"
  defaultValue="0800"
  validationState="error"
  validationMessage="Postcode must be 4 digits"
/>
```

## Notes for contributors

- Add any new visual tokens to `src/themes/*` and reference them in component CSS via semantic variable names.
- When adding stories, ensure required props are present in story `args` (missing required args can cause Storybook TypeScript errors).
- Update `scripts/build-theme-bundles.js` if you add a new per-theme override file.

---

Component source: `src/components/Input/Input.tsx`
