# FileUpload Component - Comprehensive Documentation

A versatile file upload component that supports drag-and-drop functionality, multiple file selection, and real-time upload status tracking with error handling.

## Purpose

The FileUpload component provides a modern, user-friendly interface for file selection and upload workflows. It combines drag-and-drop functionality with a traditional file browser, making it accessible to all users regardless of their technical comfort level.

## Features

- ✅ Drag-and-drop file area with visual feedback
- ✅ Traditional file browser button for accessibility
- ✅ Multiple file selection support (configurable)
- ✅ File list display with upload status tracking
- ✅ Real-time status updates (loading, success, error)
- ✅ Error message display with detailed feedback
- ✅ Customizable file format and size restrictions
- ✅ Full TypeScript support with complete type safety
- ✅ Theme-specific styling (NT.GOV.AU and NTG Central themes)
- ✅ Design token-driven styling for consistency
- ✅ Keyboard and screen reader accessibility
- ✅ Smooth transitions and focus states following WCAG standards
- ✅ File removal capability with confirmation
- ✅ Disabled state support

## When to Use FileUpload

✅ **Use FileUpload for:**

- Submitting applications with document attachments
- Uploading license documents or proof of identity
- Collecting supporting documentation for requests
- Importing data files for processing
- User avatar or profile picture selection
- Batch document upload workflows
- Any scenario requiring file selection from users

❌ **Do NOT use FileUpload for:**

- Simple text input (use Input component instead)
- Binary data that users shouldn't select (hidden file transfers)
- Scenarios with no file validation needs
- Simple links to download files (use Button component instead)

## Component Anatomy

### Label Section

The label section provides context for the upload area and includes:

- **Label**: Clear, descriptive text explaining what type of file is needed
- **Required Indicator**: "(Required)" text shown when field is mandatory
- **Helper Text**: Additional guidance or requirements below the label

```tsx
<FileUpload
  label="Upload file"
  requiredIndicator="(Required)"
  helperText="Optional helper text"
/>
```

### Upload Zone (Dropzone)

The main interactive area where users can:

- Drag and drop files
- Double-click to open file browser (via button)
- See upload instructions and file format information

**States:**

- `Enabled`: Default, ready to accept files
- `Active`: Visual feedback when dragging files over the area
- `Uploading`: Upload in progress, interactions disabled, spinner shown
- `Error`: Upload failures present, background and border highlighted in red
- `Disabled`: All text muted, light gray background, button disabled, no interactions allowed
- `Focused`: Keyboard focus with theme-specific outline
- `Hover`: Enhanced border color for visual feedback

### Upload Icon

A 24x24px icon representing file upload functionality. Uses FontAwesome light icon style (`fa-light fa-upload`).

**Color Tokens:**

- `--clr-link-default`: Standard state (NTG: #1F1F5F Navy Blue)

### Content Area

Contains the main messaging to guide users:

- **Title**: "Drag and drop files or select files to upload" (16px, bold)
- **Format Information**: "Supported file formats: jpg, png, pdf"
- **Size Limit**: "Max file size is 10MB"

**Color Tokens:**

- Title: `--clr-text-default`
- Details: `--clr-text-muted`

**Error State:**

- When files have errors, the dropzone background changes to `--clr-status-danger-bg` (#F7E7EB - light red/pink)
- Outline changes to `--clr-status-danger` (#A60F37 - dark red)
- This provides visual feedback that there are problems requiring user attention

### Select Files Button

A secondary-styled button for traditional file browser access.

**Styling:**

- Background: `--clr-action-secondary` (White)
- Border: 1px `--clr-border-strong-01`
- Text: `--clr-link-default`
- Hover: `--clr-action-hover` background with white text
- Padding: `--sp-sm` (12px) vertical, `--sp-md` (16px) horizontal
- Font size: `--type-button-label-small-size` (14px, bold)

**Uploading State:**

- Button becomes disabled during upload
- Background: `--clr-action-disabled`
- Text: `--clr-text-muted`
- Not clickable, cursor shows not-allowed

**Disabled State:**

- Background: `--clr-action-disabled` (#E7E7EA)
- Border: 1px `--clr-border-subtle`
- Text: `--clr-text-muted`
- Dropzone has light gray background (`--clr-bg-shade-alt`)
- All text in label, helper, title, and details becomes muted color
- Icon color becomes muted
- Not clickable, cursor shows not-allowed

### File List

Displays uploaded files with their current status.

**File Item Structure:**

```
┌─────────────────────────────────────┐
│ [icon] filename.pdf            [✕] │
└─────────────────────────────────────┘
```

**File Item States:**

#### Default State

- Icon: X (file browser close icon)
- Color: `--clr-link-default`
- Border: `--clr-border-subtle`
- Use when file is awaiting action or initial upload

#### Success State

- Icon: Checkmark ✓ (solid, green)
- Color: `--clr-status-success`
- Border: `--clr-border-subtle`
- Indicates successful upload completion

#### Loading State

- Icon: Spinner (animated rotation)
- Color: `--clr-link-default`
- Border: `--clr-border-subtle`
- Shows while file is being uploaded/processed

#### Error State

- Background: `--clr-status-danger-bg` (light red)
- Border: `--clr-status-danger` (red)
- Icon: Error circle with X, `--clr-status-danger`
- Error message displayed below file entry

### Error Messages

Error messages appear below the file list when uploads fail.

**Error Item Structure:**

- Icon: Solid error circle (16x16px)
- Text: Clear explanation of what went wrong
- Background: `--clr-status-danger-bg`
- Border: `--clr-status-danger`

**Common Error Messages:**

- "File must be less than 10MB"
- "Unsupported file format. Please use jpg, png, or pdf."
- "File upload failed. Please try again."
- "Document is not legible. Please provide a clearer copy."

## Props Reference

### FileUploadProps

```typescript
interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // Label and text
  label?: string; // Label text
  helperText?: string; // Helper text below label
  requiredIndicator?: string; // Default: "(Required)"
  supportedFormats?: string; // E.g., "jpg, png, pdf"
  maxFileSizeMB?: number; // Maximum file size in MB

  // File management
  files?: FileItem[]; // Array of uploaded files
  isUploading?: boolean; // Upload in progress. Default: false
  onFilesSelected?: (files: File[]) => void; // Callback when files selected
  onFileRemove?: (fileId: string) => void; // Callback when file removed

  // Customization
  buttonLabel?: string; // Default: "Select files"
  wrapperClassName?: string; // Additional wrapper classes

  // Standard HTML attributes
  required?: boolean;
  disabled?: boolean;
  accept?: string; // MIME types or extensions
  multiple?: boolean; // Default: true
  id?: string;
}
```

### FileItem Interface

```typescript
interface FileItem {
  id: string; // Unique identifier
  name: string; // Display name
  status?: "default" | "loading" | "success" | "error";
  errorMessage?: string; // Error description
}
```

## Usage Examples

### Basic File Upload

```tsx
import { FileUpload } from "@ntgovernment/web-design-system";

export function MyComponent() {
  const handleFilesSelected = (files: File[]) => {
    console.log("Files selected:", files);
    // Process files: upload to server, validate, etc.
  };

  return (
    <FileUpload
      label="Upload documentation"
      requiredIndicator="(Required)"
      helperText="Upload copies of your supporting documents"
      supportedFormats="pdf, jpg, png"
      maxFileSizeMB={10}
      onFilesSelected={handleFilesSelected}
    />
  );
}
```

### With File State Management

```tsx
import { FileUpload, FileItem } from "@ntgovernment/web-design-system";
import { useState } from "react";

export function ApplicationForm() {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFilesSelected = async (selectedFiles: File[]) => {
    // Add files to list with loading state
    const newFiles = selectedFiles.map((file) => ({
      id: `file-${Date.now()}-${Math.random()}`,
      name: file.name,
      status: "loading" as const,
    }));
    setFiles([...files, ...newFiles]);

    // Simulate upload and update status
    for (const file of newFiles) {
      try {
        // Upload file to server
        await uploadFileToServer(selectedFiles[newFiles.indexOf(file)]);

        // Update to success state
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id ? { ...f, status: "success" as const } : f,
          ),
        );
      } catch (error) {
        // Update to error state with message
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? {
                  ...f,
                  status: "error" as const,
                  errorMessage: "Upload failed. Please try again.",
                }
              : f,
          ),
        );
      }
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles(files.filter((f) => f.id !== fileId));
  };

  return (
    <FileUpload
      label="Submit supporting documents"
      requiredIndicator="(Required)"
      helperText="Upload all required documents for your application"
      supportedFormats="pdf, jpg, png, docx"
      maxFileSizeMB={25}
      files={files}
      onFilesSelected={handleFilesSelected}
      onFileRemove={handleFileRemove}
    />
  );
}
```

### Single File Upload

```tsx
<FileUpload
  label="Profile picture"
  helperText="Choose an image for your account profile"
  supportedFormats="jpg, png"
  maxFileSizeMB={5}
  multiple={false}
  buttonLabel="Choose image"
  onFilesSelected={(files) => {
    if (files.length > 0) {
      uploadProfilePicture(files[0]);
    }
  }}
/>
```

### Optional Upload

```tsx
<FileUpload
  label="Additional information"
  helperText="Attach any additional documents that support your application"
  supportedFormats="pdf, jpg, png"
  maxFileSizeMB={10}
  required={false}
/>
```

### With Custom MIME Types

```tsx
<FileUpload
  label="Import spreadsheet"
  helperText="Import your data in Excel format"
  supportedFormats="xlsx, csv"
  maxFileSizeMB={50}
  accept=".xlsx,.csv,application/vnd.ms-excel,text/csv"
/>
```

## Design Tokens

The FileUpload component uses extensive design tokens for consistency and theming.

### Color Tokens

| Token                    | Usage                 | NTG Value | Central Value |
| ------------------------ | --------------------- | --------- | ------------- |
| `--clr-text-default`     | Labels, titles        | #1F1E27   | #393B3C       |
| `--clr-text-muted`       | Helper text, details  | #666774   | #6C7074       |
| `--clr-text-inverse`     | Button text on hover  | #FFFFFF   | #FFFFFF       |
| `--clr-bg-default`       | Dropzone background   | #FFFFFF   | #FFFFFF       |
| `--clr-bg-shade`         | Disabled background   | #F5F5F7   | #F5F5F5       |
| `--clr-bg-shade-alt`     | Alternate shade       | #E7E7EA   | #ECEFF0       |
| `--clr-border-subtle`    | Default border        | #D3D3D7   | #DCE0E4       |
| `--clr-border-strong-01` | Button border         | #1F1F5F   | #102040       |
| `--clr-border-strong-02` | Hover/focus border    | #1F1E27   | #393B3C       |
| `--clr-link-default`     | Icon color, link text | #1F1F5F   | #102040       |
| `--clr-action-secondary` | Button background     | #FFFFFF   | #FFFFFF       |
| `--clr-action-hover`     | Button hover          | #C33826   | #E47024       |
| `--clr-focus-focus`      | Focus outline color   | #EC8C58   | #6AB06A       |
| `--clr-status-danger`    | Error color           | #A60F37   | #A60F37       |
| `--clr-status-danger-bg` | Error background      | #F7E7EB   | #F7E7EB       |
| `--clr-status-success`   | Success color         | #107810   | #208820       |

### Spacing Tokens

| Token     | Value | Usage                                          |
| --------- | ----- | ---------------------------------------------- |
| `--sp-xs` | 8px   | Gap between elements, file list spacing        |
| `--sp-sm` | 12px  | Button padding (vertical)                      |
| `--sp-md` | 16px  | Button padding (horizontal), file item padding |
| `--sp-lg` | 20px  | Icon sizes, larger gaps                        |
| `--sp-xl` | 24px  | Dropzone padding, major spacing                |

### Typography Tokens

| Token                              | Value         | Usage                                   |
| ---------------------------------- | ------------- | --------------------------------------- |
| `--type-font-default`              | Lato / Roboto | All text                                |
| `--type-desktop-body-default-size` | 16px          | Labels, titles                          |
| `--type-body-default-lh`           | 24px          | Label line height                       |
| `--type-body-sm-size`              | 14px          | Helper text, file names, error messages |
| `--type-body-sm-lh`                | 20px          | Small text line height                  |
| `--type-button-label-small-size`   | 14px          | Button text                             |
| `--type-button-label-small-lh`     | 16px          | Button line height                      |

### Border Radius Tokens

| Token                         | Value     | Usage                       |
| ----------------------------- | --------- | --------------------------- |
| `--file-upload-border-radius` | 0px (NTG) | Dropzone border radius      |
| `--file-upload-button-radius` | 0px (NTG) | Button border radius        |
| `--file-upload-item-radius`   | 0px (NTG) | File item border radius     |
| `--radii-none`                | 0px       | No border radius            |
| `--radii-sm`                  | 4px       | Small radius for focus ring |

### Shadow/Focus Tokens

| Token                    | Value                   | Usage                   |
| ------------------------ | ----------------------- | ----------------------- |
| `--shadow-focus-ntg`     | 0px 0px 0px 4px #EC8C58 | Focus outline (NTG)     |
| `--shadow-focus-central` | 0px 0px 0px 4px #6AB06A | Focus outline (Central) |

## Accessibility

The FileUpload component follows WCAG 2.1 Level AA standards:

### Keyboard Navigation

- `Tab`: Move focus to dropzone/button
- `Enter/Space`: Open file browser
- `Shift+Tab`: Move focus backward
- Users can drag and drop with any keyboard-accessible element

### Screen Reader Support

- Input label properly associated with `htmlFor` attribute
- Helper text linked via `aria-describedby`
- Required state announced via `aria-required`
- Error messages announced to screen readers
- Buttons have descriptive `aria-label` attributes
- File operations (remove, etc.) have clear labels

### Color Contrast

- All text meets WCAG AA contrast ratios
- Status indicators use color + icon for clarity
- Focus states use 4px outline in high-contrast colors

### Touch Accessibility

- Large touch targets: minimum 44x44px for buttons
- Sufficient spacing between interactive elements
- Visual feedback for drag-and-drop interactions

## CSS Variables Customization

For advanced customization, these CSS variables can be overridden:

```css
:root {
  /* Colors */
  --clr-text-default: #1f1e27;
  --clr-text-muted: #666774;
  --clr-border-subtle: #d3d3d7;
  --clr-bg-default: #ffffff;
  --clr-bg-shade: #f5f5f7;

  /* Spacing */
  --sp-xs: 8px;
  --sp-md: 16px;
  --sp-xl: 24px;

  /* Border radius */
  --file-upload-border-radius: 0px;
  --file-upload-button-radius: 0px;
  --file-upload-item-radius: 0px;

  /* Focus states */
  --shadow-focus-ntg: 0px 0px 0px 4px #ec8c58ff;
  --shadow-focus-central: 0px 0px 0px 4px #6ab06aff;
}
```

### Spinner Animation

The component includes a CSS animation for the spinner icon shown during uploads:

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

This animation is automatically applied when `isUploading={true}`.

## Best Practices

### For Developers

1. **Always provide meaningful labels**: Help users understand what files are needed
2. **Set appropriate file restrictions**: Use `supportedFormats` and `maxFileSizeMB` to guide users
3. **Handle errors gracefully**: Provide clear error messages explaining what went wrong
4. **Track upload progress**: Use the `isUploading` prop to disable interactions while uploading
5. **Show file status**: Use the `status` field on file items to track progress (default, loading, success, error)
6. **Validate on multiple levels**: Client-side and server-side validation
7. **Provide helpful context**: Use helper text for specific requirements

### For Content/UX

1. **Label Examples**:
   - ✅ "Upload identification document"
   - ✅ "Application supporting documents"
   - ❌ "Upload file"
   - ❌ "File"

2. **Helper Text Examples**:
   - ✅ "Upload a PDF or image of your driver's license"
   - ✅ "Maximum file size is 10MB. Supported formats: pdf, jpg, png"
   - ❌ "Upload file"
   - ❌ "Lorem ipsum dolor sit amet"

3. **Error Message Examples**:
   - ✅ "File must be less than 10MB. Your file is 12MB."
   - ✅ "Document is not legible. Please provide a clearer copy."
   - ✅ "Unsupported format. Please use PDF, JPG, or PNG."
   - ❌ "Error"
   - ❌ "Failed"

## Theme Integration

The FileUpload component automatically adapts to both NT.GOV.AU and NTG Central themes through CSS variable imports.

### NT.GOV.AU Theme

- Primary blue: `#1F1F5F`
- Accent/hover: Ochre `#C33826`
- Focus outline: Orange `#EC8C58` (4px)
- Font: Lato

### NTG Central Theme

- Primary blue: `#102040`
- Accent/hover: Orange `#E47024`
- Focus outline: Green `#6AB06A` (4px)
- Font: Roboto

No component code changes needed—theming happens purely through CSS variables.

## Component Lifecycle

### File Upload Flow

```
User Selected Files
         ↓
onFilesSelected Callback
         ↓
Set isUploading = true (disables dropzone and button)
         ↓
Add to files array with "loading" status
         ↓
Upload to Server
         ↓
Update file status: "success" or "error"
         ↓
Set isUploading = false (re-enables dropzone and button)
         ↓
Display in file list or error section
         ↓
User can remove file via onFileRemove
```

### Uploading State

When `isUploading` is true:

- Dropzone is disabled (pointer-events: none)
- Upload icon displays a spinner animation
- Title text color changes to muted (#666774)
- Select button is disabled
- Drag-and-drop interactions are blocked
- No additional files can be selected

This prevents users from attempting concurrent uploads and provides clear feedback that an operation is in progress.

## Story-Driven Development

The Storybook stories demonstrate:

- Default enabled state
- With helper text and required indicator
- Single vs. multiple file modes
- File states: success, loading, error
- Mixed file states
- Disabled state
- Optional (non-required) upload
- Minimal configuration
- Interactive state management
- Custom button labels
- Specialized document uploads

## Common Use Cases

### Application Submission

```tsx
<FileUpload
  label="Supporting documents"
  requiredIndicator="(Required)"
  helperText="Upload copies of all relevant supporting documents mentioned in your application form"
  supportedFormats="pdf, jpg, png"
  maxFileSizeMB={25}
/>
```

### License Verification

```tsx
<FileUpload
  label="License verification"
  requiredIndicator="(Required)"
  helperText="Upload a clear image of both sides of your license"
  supportedFormats="jpg, png"
  maxFileSizeMB={5}
/>
```

### Data Import

```tsx
<FileUpload
  label="Import data"
  requiredIndicator="(Required)"
  helperText="Import your data in Excel or CSV format"
  supportedFormats="xlsx, csv"
  maxFileSizeMB={50}
  buttonLabel="Import"
/>
```

## Troubleshooting

### Files Not Being Added

- Check browser console for errors
- Verify `onFilesSelected` callback is defined
- Ensure `accept` attribute is correctly formatted

### Focus State Not Showing

- Verify `--shadow-focus-ntg` or `--shadow-focus-central` tokens are defined
- Check that box-shadow is not being overridden
- Test with keyboard navigation (Tab key)

### Drag-and-Drop Not Working

- Verify `onDrop` handler is being triggered
- Check if element has pointer events
- Ensure `disabled` prop is not set

### File List Not Updating

- Verify `files` prop is being passed correctly
- Check that `FileItem` objects have unique `id` values
- Ensure state updates are triggering re-renders

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

## Migration Guide

### From Previous File Upload implementations

If upgrading from a custom implementation:

1. Replace with `<FileUpload>` component
2. Map existing file state to `FileItem[]` interface
3. Update callbacks to use `onFilesSelected` and `onFileRemove`
4. Remove custom styling—use design tokens instead
5. Test accessibility with keyboard and screen reader

## Contributing

When contributing to the FileUpload component:

1. Follow the `CONTENT_STANDARDS.md` guidelines
2. Use design tokens for all styling and prefer existing tokens over new variables
3. Test keyboard and screen reader accessibility for every interactive state
4. Keep CSS changes to theme-specific files when they affect visual differences
5. Add Storybook stories (args + controls) for any new behaviour or state
6. Update `FILEUPLOAD.md` with usage examples, props and edge‑case notes
7. Add unit tests (Vitest) for drag/drop handlers, `processFiles` validation, and `onFileRemove`
8. Add automated accessibility tests (axe) for Enabled, Focused, Uploading, Error and Disabled states
9. Add visual regression snapshots (Chromatic/Storybook) for the key states listed above

---

## Machine-readable API (for tools & coding agents)

The following JSON Schema describes the component props and the `FileItem` shape — useful for automated code generation and validation.

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "FileUploadProps",
  "type": "object",
  "properties": {
    "label": { "type": "string" },
    "helperText": { "type": "string" },
    "requiredIndicator": { "type": "string" },
    "supportedFormats": { "type": "string" },
    "maxFileSizeMB": { "type": "number" },
    "files": {
      "type": "array",
      "items": { "$ref": "#/definitions/FileItem" }
    },
    "isUploading": { "type": "boolean" },
    "buttonLabel": { "type": "string" },
    "disabled": { "type": "boolean" },
    "accept": { "type": "string" },
    "multiple": { "type": "boolean" }
  },
  "definitions": {
    "FileItem": {
      "type": "object",
      "properties": {
        "id": { "type": "string" },
        "name": { "type": "string" },
        "status": {
          "type": "string",
          "enum": ["default", "loading", "success", "error"]
        },
        "errorMessage": { "type": ["string", "null"] }
      },
      "required": ["id", "name"]
    }
  }
}
```

---

## Unit tests (examples)

Add Vitest unit tests for core logic. Example assertions to include:

- processFiles() filters by `accept` and `maxFileSizeMB`
- Drag handlers set/unset `isDragActive` correctly
- `onFilesSelected` is called with the expected File[] payload
- `onFileRemove` removes the correct `FileItem`

Example (Vitest):

```ts
import { render, fireEvent } from '@testing-library/react';
import { FileUpload } from './FileUpload';

it('calls onFilesSelected when files selected', async () => {
  const handle = vi.fn();
  const { getByLabelText } = render(<FileUpload onFilesSelected={handle} />);
  const input = getByLabelText('Upload file') as HTMLInputElement;
  const file = new File(['a'], 'file.pdf', { type: 'application/pdf' });
  await fireEvent.change(input, { target: { files: [file] } });
  expect(handle).toHaveBeenCalled();
});
```

---

## Accessibility checklist (automated + manual)

- Provide `aria-describedby` for helper text (already implemented via `helperText`)
- Ensure `button` has descriptive `aria-label` when context is ambiguous
- Keyboard: Tab to button, Enter to open file dialog; focus ring visible (use `--clr-focus-focus`)
- Use axe-core to assert no critical violations for Enabled/Focused/Uploading/Error/Disabled

Suggested axe assertions (pseudo):

- expect(await axe(container)).toHaveNoViolations();

---

## Storybook & visual regression guidance

- Add stories for: Default, Focused, DragActive, Uploading, Error, Disabled
- Use Storybook `args` to demonstrate `isUploading`, `files`, and `disabled` permutations
- Mark the above stories for visual snapshots in Chromatic or your chosen visual-testing tool

---

## Recommended server contract for uploads

Suggested minimal response shape for single-file upload endpoints (helps implementers):

Request: POST /upload (multipart/form-data)

Response 200 (success):

```json
{ "id": "<string>", "name": "<filename>", "status": "success" }
```

Response 4xx/5xx (error):

```json
{
  "id": "<string|null>",
  "name": "<filename>",
  "status": "error",
  "message": "Human-friendly error message"
}
```

The component expects callers to map server responses to `FileItem` entries and update `files` / `status` accordingly.

---

## Troubleshooting & common pitfalls

- If focus outline appears the wrong colour, ensure the active theme exposes `--clr-focus-focus` (NTG: orange, Central: green)
- When `accept` is used, validate both the `accept` string and the file MIME type on the server
- Reset input value after selection to allow selecting the same file again (`input.value = ''`)
- Avoid inline styles that duplicate token values; prefer design tokens

## Related Components

- [Input](../Input/INPUT.md) - Single-line text input
- [Button](../Button/BUTTON.md) - Action trigger
- [Notification](../Notification/NOTIFICATION.md) - Status messages
- [Callout](../Callout/CALLOUT.md) - Informational messages

## References

- [Bootstrap File Input Documentation](https://getbootstrap.com/docs/5.3/forms/form-control/#file-input)
- [HTML Form File Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file)
- [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [WCAG 2.1 File Input Accessibility](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
