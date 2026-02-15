import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "boolean",
      mapping: { false: undefined, true: "sm" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary buttons indicate the main call-to-action on a page or component.
 * Use for the most important action users should take.
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Submit Application",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The primary button is the most visually prominent and should be used for the main action users need to take. In this example, it leads to submitting an application for a government service.",
      },
    },
  },
};

/**
 * Secondary buttons are used for less important actions or alternatives.
 * They work well alongside primary buttons or standalone for secondary tasks.
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Save as Draft",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Secondary buttons are for less prominent actions. Here it allows users to save their application progress without fully submitting it.",
      },
    },
  },
};

/**
 * Tertiary buttons are de-emphasized and often used for cancellation, back navigation,
 * or optional actions. They have the least visual prominence.
 */
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Cancel",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tertiary buttons are for even less important actions, like cancelling, going back, or viewing optional information. They provide minimal visual emphasis.",
      },
    },
  },
};

/**
 * Small buttons are used in compact layouts or secondary locations.
 */
export const Small: Story = {
  args: {
    size: "sm",
    label: "Edit Profile",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Small buttons are ideal for spaces with limited room or for secondary actions. Here, a small primary button allows quick access to profile editing functionality.",
      },
    },
  },
};

/**
 * Shows all three button variants for comparison.
 * Demonstrates the visual hierarchy of primary, secondary, and tertiary buttons.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="d-flex gap-3 flex-wrap align-items-center">
      <Button variant="primary" label="Submit Form" />
      <Button variant="secondary" label="Save Draft" />
      <Button variant="tertiary" label="Cancel" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This example shows all three button variants together, demonstrating the visual hierarchy. Primary is most prominent for the main action, secondary for alternatives, and tertiary for de-emphasized options like cancellation.",
      },
    },
  },
};

/**
 * Buttons with left-aligned icons. The icon is closely associated with the action.
 */
export const WithIconLeft: Story = {
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-download",
    label: "Download Report",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Left-aligned (leading) icons work best when the icon is closely associated with the action. The download icon clearly relates to downloading the report.",
      },
    },
  },
};

/**
 * Buttons with right-aligned icons. The icon provides directional or supplementary information.
 */
export const WithIconRight: Story = {
  args: {
    variant: "tertiary",
    iconRight: "fa-light fa-arrow-right",
    label: "View More Services",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Right-aligned (trailing) icons are useful for showing direction or providing supplementary context. The arrow indicates that clicking opens more content.",
      },
    },
  },
};

/**
 * Icon-only buttons must include an aria-label for screen reader accessibility.
 * WCAG compliance requires this for icon-only interactive elements.
 */
export const IconOnly: Story = {
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-search",
    "aria-label": "Search government services",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only buttons MUST include an aria-label attribute to be accessible to screen readers. Without it, users relying on assistive technology won't understand the button's purpose.",
      },
    },
  },
};

/**
 * Common button actions with left-aligned icons.
 * Demonstrates realistic use cases across the variant spectrum.
 */
export const WithLeadingIcons: Story = {
  render: () => (
    <div className="d-flex gap-3 flex-wrap">
      <Button
        variant="primary"
        iconLeft="fa-light fa-file-arrow-down"
        label="Download Application"
      />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-arrow-left"
        label="Previous Step"
      />
      <Button
        variant="tertiary"
        iconLeft="fa-light fa-circle-info"
        label="View Instructions"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This example shows realistic government service scenarios with left-aligned icons. Each button uses an action-oriented label clearly describing what will happen when clicked.",
      },
    },
  },
};

/**
 * Common icon-only button actions.
 * All include aria-label for accessibility. Useful for compact interfaces.
 */
export const IconOnlyButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button
        variant="primary"
        iconLeft="fa-light fa-magnifying-glass"
        aria-label="Search services"
        title="Search"
      />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-sliders"
        aria-label="Filter results"
        title="Filter"
      />
      <Button
        variant="tertiary"
        iconLeft="fa-light fa-print"
        aria-label="Print page"
        title="Print"
      />
      <Button
        variant="primary"
        iconLeft="fa-light fa-plus"
        aria-label="Add new item"
        size="sm"
        title="Add"
      />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-xmark"
        aria-label="Close menu"
        size="sm"
        title="Close"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only buttons for compact layouts. Each button has an aria-label and title attribute for accessibility and user clarity. These are ideal for toolbars or navigation elements.",
      },
    },
  },
};

/**
 * Button action stack showing a complete user workflow.
 * Demonstrates proper button hierarchy in a real-world scenario.
 */
export const ActionStack: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button
        variant="primary"
        iconLeft="fa-light fa-check"
        label="Confirm Submission"
      />
      <Button variant="secondary" label="Review Application" />
      <Button variant="tertiary" label="Cancel" />
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "This demonstrates a proper button hierarchy for a critical action (submission). The primary button is the main action, secondary offers review, and tertiary provides an escape route. Users should typically only have one primary button per action group.",
      },
    },
  },
};

/**
 * Larger button with extra padding for high-prominence actions.
 * Demonstrates CSS variable customization for unique use cases.
 */
export const LargeIcon: Story = {
  render: () => (
    <Button
      variant="primary"
      iconLeft="fa-light fa-arrow-right"
      label="Continue to Next Step"
      style={
        {
          "--bs-btn-padding-x": "32px",
          "--bs-btn-padding-y": "20px",
          "--bs-btn-font-size": "18px",
        } as React.CSSProperties
      }
    />
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "This button uses CSS variable overrides to create an extra-large variant without modifying the component. It demonstrates how Bootstrap's CSS variables approach enables flexible customization.",
      },
    },
  },
};

/**
 * Demonstrates runtime CSS variable customization.
 * Shows how to override button styles without changing the component code.
 */
export const CustomizedWithCSSVars: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "16px", fontSize: "16px", fontWeight: 600 }}>
          Custom Padding
        </h4>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button variant="primary" label="Standard Button" />
          <Button
            variant="primary"
            label="Extra Large Button"
            style={
              {
                "--bs-btn-padding-x": "48px",
                "--bs-btn-padding-y": "24px",
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "16px", fontSize: "16px", fontWeight: 600 }}>
          Custom Colors
        </h4>
        <Button
          variant="primary"
          label="Custom Purple Action"
          style={
            {
              "--bs-btn-bg": "#8b5cf6",
              "--bs-btn-border-color": "#8b5cf6",
              "--bs-btn-hover-bg": "#7c3aed",
              "--bs-btn-hover-border-color": "#7c3aed",
              "--bs-btn-active-bg": "#6d28d9",
              "--bs-btn-active-border-color": "#6d28d9",
            } as React.CSSProperties
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "16px", fontSize: "16px", fontWeight: 600 }}>
          Custom Border Radius
        </h4>
        <div style={{ display: "flex", gap: "12px" }}>
          <Button variant="primary" label="Sharp Corners" />
          <Button
            variant="primary"
            label="Rounded"
            style={
              {
                "--bs-btn-border-radius": "8px",
              } as React.CSSProperties
            }
          />
          <Button
            variant="primary"
            label="Pill-Shaped"
            style={
              {
                "--bs-btn-border-radius": "50rem",
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      <div
        style={{
          padding: "16px",
          background: "#f0f7ff",
          borderRadius: "8px",
          maxWidth: "600px",
          borderLeft: "4px solid #1f1f5f",
        }}
      >
        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
          <strong>CSS Variables:</strong> All buttons use Bootstrap 5.3's CSS
          variables approach. Override <code>--bs-btn-*</code> variables inline
          or via CSS classes to customize button styles at runtime without
          modifying component code. See <code>CSS_VARIABLES.md</code> for
          complete documentation.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "This story demonstrates the power of CSS variables for button customization. You can override padding, colors, border radius, and more without touching component code, enabling design flexibility and brand customization.",
      },
    },
  },
};

/**
 * Shows loading state simulation and disabled state.
 * Demonstrates handling of user feedback during asynchronous operations.
 */
export const DisabledState: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="primary" label="Available Action" />
      <Button variant="primary" label="Unavailable Action" disabled />
      <Button variant="secondary" label="Available" />
      <Button variant="secondary" label="Unavailable" disabled />
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Disabled buttons indicate actions that are not currently available. Use disabled state sparingly and ensure there's a clear reason why the action is unavailable. Always prefer showing enabled buttons with appropriate messaging instead when possible.",
      },
    },
  },
};
