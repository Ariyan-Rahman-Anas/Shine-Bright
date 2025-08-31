"use client";

// import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
// import SingleSelectDropdown from "../SingleSelectDropdown";

interface TablePaginationProps {
  paginationOptions?: {
    count?: number;
    current_page?: number;
    next_page?: number;
    num_pages?: number;
  };
  pageSize?: number;
  setPageSize?: (newPageSize: number) => void;
  onPageChange?: (page: number) => void;
}

const TablePagination = ({
  paginationOptions,
  pageSize,
  setPageSize,
  onPageChange,
}: TablePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(paginationOptions?.current_page ?? 1);
  const totalPages = paginationOptions?.num_pages ?? 1;

  useEffect(() => {
    if (paginationOptions?.current_page !== undefined) {
      setCurrentPage(paginationOptions.current_page);
    }
  }, [paginationOptions?.current_page]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      onPageChange?.(pageNumber);
    }
  };

  console.log(pageSize, setPageSize)

  // Calculate the range of page numbers to display (Google style - 5 pages at a time)
  const getVisiblePageNumbers = () => {
    // Display 3 page numbers + first and last page at a time 
    const pagesToShow = 3;

    // Calculate the center position
    let start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    let end = start + pagesToShow - 1;

    // Adjust if we're near the end
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - pagesToShow + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePageNumbers = getVisiblePageNumbers();
  const showFirstPage = visiblePageNumbers[0] > 1;
  const showLastPage = visiblePageNumbers[visiblePageNumbers?.length - 1] < totalPages;

  return (
    <div className="flex items-center justify-between py-4">
      {/* <div className="flex items-center space-x-2">
        <span className="text-sm">Page Size</span>
        <SingleSelectDropdown
          options={[
            { value: "10", label: "10" },
            { value: "15", label: "15" },
            { value: "20", label: "20" },
            { value: "25", label: "25" },
            { value: "30", label: "30" },
            { value: "40", label: "40" },
            { value: "50", label: "50" },
          ]}
          value={pageSize?.toString()}
          onChange={(value) => setPageSize?.(Number(value.value))}
        />
      </div> */}

      <div className="flex items-center space-x-1">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-2 py-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          aria-label="Previous page"
        >
          {/* <ChevronLeft className="h-4 w-4" /> */}
        </button>

        {/* Custom pagination */}
        <div className="flex items-center space-x-1">
          {/* Show first page and ellipsis if needed */}
          {showFirstPage && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm"
              >
                1
              </button>
              {visiblePageNumbers[0] > 2 && (
                <span className="w-7 h-7 flex items-center justify-center text-sm">
                  ...
                </span>
              )}
            </>
          )}

          {/* Visible page numbers */}
          {visiblePageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              aria-current={currentPage === number ? "page" : undefined}
              className={`w-7 h-7 rounded-md flex items-center justify-center text-sm ${currentPage === number
                  ? "bg-midnightBlueLight text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {number}
            </button>
          ))}

          {/* Show ellipsis and last page if needed */}
          {showLastPage && (
            <>
              {visiblePageNumbers[visiblePageNumbers?.length - 1] < totalPages - 1 && (
                <span className="w-7 h-7 flex items-center justify-center text-sm">
                  ...
                </span>
              )}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          aria-label="Next page"
        >
          {/* <ChevronRight className="h-4 w-4" /> */}
        </button>
      </div>
    </div>
  );
};

export default TablePagination;