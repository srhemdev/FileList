import "./FileListPage.css";
import { useState, useEffect } from 'react';
import { FileProps } from './types/fileListTypes';
import { getFiles } from './services/FileService';
import LoadingComponent from '../../shared/components/LoadingComponent/LoadingComponent';
import NoDataComponent from '../../shared/components/NoDataComponent/NoDataComponent';
import ErrorComponent from '../../shared/components/ErrorComponent/ErrorComponent';
import FileList from "./components/FileList/FileList";
import FileTableConfig from "./constants/FileTableConfig";

/**
 * File List Page component.
 * 
 * @returns {React.JSX.Element} The rendered File List Page component.
 */

const FileListPage = () => {
  const [filesData, setFilesData] = useState<FileProps[] | null>(null);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isFileListLoading, setIsFileListLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsFileListLoading(true);
        setShowErrorMessage(false);
        setErrorMessage("");
        const data = await getFiles();
        setFilesData(data);
      } catch (error: any) {
        setShowErrorMessage(true);
        let errMsg = '';
        if (error instanceof Error) {
          errMsg = error.message;
        }
        setErrorMessage(String(errMsg));
      } finally {
        setIsFileListLoading(false);
      }
    })();
  }, []);

  return (
    <div className="file-list-container">
      {isFileListLoading ? <LoadingComponent message="Loading Files" /> : (
        <>
          {!!filesData?.length && (
            <FileList data={filesData} config={FileTableConfig} />
          )}
          {filesData?.length === 0 && <NoDataComponent message="No Files Data" />}
          {showErrorMessage && <ErrorComponent message={`Sorry! There seems to be an error: ${errorMessage}. Please try reloading the page.`} />}
        </>
      )}
    </div >
  );
}

export default FileListPage;