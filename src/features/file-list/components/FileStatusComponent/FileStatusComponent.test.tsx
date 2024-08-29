import { render, screen } from '@testing-library/react';
import FileStatusComponent from './FileStatusComponent';
import { FileStatus } from '../../types/fileListTypes';

describe("File Status Component", () => {
  it("renders component with available status", () => {
    render(<FileStatusComponent status={FileStatus.available} />);
    const availableStatusElement = screen.getByText(/Available/i);
    expect(availableStatusElement).toBeInTheDocument();
  });

  it("renders component with scheduled status", () => {
    render(<FileStatusComponent status={FileStatus.scheduled} />);
    const scheduledStatusElement = screen.getByText(/Scheduled/i);
    expect(scheduledStatusElement).toBeInTheDocument();
  });
});
