import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

jest.mock('../../components/Header', () => ({
  __esModule: true,
  default: () => <div>Header</div>,
}));

jest.mock('../../components/FilterModal', () => ({
  __esModule: true,
  default: () => <div>FilterModal</div>,
}));

describe('Layout', () => {
  test('should render', () => {
    const { container } = render(<Layout>Layout test</Layout>);
    expect(container.querySelector('.layout')).toBeInTheDocument();
  });

  test('should render children', () => {
    render(<Layout>Layout test</Layout>);
    expect(screen.getByText('Layout test')).toBeInTheDocument();
  });
});
