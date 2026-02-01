import React from "react";
import "./Callout.css";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The heading text displayed at the top of the callout (optional) */
  heading?: string;
  /** The main content text displayed below the heading */
  content: string;
}

/**
 * Callout component for displaying informational messages with a prominent left border.
 */
export const Callout = ({
  heading,
  content,
  className,
  ...props
}: CalloutProps) => {
  const calloutClass = `callout${className ? ` ${className}` : ""}`;

  return (
    <div className={calloutClass} {...props}>
      <div className="callout__content">
        <div className="callout__text-container">
          {heading && <div className="callout__heading">{heading}</div>}
          <div className="callout__text">{content}</div>
        </div>
      </div>
    </div>
  );
};
