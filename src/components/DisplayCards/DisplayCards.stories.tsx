import type { Meta, StoryObj } from "@storybook/react";
import { DisplayCards } from "./DisplayCards";

const meta: Meta<typeof DisplayCards> = {
  title: "Components/DisplayCards",
  component: DisplayCards,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    assetIds: {
      control: "object",
    },
    columns: {
      control: { type: "select" },
      options: [2, 3, 4],
    },
    backgroundColor: {
      control: { type: "radio" },
      options: ["white", "grey"],
    },
    sectionTitle: {
      control: "text",
    },
    sectionSubtitle: {
      control: "text",
    },
    showDescription: {
      control: "boolean",
    },
    showButton: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ManualMode: Story = {
  args: {
    assetIds: ["1001", "1002", "1003"],
    columns: 3,
    backgroundColor: "white",
    sectionTitle: "Mining applications and processes",
    showDescription: true,
    showButton: true,
  },
};

export const GreyBackground: Story = {
  args: {
    assetIds: ["1001", "1002"],
    columns: 3,
    backgroundColor: "grey",
    sectionTitle: "Featured Services",
    showDescription: true,
    showButton: true,
  },
};

export const WithHeaders: Story = {
  args: {
    assetIds: ["1001", "1003"],
    columns: 2,
    backgroundColor: "white",
    sectionTitle: "Our Services",
    sectionSubtitle: "Discover the range of services available",
    showDescription: true,
    showButton: true,
  },
};

export const SingleCard: Story = {
  args: {
    assetIds: ["1002"],
    columns: 3,
    backgroundColor: "white",
    sectionTitle: "Featured Service",
    showDescription: true,
    showButton: true,
  },
};
