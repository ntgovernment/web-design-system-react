import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer, FooterSection, SocialLink, FooterLink } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ============================================
   Mock Data - Realistic NT Government Content
   ============================================ */

const informationSections: FooterSection[] = [
  {
    title: "Information and services",
    columns: 2,
    links: [
      { label: "Art, sport and leisure", href: "#" },
      { label: "Boating, fishing and marine", href: "#" },
      { label: "Business and industry", href: "#" },
      { label: "Community support and care", href: "#" },
      { label: "Driving and transport", href: "#" },
      { label: "Education and learning", href: "#" },
      { label: "Emergency and safety", href: "#" },
      { label: "Employment, money and taxes", href: "#" },
      { label: "Environment", href: "#" },
      { label: "Health and wellbeing", href: "#" },
      { label: "Housing, property and land", href: "#" },
      { label: "Your rights, crime and the law", href: "#" },
    ],
  },
  {
    title: "Find out more",
    links: [
      { label: "About government", href: "#" },
      { label: "Public consultations", href: "#" },
      { label: "NT public holidays", href: "#" },
      { label: "Media releases", href: "#" },
      { label: "Government grants", href: "#" },
      { label: "Government priorities", href: "#" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    href: "https://facebook.com/ntgovernment",
    icon: "fa-brands fa-facebook",
  },
  {
    platform: "LinkedIn",
    href: "https://linkedin.com/company/nt-government",
    icon: "fa-brands fa-linkedin",
  },
  {
    platform: "YouTube",
    href: "https://youtube.com/@ntgovernment",
    icon: "fa-brands fa-youtube",
  },
  {
    platform: "Instagram",
    href: "https://instagram.com/ntgovernment",
    icon: "fa-brands fa-instagram",
  },
  {
    platform: "Have your say",
    href: "https://consultation.nt.gov.au",
    icon: "fa-light fa-comments",
  },
];

const bottomLinks: FooterLink[] = [
  { label: "Copyright, disclaimer and privacy", href: "#" },
  { label: "Freedom of information", href: "#" },
  { label: "Interpreter services", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Site map", href: "#" },
  { label: "Contacts", href: "#" },
  { label: "NTG staff systems", href: "#" },
];

const acknowledgement =
  "The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.";

const copyrightText = "© 2025 Northern Territory Government of Australia";

/* ============================================
   Stories
   ============================================ */

/**
 * Default Footer - Complete footer with all sections, social media, and NT Government content
 */
export const Default: Story = {
  args: {
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText,
  },
};

/**
 * Minimal Footer - Basic footer for smaller applications or limited space
 */
export const Minimal: Story = {
  args: {
    bottomLinks: [
      { label: "Privacy", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Contact", href: "#" },
    ],
    copyrightText: "© 2025 Northern Territory Government",
  },
};

/**
 * With Logo - Footer including organization branding/logo
 */
export const WithLogo: Story = {
  args: {
    logo: (
      <div
        style={{
          width: "176px",
          height: "63px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          color: "rgba(255, 255, 255, 0.6)",
        }}
      >
        [Organization Logo]
      </div>
    ),
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    copyrightText: copyrightText,
  },
};

/**
 * Multiple Sections - Demonstrates how the Footer handles multiple content sections
 */
export const MultipleSections: Story = {
  args: {
    sections: [
      {
        title: "Information and services",
        columns: 2,
        links: [
          { label: "Art, sport and leisure", href: "#" },
          { label: "Boating, fishing and marine", href: "#" },
          { label: "Business and industry", href: "#" },
          { label: "Community support and care", href: "#" },
          { label: "Driving and transport", href: "#" },
        ],
      },
      {
        title: "Find out more",
        links: [
          { label: "About government", href: "#" },
          { label: "Public consultations", href: "#" },
          { label: "NT public holidays", href: "#" },
        ],
      },
      {
        title: "Help and support",
        links: [
          { label: "Contact support", href: "#" },
          { label: "FAQ", href: "#" },
          { label: "Feedback", href: "#" },
        ],
      },
    ],
    bottomLinks: bottomLinks,
    copyrightText: copyrightText,
  },
};

/**
 * Social Media Only - Demonstrates footer with social media links only
 */
export const SocialMediaOnly: Story = {
  args: {
    sections: [
      {
        title: "Connect with us",
        links: [],
      },
    ],
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    copyrightText: copyrightText,
  },
};

/**
 * With Custom Divider - Shows how to customize the bottom links divider character
 */
export const CustomDivider: Story = {
  args: {
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    linkDivider: "•",
    copyrightText: copyrightText,
  },
};

/**
 * Acknowledgement with Content - Displays full Aboriginal acknowledgement section
 */
export const WithAcknowledgement: Story = {
  args: {
    sections: informationSections,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText,
  },
};

/**
 * Empty State - Demonstrates minimal empty footer structure
 */
export const EmptyState: Story = {
  args: {},
};

/**
 * Single Section - Basic footer with one content section
 */
export const SingleSection: Story = {
  args: {
    sections: [
      {
        title: "Quick Links",
        links: [
          { label: "Online services", href: "#" },
          { label: "Apply for a license", href: "#" },
          { label: "Report an issue", href: "#" },
          { label: "Find a service", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privacy policy", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    copyrightText: copyrightText,
  },
};

/**
 * Mobile Responsive - Shows how footer adapts to mobile screens
 * Try viewing this story in different viewport sizes
 */
export const MobileResponsive: Story = {
  args: {
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/**
 * Extended Footer - Shows footer with maximum content (all sections, logo, social media, acknowledgement)
 */
export const Extended: Story = {
  args: {
    logo: (
      <div
        style={{
          width: "176px",
          height: "63px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          color: "rgba(255, 255, 255, 0.5)",
          textAlign: "center",
          padding: "8px",
        }}
      >
        NT Government Logo
      </div>
    ),
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText,
  },
};

/**
 * Dense Layout - Compact footer with multiple sections and links
 */
export const DenseLayout: Story = {
  args: {
    sections: [
      {
        title: "Services",
        links: [
          { label: "Online applications", href: "#" },
          { label: "Licenses and permits", href: "#" },
          { label: "Business services", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#" },
          { label: "Guides", href: "#" },
          { label: "Support", href: "#" },
        ],
      },
      {
        title: "About",
        links: [
          { label: "Our organization", href: "#" },
          { label: "Contact us", href: "#" },
          { label: "Careers", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Contact", href: "#" },
    ],
    copyrightText: "© 2025 NT Government",
  },
};

/**
 * Custom Social Links - Alternative way to structure social media
 */
export const CustomSocialLinks: Story = {
  args: {
    sections: informationSections,
    socialLinks: [
      {
        platform: "Follow us on Twitter",
        href: "#",
        icon: "fa-brands fa-x-twitter",
      },
      {
        platform: "Join our community",
        href: "#",
        icon: "fa-brands fa-github",
      },
    ],
    bottomLinks: bottomLinks,
    copyrightText: copyrightText,
  },
};
