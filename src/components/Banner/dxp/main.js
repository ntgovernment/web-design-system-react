/**
 * Banner DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/Banner/Banner.tsx` on the Squiz
 * Edge runtime. Theme CSS (loaded site-wide via the head nester) provides all
 * styling. This is intentionally non-interactive: no React, no event handlers,
 * no client-side breadcrumb truncation menu — static HTML only. This matches
 * the Footer / Header / GlobalAlert edge patterns.
 *
 * `ctaOnClick` from the React component is not available here; authors must
 * supply `ctaHref` to make the CTA button functional.
 */

const VALID_VARIANTS = new Set(["primary", "secondary"]);
const VALID_CTA_VARIANTS = new Set(["primary", "secondary", "tertiary"]);
const VALID_LINKS_HEADINGS = new Set(["Popular", "Featured", "Related"]);

/** HTML-escape for text content and attribute values. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Mirrors the BreadcrumbsContent component — renders a simple <nav> with an
 * <ol class="breadcrumb"> list. No truncation menu (edge is static; menus
 * require React state). The primary variant's dark-background CSS overrides
 * are applied via Banner.css class rules on `.banner--primary .banner__breadcrumbs`.
 */
function renderBreadcrumbs(items) {
  if (!items || items.length === 0) return "";

  // Normalise: if no item is flagged isCurrent, treat the last item as current.
  const currentIndex = items.findIndex((item) => item.isCurrent);
  const resolvedCurrentIndex =
    currentIndex >= 0 ? currentIndex : items.length - 1;

  const listItems = items
    .map((item, index) => {
      const isCurrent = index === resolvedCurrentIndex;
      const liClass = `breadcrumb-item${isCurrent ? " active" : ""}`;
      const ariaCurrent = isCurrent ? ` aria-current="page"` : "";
      const inner = isCurrent
        ? `<span class="content-breadcrumbs__current">${esc(item.label)}</span>`
        : `<a class="content-breadcrumbs__link" href="${esc(item.href ?? "#")}">${esc(item.label)}</a>`;
      return `        <li class="${liClass}"${ariaCurrent}>${inner}</li>`;
    })
    .join("\n");

  return `
    <div class="banner__breadcrumbs">
      <nav aria-label="Breadcrumb" class="content-breadcrumbs" data-variant="default">
        <ol class="breadcrumb content-breadcrumbs__list">
${listItems}
        </ol>
      </nav>
    </div>`;
}

/**
 * Mirrors the CTA block in Banner.tsx. Renders an <a> when ctaHref is supplied
 * (the common case on edge), or a <button> as a fallback (for parity).
 */
function renderCta(ctaText, ctaHref, buttonVariant) {
  if (!ctaText) return "";
  const inner = ctaHref
    ? `<a href="${esc(ctaHref)}" class="btn btn-${esc(buttonVariant)}">${esc(ctaText)}</a>`
    : `<button type="button" class="btn btn-${esc(buttonVariant)}">${esc(ctaText)}</button>`;
  return `
          <div class="banner__cta">
            ${inner}
          </div>`;
}

/**
 * Mirrors the decorative block. Secondary variant renders two shape divs;
 * primary variant uses a CSS background-image on the container — no child
 * elements are needed, just the wrapper div.
 */
function renderDecorative(isSecondary) {
  const shapes = isSecondary
    ? `
          <div class="banner__decorative-shape banner__decorative-shape--large"></div>
          <div class="banner__decorative-shape banner__decorative-shape--small"></div>`
    : "";
  return `
      <div class="banner__decorative" aria-hidden="true">${shapes}
      </div>`;
}

/**
 * Mirrors the links panel. Secondary variant renders a vertical text-link list;
 * primary variant renders pill-style links.
 */
function renderLinks(linksHeading, links, isSecondary) {
  if (!linksHeading || !links || links.length === 0) return "";
  if (!VALID_LINKS_HEADINGS.has(linksHeading)) return "";

  let linkItems;
  if (isSecondary) {
    linkItems = links
      .map(
        (link) =>
          `            <a href="${esc(link.href)}" class="banner__link">${esc(link.label)}</a>`,
      )
      .join("\n");
    linkItems = `
          <div class="banner__links-vertical">
${linkItems}
          </div>`;
  } else {
    linkItems = links
      .map(
        (link) =>
          `            <a href="${esc(link.href)}" class="banner__pill-link" aria-label="${esc(link.label)}">${esc(link.label)}</a>`,
      )
      .join("\n");
    linkItems = `
          <div class="banner__links-list">
${linkItems}
          </div>`;
  }

  return `

        <div class="banner__links">
          <h2 class="banner__links-heading">${esc(linksHeading)}</h2>${linkItems}
        </div>`;
}

export default {
  async main(input) {
    const {
      variant = "primary",
      title = "",
      description = "",
      ctaText = "",
      ctaHref = "",
      ctaVariant,
      linksHeading = "",
      links = [],
      breadcrumbs = [],
      label = "",
      href = "",
      showDecorative,
    } = input || {};

    const safeVariant = VALID_VARIANTS.has(variant) ? variant : "primary";
    const isSecondary = safeVariant === "secondary";

    // Default ctaVariant is "secondary" for both banner variants — parity with Banner.tsx.
    const defaultCtaVariant = "secondary";
    const safeCtaVariant =
      ctaVariant && VALID_CTA_VARIANTS.has(ctaVariant)
        ? ctaVariant
        : defaultCtaVariant;

    // showDecorative defaults to true for both variants when not explicitly set.
    const shouldShowDecorative =
      showDecorative !== undefined ? Boolean(showDecorative) : true;

    // Build breadcrumb items: full array takes precedence over the label+href shortcut.
    let breadcrumbItems = [];
    if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
      breadcrumbItems = breadcrumbs;
    } else if (label && href) {
      breadcrumbItems = [
        { label, href },
        { label: "Current page", isCurrent: true },
      ];
    }

    const bannerClass = `banner banner--${safeVariant}`;

    return `
<div class="${bannerClass}" data-variant="${safeVariant}">
  ${shouldShowDecorative ? renderDecorative(isSecondary) : ""}
      <div class="banner__container">
        ${renderBreadcrumbs(breadcrumbItems)}
        <div class="banner__content">
          <div class="banner__main">
            <h1 class="banner__title">${esc(title)}</h1>
            ${description ? `<p class="banner__description">${esc(description)}</p>` : ""}
            ${renderCta(ctaText, ctaHref, safeCtaVariant)}
          </div>
          ${renderLinks(linksHeading, links, isSecondary)}
        </div>
      </div>
</div>
`;
  },
};
