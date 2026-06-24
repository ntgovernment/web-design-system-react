# Video Embed DXP Component

Server-side renderer for the VideoEmbed component on Squiz Edge (DXP).

## Files

| File | Purpose |
| --- | --- |
| `manifest.json` | DXP v1 manifest (component metadata + input JSON Schema) |
| `main.js` | Server-side renderer function; mirrors `src/components/VideoEmbed/VideoEmbed.tsx` |
| `previews/default.data.json` | Example input data for preview |

## Configuration

### Input Schema

- **`videoUrl`** (required, string): YouTube or Vimeo URL
- **`includeText`** (boolean, default: false): Enable/disable supporting text
- **`text`** (string, default: ""): Supporting text; only rendered if `includeText` is true
- **`textPosition`** (enum, default: "bottom"): Text placement relative to video (`left`, `right`, `top`, `bottom`)
- **`showControls`** (boolean, default: false): Show native player controls
- **`showSuggestedVideos`** (boolean, default: false): Show suggested videos after playback (YouTube only)

## Output Markup

The renderer outputs text and video blocks using existing layout props:

- Wrapper classes: `.video-embed` and `.video-embed--{textPosition}`
- Ratio wrapper class for the iframe area: `.video-embed__ratio .ratio .ratio-16x9 .d-print-none`

- YouTube iframe:
  - src: `https://www.youtube.com/embed/{id}?rel={0|1}&controls={0|1}`
  - allow: `accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture`
  - `allowfullscreen`, `loading="lazy"`
- Vimeo iframe:
  - src: `https://player.vimeo.com/video/{id}?controls={0|1}&autoplay=0&loop=0`
  - allow: `autoplay; fullscreen`
  - `loading="lazy"`

## Notes

- Only YouTube and Vimeo URLs are rendered.
- Invalid or unsupported URLs render a fallback message area.
- This component is static and non-interactive.
