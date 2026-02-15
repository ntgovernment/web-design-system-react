import type { Meta, StoryObj } from "@storybook/react-vite";
import { FloatingButton } from "./FloatingButton";
import { Button } from "../Button";

const meta = {
  title: "Components/FloatingButton",
  component: FloatingButton,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A button banner anchored to the bottom of the screen that keeps important calls to action front and centre for the user. The floating button automatically hides when the user scrolls to the target button within the content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Button style variant",
    },
    label: {
      control: "text",
      description: "Button text label",
    },
    iconLeft: {
      control: "text",
      description: "FontAwesome icon class for left side",
    },
    iconRight: {
      control: "text",
      description: "FontAwesome icon class for right side",
    },
    autoHide: {
      control: "boolean",
      description: "Enable auto-hide behavior based on scroll",
    },
    targetButtonId: {
      control: "text",
      description: "ID of target button in content for auto-hide",
    },
  },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default floating button with primary variant
 */
export const Primary: Story = {
  args: {
    label: "Submit Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
  },
  render: (args) => (
    <div style={{ height: "400px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", paddingBottom: "120px" }}>
        <h2>Application Page</h2>
        <p>Scroll down to see the floating button behavior.</p>
        <p>
          The floating button component is anchored at the bottom of the screen,
          providing a persistent call to action as users browse the content.
        </p>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
};

/**
 * Secondary variant for less prominent actions
 */
export const Secondary: Story = {
  args: {
    label: "Learn More",
    variant: "secondary",
    iconRight: "fa-light fa-arrow-right",
  },
  render: (args) => (
    <div style={{ height: "400px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", paddingBottom: "120px" }}>
        <h2>Information Page</h2>
        <p>
          While primary buttons are recommended for floating buttons, you can
          use secondary variant for less prominent actions.
        </p>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
};

/**
 * Floating button with an icon on the left (e.g., download)
 */
export const WithIconLeft: Story = {
  args: {
    label: "Download Form",
    variant: "primary",
    iconLeft: "fa-light fa-download",
  },
  render: (args) => (
    <div style={{ height: "400px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", paddingBottom: "120px" }}>
        <h2>Download Application Form</h2>
        <p>
          Download and complete the application form. You can submit it online
          or mail it to the address provided.
        </p>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
};

/**
 * Floating button with an icon on the right (recommended for forward actions)
 */
export const WithIconRight: Story = {
  args: {
    label: "Continue to Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
  },
  render: (args) => (
    <div style={{ height: "400px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", paddingBottom: "120px" }}>
        <h2>Ready to Apply?</h2>
        <p>
          Review the information above and click Continue to start your
          application when you're ready.
        </p>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
};

/**
 * Demonstrates the auto-hide behavior when scrolling to target button
 */
export const WithAutoHideBehavior: Story = {
  args: {
    label: "Submit Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    targetButtonId: "target-apply-button",
    autoHide: true,
  },
  render: (args) => (
    <div style={{ height: "600px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", minHeight: "1200px" }}>
        <h2>Business License Application</h2>

        <section style={{ marginBottom: "40px" }}>
          <h3>Requirements</h3>
          <ul>
            <li>Valid ABN or ACN</li>
            <li>Proof of identity documents</li>
            <li>Business address details</li>
            <li>Professional indemnity insurance</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3>Application Process</h3>
          <p>
            Complete the online application form with all required information.
            Processing typically takes 5-10 business days. You will receive
            email confirmation once your application has been reviewed.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3>Fee Information</h3>
          <p>
            The application fee is $250 for new applications and $150 for
            renewals. Payment can be made via credit card or direct debit during
            the online application process.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h3>Ready to Apply?</h3>
          <p style={{ marginBottom: "16px" }}>
            Scroll down to see the floating button disappear when this button
            comes into view. Scroll back up to see it reappear.
          </p>
          <Button
            id="target-apply-button"
            variant="primary"
            label="Submit Application"
            iconRight="fa-light fa-arrow-right"
            onClick={() => alert("Application started!")}
          />
        </section>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "#f5f5f7",
            borderRadius: "8px",
            borderLeft: "4px solid #1f1f5f",
          }}
        >
          <strong>💡 Try it:</strong> Scroll down to the Submit Application
          button above. The floating button will automatically hide. Scroll back
          up and it will reappear.
        </div>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The floating button automatically hides when the user scrolls to the target button in the content. This prevents duplicate CTAs from being visible at the same time and provides a seamless user experience.",
      },
    },
  },
};

/**
 * Always visible floating button (auto-hide disabled)
 */
export const AlwaysVisible: Story = {
  args: {
    label: "Need Help? Contact Us",
    variant: "secondary",
    iconRight: "fa-light fa-phone",
    autoHide: false,
  },
  render: (args) => (
    <div style={{ height: "600px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", minHeight: "800px" }}>
        <h2>Help & Support</h2>
        <p>
          For pages where you want the CTA always visible, disable auto-hide
          behavior. This is useful for support pages or help centers.
        </p>

        <section style={{ marginTop: "40px" }}>
          <h3>Common Questions</h3>
          <p>Browse our frequently asked questions below.</p>
        </section>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "#f5f5f7",
            borderRadius: "8px",
            borderLeft: "4px solid #1f1f5f",
          }}
        >
          <strong>Note:</strong> This floating button will remain visible
          regardless of scroll position because autoHide is set to false.
        </div>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Set `autoHide={false}` to keep the floating button always visible regardless of scroll position. Useful for help pages or persistent support CTAs.",
      },
    },
  },
};

/**
 * Real-world example: Grant Application Page
 */
export const GrantApplicationExample: Story = {
  args: {
    label: "Start Grant Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    targetButtonId: "grant-apply-button",
    autoHide: true,
  },
  render: (args) => (
    <div style={{ height: "600px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", minHeight: "1400px" }}>
        <h1>Small Business Grant Program</h1>

        <section style={{ marginBottom: "40px" }}>
          <h2>About the Grant</h2>
          <p>
            The Small Business Grant Program provides financial assistance to
            eligible businesses in the Northern Territory. Grants of up to
            $10,000 are available for business development, equipment purchases,
            and skills training.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Eligibility Criteria</h2>
          <ul>
            <li>Business must be registered in the Northern Territory</li>
            <li>Annual turnover less than $2 million</li>
            <li>Employing between 1-20 full-time equivalent staff</li>
            <li>Operating for at least 12 months</li>
            <li>Current on all tax obligations</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>What Can the Grant Be Used For?</h2>
          <ul>
            <li>Purchase of equipment and technology</li>
            <li>Staff training and professional development</li>
            <li>Marketing and promotional activities</li>
            <li>Consultancy and advisory services</li>
            <li>Product or service development</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Application Process</h2>
          <ol>
            <li>Review eligibility criteria and required documentation</li>
            <li>Complete the online application form</li>
            <li>
              Upload supporting documents (ABN, financial statements, quotes)
            </li>
            <li>Submit application for review</li>
            <li>Receive decision within 4-6 weeks</li>
          </ol>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Important Dates</h2>
          <p>
            <strong>Applications Open:</strong> 1 March 2026
          </p>
          <p>
            <strong>Applications Close:</strong> 30 June 2026
          </p>
          <p>
            <strong>Funding Rounds:</strong> Quarterly assessment
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Ready to Apply?</h2>
          <p style={{ marginBottom: "16px" }}>
            Make sure you have all required documents ready before starting your
            application. You can save your progress and return later.
          </p>
          <Button
            id="grant-apply-button"
            variant="primary"
            label="Start Grant Application"
            iconRight="fa-light fa-arrow-right"
            onClick={() => alert("Grant application started!")}
          />
        </section>

        <section>
          <h2>Need Assistance?</h2>
          <p>
            Contact our grants team if you have questions about eligibility or
            the application process.
          </p>
        </section>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "A realistic example showing how the FloatingButton component works in a grant application page. The floating button provides a persistent CTA for users browsing through detailed information, automatically hiding when they reach the application button in the content.",
      },
    },
  },
};

/**
 * License Permit Application Example
 */
export const LicenseApplicationExample: Story = {
  args: {
    label: "Apply for License",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    targetButtonId: "license-apply-button",
  },
  render: (args) => (
    <div style={{ height: "600px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", minHeight: "1200px" }}>
        <h1>Liquor License Application</h1>

        <section style={{ marginBottom: "40px" }}>
          <h2>License Types</h2>
          <p>
            Choose the appropriate license type for your business operations.
            Different license types have different requirements and fees.
          </p>
          <ul>
            <li>
              <strong>On-License:</strong> For consumption on premises
            </li>
            <li>
              <strong>Off-License:</strong> For takeaway sales only
            </li>
            <li>
              <strong>Special License:</strong> For one-off events
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Required Documentation</h2>
          <ul>
            <li>Completed application form</li>
            <li>Floor plan of licensed premises</li>
            <li>Public liability insurance certificate</li>
            <li>National Police Certificate for all applicants</li>
            <li>Lease agreement or proof of ownership</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Application Fee</h2>
          <p>
            The application fee varies depending on license type. Fees are
            non-refundable regardless of application outcome.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Processing Time</h2>
          <p>
            Standard applications typically take 8-12 weeks to process. Complex
            applications may take longer and require additional information.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Apply Now</h2>
          <p style={{ marginBottom: "16px" }}>
            Start your liquor license application online. Ensure you have all
            required documents ready before beginning.
          </p>
          <Button
            id="license-apply-button"
            variant="primary"
            label="Apply for License"
            iconRight="fa-light fa-arrow-right"
            onClick={() => alert("License application started!")}
          />
        </section>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
};

/**
 * Download Form Example (offline CTA)
 */
export const DownloadFormExample: Story = {
  args: {
    label: "Download Application Form",
    variant: "primary",
    iconLeft: "fa-light fa-download",
    targetButtonId: "download-form-button",
  },
  render: (args) => (
    <div style={{ height: "600px", position: "relative", overflow: "auto" }}>
      <div style={{ padding: "40px", minHeight: "1000px" }}>
        <h1>Building Permit Application</h1>

        <section style={{ marginBottom: "40px" }}>
          <h2>How to Apply</h2>
          <p>
            Download the application form, complete all sections, and submit
            with required supporting documents to your local council office.
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Form Instructions</h2>
          <ul>
            <li>Complete all sections in BLOCK LETTERS</li>
            <li>Attach certified copies of required documents</li>
            <li>Include payment for application fee</li>
            <li>Sign and date the declaration</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Supporting Documents Required</h2>
          <ul>
            <li>Site plan showing proposed development</li>
            <li>Building plans prepared by licensed builder</li>
            <li>Soil test results (if applicable)</li>
            <li>Letter of consent from property owner (if renting)</li>
          </ul>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Submission</h2>
          <p>
            Submit completed forms in person at your local council office or
            mail to: Building Services, PO Box 123, Darwin NT 0800
          </p>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2>Download Form</h2>
          <p style={{ marginBottom: "16px" }}>
            Download the Building Permit Application Form (PDF, 850KB)
          </p>
          <Button
            id="download-form-button"
            variant="primary"
            label="Download Application Form"
            iconLeft="fa-light fa-download"
            onClick={() => alert("Form download started!")}
          />
        </section>
      </div>
      <FloatingButton {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of using FloatingButton for offline CTAs like downloading application forms. The button provides easy access to download the form from anywhere on the page.",
      },
    },
  },
};
