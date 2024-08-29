import { FileStatus, FileProps } from "../types/fileListTypes";
import FileStatusComponent from "../components/FileStatusComponent/FileStatusComponent";

/**
 * File Table Config for Table Component.
 */
const FileTableConfig = [
  {
    name: "Name",
    accessor: "name",
    width: 175
  },
  {
    name: "Device",
    accessor: "device",
    width: 150
  },
  {
    name: "Path",
    accessor: "path"
  },
  {
    name: "Status",
    accessor: "status",
    Component: (row: FileProps) => {
      return <FileStatusComponent status={row.status as FileStatus} />
    }
  }
];

export default FileTableConfig;