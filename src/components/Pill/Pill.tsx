import React from "react";
import { Icon } from "../Icon";
import "./Pill.css";

export interface PillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The text label to display inside the pill
   */
  label: string;

  /**
   * Callback function triggered when the close button is clicked
   */
  onRemove: () => void;
}

/**
 * Pill component for displaying removable tags, filters, or selections
 */
export const Pill = ({
  label,
  onRemove,
  className,
  type = "button",
  ...props
}: PillProps) => {
  const pillClass = `pill${className ? ` ${className}` : ""}`;

  return (
    <button
      type={type}
      className={pillClass}
      onClick={onRemove}
      aria-label={`Remove ${label}`}
      {...props}
    >
      <span className="pill__label">{label}</span>
      <Icon icon="fa-light fa-times" className="pill__close" />
    </button>
  );
};
