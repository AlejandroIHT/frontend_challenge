import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ActionButton from './ActionButton';
import { ActionButtonType } from './ActionButton.type';

describe('ActionButton component', () => {
  test('should render', () => {
    const { container } = render(
      <ActionButton typeButton={ActionButtonType.PRIMARY}>
        Action Button
      </ActionButton>
    );
    expect(screen.getByText('Action Button')).toBeInTheDocument();
    expect(container.querySelector('.action-button')).toBeInTheDocument();
  });

  test('should render primary button', () => {
    const { container } = render(
      <ActionButton typeButton={ActionButtonType.PRIMARY}>
        Action Button
      </ActionButton>
    );
    expect(screen.getByText('Action Button')).toBeInTheDocument();
    expect(
      container.querySelector('.action-button--primary')
    ).toBeInTheDocument();
  });

  test('should render secondary button', () => {
    const { container } = render(
      <ActionButton typeButton={ActionButtonType.SECONDARY}>
        Action Button
      </ActionButton>
    );
    expect(screen.getByText('Action Button')).toBeInTheDocument();
    expect(
      container.querySelector('.action-button--secondary')
    ).toBeInTheDocument();
  });

  test('should render with className', () => {
    const { container } = render(
      <ActionButton typeButton={ActionButtonType.PRIMARY} className="test">
        Action Button
      </ActionButton>
    );
    expect(screen.getByText('Action Button')).toBeInTheDocument();
    expect(container.querySelector('.test')).toBeInTheDocument();
  });
});
