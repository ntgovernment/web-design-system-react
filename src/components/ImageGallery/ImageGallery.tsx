import React from "react";
import "./ImageGallery.css";

export interface ImageAsset {
  asset_assetid: string | number;
  asset_short_name?: string;
  asset_url?: string;
  image_v_small_url?: string;
  asset_attribute_caption?: string;
  asset_attribute_alt?: string;
}

export type ImageGallerySourceType = "singleImages" | "folder";

export type ImageGalleryBackgroundColour = "default" | "shade" | "shade-alt";

export interface ImageGalleryProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Data source type for image assets */
  sourceType: ImageGallerySourceType;
  /** Image asset array (decoded from JSON or folder children) */
  images: ImageAsset[];
  /** Optional section title rendered above the gallery */
  sectionTitle?: string;
  /** Optional background colour variant */
  backgroundColour?: ImageGalleryBackgroundColour;
}

interface NormalizedImageAsset {
  key: string;
  src: string;
  alt: string;
  caption?: string;
}

const EMPTY_STATE_MESSAGES: Record<ImageGallerySourceType, string> = {
  singleImages: "No images selected.",
  folder: "No images found in the selected folder.",
};

function normalizeImage(
  image: ImageAsset,
  index: number,
): NormalizedImageAsset | null {
  const src = image.image_v_small_url?.trim() || image.asset_url?.trim();
  if (!src) return null;

  const alt = image.asset_attribute_alt?.trim() || image.asset_short_name?.trim() || "Image";
  const caption = image.asset_attribute_caption?.trim();
  const keyBase = String(image.asset_assetid || image.asset_short_name || index);

  return {
    key: `${keyBase}-${index}`,
    src,
    alt,
    caption: caption || undefined,
  };
}

export const ImageGallery = ({
  sourceType,
  images,
  sectionTitle,
  backgroundColour = "default",
  className,
  ...props
}: ImageGalleryProps) => {
  const normalizedImages = images
    .map((image, index) => normalizeImage(image, index))
    .filter((image): image is NormalizedImageAsset => Boolean(image));

  const wrapperClasses = [
    "image-gallery",
    `image-gallery--background-${backgroundColour}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={wrapperClasses}
      data-source-type={sourceType}
      aria-label={sectionTitle || "Image gallery"}
      {...props}
    >
      {sectionTitle && <h2 className="image-gallery__title">{sectionTitle}</h2>}

      {normalizedImages.length === 0 ? (
        <p className="image-gallery__empty" role="status" aria-live="polite">
          {EMPTY_STATE_MESSAGES[sourceType]}
        </p>
      ) : (
        <div className="row g-4 image-gallery__grid">
          {normalizedImages.map((image) => (
            <div className="col-12 col-sm-6 col-lg-3" key={image.key}>
              <figure className="figure image-gallery__figure">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="figure-img img-fluid image-gallery__image"
                  loading="lazy"
                  decoding="async"
                />
                {image.caption && (
                  <figcaption className="figure-caption image-gallery__caption">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
