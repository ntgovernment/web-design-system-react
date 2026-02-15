import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchBar } from "./SearchBar";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Search bars provide a focused input for finding services, people, or content. Use the primary variant for prominent search actions and the secondary variant for lightweight filtering.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    required: { control: "boolean" },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Search",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Search",
    variant: "secondary",
  },
};

export const WithOnSearch: Story = {
  args: {
    placeholder: "Search for announcements",
    variant: "primary",
    onSearch: () => undefined,
  },
};

export const Playground: Story = {
  args: {
    placeholder: "Search",
    variant: "primary",
  },
};
