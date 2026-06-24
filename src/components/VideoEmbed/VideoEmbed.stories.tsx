import type { Meta, StoryObj } from "@storybook/react-vite";
import { VideoEmbed } from "./VideoEmbed";

const meta = {
  title: "Migrated/VideoEmbed",
  component: VideoEmbed,
  tags: ["autodocs"],
  argTypes: {
    videoUrl: {
      control: "text",
    },
    includeText: {
      control: "boolean",
    },
    text: {
      control: "text",
    },
    textPosition: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    showControls: {
      control: "boolean",
    },
    showSuggestedVideos: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof VideoEmbed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoUrl: "https://www.youtube.com/watch?v=oKqLPS7LyZY",
    includeText: true,
    text: "Use this video example to preview how the embed renders with supporting content.",
    textPosition: "bottom",
    showControls: false,
    showSuggestedVideos: false,
  },
};

export const Vimeo: Story = {
  args: {
    videoUrl: "https://vimeo.com/76979871",
    includeText: true,
    text: "This Vimeo example uses the same existing props and layout controls.",
    textPosition: "right",
    showControls: false,
    showSuggestedVideos: false,
  },
};
