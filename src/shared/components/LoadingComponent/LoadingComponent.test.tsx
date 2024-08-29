import { render, screen, fireEvent } from '@testing-library/react';
import LoadingComponent from './LoadingComponent';

describe("Loading Component", () => {
  it("renders loading component with message", () => {
    render(<LoadingComponent message="Page is loading..." />);
    const loadingComponentElement = screen.getByText(/Page is loading.../i);
    expect(loadingComponentElement).toBeInTheDocument();
  });
});