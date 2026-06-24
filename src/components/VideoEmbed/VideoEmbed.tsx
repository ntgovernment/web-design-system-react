import "./VideoEmbed.css";

export interface VideoEmbedProps {
  /** YouTube or Vimeo URL to embed */
  videoUrl: string;
  /** Whether to render the optional text block */
  includeText?: boolean;
  /** Optional supporting text displayed alongside the video */
  text?: string;
  /** Position of the optional text relative to the video */
  textPosition?: "left" | "right" | "top" | "bottom";
  /** Show player controls */
  showControls?: boolean;
  /** Show suggested videos after playback (YouTube only) */
  showSuggestedVideos?: boolean;
  /** Additional CSS class names to apply */
  className?: string;
}

const extractYouTubeVideoId = (url: string): string | null => {
  if (!url) return null;

  try {
    const trimmedUrl = url.trim();

    // Support bare IDs
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmedUrl)) {
      return trimmedUrl;
    }

    const parsed = new URL(trimmedUrl);
    const hostname = parsed.hostname.replace("www.", "").toLowerCase();

    if (hostname === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
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
};

const extractVimeoVideoId = (url: string): string | null => {
  if (!url) return null;

  try {
    const trimmedUrl = url.trim();
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
};

const buildYouTubeEmbedUrl = (
  videoId: string,
  showControls: boolean,
  showSuggestedVideos: boolean,
): string => {
  const params = new URLSearchParams();
  params.set("rel", showSuggestedVideos ? "1" : "0");
  params.set("controls", showControls ? "1" : "0");

  return `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`;
};

const buildVimeoEmbedUrl = (
  videoId: string,
  showControls: boolean,
): string => {
  const params = new URLSearchParams();
  params.set("controls", showControls ? "1" : "0");
  params.set("autoplay", "0");
  params.set("loop", "0");

  return `https://player.vimeo.com/video/${encodeURIComponent(videoId)}?${params.toString()}`;
};

export const VideoEmbed = ({
  videoUrl,
  includeText = false,
  text,
  textPosition = "bottom",
  showControls = false,
  showSuggestedVideos = false,
  className = "",
}: VideoEmbedProps) => {
  const youtubeVideoId = extractYouTubeVideoId(videoUrl);
  const vimeoVideoId = youtubeVideoId ? null : extractVimeoVideoId(videoUrl);
  const hasText = includeText && Boolean(text?.trim());

  const embedNode = youtubeVideoId ? (
    <iframe
      className="video-embed__iframe"
      src={buildYouTubeEmbedUrl(youtubeVideoId, showControls, showSuggestedVideos)}
      title="Embedded YouTube video"
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      loading="lazy"
    />
  ) : vimeoVideoId ? (
    <iframe
      className="video-embed-vimeo video-embed__iframe"
      src={buildVimeoEmbedUrl(vimeoVideoId, showControls)}
      title="Embedded Vimeo video"
      frameBorder="0"
      allow="autoplay; fullscreen"
      loading="lazy"
    />
  ) : (
    <div className="video-embed__fallback">Unable to load video. Check the provided URL.</div>
  );

  const wrapperClasses = ["video-embed", `video-embed--${textPosition}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {hasText && textPosition === "top" && (
        <div className="video-embed__text video-embed__text--top">{text}</div>
      )}

      <div className="video-embed__content">
        {hasText && textPosition === "left" && (
          <div className="video-embed__text video-embed__text--left">{text}</div>
        )}

        <div className="video-embed__ratio ratio ratio-16x9 d-print-none">{embedNode}</div>

        {hasText && textPosition === "right" && (
          <div className="video-embed__text video-embed__text--right">{text}</div>
        )}
      </div>

      {hasText && textPosition === "bottom" && (
        <div className="video-embed__text video-embed__text--bottom">{text}</div>
      )}
    </div>
  );
};
