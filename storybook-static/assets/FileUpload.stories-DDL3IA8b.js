import{r,j as t}from"./iframe-lBeUY_a6.js";import{I as L}from"./Icon-yLOO32zI.js";import"./preload-helper-DhH6u7hw.js";const k=({label:c,helperText:i,requiredIndicator:M="(Required)",supportedFormats:o,maxFileSizeMB:l,files:n=[],isUploading:s=!1,onFilesSelected:d,onFileRemove:p,buttonLabel:z="Select files",wrapperClassName:N,id:$,className:ae,required:C,disabled:a,accept:P,multiple:R=!0,...W})=>{const E=r.useId(),B=$??E,_=r.useRef(null),[V,D]=r.useState(!1),H=r.useCallback(e=>{e.preventDefault(),e.stopPropagation(),!a&&!s&&D(!0)},[a,s]),Y=r.useCallback(e=>{e.preventDefault(),e.stopPropagation(),D(!1)},[]),G=r.useCallback(e=>{e.preventDefault(),e.stopPropagation()},[]),U=r.useCallback(e=>{if(!e||a||s)return;const A=Array.from(e),se=R?A:[A[0]];d?.(se),D(!1),_.current&&(_.current.value="")},[a,s,R,d]),J=r.useCallback(e=>{e.preventDefault(),e.stopPropagation(),D(!1),!a&&!s&&U(e.dataTransfer.files)},[a,s,U]),K=r.useCallback(e=>{U(e.target.files)},[U]),Q=()=>{!a&&!s&&_.current?.click()},X=e=>{p?.(e)},Z=n.some(e=>e.status==="error"),ee=e=>{switch(e){case"success":return"fa-light fa-check";case"loading":return"fa-light fa-spinner";case"error":return"fa-light fa-circle-xmark";default:return"fa-light fa-xmark"}},te=e=>{switch(e){case"success":return"file-item--success";case"loading":return"file-item--loading";case"error":return"file-item--error";default:return"file-item--default"}},O=i?`${B}-help`:void 0;return t.jsxs("div",{className:`file-upload${a?" file-upload--disabled":""}${N?` ${N}`:""}`,children:[c&&t.jsxs("div",{className:"file-upload__label-row",children:[t.jsx("label",{className:"file-upload__label",htmlFor:B,children:c}),C&&t.jsx("span",{className:"file-upload__required",children:M})]}),i&&t.jsx("div",{className:"file-upload__helper",id:O,children:i}),t.jsxs("div",{className:`file-upload__dropzone${V?" file-upload__dropzone--active":""}${a?" file-upload__dropzone--disabled":""}${s?" file-upload__dropzone--uploading":""}${Z?" file-upload__dropzone--error":""}`,onDragEnter:H,onDragLeave:Y,onDragOver:G,onDrop:J,"data-state":a?"Disabled":"Enabled",children:[t.jsx("div",{className:"file-upload__icon","aria-hidden":"true",children:t.jsx(L,{icon:s?"fa-light fa-spinner":"fa-light fa-upload"})}),t.jsxs("div",{className:"file-upload__content",children:[t.jsx("h3",{className:`file-upload__title${s?" file-upload__title--uploading":""}`,children:"Drag and drop files or select files to upload"}),t.jsxs("div",{className:"file-upload__details",children:[o&&t.jsxs("p",{className:"file-upload__format",children:["Supported file formats: ",o]}),l&&t.jsxs("p",{className:"file-upload__size",children:["Max file size is ",l,"MB"]})]})]}),t.jsx("button",{type:"button",className:"file-upload__button",onClick:Q,disabled:a||s,"aria-label":`${z}. ${o?`Supported formats: ${o}. `:""}${l?`Max file size: ${l}MB.`:""}`,children:z}),t.jsx("input",{ref:_,type:"file",id:B,className:"file-upload__input",multiple:R,disabled:a,accept:P,onChange:K,"aria-describedby":O,required:C,...W})]}),n.length>0&&t.jsx("div",{className:"file-upload__list",children:n.map(e=>t.jsxs("div",{className:`file-item ${te(e.status)}`,"data-state":e.status||"Default",children:[t.jsxs("div",{className:"file-item__content",children:[t.jsx("span",{className:"file-item__icon","aria-hidden":"true",children:t.jsx(L,{icon:ee(e.status)})}),t.jsx("span",{className:"file-item__name",children:e.name})]}),t.jsx("button",{type:"button",className:"file-item__remove",onClick:()=>X(e.id),"aria-label":`Remove ${e.name}`,disabled:a,children:t.jsx(L,{icon:"fa-light fa-xmark","aria-hidden":"true"})})]},e.id))}),n.some(e=>e.status==="error"&&e.errorMessage)&&t.jsx("div",{className:"file-upload__errors",children:n.filter(e=>e.status==="error"&&e.errorMessage).map(e=>t.jsxs("div",{className:"file-upload__error-item",children:[t.jsx("span",{className:"file-upload__error-icon","aria-hidden":"true",children:t.jsx(L,{icon:"fa-light fa-circle-xmark"})}),t.jsx("span",{className:"file-upload__error-text",children:e.errorMessage})]},`${e.id}-error`))})]})};k.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:"Label displayed above the upload area"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown below the label"},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the field is required\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},supportedFormats:{required:!1,tsType:{name:"string"},description:'Supported file formats (e.g., "jpg, png, pdf")'},maxFileSizeMB:{required:!1,tsType:{name:"number"},description:"Maximum file size in MB"},files:{required:!1,tsType:{name:"Array",elements:[{name:"FileItem"}],raw:"FileItem[]"},description:"Array of uploaded files",defaultValue:{value:"[]",computed:!1}},isUploading:{required:!1,tsType:{name:"boolean"},description:`Whether an upload is currently in progress (disables interactions)\r
@default false`,defaultValue:{value:"false",computed:!1}},onFilesSelected:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Callback when files are selected or dropped"},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback to remove a file from the list"},buttonLabel:{required:!1,tsType:{name:"string"},description:`Custom button label for file selection\r
@default "Select files"`,defaultValue:{value:'"Select files"',computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control"},multiple:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["Omit"]};const ne={title:"Components/FileUpload",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{required:{control:"boolean"},disabled:{control:"boolean"},multiple:{control:"boolean"}}},u={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"Optional helper text",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,multiple:!0,buttonLabel:"Select files"},parameters:{docs:{description:{story:"The default file upload component ready to receive files. Users can drag and drop files or click the select button to browse their file system. The component displays supported formats and maximum file size information to guide users."}}}},m={args:{label:"Application documents",requiredIndicator:"(Required)",helperText:"Please upload your identification documents in PDF or image format. All documents must be legible and not exceed 10MB.",supportedFormats:"pdf, jpg, png",maxFileSizeMB:10,multiple:!0,buttonLabel:"Choose documents"},parameters:{docs:{description:{story:"File upload with comprehensive helper text explaining what documents are needed and any specific requirements. This is useful for government applications where users need clear guidance on document uploads."}}}},f={args:{label:"Avatar image",helperText:"Choose a profile picture for your account",supportedFormats:"jpg, png",maxFileSizeMB:5,multiple:!1,buttonLabel:"Select image"},parameters:{docs:{description:{story:"Single file upload variant when only one file is required. The component prevents multiple file selection and provides appropriate messaging for individual file uploads."}}}},h={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"Optional helper text",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,files:[{id:"file-1",name:"application-form.pdf",status:"success"}],buttonLabel:"Select files"},parameters:{docs:{description:{story:"File upload after successful upload completion. The file appears in the list with a green checkmark icon indicating successful upload."}}}},g={args:{label:"Submit supporting documents",requiredIndicator:"(Required)",helperText:"Upload all relevant documents for your application review",supportedFormats:"pdf, jpg, png, docx",maxFileSizeMB:10,files:[{id:"file-1",name:"identity-proof.pdf",status:"success"},{id:"file-2",name:"address-verification.png",status:"success"},{id:"file-3",name:"financial-statement.pdf",status:"success"}],buttonLabel:"Select files"},parameters:{docs:{description:{story:"Multiple files uploaded successfully, shown in the file list below the upload area. Users can remove individual files and add more as needed."}}}},b={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"Optional helper text",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,files:[{id:"file-1",name:"document-processing.pdf",status:"loading"}],buttonLabel:"Select files"},parameters:{docs:{description:{story:"File upload with a file in loading/processing state. An animated spinner icon indicates that the file is being uploaded or processed. Users can still add more files during this process."}}}},x={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"Optional helper text",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,files:[{id:"file-1",name:"large-document.pdf",status:"error",errorMessage:"File must be less than 10MB"}],buttonLabel:"Select files"},parameters:{docs:{description:{story:"File upload with an error state showing why the upload failed. The error message explains the issue (file too large, unsupported format, etc.) helping users understand what went wrong."}}}},F={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"Optional helper text",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,files:[{id:"file-1",name:"invalid-file.txt",status:"error",errorMessage:"Unsupported file format. Please use jpg, png, or pdf."}],buttonLabel:"Select files"},parameters:{docs:{description:{story:"File upload showing dropzone error state. When files have errors, the upload area background changes to red/pink with a red border to draw attention to the problems. Error messages appear below with detailed explanations."}}}},y={args:{label:"Submit supporting documents",requiredIndicator:"(Required)",helperText:"Upload all required documents for your application",supportedFormats:"pdf, jpg, png, docx",maxFileSizeMB:10,files:[{id:"file-1",name:"identity-proof.pdf",status:"success"},{id:"file-2",name:"address-verification-processing.png",status:"loading"},{id:"file-3",name:"financial-statement-rejected.pdf",status:"error",errorMessage:"Document is not legible. Please provide a clearer copy."}],buttonLabel:"Select files"},parameters:{docs:{description:{story:"File upload showing multiple files in different states simultaneously: successful uploads, files currently processing, and failed uploads with error messages. This provides a complete view of the upload workflow."}}}},w={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"File uploads are currently disabled",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,disabled:!0,buttonLabel:"Select files"},parameters:{docs:{description:{story:"Disabled file upload component shown when uploads are not available. All text appears in muted color, the dropzone has a light gray background, and the button is disabled. No interactions are accepted."}}}},S={args:{label:"Additional information",helperText:"Upload any additional documents that support your application",supportedFormats:"pdf, jpg, png",maxFileSizeMB:10,required:!1,buttonLabel:"Choose files"},parameters:{docs:{description:{story:"Optional file upload without the required indicator. Users can choose to upload files but it is not mandatory for form submission."}}}},v={args:{label:"Document",supportedFormats:"pdf",maxFileSizeMB:5,buttonLabel:"Select"},parameters:{docs:{description:{story:"Minimal file upload with only essential elements: label and upload area. Perfect for compact forms or secondary upload areas."}}}},q={render:c=>{const[i,M]=r.useState(c.files||[]),[o,l]=r.useState(1),n=d=>{const p=d.map(z=>({id:`file-${o+i.length}`,name:z.name,status:"success"}));M([...i,...p]),l(o+p.length)},s=d=>{M(i.filter(p=>p.id!==d))};return t.jsx(k,{...c,files:i,onFilesSelected:n,onFileRemove:s})},args:{label:"Upload supporting documents",requiredIndicator:"(Required)",helperText:"You can upload multiple documents at once",supportedFormats:"pdf, jpg, png, docx",maxFileSizeMB:10,buttonLabel:"Select files"},parameters:{docs:{description:{story:"Fully interactive file upload component with state management. Users can select files, see them added to the list, and remove them as needed. This demonstrates the complete user workflow for file uploads."}}}},I={args:{label:"Upload file",requiredIndicator:"(Required)",helperText:"Optional helper text",supportedFormats:"jpg, png, pdf",maxFileSizeMB:10,isUploading:!0,buttonLabel:"Select files"},parameters:{docs:{description:{story:"File upload during active upload process. The dropzone shows an animated spinner icon, the title text is muted, and the select button is disabled. Users cannot add more files until the current upload completes."}}}},T={args:{label:"Import data",requiredIndicator:"(Required)",helperText:"Import your data file to get started",supportedFormats:"csv, xlsx",maxFileSizeMB:25,buttonLabel:"Import file"},parameters:{docs:{description:{story:"File upload with a custom button label tailored to the specific action. Instead of the generic 'Select files', the button says 'Import file' to better describe what happens when clicked."}}}},j={args:{label:"Driver's license",requiredIndicator:"(Required)",helperText:"Upload a clear image of both sides of your driver's license for verification purposes",supportedFormats:"jpg, png",maxFileSizeMB:5,buttonLabel:"Upload license"},parameters:{docs:{description:{story:"Specialized file upload for license documents with restricted formats and smaller file size limits. The label and helper text provide context for the specific document being uploaded."}}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    multiple: true,
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "The default file upload component ready to receive files. Users can drag and drop files or click the select button to browse their file system. The component displays supported formats and maximum file size information to guide users."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Default file upload component with drag-and-drop and file selection.\r
Shows the enabled state with upload icon, messaging, and select button.`,...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Application documents",
    requiredIndicator: "(Required)",
    helperText: "Please upload your identification documents in PDF or image format. All documents must be legible and not exceed 10MB.",
    supportedFormats: "pdf, jpg, png",
    maxFileSizeMB: 10,
    multiple: true,
    buttonLabel: "Choose documents"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload with comprehensive helper text explaining what documents are needed and any specific requirements. This is useful for government applications where users need clear guidance on document uploads."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`File upload with required indicator and detailed helper text.\r
Demonstrates how the component appears when filing an important form.`,...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Avatar image",
    helperText: "Choose a profile picture for your account",
    supportedFormats: "jpg, png",
    maxFileSizeMB: 5,
    multiple: false,
    buttonLabel: "Select image"
  },
  parameters: {
    docs: {
      description: {
        story: "Single file upload variant when only one file is required. The component prevents multiple file selection and provides appropriate messaging for individual file uploads."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Single file upload variant (not multiple files).\r
Used when only one file is needed.`,...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [{
      id: "file-1",
      name: "application-form.pdf",
      status: "success"
    }],
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload after successful upload completion. The file appears in the list with a green checkmark icon indicating successful upload."
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`File upload component with a successfully uploaded file.\r
Shows the success state with checkmark icon.`,...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Submit supporting documents",
    requiredIndicator: "(Required)",
    helperText: "Upload all relevant documents for your application review",
    supportedFormats: "pdf, jpg, png, docx",
    maxFileSizeMB: 10,
    files: [{
      id: "file-1",
      name: "identity-proof.pdf",
      status: "success"
    }, {
      id: "file-2",
      name: "address-verification.png",
      status: "success"
    }, {
      id: "file-3",
      name: "financial-statement.pdf",
      status: "success"
    }],
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "Multiple files uploaded successfully, shown in the file list below the upload area. Users can remove individual files and add more as needed."
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`File upload showing multiple uploaded files in various states.\r
Demonstrates how the component handles multiple file uploads with different statuses.`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [{
      id: "file-1",
      name: "document-processing.pdf",
      status: "loading"
    }],
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload with a file in loading/processing state. An animated spinner icon indicates that the file is being uploaded or processed. Users can still add more files during this process."
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`File upload displaying a file in loading state.\r
Shows animated spinner icon while file is being processed.`,...b.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [{
      id: "file-1",
      name: "large-document.pdf",
      status: "error",
      errorMessage: "File must be less than 10MB"
    }],
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload with an error state showing why the upload failed. The error message explains the issue (file too large, unsupported format, etc.) helping users understand what went wrong."
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`File upload showing a failed upload with error message.\r
Demonstrates error state with error icon and message explanation.`,...x.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    files: [{
      id: "file-1",
      name: "invalid-file.txt",
      status: "error",
      errorMessage: "Unsupported file format. Please use jpg, png, or pdf."
    }],
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload showing dropzone error state. When files have errors, the upload area background changes to red/pink with a red border to draw attention to the problems. Error messages appear below with detailed explanations."
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:`File upload with dropzone error state.\r
Shows how the dropzone background highlights in red when errors are present.`,...F.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Submit supporting documents",
    requiredIndicator: "(Required)",
    helperText: "Upload all required documents for your application",
    supportedFormats: "pdf, jpg, png, docx",
    maxFileSizeMB: 10,
    files: [{
      id: "file-1",
      name: "identity-proof.pdf",
      status: "success"
    }, {
      id: "file-2",
      name: "address-verification-processing.png",
      status: "loading"
    }, {
      id: "file-3",
      name: "financial-statement-rejected.pdf",
      status: "error",
      errorMessage: "Document is not legible. Please provide a clearer copy."
    }],
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload showing multiple files in different states simultaneously: successful uploads, files currently processing, and failed uploads with error messages. This provides a complete view of the upload workflow."
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`File upload showing mixed file states.\r
Demonstrates how the component handles files in different states simultaneously.`,...y.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "File uploads are currently disabled",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    disabled: true,
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled file upload component shown when uploads are not available. All text appears in muted color, the dropzone has a light gray background, and the button is disabled. No interactions are accepted."
      }
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`Disabled file upload component.\r
Shows the muted state when file uploads are not allowed.`,...w.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Additional information",
    helperText: "Upload any additional documents that support your application",
    supportedFormats: "pdf, jpg, png",
    maxFileSizeMB: 10,
    required: false,
    buttonLabel: "Choose files"
  },
  parameters: {
    docs: {
      description: {
        story: "Optional file upload without the required indicator. Users can choose to upload files but it is not mandatory for form submission."
      }
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`File upload with optional indicator (not required).\r
Shows the component without the required indicator.`,...S.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Document",
    supportedFormats: "pdf",
    maxFileSizeMB: 5,
    buttonLabel: "Select"
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal file upload with only essential elements: label and upload area. Perfect for compact forms or secondary upload areas."
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Minimal file upload with only essential elements.\r
Shows a streamlined version with label and upload area only.`,...v.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState(args.files || []);
    const [nextId, setNextId] = useState(1);
    const handleFilesSelected = (selectedFiles: File[]) => {
      const newFiles = selectedFiles.map(file => ({
        id: \`file-\${nextId + files.length}\`,
        name: file.name,
        status: "success" as const
      }));
      setFiles([...files, ...newFiles]);
      setNextId(nextId + newFiles.length);
    };
    const handleFileRemove = (fileId: string) => {
      setFiles(files.filter(f => f.id !== fileId));
    };
    return <FileUpload {...args} files={files} onFilesSelected={handleFilesSelected} onFileRemove={handleFileRemove} />;
  },
  args: {
    label: "Upload supporting documents",
    requiredIndicator: "(Required)",
    helperText: "You can upload multiple documents at once",
    supportedFormats: "pdf, jpg, png, docx",
    maxFileSizeMB: 10,
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "Fully interactive file upload component with state management. Users can select files, see them added to the list, and remove them as needed. This demonstrates the complete user workflow for file uploads."
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Interactive file upload story with state management.\r
Demonstrates a fully functional file upload with add and remove capabilities.`,...q.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Upload file",
    requiredIndicator: "(Required)",
    helperText: "Optional helper text",
    supportedFormats: "jpg, png, pdf",
    maxFileSizeMB: 10,
    isUploading: true,
    buttonLabel: "Select files"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload during active upload process. The dropzone shows an animated spinner icon, the title text is muted, and the select button is disabled. Users cannot add more files until the current upload completes."
      }
    }
  }
}`,...I.parameters?.docs?.source},description:{story:`File upload during active upload/processing.\r
Shows disabled state with spinner icon in the dropzone area itself.`,...I.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Import data",
    requiredIndicator: "(Required)",
    helperText: "Import your data file to get started",
    supportedFormats: "csv, xlsx",
    maxFileSizeMB: 25,
    buttonLabel: "Import file"
  },
  parameters: {
    docs: {
      description: {
        story: "File upload with a custom button label tailored to the specific action. Instead of the generic 'Select files', the button says 'Import file' to better describe what happens when clicked."
      }
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`File upload with custom button label.\r
Shows how to customize the button text for different use cases.`,...T.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Driver's license",
    requiredIndicator: "(Required)",
    helperText: "Upload a clear image of both sides of your driver's license for verification purposes",
    supportedFormats: "jpg, png",
    maxFileSizeMB: 5,
    buttonLabel: "Upload license"
  },
  parameters: {
    docs: {
      description: {
        story: "Specialized file upload for license documents with restricted formats and smaller file size limits. The label and helper text provide context for the specific document being uploaded."
      }
    }
  }
}`,...j.parameters?.docs?.source},description:{story:`File upload for specific file format with size limit.\r
Example: License or ID document upload.`,...j.parameters?.docs?.description}}};const le=["Default","WithHelperText","SingleFile","WithSuccessFile","WithMultipleFiles","WithLoadingFile","WithErrorFile","DropzoneErrorState","WithMixedFileStates","Disabled","Optional","Minimal","Interactive","UploadsInProgress","CustomButtonLabel","LicenseDocumentUpload"];export{T as CustomButtonLabel,u as Default,w as Disabled,F as DropzoneErrorState,q as Interactive,j as LicenseDocumentUpload,v as Minimal,S as Optional,f as SingleFile,I as UploadsInProgress,x as WithErrorFile,m as WithHelperText,b as WithLoadingFile,y as WithMixedFileStates,g as WithMultipleFiles,h as WithSuccessFile,le as __namedExportsOrder,ne as default};
