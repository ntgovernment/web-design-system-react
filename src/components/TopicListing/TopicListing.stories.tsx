import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopicListing } from "./TopicListing";

const meta = {
  title: "Components/TopicListing",
  component: TopicListing,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TopicListing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Topics: Story = {
  args: {
    variant: "topics",
    title: "Family and community support",
    titleHref: "#",
    icon: "fa-light fa-family",
    description:
      "Navigate key services for families, carers, and community wellbeing across the Territory.",
    ctaLabel: "View all family services",
    ctaHref: "#",
    links: [
      {
        label: "Child care subsidies",
        href: "#",
        description:
          "Find eligibility criteria, payment schedules, and how to apply.",
      },
      {
        label: "Support for carers",
        href: "#",
        description:
          "Access respite programs, allowances, and local support groups.",
      },
      {
        label: "Community grants",
        href: "#",
        description:
          "Explore funding rounds for local projects and community initiatives.",
      },
      {
        label: "Parenting resources",
        href: "#",
        description:
          "Guidance for early years, school readiness, and family wellbeing.",
      },
    ],
  },
};

export const Links: Story = {
  args: {
    variant: "links",
    title: "Planning and approvals",
    titleHref: "#",
    icon: "fa-light fa-map",
    description:
      "Quick access to planning schemes, applications, and guidance for development approvals.",
    ctaLabel: "Start a planning application",
    ctaHref: "#",
    links: [
      { label: "Submit a development application", href: "#" },
      { label: "Check planning zones", href: "#" },
      { label: "Building approvals checklist", href: "#" },
      { label: "Heritage assessment guidance", href: "#" },
      { label: "Subdivision requirements", href: "#" },
      { label: "Planning fees and charges", href: "#" },
      { label: "Request a pre-lodgement meeting", href: "#" },
      { label: "Track an application", href: "#" },
    ],
  },
};

export const Documents: Story = {
  args: {
    variant: "documents",
    title: "Emergency management resources",
    description:
      "Download templates and guidance to prepare your organisation for emergencies.",
    documents: [
      {
        title: "Emergency management plan template",
        href: "#",
        fileType: "docx",
        fileSize: "182 KB",
      },
      {
        title: "Business continuity checklist",
        href: "#",
        fileType: "pdf",
        fileSize: "946 KB",
      },
      {
        title: "Incident reporting log",
        href: "#",
        fileType: "xlsx",
        fileSize: "1.1 MB",
      },
      {
        title: "Recovery communications plan",
        href: "#",
        fileType: "pdf",
        fileSize: "402 KB",
      },
      {
        title: "Critical contacts directory",
        href: "#",
        fileType: "docx",
        fileSize: "176 KB",
      },
      {
        title: "Operational readiness checklist",
        href: "#",
        fileType: "docx",
        fileSize: "214 KB",
      },
      {
        title: "Incident briefing slides",
        href: "#",
        fileType: "pptx",
        fileSize: "2.4 MB",
      },
      {
        title: "Resource allocation tracker",
        href: "#",
        fileType: "xlsx",
        fileSize: "1.6 MB",
      },
    ],
  },
};
