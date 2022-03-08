import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import InformationWithIcon from './/InformationWithIcon';

//jest.mock('@fortawesome/react-fontawesome');
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <div>FontAwesomeIcon</div>,
}));

describe('InformationWithIcon', () => {
  test('should render', () => {
    const { container } = render(
      <InformationWithIcon
        icon="faFilter"
        title="title information"
        description="description"
      />
    );
    expect(
      container.querySelector('.information-with-icon')
    ).toBeInTheDocument();
    expect(screen.getByText('title information:')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();
  });
});
