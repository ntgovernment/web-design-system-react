import React, { useState, useEffect } from "react";
import "./MiniCards.css";
import "./MiniCards-ntg.css";
import "./MiniCards-central.css";
import { Card } from "../Card";

export interface MiniCardItem {
  /** Unique card identifier */
  id: string;
  /** Card title/text */
  title: string;
  /** Card link URL */
  href: string;
  /** Icon name for Icon component (e.g., 'fa-light fa-briefcase') */
  icon: string;
}

export interface MiniCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional section title */
  title?: string;

  /** Array of cards to display (for manual mode) */
  cards?: MiniCardItem[];

  /** Desktop layout: 3 cards per row or 4 cards per row (default: '3-col') */
  layout?: "3-col" | "4-col";

  /** Background color: white or grey (default: 'white') */
  backgroundColor?: "white" | "grey";

  /** Card selection mode: 'manual' (use cards prop) or 'auto' (fetch from API) */
  cardSelectionMode?: "manual" | "auto";

  /** Squiz API endpoint for auto-select mode (required if cardSelectionMode='auto') */
  apiEndpoint?: string;

  /** Optional API query parameters for auto-select mode */
  apiParams?: Record<string, any>;

  /** Loading state indicator (shows spinner) */
  loading?: boolean;

  /** Error message to display (if any) */
  error?: string;
}

/**
 * MiniCards Component - Group of mini cards (icon + title + link) in a responsive grid layout
 *
 * Features:
 * - Responsive grid layout (1 col mobile, 2 col tablet, 3-4 col desktop)
 * - Configurable background (white or grey)
 * - Optional section title
 * - Support for manual card selection or API-based auto selection
 * - Uniform card styling and sizing
 * - Keyboard accessible with theme-specific focus outlines
 *
 * Usage (Manual):
 * ```tsx
 * <MiniCards
 *   title="Find out more"
 *   cards={[
 *     { id: '1', title: 'Grant applicants', href: '#', icon: 'fa-light fa-briefcase' },
 *     { id: '2', title: 'Service providers', href: '#', icon: 'fa-light fa-globe-pointer' },
 *   ]}
 *   layout="3-col"
 *   backgroundColor="white"
 * />
 * ```
 *
 * Usage (Auto with API):
 * ```tsx
 * <MiniCards
 *   title="Find out more"
 *   cardSelectionMode="auto"
 *   apiEndpoint="/api/cards"
 *   apiParams={{ category: 'business' }}
 *   layout="3-col"
 * />
 * ```
 */
export const MiniCards = ({
  title,
  cards = [],
  layout = "3-col",
  backgroundColor = "white",
  cardSelectionMode = "manual",
  apiEndpoint,
  apiParams,
  loading = false,
  error,
  className = "",
  ...props
}: MiniCardsProps) => {
  const [apiCards, setApiCards] = useState<MiniCardItem[]>([]);
  const [isLoading, setIsLoading] = useState(loading);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(error);

  // Fetch data from API if in auto-select mode
  useEffect(() => {
    if (cardSelectionMode === "auto") {
      if (!apiEndpoint) {
        setErrorMsg(
          "apiEndpoint is required when cardSelectionMode is 'auto'"
        );
        return;
      }

      setIsLoading(true);
      setErrorMsg(undefined);

      const fetchData = async () => {
        try {
          const url = new URL(apiEndpoint, window.location.origin);
          if (apiParams) {
            Object.entries(apiParams).forEach(([key, value]) => {
              url.searchParams.append(key, String(value));
            });
          }

          const response = await fetch(url.toString());
          if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
          }

          const data = await response.json();
          // Assume API returns { cards: MiniCardItem[] } or directly MiniCardItem[]
          const cardData = Array.isArray(data) ? data : data.cards || [];
          setApiCards(cardData);
        } catch (err) {
          setErrorMsg(
            err instanceof Error ? err.message : "Failed to fetch cards"
          );
          setApiCards([]);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    } else {
      setIsLoading(loading);
      setErrorMsg(error);
    }
  }, [cardSelectionMode, apiEndpoint, apiParams, loading, error]);

  const displayCards =
    cardSelectionMode === "auto"
      ? apiCards
      : cards.length > 0
        ? cards
        : [];

  const classes = [
    "mini-cards",
    `mini-cards--layout-${layout}`,
    `mini-cards--bg-${backgroundColor}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} data-layout={layout} data-background={backgroundColor} {...props}>
      {title && <h2 className="mini-cards__title">{title}</h2>}

      {errorMsg && (
        <div className="mini-cards__error" role="alert">
          <p>{errorMsg}</p>
        </div>
      )}

      {isLoading && (
        <div className="mini-cards__loading" role="status" aria-live="polite">
          <div className="mini-cards__spinner"></div>
          <p>Loading cards...</p>
        </div>
      )}

      {!isLoading && displayCards.length === 0 && !errorMsg && (
        <div className="mini-cards__empty">
          <p>No cards to display.</p>
        </div>
      )}

      {!isLoading && displayCards.length > 0 && (
        <div className="mini-cards__grid">
          {displayCards.map((card) => (
            <div key={card.id} className="mini-cards__item">
              <Card
                variant="minicard"
                title={card.title}
                description=""
                icon={card.icon}
                href={card.href}
                clickable={true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
