import { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Alert } from '../components/Alert';

function App() {
  const [theme, setTheme] = useState<'ntg' | 'central'>('ntg');

  const toggleTheme = () => {
    setTheme(theme === 'ntg' ? 'central' : 'ntg');
    // In a real implementation, you would dynamically load the theme CSS
    document.documentElement.setAttribute('data-theme', theme === 'ntg' ? 'central' : 'ntg');
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

      <section className="mb-5">
        <h2>Theme CSS Variables</h2>
        <div className="row">
          <div className="col-md-6">
            <Card title="NT.GOV.AU Theme (ntg- prefix)">
              <ul className="list-unstyled">
                <li><code>--ntg-primary</code>: #003366</li>
                <li><code>--ntg-secondary</code>: #6c757d</li>
                <li><code>--ntg-accent</code>: #00a3e0</li>
                <li><code>--ntg-success</code>: #28a745</li>
              </ul>
            </Card>
          </div>
          <div className="col-md-6">
            <Card title="NTG Central Theme (central- prefix)">
              <ul className="list-unstyled">
                <li><code>--central-primary</code>: #0d6efd</li>
                <li><code>--central-secondary</code>: #6c757d</li>
                <li><code>--central-accent</code>: #fd7e14</li>
                <li><code>--central-success</code>: #198754</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
