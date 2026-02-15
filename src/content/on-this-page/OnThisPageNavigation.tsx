import React from "react";
import { Icon } from "../../components/Icon";
import "./OnThisPageNavigation.css";

export interface OnThisPageNavigationItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
  level?: number; // 0 for root, 1 for first sub-level, etc.
  children?: OnThisPageNavigationItem[];
}

export interface OnThisPageNavigationProps extends React.HTMLAttributes<HTMLElement> {
  heading?: string;
  items?: OnThisPageNavigationItem[];
  ariaLabel?: string;
}

const defaultItems: OnThisPageNavigationItem[] = [
  {
    label: "Application overview",
    href: "#application-overview",
    level: 0,
  },
  {
    label: "Eligibility and requirements",
    href: "#eligibility",
    level: 0,
    children: [
      {
        label: "Income thresholds",
        href: "#income-thresholds",
        level: 1,
      },
      {
        label: "Asset limits",
        href: "#asset-limits",
        level: 1,
        children: [
          {
            label: "Property valuations",
            href: "#property-valuations",
            level: 2,
          },
        ],
      },
    ],
  },
  {
    label: "Supporting documents",
    href: "#supporting-documents",
    level: 0,
  },
  { label: "Fees and processing times", href: "#fees", level: 0 },
  { label: "Contact and help", href: "#contact", level: 0 },
];

const resolveAriaLabel = (heading?: string, ariaLabel?: string) =>
  ariaLabel || heading || "On this page";

const renderItem = (
  item: OnThisPageNavigationItem,
  index: number,
  level: number = 0,
): React.ReactNode => {
  const key = `${item.label}-${index}-${level}`;
  const itemLevel = item.level ?? level;
  const linkClassName =
    "content-on-this-page__link link-underline link-underline-opacity-100 link-offset-2";
  const itemStyle = {
    paddingLeft: itemLevel > 0 ? `${itemLevel * 16}px` : undefined,
  };

  return (
    <li
      className="content-on-this-page__item"
      key={key}
      style={itemStyle}
      data-level={itemLevel}
    >
      <div className="content-on-this-page__content">
        {itemLevel > 0 ? (
          <Icon
            icon="fa-light fa-chevron-right"
            className="content-on-this-page__chevron"
            aria-hidden="true"
          />
        ) : null}
        {item.href ? (
          <a
            className={linkClassName}
            href={item.href}
            aria-current={item.isCurrent ? "location" : undefined}
          >
            {item.label}
          </a>
        ) : (
          <span
            className="content-on-this-page__text"
            aria-current={item.isCurrent ? "location" : undefined}
          >
            {item.label}
          </span>
        )}
      </div>
      {item.children && item.children.length > 0 ? (
        <ul className="content-on-this-page__sublist">
          {item.children.map((child, childIndex) =>
            renderItem(child, childIndex, itemLevel + 1),
          )}
        </ul>
      ) : null}
    </li>
  );
};

export const OnThisPageNavigation = ({
  heading = "On this page",
  items = defaultItems,
  ariaLabel,
  className,
  ...props
}: OnThisPageNavigationProps) => {
  const wrapperClassName = `content-on-this-page${className ? ` ${className}` : ""}`;
  const resolvedAriaLabel = resolveAriaLabel(heading, ariaLabel);

  return (
    <nav aria-label={resolvedAriaLabel} className={wrapperClassName} {...props}>
      {heading ? (
        <h2 className="content-on-this-page__heading">{heading}</h2>
      ) : null}
      <ul className="content-on-this-page__list">
        {items.map((item, index) => renderItem(item, index, 0))}
      </ul>
    </nav>
  );
};
