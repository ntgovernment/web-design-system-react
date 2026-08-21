/**
 * Footer DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/Footer/Footer.tsx` on the
 * Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester)
 * styles the output. The Footer has no interactive state, so no inline
 * `<script>` is emitted — purely structural HTML.
 */

/** HTML-escape for text content and attribute values. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Mirrors `<Icon icon="..." className="me-2" />` from Footer.tsx. */
function renderIcon(icon, extraClass = "") {
  if (!icon) return "";
  const cls = `${icon}${extraClass ? ` ${extraClass}` : ""}`;
  return `<i class="${esc(cls)}" aria-hidden="true"></i>`;
}

/**
 * Resolve a Squiz `SquizLink` ImageAsset value to a URL string.
 *
 * The dev-ui passes ImageAsset references either as a plain URL string or
 * as an object with one of the common shape variants (`url`, `href`,
 * `value`, or a nested `asset.url`). We accept all of them so that local
 * preview data files can use the simplest form.
 */
function resolveAssetUrl(link) {
  if (!link) return "";
  if (typeof link === "string") return link;
  if (typeof link !== "object") return "";
  if (typeof link.url === "string") return link.url;
  if (typeof link.href === "string") return link.href;
  if (typeof link.value === "string") return link.value;
  if (link.asset && typeof link.asset.url === "string") return link.asset.url;
  return "";
}

/** Mirrors Footer.tsx → footer__sections list of `<div className="footer__section">`. */
function renderSections(sections) {
  if (!sections || sections.length === 0) return "";
  return sections
    .map((section) => {
      const sectionClass =
        section.columns === 2
          ? "footer__section footer__section--cols-2"
          : "footer__section";
      const titleHtml = section.title
        ? `<h5 class="footer__section-title">${esc(section.title)}</h5>`
        : "";
      const linksHtml = (section.links || [])
        .map(
          (link) => `
            <li class="footer__link-item">
              <div class="footer__link-marker"></div>
              <a href="${esc(link.href)}" class="footer__link">${esc(link.label)}</a>
            </li>`,
        )
        .join("");
      return `
        <div class="${sectionClass}">
          ${titleHtml}
          <ul class="footer__link-list" aria-label="${esc(section.title || "")}">
            ${linksHtml}
          </ul>
        </div>
      `;
    })
    .join("");
}

/** Mirrors Footer.tsx → "Connect with us" social section. */
function renderSocialSection(socialLinks, sectionTitle) {
  if (!socialLinks || socialLinks.length === 0) return "";
  const items = socialLinks
    .map(
      (social) => `
        <li class="footer__social-item">
          <a href="${esc(social.href)}" class="footer__social-link" aria-label="${esc(social.platform)}">
            ${social.icon ? renderIcon(social.icon, "me-2") : ""}
            ${esc(social.platform)}
          </a>
        </li>`,
    )
    .join("");
  return `
    <div class="footer__section">
      <h5 class="footer__section-title">${esc(sectionTitle)}</h5>
      <ul class="footer__social-list" aria-label="Social media links">
        ${items}
      </ul>
    </div>
  `;
}

/** Mirrors Footer.tsx → footer__logo wrapper. Renders <img>, optionally inside <a>. */
function renderLogo(logo, logoAlt, logoHref) {
  const url = resolveAssetUrl(logo);
  if (!url) return "";
  const img = `<img src="${esc(url)}" alt="${esc(logoAlt)}" class="footer__logo-image" />`;
  const inner = logoHref
    ? `<a href="${esc(logoHref)}" class="footer__logo-link">${img}</a>`
    : img;
  return `<div class="footer__logo">${inner}</div>`;
}

/** Mirrors Footer.tsx → bottom-nav <ul> with `linkDivider` between items. */
function renderBottomNav(bottomLinks, linkDivider) {
  if (!bottomLinks || bottomLinks.length === 0) return "";
  const items = bottomLinks
    .map((link, index) => {
      const divider =
        index < bottomLinks.length - 1
          ? `<span class="footer__divider">${esc(linkDivider)}</span>`
          : "";
      return `
        <li class="footer__bottom-link-item">
          <a href="${esc(link.href)}" class="footer__bottom-link">${esc(link.label)}</a>
          ${divider}
        </li>`;
    })
    .join("");
  return `
    <nav class="footer__bottom-nav" aria-label="Footer additional links">
      <ul class="footer__bottom-links">
        ${items}
      </ul>
    </nav>
  `;
}

export default {
  async main(input) {
    const {
      sections = [],
      socialLinks = [],
      bottomLinks = [],
      logo,
      logoAlt = "",
      logoHref,
      acknowledgement,
      copyrightText,
      linkDivider = "|",
      socialSectionTitle = "Connect with us",
    } = input || {};

    const sectionsHtml = renderSections(sections);
    const socialHtml = renderSocialSection(socialLinks, socialSectionTitle);
    const logoHtml = renderLogo(logo, logoAlt, logoHref);
    const bottomNavHtml = renderBottomNav(bottomLinks, linkDivider);

    const mainHtml =
      sectionsHtml || socialHtml
        ? `
          <div class="footer__main">
            <div class="footer__sections">
              ${sectionsHtml}
            </div>
            ${socialHtml}
          </div>
        `
        : "";

    const metadataHtml =
      logoHtml || bottomNavHtml
        ? `
          <div class="footer__metadata">
            ${logoHtml}
            ${bottomNavHtml}
          </div>
        `
        : "";

    const infoHtml =
      acknowledgement || copyrightText
        ? `
          <div class="footer__info-section">
            <div class="footer__container">
              ${acknowledgement ? `<p class="footer__acknowledgement">${esc(acknowledgement)}</p>` : ""}
              ${copyrightText ? `<p class="footer__copyright">${esc(copyrightText)}</p>` : ""}
            </div>
          </div>
        `
        : "";

    return `
      <footer class="footer">
        <div class="footer__wrapper">
          <div class="footer__container">
            ${mainHtml}
            ${metadataHtml}
          </div>
          ${infoHtml}
        </div>
      </footer>
    `;
  },
};
