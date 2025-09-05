"use client";

import { useSelector } from "react-redux";

interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  render?: (row: T, index: number) => React.ReactNode;
}

interface TableHeaderProps<T> {
  columns: Column<T>[];
}

const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {

  const { selected } = useSelector((state: any) => state.category)

  return (
    <thead className={`${selected === "makeup" ? "bg-mBtnBg/20" : "bg-sBtnBg/20"}`}>
      <tr>
        {columns.map((column) => (
          <th
            key={String(column.key)}
            className="px-6 py-4 text-left text-sm tracking-wider"
            style={{
              width: column.width || 'auto',
              minWidth: column.width || 'auto'
            }}
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHeader;


