import React from "react";
import "./Card.css";
import { Image } from "../Image";
import { Tag } from "../Tag";
import { Icon } from "../Icon";
import placeholderImage from "../../assets/images/placeholder.webp";

/**
 * IMPORTANT: Button Component Dependency
 * The Card footer uses Button.css styles (.btn, .btn-tertiary) directly on a span element
 * instead of the Button component to prevent focus stealing from the card.
 *
 * Dependencies:
 * - Button.css: Provides base button styling (.btn) and variant styling (.btn-tertiary)
 * - Button theme files: Provide hover color variables (--bs-btn-hover-color)
 *
 * If you modify Button.css or its theme files:
 * - Footer span will automatically inherit token/variable updates
 * - If class names change (e.g., btn-tertiary → btn-link), update Card.tsx line ~283
 * - If Button.css is removed or restructured, Card footer styling will break
 *
 * Design Evolution:
 * Previously used <Button> component but this caused focus to be stolen by the button element.
 * The card wrapper needs to receive all focus for keyboard accessibility.
 * Using span + Button.css classes maintains visual consistency while preserving focus behavior.
 */

export interface CardHeaderMeta {
  tag?: React.ReactNode;
  date?: string;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card layout variant - determines which sections render
   * - "full": Complete card with media, metadata, title, description, and footer sections
   * - "minicard": Minimal card with title and icon only (no description, media, or metadata)
   * - "compact": Horizontal compact layout with icon, title, and description
   */
  variant?: "full" | "minicard" | "compact";

  /** Card title text (required for all variants) */
  title: string;

  /** Card description/body content (not shown in minicard variant) */
  description: React.ReactNode;

  /** Show/hide image section (only for full variant; defaults to true) */
  showImage?: boolean;

  /** Custom media content - can be Image component or any ReactNode (overrides imageURL) */
  media?: React.ReactNode;

  /** Image URL for card media section (used if media prop not provided) */
  imageURL?: string;

  /** Aspect ratio for media container (default: "16:9") */
  mediaAspectRatio?: "16:9";

  /** Show/hide header metadata section with tags and date (only for full variant; defaults to true) */
  showMeta?: boolean;

  /** Header metadata - can be CardHeaderMeta object with tag/date or custom ReactNode */
  header?: CardHeaderMeta | React.ReactNode;

  /** Tag labels for header - comma-separated with optional :variant suffix (e.g., "News:blue, Event:success") */
  tagLabel?: string;

  /** Date label for header metadata section */
  dateLabel?: string;

  /** Show/hide title icon (only for full variant; defaults to false, true for minicard/compact) */
  showTitleIcon?: boolean;

  /** Icon class string for title icon (FontAwesome format, e.g., "fa-light fa-circle-info") */
  icon?: string;

  /**
   * Show/hide the action button in card footer (only for full variant)
   *
   * Behavior:
   * - true: Footer renders with "Find out more" button (if actionText provided)
   * - false: Footer container still renders with empty space (maintains card spacing)
   * - Minicard/compact: Always false (no footer section)
   *
   * Key difference from showFooter: This controls BUTTON visibility, not footer visibility.
   * The footer container persists for consistent spacing, only button visibility toggles.
   *
   * Default: true
   */
  showButton?: boolean;

  /**
   * Custom footer content - replaces the default action button
   * Can be any ReactNode (text, component, element)
   * If provided, overrides actionText and actionIcon
   */
  footer?: React.ReactNode;

  /** Action button text label (default: "Find out more") */
  actionText?: string;

  /** Action button icon (FontAwesome format, e.g., "fa-light fa-arrow-right") */
  actionIcon?: string;

  /** Enable horizontal layout with image on left side (responsive, stacks on mobile) */
  horizontal?: boolean;

  /**
   * Make entire card interactive/clickable
   * - true: Card becomes focusable with theme-specific focus outline (default)
   * - false: Card is not focusable
   * - When true, requires href prop for anchor tag rendering
   * - Provides better keyboard navigation and accessibility
   */
  clickable?: boolean;

  /** URL for clickable card - renders as <a href> when clickable=true */
  href?: string;

  /** ARIA label for accessibility (used when clickable=true) */
  ariaLabel?: string;
}

/**
 * Card Component - Flexible, accessible container for content with optional media, metadata, and actions
 *
 * Three Layout Variants:
 * - Full: Complete card with all sections (default for rich content)
 * - Minicard: Minimal card best for lists and grids (just icon + title)
 * - Compact: Horizontal card for inline displays (icon + title + description)
 *
 * Key Features:
 * - Keyboard accessible with Tab navigation and Enter/Space interaction
 * - Theme-specific focus outlines (NT.GOV.AU: orange, Central: green)
 * - Responsive design with mobile stacking
 * - Design token integration for consistent spacing and typography
 * - Flexible footer with button or custom content
 *
 * Keyboard Accessibility:
 * - Full variant: Entire card is focusable when clickable=true
 * - Tab: Navigate and focus card
 * - Enter/Space: Activates card link when clickable=true
 * - Colored focus outline appears: 4px box-shadow with theme token
 * - Interior elements have pointer-events disabled to prevent event capture
 *
 * Footer Behavior (Full Variant Only):
 * - Footer container ALWAYS renders for full variant to maintain consistent spacing
 * - Button visibility controlled independently via showButton prop:
 *   - showButton={true}: Shows action button with actionText
 *   - showButton={false}: Empty footer (footer container persists)
 *   - footer prop: Shows custom footer content (overrides button)
 * - Minicard/Compact: No footer section rendered
 * - Purpose: Prevents layout shift when toggling button visibility
 *
 * Theme-Specific Styling Applied:
 * - Focus outlines: NT.GOV.AU (orange #EC8C58), Central (green #6AB06A)
 * - Typography: NTG uses Lato, Central uses Roboto
 * - Spacing uses design tokens: --sp-xs to --sp-xxxl
 * - Borders use --border-width-md
 * - Imported via Card-ntg.css and Card-central.css
 *
 * Design Tokens Used:
 * - Spacing: --sp-xl, --sp-xxs, etc. (8px increments)
 * - Typography: --type-heading-h5, --type-body-base, etc.
 * - Colors: --clr-border-strong-01, theme-specific --shadow-focus-*
 *
 * Example Usage:
 *
 * // Full variant with button
 * <Card title="Learn More" description="..." actionText="Read" showButton={true} />
 *
 * // Full variant without button (footer persists)
 * <Card title="Learn More" description="..." showButton={false} />
 *
 * // Full variant with custom footer
 * <Card title="Learn More" description="..." footer={<CustomFooter />} />
 *
 * // Minicard for list layouts
 * <Card variant="minicard" title="Item 1" description="...." />
 *
 * // Compact horizontal layout
 * <Card variant="compact" title="Feature" description="..." />
 */
export const Card = ({
  variant,
  title,
  description,
  showImage = true,
  media,
  imageURL = placeholderImage,
  mediaAspectRatio = "16:9",
  showMeta = true,
  header,
  tagLabel = "News:blue",
  dateLabel = "17 Feb 2025",
  showTitleIcon = false,
  icon = "fa-light fa-circle-info",
  showButton = true,
  footer,
  actionText = "Find out more",
  actionIcon = "fa-light fa-arrow-right",
  horizontal = false,
  clickable = true,
  href,
  className = "",
  style,
  ariaLabel,
  ...htmlProps
}: CardProps) => {
  // Variant flags
  const isMinicard = variant === "minicard";
  const isCompact = variant === "compact";

  // Force visibility settings for minicard/compact
  const showImageFinal = isMinicard || isCompact ? false : showImage;
  const showMetaFinal = isMinicard || isCompact ? false : showMeta;
  const showButtonFinal = isMinicard || isCompact ? false : showButton;
  const showIconFinal = isMinicard || isCompact ? true : showTitleIcon;

  // Card classes
  const cardClasses = [
    "card",
    horizontal && "card--horizontal",
    clickable && "card--clickable",
    isMinicard && "card--minicard",
    isCompact && "card--compact",
    !isMinicard && !isCompact && "card--full",
    variant === "full" && "text-bg-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Card wrapper props
  const CardWrapper = (clickable && href ? "a" : "div") as any;
  const wrapperProps = {
    ...htmlProps,
    className: cardClasses,
    style,
    ...(clickable && href && { href, "aria-label": ariaLabel || title }),
    ...(clickable && { tabIndex: 0, role: href ? "link" : "button" }),
  };

  // Parse comma-separated tags with optional :variant suffix
  const parseTags = (tagString: string) => {
    if (!tagString?.trim()) return [];
    return tagString.split(",").map((tag, i) => {
      const [label, variant = "default"] = tag.trim().split(":");
      return <Tag key={i} variant={variant as any} label={label} />;
    });
  };

  // Check if object is CardHeaderMeta type
  const isCardHeaderMeta = (obj: any): obj is CardHeaderMeta =>
    obj && typeof obj === "object" && ("tag" in obj || "date" in obj);

  // Render header metadata
  const renderHeaderMeta = () => {
    if (!showMetaFinal) return null;

    if (header && !isCardHeaderMeta(header)) {
      return <div className="card__header-meta">{header}</div>;
    }

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

    const tags = parseTags(tagLabel);
    if (!tags.length && !dateLabel) return null;

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
    if (!showImageFinal) return null;
    return (
      <div className={`card__media card__media--${mediaAspectRatio}`}>
        {media || (
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
        )}
      </div>
    );
  };

  /**
   * Render footer section for full card variant
   *
   * Returns null for minicard/compact variants (these never have footers)
   *
   * For full variant:
   * - ALWAYS renders footer container (<div className="card-footer">) to maintain consistent spacing
   * - Button visibility controlled independently via showButtonFinal prop:
   *   - If showButtonFinal=true AND actionText exists AND footer prop empty:
   *     Renders <span> with .btn .btn-tertiary classes (NOT Button component)
   *     Reason: Using span prevents focus stealing from card wrapper; uses Button.css for styling
   *   - If showButtonFinal=false OR no actionText:
   *     Footer container renders but empty (maintains card spacing)
   *   - If footer prop provided:
   *     Renders custom footer content (overrides button entirely)
   *
   * This design prevents layout shift/jumping when toggling button visibility.
   * Content area remains aligned, footer spacing is consistent.
   *
   * Dependencies:
   * - Button.css: Required for .btn and .btn-tertiary styles on span element
   * - Icon component: For optional action icon (e.g., arrow-right)
   */
  const renderFooter = () => {
    // Don't render footer for minicard/compact
    if (isMinicard || isCompact) return null;

    // For full variant, always render footer container
    return (
      <div className="card-footer">
        <div className="card__footer-actions">
          {footer}
          {!footer && showButtonFinal && actionText?.trim() && (
            <span className="btn btn-tertiary" aria-hidden="true">
              {actionText}
              {actionIcon && <Icon icon={actionIcon} className="ms-2" />}
            </span>
          )}
        </div>
      </div>
    );
  };
  return (
    <CardWrapper {...wrapperProps}>
      {renderMedia()}
      {renderHeaderMeta()}

      <div className="card-body">
        {isCompact && showIconFinal && (
          <Icon icon={icon} className="card__compact-icon" />
        )}

        <div className="card__body-content">
          {title && (
            <div className="card__body-title-wrapper">
              <h5 className="card-title">
                {showIconFinal && !isCompact && (
                  <Icon
                    icon={icon}
                    className={isMinicard ? "card__minicard-icon" : "me-2"}
                  />
                )}
                {title}
              </h5>
            </div>
          )}

          {!isMinicard && description && (
            <div className="card-text">{description}</div>
          )}
        </div>
      </div>

      {renderFooter()}
    </CardWrapper>
  );
};
