import React, { useId, useState } from "react";
import "./Input.css";
import "./Input-ntg.css";
import "./Input-central.css";
import { Icon } from "../Icon";

export interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  /**
   * Input label shown above the field.
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
   * Input size using Bootstrap sizing classes.
   */
  size?: "sm" | "lg";
  /**
   * Optional wrapper class for layout control.
   */
  wrapperClassName?: string;
}

export const Input = ({
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
  readOnly,
  value,
  defaultValue,
  onChange,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
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

  const helperId = helperText ? `${inputId}-help` : undefined;
  const statusId =
    validationMessage && status ? `${inputId}-status` : undefined;
  const describedBy =
    [helperId, statusId].filter(Boolean).join(" ") || undefined;

  const inputClassName = `form-control${
    size ? ` form-control-${size}` : ""
  }${className ? ` ${className}` : ""}`;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }

    onChange?.(event);
  };

  const inputValueProps = isControlled ? { value } : { defaultValue };

  return (
    <div
      className={`input-field${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
    >
      {label && (
        <div className="input-label-row">
          <label className="input-label" htmlFor={inputId}>
            {label}
          </label>
          {required && (
            <span className="input-required">{requiredIndicator}</span>
          )}
        </div>
      )}

      {helperText && (
        <div className="input-helper" id={helperId}>
          {helperText}
        </div>
      )}

      <input
        id={inputId}
        className={inputClassName}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        aria-required={required || undefined}
        aria-invalid={status === "error" ? "true" : undefined}
        aria-describedby={describedBy}
        data-status={status}
        data-filled={isFilled ? "true" : undefined}
        data-readonly={readOnly ? "true" : undefined}
        data-disabled={disabled ? "true" : undefined}
        onChange={handleChange}
        {...inputValueProps}
        {...props}
      />

      {status && validationMessage && (
        <div
          id={statusId}
          className={`input-message ${
            status === "error"
              ? "input-message--error"
              : "input-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <span className="input-message__icon" aria-hidden="true">
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
