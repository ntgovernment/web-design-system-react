import React, { useId } from "react";
import "./Checkbox.css";
import "./Checkbox-ntg.css";
import "./Checkbox-central.css";

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  /**
   * Checkbox label text
   */
  label?: string;
  /**
   * Validation state for the checkbox
   */
  validationState?: "success" | "error";
  /**
   * Validation message shown below the checkbox
   */
  validationMessage?: string;
  /**
   * Optional wrapper class for layout control
   */
  wrapperClassName?: string;
}

export interface CheckboxGroupProps {
  /**
   * Group label shown above the checkboxes
   */
  label?: string;
  /**
   * Helper text shown under the group label
   */
  helperText?: string;
  /**
   * Text shown when the group is required
   * @default "(Required)"
   */
  requiredIndicator?: string;
  /**
   * Whether the group is required
   */
  required?: boolean;
  /**
   * Validation state for the group
   */
  validationState?: "success" | "error";
  /**
   * Validation message shown below the group
   */
  validationMessage?: string;
  /**
   * Checkbox elements to render in the group
   */
  children: React.ReactNode;
  /**
   * Optional wrapper class for layout control
   */
  wrapperClassName?: string;
  /**
   * Optional ID for the group fieldset
   */
  id?: string;
}

/**
 * Checkbox component for selecting one or more options
 */
export const Checkbox = ({
  label,
  validationState,
  validationMessage,
  wrapperClassName,
  id,
  className,
  disabled,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const statusId =
    validationMessage && status ? `${checkboxId}-status` : undefined;
  const describedBy = statusId || undefined;

  return (
    <div
      className={`checkbox-wrapper${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
    >
      <div className="form-check">
        <input
          id={checkboxId}
          type="checkbox"
          className={`form-check-input${className ? ` ${className}` : ""}`}
          disabled={disabled}
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={describedBy}
          data-status={status}
          {...props}
        />
        {label && (
          <label className="form-check-label" htmlFor={checkboxId}>
            {label}
          </label>
        )}
      </div>

      {status && validationMessage && (
        <div
          id={statusId}
          className={`checkbox-message ${
            status === "error"
              ? "checkbox-message--error"
              : "checkbox-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          {validationMessage}
        </div>
      )}
    </div>
  );
};

/**
 * CheckboxGroup component for grouping related checkboxes
 */
export const CheckboxGroup = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  required = false,
  validationState,
  validationMessage,
  children,
  wrapperClassName,
  id,
}: CheckboxGroupProps) => {
  const generatedId = useId();
  const groupId = id ?? generatedId;

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const helperId = helperText ? `${groupId}-help` : undefined;
  const statusId =
    validationMessage && status ? `${groupId}-status` : undefined;
  const describedBy =
    [helperId, statusId].filter(Boolean).join(" ") || undefined;

  return (
    <fieldset
      id={groupId}
      className={`checkbox-group${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
      aria-describedby={describedBy}
      aria-invalid={status === "error" ? "true" : undefined}
      data-status={status}
    >
      {label && (
        <legend className="checkbox-group-legend">
          <div className="checkbox-group-label-row">
            <span className="checkbox-group-label">{label}</span>
            {required && (
              <span className="checkbox-group-required">
                {requiredIndicator}
              </span>
            )}
          </div>
          {helperText && (
            <div className="checkbox-group-helper" id={helperId}>
              {helperText}
            </div>
          )}
        </legend>
      )}

      <div className="checkbox-group-items">{children}</div>

      {status && validationMessage && (
        <div
          id={statusId}
          className={`checkbox-group-message ${
            status === "error"
              ? "checkbox-group-message--error"
              : "checkbox-group-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          {validationMessage}
        </div>
      )}
    </fieldset>
  );
};
