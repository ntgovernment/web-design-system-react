import React from "react";
import "./Card.css";
import { Image } from "../Image";
import { Tag } from "../Tag";
import { Button } from "../Button";
import { Icon } from "../Icon";
import placeholderImage from "../../assets/images/placeholder.webp";

export interface CardHeaderMeta {
  /**
   * Tag/label (e.g., "News", "Event") - can be a Tag component or ReactNode
   */
  tag?: React.ReactNode;
  /**
   * Date string (e.g., "17 Feb 2025")
   */
  date?: string;
}

export interface CardProps {
  /**
   * Show/hide image section
   */
  showImage?: boolean;
  /**
   * Rich media content (Image component or ReactNode) displayed at top of card
   */
  media?: React.ReactNode;
  /**
   * Image URL for card media
   */
  imageURL?: string;
  /**
   * Aspect ratio for media container
   */
  mediaAspectRatio?: "16:9";
  /**
   * Show/hide header metadata section
   */
  showMeta?: boolean;
  /**
   * Card header metadata with tag and date
   * Can be a CardHeaderMeta object or custom ReactNode
   */
  header?: CardHeaderMeta | React.ReactNode;
  /**
   * Tag labels (comma-separated, with optional :variant suffix, e.g., "News:info, Event:success")
   */
  tagLabel?: string;
  /**
   * Date label for header metadata
   */
  dateLabel?: string;
  /**
   * Card title
   */
  title: string;
  /**
   * Show/hide title icon
   */
  showTitleIcon?: boolean;
  /**
   * Title icon (FontAwesome class)
   */
  titleIcon?: string;
  /**
   * FontAwesome icon class for title (e.g., 'fa-light fa-chart-line')
   * @deprecated Use composition with Icon component instead
   */
  icon?: string;
  /**
   * Card content/description
   */
  description: React.ReactNode;
  /**
   * Show/hide footer section
   */
  showFooter?: boolean;
  /**
   * Card footer content (Button component or ReactNode)
   */
  footer?: React.ReactNode;
  /**
   * Action button text label
   */
  actionText?: string;
  /**
   * Action button icon (FontAwesome class)
   */
  actionIcon?: string;
  /**
   * Horizontal layout - image on the side (responsive, stacks on mobile)
   */
  horizontal?: boolean;
  /**
   * Make the entire card clickable/linkable
   */
  clickable?: boolean;
  /**
   * URL for clickable card (when clickable is true)
   */
  href?: string;
  /**
   * Additional CSS classes (e.g., 'h-100' for equal height in grid)
   */
  className?: string;
  /**
   * Inline styles for the card
   */
  style?: React.CSSProperties;
  /**
   * Card variant - DEPRECATED: Use composition with Tag/Notification components instead
   * @deprecated
   */
  variant?: "full";
  /**
   * ARIA label for clickable cards (required for accessibility when clickable is true)
   */
  ariaLabel?: string;
}

/**
 * Card component for displaying content with optional media, header, and footer
 *
 * Supports flexible composition with Image, Tag, Button, and other components.
 * Can be used for news articles, product cards, content listings, etc.
 */
export const Card = ({
  showImage = true,
  media,
  imageURL = placeholderImage,
  mediaAspectRatio = "16:9",
  showMeta = true,
  header,
  tagLabel = "News:blue",
  dateLabel = "17 Feb 2025",
  title,
  showTitleIcon = false,
  titleIcon = "fa-light fa-info",
  icon,
  description,
  showFooter = true,
  footer,
  actionText = "Find out more",
  actionIcon = "fa-solid fa-arrow-right",
  horizontal = false,
  clickable = false,
  href,
  className = "",
  style,
  variant,
  ariaLabel,
}: CardProps) => {
  // Make card clickable if footer is not shown
  const isClickable = clickable || !showFooter;

  // Build card classes
  const cardClasses = [
    "card",
    horizontal ? "card--horizontal" : "",
    isClickable ? "card--clickable" : "",
    variant ? `text-bg-${variant}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Media aspect ratio class
  const mediaClasses = ["card__media", `card__media--${mediaAspectRatio}`]
    .filter(Boolean)
    .join(" ");

  // Card wrapper element (div or a)
  const CardWrapper = isClickable && href ? "a" : "div";
  const wrapperProps: React.HTMLAttributes<HTMLDivElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    className: cardClasses,
    style,
    ...(isClickable && href ? { href, "aria-label": ariaLabel || title } : {}),
    ...(isClickable ? { tabIndex: 0, role: href ? "link" : "button" } : {}),
  };

  // Parse tag labels
  const parseTags = (tagLabelStr: string) => {
    if (!tagLabelStr || tagLabelStr.trim() === "") return [];

    return tagLabelStr.split(",").map((tagStr, index) => {
      const trimmed = tagStr.trim();
      const parts = trimmed.split(":");
      const label = parts[0];
      const variant = (parts[1] as any) || "default";

      return <Tag key={index} variant={variant} label={label} />;
    });
  };

  // Render header metadata (tag and date)
  const renderHeaderMeta = () => {
    if (!showMeta) return null;

    // If header is a ReactNode, render it directly
    if (header && !isCardHeaderMeta(header)) {
      return <div className="card__header-meta">{header}</div>;
    }

    // If header is CardHeaderMeta object
    if (header && isCardHeaderMeta(header)) {
      const { tag, date } = header;
      if (!tag && !date) return null;

      return (
        <div className="card__header-meta">
          {tag && <div className="card__header-meta-tags">{tag}</div>}
          {date && <div className="card__header-meta-date">{date}</div>}
        </div>
      );
    }

    // Use tagLabel and dateLabel props
    const tags = parseTags(tagLabel);
    const hasContent = tags.length > 0 || dateLabel;

    if (!hasContent) return null;

    return (
      <div className="card__header-meta">
        {tags.length > 0 && (
          <div className="card__header-meta-tags">{tags}</div>
        )}
        {dateLabel && <div className="card__header-meta-date">{dateLabel}</div>}
      </div>
    );
  };

  // Render media section
  const renderMedia = () => {
    if (!showImage) return null;

    if (media) {
      return <div className={mediaClasses}>{media}</div>;
    }

    return (
      <div className={mediaClasses}>
        <Image
          src={imageURL}
          alt="Card image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            maxHeight: "200px",
          }}
        />
      </div>
    );
  };

  // Render footer section
  const renderFooter = () => {
    if (!showFooter) return null;

    if (footer) {
      return (
        <div className="card-footer">
          <div className="card__footer-actions">{footer}</div>
        </div>
      );
    }

    if (!actionText || actionText.trim() === "") return null;

    return (
      <div className="card-footer">
        <div className="card__footer-actions">
          <Button
            variant="tertiary"
            label={actionText}
            iconRight={actionIcon || undefined}
          />
        </div>
      </div>
    );
  };

  return (
    <CardWrapper {...wrapperProps}>
      {/* Media section */}
      {renderMedia()}

      {/* Header metadata (tag and date) */}
      {renderHeaderMeta()}

      {/* Card body */}
      <div className="card-body">
        <div className="card__body-content">
          {title && (
            <div className="card__body-title-wrapper">
              <h5 className="card-title">
                {showTitleIcon && <Icon icon={titleIcon} className="me-2" />}
                {icon && <i className={`${icon} me-2`} aria-hidden="true"></i>}
                {title}
              </h5>
            </div>
          )}
          {description && <div className="card-text">{description}</div>}
        </div>
      </div>

      {/* Footer section */}
      {renderFooter()}
    </CardWrapper>
  );
};

// Type guard for CardHeaderMeta
function isCardHeaderMeta(obj: any): obj is CardHeaderMeta {
  return obj && typeof obj === "object" && ("tag" in obj || "date" in obj);
}
