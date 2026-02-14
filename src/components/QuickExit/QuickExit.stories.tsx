import type { Meta, StoryObj } from "@storybook/react-vite";
import { QuickExit } from "./QuickExit";

const meta = {
  title: "Components/QuickExit",
  component: QuickExit,
  parameters: {
    layout: "fullwidth",
    docs: {
      description: {
        component:
          "A safety component that allows users to quickly exit sensitive pages. When clicked, it opens an innocuous website in a new tab and redirects the current tab to another safe site, disabling the back button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description: "Main heading text for the component",
    },
    content: {
      control: "text",
      description: "Descriptive text content displayed below the heading",
    },
    exitUrl: {
      control: "text",
      description: "URL to open in new tab when clicked",
    },
    redirectUrl: {
      control: "text",
      description: "URL to redirect current tab to",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the container",
    },
    onClick: {
      action: "clicked",
      description: "Custom click handler called before redirect",
    },
  },
} satisfies Meta<typeof QuickExit>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock click handler that prevents actual redirect for Storybook
const mockClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
  event.preventDefault();
  event.stopPropagation();
  console.log("Quick exit clicked (redirect prevented in Storybook)");
  alert(
    "Quick Exit activated!\n\nIn production, this would:\n1. Open https://www.bom.gov.au/ in a new tab\n2. Redirect this tab to https://www.google.com/\n3. Disable the back button",
  );
};

export const Default: Story = {
  args: {
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Quick Exit component with standard heading and content. Click anywhere on the banner to trigger the exit functionality.",
      },
    },
  },
};

export const CustomHeading: Story = {
  args: {
    heading: "Leave this page quickly",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story: "Quick Exit with a custom heading text.",
      },
    },
  },
};

export const CustomContent: Story = {
  args: {
    heading: "Quick exit",
    content:
      "Click this banner to immediately exit. Your safety is important. Call 000 if you need emergency help or 1800 RESPECT (1800 737 732) for confidential support.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quick Exit with custom content that includes additional support resources.",
      },
    },
  },
};

export const DomesticViolenceSupport: Story = {
  args: {
    heading: "Quick exit",
    content:
      "Click anywhere on this banner to leave this page immediately. If you're in danger, call 000 for emergency assistance or 1800 RESPECT (1800 737 732) for confidential support.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example usage for a domestic violence support page with relevant helpline information.",
      },
    },
  },
};

export const ChildSafetyResources: Story = {
  args: {
    heading: "Leave quickly",
    content:
      "Click this banner to exit immediately. For child safety concerns, call 1800 700 250. In an emergency, call 000.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example usage for a child safety resources page with appropriate helpline contact.",
      },
    },
  },
};

export const WhistleblowerPortal: Story = {
  args: {
    heading: "Exit securely",
    content:
      "Click to exit this page securely. Your report is confidential. This action will not delete any saved drafts.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example usage for a whistleblower or fraud reporting portal with reassurance about data privacy.",
      },
    },
  },
};

export const MentalHealthCrisis: Story = {
  args: {
    heading: "Quick exit",
    content:
      "Exit this page quickly if you need to. For immediate mental health support, call Lifeline 13 11 14 or 000 in an emergency.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example usage for mental health crisis support pages with relevant crisis helplines.",
      },
    },
  },
};

export const CustomExitURLs: Story = {
  args: {
    exitUrl: "https://www.abc.net.au/news/weather",
    redirectUrl: "https://www.facebook.com/",
    heading: "Exit now",
    content:
      "Click to leave this page. Your browsing history will show this page, but you won't be able to use the back button.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Quick Exit configured with custom safe URLs. This example uses ABC News Weather and Facebook.",
      },
    },
  },
};

export const ShortContent: Story = {
  args: {
    heading: "Exit",
    content: "Click to leave immediately. Call 000 in an emergency.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example with shorter, more concise content while maintaining clarity.",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    heading: "Quick exit available",
    content:
      "Click anywhere on this banner to immediately leave this page and navigate to a safe website. This action will open a new tab with general weather information and redirect your current browser tab to a common search engine. Neither tab will have a functioning back button, but please note that this page will still appear in your browser's complete history. For your safety, remember to clear your browsing history if needed. In immediate danger, call emergency services on 000.",
    onClick: mockClickHandler,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how the component handles longer content text with proper wrapping and spacing.",
      },
    },
  },
};

export const WithAnalytics: Story = {
  args: {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      // Simulate analytics tracking
      console.log("Analytics Event:", {
        event: "quick_exit_activated",
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        component: "QuickExit",
      });

      alert(
        "Quick Exit with Analytics!\n\nTracked event:\n- Event: quick_exit_activated\n- Page: " +
          window.location.pathname +
          "\n- Timestamp: " +
          new Date().toISOString() +
          "\n\nIn production, this would also trigger the actual exit redirect.",
      );
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to integrate analytics tracking with the Quick Exit component. Use the onClick prop to log events before the redirect occurs.",
      },
    },
  },
};

export const MultipleInstances: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <QuickExit onClick={mockClickHandler} />
      <div
        style={{
          padding: "48px 24px",
          textAlign: "center",
          background: "#f5f5f7",
        }}
      >
        <h2>Page Content</h2>
        <p style={{ maxWidth: "600px", margin: "16px auto" }}>
          This demonstrates what a page might look like with a Quick Exit banner
          at the top. The banner is prominently displayed and easily accessible,
          while the content below remains clearly visible and usable.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullwidth",
    docs: {
      description: {
        story:
          "Example showing the Quick Exit component in context with other page content. The banner appears at the very top of the page.",
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ maxWidth: "100%" }}>
      <QuickExit onClick={mockClickHandler} />
      <div style={{ padding: "24px", background: "#f9f9f9", marginTop: "0" }}>
        <h3 style={{ marginTop: 0 }}>Accessibility Features</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Keyboard Navigation:</strong> Press Tab to focus, then Enter
            or Space to activate
          </li>
          <li>
            <strong>Screen Readers:</strong> Announced as "Quick exit - click to
            leave this page immediately, button"
          </li>
          <li>
            <strong>Focus Indicator:</strong> Visible orange outline (NTG theme)
            or green outline (Central theme)
          </li>
          <li>
            <strong>Role:</strong> Properly identified as an interactive button
            element
          </li>
          <li>
            <strong>Color Contrast:</strong> White text on red background meets
            WCAG AA standards
          </li>
          <li>
            <strong>Click Target:</strong> Entire banner is clickable for easy
            activation
          </li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of the accessibility features built into the Quick Exit component. Try navigating with your keyboard or screen reader.",
      },
    },
  },
};

export const ResponsiveDemo: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ marginTop: 0 }}>Desktop View</h3>
        <QuickExit onClick={mockClickHandler} />
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h3>Mobile View (below 768px)</h3>
        <div style={{ maxWidth: "375px", border: "2px solid #ddd" }}>
          <QuickExit onClick={mockClickHandler} />
        </div>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
          On mobile devices, the component adjusts padding and uses mobile
          typography sizes for optimal readability.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates responsive behavior of the Quick Exit component on different screen sizes.",
      },
    },
  },
};

export const ThemeComparison: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ marginTop: 0 }}>NT.GOV.AU Theme (Default)</h3>
        <QuickExit onClick={mockClickHandler} />
        <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
          Features: Sharp corners (0px border-radius), Orange focus outline
          (#EC8C58), Lato typography
        </p>
      </div>

      <div>
        <h3>Central Theme</h3>
        <div
          style={{
            padding: "8px",
            background: "#f0f0f0",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: "0", fontSize: "14px", fontStyle: "italic" }}>
            Note: Quick Exit is designed for external NT.GOV.AU sites only and
            is not currently enabled for NTG Central theme.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The Quick Exit component is currently only available in the NT.GOV.AU external theme. It is intentionally not available for NTG Central (internal) applications.",
      },
    },
  },
};
