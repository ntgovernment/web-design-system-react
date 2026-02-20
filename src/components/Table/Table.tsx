import React from "react";
import "./Table.css";

type TableVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

type TableResponsive = "none" | "always" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface TableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  caption?: string;
  columns?: string[];
  rows?: string[][];
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  hover?: boolean;
  size?: "md" | "sm";
  responsive?: TableResponsive;
  variant?: TableVariant;
}

const defaultColumns = [
  "Header text",
  "Header text",
  "Header text",
  "Header text",
];

const defaultRows = [
  ["Cell text", "Cell text", "Cell text", "Cell text"],
  ["Cell text", "Cell text", "Cell text", "Cell text"],
  ["Cell text", "Cell text", "Cell text", "Cell text"],
  ["Cell text", "Cell text", "Cell text", "Cell text"],
  ["Cell text", "Cell text", "Cell text", "Cell text"],
  ["Cell text", "Cell text", "Cell text", "Cell text"],
];

const getResponsiveClass = (responsive: TableResponsive) => {
  if (responsive === "none") {
    return "";
  }
  if (responsive === "always") {
    return "table-responsive";
  }
  return `table-responsive-${responsive}`;
};

export const TableContent = ({
  caption = "Table example",
  columns = defaultColumns,
  rows = defaultRows,
  bordered = false,
  borderless = false,
  striped = true,
  hover = true,
  size = "md",
  responsive = "always",
  variant,
  className,
  ...props
}: TableContentProps) => {
  const containerClass = `content-table${className ? ` ${className}` : ""}`;
  const responsiveClass = getResponsiveClass(responsive);
  const tableClass = [
    "table",
    striped ? "table-striped" : "",
    hover ? "table-hover" : "",
    bordered ? "table-bordered" : "",
    borderless ? "table-borderless" : "",
    size === "sm" ? "table-sm" : "",
    variant ? `table-${variant}` : "",
    "content-table__table",
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperClass = responsiveClass || undefined;

  return (
    <div className={containerClass} {...props}>
      <div className={wrapperClass}>
        <table className={tableClass}>
          {caption ? (
            <caption className="content-table__caption">{caption}</caption>
          ) : null}
          <thead>
            <tr>
              {columns.map((label, index) => (
                <th scope="col" key={`${label}-${index}`}>
                  <span className="content-table__header">
                    <span>{label}</span>
                    <span className="content-table__sort" aria-hidden="true">
                      <i className="fa-light fa-chevron-up content-table__sort-icon" />
                      <i className="fa-light fa-chevron-down content-table__sort-icon" />
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
