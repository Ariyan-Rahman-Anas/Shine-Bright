"use client";

import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TableRow from "./TableRow";
import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | 'index' | string;
  header: string;
  render?: (item: T) => ReactNode;
  width?: string;
}

interface DataTableProps<T> {
  data?: T[];
  columns: Column<T>[];
  paginationOptions?: {
    count?: number;
    current_page?: number;
    next_page?: number;
    num_pages?: number;
  };
  pageSize?: number;
  setPageSize?: (newPageSize: number) => void;
  isError?: boolean;
  errorMessage?: string;
  onPageChange?: (newPage: number) => void;
}

const DataTable = <T,>({
  data,
  columns,
  paginationOptions,
  pageSize,
  setPageSize,
  isError = false,
  errorMessage = "",
  onPageChange,
}: DataTableProps<T>) => {

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-lg mt-4">
        {/* Fixed: Added table-fixed class and proper styling */}
        <table className="min-w-full table-fixed border-collapse">
          <TableHeader columns={columns} />
          <tbody className="dividey divide-gray200 text-bColor4">
            {isError ? (
              <tr>
                <td colSpan={columns?.length} className="text-center py-4 text-red-500">
                  {errorMessage}
                </td>
              </tr>
            ) : (
              data?.map((item, index) => (
                <TableRow
                  key={`row-${index}`}
                  item={item}
                  columns={columns}
                  rowIndex={index}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {paginationOptions && (
        <TablePagination
          paginationOptions={paginationOptions}
          pageSize={pageSize}
          setPageSize={setPageSize}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default DataTable;