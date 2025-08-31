"use client";

import { Column } from "./DataTable";

interface TableRowProps<T> {
  item: T;
  columns: Column<T>[];
  rowIndex: number;
}

const TableRow = <T,>({ item, columns, rowIndex }: TableRowProps<T>) => {
  return (
    <tr className="hover:bg-gray-50 text-sm">
      {columns.map((column, columnIndex) => (
        <td 
          key={columnIndex} 
          className="px-6 py-3"
          style={{ 
            width: column.width || 'auto',
            minWidth: column.width || 'auto'
          }}
        >
          <div className="overflow-hidden">
            {column.key === 'index' ? (
              <span className="text-sm text-bColor4">{rowIndex + 1}</span>
            ) : column.render ? (
              column.render(item)
            ) : (
              <span className="text-sm text-bColor4 block truncate">
                {String(item[column.key as keyof T] ?? '')}
              </span>
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};

export default TableRow;