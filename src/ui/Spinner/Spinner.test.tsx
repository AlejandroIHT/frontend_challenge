import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('should render', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });

  test('should render with className', () => {
    const { container } = render(<Spinner className="test" />);
    expect(container.querySelector('.test')).toBeInTheDocument();
  });
});
