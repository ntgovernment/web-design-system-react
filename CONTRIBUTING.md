# Contributing to NT Government Web Design System

Thank you for your interest in contributing to the NT Government Web Design System! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Component Development](#component-development)
- [Design Tokens](#design-tokens)
- [Documentation](#documentation)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Review Process](#review-process)

## Code of Conduct

This project follows professional standards for collaboration:

- Be respectful and constructive in communication
- Welcome newcomers and provide helpful feedback
- Focus on what's best for the community and the project
- Show empathy towards other contributors

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Initial Setup

1. **Fork the repository** (if external contributor)

2. **Clone the repository**

   ```bash
   git clone https://github.com/ntgovernment/web-design-system.git
   cd web-design-system
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Validate design tokens**

   ```bash
   npm run tokens:validate
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Start Storybook**
   ```bash
   npm run storybook
   ```

### Project Structure

```
web-design-system/
├── src/
│   ├── components/        # React components
│   ├── themes/            # Theme CSS files (auto-generated)
│   ├── typography/        # Bootstrap typography overrides
│   └── index.ts           # Main export file
├── design-tokens/         # Design token source
│   ├── tokens.json        # Token definitions
│   └── config/            # Style Dictionary configuration
├── scripts/               # Build and utility scripts
├── .storybook/            # Storybook configuration
└── dist/                  # Build output (generated)
```

## Development Workflow

### Creating a Feature Branch

```bash
# Update your local main/dev branch
git checkout dev
git pull origin dev

# Create a feature branch
git checkout -b feature/component-name
# or
git checkout -b fix/bug-description
```

### Branch Naming Convention

- **Features**: `feature/component-name` or `feature/feature-description`
- **Bug fixes**: `fix/bug-description`
- **Documentation**: `docs/update-description`
- **Refactoring**: `refactor/description`
- **Design tokens**: `tokens/update-description`

### Making Changes

1. Make your changes in the appropriate files
2. Run the dev server to test: `npm run dev`
3. Check Storybook for visual verification: `npm run storybook`
4. Validate tokens if changed: `npm run tokens:validate`
5. Build to ensure no errors: `npm run build`

## Coding Standards

### TypeScript

- Use TypeScript for all component code
- Enable strict mode (already configured)
- Provide proper type definitions for all props
- Export all relevant types
- Document complex types with comments

**Example:**

```typescript
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Button size
   */
  size?: "sm";
  // ... more props
}
```

### React Component Structure

Components should follow this structure:

```typescript
import React from 'react';

export interface ComponentNameProps {
  // Props definition with JSDoc comments
}

/**
 * ComponentName description
 */
export const ComponentName = ({
  propName = 'defaultValue',
  ...props
}: ComponentNameProps) => {
  // Component logic

  return (
    // JSX
  );
};
```

### Code Style

- **Indentation**: 2 spaces
- **Quotes**: Single quotes for strings (except JSX attributes)
- **Semicolons**: Use semicolons
- **Line length**: Maximum 100 characters (soft limit)
- **File naming**: PascalCase for components (e.g., `Button.tsx`)
- **Variable naming**: camelCase
- **Constants**: UPPER_SNAKE_CASE for true constants

### ESLint

The project uses ESLint with TypeScript support. Before committing:

```bash
npm run lint
```

Fix any linting errors or provide justification for exceptions.

## Component Development

### Creating a New Component

1. **Create component directory**

   ```bash
   mkdir src/components/ComponentName
   ```

2. **Create component file** (`ComponentName.tsx`)
   - Define TypeScript interface
   - Implement component
   - Export component and props interface

3. **Create component documentation** (matching folder name in uppercase, e.g., `BUTTON.md` for Button component)
   - Features overview
   - Usage examples
   - Props documentation
   - Accessibility notes
   - Theming information
   - See existing components for template

4. **Create Storybook stories** (`ComponentName.stories.tsx`)

   ```typescript
   import type { Meta, StoryObj } from "@storybook/react";
   import { ComponentName } from "./ComponentName";

   const meta: Meta<typeof ComponentName> = {
     title: "⭐ Recent/ComponentName", // New components go in Recent group
     component: ComponentName,
     tags: ["autodocs"],
   };

   export default meta;
   type Story = StoryObj<typeof ComponentName>;

   export const Default: Story = {
     args: {
       // Default props with meaningful content (see Content Guidelines below)
     },
   };
   ```

   **Content Guidelines for Stories**:

   ⚠️ **Never use Lorem ipsum placeholder text** in stories or examples. Always use relevant, meaningful content that:
   - Describes the component's purpose or function
   - Demonstrates realistic use cases
   - Helps developers understand when to use the component
   - Provides context-appropriate examples

   **Examples**:

   ```typescript
   // ❌ BAD - Generic placeholder text
   export const Default: Story = {
     args: {
       title: "Sample Title",
       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
     },
   };

   // ✅ GOOD - Meaningful, contextual content
   export const Default: Story = {
     args: {
       title: "Information Notice",
       content:
         "This component displays important information with a distinct left border for visual emphasis. Use callouts to highlight tips, notices, or key information that users should pay attention to.",
     },
   };
   ```

   This guideline applies to:
   - All Storybook story examples
   - Component README files
   - Demo applications
   - Documentation code snippets
   - Test cases and mock data

5. **Update Storybook configuration** in `.storybook/preview.tsx`:

   a. **Add CSS imports** (near the top with other imports):

   ```typescript
   // Import ComponentName CSS files to ensure Vite processes them
   import "../src/components/ComponentName/ComponentName.css";
   import "../src/components/ComponentName/ComponentName-ntg.css";
   import "../src/components/ComponentName/ComponentName-central.css";
   ```

   b. **Add theme loading function** (with other load functions):

   ```typescript
   // Load ComponentName Component Styles (theme-specific overrides)
   const loadComponentNameStyles = (theme: string) => {
     // Remove existing theme-specific ComponentName CSS if present
     const existingComponentName = document.getElementById(
       "componentname-theme-css",
     );
     if (existingComponentName) {
       existingComponentName.remove();
     }

     // Add theme-specific ComponentName CSS overrides
     const componentNameCSS = document.createElement("link");
     componentNameCSS.id = "componentname-theme-css";
     componentNameCSS.rel = "stylesheet";
     componentNameCSS.href = new URL(
       `../src/components/ComponentName/ComponentName-${theme}.css`,
       import.meta.url,
     ).href;
     document.head.appendChild(componentNameCSS);
   };
   ```

   c. **Call loading function** in the `useEffect`:

   ```typescript
   useEffect(() => {
     // ... existing calls ...
     loadComponentNameStyles(theme); // Add this line
   }, [theme]);
   ```

   d. **Update story ordering** in `options.storySort.order`:

   ```typescript
   order: [
     "⭐ Recent",
     ["ComponentName", "Callout"],  // Add new component first
     "Components",
     ["Notification", "Pill", "Button", "Card", "Tag"],
     "Design System",
     ["Typography", "Icon"],
   ],
   ```

6. **Update exports** in `src/index.ts`

   ```typescript
   export { ComponentName } from "./components/ComponentName/ComponentName";
   export type { ComponentNameProps } from "./components/ComponentName/ComponentName";
   ```

7. **Move to Components group** (after component is no longer new)

   When the component is stable and no longer "recent", update the story title:
   - In `ComponentName.stories.tsx`: Change `title: "⭐ Recent/ComponentName"` to `title: "Components/ComponentName"`
   - In `.storybook/preview.tsx`: Move from "⭐ Recent" array to "Components" array in story ordering
   - Keep the CSS imports and theme loading function (these remain unchanged)

### Component Requirements

All components must:

- ✅ Be written in TypeScript with full type definitions
- ✅ Include comprehensive prop documentation with JSDoc comments
- ✅ Work with both NTG and Central themes
- ✅ Include proper ARIA attributes for accessibility
- ✅ Support keyboard navigation where applicable
- ✅ Have dedicated documentation matching folder name (e.g., BUTTON.md for Button/)
- ✅ Have Storybook stories demonstrating all variants
- ✅ Be added to "⭐ Recent" group in Storybook initially
- ✅ Be integrated into `.storybook/preview.tsx` with CSS imports and theme loading
- ✅ Use Bootstrap 5.3 classes where appropriate
- ✅ Follow the existing component structure and patterns

### Accessibility Checklist

- [ ] Semantic HTML elements used appropriately
- [ ] ARIA roles and attributes added where needed
- [ ] Keyboard navigation supported (Tab, Enter, Escape, Arrow keys)
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AAA standards (7:1 normal text, 4.5:1 large text)
- [ ] Screen reader announcements tested
- [ ] Icons marked with `aria-hidden="true"` when decorative
- [ ] Alternative text provided for meaningful icons/images

## Design Tokens

### Modifying Tokens

**⚠️ Important**: Theme CSS files are auto-generated. Never edit them directly.

1. **Update tokens** in `design-tokens/tokens.json`

   ```json
   {
     "ntg": {
       "color": {
         "primary": {
           "value": "#E87722",
           "type": "color"
         }
       }
     }
   }
   ```

2. **Validate tokens**

   ```bash
   npm run tokens:validate
   ```

3. **Generate CSS**

   ```bash
   npm run tokens:build
   ```

4. **Verify output** in `src/themes/`

### Token Guidelines

- Use semantic naming (e.g., `primary`, `success`, not `orange`, `green`)
- Maintain consistency between NTG and Central themes
- Document token purpose and usage
- Follow the existing token structure
- Update `design-tokens/DESIGN-TOKENS.md` if adding new token categories

## Documentation

### Documentation Requirements

All changes must include appropriate documentation updates:

- **Component README**: For new/modified components
- **Main README**: For new features or setup changes
- **CHANGELOG.md**: For all user-facing changes
- **Storybook**: Stories demonstrating functionality
- **Inline comments**: For complex logic
- **Content Standards**: Follow [CONTENT_STANDARDS.md](CONTENT_STANDARDS.md) - no Lorem ipsum placeholder text

### Documentation Style

- Use clear, concise language
- Include code examples
- Provide both basic and advanced usage examples
- Document edge cases and limitations
- Use proper Markdown formatting
- Link to related documentation
- **Never use Lorem ipsum**: Use meaningful, contextual content in all examples

### Content Guidelines

**No Lorem Ipsum Placeholder Text**

All examples, stories, and documentation must use meaningful, relevant content instead of Lorem ipsum placeholder text.

**Why?**

- Helps developers understand component purpose and usage
- Demonstrates realistic use cases
- Improves documentation clarity and usefulness
- Makes examples more accessible and professional
- Aids AI coding agents in understanding context

**What to use instead:**

| Component Type | Good Content Examples                                                                       |
| -------------- | ------------------------------------------------------------------------------------------- |
| Callouts       | "This component displays important information with a distinct left border..."              |
| Notifications  | "Your application has been submitted for review. You will receive an email notification..." |
| Buttons        | "Submit Form", "Save Changes", "Download Report"                                            |
| Cards          | "Analytics Dashboard", "View your analytics and track your progress"                        |
| Typography     | "This demonstrates the default body text styling with the current theme..."                 |

**For longer content:**

- Describe the component's text-wrapping behavior
- Explain the use case or purpose
- Provide realistic scenario examples
- Maintain professional, clear language

**Examples:**

```tsx
// ❌ AVOID
<Notification
  title="Notification"
  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>

// ✅ PREFER
<Notification
  title="Success"
  message="Your changes have been saved successfully. All updates are now live."
/>
```

This guideline applies to:

- Storybook stories (`.stories.tsx` files)
- Component README examples
- Demo applications (`src/demo/`)
- Documentation snippets
- Test fixtures and mock data
- API response examples

## Testing

### Current Testing Approach

- **Manual Testing**: Test components in Storybook
- **Visual Testing**: Verify both NTG and Central themes
- **Accessibility Testing**: Use Storybook a11y addon (WCAG AAA)
- **Build Testing**: Ensure production build succeeds

### Testing Checklist

Before submitting a PR:

- [ ] Component renders correctly in Storybook
- [ ] All variants and props work as expected
- [ ] Tested with both NTG and Central themes
- [ ] No accessibility violations in Storybook a11y addon
- [ ] No console errors or warnings
- [ ] Production build completes successfully (`npm run build`)
- [ ] Type checking passes (`npm run build` includes TypeScript check)

### Future Testing (Planned)

- Unit testing with Vitest
- End-to-end testing with Playwright
- Visual regression testing
- Automated accessibility testing

## Pull Request Process

### Before Submitting

1. **Update your branch**

   ```bash
   git checkout dev
   git pull origin dev
   git checkout your-feature-branch
   git rebase dev
   ```

2. **Run checks**

   ```bash
   npm run tokens:validate
   npm run build
   ```

3. **Update documentation**
   - Component README (if applicable)
   - CHANGELOG.md (add to [Unreleased] section)
   - Main README (if feature affects setup/usage)

4. **Commit your changes** (see [Commit Message Guidelines](#commit-message-guidelines))

### Submitting the PR

1. **Push your branch**

   ```bash
   git push origin your-feature-branch
   ```

2. **Create Pull Request** on GitHub
   - Use descriptive title: `feat: Add Dropdown component` or `fix: Button icon alignment`
   - Fill out PR template with:
     - Description of changes
     - Related issue numbers
     - Testing performed
     - Screenshots (for UI changes)
     - Checklist completion

3. **PR Template**

   ```markdown
   ## Description

   Brief description of what this PR does.

   ## Related Issues

   Closes #123

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Refactoring

   ## Testing

   - [ ] Tested in Storybook
   - [ ] Tested both themes
   - [ ] No accessibility violations
   - [ ] Build succeeds

   ## Screenshots (if applicable)

   [Add screenshots]

   ## Checklist

   - [ ] Code follows project style guidelines
   - [ ] Documentation updated
   - [ ] CHANGELOG.md updated
   - [ ] All tests pass
   ```

## Commit Message Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Build process, tooling, dependencies

### Examples

```bash
feat(Button): add icon support with left/right positioning

Adds icon prop to Button component with configurable position.
Icons are automatically marked as aria-hidden when button has text.

Closes #42

---

fix(Alert): correct dismiss button accessibility

Added proper aria-label to dismiss button for screen readers.

---

docs(README): add HTML API documentation

Documents the custom HTML API endpoint for component rendering.

---

chore(deps): update Storybook to 8.6.15
```

### Scopes

Common scopes:

- Component names: `Button`, `Card`, `Alert`, `Icon`
- `tokens`: Design tokens
- `themes`: Theme system
- `build`: Build process
- `storybook`: Storybook configuration
- `docs`: Documentation

## Review Process

### What Reviewers Look For

- **Code Quality**: Clean, readable, maintainable code
- **TypeScript**: Proper types, no `any` types
- **Accessibility**: ARIA attributes, keyboard navigation
- **Documentation**: Clear, comprehensive docs
- **Consistency**: Follows existing patterns
- **Testing**: Adequate testing performed
- **Performance**: No unnecessary re-renders or calculations

### Addressing Feedback

- Respond to all comments
- Make requested changes in new commits (don't force push)
- Mark conversations as resolved when addressed
- Ask questions if feedback is unclear

### Approval and Merge

- At least one approval required
- All conversations must be resolved
- CI checks must pass (when implemented)
- Squash and merge into `dev` branch

## Questions and Support

- **Questions**: Open an issue with the `question` label
- **Ideas**: Open an issue with the `enhancement` label
- **Bugs**: Open an issue with the `bug` label and include:
  - Description
  - Steps to reproduce
  - Expected vs actual behavior
  - Environment details

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the NT Government Web Design System! 🎉
