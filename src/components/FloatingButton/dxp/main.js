/**
 * FloatingButton DXP Component Service — Server-Side Renderer
 *
 * Renders the same floating action button markup as the design system component
 * on the Squiz Edge runtime. Theme CSS loaded by the preview wrapper styles the
 * floating button. When enabled, a small inline script manages the hide/show
 * behavior based on the configured target element's viewport visibility.
 */

const VALID_VARIANTS = new Set(["primary", "secondary"]);

/** HTML-escape for text content and attribute values. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderIcon(icon, className) {
  if (!icon) return "";
  return `<i class="${esc(icon)} ${className}" aria-hidden="true"></i>`;
}

function renderButton(href, external, variant, label, ariaLabel, iconLeft, iconRight) {
  const buttonClass = `btn btn-${esc(variant)}`;
  const safeAria = esc(ariaLabel || label || "Floating action button");
  const leftIconHtml = renderIcon(iconLeft, label ? "me-2" : "");
  const rightIconHtml = renderIcon(iconRight, label ? "ms-2" : "");

  if (href) {
    const targetAttrs = external
      ? ` target="_blank" rel="noopener noreferrer"`
      : "";

    return `
      <a
        class="${buttonClass}"
        href="${esc(href)}"
        aria-label="${safeAria}"
        ${targetAttrs}
      >
        ${leftIconHtml}${esc(label)}${rightIconHtml}
      </a>`;
  }

  return `
    <button
      type="button"
      class="${buttonClass}"
      disabled
      aria-label="${safeAria}"
    >
      ${leftIconHtml}${esc(label)}${rightIconHtml}
    </button>`;
}

export default {
  async main(input) {
    const {
      label = "Continue",
      href = "",
      external = false,
      variant = "primary",
      iconLeft = "",
      iconRight = "",
      autoHide = true,
      targetButtonId = "",
      ariaLabel = "",
    } = input || {};

    const safeVariant = VALID_VARIANTS.has(variant) ? variant : "primary";
    const safeAria = ariaLabel || label || "Floating action button";
    const hideScript = autoHide && targetButtonId ? INLINE_SCRIPT : "";

    return `
<div
  class="floating-button"
  role="complementary"
  aria-label="${esc(safeAria)}"
  data-fab
  data-fab-target="${esc(targetButtonId)}"
>
  <div class="floating-button__container">
    <div class="floating-button__button-wrapper">
      ${renderButton(href, external, safeVariant, label, safeAria, iconLeft, iconRight)}
    </div>
  </div>
</div>
${hideScript}
    `;
  },
};

const INLINE_SCRIPT = `
(function () {
  var root = document.querySelector('[data-fab]');
  if (!root) return;

  var rawTarget = root.getAttribute('data-fab-target') || '';
  var selector = rawTarget.trim();
  if (!selector) return;

  var target = null;
  if (selector.charAt(0) === '#') {
    target = document.getElementById(selector.slice(1));
  }
  if (!target) {
    try {
      target = document.querySelector(selector);
    } catch (err) {
      target = null;
    }
  }
  if (!target) {
    console.warn('FloatingButton: target element not found:', selector);
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!root) return;
        root.classList.toggle('floating-button--hidden', entry.isIntersecting);
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    },
  );

  observer.observe(target);
})();
`;
