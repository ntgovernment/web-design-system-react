import { useId, useState } from "react";
import "./DateInput.css";
import "./DateInput-ntg.css";
import "./DateInput-central.css";
import { Icon } from "../Icon";

export interface DateInputValue {
  day: string;
  month: string;
  year: string;
}

export interface DateInputProps {
  /**
   * Input label shown above the fields.
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
   * Validation state for the entire date input.
   */
  validationState?: "success" | "error";
  /**
   * Validation message shown below the fields.
   */
  validationMessage?: string;
  /**
   * Whether the date input is required.
   */
  required?: boolean;
  /**
   * Whether the date input is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the date input is read-only.
   */
  readOnly?: boolean;
  /**
   * Optional wrapper class for layout control.
   */
  wrapperClassName?: string;
  /**
   * Controlled value for the date inputs.
   */
  value?: DateInputValue;
  /**
   * Default value for uncontrolled usage.
   */
  defaultValue?: DateInputValue;
  /**
   * Callback fired when any field changes.
   */
  onChange?: (value: DateInputValue) => void;
  /**
   * Additional id attribute for the container (for accessibility).
   */
  id?: string;
}

export const DateInput = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  validationState,
  validationMessage,
  required,
  disabled,
  readOnly,
  wrapperClassName,
  value,
  defaultValue,
  onChange,
  id,
}: DateInputProps) => {
  const generatedId = useId();
  const containerId = id ?? generatedId;
  const isControlled = value !== undefined;

  const [internalValue, setInternalValue] = useState<DateInputValue>(
    defaultValue ?? { day: "", month: "", year: "" },
  );

  const currentValue = isControlled ? value : internalValue;

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const helperId = helperText ? `${containerId}-help` : undefined;
  const statusId =
    validationMessage && status ? `${containerId}-status` : undefined;
  const describedBy =
    [helperId, statusId].filter(Boolean).join(" ") || undefined;

  const handleFieldChange = (
    field: keyof DateInputValue,
    fieldValue: string,
  ) => {
    const newValue = {
      ...currentValue,
      [field]: fieldValue,
    };

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  return (
    <div
      className={`date-input-field${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
      id={containerId}
    >
      {label && (
        <div className="date-input-label-row">
          <label className="date-input-label">{label}</label>
          {required && (
            <span className="date-input-required">{requiredIndicator}</span>
          )}
        </div>
      )}

      {helperText && (
        <div className="date-input-helper" id={helperId}>
          {helperText}
        </div>
      )}

      <div className="date-input-fields-wrapper">
        <div className="date-input-field-group">
          <label
            className="date-input-field-label"
            htmlFor={`${containerId}-day`}
          >
            Day
          </label>
          <input
            id={`${containerId}-day`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            placeholder="DD"
            className="form-control date-input-field-control"
            value={currentValue.day}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              if (val.length <= 2) {
                handleFieldChange("day", val);
              }
            }}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-required={required || undefined}
            aria-invalid={status === "error" ? "true" : undefined}
            aria-describedby={describedBy}
            data-status={status}
            data-filled={currentValue.day.length > 0 ? "true" : undefined}
            data-readonly={readOnly ? "true" : undefined}
            data-disabled={disabled ? "true" : undefined}
          />
        </div>

        <div className="date-input-field-group">
          <label
            className="date-input-field-label"
            htmlFor={`${containerId}-month`}
          >
            Month
          </label>
          <input
            id={`${containerId}-month`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={2}
            placeholder="MM"
            className="form-control date-input-field-control"
            value={currentValue.month}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              if (val.length <= 2) {
                handleFieldChange("month", val);
              }
            }}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-required={required || undefined}
            aria-invalid={status === "error" ? "true" : undefined}
            aria-describedby={describedBy}
            data-status={status}
            data-filled={currentValue.month.length > 0 ? "true" : undefined}
            data-readonly={readOnly ? "true" : undefined}
            data-disabled={disabled ? "true" : undefined}
          />
        </div>

        <div className="date-input-field-group">
          <label
            className="date-input-field-label"
            htmlFor={`${containerId}-year`}
          >
            Year
          </label>
          <input
            id={`${containerId}-year`}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            placeholder="YYYY"
            className="form-control date-input-field-control"
            value={currentValue.year}
            onChange={(e) => {
              const val = e.target.value.replace(/[^0-9]/g, "");
              if (val.length <= 4) {
                handleFieldChange("year", val);
              }
            }}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-required={required || undefined}
            aria-invalid={status === "error" ? "true" : undefined}
            aria-describedby={describedBy}
            data-status={status}
            data-filled={currentValue.year.length > 0 ? "true" : undefined}
            data-readonly={readOnly ? "true" : undefined}
            data-disabled={disabled ? "true" : undefined}
          />
        </div>
      </div>

      {status && validationMessage && (
        <div
          id={statusId}
          className={`date-input-message ${
            status === "error"
              ? "date-input-message--error"
              : "date-input-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <span className="date-input-message__icon" aria-hidden="true">
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
