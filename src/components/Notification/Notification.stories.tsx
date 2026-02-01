import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";

const meta = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
      description: "The variant/status type of the notification",
    },
    title: {
      control: "text",
      description: "The title/heading of the notification",
    },
    message: {
      control: "text",
      description: "The message content of the notification",
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default notification with info variant
 */
export const Default: Story = {
  args: {
    variant: "info",
    title: "Information alert",
    message:
      "Your application has been submitted for review. You will receive an email notification once the review process is complete. This typically takes 2-3 business days.",
  },
};

/**
 * Success notification
 */
export const Success: Story = {
  args: {
    variant: "success",
    title: "Success notification",
    message:
      "Your action was completed successfully. All changes have been saved and are now live.",
  },
};

/**
 * Warning notification
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning notification",
    message:
      "Please review the following information carefully before proceeding. Some actions may be irreversible.",
  },
};

/**
 * Danger notification
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    title: "Error notification",
    message:
      "An error has occurred while processing your request. Please try again or contact support if the issue persists.",
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  args: {
    variant: "info",
    title: "Information alert",
    message: "Callout content.",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Notification
        variant="info"
        title="Information alert"
        message="Your application has been submitted for review. You will receive an email notification once the review process is complete."
      />
      <Notification
        variant="success"
        title="Success notification"
        message="Your action was completed successfully. All changes have been saved and are now live."
      />
      <Notification
        variant="warning"
        title="Warning notification"
        message="Please review the following information carefully before proceeding. Some actions may be irreversible."
      />
      <Notification
        variant="danger"
        title="Error notification"
        message="An error has occurred while processing your request. Please try again or contact support."
      />
    </div>
  ),
};

/**
 * Notification with long content to demonstrate text wrapping
 */
export const LongContent: Story = {
  args: {
    variant: "info",
    title: "Extended information notification with a longer title",
    message:
      "This is a notification with significantly longer content to demonstrate how the component handles text wrapping and maintains readability. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc neque. Praesent posuere lobortis purus, ac laoreet est volutpat in. Sed vehicula mauris vel diam ornare, vel hendrerit eros consectetur. Nullam facilisis nisi vitae massa fermentum, at aliquet dolor venenatis. Curabitur hendrerit massa at tellus scelerisque, non mollis dui tincidunt.",
  },
};

/**
 * Short and concise notification
 */
export const ShortContent: Story = {
  args: {
    variant: "success",
    title: "Saved",
    message: "Your changes have been saved.",
  },
};
