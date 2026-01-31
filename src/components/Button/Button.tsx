import React from 'react';

export interface ButtonProps {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  /**
   * Button size
   */
  size?: 'sm' | 'lg';
  /**
   * Is this the button disabled?
   */
  disabled?: boolean;
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * FontAwesome icon class (e.g., 'fa-light fa-home')
   */
  icon?: string;
  /**
   * Icon position relative to text
   */
  iconPosition?: 'left' | 'right';
  /**
   * Accessible label (required for icon-only buttons)
   */
  'aria-label'?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size,
  disabled = false,
  children,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) => {
  const sizeClass = size ? `btn-${size}` : '';
  const className = `btn btn-${variant} ${sizeClass}`.trim();

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <i className={`${icon} ${children ? 'me-2' : ''}`} aria-hidden="true"></i>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <i className={`${icon} ${children ? 'ms-2' : ''}`} aria-hidden="true"></i>
      )}
    </button>
  );
};
