/**
 * MiniCards DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/MiniCards/MiniCards.tsx` on the
 * Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester)
 * styles the output. The component is pure HTML with no inline interactivity needed
 * as all cards are static links.
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

/** Short unique id for scoping DOM queries. */
function generateInstanceId() {
  return `mc-${Math.random().toString(36).slice(2, 11)}`;
}

/** Mirrors `<Icon>` — a Font Awesome `<i>` with optional class. */
function renderIcon(icon, extraClass = "") {
  if (!icon) return "";
  const cls = `${icon}${extraClass ? ` ${extraClass}` : ""}`;
  return `<i class="${esc(cls)}" aria-hidden="true"></i>`;
}

/**
 * Renders a single mini card (icon + title + link).
 * Mirrors the Card component with variant="minicard".
 * Auto-generates card ID if not provided.
 */
function renderCard(card, index) {
  if (!card || !card.title || !card.href) {
    return "";
  }

  const cardId = card.id || `card-${index}`;

  return `
    <div class="mini-cards__item">
      <a href="${esc(card.href)}" class="card card--minicard" role="button" tabindex="0">
        <div class="card-body">
          <div class="card__body-title-wrapper">
            ${card.icon ? `<div class="card__minicard-icon">${renderIcon(card.icon)}</div>` : ""}
            <h3 class="card-title">${esc(card.title)}</h3>
          </div>
        </div>
      </a>
    </div>
  `;
}

/**
 * Main DXP component function — renders MiniCards grid HTML.
 */
export default {
  async main(input) {
    // Destructure input with defaults
    const {
      title,
      cards = [],
      layout = "3-col",
      backgroundColor = "white",
    } = input || {};

    // Validate required fields
    if (!Array.isArray(cards) || cards.length === 0) {
      return `
        <div class="mini-cards mini-cards--layout-${esc(layout)} mini-cards--bg-${esc(backgroundColor)}">
          <div class="mini-cards__empty">
            <p>No cards to display.</p>
          </div>
        </div>
      `;
    }

    // Generate unique instance ID
    const instanceId = generateInstanceId();

    // Validate layout and background
    const validLayouts = ["3-col", "4-col"];
    const validBackgrounds = ["white", "grey"];
    const safeLayout = validLayouts.includes(layout) ? layout : "3-col";
    const safeBackground = validBackgrounds.includes(backgroundColor)
      ? backgroundColor
      : "white";

    // Render all cards
    const cardsHtml = cards.map((card, index) => renderCard(card, index)).join("");

    // Render title if provided
    const titleHtml = title
      ? `<h2 class="mini-cards__title">${esc(title)}</h2>`
      : "";

    // Return complete mini-cards HTML
    return `
      <div class="mini-cards mini-cards--layout-${esc(safeLayout)} mini-cards--bg-${esc(safeBackground)}" data-instance-id="${esc(instanceId)}" data-layout="${esc(safeLayout)}" data-background="${esc(safeBackground)}">
        ${titleHtml}
        <div class="mini-cards__grid">
          ${cardsHtml}
        </div>
      </div>
    `.trim();
  },
};
