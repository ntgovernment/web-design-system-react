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
}

/**
 * Alert component for displaying important messages
 */
export const Alert = ({
  variant = 'primary',
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) => {
  const alertClass = dismissible 
    ? `alert alert-${variant} alert-dismissible fade show`
    : `alert alert-${variant}`;

  return (
    <div className={alertClass} role="alert">
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
