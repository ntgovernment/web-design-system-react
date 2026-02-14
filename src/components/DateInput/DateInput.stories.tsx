import type { Meta, StoryObj } from "@storybook/react-vite";
import { DateInput } from "./DateInput";
import React, { useState } from "react";
import type { DateInputValue } from "./DateInput";

const meta = {
  title: "Components/DateInput",
  component: DateInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Date Input helps users enter a date manually into a form. Use this for dates they already know well, such as date of birth, date of marriage, or passport expiry. The component has three separate fields for Day, Month, and Year in DD MM YYYY format for Australian audiences.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    required: { control: "boolean" },
    readOnly: { control: "boolean" },
    disabled: { control: "boolean" },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// ==========================================================================
// Basic Examples
// ==========================================================================

export const Default: Story = {
  args: {
    label: "Date of Birth",
    helperText: "Enter your date of birth in DD MM YYYY format",
  },
};

export const Required: Story = {
  args: {
    label: "Passport Expiry Date",
    helperText: "Enter the expiry date shown on your passport",
    required: true,
  },
};

export const Filled: Story = {
  args: {
    label: "Date of Marriage",
    helperText: "Enter the date you were married",
    value: { day: "14", month: "02", year: "2020" },
    onChange: () => undefined,
  },
};

// ==========================================================================
// Validation States
// ==========================================================================

export const Success: Story = {
  args: {
    label: "Application Date",
    helperText: "Enter your application submission date",
    value: { day: "15", month: "12", year: "2024" },
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Date verified successfully",
  },
};

export const Error: Story = {
  args: {
    label: "License Renewal Date",
    helperText: "Enter your license renewal date",
    value: { day: "32", month: "13", year: "2023" },
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Please enter a valid date (day: 01-31, month: 01-12)",
  },
};

export const ErrorRequired: Story = {
  name: "Error - Required Fields",
  args: {
    label: "Commencement Date",
    helperText: "Enter the date you commenced employment",
    required: true,
    value: { day: "", month: "", year: "" },
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "All date fields are required",
  },
};

// ==========================================================================
// States
// ==========================================================================

export const Disabled: Story = {
  args: {
    label: "System Generated Date",
    helperText: "This date is automatically generated",
    value: { day: "01", month: "01", year: "2025" },
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Registration Date",
    helperText: "Your initial registration date",
    value: { day: "28", month: "06", year: "2023" },
    readOnly: true,
  },
};

// ==========================================================================
// Interactive Examples
// ==========================================================================

export const ControlledDateInput: Story = {
  name: "Controlled (Interactive)",
  render: function ControlledExample() {
    const [dateValue, setDateValue] = useState<DateInputValue>({
      day: "",
      month: "",
      year: "",
    });

    return (
      <div className="d-flex flex-column gap-3">
        <DateInput
          label="Select Date"
          helperText="Enter a date to see it reflected below"
          value={dateValue}
          onChange={(value) => setDateValue(value)}
        />
        <div className="p-3 bg-light rounded">
          <p className="mb-1 fw-bold">Current Value:</p>
          <code>
            Day: {dateValue.day || "(empty)"}, Month:{" "}
            {dateValue.month || "(empty)"}, Year: {dateValue.year || "(empty)"}
          </code>
        </div>
      </div>
    );
  },
};

export const WithValidation: Story = {
  name: "With Live Validation",
  render: function ValidationExample() {
    const [dateValue, setDateValue] = useState<DateInputValue>({
      day: "",
      month: "",
      year: "",
    });
    const [validationError, setValidationError] = useState("");

    const validateDate = (value: DateInputValue) => {
      const { day, month, year } = value;

      // Check if all fields are filled
      if (!day || !month || !year) {
        if (day || month || year) {
          setValidationError("All date fields are required");
        } else {
          setValidationError("");
        }
        return;
      }

      const dayNum = parseInt(day, 10);
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);

      // Validate day
      if (dayNum < 1 || dayNum > 31) {
        setValidationError("Day must be between 01 and 31");
        return;
      }

      // Validate month
      if (monthNum < 1 || monthNum > 12) {
        setValidationError("Month must be between 01 and 12");
        return;
      }

      // Validate year
      const currentYear = new Date().getFullYear();
      if (yearNum < 1900 || yearNum > currentYear + 100) {
        setValidationError("Please enter a valid year");
        return;
      }

      // Check for valid date combination
      const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
      if (dayNum > daysInMonth) {
        setValidationError(
          `${monthNum}/${yearNum} only has ${daysInMonth} days`,
        );
        return;
      }

      setValidationError("");
    };

    const handleChange = (value: DateInputValue) => {
      setDateValue(value);
      validateDate(value);
    };

    return (
      <DateInput
        label="Date of Birth"
        helperText="Enter your date of birth to validate"
        required
        value={dateValue}
        onChange={handleChange}
        validationState={validationError ? "error" : undefined}
        validationMessage={validationError}
      />
    );
  },
};

// ==========================================================================
// Real-World Use Cases
// ==========================================================================

export const DateOfBirth: Story = {
  name: "Use Case: Date of Birth",
  render: () => (
    <DateInput
      label="Date of Birth"
      helperText="Enter your date of birth as it appears on official documents"
      required
    />
  ),
};

export const PassportExpiry: Story = {
  name: "Use Case: Passport Expiry",
  render: () => (
    <DateInput
      label="Passport Expiry Date"
      helperText="Enter the expiry date shown on your passport (format: DD MM YYYY)"
      required
    />
  ),
};

export const LicenseRenewal: Story = {
  name: "Use Case: License Renewal",
  render: () => (
    <DateInput
      label="License Renewal Date"
      helperText="Enter the date your license needs to be renewed"
    />
  ),
};

export const EmploymentCommencementDate: Story = {
  name: "Use Case: Employment Start",
  render: () => (
    <DateInput
      label="Commencement Date"
      helperText="Enter the date you commenced employment with NT Government"
      required
    />
  ),
};

// ==========================================================================
// Form Example
// ==========================================================================

export const InFormContext: Story = {
  name: "In a Form",
  render: function FormExample() {
    const [formData, setFormData] = useState({
      dateOfBirth: { day: "", month: "", year: "" },
      licenseExpiry: { day: "", month: "", year: "" },
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      // Validate date of birth
      if (
        !formData.dateOfBirth.day ||
        !formData.dateOfBirth.month ||
        !formData.dateOfBirth.year
      ) {
        newErrors.dateOfBirth = "Date of birth is required";
      }

      // Validate license expiry
      if (
        !formData.licenseExpiry.day ||
        !formData.licenseExpiry.month ||
        !formData.licenseExpiry.year
      ) {
        newErrors.licenseExpiry = "License expiry date is required";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        setSubmitted(true);
        console.log("Form submitted:", formData);
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <div className="d-flex flex-column gap-4">
          <DateInput
            label="Date of Birth"
            helperText="Enter your date of birth as shown on your birth certificate"
            required
            value={formData.dateOfBirth}
            onChange={(value) =>
              setFormData({ ...formData, dateOfBirth: value })
            }
            validationState={errors.dateOfBirth ? "error" : undefined}
            validationMessage={errors.dateOfBirth}
          />

          <DateInput
            label="Driver License Expiry Date"
            helperText="Enter the expiry date shown on your driver license"
            required
            value={formData.licenseExpiry}
            onChange={(value) =>
              setFormData({ ...formData, licenseExpiry: value })
            }
            validationState={errors.licenseExpiry ? "error" : undefined}
            validationMessage={errors.licenseExpiry}
          />

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
              Submit Application
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setFormData({
                  dateOfBirth: { day: "", month: "", year: "" },
                  licenseExpiry: { day: "", month: "", year: "" },
                });
                setErrors({});
                setSubmitted(false);
              }}
            >
              Reset Form
            </button>
          </div>

          {submitted && Object.keys(errors).length === 0 && (
            <div className="alert alert-success" role="status">
              Form submitted successfully! Date of Birth:{" "}
              {formData.dateOfBirth.day}/{formData.dateOfBirth.month}/
              {formData.dateOfBirth.year}, License Expiry:{" "}
              {formData.licenseExpiry.day}/{formData.licenseExpiry.month}/
              {formData.licenseExpiry.year}
            </div>
          )}
        </div>
      </form>
    );
  },
};

// ==========================================================================
// Theme Examples
// ==========================================================================

export const NTGTheme: Story = {
  name: "NTG Theme",
  render: () => (
    <div data-theme="ntg">
      <div className="d-flex flex-column gap-4">
        <DateInput
          label="Event Date"
          helperText="Enter the date of the community event"
          required
        />
        <DateInput
          label="Document Lodgement Date"
          helperText="Date when documents were submitted"
          value={{ day: "15", month: "03", year: "2024" }}
          onChange={() => undefined}
          validationState="success"
          validationMessage="Date successfully verified"
        />
      </div>
    </div>
  ),
};

export const CentralTheme: Story = {
  name: "Central Theme",
  render: () => (
    <div data-theme="central">
      <div className="d-flex flex-column gap-4">
        <DateInput
          label="Meeting Date"
          helperText="Enter the scheduled meeting date"
          required
        />
        <DateInput
          label="Report Submission Date"
          helperText="Date when the report was submitted"
          value={{ day: "20", month: "11", year: "2024" }}
          onChange={() => undefined}
          validationState="success"
          validationMessage="Date confirmed"
        />
      </div>
    </div>
  ),
};

// ==========================================================================
// Edge Cases & Examples
// ==========================================================================

export const PartiallyFilled: Story = {
  name: "Partially Filled",
  render: () => (
    <div className="d-flex flex-column gap-4">
      <DateInput
        label="Incomplete Date Example"
        helperText="Only day filled"
        value={{ day: "25", month: "", year: "" }}
        onChange={() => undefined}
      />
      <DateInput
        label="Incomplete Date Example"
        helperText="Day and month filled"
        value={{ day: "25", month: "12", year: "" }}
        onChange={() => undefined}
      />
    </div>
  ),
};

export const LeapYearExample: Story = {
  name: "Leap Year Date",
  render: () => (
    <DateInput
      label="Leap Year Date"
      helperText="February 29th on a leap year"
      value={{ day: "29", month: "02", year: "2024" }}
      onChange={() => undefined}
      validationState="success"
      validationMessage="Valid leap year date"
    />
  ),
};

export const FutureDate: Story = {
  name: "Future Date Example",
  render: () => (
    <DateInput
      label="Document Expiry Date"
      helperText="Enter the future expiry date of your document"
      value={{ day: "01", month: "01", year: "2030" }}
      onChange={() => undefined}
    />
  ),
};

// ==========================================================================
// Accessibility Testing
// ==========================================================================

export const AccessibilityTest: Story = {
  name: "Accessibility Features",
  render: () => (
    <div className="d-flex flex-column gap-4">
      <div className="alert alert-info">
        <h4 className="alert-heading">Accessibility Features</h4>
        <ul className="mb-0">
          <li>Each field has its own label (Day, Month, Year)</li>
          <li>Helper text is linked via aria-describedby</li>
          <li>Validation messages use aria-live regions</li>
          <li>Fields are keyboard navigable (Tab/Shift+Tab)</li>
          <li>Numeric keyboard on mobile (inputMode="numeric")</li>
          <li>No auto-tabbing between fields (user controls navigation)</li>
          <li>Required attribute properly set</li>
        </ul>
      </div>
      <DateInput
        label="Accessible Date Input"
        helperText="This date input demonstrates all accessibility features"
        required
        validationState="error"
        validationMessage="All fields are required to continue"
      />
    </div>
  ),
};

// ==========================================================================
// Playground
// ==========================================================================

export const Playground: Story = {
  args: {
    label: "Date Input",
    helperText: "Enter a date in DD MM YYYY format",
    required: false,
    disabled: false,
    readOnly: false,
  },
};
