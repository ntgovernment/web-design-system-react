import React from "react";
import { Icon } from "../Icon";
import "./Footer.css";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
  /**
   * Number of columns to display on md-xxl screens.
   */
  columns?: 1 | 2;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Sections containing groups of links (e.g., "Information and services", "Find out more")
   */
  sections?: FooterSection[];
  /**
   * Social media links to display
   */
  socialLinks?: SocialLink[];
  /**
   * Footer bottom links (e.g., "Privacy", "Accessibility", "Contact")
   */
  bottomLinks?: FooterLink[];
  /**
   * Logo or branding element (accepts React component or HTML string)
   */
  logo?: React.ReactNode;
  /**
   * Aboriginal acknowledgement text
   */
  acknowledgement?: string;
  /**
   * Copyright text
   */
  copyrightText?: string;
  /**
   * Divider separator character or element for bottom links
   */
  linkDivider?: string | React.ReactNode;
}

/**
 * Footer Component
 *
 * A comprehensive footer section component for NT Government websites.
 * Displays organization information, links, social media, and legal information.
 *
 * Features:
 * - Multiple link sections with semantic grouping
 * - Social media integration
 * - Customizable branding and logo
 * - Aboriginal acknowledgement section
 * - Theme-aware CSS variable customization
 * - Bootstrap CSS variables for styling
 */
export const Footer = ({
  sections = [],
  socialLinks = [],
  bottomLinks = [],
  logo,
  acknowledgement,
  copyrightText,
  linkDivider = "|",
  className: customClassName,
  ...props
}: FooterProps) => {
  const className = `footer ${customClassName || ""}`.trim();

  return (
    <footer className={className} {...props}>
      {/* Main content container */}
      <div className="footer__wrapper">
        <div className="footer__container">
          {/* Primary sections (links groups) */}
          {sections.length > 0 && (
            <div className="footer__main">
              <div className="footer__sections">
                {sections.map((section, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className={
                      section.columns === 2
                        ? "footer__section footer__section--cols-2"
                        : "footer__section"
                    }
                  >
                    {section.title && (
                      <h5 className="footer__section-title">{section.title}</h5>
                    )}
                    <ul
                      className="footer__link-list"
                      aria-label={section.title}
                    >
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="footer__link-item">
                          <div className="footer__link-marker" />
                          <a href={link.href} className="footer__link">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Social media section */}
              {socialLinks.length > 0 && (
                <div className="footer__section">
                  <h5 className="footer__section-title">Connect with us</h5>
                  <ul
                    className="footer__social-list"
                    aria-label="Social media links"
                  >
                    {socialLinks.map((social, index) => (
                      <li key={index} className="footer__social-item">
                        <a
                          href={social.href}
                          className="footer__social-link"
                          aria-label={social.platform}
                        >
                          {social.icon && (
                            <Icon icon={social.icon} className="me-2" />
                          )}
                          {social.platform}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Branding and metadata section */}
          <div className="footer__metadata">
            {/* Logo/Branding */}
            {logo && <div className="footer__logo">{logo}</div>}

            {/* Bottom links navigation */}
            {bottomLinks.length > 0 && (
              <nav
                className="footer__bottom-nav"
                aria-label="Footer additional links"
              >
                <ul className="footer__bottom-links">
                  {bottomLinks.map((link, index) => (
                    <li key={index} className="footer__bottom-link-item">
                      <a href={link.href} className="footer__bottom-link">
                        {link.label}
                      </a>
                      {index < bottomLinks.length - 1 && (
                        <span className="footer__divider">{linkDivider}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>

        {/* Acknowledgement and copyright section */}
        {(acknowledgement || copyrightText) && (
          <div className="footer__info-section">
            <div className="footer__container">
              {acknowledgement && (
                <p className="footer__acknowledgement">{acknowledgement}</p>
              )}
              {copyrightText && (
                <p className="footer__copyright">{copyrightText}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
