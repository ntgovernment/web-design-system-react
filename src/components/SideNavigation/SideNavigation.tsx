import React, { useState } from "react";
import "./SideNavigation.css";
import { Icon } from "../Icon";

export interface SideNavigationItemProps {
  /** Unique identifier for the item */
  id: string;
  /** Display label for the navigation item */
  label: string;
  /** Navigation URL or path */
  href?: string;
  /** Whether this item is the current/active page */
  isCurrent?: boolean;
  /** Whether this item is expandable */
  isExpandable?: boolean;
  /** Whether the item is initially expanded */
  isExpanded?: boolean;
  /** Nested child items */
  children?: SideNavigationItemProps[];
  /** Optional CSS class name */
  className?: string;
  /** Callback when item is clicked */
  onClick?: (id: string) => void;
}

export interface SideNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** Section header title displayed at the top */
  sectionTitle: string;
  /** Array of navigation items */
  items: SideNavigationItemProps[];
  /** Optional CSS class name */
  className?: string;
  /** Callback when navigation item is selected */
  onItemClick?: (itemId: string) => void;
  /** Callback when item is expanded/collapsed */
  onToggleExpand?: (itemId: string, isExpanded: boolean) => void;
  /** Icon class for expandable items (default: FontAwesome chevron) */
  expandIconClass?: string;
}

/**
 * Navigation item component that renders a single navigation link with optional expand/collapse
 */
const SideNavigationItem: React.FC<
  SideNavigationItemProps & {
    onToggleExpand?: (id: string, expanded: boolean) => void;
    onItemClick?: (id: string) => void;
    expandIconClass?: string;
  }
> = ({
  id,
  label,
  href = "#",
  isCurrent = false,
  isExpandable = false,
  isExpanded = false,
  children = [],
  className,
  expandIconClass = "fa-light fa-chevron-down",
  onToggleExpand,
  onItemClick,
  onClick,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const newState = !expanded;
    setExpanded(newState);
    onToggleExpand?.(id, newState);
  };

  const handleItemClick = (e: React.MouseEvent) => {
    if (onItemClick || onClick) {
      e.preventDefault();
    }
    onClick?.(id);
    onItemClick?.(id);
  };

  const itemClass = `side-nav__item${isCurrent ? " side-nav__item--current" : ""}${className ? ` ${className}` : ""}`;

  return (
    <div className="side-nav__item-wrapper">
      <div className={itemClass}>
        <a
          href={href}
          className="side-nav__link"
          onClick={handleItemClick}
          aria-current={isCurrent ? "page" : undefined}
        >
          <span className="side-nav__label">{label}</span>
        </a>
        {isExpandable && (
          <button
            className={`side-nav__expand-btn ${expanded ? "side-nav__expand-btn--expanded" : ""}`}
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-label={`Toggle ${label} submenu`}
            type="button"
          >
            <Icon className="side-nav__expand-icon" icon={expandIconClass} />
          </button>
        )}
      </div>

      {isExpandable && expanded && children && children.length > 0 && (
        <div className="side-nav__submenu">
          {children.map((child) => (
            <SideNavigationItem
              key={child.id}
              {...child}
              onToggleExpand={onToggleExpand}
              onItemClick={onItemClick}
              expandIconClass={expandIconClass}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Side Navigation component for navigating related pages within a content section.
 *
 * Features:
 * - Section header with icon
 * - List of navigation items with current/active state
 * - Optional expandable items with nested children
 * - Theme-aware styling using design tokens
 * - Accessible keyboard navigation and ARIA labels
 *
 * Usage:
 * ```tsx
 * <SideNavigation
 *   sectionTitle="Services"
 *   items={[
 *     { id: "service-1", label: "Service One", href: "/services/one", isCurrent: true },
 *     { id: "service-2", label: "Service Two", href: "/services/two" },
 *   ]}
 *   onItemClick={(id) => console.log("Clicked:", id)}
 * />
 * ```
 */
export const SideNavigation = ({
  sectionTitle,
  items,
  className: customClassName,
  onItemClick,
  onToggleExpand,
  expandIconClass = "fa-light fa-chevron-down",
  ...props
}: SideNavigationProps) => {
  const className = `side-nav${customClassName ? ` ${customClassName}` : ""}`;

  return (
    <nav className={className} {...props}>
      {/* Section Header */}
      <div className="side-nav__header">
        <Icon
          className="side-nav__header-icon"
          icon="fa-light fa-chevron-right"
        />
        <h3 className="side-nav__header-title">{sectionTitle}</h3>
      </div>

      {/* Navigation Items */}
      <div className="side-nav__content">
        {items.map((item) => (
          <SideNavigationItem
            key={item.id}
            {...item}
            onToggleExpand={onToggleExpand}
            onItemClick={onItemClick}
            expandIconClass={expandIconClass}
          />
        ))}
      </div>
    </nav>
  );
};
