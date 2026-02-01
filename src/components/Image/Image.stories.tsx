import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";
import placeholderImage from "../../assets/images/placeholder.webp";

const meta = {
  title: " ⭐ Recent/Image",
  component: Image,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    src: placeholderImage,
    alt: "Placeholder image demonstrating basic responsive image",
    fluid: true,
  },
};

export const WithCaption: Story = {
  args: {
    src: placeholderImage,
    alt: "Landscape photography of the Northern Territory",
    caption:
      "A scenic view showcasing the natural beauty of the Northern Territory",
    fluid: true,
  },
};

export const Thumbnail: Story = {
  args: {
    src: placeholderImage,
    alt: "Image with thumbnail styling",
    thumbnail: true,
    fluid: true,
  },
};

export const ThumbnailWithCaption: Story = {
  args: {
    src: placeholderImage,
    alt: "Darwin waterfront at sunset",
    caption:
      "Darwin waterfront featuring modern infrastructure and recreational spaces",
    thumbnail: true,
    fluid: true,
  },
};

export const RoundedSmall: Story = {
  args: {
    src: placeholderImage,
    alt: "Image with small border radius",
    rounded: "sm",
    fluid: true,
  },
};

export const RoundedMedium: Story = {
  args: {
    src: placeholderImage,
    alt: "Image with medium border radius",
    rounded: "md",
    fluid: true,
  },
};

export const RoundedLarge: Story = {
  args: {
    src: placeholderImage,
    alt: "Image with large border radius",
    rounded: "lg",
    fluid: true,
  },
};

export const RoundedCircle: Story = {
  args: {
    src: placeholderImage,
    alt: "Circular image for profile or avatar",
    rounded: "circle",
    fluid: true,
    style: { width: "200px", height: "200px", objectFit: "cover" },
  },
};

export const NonFluid: Story = {
  args: {
    src: placeholderImage,
    alt: "Fixed-width image",
    fluid: false,
    style: { width: "300px" },
  },
};

export const AllVariants: Story = {
  args: {
    src: placeholderImage,
    alt: "Placeholder image",
  },
  render: () => (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-6">
          <h5>Basic Responsive</h5>
          <Image
            src={placeholderImage}
            alt="Basic responsive image"
            fluid={true}
          />
        </div>
        <div className="col-md-6">
          <h5>With Caption</h5>
          <Image
            src={placeholderImage}
            alt="Government service center"
            caption="Modern service center providing community support and resources"
            fluid={true}
          />
        </div>
        <div className="col-md-6">
          <h5>Thumbnail</h5>
          <Image
            src={placeholderImage}
            alt="Thumbnail styled image"
            thumbnail={true}
            fluid={true}
          />
        </div>
        <div className="col-md-6">
          <h5>Thumbnail with Caption</h5>
          <Image
            src={placeholderImage}
            alt="Infrastructure project"
            caption="New infrastructure development supporting community growth"
            thumbnail={true}
            fluid={true}
          />
        </div>
        <div className="col-md-3">
          <h6>Rounded Small</h6>
          <Image
            src={placeholderImage}
            alt="Small rounded corners"
            rounded="sm"
            fluid={true}
          />
        </div>
        <div className="col-md-3">
          <h6>Rounded Medium</h6>
          <Image
            src={placeholderImage}
            alt="Medium rounded corners"
            rounded="md"
            fluid={true}
          />
        </div>
        <div className="col-md-3">
          <h6>Rounded Large</h6>
          <Image
            src={placeholderImage}
            alt="Large rounded corners"
            rounded="lg"
            fluid={true}
          />
        </div>
        <div className="col-md-3">
          <h6>Circle</h6>
          <Image
            src={placeholderImage}
            alt="Circular image"
            rounded="circle"
            fluid={true}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  ),
};

export const CombinedStyles: Story = {
  args: {
    src: placeholderImage,
    alt: "Placeholder image",
  },
  render: () => (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-4">
          <Image
            src={placeholderImage}
            alt="Community event"
            caption="Annual community festival bringing together local residents"
            thumbnail={true}
            rounded="sm"
            fluid={true}
          />
        </div>
        <div className="col-md-4">
          <Image
            src={placeholderImage}
            alt="Public park"
            caption="Renovated public space with accessible facilities"
            thumbnail={true}
            rounded="md"
            fluid={true}
          />
        </div>
        <div className="col-md-4">
          <Image
            src={placeholderImage}
            alt="Education facility"
            caption="State-of-the-art learning center for all ages"
            thumbnail={true}
            rounded="lg"
            fluid={true}
          />
        </div>
      </div>
    </div>
  ),
};
