import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "grey", "green", "blue", "warning", "red"],
      description: "The visual style variant of the tag",
    },
    label: {
      control: "text",
      description: "The text label to display inside the tag",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant - neutral styling for general use
 */
export const Default: Story = {
  args: {
    variant: "default",
    label: "Default",
  },
};

/**
 * Grey variant - muted neutral color
 */
export const Grey: Story = {
  args: {
    variant: "grey",
    label: "Grey",
  },
};

/**
 * Green variant - for success states or positive indicators
 */
export const Green: Story = {
  args: {
    variant: "green",
    label: "Green",
  },
};

/**
 * Blue variant - for informational states
 */
export const Blue: Story = {
  args: {
    variant: "blue",
    label: "Blue",
  },
};

/**
 * Warning variant - for caution or attention states
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Warning",
  },
};

/**
 * Red variant - for error or danger states
 */
export const Red: Story = {
  args: {
    variant: "red",
    label: "Red",
  },
};

/**
 * All variants displayed together for comparison
 */
export const AllVariants: Story = {
  args: {
    label: "Tag",
  },
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Tag variant="default" label="Default" />
      <Tag variant="grey" label="Grey" />
      <Tag variant="green" label="Green" />
      <Tag variant="blue" label="Blue" />
      <Tag variant="warning" label="Warning" />
      <Tag variant="red" label="Red" />
    </div>
  ),
};

/**
 * Example usage in context - showing tags with different content lengths
 */
export const VariousLabels: Story = {
  args: {
    label: "Tag",
  },
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Tag variant="green" label="Active" />
      <Tag variant="blue" label="New" />
      <Tag variant="warning" label="Pending Review" />
      <Tag variant="red" label="Urgent" />
      <Tag variant="grey" label="Archived" />
      <Tag variant="default" label="Draft" />
    </div>
  ),
};
