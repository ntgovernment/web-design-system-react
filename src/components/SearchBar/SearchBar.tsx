import React, { useId, useState } from "react";
import "./SearchBar.css";
import "./SearchBar-ntg.css";
import "./SearchBar-central.css";
import { Icon } from "../Icon";

export interface SearchBarProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "disabled" | "readOnly"
> {
  /**
   * Visual variant for the search bar.
   * @default "primary"
   */
  variant?: "primary" | "secondary";
  /**
   * Optional wrapper class for layout control.
   */
  wrapperClassName?: string;
  /**
   * Called when the search action is triggered.
   */
  onSearch?: (value: string) => void;
  /**
   * FontAwesome icon class used for the search icon.
   * @default "fa-light fa-search"
   */
  icon?: string;
  /**
   * Accessible label for the search action button.
   * @default "Run search"
   */
  searchButtonLabel?: string;
}

export const SearchBar = ({
  variant = "primary",
  wrapperClassName,
  onSearch,
  icon = "fa-light fa-search",
  searchButtonLabel = "Run search",
  id,
  className,
  required,
  value,
  defaultValue,
  onChange,
  onKeyDown,
  type = "search",
  ...props
}: SearchBarProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isControlled = value !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState<
    string | number | readonly string[] | undefined
  >(defaultValue);

  const currentValue = isControlled ? value : uncontrolledValue;
  const currentValueText =
    currentValue !== undefined && currentValue !== null
      ? `${currentValue}`
      : "";
  const isFilled = currentValueText.length > 0;

  const inputClass = `form-control search-bar__control${
    className ? ` ${className}` : ""
  }`;

  const groupClassName = `input-group search-bar__group`;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }

    onChange?.(event);
  };

  const handleSearch = () => {
    onSearch?.(currentValueText);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const inputValueProps = isControlled ? { value } : { defaultValue };

  return (
    <div
      className={`search-bar${wrapperClassName ? ` ${wrapperClassName}` : ""}`}
      role="search"
      data-variant={variant}
      data-filled={isFilled ? "true" : undefined}
    >
      <div className={groupClassName}>
        <input
          id={inputId}
          type={type}
          className={inputClass}
          required={required}
          aria-required={required || undefined}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          {...inputValueProps}
          {...props}
        />

        {variant === "primary" ? (
          <button
            className="btn search-bar__button"
            type="button"
            onClick={handleSearch}
            aria-label={searchButtonLabel}
          >
            <span className="search-bar__icon" aria-hidden="true">
              <Icon
                icon={icon}
                className="search-bar__icon-glyph"
                color="inherit"
                ariaHidden
              />
            </span>
          </button>
        ) : (
          <span
            className="input-group-text search-bar__addon"
            aria-hidden="true"
          >
            <span className="search-bar__icon">
              <Icon
                icon={icon}
                className="search-bar__icon-glyph"
                color="inherit"
                ariaHidden
              />
            </span>
          </span>
        )}
      </div>
    </div>
  );
};
