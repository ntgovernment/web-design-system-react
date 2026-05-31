import React from "react";
import "./DisplayCards.css";
import "./../Card/Card.css";
import { assetMap } from "./assetMap";

export interface InternalCardProps {
  title: string;
  description?: string;
  href?: string;
  showDescription?: boolean;
  showButton?: boolean;
  actionText?: string;
  actionIcon?: string;
}

const InternalCard: React.FC<InternalCardProps> = ({
  title,
  description,
  href = "#",
  actionText = "Read more",
  actionIcon = "fa-light fa-arrow-right",
  showDescription = true,
  showButton = true,
}) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="card__body-content">
          <div className="card__body-title-wrapper">
            <h5 className="card-title">{title}</h5>
          </div>

          {showDescription && description && (
            <div className="card-text">{description}</div>
          )}
        </div>
      </div>

      <div className="card-footer">
        <div className="card__footer-actions">
          {showButton && actionText && (
            <span className="btn btn-tertiary" aria-hidden="true">
              {actionText}
              {actionIcon && <i className={`${actionIcon} ms-2`} />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export interface DisplayCardsProps {
  assetIds: string[];
  columns?: 2 | 3 | 4;
  backgroundColor?: "white" | "grey";
  sectionTitle?: string;
  sectionSubtitle?: string;
  showDescription?: boolean;
  showButton?: boolean;
  actionText?: string;
  actionIcon?: string;
  className?: string;
}

export const DisplayCards: React.FC<DisplayCardsProps> = ({
  assetIds = [],
  columns = 3,
  backgroundColor = "white",
  sectionTitle,
  sectionSubtitle,
  showDescription = true,
  showButton = true,
  actionText = "Read more",
  actionIcon = "fa-light fa-arrow-right",
  className = "",
}) => {
  const columnClass = `display-cards--${columns}col`;
  const bgClass =
    backgroundColor === "grey"
      ? "display-cards--bg-grey"
      : "display-cards--bg-white";

  const cards = assetIds
    .map((id) => assetMap[id])
    .filter(Boolean);

  return (
    <section
      className={`display-cards ${columnClass} ${bgClass} ${className}`}
      data-component-status="16"
    >
      {sectionTitle && (
        <div className="display-cards__header">
          <h2 className="display-cards__title">{sectionTitle}</h2>
          {sectionSubtitle && (
            <p className="display-cards__subtitle">{sectionSubtitle}</p>
          )}
        </div>
      )}

      <div className="display-cards__grid">
        {cards.map((card, index) => (
          <div key={index} className="display-cards__card-wrapper">
            <InternalCard
              {...card}
              showDescription={showDescription}
              showButton={showButton}
              actionText={actionText}
              actionIcon={actionIcon}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DisplayCards;
