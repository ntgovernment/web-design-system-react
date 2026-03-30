import React from "react";
import { Button } from "../Button";
import { BreadcrumbsContent, BreadcrumbItem } from "../Breadcrumbs/Breadcrumbs";
import "./Banner.css";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Banner variant
   * - primary: Dark background with decorative elements, used on home pages
   * - secondary: Light background with border divider and vertical link list
   */
  variant?: "primary" | "secondary";

  /**
   * Page title (H1)
   */
  title: string;

  /**
   * Optional page description
   */
  description?: string;

  /**
   * Optional breadcrumb items array
   */
  breadcrumbs?: BreadcrumbItem[];

  /**
   * Call to action button text
   */
  ctaText?: string;

  /**
   * Call to action button click handler
   */
  ctaOnClick?: () => void;

  /**
   * Call to action button href
   */
  ctaHref?: string;

  /**
   * CTA button variant (default: secondary for dark backgrounds and secondary variant)
   */
  ctaVariant?: "primary" | "secondary" | "tertiary";

  /**
   * Heading for the links section
   * - "Popular": Most visited or commonly used
   * - "Featured": Highlights important or timely content
   * - "Related": Connected to the content on the page
   */
  linksHeading?: "Popular" | "Featured" | "Related";

  /**
   * Array of link objects for the popular/featured/related section
   * - Primary variant: Renders as pill-styled clickable links
   * - Secondary variant: Renders as vertical list of text links
   */
  links?: Array<{ label: string; href: string }>;

  /**
   * @deprecated Use `links` prop instead. This prop is maintained for backwards compatibility.
   * Array of link objects with label and href for vertical link lists (secondary variant)
   */
  linkItems?: Array<{ label: string; href: string }>;

  /**
   * Show decorative background elements (default: true for primary)
   */
  showDecorative?: boolean;

  /**
   * Breadcrumb label (for first item if not using breadcrumbs array)
   */
  label?: string;

  /**
   * Breadcrumb href (for first item if not using breadcrumbs array)
   */
  href?: string;
}

/**
 * Banner component for home and landing pages
 *
 * Large, salient component that introduces a page or calls attention to important calls to action.
 * Supports multiple variants including hero banners with breadcrumbs, titles, descriptions, CTAs, and links.
 */
export const Banner = ({
  variant = "primary",
  title,
  description,
  breadcrumbs,
  ctaText,
  ctaOnClick,
  ctaHref,
  ctaVariant,
  linksHeading,
  links,
  linkItems,
  showDecorative,
  label,
  href,
  className,
  ...props
}: BannerProps) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const defaultCtaVariant = isPrimary || isSecondary ? "secondary" : "primary";
  const buttonVariant = ctaVariant || defaultCtaVariant;

  // Show decorative by default for primary and secondary
  const shouldShowDecorative =
    showDecorative !== undefined
      ? showDecorative
      : variant === "primary" || variant === "secondary";

  // Build breadcrumb items if label and href provided
  const breadcrumbItems =
    breadcrumbs ||
    (label && href
      ? [
          { label, href },
          { label: "Current page", isCurrent: true },
        ]
      : undefined);

  const bannerClass = `banner banner--${variant}${className ? ` ${className}` : ""}`;

  return (
    <div className={bannerClass} data-variant={variant} {...props}>
      {shouldShowDecorative && (
        <div className="banner__decorative" aria-hidden="true">
          {isSecondary ? (
            <>
              <div className="banner__decorative-shape banner__decorative-shape--large"></div>
              <div className="banner__decorative-shape banner__decorative-shape--small"></div>
            </>
          ) : null}
        </div>
      )}

      <div className="banner__container">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="banner__breadcrumbs">
            <BreadcrumbsContent items={breadcrumbItems} />
          </div>
        )}

        <div className="banner__content">
          <div className="banner__main">
            <h1 className="banner__title">{title}</h1>
            {description && (
              <p className="banner__description">{description}</p>
            )}
            {ctaText && (
              <div className="banner__cta">
                {ctaHref ? (
                  <a href={ctaHref} className={`btn btn-${buttonVariant}`}>
                    {ctaText}
                  </a>
                ) : (
                  <Button
                    variant={buttonVariant}
                    label={ctaText}
                    onClick={ctaOnClick}
                  />
                )}
              </div>
            )}
          </div>

          {linksHeading && (links || linkItems) && (
            <div className="banner__links">
              <h2 className="banner__links-heading">{linksHeading}</h2>
              {isSecondary ? (
                <div className="banner__links-vertical">
                  {(links || linkItems)?.map((link, index) => (
                    <a key={index} href={link.href} className="banner__link">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : links && links.length > 0 ? (
                <div className="banner__links-list">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="banner__pill-link"
                      aria-label={link.label}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
