import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A collapsable and expandable panel of content that gives the user choice over what they see. Accordions allow users to show and hide related sections of content quickly. They should be used sparingly - if users need most of the content on a page, it should be formatted in plain text, not hidden in an accordion.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Array of accordion items to display",
      control: { type: "object" },
    },
    showOpenCloseAll: {
      control: "boolean",
      description: 'Show "Open/Close all" link at top right',
      table: { defaultValue: { summary: "true" } },
    },
    alwaysOpen: {
      control: "boolean",
      description: "Allow multiple accordions to be open simultaneously",
      table: { defaultValue: { summary: "false" } },
    },
    theme: {
      control: "select",
      options: ["ntg", "central"],
      description: "Theme variant (ntg for external, central for intranet)",
    },
    className: {
      control: "text",
      description: "Additional CSS class names",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample content for accordions
const sampleContent = {
  item1: (
    <>
      <p>
        This is the first item&apos;s accordion body. It demonstrates standard
        text content with <a href="#">inline links</a> and{" "}
        <strong>text formatting</strong>.
      </p>
      <ul>
        <li>Bullet point one with relevant information</li>
        <li>Bullet point two with additional details</li>
        <li>Bullet point three with supporting context</li>
      </ul>
    </>
  ),
  item2: (
    <>
      <p>
        The second accordion contains information relevant to a specific subset
        of users. This helps keep the main page uncluttered while still
        providing access to important details.
      </p>
      <p>
        Multiple paragraphs can be included with appropriate spacing and
        formatting to improve readability.
      </p>
    </>
  ),
  item3: (
    <>
      <h4 style={{ marginTop: 0 }}>Subheading within accordion</h4>
      <p>
        Accordions can contain various content types including headings,
        paragraphs, lists, and links to other resources.
      </p>
      <p>
        Learn more about <a href="#">related topics</a> or visit the{" "}
        <a href="#">documentation page</a> for additional guidance.
      </p>
    </>
  ),
  item4: (
    <>
      <p>
        This section provides additional context and information that
        supplements the main page content.
      </p>
      <p>
        Use accordions to organize related information into logical, digestible
        sections.
      </p>
    </>
  ),
};

/**
 * Default accordion group with standard styling.
 * Groups must contain a minimum of 3 accordions.
 * Only one accordion can be open at a time (unless alwaysOpen is true).
 */
export const Default: Story = {
  args: {
    items: [
      {
        id: "accordion-1",
        title: "What services are available?",
        content: sampleContent.item1,
        defaultOpen: false,
      },
      {
        id: "accordion-2",
        title: "How do I apply for assistance?",
        content: sampleContent.item2,
        defaultOpen: false,
      },
      {
        id: "accordion-3",
        title: "What documentation do I need?",
        content: sampleContent.item3,
        defaultOpen: false,
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Accordion with icons provides additional visual context.
 * Use sparingly when an additional visual aid would help clarify the accordion's title.
 * Icons should be meaningful and relevant to the content.
 */
export const WithIcons: Story = {
  args: {
    items: [
      {
        id: "icon-1",
        title: "Licenses and permits",
        content: sampleContent.item1,
        icon: "fa-light fa-id-card",
        showIcon: true,
      },
      {
        id: "icon-2",
        title: "Business registration",
        content: sampleContent.item2,
        icon: "fa-light fa-briefcase",
        showIcon: true,
      },
      {
        id: "icon-3",
        title: "Tax obligations",
        content: sampleContent.item3,
        icon: "fa-light fa-file-invoice-dollar",
        showIcon: true,
      },
      {
        id: "icon-4",
        title: "Employment requirements",
        content: sampleContent.item4,
        icon: "fa-light fa-users",
        showIcon: true,
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Larger accordion group showing recommended maximum.
 * Groups should contain no more than 6-8 accordions.
 * If you need more, consider breaking content into multiple pages or sections.
 */
export const LargeGroup: Story = {
  args: {
    items: [
      {
        id: "large-1",
        title: "Section 1: Overview",
        content: sampleContent.item1,
      },
      {
        id: "large-2",
        title: "Section 2: Requirements",
        content: sampleContent.item2,
      },
      {
        id: "large-3",
        title: "Section 3: Application process",
        content: sampleContent.item3,
      },
      {
        id: "large-4",
        title: "Section 4: Supporting documents",
        content: sampleContent.item4,
      },
      {
        id: "large-5",
        title: "Section 5: Fees and charges",
        content: sampleContent.item1,
      },
      {
        id: "large-6",
        title: "Section 6: Assessment timeframes",
        content: sampleContent.item2,
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Accordion with one item expanded by default.
 * Useful when users typically need to see specific content immediately.
 * The first or most important item can be opened by default.
 */
export const OneExpanded: Story = {
  args: {
    items: [
      {
        id: "expanded-1",
        title: "Currently viewing this section",
        content: sampleContent.item1,
        defaultOpen: true,
      },
      {
        id: "expanded-2",
        title: "Additional information",
        content: sampleContent.item2,
        defaultOpen: false,
      },
      {
        id: "expanded-3",
        title: "Related resources",
        content: sampleContent.item3,
        defaultOpen: false,
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * NT.GOV.AU theme variant.
 * External website styling with Lato font and ochre accent colors.
 * This is the default theme for public-facing Northern Territory Government websites.
 */
export const ThemeNTG: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    items: [
      {
        id: "ntg-1",
        title: "Northern Territory services",
        content: sampleContent.item1,
        icon: "fa-light fa-landmark",
        showIcon: true,
      },
      {
        id: "ntg-2",
        title: "Community programs",
        content: sampleContent.item2,
        icon: "fa-light fa-people-group",
        showIcon: true,
      },
      {
        id: "ntg-3",
        title: "Contact information",
        content: sampleContent.item3,
        icon: "fa-light fa-phone",
        showIcon: true,
      },
    ],
    theme: "ntg",
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * NTG Central (Intranet) theme variant.
 * Internal website styling with Roboto font and green accent colors.
 * Used for NTG Central intranet and internal staff-facing applications.
 */
export const ThemeCentral: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    items: [
      {
        id: "central-1",
        title: "Staff resources",
        content: sampleContent.item1,
        icon: "fa-light fa-folder-open",
        showIcon: true,
      },
      {
        id: "central-2",
        title: "Policy documents",
        content: sampleContent.item2,
        icon: "fa-light fa-file-lines",
        showIcon: true,
      },
      {
        id: "central-3",
        title: "Training materials",
        content: sampleContent.item3,
        icon: "fa-light fa-graduation-cap",
        showIcon: true,
      },
    ],
    theme: "central",
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Theme comparison showing both variants side by side.
 * Demonstrates the visual differences between NT.GOV.AU and NTG Central themes.
 * Note the different fonts (Lato vs Roboto) and accent colors (ochre vs green).
 */
export const ThemeComparison: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem", fontFamily: "Lato" }}>
          NT.GOV.AU Theme
        </h3>
        <Accordion
          items={[
            {
              id: "comp-ntg-1",
              title: "External website style",
              content: sampleContent.item1,
            },
            {
              id: "comp-ntg-2",
              title: "Lato font family",
              content: sampleContent.item2,
            },
            {
              id: "comp-ntg-3",
              title: "Ochre accent color",
              content: sampleContent.item3,
            },
          ]}
          theme="ntg"
          showOpenCloseAll={true}
          alwaysOpen={false}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "1rem", fontFamily: "Roboto" }}>
          NTG Central Theme
        </h3>
        <Accordion
          items={[
            {
              id: "comp-central-1",
              title: "Internal website style",
              content: sampleContent.item1,
            },
            {
              id: "comp-central-2",
              title: "Roboto font family",
              content: sampleContent.item2,
            },
            {
              id: "comp-central-3",
              title: "Green accent color",
              content: sampleContent.item3,
            },
          ]}
          theme="central"
          showOpenCloseAll={true}
          alwaysOpen={false}
        />
      </div>
    </div>
  ),
};

/**
 * Accessibility demonstration showing keyboard navigation and screen reader support.
 * All accordions must be fully keyboard accessible with proper ARIA attributes.
 *
 * Keyboard navigation:
 * - Tab to navigate between accordion buttons
 * - Enter or Space to expand/collapse
 * - All interactive elements are keyboard accessible
 */
export const Accessibility: Story = {
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: "color-contrast", enabled: true },
          { id: "aria-allowed-attr", enabled: true },
          { id: "aria-required-attr", enabled: true },
        ],
      },
    },
  },
  args: {
    items: [
      {
        id: "a11y-1",
        title: "Keyboard navigation supported",
        content: (
          <>
            <p>
              Use <kbd>Tab</kbd> to navigate between accordion buttons.
            </p>
            <p>
              Use <kbd>Enter</kbd> or <kbd>Space</kbd> to expand/collapse.
            </p>
            <p>All interactive elements are keyboard accessible.</p>
          </>
        ),
      },
      {
        id: "a11y-2",
        title: "Screen reader compatible",
        content: (
          <>
            <p>Proper ARIA attributes ensure screen reader compatibility:</p>
            <ul>
              <li>
                <code>aria-expanded</code> indicates open/closed state
              </li>
              <li>
                <code>aria-controls</code> links button to content panel
              </li>
              <li>
                <code>role</code> attributes provide semantic meaning
              </li>
            </ul>
          </>
        ),
      },
      {
        id: "a11y-3",
        title: "Focus indicators visible",
        content: (
          <>
            <p>Clear focus states help keyboard users navigate:</p>
            <p>
              NTG theme uses ochre outline, Central theme uses green outline.
            </p>
            <p>Focus indicators meet WCAG 2.1 requirements for visibility.</p>
          </>
        ),
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Rich content example showing various content types within accordions.
 * Accordions can contain links, formatting, lists, and other standard HTML elements.
 * Avoid putting buttons or complex interactive components inside accordions.
 */
export const RichContent: Story = {
  args: {
    items: [
      {
        id: "rich-1",
        title: "Multiple content types",
        content: (
          <>
            <h4 style={{ marginTop: 0 }}>Subheading</h4>
            <p>
              Paragraphs with <strong>bold text</strong>, <em>italic text</em>,
              and <a href="#">hyperlinks</a>.
            </p>
            <ul>
              <li>Unordered list item 1</li>
              <li>
                Unordered list item 2 with <a href="#">a link</a>
              </li>
              <li>Unordered list item 3</li>
            </ul>
          </>
        ),
      },
      {
        id: "rich-2",
        title: "Ordered lists and links",
        content: (
          <>
            <p>
              Step-by-step instructions (though accordions should generally be
              avoided for stepped processes):
            </p>
            <ol>
              <li>
                First step with <a href="#">relevant link</a>
              </li>
              <li>Second step with additional context</li>
              <li>Third step completing the process</li>
            </ol>
            <p>
              For more information, visit the <a href="#">help center</a>.
            </p>
          </>
        ),
      },
      {
        id: "rich-3",
        title: "Mixed formatting",
        content: (
          <>
            <p>
              <strong>Important:</strong> This section contains critical
              information.
            </p>
            <p>
              Additional context with <a href="#">supporting documentation</a>{" "}
              and detailed explanations.
            </p>
          </>
        ),
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Minimum group size example.
 * Accordions must always appear in groups of at least 3 items.
 * Never use a single accordion in isolation.
 */
export const MinimumGroupSize: Story = {
  args: {
    items: [
      {
        id: "min-1",
        title: "First accordion in minimum group",
        content: sampleContent.item1,
      },
      {
        id: "min-2",
        title: "Second accordion in minimum group",
        content: sampleContent.item2,
      },
      {
        id: "min-3",
        title: "Third accordion in minimum group",
        content: sampleContent.item3,
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: false,
  },
};

/**
 * Always open mode allows multiple accordions to be expanded simultaneously.
 * Users can open and close accordions independently without affecting others.
 * The "Open all" / "Close all" control is particularly useful in this mode.
 */
export const AlwaysOpen: Story = {
  args: {
    items: [
      {
        id: "always-1",
        title: "First section (can stay open)",
        content: sampleContent.item1,
        defaultOpen: true,
      },
      {
        id: "always-2",
        title: "Second section (can stay open)",
        content: sampleContent.item2,
        defaultOpen: true,
      },
      {
        id: "always-3",
        title: "Third section (can stay open)",
        content: sampleContent.item3,
        defaultOpen: false,
      },
    ],
    showOpenCloseAll: true,
    alwaysOpen: true,
  },
};
