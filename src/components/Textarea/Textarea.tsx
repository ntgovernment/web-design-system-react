import React, { useId, useState } from "react";
import "./Textarea.css";
import "./Textarea-ntg.css";
import "./Textarea-central.css";
import { Icon } from "../Icon";

export interface TextareaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> {
  /**
   * Textarea label shown above the field.
   */
  label?: string;
  /**
   * Helper text shown under the label.
   */
  helperText?: string;
  /**
   * Text shown when the field is required.
   * @default "(Required)"
   */
  requiredIndicator?: string;
  /**
   * Validation state for the field.
   */
  validationState?: "success" | "error";
  /**
   * Validation message shown below the field.
   */
  validationMessage?: string;
  /**
   * Optional wrapper class for layout control.
   */
  wrapperClassName?: string;
  /**
   * Maximum character count. Shows a character counter when set.
   */
  maxLength?: number;
  /**
   * Show character counter even when maxLength is not set.
   */
  showCharacterCount?: boolean;
  /**
   * Number of visible text rows.
   * @default 5
   */
  rows?: number;
}

export const Textarea = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  validationState,
  validationMessage,
  wrapperClassName,
  id,
  className,
  required,
  disabled,
  readOnly,
  value,
  defaultValue,
  onChange,
  maxLength,
  showCharacterCount = false,
  rows = 5,
  ...props
}: TextareaProps) => {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | number | readonly string[] | undefined
  >(defaultValue);

  const currentValue = isControlled ? value : uncontrolledValue;
  const isFilled =
    currentValue !== undefined &&
    currentValue !== null &&
    `${currentValue}`.length > 0;

  const characterCount = currentValue ? `${currentValue}`.length : 0;
  const displayCounter = maxLength !== undefined || showCharacterCount;

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const helperId = helperText ? `${textareaId}-help` : undefined;
  const statusId =
    validationMessage && status ? `${textareaId}-status` : undefined;
  const counterId = displayCounter ? `${textareaId}-counter` : undefined;
  const describedBy =
    [helperId, statusId, counterId].filter(Boolean).join(" ") || undefined;

  const textareaClassName = `form-control${className ? ` ${className}` : ""}`;

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }

    onChange?.(event);
  };

  const textareaValueProps = isControlled ? { value } : { defaultValue };

  return (
    <div
      className={`textarea-field${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
    >
      {label && (
        <div className="textarea-label-row">
          <label className="textarea-label" htmlFor={textareaId}>
            {label}
          </label>
          {required && (
            <span className="textarea-required">{requiredIndicator}</span>
          )}
        </div>
      )}

      {helperText && (
        <div className="textarea-helper" id={helperId}>
          {helperText}
        </div>
      )}

      <textarea
        id={textareaId}
        className={textareaClassName}
        rows={rows}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        aria-required={required || undefined}
        aria-invalid={status === "error" ? "true" : undefined}
        aria-describedby={describedBy}
        data-status={status}
        data-filled={isFilled ? "true" : undefined}
        data-readonly={readOnly ? "true" : undefined}
        data-disabled={disabled ? "true" : undefined}
        onChange={handleChange}
        {...textareaValueProps}
        {...props}
      />

      {displayCounter && (
        <div className="textarea-counter" id={counterId} aria-live="polite">
          {characterCount}
          {maxLength !== undefined && `/${maxLength}`}
        </div>
      )}

      {status && validationMessage && (
        <div
          id={statusId}
          className={`textarea-message ${
            status === "error"
              ? "textarea-message--error"
              : "textarea-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <span className="textarea-message__icon" aria-hidden="true">
            <Icon
              icon={
                status === "error"
                  ? "fa-light fa-circle-xmark"
                  : "fa-light fa-check"
              }
              color="currentColor"
              size="16px"
            />
          </span>
          <span>{validationMessage}</span>
        </div>
      )}
    </div>
  );
};
