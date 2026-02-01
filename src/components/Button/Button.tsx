import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button size
   */
  size?: 'sm';
  /**
   * FontAwesome icon class (e.g., 'fa-light fa-home')
   */
  icon?: string;
  /**
   * Icon position relative to text
   */
  iconPosition?: 'left' | 'right';
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
  className: customClassName,
  ...props
}: ButtonProps) => {
  const sizeClass = size ? `btn-${size}` : '';
  const className = `btn btn-${variant} ${sizeClass} ${customClassName || ''}`.trim();

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
