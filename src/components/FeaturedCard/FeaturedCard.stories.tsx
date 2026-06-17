import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeaturedCard } from "./FeaturedCard";

const SAMPLE_BODY = (
  <div>
    <h2>Explore the Northern Territory</h2>
    <p>
      The Northern Territory is one of Australia&apos;s most unique
      destinations, offering ancient landscapes, rich Indigenous culture, and
      extraordinary wildlife. From the iconic Uluru to the lush wetlands of
      Kakadu, there is no shortage of breathtaking experiences.
    </p>
  </div>
);

const SAMPLE_IMAGE = {
  src: "https://picsum.photos/seed/featured/800/600",
  alt: "Aerial view of the Northern Territory landscape",
};

const SAMPLE_IMAGE_WITH_CAPTION = {
  ...SAMPLE_IMAGE,
  caption: "Photo: NT Government Media",
};

const SAMPLE_IMAGE_WITH_AUTHOR = {
  ...SAMPLE_IMAGE,
  author: {
    name: "Jane Smith",
    agency: "Department of Tourism",
  },
};

const meta = {
  title: "Migrated/FeaturedCard",
  component: FeaturedCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    imagePosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the image column relative to the content.",
    },
    background: {
      control: "select",
      options: ["white", "grey", "blue", "dark"],
      description:
        '"white" also applies a box shadow. "blue" and "dark" invert the text colour.',
    },
    border: {
      control: "select",
      options: ["none", "default"],
      description: "Border style around the card.",
    },
  },
} satisfies Meta<typeof FeaturedCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant: image on the right, white background, single primary CTA.
 * Mirrors the Squiz paint layout defaults (image-right, background-white,
 * no border, primary button labelled "Read more").
 */
export const Default: Story = {
  args: {
    body: SAMPLE_BODY,
    image: SAMPLE_IMAGE,
    imagePosition: "right",
    background: "white",
    border: "none",
    primaryAction: {
      text: "Read more",
      href: "#",
    },
  },
};

/**
 * Image positioned to the left of the content column.
 * Achieved by applying Bootstrap `order-last` to the content column.
 */
export const ImageLeft: Story = {
  args: {
    ...Default.args,
    imagePosition: "left",
  },
};

/**
 * Both primary and secondary CTAs displayed side-by-side.
 * The secondary action is only rendered when a primary action is also present.
 */
export const WithSecondaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      text: "Learn more",
      href: "#learn",
    },
    secondaryAction: {
      text: "Contact us",
      href: "#contact",
    },
  },
};

/**
 * Grey background variant — the box shadow is not applied.
 */
export const GreyBackground: Story = {
  args: {
    ...Default.args,
    background: "grey",
  },
};

/**
 * Blue background variant — text colour inverts to white.
 */
export const BlueBackground: Story = {
  args: {
    ...Default.args,
    background: "blue",
  },
};

/**
 * Dark background variant — text colour inverts to white.
 */
export const DarkBackground: Story = {
  args: {
    ...Default.args,
    background: "dark",
  },
};

/**
 * Photo credit caption rendered beneath the card when `image.caption` is set.
 * Caption is right-aligned when `imagePosition` is `"right"`.
 */
export const WithImageCaption: Story = {
  args: {
    ...Default.args,
    image: SAMPLE_IMAGE_WITH_CAPTION,
  },
};

/**
 * Avatar fallback — shown when the image has an associated `author` and no
 * `caption`. Mirrors the Squiz paint layout's `%asset_metadata_content.author%`
 * fallback block.
 */
export const WithAuthorAvatar: Story = {
  args: {
    ...Default.args,
    image: SAMPLE_IMAGE_WITH_AUTHOR,
  },
};

/**
 * Text-only layout — no image prop provided. The image column is hidden and
 * the content column spans the full width.
 */
export const NoImage: Story = {
  args: {
    body: SAMPLE_BODY,
    imagePosition: "right",
    background: "white",
    border: "none",
    primaryAction: {
      text: "Read more",
      href: "#",
    },
  },
};

/**
 * Long-form body exercising WYSIWYG content wrapping across multiple
 * paragraphs.
 */
export const LongBody: Story = {
  args: {
    ...Default.args,
    body: (
      <div>
        <h2>A rich history of land and culture</h2>
        <p>
          The Northern Territory has been home to Aboriginal Australians for
          over 50,000 years, making it one of the oldest continuously inhabited
          places on Earth. Their deep connection to country is reflected in the
          art, ceremony, language and law that continues to shape the Territory
          today.
        </p>
        <p>
          Visitors can explore this living culture through community-led tours,
          rock art sites, and the vibrant festivals that bring communities
          together throughout the year.
        </p>
        <p>
          The Territory&apos;s landscapes are equally spectacular — from the red
          desert interior to the monsoonal Top End, every season reveals a
          different face of this extraordinary land.
        </p>
      </div>
    ),
  },
};

/**
 * With border — shows the `"default"` border option.
 */
export const WithBorder: Story = {
  args: {
    ...Default.args,
    border: "default",
    background: "white",
  },
};
