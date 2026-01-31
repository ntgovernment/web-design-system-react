import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', undefined, 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Button',
  },
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const WithIconLeft: Story = {
  args: {
    variant: 'primary',
    icon: 'fa-light fa-home',
    iconPosition: 'left',
    children: 'Home',
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    icon: 'fa-light fa-arrow-right',
    iconPosition: 'right',
    children: 'Next',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: 'fa-light fa-search',
    'aria-label': 'Search',
  },
};

export const IconButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" icon="fa-light fa-home" iconPosition="left">Home</Button>
      <Button variant="success" icon="fa-light fa-check" iconPosition="left">Confirm</Button>
      <Button variant="danger" icon="fa-light fa-trash" iconPosition="left">Delete</Button>
      <Button variant="info" icon="fa-light fa-download" iconPosition="left">Download</Button>
      <Button variant="warning" icon="fa-light fa-exclamation-triangle" iconPosition="left">Warning</Button>
      <Button variant="secondary" icon="fa-light fa-arrow-left" iconPosition="left">Back</Button>
      <Button variant="primary" icon="fa-light fa-arrow-right" iconPosition="right">Next</Button>
    </div>
  ),
};

export const IconOnlyButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" icon="fa-light fa-search" aria-label="Search" />
      <Button variant="secondary" icon="fa-light fa-cog" aria-label="Settings" />
      <Button variant="success" icon="fa-light fa-plus" aria-label="Add" />
      <Button variant="danger" icon="fa-light fa-times" aria-label="Close" />
      <Button variant="info" icon="fa-light fa-info-circle" aria-label="Information" />
      <Button variant="warning" icon="fa-light fa-edit" aria-label="Edit" />
    </div>
  ),
};

export const CustomizedWithCSSVars: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Extra Large Padding</h4>
        <Button 
          variant="primary"
          style={{
            '--bs-btn-padding-x': '48px',
            '--bs-btn-padding-y': '20px',
            '--bs-btn-font-size': '18px'
          } as React.CSSProperties}
        >
          Extra Large Button
        </Button>
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Custom Colors</h4>
        <Button 
          variant="primary"
          style={{
            '--bs-btn-bg': '#8b5cf6',
            '--bs-btn-border-color': '#8b5cf6',
            '--bs-btn-hover-bg': '#7c3aed',
            '--bs-btn-hover-border-color': '#7c3aed',
            '--bs-btn-active-bg': '#6d28d9',
            '--bs-btn-active-border-color': '#6d28d9',
          } as React.CSSProperties}
        >
          Purple Button
        </Button>
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Pill-Shaped (Override NTG Theme)</h4>
        <Button 
          variant="primary"
          style={{
            '--bs-btn-border-radius': '50rem'
          } as React.CSSProperties}
        >
          Pill Button
        </Button>
      </div>
      
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Custom Border</h4>
        <Button 
          variant="primary"
          style={{
            '--bs-btn-border-width': '3px',
            '--bs-btn-border-color': '#dc3545',
            '--bs-btn-bg': 'transparent',
            '--bs-btn-color': '#dc3545',
            '--bs-btn-hover-bg': '#dc3545',
            '--bs-btn-hover-color': 'white'
          } as React.CSSProperties}
        >
          Custom Border
        </Button>
      </div>
      
      <div style={{ marginTop: '8px', padding: '16px', background: '#f8f9fa', borderRadius: '8px', maxWidth: '600px' }}>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.6' }}>
          <strong>💡 Tip:</strong> All buttons use Bootstrap 5.3's CSS variables approach. 
          You can customize padding, colors, borders, typography, and more at runtime without 
          modifying component code. See <code>CSS_VARIABLES.md</code> for complete documentation.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Demonstrates runtime customization using Bootstrap CSS variables. Override `--bs-btn-*` variables inline or via CSS classes to create custom button styles without modifying the component.',
      },
    },
  },
};
