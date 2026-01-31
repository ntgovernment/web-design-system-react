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
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button type
   */
  type?: 'button' | 'submit' | 'reset';
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
      {children}
    </button>
  );
};
