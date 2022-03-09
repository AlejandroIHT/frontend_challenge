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

  test('should click gender button', () => {
    const { container } = render(<FilterModal />);

    const genderBtn = screen.getAllByTestId('gender-button');
    if (genderBtn) fireEvent.click(genderBtn[0]);

    expect(
      container.querySelector('.filter-button--active')
    ).toBeInTheDocument();
  });

  test('should click status button', () => {
    const { container } = render(<FilterModal />);

    const statusBtn = screen.getAllByTestId('status-button');
    if (statusBtn) fireEvent.click(statusBtn[0]);

    expect(
      container.querySelector('.filter-button--active')
    ).toBeInTheDocument();
  });

  test('spinner should not be', () => {
    const { container } = render(<FilterModal />);

    expect(
      container.querySelector('.filter-modal__spinner')
    ).not.toBeInTheDocument();
  });
});
