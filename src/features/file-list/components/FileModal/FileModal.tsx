
import "./FileModal.css";
import Modal from '../../../../shared/components/Modal/Modal';
import { FileModalProps } from "../../types/fileModalTypes";
import { FileProps } from "../../types/fileListTypes";

/**
 * File Modal component.
 *
 * @component
 * @param props - The props of the component.
 * @param {boolean} props.isOpen - Condition to check if the file modal is open.
 * @param {() => void} props.setIsOpen - Function to open/close the file modal.
 * @param {FileProps[]} props.selectedFiles - The selected files from the files table.
 * @returns The rendered File Modal component.
 */

const FileModal: React.FC<FileModalProps> = ({ isOpen, setIsOpen, selectedFiles }) => {
  return (
    <Modal isOpen={isOpen} hasCloseBtn onClose={() => setIsOpen(false)}>
      <div className="modal-content">
        <h3>The following available files can be downloaded:</h3>
        {selectedFiles.length === 0 && <div className="no-files-message">No Available Files</div>}
        {selectedFiles.length > 0 && (
          <ul className="selected-files-list">
            {selectedFiles.map((file: FileProps) => (
              <li key={file.id}>
                <div><b>Path:</b>{file.path}</div>
                <div><b>Device:</b> {file.device}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  )
}

export default FileModal;