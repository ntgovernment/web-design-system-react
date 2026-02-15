import React from "react";
import "./TopicListing.css";
import "./TopicListing-ntg.css";
import "./TopicListing-central.css";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { Document, type DocumentProps } from "../Document";

export type TopicListingVariant = "topics" | "links" | "documents";

export interface TopicListingLink {
  label: string;
  href: string;
  description?: string;
  ariaLabel?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export interface TopicListingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Component variant */
  variant?: TopicListingVariant;
  /** Title or heading for the listing */
  title: string;
  /** Optional title link (ignored for documents variant) */
  titleHref?: string;
  /** Optional description text */
  description?: string;
  /** Optional icon next to the title (topics/links variants only) */
  icon?: string;
  /** Optional secondary CTA label */
  ctaLabel?: string;
  /** Optional CTA href (renders as link) */
  ctaHref?: string;
  /** Optional CTA click handler (renders Button) */
  ctaOnClick?: () => void;
  /** CTA variant (default: secondary) */
  ctaVariant?: "primary" | "secondary" | "tertiary";
  /** Link items for topic or links variants */
  links?: TopicListingLink[];
  /** Document items for documents variant */
  documents?: DocumentProps[];
  /** Number of columns for links variant (default: 2) */
  linksColumns?: 1 | 2;
}

/**
 * TopicListing component for grouped links, topics, and document listings.
 */
export const TopicListing = ({
  variant = "topics",
  title,
  titleHref,
  description,
  icon,
  ctaLabel,
  ctaHref,
  ctaOnClick,
  ctaVariant = "secondary",
  links = [],
  documents = [],
  linksColumns = 2,
  className = "",
  ...props
}: TopicListingProps) => {
  const isTopics = variant === "topics";
  const isLinks = variant === "links";
  const isDocuments = variant === "documents";
  const hasTitleLink = Boolean(titleHref) && !isDocuments;

  const renderTitle = () => (
    <h3 className="topic-listing__title">
      {icon && !isDocuments && (
        <Icon icon={icon} className="topic-listing__title-icon" />
      )}
      {hasTitleLink ? (
        <a
          className="topic-listing__title-link link-underline link-underline-opacity-100 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover"
          href={titleHref}
        >
          {title}
        </a>
      ) : (
        <span className="topic-listing__title-text">{title}</span>
      )}
    </h3>
  );

  const renderDescription = () =>
    description ? (
      <p className="topic-listing__description">{description}</p>
    ) : null;

  const renderCta = () => {
    if (!ctaLabel) return null;

    return (
      <div className="topic-listing__cta">
        {ctaHref ? (
          <a className={`btn btn-${ctaVariant}`} href={ctaHref}>
            {ctaLabel}
          </a>
        ) : (
          <Button variant={ctaVariant} label={ctaLabel} onClick={ctaOnClick} />
        )}
      </div>
    );
  };

  const resolveLinkRel = (target?: string, rel?: string) => {
    if (target === "_blank" && !rel) return "noreferrer";
    return rel;
  };

  const renderLinksList = () => {
    const listClass = `topic-listing__list topic-listing__list--columns-${linksColumns}`;

    return (
      <ul className={listClass}>
        {links.map((link, index) => (
          <li
            className="topic-listing__list-item"
            key={`${link.label}-${index}`}
          >
            <span className="topic-listing__bullet" aria-hidden="true" />
            <a
              className="topic-listing__link link-underline link-underline-opacity-100 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover"
              href={link.href}
              aria-label={link.ariaLabel}
              target={link.target}
              rel={resolveLinkRel(link.target, link.rel)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderTopicsList = () => (
    <div className="topic-listing__topic-list">
      {links.map((link, index) => (
        <div
          className="topic-listing__topic-item"
          key={`${link.label}-${index}`}
        >
          <a
            className="topic-listing__topic-link link-underline link-underline-opacity-100 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover"
            href={link.href}
            aria-label={link.ariaLabel}
            target={link.target}
            rel={resolveLinkRel(link.target, link.rel)}
          >
            {link.label}
          </a>
          {link.description && (
            <p className="topic-listing__topic-description">
              {link.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  const renderDocumentsList = () => (
    <div className="topic-listing__documents">
      {documents.map((document, index) => (
        <Document key={`${document.title}-${index}`} {...document} />
      ))}
    </div>
  );

  return (
    <section
      className={`topic-listing topic-listing--${variant} ${className}`.trim()}
      data-variant={variant}
      {...props}
    >
      <div className="topic-listing__layout">
        <div className="topic-listing__content">
          {renderTitle()}
          {renderDescription()}
          {renderCta()}
        </div>
        <div className="topic-listing__items">
          {isLinks && renderLinksList()}
          {isTopics && renderTopicsList()}
          {isDocuments && renderDocumentsList()}
        </div>
      </div>
    </section>
  );
};
