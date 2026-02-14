import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Textarea enables users to enter multiple lines of text into a larger, resizable input field. Use it for comments, messages, feedback, or any content longer than a single line. For short text like emails or names, use the Input component instead.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    helperText: { control: "text" },
    placeholder: { control: "text" },
    required: { control: "boolean" },
    readOnly: { control: "boolean" },
    disabled: { control: "boolean" },
    rows: { control: "number" },
    maxLength: { control: "number" },
    showCharacterCount: { control: "boolean" },
    validationState: {
      control: "select",
      options: ["none", "success", "error"],
      mapping: { none: undefined, success: "success", error: "error" },
    },
    validationMessage: { control: "text" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Comments",
    helperText: "Share your thoughts with us",
    placeholder: "Enter your comments here",
  },
};

export const Required: Story = {
  args: {
    label: "Application Details",
    helperText: "Explain why you are applying for this service",
    required: true,
    placeholder: "Please provide detailed information",
  },
};

export const Filled: Story = {
  args: {
    label: "Feedback",
    helperText: "Thank you for your input",
    value:
      "Thank you for creating this service. It has made a significant difference in how we access government resources.",
    onChange: () => undefined,
  },
};

export const Active: Story = {
  render: () => (
    <Textarea
      label="Message"
      helperText="Type your message below"
      placeholder="Start typing..."
      data-active="true"
    />
  ),
};

export const Success: Story = {
  args: {
    label: "Survey Response",
    helperText: "Your feedback helps us improve",
    value:
      "The new website design is much easier to navigate. I can find the services I need quickly.",
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Thank you for your feedback",
  },
};

export const Error: Story = {
  args: {
    label: "Description",
    helperText: "Minimum 20 characters required",
    value: "Too short",
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Please provide at least 20 characters",
  },
};

export const Disabled: Story = {
  args: {
    label: "System Notice",
    helperText: "This field cannot be edited",
    value:
      "This textarea is disabled and cannot be modified. Disabled textareas are useful for displaying information that should not be changed.",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Terms and Conditions",
    helperText: "Please review carefully",
    value:
      "By using this service, you agree to our terms and conditions. This is a read-only field that displays important information but cannot be modified by the user.",
    readOnly: true,
    rows: 4,
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: "Quick Feedback",
    helperText: "Brief responses are appreciated",
    placeholder: "What did you think of this service?",
    showCharacterCount: true,
  },
};

export const WithMaxLength: Story = {
  args: {
    label: "Tweet-style Message",
    helperText: "Keep it concise",
    placeholder: "Maximum 280 characters",
    maxLength: 280,
  },
};

export const LongContent: Story = {
  args: {
    label: "Detailed Description",
    helperText:
      "Provide as much detail as necessary for your grant application",
    value:
      "This textarea demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Users can resize the textarea vertically by dragging the handle in the bottom right corner, allowing them to adjust the viewing area to their preferred size. The component supports all standard textarea functionality including scrolling for content that exceeds the visible area. This makes it ideal for applications requiring extensive user input such as grant applications, detailed feedback forms, or comprehensive survey responses.",
    onChange: () => undefined,
    rows: 8,
  },
};

export const CustomRows: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Textarea
        label="Small (3 rows)"
        rows={3}
        placeholder="Compact textarea"
      />
      <Textarea
        label="Default (5 rows)"
        rows={5}
        placeholder="Standard textarea"
      />
      <Textarea
        label="Large (10 rows)"
        rows={10}
        placeholder="Extended textarea"
      />
    </div>
  ),
};

export const CharacterCountComparison: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Textarea
        label="No Counter"
        helperText="Character count is not displayed"
        placeholder="Type anything..."
      />
      <Textarea
        label="With Counter Only"
        helperText="Shows current character count"
        showCharacterCount
        placeholder="Type to see the count"
      />
      <Textarea
        label="With Maximum Length"
        helperText="Enforces a 100 character limit"
        maxLength={100}
        placeholder="Limited to 100 characters"
      />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Textarea
        label="Valid Input"
        value="This input meets all requirements and has been validated successfully."
        validationState="success"
        validationMessage="Submission accepted"
        onChange={() => undefined}
      />
      <Textarea
        label="Invalid Input"
        value="Error"
        validationState="error"
        validationMessage="Response must be at least 20 characters"
        onChange={() => undefined}
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div
      className="d-flex flex-column gap-3"
      style={{ maxWidth: "600px", margin: "0 auto" }}
    >
      <h3 style={{ marginBottom: "16px" }}>Service Feedback Form</h3>

      <Textarea
        label="What worked well?"
        helperText="Tell us about your positive experiences"
        placeholder="Describe what you found helpful or useful"
        rows={4}
      />

      <Textarea
        label="What could be improved?"
        helperText="Your suggestions help us enhance our services"
        placeholder="Share your ideas for improvement"
        rows={4}
      />

      <Textarea
        label="Additional Comments"
        helperText="Optional - any other feedback you'd like to share"
        placeholder="Any other thoughts or suggestions"
        maxLength={500}
        rows={6}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of multiple textareas used together in a feedback form. Notice how each has a clear label, helpful guidance, and appropriate sizing for the expected content length.",
      },
    },
  },
};

export const AccessibilityDemo: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div>
        <h4 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>
          ✅ Good - Has visible label
        </h4>
        <Textarea
          label="Message"
          helperText="This textarea has a proper label"
          placeholder="Type your message"
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>
          ✅ Good - Helper text provides guidance
        </h4>
        <Textarea
          label="Grant Application"
          helperText="Explain your project goals, timeline, and expected outcomes. Minimum 50 words."
          placeholder="Describe your project in detail"
          rows={6}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>
          ✅ Good - Error message is clear and actionable
        </h4>
        <Textarea
          label="Description"
          helperText="Provide a brief description"
          value="Too short"
          validationState="error"
          validationMessage="Description must be at least 20 characters. Please add more detail."
          onChange={() => undefined}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "8px", fontSize: "14px", fontWeight: 600 }}>
          ✅ Good - Character counter helps user stay within limit
        </h4>
        <Textarea
          label="Summary"
          helperText="Brief summary for publication"
          maxLength={150}
          placeholder="Maximum 150 characters"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "Examples demonstrating accessible textarea usage. All textareas have visible labels, helpful guidance text, clear error messages, and proper ARIA attributes.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    rows: 5,
  },
};
