import React from 'react';

export interface AlertProps {
  /**
   * Alert variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  /**
   * Alert content
   */
  children: React.ReactNode;
  /**
   * Is dismissible
   */
  dismissible?: boolean;
  /**
   * On dismiss callback
   */
  onDismiss?: () => void;
  /**
   * FontAwesome icon class (e.g., 'fa-solid fa-circle-check')
   */
  icon?: string;
}

/**
 * Alert component for displaying important messages
 */
export const Alert = ({
  variant = 'primary',
  children,
  dismissible = false,
  onDismiss,
  icon,
}: AlertProps) => {
  const alertClass = dismissible 
    ? `alert alert-${variant} alert-dismissible fade show`
    : `alert alert-${variant}`;

  return (
    <div className={alertClass} role="alert">
      {icon && <i className={`${icon} me-2`} aria-hidden="true"></i>}
      {children}
      {dismissible && (
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onDismiss}
        ></button>
      )}
    </div>
  );
};
