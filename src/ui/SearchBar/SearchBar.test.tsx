import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  test('should render', () => {
    const { container } = render(<SearchBar />);
    expect(container.querySelector('.search-bar')).toBeInTheDocument();
  });

  test('should render with className', () => {
    const { container } = render(<SearchBar className="test" />);
    expect(container.querySelector('.test')).toBeInTheDocument();
  });

  test('should render with placeholder', () => {
    const { container } = render(<SearchBar placeholder="test" />);
    expect(screen.getByPlaceholderText('test')).toBeInTheDocument();
  });

  test('should render with isLoading', () => {
    const { container } = render(<SearchBar isLoading />);
    expect(
      container.querySelector('.search-bar__wrapper-icon--loading')
    ).toBeInTheDocument();
  });
});
