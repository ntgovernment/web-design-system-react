import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'grey', 'green', 'blue', 'warning', 'red'],
      description: 'The visual style variant of the tag',
    },
    children: {
      control: 'text',
      description: 'The content to display inside the tag',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant - neutral styling for general use
 */
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

/**
 * Grey variant - muted neutral color
 */
export const Grey: Story = {
  args: {
    variant: 'grey',
    children: 'Grey',
  },
};

/**
 * Green variant - for success states or positive indicators
 */
export const Green: Story = {
  args: {
    variant: 'green',
    children: 'Green',
  },
};

/**
 * Blue variant - for informational states
 */
export const Blue: Story = {
  args: {
    variant: 'blue',
    children: 'Blue',
  },
};

/**
 * Warning variant - for caution or attention states
 */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

/**
 * Red variant - for error or danger states
 */
export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Red',
  },
};

/**
 * All variants displayed together for comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Tag variant="default">Default</Tag>
      <Tag variant="grey">Grey</Tag>
      <Tag variant="green">Green</Tag>
      <Tag variant="blue">Blue</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="red">Red</Tag>
    </div>
  ),
};

/**
 * Example usage in context - showing tags with different content lengths
 */
export const VariousLabels: Story = {
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Tag variant="green">Active</Tag>
      <Tag variant="blue">New</Tag>
      <Tag variant="warning">Pending Review</Tag>
      <Tag variant="red">Urgent</Tag>
      <Tag variant="grey">Archived</Tag>
      <Tag variant="default">Draft</Tag>
    </div>
  ),
};
