/**
 * DisplayCards — MANUAL MODE ONLY (NO IMAGE SUPPORT)
 * Editor selects multiple assets → fetch metadata → render cards
 */

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Extract assetId from SquizLink or matrix-asset-uri
function getAssetId(link, API_IDENTIFIER) {
  if (!link) return null;

  // SquizLink object
  if (typeof link === "object" && link.assetId) {
    return link.assetId;
  }

  // matrix-asset://api_identifier/12345
  if (typeof link === "string" && link.startsWith("matrix-asset://")) {
    return link.replace(`matrix-asset://${API_IDENTIFIER}/`, "");
  }

  return null;
}

// Fetch metadata from Matrix proxy API
async function fetchMetadata(idsCSV, BASE_DOMAIN, BASE_PATH) {
  try {
    const url = `${BASE_DOMAIN}${BASE_PATH}cards?ids=${idsCSV}`;
    const response = await fetch(url);
    const text = await response.text();
    return JSON.parse(text);
  } catch (err) {
    console.error("Matrix metadata fetch failed:", err);
    return undefined;
  }
}

function renderCard(card, settings) {
  const {
    title = "",
    description = "",
    href = "#",
    actionText = settings.buttonText,
  } = card || {};

  return `
    <div class="display-cards__card-wrapper">
      <div class="card card--full">
        <div class="card-body">
          <h5 class="card-title">${esc(title)}</h5>
          ${settings.showDescription && description
            ? `<p class="card-text">${esc(description)}</p>`
            : ""}
        </div>

        ${
          settings.showButton
            ? `<div class="card-footer">
                 <span class="btn btn-tertiary">
  ${esc(actionText)} <i class="fa-light fa-arrow-right"></i>
</span>
               </div>`
            : ""
        }
      </div>
    </div>
  `;
}

export default {
  async main(input, info) {
    const {
      selectedCardAssetIds = [],
      columns = 3,
      backgroundColor = "white",
      showDescription = true,
      showButton = true,
      buttonText = "Read more",
      sectionTitle = "",
      sectionSubtitle = "",
    } = input || {};

    // Environment variables for Matrix metadata API
    const { API_IDENTIFIER, BASE_DOMAIN, BASE_PATH } =
      info.env || (info.set && info.set.environment) || {};

    // Extract asset IDs
    const ids = selectedCardAssetIds
      .map((link) => getAssetId(link, API_IDENTIFIER))
      .filter(Boolean);

    let metadata;

    // Fetch real metadata if env vars exist
    if (API_IDENTIFIER && BASE_DOMAIN && BASE_PATH) {
      const idsCSV = ids.join(",");
      metadata = await fetchMetadata(idsCSV, BASE_DOMAIN, BASE_PATH);
    } else {
      // Preview mode → use mock data
      console.warn("Environment vars missing → using mock preview data");
      const { mockDataWrapper } = await import("./previews/mockDataWrapper.js");
      metadata = mockDataWrapper.cards;
    }

    // Map metadata → card fields (NO IMAGE)
    const cardsToRender = (metadata || []).map((item) => ({
      title: item.name || item.heading,                     // asset name
      description: item.description || item.supportingText, // asset description
      href: item.link,                                      // asset link
      actionText: buttonText,
    }));

    // Rendering
    const safeColumns = [2, 3, 4].includes(columns) ? columns : 3;
    const columnClass = `display-cards--${safeColumns}col`;
    const bgClass =
      backgroundColor === "grey"
        ? "display-cards--bg-grey"
        : "display-cards--bg-white";

    const headerHtml = sectionTitle
      ? `<div class="display-cards__header">
          <h2 class="display-cards__title">${esc(sectionTitle)}</h2>
          ${
            sectionSubtitle
              ? `<p class="display-cards__subtitle">${esc(sectionSubtitle)}</p>`
              : ""
          }
        </div>`
      : "";

    const cardsHtml = cardsToRender
      .map((card) =>
        renderCard(card, {
          showDescription,
          showButton,
          buttonText,
        })
      )
      .join("");

    return `
      <section class="display-cards ${esc(columnClass)} ${esc(bgClass)}">
        ${headerHtml}
        <div class="display-cards__grid">
          ${cardsHtml}
        </div>
      </section>
    `;
  },
};
