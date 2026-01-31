import { default as React } from 'react';
export interface CardProps {
    /**
     * Card title
     */
    title?: string;
    /**
     * Card content
     */
    children: React.ReactNode;
    /**
     * Card footer content
     */
    footer?: React.ReactNode;
    /**
     * Card variant
     */
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    /**
     * FontAwesome icon class (e.g., 'fa-light fa-chart-line')
     */
    icon?: string;
}
/**
 * Card component for displaying content
 */
export declare const Card: ({ title, children, footer, variant, icon, }: CardProps) => import("react/jsx-runtime").JSX.Element;
