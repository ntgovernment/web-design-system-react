import React from "react";
import "./Pagination.css";

type PaginationItem = number | "ellipsis";

export interface PaginationContentProps extends React.HTMLAttributes<HTMLElement> {
  currentPage?: number;
  totalPages?: number;
  siblingCount?: number;
  ariaLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  showPrevNext?: boolean;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const clampPage = (value: number, totalPages: number) =>
  Math.min(Math.max(value, 1), totalPages);

const getPaginationItems = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
): PaginationItem[] => {
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return range(1, totalPages);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = siblingCount * 2 + 3;
    return [...range(1, leftItemCount), "ellipsis", totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = siblingCount * 2 + 3;
    return [
      1,
      "ellipsis",
      ...range(totalPages - rightItemCount + 1, totalPages),
    ];
  }

  return [
    1,
    "ellipsis",
    ...range(leftSiblingIndex, rightSiblingIndex),
    "ellipsis",
    totalPages,
  ];
};

export const PaginationContent = ({
  currentPage = 10,
  totalPages = 21,
  siblingCount = 1,
  ariaLabel = "Pagination",
  previousLabel = "Previous",
  nextLabel = "Next",
  showPrevNext = true,
  onPageChange,
  getPageHref = (page: number) => `#page-${page}`,
  className,
  ...props
}: PaginationContentProps) => {
  const safeTotalPages = Math.max(totalPages, 0);

  if (safeTotalPages <= 1) {
    return null;
  }

  const safeCurrentPage = clampPage(currentPage, safeTotalPages);
  const paginationItems = getPaginationItems(
    safeCurrentPage,
    safeTotalPages,
    siblingCount,
  );

  const wrapperClassName = `content-pagination${
    className ? ` ${className}` : ""
  }`;

  const handlePageClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    page: number,
  ) => {
    if (!onPageChange) {
      return;
    }

    event.preventDefault();

    if (page === safeCurrentPage) {
      return;
    }

    onPageChange(page);
  };

  return (
    <nav aria-label={ariaLabel} className={wrapperClassName} {...props}>
      <ul className="pagination content-pagination__list">
        {showPrevNext && safeCurrentPage > 1 ? (
          <li className="page-item">
            <a
              className="page-link content-pagination__control"
              href={getPageHref(safeCurrentPage - 1)}
              aria-label="Go to previous page"
              onClick={(event) => handlePageClick(event, safeCurrentPage - 1)}
            >
              <i className="fa-light fa-chevron-left" aria-hidden="true" />
              {previousLabel}
            </a>
          </li>
        ) : null}

        {paginationItems.map((item, index) => {
          if (item === "ellipsis") {
            return (
              <li
                key={`ellipsis-${index}`}
                className="page-item disabled content-pagination__ellipsis"
                aria-hidden="true"
              >
                <span className="page-link">...</span>
              </li>
            );
          }

          if (item === safeCurrentPage) {
            return (
              <li
                key={`page-${item}`}
                className="page-item active"
                aria-current="page"
              >
                <span className="page-link">{item}</span>
              </li>
            );
          }

          return (
            <li key={`page-${item}`} className="page-item">
              <a
                className="page-link"
                href={getPageHref(item)}
                aria-label={`Go to page ${item}`}
                onClick={(event) => handlePageClick(event, item)}
              >
                {item}
              </a>
            </li>
          );
        })}

        {showPrevNext && safeCurrentPage < safeTotalPages ? (
          <li className="page-item">
            <a
              className="page-link content-pagination__control"
              href={getPageHref(safeCurrentPage + 1)}
              aria-label="Go to next page"
              onClick={(event) => handlePageClick(event, safeCurrentPage + 1)}
            >
              {nextLabel}
              <i className="fa-light fa-chevron-right" aria-hidden="true" />
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
