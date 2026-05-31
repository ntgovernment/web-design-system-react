import React from "react";
import { Image } from "../Image";
import "../Button/Button.css";
import "./FeaturedCard.css";

export interface FeaturedCardAction {
  /** Button label */
  text: string;
  /** Destination URL */
  href: string;
  /**
   * When true the link opens in a new tab with rel="noopener noreferrer".
   * Defaults to false.
   */
  external?: boolean;
}

export interface FeaturedCardAuthor {
  name: string;
  agency?: string;
}

export interface FeaturedCardImage {
  /** Image source URL */
  src: string;
  /** Accessible alt text (required) */
  alt: string;
  /**
   * Optional photo credit / caption rendered beneath the component.
   * Takes priority over `author` when both are supplied.
   */
  caption?: string;
  /**
   * Optional author avatar block rendered beneath the component when
   * no `caption` is present. Mirrors the Squiz paint layout's avatar
   * fallback behaviour.
   */
  author?: FeaturedCardAuthor;
}

export interface FeaturedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Rich text / WYSIWYG body content. Accepts any ReactNode — in practice
   * this will be rendered HTML from a CMS. Rendered inside a
   * `.bct-wysiwyg` wrapper matching the Squiz paint layout.
   */
  body: React.ReactNode;
  /**
   * Optional image. When omitted the layout collapses to a single column.
   * Rendered via the `<Image>` design-system component.
   */
  image?: FeaturedCardImage;
  /**
   * Which side the image column appears on.
   * - `"right"` (default) — content left, image right.
   * - `"left"` — image left, content right (uses Bootstrap `order-last`).
   */
  imagePosition?: "left" | "right";
  /**
   * Background colour variant. `"white"` also applies a box shadow.
   * Defaults to `"white"`.
   */
  background?: "white" | "grey" | "blue" | "dark";
  /**
   * Whether to draw a border around the card.
   * Defaults to `"none"`.
   */
  border?: "none" | "default";
  /**
   * Primary CTA. Rendered as an anchor element (`<a>`) styled with `btn
   * btn-primary` classes, matching the design system's link-button pattern
   * used by Banner, GlobalAlert, and TopicListing.
   */
  primaryAction?: FeaturedCardAction;
  /**
   * Optional secondary CTA. Rendered as an anchor element (`<a>`) styled
   * with `btn btn-secondary` classes. Only shown when `primaryAction` is
   * also set.
   */
  secondaryAction?: FeaturedCardAction;
}

/** Renders the WYSIWYG body and optional action buttons. */
function renderContent(
  body: React.ReactNode,
  primaryAction: FeaturedCardAction | undefined,
  secondaryAction: FeaturedCardAction | undefined,
) {
  return (
    <div className="featured-card__content">
      <div className="featured-card__body bct-wysiwyg">{body}</div>
      {primaryAction && (
        <div className="featured-card__actions">
          <a
            href={primaryAction.href}
            className="btn btn-primary"
            {...(primaryAction.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {primaryAction.text}
          </a>
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="btn btn-secondary"
              {...(secondaryAction.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {secondaryAction.text}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/** Renders the image column using the <Image> design-system component. */
function renderImageCol(image: FeaturedCardImage | undefined) {
  if (!image) return null;
  return (
    <div className="featured-card__image-wrapper">
      <Image
        src={image.src}
        alt={image.alt}
        fluid
        className="featured-card__image"
      />
    </div>
  );
}

/**
 * Renders the optional photo-credit block beneath the card.
 * - When `image.caption` is present: a simple caption line.
 * - When `image.author` is present (and no caption): an avatar block.
 */
function renderPhotoCredit(
  image: FeaturedCardImage | undefined,
  imagePosition: "left" | "right",
) {
  if (!image) return null;

  if (image.caption) {
    return (
      <div className="featured-card__photo-credit">
        <div
          className={`featured-card__img-caption${imagePosition === "right" ? " featured-card__img-caption--right" : ""}`}
        >
          <span className="featured-card__caption-text">{image.caption}</span>
        </div>
      </div>
    );
  }

  if (image.author) {
    const { name, agency } = image.author;
    return (
      <div className="featured-card__photo-credit">
        <div
          className={`featured-card__avatar${imagePosition === "right" ? " featured-card__avatar--right" : ""}`}
        >
          <div className="featured-card__avatar-icon" aria-hidden="true">
            <span className="featured-card__avatar-initial">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="featured-card__avatar-text">
            <span className="featured-card__avatar-name">{name}</span>
            {agency && (
              <span className="featured-card__avatar-agency">{agency}</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/**
 * FeaturedCard — Migrated from the Squiz "NTGDS - Featured content
 * (landing page only)" Content Container Template.
 *
 * Composes the `<Image>` component for the media slot and the `<Button>`
 * component for primary and secondary CTAs. The two-column layout
 * (7 / 5 columns at md+) and the photo-credit / avatar block faithfully
 * mirror the original Squiz paint layout (`sel.original.backup.txt`).
 */
export const FeaturedCard = ({
  body,
  image,
  imagePosition = "right",
  background = "white",
  border = "none",
  primaryAction,
  secondaryAction,
  className: customClassName,
  ...rest
}: FeaturedCardProps) => {
  const wrapperClasses = [
    "featured-card",
    `featured-card--background-${background}`,
    background === "white" && "featured-card--shadow",
    border === "none" && "featured-card--border-none",
    customClassName,
  ]
    .filter(Boolean)
    .join(" ");

  const contentColClasses = [
    "col-12",
    "col-md-7",
    "featured-card__content-col",
    imagePosition === "left" && "order-last",
  ]
    .filter(Boolean)
    .join(" ");

  const imageColClasses = [
    "col-12",
    "col-md-5",
    "featured-card__image-col",
    !image && "d-none",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses} {...rest}>
      <div className="row g-0">
        <div className={contentColClasses}>
          {renderContent(body, primaryAction, secondaryAction)}
        </div>
        <div className={imageColClasses}>{renderImageCol(image)}</div>
      </div>
      {renderPhotoCredit(image, imagePosition)}
    </div>
  );
};
