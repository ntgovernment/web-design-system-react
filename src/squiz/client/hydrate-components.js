/**
 * NT Gov Web Design System - DXP Component Hydration
 *
 * Scans the DOM for elements rendered by Squiz DXP Component Service
 * `main.js` files (which return minimal `<div data-hydration-component="…"
 * data-hydration-props="…">…</div>` containers) and mounts the matching React
 * component from the global `window.NTGDesignSystem` UMD bundle.
 *
 * Required globals (loaded earlier via the `footer_js.html` nester):
 *   - window.React
 *   - window.ReactDOM
 *   - window.NTGDesignSystem
 */
(function () {
  if (typeof document === "undefined") return;

  // Map of `data-hydration-component` value → exported name on NTGDesignSystem.
  var COMPONENT_MAP = {
    header: "Header",
  };

  function hydrateOne(container) {
    var name = container.getAttribute("data-hydration-component");
    var exportName = COMPONENT_MAP[name];
    if (!exportName) {
      console.warn("[ntg-hydrate] Unknown component:", name);
      return;
    }

    var ds = window.NTGDesignSystem;
    var React = window.React;
    var ReactDOM = window.ReactDOM;

    if (!ds || !React || !ReactDOM) {
      console.error(
        "[ntg-hydrate] Missing required globals (NTGDesignSystem/React/ReactDOM); aborting hydration of",
        name,
      );
      return;
    }

    var Component = ds[exportName];
    if (!Component) {
      console.error(
        "[ntg-hydrate] window.NTGDesignSystem." +
          exportName +
          " is not defined",
      );
      return;
    }

    var raw = container.getAttribute("data-hydration-props") || "{}";
    var props;
    try {
      props = JSON.parse(raw);
    } catch (err) {
      console.error("[ntg-hydrate] Failed to parse props for", name, err);
      return;
    }

    try {
      // Clear any noscript fallback before mounting.
      container.innerHTML = "";
      var root = ReactDOM.createRoot(container);
      root.render(React.createElement(Component, props));
      // Track mounted instances for potential teardown by callers.
      container.__ntgHydrationRoot = root;
    } catch (err) {
      console.error("[ntg-hydrate] Failed to mount", name, err);
    }
  }

  function hydrateAll() {
    var nodes = document.querySelectorAll("[data-hydration-component]");
    for (var i = 0; i < nodes.length; i++) {
      hydrateOne(nodes[i]);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hydrateAll);
  } else {
    hydrateAll();
  }

  // Expose for manual re-hydration after dynamic content insertion.
  window.NTGHydrate = { hydrateAll: hydrateAll, hydrateOne: hydrateOne };
})();
