import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  const modalElement =
    document.getElementById('modal') || document.createElement('div');

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal__container">{children}</div>
    </div>,
    modalElement
  );
};

export default Modal;
