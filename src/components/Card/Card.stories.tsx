import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "⭐ Recent/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["full", "minicard", "compact"],
    },
    mediaAspectRatio: {
      control: "select",
      options: ["16:9"],
    },
    showImage: {
      control: "boolean",
    },
    showMeta: {
      control: "boolean",
    },
    showFooter: {
      control: "boolean",
    },
    showTitleIcon: {
      control: "boolean",
    },
    icon: {
      control: "text",
    },
    tagLabel: {
      control: "text",
      description:
        "Comma-separated tags with optional :variant suffix (e.g., 'News:blue, Event:green')",
    },
    dateLabel: {
      control: "text",
    },
    imageURL: {
      control: "text",
    },
    actionText: {
      control: "text",
    },
    actionIcon: {
      control: "text",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Full card variant matching Figma design with all sections:
 * - Rich media (16:9 image)
 * - Header metadata (tag and date)
 * - Title and body content
 * - Footer with action button
 *
 * This demonstrates composition of Image, Tag, and Button components.
 */
export const Full: Story = {
  args: {
    variant: "full",
    title: "Supporting survivors on National Day of Remembrance",
    description:
      "Join in and honour the resilience of survivors and the lives lost.",
    className: "",
    style: { maxWidth: "353px" },
  },
};

/**
 * Card with title icon displayed to the left of the title.
 * Useful for adding visual context or categorization.
 */
export const WithTitleIcon: Story = {
  args: {
    title: "Important Service Update",
    description:
      "Some services will have reduced hours during the holiday period.",
    showTitleIcon: true,
    icon: "fa-light fa-info-circle",
    tagLabel: "Alert:warning",
    dateLabel: "1 Feb 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Card without image section.
 * When showFooter is false, the entire card becomes clickable automatically.
 */
export const NoImage: Story = {
  args: {
    title: "Community Engagement Session",
    description:
      "Join us for a community discussion on local services and programs.",
    showImage: false,
    tagLabel: "Event:green",
    dateLabel: "25 Mar 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Card without metadata section (tag and date).
 */
export const NoMetadata: Story = {
  args: {
    title: "Environmental Sustainability Program",
    description:
      "Learn about our new programs to protect natural resources and promote sustainable practices.",
    showMeta: false,
    style: { maxWidth: "353px" },
  },
};

/**
 * Card without footer.
 * When showFooter is false, the entire card becomes clickable.
 */
export const NoFooter: Story = {
  args: {
    title: "Business Registration Services",
    description:
      "Register your business entity online with our streamlined application process.",
    showFooter: false,
    href: "#",
    tagLabel: "Service:blue",
    dateLabel: "15 Feb 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Minimal card with only title and description.
 * All optional sections are hidden, card becomes clickable.
 */
export const Minimal: Story = {
  args: {
    title: "Quick Update",
    description: "This is a minimal card with just the essential content.",
    showImage: false,
    showMeta: false,
    showFooter: false,
    href: "#",
    style: { maxWidth: "353px" },
  },
};

/**
 * Card with multiple tags.
 * Tags are comma-separated with optional :variant suffix.
 */
export const MultipleTags: Story = {
  args: {
    title: "Multi-Category Resource",
    description:
      "This resource covers multiple topics and is tagged accordingly.",
    tagLabel: "News:blue, Update:green, Featured:default",
    dateLabel: "20 Feb 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Card with custom action button text and icon.
 */
export const CustomAction: Story = {
  args: {
    title: "Download Important Documents",
    description:
      "Access forms, guidelines, and resources for your application.",
    actionText: "Download Now",
    actionIcon: "fa-light fa-download",
    tagLabel: "Resources:blue",
    dateLabel: "10 Feb 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Minicard variant with only title icon and title.
 * Minimal card for compact displays or dashboard widgets.
 * Automatically hides image, metadata, description, and footer sections.
 */
export const Minicard: Story = {
  args: {
    variant: "minicard",
    title: "Business Registration",
    icon: "fa-light fa-circle-info",
    description: "This will not be shown in minicard variant",
    style: { maxWidth: "353px" },
  },
};

/**
 * Compact variant with horizontal layout.
 * Features icon, title and description in a single row.
 * Ideal for contact cards, quick info blocks, or list items.
 * Automatically hides image, metadata, and footer sections.
 */
export const Compact: Story = {
  args: {
    variant: "compact",
    title: "Customer Service",
    description: "1800 000 000 or ext 12345",
    icon: "fa-light fa-phone",
    style: { maxWidth: "400px" },
  },
};
