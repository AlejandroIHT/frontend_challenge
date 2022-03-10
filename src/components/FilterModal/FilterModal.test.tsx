import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import FilterModal from './FilterModal';
import ModalContext from '../../context/ModalContext/ModalContext';

jest.mock('../../hooks/useCharacters', () => ({
  __esModule: true,
  default: () => ({
    isFetching: false,
    refetch: jest.fn(),
  }),
}));

jest.mock('../../ui/Modal', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('FilterModal', () => {
  test('should render', () => {
    const { container } = render(<FilterModal />);

    expect(container.querySelector('.filter-modal')).toBeInTheDocument();
    expect(screen.getByText('alive')).toBeInTheDocument();
    expect(screen.getByText('female')).toBeInTheDocument();
  });

  test('spinner should not be', () => {
    const { container } = render(<FilterModal />);

    expect(
      container.querySelector('.filter-modal__spinner')
    ).not.toBeInTheDocument();
  });
});
