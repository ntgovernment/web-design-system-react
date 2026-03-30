import type { Meta, StoryObj } from "@storybook/react-vite";
import { OnThisPageNavigation } from "./OnThisPageNavigation";

const meta = {
  title: "Components/OnThisPageNavigation",
  component: OnThisPageNavigation,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    ariaLabel: { control: "text" },
  },
} satisfies Meta<typeof OnThisPageNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: "Application overview", href: "#application-overview" },
  {
    label: "Eligibility and requirements",
    href: "#eligibility",
    children: [
      { label: "Income thresholds", href: "#income-thresholds" },
      { label: "Asset limits", href: "#asset-limits" },
    ],
  },
  { label: "How to apply", href: "#how-to-apply" },
  { label: "Fees and processing times", href: "#fees" },
  { label: "Contact and help", href: "#contact" },
];

const activeItems = [
  { label: "Application overview", href: "#application-overview" },
  {
    label: "Eligibility and requirements",
    href: "#eligibility",
    isCurrent: true,
    children: [
      { label: "Income thresholds", href: "#income-thresholds" },
      { label: "Asset limits", href: "#asset-limits" },
    ],
  },
  { label: "How to apply", href: "#how-to-apply" },
  { label: "Fees and processing times", href: "#fees" },
  { label: "Contact and help", href: "#contact" },
];

export const Default: Story = {
  args: {
    heading: "On this page",
    items: defaultItems,
  },
};

export const ActiveSection: Story = {
  args: {
    heading: "On this page",
    items: activeItems,
  },
};

export const LongLabels: Story = {
  args: {
    heading: "On this page",
    items: [
      {
        label: "Check eligibility for the regional housing support program",
        href: "#regional-housing",
      },
      {
        label: "Prepare identity documents and supporting evidence",
        href: "#prepare-documents",
      },
      {
        label: "Submit your application and confirm contact details",
        href: "#submit-application",
      },
    ],
  },
};

export const Themes: Story = {
  name: "Themes (Use Theme Toolbar)",
  args: {
    heading: "On this page",
    items: defaultItems,
  },
};

export const DeeplyNested: Story = {
  args: {
    heading: "On this page",
    items: [
      { label: "System overview", href: "#overview" },
      {
        label: "Installation",
        href: "#installation",
        children: [
          {
            label: "Prerequisites",
            href: "#prerequisites",
            children: [
              { label: "Hardware requirements", href: "#hardware" },
              { label: "Software dependencies", href: "#dependencies" },
            ],
          },
          {
            label: "Setup process",
            href: "#setup",
            children: [
              { label: "Configuration", href: "#configuration" },
              { label: "Verification", href: "#verification" },
            ],
          },
        ],
      },
      { label: "Usage guide", href: "#usage" },
      { label: "Troubleshooting", href: "#troubleshooting" },
    ],
  },
};
