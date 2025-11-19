// src/components/Modal.tsx
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  ariaLabel?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, ariaLabel, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={onClose} // click backdrop closes
    >
      <div
        className="modal-inner"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
