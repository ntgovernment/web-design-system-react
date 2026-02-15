import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Dropdown allows users to select a single option from a list. Use labels and helper text to guide users, and validation messages to communicate errors or success states. The component uses the native HTML select element for optimal accessibility and keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      mapping: { default: undefined, sm: "sm", lg: "lg" },
    },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Reusable option sets following content standards
const regionOptions = [
  { value: "darwin", label: "Darwin" },
  { value: "alice-springs", label: "Alice Springs" },
  { value: "katherine", label: "Katherine" },
  { value: "tennant-creek", label: "Tennant Creek" },
  { value: "nhulunbuy", label: "Nhulunbuy" },
];

const serviceOptions = [
  { value: "license-renewal", label: "Driver License Renewal" },
  { value: "vehicle-registration", label: "Vehicle Registration" },
  { value: "birth-certificate", label: "Birth Certificate" },
  { value: "business-license", label: "Business License Application" },
  { value: "land-title", label: "Land Title Search" },
];

const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
  { value: "mail", label: "Postal Mail" },
];

const departmentOptions = [
  { value: "dcmc", label: "Chief Minister and Cabinet" },
  { value: "treasury", label: "Treasury and Finance" },
  { value: "health", label: "Health" },
  { value: "education", label: "Education" },
  { value: "infrastructure", label: "Infrastructure, Planning and Logistics" },
  { value: "environment", label: "Environment, Parks and Water Security" },
  { value: "tourism", label: "Tourism and Culture" },
  { value: "business", label: "Industry, Tourism and Trade" },
  { value: "attorney", label: "Attorney-General and Justice" },
  { value: "corporate", label: "Corporate and Digital Development" },
];

export const Default: Story = {
  args: {
    label: "Select your region",
    helperText: "Choose the region closest to you",
    placeholder: "Select a region",
    options: regionOptions,
  },
};

export const Required: Story = {
  args: {
    label: "Service type",
    helperText: "Select the government service you need",
    required: true,
    placeholder: "Select a service",
    options: serviceOptions,
  },
};

export const Filled: Story = {
  args: {
    label: "Preferred contact method",
    helperText: "How should we contact you?",
    value: "email",
    onChange: () => undefined,
    options: contactMethodOptions,
  },
};

export const Active: Story = {
  render: () => (
    <Dropdown
      label="Select your region"
      helperText="Choose the region closest to you"
      placeholder="Select a region"
      options={regionOptions}
      data-active="true"
    />
  ),
};

export const Success: Story = {
  args: {
    label: "Service location",
    helperText: "Select where you would like to receive service",
    value: "darwin",
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Location confirmed and service available",
    options: regionOptions,
  },
};

export const Error: Story = {
  args: {
    label: "Department",
    helperText: "Select the relevant government department",
    value: "",
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Please select a department to continue",
    options: departmentOptions,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Service type",
    helperText: "Service selection is currently unavailable",
    value: "license-renewal",
    disabled: true,
    options: serviceOptions,
  },
};

export const DisabledOptions: Story = {
  name: "With Disabled Options",
  args: {
    label: "Select service",
    helperText: "Some services are currently unavailable",
    options: [
      { value: "online-services", label: "Online Services" },
      { value: "in-person", label: "In-Person Services", disabled: true },
      { value: "phone-support", label: "Phone Support" },
      { value: "email-support", label: "Email Support", disabled: true },
    ],
  },
};

export const ManyOptions: Story = {
  name: "With Many Options (Scrolling)",
  args: {
    label: "Aboriginal community",
    helperText: "Select your community",
    placeholder: "Select a community",
    options: [
      { value: "alyangula", label: "Alyangula" },
      { value: "angurugu", label: "Angurugu" },
      { value: "areyonga", label: "Areyonga" },
      { value: "barunga", label: "Barunga" },
      { value: "belyuen", label: "Belyuen" },
      { value: "beswick", label: "Beswick" },
      { value: "borroloola", label: "Borroloola" },
      { value: "bulman", label: "Bulman" },
      { value: "daguragu", label: "Daguragu" },
      { value: "elliott", label: "Elliott" },
      { value: "galiwinku", label: "Galiwinku" },
      { value: "gapuwiyak", label: "Gapuwiyak" },
      { value: "gunbalanya", label: "Gunbalanya" },
      { value: "gunyangara", label: "Gunyangara" },
      { value: "hermannsburg", label: "Hermannsburg" },
      { value: "jilkminggan", label: "Jilkminggan" },
      { value: "kalkarindji", label: "Kalkarindji" },
      { value: "lajamanu", label: "Lajamanu" },
      { value: "maningrida", label: "Maningrida" },
      { value: "milingimbi", label: "Milingimbi" },
      { value: "ngukurr", label: "Ngukurr" },
      { value: "numbulwar", label: "Numbulwar" },
      { value: "papunya", label: "Papunya" },
      { value: "ramingining", label: "Ramingining" },
      { value: "umbakumba", label: "Umbakumba" },
      { value: "wadeye", label: "Wadeye" },
      { value: "yirrkala", label: "Yirrkala" },
      { value: "yuendumu", label: "Yuendumu" },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="d-flex flex-column gap-2" style={{ maxWidth: "480px" }}>
      <Dropdown
        label="Small size"
        size="sm"
        placeholder="Select a region"
        options={regionOptions}
      />
      <Dropdown
        label="Default size"
        placeholder="Select a region"
        options={regionOptions}
      />
      <Dropdown
        label="Large size"
        size="lg"
        placeholder="Select a region"
        options={regionOptions}
      />
    </div>
  ),
};

export const WithOptgroups: Story = {
  name: "With Option Groups (JSX children)",
  render: () => (
    <Dropdown label="Service category" helperText="Browse services by category">
      <option value="">Select a service</option>
      <optgroup label="Online Services">
        <option value="license-renewal">Driver License Renewal</option>
        <option value="vehicle-rego">Vehicle Registration</option>
        <option value="fine-payment">Pay Fines Online</option>
      </optgroup>
      <optgroup label="Certificates & Documents">
        <option value="birth-cert">Birth Certificate</option>
        <option value="death-cert">Death Certificate</option>
        <option value="marriage-cert">Marriage Certificate</option>
      </optgroup>
      <optgroup label="Business Services">
        <option value="business-license">Business License</option>
        <option value="business-name">Register Business Name</option>
        <option value="liquor-license">Liquor License</option>
      </optgroup>
      <optgroup label="Land & Property">
        <option value="title-search">Land Title Search</option>
        <option value="survey-plan">Survey Plan</option>
        <option value="property-info">Property Information</option>
      </optgroup>
    </Dropdown>
  ),
};

export const FormExample: Story = {
  name: "In a Form Context",
  render: () => (
    <form
      style={{ maxWidth: "600px" }}
      onSubmit={(e) => {
        e.preventDefault();
        alert("Form submitted!");
      }}
    >
      <div className="d-flex flex-column gap-3">
        <Dropdown
          label="Service location"
          required
          helperText="Select your nearest service centre"
          options={regionOptions}
        />

        <Dropdown
          label="Service type"
          required
          helperText="What service do you need?"
          options={serviceOptions}
        />

        <Dropdown
          label="Preferred contact method"
          helperText="How should we contact you about your application?"
          options={contactMethodOptions}
          defaultValue="email"
        />

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
          <button type="reset" className="btn btn-secondary">
            Clear Form
          </button>
        </div>
      </div>
    </form>
  ),
};

export const Playground: Story = {
  args: {
    label: "Select your region",
    helperText: "Choose the region closest to you",
    placeholder: "Select a region",
    options: regionOptions,
  },
};
