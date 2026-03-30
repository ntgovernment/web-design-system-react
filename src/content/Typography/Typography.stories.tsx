import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Typography system showcasing Bootstrap typography components with theme-specific
 * font families (Lato for NTG, Roboto for Central) and design token integration.
 *
 * Use the theme switcher in the toolbar to see font and color changes.
 */
const meta = {
  title: "Content/Typography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Bootstrap typography customized with design tokens. Switch themes to see Lato (NTG) vs Roboto (Central) fonts.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  ),
};

export const HeadingClasses: Story = {
  name: "Heading Classes (.h1-.h6)",
  render: () => (
    <div>
      <p className="h1">Heading 1 class</p>
      <p className="h2">Heading 2 class</p>
      <p className="h3">Heading 3 class</p>
      <p className="h4">Heading 4 class</p>
      <p className="h5">Heading 5 class</p>
      <p className="h6">Heading 6 class</p>
    </div>
  ),
};

export const DisplayHeadings: Story = {
  render: () => (
    <div>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div>
      <p>
        This is default body text. The font family changes based on the active
        theme:
        <strong> NTG theme uses Lato</strong>, while{" "}
        <strong>Central theme uses Roboto</strong>.
      </p>
      <p className="lead">
        This is lead text. It stands out from regular paragraphs and is useful
        for introductions or highlighting important content.
      </p>
      <p>
        You can also use <mark>marked text</mark> to highlight specific parts,
        or make text <small className="text-muted">small and muted</small> for
        secondary information.
      </p>
      <p>
        <strong>This is bold text.</strong> <em>This is italic text.</em>{" "}
        <u>This is underlined text.</u>
      </p>
    </div>
  ),
};

export const LinkDefault: Story = {
  name: "Links – Default",
  render: () => (
    <div>
      <p>
        This is a paragraph with an{" "}
        <a href="#link-default">inline standard link</a>. Hover to see the theme
        accent colour.
      </p>
      <p>
        <a href="#link-default">Standalone link</a>
      </p>
      <p>
        <strong>
          <a href="#link-default">Bold link</a>
        </strong>
      </p>
    </div>
  ),
};

export const LinkStates: Story = {
  name: "Links – States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div>
        <p className="small text-muted mb-1">Default</p>
        <a href="#link-states-default">Default link</a>
      </div>

      <div>
        <p className="small text-muted mb-1">Hover</p>
        <a href="#link-states-hover">Hover this link</a>
      </div>

      <div>
        <p className="small text-muted mb-1">Focus</p>
        <a href="#link-states-focus">Focus this link</a>
      </div>

      <div>
        <p className="small text-muted mb-1">Visited</p>
        <a
          href="#link-states-visited"
          style={{ color: "var(--clr-link-visited)" }}
        >
          Visited link
        </a>
      </div>

      <div>
        <p className="small text-muted mb-1">Active</p>
        <a href="#link-states-active">Active link</a>
      </div>
    </div>
  ),
};

export const LinkSizes: Story = {
  name: "Links – Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <p className="small text-muted mb-1">Default</p>
        <a href="#link-size-default">Default size link</a>
      </div>

      <div>
        <p className="small text-muted mb-1">Small</p>
        <a
          href="#link-size-small"
          style={{
            fontSize: "var(--type-link-sm-size)",
            lineHeight: "var(--type-link-sm-lh)",
          }}
        >
          Small link
        </a>
      </div>

      <div>
        <p className="small text-muted mb-1">Bold</p>
        <a
          href="#link-size-bold"
          style={{
            fontWeight:
              "var(--type-link-default-bold-weight)" as React.CSSProperties["fontWeight"],
          }}
        >
          Bold link
        </a>
      </div>

      <div>
        <p className="small text-muted mb-1">Small bold</p>
        <a
          href="#link-size-small-bold"
          style={{
            fontSize: "var(--type-link-sm-size)",
            lineHeight: "var(--type-link-sm-lh)",
            fontWeight:
              "var(--type-link-default-bold-weight)" as React.CSSProperties["fontWeight"],
          }}
        >
          Small bold link
        </a>
      </div>
    </div>
  ),
};

export const LinkInBodyText: Story = {
  name: "Links – In Body Text",
  render: () => (
    <div>
      <h3>
        Heading with an <a href="#link-in-heading">inline link</a>
      </h3>

      <p className="lead">
        Lead paragraph text with a{" "}
        <a href="#link-in-lead">link inside lead copy</a> that maintains the
        larger font size.
      </p>

      <p>
        Body paragraph with a variety of inline elements:{" "}
        <a href="#link-in-body">a standard link</a>, some{" "}
        <strong>
          bold text with a <a href="#link-bold-context">link inside it</a>
        </strong>
        , and{" "}
        <em>
          italic text with a <a href="#link-italic-context">link inside it</a>
        </em>
        . The link colour and decoration must remain legible in all contexts.
      </p>

      <ul>
        <li>
          <a href="#link-in-list-1">Link as the first list item</a>
        </li>
        <li>
          List item with an <a href="#link-in-list-2">inline link</a> among
          other text
        </li>
        <li>
          <a href="#link-in-list-3">Another list link</a>
        </li>
      </ul>

      <p className="small text-muted">
        Caption text with a <a href="#link-in-caption">small caption link</a>.
      </p>
    </div>
  ),
};

export const LinkColorVariants: Story = {
  name: "Links – Colour Variants",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <a href="#link-color-primary" className="link-primary">
        Primary
      </a>
      <a href="#link-color-secondary" className="link-secondary">
        Secondary
      </a>
      <a href="#link-color-success" className="link-success">
        Success
      </a>
      <a href="#link-color-danger" className="link-danger">
        Danger
      </a>
      <a href="#link-color-warning" className="link-warning">
        Warning
      </a>
      <a href="#link-color-info" className="link-info">
        Info
      </a>
      <a href="#link-color-dark" className="link-dark">
        Dark
      </a>
    </div>
  ),
};

// ─── Dark-background link contexts ───────────────────────────────────────────

const darkSectionStyle: React.CSSProperties = {
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
};

const darkLinkStyle: React.CSSProperties = {
  color: "var(--clr-link-inverse)",
  textDecoration: "underline",
  display: "inline-block",
};

const darkLinkBoldStyle: React.CSSProperties = {
  ...darkLinkStyle,
  fontWeight: 700,
};

const darkVisitedStyle: React.CSSProperties = {
  ...darkLinkStyle,
  color: "var(--clr-link-inverse-visited)",
};

export const LinksOnBannerBackground: Story = {
  name: "Links – On Banner (Dark Primary)",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      style={{
        background: "var(--clr-bg-dark-alt)",
        ...darkSectionStyle,
      }}
    >
      <p style={{ color: "var(--clr-text-inverse)", margin: 0 }}>
        Paragraph text with an{" "}
        <a href="#banner-link-1" style={darkLinkStyle}>
          inline inverse link
        </a>{" "}
        sitting inside body copy on the dark banner.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <a href="#banner-link-default" style={darkLinkStyle}>
          Default link
        </a>
        <a href="#banner-link-bold" style={darkLinkBoldStyle}>
          Bold link
        </a>
        <a href="#banner-link-visited" style={darkVisitedStyle}>
          Visited link
        </a>
      </div>

      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "0.4rem",
        }}
      >
        {[
          "Bus timetables and maps",
          "Check your rego",
          "Find a Motor Vehicle Registry",
        ].map((label) => (
          <li key={label}>
            <a href="#banner-list-link" style={darkLinkStyle}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ),
};

export const LinksOnHeaderBackground: Story = {
  name: "Links – On Header (Dark Navy)",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      style={{
        background: "var(--clr-bg-dark)",
        ...darkSectionStyle,
      }}
    >
      <nav aria-label="Site navigation demo">
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {["Home", "About", "Services", "News", "Contact"].map((item) => (
            <li key={item}>
              <a href="#header-nav-link" style={darkLinkStyle}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <a
          href="#header-active-link"
          style={{ ...darkLinkStyle, fontWeight: 700 }}
        >
          Active / current page link (bold weight)
        </a>
      </div>

      <p style={{ color: "var(--clr-text-inverse)", margin: 0 }}>
        Inline navigation text with a{" "}
        <a href="#header-inline-link" style={darkLinkStyle}>
          contextual link
        </a>{" "}
        within a sentence.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
        <a href="#header-visited" style={darkVisitedStyle}>
          Visited page
        </a>
        <a
          href="#header-skip"
          style={{ ...darkLinkStyle, fontSize: "0.875rem" }}
        >
          Skip to main content
        </a>
      </div>
    </div>
  ),
};

export const LinksOnFooterBackground: Story = {
  name: "Links – On Footer (Dark)",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div
      style={{
        background: "var(--clr-bg-dark)",
        ...darkSectionStyle,
        paddingBottom: "3rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {[
          {
            heading: "Information and services",
            links: [
              "Art, sport and leisure",
              "Business and industry",
              "Education and learning",
              "Health and wellbeing",
            ],
          },
          {
            heading: "Find out more",
            links: [
              "About Northern Territory",
              "NT Government departments",
              "Accessibility",
              "Privacy statement",
            ],
          },
        ].map((section) => (
          <div key={section.heading}>
            <p
              style={{
                color: "var(--clr-text-inverse)",
                fontWeight: 700,
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              {section.heading}
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {section.links.map((label) => (
                <li key={label}>
                  <a href="#footer-link" style={darkLinkStyle}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer base — legal / utility links */}
      <hr
        style={{
          borderColor: "rgba(255,255,255,0.2)",
          margin: "1.5rem 0 1rem",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {["Privacy", "Disclaimer", "Accessibility", "Sitemap"].map((label) => (
          <a
            key={label}
            href="#footer-utility-link"
            style={{ ...darkLinkStyle, fontSize: "0.875rem" }}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <a
          href="#footer-visited"
          style={{ ...darkVisitedStyle, fontSize: "0.875rem" }}
        >
          Visited link
        </a>
      </div>
    </div>
  ),
};

export const Lists: Story = {
  render: () => (
    <div className="row">
      <div className="col-md-4">
        <h5>Unordered List</h5>
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>
            Third item
            <ul>
              <li>Nested item 1</li>
              <li>Nested item 2</li>
            </ul>
          </li>
          <li>Fourth item</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h5>Ordered List</h5>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ol>
      </div>
      <div className="col-md-4">
        <h5>Unstyled List</h5>
        <ul className="list-unstyled">
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </div>
    </div>
  ),
};

export const InlineList: Story = {
  render: () => (
    <div>
      <h5>Inline List</h5>
      <ul className="list-inline">
        <li className="list-inline-item">Item 1</li>
        <li className="list-inline-item">Item 2</li>
        <li className="list-inline-item">Item 3</li>
        <li className="list-inline-item">Item 4</li>
      </ul>
    </div>
  ),
};

export const Blockquote: Story = {
  render: () => (
    <div>
      <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
      <figure>
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
  ),
};

export const TextUtilities: Story = {
  name: "Text Utilities",
  render: () => (
    <div>
      <p className="text-start">Start aligned text.</p>
      <p className="text-center">Center aligned text.</p>
      <p className="text-end">End aligned text.</p>
      <p className="text-lowercase">LOWERCASED TEXT.</p>
      <p className="text-uppercase">uppercased text.</p>
      <p className="text-capitalize">capitalized text.</p>
      <p className="fw-bold">Bold text.</p>
      <p className="fw-normal">Normal weight text.</p>
      <p className="fw-light">Light weight text.</p>
      <p className="fst-italic">Italic text.</p>
      <p className="text-decoration-underline">Underlined text.</p>
      <p className="text-decoration-line-through">Line through text.</p>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div>
      <p className="text-primary">Primary text color</p>
      <p className="text-secondary">Secondary text color</p>
      <p className="text-success">Success text color</p>
      <p className="text-danger">Danger text color</p>
      <p className="text-warning">Warning text color</p>
      <p className="text-info">Info text color</p>
      <p className="text-light bg-dark p-2">Light text color</p>
      <p className="text-dark">Dark text color</p>
      <p className="text-muted">Muted text color</p>
      <p className="text-body">Default body text color</p>
      <p className="text-black">Black text color</p>
      <p className="text-white bg-dark p-2">White text color</p>
    </div>
  ),
};

export const AllTypographyElements: Story = {
  name: "All Typography Elements",
  render: () => (
    <div className="container">
      <section className="mb-5">
        <h2 className="mb-3">Headings</h2>
        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Display Headings</h2>
        <h1 className="display-4">Display Heading</h1>
        <p className="lead">
          This is a lead paragraph. It stands out from regular paragraphs and
          draws attention to important content.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Body Text</h2>
        <p>
          This is a sample paragraph demonstrating the default body text styling
          and how it appears with the current theme.{" "}
          <strong>The font family changes with the theme:</strong> NTG uses
          Lato, Central uses Roboto.
        </p>
        <p>
          You can use inline elements like <a href="#typography">links</a>,{" "}
          <strong>strong text</strong>, <em>emphasized text</em>,{" "}
          <mark>highlighted text</mark>, <del>deleted text</del>,{" "}
          <ins>inserted text</ins>, <small>small text</small>, and{" "}
          <code>inline code</code>.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Lists</h2>
        <div className="row">
          <div className="col-md-6">
            <h5>Unordered</h5>
            <ul>
              <li>Item one</li>
              <li>Item two</li>
              <li>Item three</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Ordered</h5>
            <ol>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Blockquote</h2>
        <figure>
          <blockquote className="blockquote">
            <p>A well-known quote that demonstrates blockquote styling.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Author Name in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Theme Variables</h2>
        <div className="alert alert-info">
          <p className="mb-2">
            <strong>Current Theme Typography:</strong>
          </p>
          <ul className="mb-0">
            <li>
              Font Family: <code>var(--bs-body-font-family)</code>
            </li>
            <li>
              Font Size: <code>var(--bs-body-font-size)</code>
            </li>
            <li>
              Font Weight: <code>var(--bs-body-font-weight)</code>
            </li>
            <li>
              Line Height: <code>var(--bs-body-line-height)</code>
            </li>
          </ul>
          <p className="mt-3 mb-0">
            <small className="text-muted">
              Switch themes using the toolbar to see Lato (NTG) vs Roboto
              (Central)
            </small>
          </p>
        </div>
      </section>
    </div>
  ),
};
