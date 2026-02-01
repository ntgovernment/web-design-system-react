import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Alert } from "../components/Alert";
import { Tag } from "../components/Tag";

function App() {
  const [theme, setTheme] = useState<"ntg" | "central">("ntg");

  useEffect(() => {
    // Set initial theme on mount
    document.documentElement.setAttribute("data-theme", "ntg");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "ntg" ? "central" : "ntg";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // Use environment-aware paths for complete theme bundle
    const isDev = import.meta.env.DEV;

    // In dev mode, we need to load individual files since bundles don't exist yet
    // In production, we use the complete minified theme bundles
    if (isDev) {
      // Development: swap individual CSS files
      // Add timestamp to force reload and bypass cache
      const timestamp = new Date().getTime();
      const typographyPath = `/src/typography/typography-${newTheme}.css?v=${timestamp}`;
      const themePath = `/src/themes/${newTheme}-theme.css?v=${timestamp}`;
      const buttonThemePath = `/src/components/Button/Button-${newTheme}.css?v=${timestamp}`;
      const tagThemePath = `/src/components/Tag/Tag-${newTheme}.css?v=${timestamp}`;

      // Helper function to reload a stylesheet
      const reloadStylesheet = (id: string, href: string) => {
        const existing = document.getElementById(id);
        if (existing) {
          existing.remove();
        }
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      };

      // Reload all theme-specific stylesheets
      reloadStylesheet("bootstrap-typography-css", typographyPath);
      reloadStylesheet("theme-css", themePath);
      reloadStylesheet("button-theme-css", buttonThemePath);
      reloadStylesheet("tag-theme-css", tagThemePath);
    } else {
      // Production: swap complete theme bundle (includes all dependencies)
      const themePath = `${newTheme}-theme.min.css`;
      const themeLink = document.getElementById("theme-css") as HTMLLinkElement;
      if (themeLink) {
        themeLink.href = themePath;
      }
    }
  };

  return (
    <div className="container my-5">
      <div className="mb-4">
        <h1>NT Government Web Design System</h1>
        <p className="lead">Demo of Component Library with Bootstrap 5.3</p>
        <Button
          variant="secondary"
          onClick={toggleTheme}
          label={`Switch to ${theme === "ntg" ? "NTG Central" : "NT.GOV.AU"} Theme`}
        />
        <p className="mt-2 text-muted">
          Current theme:{" "}
          <strong>{theme === "ntg" ? "NT.GOV.AU" : "NTG Central"}</strong>
        </p>
      </div>

      <section className="mb-5">
        <h2>Tags</h2>
        <p className="text-muted mb-3">
          Tag components for status indicators, categories, and labels with 6
          color variants
        </p>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="default" label="Default" />
          <Tag variant="grey" label="Grey" />
          <Tag variant="green" label="Green" />
          <Tag variant="blue" label="Blue" />
          <Tag variant="warning" label="Warning" />
          <Tag variant="red" label="Red" />
        </div>
      </section>

      <section className="mb-5">
        <h2>Buttons - Figma Spec</h2>
        <p className="text-muted mb-3">
          Primary buttons use: 24px horizontal padding, 16px vertical padding,
          Lato 700, 16px size/line-height
        </p>
        <div className="mb-4">
          <h3 className="h5">All Variants</h3>
          <div className="d-flex gap-2 flex-wrap">
            <Button variant="primary" label="Primary" />
            <Button variant="secondary" label="Secondary" />
            <Button variant="tertiary" label="Tertiary" />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="h5">Sizes</h3>
          <div className="d-flex gap-2 flex-wrap align-items-center">
            <Button variant="primary" label="Default Button" />
            <Button variant="primary" size="sm" label="Small Button" />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="h5">With Icons</h3>
          <div className="d-flex gap-2 flex-wrap">
            <Button
              variant="primary"
              iconLeft="fa-light fa-home"
              label="Home"
            />
            <Button
              variant="secondary"
              iconLeft="fa-light fa-arrow-left"
              label="Back"
            />
            <Button
              variant="tertiary"
              iconLeft="fa-light fa-cog"
              label="Settings"
            />
            <Button
              variant="primary"
              iconRight="fa-light fa-arrow-right"
              label="Next"
            />
            <Button
              variant="primary"
              iconLeft="fa-light fa-search"
              aria-label="Search"
            />
          </div>
        </div>
        <div>
          <h3 className="h5">Outline Variants</h3>
          <div className="d-flex gap-2 flex-wrap">
            <button className="btn btn-outline-primary">Outline Primary</button>
            <button className="btn btn-outline-secondary">
              Outline Secondary
            </button>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2>Bootstrap Typography</h2>
        <Card title="Typography Examples">
          <h1>Heading 1 - Uses theme font</h1>
          <h2>Heading 2 - Uses theme font</h2>
          <h3>Heading 3 - Uses theme font</h3>
          <h4>Heading 4 - Uses theme font</h4>
          <h5>Heading 5 - Uses theme font</h5>
          <h6>Heading 6 - Uses theme font</h6>
          <p className="lead">
            This is lead text. It stands out from regular paragraphs.
          </p>
          <p>
            This is regular body text. The font family changes with the theme:{" "}
            <strong>NTG uses Lato</strong>, <strong>Central uses Roboto</strong>
            .
          </p>
          <p>
            Here's a <a href="#typography">link with theme colors</a> that uses
            theme-specific hover states.
          </p>
          <p>
            <small className="text-muted">
              Small muted text using theme text colors.
            </small>
          </p>
        </Card>
      </section>

      <section className="mb-5">
        <h2>Icons (FontAwesome)</h2>
        <Card title="Icon Examples">
          <div className="d-flex gap-3 flex-wrap" style={{ fontSize: "2rem" }}>
            <i className="fa-thin fa-house" title="Home"></i>
            <i className="fa-thin fa-user" title="User"></i>
            <i className="fa-thin fa-heart" title="Heart"></i>
            <i className="fa-thin fa-star" title="Star"></i>
            <i className="fa-thin fa-envelope" title="Email"></i>
            <i className="fa-thin fa-phone" title="Phone"></i>
            <i className="fa-thin fa-calendar" title="Calendar"></i>
            <i className="fa-thin fa-download" title="Download"></i>
            <i className="fa-thin fa-search" title="Search"></i>
            <i className="fa-thin fa-cog" title="Settings"></i>
          </div>
          <p className="mt-3 mb-0">
            <small className="text-muted">Icons inherit theme text color</small>
          </p>
        </Card>
      </section>

      <section className="mb-5">
        <h2>Theme CSS Variables</h2>
        <div className="row">
          <div className="col-md-6">
            <Card title="NT.GOV.AU Theme (ntg- prefix)">
              <ul className="list-unstyled">
                <li>
                  <code>--ntg-type-font-default</code>: Lato
                </li>
                <li>
                  <code>--ntg-clr-action-pirmary</code>: #1f1f5f
                </li>
                <li>
                  <code>--ntg-clr-link-hover</code>: #c33826
                </li>
                <li>
                  <code>--ntg-success-03-d</code>: #107810
                </li>
              </ul>
            </Card>
          </div>
          <div className="col-md-6">
            <Card title="NTG Central Theme (central- prefix)">
              <ul className="list-unstyled">
                <li>
                  <code>--central-type-font-default</code>: Roboto
                </li>
                <li>
                  <code>--central-clr-action-pirmary</code>: Theme primary
                </li>
                <li>
                  <code>--central-clr-link-hover</code>: Theme hover
                </li>
                <li>
                  <code>--central-success-03-d</code>: Theme success
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2>Alerts</h2>
        <div className="d-flex flex-column gap-2">
          <Alert variant="primary">This is a primary alert!</Alert>
          <Alert variant="success">This is a success alert!</Alert>
          <Alert variant="danger">This is a danger alert!</Alert>
          <Alert variant="warning" dismissible>
            This is a dismissible warning alert!
          </Alert>
        </div>
      </section>

      <section className="mb-5">
        <h2>Cards</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <Card title="Default Card">
              <p>This is a basic card with a title and content.</p>
            </Card>
          </div>
          <div className="col-md-4">
            <Card title="Primary Card" variant="primary">
              <p>This card uses the primary theme color.</p>
            </Card>
          </div>
          <div className="col-md-4">
            <Card
              title="Card with Footer"
              footer={<Button variant="primary" label="Action" />}
            >
              <p>This card has a footer with a button.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
