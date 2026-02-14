# Textarea

Developer guide for the `Textarea` component — concise API, implementation notes, token list, accessibility checklist and Storybook/testing guidance.

---

## Purpose

Multi-line text input used for longer user-entered content (comments, messages, feedback, explanations, etc.). The component preserves Bootstrap compatibility (`form-control` class) while being token-driven and theme-aware.

Use the **Input** component for single-line text (email, name, postcode). Use **Textarea** when you need multiple lines of text from the user.

## Import

```tsx
import { Textarea } from "@ntgovernment/web-design-system";
```

## Component API (props)

- `label?: string` — visible label shown above the field.
- `helperText?: string` — small helper/hint text under the label.
- `requiredIndicator?: string` — text to display for required fields (default: `(Required)`).
- `validationState?: "success" | "error"` — visual validation state.
- `validationMessage?: string` — message shown when `validationState` is set.
- `wrapperClassName?: string` — optional wrapper CSS class.
- `maxLength?: number` — maximum character count. Shows a character counter when set.
- `showCharacterCount?: boolean` — show character counter even when maxLength is not set.
- `rows?: number` — number of visible text rows (default: 5).
- All standard `textarea` attributes (`placeholder`, `value`, `defaultValue`, `onChange`, `disabled`, `readOnly`, etc.) are supported.

Note: `value` makes the component controlled; otherwise it uses `defaultValue` and internal state.

## Data-attributes & classes (for CSS/automation)

- `class="form-control"` — always present for Bootstrap compatibility.
- `data-status="success"|"error"` — validation state (used by CSS selectors).
- `data-filled="true"` — present when the textarea contains text (useful for styles/tests).
- `data-readonly="true"`, `data-disabled="true"` — reflect `readOnly` / `disabled`.

These attributes make it easy for other tools and automated agents to detect component state.

## Design tokens / CSS variables used

- --clr-bg-default
- --clr-border-subtle
- --clr-border-strong-02
- --clr-focus-focus
- --clr-status-success
- --clr-status-danger
- --clr-text-default
- --clr-text-muted
- --clr-bg-shade
- --clr-bg-shade-alt
- --sp-xs, --sp-md
- --type-desktop-body-default-size, --type-body-sm-size, --type-body-default-lh, --type-body-sm-lh
- --radii-none
- --border-width-md

These tokens are defined in the theme files; override per-theme in `Textarea-ntg.css` / `Textarea-central.css` when necessary.

## Theming

- Per-theme overrides live in `Textarea-ntg.css` and `Textarea-central.css` and are automatically included in the theme bundles.
- Storybook loads the theme CSS at runtime — use the Theme toolbar to test NTG vs Central behavior (focus ring, read-only backgrounds, etc.).
- NTG theme uses `--shadow-focus-ntg` for the focus outline.
- Central theme uses `--shadow-focus-central` for the focus outline.
- Border radius is controlled by `--radii-none` by default (0px for both themes currently).

## Accessibility checklist

- Always include a visible `label`.
- Use `aria-describedby` to point at helper text, validation message, and character counter.
- Error text uses `role="alert"` and `aria-live="assertive"` so screen readers announce failures.
- Success text uses `role="status"` / `aria-live="polite"`.
- Character counter uses `aria-live="polite"` to announce count changes.
- Do not rely on color alone to indicate state; messages must include text.
- Keyboard: textarea is focusable and uses the theme focus token for visible focus styles.
- The resize handle is native browser implementation and is keyboard accessible.

## Storybook

- Stories located at `src/components/Textarea/Textarea.stories.tsx` cover: Default, Required, Filled, Active, Success, Error, Disabled, ReadOnly, WithCharacterCount, WithMaxLength, LongContent, CustomRows, and Playground.
- Use the global Theme toolbar to switch between NTG and Central and verify focus/read-only visual differences.

## Implementation notes (for maintainers)

- The component always applies `form-control` and preserves Bootstrap semantics while overriding visuals with design tokens.
- Styles rely on `data-*` attributes (e.g. `data-status`) so CSS can target states without modifying markup.
- Validation icons use the `Icon` component (FontAwesome kit loaded in Storybook preview).
- Keep visual values tokenized — avoid hard-coded colors/sizes in component CSS.
- The textarea is resizable by default (CSS: `resize: vertical`). Disabled and read-only textareas have `resize: none`.
- Character counter updates live as the user types via controlled/uncontrolled state tracking.

## Testing guidance

- Unit tests should assert:
  - `aria-describedby` links to helper/validation text and character counter when present
  - `role` / `aria-live` behavior for validation messages
  - Character counter displays correctly with and without `maxLength`
  - `data-filled` toggles correctly for controlled/uncontrolled variants
  - `data-status` presence when `validationState` set
  - `maxLength` attribute is applied when prop is provided
- Visual regression: add Storybook interaction tests for focus, success, and error states.

## Example usage

### Basic textarea

```tsx
<Textarea
  label="Comments"
  helperText="Share your thoughts with us"
  placeholder="Enter your comments here"
/>
```

### With character limit

```tsx
<Textarea
  label="Feedback"
  helperText="Please keep your feedback concise"
  maxLength={100}
  placeholder="Maximum 100 characters"
/>
```

### Controlled textarea with validation

```tsx
const [feedback, setFeedback] = useState("");
const [error, setError] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  const value = e.target.value;
  setFeedback(value);

  if (value.length < 10) {
    setError("Feedback must be at least 10 characters");
  } else {
    setError("");
  }
};

<Textarea
  label="Your Feedback"
  value={feedback}
  onChange={handleChange}
  validationState={error ? "error" : undefined}
  validationMessage={error}
  maxLength={500}
/>;
```

### Uncontrolled with default value

```tsx
<Textarea
  label="Additional Notes"
  defaultValue="Pre-filled content here"
  rows={8}
/>
```

### Required field

```tsx
<Textarea
  label="Application Details"
  helperText="Explain why you are applying for this service"
  required
  placeholder="Please provide detailed information"
/>
```

## Usage Guidelines

### When to use

Use the Textarea component when you need information longer than a single line of text. It can be used for:

- Comments
- Messages
- Feedback, suggestions or opinions
- Explanations
- Any multi-line text entry

### When NOT to use

- Do not use when you only need a short text or number response from the user (use **Input** instead).
- For rich text editing with formatting (use a dedicated rich text editor).

### Best Practices

- **Always use a label** for the textarea, which must be in sentence case.
- **Using hint text** (helperText) is not mandatory but is recommended to help the user:
  - Understand what kind of information they need to provide
  - Know about any required formatting
  - See examples if helpful
- **Make the size proportional** to the expected content length. For example, a textarea for quick website feedback should be shorter (3-4 rows) than one for a grant application (8-10 rows).
- **Only use the character count if necessary**, like for legal or technical reasons.
- **Make sure error messages are clear** and explain how the user can fix the issue.

### How NOT to use

- **Don't disable copy/paste** functionality — always allow users to paste into the textarea.
- **Avoid placeholder text where possible**, as it doesn't meet accessibility requirements. Don't use it to replace the label or help text, or to display any critical information.
- **If there is a character limit**, use error states to inform the user they have gone over it when they submit or attempt to go to the next page. Do not remove their ability to enter more text over the limit (the `maxLength` attribute will enforce the limit, but show validation messages for better UX).
- **Don't use for single-line inputs** — use the Input component instead.

## Character Counter Behavior

The character counter serves two purposes:

1. **Informational**: Shows current character count to help users gauge length
2. **Limit enforcement**: When `maxLength` is set, shows "current/max" format

### Counter displays:

- `showCharacterCount={true}` → Shows count without a limit: `"147"`
- `maxLength={500}` → Shows count with limit: `"147/500"`
- Neither prop → No counter shown

### Accessibility:

- The counter has `aria-live="polite"` to announce changes to screen reader users
- Counter text is linked via `aria-describedby` on the textarea

## Resize Behavior

- **Default**: Textarea can be resized vertically by the user (CSS: `resize: vertical`)
- **Read-only**: Resize handle is disabled (`resize: none`)
- **Disabled**: Resize handle is disabled (`resize: none`)
- The resize handle is a native browser feature and is automatically keyboard accessible

## Bootstrap CSS Variable Override

The Textarea component uses Bootstrap's `form-control` class but overrides its default styles using design system tokens. You can further customize the textarea using Bootstrap CSS variables if needed.

See **CSS_VARIABLES.md** for detailed documentation on available CSS variables and how to override them.

## Machine-friendly summary (for developers & coding agents)

- Component: `Textarea`
- File: `src/components/Textarea/Textarea.tsx`
- CSS class: `form-control` (component-scoped selectors in `Textarea.css`)
- Primary tokens to override: `--clr-bg-default`, `--clr-border-subtle`, `--clr-focus-focus`, `--shadow-focus-ntg`, `--shadow-focus-central`, `--radii-*`, spacing tokens (`--sp-*`).

Props JSON schema (useful for programmatic tests / automated code generators):

{
"component": "Textarea",
"props": {
"label": {"type":"string"},
"helperText": {"type":"string"},
"requiredIndicator": {"type":"string","default":"(Required)"},
"validationState": {"type":"string","enum":["success","error"]},
"validationMessage": {"type":"string"},
"maxLength": {"type":"number"},
"showCharacterCount": {"type":"boolean","default":false},
"rows": {"type":"number","default":5}
},
"dataAttributes": ["data-status","data-filled","data-readonly","data-disabled"]
}

## Token mapping (developer/agent reference)

- Container background: `--clr-bg-default` (use theme token)
- Border (outline): `--clr-border-subtle` (border width uses `--border-width-md`)
- Focus color / outline: `--clr-focus-focus`; theme shadows `--shadow-focus-ntg` / `--shadow-focus-central` (preferred)
- Label font: `--type-desktop-body-default-size` + font-weight 700
- Helper & placeholder text: `--type-body-sm-size` / `--clr-text-muted`
- Padding: `--sp-xs` (vertical), `--sp-md` (horizontal)
- Border-radius: `--radii-none` (component default), override using `--radii-sm`/`--radii-md` or an explicit component-scoped class
- Min-height: `120px` (no existing dedicated token — consider adding `sp-textarea` if you need tokenized reuse)

Note: prefer token updates (design-tokens/tokens.json + `npm run tokens:build`) for global changes. Use component-level CSS overrides for one-off exceptions.

## Bootstrap variable mapping (quick)

- `--bs-form-control-bg` ⇄ `--clr-bg-default`
- `--bs-border-color` ⇄ `--clr-border-subtle`
- `--bs-border-radius` ⇄ `--radii-*` tokens
- `--bs-body-font-size` ⇄ `--type-desktop-body-default-size`

Use tokens where possible — Bootstrap `--bs-*` variables are useful for local, runtime customizations.

## Automated test snippets (copy/paste)

Vitest + Testing Library (unit):

```ts
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './Textarea';

test('character counter updates and enforces maxLength', async () => {
  render(<Textarea label="Feedback" maxLength={5} showCharacterCount />);
  const ta = screen.getByLabelText(/feedback/i);
  await userEvent.type(ta, 'abcdef');
  expect(screen.getByText('5/5')).toBeInTheDocument();
  expect(ta).toHaveValue('abcde');
});
```

Storybook play function (interaction test):

```ts
// in Textarea.stories.tsx
export const PlayFocus: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ta = canvas.getByLabelText(/comments/i);
    await userEvent.click(ta);
    expect(ta).toHaveFocus();
    // snapshot or assert focus outline color via computedStyle
  },
};
```

## Programmatic token change (example for agents)

1. Edit `design-tokens/tokens.json` (add/modify token under `sp`, `radii`, or `clr`).
2. Run: `npm run tokens:build`
3. Rebuild: `npm run build` and verify in Storybook: `npm run storybook`

Example JSON patch (add token):

```json
{
  "sp": { "textarea-min": { "type": "dimension", "value": 120 } }
}
```

## PR / CI checklist (must include)

- [ ] Unit tests for new behaviour (Vitest)
- [ ] Storybook stories + interaction tests for critical states
- [ ] Update `TEXTAREA.md` and `CSS_VARIABLES.md` (token usage + examples)
- [ ] Add token changes to `design-tokens/tokens.json` if raw values were introduced
- [ ] Run `npm run tokens:build`, `npm run build`, and `npm run storybook` locally
- [ ] Follow `CONTENT_STANDARDS.md` for story content

## Notes for contributors (expanded)

- Add new visual tokens to `design-tokens/tokens.json` and run `npm run tokens:build`.
- Prefer adding a token instead of hard-coding new measurements or colours.
- When a theme-specific visual is required (border-radius, focus outline), update the theme token or create a per-theme override file in the component folder.
- Keep stories realistic and accessible — no placeholder/lorem ipsum.

---

Component source: `src/components/Textarea/Textarea.tsx`  
Styles: `src/components/Textarea/Textarea.css`  
Theme overrides: `Textarea-ntg.css`, `Textarea-central.css`

Component source: `src/components/Textarea/Textarea.tsx`  
Styles: `src/components/Textarea/Textarea.css`  
Theme overrides: `Textarea-ntg.css`, `Textarea-central.css`
