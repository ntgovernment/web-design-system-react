# SearchBar CSS Variables — Reference

This document explains the CSS custom properties (tokens) that the `SearchBar` consumes and how to customize them. It's intended for designers, front-end engineers, and coding agents that generate or test UI.

---

## Overview

The `SearchBar` relies on semantic design tokens for color, spacing, typography, and focus. Theme-specific overrides are provided by `SearchBar-ntg.css` and `SearchBar-central.css` which set component-level variables such as `--search-bar-radius` and `--search-bar-focus-shadow`.

## Colors (core tokens)

| Token                  | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `--clr-bg-default`     | Default input-group background                   |
| `--clr-bg-shade-alt`   | Hover / subtle surface fill                      |
| `--clr-bg-accent`      | Primary button background                        |
| `--clr-bg-accent-alt`  | Primary button hover background                  |
| `--clr-action-pressed` | Active button background                         |
| `--clr-border-subtle`  | Secondary variant outline                        |
| `--clr-focus-focus`    | Fallback focus color used by outline             |
| `--clr-text-default`   | Input text color                                 |
| `--clr-text-muted`     | Placeholder and secondary icon color             |
| `--clr-text-inverse`   | Icon/text color used on primary button (inverse) |

## Spacing & sizing

| Token       |  px | Used for                       |
| ----------- | --: | ------------------------------ |
| `--sp-xs`   |   8 | small gaps, focus ring math    |
| `--sp-sm`   |  12 | input/button padding           |
| `--sp-md`   |  16 | default input padding          |
| `--sp-lg`   |  20 | icon size reference            |
| `--sp-xl`   |  24 | icon container size            |
| `--sp-xxxl` |  48 | minimum input height (desktop) |

## Typography

| Token                              | Use               |
| ---------------------------------- | ----------------- |
| `--type-font-default`              | Input font-family |
| `--type-desktop-body-default-size` | Input font-size   |
| `--type-body-default-lh`           | Line-height       |

## Component-specific variables

- `--search-bar-radius` — border radius of the input group (set by theme overrides).
- `--search-bar-focus-shadow` — the focus ring (shadow/outline) applied at `:focus-within`.

Example (theme override):

```css
:root {
  --search-bar-radius: var(--central-radii-button);
  --search-bar-focus-shadow: var(--shadow-focus-central);
}
```

## How tokens map to visuals (quick reference)

- Primary button background → `--clr-bg-accent`
- Primary button icon color → `--clr-text-inverse`
- Hovered input area → `--clr-bg-shade-alt`
- Secondary variant outline → `--clr-border-subtle`
- Focus outline (group) → `--search-bar-focus-shadow` / `--clr-focus-focus`

## Customization examples

- Change radius for a single instance: override `--search-bar-radius` on the wrapper.
- Change button colors by overriding Bootstrap button CSS variables on `.search-bar__button`.

## Testing notes

- Visual tests should confirm focus ring and border radius under both NTG and Central themes.
- Confirm primary icon color resolves to `--clr-text-inverse`.
- Note: `disabled`/`readOnly` styles were removed from this component — manage those states outside the component.

---

**Last updated:** February 14, 2026
