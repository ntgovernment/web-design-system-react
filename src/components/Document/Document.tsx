import React from "react";
import "./Document.css";
import "./Document-ntg.css";
import "./Document-central.css";
import { Icon } from "../Icon";

export type DocumentFileType =
  | "docx"
  | "doc"
  | "pdf"
  | "xlsx"
  | "xls"
  | "pptx"
  | "ppt";

export interface DocumentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Document title (displayed as a download/view link) */
  title: string;
  /** URL to download or view the document */
  href: string;
  /** File type/extension for icon mapping and metadata display */
  fileType: DocumentFileType;
  /** File size label (e.g., "182 KB", "2.4 MB") */
  fileSize: string;
  /** Optional description to add context */
  description?: string;
  /** Optional ARIA label for the title link */
  ariaLabel?: string;
  /** Optional override for metadata (replaces "TYPE | SIZE") */
  metadata?: string;
  /** Link target for the document */
  target?: React.HTMLAttributeAnchorTarget;
  /** Link rel attribute (recommended when using target="_blank") */
  rel?: string;
  /** Add download attribute to the link */
  download?: boolean;
}

const fileTypeConfig: Record<
  DocumentFileType,
  { label: string; icon: string }
> = {
  docx: { label: "DOCX", icon: "fa-light fa-file-word" },
  doc: { label: "DOC", icon: "fa-light fa-file-word" },
  pdf: { label: "PDF", icon: "fa-light fa-file-pdf" },
  xlsx: { label: "XLSX", icon: "fa-light fa-file-excel" },
  xls: { label: "XLS", icon: "fa-light fa-file-excel" },
  pptx: { label: "PPTX", icon: "fa-light fa-file-powerpoint" },
  ppt: { label: "PPT", icon: "fa-light fa-file-powerpoint" },
};

/**
 * Document component for displaying downloadable or viewable files.
 */
export const Document = ({
  title,
  href,
  fileType,
  fileSize,
  description,
  ariaLabel,
  metadata,
  target,
  rel,
  download,
  className = "",
  ...htmlProps
}: DocumentProps) => {
  const typeConfig = fileTypeConfig[fileType];
  const metadataText =
    metadata?.trim() || `${typeConfig.label} | ${fileSize}`.trim();
  const resolvedRel = target === "_blank" && !rel ? "noreferrer" : rel;

  return (
    <div className={`document ${className}`.trim()} {...htmlProps}>
      <div className="document__header d-flex gap-2">
        <div className="document__icon-wrapper" aria-hidden="true">
          <div className="document__icon" aria-hidden="true">
            <Icon icon={typeConfig.icon} />
          </div>
        </div>
        <div className="document__meta">
          <a
            className="document__title"
            href={href}
            aria-label={ariaLabel}
            target={target}
            rel={resolvedRel}
            download={download}
          >
            {title}
          </a>
          <div className="document__info">{metadataText}</div>
        </div>
      </div>
      {description && (
        <div className="document__description">{description}</div>
      )}
    </div>
  );
};
