import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";

const meta = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "The text label to display inside the pill",
    },
    onRemove: {
      action: "removed",
      description:
        "Callback function triggered when the close button is clicked",
    },
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default pill with a simple label
 */
export const Default: Story = {
  args: {
    label: "Pill label",
    onRemove: () => {},
  },
};

/**
 * Pill with a longer label to show text wrapping behavior
 */
export const LongLabel: Story = {
  args: {
    label: "Long pill label with more text",
    onRemove: () => {},
  },
};

/**
 * Interactive example - check the Actions panel to see onRemove callbacks
 */
export const Interactive: Story = {
  args: {
    label: "Click to remove",
    onRemove: () => {},
  },
  render: (args) => {
    const handleRemove = () => {
      console.log(`Removed pill: ${args.label}`);
      alert(`Removed: ${args.label}`);
    };

    return <Pill {...args} onRemove={handleRemove} />;
  },
};

/**
 * Multiple pills displayed together as they would appear in use
 */
export const MultiplePills: Story = {
  args: {
    label: "Pill",
    onRemove: () => {},
  },
  render: () => {
    const handleRemove = (label: string) => {
      console.log(`Removed: ${label}`);
    };

    return (
      <div className="d-flex gap-2 align-items-center flex-wrap">
        <Pill label="JavaScript" onRemove={() => handleRemove("JavaScript")} />
        <Pill label="TypeScript" onRemove={() => handleRemove("TypeScript")} />
        <Pill label="React" onRemove={() => handleRemove("React")} />
        <Pill label="CSS" onRemove={() => handleRemove("CSS")} />
        <Pill label="HTML" onRemove={() => handleRemove("HTML")} />
      </div>
    );
  },
};

/**
 * Example usage as filter tags in a search context
 */
export const FilterExample: Story = {
  args: {
    label: "Filter",
    onRemove: () => {},
  },
  render: () => {
    const handleRemove = (filter: string) => {
      console.log(`Removed filter: ${filter}`);
    };

    return (
      <div style={{ maxWidth: "500px" }}>
        <h4 className="mb-3">Active Filters:</h4>
        <div className="d-flex gap-2 align-items-center flex-wrap">
          <Pill
            label="Status: Active"
            onRemove={() => handleRemove("Status: Active")}
          />
          <Pill
            label="Category: Design"
            onRemove={() => handleRemove("Category: Design")}
          />
          <Pill
            label="Date: 2024"
            onRemove={() => handleRemove("Date: 2024")}
          />
        </div>
      </div>
    );
  },
};
