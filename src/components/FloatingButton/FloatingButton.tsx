import React, { useEffect, useState, useRef } from "react";
import { Button } from "../Button";
import "./FloatingButton.css";

export interface FloatingButtonProps {
  /**
   * Button text label
   */
  label: string;

  /**
   * Icon to display on the left side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')
   */
  iconLeft?: string;

  /**
   * Icon to display on the right side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')
   */
  iconRight?: string;

  /**
   * Button variant (typically primary for floating buttons)
   */
  variant?: "primary" | "secondary";

  /**
   * Click handler for the button
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * ID or selector of the target button within the page content
   * When this element is visible in the viewport, the floating button will hide
   */
  targetButtonId?: string;

  /**
   * Whether to enable auto-hide/show behavior based on scroll
   * Defaults to true
   */
  autoHide?: boolean;

  /**
   * Additional CSS classes for the container
   */
  className?: string;

  /**
   * HTML button type attribute
   */
  type?: "button" | "submit" | "reset";

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * ARIA label for accessibility (optional, defaults to label)
   */
  ariaLabel?: string;
}

/**
 * FloatingButton Component
 *
 * A button banner anchored to the bottom of the screen that keeps important
 * calls to action front and centre for the user.
 *
 * The floating button automatically hides when the user scrolls to the target
 * button within the content, then reappears if they scroll back up.
 */
export const FloatingButton = ({
  label,
  iconLeft,
  iconRight,
  variant = "primary",
  onClick,
  targetButtonId,
  autoHide = true,
  className,
  type = "button",
  disabled = false,
  ariaLabel,
}: FloatingButtonProps) => {
  const [isHidden, setIsHidden] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetElementRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!autoHide || !targetButtonId) {
      return;
    }

    // Find the target element
    const targetElement =
      document.getElementById(targetButtonId) ||
      document.querySelector(targetButtonId);

    if (!targetElement) {
      console.warn(
        `FloatingButton: Target element with ID/selector "${targetButtonId}" not found.`,
      );
      return;
    }

    targetElementRef.current = targetElement;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Hide floating button when target is visible
          // Show floating button when target is not visible
          setIsHidden(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of target is visible
        rootMargin: "0px 0px -100px 0px", // Account for floating button height
      },
    );

    observerRef.current.observe(targetElement);

    // Cleanup observer on unmount
    return () => {
      if (observerRef.current && targetElementRef.current) {
        observerRef.current.unobserve(targetElementRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [targetButtonId, autoHide]);

  const containerClass = `floating-button${isHidden ? " floating-button--hidden" : ""}${className ? ` ${className}` : ""}`;

  return (
    <div
      className={containerClass}
      role="complementary"
      aria-label="Floating action button"
    >
      <div className="floating-button__container">
        <div className="floating-button__button-wrapper">
          <Button
            variant={variant}
            label={label}
            iconLeft={iconLeft}
            iconRight={iconRight}
            onClick={onClick}
            type={type}
            disabled={disabled}
            aria-label={ariaLabel || label}
          />
        </div>
      </div>
    </div>
  );
};
