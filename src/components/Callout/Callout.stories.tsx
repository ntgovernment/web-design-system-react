import type { Meta, StoryObj } from "@storybook/react-vite";
import { Callout } from "./Callout";

const meta = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description:
        "The heading text displayed at the top of the callout (optional)",
    },
    content: {
      control: "text",
      description: "The main content text displayed below the heading",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the callout",
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default callout with sample content
 */
export const Default: Story = {
  args: {
    heading: "Callout heading",
    content:
      "This component displays important information with a distinct left border for visual emphasis. Use callouts to highlight tips, notices, or key information that users should pay attention to.",
  },
};

/**
 * Callout with longer content to demonstrate text wrapping
 */
export const LongContent: Story = {
  args: {
    heading: "Important Notice",
    content:
      "This callout demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Use callouts to highlight important information, tips, or notices that users should pay attention to without being as urgent as notifications. The component's design ensures that even lengthy content remains accessible and easy to read, with consistent spacing and a clear visual hierarchy that guides users through the information effectively.",
  },
};

/**
 * Callout with minimal content
 */
export const ShortContent: Story = {
  args: {
    heading: "Quick Tip",
    content: "Brief informational message for users.",
  },
};

/**
 * Callout without a heading - content only
 */
export const WithoutHeading: Story = {
  args: {
    content:
      "This callout has no heading, just content. Useful for simple informational messages where a heading is not necessary.",
  },
};

/**
 * Callout with custom styling
 */
export const CustomStyling: Story = {
  args: {
    heading: "Styled Callout",
    content:
      "This callout has additional custom styling applied via className.",
    className: "mb-4",
  },
};
