import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe("Modal Component", () => {
  it("renders modal component", () => {
    render(<Modal isOpen>This is a modal</Modal>);
    const modalElement = screen.getByText(/This is a modal/i);
    expect(modalElement).toBeInTheDocument();
  });
  it("renders close button", () => {
    render(<Modal isOpen hasCloseBtn>This is a modal</Modal>);
    const modalElement = screen.getByText(/This is a modal/i);
    const closeBtn = modalElement.querySelector(".modal-close-btn");
    expect(closeBtn).toBeInTheDocument();
  });
  it("renders modal component", () => {
    const onClose = jest.fn();
    render(<Modal isOpen hasCloseBtn onClose={onClose}>This is a modal</Modal>);
    const modalElement = screen.getByText(/This is a modal/i);
    const closeBtn = modalElement.querySelector(".modal-close-btn");
    if (closeBtn) {
      fireEvent.click(closeBtn);
      expect(onClose).toHaveBeenCalled();
    }
  });
});