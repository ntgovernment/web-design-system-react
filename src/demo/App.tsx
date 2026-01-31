import { useState, useEffect } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Alert } from '../components/Alert';

function App() {
  const [theme, setTheme] = useState<'ntg' | 'central'>('ntg');

  useEffect(() => {
    // Set initial theme on mount
    document.documentElement.setAttribute('data-theme', 'ntg');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'ntg' ? 'central' : 'ntg';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Swap Bootstrap typography override CSS
    const typographyLink = document.getElementById('bootstrap-typography-css') as HTMLLinkElement;
    if (typographyLink) {
      typographyLink.href = `/src/typography/bootstrap-${newTheme}.css`;
    }
    
    // Swap theme CSS
    const themeLink = document.getElementById('theme-css') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `/src/themes/${newTheme}-theme.css`;
    }
  };

  return (
    <div className="container my-5">
      <div className="mb-4">
        <h1>NT Government Web Design System</h1>
        <p className="lead">Demo of Component Library with Bootstrap 5.3</p>
        <Button variant="secondary" onClick={toggleTheme}>
          Switch to {theme === 'ntg' ? 'NTG Central' : 'NT.GOV.AU'} Theme
        </Button>
        <p className="mt-2 text-muted">Current theme: <strong>{theme === 'ntg' ? 'NT.GOV.AU' : 'NTG Central'}</strong></p>
      </div>

      <section className="mb-5">
        <h2>Bootstrap Typography</h2>
        <Card title="Typography Examples">
          <h1>Heading 1 - Uses theme font</h1>
          <h2>Heading 2 - Uses theme font</h2>
          <h3>Heading 3 - Uses theme font</h3>
          <h4>Heading 4 - Uses theme font</h4>
          <h5>Heading 5 - Uses theme font</h5>
          <h6>Heading 6 - Uses theme font</h6>
          <p className="lead">This is lead text. It stands out from regular paragraphs.</p>
          <p>This is regular body text. The font family changes with the theme: <strong>NTG uses Lato</strong>, <strong>Central uses Roboto</strong>.</p>
          <p>Here's a <a href="#typography">link with theme colors</a> that uses theme-specific hover states.</p>
          <p><small className="text-muted">Small muted text using theme text colors.</small></p>
        </Card>
      </section>

      <section className="mb-5">
        <h2>Icons (FontAwesome)</h2>
        <Card title="Icon Examples">
          <div className="d-flex gap-3 flex-wrap" style={{ fontSize: '2rem' }}>
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
          <p className="mt-3 mb-0"><small className="text-muted">Icons inherit theme text color</small></p>
        </Card>
      </section>

      <section className="mb-5">
        <h2>Theme CSS Variables</h2>
        <div className="row">
          <div className="col-md-6">
            <Card title="NT.GOV.AU Theme (ntg- prefix)">
              <ul className="list-unstyled">
                <li><code>--ntg-type-font-default</code>: Lato</li>
                <li><code>--ntg-clr-action-pirmary</code>: #1f1f5f</li>
                <li><code>--ntg-clr-link-hover</code>: #c33826</li>
                <li><code>--ntg-success-03-d</code>: #107810</li>
              </ul>
            </Card>
          </div>
          <div className="col-md-6">
            <Card title="NTG Central Theme (central- prefix)">
              <ul className="list-unstyled">
                <li><code>--central-type-font-default</code>: Roboto</li>
                <li><code>--central-clr-action-pirmary</code>: Theme primary</li>
                <li><code>--central-clr-link-hover</code>: Theme hover</li>
                <li><code>--central-success-03-d</code>: Theme success</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2>Buttons</h2>
        <div className="d-flex gap-2 flex-wrap mb-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <Button variant="primary" size="lg">Large Button</Button>
          <Button variant="primary">Default Button</Button>
          <Button variant="primary" size="sm">Small Button</Button>
        </div>
      </section>

      <section className="mb-5">
        <h2>Alerts</h2>
        <div className="d-flex flex-column gap-2">
          <Alert variant="primary">This is a primary alert!</Alert>
          <Alert variant="success">This is a success alert!</Alert>
          <Alert variant="danger">This is a danger alert!</Alert>
          <Alert variant="warning" dismissible>This is a dismissible warning alert!</Alert>
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
              footer={<Button variant="primary">Action</Button>}
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
