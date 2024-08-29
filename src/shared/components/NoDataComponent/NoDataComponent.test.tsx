import { render, screen, fireEvent } from '@testing-library/react';
import NoDataComponent from './NoDataComponent';

describe("No Data Component", () => {
  it("renders no data component with message", () => {
    render(<NoDataComponent message="No data available." />);
    const noDataComponentElement = screen.getByText(/No data available./i);
    expect(noDataComponentElement).toBeInTheDocument();
  });
});