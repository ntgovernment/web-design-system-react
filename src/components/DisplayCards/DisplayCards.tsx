import React from "react";
import { CardProps } from "../Card";
import { Card } from "../Card";
import "./DisplayCards.css";

/**
 * Props for the DisplayCards component
 */
export interface DisplayCardsProps {
  /** Array of Card component props to display */
  cards: CardProps[];
  
  /** Number of columns for the grid layout (2, 3, or 4) */
  columns?: 2 | 3 | 4;
  
  /** Background color of the section */
  backgroundColor?: "white" | "grey";
  
  /** Whether to show card images */
  showImage?: boolean;
  
  /** Whether to show card metadata (tags, dates) */
  showMetadata?: boolean;
  
  /** Whether to show card descriptions */
  showDescription?: boolean;
  
  /** Whether to show action buttons */
  showButton?: boolean;
  
  /** Custom text for the action button */
  buttonText?: string;
  
  /** Optional section title displayed above the cards */
  sectionTitle?: string;
  
  /** Optional section subtitle displayed below the title */
  sectionSubtitle?: string;
  
  /** Whether the card selection is manual or derived from a parent asset */
  selectionMode?: "manual" | "parent";

  /** Parent asset URI used when selectionMode is 'parent' */
  parentAssetId?: string;

  /** Optional list of selected card asset URIs for manual asset-picker selection */
  selectedCardAssetIds?: string[];
  
  /** Optional CSS class for additional styling */
  className?: string;
}

/**
 * DisplayCards Component
 * 
 * Displays a grid of Card components with customizable layout, content visibility,
 * and styling options. Supports both manually provided cards and automatic data
 * fetching from Squiz pages (future implementation).
 * 
 * @example
 * ```tsx
 * <DisplayCards
 *   cards={[
 *     {
 *       variant: "full",
 *       title: "Card Title",
 *       description: "Card description",
 *       actionText: "Learn More",
 *       actionIcon: "arrow-right"
 *     }
 *   ]}
 *   columns={3}
 *   backgroundColor="white"
 *   showDescription={true}
 *   showButton={true}
 *   buttonText="Apply Now"
 *   sectionTitle="Our Services"
 * />
 * ```
 */
export const DisplayCards: React.FC<DisplayCardsProps> = ({
  cards,
  columns = 3,
  backgroundColor = "white",
  showImage = false,
  showMetadata = false,
  showDescription = true,
  showButton = true,
  buttonText = "Read more",
  sectionTitle,
  sectionSubtitle,
  selectionMode,
  parentAssetId,
  selectedCardAssetIds,
  className = "",
}) => {
  const resolvedSelectionMode = selectionMode ?? "manual";

  // Define the column class based on the columns prop
  const columnClass = `display-cards--${columns}col`;
  
  // Define the background color class
  const bgClass = backgroundColor === "grey" ? "display-cards--bg-grey" : "display-cards--bg-white";
  
  // Filter cards based on content visibility settings
  const processedCards = cards.map((card) => {
    const processedCard = { ...card };
    
    // Hide image if showImage is false
    if (!showImage) {
      processedCard.showImage = false;
    }
    
    // Hide metadata (tags, dates) if showMetadata is false
    if (!showMetadata) {
      processedCard.showMeta = false;
    }
    
    // Hide description if showDescription is false
    if (!showDescription) {
      processedCard.description = undefined;
    }
    
    // Modify button text if provided
    if (showButton && buttonText) {
      processedCard.actionText = buttonText;
    }
    
    // Hide button if showButton is false
    if (!showButton) {
      processedCard.showButton = false;
      processedCard.actionText = undefined;
      processedCard.actionIcon = undefined;
    }
    
    return processedCard;
  });

  return (
    <section
      className={`display-cards ${columnClass} ${bgClass} ${className}`}
      data-component-status="16"
    >
      {/* Optional section header */}
      {sectionTitle && (
        <div className="display-cards__header">
          <h2 className="display-cards__title">{sectionTitle}</h2>
          {sectionSubtitle && (
            <p className="display-cards__subtitle">{sectionSubtitle}</p>
          )}
        </div>
      )}

      {/* Cards grid */}
      <div className="display-cards__grid">
        {processedCards.map((card, index) => (
          <div key={index} className="display-cards__card-wrapper">
            <Card {...card} />
          </div>
        ))}
      </div>

      {resolvedSelectionMode === "parent" && parentAssetId && (
        <div
          style={{ display: "none" }}
          data-selection-mode="parent"
          data-parent-asset-id={parentAssetId}
        />
      )}

      {resolvedSelectionMode === "manual" && selectedCardAssetIds && (
        <div
          style={{ display: "none" }}
          data-selection-mode="manual"
          data-selected-card-asset-ids={JSON.stringify(selectedCardAssetIds)}
        />
      )}
    </section>
  );
};

export default DisplayCards;
