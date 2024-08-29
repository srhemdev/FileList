import { FileListProps } from "../types/fileListTypes";

/**
 * Service to get the Files data.
 * @returns Promise<FileListProps | any>
 */
export async function getFiles(): Promise<FileListProps | any> {
  try {
    const data = (await fetch('./data/fileData.json')).json();
    return data;
  } catch (error) {
    return error;
  }
}
