import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
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
    showButton: {
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
 * Full Card Variant - Complete card with all sections
 *
 * Sections displayed:
 * - Media: 16:9 aspect ratio image
 * - Header metadata: Tags and date labels
 * - Title: Main heading with optional icon
 * - Description: Body content
 * - Footer: "Find out more" action button
 *
 * Features:
 * - All interactive sections (clickable when href provided)
 * - Theme-specific focus outline (keyboard accessible)
 * - Design tokens for consistent spacing and typography
 * - Button uses Button.css classes on span element (not Button component)
 *
 * Use Case: Rich content display for news, resources, events, services
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
 * Full Variant with Title Icon
 *
 * Icon displayed to the left of the title text.
 * Useful for adding visual hierarchy and categorization at a glance.
 *
 * Features:
 * - Icon from FontAwesome 6 library
 * - Automatically positioned left of title
 * - Respects design tokens for spacing (ms-2 margin)
 * - Works with any FontAwesome icon class string
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
 * Full Variant Without Image Section
 *
 * Demonstrates card with image hidden (showImage={false}).
 * All other sections render normally:
 * - Header metadata (tags and date) still visible
 * - Title and description displayed
 * - Footer with action button
 *
 * Use Case: When media is not available or content-focused display is preferred
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
 * Full Variant Without Metadata Section
 *
 * Demonstrates card with header metadata hidden (showMeta={false}).
 * Removes tags and date display but keeps:
 * - Media section
 * - Title and description
 * - Footer with action button
 *
 * Use Case: Simple content cards without need for categorization or dating
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
 * Full Variant Without Action Button (showButton={false})
 *
 * Key Points:
 * - **Footer container ALWAYS renders** for full variant to maintain consistent spacing
 * - **Only the button is hidden**, footer element persists with padding
 * - **Prevents layout shift** when toggling button visibility dynamically
 * - **Footer spacing remains consistent** across all states
 *
 * Behavior:
 * - showButton={false}: Footer renders but button inside is hidden
 * - showButton={true}: Footer renders with action button
 * - Custom footer: Pass footer prop to override entirely
 *
 * Implementation:
 * The footer container (.card-footer) with padding always renders for full variant.
 * Only the button span (.btn .btn-tertiary) conditionally renders inside.
 *
 * Use Case:
 * - Links/cards that don't need action button
 * - Layouts where consistent card height is required
 * - Progressive disclosure (button shown/hidden based on state)
 */
export const NoButton: Story = {
  args: {
    title: "Business Registration Services",
    description:
      "Register your business entity online with our streamlined application process.",
    showButton: false,
    href: "#",
    tagLabel: "Service:blue",
    dateLabel: "15 Feb 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Minimal Full Card Configuration
 *
 * Demonstrates compact card with most sections hidden:
 * - showImage={false}: No media section
 * - showMeta={false}: No tags or date
 * - showButton={false}: Footer container renders but button hidden
 *
 * Features:
 * - Clean, focused content display
 * - Clickable for navigation (href provided)
 * - Consistent footer spacing maintained
 * - All design tokens and theming still applied
 *
 * Use Case: Content cards where metadata and media not relevant
 */
export const Minimal: Story = {
  args: {
    title: "Quick Update",
    description: "This is a minimal card with just the essential content.",
    showImage: false,
    showMeta: false,
    showButton: false,
    href: "#",
    style: { maxWidth: "353px" },
  },
};

/**
 * Card with Multiple Metadata Tags
 *
 * Demonstrates tag rendering with multiple values:
 * - Tags comma-separated: "News:blue, Update:green, Featured:default"
 * - Each tag rendered with color variant
 * - Scrolls horizontally if space constrained
 *
 * Tag Syntax:
 * - "News:blue" -> tag text "News" with blue color variant
 * - "Update:green" -> tag text "Update" with green color variant
 * - "Featured:default" -> tag text "Featured" with default color (no color variant)
 *
 * Use Case: Content with multiple categories or labels
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
 * Card with Custom Action Button
 *
 * Demonstrates how to customize footer button:
 * - actionText="Download Now": Custom button label
 * - actionIcon="fa-light fa-download": FontAwesome icon
 * - Icon displays to the right of text (ms-2 margin)
 *
 * Features:
 * - Any FontAwesome 6 icon can be used
 * - Button styling from Button.css (btn, btn-tertiary classes)
 * - Theme-specific colors (NT.GOV.AU, Central themes)
 * - Keyboard accessible (tab navigation)
 *
 * Use Case: Cards with specific actions (download, register, apply, etc.)
 */
export const CustomAction: Story = {
  args: {
    title: "Download Important Documents",
    description:
      "Access forms, guidelines, and resources for your application.",
    actionText: "Download Now",
    actionIcon: "fa-solid fa-download",
    tagLabel: "Resources:blue",
    dateLabel: "10 Feb 2025",
    style: { maxWidth: "353px" },
  },
};

/**
 * Minicard Variant - Minimal Compact Card
 *
 * Renders only:
 * - Icon (mandatory for minicard)
 * - Title text
 *
 * Automatically hidden (cannot be shown in minicard):
 * - Media/image section
 * - Header metadata (tags, date)
 * - Description/body content
 * - Footer and button
 *
 * Features:
 * - Compact size suitable for grids and dashboards
 * - Icon always displays (showTitleIcon forced to true)
 * - Clickable for navigation when href provided
 * - Same focus states and keyboard navigation as full variant
 *
 * Use Cases:
 * - Dashboard widgets
 * - Grid layouts (categories, services)
 * - Quick navigation cards
 * - List item cards
 */
export const Minicard: Story = {
  args: {
    variant: "minicard",
    title: "Card title",
    icon: "fa-solid fa-circle-info",
    description: "This will not be shown in minicard variant",
    style: { maxWidth: "353px" },
  },
};

/**
 * Compact Variant - Horizontal Layout Card
 *
 * Renders in single horizontal row:
 * - Icon on left side
 * - Title text
 * - Description below title (inline flow)
 *
 * Automatically hidden (cannot be shown in compact):
 * - Media/image section
 * - Header metadata (tags, date)
 * - Footer and button
 *
 * Features:
 * - Horizontal alignment maximizes space efficiency
 * - Icon always displays (showTitleIcon forced to true)
 * - Multi-line description supported
 * - Same keyboard accessibility as full variant
 * - Theme-specific focus outlines
 *
 * Use Cases:
 * - Contact information cards
 * - Quick info blocks (opening hours, phone, address)
 * - List item layouts
 * - Inline content cards
 * - Service quick reference cards
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

export const MinicardTopIconTitle: Story = {
  args: {
    variant: "minicard",
    title: "Card services",
    icon: "fa-light fa-circle-info",
    description: "Description is hidden in minicard.",
    style: { maxWidth: "320px" },
  },
};

export const IconTitleText: Story = {
  args: {
    title: "Service notification",
    description: "Service availability has been updated for regional areas.",
    showTitleIcon: true,
    icon: "fa-light fa-bell",
    showImage: false,
    showMeta: false,
    showButton: false,
    style: { maxWidth: "353px" },
  },
};

export const LeftIconTitleText: Story = {
  args: {
    variant: "compact",
    title: "Contact support",
    description: "Call 1800 123 456 for assistance.",
    icon: "fa-light fa-phone",
    style: { maxWidth: "400px" },
  },
};

export const TitleText: Story = {
  args: {
    title: "Service update",
    description: "Find the latest changes to online services.",
    showImage: false,
    showMeta: false,
    showButton: false,
    style: { maxWidth: "353px" },
  },
};

export const TitleTextAction: Story = {
  args: {
    title: "Apply for a permit",
    description: "Start your online application and track progress.",
    showImage: false,
    showMeta: false,
    actionText: "Apply now",
    actionIcon: "fa-light fa-arrow-right",
    style: { maxWidth: "353px" },
  },
};

export const TitleDateTagTextAction: Story = {
  args: {
    title: "Community grant round",
    description: "Applications are open for regional community grants.",
    showImage: false,
    tagLabel: "Grants:green",
    dateLabel: "Open until 30 Apr 2025",
    actionText: "View details",
    actionIcon: "fa-light fa-arrow-right",
    style: { maxWidth: "353px" },
  },
};

export const ImageTitleText: Story = {
  args: {
    title: "Visit the waterfront",
    description: "Discover outdoor dining and events along the harbour.",
    showMeta: false,
    showButton: false,
    style: { maxWidth: "353px" },
  },
};

export const ImageTitleTextAction: Story = {
  args: {
    title: "Book a tour",
    description: "Reserve your place for guided local tours.",
    showMeta: false,
    actionText: "Book now",
    actionIcon: "fa-light fa-arrow-right",
    style: { maxWidth: "353px" },
  },
};

export const ImageTitleDateTagTextAction: Story = {
  args: {
    title: "Cultural festival",
    description: "Celebrate music, art, and community this weekend.",
    tagLabel: "Event:blue",
    dateLabel: "12 May 2025",
    actionText: "Get tickets",
    actionIcon: "fa-light fa-arrow-right",
    style: { maxWidth: "353px" },
  },
};

export const LinkCardCentralOnly: Story = {
  args: {
    title: "NTG Central link card",
    description: "Use a link-style card for quick navigation.",
    showImage: false,
    showMeta: false,
    showButton: false,
    href: "#",
    style: { maxWidth: "353px" },
  },
  parameters: {
    docs: {
      description: {
        story: "Link card styling is available in the NTG Central theme only.",
      },
    },
  },
};

export const IconInfoCompact: Story = {
  args: {
    variant: "compact",
    title: "Payment due soon",
    description: "Your renewal payment is due in 14 days.",
    icon: "fa-light fa-circle-info",
    style: { maxWidth: "400px" },
  },
};
