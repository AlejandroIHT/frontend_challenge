import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('FilterButton component', () => {
  test('should render', () => {
    const { container } = render(<FilterButton>Filter Button</FilterButton>);
    expect(screen.getByText('Filter Button')).toBeInTheDocument();
    expect(container.querySelector('.filter-button')).toBeInTheDocument();
  });

  test('should render active', () => {
    const { container } = render(
      <FilterButton isActive>Filter Button</FilterButton>
    );
    expect(screen.getByText('Filter Button')).toBeInTheDocument();
    expect(
      container.querySelector('.filter-button--active')
    ).toBeInTheDocument();
  });

  test('should render with className', () => {
    const { container } = render(
      <FilterButton className="test">Filter Button</FilterButton>
    );
    expect(screen.getByText('Filter Button')).toBeInTheDocument();
    expect(container.querySelector('.test')).toBeInTheDocument();
  });
});
