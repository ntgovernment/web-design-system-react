import React from "react";
import "./QuickExit.css";

export interface QuickExitProps {
  /**
   * Main heading text for the component
   */
  heading?: string;

  /**
   * Descriptive text content
   */
  content?: string;

  /**
   * URL to redirect to when clicked (default: Bureau of Meteorology)
   */
  exitUrl?: string;

  /**
   * URL to redirect current tab to (default: Google)
   */
  redirectUrl?: string;

  /**
   * Additional CSS classes for the container
   */
  className?: string;

  /**
   * Custom click handler (called before redirect)
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
}

/**
 * QuickExit Component
 *
 * A floating bar that can be added to the top of a page that contains sensitive information.
 * When clicked, it allows users to quickly navigate away from a web page to hide what they were looking at.
 *
 * The component immediately redirects to an innocuous website (Bureau of Meteorology) in a new tab
 * and redirects the current tab to another innocuous site (Google). Neither tab will have an active
 * back button, though browsing history will remain intact.
 */
export const QuickExit = ({
  heading = "Quick exit",
  content = "Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger.",
  exitUrl = "https://www.bom.gov.au/",
  redirectUrl = "https://www.google.com/",
  className,
  onClick,
  ariaLabel = "Quick exit - click to leave this page immediately",
}: QuickExitProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Call custom click handler if provided
    if (onClick) {
      onClick(event);
    }

    // Open exit URL in new tab/window
    const newWindow = window.open(exitUrl, "_blank", "noopener,noreferrer");

    // If new window was successfully opened, replace current page
    if (newWindow) {
      // Replace current history entry so back button won't work
      window.location.replace(redirectUrl);
    } else {
      // Fallback: if popup was blocked, just redirect current page
      window.location.replace(exitUrl);
    }
  };

  const containerClass = `quick-exit${className ? ` ${className}` : ""}`;

  return (
    <div
      className={containerClass}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        // Allow activation with Enter or Space key
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
    >
      <div className="quick-exit__container">
        <div className="quick-exit__header">
          <div className="quick-exit__icon" aria-hidden="true">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16L16 4L4 16M6 14V26C6 26.5304 6.21071 27.0391 6.58579 27.4142C6.96086 27.7893 7.46957 28 8 28H12V22C12 21.4696 12.2107 20.9609 12.5858 20.5858C12.9609 20.2107 13.4696 20 14 20H18C18.5304 20 19.0391 20.2107 19.4142 20.5858C19.7893 20.9609 20 21.4696 20 22V28H24C24.5304 28 25.0391 27.7893 25.4142 27.4142C25.7893 27.0391 26 26.5304 26 26V14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="quick-exit__heading">{heading}</div>
        </div>
        <div className="quick-exit__content">{content}</div>
      </div>
    </div>
  );
};
