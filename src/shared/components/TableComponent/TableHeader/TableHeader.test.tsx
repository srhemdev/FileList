import { render, screen, fireEvent } from '@testing-library/react';
import TableHeader from './TableHeader';

const TABLE_DATA = [
  {
    name: "smss.exe",
    device: "Mario"
  },
  {
    name: "netsh.exe",
    device: "Luigi"
  }
];

describe("Table Header Component", () => {
  it("renders None Selected text", () => {
    const onDownload = jest.fn();
    render(<TableHeader data={TABLE_DATA} onDownload={onDownload} />);
    expect(screen.getByText(/None Selected/i)).toBeInTheDocument;
  });

  it("renders download button", () => {
    const onDownload = jest.fn();
    render(<TableHeader data={TABLE_DATA} onDownload={onDownload} />);
    const downloadBtnElement = screen.getByText(/Download Selected/i);
    expect(downloadBtnElement).toBeInTheDocument();
    expect(downloadBtnElement.parentElement).toBeDisabled();
  });

  it("allows to select/deselect all checkbox", async () => {
    const onDownload = jest.fn();
    const { getByRole } = render(<TableHeader data={TABLE_DATA} onDownload={onDownload} />);;
    const inputElement = getByRole("checkbox");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { checked: true } });
    expect(inputElement).toBeChecked();
  });
});
