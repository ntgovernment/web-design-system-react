import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "./Banner";

const meta = {
  title: "Components/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Banner variant style",
    },
    title: {
      control: "text",
      description: "Page title (H1)",
    },
    description: {
      control: "text",
      description: "Optional page description",
    },
    ctaText: {
      control: "text",
      description: "Call to action button text",
    },
    ctaVariant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "CTA button variant",
    },
    linksHeading: {
      control: "select",
      options: ["Popular", "Featured", "Related"],
      description: "Heading for links section",
    },
    showDecorative: {
      control: "boolean",
      description: "Show decorative background elements",
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary banner
export const PrimaryBanner: Story = {
  args: {
    variant: "primary",
    title: "Page title",
    description: "Optional short description of the page goal",
    ctaText: "Call to action",
    linksHeading: "Popular",
    links: [
      { label: "Bus timetables and maps", href: "#" },
      { label: "Check your rego", href: "#" },
      { label: "Find a Motor Vehicle Registry (MVR)", href: "#" },
      { label: "Government priorities", href: "#" },
    ],
  },
};

// Primary with featured links
export const PrimaryWithFeaturedLinks: Story = {
  args: {
    variant: "primary",
    title: "Health and Wellbeing",
    description:
      "Access health services, find medical facilities, and learn about public health programs in the Northern Territory.",
    ctaText: "Find health services",
    linksHeading: "Featured",
    links: [
      { label: "COVID-19 information", href: "#" },
      { label: "Mental health support", href: "#" },
      { label: "Hospital locations", href: "#" },
      { label: "Medicare services", href: "#" },
    ],
    label: "Home",
    href: "/",
  },
};

// Primary with related links
export const PrimaryWithRelatedLinks: Story = {
  args: {
    variant: "primary",
    title: "Business and Industry",
    description:
      "Start a business, apply for licenses and permits, and access business support services.",
    ctaText: "Register your business",
    linksHeading: "Related",
    links: [
      { label: "Business grants", href: "#" },
      { label: "Trade licenses", href: "#" },
      { label: "Industry regulations", href: "#" },
      { label: "Export assistance", href: "#" },
    ],
    label: "Home",
    href: "/",
  },
};

// Without breadcrumbs
export const WithoutBreadcrumbs: Story = {
  args: {
    variant: "primary",
    title: "Welcome to NT.GOV.AU",
    description:
      "Your gateway to Northern Territory Government services and information.",
    ctaText: "Explore services",
    linksHeading: "Popular",
    links: [
      { label: "Apply for permits", href: "#" },
      { label: "Renew licenses", href: "#" },
      { label: "Find services", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
};

// Without decorative elements
export const WithoutDecorative: Story = {
  args: {
    variant: "primary",
    title: "Clean Banner Design",
    description:
      "This banner demonstrates the component without decorative background elements.",
    ctaText: "Learn more",
    showDecorative: false,
    linksHeading: "Popular",
    links: [
      { label: "Service 1", href: "#" },
      { label: "Service 2", href: "#" },
      { label: "Service 3", href: "#" },
    ],
  },
};

// With long content demonstrating text wrapping
export const WithLongContent: Story = {
  args: {
    variant: "primary",
    title: "Northern Territory Government Services and Information Portal",
    description:
      "Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.",
    ctaText: "Get started with services",
    linksHeading: "Popular",
    links: [
      { label: "Driver's license renewal and applications", href: "#" },
      { label: "Business registration and licensing", href: "#" },
      { label: "Property and land information services", href: "#" },
      { label: "Health and community programs", href: "#" },
      { label: "Education and training resources", href: "#" },
    ],
    label: "Home",
    href: "/",
  },
};

// Secondary banner variant
export const SecondaryBanner: Story = {
  args: {
    variant: "secondary",
    title: "Page title",
    description: "Optional short description of the page goal",
    ctaText: "Call to action",
    linksHeading: "Popular",
    links: [
      { label: "Bus timetables and maps", href: "#" },
      { label: "Check your rego", href: "#" },
      { label: "Find a Motor Vehicle Registry (MVR)", href: "#" },
      { label: "Government priorities", href: "#" },
    ],
    label: "Home",
    href: "/",
  },
};

// Secondary with featured links
export const SecondaryWithFeatured: Story = {
  args: {
    variant: "secondary",
    title: "Transport Services",
    description:
      "Access public transport information, vehicle registration, and licensing services.",
    ctaText: "View all transport services",
    linksHeading: "Featured",
    links: [
      { label: "Renew your driver's license", href: "#" },
      { label: "Register a vehicle", href: "#" },
      { label: "Road safety information", href: "#" },
      { label: "Public transport timetables", href: "#" },
      { label: "Apply for driving permit", href: "#" },
    ],
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Current page", isCurrent: true },
    ],
  },
};

// Secondary without decorative
export const SecondaryMinimal: Story = {
  args: {
    variant: "secondary",
    title: "Community Programs",
    description: "Explore community programs and support services.",
    ctaText: "Learn more",
    showDecorative: false,
    linksHeading: "Related",
    links: [
      { label: "Youth programs", href: "#" },
      { label: "Senior services", href: "#" },
      { label: "Family support", href: "#" },
    ],
    label: "Home",
    href: "/",
  },
};

// Minimal - Title only
export const MinimalTitleOnly: Story = {
  args: {
    variant: "primary",
    title: "Page Title",
    description:
      "This banner shows only the title and description, with no optional sections.",
  },
};

// Without CTA
export const WithoutCTA: Story = {
  args: {
    variant: "primary",
    title: "Information Page",
    description: "This banner has no call to action button.",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Current page", isCurrent: true },
    ],
    linksHeading: "Popular",
    links: [
      { label: "Service 1", href: "#service1" },
      { label: "Service 2", href: "#service2" },
      { label: "Service 3", href: "#service3" },
    ],
  },
};

// Without Links
export const WithoutLinks: Story = {
  args: {
    variant: "primary",
    title: "Service Page",
    description: "This banner has no popular links section.",
    ctaText: "Get started",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Current page", isCurrent: true },
    ],
  },
};
