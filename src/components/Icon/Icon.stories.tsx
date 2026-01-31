import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'fa-light fa-circle-check',
  },
};

export const WithColor: Story = {
  args: {
    icon: 'fa-light fa-heart',
    color: '#dc3545',
  },
};

export const WithSize: Story = {
  args: {
    icon: 'fa-light fa-star',
    color: '#ffc107',
    size: '2rem',
  },
};

export const WithSpacing: Story = {
  args: {
    icon: 'fa-light fa-home',
  },
  render: (args) => (
    <div>
      <Icon {...args} />
      <span>Home</span>
    </div>
  ),
};

export const AllLightIcons: Story = {
  args: {
    icon: 'fa-light fa-home',
  },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '1rem', fontSize: '1.5rem' }}>
      <Icon icon="fa-light fa-home" ariaLabel="Home" />
      <Icon icon="fa-light fa-user" ariaLabel="User" />
      <Icon icon="fa-light fa-heart" ariaLabel="Heart" />
      <Icon icon="fa-light fa-star" ariaLabel="Star" />
      <Icon icon="fa-light fa-circle-check" ariaLabel="Check" />
      <Icon icon="fa-light fa-circle-xmark" ariaLabel="Close" />
      <Icon icon="fa-light fa-triangle-exclamation" ariaLabel="Warning" />
      <Icon icon="fa-light fa-circle-info" ariaLabel="Info" />
      <Icon icon="fa-light fa-download" ariaLabel="Download" />
      <Icon icon="fa-light fa-upload" ariaLabel="Upload" />
      <Icon icon="fa-light fa-trash" ariaLabel="Delete" />
      <Icon icon="fa-light fa-edit" ariaLabel="Edit" />
      <Icon icon="fa-light fa-cog" ariaLabel="Settings" />
      <Icon icon="fa-light fa-bell" ariaLabel="Notifications" />
      <Icon icon="fa-light fa-envelope" ariaLabel="Email" />
      <Icon icon="fa-light fa-phone" ariaLabel="Phone" />
      <Icon icon="fa-light fa-search" ariaLabel="Search" />
      <Icon icon="fa-light fa-filter" ariaLabel="Filter" />
      <Icon icon="fa-light fa-bars" ariaLabel="Menu" />
      <Icon icon="fa-light fa-ellipsis-vertical" ariaLabel="More" />
      <Icon icon="fa-light fa-arrow-left" ariaLabel="Back" />
      <Icon icon="fa-light fa-arrow-right" ariaLabel="Forward" />
      <Icon icon="fa-light fa-arrow-up" ariaLabel="Up" />
      <Icon icon="fa-light fa-arrow-down" ariaLabel="Down" />
      <Icon icon="fa-light fa-plus" ariaLabel="Add" />
      <Icon icon="fa-light fa-minus" ariaLabel="Remove" />
      <Icon icon="fa-light fa-times" ariaLabel="Close" />
      <Icon icon="fa-light fa-check" ariaLabel="Confirm" />
      <Icon icon="fa-light fa-calendar" ariaLabel="Calendar" />
      <Icon icon="fa-light fa-clock" ariaLabel="Time" />
      <Icon icon="fa-light fa-chart-line" ariaLabel="Chart" />
      <Icon icon="fa-light fa-chart-pie" ariaLabel="Pie Chart" />
    </div>
  ),
};

export const ColoredIcons: Story = {
  args: {
    icon: 'fa-light fa-circle-check',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '2rem' }}>
      <Icon icon="fa-light fa-circle-check" color="#28a745" ariaLabel="Success" />
      <Icon icon="fa-light fa-circle-info" color="#17a2b8" ariaLabel="Info" />
      <Icon icon="fa-light fa-triangle-exclamation" color="#ffc107" ariaLabel="Warning" />
      <Icon icon="fa-light fa-circle-xmark" color="#dc3545" ariaLabel="Error" />
      <Icon icon="fa-light fa-heart" color="#e83e8c" ariaLabel="Favorite" />
      <Icon icon="fa-light fa-star" color="#ffc107" ariaLabel="Rating" />
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    icon: 'fa-light fa-heart',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Icon icon="fa-light fa-heart" color="#dc3545" size="0.875rem" ariaLabel="Small heart" />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="1rem" ariaLabel="Normal heart" />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="1.5rem" ariaLabel="Medium heart" />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="2rem" ariaLabel="Large heart" />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="3rem" ariaLabel="XL heart" />
      <Icon icon="fa-light fa-heart" color="#dc3545" size="4rem" ariaLabel="XXL heart" />
    </div>
  ),
};

export const RegularIcons: Story = {
  args: {
    icon: 'fa-regular fa-circle',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
      <Icon icon="fa-regular fa-circle" ariaLabel="Circle outline" />
      <Icon icon="fa-regular fa-square" ariaLabel="Square outline" />
      <Icon icon="fa-regular fa-heart" ariaLabel="Heart outline" />
      <Icon icon="fa-regular fa-star" ariaLabel="Star outline" />
      <Icon icon="fa-regular fa-user" ariaLabel="User outline" />
      <Icon icon="fa-regular fa-envelope" ariaLabel="Envelope outline" />
      <Icon icon="fa-regular fa-calendar" ariaLabel="Calendar outline" />
      <Icon icon="fa-regular fa-clock" ariaLabel="Clock outline" />
    </div>
  ),
};

export const StatusIcons: Story = {
  args: {
    icon: 'fa-light fa-circle-check',
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon icon="fa-light fa-circle-check" color="var(--clr-status-success)" ariaHidden={true} />
        <span>Success message</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon icon="fa-light fa-circle-info" color="var(--clr-status-info)" ariaHidden={true} />
        <span>Information message</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon icon="fa-light fa-triangle-exclamation" color="var(--clr-status-warning)" ariaHidden={true} />
        <span>Warning message</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Icon icon="fa-light fa-circle-xmark" color="var(--clr-status-danger)" ariaHidden={true} />
        <span>Error message</span>
      </div>
    </div>
  ),
};
