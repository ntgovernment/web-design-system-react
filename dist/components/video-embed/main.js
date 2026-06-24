/**
 * VideoEmbed DXP Component Service — Server-Side Renderer
 *
 * Renders the same markup as `src/components/VideoEmbed/VideoEmbed.tsx` on the Squiz
 * Edge runtime. Supports YouTube and Vimeo URLs and renders a ratio-16x9 iframe.
 * This is intentionally non-interactive: static HTML only, matching other edge patterns.
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
 * Mirrors VideoEmbed.tsx → extract video ID from various YouTube URL formats.
 * Supports: watch URLs, youtu.be short links, /embed/ URLs, /shorts/ URLs, and bare IDs.
 */
function extractYouTubeVideoId(url) {
  if (!url) return null;

  try {
    const trimmedUrl = String(url).trim();

    // Support bare IDs (11 alphanumeric chars)
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedUrl)) {
      return trimmedUrl;
    }

    const parsed = new URL(trimmedUrl);
    const hostname = parsed.hostname.replace("www.", "").toLowerCase();

    if (hostname === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }

    if (
      hostname === "youtube.com" ||
      hostname === "m.youtube.com" ||
      hostname === "youtube-nocookie.com"
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      const pathParts = parsed.pathname.split("/").filter(Boolean);
      const embedIndex = pathParts.indexOf("embed");
      if (embedIndex !== -1 && pathParts[embedIndex + 1]) {
        return pathParts[embedIndex + 1];
      }

      if (pathParts[0] === "shorts" && pathParts[1]) {
        return pathParts[1];
      }
    }
  } catch {
    // Invalid URL
  }

  return null;
}

function extractVimeoVideoId(url) {
  if (!url) return null;

  try {
    const trimmedUrl = String(url).trim();
    const parsed = new URL(trimmedUrl);
    const hostname = parsed.hostname.replace("www.", "").toLowerCase();

    if (hostname === "vimeo.com") {
      const pathParts = parsed.pathname.split("/").filter(Boolean);
      if (pathParts[0] && /^\d+$/.test(pathParts[0])) {
        return pathParts[0];
      }
    }

    if (hostname === "player.vimeo.com") {
      const pathParts = parsed.pathname.split("/").filter(Boolean);
      const videoIndex = pathParts.indexOf("video");
      if (videoIndex !== -1 && /^\d+$/.test(pathParts[videoIndex + 1] || "")) {
        return pathParts[videoIndex + 1];
      }
    }
  } catch {
    // Invalid URL
  }

  return null;
}

function buildYouTubeEmbedUrl(videoId, showControls, showSuggestedVideos) {
  if (!videoId) return "";
  const params = new URLSearchParams();
  params.set("rel", showSuggestedVideos ? "1" : "0");
  params.set("controls", showControls ? "1" : "0");

  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`;
}

function buildVimeoEmbedUrl(videoId, showControls) {
  if (!videoId) return "";
  const params = new URLSearchParams();
  params.set("controls", showControls ? "1" : "0");
  params.set("autoplay", "0");
  params.set("loop", "0");

  return `https://player.vimeo.com/video/${encodeURIComponent(videoId)}?${params.toString()}`;
}

function renderContent(iframeHtml, hasText, text, textPosition) {
  const textHtml = hasText
    ? `<div class="video-embed__text video-embed__text--${textPosition}">${esc(text)}</div>`
    : "";

  if (textPosition === "top") {
    return `${textHtml}
  <div class="video-embed__content">
    ${iframeHtml}
  </div>`;
  }

  if (textPosition === "bottom") {
    return `<div class="video-embed__content">
    ${iframeHtml}
  </div>
  ${textHtml}`;
  }

  if (textPosition === "left") {
    return `<div class="video-embed__content">
    ${textHtml}
    ${iframeHtml}
  </div>`;
  }

  return `<div class="video-embed__content">
    ${iframeHtml}
    ${textHtml}
  </div>`;
}

export default {
  async main(input) {
    const {
      videoUrl = "",
      includeText = false,
      text = "",
      textPosition = "bottom",
      showControls = false,
      showSuggestedVideos = false,
    } = input || {};

    const youtubeVideoId = extractYouTubeVideoId(videoUrl);
    const vimeoVideoId = youtubeVideoId ? null : extractVimeoVideoId(videoUrl);
    const hasText = includeText && Boolean(text?.trim?.());

    if (youtubeVideoId) {
      const src = buildYouTubeEmbedUrl(youtubeVideoId, showControls, showSuggestedVideos);
      const iframeHtml = `<div class="video-embed__ratio ratio ratio-16x9 d-print-none">
  <iframe
    class="video-embed__iframe"
    src="${esc(src)}"
    frameborder="0"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    loading="lazy"
    title="Embedded YouTube video"
  ></iframe>
</div>`;

      const content = renderContent(iframeHtml, hasText, text, textPosition);
      return `<div class="video-embed video-embed--${esc(textPosition)}">${content}</div>`;
    }

    if (vimeoVideoId) {
      const src = buildVimeoEmbedUrl(vimeoVideoId, showControls);
      const iframeHtml = `<div class="video-embed__ratio ratio ratio-16x9 d-print-none">
  <iframe
    class="video-embed-vimeo video-embed__iframe"
    src="${esc(src)}"
    frameborder="0"
    allow="autoplay; fullscreen"
    loading="lazy"
    title="Embedded Vimeo video"
  ></iframe>
</div>`;

      const content = renderContent(iframeHtml, hasText, text, textPosition);
      return `<div class="video-embed video-embed--${esc(textPosition)}">${content}</div>`;
    }

    if (!videoUrl) {
      return "";
    }

    const fallback = `<div class="video-embed__ratio ratio ratio-16x9 d-print-none">
  <div class="video-embed__fallback">Unable to load video. Check the provided URL.</div>
</div>`;
    const content = renderContent(fallback, hasText, text, textPosition);
    return `<div class="video-embed video-embed--${esc(textPosition)}">${content}</div>`;
  },
};
