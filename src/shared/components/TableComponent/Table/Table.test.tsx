import { render, screen, fireEvent } from '@testing-library/react';
import Table from './Table';

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

const TABLE_CONFIG = [
  {
    name: "Name",
    accessor: "name"
  },
  {
    name: "Device",
    accessor: "device"
  }
];

describe("Table Component", () => {
  it("renders table component with correct number of rows", () => {
    const { container } = render(<Table data={TABLE_DATA} config={TABLE_CONFIG} />);
    expect(container.querySelectorAll("tbody > tr").length).toBe(2);
  });

  it("renders table columns", () => {
    render(<Table data={TABLE_DATA} config={TABLE_CONFIG} />);
    const nameColumn = screen.getByText(/Name/i);
    const deviceColumn = screen.getByText(/Device/i);
    expect(nameColumn).toBeInTheDocument();
    expect(deviceColumn).toBeInTheDocument();
  });

  it("renders table rows with correct data", () => {
    render(<Table data={TABLE_DATA} config={TABLE_CONFIG} />);
    const nameLabel = screen.getByText(/smss.exe/i);
    const deviceLabel = screen.getByText(/Mario/i);
    expect(nameLabel).toBeInTheDocument();
    expect(deviceLabel).toBeInTheDocument();
  });

  it("allows to select/deselect a row", async () => {
    const { getAllByRole } = render(<Table data={TABLE_DATA} config={TABLE_CONFIG} />);
    const checkboxes = getAllByRole("checkbox");
    const headerCheckbox = checkboxes?.[0];
    if (headerCheckbox) {
      expect(headerCheckbox).toBeInTheDocument();
      fireEvent.change(headerCheckbox, { target: { checked: true } });
      expect(headerCheckbox).toBeChecked();
    }
  });
});