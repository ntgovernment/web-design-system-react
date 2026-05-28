import type { Meta, StoryObj } from "@storybook/react";
import { DisplayCards } from "./DisplayCards";
import { CardProps } from "../Card";

const meta: Meta<typeof DisplayCards> = {
  title: "Components/DisplayCards",
  component: DisplayCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: {
        type: "select",
      },
      options: [2, 3, 4],
      description: "Number of columns for the grid layout (desktop view)",
    },
    backgroundColor: {
      control: {
        type: "radio",
      },
      options: ["white", "grey"],
      description: "Background color of the section",
    },
    showImage: {
      control: {
        type: "boolean",
      },
      description: "Whether to display card images",
    },
    showMetadata: {
      control: {
        type: "boolean",
      },
      description: "Whether to display card metadata (tags, dates)",
    },
    showDescription: {
      control: {
        type: "boolean",
      },
      description: "Whether to display card descriptions",
    },
    showButton: {
      control: {
        type: "boolean",
      },
      description: "Whether to display action buttons",
    },
    buttonText: {
      control: {
        type: "text",
      },
      description: "Custom text for action buttons",
    },
    sectionTitle: {
      control: {
        type: "text",
      },
      description: "Section title displayed above cards",
    },
    sectionSubtitle: {
      control: {
        type: "text",
      },
      description: "Section subtitle displayed below title",
    },
    selectionMode: {
      control: {
        type: "radio",
      },
      options: ["manual", "parent"],
      description: "Selection mode for DXP conversion: manual cards or parent asset selection",
    },
    parentAssetId: {
      control: {
        type: "text",
      },
      description: "Parent asset URI used when selectionMode is 'parent'",
    },
    selectedCardAssetIds: {
      control: {
        type: "object",
      },
      description: "Optional list of selected card asset URIs for asset picker metadata",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample card data for stories (no images, clean layout)
const sampleCards: CardProps[] = [
  {
    variant: "full",
    title: "Preliminary exploration",
    description:
      "Getting access to land and notice to landowners, exploration on existing title areas, disputes over access.",
    showImage: false,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right",
  },
  {
    variant: "full",
    title: "Mineral titles",
    description:
      "Types of mineral title, summary of title types and conditions.",
    showImage: false,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right",
  },
  {
    variant: "full",
    title: "Access to land for exploration",
    description:
      "Processes for negotiating land access agreements.",
    showImage: false,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right",
  },
  {
    variant: "full",
    title: "Environmental impact assessment",
    description:
      "Formal assessment and matters of national environmental significance.",
    showImage: false,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right",
  },
  {
    variant: "full",
    title: "Closing and rehabilitating a mine site",
    description:
      "How to close a mining site, evaluation criteria, refund of security, rehabilitation report, funding.",
    showImage: false,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right",
  },
  {
    variant: "full",
    title: "Apply for an environmental (mining) licence",
    description:
      "When you need a licence and how to apply.",
    showImage: false,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right",
  },
];

/**
 * Manual selection with 3 columns (default layout) - matches the NT.GOV.AU "Mining applications and processes" design
 */
export const Manual3Columns: Story = {
  args: {
    cards: sampleCards.slice(0, 6),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "Mining applications and processes",
  },
};

/**
 * Manual selection with 2 columns
 */
export const Manual2Columns: Story = {
  args: {
    cards: sampleCards.slice(0, 4),
    columns: 2,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "Industry Applications",
  },
};

/**
 * Manual selection with 4 columns
 */
export const Manual4Columns: Story = {
  args: {
    cards: sampleCards.slice(0, 4),
    columns: 4,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "All Available Services",
  },
};

/**
 * Grey background variant
 */
export const GreyBackground: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "grey",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "Featured Services",
  },
};

/**
 * Hide descriptions
 */
export const NoDescriptions: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: false,
    showButton: true,
    sectionTitle: "Quick Links",
  },
};

/**
 * Hide action buttons
 */
export const NoButtons: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: false,
    sectionTitle: "Information Cards",
  },
};

/**
 * Custom button text across all cards
 */
export const CustomButtonText: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    buttonText: "Apply Now",
    sectionTitle: "Permit Applications",
  },
};

/**
 * With section title and subtitle only
 */
export const WithHeaders: Story = {
  args: {
    cards: sampleCards.slice(0, 2),
    columns: 2,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "Our Services",
    sectionSubtitle:
      "Discover the range of services available to support your business",
  },
};

/**
 * Mixed controls: Hide description + custom button text
 */
export const MixedControls: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: false,
    showButton: true,
    buttonText: "Explore",
    sectionTitle: "Featured Options",
    sectionSubtitle: "Choose your preferred service below",
  },
};

export const ParentAssetSelection: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    selectionMode: "parent",
    parentAssetId: "matrix-asset://api-identifier/12345",
    selectedCardAssetIds: [
      "matrix-asset://api-identifier/12345",
      "matrix-asset://api-identifier/12346",
      "matrix-asset://api-identifier/12347",
    ],
    sectionTitle: "Parent Asset Selection",
  },
};

/**
 * Minimal configuration
 */
export const Minimal: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 2,
    showImage: false,
    showMetadata: false,
  },
};

/**
 * All features disabled
 */
export const NothingVisible: Story = {
  args: {
    cards: sampleCards.slice(0, 3),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: false,
    showButton: false,
  },
};

/**
 * Single card
 */
export const SingleCard: Story = {
  args: {
    cards: sampleCards.slice(0, 1),
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "Featured Service",
  },
};

/**
 * Many cards (6+) to test responsive behavior
 */
export const ManyCards: Story = {
  args: {
    cards: sampleCards,
    columns: 3,
    backgroundColor: "white",
    showImage: false,
    showMetadata: false,
    showDescription: true,
    showButton: true,
    sectionTitle: "All Services & Resources",
    sectionSubtitle: "A comprehensive list of available services",
  },
};
