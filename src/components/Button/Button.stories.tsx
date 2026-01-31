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
    icon: 'fa-solid fa-home',
    iconPosition: 'left',
    children: 'Home',
  },
};

export const WithIconRight: Story = {
  args: {
    variant: 'primary',
    icon: 'fa-solid fa-arrow-right',
    iconPosition: 'right',
    children: 'Next',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'primary',
    icon: 'fa-solid fa-search',
    'aria-label': 'Search',
  },
};

export const IconButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" icon="fa-solid fa-home" iconPosition="left">Home</Button>
      <Button variant="success" icon="fa-solid fa-check" iconPosition="left">Confirm</Button>
      <Button variant="danger" icon="fa-solid fa-trash" iconPosition="left">Delete</Button>
      <Button variant="info" icon="fa-solid fa-download" iconPosition="left">Download</Button>
      <Button variant="warning" icon="fa-solid fa-exclamation-triangle" iconPosition="left">Warning</Button>
      <Button variant="secondary" icon="fa-solid fa-arrow-left" iconPosition="left">Back</Button>
      <Button variant="primary" icon="fa-solid fa-arrow-right" iconPosition="right">Next</Button>
    </div>
  ),
};

export const IconOnlyButtons: Story = {
  render: () => (
    <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" icon="fa-solid fa-search" aria-label="Search" />
      <Button variant="secondary" icon="fa-solid fa-cog" aria-label="Settings" />
      <Button variant="success" icon="fa-solid fa-plus" aria-label="Add" />
      <Button variant="danger" icon="fa-solid fa-times" aria-label="Close" />
      <Button variant="info" icon="fa-solid fa-info-circle" aria-label="Information" />
      <Button variant="warning" icon="fa-solid fa-edit" aria-label="Edit" />
    </div>
  ),
};
