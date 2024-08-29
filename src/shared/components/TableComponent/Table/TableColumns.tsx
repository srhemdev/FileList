import { TableColumnsProps } from "../types/tableTypes";

/**
 * Table Columns component.
 *
 * @component
 * @param props - The props of the component.
 * @param {string[]} props.columns - The data to be passed to the table columns header.
 * @returns The rendered Table Columns component.
 */

const TableColumns: React.FC<TableColumnsProps> = ({ columns }) => {
  return (
    <tr>
      <th key="empty"></ th>
      {columns.map((col, index) => <th key={col} role="columnheader" aria-colindex={index + 1}>{col}</th>)}
    </tr>
  )
}

export default TableColumns;