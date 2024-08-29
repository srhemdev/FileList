import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe("Button Component", () => {
  it("renders button with text", () => {
    render(<Button buttonType="clear" >Test</Button>);
    const buttonElement = screen.getByText(/Test/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders disabled button", () => {
    render(<Button buttonType="clear" disabled={true}>Test</Button>);
    const buttonElement = screen.getByText(/Test/i);
    expect(buttonElement).toBeDisabled();
  });
  it("triggers click button", () => {
    const onClick = jest.fn();
    render(<Button buttonType="clear" onClick={onClick}>Test</Button>);
    const buttonElement = screen.getByText(/Test/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
