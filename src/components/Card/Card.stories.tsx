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
