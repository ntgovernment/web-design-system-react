/**
 * QuickExit DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/QuickExit/QuickExit.tsx` on the
 * Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester) styles
 * the output.
 *
 * Unlike the GlobalAlert component, QuickExit MUST be interactive at runtime
 * — clicking the banner opens a decoy site in a new tab and replaces the
 * current tab. Because this is a safety-critical feature for users on
 * sensitive pages, a small self-contained inline script is embedded in the
 * output so the behavior works even if a host-page bundle is missing or
 * delayed. The exit/redirect URLs are read from data-* attributes (server
 * already escaped them) — never interpolated into the script body.
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

// SVG mirrors QuickExit.tsx exactly (house/home outline, 32×32, currentColor).
const ICON_SVG = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 16L16 4L4 16M6 14V26C6 26.5304 6.21071 27.0391 6.58579 27.4142C6.96086 27.7893 7.46957 28 8 28H12V22C12 21.4696 12.2107 20.9609 12.5858 20.5858C12.9609 20.2107 13.4696 20 14 20H18C18.5304 20 19.0391 20.2107 19.4142 20.5858C19.7893 20.9609 20 21.4696 20 22V28H24C24.5304 28 25.0391 27.7893 25.4142 27.4142C25.7893 27.0391 26 26.5304 26 26V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

// Inline IIFE: reads data-exit-url / data-redirect-url from the rendered
// element and wires click + Enter/Space activation. Self-contained so the
// safety feature works without any external client bundle.
const INLINE_SCRIPT = `
(function () {
  var els = document.querySelectorAll('[data-quick-exit]');
  for (var i = 0; i < els.length; i++) {
    (function (el) {
      if (el.__quickExitBound) return;
      el.__quickExitBound = true;
      function activate(e) {
        if (e && e.preventDefault) e.preventDefault();
        var exitUrl = el.getAttribute('data-exit-url') || '';
        var redirectUrl = el.getAttribute('data-redirect-url') || '';
        var w = null;
        try { w = window.open(exitUrl, '_blank', 'noopener,noreferrer'); } catch (err) { w = null; }
        if (w) {
          window.location.replace(redirectUrl);
        } else {
          window.location.replace(exitUrl);
        }
      }
      el.addEventListener('click', activate);
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          activate(e);
        }
      });
    })(els[i]);
  }
})();
`;

export default {
  async main(input) {
    const {
      heading = "Quick exit",
      content = "Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger.",
      exitUrl = "https://www.bom.gov.au/",
      redirectUrl = "https://www.google.com/",
      ariaLabel = "Quick exit - click to leave this page immediately",
    } = input || {};

    return `
      <div
        class="quick-exit"
        role="button"
        tabindex="0"
        aria-label="${esc(ariaLabel)}"
        data-quick-exit
        data-exit-url="${esc(exitUrl)}"
        data-redirect-url="${esc(redirectUrl)}"
      >
        <div class="quick-exit__container">
          <div class="quick-exit__header">
            <div class="quick-exit__icon" aria-hidden="true">${ICON_SVG}</div>
            <div class="quick-exit__heading">${esc(heading)}</div>
          </div>
          <div class="quick-exit__content">${esc(content)}</div>
        </div>
      </div>
      <script>${INLINE_SCRIPT}</script>
    `;
  },
};
