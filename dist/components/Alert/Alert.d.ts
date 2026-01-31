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
}
/**
 * Alert component for displaying important messages
 */
export declare const Alert: ({ variant, children, dismissible, onDismiss, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
