/**
 * Callout DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/Callout/Callout.tsx` on the
 * Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester)
 * styles the output.
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

/**
 * Renders the Callout component with optional heading and required content.
 * Mirrors `src/components/Callout/Callout.tsx` structure.
 */
function renderCallout({ heading = "", content = "Important information goes here." }) {
  let headingHtml = "";
  if (heading) {
    headingHtml = `<div class="callout__heading">${esc(heading)}</div>`;
  }

  return `
    <div class="callout">
      <div class="callout__content">
        <div class="callout__text-container">
          ${headingHtml}
          <div class="callout__text">${esc(content)}</div>
        </div>
      </div>
    </div>
  `;
}

export default {
  async main(input) {
    const {
      heading = "",
      content = "Important information goes here.",
    } = input || {};

    return renderCallout({ heading, content });
  },
};
