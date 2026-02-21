import React, { useState, useRef, useEffect } from "react";
import "./Breadcrumbs.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsContentProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[];
  variant?: "default" | "truncated" | "mobile";
  ariaLabel?: string;
}

const defaultItems: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Page 1", href: "/services" },
  { label: "Parent page", href: "/services/permits" },
  { label: "Current page", isCurrent: true },
];

const normalizeItems = (items: BreadcrumbItem[]) => {
  const currentIndex = items.findIndex((item) => item.isCurrent);
  const resolvedCurrentIndex =
    currentIndex >= 0 ? currentIndex : Math.max(items.length - 1, 0);

  return items.map((item, index) => ({
    ...item,
    isCurrent: index === resolvedCurrentIndex,
  }));
};

const getParentItem = (items: BreadcrumbItem[]) => {
  const currentIndex = items.findIndex((item) => item.isCurrent);
  const parentIndex = Math.max(currentIndex - 1, 0);
  return items[parentIndex];
};

export const BreadcrumbsContent = ({
  items = defaultItems,
  variant = "default",
  ariaLabel = "Breadcrumb",
  className,
  ...props
}: BreadcrumbsContentProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const normalizedItems = normalizeItems(items);
  const currentIndex = normalizedItems.findIndex((item) => item.isCurrent);
  const currentItem =
    normalizedItems[currentIndex] ??
    normalizedItems[normalizedItems.length - 1];
  const firstItem = normalizedItems[0];

  const renderItem = (item: BreadcrumbItem, index: number) => {
    const isCurrent = item.isCurrent || !item.href;
    const itemClassName = `breadcrumb-item${isCurrent ? " active" : ""}`;

    return (
      <li
        key={`${item.label}-${index}`}
        className={itemClassName}
        aria-current={isCurrent ? "page" : undefined}
      >
        {isCurrent ? (
          <span className="content-breadcrumbs__current">{item.label}</span>
        ) : (
          <a className="content-breadcrumbs__link" href={item.href}>
            {item.label}
          </a>
        )}
      </li>
    );
  };

  const renderTruncatedMenu = (menuItems: BreadcrumbItem[]) => {
    if (menuItems.length === 0) {
      return null;
    }

    return (
      <li className="breadcrumb-item content-breadcrumbs__menu-item">
        <details
          className="content-breadcrumbs__menu"
          ref={menuRef}
          open={isMenuOpen}
          onToggle={(e) => setIsMenuOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary
            className="content-breadcrumbs__menu-trigger"
            aria-label="Open breadcrumb menu"
          >
            <svg
              className="content-breadcrumbs__menu-icon"
              aria-hidden="true"
              viewBox="0 0 17 3"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8 1.2C16.8 1.86375 16.2637 2.4 15.6 2.4C14.9362 2.4 14.4 1.86375 14.4 1.2C14.4 0.53625 14.9362 0 15.6 0C16.2637 0 16.8 0.53625 16.8 1.2ZM9.6 1.2C9.6 1.86375 9.06375 2.4 8.4 2.4C7.73625 2.4 7.2 1.86375 7.2 1.2C7.2 0.53625 7.73625 0 8.4 0C9.06375 0 9.6 0.53625 9.6 1.2ZM1.2 2.4C0.53625 2.4 0 1.86375 0 1.2C0 0.53625 0.53625 0 1.2 0C1.86375 0 2.4 0.53625 2.4 1.2C2.4 1.86375 1.86375 2.4 1.2 2.4Z"
                fill="currentColor"
              />
            </svg>
          </summary>
          <ul className="content-breadcrumbs__menu-list">
            {menuItems.map((item, index) => (
              <li
                key={`${item.label}-${index}`}
                className="content-breadcrumbs__menu-entry"
              >
                {item.href ? (
                  <a
                    className="content-breadcrumbs__menu-link"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="content-breadcrumbs__menu-label">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  };

  const renderDefaultItems = () => normalizedItems.map(renderItem);

  const renderMobileItems = () => {
    const parentItem = getParentItem(normalizedItems);
    if (!parentItem) {
      return null;
    }

    // In mobile view, show home and parent to render the divider naturally
    const homeItem = firstItem || { label: "Home", href: "/" };
    const mobileParent = parentItem.isCurrent
      ? parentItem
      : { ...parentItem, isCurrent: false };

    return (
      <>
        {renderItem(homeItem, 0)}
        {renderItem(mobileParent, 1)}
      </>
    );
  };

  const renderTruncatedItems = () => {
    if (!firstItem || !currentItem) {
      return null;
    }

    const middleItems = normalizedItems.slice(1, currentIndex);
    const isSingleItem = currentIndex <= 0;

    return (
      <>
        {renderItem(firstItem, 0)}
        {renderTruncatedMenu(middleItems)}
        {isSingleItem ? null : renderItem(currentItem, currentIndex)}
      </>
    );
  };

  const breadcrumbClassName = `breadcrumb content-breadcrumbs__list`;
  const wrapperClassName = `content-breadcrumbs${
    className ? ` ${className}` : ""
  }`;

  return (
    <nav
      aria-label={ariaLabel}
      className={wrapperClassName}
      data-variant={variant}
      {...props}
    >
      <ol className={breadcrumbClassName}>
        {variant === "mobile"
          ? renderMobileItems()
          : variant === "truncated"
            ? renderTruncatedItems()
            : renderDefaultItems()}
      </ol>
    </nav>
  );
};
