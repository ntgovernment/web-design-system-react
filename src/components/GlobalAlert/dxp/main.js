/**
 * GlobalAlert DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/GlobalAlert/GlobalAlert.tsx` on
 * the Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester)
 * styles the output. The DXP version is intentionally non-interactive: the
 * dismiss button is rendered but has no JavaScript handler — dismissal is
 * handled by the host page if needed. This matches the Footer / Header
 * patterns and keeps the edge bundle minimal.
 */

const VALID_VARIANTS = new Set(["info", "info-alt", "warning", "critical"]);

/** HTML-escape for text content and attribute values. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Mirrors GlobalAlert.tsx → optional dismiss button with aria-label. */
function renderDismissButton(dismissible, dismissLabel) {
  if (!dismissible) return "";
  return `
    <button
      type="button"
      class="global-alert__dismiss"
      aria-label="${esc(dismissLabel)}"
    >
      <i class="fa-light fa-xmark" aria-hidden="true"></i>
    </button>
  `;
}

/**
 * Mirrors GlobalAlert.tsx → optional CTA. Renders an `<a>` styled as a
 * Bootstrap secondary button when an href is supplied; falls back to a
 * `<button>` when only text is provided (rare but kept for parity with the
 * React component).
 */
function renderCTA(ctaText, ctaHref) {
  if (!ctaText) return "";
  const inner = ctaHref
    ? `<a href="${esc(ctaHref)}" class="btn btn-secondary global-alert__cta">${esc(ctaText)}</a>`
    : `<button type="button" class="btn btn-secondary global-alert__cta">${esc(ctaText)}</button>`;
  return `<div class="global-alert__actions">${inner}</div>`;
}

export default {
  async main(input) {
    const {
      variant = "info",
      title = "",
      description = "",
      dismissible = false,
      dismissLabel = "Dismiss alert",
      ctaText = "",
      ctaHref = "",
    } = input || {};

    const safeVariant = VALID_VARIANTS.has(variant) ? variant : "info";
    const alertClass = `global-alert global-alert--${safeVariant}`;
    // `description` is FormattedText (HTML from the Squiz WYSIWYG) — render as-is.
    const descriptionHtml = String(description ?? "");

    return `
      <div class="${alertClass}" role="alert">
        <div class="global-alert__container">
          <div class="global-alert__content">
            <div class="global-alert__text">
              <div class="global-alert__title">${esc(title)}</div>
              <div class="global-alert__description">${descriptionHtml}</div>
            </div>
            ${renderCTA(ctaText, ctaHref)}
          </div>
          ${renderDismissButton(dismissible, dismissLabel)}
        </div>
      </div>
    `;
  },
};
