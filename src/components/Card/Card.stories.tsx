import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Card Title',
    children: 'This is some card content. It can contain any React components or HTML.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    children: 'Card content goes here.',
    footer: <Button variant="primary">Action</Button>,
  },
};

export const PrimaryVariant: Story = {
  args: {
    title: 'Primary Card',
    variant: 'primary',
    children: 'This card uses the primary theme color.',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Card content',
  },
  render: () => (
    <div className="row g-3">
      <div className="col-md-4">
        <Card title="Primary" variant="primary">
          Primary card content
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Success" variant="success">
          Success card content
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Danger" variant="danger">
          Danger card content
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Warning" variant="warning">
          Warning card content
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Info" variant="info">
          Info card content
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Dark" variant="dark">
          Dark card content
        </Card>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    title: 'Analytics',
    icon: 'fa-light fa-chart-line',
    children: 'View your analytics dashboard and track your progress.',
  },
};

export const IconCards: Story = {
  args: {
    children: 'Card content',
  },
  render: () => (
    <div className="row g-3">
      <div className="col-md-4">
        <Card title="Dashboard" icon="fa-light fa-chart-pie" variant="primary">
          Overview of your key metrics and performance indicators.
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Users" icon="fa-light fa-users" variant="success">
          Manage user accounts and permissions.
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Settings" icon="fa-light fa-cog" variant="info">
          Configure your application preferences.
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Reports" icon="fa-light fa-file-alt" variant="secondary">
          Generate and download detailed reports.
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Security" icon="fa-light fa-shield-alt" variant="warning">
          Review security settings and access logs.
        </Card>
      </div>
      <div className="col-md-4">
        <Card title="Alerts" icon="fa-light fa-bell" variant="danger">
          View system notifications and alerts.
        </Card>
      </div>
    </div>
  ),
};
