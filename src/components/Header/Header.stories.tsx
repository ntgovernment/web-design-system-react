import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./Header";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header component for site-wide navigation with logo, navigation links, and integrated search functionality. Supports both NTG and Central themes with responsive design and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["nt-gov-au", "agency-internet", "other-site"],
      description: "Header variant (logo + title layout)",
    },
    agencyName: { control: "text" },
    agencyHref: { control: "text" },
    logoAlt: { control: "text" },
    showSearch: { control: "boolean" },
    searchPlaceholder: { control: "text" },
    navItems: { control: "object" },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NTGovAu: Story = {
  args: {
    variant: "nt-gov-au",
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchPlaceholder: "Search",
  },
};

export const Default = NTGovAu;

export const AgencyInternet: Story = {
  args: {
    variant: "agency-internet",
    logoAlt: "Northern Territory Government",
    agencyName: "Department of Health",
    agencyHref: "https://health.nt.gov.au",
    navItems: [
      {
        label: "Programs",
        href: "/programs",
        icon: "fa-light fa-briefcase",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchPlaceholder: "Search",
  },
};

export const OtherSite: Story = {
  args: {
    variant: "other-site",
    logoAlt: "Northern Territory Government",
    agencyName: "My NT Services",
    agencyHref: "/",
    navItems: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: "fa-light fa-home",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchPlaceholder: "Search",
  },
};

export const WithActiveState: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Home",
        href: "/",
        active: false,
      },
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
        active: true,
      },
      {
        label: "Contacts",
        href: "/contact",
        active: false,
      },
    ],
  },
};

export const WithoutSearch: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Services",
        href: "/services",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    showSearch: false,
  },
};

export const IconSearch: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchVariant: "icon",
    searchPlaceholder: "Find services",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Medium layout with icon-only search. Click the search icon to expand the search bar. This variant is ideal for responsive designs where space is limited. Common on tablet layouts.",
      },
    },
  },
};

export const MediumLayout: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchVariant: "icon",
    searchPlaceholder: "Search",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Medium layout header (max-width 959px) with collapsible search icon. The search expands into a full search bar when clicked, and collapses back to an icon when closed. Optimized for tablet and medium-screen devices.",
      },
    },
  },
};

export const MobileLayout: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchVariant: "icon",
    searchPlaceholder: "Search",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Mobile layout header (max-width 767px) with hamburger menu icon. Navigation items are hidden and accessible via the hamburger menu button. Search appears as an icon. This layout is optimized for mobile phones and small screens.",
      },
    },
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const WithManyNavItems: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Home",
        href: "/",
        icon: "fa-light fa-home",
      },
      {
        label: "Services",
        href: "/services",
        icon: "fa-light fa-briefcase",
      },
      {
        label: "News",
        href: "/news",
        icon: "fa-light fa-newspaper",
      },
      {
        label: "Events",
        href: "/events",
        icon: "fa-light fa-calendar",
      },
      {
        label: "Contact",
        href: "/contact",
        icon: "fa-light fa-envelope",
      },
    ],
  },
};

export const MinimalHeader: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [],
    showSearch: false,
  },
};

export const DepartmentHeader: Story = {
  args: {
    variant: "agency-internet",
    agencyName: "Department of Health",
    agencyHref: "/",
    logoAlt: "Northern Territory Government",
    navItems: [
      {
        label: "Programs",
        href: "/programs",
        icon: "fa-light fa-briefcase",
      },
      {
        label: "Resources",
        href: "/resources",
        icon: "fa-light fa-book",
      },
      {
        label: "News",
        href: "/news",
        icon: "fa-light fa-newspaper",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    searchPlaceholder: "Search health resources",
  },
};

export const ServicePortalHeader: Story = {
  args: {
    variant: "other-site",
    agencyName: "My NT Services",
    agencyHref: "/",
    logoAlt: "Northern Territory Government",
    navItems: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: "fa-light fa-home",
        active: true,
      },
      {
        label: "Applications",
        href: "/applications",
        icon: "fa-light fa-file",
      },
      {
        label: "Account",
        href: "/account",
        icon: "fa-light fa-user",
      },
    ],
    searchPlaceholder: "Search services",
  },
};

export const WithSearchHandler: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    searchPlaceholder: "Search for announcements",
    onSearch: (query: string) => {
      alert(`Searching for: "${query}"`);
    },
  },
};

export const CustomLogo: Story = {
  args: {
    customLogo: (
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="4" fill="white" fillOpacity="0.2" />
          <rect x="8" y="8" width="16" height="16" rx="2" fill="white" />
        </svg>
        <span
          style={{
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "Lato, sans-serif",
          }}
        >
          Custom Brand
        </span>
      </a>
    ),
    navItems: [
      {
        label: "Products",
        href: "/products",
      },
      {
        label: "Solutions",
        href: "/solutions",
      },
    ],
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          Large Layout (Expanded Search)
        </h3>
        <Header
          logoAlt="NT.GOV.AU"
          navItems={[
            {
              label: "Find online services",
              href: "/services",
              icon: "fa-light fa-search",
            },
            { label: "Contacts", href: "/contact" },
          ]}
          searchVariant="expanded"
        />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          Medium Layout (Icon Search)
        </h3>
        <Header
          logoAlt="NT.GOV.AU"
          navItems={[
            {
              label: "Find online services",
              href: "/services",
              icon: "fa-light fa-search",
            },
            { label: "Contacts", href: "/contact" },
          ]}
          searchVariant="icon"
        />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          With Active State
        </h3>
        <Header
          logoAlt="NT.GOV.AU"
          navItems={[
            { label: "Home", href: "/", active: false },
            { label: "Services", href: "/services", active: true },
            { label: "Contact", href: "/contact", active: false },
          ]}
        />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          Without Search
        </h3>
        <Header
          logoAlt="NT.GOV.AU"
          navItems={[
            { label: "About", href: "/about" },
            { label: "News", href: "/news" },
          ]}
          showSearch={false}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comparison of different Header configurations and search variants.",
      },
    },
  },
};

export const CustomizedWithCSSVars: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          Custom Background Color (Teal)
        </h3>
        <Header
          logoAlt="Department of Environment"
          navItems={[
            { label: "Programs", href: "/programs" },
            { label: "Resources", href: "/resources" },
          ]}
          style={
            {
              "--clr-bg-dark": "#007e91",
              "--clr-link-inverse-hover": "#aad4da",
            } as React.CSSProperties
          }
        />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          Custom Background Color (Green)
        </h3>
        <Header
          logoAlt="Parks & Wildlife"
          navItems={[
            { label: "Visit", href: "/visit", icon: "fa-light fa-map" },
            {
              label: "Conservation",
              href: "/conservation",
              icon: "fa-light fa-leaf",
            },
          ]}
          style={
            {
              "--clr-bg-dark": "#006975",
              "--clr-link-inverse-hover": "#aacdd1",
            } as React.CSSProperties
          }
        />
      </div>

      <div>
        <h3
          style={{
            margin: "0 0 12px 16px",
            fontSize: "16px",
            fontWeight: 600,
            color: "#1f1e27",
          }}
        >
          Increased Padding
        </h3>
        <Header
          logoAlt="NT.GOV.AU"
          navItems={[{ label: "Services", href: "/services" }]}
          style={
            {
              "--bs-navbar-nav-link-padding-x": "32px",
            } as React.CSSProperties
          }
        />
      </div>

      <div
        style={{
          marginTop: "8px",
          padding: "16px",
          background: "#f8f9fa",
          borderRadius: "8px",
          maxWidth: "800px",
          marginLeft: "16px",
          marginRight: "16px",
        }}
      >
        <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.6" }}>
          <strong>💡 Tip:</strong> All headers use CSS variables for
          customization. Override <code>--clr-bg-dark</code>,{" "}
          <code>--clr-link-inverse-hover</code>, or any Bootstrap navbar
          variable (<code>--bs-navbar-*</code>) to create department-specific or
          branded headers. See <code>HEADER.md#css-variables</code> for complete
          documentation.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Demonstrates runtime customization using CSS variables. Override design tokens or Bootstrap navbar variables to create custom-branded headers for different departments or services.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "News & Updates",
        href: "/news",
        icon: "fa-light fa-newspaper",
      },
      {
        label: "Contact Us",
        href: "/contact",
        icon: "fa-light fa-envelope",
      },
    ],
    searchPlaceholder: "Search",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Resize your browser window to see the responsive behavior. The header adapts from horizontal desktop layout to vertical mobile layout, with optimized spacing and typography at each breakpoint.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    variant: "nt-gov-au",
    logoAlt: "NT.GOV.AU",
    navItems: [
      {
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search",
      },
      {
        label: "Contacts",
        href: "/contact",
      },
    ],
    showSearch: true,
    searchPlaceholder: "Search",
  },
};
