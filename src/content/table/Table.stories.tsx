import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableContent } from "./Table";

const demoColumns = ["Service", "Owner", "Status", "Last updated"];

const demoRows = [
  ["Grants Portal", "Digital NT", "Active", "2 Feb 2026"],
  ["Vehicle Rego", "Transport", "Planned", "28 Jan 2026"],
  ["Licensing Hub", "Business NT", "Active", "18 Jan 2026"],
  ["Water Alerts", "Environment", "Paused", "12 Jan 2026"],
  ["MyService", "Customer Experience", "Active", "4 Jan 2026"],
  ["Open Data", "DPC", "Planned", "21 Dec 2025"],
  ["Community Events", "NTG Central", "Active", "14 Dec 2025"],
  ["Parks Pass", "Tourism", "Active", "30 Nov 2025"],
];

const meta = {
  title: "Content/Table",
  component: TableContent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Bootstrap tables aligned to design tokens and Figma table styles.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    bordered: { control: "boolean" },
    borderless: { control: "boolean" },
    striped: { control: "boolean" },
    hover: { control: "boolean" },
    size: { control: "select", options: ["md", "sm"] },
    responsive: {
      control: "select",
      options: ["none", "always", "sm", "md", "lg", "xl", "xxl"],
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ],
    },
  },
} satisfies Meta<typeof TableContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: "Table example",
    columns: demoColumns,
    rows: demoRows,
  },
};

export const WithoutCaption: Story = {
  args: {
    caption: "",
    columns: demoColumns,
    rows: demoRows,
  },
};

export const Bordered: Story = {
  args: {
    caption: "Bordered table",
    columns: demoColumns,
    rows: demoRows,
    bordered: true,
  },
};

export const Borderless: Story = {
  args: {
    caption: "Borderless table",
    columns: demoColumns,
    rows: demoRows,
    borderless: true,
  },
};

export const Small: Story = {
  args: {
    caption: "Compact table",
    columns: demoColumns,
    rows: demoRows,
    size: "sm",
  },
};

export const ResponsiveMd: Story = {
  args: {
    caption: "Responsive table (md)",
    columns: demoColumns,
    rows: demoRows,
    responsive: "md",
  },
};

export const PrimaryVariant: Story = {
  args: {
    caption: "Primary variant",
    columns: demoColumns,
    rows: demoRows,
    variant: "primary",
  },
};
