import type { Meta, StoryObj } from '@storybook/react';

/**
 * Typography system showcasing Bootstrap typography components with theme-specific
 * font families (Lato for NTG, Roboto for Central) and design token integration.
 * 
 * Use the theme switcher in the toolbar to see font and color changes.
 */
const meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Bootstrap typography customized with design tokens. Switch themes to see Lato (NTG) vs Roboto (Central) fonts.',
      },
    },
  },
  tags: ['autodocs'],
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
  name: 'Heading Classes (.h1-.h6)',
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
        This is default body text. The font family changes based on the active theme:
        <strong> NTG theme uses Lato</strong>, while <strong>Central theme uses Roboto</strong>.
      </p>
      <p className="lead">
        This is lead text. It stands out from regular paragraphs and is useful for
        introductions or highlighting important content.
      </p>
      <p>
        You can also use <mark>marked text</mark> to highlight specific parts, or make text{' '}
        <small className="text-muted">small and muted</small> for secondary information.
      </p>
      <p>
        <strong>This is bold text.</strong> <em>This is italic text.</em>{' '}
        <u>This is underlined text.</u>
      </p>
    </div>
  ),
};

export const Links: Story = {
  render: () => (
    <div>
      <p>
        This is a paragraph with a <a href="#typography">standard link</a>. Hover over it
        to see the theme-specific hover color.
      </p>
      <p>
        <a href="#typography">Link with default styling</a>
      </p>
      <p>
        <a href="#typography" className="link-primary">Primary link</a>{' '}
        <a href="#typography" className="link-secondary">Secondary link</a>{' '}
        <a href="#typography" className="link-success">Success link</a>{' '}
        <a href="#typography" className="link-danger">Danger link</a>{' '}
        <a href="#typography" className="link-warning">Warning link</a>{' '}
        <a href="#typography" className="link-info">Info link</a>
      </p>
      <p className="bg-dark p-3 rounded">
        <a href="#typography" className="text-white">Link on dark background</a>
      </p>
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
          <li>Third item
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
  name: 'Text Utilities',
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
  name: 'All Typography Elements',
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
          This is a lead paragraph. It stands out from regular paragraphs and draws
          attention to important content.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Body Text</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
          erat a ante. This paragraph demonstrates the default body text styling.
          <strong>The font family changes with the theme:</strong> NTG uses Lato,
          Central uses Roboto.
        </p>
        <p>
          You can use inline elements like <a href="#typography">links</a>,{' '}
          <strong>strong text</strong>, <em>emphasized text</em>,{' '}
          <mark>highlighted text</mark>, <del>deleted text</del>,{' '}
          <ins>inserted text</ins>, <small>small text</small>, and{' '}
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
            <li>Font Family: <code>var(--bs-body-font-family)</code></li>
            <li>Font Size: <code>var(--bs-body-font-size)</code></li>
            <li>Font Weight: <code>var(--bs-body-font-weight)</code></li>
            <li>Line Height: <code>var(--bs-body-line-height)</code></li>
          </ul>
          <p className="mt-3 mb-0">
            <small className="text-muted">
              Switch themes using the toolbar to see Lato (NTG) vs Roboto (Central)
            </small>
          </p>
        </div>
      </section>
    </div>
  ),
};
