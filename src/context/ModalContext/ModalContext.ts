import React, { createContext } from 'react';

export interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export default ModalContext;