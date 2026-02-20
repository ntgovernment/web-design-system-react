import React, { useState, useRef, useEffect } from "react";
import { Icon } from "../Icon";
import "./Tab.css";

export interface TabItem {
  id: string;
  label: string;
  icon?: string;
  content?: React.ReactNode;
  badge?: number;
}

export interface TabProps {
  items: TabItem[];
  activeTabId?: string;
  onTabChange?: (tabId: string) => void;
  isSticky?: boolean;
  size?: "sm" | "md" | "lg";
  showIcons?: boolean;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  items,
  activeTabId,
  onTabChange,
  isSticky = true,
  size = "md",
  showIcons = false,
  className = "",
}) => {
  const isControlled = activeTabId !== undefined;
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    activeTabId ?? items[0]?.id ?? "",
  );
  const activeTab = activeTabId ?? internalActiveTab;
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabNavRef = useRef<HTMLDivElement>(null);

  // Check if scroll buttons are needed
  useEffect(() => {
    const checkScroll = () => {
      if (tabNavRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabNavRef.current;
        setShowLeftScroll(scrollLeft > 0);
        setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    checkScroll();
    const resizeObserver = new ResizeObserver(checkScroll);
    if (tabNavRef.current) {
      resizeObserver.observe(tabNavRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [items]);

  const handleTabChange = (tabId: string) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let nextIndex = currentIndex;

    switch (e.key) {
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    const nextTabId = items[nextIndex].id;
    handleTabChange(nextTabId);

    // Scroll into view after state update
    setTimeout(() => {
      const button = tabListRef.current?.querySelector(
        `[data-tab-id="${nextTabId}"]`,
      );
      if (button) {
        button.scrollIntoView({ behavior: "smooth", block: "nearest" });
        (button as HTMLButtonElement).focus();
      }
    }, 0);
  };

  const scroll = (direction: "left" | "right") => {
    if (tabNavRef.current) {
      const scrollAmount = 200;
      tabNavRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (tabNavRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabNavRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const activeItem = items.find((item) => item.id === activeTab);

  return (
    <div
      className={`tab-component ${className} ${isSticky ? "tab-component--sticky" : ""}`}
      ref={tabListRef}
    >
      <div className={`tab-container tab-container--${size}`}>
        {showLeftScroll && (
          <button
            className="tab-scroll-btn tab-scroll-btn--left"
            onClick={() => scroll("left")}
            aria-label="Scroll tabs left"
            type="button"
          >
            <Icon
              icon="fa-light fa-chevron-left"
              size="16px"
              ariaHidden={true}
            />
          </button>
        )}

        <div
          className="tab-nav-wrapper"
          ref={tabNavRef}
          onScroll={handleScroll}
          role="tablist"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              data-tab-id={item.id}
              className={`tab-nav-item ${
                activeTab === item.id ? "tab-nav-item--active" : ""
              }`}
              role="tab"
              aria-selected={activeTab === item.id}
              aria-controls={`tab-panel-${item.id}`}
              onClick={() => handleTabChange(item.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              type="button"
            >
              {showIcons && item.icon && (
                <Icon
                  icon={item.icon}
                  size="16px"
                  className="tab-nav-item__icon"
                  ariaHidden={true}
                />
              )}
              <span className="tab-nav-item__label">{item.label}</span>
            </button>
          ))}
        </div>

        {showRightScroll && (
          <button
            className="tab-scroll-btn tab-scroll-btn--right"
            onClick={() => scroll("right")}
            aria-label="Scroll tabs right"
            type="button"
          >
            <Icon
              icon="fa-light fa-chevron-right"
              size="16px"
              ariaHidden={true}
            />
          </button>
        )}
      </div>

      {activeItem != null && (
        <div
          id={`tab-panel-${activeItem.id}`}
          className="tab-content-wrapper"
          role="tabpanel"
          aria-labelledby={`tab-${activeItem.id}`}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
};

export default Tab;
