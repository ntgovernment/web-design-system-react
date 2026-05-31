import type { Meta, StoryObj } from "@storybook/react";
import DisplayCardsAuto from "./DisplayCardsAuto";

const meta: Meta<typeof DisplayCardsAuto> = {
  title: "Components/DisplayCardsAuto",
  component: DisplayCardsAuto,
  args: {
    parentAssetId: "2000",
    columns: 3,
    backgroundColor: "white",
    sectionTitle: "Services under this category",
    sectionSubtitle: "Auto Mode: children loaded from parent asset",
    showDescription: true,
    showButton: true,
    actionText: "Read more",
    actionIcon: "fa-light fa-arrow-right"
  }
};

export default meta;

export const AutoMode: StoryObj<typeof DisplayCardsAuto> = {};
