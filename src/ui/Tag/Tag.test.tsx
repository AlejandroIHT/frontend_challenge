import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';
import { TagType } from './Tag.type';

describe('Tag component', () => {
  test('should render', () => {
    const { container } = render(<Tag type={TagType.PRIMARY}>Tag</Tag>);
    expect(screen.getByText('Tag')).toBeInTheDocument();
    expect(container.querySelector('.tag--primary')).toBeInTheDocument();
  });

  test('should render secondary tag', () => {
    const { container } = render(<Tag type={TagType.SECONDARY}>Tag</Tag>);
    expect(screen.getByText('Tag')).toBeInTheDocument();
    expect(container.querySelector('.tag--secondary')).toBeInTheDocument();
  });

  test('should render with className', () => {
    const { container } = render(
      <Tag type={TagType.PRIMARY} className="test">
        Tag
      </Tag>
    );
    expect(screen.getByText('Tag')).toBeInTheDocument();
    expect(container.querySelector('.test')).toBeInTheDocument();
  });
});
