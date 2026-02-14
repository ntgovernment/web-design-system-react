import type { Meta, StoryObj } from "@storybook/react-vite";
import { BreadcrumbsContent } from "./Breadcrumbs";

const defaultItems = [
  { label: "Home", href: "/" },
  { label: "Page 1", href: "/services" },
  { label: "Parent page", href: "/services/permits" },
  { label: "Current page", isCurrent: true },
];

const truncatedItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Grants and funding", href: "/services/grants" },
  { label: "Community programs", href: "/services/grants/community" },
  { label: "Regional updates", href: "/services/grants/community/updates" },
  { label: "Current page", isCurrent: true },
];

const mobileItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Current page", isCurrent: true },
];

const meta = {
  title: "Content/Breadcrumbs",
  component: BreadcrumbsContent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Bootstrap breadcrumbs customized with design tokens and NTG theme overrides.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "truncated", "mobile"],
    },
  },
} satisfies Meta<typeof BreadcrumbsContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: "default",
  },
};

export const Truncated: Story = {
  args: {
    items: truncatedItems,
    variant: "truncated",
  },
};

export const Mobile: Story = {
  args: {
    items: mobileItems,
    variant: "mobile",
  },
};

export const Themes: Story = {
  name: "Themes (Use Theme Toolbar)",
  args: {
    items: defaultItems,
    variant: "default",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling.",
      },
    },
  },
};
