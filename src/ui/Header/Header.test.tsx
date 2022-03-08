import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';

jest.mock('../../components/SearchCharacterName', () => ({
  __esModule: true,
  default: () => <div>SearchCharacterName</div>,
}));

jest.mock('../IconButton', () => ({
  __esModule: true,
  default: () => <div>IconButton</div>,
}));

describe('Header', () => {
  test('should render', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('.header')).toBeInTheDocument();
  });
});
