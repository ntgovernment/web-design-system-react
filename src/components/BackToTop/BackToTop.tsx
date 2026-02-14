import React, { useState, useEffect } from "react";
import "./BackToTop.css";

export interface BackToTopProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Label text to display next to the icon (default: "Back to top")
   */
  label?: string;
  /**
   * Scroll offset threshold in pixels before button becomes visible (default: 300)
   */
  scrollThreshold?: number;
  /**
   * Duration of smooth scroll animation in milliseconds (default: 800)
   */
  scrollDuration?: number;
  /**
   * Force the button to always be visible (useful for Storybook/demos, default: false)
   */
  forceVisible?: boolean;
  /**
   * Custom CSS class to apply to the button
   */
  className?: string;
}

/**
 * Back to Top component for scrolling to the top of the page.
 *
 * The component automatically shows/hides based on scroll position and smoothly
 * scrolls the page to the top when clicked.
 *
 * Features:
 * - Automatic visibility toggle based on scroll position
 * - Smooth scroll animation with customizable duration
 * - Accessible with ARIA labels and keyboard support
 * - Theme-aware styling using CSS variables
 * - Up arrow icon included
 */
export const BackToTop = ({
  label = "Back to top",
  scrollThreshold = 300,
  scrollDuration = 800,
  forceVisible = false,
  className: customClassName,
  onClick,
  ...props
}: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    if (forceVisible) {
      setIsVisible(true);
      return;
    }

    const toggleVisibility = () => {
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [scrollThreshold, forceVisible]);

  // Smooth scroll to top
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Call custom onClick handler if provided
    if (onClick) {
      onClick(e);
    }

    const scrollStep = window.scrollY / (scrollDuration / 16);

    const scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, -scrollStep);
      }
    }, 16);
  };

  const buttonClass = `btn back-to-top${customClassName ? ` ${customClassName}` : ""}`;

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      style={{
        display: isVisible || forceVisible ? "inline-flex" : "none",
      }}
      {...props}
    >
      <span className="back-to-top__text">{label}</span>
      <svg
        className="back-to-top__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 4.586L4.293 10.293a1 1 0 001.414 1.414L10 7.414l4.293 4.293a1 1 0 001.414-1.414L10 4.586z" />
      </svg>
    </button>
  );
};
