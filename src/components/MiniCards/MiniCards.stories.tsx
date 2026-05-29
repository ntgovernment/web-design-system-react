import type { Meta, StoryObj } from "@storybook/react";
import { MiniCards } from "./MiniCards";

const meta: Meta<typeof MiniCards> = {
  title: "Components/MiniCards",
  component: MiniCards,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "MiniCards component displays a responsive grid of mini cards (icon + title + link). Supports manual card selection or API-based auto-selection with configurable layouts (3 or 4 columns) and backgrounds (white or grey).",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Optional section title",
    },
    layout: {
      control: { type: "select" },
      options: ["3-col", "4-col"],
      description: "Desktop layout: 3 or 4 cards per row",
    },
    backgroundColor: {
      control: { type: "select" },
      options: ["white", "grey"],
      description: "Background color variant",
    },
    cardSelectionMode: {
      control: { type: "select" },
      options: ["manual", "auto"],
      description: "Manual: use cards prop; Auto: fetch from API",
    },
    cards: {
      description: "Array of cards to display (for manual mode)",
    },
    loading: {
      control: "boolean",
      description: "Show loading state",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample card data
const sampleCards = [
  {
    id: "1",
    title: "Grant applicants",
    href: "https://cyber.nt.gov.au/cyber-invest-business-program/grant-applicants",
    icon: "fa-light fa-briefcase",
  },
  {
    id: "2",
    title: "Service providers",
    href: "https://cyber.nt.gov.au/cyber-invest-business-program/service-providers",
    icon: "fa-light fa-globe",
  },
  {
    id: "3",
    title: "Get in touch",
    href: "https://cyber.nt.gov.au/cyber-invest-business-program/get-in-touch",
    icon: "fa-light fa-circle-info",
  },
];

const fourColumnCards = [
  ...sampleCards,
  {
    id: "4",
    title: "Resources",
    href: "#",
    icon: "fa-light fa-book",
  },
];

/**
 * Basic MiniCards with 3-column layout and white background (default)
 */
export const Basic: Story = {
  args: {
    title: "Find out more",
    cards: sampleCards,
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards with 4-column layout on desktop
 */
export const FourColumnLayout: Story = {
  args: {
    title: "Explore our services",
    cards: fourColumnCards,
    layout: "4-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards with grey background
 */
export const GreyBackground: Story = {
  args: {
    title: "Find out more",
    cards: sampleCards,
    layout: "3-col",
    backgroundColor: "grey",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards without title (compact header)
 */
export const NoTitle: Story = {
  args: {
    cards: sampleCards,
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards with only 2 cards
 */
export const TwoCards: Story = {
  args: {
    title: "Popular options",
    cards: sampleCards.slice(0, 2),
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards with many cards (6 cards - shows grid responsiveness)
 */
export const SixCards: Story = {
  args: {
    title: "All options",
    cards: [
      ...sampleCards,
      {
        id: "4",
        title: "Documentation",
        href: "#",
        icon: "fa-light fa-file-lines",
      },
      {
        id: "5",
        title: "Support",
        href: "#",
        icon: "fa-light fa-headset",
      },
      {
        id: "6",
        title: "Download",
        href: "#",
        icon: "fa-light fa-download",
      },
    ],
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards with six cards in 4-column layout
 */
export const SixCardsFourColumns: Story = {
  args: {
    title: "Available resources",
    cards: [
      ...sampleCards,
      {
        id: "4",
        title: "Documentation",
        href: "#",
        icon: "fa-light fa-file-lines",
      },
      {
        id: "5",
        title: "Support",
        href: "#",
        icon: "fa-light fa-headset",
      },
      {
        id: "6",
        title: "Download",
        href: "#",
        icon: "fa-light fa-download",
      },
    ],
    layout: "4-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards in loading state
 */
export const Loading: Story = {
  args: {
    title: "Find out more",
    cards: [],
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "auto",
    loading: true,
  },
};

/**
 * MiniCards with error state
 */
export const WithError: Story = {
  args: {
    title: "Find out more",
    cards: [],
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "auto",
    error: "Failed to load cards. Please try again later.",
  },
};

/**
 * MiniCards with empty state (no cards available)
 */
export const EmptyState: Story = {
  args: {
    title: "Find out more",
    cards: [],
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
};

/**
 * MiniCards with both title and grey background
 */
export const TitleWithGreyBackground: Story = {
  args: {
    title: "Cyber security resources",
    cards: sampleCards,
    layout: "3-col",
    backgroundColor: "grey",
    cardSelectionMode: "manual",
  },
};

/**
 * Responsive showcase - demonstrates how layout adapts at different breakpoints
 * (Resize your browser to see the responsive behavior)
 * - Mobile: 1 column
 * - Tablet: 2 columns
 * - Desktop: 3 columns
 */
export const ResponsiveShowcase: Story = {
  args: {
    title: "Responsive MiniCards (resize to see layout change)",
    cards: [
      ...sampleCards,
      {
        id: "4",
        title: "Mobile friendly",
        href: "#",
        icon: "fa-light fa-mobile",
      },
      {
        id: "5",
        title: "Tablet optimized",
        href: "#",
        icon: "fa-light fa-tablet",
      },
      {
        id: "6",
        title: "Desktop view",
        href: "#",
        icon: "fa-light fa-desktop",
      },
    ],
    layout: "3-col",
    backgroundColor: "white",
    cardSelectionMode: "manual",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the responsive grid layout. Resize your browser window to see how the layout adapts: 1 column on mobile, 2 columns on tablet, and 3 columns on desktop.",
      },
    },
  },
};

/**
 * All variations in one story for comparison
 */
export const Showcase: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      <div>
        <h2 style={{ marginBottom: "20px" }}>3-Column with White Background</h2>
        <MiniCards
          title="Find out more"
          cards={sampleCards}
          layout="3-col"
          backgroundColor="white"
          cardSelectionMode="manual"
        />
      </div>

      <div>
        <h2 style={{ marginBottom: "20px" }}>4-Column with White Background</h2>
        <MiniCards
          title="All options"
          cards={fourColumnCards}
          layout="4-col"
          backgroundColor="white"
          cardSelectionMode="manual"
        />
      </div>

      <div>
        <h2 style={{ marginBottom: "20px" }}>3-Column with Grey Background</h2>
        <MiniCards
          title="Find out more"
          cards={sampleCards}
          layout="3-col"
          backgroundColor="grey"
          cardSelectionMode="manual"
        />
      </div>

      <div>
        <h2 style={{ marginBottom: "20px" }}>4-Column with Grey Background</h2>
        <MiniCards
          title="All options"
          cards={fourColumnCards}
          layout="4-col"
          backgroundColor="grey"
          cardSelectionMode="manual"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Comprehensive showcase of all MiniCards variations",
      },
    },
  },
};
