import { default as React } from 'react';
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
export declare const Button: ({ variant, size, disabled, children, onClick, type, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
