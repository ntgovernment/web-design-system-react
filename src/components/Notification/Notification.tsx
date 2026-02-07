import React from "react";
import { Icon } from "../Icon";

/**
 * Notification component props
 */
export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant/status type of the notification
   */
  variant?: "info" | "success" | "warning" | "danger";
  /**
   * The title/heading of the notification
   */
  title: string;
  /**
   * The message content of the notification
   */
  message: string;
}

/**
 * Notification component for displaying informational callouts with status indicators
 */
export const Notification = ({
  variant = "info",
  title,
  message,
  className,
  ...props
}: NotificationProps) => {
  // Map variants to FontAwesome icons
  const iconMap = {
    info: "fa-light fa-circle-info",
    success: "fa-light fa-circle-check",
    warning: "fa-light fa-triangle-exclamation",
    danger: "fa-light fa-circle-exclamation",
  };

  const notificationClass = `notification notification--${variant}${className ? ` ${className}` : ""}`;

  return (
    <div className={notificationClass} role="status" {...props}>
      <div className="notification__accent-bar" aria-hidden="true"></div>
      <div className="notification__content">
        <div className="notification__header">
          <div className="notification__icon" aria-hidden="true">
            <Icon icon={iconMap[variant]} />
          </div>
          <div className="notification__text">
            <div className="notification__title">{title}</div>
            <div className="notification__message">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
