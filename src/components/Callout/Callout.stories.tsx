import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./Callout";

const meta = {
  title: " ⭐ Recent/Callout",
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
      "Callout content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in.",
  },
};

/**
 * Callout with longer content to demonstrate text wrapping
 */
export const LongContent: Story = {
  args: {
    heading: "Important Notice",
    content:
      "This is a callout with a much longer content section to demonstrate how the component handles text wrapping and maintains readability. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in. Sed euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
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
