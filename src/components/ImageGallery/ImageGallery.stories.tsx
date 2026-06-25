import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ImageGallery,
  type ImageAsset,
  type ImageGalleryBackgroundColour,
} from "./ImageGallery";

const SINGLE_IMAGES_DATA: ImageAsset[] = [
  {
    asset_assetid: 101,
    asset_short_name: "Darwin Waterfront",
    asset_url: "https://picsum.photos/seed/darwin-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/darwin-small/640/480",
    asset_attribute_caption: "Darwin waterfront at sunset",
    asset_attribute_alt: "Darwin waterfront with orange sunset sky",
  },
  {
    asset_assetid: 102,
    asset_short_name: "Kakadu Wetlands",
    asset_url: "https://picsum.photos/seed/kakadu-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/kakadu-small/640/480",
    asset_attribute_caption: "Wetlands in Kakadu during the wet season",
    asset_attribute_alt: "Kakadu wetlands with waterbirds and green reeds",
  },
  {
    asset_assetid: 103,
    asset_short_name: "Uluru",
    asset_url: "https://picsum.photos/seed/uluru-full/1200/900",
    image_v_small_url: "",
    asset_attribute_caption: "Uluru landscape view",
    asset_attribute_alt: "Uluru rock formation under a clear sky",
  },
];

const FOLDER_IMAGES_DATA: ImageAsset[] = [
  {
    asset_assetid: 201,
    asset_short_name: "Community Event",
    asset_url: "https://picsum.photos/seed/community-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/community-small/640/480",
    asset_attribute_caption: "Community event in regional NT",
    asset_attribute_alt: "Crowd attending a community event in the Northern Territory",
  },
  {
    asset_assetid: 202,
    asset_short_name: "National Park",
    asset_url: "https://picsum.photos/seed/park-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/park-small/640/480",
    asset_attribute_caption: "National park lookout",
    asset_attribute_alt: "Elevated lookout across a Northern Territory national park",
  },
  {
    asset_assetid: 203,
    asset_short_name: "Outback Road",
    asset_url: "https://picsum.photos/seed/outback-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/outback-small/640/480",
    asset_attribute_caption: "Outback road at golden hour",
    asset_attribute_alt: "Long outback road disappearing into horizon at golden hour",
  },
  {
    asset_assetid: 204,
    asset_short_name: "Art Centre",
    asset_url: "https://picsum.photos/seed/art-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/art-small/640/480",
    asset_attribute_caption: "Local art centre exhibition",
    asset_attribute_alt: "Visitors exploring artwork at a local art centre",
  },
  {
    asset_assetid: 205,
    asset_short_name: "No Alt Text Example",
    asset_url: "https://picsum.photos/seed/no-alt-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/no-alt-small/640/480",
    asset_attribute_caption: "Alt text falls back to short name",
    asset_attribute_alt: "",
  },
  {
    asset_assetid: 206,
    asset_short_name: "No Caption Example",
    asset_url: "https://picsum.photos/seed/no-caption-full/1200/900",
    image_v_small_url: "https://picsum.photos/seed/no-caption-small/640/480",
    asset_attribute_caption: "",
    asset_attribute_alt: "Scenic valley view with low clouds",
  },
];

const backgroundOptions: ImageGalleryBackgroundColour[] = [
  "default",
  "shade",
  "shade-alt",
];

const meta = {
  title: "Migrated/ImageGallery",
  component: ImageGallery,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    sourceType: {
      control: "select",
      options: ["singleImages", "folder"],
      description: "Image source type from CMS configuration.",
    },
    sectionTitle: {
      control: "text",
      description: "Optional heading displayed above the gallery grid.",
    },
    backgroundColour: {
      control: "select",
      options: backgroundOptions,
      description: "Background variant using design token-based colours.",
    },
    images: {
      control: "object",
      description: "Decoded image asset array from single images or folder child assets.",
    },
  },
} satisfies Meta<typeof ImageGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleImageSelection: Story = {
  args: {
    sourceType: "singleImages",
    sectionTitle: "Featured images",
    backgroundColour: "default",
    images: SINGLE_IMAGES_DATA,
  },
};

export const FolderBasedGallery: Story = {
  args: {
    sourceType: "folder",
    sectionTitle: "Gallery from selected folder",
    backgroundColour: "shade",
    images: FOLDER_IMAGES_DATA,
  },
};

export const EmptySingleImages: Story = {
  args: {
    sourceType: "singleImages",
    sectionTitle: "Featured images",
    backgroundColour: "shade-alt",
    images: [],
  },
};

export const EmptyFolder: Story = {
  args: {
    sourceType: "folder",
    sectionTitle: "Gallery from selected folder",
    backgroundColour: "default",
    images: [],
  },
};
