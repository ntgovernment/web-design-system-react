import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Input fields allow users to enter short text or numbers. Use a label and optional helper text to guide users. Use validation messages to communicate errors or success states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    readOnly: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      mapping: { default: undefined, sm: "sm", lg: "lg" },
    },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
  },
};

export const Required: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    required: true,
    placeholder: "Placeholder text",
  },
};

export const Filled: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    onChange: () => undefined,
  },
};

export const Active: Story = {
  render: () => (
    <Input
      label="Label"
      helperText="Optional helper text"
      placeholder="Placeholder text"
      data-active="true"
    />
  ),
};

export const Success: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Success message goes here",
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Error message goes here",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Disabled text",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    readOnly: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2" style={{ maxWidth: "480px" }}>
      <Input label="Small" size="sm" placeholder="Small" />
      <Input label="Default" placeholder="Default" />
      <Input label="Large" size="lg" placeholder="Large" />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
  },
};
