/**
 * Types for Table, Table Columns, Table Header Component
 */
export type TableConfigProps = {
  name: string;
  accessor: string;
  width?: string | number;
  Component?: (row: any) => React.ReactNode | JSX.Element;
}[];

export interface TableHeaderProps {
  data: any;
  onDownload: (items: any) => void;
}

export interface TableProps {
  data: any;
  config: TableConfigProps;
}

export type TableColumnsProps = {
  columns: string[];
}