import "./FileStatus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FileStatusProps } from "../../types/fileListTypes";
import { FILE_STATUS_COLORS, FILE_STATUS_LABELS } from '../../constants/constants';
import { FileStatus } from "../../types/fileListTypes";

/**
 * File Status component.
 *
 * @component
 * @param props - The props of the component.
 * @param {FileStatus} props.status - The status of the file.
 * @returns The rendered File Status component.
 */

const FileStatusComponent: React.FC<FileStatusProps> = ({ status }) => {
  return (
    <div className="file-status">
      <div>{status !== FileStatus.scheduled && <FontAwesomeIcon icon={faCircle} color={FILE_STATUS_COLORS[status]} />}</div>
      <span>{FILE_STATUS_LABELS[status]}</span>
    </div >
  )
}

export default FileStatusComponent;