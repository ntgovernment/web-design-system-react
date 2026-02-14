import type { Meta, StoryObj } from "@storybook/react-vite";
import { Document } from "./Document";

const meta = {
  title: "Components/Document",
  component: Document,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    fileType: {
      control: "select",
      options: ["docx", "pdf", "xlsx", "pptx"],
    },
    fileSize: {
      control: "text",
    },
    metadata: {
      control: "text",
    },
  },
} satisfies Meta<typeof Document>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Emergency management plan template",
    href: "#",
    fileType: "docx",
    fileSize: "182 KB",
    description: "Optional description of the document.",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "Regional infrastructure budget summary",
    href: "#",
    fileType: "xlsx",
    fileSize: "2.4 MB",
  },
};

export const PdfVariant: Story = {
  name: "PDF",
  args: {
    title: "Community consultation outcomes",
    href: "#",
    fileType: "pdf",
    fileSize: "946 KB",
    description:
      "Summary of community feedback and actions from the recent consultations.",
  },
};

export const XlsxVariant: Story = {
  name: "XLSX",
  args: {
    title: "Service delivery performance data",
    href: "#",
    fileType: "xlsx",
    fileSize: "1.1 MB",
    description:
      "Spreadsheet of quarterly measures and regional performance indicators.",
  },
};

export const PptxVariant: Story = {
  name: "PPTX",
  args: {
    title: "Strategic planning briefing",
    href: "#",
    fileType: "pptx",
    fileSize: "4.8 MB",
    description:
      "Slides used for executive planning workshops and stakeholder updates.",
  },
};

export const AllFileTypes: Story = {
  args: {
    title: "",
    href: "#",
    fileType: "docx",
    fileSize: "",
  },
  render: () => (
    <div className="d-flex flex-column gap-3">
      <Document
        title="Public consultation guide"
        href="#"
        fileType="pdf"
        fileSize="946 KB"
        description="Guidance for community consultation sessions and reporting."
      />
      <Document
        title="Grant application checklist"
        href="#"
        fileType="docx"
        fileSize="214 KB"
        description="Checklist to confirm required attachments before submission."
      />
      <Document
        title="Quarterly performance dashboard"
        href="#"
        fileType="xlsx"
        fileSize="1.1 MB"
        description="Spreadsheet with regional performance indicators and charts."
      />
      <Document
        title="Strategic planning briefing"
        href="#"
        fileType="pptx"
        fileSize="4.8 MB"
        description="Slides used for executive planning workshops."
      />
    </div>
  ),
};

export const NTGTheme: Story = {
  name: "NTG Theme",
  args: {
    title: "",
    href: "#",
    fileType: "docx",
    fileSize: "",
  },
  render: () => (
    <div data-theme="ntg">
      <Document
        title="Community safety program overview"
        href="#"
        fileType="pdf"
        fileSize="1.3 MB"
        description="Summary of initiatives, timelines, and reporting milestones."
      />
    </div>
  ),
};

export const CentralTheme: Story = {
  name: "Central Theme",
  args: {
    title: "",
    href: "#",
    fileType: "docx",
    fileSize: "",
  },
  render: () => (
    <div data-theme="central">
      <Document
        title="Intranet onboarding handbook"
        href="#"
        fileType="docx"
        fileSize="512 KB"
        description="Internal guidance for new staff and induction resources."
      />
    </div>
  ),
};
