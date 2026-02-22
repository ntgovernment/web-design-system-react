# Visited Link Styles Scoping

## Overview

This document explains how visited link styles (`:visited` pseudo-class) are scoped in the design system to apply only to content areas and not to navigation components.

## Problem Statement

Previously, visited link styles (purple color) were applied globally to **all** links via `a:visited` rules in typography files. This caused navigation components (Header, Footer, Banner, Breadcrumbs, SideNavigation, Pagination) to show purple visited colors after being clicked, which was not the desired user experience.

## Solution

### Approach: Component-Specific Visited Overrides

Rather than removing the global `a:visited` styling or introducing wrapper classes, we implemented component-specific visited style overrides in navigation components. This approach:

- ✅ Maintains existing BEM naming patterns and component encapsulation
- ✅ Requires minimal changes to existing code
- ✅ Provides clear component ownership of visited styles
- ✅ Easy to test and verify per component
- ✅ Preserves backward compatibility

### Implementation Details

#### Navigation Components (No Purple Visited Color)

The following components have explicit `:visited` overrides to prevent the purple visited color:

1. **Header** ([Header.css](src/components/Header/Header.css))
   ```css
   .header__nav-link:visited,
   .header__mobile-nav-link:visited {
     color: var(--clr-text-inverse);
   }
   ```
   - Uses inverse text color to maintain white/light text on dark header background

2. **Footer** ([Footer.css](src/components/Footer/Footer.css))
   ```css
   .footer__link:visited,
   .footer__social-link:visited,
   .footer__bottom-link:visited {
     color: var(--clr-text-inverse);
   }
   ```
   - Uses inverse text color for consistency on dark footer background
   - **Bonus fix**: Replaced hardcoded `#8a38f5` with proper design token

3. **Banner** ([Banner.css](src/components/Banner/Banner.css))
   ```css
   .banner__link:visited {
     color: var(--clr-link-default);
   }
   
   .banner__pill-link:visited {
     color: var(--clr-text-default);
   }
   ```
   - Maintains default link colors appropriate for banner context

4. **Breadcrumbs** ([Breadcrumbs.css](src/components/Breadcrumbs/Breadcrumbs.css))
   ```css
   .content-breadcrumbs__link:visited {
     color: var(--clr-link-default);
   }
   ```
   - Treated as navigation despite `content-` prefix, since breadcrumbs are navigational by nature

5. **SideNavigation** ([SideNavigation.css](src/components/SideNavigation/SideNavigation.css))
   ```css
   .side-nav__link:visited {
     color: var(--clr-link-default);
   }
   ```
   - Maintains default link color for side navigation

6. **Pagination** ([Pagination.css](src/components/Pagination/Pagination.css))
   ```css
   .content-pagination .page-link:visited {
     color: var(--clr-link-default);
   }
   ```
   - Maintains default link color for pagination controls

#### Content Components (Purple Visited Color Retained)

These components continue to use the global `a:visited` styles or have explicit visited styles:

1. **Document** ([Document.css](src/components/Document/Document.css))
   ```css
   .document__title:visited {
     color: var(--clr-link-visited);
   }
   ```
   - Explicitly uses visited color for document title links

2. **OnThisPageNavigation** ([OnThisPageNavigation.css](src/components/OnThisPageNavigation/ONTHISPAGENAVIGATION.css))
   ```css
   .content-on-this-page__link:visited {
     color: var(--clr-link-visited);
   }
   ```
   - Explicitly uses visited color for table of contents links

3. **Typography** (Global styles in [typography-ntg.css](src/themes/typography-ntg.css) and [typography-central.css](src/themes/typography-central.css))
   ```css
   a:visited {
     color: var(--ntg-clr-link-visited);  /* or --central-clr-link-visited */
   }
   ```
   - Global styling applies to all content area links by default

## Design Tokens Used

### NT.GOV.AU Theme
- `--ntg-clr-link-visited: #7c19aa` (purple)
- `--clr-link-default: #c33826` (red/orange)
- `--clr-text-inverse: #ffffff` (white)
- `--clr-text-default: #0f0f2f` (dark)

### Central Theme  
- `--central-clr-link-visited: #6220be` (purple)
- `--clr-link-default: #0a4fb9` (blue)
- `--clr-text-inverse: #ffffff` (white)
- `--clr-text-default: #0f0f2f` (dark)

## Component Classification

### Navigation vs Content

**Navigation Components** are components whose primary purpose is site/page navigation:
- Header (site navigation)
- Footer (site footer links)
- Banner (navigational calls-to-action)
- Breadcrumbs (hierarchical navigation)
- SideNavigation (section navigation)  
- Pagination (page navigation controls)

**Content Components** are components displaying user content or content listings:
- Document (content listings with links)
- OnThisPageNavigation (content table of contents)
- Typography (inline content links)
- General content areas with user-generated links

## Testing Guidelines

### Visual Testing Checklist

When testing visited link behavior:

1. **Navigation Components** - Verify links do NOT turn purple after visiting:
   - [ ] Header navigation links (desktop and mobile)
   - [ ] Footer links (all three types: section links, social links, bottom links)
   - [ ] Banner links and pill links
   - [ ] Breadcrumb links
   - [ ] Side navigation links
   - [ ] Pagination links

2. **Content Components** - Verify links DO turn purple after visiting:
   - [ ] Document component title links
   - [ ] On This Page Navigation links
   - [ ] Inline links in content areas (paragraphs, lists, etc.)

3. **Theme Testing** - Verify behavior in both themes:
   - [ ] NT.GOV.AU theme
   - [ ] Central theme

### Automated Testing Considerations

Consider adding automated tests for:
- Computed style checks for `:visited` pseudo-class (note: browsers restrict access for security)
- Visual regression tests comparing visited/unvisited states
- Accessibility testing to ensure visited links still meet contrast requirements

## Maintenance

### Adding New Navigation Components

When creating new navigation components, remember to add visited style overrides:

```css
.your-nav-component__link:visited {
  color: var(--clr-link-default);  /* or appropriate color for component */
}
```

### Adding New Content Components

Content components should either:
1. Rely on the global `a:visited` styling, or
2. Explicitly set `color: var(--clr-link-visited);` for visited links

### Theme Changes

If new themes are added with different visited colors:
1. Define new `--{theme}-clr-link-visited` token in theme variables
2. Update typography files to use the new token
3. No changes needed to component-specific overrides (they use semantic tokens)

## Related Documentation

- [Design Tokens](design-tokens/DESIGN-TOKENS.md) - Color token definitions
- [Themes](src/themes/THEMES.md) - Theme system documentation
- [Content Standards](CONTENT_STANDARDS.md) - Component usage guidelines

## Change History

### 2026-02-22 - Initial Implementation
- Added visited link overrides to 6 navigation components
- Fixed Footer hardcoded `#8a38f5` to use design token
- Verified content components retain visited purple color
- Documented implementation approach and guidelines
