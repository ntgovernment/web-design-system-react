import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FileUpload } from "./FileUpload";

const meta = {
  title: "Components/FileUpload",
  component: FileUpload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    multiple: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default file upload component with drag-and-drop and file selection.
 * Shows the enabled state with upload icon, messaging, and select button.
 */
export const Default: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    multiple: true,
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default file upload component ready to receive files. Users can drag and drop files or click the select button to browse their file system. The component displays supported formats and maximum file size information to guide users.",
      },
    },
  },
};

/**
 * File upload with required indicator and detailed helper text.
 * Demonstrates how the component appears when filing an important form.
 */
export const WithHelperText: Story = {
  args: {
    label: "Application documents",
    requiredIndicator: "(Required)",
    helperText:
      "Please upload your identification documents in PDF or image format. All documents must be legible and not exceed 10MB.",
    supportedFormats: "pdf, jpg, png",
    maxFileSizeMB: 10,
    multiple: true,
    buttonLabel: "Choose documents",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload with comprehensive helper text explaining what documents are needed and any specific requirements. This is useful for government applications where users need clear guidance on document uploads.",
      },
    },
  },
};

/**
 * Single file upload variant (not multiple files).
 * Used when only one file is needed.
 */
export const SingleFile: Story = {
  args: {
    label: "Avatar image",
    helperText: "Choose a profile picture for your account",
    supportedFormats: "jpg, png",
    maxFileSizeMB: 5,
    multiple: false,
    buttonLabel: "Select image",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Single file upload variant when only one file is required. The component prevents multiple file selection and provides appropriate messaging for individual file uploads.",
      },
    },
  },
};

/**
 * File upload component with a successfully uploaded file.
 * Shows the success state with checkmark icon.
 */
export const WithSuccessFile: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [
      {
        id: "file-1",
        name: "application-form.pdf",
        status: "success",
      },
    ],
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload after successful upload completion. The file appears in the list with a green checkmark icon indicating successful upload.",
      },
    },
  },
};

/**
 * File upload showing multiple uploaded files in various states.
 * Demonstrates how the component handles multiple file uploads with different statuses.
 */
export const WithMultipleFiles: Story = {
  args: {
    label: "Submit supporting documents",
    requiredIndicator: "(Required)",
    helperText: "Upload all relevant documents for your application review",
    supportedFormats: "pdf, jpg, png, docx",
    maxFileSizeMB: 10,
    files: [
      {
        id: "file-1",
        name: "identity-proof.pdf",
        status: "success",
      },
      {
        id: "file-2",
        name: "address-verification.png",
        status: "success",
      },
      {
        id: "file-3",
        name: "financial-statement.pdf",
        status: "success",
      },
    ],
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Multiple files uploaded successfully, shown in the file list below the upload area. Users can remove individual files and add more as needed.",
      },
    },
  },
};

/**
 * File upload displaying a file in loading state.
 * Shows animated spinner icon while file is being processed.
 */
export const WithLoadingFile: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [
      {
        id: "file-1",
        name: "document-processing.pdf",
        status: "loading",
      },
    ],
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload with a file in loading/processing state. An animated spinner icon indicates that the file is being uploaded or processed. Users can still add more files during this process.",
      },
    },
  },
};

/**
 * File upload showing a failed upload with error message.
 * Demonstrates error state with error icon and message explanation.
 */
export const WithErrorFile: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [
      {
        id: "file-1",
        name: "large-document.pdf",
        status: "error",
        errorMessage: "File must be less than 10MB",
      },
    ],
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload with an error state showing why the upload failed. The error message explains the issue (file too large, unsupported format, etc.) helping users understand what went wrong.",
      },
    },
  },
};

/**
 * File upload with dropzone error state.
 * Shows how the dropzone background highlights in red when errors are present.
 */
export const DropzoneErrorState: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [
      {
        id: "file-1",
        name: "invalid-file.txt",
        status: "error",
        errorMessage: "Unsupported file format. Please use jpg, png, or pdf.",
      },
    ],
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload showing dropzone error state. When files have errors, the upload area background changes to red/pink with a red border to draw attention to the problems. Error messages appear below with detailed explanations.",
      },
    },
  },
};

/**
 * File upload showing mixed file states.
 * Demonstrates how the component handles files in different states simultaneously.
 */
export const WithMixedFileStates: Story = {
  args: {
    label: "Submit supporting documents",
    requiredIndicator: "(Required)",
    helperText: "Upload all required documents for your application",
    supportedFormats: "pdf, jpg, png, docx",
    maxFileSizeMB: 10,
    files: [
      {
        id: "file-1",
        name: "identity-proof.pdf",
        status: "success",
      },
      {
        id: "file-2",
        name: "address-verification-processing.png",
        status: "loading",
      },
      {
        id: "file-3",
        name: "financial-statement-rejected.pdf",
        status: "error",
        errorMessage: "Document is not legible. Please provide a clearer copy.",
      },
    ],
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload showing multiple files in different states simultaneously: successful uploads, files currently processing, and failed uploads with error messages. This provides a complete view of the upload workflow.",
      },
    },
  },
};

/**
 * Disabled file upload component.
 * Shows the muted state when file uploads are not allowed.
 */
export const Disabled: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "File uploads are currently disabled",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    disabled: true,
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Disabled file upload component shown when uploads are not available. All text appears in muted color, the dropzone has a light gray background, and the button is disabled. No interactions are accepted.",
      },
    },
  },
};

/**
 * File upload with optional indicator (not required).
 * Shows the component without the required indicator.
 */
export const Optional: Story = {
  args: {
    label: "Additional information",
    helperText: "Upload any additional documents that support your application",
    supportedFormats: "pdf, jpg, png",
    maxFileSizeMB: 10,
    required: false,
    buttonLabel: "Choose files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Optional file upload without the required indicator. Users can choose to upload files but it is not mandatory for form submission.",
      },
    },
  },
};

/**
 * Minimal file upload with only essential elements.
 * Shows a streamlined version with label and upload area only.
 */
export const Minimal: Story = {
  args: {
    label: "Document",
    supportedFormats: "pdf",
    maxFileSizeMB: 5,
    buttonLabel: "Select",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Minimal file upload with only essential elements: label and upload area. Perfect for compact forms or secondary upload areas.",
      },
    },
  },
};

/**
 * Interactive file upload story with state management.
 * Demonstrates a fully functional file upload with add and remove capabilities.
 */
export const Interactive: Story = {
  render: (args) => {
    const [files, setFiles] = useState(args.files || []);
    const [nextId, setNextId] = useState(1);

    const handleFilesSelected = (selectedFiles: File[]) => {
      const newFiles = selectedFiles.map((file) => ({
        id: `file-${nextId + files.length}`,
        name: file.name,
        status: "success" as const,
      }));
      setFiles([...files, ...newFiles]);
      setNextId(nextId + newFiles.length);
    };

    const handleFileRemove = (fileId: string) => {
      setFiles(files.filter((f) => f.id !== fileId));
    };

    return (
      <FileUpload
        {...args}
        files={files}
        onFilesSelected={handleFilesSelected}
        onFileRemove={handleFileRemove}
      />
    );
  },
  args: {
    label: "Upload supporting documents",
    requiredIndicator: "(Required)",
    helperText: "You can upload multiple documents at once",
    supportedFormats: "pdf, jpg, png, docx",
    maxFileSizeMB: 10,
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully interactive file upload component with state management. Users can select files, see them added to the list, and remove them as needed. This demonstrates the complete user workflow for file uploads.",
      },
    },
  },
};

/**
 * File upload during active upload/processing.
 * Shows disabled state with spinner icon in the dropzone area itself.
 */
export const UploadsInProgress: Story = {
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    isUploading: true,
    buttonLabel: "Select files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload during active upload process. The dropzone shows an animated spinner icon, the title text is muted, and the select button is disabled. Users cannot add more files until the current upload completes.",
      },
    },
  },
};

/**
 * File upload with custom button label.
 * Shows how to customize the button text for different use cases.
 */
export const CustomButtonLabel: Story = {
  args: {
    label: "Import data",
    requiredIndicator: "(Required)",
    helperText: "Import your data file to get started",
    supportedFormats: "csv, xlsx",
    maxFileSizeMB: 25,
    buttonLabel: "Import file",
  },
  parameters: {
    docs: {
      description: {
        story:
          "File upload with a custom button label tailored to the specific action. Instead of the generic 'Select files', the button says 'Import file' to better describe what happens when clicked.",
      },
    },
  },
};

/**
 * File upload for specific file format with size limit.
 * Example: License or ID document upload.
 */
export const LicenseDocumentUpload: Story = {
  args: {
    label: "Driver's license",
    requiredIndicator: "(Required)",
    helperText:
      "Upload a clear image of both sides of your driver's license for verification purposes",
    supportedFormats: "jpg, png",
    maxFileSizeMB: 5,
    buttonLabel: "Upload license",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Specialized file upload for license documents with restricted formats and smaller file size limits. The label and helper text provide context for the specific document being uploaded.",
      },
    },
  },
};
