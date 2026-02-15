import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "DatePicker allows users to select a single date using an interactive calendar view. Users can type a date in DD/MM/YYYY format or use the calendar to select a date. The component includes validation support, keyboard navigation, and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    required: { control: "boolean" },
    disabled: { control: "boolean" },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Date of birth",
    helperText: "Please enter your date of birth in DD/MM/YYYY format",
    placeholder: "DD/MM/YYYY",
  },
};

export const Required: Story = {
  args: {
    label: "Application date",
    helperText: "Select the date you are submitting your application",
    required: true,
    placeholder: "DD/MM/YYYY",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "License expiry date",
    helperText: "Your current license expiry date",
    defaultValue: new Date(2025, 9, 28), // October 28, 2025
    placeholder: "DD/MM/YYYY",
  },
};

export const Success: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      new Date(2025, 9, 15),
    );
    return (
      <DatePicker
        label="Service appointment date"
        helperText="Your appointment has been confirmed"
        value={selectedDate}
        onChange={setSelectedDate}
        validationState="success"
        validationMessage="Date confirmed and appointment scheduled"
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      new Date(2024, 0, 15),
    );
    return (
      <DatePicker
        label="Service application date"
        helperText="Select a date within the last 12 months"
        value={selectedDate}
        onChange={setSelectedDate}
        validationState="error"
        validationMessage="Services applied more than 12 months ago are not eligible"
        required
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Historical date",
    helperText: "This field is not editable",
    defaultValue: new Date(2024, 11, 25), // December 25, 2024
    disabled: true,
    placeholder: "DD/MM/YYYY",
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Assessment date",
    helperText: "This information cannot be changed",
    defaultValue: new Date(2025, 6, 14), // July 14, 2025
    readOnly: true,
    placeholder: "DD/MM/YYYY",
  },
};

export const WithMinDate: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const minDate = new Date(2024, 0, 1); // January 1, 2024
    return (
      <DatePicker
        label="License renewal date"
        helperText="Select a date from January 1, 2024 onwards"
        value={selectedDate}
        onChange={setSelectedDate}
        min={minDate}
        placeholder="DD/MM/YYYY"
      />
    );
  },
};

export const WithMaxDate: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const maxDate = new Date(); // Today
    return (
      <DatePicker
        label="Service completion date"
        helperText="Select a date on or before today"
        value={selectedDate}
        onChange={setSelectedDate}
        max={maxDate}
        placeholder="DD/MM/YYYY"
      />
    );
  },
};

export const DateRange: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const minDate = new Date(2025, 0, 1); // January 1, 2025
    const maxDate = new Date(2025, 11, 31); // December 31, 2025
    return (
      <DatePicker
        label="Service available from"
        helperText="Select a date between January 1 and December 31, 2025"
        value={selectedDate}
        onChange={setSelectedDate}
        min={minDate}
        max={maxDate}
        placeholder="DD/MM/YYYY"
      />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
      <div style={{ maxWidth: "600px" }}>
        <DatePicker
          label="Application submission date"
          helperText="When do you want to submit your application?"
          value={selectedDate}
          onChange={setSelectedDate}
          placeholder="DD/MM/YYYY"
        />
        {selectedDate && (
          <div
            style={{
              marginTop: "16px",
              padding: "16px",
              backgroundColor: "var(--clr-bg-shade-alt)",
              borderRadius: "4px",
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Selected date:</strong>{" "}
              {selectedDate.toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
              Day of week:{" "}
              {selectedDate.toLocaleDateString("en-AU", { weekday: "long" })}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const InForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      applicationDate: null as Date | null,
      serviceDate: null as Date | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert("Form submitted with dates:\n" + JSON.stringify(formData, null, 2));
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <DatePicker
          label="Application date"
          helperText="When are you submitting your application?"
          required
          value={formData.applicationDate}
          onChange={(date) =>
            setFormData((prev) => ({ ...prev, applicationDate: date }))
          }
          placeholder="DD/MM/YYYY"
        />

        <DatePicker
          label="Preferred service date"
          helperText="When would you like to receive this service?"
          required
          value={formData.serviceDate}
          onChange={(date) =>
            setFormData((prev) => ({ ...prev, serviceDate: date }))
          }
          placeholder="DD/MM/YYYY"
        />

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ flexGrow: 1 }}
          >
            Submit Application
          </button>
          <button
            type="reset"
            className="btn btn-secondary"
            style={{ flexGrow: 1 }}
            onClick={() =>
              setFormData({ applicationDate: null, serviceDate: null })
            }
          >
            Clear Form
          </button>
        </div>
      </form>
    );
  },
};

export const MultipleFields: Story = {
  render: () => {
    const [dates, setDates] = useState({
      permit: null as Date | null,
      inspection: null as Date | null,
      finalApproval: null as Date | null,
    });

    return (
      <div
        style={{
          maxWidth: "700px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <h3 style={{ margin: "0 0 12px 0" }}>
          Development Application Timeline
        </h3>

        <DatePicker
          label="Permit application date"
          helperText="When you submitted your development permit"
          value={dates.permit}
          onChange={(date) => setDates((prev) => ({ ...prev, permit: date }))}
          placeholder="DD/MM/YYYY"
        />

        <DatePicker
          label="Site inspection date"
          helperText="Scheduled inspection date for your property"
          value={dates.inspection}
          onChange={(date) =>
            setDates((prev) => ({ ...prev, inspection: date }))
          }
          placeholder="DD/MM/YYYY"
        />

        <DatePicker
          label="Final approval date"
          helperText="When your application was approved"
          value={dates.finalApproval}
          onChange={(date) =>
            setDates((prev) => ({ ...prev, finalApproval: date }))
          }
          placeholder="DD/MM/YYYY"
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    label: "Select a date",
    helperText: "Choose any date from the calendar or type DD/MM/YYYY",
    placeholder: "DD/MM/YYYY",
  },
};
