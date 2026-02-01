import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The visual style variant of the tag
   * @default 'default'
   */
  variant?: 'default' | 'grey' | 'green' | 'blue' | 'warning' | 'red';
  
  /**
   * The content to display inside the tag
   */
  children?: React.ReactNode;
}

/**
 * Tag component for displaying status indicators, categories, or labels
 */
export const Tag = ({
  variant = 'default',
  children,
  className,
  ...props
}: TagProps) => {
  const tagClass = `tag tag-${variant}${className ? ` ${className}` : ''}`;
  
  return (
    <span className={tagClass} {...props}>
      {children}
    </span>
  );
};
