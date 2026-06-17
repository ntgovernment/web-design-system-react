/**
 * FeaturedCard DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/FeaturedCard/FeaturedCard.tsx`
 * on the Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester)
 * styles the output.
 *
 * Migrated from: "NTGDS - Featured content (landing page only)"
 * Squiz Content Container Template (paint layout: sel.original.backup.txt).
 *
 * This renderer is intentionally non-interactive: Button onClick navigation
 * is replaced by standard anchor elements styled with the design system's
 * btn classes. FormattedText (WYSIWYG body) is passed through unescaped;
 * all other user-supplied strings are escaped via esc().
 */

const VALID_BACKGROUNDS = new Set(["white", "grey", "blue", "dark"]);
const VALID_POSITIONS = new Set(["left", "right"]);
const VALID_BORDERS = new Set(["none", "default"]);

/** HTML-escape for text content and attribute values. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Renders a CTA anchor styled as a design-system button. */
function renderAction(text, href, external, variant) {
  if (!text || !href) return "";
  const targetAttrs = external
    ? ` target="_blank" rel="noopener noreferrer"`
    : "";
  return `
    <a href="${esc(href)}" class="btn btn-${esc(variant)} featured-card__btn"${targetAttrs}>
      ${esc(text)}
    </a>`;
}

/** Renders the optional photo-credit / author avatar block. */
function renderPhotoCredit(
  imageCaption,
  authorName,
  authorAgency,
  imagePosition,
) {
  if (imageCaption) {
    const captionClass =
      imagePosition === "right"
        ? "featured-card__img-caption featured-card__img-caption--right"
        : "featured-card__img-caption";
    return `
    <div class="featured-card__photo-credit">
      <div class="${captionClass}">
        <span class="featured-card__caption-text">${esc(imageCaption)}</span>
      </div>
    </div>`;
  }

  if (authorName) {
    const avatarClass =
      imagePosition === "right"
        ? "featured-card__avatar featured-card__avatar--right"
        : "featured-card__avatar";
    const initial = esc(authorName.charAt(0).toUpperCase());
    const agencyHtml = authorAgency
      ? `<span class="featured-card__avatar-agency">${esc(authorAgency)}</span>`
      : "";
    return `
    <div class="featured-card__photo-credit">
      <div class="${avatarClass}">
        <div class="featured-card__avatar-icon" aria-hidden="true">
          <span class="featured-card__avatar-initial">${initial}</span>
        </div>
        <div class="featured-card__avatar-text">
          <span class="featured-card__avatar-name">${esc(authorName)}</span>
          ${agencyHtml}
        </div>
      </div>
    </div>`;
  }

  return "";
}

export default {
  async main(input) {
    const {
      body = "",
      imagePosition = "right",
      background = "white",
      border = "none",
      imageSrc = "",
      imageAlt = "",
      imageCaption = "",
      authorName = "",
      authorAgency = "",
      primaryActionText = "",
      primaryActionHref = "",
      primaryActionExternal = false,
      secondaryActionText = "",
      secondaryActionHref = "",
      secondaryActionExternal = false,
    } = input || {};

    const safeBg = VALID_BACKGROUNDS.has(background) ? background : "white";
    const safePos = VALID_POSITIONS.has(imagePosition)
      ? imagePosition
      : "right";
    const safeBorder = VALID_BORDERS.has(border) ? border : "none";

    // Wrapper classes
    const shadowClass = safeBg === "white" ? " featured-card--shadow" : "";
    const borderClass =
      safeBorder === "none" ? " featured-card--border-none" : "";
    const wrapperClass = `featured-card featured-card--background-${safeBg}${shadowClass}${borderClass}`;

    // Content column classes — order-last pushes content after image (image appears left)
    const contentColClass = `col-12 col-md-7 featured-card__content-col${safePos === "left" ? " order-last" : ""}`;
    const imageColClass = `col-12 col-md-5 featured-card__image-col${!imageSrc ? " d-none" : ""}`;

    // Actions — body is FormattedText (HTML), passed through unescaped
    const bodyHtml = String(body ?? "");

    const primaryActionHtml = renderAction(
      primaryActionText,
      primaryActionHref,
      primaryActionExternal,
      "primary",
    );
    const secondaryActionHtml = primaryActionText
      ? renderAction(
          secondaryActionText,
          secondaryActionHref,
          secondaryActionExternal,
          "secondary",
        )
      : "";

    const actionsHtml = primaryActionHtml
      ? `<div class="featured-card__actions">${primaryActionHtml}${secondaryActionHtml}</div>`
      : "";

    const imageHtml = imageSrc
      ? `
      <div class="featured-card__image-wrapper">
        <img
          src="${esc(imageSrc)}"
          alt="${esc(imageAlt)}"
          class="img-fluid featured-card__image"
        />
      </div>`
      : "";

    const photoCreditHtml = renderPhotoCredit(
      imageCaption,
      authorName,
      authorAgency,
      safePos,
    );

    return `
<div class="${wrapperClass}">
  <div class="row g-0">
    <div class="${contentColClass}">
      <div class="featured-card__content">
        <div class="featured-card__body bct-wysiwyg">
          ${bodyHtml}
        </div>
        ${actionsHtml}
      </div>
    </div>
    <div class="${imageColClass}">
      ${imageHtml}
    </div>
  </div>
  ${photoCreditHtml}
</div>`;
  },
};
