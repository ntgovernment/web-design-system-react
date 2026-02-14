import React, { useState, useCallback } from "react";
import "./Accordion.css";
import "./Accordion-ntg.css";
import "./Accordion-central.css";

export interface AccordionItemProps {
  /** Unique identifier for the accordion item */
  id: string;
  /** Title text displayed in the accordion header */
  title: string;
  /** Content displayed when accordion is expanded */
  content: React.ReactNode;
  /** Whether this accordion item should be open by default */
  defaultOpen?: boolean;
  /** Whether to show an icon in the accordion header */
  showIcon?: boolean;
  /** FontAwesome icon class (e.g., 'fa-light fa-home') */
  icon?: string;
}

export interface AccordionProps {
  /** Array of accordion items to display */
  items: AccordionItemProps[];
  /** Whether to show "Open/Close all" controls */
  showOpenCloseAll?: boolean;
  /** Allow multiple items to be open simultaneously */
  alwaysOpen?: boolean;
  /** Theme variant */
  theme?: "ntg" | "central";
  /** Additional CSS class names */
  className?: string;
}

/**
 * Accordion Component
 *
 * A collapsable and expandable panel of content that gives the user choice over what they see.
 *
 * Usage Guidelines:
 * - Always use accordions in groups (minimum of 3 items)
 * - Maximum of 6-8 items per group
 * - Use for content relevant to specific user groups, not main page content
 * - Make accordion headings self-explanatory, descriptive and succinct
 *
 * @example
 * ```tsx
 * <Accordion
 *   items={[
 *     { id: '1', title: 'Question 1', content: <p>Answer 1</p> },
 *     { id: '2', title: 'Question 2', content: <p>Answer 2</p> },
 *     { id: '3', title: 'Question 3', content: <p>Answer 3</p> },
 *   ]}
 *   showOpenCloseAll={true}
 * />
 * ```
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  showOpenCloseAll = true,
  alwaysOpen = false,
  theme,
  className = "",
}) => {
  // Track which items are expanded
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(items.filter((item) => item.defaultOpen).map((item) => item.id)),
  );

  const toggleItem = useCallback(
    (itemId: string) => {
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          if (!alwaysOpen) {
            // If not alwaysOpen, close all other items
            newSet.clear();
          }
          newSet.add(itemId);
        }
        return newSet;
      });
    },
    [alwaysOpen],
  );

  const openAll = useCallback(() => {
    setExpandedItems(new Set(items.map((item) => item.id)));
  }, [items]);

  const closeAll = useCallback(() => {
    setExpandedItems(new Set());
  }, []);

  const allExpanded = expandedItems.size === items.length && items.length > 0;
  const accordionId = `accordion-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={className} data-theme={theme}>
      {showOpenCloseAll && items.length > 0 && (
        <div className="accordion-controls">
          <button
            type="button"
            className="accordion-controls-link"
            onClick={allExpanded ? closeAll : openAll}
            aria-label={
              allExpanded ? "Close all accordions" : "Open all accordions"
            }
          >
            {allExpanded ? "Close all" : "Open all"}
          </button>
        </div>
      )}

      <div className={`accordion${alwaysOpen ? "" : ""}`} id={accordionId}>
        {items.map((item) => {
          const isExpanded = expandedItems.has(item.id);
          const headerId = `${accordionId}-heading-${item.id}`;
          const collapseId = `${accordionId}-collapse-${item.id}`;

          return (
            <div className="accordion-item" key={item.id}>
              <h2 className="accordion-header" id={headerId}>
                <button
                  className={`accordion-button${isExpanded ? "" : " collapsed"}`}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                  aria-controls={collapseId}
                >
                  {item.showIcon && item.icon && (
                    <span className="accordion-button-icon" aria-hidden="true">
                      <i className={item.icon}></i>
                    </span>
                  )}
                  {item.title}
                </button>
              </h2>
              <div
                id={collapseId}
                className={`accordion-collapse collapse${isExpanded ? " show" : ""}`}
                aria-labelledby={headerId}
                data-bs-parent={alwaysOpen ? undefined : `#${accordionId}`}
              >
                <div className="accordion-body">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
