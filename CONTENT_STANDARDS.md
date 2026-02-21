# Content Standards

This document outlines content standards for the NT Government Web Design System. These guidelines ensure that all examples, documentation, and stories use meaningful, contextual content that helps developers understand component usage and purpose.

## Core Principle: No Lorem Ipsum

**Never use Lorem ipsum placeholder text** in any part of this project.

### Why We Don't Use Lorem Ipsum

1. **Clarity**: Real content helps developers understand component purpose and usage
2. **Context**: Demonstrates realistic use cases and scenarios
3. **Professionalism**: Shows polished, production-ready examples
4. **Accessibility**: Makes examples more understandable for all users
5. **AI Training**: Helps coding assistants and AI agents understand context better

### Where This Applies

- ✅ Storybook stories (`.stories.tsx` files)
- ✅ Component README files
- ✅ Demo applications (`src/demo/`)
- ✅ Documentation code snippets
- ✅ Test fixtures and mock data
- ✅ API response examples
- ✅ HTML API examples
- ✅ Story data files (`.storybook/story-data.json`)

## Content Guidelines by Component Type

### Callouts

**Purpose**: Informational messages, tips, notices

**Good Examples**:

```tsx
// Short content
<Callout
  heading="Quick Tip"
  content="Remember to save your work regularly to avoid losing progress."
/>

// Long content demonstrating text wrapping
<Callout
  heading="Important Notice"
  content="This callout demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes."
/>
```

**Bad Examples**:

```tsx
// ❌ Generic placeholder
<Callout
  heading="Callout"
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
/>
```

### Notifications

**Purpose**: System feedback, alerts, status messages

**Good Examples**:

```tsx
// Success
<Notification
  variant="success"
  title="Changes Saved"
  message="Your changes have been saved successfully. All updates are now live."
/>

// Warning
<Notification
  variant="warning"
  title="Review Required"
  message="Please review the following information carefully before proceeding. Some actions may be irreversible."
/>

// Error
<Notification
  variant="danger"
  title="Submission Failed"
  message="An error has occurred while processing your request. Please try again or contact support if the issue persists."
/>

// Info with longer content
<Notification
  variant="info"
  title="Application Submitted"
  message="Your application has been submitted for review. You will receive an email notification once the review process is complete. This typically takes 2-3 business days."
/>
```

**Bad Examples**:

```tsx
// ❌ Meaningless text
<Notification
  variant="info"
  title="Notification"
  message="Lorem ipsum dolor sit amet."
/>
```

### Buttons

**Purpose**: Actions, navigation, form submission

**Good Examples**:

```tsx
<Button variant="primary">Submit Application</Button>
<Button variant="secondary">Save as Draft</Button>
<Button variant="tertiary">Cancel</Button>
<Button variant="primary" iconLeft="fa-light fa-download">Download Report</Button>
<Button variant="primary" iconRight="fa-light fa-arrow-right">Continue</Button>
```

**Bad Examples**:

```tsx
// ❌ Generic labels
<Button variant="primary">Button</Button>
<Button variant="primary">Click Here</Button>
```

### Cards

**Purpose**: Content containers, grouping related information

**Good Examples**:

```tsx
<Card title="Analytics Dashboard">
  <p>View your analytics and track your progress over time.</p>
</Card>

<Card
  title="User Profile"
  icon="fa-light fa-user"
>
  <p>Manage your account settings and preferences.</p>
</Card>

<Card
  title="Recent Activity"
  footer={<Button variant="primary">View All</Button>}
>
  <p>Display your most recent user activities and interactions.</p>
</Card>
```

**Bad Examples**:

```tsx
// ❌ No context
<Card title="Card Title">
  <p>Lorem ipsum dolor sit amet.</p>
</Card>
```

### Typography Examples

**Purpose**: Demonstrating text styles, fonts, sizing

**Good Examples**:

```tsx
<p>
  This demonstrates the default body text styling with the current theme.
  The font family changes based on the active theme: NTG uses Lato, Central uses Roboto.
</p>

<p className="lead">
  This is lead text. It stands out from regular paragraphs and is useful for
  introductions or highlighting important content.
</p>

<blockquote className="blockquote">
  <p>Design is not just what it looks like and feels like. Design is how it works.</p>
</blockquote>
<figcaption className="blockquote-footer">
  Steve Jobs in <cite title="New York Times">New York Times</cite>
</figcaption>
```

**Bad Examples**:

```tsx
// ❌ Placeholder text
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

### Pills & Tags

**Pills** - Interactive, removable filters or selections

**Purpose**: Removable selections, filters, user choices

**Good Examples**:

```tsx
// Pills (removable)
<Pill label="JavaScript" onRemove={() => console.log('Removed')} />
<Pill label="Status: Active" onRemove={() => console.log('Removed')} />
<Pill label="Category: Design" onRemove={() => console.log('Removed')} />
```

**Bad Examples**:

```tsx
// ❌ Generic labels
<Pill label="Pill label" onRemove={() => {}} />
```

---

**Tags** - Static categorization labels for content discovery

**Purpose**: Static categorization labels for content discovery, not interactive elements

**Key Guidelines:**

- Labels: 2-3 words maximum, using nouns or adjectives (not verbs)
- Quantity: No more than 3-4 tags per content item
- Presentation: Horizontal layout only
- No punctuation, icons, or action words
- Non-hierarchical categorization

**Good Examples**:

```tsx
// Search result categorization
<div className="d-flex gap-2">
  <Tag variant="blue" label="Online Services" />
  <Tag variant="green" label="Business" />
</div>

// News categorization
<div className="d-flex gap-2">
  <Tag variant="default" label="Government" />
  <Tag variant="blue" label="Infrastructure" />
  <Tag variant="warning" label="Update" />
</div>

// Event categorization
<div className="d-flex gap-2">
  <Tag variant="warning" label="Community Event" />
  <Tag variant="blue" label="Alice Springs" />
</div>

// Content with maximum tags (4)
<div className="d-flex gap-2">
  <Tag variant="default" label="Health" />
  <Tag variant="blue" label="Community" />
  <Tag variant="green" label="Regional" />
  <Tag variant="grey" label="Services" />
</div>
```

**Bad Examples**:

```tsx
// ❌ Using verbs/action words (suggests interactivity)
<Tag variant="blue" label="Find Online Systems" />
<Tag variant="green" label="Click Here" />

// ❌ Too many tags (more than 4)
<div className="d-flex gap-2">
  <Tag variant="default" label="Government" />
  <Tag variant="blue" label="Services" />
  <Tag variant="green" label="Online" />
  <Tag variant="warning" label="Important" />
  <Tag variant="grey" label="Darwin" />
  <Tag variant="red" label="New" />
</div>

// ❌ Labels too long (more than 3 words)
<Tag variant="default" label="Important Information About Government Services" />

// ❌ Using punctuation
<Tag variant="warning" label="Important!" />
<Tag variant="blue" label="News, Events" />

// ❌ Vertical layout
<div className="d-flex flex-column gap-2">
  <Tag variant="blue" label="Government" />
  <Tag variant="green" label="Services" />
</div>
```

**When NOT to use Tags:**

- As status indicators (use Notification component instead)
- As interactive navigation (tags are static)
- To create content hierarchy (tags are non-hierarchical)
- As calls-to-action (use Button component)

## Writing Longer Content Examples

When demonstrating text wrapping or longer content:

### Do:

- Explain component behavior naturally
- Describe real-world use cases
- Maintain professional, clear language
- Stay relevant to the component's purpose

### Example:

```tsx
<Callout
  heading="Extended Information"
  content="This callout demonstrates how the component gracefully handles longer content 
  while maintaining excellent readability and visual structure. The text automatically 
  wraps within the container, preserving proper spacing and typography across all 
  viewport sizes. Use callouts to highlight important information, tips, or notices 
  that users should pay attention to without being as urgent as notifications. The 
  component's design ensures that even lengthy content remains accessible and easy to 
  read, with consistent spacing and a clear visual hierarchy."
/>
```

### Don't:

```tsx
// ❌ NEVER do this
<Callout
  heading="Lorem Ipsum"
  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc 
  neque. Praesent posuere lobortis purus, ac laoreet est volutpat in. Sed euismod, 
  nisl eget ultricies aliquam..."
/>
```

## Realistic Scenario Examples

### Government Website Context

Given this is an NT Government design system, prefer examples relevant to government services:

**Good Examples**:

```tsx
// Applications and submissions
"Your application has been submitted for review.";
"Submit your license renewal application online.";

// Service information
"View your service request status and history.";
"Access government services and resources.";

// Notifications and alerts
"Scheduled maintenance will occur tonight from 11 PM to 2 AM.";
"Your payment has been processed successfully.";

// Navigation and actions
"Find government services";
"Download application form";
"Contact support";
```


## Story Naming Conventions

Story names should also be descriptive:

**Good**:

```typescript
export const WithLongContent: Story = {
  /* ... */
};
export const SuccessNotification: Story = {
  /* ... */
};
export const WithIconLeft: Story = {
  /* ... */
};
```

**Avoid**:

```typescript
export const Example1: Story = {
  /* ... */
};
export const Test: Story = {
  /* ... */
};
export const Demo: Story = {
  /* ... */
};
```

## Documentation Code Snippets

All code examples in README files should use realistic content:

**README Example**:

```tsx
// ✅ Good - Shows realistic usage
import { Button, Notification } from "@ntgovernment/web-design-system";

function MyApp() {
  return (
    <>
      <Notification
        variant="success"
        title="Form Submitted"
        message="Your application has been received and is being processed."
      />
      <Button variant="primary">Submit Application</Button>
    </>
  );
}
```

```tsx
// ❌ Bad - Generic placeholders
import { Button, Notification } from "@ntgovernment/web-design-system";

function MyApp() {
  return (
    <>
      <Notification
        variant="info"
        title="Title"
        message="Lorem ipsum dolor sit amet."
      />
      <Button variant="primary">Button</Button>
    </>
  );
}
```

## Review Checklist

Before submitting a PR, verify:

- [ ] No instances of "Lorem ipsum" or "lorem ipsum" in any files
- [ ] All story examples use meaningful, contextual content
- [ ] Button labels describe actions, not generic "Button" or "Click Here"
- [ ] Notification messages describe realistic system states
- [ ] Card content explains purpose or provides context
- [ ] Longer examples explain component behavior or use cases
- [ ] Content is professional and appropriate for government context
- [ ] Examples help developers understand when/how to use components

## AI Agent Guidance

For AI coding assistants working on this project:

1. **Never generate Lorem ipsum** in any context
2. **Replace existing Lorem ipsum** if found during modifications
3. **Use contextual content** that explains component purpose
4. **Reference this document** when creating new examples
5. **Validate content** against the guidelines above
6. **Prioritize clarity** - content should help developers understand usage

## Enforcement

- Pull requests with Lorem ipsum content will be rejected
- Code reviews will check for meaningful content
- Automated checks may be added to detect placeholder text
- Story data generation validates against placeholder patterns

## Questions?

If you're unsure what content to use for a specific component:

1. Look at existing examples in this project
2. Reference component README files
3. Consider the component's real-world use case
4. Ask in PR comments for suggestions
5. Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for additional guidance

---

**Remember**: Every piece of example content is an opportunity to educate developers about proper component usage. Make it count!
