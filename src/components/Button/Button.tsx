import React from "react";
import { Icon } from "../Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Button size
   */
  size?: "sm";
  /**
   * Button text label
   */
  label?: string;
  /**
   * Icon to display on the left side (FontAwesome icon class, e.g., 'fa-light fa-home')
   */
  iconLeft?: string;
  /**
   * Icon to display on the right side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')
   */
  iconRight?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "primary",
  size,
  disabled = false,
  label,
  onClick,
  type = "button",
  iconLeft,
  iconRight,
  className: customClassName,
  ...props
}: ButtonProps) => {
  const sizeClass = size ? `btn-${size}` : "";
  const className =
    `btn btn-${variant} ${sizeClass} ${customClassName || ""}`.trim();

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {iconLeft && <Icon icon={iconLeft} className={label ? "me-2" : ""} />}
      {label}
      {iconRight && <Icon icon={iconRight} className={label ? "ms-2" : ""} />}
    </button>
  );
};
