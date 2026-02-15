import React, { useState } from "react";
import "./Header.css";
import "./Header-ntg.css";
import "./Header-central.css";
import { Icon } from "../Icon";
import { SearchBar } from "../SearchBar";

export interface HeaderNavItem {
  /**
   * The text label for the navigation item
   */
  label: string;
  /**
   * The URL/path the navigation item links to
   */
  href: string;
  /**
   * Optional FontAwesome icon class (e.g., 'fa-light fa-home')
   */
  icon?: string;
  /**
   * Whether this navigation item is currently active
   */
  active?: boolean;
}

export interface HeaderProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "children"
> {
  /**
   * The logo image source URL
   */
  logoSrc?: string;
  /**
   * Alt text for the logo image
   */
  logoAlt?: string;
  /**
   * Logo link destination (typically the home page)
   */
  logoHref?: string;
  /**
   * Navigation items to display in the header
   */
  navItems?: HeaderNavItem[];
  /**
   * Whether to include a search bar
   * @default true
   */
  showSearch?: boolean;
  /**
   * Search display variant
   * - 'expanded': Full search bar always visible (default)
   * - 'icon': Search icon only, expands to full bar on click
   * @default "expanded"
   */
  searchVariant?: "expanded" | "icon";
  /**
   * Placeholder text for the search input
   * @default "Search"
   */
  searchPlaceholder?: string;
  /**
   * Callback when search is performed
   */
  onSearch?: (value: string) => void;
  /**
   * Additional CSS class for the header element
   */
  className?: string;
  /**
   * Content to render in place of the logo (for custom logo implementations)
   */
  customLogo?: React.ReactNode;
}

/**
 * Header component for site-wide navigation
 */
export const Header = ({
  logoSrc,
  logoAlt = "NT.GOV.AU",
  logoHref = "/",
  navItems = [],
  showSearch = true,
  searchVariant = "expanded",
  searchPlaceholder = "Search",
  onSearch,
  className,
  customLogo,
  ...props
}: HeaderProps) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerClass = `header${className ? ` ${className}` : ""}`;

  const renderLogo = () => {
    if (customLogo) {
      return customLogo;
    }

    const logoContent = logoSrc ? (
      <img src={logoSrc} alt={logoAlt} className="header__logo-image" />
    ) : (
      <span className="header__logo-text">{logoAlt}</span>
    );

    return (
      <a href={logoHref} className="header__logo-link">
        {logoContent}
      </a>
    );
  };

  const handleSearchIconClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleSearchClose = () => {
    setIsSearchExpanded(false);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={headerClass} {...props}>
      <nav className="navbar header__navbar">
        <div className="header__container">
          {/* Logo Section with Hamburger */}
          <div className="header__logo-section">
            <button
              className="header__hamburger"
              onClick={handleMenuToggle}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <span className="header__hamburger-line"></span>
              <span className="header__hamburger-line"></span>
              <span className="header__hamburger-line"></span>
            </button>
            <div className="header__logo">{renderLogo()}</div>
          </div>

          {/* Desktop Navigation */}
          <div className="header__nav">
            {navItems.length > 0 && (
              <ul className="header__nav-list">
                {navItems.map((item, index) => (
                  <li key={index} className="header__nav-item">
                    <a
                      href={item.href}
                      className={`header__nav-link${item.active ? " header__nav-link--active" : ""}`}
                      aria-current={item.active ? "page" : undefined}
                    >
                      {item.icon && (
                        <Icon
                          icon={item.icon}
                          className="header__nav-icon"
                          ariaHidden
                        />
                      )}
                      <span className="header__nav-text">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {showSearch && (
              <div
                className="header__search"
                data-variant={searchVariant}
                data-expanded={isSearchExpanded ? "true" : undefined}
              >
                {searchVariant === "icon" && !isSearchExpanded ? (
                  <button
                    className="header__search-icon-button"
                    onClick={handleSearchIconClick}
                    aria-label="Open search"
                    aria-expanded={false}
                    type="button"
                  >
                    <Icon
                      icon="fa-light fa-search"
                      className="header__search-icon"
                      ariaHidden
                    />
                  </button>
                ) : (
                  <div className="header__search-expanded">
                    <SearchBar
                      variant="primary"
                      placeholder={searchPlaceholder}
                      onSearch={onSearch}
                      autoFocus={searchVariant === "icon" && isSearchExpanded}
                    />
                    {searchVariant === "icon" && (
                      <button
                        className="header__search-close"
                        onClick={handleSearchClose}
                        aria-label="Close search"
                        type="button"
                      >
                        <Icon
                          icon="fa-light fa-times"
                          className="header__search-close-icon"
                          ariaHidden
                        />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="header__mobile-menu">
          {navItems.length > 0 && (
            <ul className="header__mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="header__mobile-nav-item">
                  <a
                    href={item.href}
                    className={`header__mobile-nav-link${item.active ? " header__mobile-nav-link--active" : ""}`}
                    aria-current={item.active ? "page" : undefined}
                    onClick={handleMenuClose}
                  >
                    {item.icon && (
                      <Icon
                        icon={item.icon}
                        className="header__mobile-nav-icon"
                        ariaHidden
                      />
                    )}
                    <span className="header__mobile-nav-text">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};
