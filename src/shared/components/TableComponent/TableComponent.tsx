import { useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';
import Table from "./Table/Table";
import TableHeader from "./TableHeader/TableHeader";
import { TableProvider } from "./context/TableContext";
import { TableHeaderProps, TableProps } from "./types/tableTypes";

/**
 * A simple Table component.
 *
 * @component
 * @param props - The props of the component.
 * @param {any} props.data - The data to be passed to the table.
 * @param {TableConfigProps} props.config - The table config to be passed to the table.
 * @param {(items: any) => void} props.onDownload - The download event handler.
 * @returns The rendered Table component.
 */

const TableComponent: React.FC<TableProps & TableHeaderProps> = ({ data, config, onDownload }) => {
  const dataWithId = useMemo(() => {
    // Pass a unique id with each file item to uniquely identify it.
    return data?.map((item: any) => ({ ...item, id: uuidv4() }))
  }, [data]);
  return (
    <TableProvider>
      <TableHeader data={dataWithId} onDownload={onDownload} />
      <Table data={dataWithId} config={config} />
    </TableProvider>
  );
}

export default TableComponent;