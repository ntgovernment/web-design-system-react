# Pill Component

A removable tag component for displaying filters, selections, and chips. Pills are interactive elements that allow users to dismiss individual items with a prominent close button, perfect for search filters, selected categories, or user inputs.

## Features

- **Removable interaction**: Built-in close button with (×) icon
- **Full-pill focus**: Focus outline encompasses entire pill for clear keyboard navigation
- **Accessible**: Proper ARIA labels, keyboard navigation support (Tab/Enter/Space)
- **Theme-aware**: Automatically adapts to NTG and Central themes
- **Semantic HTML**: Uses `<button>` element for native interactivity
- **Customizable**: Supports custom className and all standard HTML button attributes

## Usage

### Basic Example

```tsx
import { Pill } from "@nt-web-design-system/components";

function MyComponent() {
  const handleRemove = () => {
    console.log("Pill removed");
  };

  return <Pill label="Filter name" onRemove={handleRemove} />;
}
```

### Multiple Pills (Filters)

```tsx
function FilterList() {
  const [filters, setFilters] = useState(["JavaScript", "TypeScript", "React"]);

  const removeFilter = (filterToRemove: string) => {
    setFilters(filters.filter((f) => f !== filterToRemove));
  };

  return (
    <div className="d-flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          onRemove={() => removeFilter(filter)}
        />
      ))}
    </div>
  );
}
```

### Common Use Cases

**Search Filters:**

```tsx
<Pill label="Status: Active" onRemove={handleRemoveStatusFilter} />
<Pill label="Category: News" onRemove={handleRemoveCategoryFilter} />
<Pill label="Date: 2024" onRemove={handleRemoveDateFilter} />
```

**Selected Tags:**

```tsx
<Pill label="JavaScript" onRemove={() => removeTag('JavaScript')} />
<Pill label="TypeScript" onRemove={() => removeTag('TypeScript')} />
<Pill label="React" onRemove={() => removeTag('React')} />
```

**User Selections:**

```tsx
<Pill label="Alice Smith" onRemove={() => removeUser('alice')} />
<Pill label="Bob Jones" onRemove={() => removeUser('bob')} />
```

### With Custom Styling

```tsx
<Pill
  label="Custom pill"
  onRemove={handleRemove}
  className="me-2"
/>
<Pill
  label="Another pill"
  onRemove={handleRemove}
  style={{ marginLeft: '8px' }}
/>
```

## Props

| Prop        | Type                                            | Default      | Description                                                  |
| ----------- | ----------------------------------------------- | ------------ | ------------------------------------------------------------ |
| `label`     | `string`                                        | **Required** | The text label to display inside the pill                    |
| `onRemove`  | `() => void`                                    | **Required** | Callback function triggered when the close button is clicked |
| `className` | `string`                                        | -            | Additional CSS class names                                   |
| `type`      | `'button' \| 'submit' \| 'reset'`               | `'button'`   | Button type attribute                                        |
| `...props`  | `React.ButtonHTMLAttributes<HTMLButtonElement>` | -            | All standard HTML button attributes are supported            |

## Accessibility

### Keyboard Navigation

- **Tab**: Focus the pill (outline appears around entire pill)
- **Enter** or **Space**: Activate the pill (triggers `onRemove` callback)
- **Shift+Tab**: Focus previous element

### Screen Reader Support

Pills announce as buttons with the label "Remove [pill label]":

```tsx
<Pill label="JavaScript" onRemove={handleRemove} />
// Screen reader announces: "Remove JavaScript, button"
```

### ARIA Attributes

- Button has `aria-label="Remove {label}"` for clear intent
- Close icon (×) has `aria-hidden="true"` to prevent duplicate announcements

### Color Contrast

The pill meets WCAG AAA color contrast requirements (7:1 for normal text, 4.5:1 for large text).

### Focus Indicators

Clear focus outline (2px solid) with offset ensures visibility for keyboard users.

## Theming

### Design Tokens Used

The Pill component uses the following design tokens:

**Typography:**

- `--type-font-default`: Font family (Lato for NTG, Roboto for Central)
- `--type-button-label-size`: Font size
- `--type-button-label-weight`: Font weight
- `--type-button-label-lh`: Line height

**Spacing:**

- `--sp-xxs`: Vertical padding (4px)
- `--sp-xs`: Gap between label and close button (8px)
- `--sp-sm`: Horizontal padding start (12px)

**Border & Shape:**

- `--radii-lg`: Border radius (100px for pill shape)
- `--clr-border-default`: Border color
- `--clr-border-hover`: Border color on hover

**Colors:**

- `--clr-bg-default`: Background color
- `--clr-bg-hover`: Background color on hover
- `--clr-bg-active`: Background color on active state
- `--clr-text-default`: Text color
- `--clr-action-primary`: Focus outline color

### Theme Customization

You can customize pill appearance using CSS variables:

```tsx
<Pill
  label="Custom"
  onRemove={handleRemove}
  style={
    {
      "--radii-lg": "8px",
      "--sp-sm": "16px",
    } as React.CSSProperties
  }
/>
```

### NTG vs Central Themes

Pills automatically adapt to the active theme. Colors are sourced from theme-specific design tokens:

- **NTG Theme**: Uses NT.GOV.AU brand colors
- **Central Theme**: Uses Central brand colors

Both themes maintain WCAG AAA contrast ratios.

## CSS Classes

The component generates the following CSS class structure:

```html
<button class="pill" aria-label="Remove {label}">
  <span class="pill__label">{label}</span>
  <span class="pill__close" aria-hidden="true">×</span>
</button>
```

Available classes:

- `.pill` - Base pill button styles
- `.pill__label` - Label text wrapper
- `.pill__close` - Close icon (×)

## Examples

### Filter Panel

```tsx
function FilterPanel({ activeFilters, onRemoveFilter }) {
  return (
    <div className="border rounded p-3 mb-4">
      <h4 className="h6 mb-3">Active Filters</h4>
      {activeFilters.length > 0 ? (
        <div className="d-flex gap-2 flex-wrap">
          {activeFilters.map((filter) => (
            <Pill
              key={filter.id}
              label={filter.label}
              onRemove={() => onRemoveFilter(filter.id)}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted mb-0">No filters applied</p>
      )}
    </div>
  );
}
```

### Tag Selection

```tsx
function TagSelector({ selectedTags, availableTags, onAddTag, onRemoveTag }) {
  return (
    <div>
      <label className="form-label">Selected Tags</label>
      <div className="d-flex gap-2 flex-wrap mb-3">
        {selectedTags.map((tag) => (
          <Pill key={tag} label={tag} onRemove={() => onRemoveTag(tag)} />
        ))}
      </div>
      <select
        className="form-select"
        onChange={(e) => onAddTag(e.target.value)}
        value=""
      >
        <option value="">Add a tag...</option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}
```

### Search Results Header

```tsx
function SearchResults({ query, filters, onRemoveFilter, onClearAll }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Search Results for "{query}"</h2>
        {filters.length > 0 && (
          <button className="btn btn-link" onClick={onClearAll}>
            Clear all filters
          </button>
        )}
      </div>
      <div className="d-flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <Pill
            key={filter.id}
            label={`${filter.type}: ${filter.value}`}
            onRemove={() => onRemoveFilter(filter.id)}
          />
        ))}
      </div>
    </div>
  );
}
```

## Related Documentation

- [Design Tokens](../../../design-tokens/DESIGN-TOKENS.md)
- [Theme Switching](../../../src/themes/THEME_SWITCHING.md)
- [Tag Component](../Tag/TAG.md) - Related non-interactive label component
- [Button Component](../Button/BUTTON.md) - Interactive button patterns

## Browser Support

The Pill component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Best Practices

1. **Use for removable items**: Pills are for dismissible content. For static labels, use the [Tag component](../Tag/TAG.md) instead.

2. **Keep labels concise**: Pills work best with short, scannable text (1-3 words).

3. **Provide clear removal feedback**: Always handle the `onRemove` callback to update application state.

4. **Group logically**: When displaying multiple pills, use flex containers with gap spacing.

5. **Limit quantity**: Too many pills can overwhelm users. Consider collapsing with a "+N more" indicator for large sets.

## Version History

See [CHANGELOG.md](../../../CHANGELOG.md) for version history and updates.
