import React, { useRef, useState, useEffect } from "react";
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Button from "../Button/Button";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

/**
 * Modal component.
 *
 * @component
 * @param props - The props of the component.
 * @param {boolean} props.isOpen - Condition if modal is open.
 * @param {boolean} props.hasCloseBtn - Condition if modal needs close button.
 * @param {Function} props.onClose - The onClose handler is triggered on cancel button click.
 * @param {React.ReactNode} props.children - Conent to be displayed in the modal.
 * @returns The rendered Modal component.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (modalRef.current) {
      if (isModalOpen) {
        modalRef.current?.showModal();
      } else {
        modalRef.current?.close();
      }
    }
  }, [modalRef, isModalOpen]);

  return (
    <>
      {createPortal(
        (
          <dialog ref={modalRef} onKeyDown={handleKeyDown} className="modal">
            {hasCloseBtn && (
              <Button buttonType="clear" addClassName="modal-close-btn" onClick={handleCloseModal} aria-label="modal-close-btn">
                <FontAwesomeIcon icon={faClose} />
              </Button>
            )}
            {children}
          </dialog>
        ),
        document.body
      )}
    </>
  );
}

export default Modal;