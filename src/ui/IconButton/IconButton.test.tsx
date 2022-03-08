import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div>FontAwesomeIcon</div>,
}));

describe('IconButton', () => {
  test('should render', () => {
    const { container } = render(<IconButton icon="faFilter" />);
    expect(container.querySelector('.icon-button')).toBeInTheDocument();
  });

  test('should render with className', () => {
    const { container } = render(
      <IconButton icon="faFilter" className="test" />
    );
    expect(container.querySelector('.test')).toBeInTheDocument();
  });
});
