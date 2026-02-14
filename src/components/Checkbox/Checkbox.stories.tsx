import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Checkbox, CheckboxGroup } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Often used in forms, a checkbox allows users to select one or more options from a list. It can also be used to toggle one option on or off, for example to give consent to receive email communications from a website. Use a checkbox for a list of options where the user can select one or more of them. If the user can only select one option from a list, use the radio button component instead.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// ==========================================================================
// Individual Checkbox Stories
// ==========================================================================

export const Default: Story = {
  args: {
    label: "Subscribe to email notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "I agree to the terms and conditions",
    defaultChecked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    "aria-label": "Select this option",
  },
};

export const Disabled: Story = {
  args: {
    label: "This option is currently unavailable",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Automatically enabled for all users",
    disabled: true,
    defaultChecked: true,
  },
};

export const WithSuccessValidation: Story = {
  args: {
    label: "Marketing communications",
    defaultChecked: true,
    validationState: "success",
    validationMessage: "Preferences saved successfully",
  },
};

export const WithErrorValidation: Story = {
  args: {
    label: "I have read and agree to the privacy policy",
    validationState: "error",
    validationMessage: "You must agree to the privacy policy to continue",
  },
};

// ==========================================================================
// Checkbox Group Stories
// ==========================================================================

export const BasicGroup: Story = {
  render: () => (
    <CheckboxGroup
      label="Preferred Contact Methods"
      helperText="Select all that apply"
    >
      <Checkbox label="Email" />
      <Checkbox label="Phone" />
      <Checkbox label="SMS" />
      <Checkbox label="Mail" />
    </CheckboxGroup>
  ),
};

export const RequiredGroup: Story = {
  render: () => (
    <CheckboxGroup
      label="Terms and Conditions"
      helperText="Please review and accept the following"
      required
    >
      <Checkbox label="I agree to the privacy policy" />
      <Checkbox label="I agree to the terms of service" />
      <Checkbox label="I consent to receive important service updates" />
    </CheckboxGroup>
  ),
};

export const GroupWithSomeChecked: Story = {
  render: () => (
    <CheckboxGroup
      label="Email Preferences"
      helperText="Choose the types of emails you'd like to receive"
    >
      <Checkbox label="Weekly newsletter" />
      <Checkbox label="Event notifications" defaultChecked />
      <Checkbox label="Policy updates" defaultChecked />
      <Checkbox label="Emergency alerts" defaultChecked />
    </CheckboxGroup>
  ),
};

export const GroupWithError: Story = {
  render: () => (
    <CheckboxGroup
      label="Service Selection"
      helperText="Select at least one service"
      required
      validationState="error"
      validationMessage="Please select at least one service to continue"
    >
      <Checkbox label="Business registration" />
      <Checkbox label="Tax file number application" />
      <Checkbox label="Working with children check" />
      <Checkbox label="Food handling license" />
    </CheckboxGroup>
  ),
};

export const GroupWithSuccess: Story = {
  render: () => (
    <CheckboxGroup
      label="Notification Settings"
      helperText="Manage your notification preferences"
      validationState="success"
      validationMessage="Settings updated successfully"
    >
      <Checkbox label="Account updates" defaultChecked />
      <Checkbox label="Security alerts" defaultChecked />
      <Checkbox label="Newsletter" />
    </CheckboxGroup>
  ),
};

export const GroupWithDisabledOptions: Story = {
  render: () => (
    <CheckboxGroup
      label="Available Features"
      helperText="Some features require additional permissions"
    >
      <Checkbox label="Basic access" defaultChecked disabled />
      <Checkbox label="Advanced reporting" />
      <Checkbox label="Export data" />
      <Checkbox label="Admin privileges" disabled />
    </CheckboxGroup>
  ),
};

// ==========================================================================
// Real-World Use Cases
// ==========================================================================

export const OnlineServiceApplication: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <CheckboxGroup
        label="Required Services"
        helperText="Select all services you wish to apply for"
        required
      >
        <Checkbox label="Business registration" />
        <Checkbox label="Tax file number" />
        <Checkbox label="Working with children check" />
        <Checkbox label="Food handling license" />
      </CheckboxGroup>

      <CheckboxGroup
        label="Optional Services"
        helperText="Additional services available at no extra cost"
      >
        <Checkbox label="Business advisory consultation" />
        <Checkbox label="Marketing resources" />
        <Checkbox label="Networking events access" />
      </CheckboxGroup>

      <Checkbox
        label="I consent to the collection and use of my personal information as outlined in the privacy policy"
        required
      />
    </div>
  ),
};

export const NewsletterPreferences: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <CheckboxGroup
        label="Email Subscriptions"
        helperText="Choose the topics you're interested in"
      >
        <Checkbox label="Health services updates" />
        <Checkbox label="Education programs" />
        <Checkbox label="Community events" />
        <Checkbox label="Infrastructure projects" />
        <Checkbox label="Business support services" />
      </CheckboxGroup>

      <CheckboxGroup
        label="Frequency"
        helperText="How often would you like to receive emails?"
        required
      >
        <Checkbox label="Daily digest" />
        <Checkbox label="Weekly summary" defaultChecked />
        <Checkbox label="Monthly newsletter" />
      </CheckboxGroup>
    </div>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <CheckboxGroup
        label="Security Settings"
        helperText="Manage your account security preferences"
      >
        <Checkbox label="Enable two-factor authentication" defaultChecked />
        <Checkbox
          label="Require password on sensitive actions"
          defaultChecked
        />
        <Checkbox label="Remember this device for 30 days" />
        <Checkbox label="Send security alerts via email" defaultChecked />
      </CheckboxGroup>

      <CheckboxGroup
        label="Privacy Settings"
        helperText="Control how your information is shared"
      >
        <Checkbox label="Make my profile public" />
        <Checkbox label="Allow contact from other users" />
        <Checkbox label="Include my name in public records" />
      </CheckboxGroup>
    </div>
  ),
};

export const FilterOptions: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <CheckboxGroup label="Location" helperText="Filter by region">
        <Checkbox label="Darwin" defaultChecked />
        <Checkbox label="Alice Springs" />
        <Checkbox label="Katherine" />
        <Checkbox label="Palmerston" />
        <Checkbox label="Nhulunbuy" />
      </CheckboxGroup>

      <CheckboxGroup
        label="Service Type"
        helperText="Filter by service category"
      >
        <Checkbox label="Online" defaultChecked />
        <Checkbox label="In-person" />
        <Checkbox label="Phone" />
        <Checkbox label="Mail" />
      </CheckboxGroup>

      <CheckboxGroup label="Availability">
        <Checkbox label="Available now" defaultChecked />
        <Checkbox label="Scheduled appointments" />
        <Checkbox label="Emergency services" />
      </CheckboxGroup>
    </div>
  ),
};

export const ApplicationConsent: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3" style={{ maxWidth: "600px" }}>
      <CheckboxGroup
        label="Declaration"
        helperText="Please confirm the following statements"
        required
        validationState="error"
        validationMessage="All declarations must be confirmed to proceed"
      >
        <Checkbox label="I declare that all information provided is true and accurate" />
        <Checkbox label="I understand that providing false information may result in application rejection" />
        <Checkbox label="I have read and understood the application guidelines" />
      </CheckboxGroup>

      <Checkbox
        label="I consent to background checks being conducted as part of this application"
        required
        validationState="error"
        validationMessage="Consent is required to process your application"
      />

      <Checkbox
        label="I would like to receive updates about my application via email"
        defaultChecked
      />
    </div>
  ),
};

// ==========================================================================
// Interactive & Controlled Examples
// ==========================================================================

export const ControlledCheckbox: Story = {
  render: function ControlledExample() {
    const [isChecked, setIsChecked] = React.useState(false);

    return (
      <div className="d-flex flex-column gap-3">
        <Checkbox
          label="Marketing communications"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <p className="text-muted small">
          Current state: {isChecked ? "Checked" : "Unchecked"}
        </p>
      </div>
    );
  },
};

export const DynamicValidation: Story = {
  render: function DynamicValidationExample() {
    const [accepted, setAccepted] = React.useState(false);

    return (
      <div className="d-flex flex-column gap-3">
        <Checkbox
          label="I accept the terms and conditions"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          validationState={accepted ? "success" : "error"}
          validationMessage={
            accepted
              ? "Thank you for accepting"
              : "You must accept the terms to continue"
          }
        />
      </div>
    );
  },
};

export const SelectAllPattern: Story = {
  render: function SelectAllExample() {
    const [selections, setSelections] = React.useState({
      email: false,
      phone: false,
      sms: false,
      mail: false,
    });

    const allSelected = Object.values(selections).every((v) => v);
    const someSelected = Object.values(selections).some((v) => v);

    const handleSelectAll = (checked: boolean) => {
      setSelections({
        email: checked,
        phone: checked,
        sms: checked,
        mail: checked,
      });
    };

    return (
      <div className="d-flex flex-column gap-3">
        <Checkbox
          label="Select all contact methods"
          checked={allSelected}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        <hr />
        <CheckboxGroup
          label="Contact Methods"
          helperText="Choose your preferred ways to be contacted"
        >
          <Checkbox
            label="Email"
            checked={selections.email}
            onChange={(e) =>
              setSelections({ ...selections, email: e.target.checked })
            }
          />
          <Checkbox
            label="Phone"
            checked={selections.phone}
            onChange={(e) =>
              setSelections({ ...selections, phone: e.target.checked })
            }
          />
          <Checkbox
            label="SMS"
            checked={selections.sms}
            onChange={(e) =>
              setSelections({ ...selections, sms: e.target.checked })
            }
          />
          <Checkbox
            label="Mail"
            checked={selections.mail}
            onChange={(e) =>
              setSelections({ ...selections, mail: e.target.checked })
            }
          />
        </CheckboxGroup>
        <p className="text-muted small">
          {someSelected
            ? `${Object.values(selections).filter((v) => v).length} method(s) selected`
            : "No methods selected"}
        </p>
      </div>
    );
  },
};

// ==========================================================================
// Playground
// ==========================================================================

export const Playground: Story = {
  args: {
    label: "Checkbox label",
  },
};
