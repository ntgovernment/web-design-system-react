import React from "react";
import { Icon } from "../Icon";
import { Button } from "../Button";
import "./GlobalAlert.css";

export interface GlobalAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Alert variant
   * - info: Low-level alerts for minor problems or updates (solid blue)
   * - info-alt: Alternative information variant (light blue)
   * - warning: Events that pose a threat or seriously affect a service
   * - critical: Immediate, significant threats to the community
   */
  variant?: "info" | "info-alt" | "warning" | "critical";

  /**
   * Alert title
   */
  title: string;

  /**
   * Alert description content
   */
  description: string;

  /**
   * Optional dismiss button
   */
  dismissible?: boolean;

  /**
   * Dismiss button click handler
   */
  onDismiss?: () => void;

  /**
   * Dismiss button aria label
   */
  dismissLabel?: string;

  /**
   * Optional CTA button text
   */
  ctaText?: string;

  /**
   * CTA button click handler
   */
  ctaOnClick?: () => void;

  /**
   * CTA button href
   */
  ctaHref?: string;
}

/**
 * GlobalAlert component
 *
 * A prominent notification displayed across the entire site to communicate important information.
 * Sitting above the header at the top of a website, it informs users about something that affects
 * the entire website, service, or all users.
 *
 * Usage:
 * - Use sparingly as they are intrusive to a user's workflow
 * - Make copy clear and concise with key actionable information visible at a glance
 * - Include a link to follow up information or a call to action wherever possible
 * - Limit to one global alert per site, but up to three can be stacked if necessary
 */
export const GlobalAlert = ({
  variant = "info",
  title,
  description,
  dismissible = false,
  onDismiss,
  dismissLabel = "Dismiss alert",
  ctaText,
  ctaOnClick,
  ctaHref,
  className,
  ...props
}: GlobalAlertProps) => {
  const alertClass = `global-alert global-alert--${variant}${className ? ` ${className}` : ""}`;

  return (
    <div className={alertClass} role="alert" {...props}>
      <div className="global-alert__container">
        <div className="global-alert__content">
          <div className="global-alert__text">
            <div className="global-alert__title">{title}</div>
            <div className="global-alert__description">
              {typeof description === "string" ? (
                <span dangerouslySetInnerHTML={{ __html: description }} />
              ) : (
                description
              )}
            </div>
          </div>
          {ctaText && (
            <div className="global-alert__actions">
              {ctaHref ? (
                <a
                  href={ctaHref}
                  className="btn btn-secondary global-alert__cta"
                >
                  {ctaText}
                </a>
              ) : (
                <Button
                  variant="secondary"
                  label={ctaText}
                  onClick={ctaOnClick}
                  className="global-alert__cta"
                />
              )}
            </div>
          )}
        </div>
        {dismissible && (
          <button
            type="button"
            className="global-alert__dismiss"
            onClick={onDismiss}
            aria-label={dismissLabel}
          >
            <Icon icon="fa-light fa-xmark" />
          </button>
        )}
      </div>
    </div>
  );
};
