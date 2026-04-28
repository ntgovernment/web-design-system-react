var g="https://nt.gov.au";function r(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function y(){return`hdr-${Math.random().toString(36).slice(2,11)}`}function h(e,a=""){if(!e)return"";let n=`${e}${a?` ${a}`:""}`;return`<i class="${r(n)}" aria-hidden="true"></i>`}function x({placeholder:e,action:a,autoFocus:n}){return`
    <form class="search-bar" role="search" data-variant="primary" action="${r(a)}" method="get">
      <div class="input-group search-bar__group">
        <input
          type="search"
          name="query"
          class="form-control search-bar__control"
          placeholder="${r(e)}"
          aria-label="${r(e)}"
          autocomplete="off"${n?" autofocus":""}
        />
        <button type="submit" class="btn search-bar__button" aria-label="Run search">
          <span class="search-bar__icon" aria-hidden="true">${h("fa-light fa-search","search-bar__icon-glyph")}</span>
        </button>
      </div>
    </form>
  `}function S({variant:e,agencyName:a,agencyHref:n,logoAlt:s}){let o="%globals_asset_url_with_hash:1607588:dist/ntgbase/images/ntg-desert-rose-reverse.svg%",c="%globals_asset_url_with_hash:1607588:dist/ntgbase/images/logo-ntg-mono.svg%";return e==="nt-gov-au"?`
      <a href="${r(g)}" class="header__logo-link">
        <img src="${r(o)}" alt="${r(s)}" class="header__logo-image" />
      </a>
    `:`
    <div class="header__logo-group ${e==="other-site"?"header__logo-group--other-site":"header__logo-group--agency-internet"}">
      <a href="${r(g)}" class="header__logo-link">
        <img src="${r(c)}" alt="${r(s)}" class="header__logo-image" />
      </a>
      ${a?`<a href="${r(n)}" class="header__agency-link">
               <span class="header__agency-title">${r(a)}</span>
             </a>`:""}
    </div>
  `}function v(e,{mobile:a=!1}={}){if(!e||e.length===0)return"";let n=a?"header__mobile-nav-list":"header__nav-list",s=a?"header__mobile-nav-item":"header__nav-item",o=a?"header__mobile-nav-link":"header__nav-link",c=a?"header__mobile-nav-icon":"header__nav-icon",l=a?"header__mobile-nav-text":"header__nav-text",i=e.map(t=>{let u=t.active?` ${o}--active`:"",d=t.active?' aria-current="page"':"";return`
        <li class="${s}">
          <a href="${r(t.href)}" class="${o}${u}"${d}>
            ${t.icon?h(t.icon,c):""}
            <span class="${l}">${r(t.label)}</span>
          </a>
        </li>
      `}).join("");return`<ul class="${n}">${i}</ul>`}function k(e){return`
    <script>
      (function () {
        var root = document.querySelector('[data-instance-id="${e}"]');
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
    <\/script>
  `}var q={async main(e){let{variant:a="nt-gov-au",agencyName:n,agencyHref:s="/",logoAlt:o="NT.GOV.AU",navItems:c=[],showSearch:l=!0,searchVariant:i="expanded",searchPlaceholder:t="Search",searchAction:u="/search"}=e||{},d=y(),b=S({variant:a,agencyName:n,agencyHref:s,logoAlt:o}),f=v(c),_=v(c,{mobile:!0}),p="";if(l){let m=`
        <div class="header__search-expanded"${i==="icon"?" hidden":""}>
          ${x({placeholder:t,action:u,autoFocus:!1})}
          ${i==="icon"?`<button type="button" class="header__search-close" aria-label="Close search">${h("fa-light fa-times","header__search-close-icon")}</button>`:""}
        </div>
      `,$=i==="icon"?`<button type="button" class="header__search-icon-button" aria-label="Open search" aria-expanded="false">${h("fa-light fa-search","header__search-icon")}</button>`:"";p=`
        <div class="header__search" data-variant="${r(i)}">
          ${$}
          ${m}
        </div>
      `}return`
      <header class="header" data-instance-id="${d}">
        <nav class="navbar header__navbar">
          <div class="header__container">
            <div class="header__logo-section">
              <button type="button" class="header__hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
                <span class="header__hamburger-line"></span>
                <span class="header__hamburger-line"></span>
                <span class="header__hamburger-line"></span>
              </button>
              <div class="header__logo">${b}</div>
            </div>
            <div class="header__nav">
              ${f}
              ${p}
            </div>
          </div>
        </nav>
        ${_?`<div class="header__mobile-menu" hidden>${_}</div>`:""}
      </header>
      ${k(d)}
    `}};export{q as default};
//# sourceMappingURL=userCode.js.map
