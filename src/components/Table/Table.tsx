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
  title?: string;
  subtitle?: string;
  caption?: string;
  columns?: string[];
  rows?: string[][];
  showHeader?: boolean;
  sortable?: boolean;
  onSort?: (columnIndex: number, direction: "asc" | "desc") => void;
  boldFirstColumn?: boolean;
  stacked?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  striped?: boolean;
  hover?: boolean;
  size?: "md" | "sm";
  responsive?: TableResponsive;
  variant?: TableVariant;
}

const defaultColumns = ["Service", "Owner", "Status", "Last updated"];

const defaultRows = [
  ["Grants Portal", "Digital NT", "Active", "2 Feb 2026"],
  ["Vehicle Rego", "Transport", "Planned", "28 Jan 2026"],
  ["Licensing Hub", "Business NT", "Active", "18 Jan 2026"],
  ["Water Alerts", "Environment", "Paused", "12 Jan 2026"],
  ["Community Events", "NTG Central", "Active", "14 Dec 2025"],
  ["Parks Pass", "Tourism", "Active", "30 Nov 2025"],
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
  title,
  subtitle,
  caption = "Service status summary",
  columns = defaultColumns,
  rows = defaultRows,
  showHeader = true,
  sortable = false,
  onSort,
  boldFirstColumn = false,
  stacked = false,
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
  const containerClass = [
    "content-table",
    stacked ? "content-table--stacked" : "",
    boldFirstColumn ? "content-table--bold-first-column" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");
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

  const wrapperClass = ["content-table__wrapper", responsiveClass || ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass} {...props}>
      {title ? (
        <div className="content-table__heading">
          <h3 className="content-table__title">{title}</h3>
          {subtitle ? (
            <p className="content-table__subtitle">{subtitle}</p>
          ) : null}
        </div>
      ) : null}
      <div className={wrapperClass}>
        <table className={tableClass}>
          {caption ? (
            <caption className="content-table__caption">{caption}</caption>
          ) : null}
          {showHeader ? (
            <thead>
              <tr>
                {columns.map((label, index) => (
                  <th scope="col" key={`${label}-${index}`}>
                    <span className="content-table__header">
                      <span>{label}</span>
                      {sortable ? (
                        <span className="content-table__sort">
                          <button
                            className="content-table__sort-button"
                            type="button"
                            aria-label={`Sort by ${label} ascending`}
                            onClick={
                              onSort ? () => onSort(index, "asc") : undefined
                            }
                          >
                            <i
                              className="fa-light fa-chevron-up content-table__sort-icon"
                              aria-hidden="true"
                            />
                          </button>
                          <button
                            className="content-table__sort-button"
                            type="button"
                            aria-label={`Sort by ${label} descending`}
                            onClick={
                              onSort ? () => onSort(index, "desc") : undefined
                            }
                          >
                            <i
                              className="fa-light fa-chevron-down content-table__sort-icon"
                              aria-hidden="true"
                            />
                          </button>
                        </span>
                      ) : null}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
          ) : null}
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((cell, cellIndex) => {
                  const label = columns[cellIndex] || "";
                  const isFirstColumn = cellIndex === 0;

                  if (boldFirstColumn && isFirstColumn) {
                    return (
                      <th
                        key={`cell-${rowIndex}-${cellIndex}`}
                        scope="row"
                        data-label={label}
                      >
                        {cell}
                      </th>
                    );
                  }

                  return (
                    <td
                      key={`cell-${rowIndex}-${cellIndex}`}
                      data-label={label}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
