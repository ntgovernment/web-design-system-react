import type { Meta, StoryObj } from "@storybook/react-vite";
import { GlobalAlert } from "./GlobalAlert";

const meta = {
  title: "Components/GlobalAlert",
  component: GlobalAlert,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "info-alt", "warning", "critical"],
      description: "Alert variant/severity level",
    },
    title: {
      control: "text",
      description: "Alert title",
    },
    description: {
      control: "text",
      description: "Alert description content",
    },
    dismissible: {
      control: "boolean",
      description: "Show dismiss button",
    },
    dismissLabel: {
      control: "text",
      description: "Dismiss button aria label",
    },
    ctaText: {
      control: "text",
      description: "Optional CTA button text",
    },
  },
} satisfies Meta<typeof GlobalAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default information global alert
 */
export const Default: Story = {
  args: {
    variant: "info",
    title: "System Maintenance Scheduled",
    description: (
      <>
        This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with <a href='#'>More information</a>
      </>
    ),
  },
};

/**
 * Information variant
 * The blue information global alert is for low-level alerts to indicate a minor problem or an update.
 * It must still affect the entire service or site, and all users.
 */
export const Information: Story = {
  args: {
    variant: "info",
    title: "Service Update Available",
    description: (
      <>
        A new version of our online services portal is now available. The update includes improved accessibility features and enhanced security. <a href='#'>Learn more about the updates</a>
      </>
    ),
  },
};

/**
 * Information with dismiss button
 */
export const InformationDismissible: Story = {
  args: {
    variant: "info",
    title: "New Features Available",
    description: (
      <>
        We have added new features to improve your experience on NT.GOV.AU. Explore the updated navigation and enhanced search capabilities. <a href='#'>View feature guide</a>
      </>
    ),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Information with CTA button
 */
export const InformationWithCTA: Story = {
  args: {
    variant: "info",
    title: "Complete Your Profile",
    description:
      "Help us serve you better by completing your user profile. This will enable personalized services and faster processing of your applications.",
    ctaText: "Update Profile",
    ctaOnClick: () => console.log("CTA clicked"),
  },
};

/**
 * Information with CTA and dismiss
 */
export const InformationComplete: Story = {
  args: {
    variant: "info",
    title: "Annual Survey Now Open",
    description: (
      <>
        Share your feedback on NT Government services. Your input helps us improve our services to better meet community needs. <a href='#'>Read privacy statement</a>
      </>
    ),
    ctaText: "Take Survey",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Information Alternative variant (Light Blue)
 * Light blue is an alternative colour for websites where blue is prominent and the default colour may get lost.
 * Uses light background with dark text instead of solid blue with white text.
 */
export const InformationAlternative: Story = {
  args: {
    variant: "info-alt",
    title: "Service Update Available",
    description: (
      <>
        A new version of our online services portal is now available. The update includes improved accessibility features and enhanced security. <a href='#'>Learn more about the updates</a>
      </>
    ),
  },
};

/**
 * Information Alternative with dismiss button
 */
export const InformationAlternativeDismissible: Story = {
  args: {
    variant: "info-alt",
    title: "New Features Available",
    description: (
      <>
        We have added new features to improve your experience on NT.GOV.AU. Explore the updated navigation and enhanced search capabilities. <a href='#'>View feature guide</a>
      </>
    ),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Information Alternative with CTA button
 */
export const InformationAlternativeWithCTA: Story = {
  args: {
    variant: "info-alt",
    title: "Complete Your Profile",
    description:
      "Help us serve you better by completing your user profile. This will enable personalized services and faster processing of your applications.",
    ctaText: "Update Profile",
    ctaOnClick: () => console.log("CTA clicked"),
  },
};

/**
 * Information Alternative with CTA and dismiss
 */
export const InformationAlternativeComplete: Story = {
  args: {
    variant: "info-alt",
    title: "Annual Survey Now Open",
    description: (
      <>
        Share your feedback on NT Government services. Your input helps us improve our services to better meet community needs. <a href='#'>Read privacy statement</a>
      </>
    ),
    ctaText: "Take Survey",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Warning variant
 * The orange warning global alert should be used when an event has either happened or is about to
 * and poses a threat to or will seriously affect a service.
 * It can also be used to communicate an ongoing crisis which seriously affects a service's operation.
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Service Disruption Expected",
    description: (
      <>
        Due to planned system maintenance, some online services may be unavailable between 11 PM tonight and 2 AM tomorrow. Please plan accordingly and complete any urgent transactions before maintenance begins. <a href='#'>View affected services</a>
      </>
    ),
  },
};

/**
 * Warning with dismiss
 */
export const WarningDismissible: Story = {
  args: {
    variant: "warning",
    title: "Severe Weather Alert",
    description:
      "A severe weather warning has been issued for the Darwin region. Road closures and service disruptions are possible. Please monitor updates and take necessary precautions.",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Warning with CTA
 */
export const WarningWithCTA: Story = {
  args: {
    variant: "warning",
    title: "Action Required: License Expiring Soon",
    description:
      "Your professional license expires in 14 days. Renew now to avoid service interruptions and potential penalties. Processing times may vary during peak periods.",
    ctaText: "Renew License",
    ctaHref: "#renew",
  },
};

/**
 * Warning with CTA and dismiss
 */
export const WarningComplete: Story = {
  args: {
    variant: "warning",
    title: "Urgent: System Migration in Progress",
    description: (
      <>
        We are migrating to a new system to improve reliability and performance. Some features may be temporarily limited. Your patience is appreciated during this transition. <a href='#'>View migration timeline</a>
      </>
    ),
    ctaText: "Check System Status",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Critical variant
 * This red global alert should only be used for immediate, significant threat to the community,
 * like a natural disaster or a disease outbreak.
 */
export const Critical: Story = {
  args: {
    variant: "critical",
    title: "Emergency: Bushfire Warning",
    description: (
      <>
        An emergency bushfire warning is in effect for Litchfield and surrounding areas. Residents should evacuate immediately and follow emergency service directions. <a href='#'>View evacuation centers</a>
      </>
    ),
  },
};

/**
 * Critical with dismiss
 */
export const CriticalDismissible: Story = {
  args: {
    variant: "critical",
    title: "Critical Weather Event",
    description:
      "A Category 4 cyclone is approaching the Northern Territory coast. All residents in affected areas must take immediate action to secure property and relocate to designated shelters.",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Critical with CTA
 */
export const CriticalWithCTA: Story = {
  args: {
    variant: "critical",
    title: "Public Health Emergency",
    description:
      "A public health emergency has been declared. All residents are advised to follow health authority guidelines and monitor official channels for updates on containment measures and safety protocols.",
    ctaText: "View Health Guidelines",
    ctaHref: "#health",
  },
};

/**
 * Critical with CTA and dismiss
 */
export const CriticalComplete: Story = {
  args: {
    variant: "critical",
    title: "Emergency Alert: Immediate Action Required",
    description: (
      <>
        A significant emergency situation is developing that requires immediate community action. Please follow all instructions from emergency services and monitor official channels for real-time updates. <a href='#'>Emergency contact information</a>
      </>
    ),
    ctaText: "View Emergency Information",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

/**
 * Long content demonstrating text wrapping
 */
export const LongContent: Story = {
  args: {
    variant: "info",
    title: "Extended Service Announcement: Important Updates",
    description: (
      <>
        This global alert demonstrates how the component handles extended content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. When communicating important information that affects all users of the website or service, it's essential to provide clear, comprehensive details while keeping the message concise and actionable. Include relevant links to supporting documentation where users can find additional context, resources, or step-by-step instructions. <a href='#'>Read the full announcement</a> for detailed information about this update and its impact on your use of NT Government services.
      </>
    ),
    ctaText: "Learn More",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
  },
};

/**
 * Multiple alerts stacked (up to 3 maximum)
 */
export const StackedAlerts: Story = {
  args: {
    variant: "info",
    title: "Stacked Alerts",
    description: "Example of multiple alerts",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GlobalAlert
        variant="critical"
        title="Emergency: Severe Weather Warning"
        description={<>Cyclone approaching northern regions. Evacuate immediately if in affected areas. <a href='#'>View evacuation routes</a></>}
        ctaText="Emergency Information"
        dismissible={true}
      />
      <GlobalAlert
        variant="warning"
        title="Service Disruption: Power Outages Expected"
        description={<>Planned power maintenance may affect online services tonight between 10 PM and 6 AM. <a href='#'>View affected services</a></>}
        dismissible={true}
      />
      <GlobalAlert
        variant="info"
        title="New Online Services Portal"
        description={<>Access improved government services with enhanced features and better accessibility. <a href='#'>Explore new features</a></>}
        ctaText="Visit Portal"
        dismissible={true}
      />
    </div>
  ),
};

/**
 * All variants comparison
 */
export const AllVariants: Story = {
  args: {
    variant: "info",
    title: "All Variants",
    description: "Comparison of all variants",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GlobalAlert
        variant="info"
        title="Information Alert"
        description={<>This is an information alert for low-level updates that affect all users. <a href='#'>More information</a></>}
        dismissible={true}
      />
      <GlobalAlert
        variant="info-alt"
        title="Information Alternative Alert"
        description={<>This is an alternative information alert with light background and dark text. <a href='#'>More information</a></>}
        dismissible={true}
      />
      <GlobalAlert
        variant="warning"
        title="Warning Alert"
        description={<>This is a warning alert for events that pose a threat or seriously affect a service. <a href='#'>View details</a></>}
        dismissible={true}
      />
      <GlobalAlert
        variant="critical"
        title="Critical Alert"
        description={<>This is a critical alert for immediate, significant threats to the community. <a href='#'>Emergency resources</a></>}
        dismissible={true}
      />
    </div>
  ),
};

/**
 * Minimal - Title and description only
 */
export const Minimal: Story = {
  args: {
    variant: "info",
    title: "Service Announcement",
    description: "Brief update about service availability.",
  },
};

/**
 * With external link CTA
 */
export const WithExternalLink: Story = {
  args: {
    variant: "warning",
    title: "Important Update Required",
    description:
      "Changes to our authentication system require all users to update their security settings. This ensures your account remains secure and compliant with current standards.",
    ctaText: "Update Security Settings",
    ctaHref: "https://example.com/security",
    dismissible: true,
  },
};
