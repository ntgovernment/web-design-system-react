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

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Small Button",
  },
};

export const AllVariants: Story = {
  args: {
    label: "Button",
  },
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="tertiary" label="Tertiary" />
    </div>
  ),
};

export const WithIconLeft: Story = {
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-home",
    label: "Home",
  },
};

export const WithIconRight: Story = {
  args: {
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    label: "Next",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-search",
    "aria-label": "Search",
  },
};

export const IconButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" iconLeft="fa-light fa-home" label="Home" />
      <Button
        variant="primary"
        iconLeft="fa-light fa-download"
        label="Download"
      />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-arrow-left"
        label="Back"
      />
      <Button variant="tertiary" iconLeft="fa-light fa-cog" label="Settings" />
      <Button
        variant="primary"
        iconRight="fa-light fa-arrow-right"
        label="Next"
      />
    </div>
  ),
};

export const IconOnlyButtons: Story = {
  args: {
    size: "sm",
  },

  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button
        variant="primary"
        iconLeft="fa-light fa-search"
        aria-label="Search"
      />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-cog"
        aria-label="Settings"
      />
      <Button
        variant="tertiary"
        iconLeft="fa-light fa-filter"
        aria-label="Filter"
      />
      <Button variant="primary" iconLeft="fa-light fa-plus" aria-label="Add" />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-times"
        aria-label="Close"
      />
      <Button
        variant="primary"
        iconLeft="fa-light fa-info-circle"
        aria-label="Information"
      />
      <Button
        variant="secondary"
        iconLeft="fa-light fa-edit"
        aria-label="Edit"
      />
    </div>
  ),
};

export const CustomizedWithCSSVars: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Extra Large Padding
        </h4>
        <Button
          variant="primary"
          label="Extra Large Button"
          style={
            {
              "--bs-btn-padding-x": "48px",
              "--bs-btn-padding-y": "20px",
              "--bs-btn-font-size": "18px",
            } as React.CSSProperties
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Custom Colors
        </h4>
        <Button
          variant="primary"
          label="Purple Button"
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
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Pill-Shaped (Override NTG Theme)
        </h4>
        <Button
          variant="primary"
          label="Pill Button"
          style={
            {
              "--bs-btn-border-radius": "50rem",
            } as React.CSSProperties
          }
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", fontWeight: 600 }}>
          Custom Border
        </h4>
        <Button
          variant="primary"
          label="Custom Border"
          style={
            {
              "--bs-btn-border-width": "3px",
              "--bs-btn-border-color": "#dc3545",
              "--bs-btn-bg": "transparent",
              "--bs-btn-color": "#dc3545",
              "--bs-btn-hover-bg": "#dc3545",
              "--bs-btn-hover-color": "white",
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
          maxWidth: "600px",
        }}
      >
        <p style={{ margin: 0, fontSize: "13px", lineHeight: "1.6" }}>
          <strong>💡 Tip:</strong> All buttons use Bootstrap 5.3's CSS variables
          approach. You can customize padding, colors, borders, typography, and
          more at runtime without modifying component code. See{" "}
          <code>CSS_VARIABLES.md</code> for complete documentation.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Demonstrates runtime customization using Bootstrap CSS variables. Override `--bs-btn-*` variables inline or via CSS classes to create custom button styles without modifying the component.",
      },
    },
  },
};
