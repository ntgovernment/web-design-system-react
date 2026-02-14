import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Radio, RadioGroup } from "./Radio";

const meta = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A round button for forms or surveys that allows a user to select only one option from a list. Radio buttons can only be used in a group of two or more. Use this component if the user can only select one mutually exclusive option from a list of choices. If you need to allow a user to select more than one option, use the checkbox component instead.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    defaultChecked: { control: "boolean" },
    name: { control: "text" },
    value: { control: "text" },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// ==========================================================================
// Individual Radio Button Stories
// ==========================================================================

export const Default: Story = {
  args: {
    label: "Standard delivery",
    name: "delivery-method",
    value: "standard",
  },
};

export const Checked: Story = {
  args: {
    label: "Email notifications",
    name: "notification-preference",
    value: "email",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "This option is currently unavailable",
    name: "unavailable-option",
    value: "unavailable",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Default option (cannot be changed)",
    name: "locked-option",
    value: "locked",
    disabled: true,
    defaultChecked: true,
  },
};

// ==========================================================================
// Radio Group Stories
// ==========================================================================

export const BasicGroup: Story = {
  render: () => (
    <RadioGroup
      label="Preferred Contact Method"
      helperText="Select only one option"
      name="contact-method"
    >
      <Radio label="Email" value="email" />
      <Radio label="Phone" value="phone" />
      <Radio label="SMS" value="sms" />
      <Radio label="Mail" value="mail" />
    </RadioGroup>
  ),
};

export const RequiredGroup: Story = {
  render: () => (
    <RadioGroup
      label="Application Type"
      helperText="Please select the type of application"
      required
      name="app-type"
    >
      <Radio label="New application" value="new" />
      <Radio label="Renewal application" value="renewal" />
      <Radio label="Amendment to existing application" value="amendment" />
    </RadioGroup>
  ),
};

export const GroupWithPreselection: Story = {
  render: () => (
    <RadioGroup
      label="Email Frequency"
      helperText="How often would you like to receive updates?"
      name="frequency"
    >
      <Radio label="Daily digest" value="daily" />
      <Radio label="Weekly summary" value="weekly" defaultChecked />
      <Radio label="Monthly newsletter" value="monthly" />
    </RadioGroup>
  ),
};

export const GroupWithError: Story = {
  render: () => (
    <RadioGroup
      label="Payment Method"
      helperText="Select your preferred payment method"
      required
      validationState="error"
      validationMessage="Please select a payment method to continue with your order"
      name="payment"
    >
      <Radio label="Credit card" value="card" />
      <Radio label="Direct debit" value="debit" />
      <Radio label="PayPal" value="paypal" />
      <Radio label="Bank transfer" value="transfer" />
    </RadioGroup>
  ),
};

export const GroupWithSuccess: Story = {
  render: () => (
    <RadioGroup
      label="Delivery Method"
      validationState="success"
      validationMessage="Delivery preference saved successfully"
      name="delivery"
    >
      <Radio label="Standard post (7-10 business days)" value="standard" />
      <Radio
        label="Express post (2-3 business days)"
        value="express"
        defaultChecked
      />
      <Radio label="Email delivery (immediate)" value="email" />
      <Radio label="Pick up in person" value="pickup" />
    </RadioGroup>
  ),
};

export const GroupWithDisabledOptions: Story = {
  render: () => (
    <RadioGroup
      label="Service Tier"
      helperText="Some options require additional permissions"
      name="tier"
    >
      <Radio label="Basic (included with your account)" value="basic" />
      <Radio label="Standard (upgrade available)" value="standard" />
      <Radio
        label="Premium (contact support)"
        value="premium"
        disabled
        defaultChecked
      />
      <Radio label="Enterprise (not available)" value="enterprise" disabled />
    </RadioGroup>
  ),
};

// ==========================================================================
// Yes/No Questions (Best Practice Examples)
// ==========================================================================

export const YesNoQuestion: Story = {
  render: () => (
    <RadioGroup
      label="Do you live in the Northern Territory?"
      helperText="Select only one option"
      required
      name="nt-resident"
    >
      <Radio label="Yes, I live in the Northern Territory" value="yes" />
      <Radio label="No, I do not live in the Northern Territory" value="no" />
    </RadioGroup>
  ),
};

export const YesNoWithIDontKnow: Story = {
  render: () => (
    <RadioGroup
      label="Have you previously applied for this service?"
      helperText="This helps us process your application faster"
      name="previous-application"
    >
      <Radio
        label="Yes, I have previously applied for this service"
        value="yes"
      />
      <Radio
        label="No, I have not previously applied for this service"
        value="no"
      />
      <Radio label="I don't know" value="unknown" />
    </RadioGroup>
  ),
};

// ==========================================================================
// Real-World Use Cases
// ==========================================================================

export const ApplicationTypeSelection: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <RadioGroup
        label="License Application Type"
        helperText="Select the type of license you wish to apply for"
        required
        name="license-type"
      >
        <Radio label="Driver's license - New application" value="dl-new" />
        <Radio
          label="Driver's license - Renewal"
          value="dl-renewal"
          defaultChecked
        />
        <Radio label="Driver's license - Replacement" value="dl-replace" />
        <Radio label="Working with children check" value="wwcc" />
        <Radio label="Food handling license" value="food" />
        <Radio label="Liquor license" value="liquor" />
      </RadioGroup>

      <RadioGroup
        label="Processing Priority"
        helperText="Select your preferred processing time"
        name="priority"
      >
        <Radio
          label="Standard (4-6 weeks, no additional fee)"
          value="standard"
          defaultChecked
        />
        <Radio
          label="Express (1-2 weeks, $50 additional fee)"
          value="express"
        />
        <Radio label="Urgent (3-5 days, $100 additional fee)" value="urgent" />
      </RadioGroup>
    </div>
  ),
};

export const SurveyQuestion: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <RadioGroup
        label="How satisfied are you with our online services?"
        helperText="Your feedback helps us improve"
        required
        name="satisfaction"
      >
        <Radio label="Very satisfied" value="very-satisfied" />
        <Radio label="Satisfied" value="satisfied" />
        <Radio label="Neutral" value="neutral" />
        <Radio label="Dissatisfied" value="dissatisfied" />
        <Radio label="Very dissatisfied" value="very-dissatisfied" />
        <Radio label="I don't know" value="unknown" />
      </RadioGroup>

      <RadioGroup
        label="How did you hear about this service?"
        helperText="Please select one option"
        required
        name="referral"
      >
        <Radio label="Internet search engine" value="search" />
        <Radio label="Social media" value="social" />
        <Radio label="Friend or colleague recommendation" value="referral" />
        <Radio label="Government advertisement" value="advertisement" />
        <Radio label="Community event" value="event" />
        <Radio label="Other" value="other" />
      </RadioGroup>
    </div>
  ),
};

export const AccountSettings: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <RadioGroup
        label="Email Notification Frequency"
        helperText="How often would you like to receive email updates?"
        name="email-freq"
      >
        <Radio label="Immediately (as events occur)" value="immediate" />
        <Radio label="Daily digest (once per day)" value="daily" />
        <Radio
          label="Weekly summary (once per week)"
          value="weekly"
          defaultChecked
        />
        <Radio label="Monthly newsletter (once per month)" value="monthly" />
        <Radio label="Never (disable all emails)" value="never" />
      </RadioGroup>

      <RadioGroup
        label="Language Preference"
        helperText="Select your preferred language for communications"
        name="language"
      >
        <Radio label="English" value="en" defaultChecked />
        <Radio label="简体中文 (Simplified Chinese)" value="zh" />
        <Radio label="Tiếng Việt (Vietnamese)" value="vi" />
        <Radio label="العربية (Arabic)" value="ar" />
      </RadioGroup>
    </div>
  ),
};

export const PaymentAndDelivery: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <RadioGroup
        label="Payment Method"
        helperText="Choose your preferred payment method"
        required
        name="payment"
      >
        <Radio label="Credit card (Visa, Mastercard, Amex)" value="card" />
        <Radio label="Direct debit from bank account" value="debit" />
        <Radio label="PayPal" value="paypal" />
        <Radio label="Bank transfer" value="transfer" />
        <Radio label="Pay in person at service center" value="in-person" />
      </RadioGroup>

      <RadioGroup
        label="Document Delivery Method"
        helperText="Select how you would like to receive your documents"
        required
        name="delivery"
      >
        <Radio
          label="Standard post to registered address (7-10 business days)"
          value="standard"
        />
        <Radio
          label="Express post (2-3 business days, $15 additional fee)"
          value="express"
        />
        <Radio label="Email as PDF (immediate, free)" value="email" />
        <Radio
          label="Pick up in person at Darwin office"
          value="pickup-darwin"
        />
        <Radio
          label="Pick up in person at Alice Springs office"
          value="pickup-alice"
        />
      </RadioGroup>
    </div>
  ),
};

export const MultiStepForm: Story = {
  render: () => (
    <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
      <RadioGroup
        label="Step 1: Select Business Type"
        helperText="What type of business are you registering?"
        required
        name="business-type"
      >
        <Radio label="Sole trader" value="sole-trader" />
        <Radio label="Partnership" value="partnership" />
        <Radio label="Company (Pty Ltd)" value="company" />
        <Radio label="Trust" value="trust" />
        <Radio label="Not-for-profit organization" value="nfp" />
      </RadioGroup>

      <RadioGroup
        label="Step 2: Business Location"
        helperText="Where is your primary business location?"
        required
        name="location"
      >
        <Radio label="Darwin" value="darwin" />
        <Radio label="Alice Springs" value="alice-springs" />
        <Radio label="Katherine" value="katherine" />
        <Radio label="Palmerston" value="palmerston" />
        <Radio label="Nhulunbuy" value="nhulunbuy" />
        <Radio label="Other Northern Territory location" value="nt-other" />
        <Radio label="Outside Northern Territory" value="outside-nt" />
      </RadioGroup>

      <RadioGroup
        label="Step 3: Number of Employees"
        helperText="How many employees does your business have?"
        name="employees"
      >
        <Radio label="Just me (sole trader)" value="0" />
        <Radio label="1-5 employees" value="1-5" />
        <Radio label="6-20 employees" value="6-20" />
        <Radio label="21-50 employees" value="21-50" />
        <Radio label="More than 50 employees" value="50+" />
      </RadioGroup>
    </div>
  ),
};

export const FormWithValidation: Story = {
  render: function ValidationExample() {
    const [gender, setGender] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [showErrors, setShowErrors] = React.useState(false);

    const handleSubmit = () => {
      setShowErrors(true);
    };

    return (
      <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
        <RadioGroup
          label="Title"
          helperText="Please select your title"
          required
          validationState={showErrors && !title ? "error" : undefined}
          validationMessage={
            showErrors && !title ? "Please select your title" : undefined
          }
          name="title"
        >
          <Radio
            label="Mr"
            value="mr"
            checked={title === "mr"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Radio
            label="Mrs"
            value="mrs"
            checked={title === "mrs"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Radio
            label="Ms"
            value="ms"
            checked={title === "ms"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Radio
            label="Miss"
            value="miss"
            checked={title === "miss"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Radio
            label="Dr"
            value="dr"
            checked={title === "dr"}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Radio
            label="Prefer not to say"
            value="undisclosed"
            checked={title === "undisclosed"}
            onChange={(e) => setTitle(e.target.value)}
          />
        </RadioGroup>

        <RadioGroup
          label="Gender"
          helperText="Please select your gender"
          required
          validationState={showErrors && !gender ? "error" : undefined}
          validationMessage={
            showErrors && !gender
              ? "Please select your gender to continue"
              : undefined
          }
          name="gender"
        >
          <Radio
            label="Male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Radio
            label="Female"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Radio
            label="Non-binary"
            value="non-binary"
            checked={gender === "non-binary"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Radio
            label="Prefer not to say"
            value="undisclosed"
            checked={gender === "undisclosed"}
            onChange={(e) => setGender(e.target.value)}
          />
        </RadioGroup>

        <div className="mt-3 d-flex gap-2">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Validate Form
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setGender("");
              setTitle("");
              setShowErrors(false);
            }}
          >
            Reset Form
          </button>
        </div>

        {showErrors && (
          <p className="text-muted small mt-2">
            Form validation triggered.{" "}
            {gender && title
              ? "All fields valid!"
              : "Please fill in all required fields."}
          </p>
        )}
      </div>
    );
  },
};

// ==========================================================================
// Interactive & Controlled Examples
// ==========================================================================

export const ControlledRadio: Story = {
  render: function ControlledExample() {
    const [selectedValue, setSelectedValue] = React.useState("email");

    return (
      <div className="d-flex flex-column gap-3">
        <RadioGroup
          label="Notification Preference"
          helperText="Choose how you'd like to be notified"
          name="notification"
        >
          <Radio
            label="Email notifications"
            value="email"
            checked={selectedValue === "email"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <Radio
            label="SMS notifications"
            value="sms"
            checked={selectedValue === "sms"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <Radio
            label="Push notifications"
            value="push"
            checked={selectedValue === "push"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
          <Radio
            label="No notifications"
            value="none"
            checked={selectedValue === "none"}
            onChange={(e) => setSelectedValue(e.target.value)}
          />
        </RadioGroup>
        <p className="text-muted small">
          Selected option: <strong>{selectedValue}</strong>
        </p>
      </div>
    );
  },
};

export const DynamicValidation: Story = {
  render: function DynamicValidationExample() {
    const [selection, setSelection] = React.useState("");
    const [attempted, setAttempted] = React.useState(false);

    const handleChange = (value: string) => {
      setSelection(value);
      setAttempted(true);
    };

    return (
      <div className="d-flex flex-column gap-3">
        <RadioGroup
          label="Terms and Conditions"
          helperText="Please indicate your acceptance"
          required
          validationState={
            attempted && selection === "accept"
              ? "success"
              : attempted && !selection
                ? "error"
                : undefined
          }
          validationMessage={
            attempted && selection === "accept"
              ? "Thank you for accepting the terms"
              : attempted && !selection
                ? "You must accept the terms to continue"
                : undefined
          }
          name="terms"
        >
          <Radio
            label="I accept the terms and conditions"
            value="accept"
            checked={selection === "accept"}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Radio
            label="I do not accept the terms and conditions"
            value="decline"
            checked={selection === "decline"}
            onChange={(e) => handleChange(e.target.value)}
          />
        </RadioGroup>
      </div>
    );
  },
};

export const ConditionalFields: Story = {
  render: function ConditionalExample() {
    const [hasLicense, setHasLicense] = React.useState("");
    const [licenseNumber, setLicenseNumber] = React.useState("");

    return (
      <div className="d-flex flex-column gap-4" style={{ maxWidth: "600px" }}>
        <RadioGroup
          label="Do you currently hold a driver's license?"
          helperText="Select only one option"
          required
          name="has-license"
        >
          <Radio
            label="Yes, I currently hold a driver's license"
            value="yes"
            checked={hasLicense === "yes"}
            onChange={(e) => setHasLicense(e.target.value)}
          />
          <Radio
            label="No, I do not currently hold a driver's license"
            value="no"
            checked={hasLicense === "no"}
            onChange={(e) => {
              setHasLicense(e.target.value);
              setLicenseNumber("");
            }}
          />
        </RadioGroup>

        {hasLicense === "yes" && (
          <div className="ps-4 border-start border-3">
            <label htmlFor="license-number" className="form-label">
              License Number <span className="text-danger">(Required)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="license-number"
              placeholder="Enter your license number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
            <div className="form-text">
              Enter your current driver's license number
            </div>
          </div>
        )}

        {hasLicense === "no" && (
          <div className="alert alert-info">
            You will need to complete a learner's permit application before
            applying for a driver's license.
          </div>
        )}
      </div>
    );
  },
};

// ==========================================================================
// Theme Examples
// ==========================================================================

export const NTGTheme: Story = {
  render: () => (
    <div data-theme="ntg">
      <RadioGroup
        label="Select Your Region"
        helperText="Choose the NT region closest to you"
        name="region-ntg"
      >
        <Radio label="Darwin and Palmerston" value="darwin" defaultChecked />
        <Radio label="Alice Springs" value="alice" />
        <Radio label="Katherine" value="katherine" />
        <Radio label="Nhulunbuy" value="nhulunbuy" />
        <Radio label="Tennant Creek" value="tennant" />
      </RadioGroup>
    </div>
  ),
};

export const CentralTheme: Story = {
  render: () => (
    <div data-theme="central">
      <RadioGroup
        label="Select Your Department"
        helperText="Choose your primary work department"
        name="department-central"
      >
        <Radio label="Human Resources" value="hr" defaultChecked />
        <Radio label="Information Technology" value="it" />
        <Radio label="Finance" value="finance" />
        <Radio label="Operations" value="operations" />
        <Radio label="Communications" value="comms" />
      </RadioGroup>
    </div>
  ),
};

// ==========================================================================
// Playground
// ==========================================================================

export const Playground: Story = {
  args: {
    label: "Radio button label",
    name: "playground-radio",
    value: "option",
  },
};
