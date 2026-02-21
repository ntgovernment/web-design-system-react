import type { Meta, StoryObj } from "@storybook/react-vite";
import { TableContent } from "./Table";

const demoColumns = ["Service", "Owner", "Status", "Last updated"];

const demoRows = [
  ["Grants Portal", "Digital NT", "Active", "2 Feb 2026"],
  ["Vehicle Rego", "Transport", "Planned", "28 Jan 2026"],
  ["Licensing Hub", "Business NT", "Active", "18 Jan 2026"],
  ["Water Alerts", "Environment", "Paused", "12 Jan 2026"],
  ["Community Events", "NTG Central", "Active", "14 Dec 2025"],
  ["Parks Pass", "Tourism", "Active", "30 Nov 2025"],
];

const contactColumns = ["Item", "Details"];

const contactRows = [
  ["Phone", "1300 123 456"],
  ["Email", "help@nt.gov.au"],
  ["Address", "4th Floor, 22 Mitchell Street"],
  ["After-hours", "–"],
];

const mobileColumns = ["Program", "Region", "Next review", "Owner"];

const mobileRows = [
  ["Water Safety", "Top End", "15 Mar 2026", "NT Health"],
  ["Bushfire Ready", "Katherine", "10 Apr 2026", "Emergency Services"],
  ["School Transport", "Barkly", "30 Apr 2026", "Education"],
];

const meta = {
  title: "Components/Table",
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
    title: { control: "text" },
    subtitle: { control: "text" },
    bordered: { control: "boolean" },
    borderless: { control: "boolean" },
    striped: { control: "boolean" },
    hover: { control: "boolean" },
    size: { control: "select", options: ["md", "sm"] },
    showHeader: { control: "boolean" },
    sortable: { control: "boolean" },
    boldFirstColumn: { control: "boolean" },
    stacked: { control: "boolean" },
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
    onSort: { action: "sort", table: { disable: true } },
  },
} satisfies Meta<typeof TableContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    caption: "Service status summary",
    columns: demoColumns,
    rows: demoRows,
    responsive: "always",
  },
};

export const TitleAndSubheading: Story = {
  args: {
    title: "Service status overview",
    subtitle:
      "Latest updates for digital services across NT Government portfolios.",
    caption: "Service status overview",
    columns: demoColumns,
    rows: demoRows,
  },
};

export const HeadersWithFilters: Story = {
  args: {
    caption: "Sortable service status",
    columns: demoColumns,
    rows: demoRows,
    sortable: true,
  },
};

export const BoldFirstColumn: Story = {
  args: {
    caption: "Service status with primary column emphasis",
    columns: demoColumns,
    rows: demoRows,
    boldFirstColumn: true,
  },
};

export const SimplifiedNoHeader: Story = {
  args: {
    title: "Contact details",
    caption: "Primary contact details",
    columns: contactColumns,
    rows: contactRows,
    showHeader: false,
    striped: false,
    hover: false,
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

export const ResponsiveStackedMobile: Story = {
  args: {
    caption: "Program review schedule",
    columns: mobileColumns,
    rows: mobileRows,
    stacked: true,
    responsive: "always",
  },
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
