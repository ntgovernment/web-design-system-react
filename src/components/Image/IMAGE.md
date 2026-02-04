# Image Component

A responsive image component with optional thumbnail styling, border radius variants, and semantic figure support with captions.

## Features

- Responsive images (fluid by default)
- Thumbnail styling with borders, padding, and shadows
- Border radius variants (sm, md, lg, circle)
- Automatic figure wrapper with captions
- Full TypeScript support
- Theme-specific styling (NTG and Central themes)
- Accessible HTML image properties
- Design token integration

## Usage

### Basic Responsive Image

```tsx
import { Image } from "@ntgovernment/web-design-system";

<Image src="/path/to/image.jpg" alt="Descriptive text for the image" />;
```

### Image with Caption

When a caption is provided, the image is automatically wrapped in a semantic `<figure>` element:

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Darwin waterfront at sunset"
  caption="Darwin waterfront featuring modern infrastructure and recreational spaces"
/>
```

This renders as:

```html
<figure class="figure">
  <img
    src="/path/to/image.jpg"
    alt="Darwin waterfront at sunset"
    class="figure-img img-fluid"
  />
  <figcaption class="figure-caption">
    Darwin waterfront featuring modern infrastructure and recreational spaces
  </figcaption>
</figure>
```

### Thumbnail Styling

Add thumbnail styling with borders, padding, and subtle shadows:

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Image with thumbnail styling"
  thumbnail={true}
/>
```

### Thumbnail with Caption

Combine thumbnail styling with a caption:

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Community event"
  caption="Annual community festival bringing together local residents"
  thumbnail={true}
/>
```

### Border Radius Variants

Apply different border radius styles:

```tsx
// Small rounded corners
<Image src="/path/to/image.jpg" alt="Image" rounded="sm" />

// Medium rounded corners
<Image src="/path/to/image.jpg" alt="Image" rounded="md" />

// Large rounded corners
<Image src="/path/to/image.jpg" alt="Image" rounded="lg" />

// Circular image (great for avatars)
<Image
  src="/path/to/image.jpg"
  alt="Profile picture"
  rounded="circle"
  style={{ width: '200px', height: '200px', objectFit: 'cover' }}
/>
```

### Non-Fluid (Fixed Width) Images

By default, images are fluid (responsive). To use a fixed width:

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Fixed width image"
  fluid={false}
  style={{ width: "300px" }}
/>
```

### Combined Styles

Mix and match properties:

```tsx
<Image
  src="/path/to/image.jpg"
  alt="Government service center"
  caption="Modern service center providing community support and resources"
  thumbnail={true}
  rounded="md"
/>
```

## Props

### ImageProps

| Prop               | Type                                         | Default | Description                                                     |
| ------------------ | -------------------------------------------- | ------- | --------------------------------------------------------------- |
| `src`              | `string`                                     | -       | Image source URL (required)                                     |
| `alt`              | `string`                                     | -       | Alternative text for accessibility (required)                   |
| `fluid`            | `boolean`                                    | `true`  | Makes the image responsive (max-width: 100%, height: auto)      |
| `thumbnail`        | `boolean`                                    | `false` | Applies thumbnail styling with border, padding, and shadow      |
| `rounded`          | `'sm' \| 'md' \| 'lg' \| 'circle' \| 'none'` | `none`  | Border radius variant                                           |
| `caption`          | `string`                                     | -       | Optional caption text - wraps image in `<figure>` when provided |
| `captionClassName` | `string`                                     | -       | Additional CSS classes for the caption element                  |
| `className`        | `string`                                     | -       | Additional CSS classes for the image element                    |
| ...props           | `React.ImgHTMLAttributes<HTMLImageElement>`  | -       | All standard HTML img attributes (loading, sizes, srcSet, etc.) |

## Accessibility

### Alternative Text (Required)

All images **must** include an `alt` attribute for accessibility:

```tsx
// ✅ Correct - has descriptive alt text
<Image src="/photo.jpg" alt="Darwin waterfront at sunset" />

// ❌ Incorrect - missing alt attribute
<Image src="/photo.jpg" />
```

### Decorative Images

For purely decorative images, use an empty `alt` attribute:

```tsx
<Image src="/decorative-pattern.png" alt="" />
```

### Captions vs Alt Text

- **Alt text** (`alt`): Describes the image content for users who cannot see the image
- **Caption** (`caption`): Provides additional context or attribution for all users

Both serve different purposes and should be used together when appropriate:

```tsx
<Image
  src="/landscape.jpg"
  alt="Wide-angle view of Kakadu National Park wetlands during the wet season"
  caption="Kakadu National Park - Photo by NT Tourism Commission"
/>
```

### Responsive Images

Use the native `srcSet` and `sizes` attributes for responsive image delivery:

```tsx
<Image
  src="/image-800.jpg"
  srcSet="/image-400.jpg 400w, /image-800.jpg 800w, /image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Responsive image"
/>
```

### Lazy Loading

Use the native `loading` attribute for performance:

```tsx
<Image src="/image.jpg" alt="Lazy loaded image" loading="lazy" />
```

## Theming

The Image component uses design tokens and theme-specific CSS files for styling:

- **Common styles**: `Image.css` - Shared styles for all themes
- **NTG theme**: `Image-ntg.css` - NT.GOV.AU theme overrides
- **Central theme**: `Image-central.css` - NTG Central theme overrides

### Design Tokens Used

The component leverages the following design tokens:

| Token Category                | Usage                                           |
| ----------------------------- | ----------------------------------------------- |
| `--sp-xxs`                    | Thumbnail padding                               |
| `--sp-xs`                     | Figure caption margin                           |
| `--sp-md`                     | Figure bottom margin                            |
| `--radii-sm`                  | Small border radius                             |
| `--radii-md`                  | Medium border radius                            |
| `--radii-lg`                  | Large border radius (circle for rounded-circle) |
| `--border-width-md`           | Thumbnail border width                          |
| `--clr-border-subtle`         | Thumbnail border color                          |
| `--clr-bg-default`            | Thumbnail background color                      |
| `--shadow-sm`                 | Thumbnail shadow                                |
| `--clr-text-muted`            | Figure caption text color                       |
| `--type-caption-default-size` | Figure caption font size                        |

### Theme Differences

| Feature                | NTG Theme      | Central Theme      |
| ---------------------- | -------------- | ------------------ |
| Border Radius (sm)     | 4px            | 4px                |
| Border Radius (md)     | 20px           | 16px               |
| Border Radius (circle) | 100px          | 100px              |
| Caption Color          | ntg-neutral-06 | central-neutral-06 |

## Examples

### Gallery Grid

```tsx
import { Image } from "@ntgovernment/web-design-system";

function PhotoGallery() {
  return (
    <div className="row g-4">
      <div className="col-md-4">
        <Image
          src="/photo1.jpg"
          alt="Community event"
          caption="Annual community festival"
          thumbnail={true}
          rounded="sm"
        />
      </div>
      <div className="col-md-4">
        <Image
          src="/photo2.jpg"
          alt="Public park"
          caption="Renovated public space"
          thumbnail={true}
          rounded="sm"
        />
      </div>
      <div className="col-md-4">
        <Image
          src="/photo3.jpg"
          alt="Education facility"
          caption="Learning center for all ages"
          thumbnail={true}
          rounded="sm"
        />
      </div>
    </div>
  );
}
```

### Profile Avatar

```tsx
<Image
  src="/avatar.jpg"
  alt="John Smith"
  rounded="circle"
  style={{ width: "150px", height: "150px", objectFit: "cover" }}
/>
```

### Responsive Hero Image

```tsx
<Image
  src="/hero-image.jpg"
  srcSet="/hero-400.jpg 400w, /hero-800.jpg 800w, /hero-1600.jpg 1600w"
  sizes="100vw"
  alt="Darwin skyline at sunset"
  className="w-100"
/>
```

### Image with Custom Caption Styling

```tsx
<Image
  src="/photo.jpg"
  alt="Historic building"
  caption="Parliament House - Built 1994"
  captionClassName="text-center fst-italic"
  thumbnail={true}
/>
```

## Related Documentation

- [Design Tokens](../../design-tokens/DESIGN-TOKENS.md) - Design token system overview
- [Theming Guide](../../themes/THEMES.md) - Theme system overview
- [Theme Switching](../../themes/THEME_SWITCHING.md) - Runtime theme switching
- [Bootstrap Images](https://getbootstrap.com/docs/5.3/content/images/) - Bootstrap documentation

## Storybook

View live examples and interact with the Image component in Storybook:

```bash
npm run storybook
```

Navigate to **⭐ Recent > Image** to see all variants and configurations.

## TypeScript

The Image component is fully typed with TypeScript. Import the types:

```tsx
import { Image, ImageProps } from "@ntgovernment/web-design-system";

// Use ImageProps for custom wrappers or extensions
const MyCustomImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} />;
};
```

## Browser Support

The Image component supports all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Bootstrap 5.3.3 must be loaded (either via CDN or npm) for the component to style correctly
- Images are fluid (responsive) by default - set `fluid={false}` for fixed-width images
- The `caption` prop automatically wraps the image in a semantic `<figure>` element
- All standard HTML img attributes (srcSet, sizes, loading) are supported via spread props
- For circular images (`rounded="circle"`), ensure the image has equal width and height and use `objectFit: 'cover'`
- Custom CSS classes can be added via the `className` prop for the image or `captionClassName` for the caption
