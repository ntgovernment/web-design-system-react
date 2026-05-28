# Display Cards — Squiz DXP Component Service

Responsive grid of card items for NT Government content sections. This DXP component renders the same markup as `src/components/DisplayCards/DisplayCards.tsx` using a server-side edge renderer, without requiring React hydration.

## Files

- `manifest.json` — DXP component metadata, input schema, and preview map.
- `main.js` — Edge renderer that converts DXP input into HTML markup.
- `previews/wrapper.html` — Squiz DXP preview wrapper for live previewing the component.
- `example.data.json` — Local preview data for the static `preview.html` harness.
- `preview.html` — Browser preview page that loads the preview data and renders the component.

## Preview

1. Run `npm run cmp-prepare` from the `web-design-system` folder.
2. Open `src/components/DisplayCards/dxp/preview.html` in a browser to view local examples.
3. Use `npm run cmp-dev` to launch the Squiz DXP dev UI if available.

## Notes

- The DXP implementation supports manual card data and exposes `selectionMode` metadata for DXP asset selection.
- Interactive behavior is intentionally omitted: this is a static edge-rendered DXP component.
- Card images may be supplied as `SquizImage` asset references or plain URLs.
