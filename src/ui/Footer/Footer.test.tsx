import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div>FontAwesomeIcon</div>,
}));

describe('Footer', () => {
  test('should render', () => {
    const { container } = render(<Footer />);
    expect(screen.getByText('Alejandro Herrera Turra')).toBeInTheDocument();
    expect(container.querySelector('.footer')).toBeInTheDocument();
  });
});
