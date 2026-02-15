import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { SideNavigation } from "./SideNavigation";

const meta = {
  title: "Components/SideNavigation",
  component: SideNavigation,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A vertical navigation sidebar for content sections. Displays a section header and list of navigation items, helping users quickly find related pages within the same topic. Use for large, content-heavy sections with 5+ pages.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    sectionTitle: {
      control: "text",
      description: "Title of the section displayed in the header",
    },
    items: {
      control: "object",
      description: "Array of navigation items to display",
    },
    onItemClick: {
      action: "item clicked",
      description: "Callback fired when a navigation item is clicked",
    },
    onToggleExpand: {
      action: "expand toggled",
      description: "Callback fired when an expandable item is toggled",
    },
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Side Navigation component showing a typical service navigation structure.
 * Includes a section header and multiple navigation items with one current/active item.
 */
export const Default: Story = {
  args: {
    sectionTitle: "Licensing Services",
    items: [
      {
        id: "overview",
        label: "Service Overview",
        href: "#overview",
        isCurrent: true,
      },
      {
        id: "eligibility",
        label: "Eligibility",
        href: "#eligibility",
      },
      {
        id: "apply",
        label: "How to Apply",
        href: "#apply",
      },
      {
        id: "fees",
        label: "Costs and Fees",
        href: "#fees",
      },
      {
        id: "support",
        label: "Get Support",
        href: "#support",
      },
    ],
  },
};

/**
 * Interactive example demonstrating the component with state management,
 * allowing users to click items and see the current item update.
 */
export const Interactive: Story = {
  args: {
    sectionTitle: "Documentation",
    items: [],
  },
  render: () => {
    const [currentItem, setCurrentItem] = useState("overview");
    const [expandedItems, setExpandedItems] = useState<Set<string>>(
      new Set(["overview"]),
    );

    const navigationItems = [
      {
        id: "overview",
        label: "Getting Started",
        href: "#overview",
        isCurrent: currentItem === "overview",
        isExpandable: true,
        isExpanded: expandedItems.has("overview"),
        children: [
          {
            id: "setup",
            label: "Setup Guide",
            href: "#setup",
            isCurrent: currentItem === "setup",
          },
          {
            id: "first-steps",
            label: "First Steps",
            href: "#first-steps",
            isCurrent: currentItem === "first-steps",
          },
        ],
      },
      {
        id: "basics",
        label: "Basics",
        href: "#basics",
        isCurrent: currentItem === "basics",
      },
      {
        id: "advanced",
        label: "Advanced Topics",
        href: "#advanced",
        isCurrent: currentItem === "advanced",
        isExpandable: true,
        isExpanded: expandedItems.has("advanced"),
        children: [
          {
            id: "performance",
            label: "Performance Optimization",
            href: "#performance",
            isCurrent: currentItem === "performance",
          },
          {
            id: "security",
            label: "Security",
            href: "#security",
            isCurrent: currentItem === "security",
          },
        ],
      },
      {
        id: "examples",
        label: "Code Examples",
        href: "#examples",
        isCurrent: currentItem === "examples",
      },
      {
        id: "faq",
        label: "Frequently Asked Questions",
        href: "#faq",
        isCurrent: currentItem === "faq",
      },
    ];

    const handleItemClick = (id: string) => {
      setCurrentItem(id);
    };

    const handleToggleExpand = (id: string, expanded: boolean) => {
      const newExpanded = new Set(expandedItems);
      if (expanded) {
        newExpanded.add(id);
      } else {
        newExpanded.delete(id);
      }
      setExpandedItems(newExpanded);
    };

    return (
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "flex-start",
        }}
      >
        <div>
          <SideNavigation
            sectionTitle="Documentation"
            items={navigationItems}
            onItemClick={handleItemClick}
            onToggleExpand={handleToggleExpand}
          />
          <p className="text-muted mt-3" style={{ fontSize: "12px" }}>
            Current: <strong>{currentItem}</strong>
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "16px",
            backgroundColor: "#f5f5f7",
            borderRadius: "4px",
            minHeight: "400px",
          }}
        >
          <h3>Content Area</h3>
          <p>
            Selected item: <strong>{currentItem}</strong>
          </p>
          <p>
            This area represents the main content for the selected navigation
            item.
          </p>
        </div>
      </div>
    );
  },
};

/**
 * Example with expandable sections showing nested navigation items.
 * Items can be expanded and collapsed to reveal/hide child items.
 */
export const WithExpandableItems: Story = {
  args: {
    sectionTitle: "Online Services",
    items: [
      {
        id: "business",
        label: "Business Services",
        href: "#business",
        isExpandable: true,
        isExpanded: true,
        children: [
          {
            id: "registration",
            label: "Business Registration",
            href: "#registration",
          },
          {
            id: "licensing",
            label: "Licensing",
            href: "#licensing",
          },
          {
            id: "permits",
            label: "Permits and Approvals",
            href: "#permits",
          },
        ],
      },
      {
        id: "personal",
        label: "Personal Services",
        href: "#personal",
        isExpandable: true,
        children: [
          {
            id: "identification",
            label: "Identification",
            href: "#identification",
          },
          {
            id: "permits-personal",
            label: "Personal Permits",
            href: "#permits-personal",
          },
        ],
      },
      {
        id: "utilities",
        label: "Utilities",
        href: "#utilities",
      },
      {
        id: "payments",
        label: "Payments",
        href: "#payments",
      },
      {
        id: "reports",
        label: "Reports and Forms",
        href: "#reports",
      },
    ],
  },
};

/**
 * Example showing a larger navigation structure for a comprehensive documentation site.
 * Demonstrates how the component handles multiple sections and items.
 */
export const LargeNavigationStructure: Story = {
  args: {
    sectionTitle: "Health and Wellness Services",
    items: [
      {
        id: "overview",
        label: "Service Overview",
        href: "#overview",
        isCurrent: true,
      },
      {
        id: "health-checks",
        label: "Health Assessments",
        href: "#health-checks",
      },
      {
        id: "mental-health",
        label: "Mental Health Support",
        href: "#mental-health",
      },
      {
        id: "aged-care",
        label: "Aged Care Services",
        href: "#aged-care",
      },
      {
        id: "disability",
        label: "Disability Services",
        href: "#disability",
      },
      {
        id: "subsidies",
        label: "Subsidies and Support",
        href: "#subsidies",
      },
      {
        id: "contact",
        label: "Contact and Support",
        href: "#contact",
      },
    ],
  },
};

/**
 * Minimal example with the minimum recommended number of items (5).
 * Shows the component at its simplest.
 */
export const MinimalExample: Story = {
  args: {
    sectionTitle: "Support",
    items: [
      {
        id: "getting-help",
        label: "Getting Help",
        href: "#help",
        isCurrent: true,
      },
      {
        id: "contact",
        label: "Contact Us",
        href: "#contact",
      },
      {
        id: "faq",
        label: "Frequently Asked Questions",
        href: "#faq",
      },
      {
        id: "feedback",
        label: "Send Feedback",
        href: "#feedback",
      },
      {
        id: "community",
        label: "Community Forum",
        href: "#community",
      },
    ],
  },
};

/**
 * Each navigation item with a different state (current, default, expandable).
 * Useful for testing and understanding component states.
 */
export const AllStates: Story = {
  args: {
    sectionTitle: "Application Process",
    items: [
      {
        id: "prepare",
        label: "Prepare Your Documents",
        href: "#prepare",
      },
      {
        id: "submit",
        label: "Submit Application",
        href: "#submit",
        isCurrent: true,
      },
      {
        id: "review",
        label: "Review Process",
        href: "#review",
      },
      {
        id: "follow-up",
        label: "Follow-up Steps",
        href: "#follow-up",
        isExpandable: true,
        isExpanded: false,
        children: [
          {
            id: "tracking",
            label: "Track Your Application",
            href: "#tracking",
          },
          {
            id: "update",
            label: "Update Information",
            href: "#update",
          },
        ],
      },
      {
        id: "approval",
        label: "After Approval",
        href: "#approval",
      },
    ],
  },
};

/**
 * Example demonstrating long labels and how the component handles text wrapping.
 * Shows that the component gracefully handles various text lengths.
 */
export const WithLongLabels: Story = {
  args: {
    sectionTitle: "Government Programs and Services Registry",
    items: [
      {
        id: "overview",
        label: "Service Overview and Registration Requirements",
        href: "#overview",
        isCurrent: true,
      },
      {
        id: "eligibility",
        label: "Eligibility Assessment and Qualification",
        href: "#eligibility",
      },
      {
        id: "apply",
        label: "Application Process and Documentation",
        href: "#apply",
      },
      {
        id: "fees",
        label: "Costs, Fees, and Payment Methods",
        href: "#fees",
      },
      {
        id: "support",
        label: "Customer Support and Dispute Resolution",
        href: "#support",
      },
    ],
  },
};

/**
 * Dark background example showing the component's contrast and readability
 * when placed on darker backgrounds.
 */
export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#2a2a2a",
          padding: "24px",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    sectionTitle: "Documentation",
    items: [
      {
        id: "intro",
        label: "Introduction",
        href: "#intro",
        isCurrent: true,
      },
      {
        id: "install",
        label: "Installation",
        href: "#install",
      },
      {
        id: "usage",
        label: "Usage Guide",
        href: "#usage",
      },
      {
        id: "api",
        label: "API Reference",
        href: "#api",
      },
      {
        id: "examples",
        label: "Code Examples",
        href: "#examples",
      },
    ],
  },
};

/**
 * Example within a typical page layout showing how Side Navigation
 * fits alongside main content.
 */
export const InPageLayout: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "32px" }}>
        <div style={{ minWidth: "298px" }}>
          <Story />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Accessible Services for Disability Support</h2>
          <p>
            This page provides information about disability support services
            available through the NT Government. Use the sidebar navigation to
            explore different aspects of our services.
          </p>
          <h3>Overview</h3>
          <p>
            We are committed to providing accessible and inclusive services for
            all people with disabilities. Our services are designed to assist
            with daily living, employment, education, and social participation.
          </p>
          <h3>Getting Started</h3>
          <p>
            To access disability support services, you'll need to complete an
            initial assessment. This helps us understand your needs and
            recommend appropriate support options.
          </p>
        </div>
      </div>
    ),
  ],
  args: {
    sectionTitle: "Disability Services",
    items: [
      {
        id: "overview",
        label: "Service Overview",
        href: "#overview",
        isCurrent: true,
      },
      {
        id: "eligibility",
        label: "Eligibility Requirements",
        href: "#eligibility",
      },
      {
        id: "assessment",
        label: "Assessment Process",
        href: "#assessment",
      },
      {
        id: "support-types",
        label: "Types of Support",
        href: "#support-types",
      },
      {
        id: "contact",
        label: "Contact Information",
        href: "#contact",
      },
    ],
  },
};

/**
 * Example showing keyboard accessibility by clicking directly on items
 * to demonstrate interactive functionality.
 */
export const AccessibilityDemo: Story = {
  args: {
    sectionTitle: "Accessibility Features",
    items: [],
  },
  render: () => {
    const [currentItem, setCurrentItem] = useState("overview");

    return (
      <div>
        <p className="mb-3">
          <strong>Accessibility Note:</strong> Use Tab to navigate between
          items, Enter to select, and Space to expand items. Current selection:{" "}
          <code>{currentItem}</code>
        </p>
        <SideNavigation
          sectionTitle="Accessibility Features"
          items={[
            {
              id: "overview",
              label: "Accessibility Overview",
              href: "#overview",
              isCurrent: currentItem === "overview",
            },
            {
              id: "wcag",
              label: "WCAG 2.1 Compliance",
              href: "#wcag",
              isCurrent: currentItem === "wcag",
            },
            {
              id: "keyboard",
              label: "Keyboard Navigation",
              href: "#keyboard",
              isCurrent: currentItem === "keyboard",
            },
            {
              id: "screen-reader",
              label: "Screen Reader Support",
              href: "#screen-reader",
              isCurrent: currentItem === "screen-reader",
            },
            {
              id: "assistive",
              label: "Assistive Technology",
              href: "#assistive",
              isCurrent: currentItem === "assistive",
            },
          ]}
          onItemClick={(id) => setCurrentItem(id)}
        />
      </div>
    );
  },
};
