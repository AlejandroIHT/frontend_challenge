import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchCharacterName from './SearchCharacterName';

jest.mock('../../hooks/useCharacters', () => ({
  __esModule: true,
  default: () => ({
    isFetching: false,
    refetch: jest.fn(),
  }),
}));

describe('SearchCharacterName', () => {
  test('should render', () => {
    render(<SearchCharacterName />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('should change event', () => {
    render(<SearchCharacterName />);
    const searchInput = screen.getByTestId('input-search');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput).toHaveValue('test');
  });
});
