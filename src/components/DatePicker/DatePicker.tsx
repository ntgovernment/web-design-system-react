import React, { useId, useState, useRef, useEffect } from "react";
import "./DatePicker.css";
import "./DatePicker-ntg.css";
import "./DatePicker-central.css";
import { Icon } from "../Icon";

export interface DatePickerProps {
  /**
   * DatePicker label shown above the field.
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
   * Callback when date is selected
   */
  onChange?: (date: Date | null) => void;
  /**
   * Currently selected date value
   */
  value?: Date | null;
  /**
   * Default date value
   */
  defaultValue?: Date | null;
  /**
   * Minimum selectable date
   */
  min?: Date;
  /**
   * Maximum selectable date
   */
  max?: Date;
  /**
   * Optional wrapper class for layout control.
   */
  wrapperClassName?: string;
  /**
   * HTML id attribute
   */
  id?: string;
  /**
   * CSS class name for the input element
   */
  className?: string;
  /**
   * Whether the field is required
   */
  required?: boolean;
  /**
   * Whether the field is disabled
   */
  disabled?: boolean;
  /**
   * Whether the field is read-only
   */
  readOnly?: boolean;
  /**
   * HTML name attribute
   */
  name?: string;
  /**
   * HTML placeholder attribute
   */
  placeholder?: string;
  /**
   * HTML aria-label attribute
   */
  "aria-label"?: string;
  /**
   * HTML aria-labelledby attribute
   */
  "aria-labelledby"?: string;
}

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export const DatePicker = ({
  label,
  helperText,
  requiredIndicator = "(Required)",
  validationState,
  validationMessage,
  onChange,
  value,
  defaultValue,
  min,
  max,
  wrapperClassName,
  id,
  className,
  required,
  disabled,
  readOnly,
  name,
  placeholder = "DD/MM/YYYY",
}: DatePickerProps) => {
  const generatedId = useId();
  const datePickerId = id ?? generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const [displayMonth, setDisplayMonth] = useState(
    value instanceof Date
      ? value
      : defaultValue instanceof Date
        ? defaultValue
        : new Date(),
  );
  const [inputValue, setInputValue] = useState<string>("");
  const [tempSelectedDate, setTempSelectedDate] = useState<Date | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize input value
  useEffect(() => {
    if (value instanceof Date) {
      setInputValue(formatDate(value));
      setDisplayMonth(value);
      setTempSelectedDate(value);
    } else if (defaultValue instanceof Date) {
      setInputValue(formatDate(defaultValue));
      setDisplayMonth(defaultValue);
      setTempSelectedDate(defaultValue);
    }
  }, [value, defaultValue]);

  const status =
    validationState === "error"
      ? "error"
      : validationState === "success"
        ? "success"
        : undefined;

  const helperId = helperText ? `${datePickerId}-help` : undefined;
  const statusId =
    validationMessage && status ? `${datePickerId}-status` : undefined;
  const describedBy =
    [helperId, statusId].filter(Boolean).join(" ") || undefined;

  const datePickerClassName = `${className ? ` ${className}` : ""}`;

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "Escape":
          setIsOpen(false);
          inputRef.current?.focus();
          event.preventDefault();
          break;
        case "ArrowLeft":
          handlePreviousMonth();
          event.preventDefault();
          break;
        case "ArrowRight":
          handleNextMonth();
          event.preventDefault();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, displayMonth]);

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function parseDate(dateString: string): Date | null {
    const parts = dateString.split("/");
    if (parts.length !== 3) return null;

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
    if (month < 1 || month > 12) return null;
    if (day < 1 || day > 31) return null;

    const date = new Date(year, month - 1, day);
    return date.getMonth() === month - 1 && date.getDate() === day
      ? date
      : null;
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.length === 10) {
      const parsed = parseDate(newValue);
      if (parsed && isValidDate(parsed)) {
        onChange?.(parsed);
        setDisplayMonth(parsed);
      }
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === " ") {
      setIsOpen(true);
      e.preventDefault();
    }
  }

  function handleCalendarToggle() {
    setIsOpen(!isOpen);
  }

  function isValidDate(date: Date): boolean {
    if (min && date < min) return false;
    if (max && date > max) return false;
    return true;
  }

  function handleSelectDate(date: Date) {
    if (isValidDate(date)) {
      // Just set the temporary selection, don't close calendar yet
      setTempSelectedDate(date);
    }
  }

  function handleConfirmDate() {
    if (tempSelectedDate) {
      setInputValue(formatDate(tempSelectedDate));
      onChange?.(tempSelectedDate);
      setIsOpen(false);
      setDisplayMonth(tempSelectedDate);
    }
  }

  function handleCancelCalendar() {
    setIsOpen(false);
    // Reset temp selection to current value
    setTempSelectedDate(value instanceof Date ? value : null);
  }

  function handlePreviousMonth() {
    setDisplayMonth(
      new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1),
    );
  }

  function handleNextMonth() {
    setDisplayMonth(
      new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1),
    );
  }

  function handlePreviousYear() {
    setDisplayMonth(
      new Date(displayMonth.getFullYear() - 1, displayMonth.getMonth(), 1),
    );
  }

  function handleNextYear() {
    setDisplayMonth(
      new Date(displayMonth.getFullYear() + 1, displayMonth.getMonth(), 1),
    );
  }

  function getCalendarDays(): CalendarDay[] {
    const year = displayMonth.getFullYear();
    const month = displayMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const adjustedFirstDay =
      firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1; // Monday is 0

    const days: CalendarDay[] = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = adjustedFirstDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
      });
    }

    // Current month days
    const today = new Date();
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
      const isSelected =
        tempSelectedDate instanceof Date &&
        date.getDate() === tempSelectedDate.getDate() &&
        date.getMonth() === tempSelectedDate.getMonth() &&
        date.getFullYear() === tempSelectedDate.getFullYear();

      days.push({
        date,
        isCurrentMonth: true,
        isToday,
        isSelected,
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        isToday: false,
        isSelected: false,
      });
    }

    return days;
  }

  const calendarDays = getCalendarDays();
  const monthName = displayMonth.toLocaleString("en-US", { month: "long" });
  const year = displayMonth.getFullYear();
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div
      className={`date-picker-field${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
      ref={containerRef}
    >
      {label && (
        <div className="date-picker-label-row">
          <label className="date-picker-label" htmlFor={datePickerId}>
            {label}
          </label>
          {required && (
            <span className="date-picker-required">{requiredIndicator}</span>
          )}
        </div>
      )}

      {helperText && (
        <div className="date-picker-helper" id={helperId}>
          {helperText}
        </div>
      )}

      <div className="date-picker-input-wrapper">
        <input
          ref={inputRef}
          id={datePickerId}
          type="text"
          className={`form-control date-picker-input${datePickerClassName}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFocus={() => !disabled && !readOnly && setIsOpen(true)}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          name={name}
          aria-required={required || undefined}
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={describedBy}
          data-status={status}
          data-filled={inputValue.length > 0 ? "true" : undefined}
          data-readonly={readOnly ? "true" : undefined}
          data-disabled={disabled ? "true" : undefined}
        />
        <button
          className="date-picker-button"
          onClick={handleCalendarToggle}
          disabled={disabled}
          type="button"
          aria-label="Open calendar"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-pressed={isOpen}
        >
          <div className="date-picker-icon">
            <Icon
              icon="fa-light fa-calendar"
              color="currentColor"
              size="20px"
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className="date-picker-dropdown"
          role="dialog"
          aria-label="Calendar"
        >
          <div className="calendar-header">
            <button
              className="calendar-nav-button calendar-nav-previous-year"
              onClick={handlePreviousYear}
              type="button"
              aria-label="Previous year"
            >
              <Icon icon="fa-light fa-chevrons-left" size="16px" />
            </button>
            <button
              className="calendar-nav-button calendar-nav-previous-month"
              onClick={handlePreviousMonth}
              type="button"
              aria-label="Previous month"
            >
              <Icon icon="fa-light fa-chevron-left" size="16px" />
            </button>

            <div className="calendar-month-year">
              <span className="calendar-month">{monthName}</span>
              <span className="calendar-year">{year}</span>
            </div>

            <button
              className="calendar-nav-button calendar-nav-next-month"
              onClick={handleNextMonth}
              type="button"
              aria-label="Next month"
            >
              <Icon icon="fa-light fa-chevron-right" size="16px" />
            </button>
            <button
              className="calendar-nav-button calendar-nav-next-year"
              onClick={handleNextYear}
              type="button"
              aria-label="Next year"
            >
              <Icon icon="fa-light fa-chevrons-right" size="16px" />
            </button>
          </div>

          <div className="calendar-weekdays">
            {weekDays.map((day) => (
              <div key={day} className="calendar-weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-dates">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                className={`calendar-date ${
                  !day.isCurrentMonth ? "calendar-date--other-month" : ""
                } ${day.isToday ? "calendar-date--today" : ""} ${
                  day.isSelected ? "calendar-date--selected" : ""
                }`}
                onClick={() => day.isCurrentMonth && handleSelectDate(day.date)}
                disabled={!day.isCurrentMonth || !isValidDate(day.date)}
                type="button"
                aria-label={`${day.date.toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}`}
                aria-current={day.isToday ? "date" : undefined}
              >
                <span className="calendar-date-number">
                  {day.date.getDate()}
                </span>
                {day.isToday && <span className="calendar-date-dot"></span>}
              </button>
            ))}
          </div>

          <div className="calendar-actions">
            <button
              className="btn btn-secondary"
              onClick={handleCancelCalendar}
              type="button"
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={handleConfirmDate}
              disabled={!(tempSelectedDate instanceof Date)}
              type="button"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {status && validationMessage && (
        <div
          id={statusId}
          className={`date-picker-message ${
            status === "error"
              ? "date-picker-message--error"
              : "date-picker-message--success"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live={status === "error" ? "assertive" : "polite"}
        >
          <span className="date-picker-message__icon" aria-hidden="true">
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
