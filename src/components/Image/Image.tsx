import React from "react";
import "./Image.css";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Image source URL
   */
  src: string;
  /**
   * Alternative text for the image (required for accessibility)
   */
  alt: string;
  /**
   * Makes the image responsive (max-width: 100%, height: auto)
   */
  fluid?: boolean;
  /**
   * Applies thumbnail styling with border, padding, and shadow
   */
  thumbnail?: boolean;
  /**
   * Border radius variant
   */
  rounded?: "sm" | "md" | "lg" | "circle" | "none";
  /**
   * Optional caption text - when provided, wraps image in a <figure> element
   */
  caption?: string;
  /**
   * Additional CSS classes for the caption element
   */
  captionClassName?: string;
}

/**
 * Responsive image component with optional thumbnail styling and figure caption
 *
 * When a caption is provided, the image is automatically wrapped in a semantic
 * <figure> element with <figcaption>. Otherwise, renders as a standard <img>.
 */
export const Image = ({
  src,
  alt,
  fluid = true,
  thumbnail = false,
  rounded,
  caption,
  captionClassName,
  className: customClassName,
  ...props
}: ImageProps) => {
  // Build image classes
  const imgClasses = [
    caption && "figure-img",
    fluid && "img-fluid",
    thumbnail && "img-thumbnail",
    rounded && rounded !== "none" && `rounded-${rounded}`,
    customClassName,
  ]
    .filter(Boolean)
    .join(" ");

  // Build caption classes
  const figcaptionClasses = ["figure-caption", captionClassName]
    .filter(Boolean)
    .join(" ");

  const imgElement = (
    <img src={src} alt={alt} className={imgClasses} {...props} />
  );

  // If caption is provided, wrap in figure
  if (caption) {
    return (
      <figure className="figure">
        {imgElement}
        <figcaption className={figcaptionClasses}>{caption}</figcaption>
      </figure>
    );
  }

  // Otherwise, return just the image
  return imgElement;
};
