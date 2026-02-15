import React, { useId, useState, useRef, useCallback } from "react";
import "./FileUpload.css";
import "./FileUpload-ntg.css";
import "./FileUpload-central.css";
import { Icon } from "../Icon";

export interface FileItem {
  id: string;
  name: string;
  status?: "default" | "loading" | "success" | "error";
  errorMessage?: string;
}

export interface FileUploadProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /**
   * Label displayed above the upload area
   */
  label?: string;
  /**
   * Helper text shown below the label
   */
  helperText?: string;
  /**
   * Text shown when the field is required
   * @default "(Required)"
   */
  requiredIndicator?: string;
  /**
   * Supported file formats (e.g., "jpg, png, pdf")
   */
  supportedFormats?: string;
  /**
   * Maximum file size in MB
   */
  maxFileSizeMB?: number;
  /**
   * Array of uploaded files
   */
  files?: FileItem[];
  /**
   * Whether an upload is currently in progress (disables interactions)
   * @default false
   */
  isUploading?: boolean;
  /**
   * Callback when files are selected or dropped
   */
  onFilesSelected?: (files: File[]) => void;
  /**
   * Callback to remove a file from the list
   */
  onFileRemove?: (fileId: string) => void;
  /**
   * Custom button label for file selection
   * @default "Select files"
   */
  buttonLabel?: string;
  /**
   * Optional wrapper class for layout control
   */
  wrapperClassName?: string;
}

export const FileUpload = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  supportedFormats,
  maxFileSizeMB,
  files = [],
  isUploading = false,
  onFilesSelected,
  onFileRemove,
  buttonLabel = "Select files",
  wrapperClassName,
  id,
  className,
  required,
  disabled,
  accept,
  multiple = true,
  ...props
}: FileUploadProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!disabled && !isUploading) {
        setIsDragActive(true);
      }
    },
    [disabled, isUploading],
  );

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const processFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || disabled || isUploading) return;

      const fileArray = Array.from(fileList);
      const validFiles = multiple ? fileArray : [fileArray[0]];

      onFilesSelected?.(validFiles);
      setIsDragActive(false);

      // Reset input value to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [disabled, isUploading, multiple, onFilesSelected],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);

      if (!disabled && !isUploading) {
        processFiles(e.dataTransfer.files);
      }
    },
    [disabled, isUploading, processFiles],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      processFiles(e.target.files);
    },
    [processFiles],
  );

  const handleSelectClick = () => {
    if (!disabled && !isUploading) {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveFile = (fileId: string) => {
    onFileRemove?.(fileId);
  };
  const hasErrors = files.some((f) => f.status === "error");
  const getFileIcon = (status?: string) => {
    switch (status) {
      case "success":
        return "fa-light fa-check";
      case "loading":
        return "fa-light fa-spinner";
      case "error":
        return "fa-light fa-circle-xmark";
      default:
        return "fa-light fa-xmark";
    }
  };

  const getFileStatusClass = (status?: string) => {
    switch (status) {
      case "success":
        return "file-item--success";
      case "loading":
        return "file-item--loading";
      case "error":
        return "file-item--error";
      default:
        return "file-item--default";
    }
  };

  const helperId = helperText ? `${inputId}-help` : undefined;

  return (
    <div
      className={`file-upload${disabled ? " file-upload--disabled" : ""}${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
    >
      {label && (
        <div className="file-upload__label-row">
          <label className="file-upload__label" htmlFor={inputId}>
            {label}
          </label>
          {required && (
            <span className="file-upload__required">{requiredIndicator}</span>
          )}
        </div>
      )}

      {helperText && (
        <div className="file-upload__helper" id={helperId}>
          {helperText}
        </div>
      )}

      <div
        className={`file-upload__dropzone${
          isDragActive ? " file-upload__dropzone--active" : ""
        }${disabled ? " file-upload__dropzone--disabled" : ""}${
          isUploading ? " file-upload__dropzone--uploading" : ""
        }${hasErrors ? " file-upload__dropzone--error" : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        data-state={disabled ? "Disabled" : "Enabled"}
      >
        {/* Upload Icon */}
        <div className="file-upload__icon" aria-hidden="true">
          <Icon
            icon={isUploading ? "fa-light fa-spinner" : "fa-light fa-upload"}
          />
        </div>

        {/* Main Message */}
        <div className="file-upload__content">
          <h3
            className={`file-upload__title${
              isUploading ? " file-upload__title--uploading" : ""
            }`}
          >
            Drag and drop files or select files to upload
          </h3>

          <div className="file-upload__details">
            {supportedFormats && (
              <p className="file-upload__format">
                Supported file formats: {supportedFormats}
              </p>
            )}
            {maxFileSizeMB && (
              <p className="file-upload__size">
                Max file size is {maxFileSizeMB}MB
              </p>
            )}
          </div>
        </div>

        {/* Select Files Button */}
        <button
          type="button"
          className="file-upload__button"
          onClick={handleSelectClick}
          disabled={disabled || isUploading}
          aria-label={`${buttonLabel}. ${supportedFormats ? `Supported formats: ${supportedFormats}. ` : ""}${maxFileSizeMB ? `Max file size: ${maxFileSizeMB}MB.` : ""}`}
        >
          {buttonLabel}
        </button>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          id={inputId}
          className="file-upload__input"
          multiple={multiple}
          disabled={disabled}
          accept={accept}
          onChange={handleInputChange}
          aria-describedby={helperId}
          required={required}
          {...props}
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="file-upload__list">
          {files.map((file) => (
            <div
              key={file.id}
              className={`file-item ${getFileStatusClass(file.status)}`}
              data-state={file.status || "Default"}
            >
              <div className="file-item__content">
                <span className="file-item__icon" aria-hidden="true">
                  <Icon icon={getFileIcon(file.status)} />
                </span>
                <span className="file-item__name">{file.name}</span>
              </div>
              <button
                type="button"
                className="file-item__remove"
                onClick={() => handleRemoveFile(file.id)}
                aria-label={`Remove ${file.name}`}
                disabled={disabled}
              >
                <Icon icon="fa-light fa-xmark" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Error List */}
      {files.some((f) => f.status === "error" && f.errorMessage) && (
        <div className="file-upload__errors">
          {files
            .filter((f) => f.status === "error" && f.errorMessage)
            .map((file) => (
              <div key={`${file.id}-error`} className="file-upload__error-item">
                <span className="file-upload__error-icon" aria-hidden="true">
                  <Icon icon="fa-light fa-circle-xmark" />
                </span>
                <span className="file-upload__error-text">
                  {file.errorMessage}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
