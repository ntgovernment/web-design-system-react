import React, { useId, useState } from "react";
import "./Dropdown.css";
import "./Dropdown-ntg.css";
import "./Dropdown-central.css";
import { Icon } from "../Icon";

export interface DropdownOption {
  /**
   * The value of the option.
   */
  value: string;
  /**
   * The label to display for the option.
   */
  label: string;
  /**
   * Whether this option is disabled.
   */
  disabled?: boolean;
}

export interface DropdownProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size" | "multiple"
> {
  /**
   * Dropdown label shown above the field.
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
   * Dropdown size using Bootstrap sizing classes.
   */
  size?: "sm" | "lg";
  /**
   * Optional wrapper class for layout control.
   */
  wrapperClassName?: string;
  /**
   * The options to display in the dropdown.
   */
  options?: DropdownOption[];
  /**
   * Placeholder text shown when no option is selected.
   * @default "Select an option"
   */
  placeholder?: string;
}

export const Dropdown = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  validationState,
  validationMessage,
  size,
  wrapperClassName,
  id,
  className,
  required,
  disabled,
  value,
  defaultValue,
  onChange,
  options = [],
  placeholder = "Select an option",
  children,
  ...props
}: DropdownProps) => {
  const generatedId = useId();
  const dropdownId = id ?? generatedId;
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | number | readonly string[] | undefined
  >(defaultValue);

  const currentValue = isControlled ? value : uncontrolledValue;
  const isFilled =
    currentValue !== undefined &&
    currentValue !== null &&
    `${currentValue}`.length > 0;

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const helperId = helperText ? `${dropdownId}-help` : undefined;
  const statusId =
    validationMessage && status ? `${dropdownId}-status` : undefined;
  const describedBy =
    [helperId, statusId].filter(Boolean).join(" ") || undefined;

  const dropdownClassName = `form-select${
    size ? ` form-select-${size}` : ""
  }${className ? ` ${className}` : ""}`;

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }

    onChange?.(event);
  };

  const dropdownValueProps = isControlled ? { value } : { defaultValue };

  return (
    <div
      className={`dropdown-field${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
    >
      {label && (
        <div className="dropdown-label-row">
          <label className="dropdown-label" htmlFor={dropdownId}>
            {label}
          </label>
          {required && (
            <span className="dropdown-required">{requiredIndicator}</span>
          )}
        </div>
      )}

      {helperText && (
        <div className="dropdown-helper" id={helperId}>
          {helperText}
        </div>
      )}

      <div className="dropdown-control-wrapper">
        <select
          id={dropdownId}
          className={dropdownClassName}
          required={required}
          disabled={disabled}
          aria-required={required || undefined}
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={describedBy}
          data-status={status}
          data-filled={isFilled ? "true" : undefined}
          data-disabled={disabled ? "true" : undefined}
          onChange={handleChange}
          {...dropdownValueProps}
          {...props}
        >
          {placeholder && !required && (
            <option value="" disabled={!currentValue}>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
          {children}
        </select>
        <div className="dropdown-icon" aria-hidden="true">
          <Icon
            icon="fa-light fa-chevron-down"
            color="currentColor"
            size="20px"
          />
        </div>
      </div>

      {status && validationMessage && (
        <div
          id={statusId}
          className={`dropdown-message ${
            status === "error"
              ? "dropdown-message--error"
              : "dropdown-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <span className="dropdown-message__icon" aria-hidden="true">
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
