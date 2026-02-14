import React, { useId } from "react";
import { Icon } from "../Icon";
import "./Radio.css";
import "./Radio-ntg.css";
import "./Radio-central.css";

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  /**
   * Radio button label text
   */
  label?: string;
  /**
   * Validation state for the radio button
   */
  validationState?: "success" | "error";
  /**
   * Validation message shown below the radio button
   */
  validationMessage?: string;
  /**
   * Optional wrapper class for layout control
   */
  wrapperClassName?: string;
  /**
   * Name attribute to group radio buttons together
   * Auto-provided by RadioGroup component when used in a group
   */
  name?: string;
}

export interface RadioGroupProps {
  /**
   * Group label shown above the radio buttons
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
   * Radio button elements to render in the group
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
  /**
   * Name attribute for all radio buttons in the group
   */
  name?: string;
}

/**
 * Radio button component for selecting one option from a list
 */
export const Radio = ({
  label,
  validationState,
  validationMessage,
  wrapperClassName,
  id,
  className,
  disabled,
  name,
  ...props
}: RadioProps) => {
  const generatedId = useId();
  const radioId = id ?? generatedId;

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const statusId =
    validationMessage && status ? `${radioId}-status` : undefined;
  const describedBy = statusId || undefined;

  return (
    <div
      className={`radio-wrapper${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
    >
      <div className="form-check">
        <input
          id={radioId}
          type="radio"
          name={name}
          className={`form-check-input${className ? ` ${className}` : ""}`}
          disabled={disabled}
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={describedBy}
          data-status={status}
          {...props}
        />
        {label && (
          <label className="form-check-label" htmlFor={radioId}>
            {label}
          </label>
        )}
      </div>

      {status && validationMessage && (
        <div
          id={statusId}
          className={`radio-message ${
            status === "error"
              ? "radio-message--error"
              : "radio-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <Icon
            icon={
              status === "error"
                ? "fa-light fa-circle-exclamation"
                : "fa-light fa-circle-check"
            }
            className="me-2"
            ariaHidden={true}
          />
          {validationMessage}
        </div>
      )}
    </div>
  );
};

/**
 * RadioGroup component for grouping related radio buttons
 */
export const RadioGroup = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  required = false,
  validationState,
  validationMessage,
  children,
  wrapperClassName,
  id,
  name,
}: RadioGroupProps) => {
  const generatedId = useId();
  const groupId = id ?? generatedId;
  const groupName = name ?? `radio-group-${groupId}`;

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

  // Clone children and inject the name prop if it's a Radio component
  const childrenWithName = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Radio) {
      return React.cloneElement(child as React.ReactElement<RadioProps>, {
        name: groupName,
      });
    }
    return child;
  });

  return (
    <fieldset
      id={groupId}
      className={`radio-group${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
      aria-describedby={describedBy}
      aria-invalid={status === "error" ? "true" : undefined}
      aria-required={required ? "true" : undefined}
      data-status={status}
    >
      {label && (
        <legend className="radio-group-legend">
          <div className="radio-group-label-row">
            <span className="radio-group-label">{label}</span>
            {required && (
              <span className="radio-group-required">{requiredIndicator}</span>
            )}
          </div>
          {helperText && (
            <div className="radio-group-helper" id={helperId}>
              {helperText}
            </div>
          )}
        </legend>
      )}

      <div className="radio-group-items">{childrenWithName}</div>

      {status && validationMessage && (
        <div
          id={statusId}
          className={`radio-group-message ${
            status === "error"
              ? "radio-group-message--error"
              : "radio-group-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <Icon
            icon={
              status === "error"
                ? "fa-light fa-circle-exclamation"
                : "fa-light fa-circle-check"
            }
            className="me-2"
            ariaHidden={true}
          />
          {validationMessage}
        </div>
      )}
    </fieldset>
  );
};
