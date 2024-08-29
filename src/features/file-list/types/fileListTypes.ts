import { TableConfigProps } from "../../../shared/components/TableComponent/types/tableTypes";

/**
 * File List & Component Props
 */
export interface FileProps {
  id?: string;
  name: string;
  device: string;
  path: string;
  status: string;
}

export enum FileStatus {
  available = "available",
  scheduled = "scheduled"
}

export interface FileListProps {
  data: FileProps[];
  config: TableConfigProps;
}

export type FileStatusProps = {
  status: FileStatus;
}
