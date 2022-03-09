import React, { useState } from 'react';
import ModalContext, { ModalContextProps } from './ModalContext';

const ModalState: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const valueContext: ModalContextProps = { isOpen, openModal, closeModal };

  return (
    <ModalContext.Provider value={valueContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
