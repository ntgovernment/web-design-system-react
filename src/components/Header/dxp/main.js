/**
 * Header DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/Header/Header.tsx` on the
 * Squiz Edge runtime. Theme CSS (loaded site-wide via the head nester)
 * styles the output. A small inline script wires up the hamburger toggle
 * and the icon-variant search expansion — no client-side hydration needed.
 */

const NT_GOV_AU_URL = "https://nt.gov.au";

/** HTML-escape for text content and attribute values. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Short unique id for scoping inline-script DOM lookups. */
function generateInstanceId() {
  return `hdr-${Math.random().toString(36).slice(2, 11)}`;
}

/** Mirrors `<Icon>` — a Font Awesome `<i>` with optional class. */
function renderIcon(icon, extraClass = "") {
  if (!icon) return "";
  const cls = `${icon}${extraClass ? ` ${extraClass}` : ""}`;
  return `<i class="${esc(cls)}" aria-hidden="true"></i>`;
}

/** Mirrors `<SearchBar variant="primary">` as a real submitting form. */
function renderSearchBar({ placeholder, action, autoFocus }) {
  return `
    <form class="search-bar" role="search" data-variant="primary" action="${esc(action)}" method="get">
      <div class="input-group search-bar__group">
        <input
          type="search"
          name="query"
          class="form-control search-bar__control"
          placeholder="${esc(placeholder)}"
          aria-label="${esc(placeholder)}"
          autocomplete="off"${autoFocus ? " autofocus" : ""}
        />
        <button type="submit" class="btn search-bar__button" aria-label="Run search">
          <span class="search-bar__icon" aria-hidden="true">${renderIcon(
            "fa-light fa-search",
            "search-bar__icon-glyph",
          )}</span>
        </button>
      </div>
    </form>
  `;
}

/** Mirrors Header.tsx → renderLogo(). */
function renderLogo({ variant, agencyName, agencyHref, logoAlt }) {
  const ASSET_BASE = "https://nt.gov.au/__data/assets/git_bridge/0008/1607588";
  const desertRose = `${ASSET_BASE}/dist/ntgbase/images/ntg-desert-rose-reverse.svg`;
  const monoLogo = `${ASSET_BASE}/dist/ntgbase/images/logo-ntg-mono.svg`;

  if (variant === "nt-gov-au") {
    return `
      <a href="${esc(NT_GOV_AU_URL)}" class="header__logo-link">
        <img src="${esc(monoLogo)}" alt="${esc(logoAlt)}" class="header__logo-image" />
      </a>
    `;
  }

  const variantClass =
    variant === "other-site"
      ? "header__logo-group--other-site"
      : "header__logo-group--agency-internet";

  return `
    <div class="header__logo-group ${variantClass}">
      <a href="${esc(NT_GOV_AU_URL)}" class="header__logo-link">
        <img src="${esc(desertRose)}" alt="${esc(logoAlt)}" class="header__logo-image" />
      </a>
      ${
        agencyName
          ? `<a href="${esc(agencyHref)}" class="header__agency-link">
               <span class="header__agency-title">${esc(agencyName)}</span>
             </a>`
          : ""
      }
    </div>
  `;
}

/** Mirrors the desktop nav `<ul>` and the mobile-menu `<ul>`. */
function renderNavList(navItems, { mobile = false } = {}) {
  if (!navItems || navItems.length === 0) return "";
  const listClass = mobile ? "header__mobile-nav-list" : "header__nav-list";
  const itemClass = mobile ? "header__mobile-nav-item" : "header__nav-item";
  const linkClass = mobile ? "header__mobile-nav-link" : "header__nav-link";
  const iconClass = mobile ? "header__mobile-nav-icon" : "header__nav-icon";
  const textClass = mobile ? "header__mobile-nav-text" : "header__nav-text";

  const items = navItems
    .map((item) => {
      const activeClass = item.active ? ` ${linkClass}--active` : "";
      const ariaCurrent = item.active ? ' aria-current="page"' : "";
      return `
        <li class="${itemClass}">
          <a href="${esc(item.href)}" class="${linkClass}${activeClass}"${ariaCurrent}>
            ${item.icon ? renderIcon(item.icon, iconClass) : ""}
            <span class="${textClass}">${esc(item.label)}</span>
          </a>
        </li>
      `;
    })
    .join("");

  return `<ul class="${listClass}">${items}</ul>`;
}

/** Inline script: hamburger toggle + icon-variant search expansion. */
function renderInteractivityScript(instanceId) {
  return `
    <script>
      (function () {
        var root = document.querySelector('[data-instance-id="${instanceId}"]');
        if (!root) return;

        var hamburger = root.querySelector('.header__hamburger');
        var mobileMenu = root.querySelector('.header__mobile-menu');
        if (hamburger && mobileMenu) {
          hamburger.addEventListener('click', function () {
            var open = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!open));
            mobileMenu.hidden = open;
          });
          mobileMenu.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
              hamburger.setAttribute('aria-expanded', 'false');
              mobileMenu.hidden = true;
            });
          });
        }

        var search = root.querySelector('.header__search[data-variant="icon"]');
        if (search) {
          var openBtn = search.querySelector('.header__search-icon-button');
          var closeBtn = search.querySelector('.header__search-close');
          var expanded = search.querySelector('.header__search-expanded');
          if (openBtn && expanded) {
            openBtn.addEventListener('click', function () {
              search.setAttribute('data-expanded', 'true');
              openBtn.hidden = true;
              expanded.hidden = false;
              var input = expanded.querySelector('input[type="search"]');
              if (input) input.focus();
            });
          }
          if (closeBtn && expanded && openBtn) {
            closeBtn.addEventListener('click', function () {
              search.removeAttribute('data-expanded');
              expanded.hidden = true;
              openBtn.hidden = false;
            });
          }
        }
      })();
    </script>
  `;
}

export default {
  async main(input) {
    const {
      variant = "nt-gov-au",
      agencyName,
      agencyHref = "/",
      logoAlt = "NT.GOV.AU",
      navItems = [],
      showSearch = true,
      searchVariant = "expanded",
      searchPlaceholder = "Search",
      searchAction = "/search",
    } = input || {};

    const instanceId = generateInstanceId();
    const logoHtml = renderLogo({ variant, agencyName, agencyHref, logoAlt });
    const desktopNavHtml = renderNavList(navItems);
    const mobileNavHtml = renderNavList(navItems, { mobile: true });

    let searchHtml = "";
    if (showSearch) {
      const expandedHtml = `
        <div class="header__search-expanded"${
          searchVariant === "icon" ? " hidden" : ""
        }>
          ${renderSearchBar({
            placeholder: searchPlaceholder,
            action: searchAction,
            autoFocus: false,
          })}
          ${
            searchVariant === "icon"
              ? `<button type="button" class="header__search-close" aria-label="Close search">${renderIcon(
                  "fa-light fa-times",
                  "header__search-close-icon",
                )}</button>`
              : ""
          }
        </div>
      `;
      const iconBtnHtml =
        searchVariant === "icon"
          ? `<button type="button" class="header__search-icon-button" aria-label="Open search" aria-expanded="false">${renderIcon(
              "fa-light fa-search",
              "header__search-icon",
            )}</button>`
          : "";
      searchHtml = `
        <div class="header__search" data-variant="${esc(searchVariant)}">
          ${iconBtnHtml}
          ${expandedHtml}
        </div>
      `;
    }

    return `
      <header class="header" data-instance-id="${instanceId}">
        <nav class="navbar header__navbar">
          <div class="header__container">
            <div class="header__logo-section">
              <button type="button" class="header__hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="header__hamburger-line"></span>
                <span class="header__hamburger-line"></span>
                <span class="header__hamburger-line"></span>
              </button>
              <div class="header__logo">${logoHtml}</div>
            </div>
            <div class="header__nav">
              ${desktopNavHtml}
              ${searchHtml}
            </div>
          </div>
        </nav>
        ${
          mobileNavHtml
            ? `<div class="header__mobile-menu" hidden>${mobileNavHtml}</div>`
            : ""
        }
      </header>
      ${renderInteractivityScript(instanceId)}
    `;
  },
};
