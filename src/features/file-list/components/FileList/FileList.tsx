import { useState } from "react";
import { FileListProps, FileProps, FileStatus } from "../../types/fileListTypes";
import TableComponent from "../../../../shared/components/TableComponent/TableComponent";
import FileModal from "../FileModal/FileModal";

/**
 * File List component.
 * 
 * @component
 * @param props - The props of the component
 * @param {FileProps[]} props.data - The data to be passed to the Table component.
 * @param {TableConfigProps} props.config - props.config - The config to be passed to the Table component.
 * @returns The rendered File List component.
 */

const FileList: React.FC<FileListProps> = ({ data, config }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<FileProps[]>([]);
  const onDownload = (items: Map<string, FileProps>) => {
    setIsModalOpen(true);
    const vals = Array.from(items.values());
    const downloadableFiles: FileProps[] = vals.filter((item: FileProps) => item.status === FileStatus.available);
    setSelectedFiles(downloadableFiles);
  }
  return (
    <>
      <TableComponent data={data} config={config} onDownload={onDownload} />
      <FileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} selectedFiles={selectedFiles} />
    </>
  );
}

export default FileList;