import React from "react";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual style variant of the tag
   * @default 'default'
   */
  variant?: // Base variants (both themes)
    | "default"
    | "grey" // subtle variant
    | "green"
    | "blue"
    | "warning"
    | "red"
    // NTG Regional variants
    | "orange"
    | "ochre"
    | "coral"
    | "sky-blue"
    | "teal"
    | "rubine-red"
    | "bottle-green"
    // Central Agency variants
    | "central-green"
    | "central-orange"
    | "central-blue-light";

  /**
   * The text label to display inside the tag
   * Should be 2-3 words maximum using nouns or adjectives
   */
  label: string;
}

/**
 * Tag component for categorizing and differentiating content.
 * Tags are static (non-interactive) visual labels that help users
 * quickly find and identify relevant content.
 *
 * Key Guidelines:
 * - Keep labels short (2-3 words max)
 * - Use nouns/adjectives, not verbs
 * - No punctuation or icons
 * - Maximum 3-4 tags per content
 * - Present horizontally only
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
