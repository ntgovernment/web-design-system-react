import { default as React } from 'react';
export interface IconProps {
    /**
     * FontAwesome icon class (e.g., 'fa-light fa-home', 'fa-regular fa-user')
     */
    icon: string;
    /**
     * Icon color (CSS color value or 'inherit' to use parent color)
     */
    color?: string;
    /**
     * Icon size (CSS font-size value)
     */
    size?: string;
    /**
     * Additional CSS classes (e.g., 'me-2', 'ms-2' for spacing)
     */
    className?: string;
    /**
     * ARIA hidden attribute (defaults to true for decorative icons)
     */
    ariaHidden?: boolean;
    /**
     * ARIA label for accessibility (use for standalone icons with meaning)
     */
    ariaLabel?: string;
    /**
     * Click handler for interactive icons
     */
    onClick?: () => void;
    /**
     * Custom inline styles
     */
    style?: React.CSSProperties;
}
/**
 * Icon component for rendering FontAwesome icons
 */
export declare const Icon: ({ icon, color, size, className, ariaHidden, ariaLabel, onClick, style, }: IconProps) => import("react/jsx-runtime").JSX.Element;
