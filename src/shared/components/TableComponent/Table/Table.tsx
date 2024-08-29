import "./Table.css";
import { useMemo } from "react";
import { TableProps } from "../types/tableTypes";
import TableColumns from "./TableColumns";
import TableRow from "./TableRow";

/**
 * A simple Table component.
 *
 * @component
 * @param props - The props of the component.
 * @param {any} props.data - The data to be passed to the table.
 * @param {TableConfigProps} props.config - The table config to be passed to the table.
 * @returns The rendered Table component.
 */

const Table: React.FC<TableProps> = ({ data, config }) => {
  const columns = useMemo(() => {
    return config.map(({ name }) => name);
  }, [config])
  return (
    <table>
      <thead>
        <TableColumns columns={columns} />
      </thead>
      <tbody>
        {data.map((item: any, index: number) => {
          return (
            <TableRow key={index} data={item} config={config} aria-rowindex={index + 1} />
          )
        })}
      </tbody>
    </table>

  )
}

export default Table;
