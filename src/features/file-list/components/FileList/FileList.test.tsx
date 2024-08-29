import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FileList from './FileList';
import FileTableConfig from "../../constants/FileTableConfig";

const TABLE_DATA = [
  {
    name: "smss.exe",
    device: "Mario",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    status: "scheduled"
  },
  {
    name: "netsh.exe",
    device: "Luigi",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
    status: "available"
  }
];

describe("File List Component", () => {
  it("renders table with given data and config", () => {
    render(<FileList data={TABLE_DATA} config={FileTableConfig} />);
    const nameLabel = screen.getByText(/^smss.exe/i);
    const deviceLabel = screen.getByText(/Mario/i);
    const pathLabel = screen.getByText(/\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe/i);
    const statusLabel = screen.getByText(/^Available/i);

    expect(nameLabel).toBeInTheDocument();
    expect(deviceLabel).toBeInTheDocument();
    expect(pathLabel).toBeInTheDocument();
    expect(statusLabel).toBeInTheDocument();
  });

  it("selects a file and updates selected count", () => {
    const { getAllByRole } = render(<FileList data={TABLE_DATA} config={FileTableConfig} />);
    const checkboxes = getAllByRole("checkbox");
    const firstTableCheckbox = checkboxes?.[1];
    expect(firstTableCheckbox).toBeInTheDocument();
  });

  it("clicks on Download Selected button which shows modal", () => {
    const { getByRole, getAllByRole } = render(<FileList data={TABLE_DATA} config={FileTableConfig} />);
    const downloadBtnElement = getByRole("button");
    const checkboxes = getAllByRole("checkbox");
    const firstTableCheckbox = checkboxes?.[1];
    if (firstTableCheckbox) {
      fireEvent.click(firstTableCheckbox);
      fireEvent.click(downloadBtnElement);
      const dialogElement = document.body.querySelector("dialog");
      expect(dialogElement).toBeInTheDocument();
    }
  });
});