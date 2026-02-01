import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual style variant of the tag
   * @default 'default'
   */
  variant?: "default" | "grey" | "green" | "blue" | "warning" | "red";

  /**
   * The text label to display inside the tag
   */
  label: string;
}

/**
 * Tag component for displaying status indicators, categories, or labels
 */
export const Tag = ({
  variant = "default",
  label,
  className,
  ...props
}: TagProps) => {
  const tagClass = `tag tag-${variant}${className ? ` ${className}` : ""}`;

  return (
    <span className={tagClass} {...props}>
      {label}
    </span>
  );
};
