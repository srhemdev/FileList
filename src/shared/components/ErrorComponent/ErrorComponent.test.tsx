import { render, screen } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

describe("Error Component", () => {
  it("renders error component with message", () => {
    render(<ErrorComponent message="Oops an error occurred!" />);
    const errComponentElement = screen.getByText(/Oops an error occurred!/i);
    expect(errComponentElement).toBeInTheDocument();
  });
});