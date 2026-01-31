import { default as React } from 'react';
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
     * FontAwesome icon class (e.g., 'fa-light fa-circle-check')
     */
    icon?: string;
}
/**
 * Alert component for displaying important messages
 */
export declare const Alert: ({ variant, children, dismissible, onDismiss, icon, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
