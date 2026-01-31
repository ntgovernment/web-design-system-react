import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'This is a primary alert—check it out!',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'This is a success alert—check it out!',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'This is a danger alert—check it out!',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    dismissible: true,
    children: 'This is a dismissible alert. Click the × to close it.',
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Alert content',
  },
  render: () => (
    <div className="d-flex flex-column gap-2">
      <Alert variant="primary">Primary alert</Alert>
      <Alert variant="secondary">Secondary alert</Alert>
      <Alert variant="success">Success alert</Alert>
      <Alert variant="danger">Danger alert</Alert>
      <Alert variant="warning">Warning alert</Alert>
      <Alert variant="info">Info alert</Alert>
      <Alert variant="light">Light alert</Alert>
      <Alert variant="dark">Dark alert</Alert>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    variant: 'success',
    icon: 'fa-light fa-circle-check',
    children: 'Your action was successful!',
  },
};

export const ContextualIcons: Story = {
  args: {
    children: 'Alert content',
  },
  render: () => (
    <div className="d-flex flex-column gap-2">
      <Alert variant="success" icon="fa-light fa-circle-check">
        Success! Your changes have been saved.
      </Alert>
      <Alert variant="danger" icon="fa-light fa-circle-exclamation">
        Error! There was a problem with your request.
      </Alert>
      <Alert variant="warning" icon="fa-light fa-triangle-exclamation">
        Warning! Please review your information before proceeding.
      </Alert>
      <Alert variant="info" icon="fa-light fa-circle-info">
        Info: You can now access the new features.
      </Alert>
    </div>
  ),
};

export const DismissibleWithIcon: Story = {
  args: {
    variant: 'warning',
    icon: 'fa-light fa-triangle-exclamation',
    dismissible: true,
    children: 'This is a dismissible alert with an icon. Click the × to close it.',
  },
};
