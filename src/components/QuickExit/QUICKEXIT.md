# Quick Exit Component

A floating bar that can be added to the top of a page that contains sensitive information. The Quick Exit component allows users to quickly navigate away from a web page to hide what they were looking at.

## Overview

The Quick Exit component provides a critical safety feature for pages containing sensitive information that could put someone at risk of abuse or retaliation. When clicked anywhere on the banner, it:

1. **Immediately opens** an innocuous website (Bureau of Meteorology, bom.gov.au) in a new tab
2. **Redirects the current tab** to another innocuous site (Google.com)
3. **Disables back button** by replacing history entries (though browsing history remains intact)

> **Important**: This component is currently only available in the external NTG environment, not NTG Central.

## Features

- **One-Click Exit**: Entire banner is clickable for quick access
- **Dual Redirect**: Opens safe site in new tab and redirects current tab
- **Accessible**: Fully keyboard navigable with proper ARIA labels
- **Theme-Aware**: Uses design tokens for consistent styling
- **Responsive**: Adapts spacing and typography for mobile devices
- **Prominent Design**: Red/ochre background with white text for high visibility
- **Safety Focused**: Designed specifically for pages with potentially dangerous content

## Usage

### Basic Usage

```tsx
import { QuickExit } from "@ntgov/web-design-system";

function SensitiveContentPage() {
  return (
    <>
      <QuickExit />
      {/* Page content */}
    </>
  );
}
```

### With Custom Content

```tsx
<QuickExit
  heading="Leave this page quickly"
  content="Click this banner to immediately exit. Your safety is important. Call 000 if you need emergency help."
/>
```

### With Custom URLs

```tsx
<QuickExit
  exitUrl="https://www.weather.gov/"
  redirectUrl="https://www.bing.com/"
/>
```

### With Analytics Tracking

```tsx
<QuickExit
  onClick={(event) => {
    console.log("Quick exit activated");
    analytics.track("quick_exit_used", {
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    });
  }}
/>
```

## Props

| Prop          | Type                                                | Required | Default                                                                                      | Description                                   |
| ------------- | --------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `heading`     | `string`                                            | No       | `"Quick exit"`                                                                               | Main heading text for the component           |
| `content`     | `string`                                            | No       | `"Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger."` | Descriptive text content                      |
| `exitUrl`     | `string`                                            | No       | `"https://www.bom.gov.au/"`                                                                  | URL to open in new tab when clicked           |
| `redirectUrl` | `string`                                            | No       | `"https://www.google.com/"`                                                                  | URL to redirect current tab to                |
| `className`   | `string`                                            | No       | -                                                                                            | Additional CSS classes for the container      |
| `onClick`     | `(event: React.MouseEvent<HTMLDivElement>) => void` | No       | -                                                                                            | Custom click handler (called before redirect) |
| `ariaLabel`   | `string`                                            | No       | `"Quick exit - click to leave this page immediately"`                                        | ARIA label for screen reader users            |

## When to Use

Add a Quick Exit button to pages with sensitive information that could:

- **Put someone at risk of abuse or retaliation** - Domestic abuse, stalking, harassment
- **Reveal someone's plans to avoid or escape from harm** - Safety planning, escape routes
- **Expose vulnerable situations** - Child abuse, sexual assault, coercive control

### Sensitive Topics Include:

- Rape or sexual assault
- Child abuse and neglect
- Domestic abuse and coercive control
- Any other type of abuse
- Stalking and harassment
- Reporting crime or fraud (whistleblowing)

## How to Use

### Placement

- **Only add to the top of a page** - Similar to a global alert or banner
- **Use on multiple pages** - Can be used on several relevant pages in a website, or a single page
- **High visibility** - Component is very prominent, so only use on pages with genuinely sensitive content

### Best Practices

1. **Position at the very top** - Before any other content so it's immediately visible
2. **Don't hide it** - Never collapse, minimize, or hide the Quick Exit banner
3. **Keep default text** - The default content is carefully worded for maximum clarity
4. **Test the functionality** - Verify that exit URLs are appropriate and working
5. **Consider the context** - Only use when content could genuinely put someone at risk

## How Not to Use

### ❌ Don't Use If:

- **Content is unlikely to put a user at risk** - Only use for genuinely sensitive material
- **For general navigation** - This is not a regular "exit" or "close" button
- **On non-sensitive pages** - The prominent design will confuse users if overused
- **Hidden or buried in the page** - Must be immediately visible at the top

### ❌ Avoid:

- Using custom colors that reduce visibility
- Placing it in sidebars, footers, or middle of content
- Adding it to every page "just in case"
- Making it small or subtle

## Examples

### Default Configuration

```tsx
<QuickExit />
```

This displays:

- Heading: "Quick exit"
- Content: "Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger."
- Exit URL: Bureau of Meteorology (bom.gov.au)
- Redirect URL: Google (google.com)

### Domestic Violence Support Page

```tsx
<QuickExit
  heading="Quick exit"
  content="Click anywhere on this banner to leave this page immediately. If you're in danger, call 000 for emergency assistance or 1800 RESPECT (1800 737 732) for confidential support."
/>
```

### Child Safety Information Page

```tsx
<QuickExit
  heading="Leave quickly"
  content="Click this banner to exit immediately. For child safety concerns, call 1800 700 250. In an emergency, call 000."
/>
```

### Custom Safe Sites

```tsx
<QuickExit
  exitUrl="https://www.abc.net.au/news/weather"
  redirectUrl="https://www.facebook.com/"
  heading="Exit now"
  content="Click to leave this page. Your browsing history will show this page, but you won't be able to use the back button."
/>
```

## Design Tokens Used

The component uses design tokens for consistency with the NT Government Web Design System:

### Color Tokens

| Token                 | Usage               | Value (NTG) | Description                |
| --------------------- | ------------------- | ----------- | -------------------------- |
| `--clr-bg-accent`     | Background color    | `#C33826`   | Red/ochre background       |
| `--clr-bg-accent-alt` | Hover background    | `#A22F20`   | Darker red on hover        |
| `--clr-text-inverse`  | Text color          | `#FFFFFF`   | White text for contrast    |
| `--clr-focus-focus`   | Focus outline (NTG) | `#EC8C58`   | Orange focus ring          |
| `--shadow-focus-ntg`  | Focus shadow (NTG)  | 4px orange  | Accessibility focus visual |

### Typography Tokens

| Token                             | Usage               | Value  | Description          |
| --------------------------------- | ------------------- | ------ | -------------------- |
| `--type-desktop-h3-size`          | Heading font size   | `24px` | Desktop heading size |
| `--type-heading-h3-weight`        | Heading font weight | `700`  | Bold heading         |
| `--type-heading-h3-lh`            | Heading line height | `28px` | Heading line height  |
| `--type-body-default-size`        | Content font size   | `16px` | Desktop body size    |
| `--type-body-default-bold-weight` | Content font weight | `700`  | Bold content text    |
| `--type-body-default-lh`          | Content line height | `24px` | Content line height  |
| `--type-font-default`             | Font family         | `Lato` | System default font  |

### Spacing Tokens

| Token      | Usage                     | Value  | Description               |
| ---------- | ------------------------- | ------ | ------------------------- |
| `--sp-xl`  | Vertical & outer padding  | `24px` | Standard XL spacing       |
| `--sp-xxl` | Horizontal padding        | `32px` | Standard XXL spacing      |
| `--sp-sm`  | Gap between header & text | `12px` | Standard small spacing    |
| `--sp-xs`  | Gap in header (icon/text) | `8px`  | Standard extra-small gap  |
| `--sp-xxl` | Icon size                 | `32px` | Icon container dimensions |

### Border Radius Tokens

| Token                | Usage                   | Value (NTG) | Value (Central) |
| -------------------- | ----------------------- | ----------- | --------------- |
| `--ntg-radii-button` | Border radius (NTG)     | `0px`       | -               |
| `--central-radii-md` | Border radius (Central) | -           | `20px`          |

## Accessibility

### ARIA & Semantic HTML

- **role="button"**: Indicates the banner is interactive and clickable
- **tabIndex={0}**: Makes the component keyboard focusable
- **aria-label**: Descriptive label for screen reader users
- **Keyboard Support**: Enter and Space keys activate the exit

### Keyboard Navigation

- **Tab**: Focus the Quick Exit banner
- **Enter**: Activate quick exit (redirect)
- **Space**: Activate quick exit (redirect)
- **Screen Readers**: Announced as "Quick exit - click to leave this page immediately, button"

### Focus Indicators

The component uses theme-specific focus outlines for high visibility:

- **NT.GOV.AU Theme**: 4px solid orange outline (`#EC8C58`)
- **Central Theme**: 4px solid green outline (if enabled for this component)

### Color Contrast

- **Background**: Red/ochre (`#C33826`) provides strong visual prominence
- **Text on Background**: White text (`#FFFFFF`) on red background
- **Contrast Ratio**: Exceeds WCAG AA standards for large text (3:1 minimum)
- **Icon Visibility**: White icon on red background ensures clarity

## Browser Behavior

### How the Redirect Works

1. **User clicks banner** - Anywhere on the banner triggers the exit
2. **New tab opens** - `window.open(exitUrl, "_blank")` opens innocuous site
3. **Current tab redirects** - `window.location.replace(redirectUrl)` replaces current page
4. **History is replaced** - Back button won't return to sensitive page
5. **Browsing history intact** - Page still appears in full history

### Popup Blockers

If the browser blocks the popup (new tab):

- **Fallback**: Current tab redirects directly to `exitUrl` instead
- **User Action**: Most browsers allow popups triggered by user actions (clicks)
- **Testing**: Test in different browsers to ensure consistent behavior

### Privacy Limitations

⚠️ **Important Privacy Notes**:

- **Browsing history remains** - The page will still appear in browser history
- **Back button disabled** - But history can still be accessed via browser menu
- **Not a complete solution** - Part of a broader safety strategy, not a guarantee
- **Cached data** - Pages may be cached; clearing cache is separate

## Responsive Design

### Desktop (> 768px)

- Padding: `24px` (vertical) × `32px` (horizontal)
- Heading: `24px` font size
- Content: `16px` font size, `700` weight
- Icon: `32px` × `32px`

### Mobile (≤ 767px)

- Padding: `16px` (vertical) × `24px` (horizontal)
- Heading: Mobile H3 size (responsive)
- Content: Mobile body size (responsive)
- Icon: `32px` × `32px` (unchanged)

### Touch Targets

The entire banner is the touch target, ensuring easy activation on mobile devices.

## Theme Support

### NT.GOV.AU Theme

```tsx
import { QuickExit } from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/ntg-theme.min.css";

// NTG theme provides:
// - Orange focus outline (#EC8C58)
// - Sharp corners (0px border-radius)
// - Lato typography
```

### NTG Central Theme

> **Note**: Quick Exit is designed for external (public-facing) NT.GOV.AU sites only. It is not currently enabled for NTG Central theme.

If needed for Central:

```tsx
import { QuickExit } from "@ntgovernment/web-design-system";
import "@ntgovernment/web-design-system/central-theme.min.css";

// Central theme would provide:
// - Green focus outline (#6ab06a)
// - Rounded corners (20px border-radius)
// - Roboto typography
```

## CSS Variables

### Customization Example

You can customize the Quick Exit component using CSS variables:

```css
/* Override background color */
.quick-exit {
  --clr-bg-accent: #8b0000; /* Darker red */
}

/* Override hover color */
.quick-exit:hover {
  --clr-bg-accent-alt: #6b0000; /* Even darker on hover */
}

/* Add custom shadow */
.quick-exit {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

### Not Recommended

Avoid significantly changing the appearance, as the prominent red design is intentional for safety:

```css
/* ❌ DON'T DO THIS - reduces visibility */
.quick-exit {
  background: #e0e0e0; /* Grey background not prominent enough */
  color: #333; /* Dark text not visible enough */
  font-size: 12px; /* Too small */
}
```

## Performance Considerations

### Lightweight Component

- **No external dependencies** - Pure React component
- **Minimal JavaScript** - Simple click handler with redirect logic
- **Static content** - No state management or re-renders
- **Fast load** - Inline SVG icon, no image requests

### Optimization Tips

- Component renders only once per page
- No scroll listeners or timers
- Exit logic executes only on click
- CSS uses design tokens (no custom calculations)

## Security Considerations

### Safe Redirect URLs

- **Default Exit URL**: Bureau of Meteorology (government site, neutral content)
- **Default Redirect URL**: Google (commonly visited, innocuous)
- **Custom URLs**: Choose neutral, commonly visited sites

### Avoid Suspicious URLs

❌ Don't use:

- URLs that might raise suspicion (e.g., support.domesticviolence.gov)
- Sites requiring login (users may not have accounts)
- Sites that are unusual for the user's demographics

✅ Good choices:

- Weather sites (bom.gov.au, weather.com)
- Search engines (google.com, bing.com)
- News sites (abc.net.au, bbc.com)
- Social media (if appropriate for demographics)

## Testing

### Manual Testing Checklist

- [ ] Click banner activates exit
- [ ] New tab opens with exit URL
- [ ] Current tab redirects to redirect URL
- [ ] Back button is disabled on both tabs
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Screen reader announces component correctly
- [ ] Focus outline is visible
- [ ] Mobile responsive spacing works
- [ ] Hover effect appears
- [ ] Works in all target browsers

### Automated Testing

```tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { QuickExit } from "./QuickExit";

// Mock window.open and window.location
const mockOpen = jest.fn();
const mockReplace = jest.fn();

global.window.open = mockOpen;
Object.defineProperty(window, "location", {
  value: { replace: mockReplace },
  writable: true,
});

test("clicking quick exit calls window.open and location.replace", () => {
  render(<QuickExit />);

  const banner = screen.getByRole("button", {
    name: /quick exit/i,
  });

  fireEvent.click(banner);

  expect(mockOpen).toHaveBeenCalledWith(
    "https://www.bom.gov.au/",
    "_blank",
    "noopener,noreferrer",
  );
  expect(mockReplace).toHaveBeenCalledWith("https://www.google.com/");
});
```

## For developers & coding agents (automation-friendly)

- Selectors: `.quick-exit` (container), `div[role="button"].quick-exit`.
- ARIA / queries: `getByRole('button', { name: /quick exit/i })` or `querySelector('.quick-exit')`.

Machine-readable props (useful for automation or AI agents):

```json
{
  "props": [
    { "name": "heading", "type": "string", "default": "Quick exit" },
    { "name": "content", "type": "string", "default": "Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger." },
    { "name": "exitUrl", "type": "string", "default": "https://www.bom.gov.au/" },
    { "name": "redirectUrl", "type": "string", "default": "https://www.google.com/" }
  ]
}
```

Playwright / end-to-end example (stub window.open & location.replace):

```js
// stub browser globals on the page before interaction
await page.evaluate(() => {
  window.open = (url, target, features) => { window.__lastOpen = { url, target, features }; return window; };
  window.location.replace = (url) => { window.__lastReplace = url; };
});

await page.waitForSelector('.quick-exit', { state: 'visible' });
await page.click('.quick-exit');

const opened = await page.evaluate(() => window.__lastOpen);
expect(opened.url).toBe('https://www.bom.gov.au/');
const replaced = await page.evaluate(() => window.__lastReplace);
expect(replaced).toBe('https://www.google.com/');
```

Notes for Storybook & automation:

- In Storybook use the `onClick` arg to prevent real redirects during visual or interaction tests.
- For unit tests, mock `window.open` and `window.location.replace` (see Automated Testing snippet above).

## Common Use Cases

### 1. Domestic Violence Support Page

```tsx
<QuickExit content="Click this banner to quickly leave. Call 1800 RESPECT (1800 737 732) for 24/7 confidential support, or 000 in an emergency." />
```

### 2. Child Safety Resources

```tsx
<QuickExit
  heading="Exit quickly"
  content="Leave this page immediately if needed. Report child abuse: 1800 700 250. Emergency: 000."
/>
```

### 3. Whistleblower Portal

```tsx
<QuickExit content="Click to exit securely. Your report is confidential. This action will not delete any saved drafts." />
```

### 4. Mental Health Crisis Support

```tsx
<QuickExit content="Exit this page quickly if you need to. For immediate support, call Lifeline 13 11 14 or 000 in an emergency." />
```

## Related Components

- **Notification**: For displaying status alerts (use QuickExit for safety exits)
- **Callout**: For general informational messages (use QuickExit for urgent safety needs)
- **Button**: For standard actions (QuickExit is a specialized safety component)

## Browser Compatibility

| Browser        | Support          | Notes                              |
| -------------- | ---------------- | ---------------------------------- |
| Chrome         | ✅ Latest 2      | Full support                       |
| Firefox        | ✅ Latest 2      | Full support                       |
| Safari         | ✅ Latest 2      | Full support                       |
| Edge           | ✅ Latest 2      | Full support                       |
| iOS Safari     | ✅ Latest 2      | Popup blockers may affect behavior |
| Android Chrome | ✅ Latest        | Full support                       |
| IE 11          | ❌ Not supported | Uses modern JavaScript features    |

## Troubleshooting

### New tab doesn't open

**Issue**: Clicking doesn't open exit URL in new tab

**Solutions**:

1. Check browser popup blocker settings
2. Verify `exitUrl` is a valid, absolute URL
3. Test in different browsers
4. Check browser console for errors

### Current tab doesn't redirect

**Issue**: Current page doesn't redirect to redirect URL

**Solutions**:

1. Check browser console for JavaScript errors
2. Verify `redirectUrl` is a valid, absolute URL
3. Ensure no other click handlers are preventing default behavior
4. Test `window.location.replace()` directly in console

### Back button still works

**Issue**: Back button returns to sensitive page

**Solutions**:

1. Verify using `window.location.replace()` (not `.assign()` or `.href =`)
2. Check if browser caching is causing issues
3. Understand that browser history menu will still show the page
4. Educate users to clear history for maximum privacy

### Focus outline not visible

**Issue**: Focus ring doesn't appear when tabbing to component

**Solutions**:

1. Verify theme CSS is loaded
2. Check that `box-shadow` isn't being overridden
3. Inspect element in DevTools to see applied styles
4. Ensure `:focus-visible` is supported in browser

## Maintenance Notes

### Design Token Dependencies

The component relies on these design tokens:

**Colors**: `--clr-bg-accent`, `--clr-bg-accent-alt`, `--clr-text-inverse`, `--clr-focus-focus`

**Typography**: `--type-desktop-h3-size`, `--type-heading-h3-weight`, `--type-heading-h3-lh`, `--type-body-default-size`, `--type-body-default-bold-weight`, `--type-body-default-lh`, `--type-font-default`

**Spacing**: `--sp-xl`, `--sp-xxl`, `--sp-sm`, `--sp-xs`

**Border Radius**: `--ntg-radii-button` (NTG), `--central-radii-md` (Central)

If design tokens are updated:

1. Export tokens to `design-tokens/tokens.json`
2. Run `npm run tokens:build`
3. Test component appearance in both themes

### File Structure

```
QuickExit/
├── QuickExit.tsx             # Component logic
├── QuickExit.css             # Common styles
├── QuickExit-ntg.css         # NT.GOV.AU theme overrides
├── QuickExit-central.css     # Central theme overrides
├── QUICKEXIT.md              # This documentation file
├── QuickExit.stories.tsx     # Storybook stories
└── index.ts                  # Export file
```

## Content Standards

Following the [CONTENT_STANDARDS.md](../../CONTENT_STANDARDS.md) guidelines:

- ✅ No Lorem ipsum text
- ✅ Meaningful, contextual default content
- ✅ Real-world use case examples
- ✅ Professional, clear language
- ✅ Government-appropriate content

### Default Content Rationale

**Heading**: "Quick exit" - Clear, concise, action-oriented

**Content**: "Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger." - Provides:

1. Clear instruction (click anywhere)
2. Describes action (exit this page)
3. Emergency resource (000)
4. Appropriate urgency without causing panic

## Implementation Checklist

Before deploying to production:

- [ ] Component renders correctly in Storybook
- [ ] Theme switching works (NTG ↔ Central)
- [ ] Exit functionality tested in all supported browsers
- [ ] Keyboard navigation verified
- [ ] Screen reader compatibility tested
- [ ] Focus indicators clearly visible
- [ ] Mobile responsive design checked
- [ ] Default URLs tested and confirmed safe
- [ ] Documentation reviewed and accurate
- [ ] Analytics tracking implemented (if required)
- [ ] Privacy implications communicated to stakeholders

## References

- [Content Standards](../../CONTENT_STANDARDS.md)
- [NT Government Web Design System](https://github.com/ntgovernment/web-design-system)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [1800 RESPECT - National Domestic Violence Helpline](https://www.1800respect.org.au/)
- [Bureau of Meteorology](http://www.bom.gov.au/)

---

**Version**: 1.0.0  
**Last Updated**: February 15, 2026  
**Component Type**: Safety & Security  
**Theme Support**: NT.GOV.AU only (not Central)  
**Accessibility Level**: WCAG 2.1 Level AA
