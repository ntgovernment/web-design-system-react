/**
 * DisplayCards DXP Component Service — Server-Side Renderer
 *
 * Renders the same structural markup as `src/components/DisplayCards/DisplayCards.tsx`
 * on the Squiz Edge runtime. Theme CSS is loaded by the DXP preview wrapper
 * or site theme. This component does not require React hydration.
 */

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function resolveAssetUrl(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value !== "object") return "";
  if (typeof value.url === "string") return value.url;
  if (typeof value.href === "string") return value.href;
  if (typeof value.value === "string") return value.value;
  if (value.asset && typeof value.asset.url === "string") return value.asset.url;
  return "";
}

function renderIcon(icon, extraClass = "") {
  if (!icon) return "";
  const cls = `${icon}${extraClass ? ` ${extraClass}` : ""}`;
  return `<i class="${esc(cls)}" aria-hidden="true"></i>`;
}

function renderMedia(imageURL, showImage) {
  if (!showImage) return "";
  const url = resolveAssetUrl(imageURL);
  if (!url) return "";
  return `
    <div class="card__media card__media--16:9">
      <img src="${esc(url)}" alt="Card image" />
    </div>`;
}

function renderHeaderMeta(showMeta, tagLabel, dateLabel) {
  if (!showMeta) return "";
  const tags = tagLabel ? esc(tagLabel) : "";
  const date = dateLabel ? esc(dateLabel) : "";
  if (!tags && !date) return "";

  return `
    <div class="card__header-meta">
      ${tags ? `<div class="card__header-meta-tags">${tags}</div>` : ""}
      ${date ? `<div class="card__header-meta-date">${date}</div>` : ""}
    </div>`;
}

function renderTitle(title, showTitleIcon, icon, isMinicard) {
  const iconHtml = showTitleIcon && icon ? renderIcon(icon, isMinicard ? "card__minicard-icon" : "me-2") : "";
  return `
    <div class="card__body-title-wrapper">
      <h5 class="card-title">
        ${iconHtml}${esc(title)}
      </h5>
    </div>`;
}

function renderDescription(description, showDescription, isMinicard) {
  if (!showDescription || isMinicard || !description) return "";
  return `<div class="card-text">${esc(description)}</div>`;
}

function renderFooter(isFull, showButton, actionText, actionIcon) {
  if (!isFull) return "";
  const buttonHtml = showButton && actionText
    ? `<span class="btn btn-tertiary" aria-hidden="true">${esc(actionText)}${actionIcon ? ` ${renderIcon(actionIcon, "ms-2")}` : ""}</span>`
    : "";

  return `
    <div class="card-footer">
      <div class="card__footer-actions">${buttonHtml}</div>
    </div>`;
}

function renderCard(card, settings) {
  const {
    variant = "full",
    title = "",
    description = "",
    showImage = true,
    imageURL,
    showMeta = true,
    tagLabel = "",
    dateLabel = "",
    showTitleIcon = false,
    icon = "",
    showButton = true,
    actionText = "",
    actionIcon = "",
    href,
    ariaLabel = "",
  } = card || {};

  const isMinicard = variant === "minicard";
  const isCompact = variant === "compact";
  const isFull = !isMinicard && !isCompact;

  const cardClasses = [
    "card",
    isMinicard ? "card--minicard" : "",
    isCompact ? "card--compact" : "",
    isFull ? "card--full" : "",
    settings.showImage !== undefined && !settings.showImage ? "" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperAttrs = href
    ? `href="${esc(href)}" aria-label="${esc(ariaLabel || title)}"`
    : "";

  const mediaHtml = renderMedia(imageURL, isFull && showImage && settings.showImage);
  const headerMetaHtml = renderHeaderMeta(isFull && showMeta && settings.showMetadata, tagLabel, dateLabel);
  const titleHtml = title ? renderTitle(title, showTitleIcon, icon, isMinicard) : "";
  const descriptionHtml = renderDescription(description, settings.showDescription, isMinicard);
  const actionTextFinal = settings.showButton
    ? settings.buttonText || actionText
    : "";
  const footerHtml = renderFooter(isFull, settings.showButton && showButton, actionTextFinal, actionIcon);

  return `
    <div class="display-cards__card-wrapper">
      <${href ? "a" : "div"} class="${esc(cardClasses)}" ${wrapperAttrs}>
        ${mediaHtml}
        ${headerMetaHtml}
        <div class="card-body">
          <div class="card__body-content">
            ${titleHtml}
            ${descriptionHtml}
          </div>
        </div>
        ${footerHtml}
      </${href ? "a" : "div"}>
    </div>`;
}

export default {
  async main(input) {
    const {
      cards = [],
      columns = 3,
      backgroundColor = "white",
      showImage = false,
      showMetadata = false,
      showDescription = true,
      showButton = true,
      buttonText = "Read more",
      sectionTitle = "",
      sectionSubtitle = "",
      selectionMode = "manual",
      parentAssetId,
      selectedCardAssetIds,
    } = input || {};

    const safeColumns = [2, 3, 4].includes(columns) ? columns : 3;
    const columnClass = `display-cards--${safeColumns}col`;
    const bgClass = backgroundColor === "grey" ? "display-cards--bg-grey" : "display-cards--bg-white";

    const headerHtml = sectionTitle
      ? `<div class="display-cards__header">
          <h2 class="display-cards__title">${esc(sectionTitle)}</h2>
          ${sectionSubtitle ? `<p class="display-cards__subtitle">${esc(sectionSubtitle)}</p>` : ""}
        </div>`
      : "";

    const cardsHtml = cards
      .map((card) => renderCard(card, {
        showImage,
        showMetadata,
        showDescription,
        showButton,
        buttonText,
      }))
      .join("");

    const parentMetaHtml =
      selectionMode === "parent" && parentAssetId
        ? `<div style="display:none" data-selection-mode="parent" data-parent-asset-id="${esc(parentAssetId)}"></div>`
        : "";

    const manualMetaHtml =
      selectionMode === "manual" && Array.isArray(selectedCardAssetIds)
        ? `<div style="display:none" data-selection-mode="manual" data-selected-card-asset-ids='${esc(JSON.stringify(selectedCardAssetIds))}'></div>`
        : "";

    return `
      <section class="display-cards ${esc(columnClass)} ${esc(bgClass)}" data-component-status="16">
        ${headerHtml}
        <div class="display-cards__grid">
          ${cardsHtml}
        </div>
        ${parentMetaHtml}
        ${manualMetaHtml}
      </section>`;
  },
};
